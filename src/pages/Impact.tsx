import { VictimLensGlobe } from "../components/ui/globe"

function Impact() {
  const impacts = [
    {
      number: "01",
      title: "Psychological Impact",
      description:
        "Victimisation can affect emotional wellbeing, confidence, relationships, and a person's sense of safety.",
    },
    {
      number: "02",
      title: "Social Impact",
      description:
        "Crime can change relationships, participation in communities, education, employment, and everyday social life.",
    },
    {
      number: "03",
      title: "Economic Impact",
      description:
        "Victims may experience financial losses, medical expenses, disruption to work, or other costs following victimisation.",
    },
    {
      number: "04",
      title: "Physical Impact",
      description:
        "Some forms of victimisation can result in physical harm, injury, disability, or the need for ongoing care and recovery.",
    },
    {
      number: "05",
      title: "Community Impact",
      description:
        "Crime can create fear, reduce trust, and influence how communities perceive safety and public institutions.",
    },
    {
      number: "06",
      title: "Justice-System Impact",
      description:
        "Victims may experience additional stress when navigating reporting procedures, investigations, courts, and other justice processes.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero impact-hero">

        <div className="subpage-hero-content">
          <span className="subpage-label">
         
          </span>

          <h1>
            The Impact
            <br />
            Runs Deep.
          </h1>

          <p>
            Victimisation can affect far more than the moment an incident
            occurs. Its effects may extend across psychological, social,
            physical, economic, and community life.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* IMPACT GRID */}
      <section className="content-section impact-content">

        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
              Understanding Impact
            </span>

            <h2>
              Beyond the
              <br />
              Incident.
            </h2>

            <p>
              Understanding the wider effects of victimisation helps justice
              institutions, communities, and support systems respond to the
              needs of victims more effectively.
            </p>
          </div>


          <div className="impact-grid">

            {impacts.map((impact) => (
              <article className="impact-card" key={impact.number}>

                <div className="impact-number">
                  {impact.number}
                </div>

                <div>
                  <span className="card-tag">
                    Area of Impact
                  </span>

                  <h3>
                    {impact.title}
                  </h3>

                  <p>
                    {impact.description}
                  </p>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section impact-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            One Incident.
            <br />
            Wider Effects.
          </h2>

          <p>
            The consequences of victimisation can extend beyond individuals
            and influence families, workplaces, institutions, and entire
            communities. A wider perspective helps create more effective
            prevention and support systems.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Impact