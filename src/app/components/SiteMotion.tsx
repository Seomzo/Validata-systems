import {
  createContext,
  useContext,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { motion, MotionConfig } from "motion/react";
import { useLocation } from "react-router-dom";
import { Pause, Play } from "lucide-react";

const MotionPreferences = createContext({
  stopped: false,
  reduced: false,
  toggle: () => {},
});
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function readReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}
export function SiteMotion({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    readReducedMotion,
    () => false,
  );
  const [paused, setPaused] = useState(false);
  const stopped = paused || reduced;
  return (
    <MotionPreferences.Provider
      value={{ stopped, reduced, toggle: () => setPaused((value) => !value) }}
    >
      <MotionConfig reducedMotion={stopped ? "always" : "user"}>
        <div data-motion={reduced ? "reduced" : paused ? "paused" : "active"}>
          {children}
        </div>
      </MotionConfig>
    </MotionPreferences.Provider>
  );
}
export function useSiteMotion() {
  return useContext(MotionPreferences);
}
export function MotionToggle() {
  const { stopped, reduced, toggle } = useSiteMotion();
  return (
    <button
      className="motion-toggle"
      type="button"
      onClick={toggle}
      disabled={reduced}
      aria-label={
        reduced
          ? "Reduced motion enabled by device preference"
          : stopped
            ? "Resume motion"
            : "Pause motion"
      }
    >
      {stopped && !reduced ? (
        <Play size={16} aria-hidden="true" />
      ) : (
        <Pause size={16} aria-hidden="true" />
      )}
      <span>
        {reduced
          ? "Reduced motion"
          : stopped
            ? "Resume motion"
            : "Pause motion"}
      </span>
    </button>
  );
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { stopped } = useSiteMotion();
  return (
    <motion.div
      className={className}
      initial={stopped ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: stopped ? 0 : 0.65,
        delay: stopped ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function RouteFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { stopped } = useSiteMotion();
  return (
    <motion.main
      id="main"
      tabIndex={-1}
      key={pathname}
      initial={stopped || pathname === "/" ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: stopped ? 0 : 0.3 }}
    >
      {children}
    </motion.main>
  );
}
