import { useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./rights.css"

type VictimRight = {
  number: string
  title: string
  tag: string
  icon: string
  description: string
  detail: string
  action: string
}

const rights: VictimRight[] = [
  {
    number: "01",
    title: "Dignity & Fair Treatment",
    tag: "DIGNITY",
    icon: "◇",
    description:
      "Victims should be treated with compassion and respect for their dignity throughout the process of seeking justice and assistance.",
    detail:
      "A victim-centred approach means avoiding unnecessary humiliation, discrimination or further harm while dealing with institutions and services.",
    action:
      "Look for respectful, non-discriminatory treatment when seeking assistance or participating in relevant processes.",
  },
  {
    number: "02",
    title: "Access to Justice",
    tag: "JUSTICE",
    icon: "⚖",
    description:
      "Victims should have access to appropriate judicial and administrative mechanisms so their concerns can be addressed through the justice system.",
    detail:
      "Access to justice includes being able to understand and use available procedures and mechanisms for seeking appropriate remedies.",
    action:
      "Identify the appropriate reporting, legal or administrative mechanism for the situation.",
  },
  {
    number: "03",
    title: "Right to Information",
    tag: "INFORMATION",
    icon: "◎",
    description:
      "Victims should have access to relevant information about their rights, available services and important parts of the justice process.",
    detail:
      "Clear information can help victims understand where to seek assistance and what to expect from relevant procedures.",
    action:
      "Ask about available services, relevant procedures and where reliable information can be obtained.",
  },
  {
    number: "04",
    title: "Protection & Privacy",
    tag: "PROTECTION",
    icon: "⬡",
    description:
      "Victims and their families may require protection from intimidation, retaliation, unnecessary exposure or further harm.",
    detail:
      "Protection can include appropriate safety measures and respect for privacy, particularly when participation in justice proceedings may create additional risks.",
    action:
      "Where safety is a concern, seek appropriate protection through official services.",
  },
  {
    number: "05",
    title: "Assistance & Support",
    tag: "ASSISTANCE",
    icon: "✚",
    description:
      "Victims may need material, medical, psychological and social assistance following victimization.",
    detail:
      "Support can involve healthcare, counselling, social services, legal assistance, welfare services and other appropriate forms of help.",
    action:
      "Explore the support service most relevant to the person's needs and circumstances.",
  },
  {
    number: "06",
    title: "Participation & Being Heard",
    tag: "PARTICIPATION",
    icon: "◉",
    description:
      "Victims should have appropriate opportunities to present their views and concerns where the justice process permits.",
    detail:
      "Being heard helps ensure that the experiences and concerns of victims are considered within relevant justice and support processes.",
    action:
      "Learn how and where victims may be able to communicate their concerns within the applicable process.",
  },
  {
    number: "07",
    title: "Restitution",
    tag: "RESTITUTION",
    icon: "↺",
    description:
      "Where appropriate, victims may receive restitution or restoration for harm or loss through mechanisms provided by law.",
    detail:
      "Restitution can involve returning property or providing appropriate restoration for harm, depending on the circumstances and applicable legal framework.",
    action:
      "Check whether a restitution or restoration mechanism applies to the circumstances.",
  },
  {
    number: "08",
    title: "Compensation",
    tag: "COMPENSATION",
    icon: "₹",
    description:
      "Victims may be eligible for compensation through applicable government schemes, legal mechanisms or other authorized sources.",
    detail:
      "Eligibility, procedure and amount depend on the applicable law or compensation scheme. Victim compensation should therefore be checked through the relevant official authority.",
    action:
      "Confirm eligibility and procedure through the relevant official authority or compensation scheme.",
  },
]

function RightsMark() {
  return (
    <div className="rights-mark" aria-hidden="true">
      <svg viewBox="0 0 100 100">

        <circle
          cx="50"
          cy="50"
          r="42"
          className="rights-mark-ring"
        />

        <path
          d="M50 20 L50 76"
          className="rights-mark-stem"
        />

        <path
          d="M29 34 L50 28 L71 34"
          className="rights-mark-bar"
        />

        <path
          d="M29 35 L21 56 H37 Z"
          className="rights-mark-scale"
        />

        <path
          d="M71 35 L63 56 H79 Z"
          className="rights-mark-scale"
        />

        <circle
          cx="50"
          cy="25"
          r="4"
          className="rights-mark-core"
        />

        <path
          d="M41 76 H59"
          className="rights-mark-base"
        />

      </svg>
    </div>
  )
}

function Rights() {
  const [selectedRight, setSelectedRight] =
    useState<VictimRight>(rights[0])

  return (
    <main className="rights-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="rights-hero">

        <div className="rights-hero-content">

          <div className="rights-identity">

            <RightsMark />

            <div>
              <span>VICTIMLENS</span>
              <small>VICTIM RIGHTS / RIGHTS EXPLORER</small>
            </div>

          </div>


          <div className="rights-eyebrow">
            <span />
            VICTIM RIGHTS
          </div>


          <h1>
            Know Your
            <br />
            <span>Rights.</span>
          </h1>


          <p>
            Understanding victim rights helps people recognise
            principles relating to dignity, access to justice,
            information, protection, assistance and remedies.
          </p>


          <div className="rights-actions">

            <a
              href="#rights-explorer"
              className="rights-btn rights-btn-gold"
            >
              Explore Rights
              <span>↓</span>
            </a>

            <Link
              to="/resources"
              className="rights-btn rights-btn-outline"
            >
              Find Support
              <span>→</span>
            </Link>

          </div>

        </div>


        <div className="rights-hero-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* =====================================================
          RIGHTS EXPLORER
          ===================================================== */}

      <section
        id="rights-explorer"
        className="rights-section rights-explorer-section"
      >

        <div className="rights-container">

          <div className="rights-section-intro">

            <div className="rights-section-label">
              RIGHTS EXPLORER
            </div>

            <h2>
              Select a right.
              <br />
              <span>Understand what it means.</span>
            </h2>

            <p>
              Instead of reading every right at once, select a
              topic and explore its purpose, meaning and practical
              relevance.
            </p>

          </div>


          <div className="rights-explorer">

            {/* =================================================
                LEFT — RIGHT MENU
                ================================================= */}

            <div className="rights-menu">

              {rights.map((right) => {

                const active =
                  selectedRight.number === right.number

                return (
                  <button
                    type="button"
                    key={right.number}
                    className={`rights-menu-item ${
                      active ? "is-active" : ""
                    }`}
                    onClick={() => setSelectedRight(right)}
                  >

                    <span className="rights-menu-number">
                      {right.number}
                    </span>

                    <span className="rights-menu-icon">
                      {right.icon}
                    </span>

                    <span className="rights-menu-copy">

                      <small>
                        {right.tag}
                      </small>

                      <strong>
                        {right.title}
                      </strong>

                    </span>

                    <span className="rights-menu-arrow">
                      →
                    </span>

                  </button>
                )
              })}

            </div>


            {/* =================================================
                RIGHT — DETAIL
                ================================================= */}

            <div className="rights-detail">

              <div className="rights-detail-header">

                <div className="rights-detail-icon">
                  {selectedRight.icon}
                </div>

                <div>

                  <span>
                    {selectedRight.number} / {selectedRight.tag}
                  </span>

                  <h3>
                    {selectedRight.title}
                  </h3>

                </div>

              </div>


              <div className="rights-detail-block">

                <span>
                  THE PRINCIPLE
                </span>

                <p>
                  {selectedRight.description}
                </p>

              </div>


              <div className="rights-detail-block rights-detail-highlight">

                <span>
                  WHAT THIS MEANS
                </span>

                <p>
                  {selectedRight.detail}
                </p>

              </div>


              <div className="rights-detail-block">

                <span>
                  IN PRACTICE
                </span>

                <p>
                  {selectedRight.action}
                </p>

              </div>


              <div className="rights-detail-footer">

                <Link
                  to="/resources"
                  className="rights-detail-link"
                >
                  Where can I get help?
                  <span>→</span>
                </Link>

                <Link
                  to="/law"
                  className="rights-detail-link rights-detail-link-muted"
                >
                  Justice & Support
                  <span>↗</span>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RIGHTS AT A GLANCE
          ===================================================== */}

      <section className="rights-section rights-at-glance">

        <div className="rights-container">

          <div className="rights-section-intro">

            <div className="rights-section-label">
              AT A GLANCE
            </div>

            <h2>
              Eight connected
              <br />
              <span>rights perspectives.</span>
            </h2>

            <p>
              Victim rights cover several connected dimensions.
              Explore them individually above, then consider how
              they work together in a victim-centred response.
            </p>

          </div>


          <div className="rights-orbit">

            <div className="rights-orbit-ring rights-orbit-one" />
            <div className="rights-orbit-ring rights-orbit-two" />
            <div className="rights-orbit-ring rights-orbit-three" />


            <div className="rights-orbit-center">

              <RightsMark />

              <strong>
                VICTIM
              </strong>

              <span>
                AT THE CENTRE
              </span>

            </div>


            {rights.map((right, index) => (

              <button
                type="button"
                key={right.number}
                className={`rights-orbit-node rights-node-${index + 1}`}
                onClick={() => {
                  setSelectedRight(right)

                  document
                    .getElementById("rights-explorer")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }}
              >

                <span>
                  {right.number}
                </span>

                <strong>
                  {right.tag}
                </strong>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY RIGHTS MATTER
          ===================================================== */}

      <section className="rights-section">

        <div className="rights-container">

          <div className="rights-split">

            <div>

              <div className="rights-section-label">
                WHY RIGHTS MATTER
              </div>

              <h2>
                Justice is not only
                <br />
                <span>about the offender.</span>
              </h2>

            </div>


            <div>

              <p className="rights-lead">
                A victim-centred justice system also considers
                the experience, safety, dignity, information
                needs and support requirements of people affected
                by crime.
              </p>

            </div>

          </div>


          <div className="rights-principles-grid">

            <article className="rights-principle-card">

              <div className="rights-principle-icon">
                ◇
              </div>

              <span>
                DIGNITY
              </span>

              <h3>
                Victims should be treated with respect.
              </h3>

              <p>
                Respectful treatment recognises dignity and
                can help prevent unnecessary additional distress.
              </p>

            </article>


            <article className="rights-principle-card">

              <div className="rights-principle-icon">
                ⬡
              </div>

              <span>
                SAFETY
              </span>

              <h3>
                Protection can be essential.
              </h3>

              <p>
                Victims may need protection from intimidation,
                retaliation, privacy risks or further harm.
              </p>

            </article>


            <article className="rights-principle-card">

              <div className="rights-principle-icon">
                ◎
              </div>

              <span>
                INFORMATION
              </span>

              <h3>
                Information supports informed decisions.
              </h3>

              <p>
                Understanding available procedures and services
                can help people navigate complex systems.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          RIGHTS IN PRACTICE
          ===================================================== */}

      <section className="rights-section rights-practice-section">

        <div className="rights-container">

          <div className="rights-section-intro">

            <div className="rights-section-label">
              RIGHTS IN PRACTICE
            </div>

            <h2>
              What can someone
              <br />
              <span>look for?</span>
            </h2>

            <p>
              The exact rights and procedures available depend
              on the type of incident, applicable law, jurisdiction
              and circumstances.
            </p>

          </div>


          <div className="rights-practice-grid">

            <article className="rights-practice-card">

              <span>01</span>

              <div>
                <strong>
                  INFORMATION
                </strong>

                <h3>
                  Ask where to get help.
                </h3>

                <p>
                  Identify the appropriate police, legal,
                  medical, welfare or support service.
                </p>
              </div>

            </article>


            <article className="rights-practice-card">

              <span>02</span>

              <div>
                <strong>
                  PROTECTION
                </strong>

                <h3>
                  Consider safety.
                </h3>

                <p>
                  Where there is an ongoing concern,
                  seek appropriate protection through
                  official services.
                </p>
              </div>

            </article>


            <article className="rights-practice-card">

              <span>03</span>

              <div>
                <strong>
                  ASSISTANCE
                </strong>

                <h3>
                  Ask about support.
                </h3>

                <p>
                  Depending on circumstances, support may
                  include legal, medical, psychological,
                  social or welfare services.
                </p>
              </div>

            </article>


            <article className="rights-practice-card">

              <span>04</span>

              <div>
                <strong>
                  COMPENSATION
                </strong>

                <h3>
                  Check applicable schemes.
                </h3>

                <p>
                  Eligibility and procedure should be confirmed
                  through the relevant official authority.
                </p>
              </div>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          INDIA SUPPORT
          ===================================================== */}

      <section className="rights-support-section">

        <div className="rights-container">

          <div className="rights-support-content">

            <RightsMark />

            <div className="rights-section-label">
              INDIA — SUPPORT
            </div>

            <h2>
              Know where
              <br />
              <span>to seek help.</span>
            </h2>

            <p>
              VictimLens connects visitors with emergency,
              legal, cybercrime, women, child and other support
              resources through the dedicated Support Centre.
            </p>

            <div className="rights-support-actions">

              <Link
                to="/resources"
                className="rights-btn rights-btn-gold"
              >
                View Help & Resources
                <span>→</span>
              </Link>

              <Link
                to="/prevention"
                className="rights-btn rights-btn-outline"
              >
                Explore Prevention
                <span>→</span>
              </Link>

            </div>

          </div>


          <div className="rights-support-globe">
            <VictimLensGlobe />
          </div>

        </div>

      </section>


      {/* =====================================================
          IMPORTANT NOTE
          ===================================================== */}

      <section className="rights-section rights-note-section">

        <div className="rights-container">

          <div className="rights-note">

            <div className="rights-note-mark">
              !
            </div>

            <div>

              <span>
                IMPORTANT
              </span>

              <h3>
                Rights and procedures depend on the applicable law.
              </h3>

              <p>
                Victim rights and procedures can vary according to
                the type of crime, location, circumstances and
                applicable legal framework. VictimLens provides
                general information to improve awareness and help
                visitors find appropriate official sources. It is
                not individual legal advice.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT
          ===================================================== */}

      <section className="rights-section rights-next-section">

        <div className="rights-container">

          <div className="rights-section-intro">

            <div className="rights-section-label">
              CONTINUE WITH VICTIMLENS
            </div>

            <h2>
              Rights are one part
              <br />
              <span>of the bigger picture.</span>
            </h2>

          </div>


          <div className="rights-next-grid">

            <Link
              to="/impact"
              className="rights-next-card"
            >
              <span>01</span>

              <div>
                <h3>
                  Impact of Victimization
                </h3>

                <p>
                  Understand physical, psychological, social
                  and economic effects.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/prevention"
              className="rights-next-card"
            >
              <span>02</span>

              <div>
                <h3>
                  Safety & Prevention
                </h3>

                <p>
                  Explore awareness, prevention and
                  early response.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/law"
              className="rights-next-card"
            >
              <span>03</span>

              <div>
                <h3>
                  Justice & Support
                </h3>

                <p>
                  Understand institutions and mechanisms
                  involved in justice responses.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/resources"
              className="rights-next-card"
            >
              <span>04</span>

              <div>
                <h3>
                  Get Help & Resources
                </h3>

                <p>
                  Find official emergency, legal, cybercrime,
                  welfare and support resources.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Rights