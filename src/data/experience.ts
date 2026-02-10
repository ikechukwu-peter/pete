export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    id: "vizual-travel",
    role: "Lead Product Engineer",
    company: "Service SmartTask Inc",
    period: "Mar 2024 – Present",
    description: "Remote, Canada",
    achievements: [
      "Migrated large React app to Next.js, boosting SEO & organic traffic.",
      "Built AI-powered itinerary generator, reducing user planning time.",
      "Implemented Stripe subscriptions, unlocking new recurring revenue.",
      "Developed real-time collaboration (Supabase Realtime) for global users.",
    ],
  },
  {
    id: "brydge",
    role: "Lead Product Engineer",
    company: "Better Brydge Technologies",
    period: "May 2023 – Mar 2024",
    description: "Lagos, Nigeria",
    achievements: [
      "Led fintech platform for multi-currency payments & trade finance.",
      "Boosted adoption 20% via invoicing & vendor/customer modules.",
      "Strengthened security, improving compliance & trust.",
      "Mentored engineers, cutting turnover by 10%.",
    ],
  },
  {
    id: "brainium",
    role: "Software Engineer",
    company: "Brainium Technologies",
    period: "Apr 2022 – Feb 2023",
    description: "Lagos, Nigeria",
    achievements: [
      "Built an e-commerce platform with secure payments.",
      "Optimized React + TypeScript apps, improving performance by 70%.",
      "Launched logistics platform, reducing inefficiencies by 50%.",
    ],
  },
  {
    id: "kumba",
    role: "Full Stack Engineer",
    company: "Kumba Ikuzo",
    period: "Mar 2020 – Mar 2022",
    description: "Remote, India",
    achievements: [
      "Scaled SaaS to 500K+ users, handling 50K daily API requests.",
      "Improved server response times by 30%.",
      "Designed cashback system, increasing retention 20%.",
    ],
  },
  {
    id: "andela",
    role: "Open Source Contributor",
    company: "Andela",
    period: "2021",
    description: "Remote",
    achievements: [
      "Contributed to large-scale open-source projects, collaborating with global teams.",
    ],
  },
  {
    id: "tutoring",
    role: "Computer Science Tutor",
    company: "Freelance / Private",
    period: "2021",
    description: "Remote / On-site",
    achievements: [
      "Mentored 20+ students in web development fundamentals",
      "Developed comprehensive curriculum for frontend engineering bootcamps.",
    ],
  },
];
