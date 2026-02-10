"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="mb-12 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-serif"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-lg text-muted-foreground"
          >
            My professional journey and the impact I've made along the way.
          </motion.p>
        </div>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/30 before:to-transparent md:before:mx-auto md:before:translate-x-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 h-10 w-10 flex items-center justify-center rounded-full border border-muted-foreground/30 bg-background shadow md:left-1/2 md:-translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>

              <div className="ml-16 w-full md:w-[calc(50%-2.5rem)] md:ml-0 md:group-odd:mr-auto md:group-even:ml-auto">
                <Card className="border-muted-foreground/20 transition-colors hover:border-primary/50">
                  <CardHeader>
                    <div className="flex flex-col gap-1 md:gap-2">
                      <div
                        className={`flex items-center gap-2 md:flex-col md:items-start ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}
                      >
                        <Badge variant="secondary" className="w-fit">
                          {experience.period}
                        </Badge>
                        <CardTitle className="text-xl">{experience.role}</CardTitle>
                      </div>
                      <p className="text-base font-medium text-primary">{experience.company}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">{experience.description}</p>
                    <ul
                      className={`list-disc space-y-1 pl-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:pl-0 md:pr-4 md:text-right md:[direction:rtl]" : ""}`}
                    >
                      {experience.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
