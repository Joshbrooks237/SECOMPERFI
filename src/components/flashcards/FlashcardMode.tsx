"use client";

import { PORT_FLASHCARDS, type PortFlashcard } from "@/data/flashcardPorts";
import { shuffleArray } from "@/lib/shuffle";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const TIMER_SEC = 10;

export type DrillMode = "PORT_TO_SERVICE" | "SERVICE_TO_PORT";

function cardById(id: string): PortFlashcard | undefined {
  return PORT_FLASHCARDS.find((c) => c.id === id);
}

function buildFourOptions(correct: string, pool: string[]): { labels: string[]; correctIndex: number } {
  const wrong = shuffleArray(pool.filter((p) => p !== correct)).slice(0, 3);
  const labels = shuffleArray([correct, ...wrong]);
  const correctIndex = labels.indexOf(correct) as 0 | 1 | 2 | 3;
  return { labels, correctIndex };
}

export function FlashcardMode() {
  const [phase, setPhase] = useState<"intro" | "play" | "summary">("intro");
  const [drillMode, setDrillMode] = useState<DrillMode>("PORT_TO_SERVICE");
  const [passId, setPassId] = useState<0 | 1>(0);
  const [deckOrder, setDeckOrder] = useState<string[]>([]);
  const [idx, setIdx] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [missCount, setMissCount] = useState<Record<string, number>>({});
  const [missedPass0, setMissedPass0] = useState<Set<string>>(() => new Set());
  const [revealed, setRevealed] = useState(false);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIMER_SEC);
  const [mcq, setMcq] = useState<{ labels: string[]; correctIndex: number } | null>(null);
  const missedPass0Ref = useRef<Set<string>>(new Set());

  const servicePool = useMemo(() => PORT_FLASHCARDS.map((c) => c.serviceName), []);
  const portPool = useMemo(() => PORT_FLASHCARDS.map((c) => c.portDisplay), []);

  const currentId = deckOrder[idx];
  const current = currentId ? cardById(currentId) : undefined;

  const regenerateMcq = useCallback(
    (card: PortFlashcard, mode: DrillMode) => {
      if (mode === "PORT_TO_SERVICE") {
        setMcq(buildFourOptions(card.serviceName, servicePool));
      } else {
        setMcq(buildFourOptions(card.portDisplay, portPool));
      }
    },
    [servicePool, portPool],
  );

  const startSession = () => {
    const order = shuffleArray(PORT_FLASHCARDS.map((c) => c.id));
    setDeckOrder(order);
    setPassId(0);
    setIdx(0);
    setStreak(0);
    setMaxStreak(0);
    setMissCount({});
    const empty = new Set<string>();
    setMissedPass0(empty);
    missedPass0Ref.current = empty;
    setRevealed(false);
    setLastCorrect(null);
    setSelectedIndex(null);
    setTimeLeft(TIMER_SEC);
    const first = cardById(order[0]!);
    if (first) regenerateMcq(first, drillMode);
    setPhase("play");
  };

  useEffect(() => {
    missedPass0Ref.current = missedPass0;
  }, [missedPass0]);

  useEffect(() => {
    if (phase !== "play" || revealed || !current || !mcq) return;
    const cardId = current.id;
    let seconds = TIMER_SEC;
    setTimeLeft(seconds);
    const id = window.setInterval(() => {
      seconds -= 1;
      setTimeLeft(seconds);
      if (seconds <= 0) {
        window.clearInterval(id);
        setLastCorrect(false);
        setStreak(0);
        setSelectedIndex(null);
        setRevealed(true);
        setMissCount((m) => ({ ...m, [cardId]: (m[cardId] ?? 0) + 1 }));
        if (passId === 0) {
          setMissedPass0((prev) => {
            const n = new Set(prev);
            n.add(cardId);
            missedPass0Ref.current = n;
            return n;
          });
        }
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase, revealed, idx, current, mcq, passId]);

  const resolveAnswer = (choiceIndex: number) => {
    if (phase !== "play" || revealed || !current || !mcq) return;
    const ok = choiceIndex === mcq.correctIndex;
    setSelectedIndex(choiceIndex);
    setLastCorrect(ok);
    setRevealed(true);
    if (ok) {
      setStreak((s) => {
        const n = s + 1;
        setMaxStreak((mx) => Math.max(mx, n));
        return n;
      });
    } else {
      setStreak(0);
      setMissCount((m) => ({ ...m, [current.id]: (m[current.id] ?? 0) + 1 }));
      if (passId === 0) {
        setMissedPass0((prev) => {
          const n = new Set(prev);
          n.add(current.id);
          missedPass0Ref.current = n;
          return n;
        });
      }
    }
  };

  const goNext = () => {
    if (phase !== "play" || !revealed) return;
    if (idx < deckOrder.length - 1) {
      const nextId = deckOrder[idx + 1]!;
      const nextCard = cardById(nextId);
      setIdx((i) => i + 1);
      setRevealed(false);
      setLastCorrect(null);
      setSelectedIndex(null);
      if (nextCard) regenerateMcq(nextCard, drillMode);
      return;
    }
    if (passId === 0) {
      const missed = missedPass0Ref.current;
      if (missed.size > 0) {
        const repeat = shuffleArray([...missed]);
        setDeckOrder(repeat);
        setPassId(1);
        setIdx(0);
        setRevealed(false);
        setLastCorrect(null);
        setSelectedIndex(null);
        const first = cardById(repeat[0]!);
        if (first) regenerateMcq(first, drillMode);
        return;
      }
    }
    setPhase("summary");
  };

  const weakIds = useMemo(
    () => PORT_FLASHCARDS.filter((c) => (missCount[c.id] ?? 0) >= 2).map((c) => c.id),
    [missCount],
  );

  const promptLine =
    drillMode === "PORT_TO_SERVICE" ? "Port → pick the service" : "Service → pick the port";

  const frontContent =
    current &&
    (drillMode === "PORT_TO_SERVICE" ? (
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#00ff41]/50">{promptLine}</p>
        <p className="mt-4 font-mono text-3xl font-bold tracking-tight text-[#00ff41] sm:text-4xl">
          {current.portDisplay}
        </p>
        <p className="mt-3 font-mono text-xs text-[#00ff41]/60">Choose the service</p>
      </div>
    ) : (
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#00ff41]/50">{promptLine}</p>
        <p className="mt-4 px-2 font-mono text-base font-semibold leading-snug text-[#00ff41] sm:text-lg">
          {current.serviceName}
        </p>
        <p className="mt-3 font-mono text-xs text-[#00ff41]/60">Choose the port</p>
      </div>
    ));

  const backContent =
    current && (
      <div className="text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#00ff41]/45">Answer</p>
        <p className="mt-3 font-mono text-sm text-[#00ff41]">
          <span className="text-[#00ff41]/55">PORT</span> {current.portDisplay}
        </p>
        <p className="mt-1 font-mono text-sm text-[#00ff41]">
          <span className="text-[#00ff41]/55">SERVICE</span> {current.serviceName}
        </p>
      </div>
    );

  const timerPct = phase === "play" && !revealed ? (timeLeft / TIMER_SEC) * 100 : revealed ? 0 : 100;

  return (
    <div className="relative z-10 mx-auto flex min-h-full max-w-3xl flex-col px-3 py-8 sm:px-5 matrix-crt-ambient">
      <header className="mb-8 border-b border-matrix-dim pb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#00ff41]/55">
          Port flashcards
        </p>
        <h1 className="mt-2 font-mono text-lg font-semibold tracking-tight text-[#00ff41] sm:text-2xl">
          Port / service drill
        </h1>
        <Link
          href="/"
          className="mt-3 inline-block font-mono text-xs text-[#00ff41]/60 underline decoration-matrix-dim underline-offset-4 hover:text-[#00ff41]"
        >
          ← Back to diagnostic
        </Link>
      </header>

      {phase === "intro" && (
        <section className="flex flex-1 flex-col gap-6">
          <div className="border border-matrix-dim bg-matrix-deep/90 p-4 font-mono text-xs leading-relaxed text-[#00ff41]/85">
            <p className="text-[10px] text-[#00ff41]/45">How it works</p>
            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>30 common ports and services</li>
              <li>{TIMER_SEC}s per card</li>
              <li>Streak tracks consecutive correct answers</li>
              <li>Missed cards repeat once at the end of the deck</li>
              <li>Flagged weak if you miss the same card twice or more</li>
            </ul>
          </div>

          <fieldset className="border border-matrix-dim bg-[#000800]/90 p-4">
            <legend className="px-2 font-mono text-[10px] uppercase tracking-widest text-[#00ff41]/50">
              DRILL_MODE
            </legend>
            <div className="mt-3 flex flex-col gap-3 font-mono text-sm">
              <label className="flex cursor-pointer items-start gap-2 text-[#00ff41]">
                <input
                  type="radio"
                  name="drill"
                  checked={drillMode === "PORT_TO_SERVICE"}
                  onChange={() => setDrillMode("PORT_TO_SERVICE")}
                  className="mt-1 border-matrix-dim bg-black text-[#00ff41] focus:ring-[#00ff41]"
                />
                <span>PORT_TO_SERVICE — number shown; pick the service.</span>
              </label>
              <label className="flex cursor-pointer items-start gap-2 text-[#00ff41]">
                <input
                  type="radio"
                  name="drill"
                  checked={drillMode === "SERVICE_TO_PORT"}
                  onChange={() => setDrillMode("SERVICE_TO_PORT")}
                  className="mt-1 border-matrix-dim bg-black text-[#00ff41] focus:ring-[#00ff41]"
                />
                <span>SERVICE_TO_PORT — service shown; pick the port.</span>
              </label>
            </div>
          </fieldset>

          <button
            type="button"
            onClick={startSession}
            className="w-full max-w-xl border border-[#00ff41] bg-[#001a00] px-4 py-3 text-left font-mono text-sm text-[#00ff41] transition-colors hover:bg-[#003b00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41]"
          >
            <span>Start drill</span>
            <span className="matrix-cursor inline" aria-hidden />
          </button>
        </section>
      )}

      {phase === "play" && current && mcq && (
        <section className="flex flex-1 flex-col gap-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2 font-mono text-[10px] text-[#00ff41]/65 sm:text-xs">
            <span>
              {passId === 0 ? "Main deck" : "Reviewing misses"} · Card {idx + 1} of {deckOrder.length}
            </span>
            <span>{`Streak ${streak} · Best ${maxStreak}`}</span>
          </div>

          <div className="font-mono text-[10px] text-[#00ff41]/70">
            <div className="mb-1 flex justify-between">
              <span>Time left</span>
              <span>
                T_{String(timeLeft).padStart(2, "0")}s
                <span className="matrix-cursor-block inline" aria-hidden />
              </span>
            </div>
            <div className="matrix-buffer-track relative h-3 w-full overflow-hidden">
              <div
                className="matrix-buffer-fill absolute left-0 top-0 h-full transition-[width] duration-1000 linear"
                style={{ width: `${timerPct}%` }}
              />
            </div>
          </div>

          <div
            className={`matrix-flip-scene relative min-h-[200px] w-full max-w-xl self-center ${
              revealed ? "matrix-flip-glitch-once" : ""
            }`}
          >
            <div className={`matrix-flip-card relative min-h-[200px] w-full ${revealed ? "is-flipped" : ""}`}>
              <div className="matrix-flip-face absolute inset-0 flex flex-col justify-center border border-matrix-dim bg-[#001a00] p-6">
                {frontContent}
              </div>
              <div className="matrix-flip-face back absolute inset-0 flex flex-col justify-center border border-matrix-dim bg-[#003b00]/40 p-6">
                {backContent}
              </div>
            </div>
          </div>

          {revealed && (
            <div
              className={`max-w-xl self-center border p-4 font-mono text-sm ${
                lastCorrect === true
                  ? "matrix-access-flash border-[#00ff41] text-[#00ff41]"
                  : "matrix-breach-shake matrix-red-flicker border-[#ff0000] text-[#ff8888]"
              }`}
            >
              <p className="font-bold uppercase tracking-[0.25em]">
                {lastCorrect === true ? "Correct" : "Incorrect or time out"}
              </p>
              {lastCorrect !== true && (
                <p className="mt-2 text-xs leading-relaxed">
                  <span className="text-[#00ff41]/55">Expected · </span>
                  {drillMode === "PORT_TO_SERVICE" ? (
                    <>
                      {current.serviceName}
                      <span className="text-[#00ff41]/45"> {" // "} </span>
                      {current.portDisplay}
                    </>
                  ) : (
                    <>
                      {current.portDisplay}
                      <span className="text-[#00ff41]/45"> {" // "} </span>
                      {current.serviceName}
                    </>
                  )}
                </p>
              )}
            </div>
          )}

          <div className="grid gap-2 sm:grid-cols-2">
            {mcq.labels.map((label, i) => {
              const picked = selectedIndex === i;
              let cls =
                "w-full border border-matrix-dim bg-matrix-deep px-3 py-2.5 text-left font-mono text-xs text-[#00ff41] transition-colors hover:border-[#00ff41]/50 hover:bg-[#003b00]/40 sm:text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#00ff41] rounded-none ";
              if (revealed) {
                if (i === mcq.correctIndex) {
                  cls += " border-[#00ff41] bg-[#003b00]/60 ";
                } else if (picked) {
                  cls += " border-[#ff0000] bg-[#1a0000]/80 text-[#ff6666] ";
                } else {
                  cls += " opacity-45 ";
                }
              }
              return (
                <button
                  key={`${current.id}-${i}-${label}`}
                  type="button"
                  disabled={revealed}
                  onClick={() => resolveAnswer(i)}
                  className={cls}
                >
                  <span className="text-[#00ff41]/35">{">"}</span>{" "}
                  <span className="text-[#00ff41]/60">{`${String.fromCharCode(65 + i)})`}</span>{" "}
                  {label}
                </button>
              );
            })}
          </div>

          {revealed && (
            <button
              type="button"
              onClick={goNext}
              className="max-w-xl border border-[#00ff41] bg-[#001a00] px-4 py-3 text-left font-mono text-sm text-[#00ff41] hover:bg-[#003b00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41]"
            >
              Next card
              <span className="matrix-cursor inline" aria-hidden />
            </button>
          )}
        </section>
      )}

      {phase === "summary" && (
        <section className="flex flex-1 flex-col gap-5 pb-16 font-mono">
          <div className="border border-matrix-dim bg-matrix-deep/80 p-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#00ff41]/45">Session summary</p>
            <p className="mt-3 text-sm text-[#00ff41]">Best streak · {maxStreak}</p>
            <p className="mt-1 text-xs text-[#00ff41]/60">Current streak · {streak}</p>
          </div>

          {weakIds.length > 0 ? (
            <div className="border border-[#ff0000]/45 bg-[#120000]/70 p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff5555]">
                Ports to review (2+ misses)
              </p>
              <ul className="mt-2 space-y-2 text-xs text-[#ffaaaa]">
                {weakIds.map((id) => {
                  const c = cardById(id);
                  if (!c) return null;
                  return (
                    <li key={id}>
                      {`${c.portDisplay} · ${c.serviceName} · ${missCount[id]} misses`}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <p className="text-xs text-[#00ff41]/55">No ports flagged weak (under 2 misses each).</p>
          )}

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                setPhase("intro");
                setDeckOrder([]);
                setIdx(0);
              }}
              className="border border-matrix-dim bg-matrix-deep px-4 py-2.5 text-left text-xs text-[#00ff41] hover:border-[#00ff41]"
            >
              Change mode
            </button>
            <button
              type="button"
              onClick={startSession}
              className="border border-[#00ff41] bg-[#001a00] px-4 py-2.5 text-left text-xs font-semibold text-[#00ff41] hover:bg-[#003b00]"
            >
              New deck
            </button>
          </div>
        </section>
      )}
    </div>
  );
}
