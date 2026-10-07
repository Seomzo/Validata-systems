import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  GitBranch,
  ScanLine,
} from "lucide-react";
import { Link } from "react-router-dom";
import { SystemPreview } from "../components/SystemPreview";
import { ContactCTA, Eyebrow, TextLink } from "../components/Sections";
import { WorkCards } from "../components/WorkCards";

export function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Eyebrow>PURPOSE-BUILT FOR AUTOMOTIVE</Eyebrow>
            <h1>
              Real work.
              <br />
              Intelligent
              <br />
              <em>systems.</em>
            </h1>
            <p>
              We build applied AI for the work that keeps dealerships
              moving—from warranty review and fixed ops reporting to specialized
              operational agents.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button">
                Explore our work <ArrowUpRight size={18} />
              </a>
              <Link className="text-link" to="/contact">
                Let’s talk <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-footnote">
              <span className="status-dot" />
              Deep domain knowledge. Practical intelligence.
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-label">
              <span>THE VALIDATA APPROACH</span>
              <span>01 / CONNECT THE WORK</span>
            </div>
            <SystemPreview />
            <div className="visual-annotation">
              <span className="annotation-line" />
              Built around how dealerships actually work.
            </div>
          </div>
        </div>
        <div className="wrap hero-bottom">
          <span>VALIDATION. VISIBILITY. AUTOMATION.</span>
          <a href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={16} />
          </a>
          <span>THREE DISCIPLINES. ONE CONNECTED VIEW.</span>
        </div>
      </section>
      <section className="context-strip">
        <div className="wrap">
          <p>
            INTELLIGENCE THAT
            <br />
            <strong>GETS TO WORK.</strong>
          </p>
          <span>
            <ScanLine size={20} />
            Warranty & compliance
          </span>
          <span>
            <BarChart3 size={20} />
            Fixed operations
          </span>
          <span>
            <GitBranch size={20} />
            Dealership logistics
          </span>
        </div>
      </section>
      <section className="section wrap work-section" id="work">
        <div className="section-heading">
          <div>
            <Eyebrow>SELECTED WORK & PARTNERSHIPS</Eyebrow>
            <h2>
              Different challenges.
              <br />
              <em>The same purpose.</em>
            </h2>
          </div>
          <p>
            Make complex work easier to understand, review, and move forward.
            Explore the systems we’re building with our partners.
          </p>
        </div>
        <WorkCards />
        <div className="section-end">
          <span>Purpose-built software. Grounded in real operations.</span>
          <TextLink to="/products">A closer look at our work</TextLink>
        </div>
      </section>
      <section className="approach-section">
        <div className="wrap section approach-grid">
          <div>
            <Eyebrow>THE WAY WE BUILD</Eyebrow>
            <h2>
              The details
              <br />
              make the
              <br />
              <em>difference.</em>
            </h2>
            <TextLink to="/technology">Inside our technology</TextLink>
          </div>
          <div className="principle-list">
            {[
              [
                "01",
                "Start with the actual work.",
                "A repair order. A daily report. An operational handoff. We start with the specific problem your team needs to solve.",
              ],
              [
                "02",
                "Connect the right context.",
                "Bring domain knowledge, source documents, and the right tools together so the system can work with the full picture.",
              ],
              [
                "03",
                "Keep people in the loop.",
                "Make findings inspectable and actions deliberate. Give your team the context to review, decide, and move forward.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span className="mono">{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap statement-section">
        <Eyebrow>BUILT FOR THE PEOPLE BEHIND THE PROCESS</Eyebrow>
        <h2>
          Less time connecting the dots.
          <br />
          <em>More time moving the business.</em>
        </h2>
        <p>
          For service teams, fixed ops leaders, and dealership groups ready to
          put practical AI to work.
        </p>
        <TextLink to="/about">Meet Validata Systems</TextLink>
      </section>
      <ContactCTA />
    </>
  );
}
