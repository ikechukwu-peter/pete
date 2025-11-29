import Head from "next/head";
import { Images } from "./images";

const fullName = "Ikechukwu Peter";

export const SiteHeadContents = ({
  title = ` ${fullName} | Software Engineer`,
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
      <link rel="icon" href={Images.heroImage.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};
