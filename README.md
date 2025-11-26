# SGG Construction LLC Marketing Site

A production-ready marketing experience designed to help SGG Construction LLC win higher-value commercial projects. I modernized the legacy layout with a refined visual system, faster page delivery, and modular content blocks so non-technical teammates can update copy, imagery, and CTAs without touching the framework.

## Business Outcomes

- **Brand-consistent storytelling** – refreshed typography, blue/white palette, and curated project photography aligned to the company’s design guide.
- **Faster lead capture** – persistent contact CTAs and a dedicated conversion page wired to Web3Forms.
- **Portfolio credibility** – dynamic project and testimonial feeds fed by typed content sources instead of hard-coded HTML.
- **Operational sustainability** – reusable sections and data-driven configs reduce maintenance time and onboarding risk.

## Technical Highlights

- **Next.js 14 App Router** with nested layouts, route-level metadata, and streaming-ready server components to keep Time-to-Interactive low.
- **Hybrid server/client composition**: data-driven hero/services/testimonial modules render on the server while interactivity (mobile nav, smooth scroll) stays on lightweight client components.
- **TypeScript-first content model** located in `/data`, exposing strong typing for cards, services, and testimonials.
- **Tailwind CSS 3.4** extended theme (`brand-blue`, `brand-navy`, `brand-sky`) plus global motion + scrollbar polish in `app/globals.css`.
- **Optimized assets** hosted under `/public/images` and leveraged via Next `<Image>` where beneficial.

## Local Development

> Requires Node.js 18.18+ (Next.js 14 baseline) and npm.

```bash
git clone https://github.com/<your-handle>/sggconstruction.git
cd sggconstruction
npm install
npm run dev
```

Visit `http://localhost:3000`. Additional scripts:

```bash
npm run build   # production compile + type checks
npm run start   # serve the production build
npm run lint    # Next.js lint rules + TypeScript
```

## Environment Variables

`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` powers the contact form submission pipeline. Without it, the UI surfaces a configuration warning so QA can still validate page content.

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key
```

## Project Layout

```
sggconstruction/
├── app/
│   ├── layout.tsx        # root shell, metadata, navbar/footer wrapper
│   ├── page.tsx          # home page composed of reusable sections
│   ├── contact/page.tsx  # high-intent conversion flow
│   └── projects/page.tsx # filterable portfolio grid
├── components/
│   ├── client-layout.tsx # handles loading experience + scroll behavior
│   ├── navbar.tsx        # responsive nav with mobile drawer
│   ├── footer.tsx        # contact + certifications
│   └── sections/         # hero, services, testimonials, etc.
├── data/
│   ├── projects.ts       # curated card data (title, scope, hero image)
│   ├── services.ts       # service definitions + Lucide icons
│   └── testimonials.ts   # client quotes + attribution
├── public/images/        # optimized JPEG hero/portfolio imagery
├── tailwind.config.js    # theme tokens + motion utilities
├── app/globals.css       # base styles, typography, animations
└── next.config.mjs
```

## Customization Playbook

- **Branding** – swap `/public/images/sgg-logo.png` and update `tailwind.config.js` palette tokens to match new brand guides.
- **Hero & messaging** – edit `components/sections/hero.tsx` for headline, subcopy, and CTA text.
- **Services/testimonials/projects** – update the respective files in `/data`; TypeScript types enforce content completeness.
- **Navigation & contact** – adjust social links, phone/email, and location in `components/navbar.tsx` and `components/footer.tsx`.

## Deployment Notes

- Optimized for Vercel, but any Node-friendly platform works. Run `npm run build` followed by `npm run start`.
- Ensure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is defined in the hosting provider’s environment settings.
- Image and static asset paths are relative; no additional CDN configuration required.

---

Built with care for **SGG Construction LLC** Delivering structures that stand the test of time.
