import { VictimLensGlobe } from "../components/ui/globe"

function Resources() {
  const resources = [
    {
      number: "01",
      category: "Emergency Support",
      title: "Immediate Help",
      description:
        "When someone is facing an immediate threat or emergency, contacting the appropriate emergency service can provide urgent assistance and protection.",
      link: "Emergency Services",
    },
    {
      number: "02",
      category: "Legal Support",
      title: "Access to Justice",
      description:
        "Legal support can help victims understand their rights, available remedies, reporting procedures, and the justice processes relevant to their situation.",
      link: "Legal Resources",
    },
    {
      number: "03",
      category: "Government Services",
      title: "Official Support Systems",
      description:
        "Government departments and justice institutions provide information, services, and assistance designed to help people affected by crime and victimisation.",
      link: "Government Resources",
    },
    {
      number: "04",
      category: "Cyber Safety",
      title: "Online Crime Support",
      description:
        "Digital victimisation can require specialised reporting and support. Official cybercrime reporting systems can help people understand where and how to report incidents.",
      link: "Cybercrime Resources",
    },
    {
      number: "05",
      category: "Research",
      title: "Knowledge & Evidence",
      description:
        "Academic research, victimology studies, and justice reports help researchers and students understand patterns of victimisation and develop evidence-based responses.",
      link: "Research Resources",
    },
    {
      number: "06",
      category: "Support Networks",
      title: "Community Assistance",
      description:
        "Community organisations and support services can provide practical, emotional, social, and legal assistance depending on the needs of the individual.",
      link: "Support Organisations",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero resources-hero">

        <div className="subpage-hero-content">

          <span className="subpage-label">
            07 — RESOURCES
          </span>

          <h1>
            Knowledge.
            <br />
            Support.
          </h1>

          <p>
            A carefully organised collection of support, legal, government,
            research, and community resources to help people understand
            victimisation and find appropriate assistance.
          </p>

        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* RESOURCE GRID */}
      <section className="content-section resources-content">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
              07 — Resource Directory
            </span>

            <h2>
              Find the Right
              <br />
              Information.
            </h2>

            <p>
              Resources can help people understand their rights, locate
              appropriate support, report incidents, and explore reliable
              information about victimology and justice.
            </p>

          </div>


          <div className="resources-grid">

            {resources.map((resource) => (
              <article
                className="resource-card"
                key={resource.number}
              >

                <div className="resource-card-top">

                  <span className="resource-number">
                    {resource.number}
                  </span>

                  <span className="card-tag">
                    {resource.category}
                  </span>

                </div>

                <h3>
                  {resource.title}
                </h3>

                <p>
                  {resource.description}
                </p>

                <div className="resource-link">
                  <span>{resource.link}</span>
                  <span className="resource-arrow">→</span>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* IMPORTANT NOTICE */}
      <section className="resource-notice">

        <div className="resource-notice-inner">

          <span className="section-number">
            IMPORTANT
          </span>

          <h2>
            Use Official
            <br />
            Sources.
          </h2>

          <p>
            VictimLens is designed to help users understand victimology and
            locate relevant information. For emergencies, legal decisions,
            reporting, or immediate assistance, users should rely on
            appropriate official authorities and qualified professionals.
          </p>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section resources-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Knowledge
            <br />
            Connects People.
          </h2>

          <p>
            Access to reliable information and support is an important part
            of victim-centred justice. Sharing knowledge across communities
            can help strengthen awareness, protection, and access to support.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Resources