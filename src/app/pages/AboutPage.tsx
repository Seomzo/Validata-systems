import {
  ContactCTA,
  Eyebrow,
  PageIntro,
  TextLink,
} from "../components/Sections";

export function AboutPage() {
  return (
    <>
      <PageIntro
        label="ABOUT VALIDATA SYSTEMS"
        title={
          <>
            Close to the work.
            <br />
            <em>Clear on the purpose.</em>
          </>
        }
      >
        We build applied AI systems for automotive operations. Our starting
        point is the work people actually do—and the friction that gets in their
        way.
      </PageIntro>
      <section className="wrap about-story">
        <div>
          <Eyebrow>WHY WE EXIST</Eyebrow>
          <h2>
            Good work deserves
            <br />
            <em>better systems.</em>
          </h2>
        </div>
        <div className="story-copy">
          <p>
            A technician completes a repair. An advisor documents the work. A
            manager pieces together performance across a busy service
            department. Every step leaves important information in a different
            place.
          </p>
          <p>
            Validata exists to help connect it. Our work spans warranty
            documentation, fixed operations reporting, and specialized agent
            systems for dealership logistics.
          </p>
          <p>
            We bring domain context and practical engineering to those
            challenges, working with partners to turn complicated processes into
            clearer, more useful workflows.
          </p>
          <TextLink to="/products">Explore our work and partnerships</TextLink>
        </div>
      </section>
      <section className="approach-section">
        <div className="wrap section">
          <Eyebrow>WHAT GUIDES US</Eyebrow>
          <div className="simple-grid">
            <article>
              <span className="mono">01</span>
              <h3>The problem comes first.</h3>
              <p>
                Start with the actual operation. Understand the detail before
                deciding what to automate.
              </p>
            </article>
            <article>
              <span className="mono">02</span>
              <h3>Context earns confidence.</h3>
              <p>
                Keep the source, the reasoning, and the limits close to the
                answer.
              </p>
            </article>
            <article>
              <span className="mono">03</span>
              <h3>People stay central.</h3>
              <p>
                Build for the teams doing the work and the people accountable
                for the outcome.
              </p>
            </article>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
