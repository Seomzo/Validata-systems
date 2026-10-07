import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  ScanLine,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import panorama from "../../assets/dealership-panorama.jpg";
import { MotionToggle, useSiteMotion } from "./SiteMotion";

const systems = [
  {
    name: "Warranty intelligence",
    product: "ClaimScanner.ai",
    icon: ScanLine,
    input: "Repair orders + diagnostic logs",
    output: "Evidence you can inspect",
    steps: ["Repair order", "OEM sources", "Human review"],
    target: "#work-claimscanner",
  },
  {
    name: "Operational visibility",
    product: "Fixed Ops Reports",
    icon: BarChart3,
    input: "Tekion report data",
    output: "A clearer view of the operation",
    steps: ["Daily reports", "Advisor trends", "Store insights"],
    target: "#work-reporting",
  },
  {
    name: "Connected workflows",
    product: "Dealership agents",
    icon: Workflow,
    input: "A task. The right tools. Your rules.",
    output: "Move the next handoff forward",
    steps: ["Scoped task", "Defined tools", "Human checkpoint"],
    target: "#work-agents",
  },
];

export function ShowroomHero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { stopped } = useSiteMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const selected = systems[active];
  return (
    <section
      className="showroom-hero"
      ref={ref}
      aria-labelledby="showroom-title"
    >
      <motion.div
        className="showroom-backdrop"
        style={{ y: stopped ? 0 : imageY }}
        aria-hidden="true"
      >
        <motion.img
          src={panorama}
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          initial={stopped ? false : { scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: stopped ? 0 : 2.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <div className="showroom-shade" aria-hidden="true" />
      <div className="wrap showroom-content">
        <div className="showroom-copy">
          <p className="showroom-eyebrow">
            <span /> APPLIED AI. REAL AUTOMOTIVE WORK.
          </p>
          <h1 id="showroom-title">
            <span>Intelligence.</span>
            <span>
              In <em>motion.</em>
            </span>
          </h1>
          <p className="showroom-description">
            From the details in a claim to the rhythm of an entire operation. We
            build the intelligence that moves dealerships forward.
          </p>
          <div className="hero-actions">
            <a className="button button-electric" href="#work">
              Explore our work <ArrowUpRight size={18} />
            </a>
            <Link className="hero-secondary" to="/contact">
              Build with us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="showroom-insight">
          <div className="showroom-insight-label">
            <span className="signal-dot" /> THE INTELLIGENCE LAYER{" "}
            <span>ILLUSTRATIVE</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={stopped ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: stopped ? 0 : -8 }}
              transition={{ duration: stopped ? 0 : 0.2 }}
            >
              <p>{selected.input}</p>
              <h2>{selected.output}</h2>
              <div className="showroom-flow" aria-hidden="true">
                {selected.steps.map((step, i) => (
                  <span key={step}>
                    <motion.i
                      initial={stopped ? false : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: stopped ? 0 : i * 0.13,
                        duration: stopped ? 0 : 0.3,
                      }}
                    />
                    {step}
                  </span>
                ))}
              </div>
              <a href={selected.target}>
                Explore {selected.product} <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </AnimatePresence>
          <span
            className="sr-only"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {selected.product}: {selected.input}. {selected.output}.
          </span>
        </div>
      </div>
      <div className="wrap showroom-bottom">
        <div
          className="showroom-selector"
          role="group"
          aria-label="Explore our systems"
        >
          {systems.map((system, index) => (
            <button
              type="button"
              key={system.product}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              {index === active && (
                <motion.span
                  className="showroom-active-line"
                  layoutId="showroom-active"
                  transition={{
                    duration: stopped ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              )}
              <system.icon size={22} strokeWidth={1.5} />
              <span>
                <strong>{system.product}</strong>
                <small>{system.name}</small>
              </span>
              <ArrowUpRight className="showroom-select-arrow" size={18} />
            </button>
          ))}
        </div>
        <div className="showroom-utility">
          <a href="#work">
            <ArrowDown size={15} /> Scroll to discover
          </a>
          <span>Purpose-built for the work behind every vehicle.</span>
          <MotionToggle />
        </div>
      </div>
    </section>
  );
}
