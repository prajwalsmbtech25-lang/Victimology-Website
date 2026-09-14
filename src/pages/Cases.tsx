import { VictimLensGlobe } from "../components/ui/globe"

function Cases() {
  const caseAreas = [
    {
      number: "01",
      tag: "Case Study",
      title: "Understanding the Victim",
      description:
        "A victim-centred approach begins by understanding the circumstances, needs, rights, and experiences of the person affected.",
    },
    {
      number: "02",
      tag: "Case Study",
      title: "The Justice Process",
      description:
        "Police investigations, legal proceedings, and other justice processes can significantly shape a victim's experience after an incident.",
    },
    {
      number: "03",
      tag: "Case Study",
      title: "Secondary Victimisation",
      description:
        "Victims may face additional difficulties when institutions, procedures, or social responses create further distress or barriers to seeking justice.",
    },
    {
      number: "04",
      tag: "Case Study",
      title: "Community Response",
      description:
        "The response of families, communities, schools, workplaces, and support organisations can influence safety, recovery, and access to assistance.",
    },
    {
      number: "05",
      tag: "Case Study",
      title: "Prevention Lessons",
      description:
        "Examining cases can reveal patterns, vulnerabilities, and gaps in existing systems that may help inform future prevention strategies.",
    },
    {
      number: "06",
      tag: "Case Study",
      title: "Lessons for Justice",
      description:
        "Every case can provide insights into how justice institutions can improve protection, communication, accessibility, and victim support.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero cases-hero">

        <div className="subpage-hero-content">
          <span className="subpage-label">
            06 — CASES & ANALYSIS
          </span>

          <h1>
            Cases That
            <br />
            Teach Us.
          </h1>

          <p>
            Case analysis helps connect victimology theory with real-world
            justice systems, revealing how victimisation affects individuals,
            institutions, and communities.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* CASE ANALYSIS */}
      <section className="content-section cases-content">

        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
              06 — Case Analysis
            </span>

            <h2>
              From Cases
              <br />
              to Insight.
            </h2>

            <p>
              Studying cases allows us to examine what happened, how victims
              were affected, how institutions responded, and what lessons
              can be applied to improve justice and prevention.
            </p>
          </div>


          <div className="cases-grid">

            {caseAreas.map((item) => (
              <article className="case-card" key={item.number}>

                <div className="case-card-top">

                  <span className="case-number">
                    {item.number}
                  </span>

                  <span className="card-tag">
                    {item.tag}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                <div className="case-line" />

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section cases-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Every Case
            <br />
            Leaves a Lesson.
          </h2>

          <p>
            Comparing cases across different communities and justice systems
            can reveal common challenges as well as approaches that improve
            victim protection, participation, and support.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Cases