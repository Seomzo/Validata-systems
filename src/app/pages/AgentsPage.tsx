import { ArrowUpRight, FileText, GitBranch, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA, Eyebrow, PageIntro } from "../components/Sections";

export function AgentsPage() {
  return (
    <>
      <PageIntro
        label="SPECIALIZED AGENT SYSTEMS"
        title={
          <>
            Give the workflow
            <br />
            <em>a way forward.</em>
          </>
        }
      >
        We’re building a specialized agent harness for dealership logistics and
        operational work: the structure that connects an AI agent to the right
        task, context, and tools.
      </PageIntro>
      <section className="wrap agents-feature">
        <div className="agent-blueprint">
          <div className="blueprint-label mono">THE ANATOMY OF A WORKFLOW</div>
          {[
            {
              icon: FileText,
              title: "A defined task",
              text: "Context, inputs, and a clear outcome",
            },
            {
              icon: ShieldCheck,
              title: "An operating boundary",
              text: "Approved tools and human checkpoints",
            },
            {
              icon: GitBranch,
              title: "A coordinated workflow",
              text: "Actions, results, and the next handoff",
            },
          ].map((step, i) => (
            <div className="agent-step" key={step.title}>
              <span>
                <step.icon size={22} />
              </span>
              <div>
                <strong>{step.title}</strong>
                <small>{step.text}</small>
              </div>
              <span className="mono">0{i + 1}</span>
            </div>
          ))}
          <div className="blueprint-foot mono">ILLUSTRATIVE ARCHITECTURE</div>
        </div>
        <div>
          <Eyebrow>BUILT AROUND THE OPERATION</Eyebrow>
          <h2>
            Useful agents need
            <br />
            <em>more than a prompt.</em>
          </h2>
          <p className="large-copy">
            They need to know what the task is, which tools belong in the
            workflow, and when a person needs to step in.
          </p>
          <p className="body-copy">
            Our harness work focuses on that surrounding system. We shape each
            workflow around the dealership’s operational needs and demonstrate
            it within a defined scope.
          </p>
          <Link className="button" to="/contact?interest=agents">
            See the agent approach
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-heading">
          <div>
            <Eyebrow>WHERE WE FOCUS</Eyebrow>
            <h2>
              Work that crosses
              <br />
              <em>systems and teams.</em>
            </h2>
          </div>
          <p>
            We start with a bounded workflow, establish the operating
            requirements, and expand from what we can demonstrate.
          </p>
        </div>
        <div className="simple-grid">
          <article>
            <span className="mono">01 / INFORMATION</span>
            <h3>Operational reporting</h3>
            <p>
              Organizing the inputs that managers need to understand the day’s
              work.
            </p>
          </article>
          <article>
            <span className="mono">02 / COORDINATION</span>
            <h3>Dealership logistics</h3>
            <p>
              Connecting task context, next steps, and handoffs across an
              operation.
            </p>
          </article>
          <article>
            <span className="mono">03 / OVERSIGHT</span>
            <h3>Reviewable execution</h3>
            <p>
              Making the workflow, its boundaries, and its outcomes visible to
              the people responsible.
            </p>
          </article>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
