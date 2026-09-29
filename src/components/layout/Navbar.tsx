import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const openHelp = () => {
    setMenuOpen(false)
    setHelpOpen(true)
  }

  const closeHelp = () => {
    setHelpOpen(false)
  }

  return (
    <>
      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <nav className="navbar">

        {/* LOGO */}
        <Link
          to="/"
          className="nav-logo"
          onClick={closeMenu}
        >
          Victim<span>Lens</span>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <div className="nav-links">

          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/victimology" onClick={closeMenu}>
            Victimology
          </Link>

          <Link to="/types" onClick={closeMenu}>
            Types
          </Link>

          <Link to="/rights" onClick={closeMenu}>
            Rights
          </Link>

          <Link to="/impact" onClick={closeMenu}>
            Impact
          </Link>

          <Link to="/prevention" onClick={closeMenu}>
            Prevention
          </Link>

          <Link to="/law" onClick={closeMenu}>
            Law
          </Link>

          <Link to="/cases" onClick={closeMenu}>
            Cases
          </Link>

          <Link to="/resources" onClick={closeMenu}>
            Resources
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

        </div>


        {/* =====================================================
            GET HELP / SOS
            ===================================================== */}

        <button
          type="button"
          className="nav-sos"
          onClick={openHelp}
          aria-label="Open emergency and support options"
        >
          <span>🚨</span>
          GET HELP
        </button>


        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          {menuOpen ? "✕" : "☰"}
        </button>


        {/* =====================================================
            MOBILE MENU
            ===================================================== */}

        {menuOpen && (
          <div className="mobile-menu">

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/victimology" onClick={closeMenu}>
              Victimology
            </Link>

            <Link to="/types" onClick={closeMenu}>
              Types
            </Link>

            <Link to="/rights" onClick={closeMenu}>
              Rights
            </Link>

            <Link to="/impact" onClick={closeMenu}>
              Impact
            </Link>

            <Link to="/prevention" onClick={closeMenu}>
              Prevention
            </Link>

            <Link to="/law" onClick={closeMenu}>
              Law
            </Link>

            <Link to="/cases" onClick={closeMenu}>
              Cases
            </Link>

            <Link to="/resources" onClick={closeMenu}>
              Resources
            </Link>

            <Link to="/about" onClick={closeMenu}>
              About
            </Link>


            {/* MOBILE GET HELP */}

            <button
              type="button"
              className="mobile-sos"
              onClick={openHelp}
            >
              🚨 GET HELP / SOS
            </button>

          </div>
        )}

      </nav>


      {/* =====================================================
          GET HELP / SOS MODAL
          ===================================================== */}

      {helpOpen && (
        <div
          className="help-overlay"
          onClick={closeHelp}
          role="presentation"
        >

          <div
            className="help-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="help-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              className="help-close"
              onClick={closeHelp}
              aria-label="Close help window"
            >
              ✕
            </button>


            {/* =================================================
                HEADER
                ================================================= */}

            <div className="help-header">

              <div className="help-icon">
                🚨
              </div>

              <div>

                <p className="help-eyebrow">
                  VICTIMLENS SUPPORT
                </p>

                <h2 id="help-modal-title">
                  Are you in immediate danger?
                </h2>

              </div>

            </div>


            {/* INTRODUCTION */}

            <p className="help-intro">
              If you or someone else is in immediate danger in India,
              contact emergency services now.
            </p>


            {/* =================================================
                112 NATIONAL EMERGENCY
                ================================================= */}

            <a
              href="tel:112"
              className="help-emergency"
            >

              <div>

                <span className="help-card-label">
                  NATIONAL EMERGENCY
                </span>

                <strong>
                  112
                </strong>

                <span>
                  Police • Fire • Ambulance • Emergency response
                </span>

              </div>

              <span className="help-call">
                CALL 112 →
              </span>

            </a>


            {/* =================================================
                SUPPORT OPTIONS
                ================================================= */}

            <div className="help-options">


              {/* WOMEN HELPLINE */}

              <a
                href="tel:181"
                className="help-option"
              >

                <span className="help-option-icon">
                  👩
                </span>

                <span className="help-option-content">

                  <strong>
                    Women Helpline
                  </strong>

                  <small>
                    Support & assistance
                  </small>

                </span>

                <strong className="help-number">
                  181
                </strong>

              </a>


              {/* CHILD HELPLINE */}

              <a
                href="tel:1098"
                className="help-option"
              >

                <span className="help-option-icon">
                  🧒
                </span>

                <span className="help-option-content">

                  <strong>
                    Child Helpline
                  </strong>

                  <small>
                    Children in crisis
                  </small>

                </span>

                <strong className="help-number">
                  1098
                </strong>

              </a>


              {/* CYBERCRIME */}

              <a
                href="tel:1930"
                className="help-option"
              >

                <span className="help-option-icon">
                  💻
                </span>

                <span className="help-option-content">

                  <strong>
                    Cyber Crime
                  </strong>

                  <small>
                    Cybercrime reporting
                  </small>

                </span>

                <strong className="help-number">
                  1930
                </strong>

              </a>


              {/* FREE LEGAL AID */}

              <a
                href="tel:15100"
                className="help-option"
              >

                <span className="help-option-icon">
                  ⚖️
                </span>

                <span className="help-option-content">

                  <strong>
                    Free Legal Aid
                  </strong>

                  <small>
                    Legal assistance
                  </small>

                </span>

                <strong className="help-number">
                  15100
                </strong>

              </a>

            </div>


            {/* =================================================
                RESOURCES
                ================================================= */}

            <Link
              to="/resources"
              className="help-resources"
              onClick={closeHelp}
            >
              View All Help & Resources →
            </Link>


            {/* =================================================
                IMPORTANT NOTICE
                ================================================= */}

            <p className="help-notice">
              VictimLens provides information and connects users
              to official support services. It does not replace
              emergency, medical, police, legal or government services.
            </p>


            {/* =================================================
                CLOSE
                ================================================= */}

            <button
              type="button"
              className="help-done"
              onClick={closeHelp}
            >
              I'M SAFE — CLOSE
            </button>

          </div>

        </div>
      )}

    </>
  )
}

export default Navbar