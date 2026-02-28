# sushiil.com — Portfolio Site

A modern, statically generated portfolio site built with [Astro](https://astro.build/).

## Tech Stack

| Layer       | Technology     | Why                                                        |
|-------------|----------------|------------------------------------------------------------|
| Framework   | Astro 5        | Zero-JS static output, content collections, fast builds    |
| Hosting     | GitHub Pages   | Free, automatic HTTPS, custom domain support               |
| CI/CD       | GitHub Actions | Auto-build & deploy on every push                          |
| Styling     | Vanilla CSS    | Custom properties, dark mode, no build-time dependency     |

## Project Structure

```
sushiil-portfolio/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions build & deploy pipeline
├── public/
│   ├── favicon.svg
│   └── CNAME                   # Custom domain for GitHub Pages
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Full-viewport intro section
│   │   ├── ProjectCard.astro   # Portfolio project card
│   │   ├── About.astro         # About me section
│   │   └── Contact.astro       # Contact section
│   ├── content/
│   │   ├── projects/           # Markdown files (one per project)
│   │   └── settings/
│   │       └── site.yaml       # Site-wide settings (name, bio, links)
│   ├── layouts/
│   │   └── BaseLayout.astro    # Root HTML layout (head, nav, footer)
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   └── projects/
│   │       └── [...slug].astro # Individual project detail pages
│   ├── styles/
│   │   └── global.css          # Design tokens, reset, utility classes
│   └── content.config.ts       # Astro content collection schemas
├── astro.config.mjs            # Astro framework configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22+ (LTS recommended)
- npm 10+

### Local Development

```bash
git clone https://github.com/SushiTigar/sushitigar.github.io.git
cd sushitigar.github.io
npm install
npm run dev
```

### Building for Production

```bash
npm run build
npm run preview
```

## Deployment

Deployment is fully automated via GitHub Actions. Push to `master` and the site builds and deploys automatically.

### One-time setup:

1. Go to your repo on GitHub → **Settings** → **Pages**.
2. Under **Source**, select **"GitHub Actions"**.
3. For a custom domain, the `CNAME` file is already set to `sushiil.com`.

## Editing Content

Edit files directly in `src/content/`:

- **Add a project:** Create a new `.md` file in `src/content/projects/`
- **Update settings:** Edit `src/content/settings/site.yaml`
- **Add images:** Drop files in `public/images/`

## Customization

### Colors & Theme

Edit CSS custom properties in `src/styles/global.css`:

```css
:root {
  --color-accent: #7c3aed;       /* Purple — change to your brand color */
  --color-bg: #faf9f7;           /* Light background */
  --color-surface: #ffffff;      /* Card background */
}
```

Dark mode is automatic via `prefers-color-scheme`.

## License

GPL-3.0 — see [LICENSE](LICENSE) for details.
