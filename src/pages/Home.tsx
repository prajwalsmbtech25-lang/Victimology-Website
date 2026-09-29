import { useState } from "react"
import { Link } from "react-router-dom"
import HorizonHero from "../components/ui/horizon-hero-section"
import "./home.css"

const stats = [
  {
    number: "112",
    label: "National Emergency",
  },
  {
    number: "181",
    label: "Women Helpline",
  },
  {
    number: "1098",
    label: "Child Helpline",
  },
  {
    number: "1930",
    label: "Cyber Crime",
  },
]

type PathOption = {
  id: string
  icon: string
  title: string
  short: string
  description: string
  link: string
  button: string
}

const pathOptions: PathOption[] = [
  {
    id: "01",
    icon: "◉",
    title: "Understand Victimization",
    short: "Learn",
    description:
      "Understand what victimization means, who can be affected, how harm occurs, and why victimology places the victim at the centre.",
    link: "/victimology",
    button: "Explore Victimology",
  },
  {
    id: "02",
    icon: "⚖",
    title: "Know Your Rights",
    short: "Rights",
    description:
      "Explore dignity, fair treatment, information, protection, participation, assistance, restitution and compensation.",
    link: "/rights",
    button: "Explore Victim Rights",
  },
  {
    id: "03",
    icon: "⬡",
    title: "Stay Safe & Prevent Harm",
    short: "Safety",
    description:
      "Explore prevention, awareness, early response, safer choices, community responsibility and ways to reduce further harm.",
    link: "/prevention",
    button: "Explore Prevention",
  },
  {
    id: "04",
    icon: "✚",
    title: "Find Help & Support",
    short: "Support",
    description:
      "Access emergency information, helplines, legal assistance, cybercrime reporting and other official support resources.",
    link: "/resources",
    button: "Open Support Centre",
  },
]

const toolkitItems = [
  {
    number: "01",
    icon: "⌕",
    title: "Situation Explorer",
    text:
      "Start with a question and find the VictimLens area that best matches what you are looking for.",
    link: "/victimology",
  },
  {
    number: "02",
    icon: "⚖",
    title: "Rights Explorer",
    text:
      "Explore victim rights by topic instead of searching through long blocks of legal information.",
    link: "/rights",
  },
  {
    number: "03",
    icon: "⬡",
    title: "Safety Guide",
    text:
      "Learn about prevention, risk awareness, early response and reducing further harm.",
    link: "/prevention",
  },
  {
    number: "04",
    icon: "✚",
    title: "Support Centre",
    text:
      "Move from information toward appropriate official services, reporting channels and assistance.",
    link: "/resources",
  },
]

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    text:
      "Find the part of VictimLens that matches what you need.",
  },
  {
    number: "02",
    title: "Understand",
    text:
      "Build a clearer understanding of victimization and its effects.",
  },
  {
    number: "03",
    title: "Know",
    text:
      "Explore rights, justice responses and available forms of support.",
  },
  {
    number: "04",
    title: "Act",
    text:
      "Use reliable information to identify appropriate next steps.",
  },
]

function HomeMark() {
  return (
    <div className="home-page-mark" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="42"
          className="home-mark-ring"
        />

        <path
          d="M27 30 L48 73 L58 53 L73 30"
          className="home-mark-v"
        />

        <circle
          cx="62"
          cy="50"
          r="13"
          className="home-mark-lens"
        />

        <circle
          cx="62"
          cy="50"
          r="4"
          className="home-mark-core"
        />
      </svg>
    </div>
  )
}

