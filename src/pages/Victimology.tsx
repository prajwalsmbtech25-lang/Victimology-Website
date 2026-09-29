import { useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./victimology.css"

type VictimizationStage = {
  id: string
  number: string
  label: string
  title: string
  description: string
  points: string[]
}

const stages: VictimizationStage[] = [
  {
    id: "incident",
    number: "01",
    label: "INCIDENT",
    title: "Something happens.",
    description:
      "A crime or other harmful act occurs and creates the circumstances from which victimization may follow.",
    points: [
      "The event itself may take many forms.",
      "The person affected may not immediately identify themselves as a victim.",
      "The circumstances surrounding the event can influence what happens next.",
    ],
  },
  {
    id: "harm",
    number: "02",
    label: "HARM",
    title: "The effects begin.",
    description:
      "Harm may be physical, psychological, emotional, social or economic, and different people may experience it differently.",
    points: [
      "Physical effects can involve injury or other bodily consequences.",
      "Psychological and emotional effects can influence daily life and relationships.",
      "Financial or social consequences may continue beyond the original event.",
    ],
  },
  {
    id: "impact",
    number: "03",
    label: "IMPACT",
    title: "Life can change.",
    description:
      "The consequences of victimization may extend into relationships, work, education, finances, safety and the wider community.",
    points: [
      "Impact can extend beyond the person directly affected.",
      "Family members and dependants may also experience consequences.",
      "Communities can experience fear, insecurity or loss of trust.",
    ],
  },
  {
    id: "response",
    number: "04",
    label: "RESPONSE",
    title: "What happens afterwards matters.",
    description:
      "Justice institutions, support services, healthcare providers and communities may become part of the response.",
    points: [
      "Victims may need information about available services and procedures.",
      "Protection, assistance and access to justice can become important.",
      "A victim-centred response should seek to avoid unnecessary further harm.",
    ],
  },
]

const scopeItems = [
  {
    number: "01",
    title: "Patterns of Victimization",
    text:
      "Examining when, where and under what circumstances victimization occurs.",
  },
  {
    number: "02",
    title: "Victim Vulnerability",
    text:
      "Understanding circumstances that may affect exposure to victimization or recovery.",
  },
  {
    number: "03",
    title: "Victim Impact",
    text:
      "Examining physical, psychological, emotional, social and economic consequences.",
  },
  {
    number: "04",
    title: "Justice Response",
    text:
      "Examining how institutions and services respond to people affected by crime.",
  },
  {
    number: "05",
    title: "Prevention",
    text:
      "Understanding risks and approaches that may reduce victimization or further harm.",
  },
  {
    number: "06",
    title: "Support & Recovery",
    text:
      "Understanding the importance of legal, medical, psychological, social and welfare support.",
  },
]

const affectedGroups = [
  {
    icon: "◎",
    label: "DIRECT",
    title: "Person directly affected",
    text:
      "The individual who directly experiences the harmful act and its immediate consequences.",
  },
  {
    icon: "◉",
    label: "CONNECTED",
    title: "Family & dependants",
    text:
      "People close to the victim may experience emotional, social, financial or other consequences.",
  },
  {
    icon: "○",
    label: "WIDER",
    title: "Community",
    text:
      "Certain forms of crime can create fear, insecurity, loss of trust or disruption within communities.",
  },
]

function VictimologyMark() {
  return (
    <div
      className="victimology-mark"
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100">

        <circle
          cx="50"
          cy="50"
          r="42"
          className="victimology-mark-ring"
        />

        <path
          d="M22 51 C30 29 69 29 78 51 C69 73 30 73 22 51 Z"
          className="victimology-mark-eye"
        />

        <circle
          cx="50"
          cy="51"
          r="14"
          className="victimology-mark-lens"
        />

        <circle
          cx="50"
          cy="51"
          r="5"
          className="victimology-mark-core"
        />

        <circle cx="27" cy="51" r="2.5" className="victimology-node" />
        <circle cx="73" cy="51" r="2.5" className="victimology-node" />
        <circle cx="50" cy="25" r="2.5" className="victimology-node" />

      </svg>
    </div>
  )
}

function Victimology() {
  const [selectedStage, setSelectedStage] =
    useState<VictimizationStage>(stages[0])

  return (
    <main className="victimology-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="victimology-hero">

        <div className="victimology-hero-content">

          <div className="victimology-identity">

            <VictimologyMark />

            <div>
              <span>VICTIMLENS</span>
              <small>VICTIMOLOGY / INTERACTIVE LENS</small>
            </div>

          </div>


          <div className="victimology-eyebrow">
            <span />
            VICTIMOLOGY
          </div>


          <h1>
            Understand
            <br />
            <span>Victimization.</span>
          </h1>


          <p>
            Victimology is the systematic study of victims,
            victimization, the effects of harm, and the ways
            justice systems, institutions and communities
            respond to victims.
          </p>


          <div className="victimology-hero-actions">

            <a
              href="#explore"
              className="victimology-btn victimology-btn-gold"
            >
              Explore the Lens
              <span>↓</span>
            </a>

            <Link
              to="/types"
              className="victimology-btn victimology-btn-outline"
            >
              Explore Victim Types
              <span>→</span>
            </Link>

          </div>

        </div>


        <div className="victimology-hero-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* =====================================================
          INTERACTIVE LENS
          ===================================================== */}

      <section
        id="explore"
        className="victimology-section victimology-lens-section"
      >

        <div className="victimology-container">

          <div className="victimology-section-intro">

            <div className="victimology-section-label">
              
              INTERACTIVE LENS
            </div>

            <h2>
              What happens
              <br />
              <span>after victimization?</span>
            </h2>

            <p>
              Victimization is not only about the original incident.
              Explore each stage to see how victimology looks at
              harm, impact and response.
            </p>

          </div>


          {/* STAGE NAVIGATION */}

          <div className="victimology-stage-grid">

            {stages.map((stage) => {

              const active =
                selectedStage.id === stage.id

              return (
                <button
                  type="button"
                  key={stage.id}
                  className={`victimology-stage ${
                    active ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedStage(stage)}
                >

                  <span className="victimology-stage-number">
                    {stage.number}
                  </span>

                  <span className="victimology-stage-label">
                    {stage.label}
                  </span>

                  <span className="victimology-stage-arrow">
                    →
                  </span>

                </button>
              )
            })}

          </div>


          {/* ACTIVE STAGE */}

          <div className="victimology-stage-detail">

            <div className="victimology-stage-detail-number">
              {selectedStage.number}
            </div>

            <div className="victimology-stage-detail-main">

              <span>
                {selectedStage.label}
              </span>

              <h3>
                {selectedStage.title}
              </h3>

              <p>
                {selectedStage.description}
              </p>

            </div>


            <div className="victimology-stage-detail-points">

              {selectedStage.points.map((point, index) => (

                <div
                  key={point}
                  className="victimology-point"
                >

                  <span>
                    0{index + 1}
                  </span>

                  <p>
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* FLOW LINE */}

          <div className="victimology-flow">

            {stages.map((stage, index) => (

              <div
                key={stage.id}
                className="victimology-flow-item"
              >

                <div
                  className={`victimology-flow-dot ${
                    selectedStage.id === stage.id
                      ? "is-active"
                      : ""
                  }`}
                />

                <span>
                  {stage.label}
                </span>

                {index < stages.length - 1 && (
                  <div className="victimology-flow-line" />
                )}

              </div>

            ))}

          </div>

          <p className="victimology-flow-note">
            This is an explanatory framework, not a fixed sequence.
            Experiences and responses differ between situations.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOUNDATION
          ===================================================== */}

      <section className="victimology-section">

        <div className="victimology-container">

          <div className="victimology-split">

            <div>

              <div className="victimology-section-label">
              THE FOUNDATION
              </div>

              <h2>
                What does
                <br />
                <span>Victimology study?</span>
              </h2>

            </div>

            <div>

              <p className="victimology-lead">
                Victimology examines victims and victimization.
                It considers what happened, who was affected,
                what harm resulted, what victims need, and how
                institutions and society respond.
              </p>

              <Link
                to="/types"
                className="victimology-text-link"
              >
                Explore Victim Experiences
                <span>→</span>
              </Link>

            </div>

          </div>


          <div className="victimology-definition-grid">

            <article className="victimology-definition-card">

              <span>
                VICTIMS
              </span>

              <div className="victimology-card-symbol">
                ◎
              </div>

              <h3>
                Understanding people affected by harm
              </h3>

              <p>
                Victimology focuses attention on people who
                suffer physical, psychological, emotional,
                social or economic harm.
              </p>

            </article>


            <article className="victimology-definition-card">

              <span>
                VICTIMIZATION
              </span>

              <div className="victimology-card-symbol">
                ◉
              </div>

              <h3>
                Understanding how victimization occurs
              </h3>

              <p>
                The field examines circumstances, patterns,
                risks and relationships associated with
                victimization.
              </p>

            </article>


            <article className="victimology-definition-card">

              <span>
                RESPONSE
              </span>

              <div className="victimology-card-symbol">
                ⊙
              </div>

              <h3>
                Understanding what happens afterwards
              </h3>

              <p>
                Victimology also examines how police, courts,
                legal services, healthcare providers, welfare
                organisations and communities respond.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO CAN BE AFFECTED
          ===================================================== */}

      <section className="victimology-section victimology-dark-section">

        <div className="victimology-container">

          <div className="victimology-section-intro">

            <div className="victimology-section-label">
              WHO CAN BE AFFECTED?
            </div>

            <h2>
              Victimization can affect
              <br />
              <span>more than one person.</span>
            </h2>

            <p>
              The consequences of victimization may extend beyond
              the person directly affected. Family members,
              dependants and communities may also experience
              consequences.
            </p>

          </div>


          <div className="victimology-affected-grid">

            {affectedGroups.map((group) => (

              <article
                className="victimology-affected-card"
                key={group.label}
              >

                <div className="victimology-affected-icon">
                  {group.icon}
                </div>

                <span>
                  {group.label}
                </span>

                <h3>
                  {group.title}
                </h3>

                <p>
                  {group.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SCOPE
          ===================================================== */}

      <section className="victimology-section">

        <div className="victimology-container">

          <div className="victimology-section-intro">

            <div className="victimology-section-label">
         SCOPE OF VICTIMOLOGY
            </div>

            <h2>
              A wider lens on
              <br />
              <span>victim experiences.</span>
            </h2>

            <p>
              Victimology is not limited to what happened during
              a crime. It also considers impact, protection,
              prevention, justice, support and recovery.
            </p>

          </div>


          <div className="victimology-scope-grid">

            {scopeItems.map((item) => (

              <article
                className="victimology-scope-card"
                key={item.number}
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VICTIMOLOGY VS CRIMINOLOGY
          ===================================================== */}

      <section className="victimology-section victimology-compare-section">

        <div className="victimology-container">

          <div className="victimology-section-intro">

            <div className="victimology-section-label">
          CONNECTING THE FIELDS
            </div>

            <h2>
              Victimology
              <br />
              <span>and Criminology.</span>
            </h2>

            <p>
              Both fields contribute to understanding crime,
              but they draw attention to different parts of
              the wider picture.
            </p>

          </div>


          <div className="victimology-compare-grid">

            <article className="victimology-compare-card">

              <div className="victimology-compare-top">
                <span>CRIMINOLOGY</span>
                <strong>01</strong>
              </div>

              <div className="victimology-compare-icon">
                ◇
              </div>

              <h3>
                Understanding crime and offending
              </h3>

              <p>
                Criminology examines crime, criminal behaviour,
                offending, causes and patterns of crime, and
                responses to offending.
              </p>

            </article>


            <div className="victimology-compare-divider">
              +
            </div>


            <article className="victimology-compare-card is-victimology">

              <div className="victimology-compare-top">
                <span>VICTIMOLOGY</span>
                <strong>02</strong>
              </div>

              <div className="victimology-compare-icon">
                ◉
              </div>

              <h3>
                Understanding victims and victimization
              </h3>

              <p>
                Victimology examines victims, victimization,
                consequences of harm, victim needs,
                institutional responses, protection, support
                and access to justice.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY IT MATTERS
          ===================================================== */}

      <section className="victimology-section">

        <div className="victimology-container">

          <div className="victimology-split">

            <div>

              <div className="victimology-section-label">
            WHY IT MATTERS
              </div>

              <h2>
                The question is not
                <br />
                only <span>"what happened?"</span>
              </h2>

            </div>


            <div>

              <p className="victimology-lead">
                Victimology also asks who was affected,
                what impact followed, what the victim needs,
                what protections are available, and how
                further harm can be reduced.
              </p>

            </div>

          </div>


          <div className="victimology-matter-grid">

            <div className="victimology-matter-card">

              <span>01</span>

              <h3>
                Recognize victimization
              </h3>

              <p>
                Understand different forms of victimization
                and the experiences of people affected by crime.
              </p>

            </div>


            <div className="victimology-matter-card">

              <span>02</span>

              <h3>
                Understand victim rights
              </h3>

              <p>
                Learn why dignity, information, protection,
                justice, compensation and assistance matter.
              </p>

            </div>


            <div className="victimology-matter-card">

              <span>03</span>

              <h3>
                Connect knowledge with action
              </h3>

              <p>
                Understand prevention, support systems,
                justice responses and appropriate help pathways.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VICTIM-CENTRED APPROACH
          ===================================================== */}

      <section className="victimology-focus-section">

        <div className="victimology-container">

          <div className="victimology-focus-content">

            <VictimologyMark />

            <div className="victimology-section-label">
              VICTIM-CENTRED APPROACH
            </div>

            <h2>
              Keep the
              <br />
              <span>victim in focus.</span>
            </h2>

            <p>
              A victim-centred approach recognizes the importance
              of dignity, fair treatment, access to justice,
              information, protection, privacy, assistance,
              restitution and compensation within appropriate
              justice and support systems.
            </p>

            <div className="victimology-focus-actions">

              <Link
                to="/rights"
                className="victimology-btn victimology-btn-gold"
              >
                Explore Victim Rights
                <span>→</span>
              </Link>

              <Link
                to="/impact"
                className="victimology-btn victimology-btn-outline"
              >
                Understand the Impact
                <span>→</span>
              </Link>

            </div>

          </div>

          <div className="victimology-focus-globe">
            <VictimLensGlobe />
          </div>

        </div>

      </section>


      {/* =====================================================
          CONTINUE
          ===================================================== */}

      <section className="victimology-section victimology-next-section">

        <div className="victimology-container">

          <div className="victimology-section-intro">

            <div className="victimology-section-label">
              CONTINUE WITH VICTIMLENS
            </div>

            <h2>
              Where do you want
              <br />
              <span>to explore next?</span>
            </h2>

          </div>


          <div className="victimology-next-grid">

            <Link
              to="/types"
              className="victimology-next-card"
            >
              <span>01</span>

              <div>
                <h3>
                  Types of Victims
                </h3>

                <p>
                  Explore different forms and circumstances
                  of victimization.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/rights"
              className="victimology-next-card"
            >
              <span>02</span>

              <div>
                <h3>
                  Victim Rights
                </h3>

                <p>
                  Explore dignity, justice, protection,
                  information, assistance and remedies.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/impact"
              className="victimology-next-card"
            >
              <span>03</span>

              <div>
                <h3>
                  Impact of Victimization
                </h3>

                <p>
                  Understand the physical, psychological,
                  social and economic effects of harm.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/prevention"
              className="victimology-next-card"
            >
              <span>04</span>

              <div>
                <h3>
                  Safety & Prevention
                </h3>

                <p>
                  Explore prevention, awareness,
                  safety and early intervention.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/law"
              className="victimology-next-card"
            >
              <span>05</span>

              <div>
                <h3>
                  Justice & Support
                </h3>

                <p>
                  Understand justice institutions and
                  support systems relevant to victims.
                </p>
              </div>

              <strong>
                →
              </strong>
            </Link>


            <Link
              to="/resources"
              className="victimology-next-card"
            >
              <span>06</span>

              <div>
                <h3>
                  Get Help & Resources
                </h3>

                <p>
                  Find emergency, legal, cybercrime and
                  other official support resources.
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

export default Victimology