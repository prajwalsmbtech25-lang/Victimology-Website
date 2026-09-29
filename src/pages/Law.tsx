import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./law.css"

type JusticeStage = {
  number: string
  key: string
  title: string
  tag: string
  question: string
  description: string
  points: string[]
  note: string
}

const justiceStages: JusticeStage[] = [
  {
    number: "01",
    key: "report",
    title: "Reporting",
    tag: "FIRST STEP",
    question: "Where does the process begin?",
    description:
      "Depending on the situation, a person may report an incident to an appropriate authority or seek immediate assistance when there is an urgent safety concern.",
    points: [
      "Identify an appropriate reporting or support channel.",
      "Provide information about the incident when required.",
      "Seek urgent help when immediate safety is at risk.",
    ],
    note:
      "The available reporting route depends on the incident, location, and applicable law.",
  },
  {
    number: "02",
    key: "response",
    title: "Response",
    tag: "INITIAL ACTION",
    question: "What happens after a report?",
    description:
      "Relevant authorities or services may assess the situation, provide information, record the matter, or take other actions according to the applicable procedure.",
    points: [
      "Initial information may be collected.",
      "The person may be informed about available procedures.",
      "Appropriate safety or support measures may be considered.",
    ],
    note:
      "The response can differ significantly depending on the nature of the incident.",
  },
  {
    number: "03",
    key: "investigation",
    title: "Investigation",
    tag: "FACT FINDING",
    question: "How are circumstances examined?",
    description:
      "Where an investigation is required, relevant authorities may examine the circumstances, gather information, identify relevant people, and follow established procedures.",
    points: [
      "Information may be collected from different sources.",
      "Relevant evidence may be examined.",
      "Investigators may communicate with affected people or witnesses.",
    ],
    note:
      "Investigation procedures and responsibilities depend on the applicable legal framework.",
  },
  {
    number: "04",
    key: "evidence",
    title: "Evidence",
    tag: "DOCUMENTATION",
    question: "Why can evidence matter?",
    description:
      "Information and evidence can help relevant institutions understand what occurred and apply the appropriate legal process.",
    points: [
      "Documents or records may be relevant.",
      "Digital information may be relevant in some cases.",
      "Statements and other information may contribute to the process.",
    ],
    note:
      "The type and legal significance of evidence varies by case and jurisdiction.",
  },
  {
    number: "05",
    key: "legal",
    title: "Legal Process",
    tag: "JUSTICE SYSTEM",
    question: "What happens when a matter enters legal proceedings?",
    description:
      "When a matter proceeds through a legal process, different institutions and officials may become involved according to the relevant law and procedure.",
    points: [
      "Legal institutions may review the matter.",
      "Different parties may have defined procedural roles.",
      "The process can include hearings, decisions, or other formal steps.",
    ],
    note:
      "Victim participation and procedural rights vary according to the applicable law.",
  },
  {
    number: "06",
    key: "participation",
    title: "Participation",
    tag: "VICTIM RIGHTS",
    question: "How can victims interact with the process?",
    description:
      "Victims may need information about relevant proceedings, available services, and matters affecting them. Their ability to participate depends on the applicable legal framework.",
    points: [
      "Receive information where provided by law.",
      "Communicate with relevant institutions or services.",
      "Exercise applicable procedural rights.",
    ],
    note:
      "The extent of participation is not identical across legal systems.",
  },
  {
    number: "07",
    key: "remedies",
    title: "Remedies",
    tag: "OUTCOMES",
    question: "What forms of remedy may exist?",
    description:
      "Depending on the legal framework, victims may have access to restitution, compensation, financial assistance, or other remedies.",
    points: [
      "Restitution may address certain losses.",
      "Compensation schemes may exist in some circumstances.",
      "Other legal or administrative remedies may apply.",
    ],
    note:
      "Eligibility and application procedures depend on the relevant rules and circumstances.",
  },
  {
    number: "08",
    key: "support",
    title: "Support",
    tag: "BEYOND THE PROCESS",
    question: "Why does support remain important?",
    description:
      "Justice systems interact with wider support systems. Depending on circumstances, victims may need legal, medical, psychological, social, or practical assistance.",
    points: [
      "Legal assistance may help people understand procedures.",
      "Health or wellbeing support may be relevant.",
      "Specialised or community services may provide additional assistance.",
    ],
    note:
      "Support needs differ between individuals and may continue beyond the formal legal process.",
  },
]

