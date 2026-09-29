import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./resources.css"

type Resource = {
  number: string
  category: string
  title: string
  description: string
  action: string
  actionText: string
  kind: "call" | "site"
}

const resources: Resource[] = [
  {
    number: "112",
    category: "EMERGENCY",
    title: "National Emergency",
    description:
      "India's nationwide unified emergency response number for situations requiring immediate assistance.",
    action: "tel:112",
    actionText: "CALL 112",
    kind: "call",
  },
  {
    number: "181",
    category: "WOMEN",
    title: "Women Helpline",
    description:
      "A toll-free 24-hour service for women seeking support, information, and assistance.",
    action: "tel:181",
    actionText: "CALL 181",
    kind: "call",
  },
  {
    number: "1098",
    category: "CHILDREN",
    title: "Child Helpline",
    description:
      "A dedicated child-protection helpline operating under Mission Vatsalya and integrated with ERSS 112.",
    action: "tel:1098",
    actionText: "CALL 1098",
    kind: "call",
  },
  {
    number: "1930",
    category: "CYBERCRIME",
    title: "Cyber Crime Helpline",
    description:
      "The national cybercrime helpline, including immediate reporting of cyber financial fraud.",
    action: "tel:1930",
    actionText: "CALL 1930",
    kind: "call",
  },
  {
    number: "15100",
    category: "LEGAL AID",
    title: "NALSA Legal Aid",
    description:
      "NALSA's toll-free helpline for legal assistance, advice, and information about available legal services.",
    action: "tel:15100",
    actionText: "CALL 15100",
    kind: "call",
  },
]

type SupportArea = {
  id: string
  number: string
  title: string
  tag: string
  description: string
  links: {
    label: string
    href: string
  }[]
}

const supportAreas: SupportArea[] = [
  {
    id: "emergency",
    number: "01",
    title: "Immediate Emergency",
    tag: "SAFETY",
    description:
      "When there is an immediate threat to safety, getting to a safer situation and contacting appropriate emergency assistance should be prioritised.",
    links: [
      {
        label: "Call National Emergency — 112",
        href: "tel:112",
      },
    ],
  },
  {
    id: "women",
    number: "02",
    title: "Women & Gender-Based Support",
    tag: "WOMEN",
    description:
      "Women facing violence, distress, or seeking information can contact the Women Helpline and connected support systems.",
    links: [
      {
        label: "Call Women Helpline — 181",
        href: "tel:181",
      },
      {
        label: "Open Women Helpline",
        href: "https://wcd.gov.in/women/help",
      },
    ],
  },
  {
    id: "children",
    number: "03",
    title: "Child Protection",
    tag: "CHILDREN",
    description:
      "Children in crisis can access Child Helpline support through the national child-protection system.",
    links: [
      {
        label: "Call Child Helpline — 1098",
        href: "tel:1098",
      },
      {
        label: "Open Child Helpline",
        href: "https://wcd.gov.in/child/child-helpline",
      },
    ],
  },
  {
    id: "cyber",
    number: "04",
    title: "Cybercrime",
    tag: "DIGITAL",
    description:
      "Cybercrime can be reported through India's National Cyber Crime Reporting Portal. Immediate reporting is particularly important for cyber financial fraud.",
    links: [
      {
        label: "Call Cybercrime Helpline — 1930",
        href: "tel:1930",
      },
      {
        label: "Open Cyber Crime Portal",
        href: "https://www.cybercrime.gov.in/",
      },
    ],
  },
  {
    id: "legal",
    number: "05",
    title: "Free Legal Assistance",
    tag: "LEGAL",
    description:
      "NALSA and the Legal Services Authorities provide free legal aid, advice, and assistance to eligible people.",
    links: [
      {
        label: "Call NALSA — 15100",
        href: "tel:15100",
      },
      {
        label: "Open NALSA Legal Services",
        href: "https://nalsa.gov.in/promoting-inclusive-legal-system/",
      },
    ],
  },
  {
    id: "general",
    number: "06",
    title: "Government & Support Services",
    tag: "GENERAL",
    description:
      "Depending on the circumstances, a person may also need healthcare, social support, specialised services, or a relevant government authority.",
    links: [
      {
        label: "Open India Government Helpline Directory",
        href: "https://www.india.gov.in/directory/helpline",
      },
    ],
  },
]

