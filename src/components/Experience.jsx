import experiences from "../data/experience"

function Experience({ onShowToast }) {

    const downloadCv = () => {
    onShowToast("Downloading Curriculum Vitae (PDF)...")
  }

  return (
    <div
      id="content-experience"
      className="resume-content space-y-8 max-w-4xl mx-auto"
    >

      <div className="relative pl-8 border-l-2 border-slate-200 space-y-8">

        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative group"
          >

            <div
              className="
                absolute -left-[41px] top-1
                w-4 h-4 rounded-full
                bg-slate-900 border-4 border-white
                group-hover:scale-125
                transition-transform
              "
            />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">

              <h3 className="text-lg font-bold text-slate-900">
                {experience.title}
              </h3>

              <span
                className="
                  font-mono text-xs font-semibold
                  text-slate-500
                  bg-slate-100
                  px-3 py-1
                  rounded-full
                  w-fit
                  mt-1 sm:mt-0
                "
              >
                {experience.period}
              </span>

            </div>

            <p className="text-xs font-mono text-blue-600 mb-2">
              {experience.company}
            </p>

            <ul
              className="
                text-slate-600
                text-xs sm:text-sm
                space-y-1.5
                list-disc
                list-inside
                leading-relaxed
              "
            >
              {experience.description.map((item, i) => (
                <li key={i}>
                  {item}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>

      <div className="text-center mt-12">
        <button
  onClick={downloadCv}
  className="inline-flex items-center px-8 py-3.5 rounded-2xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition shadow-md active:scale-95"
>
  <i className="fa-solid fa-download mr-2"></i>
  DOWNLOAD FULL CV (PDF)
</button>
      </div>

    </div>
  )
}

export default Experience