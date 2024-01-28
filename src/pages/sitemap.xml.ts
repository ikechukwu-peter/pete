// pages/sitemap.xml.js

import { NextResponse } from "next/server";

const homepage = process.env.NEXT_CLIENT_BASE_URL;

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${homepage}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
      <loc>${homepage}/works</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${homepage}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>     
        <url>
        <loc>${homepage}/courses</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        </url>
    </urlset>
  `;
}

export async function getServerSideProps({ res }: { res: any }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
