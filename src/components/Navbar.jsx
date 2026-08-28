import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const resumePath = location.pathname === "/" ? "#resume" : "/#resume"
  const projectsPath = location.pathname === "/" ? "#projects" : "/#projects"

  const isProjectDetail = location.pathname.startsWith("/project/")
  const isHome = location.pathname === "/" && location.hash === ""
  const isResumeActive =
    location.pathname === "/" && location.hash === "#resume"

  const isProjectsActive =
    isProjectDetail ||
    (location.pathname === "/" && location.hash === "#project")

  const navTextClass = isProjectDetail
    ? "text-white hover:text-white/70"
    : "text-slate-600 hover:text-slate-900"

  const homeTextClass = isHome
    ? isProjectDetail
      ? "text-white"
      : "text-slate-900"
    : navTextClass

  const resumeTextClass = isResumeActive
    ? isProjectDetail
      ? "text-white"
      : "text-slate-900"
    : navTextClass

  const projectsTextClass = isProjectsActive
    ? isProjectDetail
      ? "text-white hover:text-white/70"
      : "text-slate-900 hover:text-slate-600"
    : navTextClass

  return (
    <header
      className={`z-40 w-full ${
        isProjectDetail
          ? "absolute top-0 left-0 bg-transparent"
          : "sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100"
      }`}
    >

      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 grid grid-cols-2 md:grid-cols-3 items-center">
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8 text-sm font-medium justify-self-start">

          <Link
            to="/"
            className={`${homeTextClass} ${
              isHome ? "border-b-2" : ""
            } pb-1 transition-colors`}
          >
            Home
          </Link>

          <Link
            to={resumePath}
            className={`${resumeTextClass} ${
              isResumeActive ? "border-b-2 border-slate-900" : ""
            } pb-1 transition-colors`}
          >
            Resume
          </Link>

          <Link
            to={projectsPath}
            className={`${projectsTextClass} ${
              isProjectsActive ? "border-b-2" : ""
            } ${
              isProjectDetail ? "border-white" : "border-slate-900"
            } pb-1 transition-colors`}
          >
            Projects
          </Link>
        </nav>

        <div
          className={`text-center font-bold text-xs sm:text-base tracking-tight truncate min-w-0 md:justify-self-center ${
            isProjectDetail ? "text-white" : "text-slate-900"
          }`}
        >
          Raleydi Wardhana portfolio
        </div>

        <div className="hidden md:flex items-center justify-self-end space-x-2 sm:space-x-4">
          <a
            href="https://linkedin.com/in/raleydi-wardhana-aa9a272b9"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg transition-transform hover:scale-110`}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg transition-transform hover:scale-110`}
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg transition-transform hover:scale-110`}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <button
          onClick={toggleMobileMenu}
          className={`md:hidden justify-self-end p-2 rounded-lg transition ${
            isProjectDetail
              ? "text-white hover:text-white/70 hover:bg-white/10"
              : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
          }`}
          aria-label="Toggle Navigation"
        >
          <i
            className={`fa-solid ${
              mobileMenuOpen ? "fa-xmark" : "fa-bars"
            } text-xl`}
          ></i>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden px-4 transition-all duration-300 ${
          isProjectDetail
            ? "bg-slate-950/95 backdrop-blur-md"
            : "bg-white border-b border-slate-200"
        } ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="space-y-3 py-2">

          <Link
            onClick={closeMobileMenu}
            to="/"
            className={`block py-2 font-semibold text-sm border-b ${
              isHome
                ? isProjectDetail
                  ? "text-white border-white"
                  : "text-slate-900 border-slate-900"
                : isProjectDetail
                  ? "text-white border-white/10"
                  : "text-slate-700 border-slate-100"
            }`}
          >
            Home
          </Link>

          <Link
            onClick={closeMobileMenu}
            to={resumePath}
            className={`block py-2 font-medium text-sm border-b ${
              isResumeActive
                ? isProjectDetail
                  ? "text-white border-white"
                  : "text-slate-900 border-slate-900"
                : isProjectDetail
                  ? "text-white/80 border-white/10"
                  : "text-slate-700 border-slate-100"
            }`}
          >
            Resume
          </Link>

          <Link
            onClick={closeMobileMenu}
            to={projectsPath}
            className={`block py-2 font-medium text-sm ${
              isProjectsActive
                ? isProjectDetail
                  ? "text-white border-b-2 border-white"
                  : "text-slate-900 border-b-2 border-slate-900"
                : isProjectDetail
                  ? "text-white/80"
                  : "text-slate-700"
            }`}
          >
            Projects
          </Link>
        </nav>

        <div
          className={`flex items-center gap-5 py-4 mt-2 border-t ${
            isProjectDetail ? "border-white/10" : "border-slate-100"
          }`}
        >

          <a
            href="https://linkedin.com/in/raleydi-wardhana-aa9a272b9"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg`}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg`}
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isProjectDetail
                ? "text-white hover:text-white/70"
                : "text-slate-600 hover:text-slate-900"
            } text-lg`}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
