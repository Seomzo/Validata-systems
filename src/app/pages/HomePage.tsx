import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  GitBranch,
  Layers3,
} from "lucide-react";
import { motion } from "motion/react";
import { MotionToggle, useSiteMotion } from "../components/SiteMotion";
import { EvidenceField } from "../components/visualizations/EvidenceField";
import { EvidenceReview } from "../components/EvidenceReview";
import diagnosticDetail from "../../assets/diagnostic-detail.jpg";
import reportsPreview from "../../assets/fixed-ops-preview.png";
import "../../styles/landing.css";

const systems = [
  {
    name: "Warranty intelligence",
    project: "ClaimScanner.ai",
    input: "Repair orders, diagnostic logs, and OEM procedures.",
    output: "Connected evidence for human review.",
    icon: FileText,
  },
  {
    name: "Operational reporting",
    project: "Fixed Ops Reports",
    input: "Tekion exports, advisors, stores, and dates.",
    output: "One consistent view of daily operations.",
    icon: Layers3,
  },
  {
    name: "Specialized agents",
    project: "Dealership logistics",
    input: "Task context, approved tools, and checkpoints.",
    output: "A controlled path from request to handoff.",
    icon: GitBranch,
  },
] as const;

function Arrival({
  children,
  className = "",
  image = false,
}: {
  children: React.ReactNode;
  className?: string;
  image?: boolean;
}) {
  const { stopped } = useSiteMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={
        stopped
          ? {}
          : {
              opacity: [0.6, 1],
              y: image ? [0, 0] : [18, 0],
              scale: image ? [0.975, 1] : [1, 1],
            }
      }
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: stopped ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SignalHero() {
  const [active, setActive] = useState<0 | 1 | 2>(0);
  const current = systems[active];
  return (
    <section className="signal-hero" aria-labelledby="signal-title">
      <div className="landing-wrap signal-stage">
        <div className="signal-copy">
          <h1 id="signal-title">
            <span>AI built for</span>
            <span>automotive.</span>
          </h1>
          <p>
            We build software for the work behind the dealership: warranty
            claims, fixed operations, and the handoffs in between.
          </p>
          <a className="landing-button" href="#work">
            Explore our work <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="signal-art">
          <EvidenceField active={active} />
          <div className="signal-art-caption">
            <span>From evidence to action.</span>
            <span>System illustration</span>
          </div>
        </div>
      </div>
      <div className="landing-wrap signal-explorer">
        <div
          className="system-switches"
          role="group"
          aria-label="Explore our areas of work"
        >
          {systems.map((system, index) => (
            <button
              key={system.name}
              type="button"
              aria-pressed={active === index}
              aria-controls="system-description"
              onClick={() => setActive(index as 0 | 1 | 2)}
            >
              <system.icon size={20} strokeWidth={1.5} aria-hidden="true" />
              <span>
                {system.name}
                <small>{system.project}</small>
              </span>
            </button>
          ))}
        </div>
        <div
          className="system-description"
          id="system-description"
          aria-live="polite"
          aria-atomic="true"
        >
          <p>
            {current.input} <strong>{current.output}</strong>
          </p>
          <MotionToggle />
        </div>
      </div>
    </section>
  );
}

function HarnessArchitecture() {
  const [selected, setSelected] = useState(1);
  const stages = [
    {
      title: "Context",
      description:
        "Give the agent the task, relevant records, and the operating constraints it needs.",
      detail: "Task brief + relevant records",
    },
    {
      title: "Tools",
      description:
        "Connect defined tools with explicit permissions, so each action has a clear scope.",
      detail: "Approved tools + scoped access",
    },
    {
      title: "Checkpoint",
      description:
        "Keep a person at the decisions that need judgment before the work moves on.",
      detail: "Human review + next action",
    },
  ];
  return (
    <div className="harness-architecture">
      <div
        className="harness-map"
        role="group"
        aria-label="Explore the agent architecture"
      >
        {stages.map((stage, index) => (
          <button
            type="button"
            key={stage.title}
            aria-pressed={selected === index}
            aria-controls="harness-description"
            onClick={() => setSelected(index)}
          >
            <span className="harness-node" aria-hidden="true">
              {index === 0 ? (
                <FileText />
              ) : index === 1 ? (
                <GitBranch />
              ) : (
                <Check />
              )}
            </span>
            <span>{stage.title}</span>
          </button>
        ))}
      </div>
      <div
        className="harness-detail"
        id="harness-description"
        aria-live="polite"
        aria-atomic="true"
      >
        <strong>{stages[selected].detail}</strong>
        <p>{stages[selected].description}</p>
      </div>
      <p className="architecture-caption">
        Illustrative architecture. Designed around each workflow.
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <div className="validata-landing">
      <SignalHero />
      <section className="landing-work" id="work" aria-labelledby="work-title">
        <div className="landing-wrap">
          <Arrival className="work-introduction">
            <h2 id="work-title">
              Built around
              <br />
              the actual work.
            </h2>
            <div>
              <p>
                From warranty evidence in ClaimScanner to daily reporting in
                Fixed Ops Reports, we build for the people doing the work.
              </p>
            </div>
          </Arrival>
          <article
            className="project-spread claim-spread"
            id="claimscanner-work"
            aria-labelledby="claim-title"
          >
            <Arrival className="project-copy">
              <p className="project-name">ClaimScanner.ai</p>
              <h3 id="claim-title">
                Every finding
                <br />
                needs a source.
              </h3>
              <p>
                Connect repair orders and GFF diagnostic logs with relevant OEM
                procedures, so reviewers can inspect the evidence and identify
                what needs a closer look.
              </p>
              <ul className="project-capabilities">
                <li>Source-linked findings</li>
                <li>Documentation review</li>
                <li>Human judgment</li>
              </ul>
              <Link className="landing-link" to="/claimscanner">
                Explore ClaimScanner{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </Arrival>
            <Arrival className="project-visual claim-visual" image>
              <EvidenceReview />
            </Arrival>
          </article>
          <article
            className="project-spread report-spread"
            aria-labelledby="report-title"
          >
            <Arrival className="project-copy">
              <p className="project-name">Fixed Ops Reports</p>
              <h3 id="report-title">
                The operation,
                <br />
                in view.
              </h3>
              <p>
                Turn Tekion report exports into advisor scorecards, store-level
                views, and daily trends. A consistent picture for the people
                running fixed operations.
              </p>
              <ul className="project-capabilities">
                <li>Advisor scorecards</li>
                <li>Store and daily views</li>
                <li>Role-based access</li>
              </ul>
              <a
                className="landing-link"
                href="https://www.fixedopsreports.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Fixed Ops Reports{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </Arrival>
            <Arrival className="project-visual report-visual" image>
              <figure>
                <div className="report-preview-stage">
                  <img
                    src={reportsPreview}
                    alt="Fixed Ops Reports public dashboard preview showing store and date filters, advisor metrics, and trend charts with sample data"
                    width={898}
                    height={509}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  Actual public product preview. Sample data, not customer
                  results.
                </figcaption>
              </figure>
            </Arrival>
          </article>
        </div>
      </section>
      <section className="harness-chapter" aria-labelledby="agents-title">
        <div className="landing-wrap harness-layout">
          <Arrival className="harness-copy">
            <p className="project-name">Specialized agent systems</p>
            <h2 id="agents-title">
              Tools with
              <br />a job to do.
            </h2>
            <p>
              We develop agent harnesses for dealership logistics: the right
              context, bounded tool access, and a person at the decisions that
              need one.
            </p>
            <Link className="landing-link" to="/agents">
              Inside the agent harness{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </Arrival>
          <Arrival className="harness-visual">
            <HarnessArchitecture />
          </Arrival>
        </div>
      </section>
      <section className="landing-approach" aria-labelledby="approach-title">
        <div className="landing-wrap approach-layout">
          <Arrival className="approach-image" image>
            <figure>
              <img
                src={diagnosticDetail}
                alt="Illustrative diagnostic work beside an open engine compartment"
                width={1254}
                height={1254}
                loading="lazy"
              />
              <figcaption>Automotive work, illustrated.</figcaption>
            </figure>
          </Arrival>
          <Arrival className="approach-copy">
            <h2 id="approach-title">
              The details
              <br />
              are the system.
            </h2>
            <p>
              Start with the documents, exceptions, and handoffs your team
              already knows. Then build around them.
            </p>
            <dl>
              <div>
                <dt>Understand the operation.</dt>
                <dd>
                  Learn the language, the constraints, and where work gets
                  stuck.
                </dd>
              </div>
              <div>
                <dt>Make the work inspectable.</dt>
                <dd>
                  Keep the sources, tool boundaries, and human decisions in
                  view.
                </dd>
              </div>
            </dl>
            <Link className="landing-link" to="/technology">
              How we build <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </Arrival>
        </div>
      </section>
      <section className="landing-contact" aria-labelledby="contact-title">
        <div className="landing-wrap">
          <Arrival className="landing-contact-inner">
            <div>
              <h2 id="contact-title">
                Bring us
                <br />
                the hard part.
              </h2>
              <p>
                A workflow, an integration, or a product idea.
                <br className="wide-break" /> Let’s work through it together.
              </p>
            </div>
            <Link className="contact-orbit" to="/contact">
              <ArrowUpRight size={48} strokeWidth={1.25} aria-hidden="true" />
              <span>Let’s talk</span>
            </Link>
          </Arrival>
        </div>
      </section>
    </div>
  );
}
