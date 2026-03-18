# William Ortiz - DevSecOps Portfolio

Personal portfolio website showcasing skills, projects, and expertise in DevSecOps.

**Live:** [williamortiz.dev](https://williamortiz.dev)

## Features

- Responsive design with mobile-first approach and hamburger navigation
- Dynamic GitHub project loading via the GitHub API
- Contact form powered by [Resend](https://resend.com) API
- Typing animation hero section
- Scroll-driven fade-in animations (respects `prefers-reduced-motion`)
- ADA/WCAG 2.1 AA accessible: skip link, ARIA labels, keyboard navigation, focus indicators
- SEO optimized: Open Graph, Twitter Cards, JSON-LD structured data, sitemap
- Security headers via Cloudflare Pages `_headers` configuration
- Privacy Policy and Terms of Service pages
- Custom 404 page

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static output)
- **Icons:** [Lucide Icons](https://lucide.dev)
- **Fonts:** [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Contact API:** [Resend](https://resend.com) via Cloudflare Pages Function
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Projects.astro
│   │   ├── Education.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── Icon.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── images/                         # Profile photo, favicon
│   ├── files/William_Ortiz_Resume.pdf  # Downloadable resume
│   ├── _headers                        # Cloudflare security headers
│   ├── sitemap.xml                     # SEO sitemap
│   └── robots.txt                      # Search engine directives
├── functions/
│   └── api/
│       └── send.js                     # Cloudflare Pages Function (Resend)
├── astro.config.mjs
└── package.json
```

## Local Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview dist/ locally
```

## Cloudflare Pages Build Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js version | 20 |

The `functions/` directory is automatically picked up by Cloudflare Pages alongside the static `dist/` output. Set `RESEND_API_KEY` as an environment variable in the Cloudflare Pages dashboard.

## License

[MIT](LICENSE)

## Contact

William Ortiz - [contact@williamortiz.dev](mailto:contact@williamortiz.dev)
