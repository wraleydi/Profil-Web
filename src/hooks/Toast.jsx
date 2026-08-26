function Toast({ message, visible }) {
  return (
    <div
      className={`
        fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50
        bg-slate-900 text-white
        px-3.5 py-2.5 sm:px-5 sm:py-3
        rounded-xl sm:rounded-2xl
        shadow-xl
        flex items-center gap-2 sm:gap-3
        text-[10px] sm:text-xs font-mono
        border border-slate-800
        max-w-[calc(100vw-2rem)] sm:max-w-none
        transition-all duration-300

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }
      `}
    >
      <i className="fa-solid fa-circle-check text-emerald-400 text-xs sm:text-sm shrink-0"></i>

      <span className="truncate">
        {message}
      </span>
    </div>
  )
}

export default Toast