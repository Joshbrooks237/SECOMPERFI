# FLASH / SECOMPERFI

Same codebase: **port flashcards** at **`/flashcards`** (30 services, 10s timer, streak, repeat on weak ports) and a **120-question** diagnostic on `/` (60 A+ / 60 Security+, domain-weighted scoring, verdict). Not CompTIA official — practice only.

Question text export: **`question-bank-120.md`**.

---

## Run locally

```bash
npm install
npm run dev
```

- Diagnostic: `http://localhost:3000`
- Flashcards: `http://localhost:3000/flashcards`

```bash
npm run build
npm start
```

Node **≥ 18.18** (production: **20+** recommended).

---

## Deploy

**Vercel** — connect the repo.  
**Railway** — `npm run build`, then `npm start`. `output: 'standalone'` is set in `next.config.ts`.

---

## Layout

| Area | Paths |
|------|--------|
| Question banks | `src/data/aplusQuestions.ts`, `src/data/securityQuestions.ts`, `src/data/banks/*` |
| Domain weights | `src/data/domains.ts` |
| Scoring | `src/lib/scoring.ts` |
| Verdict | `src/lib/verdict.ts` |
| Diagnostic UI | `src/components/diagnostic/*`, `src/app/globals.css` |
| Port drill | `src/data/flashcardPorts.ts`, `src/components/flashcards/FlashcardMode.tsx`, `src/app/flashcards/page.tsx` |

---

## License

None stated — use at your own risk.

---

Alternate README tone (neo-noir / “director’s cut”): **[README.GOSLING.md](README.GOSLING.md)**.
