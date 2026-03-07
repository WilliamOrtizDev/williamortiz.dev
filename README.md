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
- Security headers via Vercel configuration
- LaTeX resume source for version-controlled, text-as-code resume management

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Icons:** [Feather Icons](https://feathericons.com)
- **Fonts:** [Inter](https://rsms.me/inter/) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- **Contact API:** [Resend](https://resend.com) via Vercel serverless function
- **Deployment:** [Vercel](https://vercel.com)

## Project Structure

```
├── index.html                          # Main page
├── assets/
│   ├── css/style.css                   # Stylesheet
│   ├── files/William_Ortiz_Resume.pdf  # Downloadable resume
│   └── images/                         # Profile photo, favicon
├── api/
│   └── send.js                         # Vercel serverless function (Resend)
├── resume/
│   └── William_Ortiz_Resume.tex        # LaTeX resume source
├── sitemap.xml                         # SEO sitemap
├── robots.txt                          # Search engine directives
├── vercel.json                         # Vercel config & security headers
└── package.json                        # Dependencies (resend)
```

## Setup

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/WilliamOrtizDev/williamortiz.dev.git
   cd williamortiz.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

4. Run the development server (requires [Vercel CLI](https://vercel.com/docs/cli)):
   ```bash
   npx vercel dev
   ```

### Resend Configuration

1. Sign up at [resend.com](https://resend.com) and get an API key
2. Verify your domain (`williamortiz.dev`) in the Resend dashboard
3. Set `RESEND_API_KEY` as an environment variable in your Vercel project settings

### Building the LaTeX Resume

```bash
cd resume
pdflatex William_Ortiz_Resume.tex
```

Requires a LaTeX distribution (e.g., TeX Live, MiKTeX) with `fontawesome5`, `titlesec`, `enumitem`, `tabularx`, and `hyperref` packages.

## Deployment

Push to `main` and Vercel will automatically deploy. Ensure `RESEND_API_KEY` is set in the Vercel project environment variables.

## License

[MIT](LICENSE)

## Contact

William Ortiz - [contact@williamortiz.dev](mailto:contact@williamortiz.dev)
