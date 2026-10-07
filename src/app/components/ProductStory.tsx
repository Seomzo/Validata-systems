import { motion } from "motion/react";
import { ArrowUpRight, BarChart3, ScanLine, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import { ProductScene } from "./ProductScene";
import { useSiteMotion } from "./SiteMotion";

const products = [
  {
    id: "work-claimscanner",
    name: "ClaimScanner.ai",
    icon: ScanLine,
    category: "Warranty intelligence",
    title: "Find the evidence.",
    text: "A repair order tells part of the story. Connect it with diagnostic logs and OEM procedures to see what supports a claim — and what still needs a closer look.",
    details: [
      "Repair orders + GFF logs",
      "Source-linked findings",
      "Human review",
    ],
    visual: "From source documents to a clearer review",
    to: "/claimscanner",
    action: "Explore ClaimScanner",
  },
  {
    id: "work-reporting",
    name: "Fixed Ops Reports",
    icon: BarChart3,
    category: "Fixed operations",
    title: "See the bigger picture.",
    text: "Turn Tekion report data into advisor scorecards, store-level visibility, and a clearer view of daily performance.",
    details: ["Tekion report data", "Advisor scorecards", "Store trends"],
    visual: "Your operation, brought into focus",
    to: "https://www.fixedopsreports.com/",
    action: "Visit Fixed Ops Reports",
  },
  {
    id: "work-agents",
    name: "Dealership agents",
    icon: Workflow,
    category: "Specialized agent systems",
    title: "Move the work forward.",
    text: "Bring context to every handoff with defined tools, workflow boundaries, and human checkpoints for dealership logistics.",
    details: ["Scoped tasks", "Defined tools", "Human checkpoints"],
    visual: "Connected work. People in control.",
    to: "/agents",
    action: "Explore dealership agents",
  },
];

export function ProductStory() {
  const { stopped } = useSiteMotion();

  return (
    <div className="product-story">
      {products.map((product, index) => (
        <motion.article
          className={`story-card story-card-${index}`}
          id={product.id}
          key={product.id}
          initial={stopped ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: stopped ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="story-card-copy">
            <div className="story-identity">
              <span className="story-product-icon" aria-hidden="true">
                <product.icon size={23} strokeWidth={1.7} />
              </span>
              <div>
                <p className="story-product-name">{product.name}</p>
                <p className="story-category">{product.category}</p>
              </div>
            </div>
            <h3>{product.title}</h3>
            <p className="story-description">{product.text}</p>
            {index === 0 && (
              <ul className="story-details">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
            {product.to.startsWith("https") ? (
              <a
                className="story-link"
                href={product.to}
                target="_blank"
                rel="noreferrer"
              >
                {product.action}
                <span aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            ) : (
              <Link className="story-link" to={product.to}>
                {product.action}
                <span aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            )}
          </div>
          <div className="story-artwork">
            <div className="story-artwork-grid" aria-hidden="true" />
            <div className="story-visual-caption" aria-hidden="true">
              <span />
              {product.visual}
            </div>
            <ProductScene index={index} />
            {index > 0 && (
              <ul className="story-capabilities">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
