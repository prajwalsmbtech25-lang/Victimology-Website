import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./impact.css"

type ImpactItem = {
  id: string
  number: string
  title: string
  short: string
  description: string
  examples: string[]
  note: string
}

const impacts: ImpactItem[] = [
  {
    id: "physical",
    number: "01",
    title: "Physical Impact",
    short: "Effects on the body and physical wellbeing.",
    description:
      "Victimization can be associated with physical injury, pain, changes in daily functioning, or longer-term health effects.",
    examples: [
      "Injury or physical pain",
      "Changes in mobility or routine",
      "Sleep or energy disruption",
      "Need for medical care",
    ],
    note: "Physical effects can vary greatly between individuals and situations.",
  },
  {
    id: "psychological",
    number: "02",
    title: "Psychological Impact",
    short: "Effects on thoughts, concentration and sense of safety.",
    description:
      "A person may experience changes in concentration, confidence, trust, or their sense of safety after victimization.",
    examples: [
      "Difficulty concentrating",
      "Feeling unsafe",
      "Changes in confidence",
      "Persistent worry or distress",
    ],
    note: "People respond differently, and not every person experiences the same psychological effects.",
  },
  {
    id: "emotional",
    number: "03",
    title: "Emotional Impact",
    short: "Changes in feelings and emotional wellbeing.",
    description:
      "Victimization may affect emotions in different ways, including fear, anger, sadness, frustration, confusion, or emotional numbness.",
    examples: [
      "Fear or anxiety",
      "Anger or frustration",
      "Sadness",
      "Emotional withdrawal",
    ],
    note: "Emotional responses are personal and can change over time.",
  },
  {
    id: "social",
    number: "04",
    title: "Social Impact",
    short: "Effects on relationships, participation and community life.",
    description:
      "Victimization can influence relationships, social participation, education, work, and a person's connection with their community.",
    examples: [
      "Withdrawal from social activities",
      "Strained relationships",
      "Reduced participation",
      "Difficulty returning to normal routines",
    ],
    note: "Supportive relationships and communities can be important during recovery.",
  },
  {
    id: "economic",
    number: "05",
    title: "Economic Impact",
    short: "Financial and practical consequences.",
    description:
      "Victimization can create direct and indirect financial pressures, depending on the circumstances of the incident.",
    examples: [
      "Medical or recovery expenses",
      "Loss of income",
      "Property or financial loss",
      "Costs associated with legal processes",
    ],
    note: "Financial consequences can extend beyond the immediate incident.",
  },
  {
    id: "family",
    number: "06",
    title: "Family Impact",
    short: "Effects that extend to relatives and dependants.",
    description:
      "The effects of victimization may extend beyond the directly affected person and influence family members, dependants, and close relationships.",
    examples: [
      "Emotional stress within the family",
      "Changes in household responsibilities",
      "Financial pressure",
      "Concern about safety",
    ],
    note: "This is one reason victimization can have wider consequences beyond one individual.",
  },
]

