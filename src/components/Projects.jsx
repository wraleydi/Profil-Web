import { useRef } from "react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Projects() {
  const projectTrackRef = useRef(null)

  const scrollProjects = (direction) => {
    const track = projectTrackRef.current

    if (!track) return

    const scrollAmount = 380

    track.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="projects"
      className="section-reveal py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">
            Engineering Portfolio
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Research.
          </h2>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => scrollProjects(-1)}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20
            w-11 h-11 rounded-full border border-slate-300
            bg-white hover:border-slate-900
            flex items-center justify-center
            text-slate-700 hover:bg-slate-900 hover:text-white
            transition shadow-md active:scale-90
          "
          title="Previous"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i>
        </button>

        <div
          ref={projectTrackRef}
          className="
            flex gap-6 overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth hide-scrollbar py-2
          "
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                project-card snap-start flex-none
                w-[88vw] max-w-[320px]
                sm:max-w-none sm:w-[380px]
                md:w-[420px]
                bg-white rounded-3xl
                border border-slate-100
                shadow-sm hover:shadow-xl
                transition-all duration-300
                flex flex-col overflow-hidden
              "
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    hover:scale-105
                  "
                />
                <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        bg-slate-900/80 backdrop-blur-md
                        text-white font-mono
                        text-[9px] sm:text-[10px]
                        px-2.5 py-1
                        rounded-full uppercase tracking-wider
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-2 mt-1">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="
                  inline-flex items-center justify-center
                  px-6 py-2.5 rounded-xl
                  bg-slate-900 text-white
                  font-mono text-xs font-semibold
                  uppercase tracking-wider
                  hover:bg-slate-800
                  transition active:scale-95
                  w-fit
                  "
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollProjects(1)}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20
            w-11 h-11 rounded-full border border-slate-300
            bg-white hover:border-slate-900
            flex items-center justify-center
            text-slate-700 hover:bg-slate-900 hover:text-white
            transition shadow-md active:scale-90
          "
          title="Next"
        >
          <i className="fa-solid fa-arrow-right text-sm"></i>
        </button>
      </div>
    </section>
  )
}

export default Projects
