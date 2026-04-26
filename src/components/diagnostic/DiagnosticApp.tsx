"use client";

import { FULL_BANK, QUESTION_COUNT } from "@/data/allQuestions";
import { shuffleArray } from "@/lib/shuffle";
import { computeResults } from "@/lib/scoring";
import type { Question, QuizResults } from "@/types/quiz";
import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { DomainBreakdownChart } from "./DomainBreakdownChart";
import {
  MatrixBufferProgress,
  MatrixGlitchHeading,
  MatrixTypewriter,
} from "./MatrixEffects";

type Phase = "intro" | "quiz" | "results";

function padSeq(n: number, width = 3) {
  return String(n).padStart(width, "0");
}

function examPathTag(q: Question) {
  return q.exam === "a-plus" ? "[220-1201]" : "[SY0-701]";
}

/** Display-only clearance line (mirrors verdict thresholds; does not change scoring). */
function cosmeticClearanceVector(r: QuizResults): string {
  const s = r.securityPlusWeightedPercent;
  const a = r.aPlusWeightedPercent;
  if (s >= 85) return "CLEARANCE_LEVEL: SECURITY+ // MAX";
  if (s >= 70 && s < 85) return "CLEARANCE_LEVEL: SECURITY+ // ELEVATED";
  if (s < 70 && a >= 80) return "CLEARANCE_LEVEL: A+ // FOUNDATION_LOCK";
  if (s < 70 && a < 70) return "CLEARANCE_LEVEL: A+ // BASELINE";
  return "CLEARANCE_LEVEL: SPLIT // RECALIBRATE";
}

