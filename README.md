# Personal Portfolio - Pinisetty Hanumath Satya Kiran

Modern single-page personal portfolio built with React + Vite.

## Tech Stack

- React
- Vite
- Modern CSS (glassmorphism + dark theme)
- Responsive design with section-based architecture

## Project Structure

```text
src/
├─ assets/
├─ components/
│  ├─ Footer.jsx
│  ├─ Navbar.jsx
│  └─ SectionHeading.jsx
├─ data/
│  └─ portfolioData.js
├─ sections/
│  ├─ About.jsx
│  ├─ Achievements.jsx
│  ├─ Contact.jsx
│  ├─ Education.jsx
│  ├─ Experience.jsx
│  ├─ Hero.jsx
│  ├─ Projects.jsx
│  └─ Skills.jsx
├─ styles/
├─ App.jsx
├─ index.css
└─ main.jsx
```

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push this repo to GitHub.
2. Import repository in Vercel.
3. Framework preset: `Vite`.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

### Netlify

1. Push this repo to GitHub.
2. Import repository in Netlify.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

## Notes

- Resume download button points to `public/kiran_Resume2026.pdf`.
- Contact form is frontend-only.
