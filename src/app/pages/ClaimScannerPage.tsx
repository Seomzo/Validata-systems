import { ArrowUpRight, BookOpen, Files, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ClaimPreview } from "../components/ClaimPreview";
import { ContactCTA, Eyebrow } from "../components/Sections";

export function ClaimScannerPage() {
  return (
    <>
      <section className="wrap product-hero">
        <div>
          <Eyebrow>CLAIMSCANNER.AI / WARRANTY INTELLIGENCE</Eyebrow>
          <h1>
            A closer look.
            <br />
            <em>A stronger claim.</em>
          </h1>
          <p className="intro-copy">
            Connect the repair order, the diagnostic record, and the OEM
            procedure. See what’s supported—and what needs a closer look—before
            claim submission.
          </p>
          <div className="hero-actions">
            <Link to="/contact?interest=claimscanner" className="button">
              Request a walkthrough
              <ArrowUpRight size={17} />
            </Link>
            <a
              className="text-link"
              href="https://claimscanner.ai/"
              target="_blank"
              rel="noreferrer"
            >
              Visit product site
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <ClaimPreview />
      </section>
      <section className="section workflow-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <Eyebrow>CONNECT THE EVIDENCE</Eyebrow>
              <h2>
                From paperwork
                <br />
                to <em>perspective.</em>
              </h2>
            </div>
            <p>
              AI-assisted documentation review, with your team making the final
              call.
            </p>
          </div>
          <div className="workflow-grid">
            {[
              {
                n: "01",
                icon: Files,
                title: "Bring the repair together.",
                text: "Start with the repair order and Guided Fault Finding log. Connect the work described to the diagnostic record.",
                tag: "REPAIR ORDER + GFF LOG",
              },
              {
                n: "02",
                icon: BookOpen,
                title: "Find what matters.",
                text: "Retrieve relevant OEM procedures and identify requirements that apply to the documented repair.",
                tag: "CONTEXT + REQUIREMENTS",
              },
              {
                n: "03",
                icon: ShieldCheck,
                title: "Review with evidence.",
                text: "Inspect matched checks, documentation gaps, and the source context behind a finding.",
                tag: "FINDINGS + SOURCE CONTEXT",
              },
            ].map((step) => (
              <article className="workflow-item" key={step.n}>
                <div className="workflow-item-top">
                  <span className="mono">{step.n}</span>
                  <step.icon size={28} strokeWidth={1.3} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className="workflow-tag">{step.tag}</span>
              </article>
            ))}
          </div>
          <p className="fine-print">
            ClaimScanner supports review; it does not make OEM coverage
            decisions or guarantee claim approval. Applicable documentation and
            vehicle coverage should be confirmed in a walkthrough.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
