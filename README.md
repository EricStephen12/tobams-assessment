# Tobams Group — Frontend Intern Assessment

A responsive landing page for Tobams Group's Training and Development offering, built to match the provided Figma design as closely as possible.

---

## Live URL

> **[https://tobams-assessment.vercel.app](https://tobams-assessment.vercel.app)**  
> *(Update after deploying)*

---

## Figma Reference

[View Figma Design](https://www.figma.com/proto/waigC1hK1feTgR6io5SRRo7u/Frontend-Intern-Assessment?node-id=1-13556&t=ZdgOWHVGyXDtPXzf-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

---

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/tobams-assessment.git
cd tobams-assessment
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Stack

- **Next.js 15** — App Router
- **Tailwind CSS v4** — only CSS framework used
- **TypeScript**
- **next/image** — all images go through this for optimization
- **react-icons** — icons only, no UI kit

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── LearningManagement.tsx
    ├── LMSBlock.tsx
    ├── ManagementDevelopment.tsx
    ├── Thehub.tsx
    ├── TrainingConsultant.tsx
    ├── BookConsultation.tsx
    ├── Testimonials.tsx
    ├── Footer.tsx
    └── CTA.tsx
```

---

## Responsive Breakpoints

Tested and works at:
- **425px** — mobile
- **768px** — tablet
- **1280px+** — desktop

Only Tailwind's `sm:`, `md:`, and `lg:` prefixes were used. No custom media queries.

---

## Design Decisions

**Hero title difference** — The Figma mobile frame shows "Learning and Development" while the desktop frame shows "Training and Development". I matched both exactly using conditional rendering (`md:hidden` / `hidden md:inline`).

**CTA component** — Built a single reusable `CTA` component with `primary`, `secondary`, and `white` variants. It shows a chevron icon on mobile and an arrow icon on desktop, matching the Figma spec.

**Color tokens** — All brand colors are defined as CSS variables in `globals.css` and referenced through Tailwind's config (e.g. `bg-brand-primary`, `bg-bg-footer`). This keeps things consistent and easy to change.

**Font weights** — Added `font-500` and `font-600` as custom Tailwind utilities instead of using arbitrary values like `font-[500]`. Cleaner and more maintainable.

**Mobile hamburger menu** — The mobile nav uses a white icon inside a black box, exactly as shown in the Figma mobile frame.

---

## AI Tool Usage

I used GitHub Copilot occasionally for autocomplete suggestions while writing repetitive Tailwind class patterns. All component structure, layout decisions, and design matching were done by me.

---

## Known Issues

None at time of submission.