function Home() {
  const [selectedPath, setSelectedPath] = useState<PathOption>(
    pathOptions[0],
  )

  return (
    <div className="home-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="home-hero">

        <HorizonHero stats={stats} />

      </section>


      {/* =====================================================
          CHOOSE YOUR PATH
          ===================================================== */}

      <section
        id="choose-path"
        className="home-section home-path-section"
      >

        <div className="home-container">

          <div className="home-section-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>START HERE</span>
            </div>

            <h2>
              What brings you
              <br />
              <span>to VictimLens?</span>
            </h2>

            <p>
              You do not need to know which page to open.
              Choose what you are looking for and explore
              the part of VictimLens that fits your need.
            </p>

          </div>


          {/* PATH BUTTONS */}

          <div className="home-path-grid">

            {pathOptions.map((path) => {

              const active = selectedPath.id === path.id

              return (
                <button
                  type="button"
                  className={`home-path-card ${
                    active ? "is-active" : ""
                  }`}
                  key={path.id}
                  onClick={() => setSelectedPath(path)}
                >

                  <div className="home-path-top">

                    <div className="home-path-icon">
                      {path.icon}
                    </div>

                    <span className="home-path-number">
                      {path.id}
                    </span>

                  </div>

                  <span className="home-path-category">
                    {path.short}
                  </span>

                  <h3>
                    {path.title}
                  </h3>

                  <p>
                    {path.description}
                  </p>

                  <span className="home-path-select">
                    {active ? "SELECTED" : "EXPLORE"}
                    <span>→</span>
                  </span>

                </button>
              )
            })}

          </div>


          {/* LIVE RESPONSE */}

          <div className="home-path-response">

            <div className="home-path-response-mark">
              <HomeMark />
            </div>

            <div className="home-path-response-copy">

              <span>
                YOUR SELECTED PATH
              </span>

              <h3>
                {selectedPath.title}
              </h3>

              <p>
                {selectedPath.description}
              </p>

            </div>

            <Link
              to={selectedPath.link}
              className="home-btn home-btn-gold"
            >
              {selectedPath.button}
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY VICTIMLENS
          ===================================================== */}

      <section className="home-section home-why">

        <div className="home-container">

          <div className="home-section-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>WHY VICTIMLENS?</span>
            </div>

            <h2>
              Understand.
              <br />
              <span>Know. Protect. Connect.</span>
            </h2>

            <p>
              VictimLens brings victimology, victim rights,
              impact, prevention, justice and practical
              support into one connected experience.
            </p>

          </div>


          <div className="home-why-grid">

            <div className="home-why-card">

              <div className="home-card-number">
                01
              </div>

              <div className="home-card-icon">
                ◉
              </div>

              <h3>
                Understand
              </h3>

              <p>
                Explore victimization, victim experiences,
                impact and the role of victimology.
              </p>

              <Link to="/victimology">
                Explore Victimology
                <span>→</span>
              </Link>

            </div>


            <div className="home-why-card">

              <div className="home-card-number">
                02
              </div>

              <div className="home-card-icon">
                ⚖
              </div>

              <h3>
                Know Your Rights
              </h3>

              <p>
                Explore dignity, protection, information,
                participation, assistance and remedies.
              </p>

              <Link to="/rights">
                View Victim Rights
                <span>→</span>
              </Link>

            </div>


            <div className="home-why-card">

              <div className="home-card-number">
                03
              </div>

              <div className="home-card-icon">
                ✚
              </div>

              <h3>
                Find Support
              </h3>

              <p>
                Find emergency information, official
                helplines, legal aid and reporting channels.
              </p>

              <Link to="/resources">
                Get Help & Resources
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VICTIMLENS TOOLKIT
          ===================================================== */}

      <section className="home-section home-toolkit-section">

        <div className="home-container">

          <div className="home-toolkit-heading">

            <div>

              <div className="home-eyebrow">
                <span className="home-eyebrow-line" />
                <span>THE VICTIMLENS TOOLKIT</span>
              </div>

              <h2>
                More than information.
                <br />
                <span>A way to explore it.</span>
              </h2>

            </div>

            <p>
              VictimLens is organised around the questions
              visitors may actually have — not simply around
              chapters of information.
            </p>

          </div>


          <div className="home-toolkit-grid">

            {toolkitItems.map((item) => (

              <Link
                to={item.link}
                className="home-toolkit-card"
                key={item.number}
              >

                <div className="home-toolkit-header">

                  <span className="home-toolkit-number">
                    {item.number}
                  </span>

                  <span className="home-toolkit-icon">
                    {item.icon}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className="home-toolkit-status">
                  OPEN TOOL →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CORE VICTIMOLOGY
          ===================================================== */}

      <section className="home-section home-core-section">

        <div className="home-container">

          <div className="home-core-layout">

            <div className="home-core-copy">

              <div className="home-eyebrow">
                <span className="home-eyebrow-line" />
                <span>THE CORE OF VICTIMLENS</span>
              </div>

              <h2>
                Put the
                <br />
                <span>victim in focus.</span>
              </h2>

              <p>
                Victimology examines victims and victimization,
                the impact of harm, victims' needs and rights,
                and the responses of justice systems,
                institutions and communities.
              </p>

              <Link
                to="/victimology"
                className="home-text-link"
              >
                Understand Victimology
                <span>→</span>
              </Link>

            </div>


            {/* VISUAL CORE */}

            <div className="home-core-diagram">

              <div className="home-core-orbit orbit-one">
                <span>IMPACT</span>
              </div>

              <div className="home-core-orbit orbit-two">
                <span>RIGHTS</span>
              </div>

              <div className="home-core-orbit orbit-three">
                <span>SUPPORT</span>
              </div>

              <div className="home-core-center">

                <HomeMark />

                <strong>
                  VICTIM
                </strong>

                <span>
                  AT THE CENTRE
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHEN VICTIMIZATION OCCURS
          ===================================================== */}

      <section className="home-section home-journey">

        <div className="home-container">

          <div className="home-journey-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>WHEN VICTIMIZATION OCCURS</span>
            </div>

            <h2>
              From immediate safety
              <br />
              <span>to support and recovery.</span>
            </h2>

            <p>
              Every situation is different. VictimLens
              provides general information and points
              visitors toward appropriate official services.
            </p>

          </div>


          <div className="home-journey-grid">

            <div className="home-journey-card">

              <span>
                STEP 01
              </span>

              <h3>
                Get Safe
              </h3>

              <p>
                When there is immediate danger, prioritise
                safety and contact emergency services.
              </p>

            </div>


            <div className="home-journey-card">

              <span>
                STEP 02
              </span>

              <h3>
                Get Help
              </h3>

              <p>
                Identify the emergency, legal, medical,
                welfare or support service relevant to the situation.
              </p>

            </div>


            <div className="home-journey-card">

              <span>
                STEP 03
              </span>

              <h3>
                Report & Record
              </h3>

              <p>
                Explore reporting channels and preserve
                relevant information that may assist official processes.
              </p>

            </div>


            <div className="home-journey-card">

              <span>
                STEP 04
              </span>

              <h3>
                Support & Recover
              </h3>

              <p>
                Explore legal assistance, victim compensation,
                welfare services and other appropriate support.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK SUPPORT
          ===================================================== */}

      <section className="home-support">

        <div className="home-support-glow" />

        <div className="home-container home-support-content">

          <div className="home-eyebrow">
            <span className="home-eyebrow-line" />
            <span>NEED HELP NOW?</span>
          </div>

          <h2>
            Support should be
            <br />
            <span>easy to find.</span>
          </h2>

          <p>
            VictimLens provides quick access to emergency
            and support information. For immediate danger,
            contact the appropriate emergency service directly.
          </p>


          <div className="home-support-grid">

            <a
              href="tel:112"
              className="home-support-card"
            >
              <span>EMERGENCY</span>

              <strong>
                112
              </strong>

              <p>
                National emergency response
              </p>

              <span>
                CALL →
              </span>
            </a>


            <a
              href="tel:181"
              className="home-support-card"
            >
              <span>WOMEN</span>

              <strong>
                181
              </strong>

              <p>
                Women Helpline
              </p>

              <span>
                CALL →
              </span>
            </a>


            <a
              href="tel:1098"
              className="home-support-card"
            >
              <span>CHILD</span>

              <strong>
                1098
              </strong>

              <p>
                Child Helpline
              </p>

              <span>
                CALL →
              </span>
            </a>


            <a
              href="tel:1930"
              className="home-support-card"
            >
              <span>CYBER</span>

              <strong>
                1930
              </strong>

              <p>
                Cyber Crime
              </p>

              <span>
                CALL →
              </span>
            </a>

          </div>


          <Link
            to="/resources"
            className="home-btn home-btn-outline"
          >
            Open Full Support Centre
            <span>→</span>
          </Link>

        </div>

      </section>


      {/* =====================================================
          VICTIMLENS JOURNEY
          ===================================================== */}

      <section className="home-section home-journey">

        <div className="home-container">

          <div className="home-journey-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>THE VICTIMLENS JOURNEY</span>
            </div>

            <h2>
              Discover.
              <br />
              <span>Understand. Know. Act.</span>
            </h2>

            <p>
              The platform connects information with
              practical next steps.
            </p>

          </div>


          <div className="home-journey-grid">

            {journeySteps.map((step) => (

              <div
                className="home-journey-card"
                key={step.number}
              >

                <span>
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="home-cta">

        <div className="home-container home-cta-content">

          <HomeMark />

          <div className="home-eyebrow">
            <span className="home-eyebrow-line" />
            <span>VICTIMLENS</span>
          </div>

          <h2>
            Information
            <br />
            should lead to
            <br />
            <span>understanding.</span>
          </h2>

          <p>
            Explore victimology. Know victim rights.
            Learn prevention. Understand justice responses.
            Find appropriate support when it matters.
          </p>

          <div className="home-cta-buttons">

            <Link
              to="/victimology"
              className="home-btn home-btn-gold"
            >
              Start Exploring
              <span>→</span>
            </Link>

            <Link
              to="/resources"
              className="home-btn home-btn-outline"
            >
              Get Help & Resources
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home