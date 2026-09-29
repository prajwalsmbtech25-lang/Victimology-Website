import { useState } from "react"
import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"
import "./types.css"

type Experience = {
  id: string
  number: string
  label: string
  title: string
  shortTitle: string
  description: string
  perspective: string
  points: string[]
}

const experiences: Experience[] = [
  {
    id: "direct",
    number: "01",
    label: "DIRECTLY AFFECTED",
    title: "The person directly affected",
    shortTitle: "Direct",
    description:
      "The individual who directly experiences the harmful act and its immediate consequences.",
    perspective:
      "Victimology asks what happened to the person, what effects followed, what needs arose, and how institutions responded.",
    points: [
      "Physical or other immediate harm may occur.",
      "The effects can continue beyond the incident itself.",
      "Rights, protection, information and support may become important.",
    ],
  },
  {
    id: "family",
    number: "02",
    label: "FAMILY & DEPENDANTS",
    title: "People connected to the victim",
    shortTitle: "Connected",
    description:
      "Family members and dependants may experience consequences following another person's victimization.",
    perspective:
      "Victimology recognises that the effects of victimization can extend beyond the person directly affected.",
    points: [
      "Emotional and psychological effects may be experienced.",
      "Financial or practical difficulties may arise.",
      "Families may also need information and support.",
    ],
  },
  {
    id: "witness",
    number: "03",
    label: "WITNESSES & OTHERS",
    title: "People affected by what they see or experience",
    shortTitle: "Witnesses",
    description:
      "Witnesses and others connected to an incident may also experience fear, stress, disruption or other consequences.",
    perspective:
      "The broader impact of an event can matter even when a person was not the direct target of the harmful act.",
    points: [
      "Witnessing harm can affect a person's sense of safety.",
      "People may have concerns about reporting or participation.",
      "Appropriate support can help address the wider impact.",
    ],
  },
  {
    id: "community",
    number: "04",
    label: "COMMUNITY",
    title: "Wider social effects",
    shortTitle: "Community",
    description:
      "Certain forms of crime can affect communities through fear, insecurity, loss of trust or disruption.",
    perspective:
      "Victimology can look beyond individuals to understand wider social consequences.",
    points: [
      "Fear may influence how people use shared spaces.",
      "Trust in institutions or communities may be affected.",
      "Community-level prevention and support can become important.",
    ],
  },
  {
    id: "vulnerability",
    number: "05",
    label: "VULNERABILITY",
    title: "Different circumstances, different needs",
    shortTitle: "Vulnerability",
    description:
      "Age, disability, dependency, social circumstances and other conditions may affect exposure to harm or the ability to access support.",
    perspective:
      "Vulnerability should be understood as a circumstance affecting risk or response, not as blame for victimization.",
    points: [
      "Children may have different protection and support needs.",
      "Older persons or persons with disabilities may face access barriers.",
      "Dependence on others can affect reporting and recovery.",
    ],
  },
  {
    id: "repeat",
    number: "06",
    label: "REPEAT VICTIMIZATION",
    title: "When harm happens more than once",
    shortTitle: "Repeat",
    description:
      "Some people or situations may experience repeated victimization, making prevention and protection especially important.",
    perspective:
      "Victimology can examine patterns that place people or environments at risk of repeated harm.",
    points: [
      "Patterns may become visible across multiple incidents.",
      "Protection and early intervention can be important.",
      "Prevention can address individual, institutional and environmental factors.",
    ],
  },
]

function TypesMark() {
  return (
    <div className="types-mark" aria-hidden="true">
      <svg viewBox="0 0 100 100">

        <circle
          cx="50"
          cy="50"
          r="42"
          className="types-mark-ring"
        />

        <circle
          cx="50"
          cy="50"
          r="12"
          className="types-mark-center"
        />

        <circle
          cx="27"
          cy="28"
          r="7"
          className="types-mark-node"
        />

        <circle
          cx="73"
          cy="28"
          r="7"
          className="types-mark-node"
        />

        <circle
          cx="25"
          cy="72"
          r="7"
          className="types-mark-node"
        />

        <circle
          cx="75"
          cy="72"
          r="7"
          className="types-mark-node"
        />

        <path
          d="M32 31 L42 42 M68 31 L58 42 M32 69 L42 58 M68 69 L58 58"
          className="types-mark-line"
        />

      </svg>
    </div>
  )
}

