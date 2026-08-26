import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Pillars from "./components/Pillars"
import Projects from "./components/Projects"
import ResumeNav from "./components/ResumeNav"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

import Toast from "./hooks/Toast"
import useScrollReveal from "./hooks/useScroll"

import "./index.css"

function App() {
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
          <div
            key={activeTab}
            className="resume-tab-content"
          >
            {activeTab === "experience" && <Experience onShowToast={showToast} />}

            {activeTab === "education" && <Education />}

            {activeTab === "skills" && <Skills />}
          </div>
        </section>
      </main>
      <Footer onShowToast={showToast} />
      <Toast
        message={toast.message}
        visible={toast.visible}
      />
    </div>
  )
}

export default App