# SGG Construction LLC — Next.js Website

A modern marketing site for SGG Construction LLC built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. The refreshed experience keeps the original layout while adopting the company’s blue-and-white visual identity and updated project imagery.

## ✨ Highlights

- **Brand-forward styling** using the provided SGG Construction LLC logo and new blue/white palette.
- **App Router architecture** with fast routing, metadata, and server + client component composition.
- **Reusable content modules** for hero, services, testimonials, and contact call-to-actions.
- **TypeScript data sources** (`/data`) powering dynamic project and testimonial listings.
- **Responsive UI** with smooth scroll behavior, mobile navigation, and accessible typography.

## 🚀 Quick Start

> **Prerequisite:** Node.js 18.18+ (or any version supported by Next.js 14).

```bash
cd beyondbricks
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site. Additional scripts:

```bash
npm run build   # production build
npm run start   # run the production server
npm run lint    # Next.js lint checks
```

## 🔐 Environment Variables

The contact form submits to Web3Forms. Add the public access key before deploying:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

Without the key, the form displays a configuration warning but the rest of the site works normally.

## 📁 Project Structure

```
beyondbricks/
├── app/
│   ├── layout.tsx          # Root layout with navbar/footer wrapper
│   ├── page.tsx            # Home page with stacked sections
│   ├── contact/page.tsx    # Dedicated contact page
│   └── projects/page.tsx   # Portfolio listings with filters
├── components/
│   ├── client-layout.tsx   # Handles loading screen + global wrappers
│   ├── navbar.tsx, footer.tsx, loading-screen.tsx
│   ├── projects/portfolio-grid.tsx
│   └── sections/           # Hero, About, Services, etc.
├── data/
│   ├── projects.ts         # Unsplash-backed project cards
│   ├── services.ts         # Service descriptions + icons
│   └── testimonials.ts     # Client quotes
├── public/images/sgg-logo.png
├── tailwind.config.js
├── app/globals.css
└── next.config.mjs
```

## 🎨 Theming & Assets

- Tailwind color tokens are defined in `tailwind.config.js` (`brand-blue`, `brand-navy`, `brand-sky`, etc.).
- Global CSS overrides (scrollbar, animations) live in `app/globals.css`.
- Replace `/public/images/sgg-logo.png` with the high-resolution logo provided by the brand guide.
- Section backgrounds and imagery use curated Unsplash links; swap them for project photography when available.

## 🧩 Customization Tips

- Update hero copy or CTAs in `components/sections/hero.tsx`.
- Modify services via `data/services.ts`; icons leverage Lucide so any icon component can be swapped.
- Adjust testimonials in `data/testimonials.ts`.
- Change navigation links or contact details inside `components/navbar.tsx` and `components/footer.tsx`.

## 📦 Tech Stack

- Next.js 14 (App Router, Streaming, Image Optimization)
- React 18 with server/client component composition
- TypeScript strict mode
- Tailwind CSS 3.4 + custom theme extensions
- Lucide React icon set

## 📄 Deployment

The project is ready for deployment on Vercel:

```bash
npm run build
npm run start
```

Ensure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is set in your environment variables before going live.

---

Built with care for **SGG Construction LLC** — delivering structures that stand the test of time.