function Types() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>(experiences[0])

  return (
    <main className="types-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="types-hero">

        <div className="types-hero-content">

          <div className="types-identity">

            <TypesMark />

            <div>
              <span>VICTIMLENS</span>
              <small>VICTIM EXPERIENCES / INTERACTIVE MAP</small>
            </div>

          </div>


          <div className="types-eyebrow">
            <span />
            VICTIM EXPERIENCES
          </div>


          <h1>
            Who can be
            <br />
            <span>affected?</span>
          </h1>


          <p>
            Victimization does not always affect only the person
            directly targeted. Explore the different ways people,
            families, witnesses and communities may be affected.
          </p>


          <div className="types-actions">

            <a
              href="#experience-map"
              className="types-btn types-btn-gold"
            >
              Explore the Map
              <span>↓</span>
            </a>

            <Link
              to="/impact"
              className="types-btn types-btn-outline"
            >
              Explore Impact
              <span>→</span>
            </Link>

          </div>

        </div>


        <div className="types-hero-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* =====================================================
          EXPERIENCE MAP
          ===================================================== */}

      <section
        id="experience-map"
        className="types-section types-map-section"
      >

        <div className="types-container">

          <div className="types-section-intro">

            <div className="types-section-label">
               EXPERIENCE MAP
            </div>

            <h2>
              One incident.
              <br />
              <span>Different experiences.</span>
            </h2>

            <p>
              Select an area of the map to understand who may
              be affected and why that perspective matters
              in victimology.
            </p>

          </div>


          <div className="types-map-layout">

            {/* ================= MAP ================= */}

            <div className="types-map">

              <div className="types-map-orbit orbit-a" />
              <div className="types-map-orbit orbit-b" />
              <div className="types-map-orbit orbit-c" />


              {/* CONNECTING LINES */}

              <div className="types-map-line line-1" />
              <div className="types-map-line line-2" />
              <div className="types-map-line line-3" />
              <div className="types-map-line line-4" />
              <div className="types-map-line line-5" />
              <div className="types-map-line line-6" />


              {/* CENTER */}

              <button
                type="button"
                className="types-map-center"
                onClick={() =>
                  setSelectedExperience(experiences[0])
                }
              >

                <TypesMark />

                <strong>
                  VICTIM
                </strong>

                <span>
                  AT THE CENTRE
                </span>

              </button>


              {/* DIRECT */}

              <button
                type="button"
                className={`types-map-node node-direct ${
                  selectedExperience.id === "direct"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[0])
                }
              >
                <span>01</span>
                <strong>DIRECT</strong>
              </button>


              {/* FAMILY */}

              <button
                type="button"
                className={`types-map-node node-family ${
                  selectedExperience.id === "family"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[1])
                }
              >
                <span>02</span>
                <strong>FAMILY</strong>
              </button>


              {/* WITNESS */}

              <button
                type="button"
                className={`types-map-node node-witness ${
                  selectedExperience.id === "witness"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[2])
                }
              >
                <span>03</span>
                <strong>WITNESS</strong>
              </button>


              {/* COMMUNITY */}

              <button
                type="button"
                className={`types-map-node node-community ${
                  selectedExperience.id === "community"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[3])
                }
              >
                <span>04</span>
                <strong>COMMUNITY</strong>
              </button>


              {/* VULNERABILITY */}

              <button
                type="button"
                className={`types-map-node node-vulnerability ${
                  selectedExperience.id === "vulnerability"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[4])
                }
              >
                <span>05</span>
                <strong>VULNERABILITY</strong>
              </button>


              {/* REPEAT */}

              <button
                type="button"
                className={`types-map-node node-repeat ${
                  selectedExperience.id === "repeat"
                    ? "is-active"
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(experiences[5])
                }
              >
                <span>06</span>
                <strong>REPEAT</strong>
              </button>

            </div>


            {/* ================= DETAIL PANEL ================= */}

            <div className="types-detail">

              <div className="types-detail-top">

                <span>
                  {selectedExperience.number}
                </span>

                <small>
                  {selectedExperience.label}
                </small>

              </div>


              <div className="types-detail-icon">
                ◉
              </div>


              <h3>
                {selectedExperience.title}
              </h3>


              <p className="types-detail-description">
                {selectedExperience.description}
              </p>


              <div className="types-detail-perspective">

                <span>
                  VICTIMOLOGY LENS
                </span>

                <p>
                  {selectedExperience.perspective}
                </p>

              </div>


              <div className="types-detail-points">

                {selectedExperience.points.map(
                  (point, index) => (

                    <div
                      className="types-detail-point"
                      key={point}
                    >

                      <span>
                        0{index + 1}
                      </span>

                      <p>
                        {point}
                      </p>

                    </div>

                  ),
                )}

              </div>

            </div>

          </div>


          <p className="types-map-note">
            The categories shown here describe different
            perspectives on victimization and are not presented
            as one universal fixed classification.
          </p>

        </div>

      </section>


      {/* =====================================================
          IMPORTANT DISTINCTION
          ===================================================== */}

      <section className="types-section">

        <div className="types-container">

          <div className="types-split">

            <div>

              <div className="types-section-label">
                 AN IMPORTANT DISTINCTION
              </div>

              <h2>
                A label should not
                <br />
                <span>define the person.</span>
              </h2>

            </div>


            <div>

              <p className="types-lead">
                Victim experiences are complex. A person may
                have more than one role or need, and the effects
                of victimization can extend across family,
                community and institutional settings.
              </p>

              <p className="types-secondary-copy">
                Victimology therefore looks at the circumstances,
                effects and needs involved rather than reducing
                people to a single category.
              </p>

            </div>

          </div>


          <div className="types-distinction-grid">

            <article className="types-distinction-card">

              <span>DIRECT IMPACT</span>

              <h3>
                Who experienced the harmful act?
              </h3>

              <p>
                Start with the person directly affected
                and the immediate consequences.
              </p>

            </article>


            <article className="types-distinction-card">

              <span>WIDER IMPACT</span>

              <h3>
                Who else was affected?
              </h3>

              <p>
                Consider family, dependants, witnesses
                and communities.
              </p>

            </article>


            <article className="types-distinction-card">

              <span>NEEDS</span>

              <h3>
                What does each person need?
              </h3>

              <p>
                Different circumstances may require
                different forms of information, protection
                and support.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          VULNERABILITY
          ===================================================== */}

      <section className="types-section types-dark-section">

        <div className="types-container">

          <div className="types-section-intro">

            <div className="types-section-label">
               VULNERABILITY
            </div>

            <h2>
              Different circumstances
              <br />
              <span>can mean different needs.</span>
            </h2>

            <p>
              Vulnerability is about circumstances that may affect
              exposure to harm, access to services or recovery.
              It should never be treated as blame for victimization.
            </p>

          </div>


          <div className="types-vulnerability-grid">

            <article className="types-vulnerability-card">

              <div className="types-vulnerability-icon">
                ◇
              </div>

              <span>
                CHILDREN
              </span>

              <h3>
                Additional protection needs
              </h3>

              <p>
                Children may require age-appropriate protection,
                communication, care and support.
              </p>

            </article>


            <article className="types-vulnerability-card">

              <div className="types-vulnerability-icon">
                ○
              </div>

              <span>
                OLDER PERSONS
              </span>

              <h3>
                Access and support considerations
              </h3>

              <p>
                Physical, social or dependency-related circumstances
                may affect how support can be accessed.
              </p>

            </article>


            <article className="types-vulnerability-card">

              <div className="types-vulnerability-icon">
                ⊙
              </div>

              <span>
                PERSONS WITH DISABILITIES
              </span>

              <h3>
                Accessible support matters
              </h3>

              <p>
                Communication and accessibility barriers may affect
                access to reporting, justice and support services.
              </p>

            </article>


            <article className="types-vulnerability-card">

              <div className="types-vulnerability-icon">
                ◌
              </div>

              <span>
                DEPENDENCY
              </span>

              <h3>
                Relationships can affect response
              </h3>

              <p>
                Dependence on another person for care, housing,
                finances or daily life can affect the victim's options.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          REPEAT VICTIMIZATION
          ===================================================== */}

      <section className="types-section">

        <div className="types-container">

          <div className="types-repeat-layout">

            <div>

              <div className="types-section-label">
                REPEAT VICTIMIZATION
              </div>

              <h2>
                When the
                <br />
                <span>pattern repeats.</span>
              </h2>

              <p className="types-lead">
                Some people, places or situations may experience
                repeated victimization. Identifying patterns can
                help inform prevention and protection.
              </p>

            </div>


            <div className="types-repeat-steps">

              <div className="types-repeat-step">

                <span>01</span>

                <div>
                  <strong>
                    IDENTIFY
                  </strong>

                  <p>
                    Notice repeated incidents or recurring
                    circumstances.
                  </p>
                </div>

              </div>


              <div className="types-repeat-step">

                <span>02</span>

                <div>
                  <strong>
                    PROTECT
                  </strong>

                  <p>
                    Consider protection and appropriate
                    support when risk persists.
                  </p>
                </div>

              </div>


              <div className="types-repeat-step">

                <span>03</span>

                <div>
                  <strong>
                    PREVENT
                  </strong>

                  <p>
                    Address environmental, institutional and
                    situational factors where possible.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VICTIMOLOGY IN PRACTICE
          ===================================================== */}

      <section className="types-focus-section">

        <div className="types-container">

          <div className="types-focus-content">

            <TypesMark />

            <div className="types-section-label">
              WHY THIS MATTERS
            </div>

            <h2>
              Every victim
              <br />
              <span>has different needs.</span>
            </h2>

            <p>
              Understanding different experiences helps move
              victimology beyond simple labels. The important
              questions are who was affected, what happened,
              what impact followed, and what support or protection
              may be relevant.
            </p>


            <div className="types-focus-actions">

              <Link
                to="/rights"
                className="types-btn types-btn-gold"
              >
                Explore Victim Rights
                <span>→</span>
              </Link>

              <Link
                to="/impact"
                className="types-btn types-btn-outline"
              >
                Explore Victim Impact
                <span>→</span>
              </Link>

            </div>

          </div>


          <div className="types-focus-globe">
            <VictimLensGlobe />
          </div>

        </div>

      </section>


      {/* =====================================================
          NEXT
          ===================================================== */}

      <section className="types-section types-next-section">

        <div className="types-container">

          <div className="types-section-intro">

            <div className="types-section-label">
              CONTINUE WITH VICTIMLENS
            </div>

            <h2>
              What do you want
              <br />
              <span>to explore next?</span>
            </h2>

          </div>


          <div className="types-next-grid">

            <Link
              to="/rights"
              className="types-next-card"
            >
              <span>01</span>

              <div>
                <h3>
                  Victim Rights
                </h3>

                <p>
                  Explore dignity, information, protection,
                  justice, assistance and remedies.
                </p>
              </div>

              <strong>
                →
              </strong>

            </Link>


            <Link
              to="/impact"
              className="types-next-card"
            >
              <span>02</span>

              <div>
                <h3>
                  Impact of Victimization
                </h3>

                <p>
                  Explore physical, psychological, social
                  and economic effects.
                </p>
              </div>

              <strong>
                →
              </strong>

            </Link>


            <Link
              to="/prevention"
              className="types-next-card"
            >
              <span>03</span>

              <div>
                <h3>
                  Safety & Prevention
                </h3>

                <p>
                  Explore awareness, prevention and early
                  intervention.
                </p>
              </div>

              <strong>
                →
              </strong>

            </Link>


            <Link
              to="/resources"
              className="types-next-card"
            >
              <span>04</span>

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

export default Types