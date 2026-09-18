import { Link } from "react-router-dom"
import HorizonHero from "../components/ui/horizon-hero-section"
import "./home.css"

const stats = [
  {
    number: "1940s",
    label: "Academic Origin",
  },
  {
    number: "1985",
    label: "UN Declaration",
  },
  {
    number: "4",
    label: "Core Typologies",
  },
  {
    number: "6",
    label: "Fundamental Rights",
  },
]

const exploreCards = [
  {
    number: "01",
    title: "Victimology",
    text: "Understand victims, victimization, and the role of victimology in modern justice systems.",
    link: "/victimology",
  },
  {
    number: "02",
    title: "Victim Rights",
    text: "Explore legal protections, participation, support, compensation, and access to justice.",
    link: "/rights",
  },
  {
    number: "03",
    title: "Crime Impact",
    text: "Discover the psychological, social, emotional, and economic effects of victimization.",
    link: "/impact",
  },
  {
    number: "04",
    title: "Prevention",
    text: "Learn how awareness, intervention, and community action can reduce victimization.",
    link: "/prevention",
  },
]

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO (3D scroll hero) ================= */}

      <HorizonHero stats={stats} />


      {/* ================= WHY VICTIMLENS ================= */}

      <section className="home-section home-why">

        <div className="home-container">

          <div className="home-section-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>WHY VICTIMLENS?</span>
            </div>

            <h2>
              Understanding is the
              <br />
              <span>first step toward justice.</span>
            </h2>

            <p>
              VictimLens brings victimology, victim rights,
              crime impact, prevention, and justice together
              in one accessible platform.
            </p>

          </div>


          <div className="home-why-grid">

            <div className="home-why-card">
              <div className="home-card-number">01</div>
              <div className="home-card-icon">◈</div>

              <h3>Understand</h3>

              <p>
                Learn what victimology is and understand the
                experiences, challenges, and needs of victims.
              </p>

              <Link to="/victimology">
                Learn More <span>→</span>
              </Link>
            </div>


            <div className="home-why-card">
              <div className="home-card-number">02</div>
              <div className="home-card-icon">◇</div>

              <h3>Know Your Rights</h3>

              <p>
                Discover important rights, protections,
                support systems, and pathways toward justice.
              </p>

              <Link to="/rights">
                Learn More <span>→</span>
              </Link>
            </div>


            <div className="home-why-card">
              <div className="home-card-number">03</div>
              <div className="home-card-icon">△</div>

              <h3>Prevent Harm</h3>

              <p>
                Explore awareness, prevention strategies,
                early intervention, and community responsibility.
              </p>

              <Link to="/prevention">
                Learn More <span>→</span>
              </Link>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EXPLORE ================= */}

      <section className="home-section home-explore">

        <div className="home-container">

          <div className="home-explore-heading">

            <div>

              <div className="home-eyebrow">
                <span className="home-eyebrow-line" />
                <span>EXPLORE THE PLATFORM</span>
              </div>

              <h2>
                One platform.
                <br />
                <span>Multiple perspectives.</span>
              </h2>

            </div>

            <p>
              Navigate VictimLens through four connected
              areas covering victimology, rights, impact,
              and prevention.
            </p>

          </div>


          <div className="home-explore-grid">

            {exploreCards.map((card) => (

              <Link
                to={card.link}
                className="home-explore-card"
                key={card.number}
              >

                <div className="home-explore-number">
                  {card.number}
                </div>

                <div className="home-explore-content">

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>

                  <span className="home-explore-link">
                    Explore <span>↗</span>
                  </span>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* ================= JOURNEY ================= */}

      <section className="home-section home-journey">

        <div className="home-container">

          <div className="home-journey-heading">

            <div className="home-eyebrow">
              <span className="home-eyebrow-line" />
              <span>FROM AWARENESS TO JUSTICE</span>
            </div>

            <h2>
              Knowledge can become
              <br />
              <span>action.</span>
            </h2>

            <p>
              VictimLens connects awareness, rights,
              prevention, and justice into one clear journey.
            </p>

          </div>


          <div className="home-journey-grid">

            <div className="home-journey-card">
              <span>STEP 01</span>
              <h3>Understand</h3>
              <p>
                Build awareness of victimology and the
                experiences of people affected by crime.
              </p>
            </div>

            <div className="home-journey-card">
              <span>STEP 02</span>
              <h3>Protect</h3>
              <p>
                Recognize rights, safeguards, and support
                systems designed to protect victims.
              </p>
            </div>

            <div className="home-journey-card">
              <span>STEP 03</span>
              <h3>Prevent</h3>
              <p>
                Turn knowledge into awareness, early
                intervention, and community responsibility.
              </p>
            </div>

            <div className="home-journey-card">
              <span>STEP 04</span>
              <h3>Justice</h3>
              <p>
                Support justice systems that recognize
                dignity, participation, and accountability.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

        <div className="home-container home-cta-content">

          <div className="home-eyebrow">
            <span className="home-eyebrow-line" />
            <span>THE VICTIMLENS MISSION</span>
          </div>

          <h2>
            Understanding creates awareness.
            <br />
            <span>Awareness can create change.</span>
          </h2>

          <p>
            Explore VictimLens to understand victimology,
            discover rights, learn prevention, and connect
            knowledge with real-world justice.
          </p>

          <div className="home-cta-buttons">

            <Link
              to="/victimology"
              className="home-btn home-btn-gold"
            >
              Start Exploring
              <span>→</span>
            </Link>

            <Link
              to="/about#contact"
              className="home-btn home-btn-outline"
            >
              Contact VictimLens
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home
