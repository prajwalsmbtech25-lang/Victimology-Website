import { Link } from "react-router-dom"
import { VictimLensGlobe } from "../components/ui/globe"

function About() {
  const platformAreas = [
    {
      number: "",
      title: "Understand Victimization",
      description:
        "Learn what victimology means, how victimization occurs, who may be affected, and why the experiences of victims matter in the study of justice.",
    },
    {
      number: "",
      title: "Know Victim Rights",
      description:
        "Explore important principles including dignity, fair treatment, access to justice, information, protection, participation, assistance, restitution, and compensation.",
    },
    {
      number: "",
      title: "Understand the Impact",
      description:
        "Examine the physical, psychological, emotional, social, economic, family, and community effects that may follow victimization.",
    },
    {
      number: "",
      title: "Find Help & Resources",
      description:
        "Access information about emergency services, legal aid, women and child support, cybercrime reporting, and other official support pathways.",
    },
  ]

  return (
    <main className="subpage">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="subpage-hero about-hero">

        <div className="subpage-hero-content">

          <span className="subpage-label">
        
          </span>

          <h1>
            Understanding
            <br />
            the Victim.
          </h1>

          <p>
            VictimLens is a victim-centred information platform that brings
            together victimology, rights, impact, prevention, justice,
            case analysis, and practical support resources.
          </p>

        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* =====================================================
          WHY VICTIMLENS EXISTS
      ===================================================== */}

      <section className="content-section about-content">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
               WHY VICTIMLENS EXISTS
            </span>

            <h2>
              Victims Should
              <br />
              Not Be Overlooked.
            </h2>

            <p>
              Discussions about crime often focus primarily on offences,
              offenders, investigations, and punishment. Victimology adds
              another essential perspective: understanding the people who
              experience harm and the systems that respond to them.
            </p>

            <p>
              VictimLens brings this perspective together in one place so
              visitors can understand victimization, recognise its impact,
              learn about victim rights, explore prevention, understand
              justice responses, and identify appropriate sources of help.
            </p>

          </div>


          <div className="about-grid">

            {platformAreas.map((area) => (

              <article
                className="about-card"
                key={area.number}
              >

                <span className="about-number">
                  {area.number}
                </span>

                <span className="card-tag">
                  VICTIMLENS
                </span>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT USERS GET
      ===================================================== */}

      <section className="content-section">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
             
            </span>

            <h2>
              One Platform.
              <br />
              Multiple Pathways.
            </h2>

            <p>
              VictimLens is organised around the questions a visitor may
              have when trying to understand victimization or find
              appropriate support.
            </p>

          </div>


          <div className="about-grid">

            <article className="about-card">

              <span className="about-number">
                
              </span>

              <span className="card-tag">
                UNDERSTAND
              </span>

              <h3>
                “What is victimology?”
              </h3>

              <p>
                Start with the meaning, scope, concepts, and purpose of
                victimology and understand how it differs from the study
                of crime and offenders alone.
              </p>

              <Link
                to="/victimology"
                className="resource-link"
              >
                <span>Explore Victimology</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>


            <article className="about-card">

              <span className="about-number">
                
              </span>

              <span className="card-tag">
                RIGHTS
              </span>

              <h3>
                “What are my rights?”
              </h3>

              <p>
                Explore principles relating to dignity, justice, information,
                protection, participation, assistance, restitution, and
                compensation.
              </p>

              <Link
                to="/rights"
                className="resource-link"
              >
                <span>Know Your Rights</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>


            <article className="about-card">

              <span className="about-number">
              
              </span>

              <span className="card-tag">
                SAFETY
              </span>

              <h3>
                “How can harm be prevented?”
              </h3>

              <p>
                Explore awareness, personal safety, early intervention,
                community support, and approaches that can reduce risk
                and further harm.
              </p>

              <Link
                to="/prevention"
                className="resource-link"
              >
                <span>Explore Prevention</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>


            <article className="about-card">

              <span className="about-number">
                
              </span>

              <span className="card-tag">
                SUPPORT
              </span>

              <h3>
                “Where can I get help?”
              </h3>

              <p>
                Find information about emergency services, legal aid,
                women and child support, cybercrime reporting, and
                official resource pathways.
              </p>

              <Link
                to="/resources"
                className="resource-link"
              >
                <span>Get Help & Resources</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          VICTIM-CENTRED APPROACH
      ===================================================== */}

      <section className="about-mission">

        <div className="about-mission-inner">

          <div className="about-mission-text">

            <span className="section-number">
               OUR APPROACH
            </span>

            <h2>
              Put the
              <br />
              Victim in Focus.
            </h2>

          </div>


          <div className="about-mission-copy">

            <p>
              A victim-centred approach recognises that people affected
              by victimization may have different needs, circumstances,
              vulnerabilities, and experiences.
            </p>

            <p>
              VictimLens therefore looks beyond the incident itself.
              It considers the impact on victims, their access to justice,
              their need for information and protection, available
              assistance, and the importance of preventing further harm.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT VICTIMLENS IS NOT
      ===================================================== */}

      <section className="content-section">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
               IMPORTANT TO KNOW
            </span>

            <h2>
              Information.
              <br />
              Not a Replacement for Help.
            </h2>

            <p>
              VictimLens is designed to provide accessible general
              information and direct visitors toward appropriate
              official resources. It does not replace emergency services,
              police authorities, medical professionals, lawyers,
              counsellors, or government agencies.
            </p>

          </div>


          <div className="about-grid">

            <article className="about-card">

              <span className="card-tag">
                EMERGENCY
              </span>

              <h3>
                Need immediate help?
              </h3>

              <p>
                If someone is in immediate danger in India, contact
                the national emergency service at 112.
              </p>

              <a
                href="tel:112"
                className="resource-link"
              >
                <span>CALL 112</span>
                <span className="resource-arrow">
                  →
                </span>
              </a>

            </article>


            <article className="about-card">

              <span className="card-tag">
                RESOURCES
              </span>

              <h3>
                Looking for support?
              </h3>

              <p>
                Use the Resources page to find official emergency,
                legal, cybercrime, women and child support pathways.
              </p>

              <Link
                to="/resources"
                className="resource-link"
              >
                <span>GET HELP</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>


            <article className="about-card">

              <span className="card-tag">
                INFORMATION
              </span>

              <h3>
                Need to understand your rights?
              </h3>

              <p>
                Explore the Victim Rights section for general information
                about important victim-centred justice principles.
              </p>

              <Link
                to="/rights"
                className="resource-link"
              >
                <span>VIEW RIGHTS</span>
                <span className="resource-arrow">
                  →
                </span>
              </Link>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-inner">

          <div className="contact-heading">

            <span className="section-number">
              CONTACT VICTIMLENS
            </span>

            <h2>
              Start a
              <br />
              Conversation.
            </h2>

            <p>
              Have a question, suggestion, or feedback about VictimLens?
              Send a message through the form.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={async (event) => {

              event.preventDefault()

              const form = event.currentTarget
              const formData = new FormData(form)

              try {

                const response = await fetch(
                  "https://formspree.io/f/mdeoqlea",
                  {
                    method: "POST",
                    body: formData,
                    headers: {
                      Accept: "application/json",
                    },
                  }
                )

                const message = form.querySelector(
                  ".contact-success"
                ) as HTMLElement | null

                if (response.ok) {

                  form.reset()

                  if (message) {
                    message.style.display = "block"
                  }

                } else {

                  if (message) {
                    message.textContent =
                      "Something went wrong. Please try again."
                    message.style.display = "block"
                  }

                }

              } catch {

                const message = form.querySelector(
                  ".contact-success"
                ) as HTMLElement | null

                if (message) {
                  message.textContent =
                    "Unable to send the message right now. Please try again."
                  message.style.display = "block"
                }

              }

            }}
          >

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
              />

            </div>


            <button
              type="submit"
              className="contact-submit"
            >
              Send Message →
            </button>


            <div
              className="contact-success"
              style={{ display: "none" }}
            >
              ✓ Thank you. Your message has been sent successfully.
            </div>

          </form>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="global-section about-global">

        <div className="global-text">

          <span className="section-number">
            VICTIMLENS
          </span>

          <h2>
            Understand.
            <br />
            Protect. Support.
          </h2>

          <p>
            VictimLens brings together the information a visitor needs
            to understand victimization, recognise its impact, learn
            about rights, explore prevention and justice, and find
            appropriate support resources.
          </p>

          <div className="home-btn-row">

            <Link
              to="/victimology"
              className="home-btn home-btn-gold"
            >
              START EXPLORING
              <span>→</span>
            </Link>

            <Link
              to="/resources"
              className="home-btn home-btn-outline"
            >
              GET HELP
              <span>→</span>
            </Link>

          </div>

        </div>


        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default About