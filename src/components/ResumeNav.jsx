function ResumeNav({ activeTab, onTabChange }) {

  const switchResumeTab = (tabKey) => {
    onTabChange(tabKey)
  }

  return (
    <>

      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Curriculum Vitae
        </span>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
          Experience & Education Overview.
        </h2>

        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          Combining a solid academic foundation with hands-on physical system
          engineering experience.
        </p>
      </div>

      <div className="block min-[400px]:hidden mb-8 max-w-2xl mx-auto px-1">
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 text-center">

          <button
            onClick={() => switchResumeTab("experience")}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2
              ${
                activeTab === "experience"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-briefcase"></i>
            <span>Experience</span>
          </button>

          <button
            onClick={() => switchResumeTab("education")}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2
              ${
                activeTab === "education"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Education</span>
          </button>

          <button
            onClick={() => switchResumeTab("skills")}
            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2
              ${
                activeTab === "skills"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                  : "text-slate-600 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-sliders"></i>
            <span>Skills</span>
          </button>

        </div>
      </div>
      <div className="hidden min-[400px]:flex justify-center border-b border-slate-200 mb-10">
        <div className="flex space-x-8">

          <button
            onClick={() => switchResumeTab("experience")}
            className={`pb-3 text-sm transition-colors flex items-center gap-2
              ${
                activeTab === "experience"
                  ? "border-b-2 border-slate-900 font-bold text-slate-900"
                  : "border-b-2 border-transparent font-semibold text-slate-500 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-briefcase text-xs"></i>
            <span>Experience & Research</span>
          </button>

          <button
            onClick={() => switchResumeTab("education")}
            className={`pb-3 text-sm transition-colors flex items-center gap-2
              ${
                activeTab === "education"
                  ? "border-b-2 border-slate-900 font-bold text-slate-900"
                  : "border-b-2 border-transparent font-semibold text-slate-500 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-graduation-cap text-xs"></i>
            <span>Education</span>
          </button>

          <button
            onClick={() => switchResumeTab("skills")}
            className={`pb-3 text-sm transition-colors flex items-center gap-2
              ${
                activeTab === "skills"
                  ? "border-b-2 border-slate-900 font-bold text-slate-900"
                  : "border-b-2 border-transparent font-semibold text-slate-500 hover:text-slate-900"
              }
            `}
          >
            <i className="fa-solid fa-sliders text-xs"></i>
            <span>Technical Skills</span>
          </button>

        </div>
      </div>
    </>
  )
}

export default ResumeNav