import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Projects from './components/Projects'
import useScrollReveal from './hooks/useScroll'
import './index.css'

function App() {

  useScrollReveal()

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      <main className="flex-grow">
        <Navbar />
        <Hero />
        <Pillars />
        <Projects />
      </main>
    </div>
  )
}

export default App