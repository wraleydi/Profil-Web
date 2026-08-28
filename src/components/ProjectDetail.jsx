import { useRef } from "react"
import { useParams } from "react-router-dom"
import projects from "../data/projects"

function ProjectDetail() {
  const { projectId } = useParams()
  const scrollRef = useRef(null)

  const project = projects.find((project) => project.id === projectId)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollAmount = clientWidth * 0.6
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      })
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500 font-mono text-sm">Project not found.</p>
      </div>
    )
  }

  const slides = [
    {
      title: "Seeing the Vision.",
      description: project.vision,
      image:
        project.visionImage ||
        project.heroImage ||
        project.image ||
        "https://via.placeholder.com/800x500",
    },
    {
      title: "Forming A Plan.",
      description: project.planning,
      image:
        project.planningImage ||
        project.heroImage ||
        project.image ||
        "https://via.placeholder.com/800x500",
    },
    {
      title: "Making It Happen.",
      description: project.implementation,
      image:
        project.implementationImage ||
        project.heroImage ||
        project.image ||
        "https://via.placeholder.com/800x500",
    },
    {
      title: "Success & Beyond.",
      description: project.outcome || project.implementation,
      image:
        project.outcomeImage ||
        project.heroImage ||
        project.image ||
        "https://via.placeholder.com/800x500",
    },
  ]

  return (
    <main className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={project.heroImage || project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-end pb-16 sm:pb-20">
          <div className="max-w-4xl text-white">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
              {project.category}
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none font-sans">
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

      <section className="py-12 sm:py-20 relative w-full px-2 sm:px-6">
        <div className="relative group max-w-[100vw]">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-900 shadow-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full border border-slate-200 bg-white/95 backdrop-blur-md text-slate-900 shadow-2xl hover:bg-slate-900 hover:text-white transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 sm:space-x-10 overflow-x-auto scrollbar-none scroll-smooth py-6 px-4 sm:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {slides.map((item, index) => (
              <article
                key={index}
                className="flex-none w-[90vw] sm:w-[65vw] lg:w-[45vw] xl:w-[38vw] group/card transition-transform duration-300 hover:-translate-y-1"
              >

                <div className="relative aspect-[16/10] sm:aspect-[4/3] mb-6 overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="mb-3">
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 font-sans">
                    {item.title}
                  </h2>
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal max-w-none">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetail
