import { ContactCTA, Eyebrow, PageIntro } from "../components/Sections";
import { BookOpen, Database, GitBranch } from "lucide-react";

export function TechnologyPage() {
  return (
    <>
      <PageIntro
        label="OUR TECHNOLOGY"
        title={
          <>
            Intelligence is useful
            <br />
            <em>when it has context.</em>
          </>
        }
      >
        A dealership workflow is more than a prompt. It’s documents, data,
        procedures, tools, and people. We build systems that connect those
        pieces around a specific job.
      </PageIntro>
      <section className="wrap architecture-section">
        <div className="architecture-strip">
          <div>
            <span className="mono">01 / INPUTS</span>
            <h2>The source material</h2>
            <p>
              Repair orders · diagnostic logs
              <br />
              Reports · workflow context
            </p>
          </div>
          <span aria-hidden="true">→</span>
          <div className="architecture-core">
            <span className="mono">02 / INTELLIGENCE</span>
            <h2>The right context</h2>
            <p>
              Retrieve · normalize · reason
              <br />
              Apply rules · coordinate tools
            </p>
          </div>
          <span aria-hidden="true">→</span>
          <div>
            <span className="mono">03 / OUTPUTS</span>
            <h2>Something useful</h2>
            <p>
              Reviewable findings · insights
              <br />
              Actions · clear handoffs
            </p>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <Eyebrow>THREE TECHNICAL DISCIPLINES</Eyebrow>
            <h2>
              Purpose determines
              <br />
              <em>the system.</em>
            </h2>
          </div>
        </div>
        <div className="simple-grid">
          {[
            {
              icon: BookOpen,
              title: "Grounded document review",
              text: "ClaimScanner uses retrieval-augmented generation to bring relevant repair procedures into the review, then compare requirements with the documented work.",
            },
            {
              icon: Database,
              title: "Structured operational data",
              text: "Fixed Ops Reports turns Tekion report exports into a consistent view of advisors, stores, and dates so operators can explore performance.",
            },
            {
              icon: GitBranch,
              title: "Specialized agent harnesses",
              text: "Our dealership agent work connects task context, available tools, and execution boundaries around defined operational workflows.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.icon size={26} strokeWidth={1.4} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
