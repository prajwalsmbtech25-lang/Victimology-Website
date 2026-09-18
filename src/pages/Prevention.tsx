import { VictimLensGlobe } from "../components/ui/globe"

function Prevention() {
  const preventionAreas = [
    {
      number: "01",
      title: "Awareness & Education",
      description:
        "Education about risks, rights, warning signs, and available support can help individuals and communities make informed decisions and reduce vulnerability.",
    },
    {
      number: "02",
      title: "Community Safety",
      description:
        "Strong communities can improve safety through cooperation, awareness, responsible reporting, and support for people who may be at greater risk.",
    },
    {
      number: "03",
      title: "Early Intervention",
      description:
        "Identifying concerns early and connecting people with appropriate support can help prevent situations from becoming more harmful.",
    },
    {
      number: "04",
      title: "Institutional Protection",
      description:
        "Schools, workplaces, healthcare organisations, and public institutions can establish policies and systems that protect people and respond to concerns appropriately.",
    },
    {
      number: "05",
      title: "Accessible Support",
      description:
        "Clear access to legal, social, emotional, and practical support helps victims seek assistance and reduces barriers to reporting and recovery.",
    },
    {
      number: "06",
      title: "Effective Justice",
      description:
        "Fair, accessible, and victim-sensitive justice processes can strengthen public trust and contribute to safer communities.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero prevention-hero">

        <div className="subpage-hero-content">
          <span className="subpage-label">
         
          </span>

          <h1>
            Prevention
            <br />
            Starts Early.
          </h1>

          <p>
            Effective prevention combines awareness, community action,
            institutional responsibility, accessible support, and
            evidence-based approaches to reducing victimisation.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* PREVENTION AREAS */}
      <section className="content-section prevention-content">

        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
              Prevention Framework
            </span>

            <h2>
              Building
              <br />
              Safer Systems.
            </h2>

            <p>
              Prevention is not the responsibility of one person or one
              institution. It works best when individuals, communities,
              organisations, and justice systems work together.
            </p>
          </div>


          <div className="prevention-grid">

            {preventionAreas.map((area) => (
              <article
                className="prevention-card"
                key={area.number}
              >

                <div className="prevention-number">
                  {area.number}
                </div>

                <div>

                  <span className="card-tag">
                    Prevention Area
                  </span>

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section prevention-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Prevention
            <br />
            Without Borders.
          </h2>

          <p>
            Safer communities depend on cooperation between people,
            institutions, researchers, and justice systems. Sharing
            knowledge and effective practices can strengthen prevention
            across different societies.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Prevention