# SECOMPERFI

> *"I’d like to share a revelation that I’ve had during my time here. Your codebase seemed designed to be tested, and where it is not, we are only too happy to oblige."*

— **README.md**, as compiled by **Agent Smith** (unauthorized template injection)

---

## What this is

A **Next.js / TypeScript** application posing as a **compromised classification terminal**. It administers **one hundred twenty** multiple-choice probes—**sixty** mapped to **CompTIA A+** objective families (220-1201/1202 style) and **sixty** to **Security+ SY0-701** domains—then computes **domain-weighted** scores and emits a **verdict** on exam sequencing.

It is **study software**. It is **not** CompTIA. It does **not** certify you. It merely… *measures the anomaly.*

---

## Running the simulation

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Accept that the interface will judge you in monospace.

```bash
npm run build
npm start
```

Node **≥ 18.18** is expected; production hosts may prefer **20+**.

---

## Deployment

- **Vercel**: connect the repository; default Next.js settings suffice.
- **Railway**: `npm run build` then `npm start`; `output: "standalone"` is enabled in `next.config.ts` for container-friendly traces.

---

## Architecture (the boring truth beneath the rain)

| Concern | Location |
|--------|----------|
| Question bank | `src/data/aplusQuestions.ts`, `src/data/securityQuestions.ts` |
| Domain weights | `src/data/domains.ts` |
| Weighted scoring | `src/lib/scoring.ts` |
| Verdict rules | `src/lib/verdict.ts` |
| Terminal cosplay | `src/components/diagnostic/*`, `src/app/globals.css` |

---

## License

None declared. Use at your own peril. The tests, Mr. Anderson, are already inside the build.
