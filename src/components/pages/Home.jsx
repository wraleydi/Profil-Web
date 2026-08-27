import { useState } from "react"

import Navbar from "../Navbar.jsx"
import Hero from "../Hero.jsx"
import Pillars from "../Pillars"
import Projects from "../Projects"
import ResumeNav from "../vitae/ResumeNav"
import Experience from "../vitae/Experience"
import Education from "../vitae/Education"
import Skills from "../vitae/Skills"
import Footer from "../Footer"

import Toast from "../../hooks/Toast"
import useScrollReveal from "../../hooks/useScroll"

import "../../index.css"

function Home() {
  useScrollReveal()

  const [activeTab, setActiveTab] = useState("experience")

  const [toast, setToast] = useState({
    visible: false,
    message: "",
  })

  const showToast = (message) => {
    setToast({
      visible: true,
      message,
    })

    setTimeout(() => {
      setToast({
        visible: false,
        message: "",
      })
    }, 3500)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <main className="flex-grow">
        <Navbar />
        <Hero />
        <Pillars />
        <Projects />

        <section
          id="resume"
          className="section-reveal py-12 sm:py-20 md:py-24 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
        >
          <ResumeNav onTabChange={setActiveTab} />
          <div key={activeTab} className="resume-tab-content">
            {activeTab === "experience" && (
              <Experience onShowToast={showToast} />
            )}

            {activeTab === "education" && <Education />}

            {activeTab === "skills" && <Skills />}
          </div>
        </section>
      </main>
      <Footer onShowToast={showToast} />
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}

export default Home
