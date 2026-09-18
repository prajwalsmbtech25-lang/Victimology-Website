import { VictimLensGlobe } from "../components/ui/globe"

function Rights() {
  const rights = [
    {
      number: "01",
      title: "Right to Justice",
      description:
        "Victims should have access to justice and appropriate mechanisms for seeking accountability and resolution.",
    },
    {
      number: "02",
      title: "Right to Protection",
      description:
        "Victims should be protected from intimidation, retaliation, and unnecessary further harm during the justice process.",
    },
    {
      number: "03",
      title: "Right to Information",
      description:
        "Victims should receive clear information about their rights, available services, and relevant stages of the justice process.",
    },
    {
      number: "04",
      title: "Right to Compensation",
      description:
        "Victims may be entitled to financial assistance or compensation for losses and harm, depending on applicable laws and schemes.",
    },
    {
      number: "05",
      title: "Right to Support",
      description:
        "Victims should be able to access appropriate emotional, social, legal, and practical support services.",
    },
    {
      number: "06",
      title: "Right to Be Heard",
      description:
        "Victims should have meaningful opportunities to express their views and concerns where the justice process allows.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero rights-hero">

        <div className="subpage-hero-content">
          <span className="subpage-label">
            
          </span>

          <h1>
            Rights That
            <br />
            Matter.
          </h1>

          <p>
            Understanding victim rights helps people navigate justice,
            access protection and support, and participate meaningfully
            in the systems designed to serve them.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* RIGHTS */}
      <section className="content-section rights-content">

        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
             Fundamental Rights
            </span>

            <h2>
              Know Your
              <br />
              Rights.
            </h2>

            <p>
              Victim rights provide a framework for dignity, protection,
              participation, information, and access to support throughout
              the justice process.
            </p>
          </div>


          <div className="rights-grid">

            {rights.map((right) => (
              <article className="right-card" key={right.number}>

                <div className="right-number">
                  {right.number}
                </div>

                <div className="right-content">

                  <span className="card-tag">
                    Victim Right
                  </span>

                  <h3>
                    {right.title}
                  </h3>

                  <p>
                    {right.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section rights-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Rights Should
            <br />
            Cross Borders.
          </h2>

          <p>
            The recognition of victims' rights has become an important part
            of justice systems around the world. International principles
            encourage dignity, access to justice, protection, information,
            and appropriate support for victims.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Rights