export function DiagnosticApp() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<QuizResults | null>(null);
  const [exportStatus, setExportStatus] = useState<string | null>(null);
  const [bootFlicker, setBootFlicker] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setBootFlicker(false), 520);
    return () => window.clearTimeout(t);
  }, []);

  const total = QUESTION_COUNT;
  const current = questions[currentIndex];
  const progress = useMemo(() => {
    const n = currentIndex + (revealed ? 1 : 0);
    return Math.min(100, (n / total) * 100);
  }, [currentIndex, revealed, total]);

  const startQuiz = useCallback(() => {
    const shuffled = shuffleArray(FULL_BANK);
    setQuestions(shuffled);
    setAnswers(Array.from({ length: QUESTION_COUNT }, () => null));
    setCurrentIndex(0);
    setRevealed(false);
    setResults(null);
    setExportStatus(null);
    setPhase("quiz");
  }, []);

  const pickOption = (idx: number) => {
    if (revealed || phase !== "quiz") return;
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = idx;
      return next;
    });
    setRevealed(true);
  };

  const goNext = () => {
    if (phase !== "quiz") return;
    if (currentIndex >= total - 1) {
      const r = computeResults(questions, answers);
      setResults(r);
      setPhase("results");
      return;
    }
    setCurrentIndex((i) => i + 1);
    setRevealed(false);
  };

  const restart = () => {
    setPhase("intro");
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setRevealed(false);
    setResults(null);
    setExportStatus(null);
  };

  const buildExportBlob = useCallback(() => {
    if (!results) return "";
    const payload = {
      app: "CompTIA A+ vs Security+ Diagnostic",
      generatedAt: new Date().toISOString(),
      aPlusWeightedPercent: Math.round(results.aPlusWeightedPercent * 10) / 10,
      securityPlusWeightedPercent:
        Math.round(results.securityPlusWeightedPercent * 10) / 10,
      verdict: { title: results.verdictTitle, body: results.verdictBody },
      weakDomains: results.weakDomainsDetail,
      domainScores: results.perDomain.map((d) => ({
        domain: d.domainId,
        label: d.label,
        exam: d.exam,
        percent: Math.round(d.fraction * 1000) / 10,
        correct: d.correct,
        total: d.total,
        weak: d.weak,
      })),
    };
    return JSON.stringify(payload, null, 2);
  }, [results]);

  const copyExport = async () => {
    const text = buildExportBlob();
    try {
      await navigator.clipboard.writeText(text);
      setExportStatus("> UPLINK_OK // PAYLOAD_COPIED_TO_CLIPBOARD");
    } catch {
      setExportStatus("> UPLINK_FAIL // USE_DOWNLOAD_STREAM");
    }
  };

  const downloadExport = () => {
    const text = buildExportBlob();
    const blob = new Blob([text], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `comptia-diagnostic-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setExportStatus("> ARCHIVE_SPAWNED // LOCAL_DOWNLOAD");
  };

  const shareResults = async () => {
    if (!results) return;
    const text = `${results.verdictTitle}\nA+ (weighted): ${Math.round(results.aPlusWeightedPercent)}%\nSecurity+ (weighted): ${Math.round(results.securityPlusWeightedPercent)}%`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "CompTIA diagnostic", text });
        setExportStatus("> BROADCAST // SHARE_COMPLETE");
      } else {
        await navigator.clipboard.writeText(text);
        setExportStatus("> FALLBACK // SUMMARY_COPIED");
      }
    } catch {
      setExportStatus("> BROADCAST_ABORTED");
    }
  };

  const introBody = useMemo(
    () =>
      `${total} MCQ segments (60x 220-1201/1202-style vectors, 60x SY0-701). Weighted by objective emphasis. Study guidance only — not affiliated with CompTIA.`,
    [total],
  );

  const decryptStyle = (step: number): CSSProperties => ({
    animationDelay: `${step * 0.14}s`,
  });

  const isCorrect =
    revealed && current && answers[currentIndex] === current.correctIndex;

  return (
    <div
      className={`relative z-10 mx-auto flex min-h-full max-w-3xl flex-col px-3 py-8 sm:px-5 ${bootFlicker ? "matrix-crt-flicker" : ""} matrix-crt-ambient`}
    >
      <header className="matrix-decrypt-block mb-8 border-b border-matrix-dim pb-6" style={decryptStyle(0)}>
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#00ff41]/55">
          {"// unauthorized_session // root_breach"}
        </p>
        <div className="mt-2">
          <MatrixGlitchHeading
            text="COMPTIA.DIAGNOSTIC // A_PLUS_VS_SECURITY_PLUS"
            className="text-lg text-[#00ff41] sm:text-2xl"
          />
        </div>
        {phase === "intro" ? (
          <MatrixTypewriter
            text={introBody}
            msPerChar={7}
            trigger="intro"
            className="mt-3 max-w-2xl text-xs leading-relaxed text-[#00ff41]/75 sm:text-sm"
          />
        ) : (
          <p className="mt-3 font-mono text-xs leading-relaxed text-[#00ff41]/55 sm:text-sm">
            {"// SESSION_ACTIVE // UNAUTHORIZED_BUFFER_LOCK // DO_NOT_DISCONNECT"}
          </p>
        )}
      </header>

      {phase === "intro" && (
        <section className="matrix-decrypt-block flex flex-1 flex-col gap-6" style={decryptStyle(1)}>
          <div className="border border-matrix-dim bg-matrix-deep/90 p-4 text-xs leading-relaxed text-[#00ff41]/85">
            <p className="text-[10px] text-[#00ff41]/45">:: ROUTINE_MANIFEST ::</p>
            <ul className="mt-3 space-y-2 font-mono">
              <li>{"> ACK_ALL_SEGMENTS // per-answer decrypt + rationale"}</li>
              <li>{"> SCORE_MATRIX // domain-weighted A+ / SY0-701"}</li>
              <li>{"> VERDICT_STREAM // sequence advisory (heuristic)"}</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={startQuiz}
            className="group w-full max-w-xl border border-[#00ff41] bg-[#001a00] px-4 py-3 text-left font-mono text-sm text-[#00ff41] transition-colors hover:bg-[#003b00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41]"
          >
            <span className="text-[#00ff41]">{"> INITIALIZE_DIAGNOSTIC"}</span>
            <span className="matrix-cursor inline" aria-hidden />
          </button>
        </section>
      )}

      {phase === "quiz" && current && (
        <section key={currentIndex} className="matrix-crt-flicker flex flex-1 flex-col gap-5">
          <div className="font-mono text-[10px] text-[#00ff41]/65 sm:text-xs">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-matrix-dim pb-2">
              <span className="tracking-wide text-[#00ff41]">
                {examPathTag(current)} Q_{padSeq(currentIndex + 1)} of_{padSeq(total)}
              </span>
              <span className="text-[#003b00]">:: corrupted_record_pull ::</span>
            </div>
            <div className="mt-3">
              <MatrixBufferProgress
                percent={progress}
                label={`SEGMENT_OFFSET // ${examPathTag(current)} // STREAM_ACTIVE`}
              />
            </div>
          </div>

          <div className="border border-matrix-dim bg-[#000800]/90 p-4 sm:p-5">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-[#00ff41]/50">
              :: OBJ_REF :: {current.objectiveRef}
            </div>
            <div className="min-h-[3rem] border-l-2 border-[#003b00] pl-3">
              <MatrixTypewriter
                text={current.stem}
                msPerChar={8}
                trigger={`${currentIndex}-${current.id}`}
                className="text-sm font-medium leading-relaxed text-[#00ff41] sm:text-base"
              />
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              {current.options.map((opt, idx) => {
                const selected = answers[currentIndex] === idx;
                const correct = idx === current.correctIndex;
                let cls =
                  "w-full border border-matrix-dim bg-matrix-deep px-3 py-2.5 text-left font-mono text-xs text-[#00ff41] transition-colors hover:border-[#00ff41]/50 hover:bg-[#003b00]/40 sm:text-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#00ff41] rounded-none ";
                if (revealed) {
                  if (correct) {
                    cls +=
                      " border-[#00ff41] bg-[#003b00]/60 shadow-[0_0_12px_rgba(0,255,65,0.25)] ";
                  } else if (selected && !correct) {
                    cls +=
                      " border-[#ff0000] bg-[#1a0000]/80 text-[#ff4444] matrix-red-flicker ";
                  } else {
                    cls += " border-matrix-dim opacity-45 ";
                  }
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={revealed}
                    onClick={() => pickOption(idx)}
                    className={cls}
                  >
                    <span className="text-[#00ff41]/35">{">"}</span>{" "}
                    <span className="text-[#00ff41]/60">{`${String.fromCharCode(65 + idx)})`}</span>{" "}
                    <span className={selected && revealed && !correct ? "text-[#ff6666]" : ""}>
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {revealed && (
              <div
                className={`mt-5 border p-4 font-mono text-xs leading-relaxed sm:text-sm ${
                  isCorrect
                    ? "matrix-access-flash border-[#00ff41] bg-[#003b00]/35 text-[#00ff41]"
                    : "matrix-breach-shake matrix-red-flicker border-[#ff0000] bg-[#140000]/90 text-[#ff5555]"
                }`}
              >
                <p className="font-bold uppercase tracking-[0.2em]">
                  {isCorrect ? ">> ACCESS_GRANTED" : ">> BREACH_DETECTED"}
                </p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-[#00ff41]/45">
                  {isCorrect ? ":: AUTH_TOKEN_ACCEPTED ::" : ":: INTRUSION_SIGNATURE ::"}{" "}
                </p>
                <p className={`mt-2 ${isCorrect ? "text-[#00ff41]/90" : "text-[#ff8888]"}`}>
                  {current.explanation}
                </p>
              </div>
            )}

            {revealed && (
              <button
                type="button"
                onClick={goNext}
                className="mt-5 w-full border border-[#00ff41] bg-[#001a00] px-4 py-3 text-left font-mono text-sm text-[#00ff41] hover:bg-[#003b00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00ff41] sm:w-auto"
              >
                {currentIndex >= total - 1 ? "> DECRYPT_FINAL_REPORT" : "> LOAD_NEXT_SEGMENT"}
                <span className="matrix-cursor inline" aria-hidden />
              </button>
            )}
          </div>
        </section>
      )}

      {phase === "results" && results && (
        <section className="flex flex-1 flex-col gap-6 pb-14">
          <div
            className="matrix-decrypt-block border border-matrix-dim bg-matrix-deep/80 p-5"
            style={decryptStyle(0)}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#00ff41]/45">
              {":: classified_report // decrypt_stream ::"}
            </p>
            <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#00ff41]">
              {cosmeticClearanceVector(results)}
            </p>
            <h2 className="mt-4 font-mono text-base font-bold uppercase leading-snug text-[#00ff41] sm:text-lg">
              :: ACCESS_DECISION ::
            </h2>
            <p className="mt-2 font-mono text-sm font-semibold leading-snug text-[#00ff41]">
              {results.verdictTitle}
            </p>
            <p className="mt-3 whitespace-pre-line font-mono text-xs leading-relaxed text-[#00ff41]/80 sm:text-sm">
              {results.verdictBody}
            </p>
          </div>

          <div
            className="matrix-decrypt-block grid gap-3 sm:grid-cols-2"
            style={decryptStyle(1)}
          >
            <div className="border border-matrix-dim bg-[#000800] p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#00ff41]/45">
                {"//"} A_PLUS_WEIGHTED
              </p>
              <p className="mt-2 font-mono text-3xl font-semibold text-[#00cc36]">
                {Math.round(results.aPlusWeightedPercent)}%
              </p>
              <p className="mt-1 font-mono text-[10px] text-[#00ff41]/40">
                {"DOMAIN_WEIGHT // 220-1201/1202 EMPHASIS"}
              </p>
            </div>
            <div className="border border-matrix-dim bg-[#000800] p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#00ff41]/45">
                {"//"} SY0_701_WEIGHTED
              </p>
              <p className="mt-2 font-mono text-3xl font-semibold text-[#00ff41]">
                {Math.round(results.securityPlusWeightedPercent)}%
              </p>
              <p className="mt-1 font-mono text-[10px] text-[#00ff41]/40">
                {"DOMAIN_WEIGHT // SY0-701 EMPHASIS"}
              </p>
            </div>
          </div>

          <div className="matrix-decrypt-block" style={decryptStyle(2)}>
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#00ff41]/70">
              {"::"} DOMAIN_DECRYPT_GRAPH {"::"}
            </h3>
            <p className="mt-1 font-mono text-[10px] text-[#00ff41]/40">
              {"BARS = PCT_CORRECT_IN_DOMAIN // <70% = WEAK_SIGNAL"}
            </p>
            <div className="mt-3">
              <DomainBreakdownChart rows={results.perDomain} />
            </div>
          </div>

          {results.weakDomainsDetail.length > 0 && (
            <div
              className="matrix-decrypt-block border border-[#ff0000]/45 bg-[#120000]/70 p-4"
              style={decryptStyle(3)}
            >
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#ff5555]">
                {":: ANOMALY_LIST // WEAK_DOMAINS ::"}
              </h3>
              <ul className="mt-2 space-y-1 font-mono text-xs text-[#ff8888]">
                {results.weakDomainsDetail.map((line) => (
                  <li key={line}>{`> ${line}`}</li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="matrix-decrypt-block flex flex-col gap-2 sm:flex-row sm:flex-wrap"
            style={decryptStyle(4)}
          >
            <button
              type="button"
              onClick={copyExport}
              className="border border-matrix-dim bg-matrix-deep px-4 py-2.5 text-left font-mono text-xs text-[#00ff41] hover:border-[#00ff41] hover:bg-[#003b00]/50"
            >
              {"> EXPORT_CLIPBOARD // JSON"}
            </button>
            <button
              type="button"
              onClick={downloadExport}
              className="border border-matrix-dim bg-matrix-deep px-4 py-2.5 text-left font-mono text-xs text-[#00ff41] hover:border-[#00ff41] hover:bg-[#003b00]/50"
            >
              {"> SPAWN_ARCHIVE // JSON"}
            </button>
            <button
              type="button"
              onClick={shareResults}
              className="border border-matrix-dim bg-matrix-deep px-4 py-2.5 text-left font-mono text-xs text-[#00ff41] hover:border-[#00ff41] hover:bg-[#003b00]/50"
            >
              {"> BROADCAST_SUMMARY"}
            </button>
            <button
              type="button"
              onClick={restart}
              className="border border-[#00ff41] bg-[#001a00] px-4 py-2.5 text-left font-mono text-xs font-semibold text-[#00ff41] hover:bg-[#003b00]"
            >
              {"> REINITIALIZE_SESSION"}
            </button>
          </div>
          {exportStatus && (
            <p className="font-mono text-[10px] text-[#00ff41]/50">{exportStatus}</p>
          )}
        </section>
      )}
    </div>
  );
}
