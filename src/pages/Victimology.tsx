import { VictimLensGlobe } from "../components/ui/globe"

function Victimology() {
  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero">
        <div className="subpage-hero-content">
          <span className="subpage-label">
            01 — VICTIMOLOGY
          </span>

          <h1>
            Understanding
            <br />
            Victimology.
          </h1>

          <p>
            The scientific study of victims, victimisation, their experiences
            within the justice system, and the systems created to protect and
            support them.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>
      </section>


      {/* WHAT IS VICTIMOLOGY */}
      <section className="content-section">
        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
              01 — Definition
            </span>

            <h2>What is Victimology?</h2>

            <p>
              Victimology is the scientific study of the relationship between
              victims and the criminal justice system, including victims'
              experiences, their interactions with police and courts, and the
              psychological, social, and financial effects of victimisation.
            </p>
          </div>


          {/* THREE CARDS */}
          <div className="info-grid">

            <article className="info-card">
              <span className="card-tag">Origin</span>

              <h3>A field born from omission</h3>

              <p>
                Early criminology focused almost entirely on offenders. From
                the 1940s–1970s, scholars such as Hans von Hentig and Benjamin
                Mendelsohn argued that understanding crime required
                understanding the victim's role, vulnerability, and recovery —
                giving rise to victimology as its own discipline.
              </p>
            </article>


            <article className="info-card">
              <span className="card-tag">Scope</span>

              <h3>More than a courtroom seat</h3>

              <p>
                Victimology studies patterns of victimisation, the trauma that
                follows harm, how institutions treat victims, and what
                protections, information, and support systems reduce further
                harm — sometimes called "secondary victimisation."
              </p>
            </article>


            <article className="info-card">
              <span className="card-tag">Why it matters</span>

              <h3>Justice needs both sides</h3>

              <p>
                A justice system that only prosecutes offenders but ignores
                victims' needs is incomplete. Victimology gives policymakers,
                police, and courts the evidence base to build systems that
                protect, inform, and support the people crime affects most
                directly.
              </p>
            </article>

          </div>


          {/* STATISTICS */}
          <div className="stat-grid">

            <div className="stat-card">
              <strong>1940s</strong>
              <span>Field begins to take shape academically</span>
            </div>

            <div className="stat-card">
              <strong>1985</strong>
              <span>
                UN Declaration of Basic Principles of Justice for Victims
              </span>
            </div>

            <div className="stat-card">
              <strong>4</strong>
              <span>Broad categories of victims studied</span>
            </div>

            <div className="stat-card">
              <strong>5</strong>
              <span>
                Core rights victims are widely recognised to hold
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* GLOBE SECTION */}
      <section className="global-section">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Victimology
            <br />
            Without Borders.
          </h2>

          <p>
            Victimisation and justice systems exist across every society.
            Understanding victims therefore requires a global perspective,
            connecting research, justice institutions, support systems and
            communities.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Victimology