# PhotoStudio — Luxury Photography Website

Bengaluru's premier photography & cinematography studio website built with **Next.js 14** and vanilla CSS.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (Pages Router) |
| Styling | Global CSS + CSS classes (no Tailwind dependency) |
| Animations | CSS keyframes + IntersectionObserver |
| Fonts | Google Fonts (Cormorant Garamond + Lato) |
| Icons | Unicode symbols + inline SVG |

---

## Project Structure

```
photostudio/
├── components/
│   ├── ui/
│   │   └── index.jsx          # RevealSection, GoldLine, GoldTag, SectionHeading
│   ├── sections/
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── WhyUsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── PricingSection.jsx
│   │   └── ContactSection.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
│
├── lib/
│   ├── data.js                # All content: services, gallery, testimonials, etc.
│   ├── theme.js               # Color tokens (COLORS object)
│   └── useScrollReveal.js     # Custom IntersectionObserver hook
│
├── pages/
│   ├── _app.jsx               # Global CSS import
│   ├── _document.jsx          # SEO meta tags
│   └── index.jsx              # Page: composes all sections
│
├── styles/
│   └── globals.css            # All CSS: resets, animations, utility classes
│
├── public/                    # Static assets (add images/videos here)
├── jsconfig.json              # @/ path alias
├── next.config.js
└── package.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Customisation Guide

### Update Content
Edit `lib/data.js` to change:
- Services list
- Gallery items and categories
- Testimonials
- Pricing packages
- Contact info / footer columns

### Change Theme Colors
Edit `lib/theme.js`:
```js
export const COLORS = {
  gold: "#C9A84C",       // ← change accent colour here
  goldLight: "#E8D5A3",
  black: "#0A0A0A",
  ...
};
```

### Add Real Images
Replace gallery placeholder divs in `PortfolioSection.jsx` with `<Image>` from `next/image`:
```jsx
import Image from "next/image";
<Image src="/gallery/wedding-1.jpg" alt="Golden Vows" fill style={{ objectFit: "cover" }} />
```

### Add Background Video to Hero
In `HeroSection.jsx`, replace the decorative `<div className="hero-bg">` with:
```jsx
<video autoPlay muted loop playsInline style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover" }}>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
<div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.55)" }} />
```

### Embed Real Google Map
In `ContactSection.jsx`, replace the map placeholder with:
```jsx
<iframe
  src="https://maps.google.com/maps?q=Indiranagar+Bengaluru&output=embed"
  width="100%" height="300" style={{ border:0 }} allowFullScreen loading="lazy"
/>
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## SEO
Meta tags are configured in `pages/_document.jsx`. Update `og:url` and `og:image` before deploying.

---

## License
MIT — free to use and modify.
