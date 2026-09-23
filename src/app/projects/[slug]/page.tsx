import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { caseStudies, caseStudySlugs } from "@/data/case-studies";
import { ShardropStudy } from "@/components/case-studies/shardrop";
import { AuraStudy } from "@/components/case-studies/aura";

const bodies: Record<string, () => React.JSX.Element> = {
  shardrop: ShardropStudy,
  aura: AuraStudy,
};

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};

  const url = `https://ikechukwupeter.com/projects/${study.slug}`;
  return {
    title: `${study.title} — ${study.tagline}`,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${study.title} — ${study.tagline}`,
      description: study.summary,
      images: [{ url: study.ogImage, width: 1200, height: 630, alt: study.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} — ${study.tagline}`,
      description: study.summary,
      images: [study.ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = caseStudies[slug];
  const Body = bodies[slug];
  if (!study || !Body) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: study.title,
    description: study.summary,
    codeRepository: study.repoUrl,
    url: `https://ikechukwupeter.com/projects/${study.slug}`,
    programmingLanguage: "TypeScript",
    author: { "@type": "Person", name: "Ikechukwu Peter" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 pt-24 pb-24">
        <Container className="max-w-4xl">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All projects
          </Link>

          <header className="mt-8">
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl">{study.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.liveUrl && (
                <Button asChild>
                  <Link href={study.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Open the live app
                  </Link>
                </Button>
              )}
              {study.repoUrl && (
                <Button variant="outline" asChild>
                  <Link href={study.repoUrl} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source
                  </Link>
                </Button>
              )}
              {study.fullStudyUrl && (
                <Button variant="outline" asChild>
                  <Link href={study.fullStudyUrl} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Full case study
                  </Link>
                </Button>
              )}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-y py-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Role</dt>
                <dd className="mt-1 text-sm font-medium">{study.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Year</dt>
                <dd className="mt-1 text-sm font-medium">{study.year}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">Status</dt>
                <dd className="mt-1 text-sm font-medium">{study.status}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <Badge key={item} variant="secondary" className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
          </header>

          <figure className="mt-12">
            <div className="overflow-hidden rounded-xl border">
              <Image
                src={study.heroImage.src}
                alt={study.heroImage.alt}
                width={study.heroImage.width}
                height={study.heroImage.height}
                priority
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              One tile per shard, green once its hash has been checked on arrival — amber if it had
              to be resent.
            </figcaption>
          </figure>

          <div className="mt-16">
            <Body />
          </div>

          {study.fullStudyUrl && (
            <div className="mt-16 rounded-xl border bg-card p-6 sm:p-8">
              <h2 className="font-serif text-xl font-bold tracking-tight sm:text-2xl">
                There is a great deal more
              </h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                The full study covers the rest: why OPFS rather than IndexedDB, why a content id is
                a hash of the shard hashes, how folders became a loop instead of a new format, the
                complete table of bugs and which layer of testing caught each one, and what is
                deliberately not built.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={study.fullStudyUrl} target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Read the full case study
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
