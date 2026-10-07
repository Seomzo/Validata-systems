import { ContactCTA, PageIntro, TextLink } from "../components/Sections";
import { Eye, LockKeyhole, ShieldCheck } from "lucide-react";

export function SecurityPage() {
  return (
    <>
      <PageIntro
        label="TRUST & SECURITY"
        title={
          <>
            Confidence comes
            <br />
            <em>with clear boundaries.</em>
          </>
        }
      >
        Dealership workflows involve sensitive information and consequential
        decisions. Our approach starts with understanding the data, defining
        access, and making human responsibility clear.
      </PageIntro>
      <section className="wrap trust-section">
        <div className="simple-grid">
          {[
            {
              icon: LockKeyhole,
              title: "Define the data boundary.",
              text: "Before a deployment, establish what data is needed, who can access it, which services process it, and how retention will work.",
            },
            {
              icon: Eye,
              title: "Make the work inspectable.",
              text: "Give reviewers source context and make workflow outcomes understandable. Surface gaps and uncertainty where they matter.",
            },
            {
              icon: ShieldCheck,
              title: "Keep authority explicit.",
              text: "Scope an agent’s tools and responsibilities around the task. Identify where a person must review or authorize the next step.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.icon size={27} strokeWidth={1.4} />
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="editorial-note">
          <span className="mono">LET’S REVIEW YOUR REQUIREMENTS</span>
          <div>
            <p>
              Deployment controls, integrations, and data handling depend on the
              product and engagement. We’ll walk through your requirements and
              the applicable controls before connecting operational data.
            </p>
            <TextLink to="/contact?interest=security">
              Discuss security and deployment
            </TextLink>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
