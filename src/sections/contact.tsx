"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { socialLinks } from "@/data/socials";
import { Copy, Check, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  // Default to a placeholder to prevent build errors if env var is missing
  const [state, submitToFormspree] = useFormspree(process.env.NEXT_PUBLIC_FORMSPREE_ID || "x");

  const {
    register,
    handleSubmit: handleFormSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      reset();
    }
    if (state.errors) {
      toast.error("Something went wrong. Please try again.");
    }
  }, [state.succeeded, state.errors, reset]);

  const onSubmit = async (data: FormValues) => {
    await submitToFormspree(data);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ikechukwupeter1999@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-8"
        >
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-serif">
              Get in Touch
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear
              from you.
            </p>

            <div className="mb-8 flex items-center gap-2">
              <div className="flex h-12 flex-1 items-center rounded-md border bg-secondary/50 px-4 text-sm text-muted-foreground">
                ikechukwupeter1999@gmail.com
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 shrink-0"
                onClick={copyEmail}
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy email</span>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleFormSubmit(onSubmit)} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about your project..."
                className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                {...register("message")}
              />
              {errors.message && (
                <span className="text-xs text-red-500">{errors.message.message}</span>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
