import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./prevention.css"

type Choice = {
  text: string
  feedback: string
  helpful: boolean
}

type Scenario = {
  id: string
  number: string
  category: string
  title: string
  situation: string
  context: string
  choices: Choice[]
  principle: string
}

const scenarios: Scenario[] = [
  {
    id: "online",
    number: "01",
    category: "DIGITAL SAFETY",
    title: "A suspicious message",
    situation:
      "You receive a message claiming that your account will be blocked unless you immediately open a link and confirm your details.",
    context:
      "The message uses urgent language and asks for personal or financial information.",
    choices: [
      {
        text: "Open the link quickly before it expires.",
        feedback:
          "Urgency is often used to pressure people into making decisions before they can verify a message.",
        helpful: false,
      },
      {
        text: "Verify the message through the organisation's official channel.",
        feedback:
          "Independent verification reduces the chance of responding to a fraudulent or misleading message.",
        helpful: true,
      },
      {
        text: "Forward the message to friends first.",
        feedback:
          "Sharing an unverified message can spread the same risk to other people.",
        helpful: false,
      },
    ],
    principle: "Pause • Verify • Protect",
  },
  {
    id: "workplace",
    number: "02",
    category: "WORKPLACE",
    title: "A concerning situation",
    situation:
      "You notice behaviour at a workplace that makes you or another person uncomfortable, but you are unsure whether it should be reported.",
    context:
      "The situation may involve repeated inappropriate behaviour or a misuse of authority.",
    choices: [
      {
        text: "Ignore it because it may resolve itself.",
        feedback:
          "Ignoring a concern can leave the affected person without support or information about available options.",
        helpful: false,
      },
      {
        text: "Check available reporting and support procedures.",
        feedback:
          "Knowing the available channels can help people understand their options without forcing them into one response.",
        helpful: true,
      },
      {
        text: "Post the situation publicly immediately.",
        feedback:
          "Publicly sharing details may create privacy issues and may not provide the affected person with a suitable support pathway.",
        helpful: false,
      },
    ],
    principle: "Recognise • Support • Report appropriately",
  },
  {
    id: "emergency",
    number: "03",
    category: "IMMEDIATE SAFETY",
    title: "A situation becomes unsafe",
    situation:
      "You realise that a situation around you is becoming unsafe and you believe immediate assistance may be required.",
    context:
      "Your priority is to move toward safety and seek appropriate help.",
    choices: [
      {
        text: "Stay and confront the situation alone.",
        feedback:
          "Confrontation can increase risk when a situation is already unsafe.",
        helpful: false,
      },
      {
        text: "Move toward safety and contact appropriate emergency help.",
        feedback:
          "When there is an immediate safety concern, reaching a safer place and seeking appropriate emergency assistance is an important priority.",
        helpful: true,
      },
      {
        text: "Wait until the situation becomes clearer.",
        feedback:
          "Waiting may not be appropriate where there is an immediate risk to safety.",
        helpful: false,
      },
    ],
    principle: "Safety first • Seek appropriate help",
  },
  {
    id: "education",
    number: "04",
    category: "EDUCATION",
    title: "A student needs support",
    situation:
      "A student tells you that something has happened to them and says they are afraid to tell anyone else.",
    context:
      "They may be worried about consequences, disbelief, embarrassment, or being blamed.",
    choices: [
      {
        text: "Tell them they should have prevented it.",
        feedback:
          "Blaming the affected person can discourage them from seeking support and does not address the conduct that caused the harm.",
        helpful: false,
      },
      {
        text: "Listen without blaming and help them identify trusted support.",
        feedback:
          "A supportive response can help a person understand that they can seek assistance without being judged.",
        helpful: true,
      },
      {
        text: "Tell everyone so they can help.",
        feedback:
          "Sharing sensitive information widely can affect privacy and may remove control from the affected person.",
        helpful: false,
      },
    ],
    principle: "Listen • Support • Respect privacy",
  },
  {
    id: "community",
    number: "05",
    category: "COMMUNITY",
    title: "A warning sign",
    situation:
      "You notice a recurring safety concern in a community space that could affect several people.",
    context:
      "The issue may not have harmed anyone yet, but it indicates a preventable risk.",
    choices: [
      {
        text: "Ignore it because nobody has been harmed yet.",
        feedback:
          "Prevention can involve recognising risks before they result in harm.",
        helpful: false,
      },
      {
        text: "Use the appropriate channel to raise the safety concern.",
        feedback:
          "Reporting a preventable risk through an appropriate channel can help organisations or authorities respond before the situation worsens.",
        helpful: true,
      },
      {
        text: "Accuse someone publicly without checking the facts.",
        feedback:
          "Unverified accusations can create additional harm and do not provide a reliable prevention response.",
        helpful: false,
      },
    ],
    principle: "Notice • Verify • Act responsibly",
  },
  {
    id: "cyber",
    number: "06",
    category: "CYBERCRIME",
    title: "A suspicious payment request",
    situation:
      "You are asked to transfer money urgently because someone claims that a serious problem will occur if you do not pay immediately.",
    context:
      "You are unsure whether the request is genuine.",
    choices: [
      {
        text: "Pay immediately to avoid the problem.",
        feedback:
          "Pressure and fear can cause rushed financial decisions.",
        helpful: false,
      },
      {
        text: "Stop, verify the claim, and use an official reporting channel when needed.",
        feedback:
          "Independent verification helps reduce the risk of acting on a fraudulent payment request.",
        helpful: true,
      },
      {
        text: "Give the sender more personal information.",
        feedback:
          "Providing additional information can increase the potential risk.",
        helpful: false,
      },
    ],
    principle: "Stop • Verify • Report",
  },
]

