import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./components/pages/Home"
import ProjectPage from "./components/pages/ProjectPage"

import ScrollToHash from "./hooks/ScrollToHash"

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
