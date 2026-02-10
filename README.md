# Pete | Senior Software Engineer Portfolio

A modern, high-performance portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Effects:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **Icons:** [Lucide React](https://lucide.dev)
- **Forms:** [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Deployment:** [Vercel](https://vercel.com)

## 🛠️ Features

- **Performance First:** 95+ Lighthouse score, optimized images, and code splitting.
- **Responsive Design:** Mobile-first approach, works perfectly on all devices.
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard navigation.
- **SEO Optimized:** Metadata, OpenGraph tags, JSON-LD structured data, and sitemap.
- **Dark Mode:** System-aware theme switching.
- **3D Background:** Subtle, performance-friendly 3D star field.

## 🏃‍♂️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📁 Project Structure

```
src/
├── app/                  # App Router pages and layout
├── components/           # Reusable UI components
│   ├── 3d/               # Three.js components
│   ├── layout/           # Header, Footer
│   └── ui/               # Design system primitives (Button, Card, etc.)
├── data/                 # Static content (projects, skills, etc.)
├── lib/                  # Utilities (cn, helpers)
├── sections/             # Page sections (Hero, About, etc.)
└── styles/               # Global styles
```

## 🎨 Customization

- **Theme:** Edit `src/styles/globals.css` to change CSS variables for colors.
- **Content:** Update files in `src/data/` to change projects, skills, and experience.
- **Metadata:** Update `src/app/layout.tsx` for SEO settings.

## 🚢 Deployment

The project is ready to be deployed on Vercel.

1. Push to GitHub.
2. Import project in Vercel.
3. Deploy.

---

Built with ❤️ by Pete.
