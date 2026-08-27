import { useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetail() {
  const { projectId } = useParams()

  const project = projects.find((project) => project.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 font-mono text-sm">Project not found.</p>
      </div>
    )
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={project.heroImage || project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-end pb-16 sm:pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              {project.category}
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-white/90 max-w-2xl">
                {project.subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <article>
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Seeing the Vision.
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {project.vision}
            </p>
          </article>
          <article>
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Forming A Plan.
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {project.planning}
            </p>
          </article>
          <article>
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Making It Happen.
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              {project.implementation}
            </p>
          </article>
        </div>
      </section>

      {project.mainImage && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <img
              src={project.mainImage}
              alt={`${project.title} project`}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      )}

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
                Project Overview
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 mb-5">
                About The Project.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h3 className="font-bold text-slate-900 mb-6">
                Project Information
              </h3>

              <div className="space-y-5">
                {project.status && (
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                      Status
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {project.status}
                    </span>
                  </div>
                )}

                {project.category && (
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                      Category
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {project.category}
                    </span>
                  </div>
                )}

                {project.year && (
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                      Year
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                      {project.year}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Objective
            </span>

            <h3 className="text-2xl font-extrabold mt-3 mb-4">
              What I Wanted To Achieve.
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed">
              {project.objective}
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Technologies
            </span>

            <h3 className="text-2xl font-extrabold mt-3 mb-5">
              Tools & Technologies.
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {project.gallery?.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-semibold">
              Project Documentation
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">
              Building The System.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-slate-100"
              >
                <img
                  src={image}
                  alt={`${project.title} documentation ${index + 1}`}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-600 hover:text-slate-900 transition"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Portfolio
          </a>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail
