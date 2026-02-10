import type { Metadata, Viewport } from "next";
import { Inter, Calistoga } from "next/font/google";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const calistoga = Calistoga({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Senior Software Engineer",
    default: "Ikechukwu Peter | Senior Software Engineer & Full Stack Developer",
  },
  description:
    "Ikechukwu Peter is a Senior Software Engineer specializing in building scalable, high-performance web applications using TypeScript, React, Next.js, Node.js, and Cloud Infrastructure.",
  keywords: [
    "Ikechukwu Peter",
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Backend Engineer",
    "Cloud Engineer",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Ikechukwu Peter" }],
  creator: "Ikechukwu Peter",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://ikechukwupeter.com"),
  alternates: {
    canonical: "https://ikechukwupeter.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ikechukwupeter.com",
    title: "Ikechukwu Peter | Senior Software Engineer & Full Stack Developer",
    description:
      "Senior Software Engineer specializing in building scalable, high-performance web applications using TypeScript, React, Next.js, Node.js, and Cloud Infrastructure.",
    siteName: "Ikechukwu Peter Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists or create a placeholder
        width: 1200,
        height: 630,
        alt: "Ikechukwu Peter - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikechukwu Peter | Senior Software Engineer",
    description:
      "Building scalable digital products with modern web technologies (React, Next.js, Node.js, AWS).",
    creator: "@pete_iyke",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ikechukwu Peter",
  givenName: "Ikechukwu",
  familyName: "Peter",
  url: "https://ikechukwupeter.com",
  image: "https://ikechukwupeter.com/pete-01.jpeg",
  sameAs: [
    "https://twitter.com/pete_iyke",
    "https://www.linkedin.com/in/peter-ikechukwu/",
    "https://github.com/ikechukwu1peter",
  ],
  jobTitle: "Senior Software Engineer",
  knowsAbout: [
    "Software Engineering",
    "Full Stack Development",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Cloud Computing",
    "AWS",
    "Docker",
  ],
  description:
    "Senior Software Engineer specializing in building scalable, high-performance web applications and backend systems.",
};

import { SmoothScroll } from "@/components/layout/smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          calistoga.variable
        )}
      >
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ToastContainer position="bottom-right" theme="dark" />
        </ThemeProvider>
      </body>
    </html>
  );
}
