import skills from "../data/skills"

function Skills() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {skills.map((category) => (
          <div
            key={category.title}
            className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200"
          >

            {/* Category Header */}
            <h4 className="font-bold text-slate-900 text-sm mb-4 flex items-center">
              <i
                className={`fa-solid ${category.icon} text-blue-600 mr-2`}
              ></i>

              {category.title}
            </h4>

            {/* Skills */}
            <div className="space-y-3">

              {category.skills.map((skill) => (
                <div key={skill.name}>

                  {/* Skill name + level */}
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span>{skill.name}</span>

                    <span>{skill.level}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-slate-900 rounded-full transition-all duration-700"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    ></div>

                  </div>

                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Skills