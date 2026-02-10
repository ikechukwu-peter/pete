"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-secondary/20 overflow-hidden">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div
            style={{ y }}
            className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
          >
            {/* Replace with actual image */}
            <Image
              src="/pete-01.jpeg"
              alt="Pete"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">Software Engineer</p>
              <p className="text-xs opacity-80">Based in Nigeria</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Hello, I'm <span className="font-semibold text-foreground">Ikechukwu Peter</span>. I
              am a Full-stack Software Engineer with over 7 years of experience delivering scalable
              fintech, e-commerce, and travel-tech platforms. I have a proven track record in
              scaling apps to 500K+ users, reducing performance bottlenecks by 70%, and leading
              engineering teams.
            </p>
            <p className="text-lg text-muted-foreground">
              Passionate about AI-driven solutions, real-time collaboration, and product innovation.
              My core expertise spans React, Next.js, Node.js, NestJS, and cloud-native deployments
              on AWS, Supabase, and DigitalOcean.
            </p>

            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">7+</span>
                <span className="text-sm text-muted-foreground">Years of Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">500K+</span>
                <span className="text-sm text-muted-foreground">Users Served</span>
              </div>
            </div>

            <Button className="w-fit" variant="outline" asChild>
              <a
                href={process.env.NEXT_PUBLIC_RESUME_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
