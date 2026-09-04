# Kong — Personal Site

Personal portfolio for **Kong** (Ops & Finance). Built with Next.js App Router, TypeScript, and Tailwind CSS. Ready to deploy on Vercel.

## Edit content

All copy lives in one file:

```
src/content/site.ts
```

Replace `[PLACEHOLDER]` strings (and the email / LinkedIn URL) with your real details. No other files need changing for content updates.

## Local development

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful scripts:

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deploy to Vercel

1. Push this repo to GitHub (already at https://github.com/kongckk/personal-site).
2. Go to [vercel.com/new](https://vercel.com/new) and import `kongckk/personal-site`.
3. Leave framework preset as **Next.js** (auto-detected).
4. Click **Deploy** — no env vars required for this static content site.
5. Optional: add a custom domain under Project → Settings → Domains.

CLI alternative:

```bash
npx vercel
```

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- Geist font via `next/font`

## License

Private / personal use unless otherwise noted.
