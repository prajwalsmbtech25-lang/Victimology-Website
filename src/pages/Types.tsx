import { VictimLensGlobe } from "../components/ui/globe"

function Types() {
  const victimTypes = [
    {
      category: "Primary Victim",
      title: "Directly harmed",
      description:
        "The person the crime was committed against — the one who directly experiences the physical, emotional, or financial harm.",
      example:
        "A person injured in an assault, or whose home was burgled.",
    },
    {
      category: "Secondary Victim",
      title: "Harmed through closeness",
      description:
        "Family members, partners, or close friends of a primary victim, who experience emotional or practical harm as a result of what happened to someone they love.",
      example:
        "The parents of a child who was harmed, coping with grief and disrupted family life.",
    },
    {
      category: "Tertiary Victim",
      title: "Harmed at the community level",
      description:
        "Wider community members, witnesses, or institutions affected indirectly — through fear, disrupted trust, or the ripple effects a crime leaves on a neighbourhood.",
      example:
        "A residential street where a series of burglaries leaves neighbours anxious and less trusting.",
    },
    {
      category: "Vulnerable Victim",
      title: "At heightened risk",
      description:
        "Individuals whose age, disability, dependency, or social circumstances make them more likely to be targeted — and who may need extra safeguards from the justice process itself.",
      example:
        "A child, an elderly person, or a person with a disability who depends on their abuser for care.",
    },
    {
      category: "Primary Victim",
      title: "Direct — economic harm",
      description:
        "Primary victimisation is not always physical. It also covers people who suffer direct financial loss.",
      example:
        "Someone who loses their savings to a fraud scheme.",
    },
    {
      category: "Secondary Victim",
      title: "First responders & witnesses",
      description:
        "People who arrive at or witness the aftermath of a crime — including colleagues, first responders, or bystanders — can experience real psychological impact.",
      example:
        "A shopkeeper's employee who witnesses an armed robbery.",
    },
    {
      category: "Tertiary Victim",
      title: "Institutional impact",
      description:
        "Schools, workplaces, or public institutions can also be considered tertiary victims when repeated incidents damage their function or reputation.",
      example:
        "A school that must rebuild trust after a bullying incident becomes public.",
    },
    {
      category: "Vulnerable Victim",
      title: "Repeat victimisation",
      description:
        "Some people are targeted more than once — a pattern victimologists study closely, since prior victimisation is one of the strongest predictors of future risk.",
      example:
        "A tenant repeatedly targeted by the same landlord after reporting the first incident.",
    },
  ]

  return (
    <main className="subpage">

      {/* HERO */}
      <section className="subpage-hero types-hero">

        <div className="subpage-hero-content">
          <span className="subpage-label">
            02 — VICTIM TYPES
          </span>

          <h1>
            Types of
            <br />
            Victims.
          </h1>

          <p>
            Victimisation can affect individuals, families, communities and
            institutions in different ways. Understanding these categories
            helps identify the different needs and experiences of victims.
          </p>
        </div>

        <div className="subpage-globe">
          <VictimLensGlobe />
        </div>

      </section>


      {/* TYPES SECTION */}
      <section className="content-section types-content">

        <div className="content-container">

          <div className="section-heading">
            <span className="section-number">
              02 — Classification
            </span>

            <h2>
              Understanding
              <br />
              Victimisation.
            </h2>

            <p>
              Victimology recognises that the effects of crime can extend
              beyond the person directly harmed. The following categories
              illustrate different forms and levels of victimisation.
            </p>
          </div>


          <div className="types-grid">

            {victimTypes.map((type, index) => (
              <article className="type-card" key={index}>

                <div className="type-card-top">
                  <span className="type-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="card-tag">
                    {type.category}
                  </span>
                </div>

                <h3>
                  {type.title}
                </h3>

                <p>
                  {type.description}
                </p>

                <div className="type-example">
                  <span>Example</span>
                  <p>{type.example}</p>
                </div>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* GLOBAL SECTION */}
      <section className="global-section types-global">

        <div className="global-text">

          <span className="section-number">
            GLOBAL PERSPECTIVE
          </span>

          <h2>
            Every Victim
            <br />
            Has a Story.
          </h2>

          <p>
            Victimisation does not affect everyone in the same way. Social
            circumstances, relationships, vulnerability and the wider
            community can all shape how victims experience harm and seek
            justice.
          </p>

        </div>

        <div className="global-globe">
          <VictimLensGlobe />
        </div>

      </section>

    </main>
  )
}

export default Types