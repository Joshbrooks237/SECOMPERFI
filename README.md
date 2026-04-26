# SECOMPERFI

*There’s a hundred twenty questions in this town. Most of them don’t know your name.*

---

## What I do

I run a **Next.js / TypeScript** terminal.

**Diagnostic** — one hundred twenty cuts. Sixty A+. Sixty Security+. Weighted. Verdict at the end. You walk in with guesses; you walk out with numbers.

**Flashcards** — **`/flashcards`**. Ports only. Ten seconds a card. You miss, you hear about it. You miss twice, it remembers.

There’s a plain list if you want to read the blade before you use it: **`question-bank-120.md`**.

Not CompTIA. Not official. Just practice.

---

## How you run it

```bash
npm install
npm run dev
```

Home: `http://localhost:3000`  
Ports: `http://localhost:3000/flashcards`

```bash
npm run build
npm start
```

Node **≥ 18.18**. Production likes **20+**.

---

## Where it ships

**Vercel** — connect it.  
**Railway** — `npm run build`, then `npm start`. `standalone` is already in `next.config.ts`.

---

## Under the hood

| Piece | Where |
|------|--------|
| Bank | `src/data/aplusQuestions.ts`, `src/data/securityQuestions.ts`, `src/data/banks/*` |
| Weights | `src/data/domains.ts` |
| Score | `src/lib/scoring.ts` |
| Verdict | `src/lib/verdict.ts` |
| Rain on the glass | `src/components/diagnostic/*`, `src/app/globals.css` |
| Port drill | `src/data/flashcardPorts.ts`, `src/components/flashcards/FlashcardMode.tsx`, `src/app/flashcards/page.tsx` |

---

## License

None. You take it. You break it. You fix it. The night doesn’t care.