function ResourcesMark() {
  return (
    <svg
      className="resources-mark"
      viewBox="0 0 80 80"
      aria-hidden="true"
    >
      <rect
        x="13"
        y="13"
        width="54"
        height="54"
        rx="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M40 25v30M25 40h30"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle
        cx="40"
        cy="40"
        r="23"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 5"
      />
    </svg>
  )
}

function isExternal(href: string) {
  return href.startsWith("http")
}

export default function Resources() {
  const [activeCategory, setActiveCategory] =
    useState("all")

  const filteredAreas = useMemo(() => {
    if (activeCategory === "all") {
      return supportAreas
    }

    return supportAreas.filter(
      (area) => area.id === activeCategory
    )
  }, [activeCategory])

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id)

    requestAnimationFrame(() => {
      document
        .getElementById("support-explorer")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
    })
  }

  return (
    <main className="resources-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="resources-hero">
        <div className="resources-hero-grid">
          <div className="resources-hero-copy">
            <div className="resources-kicker">
              <ResourcesMark />
              <span>SUPPORT CENTRE</span>
            </div>

            <h1>
              Help When
              <br />
              <span>It Matters.</span>
            </h1>

            <p>
              Find emergency services, specialised helplines,
              cybercrime reporting, legal aid, and official
              information through one victim-centred support hub.
            </p>

            <div className="resources-hero-actions">
              <a
                href="#support-explorer"
                className="resources-primary-btn"
              >
                Find Support
              </a>

              <a
                href="tel:112"
                className="resources-emergency-btn"
              >
                CALL 112
              </a>
            </div>
          </div>

          <div className="resources-hero-visual">
            <div className="resources-globe-wrap">
              <VictimLensGlobe className="resources-globe" />
            </div>

            <div className="resources-visual-caption">
        
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          EMERGENCY
      ========================================= */}

      <section className="resources-emergency">
        <div className="resources-emergency-inner">
          <div className="emergency-icon">
            <ResourcesMark />
          </div>

          <div className="emergency-copy">
            <span>IMMEDIATE DANGER</span>

            <h2>
              Safety comes first.
            </h2>

            <p>
              For an immediate emergency in India, contact the
              national emergency number 112.
            </p>
          </div>

          <a
            href="tel:112"
            className="emergency-call"
          >
            <strong>112</strong>
            <span>CALL NOW →</span>
          </a>
        </div>
      </section>

      {/* =========================================
          HELPLINES
      ========================================= */}

      <section className="resources-helplines">
        <div className="resources-container">
          <div className="resources-label">
            <span></span>
            OFFICIAL HELPLINES
          </div>

          <div className="resources-section-heading">
            <div>
              <h2>
                Know where
                <span> to reach.</span>
              </h2>
            </div>

            <p>
              Different situations may require different forms of
              assistance. These national services provide direct
              routes to emergency, women and child support,
              cybercrime reporting, and legal aid.
            </p>
          </div>

          <div className="helpline-grid">
            {resources.map((resource) => (
              <article
                className={`helpline-card ${
                  resource.number === "112"
                    ? "primary"
                    : ""
                }`}
                key={resource.number}
              >
                <div className="helpline-top">
                  <span>{resource.category}</span>

                  <strong>{resource.number}</strong>
                </div>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>

                <a href={resource.action}>
                  {resource.actionText}
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SUPPORT EXPLORER
      ========================================= */}

      <section
        className="support-explorer"
        id="support-explorer"
      >
        <div className="resources-container">
          <div className="resources-label">
            <span></span>
            CHOOSE YOUR SITUATION
          </div>

          <div className="resources-section-heading">
            <div>
              <h2>
                What kind of
                <span> help do you need?</span>
              </h2>
            </div>

            <p>
              VictimLens is designed to help visitors identify an
              appropriate official pathway rather than trying to
              provide every service itself.
            </p>
          </div>

          <div className="support-filter">
            <button
              type="button"
              className={
                activeCategory === "all"
                  ? "active"
                  : ""
              }
              onClick={() =>
                handleCategoryChange("all")
              }
            >
              <span>00</span>
              All
            </button>

            {supportAreas.map((area) => (
              <button
                type="button"
                className={
                  activeCategory === area.id
                    ? "active"
                    : ""
                }
                key={area.id}
                onClick={() =>
                  handleCategoryChange(area.id)
                }
              >
                <span>{area.number}</span>
                {area.tag}
              </button>
            ))}
          </div>

          <div className="support-area-grid">
            {filteredAreas.map((area) => (
              <article
                className="support-area-card"
                key={area.id}
              >
                <div className="support-area-number">
                  {area.number}
                </div>

                <div className="support-area-content">
                  <span>{area.tag}</span>

                  <h3>{area.title}</h3>

                  <p>{area.description}</p>

                  <div className="support-links">
                    {area.links.map((link) => (
                      <a
                        href={link.href}
                        target={
                          isExternal(link.href)
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          isExternal(link.href)
                            ? "noreferrer"
                            : undefined
                        }
                        key={link.label}
                      >
                        {link.label}

                        <b>
                          {isExternal(link.href)
                            ? "↗"
                            : "→"}
                        </b>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          AFTER VICTIMIZATION
      ========================================= */}

      <section className="resources-response">
        <div className="resources-container">
          <div className="resources-label">
            <span></span>
            WHEN VICTIMIZATION OCCURS
          </div>

          <div className="response-grid">
            <div>
              <h2>
                There is no single
                <span> response for every situation.</span>
              </h2>

              <p>
                The appropriate next step depends on urgency,
                personal safety, the nature of the incident, and
                the kind of assistance required.
              </p>
            </div>

            <div className="response-steps">
              <article>
                <span>01</span>

                <div>
                  <strong>Prioritise Safety</strong>

                  <p>
                    Move toward a safer situation where possible
                    and seek emergency assistance when necessary.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <strong>Seek Appropriate Help</strong>

                  <p>
                    Consider emergency, medical, legal, social,
                    psychological, or specialised support.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <strong>Understand Your Rights</strong>

                  <p>
                    Information can help you understand available
                    protection, participation, assistance, and
                    remedy pathways.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>

                <div>
                  <strong>Use Official Channels</strong>

                  <p>
                    For formal reporting and legal or emergency
                    action, use the appropriate official authority.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CYBER
      ========================================= */}

      <section className="resource-feature cyber-feature">
        <div className="resource-feature-inner">
          <div className="resource-feature-icon">
            <ResourcesMark />
          </div>

          <div>
            <span>CYBER VICTIMIZATION</span>

            <h2>
              Act quickly.
              <br />
              Report through official channels.
            </h2>

            <p>
              India's National Cyber Crime Reporting Portal
              provides an official route for reporting cybercrime.
              The national cybercrime helpline is 1930, and
              immediate reporting is particularly relevant for
              cyber financial fraud.
            </p>

            <div className="feature-actions">
              <a
                href="tel:1930"
                className="resources-primary-btn"
              >
                CALL 1930
              </a>

              <a
                href="https://www.cybercrime.gov.in/"
                target="_blank"
                rel="noreferrer"
                className="resources-secondary-btn"
              >
                OPEN CYBERCRIME PORTAL ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          LEGAL AID
      ========================================= */}

      <section className="resource-feature legal-feature">
        <div className="resource-feature-inner">
          <div className="resource-feature-icon">
            <ResourcesMark />
          </div>

          <div>
            <span>LEGAL ASSISTANCE</span>

            <h2>
              Understand the
              <br />
              legal pathway.
            </h2>

            <p>
              NALSA provides free legal aid, advice, and assistance
              through India's legal-services system. Eligibility
              depends on the applicable rules and circumstances.
            </p>

            <div className="feature-actions">
              <a
                href="tel:15100"
                className="resources-primary-btn"
              >
                CALL 15100
              </a>

              <a
                href="https://nalsa.gov.in/promoting-inclusive-legal-system/"
                target="_blank"
                rel="noreferrer"
                className="resources-secondary-btn"
              >
                OPEN NALSA ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          OFFICIAL SOURCES
      ========================================= */}

      <section className="official-sources">
        <div className="resources-container">
          <div className="resources-label">
            <span></span>
            OFFICIAL SOURCES
          </div>

          <div className="resources-section-heading">
            <div>
              <h2>
                Go directly
                <span> to the source.</span>
              </h2>
            </div>

            <p>
              VictimLens explains support pathways, but official
              institutions should be used for actual reporting,
              emergency response, legal assistance, and government
              services.
            </p>
          </div>

          <div className="official-grid">
            <a
              href="https://www.mha.gov.in/en/commoncontent/emergency-response-support-system-erss"
              target="_blank"
              rel="noreferrer"
            >
              <span>EMERGENCY</span>
              <strong>Emergency Response Support System</strong>
              <p>Government information about ERSS and 112.</p>
              <b>OPEN SOURCE ↗</b>
            </a>

            <a
              href="https://wcd.gov.in/women/help"
              target="_blank"
              rel="noreferrer"
            >
              <span>WOMEN</span>
              <strong>Women Helpline</strong>
              <p>
                Official information about Women Helpline 181.
              </p>
              <b>OPEN SOURCE ↗</b>
            </a>

            <a
              href="https://wcd.gov.in/child/child-helpline"
              target="_blank"
              rel="noreferrer"
            >
              <span>CHILDREN</span>
              <strong>Child Helpline</strong>
              <p>
                Official information about Child Helpline 1098.
              </p>
              <b>OPEN SOURCE ↗</b>
            </a>

            <a
              href="https://nalsa.gov.in/promoting-inclusive-legal-system/"
              target="_blank"
              rel="noreferrer"
            >
              <span>LEGAL</span>
              <strong>NALSA Legal Services</strong>
              <p>
                Official information about free legal aid.
              </p>
              <b>OPEN SOURCE ↗</b>
            </a>

            <a
              href="https://www.cybercrime.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              <span>CYBERCRIME</span>
              <strong>National Cyber Crime Portal</strong>
              <p>
                Official online reporting system for cybercrime.
              </p>
              <b>OPEN SOURCE ↗</b>
            </a>

            <a
              href="https://www.india.gov.in/directory/helpline"
              target="_blank"
              rel="noreferrer"
            >
              <span>GOVERNMENT</span>
              <strong>National Helpline Directory</strong>
              <p>
                Government directory of helpline numbers and services.
              </p>
              <b>OPEN SOURCE ↗</b>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          IMPORTANT
      ========================================= */}

      <section className="resources-disclaimer">
        <div className="resources-disclaimer-inner">
          <ResourcesMark />

          <div>
            <span>IMPORTANT INFORMATION</span>

            <h2>
              VictimLens connects.
              <br />
              It does not replace services.
            </h2>

            <p>
              VictimLens provides general information about
              victimology, rights, safety, justice, and support
              pathways. It is not a replacement for emergency
              services, police, doctors, lawyers, counsellors,
              government agencies, or other qualified services.
            </p>

            <p>
              Laws, procedures, eligibility, and available services
              can vary by location and circumstances. Verify
              important information with the relevant official
              authority.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          CONTINUE
      ========================================= */}

      <section className="resources-next">
        <div className="resources-next-inner">
          <div>
            <span>CONTINUE WITH VICTIMLENS</span>

            <h2>
              Know your rights.
              <br />
              Understand your options.
            </h2>
          </div>

          <div className="resources-next-links">
            <Link to="/rights">
              Explore Victim Rights ↗
            </Link>

            <Link to="/law">
              Follow the Justice Pathway ↗
            </Link>

            <Link to="/prevention">
              Explore Prevention ↗
            </Link>

            <Link to="/cases">
              Enter Case Lab ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}