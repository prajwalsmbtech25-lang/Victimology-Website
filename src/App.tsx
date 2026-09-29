import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Victimology from "./pages/Victimology"
import Types from "./pages/Types"
import Rights from "./pages/Rights"
import Impact from "./pages/Impact"
import Prevention from "./pages/Prevention"
import Law from "./pages/Law"
import Cases from "./pages/Cases"
import Resources from "./pages/Resources"
import About from "./pages/About"

import SpaceBackground from "./components/ui/space-background"
import Navbar from "./components/layout/Navbar"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.history.scrollRestoration = "manual"

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    })
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* 3D star background: sits behind every page except Home */}
      <SpaceBackground />

      <div className="victimlens">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/victimology" element={<Victimology />} />
          <Route path="/types" element={<Types />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/law" element={<Law />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App