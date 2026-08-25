import { useState } from "react"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        <nav className="hidden md:flex items-center space-x-6 sm:space-x-8 text-sm font-medium">

          <a
            href="#home"
            className="text-slate-900 hover:text-slate-600 border-b-2 border-slate-900 pb-1 transition-colors"
          >
            Home
          </a>

          <a
            href="#resume"
            className="text-slate-600 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-colors"
          >
            Resume
          </a>

          <a
            href="/project.html"
            className="text-slate-600 hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-1 transition-colors"
          >
            Projects
          </a>

        </nav>

        <div className="text-center font-bold text-slate-900 text-xs sm:text-base tracking-tight truncate max-w-[250px]">
          Raleydi Wardhana's portfolio
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
          aria-label="Toggle Navigation"
        >
          <i
            className={`fa-solid ${
              mobileMenuOpen ? "fa-xmark" : "fa-bars"
            } text-xl`}
          ></i>
        </button>

        <div className="hidden md:flex items-center space-x-2 sm:space-x-4">

          <a
            href="https://linkedin.com/in/raleydi-wardhana-aa9a272b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg transition-transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg transition-transform hover:scale-110"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg transition-transform hover:scale-110"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

        </div>

      </div>

      <div
        className={`md:hidden overflow-hidden bg-white border-b border-slate-200 px-4 transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <nav className="space-y-3 py-2">

          <a
            onClick={closeMobileMenu}
            href="#home"
            className="block py-2 text-slate-900 font-semibold text-sm border-b border-slate-100"
          >
            Home
          </a>

          <a
            onClick={closeMobileMenu}
            href="#resume"
            className="block py-2 text-slate-700 font-medium text-sm border-b border-slate-100"
          >
            Resume
          </a>

          <a
            onClick={closeMobileMenu}
            href="/project.html"
            className="block py-2 text-slate-700 font-medium text-sm"
          >
            Projects
          </a>

        </nav>
        <div className="flex items-center gap-5 py-4 mt-2 border-t border-slate-100">

          <a
            href="https://linkedin.com/in/raleydi-wardhana-aa9a272b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.instagram.com/wraleydi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 text-lg"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

        </div>
      </div>
    </header>
  )
}

export default Navbar