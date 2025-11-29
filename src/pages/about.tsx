import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";
import NextLink from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

export default function About() {
  return (
    <Layout>
      <SiteHeadContents title={"Ikechukwu Peter | About"} />
      <div className="bg-white px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            About Me
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            I'm a Senior Software Engineer passionate about building impactful
            solutions.
          </h1>
          <p className="mt-6 text-xl leading-8">
            I'm a proactive problem-solver, passionate about taking on
            challenges and seizing opportunities. With a strong background in
            both front-end and back-end development, I specialize in creating
            high-performance, scalable software that delivers measurable
            results and user satisfaction.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              My Skills
            </h2>
            <p className="mt-6">
              I have experience with a wide range of technologies, including:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Languages:
                  </strong>{" "}
                  JavaScript, TypeScript, Python
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Frontend:
                  </strong>{" "}
                  React, Next.js, Tailwind CSS, HTML, CSS
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Backend:
                  </strong>{" "}
                  Node.js, Express, NestJS
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Databases:
                  </strong>{" "}
                  PostgreSQL, MongoDB
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-10 flex">
            <NextLink
              href={process.env.NEXT_PUBLIC_RESUME_LINK ?? ""}
              download="IkechukwuPeterResume"
              className="flex items-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <AiOutlineDownload className="-ml-0.5 mr-1.5 h-5 w-5" />
              Download Resume
            </NextLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}
