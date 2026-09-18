import { VictimLensGlobe } from "../components/ui/globe"

function About() {
  const platformAreas = [
    {
      number: "01",
      title: "Understand",
      description:
        "Explore the foundations of victimology and understand how victimisation can affect individuals, families, communities, and institutions.",
    },
    {
      number: "02",
      title: "Know Your Rights",
      description:
        "Learn about important principles surrounding protection, information, participation, support, and access to justice.",
    },
    {
      number: "03",
      title: "Explore",
      description:
        "Examine different types of victims, the wider impact of victimisation, prevention approaches, and case-based insights.",
    },
    {
      number: "04",
      title: "Find Resources",
      description:
        "Discover pathways to relevant legal, government, research, emergency, and support resources.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero about-hero">

        <div className="subpage-hero-content">

          <span className="subpage-label">
        
          </span>

          <h1>
            See the
            <br />
            Bigger Picture.
          </h1>

          <p>
            VictimLens brings victimology, victim rights, justice,
            prevention, and support information together in one accessible
            platform.
          </p>

        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* ABOUT */}
      <section className="content-section about-content">

        <div className="content-container">

          <div className="section-heading">

            <span className="section-number">
               THE PLATFORM
            </span>

            <h2>
              A Victim-Centred
              <br />
              Perspective.
            </h2>

            <p>
              VictimLens is designed to make important victimology and
              justice concepts easier to understand and explore. The
              platform connects academic knowledge with practical
              information about victims, their rights, justice systems,
              prevention, and available resources.
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
                  VictimLens
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


      {/* MISSION */}
      <section className="about-mission">

        <div className="about-mission-inner">

          <div className="about-mission-text">

            <span className="section-number">
              OUR APPROACH
            </span>

            <h2>
              Putting the
              <br />
              Victim in Focus.
            </h2>

          </div>

          <div className="about-mission-copy">

            <p>
              Understanding crime requires more than studying offenders.
              It also requires understanding the people and communities
              affected by victimisation.
            </p>

            <p>
              VictimLens focuses on that perspective — connecting
              victimology, rights, impact, prevention, law, cases, and
              resources to create a clearer picture of victim-centred
              justice.
            </p>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <div className="contact-inner">

          <div className="contact-heading">

            <span className="section-number">
              CONTACT
            </span>

            <h2>
              Start a
              <br />
              Conversation.
            </h2>

            <p>
              Have a question, suggestion, or idea related to VictimLens?
              Send a message using the form.
            </p>

          </div>



<form
  className="contact-form"
  onSubmit={async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://formspree.io/f/mdeoqlea", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      form.reset()

      const message = form.querySelector(
        ".contact-success"
      ) as HTMLElement | null

      if (message) {
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


      {/* GLOBAL */}
      <section className="global-section about-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Understanding
            <br />
            Has No Borders.
          </h2>

          <p>
            Victimology is relevant across societies and justice systems.
            VictimLens encourages a wider perspective on how communities
            understand victimisation, protection, justice, and prevention.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default About