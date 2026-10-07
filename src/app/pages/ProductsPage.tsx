import { ContactCTA, PageIntro } from "../components/Sections";
import { WorkCards } from "../components/WorkCards";

export function ProductsPage() {
  return (
    <>
      <PageIntro
        label="OUR WORK & PARTNERSHIPS"
        title={
          <>
            Built for the work.
            <br />
            <em>Measured in usefulness.</em>
          </>
        }
      >
        From the detail inside a warranty claim to the bigger picture across a
        service department, our work puts intelligence where it can make a
        practical difference.
      </PageIntro>
      <section className="wrap portfolio-section">
        <WorkCards />
        <div className="editorial-note">
          <span className="mono">ONE APPROACH. DIFFERENT APPLICATIONS.</span>
          <p>
            We work across validation, operational reporting, and agent-driven
            workflows. Each system is shaped around its own users, source data,
            and operating requirements.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
