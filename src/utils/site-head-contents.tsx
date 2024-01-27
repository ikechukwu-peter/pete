import Head from "next/head";
import { Images } from "./images";

const fullName = "Ikechukwu Peter";

export const SiteHeadContents = ({
  title = ` ${fullName} | Software/Product Engineer`,
  description = `Learn more about ${fullName}, a passionate software engineer building impactful solutions.`,
  imageUrl = "https://pbs.twimg.com/profile_images/1485062031787151362/k1rOVg6E_400x400.jpg",
  siteURL = "https://ikechukwupeter.com",
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  siteURL?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={Images.heroImage.url} />
      <meta
        name="keywords"
        content={`${fullName}, Software Engineer, Web Developer, Full Stack Developer, React, JavaScript, TypeScript, Portfolio, Website, Web app`}
      />

      {/* Open Graph Tags for Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteURL} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Additional SEO Enhancements */}
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta http-equiv="Content-Language" content="en" />
      <link rel="canonical" href={siteURL} />
      <meta name="author" content={fullName} />
      <meta name="robots" content="index, follow" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": ${fullName},
            "url": "${siteURL}",
            "image": "${imageUrl}"
          }
        `}
      </script>
    </Head>
  );
};