function ImpactMark() {
  return (
    <svg
      className="impact-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <circle
        cx="40"
        cy="40"
        r="27"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="40"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="40"
        r="4"
        fill="currentColor"
      />

      <path
        d="M40 5v12M40 63v12M5 40h12M63 40h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M15 15l9 9M56 56l9 9M65 15l-9 9M24 56l-9 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ImpactWheel({
  selectedId,
  onSelect,
}: {
  selectedId: string
  onSelect: (id: string) => void
}) {
  const positions = [
    { id: "physical", className: "impact-node-top" },
    { id: "psychological", className: "impact-node-upper-right" },
    { id: "economic", className: "impact-node-lower-right" },
    { id: "family", className: "impact-node-bottom" },
    { id: "social", className: "impact-node-lower-left" },
    { id: "emotional", className: "impact-node-upper-left" },
  ]

  return (
    <div className="impact-wheel">
      <div className="impact-orbit impact-orbit-one" />
      <div className="impact-orbit impact-orbit-two" />

      <div className="impact-wheel-lines" aria-hidden="true">
        {positions.map((item) => (
          <span
            key={item.id}
            className={`impact-line ${item.className}`}
          />
        ))}
      </div>

      <div className="impact-center">
        <ImpactMark />
        <span className="impact-center-label">VICTIMIZATION</span>
        <strong>Multiple<br />Dimensions</strong>
        <small>
          Impacts can overlap rather than appearing separately.
        </small>
      </div>

      {positions.map((position) => {
        const item = impacts.find((impact) => impact.id === position.id)

        if (!item) return null

        const active = item.id === selectedId

        return (
          <button
            key={item.id}
            type="button"
            className={`impact-node ${position.className} ${
              active ? "active" : ""
            }`}
            onClick={() => onSelect(item.id)}
            aria-pressed={active}
          >
            <span className="impact-node-number">
              {item.number}
            </span>
            <span className="impact-node-title">
              {item.title.replace(" Impact", "")}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default function Impact() {
  const [selectedId, setSelectedId] = useState("psychological")

  const selectedImpact = useMemo(
    () =>
      impacts.find((impact) => impact.id === selectedId) ??
      impacts[0],
    [selectedId]
  )

  const selectImpact = (id: string) => {
    setSelectedId(id)

    requestAnimationFrame(() => {
      document
        .getElementById("impact-explorer")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  return (
    <main className="impact-page">
      {/* HERO */}
      <section className="impact-hero">
        <div className="impact-hero-grid">
          <div className="impact-hero-copy">
            <div className="impact-kicker">
              <ImpactMark />
              <span>IMPACT VISUALISATION</span>
            </div>

            <h1>
              Victimization
              <br />
              <span>Can Affect More Than One Area.</span>
            </h1>

            <p>
              Explore how victimization can affect physical wellbeing,
              emotions, psychological wellbeing, relationships, finances,
              and family life.
            </p>

            <div className="impact-hero-actions">
              <a href="#impact-explorer" className="impact-primary-btn">
                Explore Impact
              </a>

              <Link to="/prevention" className="impact-secondary-btn">
                Continue to Prevention →
              </Link>
            </div>
          </div>

          <div className="impact-hero-visual">
            <div className="impact-globe-wrap">
              <VictimLensGlobe className="impact-globe" />
            </div>

            <div className="impact-visual-caption">
      
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="impact-intro">
        <div className="impact-section-label">
          <span></span>
          WHY IMPACT MATTERS
        </div>

        <div className="impact-intro-grid">
          <div>
            <h2>
              An incident may be
              <span> one event.</span>
              <br />
              Its effects can be wider.
            </h2>
          </div>

          <div>
            <p>
              The consequences of victimization are not limited to the
              moment an incident occurs. Different dimensions may affect
              one another and may also extend to families, relationships,
              work, education, and communities.
            </p>

            <p>
              The wheel below provides a simple way to explore these
              dimensions individually while showing how they can overlap.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN EXPLORER */}
      <section
        className="impact-explorer-section"
        id="impact-explorer"
      >
        <div className="impact-section-label">
          <span></span>
          IMPACT WHEEL
        </div>

        <div className="impact-explorer-grid">
          {/* WHEEL */}
          <div className="impact-wheel-panel">
            <ImpactWheel
              selectedId={selectedId}
              onSelect={selectImpact}
            />

            <div className="impact-wheel-hint">
              Select an impact area to explore it.
            </div>
          </div>

          {/* DETAILS */}
          <div className="impact-detail-panel">
            <div className="impact-detail-top">
              <span>{selectedImpact.number}</span>
              <span>IMPACT DIMENSION</span>
            </div>

            <h2>{selectedImpact.title}</h2>

            <p className="impact-detail-lead">
              {selectedImpact.short}
            </p>

            <div className="impact-detail-description">
              {selectedImpact.description}
            </div>

            <div className="impact-detail-block">
              <span className="impact-detail-label">
                POSSIBLE EFFECTS
              </span>

              <div className="impact-example-grid">
                {selectedImpact.examples.map((example) => (
                  <div
                    className="impact-example"
                    key={example}
                  >
                    <span>+</span>
                    <p>{example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="impact-note">
              <span>NOTE</span>
              <p>{selectedImpact.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* OVERLAP */}
      <section className="impact-overlap">
        <div className="impact-section-label">
          <span></span>
          HOW IMPACTS CONNECT
        </div>

        <div className="impact-overlap-grid">
          <div>
            <h2>
              The dimensions
              <span> can overlap.</span>
            </h2>

            <p>
              A single consequence may contribute to several other
              effects. For example, a physical injury can affect
              emotional wellbeing, social participation, finances,
              and family routines.
            </p>
          </div>

          <div className="impact-connection-map">
            <div className="impact-map-core">IMPACT</div>

            <span className="impact-map-chip chip-one">
              Physical
            </span>

            <span className="impact-map-chip chip-two">
              Emotional
            </span>

            <span className="impact-map-chip chip-three">
              Social
            </span>

            <span className="impact-map-chip chip-four">
              Economic
            </span>

            <span className="impact-map-chip chip-five">
              Family
            </span>

            <span className="impact-map-chip chip-six">
              Psychological
            </span>
          </div>
        </div>
      </section>

      {/* SECONDARY VICTIMIZATION */}
      <section className="impact-secondary">
        <div className="impact-secondary-card">
          <div className="impact-secondary-icon">
            <ImpactMark />
          </div>

          <div>
            <span className="impact-detail-label">
              BEYOND THE ORIGINAL INCIDENT
            </span>

            <h2>Secondary Victimization</h2>

            <p>
              Additional harm can sometimes arise from the way a person
              is treated after an incident, including insensitive
              responses, repeated questioning, lack of information,
              stigma, or barriers when seeking help.
            </p>

            <p>
              Recognising these experiences is part of understanding
              why victim-centred responses matter.
            </p>
          </div>
        </div>
      </section>

      {/* RECOVERY */}
      <section className="impact-recovery">
        <div className="impact-section-label">
          <span></span>
          RECOVERY & SUPPORT
        </div>

        <div className="impact-recovery-grid">
          <div>
            <h2>
              Understanding impact is also
              <span> about understanding support.</span>
            </h2>
          </div>

          <div className="impact-recovery-cards">
            <article>
              <span>01</span>
              <h3>Recognition</h3>
              <p>
                Acknowledge that victimization can affect different
                areas of life.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Support</h3>
              <p>
                Connect affected people with appropriate personal,
                social, legal, or practical support.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Recovery</h3>
              <p>
                Recognise that recovery can take different forms and
                may not follow one fixed timeline.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className="impact-next">
        <div className="impact-next-inner">
          <div>
            <span>CONTINUE YOUR JOURNEY</span>
            <h2>From Understanding → Action</h2>
          </div>

          <div className="impact-next-links">
            <Link to="/rights">Know Your Rights ↗</Link>
            <Link to="/prevention">Explore Prevention ↗</Link>
            <Link to="/law">Understand the Justice Pathway ↗</Link>
            <Link to="/resources">Find Support ↗</Link>
          </div>
        </div>
      </section>
    </main>
  )
}