import { Braces, Layers3, ShieldCheck } from "lucide-react";
import { ContactCTA, Eyebrow, TextLink } from "../components/Sections";
import { ProductStory } from "../components/ProductStory";
import { SystemOrbit } from "../components/SystemOrbit";
import { Reveal } from "../components/SiteMotion";
import { ShowroomHero } from "../components/ShowroomHero";
import diagnosticDetail from "../../assets/diagnostic-detail.jpg";

export function HomePage() {
  return (
    <>
      <ShowroomHero />
      <section className="section wrap home-work" id="work">
        <Reveal className="section-heading showroom-work-heading">
          <div>
            <Eyebrow>SELECTED WORK & PARTNERSHIPS</Eyebrow>
            <h2>
              Real challenges.
              <br />
              <em>Remarkable possibilities.</em>
            </h2>
          </div>
          <p>
            Three ways we turn automotive complexity into clarity. Built around
            the work your team does every day.
          </p>
        </Reveal>
        <ProductStory />
      </section>
      <section className="experience-section connected-section">
        <div className="experience-grid-bg" aria-hidden="true" />
        <div className="wrap experience-layout">
          <Reveal className="experience-copy">
            <Eyebrow>DIFFERENT SYSTEMS. ONE WAY OF THINKING.</Eyebrow>
            <h2>
              Every detail.
              <br />
              <em>Part of something bigger.</em>
            </h2>
            <p>
              Documents, data, and daily workflows shouldn’t live in separate
              worlds. We connect domain knowledge with purpose-built tools, so
              the next decision starts with context.
            </p>
            <TextLink to="/technology">Inside our technology</TextLink>
            <span className="experience-note">
              Select a system to see what connects.
            </span>
          </Reveal>
          <SystemOrbit />
        </div>
      </section>
      <section className="section wrap craft-section">
        <Reveal className="craft-photograph">
          <img
            src={diagnosticDetail}
            alt="Illustrative automotive diagnostic work with a tablet beside an open engine compartment"
            loading="lazy"
            width={1254}
            height={1254}
          />
          <div className="craft-image-caption">
            <span>CONTEXT IS EVERYTHING.</span>
            <p>
              Built for the real world.
              <br />
              Down to the last detail.
            </p>
          </div>
        </Reveal>
        <div className="craft-copy">
          <Reveal>
            <Eyebrow>THE VALIDATA APPROACH</Eyebrow>
            <h2>
              Complex work.
              <br />
              <em>Considered systems.</em>
            </h2>
            <p className="craft-intro">
              Good intelligence starts with understanding the work. Great
              systems keep the people doing it in control.
            </p>
          </Reveal>
          <div className="craft-principles">
            {[
              {
                icon: Layers3,
                title: "Context comes first.",
                text: "The actual documents. The real workflow. The exceptions that make your operation different.",
              },
              {
                icon: Braces,
                title: "A purpose for every tool.",
                text: "Domain knowledge and the right integrations, built around a clearly defined outcome.",
              },
              {
                icon: ShieldCheck,
                title: "People stay in control.",
                text: "Inspectable findings, explicit boundaries, and human checkpoints where they matter.",
              },
            ].map((item, index) => (
              <Reveal
                key={item.title}
                className="craft-principle"
                delay={index * 0.08}
              >
                <item.icon size={23} strokeWidth={1.5} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <TextLink to="/about">Meet Validata Systems</TextLink>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
