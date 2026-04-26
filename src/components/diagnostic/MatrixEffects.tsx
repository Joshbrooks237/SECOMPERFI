"use client";

import { useEffect, useMemo, useState } from "react";

/** Simulated live render (typing) — resets when `text` or `trigger` changes. */
export function MatrixTypewriter({
  text,
  msPerChar = 10,
  className = "",
  trigger,
}: {
  text: string;
  msPerChar?: number;
  className?: string;
  /** Change to restart typing (e.g. question index). */
  trigger?: string | number;
}) {
  const key = useMemo(() => `${trigger ?? ""}::${text}`, [text, trigger]);
  const [len, setLen] = useState(0);

  useEffect(() => {
    setLen(0);
    if (!text) return;
    let pos = 0;
    const id = window.setInterval(() => {
      pos += 1;
      setLen(Math.min(pos, text.length));
      if (pos >= text.length) window.clearInterval(id);
    }, msPerChar);
    return () => window.clearInterval(id);
  }, [key, text, msPerChar]);

  const shown = text.slice(0, len);
  const done = len >= text.length;
  return (
    <p className={`font-mono ${className}`}>
      {shown}
      {!done && <span className="matrix-cursor inline align-bottom" aria-hidden />}
    </p>
  );
}

/** Terminal-style buffer bar + blinking block cursor. */
export function MatrixBufferProgress({
  percent,
  label,
}: {
  percent: number;
  label: string;
}) {
  const w = Math.min(100, Math.max(0, percent));
  return (
    <div className="font-mono text-[11px] text-[#00ff41] sm:text-xs">
      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[#00ff41]/70">
        <span>{label}</span>
        <span>
          {Math.round(w)}% complete
          <span className="matrix-cursor-block inline" aria-hidden />
        </span>
      </div>
      <div className="matrix-buffer-track relative h-3 w-full">
        <div className="matrix-buffer-fill absolute left-0 top-0 h-full" style={{ width: `${w}%` }} />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,255,65,0.08),transparent)]" />
      </div>
    </div>
  );
}
