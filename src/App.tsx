import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Victim<span>Lens</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/victimology">Victimology</Link>
          <Link to="/types">Types</Link>
          <Link to="/rights">Rights</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/prevention">Prevention</Link>
          <Link to="/law">Law</Link>
          <Link to="/cases">Cases</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <Link
          to="/about#contact"
          className="nav-contact"
          onClick={closeMenu}
        >
          Contact
        </Link>

        {menuOpen && (
          <div className="mobile-menu">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/victimology" onClick={closeMenu}>Victimology</Link>
            <Link to="/types" onClick={closeMenu}>Types</Link>
            <Link to="/rights" onClick={closeMenu}>Rights</Link>
            <Link to="/impact" onClick={closeMenu}>Impact</Link>
            <Link to="/prevention" onClick={closeMenu}>Prevention</Link>
            <Link to="/law" onClick={closeMenu}>Law</Link>
            <Link to="/cases" onClick={closeMenu}>Cases</Link>
            <Link to="/resources" onClick={closeMenu}>Resources</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/about#contact" onClick={closeMenu}>Contact</Link>
          </div>
        )}
      </nav>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
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