function LawMark() {
  return (
    <svg
      className="law-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <path
        d="M18 67h44M22 63V30h36v33M16 30h48M28 24l12-9 12 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M40 15v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M17 39h46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M30 46h20M30 53h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function JusticePathway({
  activeKey,
  onSelect,
}: {
  activeKey: string
  onSelect: (key: string) => void
}) {
  return (
    <div className="justice-pathway">
      <div className="justice-path-line" aria-hidden="true" />

      {justiceStages.map((stage) => {
        const active = stage.key === activeKey

        return (
          <button
            type="button"
            key={stage.key}
            className={`justice-step ${active ? "active" : ""}`}
            onClick={() => onSelect(stage.key)}
            aria-pressed={active}
          >
            <span className="justice-step-number">
              {stage.number}
            </span>

            <span className="justice-step-title">
              {stage.title}
            </span>

            <span className="justice-step-tag">
              {stage.tag}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default function Law() {
  const [activeKey, setActiveKey] = useState("report")

  const activeStage = useMemo(
    () =>
      justiceStages.find((stage) => stage.key === activeKey) ??
      justiceStages[0],
    [activeKey]
  )

  const activeIndex = justiceStages.findIndex(
    (stage) => stage.key === activeKey
  )

  const selectStage = (key: string) => {
    setActiveKey(key)

    requestAnimationFrame(() => {
      document
        .getElementById("justice-explorer")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  const selectNextStage = () => {
    const nextIndex =
      activeIndex + 1 >= justiceStages.length
        ? 0
        : activeIndex + 1

    selectStage(justiceStages[nextIndex].key)
  }

  return (
    <main className="law-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="law-hero">
        <div className="law-hero-grid">
          <div className="law-hero-copy">
            <div className="law-kicker">
              <LawMark />
              <span>JUSTICE PATHWAY</span>
            </div>

            <h1>
              From Victimization
              <br />
              <span>to Justice.</span>
            </h1>

            <p>
              Explore the stages a victim may encounter when interacting
              with reporting systems, investigations, legal processes,
              protection, remedies, and support.
            </p>

            <div className="law-hero-actions">
              <a
                href="#justice-explorer"
                className="law-primary-btn"
              >
                Explore the Pathway
              </a>

              <Link
                to="/rights"
                className="law-secondary-btn"
              >
                Know Your Rights →
              </Link>
            </div>
          </div>

          <div className="law-hero-visual">
            <div className="law-globe-wrap">
              <VictimLensGlobe className="law-globe" />
            </div>

            <div className="law-visual-caption">
          
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="law-intro">
        <div className="law-label">
          <span></span>
          THE JUSTICE RESPONSE
        </div>

        <div className="law-intro-grid">
          <div>
            <h2>
              The legal system is a
              <span> pathway,</span>
              <br />
              not a single moment.
            </h2>
          </div>

          <div>
            <p>
              After an incident, victims may encounter several
              institutions, officials, procedures, and support systems.
              Understanding the broad pathway can make the system easier
              to navigate.
            </p>

            <p>
              The pathway shown here is a general explanatory model.
              Actual procedures depend on the applicable law,
              jurisdiction, and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          INTERACTIVE PATHWAY
      ========================================= */}

      <section
        className="law-explorer"
        id="justice-explorer"
      >
        <div className="law-label">
          <span></span>
          INTERACTIVE JUSTICE PATHWAY
        </div>

        <div className="law-explorer-header">
          <div>
            <h2>
              Follow the
              <span> journey.</span>
            </h2>
          </div>

          <div className="law-path-count">
            <span>STAGE</span>
            <strong>
              {activeStage.number} / 08
            </strong>
          </div>
        </div>

        <JusticePathway
          activeKey={activeKey}
          onSelect={selectStage}
        />

        <div className="law-stage-detail">
          <div className="law-stage-heading">
            <div className="law-stage-index">
              <span>{activeStage.number}</span>
              <small>{activeStage.tag}</small>
            </div>

            <h2>{activeStage.title}</h2>

            <p className="law-stage-question">
              {activeStage.question}
            </p>
          </div>

          <div className="law-stage-body">
            <p className="law-stage-description">
              {activeStage.description}
            </p>

            <div className="law-stage-points">
              <span>WHAT THIS CAN INVOLVE</span>

              <div>
                {activeStage.points.map((point) => (
                  <div
                    className="law-stage-point"
                    key={point}
                  >
                    <b>+</b>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="law-stage-note">
              <span>IMPORTANT</span>
              <p>{activeStage.note}</p>
            </div>
          </div>

          <div className="law-stage-footer">
            <button
              type="button"
              onClick={selectNextStage}
              className="law-next-stage"
            >
              Next Stage
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================
          VICTIM-CENTRED JUSTICE
      ========================================= */}

      <section className="law-centred">
        <div className="law-label">
          <span></span>
          VICTIM-CENTRED JUSTICE
        </div>

        <div className="law-centred-grid">
          <div>
            <h2>
              Justice is also about
              <span> how people are treated.</span>
            </h2>

            <p>
              A justice process can involve formal legal decisions, but
              victim-centred approaches also recognise the importance
              of dignity, safety, information, protection, assistance,
              participation, and appropriate remedies.
            </p>
          </div>

          <div className="law-principle-grid">
            <article>
              <span>01</span>
              <strong>Dignity</strong>
              <p>
                Respectful and fair treatment during interactions with
                relevant institutions.
              </p>
            </article>

            <article>
              <span>02</span>
              <strong>Information</strong>
              <p>
                Understandable information about processes and available
                services where provided.
              </p>
            </article>

            <article>
              <span>03</span>
              <strong>Protection</strong>
              <p>
                Appropriate steps to reduce intimidation, retaliation,
                unnecessary exposure, or further harm.
              </p>
            </article>

            <article>
              <span>04</span>
              <strong>Remedies</strong>
              <p>
                Access to available assistance, restitution,
                compensation, or other remedies where applicable.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================
          SYSTEM CONNECTION
      ========================================= */}

      <section className="law-system">
        <div className="law-label">
          <span></span>
          THE SYSTEM AROUND THE VICTIM
        </div>

        <div className="law-system-grid">
          <div className="law-system-map">
            <div className="law-system-core">
              <LawMark />
              <span>VICTIM</span>
              <strong>CENTRE</strong>
            </div>

            <div className="law-system-node node-one">
              Police
            </div>

            <div className="law-system-node node-two">
              Courts
            </div>

            <div className="law-system-node node-three">
              Legal Aid
            </div>

            <div className="law-system-node node-four">
              Healthcare
            </div>

            <div className="law-system-node node-five">
              Support
            </div>

            <div className="law-system-node node-six">
              Community
            </div>
          </div>

          <div className="law-system-copy">
            <h2>
              No single institution
              <span> handles every need.</span>
            </h2>

            <p>
              Victims may interact with different services depending on
              their circumstances. The formal justice process can be
              connected to legal aid, healthcare, social support,
              specialised services, and community assistance.
            </p>

            <Link
              to="/resources"
              className="law-text-link"
            >
              Explore the VictimLens Support Centre →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          INDIA SUPPORT
      ========================================= */}

      <section className="law-india">
        <div className="law-india-inner">
          <div>
            <span>INDIA — FINDING SUPPORT</span>

            <h2>
              Knowing the system
              <br />
              includes knowing where to turn.
            </h2>

            <p>
              In India, people may interact with different services
              depending on their circumstances, including emergency
              services, police, legal aid authorities, specialised
              helplines, healthcare providers, and other support systems.
            </p>

            <Link
              to="/resources"
              className="law-primary-btn"
            >
              View Support Resources
            </Link>
          </div>

          <div className="law-india-list">
            <div>
              <span>01</span>
              <p>Emergency assistance</p>
            </div>

            <div>
              <span>02</span>
              <p>Police and reporting services</p>
            </div>

            <div>
              <span>03</span>
              <p>Free legal aid and assistance</p>
            </div>

            <div>
              <span>04</span>
              <p>Specialised support services</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LEGAL NOTE
      ========================================= */}

      <section className="law-note-section">
        <div className="law-note-card">
          <LawMark />

          <div>
            <span>IMPORTANT LEGAL NOTE</span>

            <h2>
              Laws and procedures
              <br />
              can differ.
            </h2>

            <p>
              Victim rights, reporting procedures, eligibility for
              assistance, compensation schemes, and available remedies
              depend on the applicable law, location, circumstances,
              and nature of the incident.
            </p>

            <p>
              VictimLens provides general information and is not a
              substitute for individual legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTINUE
      ========================================= */}

      <section className="law-next">
        <div className="law-next-inner">
          <div>
            <span>CONTINUE WITH VICTIMLENS</span>

            <h2>
              Know your rights.
              <br />
              Understand your options.
            </h2>
          </div>

          <div className="law-next-links">
            <Link to="/rights">
              Explore Victim Rights ↗
            </Link>

            <Link to="/impact">
              Understand Impact ↗
            </Link>

            <Link to="/cases">
              Enter Case Lab ↗
            </Link>

            <Link to="/resources">
              Find Help & Resources ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}