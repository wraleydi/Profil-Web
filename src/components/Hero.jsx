import Blueprint from "../assets/Blueprint"
import profil from "../assets/profil.jpeg"

function Hero() {
  return (
    <section id="home" className="section-reveal relative overflow-hidden py-8 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Blueprint />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] xs:max-w-xs sm:max-w-md aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 group border-4 border-slate-50">

            <img
              src={profil}
              alt="Raleydi Wardhana - Engineering Physics Specialist"
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-mono uppercase tracking-wider mb-1">
                B.Eng in Engineering Physics
              </span>
            </div>

          </div>
        </div>

        <div className="lg:col-span-7 relative flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 sm:mb-6">
            I'm <span>Raleydi Wardhana</span>,<br />
            an <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">Engineering Physics</span>
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
            An Engineering Physics graduate dedicated to integrating{" "}
            <strong className="text-slate-900 font-semibold">Instrumentation & Control</strong>,{" "}
            <strong className="text-slate-900 font-semibold">Building Physics</strong>,{" "}
            <strong className="text-slate-900 font-semibold">Experimental Materials</strong>, and{" "}
            <strong className="text-slate-900 font-semibold">Multiphysics Computation</strong> to engineer{" "}
            <strong className="text-slate-900 font-semibold">green energy</strong> technologies and smart, efficient, sustainable industrial systems.
          </p>

          <p className="text-[11px] sm:text-sm text-slate-500 font-mono mb-6 sm:mb-8">
            ↓ Scroll down to explore engineering projects, research, and my resume.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 w-full max-w-md">
            <a href="#projects" className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition shadow-lg shadow-slate-900/10 active:scale-95">
              PROJECTS
            </a>

            <a href="#resume" className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition shadow-lg shadow-slate-900/10 active:scale-95">
              RESUME
            </a>

            <a href="https://linkedin.com/in/raleydi-wardhana-aa9a272b9" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-xs tracking-wIDER uppercase hover:bg-slate-800 transition shadow-lg shadow-slate-900/10 active:scale-95">
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero