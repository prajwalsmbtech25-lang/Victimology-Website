import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./cases.css"

type CaseStudy = {
  id: string
  number: string
  category: string
  title: string
  setting: string
  summary: string
  affected: string
  incident: string
  impact: string[]
  response: string[]
  secondary: string[]
  lessons: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "digital",
    number: "01",
    category: "DIGITAL SAFETY",
    title: "The Impersonation Message",
    setting: "A fictional online-fraud scenario",
    summary:
      "A person receives messages from someone pretending to represent a trusted organisation and is pressured to share information.",
    affected:
      "The directly affected person may experience financial, emotional, psychological, and privacy-related consequences.",
    incident:
      "The person receives urgent messages, is asked to provide information, and later realises that the communication may not have been genuine.",
    impact: [
      "Financial or practical loss",
      "Stress and uncertainty",
      "Reduced trust in digital communication",
      "Concern about personal information",
    ],
    response: [
      "Reporting through an appropriate cybercrime channel",
      "Preserving relevant messages or records",
      "Seeking financial or legal assistance where appropriate",
      "Receiving information about available next steps",
    ],
    secondary: [
      "Feeling blamed for being deceived",
      "Repeatedly explaining the incident",
      "Uncertainty about where to report",
      "Fear of further digital harm",
    ],
    lessons: [
      "Independent verification matters.",
      "Urgency can influence decision-making.",
      "Accessible reporting systems are important.",
      "Victims need support rather than blame.",
    ],
  },
  {
    id: "workplace",
    number: "02",
    category: "WORKPLACE",
    title: "The Unreported Concern",
    setting: "A fictional workplace scenario",
    summary:
      "A worker experiences repeated inappropriate behaviour but hesitates to report it because they are uncertain about the available process.",
    affected:
      "The worker may experience emotional, psychological, social, and professional consequences.",
    incident:
      "The behaviour occurs repeatedly and the person becomes increasingly uncertain about whether speaking up will make the situation worse.",
    impact: [
      "Work-related stress",
      "Reduced sense of safety",
      "Difficulty concentrating",
      "Withdrawal from workplace interaction",
    ],
    response: [
      "Information about reporting procedures",
      "Access to an appropriate internal or external channel",
      "Protection against inappropriate retaliation where applicable",
      "Access to relevant support",
    ],
    secondary: [
      "Fear that others will not believe them",
      "Lack of clear information",
      "Social pressure to remain silent",
      "Concern about professional consequences",
    ],
    lessons: [
      "Reporting pathways should be understandable.",
      "People need access to information.",
      "Support should be available before and after reporting.",
      "Prevention also involves organisational responsibility.",
    ],
  },
  {
    id: "education",
    number: "03",
    category: "EDUCATION",
    title: "A Student Seeks Help",
    setting: "A fictional educational setting",
    summary:
      "A student tells a trusted person that something harmful has happened and is unsure who can help.",
    affected:
      "The student may be affected directly, while family members or other people around them may also experience consequences.",
    incident:
      "The student decides to disclose the experience but is worried about being blamed, ignored, or not understood.",
    impact: [
      "Fear and uncertainty",
      "Difficulty maintaining routine",
      "Changes in social participation",
      "Emotional distress",
    ],
    response: [
      "Listening without blame",
      "Connecting the student with appropriate support",
      "Explaining available reporting or protection options",
      "Respecting privacy within applicable procedures",
    ],
    secondary: [
      "Dismissive responses",
      "Pressure to remain silent",
      "Unnecessary disclosure of personal information",
      "Repeatedly recounting the experience",
    ],
    lessons: [
      "The first response can matter.",
      "Victims should not be blamed for harm.",
      "Trusted support can help people navigate options.",
      "Institutions also have responsibilities.",
    ],
  },
  {
    id: "community",
    number: "04",
    category: "COMMUNITY",
    title: "The Recurring Safety Risk",
    setting: "A fictional community-safety scenario",
    summary:
      "A recurring safety problem is noticed in a shared community space before a serious incident occurs.",
    affected:
      "Potentially affected people can include residents, visitors, workers, and other members of the community.",
    incident:
      "People repeatedly notice a preventable risk but are uncertain which organisation or authority should receive the concern.",
    impact: [
      "Fear about personal safety",
      "Reduced use of the space",
      "Community concern",
      "Loss of confidence in local systems",
    ],
    response: [
      "Raising the concern through an appropriate channel",
      "Documenting relevant information",
      "Reviewing environmental or organisational risks",
      "Improving communication about reporting",
    ],
    secondary: [
      "People feeling ignored",
      "Repeated complaints without feedback",
      "Unclear responsibility between organisations",
      "Frustration with available systems",
    ],
    lessons: [
      "Prevention can begin before harm occurs.",
      "Communities can help identify risks.",
      "Reporting systems should be accessible.",
      "Institutions need ways to respond to recurring concerns.",
    ],
  },
]

type LensKey =
  | "affected"
  | "incident"
  | "impact"
  | "response"
  | "secondary"
  | "lessons"

const analysisLenses: {
  key: LensKey
  number: string
  title: string
  label: string
}[] = [
  {
    key: "affected",
    number: "01",
    title: "Who Was Affected?",
    label: "VICTIM",
  },
  {
    key: "incident",
    number: "02",
    title: "What Happened?",
    label: "VICTIMIZATION",
  },
  {
    key: "impact",
    number: "03",
    title: "What Was the Impact?",
    label: "IMPACT",
  },
  {
    key: "response",
    number: "04",
    title: "How Did the System Respond?",
    label: "JUSTICE",
  },
  {
    key: "secondary",
    number: "05",
    title: "Was Further Harm Created?",
    label: "SECONDARY HARM",
  },
  {
    key: "lessons",
    number: "06",
    title: "What Can Be Learned?",
    label: "PREVENTION",
  },
]

function CasesMark() {
  return (
    <svg
      className="cases-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <circle
        cx="34"
        cy="34"
        r="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="34"
        cy="34"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="m50 50 17 17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M27 34h14M34 27v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function LensContent({
  caseStudy,
  lens,
}: {
  caseStudy: CaseStudy
  lens: LensKey
}) {
  const value = caseStudy[lens]

  if (Array.isArray(value)) {
    return (
      <div className="case-lens-list">
        {value.map((item) => (
          <div className="case-lens-item" key={item}>
            <span>+</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    )
  }

  return <p className="case-lens-description">{value}</p>
}

function Cases() {
  const [activeCaseId, setActiveCaseId] = useState(
    caseStudies[0].id
  )

  const [activeLens, setActiveLens] =
    useState<LensKey>("affected")

  const activeCase = useMemo(
    () =>
      caseStudies.find((item) => item.id === activeCaseId) ??
      caseStudies[0],
    [activeCaseId]
  )

  const activeCaseIndex = caseStudies.findIndex(
    (item) => item.id === activeCaseId
  )

  const selectCase = (id: string) => {
    setActiveCaseId(id)
    setActiveLens("affected")

    requestAnimationFrame(() => {
      document
        .getElementById("case-lab")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  const selectLens = (lens: LensKey) => {
    setActiveLens(lens)
  }

  const nextCase = () => {
    const nextIndex =
      activeCaseIndex + 1 >= caseStudies.length
        ? 0
        : activeCaseIndex + 1

    selectCase(caseStudies[nextIndex].id)
  }

  return (
    <main className="cases-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="cases-hero">
        <div className="cases-hero-grid">
          <div className="cases-hero-copy">
            <div className="cases-kicker">
              <CasesMark />
              <span>CASE LAB</span>
            </div>

            <h1>
              Understand the Case.
              <br />
              <span>Understand the Victim.</span>
            </h1>

            <p>
              Explore fictional scenarios through a victimology lens:
              who was affected, what happened, what impact followed,
              how systems responded, and what can be learned.
            </p>

            <div className="cases-hero-actions">
              <a
                href="#case-lab"
                className="cases-primary-btn"
              >
                Enter Case Lab
              </a>

              <Link
                to="/impact"
                className="cases-secondary-btn"
              >
                Explore Impact →
              </Link>
            </div>
          </div>

          <div className="cases-hero-visual">
            <div className="cases-globe-wrap">
              <VictimLensGlobe className="cases-globe" />
            </div>

            <div className="cases-visual-caption">
      
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="cases-intro">
        <div className="cases-label">
          <span></span>
          WHY CASE ANALYSIS MATTERS
        </div>

        <div className="cases-intro-grid">
          <div>
            <h2>
              A case is more than
              <span> what happened.</span>
            </h2>
          </div>

          <div>
            <p>
              Victimology can examine the experience of the affected
              person, the circumstances of victimization, the
              consequences of harm, responses from institutions and
              communities, and opportunities for prevention.
            </p>

            <p>
              The Case Lab uses fictional scenarios to demonstrate
              this method without presenting invented events as real
              cases.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CASE SELECTOR
      ========================================= */}

      <section className="case-lab" id="case-lab">
        <div className="cases-label">
          <span></span>
          SELECT A CASE
        </div>

        <div className="case-selector">
          {caseStudies.map((caseStudy) => {
            const active =
              caseStudy.id === activeCaseId

            return (
              <button
                key={caseStudy.id}
                type="button"
                className={`case-selector-card ${
                  active ? "active" : ""
                }`}
                onClick={() => selectCase(caseStudy.id)}
                aria-pressed={active}
              >
                <span>{caseStudy.number}</span>

                <strong>{caseStudy.title}</strong>

                <small>{caseStudy.category}</small>
              </button>
            )
          })}
        </div>

        {/* CASE HEADER */}
        <div className="active-case-header">
          <div>
            <span className="case-category">
              {activeCase.category}
            </span>

            <h2>{activeCase.title}</h2>

            <p>{activeCase.summary}</p>
          </div>

          <div className="case-fiction-note">
            <CasesMark />

            <div>
              <strong>FICTIONAL CASE</strong>
              <span>
                Created for victimology analysis and awareness.
              </span>
            </div>
          </div>
        </div>

        {/* ANALYSIS */}
        <div className="case-analysis">
          <div className="case-lens-menu">
            <div className="case-lens-menu-title">
              <span>ANALYSIS LENS</span>
              <small>Choose a question</small>
            </div>

            {analysisLenses.map((lens) => {
              const active = activeLens === lens.key

              return (
                <button
                  key={lens.key}
                  type="button"
                  className={`case-lens-button ${
                    active ? "active" : ""
                  }`}
                  onClick={() =>
                    selectLens(lens.key)
                  }
                  aria-pressed={active}
                >
                  <span>{lens.number}</span>

                  <div>
                    <strong>{lens.title}</strong>
                    <small>{lens.label}</small>
                  </div>

                  <b>→</b>
                </button>
              )
            })}
          </div>

          <div className="case-lens-panel">
            <div className="case-lens-panel-top">
              <div>
                <span>
                  {
                    analysisLenses.find(
                      (lens) => lens.key === activeLens
                    )?.label
                  }
                </span>

                <strong>
                  {
                    analysisLenses.find(
                      (lens) => lens.key === activeLens
                    )?.number
                  }
                </strong>
              </div>

              <small>
                {activeCase.setting}
              </small>
            </div>

            <div className="case-lens-main">
              <h3>
                {
                  analysisLenses.find(
                    (lens) => lens.key === activeLens
                  )?.title
                }
              </h3>

              <LensContent
                caseStudy={activeCase}
                lens={activeLens}
              />
            </div>

            <div className="case-lab-footer">
              <span>
                CASE {activeCase.number}
              </span>

              <button
                type="button"
                onClick={nextCase}
              >
                Next Case →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CASE THINKING
      ========================================= */}

      <section className="cases-thinking">
        <div className="cases-label">
          <span></span>
          THE VICTIMOLOGY LENS
        </div>

        <div className="cases-thinking-grid">
          <div>
            <h2>
              Ask better questions.
              <span> See more of the case.</span>
            </h2>

            <p>
              A victimology-based analysis looks beyond the identity
              of the offender or the legal outcome. It asks what the
              affected person experienced before, during, and after
              victimization.
            </p>
          </div>

          <div className="question-stack">
            <article>
              <span>01</span>
              <strong>Who was affected?</strong>
              <p>
                Consider directly affected people and wider
                consequences for others.
              </p>
            </article>

            <article>
              <span>02</span>
              <strong>What changed?</strong>
              <p>
                Examine the different dimensions of impact.
              </p>
            </article>

            <article>
              <span>03</span>
              <strong>What happened afterward?</strong>
              <p>
                Consider institutional and social responses.
              </p>
            </article>

            <article>
              <span>04</span>
              <strong>What can improve?</strong>
              <p>
                Identify prevention and support opportunities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================
          SECONDARY VICTIMIZATION
      ========================================= */}

      <section className="cases-secondary">
        <div className="cases-secondary-card">
          <div className="cases-secondary-mark">
            <CasesMark />
          </div>

          <div>
            <span>LOOK BEYOND THE ORIGINAL HARM</span>

            <h2>
              The case does not
              <br />
              end with the incident.
            </h2>

            <p>
              Victimology can also examine whether the response from
              institutions, communities, media, or other people
              created additional difficulties for the affected person.
            </p>

            <p>
              This is one reason dignity, privacy, information,
              protection, and appropriate support matter throughout
              the response.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          RESPONSIBLE CASE ANALYSIS
      ========================================= */}

      <section className="cases-responsible">
        <div className="cases-label">
          <span></span>
          RESPONSIBLE CASE ANALYSIS
        </div>

        <div className="responsible-grid">
          <article>
            <span>DIGNITY</span>

            <h3>Respect the people involved.</h3>

            <p>
              Focus on relevant victimology concepts rather than
              unnecessary personal details.
            </p>
          </article>

          <article>
            <span>FACTS</span>

            <h3>Separate evidence from claims.</h3>

            <p>
              Real-world case analysis should rely on reliable
              sources and clearly distinguish established facts from
              allegations or interpretations.
            </p>
          </article>

          <article>
            <span>RESPONSIBILITY</span>

            <h3>Never turn vulnerability into blame.</h3>

            <p>
              Examining risk factors should not imply that an
              affected person caused or deserved the harm.
            </p>
          </article>
        </div>
      </section>

      {/* =========================================
          GLOBAL CONNECTION
      ========================================= */}

      <section className="cases-global">
        <div className="cases-global-grid">
          <div className="cases-global-copy">
            <span>FROM CASE → UNDERSTANDING</span>

            <h2>
              Every case can reveal
              <span> what needs attention.</span>
            </h2>

            <p>
              Case analysis can connect victimology concepts with
              impact, rights, prevention, justice, and support.
            </p>

            <div className="cases-global-actions">
              <Link
                to="/rights"
                className="cases-primary-btn"
              >
                Explore Victim Rights
              </Link>

              <Link
                to="/law"
                className="cases-secondary-btn"
              >
                Explore Justice →
              </Link>
            </div>
          </div>

          <div className="cases-global-globe">
            <VictimLensGlobe />
          </div>
        </div>
      </section>

      {/* =========================================
          CONTINUE
      ========================================= */}

      <section className="cases-next">
        <div className="cases-next-inner">
          <div>
            <span>CONTINUE WITH VICTIMLENS</span>

            <h2>
              Connect the case
              <br />
              to the bigger picture.
            </h2>
          </div>

          <div className="cases-next-links">
            <Link to="/victimology">
              Understand Victimology ↗
            </Link>

            <Link to="/types">
              Explore Victim Experiences ↗
            </Link>

            <Link to="/impact">
              Understand Impact ↗
            </Link>

            <Link to="/rights">
              Know Your Rights ↗
            </Link>

            <Link to="/law">
              Follow the Justice Pathway ↗
            </Link>

            <Link to="/resources">
              Find Support ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cases