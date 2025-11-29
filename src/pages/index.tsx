import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";
import NextLink from "next/link";

export default function Home() {
  return (
    <Layout>
      <SiteHeadContents />
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Senior Software Engineer & Content Creator
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I build high-performance, scalable software solutions that solve
            real-world problems. Let's turn your vision into a reality.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NextLink
              href="/contact"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get in touch
            </NextLink>
            <NextLink
              href="/works"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View my work <span aria-hidden="true">→</span>
            </NextLink>
          </div>
        </section>

        {/* Featured Work Section */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Featured Work
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {/* Project 1 */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                {/* Replace with your project image */}
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                  alt="Project 1"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      Project Title 1
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Brief description of the project and the technologies used.
                  </p>
                </div>
              </div>
            </div>
            {/* Add more projects here */}
          </div>
        </section>
      </div>
    </Layout>
  );
}
