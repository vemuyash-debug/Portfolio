# Portfolio Website

A professional, production-ready portfolio built with React 18, TypeScript, Tailwind CSS, and Framer Motion. Optimized for full-stack developers, backend engineers, and data engineers.

## Features

- **Sections**: Home, About, Projects, Skills, Resume, Contact
- **Responsive**: Mobile, tablet, and desktop layouts
- **Animations**: Smooth transitions with Framer Motion
- **Projects**: Cards with GitHub and live demo links
- **Resume**: PDF download capability
- **SEO**: Optimized metadata for search engines and social sharing

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Personal Information
- **Hero/About**: Update text in `src/components/sections/Hero.tsx` and `src/components/sections/About.tsx`
- **Projects**: Edit `src/data/projects.ts` with your projects (update GitHub/live URLs)
- **Skills**: Edit `src/data/skills.ts` with your tech stack
- **Contact**: Update social links and email in `src/components/sections/Contact.tsx`
- **SEO**: Update `src/components/SeoHead.tsx` with your name, URL, and Open Graph image

### Profile Photo
Add your photo as `public/profile.jpg` to display beside your name. The site uses an "YV" initials avatar until then.

### Resume
- **resume.png** - Your resume image is in `public/` (downloadable)
- **resume.html** - Formatted resume; open and use Print → Save as PDF for a PDF version

### Contact Form
For production form submission, integrate one of:
- [Formspree](https://formspree.io) - Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the form
- [Netlify Forms](https://docs.netlify.com/forms/setup/) - Add `netlify` attribute to form
- Your own backend API

## Deployment

### Vercel
1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite – deploy with one click

### Netlify
1. Push to GitHub
2. New site from Git at [netlify.com](https://netlify.com)
3. Build command: `npm run build`, Publish directory: `dist`

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf      # Add your resume here
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── sections/   # Hero, About, Projects, etc.
│   │   └── SeoHead.tsx
│   ├── data/           # Projects, skills data
│   ├── types/          # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json
└── netlify.toml
```

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
- React Helmet Async (SEO)
