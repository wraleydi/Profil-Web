import education from "../data/education"

function Education() {
  return (
    <div
      id="content-education"
      className="resume-content space-y-8 max-w-4xl mx-auto"
    >

      {education.map((item, index) => (
        <div
          key={index}
          className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200"
        >

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">

            <div>
              <span className="text-xs font-mono text-blue-600 uppercase font-semibold">
                {item.level}
              </span>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>
            </div>

          </div>

          <div className="space-y-6">

            {item.periods.map((period, periodIndex) => (
              <div key={periodIndex}>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">

                  <p className="text-xs text-slate-500 font-mono">
                    Key Coursework:
                  </p>

                  <span
                    className="
                      font-mono text-xs font-semibold
                      text-slate-700
                      bg-white
                      border border-slate-200
                      px-3 py-1
                      rounded-full
                      mt-2 sm:mt-0
                    "
                  >
                    {period.label}
                  </span>

                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700">

                  {period.coursework.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="
                        bg-white
                        p-2.5
                        rounded-xl
                        border border-slate-200
                      "
                    >
                      <i className="fa-solid fa-circle-check text-emerald-500 mr-2"></i>
                      {course}
                    </div>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      ))}

    </div>
  )
}

export default Education