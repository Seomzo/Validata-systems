import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, BarChart3, ScanLine, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useSiteMotion } from "./SiteMotion";

const systems = [
  {
    name: "ClaimScanner.ai",
    label: "WARRANTY INTELLIGENCE",
    icon: ScanLine,
    description: "Connect the repair. Find the evidence.",
    to: "/claimscanner",
  },
  {
    name: "Fixed Ops Reports",
    label: "OPERATIONAL VISIBILITY",
    icon: BarChart3,
    description: "See the patterns behind performance.",
    to: "https://www.fixedopsreports.com/",
  },
  {
    name: "Dealership agents",
    label: "WORKFLOW AUTOMATION",
    icon: Workflow,
    description: "Give the next step a way forward.",
    to: "/agents",
  },
];
export function SystemOrbit() {
  const [active, setActive] = useState(0);
  const { stopped } = useSiteMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const y = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const current = systems[active];
  return (
    <div
      className="orbit-experience"
      onPointerMove={(event) => {
        if (stopped || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className="orbit-topline">
        <span className="signal-dot" />
        CONNECTED BY DESIGN<span>ILLUSTRATIVE SYSTEM MAP</span>
      </div>
      <motion.div
        className="orbit-stage"
        data-active={active}
        style={{
          rotateX: stopped ? 0 : rotateX,
          rotateY: stopped ? 0 : rotateY,
        }}
      >
        <div className="orbit-halo" aria-hidden="true" />
        <svg
          className="orbit-lines"
          viewBox="0 0 620 580"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="orbit-blue"
              x1="70"
              y1="30"
              x2="570"
              y2="550"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2196f3" stopOpacity=".08" />
              <stop offset=".5" stopColor="#23b1de" stopOpacity=".75" />
              <stop offset="1" stopColor="#2196f3" stopOpacity=".06" />
            </linearGradient>
          </defs>
          <g className="orbit-ring outer-ring">
            <circle
              cx="310"
              cy="290"
              r="250"
              stroke="#2196f3"
              strokeOpacity=".17"
            />
            <circle
              cx="310"
              cy="290"
              r="239"
              stroke="#4c91df"
              strokeOpacity=".25"
              strokeDasharray="1 13"
            />
            <circle cx="560" cy="290" r="4" fill="#23b1de" />
            <circle cx="60" cy="290" r="3" fill="#2196f3" />
          </g>
          <g className="orbit-ring inner-ring">
            <ellipse
              cx="310"
              cy="290"
              rx="224"
              ry="108"
              transform="rotate(-35 310 290)"
              stroke="url(#orbit-blue)"
            />
            <ellipse
              cx="310"
              cy="290"
              rx="224"
              ry="108"
              transform="rotate(35 310 290)"
              stroke="url(#orbit-blue)"
            />
            <circle
              cx="310"
              cy="290"
              r="155"
              stroke="#2196f3"
              strokeOpacity=".2"
              strokeDasharray="4 7"
            />
          </g>
          <path
            className="orbit-route"
            d="M310 290 C195 275 190 160 215 104 M310 290 C420 205 490 223 511 264 M310 290 C260 360 218 405 177 454"
            stroke="#2196f3"
            strokeOpacity=".25"
          />
          <path
            className="flow-trace flow-0"
            d="M215 104 C190 160 195 275 310 290"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <path
            className="flow-trace flow-1"
            d="M310 290 C420 205 490 223 511 264"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <path
            className="flow-trace flow-2"
            d="M177 454 C218 405 260 360 310 290"
            stroke="#60a5fa"
            strokeWidth="2"
          />
          <g className="orbit-specks" fill="#4a94ec">
            <circle cx="114" cy="199" r="2" />
            <circle cx="460" cy="438" r="3" />
            <circle cx="350" cy="77" r="2" />
            <circle cx="329" cy="517" r="2" />
            <circle cx="93" cy="384" r="1.5" />
          </g>
        </svg>
        <div className="orbit-core">
          <div className="core-corner corner-one" />
          <div className="core-corner corner-two" />
          <span className="core-label">INTELLIGENCE, CONNECTED.</span>
          <img src={logo} alt="" width={1001} height={301} />
          <div className="core-footer">
            <span className="signal-dot" />
            APPLIED AI SYSTEMS
          </div>
        </div>
        {systems.map((system, index) => (
          <button
            key={system.name}
            className={"orbit-node orbit-node-" + index}
            aria-pressed={active === index}
            onClick={() => setActive(index)}
          >
            <span className="node-icon">
              <system.icon size={20} strokeWidth={1.6} />
            </span>
            <span>
              <small>{system.label}</small>
              <strong>{system.name}</strong>
            </span>
            <span className="node-number">0{index + 1}</span>
          </button>
        ))}
        <span className="orbit-coordinate coordinate-one" aria-hidden="true">
          V / 01
        </span>
        <span className="orbit-coordinate coordinate-two" aria-hidden="true">
          SYSTEMS IN MOTION
        </span>
      </motion.div>
      <div className="orbit-caption" aria-live="polite">
        <span>
          <small>{current.label}</small>
          <strong>{current.description}</strong>
        </span>
        {current.to.startsWith("https") ? (
          <a
            href={current.to}
            target="_blank"
            rel="noreferrer"
            aria-label={"Explore " + current.name}
          >
            <ArrowUpRight size={19} />
          </a>
        ) : (
          <Link to={current.to} aria-label={"Explore " + current.name}>
            <ArrowUpRight size={19} />
          </Link>
        )}
      </div>
    </div>
  );
}
