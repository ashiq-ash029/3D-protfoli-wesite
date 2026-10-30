# Muhammad Ashiq S — Portfolio

A responsive Next.js App Router portfolio for AI digital marketing, search
optimization, AI-assisted content, and web development.

## Routes

- `/` — Home
- `/about` — About Me
- `/skills` — Filterable skills directory
- `/education` — Education, internships, and workshops
- `/projects` — Searchable and filterable project directory
- `/experience` — Work and practical experience
- `/contact` — Contact details and email-draft form

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run the production build with:

```bash
npm run build
npm run start
```

## Contact and resume setup

The contact form uses the visitor's configured email app to prepare a message
for `muhammadashiqsa@gmail.com`. It does not send messages automatically; no
email service or backend is configured.

The resume PDF was not present in the supplied project files. Add the actual
PDF at `public/resume/muhammad-ashiq-s-resume.pdf` before exposing a download
link. Until then, the portfolio offers an email link to request it instead.

## Deploy

Deploy this Next.js project with a hosting provider that supports Next.js, such
as Vercel. Connect the repository, keep the default Next.js build and output
settings, and deploy. No application secrets or environment variables are
required by this version.