function PreventionMark() {
  return (
    <svg
      className="prevention-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <path
        d="M40 7 67 17v20c0 17-10.5 29.5-27 37C23.5 66.5 13 54 13 37V17L40 7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M40 20v28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M28 36h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="40"
        cy="58"
        r="3"
        fill="currentColor"
      />
    </svg>
  )
}

function ScenarioCard({
  scenario,
  selectedChoice,
  onSelect,
}: {
  scenario: Scenario
  selectedChoice: number | null
  onSelect: (index: number) => void
}) {
  return (
    <div className="scenario-card">
      <div className="scenario-topline">
        <span>{scenario.number}</span>
        <span>{scenario.category}</span>
      </div>

      <h2>{scenario.title}</h2>

      <div className="scenario-situation">
        <span>SITUATION</span>
        <p>{scenario.situation}</p>
      </div>

      <div className="scenario-context">
        {scenario.context}
      </div>

      <div className="scenario-choice-heading">
        <span>WHAT WOULD YOU DO?</span>
        <small>Select one response</small>
      </div>

      <div className="scenario-choices">
        {scenario.choices.map((choice, index) => {
          const selected = selectedChoice === index

          return (
            <button
              key={choice.text}
              type="button"
              className={`scenario-choice ${
                selected ? "selected" : ""
              }`}
              onClick={() => onSelect(index)}
              aria-pressed={selected}
            >
              <span className="scenario-choice-number">
                {String.fromCharCode(65 + index)}
              </span>

              <span className="scenario-choice-text">
                {choice.text}
              </span>

              <span className="scenario-choice-arrow">
                →
              </span>
            </button>
          )
        })}
      </div>

      {selectedChoice !== null && (
        <div className="scenario-feedback" aria-live="polite">
          <div
            className={`feedback-badge ${
              scenario.choices[selectedChoice].helpful
                ? "helpful"
                : "consider"
            }`}
          >
            {scenario.choices[selectedChoice].helpful
              ? "HELPFUL RESPONSE"
              : "CONSIDER THE RISK"}
          </div>

          <p>
            {scenario.choices[selectedChoice].feedback}
          </p>

          <div className="scenario-principle">
            <span>KEY PRINCIPLE</span>
            <strong>{scenario.principle}</strong>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Prevention() {
  const [activeId, setActiveId] = useState(scenarios[0].id)
  const [selectedChoice, setSelectedChoice] = useState<
    number | null
  >(null)

  const activeScenario = useMemo(
    () =>
      scenarios.find((scenario) => scenario.id === activeId) ??
      scenarios[0],
    [activeId]
  )

  const activeIndex = scenarios.findIndex(
    (scenario) => scenario.id === activeId
  )

  const handleScenarioChange = (id: string) => {
    setActiveId(id)
    setSelectedChoice(null)

    requestAnimationFrame(() => {
      document
        .getElementById("scenario-area")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  const nextScenario = () => {
    const nextIndex =
      activeIndex + 1 >= scenarios.length
        ? 0
        : activeIndex + 1

    handleScenarioChange(scenarios[nextIndex].id)
  }

  return (
    <main className="prevention-page">
      {/* HERO */}
      <section className="prevention-hero">
        <div className="prevention-hero-grid">
          <div className="prevention-hero-copy">
            <div className="prevention-kicker">
              <PreventionMark />
              <span>PREVENTION & AWARENESS</span>
            </div>

            <h1>
              Prevention
              <br />
              <span>Starts Before Harm.</span>
            </h1>

            <p>
              Explore everyday situations, make a decision, and
              understand the thinking behind a safer response.
            </p>

            <div className="prevention-actions">
              <a
                href="#scenario-area"
                className="prevention-primary-btn"
              >
                Try a Scenario
              </a>

              <Link
                to="/resources"
                className="prevention-secondary-btn"
              >
                Find Support →
              </Link>
            </div>
          </div>

          <div className="prevention-hero-visual">
            <div className="prevention-globe-wrap">
              <VictimLensGlobe className="prevention-globe" />
            </div>

            <div className="prevention-visual-caption">
           
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="prevention-intro">
        <div className="prevention-label">
          <span></span>
          PREVENTION IS A PROCESS
        </div>

        <div className="prevention-intro-grid">
          <div>
            <h2>
              Small decisions can
              <span> change what happens next.</span>
            </h2>
          </div>

          <div>
            <p>
              Prevention is not about blaming people for harm. It is
              about recognising risks, understanding available choices,
              improving systems, and making it easier to seek help.
            </p>

            <p>
              These scenarios are simplified examples for awareness.
              Real situations can be more complex and may require
              professional or emergency assistance.
            </p>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section
        className="prevention-scenarios"
        id="scenario-area"
      >
        <div className="prevention-label">
          <span></span>
          INTERACTIVE SCENARIOS
        </div>

        <div className="scenario-selector">
          {scenarios.map((scenario) => {
            const active = scenario.id === activeId

            return (
              <button
                type="button"
                key={scenario.id}
                className={`scenario-tab ${
                  active ? "active" : ""
                }`}
                onClick={() =>
                  handleScenarioChange(scenario.id)
                }
                aria-pressed={active}
              >
                <span>{scenario.number}</span>
                <strong>{scenario.category}</strong>
              </button>
            )
          })}
        </div>

        <div className="scenario-workspace">
          <ScenarioCard
            scenario={activeScenario}
            selectedChoice={selectedChoice}
            onSelect={setSelectedChoice}
          />

          <aside className="scenario-side">
            <div className="scenario-progress">
              <div className="scenario-progress-top">
                <span>SCENARIO PROGRESS</span>
                <strong>
                  {String(activeIndex + 1).padStart(2, "0")} /
                  {" "}
                  {String(scenarios.length).padStart(2, "0")}
                </strong>
              </div>

              <div className="scenario-progress-bar">
                <span
                  style={{
                    width: `${
                      ((activeIndex + 1) /
                        scenarios.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            <div className="prevention-principles">
              <span>CORE PRINCIPLES</span>

              <div>
                <article>
                  <strong>Pause</strong>
                  <p>
                    Give yourself time to understand a situation.
                  </p>
                </article>

                <article>
                  <strong>Verify</strong>
                  <p>
                    Check information before taking important action.
                  </p>
                </article>

                <article>
                  <strong>Support</strong>
                  <p>
                    Help people connect with appropriate assistance.
                  </p>
                </article>

                <article>
                  <strong>Respect</strong>
                  <p>
                    Avoid blame and respect privacy and choice.
                  </p>
                </article>
              </div>
            </div>

            <button
              type="button"
              className="next-scenario-btn"
              onClick={nextScenario}
            >
              Next Scenario
              <span>→</span>
            </button>
          </aside>
        </div>
      </section>

      {/* SYSTEM VIEW */}
      <section className="prevention-system">
        <div className="prevention-label">
          <span></span>
          PREVENTION BEYOND THE INDIVIDUAL
        </div>

        <div className="prevention-system-grid">
          <div>
            <h2>
              Prevention is not only about
              <span> personal choices.</span>
            </h2>

            <p>
              Safer environments also depend on organisations,
              institutions, communities, reporting systems, public
              awareness, and access to support.
            </p>
          </div>

          <div className="system-map">
            <div className="system-core">
              <PreventionMark />
              <strong>SAFER<br />SYSTEMS</strong>
            </div>

            <div className="system-node system-one">
              Awareness
            </div>

            <div className="system-node system-two">
              Policies
            </div>

            <div className="system-node system-three">
              Reporting
            </div>

            <div className="system-node system-four">
              Support
            </div>

            <div className="system-node system-five">
              Community
            </div>

            <div className="system-node system-six">
              Response
            </div>
          </div>
        </div>
      </section>

      {/* VICTIM-CENTRED PREVENTION */}
      <section className="prevention-victim-centred">
        <div className="prevention-victim-card">
          <div className="prevention-card-mark">
            <PreventionMark />
          </div>

          <div>
            <span>VICTIM-CENTRED APPROACH</span>

            <h2>
              Prevention should reduce risk
              <br />
              <em>without blaming victims.</em>
            </h2>

            <p>
              Responsibility for harmful behaviour remains with the
              person or system responsible for that behaviour.
              Prevention should focus on safer environments,
              informed choices, accessible support, and effective
              responses.
            </p>
          </div>
        </div>
      </section>

      {/* EMERGENCY SUPPORT */}
      <section className="prevention-support">
        <div className="prevention-support-grid">
          <div>
            <span>WHEN SAFETY IS IMMEDIATE</span>

            <h2>
              Prevention also means
              <br />
              <strong>knowing when to seek help.</strong>
            </h2>
          </div>

          <div className="prevention-support-box">
            <p>
              When there is an immediate threat to safety, prioritise
              getting to a safer place and contacting appropriate
              emergency services.
            </p>

            <Link to="/resources">
              Open the VictimLens Support Centre →
            </Link>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <section className="prevention-next">
        <div className="prevention-next-inner">
          <div>
            <span>CONTINUE YOUR JOURNEY</span>
            <h2>From Prevention → Justice</h2>
          </div>

          <div className="prevention-next-links">
            <Link to="/impact">
              Understand Impact ↗
            </Link>

            <Link to="/rights">
              Know Your Rights ↗
            </Link>

            <Link to="/law">
              Explore the Justice Pathway ↗
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