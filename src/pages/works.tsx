import Layout from "@/layout/layout";
import { SiteHeadContents } from "@/utils";
import { projects } from "@/data/projects";

export default function Works() {
  return (
    <Layout>
      <SiteHeadContents title="Ikechukwu Peter | Works" />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            My Work
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Here are some of the projects I'm proud to have worked on. Each one
            represents a unique challenge and a successful solution.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {project.title}
                      </a>
                    </h3>
                    <div className="mt-1 flex flex-wrap">
                      {project.skills.map((skill) => (
                        <span
                          key={skill.techTitle}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 mr-2 mb-2"
                        >
                          <skill.Icon className="w-4 h-4 mr-1" style={{ color: skill.color }} />
                          {skill.techTitle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
