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
- Custom 404 page with terminal-themed design

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Icons:** [Feather Icons](https://feathericons.com)
- **Fonts:** [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Contact API:** [Resend](https://resend.com) via Cloudflare Pages Function
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com)

## Project Structure

```
├── index.html                          # Main page
├── privacy.html                        # Privacy Policy
├── terms.html                          # Terms of Service
├── 404.html                            # Custom 404 page
├── assets/
│   ├── css/
│   │   ├── style.css                   # Main stylesheet
│   │   └── pages.css                   # Secondary pages stylesheet
│   ├── files/William_Ortiz_Resume.pdf  # Downloadable resume
│   └── images/                         # Profile photo, favicon
├── functions/
│   └── api/
│       └── send.js                     # Cloudflare Pages Function (Resend)
├── _headers                            # Cloudflare security headers
├── sitemap.xml                         # SEO sitemap
├── robots.txt                          # Search engine directives
└── package.json                        # Scripts
```

## License

[MIT](LICENSE)

## Contact

William Ortiz - [contact@williamortiz.dev](mailto:contact@williamortiz.dev)
