import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/contact-form"), {
  ssr: false,
});

export default function Contact() {
  return (
    <Layout>
      <SiteHeadContents title="Ikechukwu Peter | Contact" />
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of an amazing team.
          </p>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
