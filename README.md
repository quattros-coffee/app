# Quatτros Coffee — Static Website

A luxury-level, single-page static website for **Quatτros Coffee** — a specialty coffee shop in Pagrati, Athens, Greece.

## 🚀 Quick Start

Simply open `index.html` in your browser. No build step required.

```bash
open index.html
```

Or serve locally:

```bash
npx serve .
```

## 📁 Structure

```
├── index.html          # Single page — all sections
├── css/
│   └── style.css       # All styles (custom properties at top)
├── js/
│   └── main.js         # Scroll animations, interactions, mobile menu
├── assets/
│   ├── logo.svg        # Logo / wordmark as SVG
│   └── favicon.svg     # SVG favicon
├── .agent/
│   └── agent.md        # AI agent instructions
└── README.md
```

## ✨ Features

- **100% static** — zero backend, zero dependencies
- **Real menu data** from Wolt (coffees, drinks, snacks with prices)
- **Responsive** — mobile-first with touch-friendly interactions
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation
- **Performant** — lazy loading, CSS animations, minimal JS
- **Dark mode** — respects `prefers-color-scheme`
- **Smooth animations** — IntersectionObserver reveals, hover effects

## 📊 Data Sources

Menu items, hours, and contact info sourced from:
- [Wolt](https://wolt.com/en/grc/athens/restaurant/quattros-coffee-filol)
- [e-food](https://www.e-food.gr/delivery/pagrati/quattros-coffee-8764377)
- [Instagram](https://www.instagram.com/quattros_coffee)

## 🚢 Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch `main` / root `/`
4. Done! Site is live at `https://username.github.io/quattros-static-ui`

---

© 2025 Quatτros Coffee · Made with ♥ in Athens

