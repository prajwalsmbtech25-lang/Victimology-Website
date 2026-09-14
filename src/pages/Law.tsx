import { VictimLensGlobe } from "../components/ui/globe"

function Law() {
  const lawAreas = [
    {
      number: "01",
      title: "Access to Justice",
      description:
        "Laws and justice institutions should provide victims with meaningful access to reporting, investigation, legal processes, and appropriate remedies.",
    },
    {
      number: "02",
      title: "Protection & Safety",
      description:
        "Legal systems can provide measures designed to protect victims from intimidation, retaliation, and unnecessary further harm.",
    },
    {
      number: "03",
      title: "Information & Participation",
      description:
        "Victims may have rights to receive information about relevant proceedings and, where permitted by law, express their views and concerns.",
    },
    {
      number: "04",
      title: "Compensation & Assistance",
      description:
        "Depending on the applicable legal framework, victims may have access to compensation, financial assistance, legal aid, or other support services.",
    },
    {
      number: "05",
      title: "Privacy & Dignity",
      description:
        "Victim-sensitive justice recognises the importance of treating people with dignity and protecting personal information where appropriate.",
    },
    {
      number: "06",
      title: "Law & Social Change",
      description:
        "Changes in law and public policy can influence how societies prevent victimisation, respond to crime, and protect the rights of affected people.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero law-hero">

        <div className="subpage-hero-content">

          <span className="subpage-label">
            08 — LAW & SOCIETY
          </span>

          <h1>
            Law.
            <br />
            Society.
            <br />
            Justice.
          </h1>

          <p>
            Laws shape how societies respond to crime, protect victims,
            provide access to justice, and create systems of accountability
            and support.
          </p>

        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* LAW FRAMEWORK */}
      <section className="content-section law-content">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
              08 — Legal Framework
            </span>

            <h2>
              Where Law
              <br />
              Meets Justice.
            </h2>

            <p>
              Understanding the relationship between victims, law, and
              society helps explain how legal systems can respond to
              victimisation while balancing fairness, protection, and
              accountability.
            </p>

          </div>


          <div className="law-grid">

            {lawAreas.map((area) => (
              <article
                className="law-card"
                key={area.number}
              >

                <div className="law-number">
                  {area.number}
                </div>

                <div className="law-card-content">

                  <span className="card-tag">
                    Legal Perspective
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


      {/* SOCIETY SECTION */}
      <section className="law-society-section">

        <div className="law-society-inner">

          <div className="law-society-text">

            <span className="section-number">
              LAW & SOCIETY
            </span>

            <h2>
              Justice Is
              <br />
              More Than Law.
            </h2>

            <p>
              Effective justice depends not only on legislation but also on
              how institutions, communities, and individuals put those
              principles into practice. Victim-centred approaches can help
              make justice systems more accessible, respectful, and
              responsive.
            </p>

          </div>

          <div className="law-society-points">

            <div className="law-point">
              <span>01</span>
              <p>Fair and accessible justice processes</p>
            </div>

            <div className="law-point">
              <span>02</span>
              <p>Protection of victims and witnesses</p>
            </div>

            <div className="law-point">
              <span>03</span>
              <p>Clear communication and information</p>
            </div>

            <div className="law-point">
              <span>04</span>
              <p>Support beyond the courtroom</p>
            </div>

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section law-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Justice
            <br />
            Without Borders.
          </h2>

          <p>
            Countries have different laws and justice systems, but many
            victim-centred principles share common goals: dignity, safety,
            access to justice, information, participation, and appropriate
            support.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Law