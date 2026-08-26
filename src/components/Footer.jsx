function Footer({ onShowToast }) {

  const copyEmail = async () => {
    await navigator.clipboard.writeText("raleydi06@gmail.com")

    onShowToast("Email copied to clipboard!")
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 py-8 sm:py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-row items-center justify-between gap-3 sm:gap-6">

          <div className="min-w-0 flex-1">

            <span className="text-sm sm:text-lg font-bold tracking-tight text-white">
              Raleydi Wardhana
            </span>

            <p className="text-slate-400 text-[9px] sm:text-xs mt-1 leading-relaxed">
              Engineering Physics | Instrumentation & Control,
              Building Physics, Materials & Energy
            </p>

          </div>

          <div className="flex-shrink-0">

            <button
              onClick={copyEmail}
              className="text-slate-300 hover:text-white transition flex items-center gap-1 sm:gap-2 font-mono text-[9px] sm:text-xs"
            >
              <i className="fa-regular fa-copy"></i>

              <span>
                raleydi06@gmail.com
              </span>

            </button>

          </div>

        </div>

        <div className="border-t border-slate-900 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-[8px] sm:text-xs text-slate-600 font-mono leading-relaxed">

          &copy; 2026 Raleydi Wardhana Engineering Physics.
          Built with Clean Engineering Blueprint Aesthetic.

        </div>

      </div>

    </footer>
  )
}

export default Footer