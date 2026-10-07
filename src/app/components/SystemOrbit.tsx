import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ScanLine,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useSiteMotion } from "./SiteMotion";

const systems = [
  {
    name: "ClaimScanner.ai",
    label: "Warranty intelligence",
    icon: ScanLine,
    description: "Connect each repair to the evidence behind it.",
    input: "Repair documents",
    outcome: "Supporting evidence",
    path: "M215 104 C190 160 195 245 310 250",
    to: "/claimscanner",
  },
  {
    name: "Fixed Ops Reports",
    label: "Operational visibility",
    icon: BarChart3,
    description: "Turn daily reports into a clearer operational picture.",
    input: "Daily reports",
    outcome: "Advisor & store trends",
    path: "M310 250 C430 250 470 310 510 405",
    to: "https://www.fixedopsreports.com/",
  },
  {
    name: "Dealership agents",
    label: "Workflow automation",
    icon: Workflow,
    description: "Move work forward with a person at the checkpoint.",
    input: "Operational task",
    outcome: "Human checkpoint",
    path: "M310 250 C270 355 210 430 150 515",
    to: "/agents",
  },
];
export function SystemOrbit() {
  const [active, setActive] = useState(0);
  const container = useRef<HTMLDivElement>(null);
  const inView = useInView(container, { amount: 0.1 });
  const { stopped } = useSiteMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const y = useSpring(useMotionValue(0), { stiffness: 90, damping: 24 });
  const rotateX = useTransform(y, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);
  const current = systems[active];
  return (
    <div
      ref={container}
      className="orbit-experience orbit-interactive"
      data-orbit-running={inView && !stopped}
      onPointerMove={(event) => {
        if (stopped || !inView || event.pointerType !== "mouse") return;
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
        <span>Select a system to explore</span>
        <span>Illustrative map</span>
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
          preserveAspectRatio="none"
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
              cy="250"
              r="229"
              stroke="#2196f3"
              strokeOpacity=".17"
            />
            <circle
              cx="310"
              cy="250"
              r="218"
              stroke="#4c91df"
              strokeOpacity=".25"
              strokeDasharray="1 13"
            />
            <circle cx="539" cy="250" r="4" fill="#23b1de" />
            <circle cx="81" cy="250" r="3" fill="#2196f3" />
          </g>
          <g className="orbit-ring inner-ring">
            <ellipse
              cx="310"
              cy="250"
              rx="214"
              ry="104"
              transform="rotate(-35 310 250)"
              stroke="url(#orbit-blue)"
            />
            <ellipse
              cx="310"
              cy="250"
              rx="214"
              ry="104"
              transform="rotate(35 310 250)"
              stroke="url(#orbit-blue)"
            />
            <circle
              cx="310"
              cy="250"
              r="155"
              stroke="#2196f3"
              strokeOpacity=".2"
              strokeDasharray="4 7"
            />
          </g>
          {systems.map((system) => (
            <path
              key={system.name}
              d={system.path}
              stroke="#2196f3"
              strokeOpacity=".2"
            />
          ))}
          <motion.path
            key={active}
            className="orbit-selected-route"
            d={current.path}
            stroke="#23b1de"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={stopped ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: stopped ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
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
          <img src={logo} alt="" width={1001} height={301} />
          <span className="orbit-core-caption">Connected intelligence</span>
        </div>
        {systems.map((system, index) => (
          <motion.button
            key={system.name}
            type="button"
            className={"orbit-node orbit-node-" + index}
            aria-pressed={active === index}
            aria-controls="orbit-detail"
            onClick={() => setActive(index)}
            animate={{ scale: stopped ? 1 : active === index ? 1.025 : 1 }}
            whileTap={stopped ? undefined : { scale: 0.97 }}
            transition={
              stopped
                ? { duration: 0 }
                : { type: "spring", stiffness: 400, damping: 28 }
            }
          >
            <span className="node-icon">
              <system.icon size={20} strokeWidth={1.6} />
            </span>
            <span>
              <small>{system.label}</small>
              <strong>{system.name}</strong>
            </span>
            {active === index && (
              <Check className="node-selected" size={14} aria-hidden="true" />
            )}
          </motion.button>
        ))}
      </motion.div>
      <div className="orbit-caption">
        <div className="orbit-caption-content" id="orbit-detail">
          <span className="sr-only" role="status">
            {current.input} to {current.outcome}. {current.description}
          </span>
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="orbit-caption-copy"
              aria-hidden="true"
              initial={stopped ? false : { opacity: 0, y: 7 }}
              animate={{ opacity: 1, y: 0 }}
              exit={stopped ? undefined : { opacity: 0, y: -7 }}
              transition={{ duration: stopped ? 0 : 0.2 }}
            >
              <span className="orbit-detail-flow">
                <span>{current.input}</span>
                <ArrowRight size={14} aria-hidden="true" />
                <span>{current.outcome}</span>
              </span>
              <strong>{current.description}</strong>
            </motion.div>
          </AnimatePresence>
        </div>
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
