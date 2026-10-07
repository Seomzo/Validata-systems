import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  ScanLine,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProductScene } from "./ProductScene";
import { useSiteMotion } from "./SiteMotion";

const products = [
  {
    id: "work-claimscanner",
    name: "ClaimScanner.ai",
    short: "Warranty",
    icon: ScanLine,
    category: "Warranty intelligence",
    title: "Find the evidence.",
    text: "A repair order tells part of the story. Connect it with diagnostic logs and OEM procedures to see what supports a claim — and what still needs a closer look.",
    details: [
      "Repair orders + GFF logs",
      "Source-linked findings",
      "Human review",
    ],
    to: "/claimscanner",
    action: "Explore ClaimScanner",
  },
  {
    id: "work-reporting",
    name: "Fixed Ops Reports",
    short: "Reporting",
    icon: BarChart3,
    category: "Fixed operations",
    title: "See the bigger picture.",
    text: "The next useful insight is already in your reports. Turn Tekion data into advisor scorecards, store-level visibility, and a clearer view of daily performance.",
    details: ["Tekion report data", "Advisor scorecards", "Store trends"],
    to: "https://www.fixedopsreports.com/",
    action: "Visit Fixed Ops Reports",
  },
  {
    id: "work-agents",
    name: "Dealership agents",
    short: "Agents",
    icon: Workflow,
    category: "Specialized agent systems",
    title: "Move the work forward.",
    text: "Every handoff has context. Our specialized agent harness brings defined tools, workflow boundaries, and human checkpoints to dealership logistics.",
    details: ["Scoped tasks", "Defined tools", "Human checkpoints"],
    to: "/agents",
    action: "Explore dealership agents",
  },
];

export function ProductStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);
  const { stopped } = useSiteMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  useMotionValueEvent(scrollYProgress, "change", () => {
    // Follow actual chapter positions, including when enlarged text changes their heights.
    let next = 0;
    chapterRefs.current.forEach((chapter, index) => {
      if (
        chapter &&
        chapter.getBoundingClientRect().top <= window.innerHeight / 2
      )
        next = index;
    });
    setActive(next);
  });

  return (
    <div ref={ref} className="product-story">
      <div className="story-chapters">
        {products.map((product, index) => (
          <article
            className="story-chapter"
            id={product.id}
            key={product.id}
            ref={(node) => {
              chapterRefs.current[index] = node;
            }}
          >
            <div className="story-copy">
              <span className="story-category">
                <product.icon size={18} />
                {product.category}
              </span>
              <h3>{product.title}</h3>
              <p className="story-product-name">{product.name}</p>
              <p className="story-description">{product.text}</p>
              <ul className="story-details">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              {product.to.startsWith("https") ? (
                <a
                  className="text-link"
                  href={product.to}
                  target="_blank"
                  rel="noreferrer"
                >
                  {product.action}
                  <ArrowUpRight size={18} />
                </a>
              ) : (
                <Link className="text-link" to={product.to}>
                  {product.action}
                  <ArrowUpRight size={18} />
                </Link>
              )}
            </div>
            <div className="story-inline-scene">
              <ProductScene index={index} />
            </div>
          </article>
        ))}
      </div>
      <aside className="story-sticky" aria-label="Portfolio illustrations">
        <nav
          className="story-navigation"
          aria-label="Explore portfolio chapters"
        >
          {products.map((product, index) => (
            <a
              key={product.id}
              href={"#" + product.id}
              aria-current={active === index ? "step" : undefined}
            >
              {active === index && (
                <motion.span
                  className="story-selected"
                  layoutId="story-selected"
                  transition={{
                    type: "spring",
                    stiffness: 420,
                    damping: 38,
                    duration: stopped ? 0 : undefined,
                  }}
                />
              )}
              <product.icon size={16} />
              <span>{product.short}</span>
            </a>
          ))}
        </nav>
        <div className="story-screen">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              className="story-scene-frame"
              key={active}
              initial={stopped ? false : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: stopped ? 0 : -16,
                transition: { duration: stopped ? 0 : 0.16 },
              }}
              transition={{
                duration: stopped ? 0 : 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ProductScene index={active} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="story-caption">
          <span>{products[active].name}</span>
          <span>
            <ArrowDown size={13} />
            Scroll to explore
          </span>
        </div>
        <div className="story-progress" aria-hidden="true">
          <motion.span style={{ scaleX: scrollYProgress }} />
        </div>
      </aside>
    </div>
  );
}
