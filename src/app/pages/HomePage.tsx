import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ContactCTA, Eyebrow, TextLink } from "../components/Sections";
import { WorkCards } from "../components/WorkCards";
import { SystemOrbit } from "../components/SystemOrbit";
import { SystemPreview } from "../components/SystemPreview";
import { MotionToggle, Reveal } from "../components/SiteMotion";

export function HomePage() {
  return (
    <>
      <section className="motion-hero">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="atmosphere-glow" />
          <div className="perspective-grid" />
          <div className="hero-horizon" />
        </div>
        <div className="wrap motion-hero-grid">
          <div className="motion-hero-copy">
            <div className="hero-kicker">
              <span className="signal-dot" />
              APPLIED AI. REAL AUTOMOTIVE WORK.
            </div>
            <h1>
              <span>Intelligence.</span>
              <span>
                In <em>motion.</em>
              </span>
            </h1>
            <p>
              Better decisions. Connected operations.
              <br />
              We build the systems that move dealerships forward.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-electric">
                Explore our work
                <ArrowUpRight size={18} />
              </a>
              <Link to="/contact" className="hero-secondary">
                Build with us
                <ArrowRight size={17} />
              </Link>
            </div>
            <div className="hero-signature">
              <span />
              Warranty intelligence. Operational visibility.
              <br />
              Purpose-built agents.
            </div>
          </div>
          <SystemOrbit />
        </div>
        <div className="wrap motion-hero-bottom">
          <a href="#work">
            <span className="scroll-cue">
              <ArrowDown size={13} />
            </span>
            SCROLL TO EXPLORE
          </a>
          <span>BUILT FOR THE DETAILS. DESIGNED FOR WHAT’S NEXT.</span>
          <MotionToggle />
        </div>
      </section>
      <div className="discipline-band">
        <div className="wrap">
          <span>
            ONE FOCUS. <strong>AUTOMOTIVE.</strong>
          </span>
          <div>
            <span>01 / VALIDATE</span>
            <i />
            <span>02 / UNDERSTAND</span>
            <i />
            <span>03 / COORDINATE</span>
          </div>
        </div>
      </div>
      <section className="section wrap home-work" id="work">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>SELECTED WORK & PARTNERSHIPS</Eyebrow>
            <h2>
              Real challenges.
              <br />
              <em>Remarkable possibilities.</em>
            </h2>
          </div>
          <p>
            From the evidence inside a claim to the bigger picture across an
            operation. This is where our intelligence gets to work.
          </p>
        </Reveal>
        <WorkCards />
      </section>
      <section className="experience-section">
        <div className="experience-grid-bg" aria-hidden="true" />
        <div className="wrap experience-layout">
          <Reveal className="experience-copy">
            <Eyebrow>GO BEYOND THE OVERVIEW</Eyebrow>
            <h2>
              Don’t just read it.
              <br />
              <em>Explore it.</em>
            </h2>
            <p>
              Switch between warranty, reporting, and agents to see how each
              system connects the pieces.
            </p>
            <span className="experience-note">
              <span className="signal-dot" />
              Interactive illustrations · sample data
            </span>
          </Reveal>
          <Reveal className="experience-preview" delay={0.12}>
            <SystemPreview />
          </Reveal>
        </div>
      </section>
      <section className="section wrap motion-approach">
        <Reveal className="section-heading">
          <div>
            <Eyebrow>THE VALIDATA APPROACH</Eyebrow>
            <h2>
              Built with context.
              <br />
              <em>Designed for control.</em>
            </h2>
          </div>
          <TextLink to="/technology">Inside our technology</TextLink>
        </Reveal>
        <div className="approach-panels">
          {[
            {
              n: "01",
              icon: Layers3,
              title: "Understand the work.",
              text: "The real documents. The actual workflow. The exceptions that make your operation different.",
            },
            {
              n: "02",
              icon: Braces,
              title: "Build around the detail.",
              text: "Connect domain knowledge, source data, and the right tools around a clearly defined outcome.",
            },
            {
              n: "03",
              icon: ShieldCheck,
              title: "Keep people in control.",
              text: "Make the findings inspectable, the boundaries explicit, and the next decision clear.",
            },
          ].map((item, index) => (
            <Reveal
              className="approach-panel"
              key={item.n}
              delay={index * 0.08}
            >
              <div>
                <span>{item.n}</span>
                <item.icon size={28} strokeWidth={1.3} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
