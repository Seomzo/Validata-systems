import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  CircleHelp,
  FileSpreadsheet,
  FileText,
  Link2,
  ListChecks,
  LockKeyhole,
  Route,
  UserRound,
} from "lucide-react";
import { useSiteMotion } from "./SiteMotion";

/** These are explanatory illustrations, not screenshots or live product data. */
export function ProductScene({ index }: { index: number }) {
  const scene = useRef<HTMLDivElement>(null);
  const inView = useInView(scene, { once: true, amount: 0.22 });
  const { stopped } = useSiteMotion();
  const visible = stopped || inView;
  const arrive = (delay = 0, x = 0, y = 18) => ({
    variants: {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: stopped ? 0 : delay,
          duration: stopped ? 0 : 0.65,
          ease: [0.22, 1, 0.36, 1] as const,
        },
      },
    },
  });
  const draw = (delay: number) => ({
    initial: stopped ? (false as const) : { pathLength: 0, opacity: 0 },
    animate: visible
      ? { pathLength: 1, opacity: 1 }
      : { pathLength: 0, opacity: 0 },
    transition: {
      delay: stopped ? 0 : delay,
      duration: stopped ? 0 : 0.8,
      ease: "easeInOut" as const,
    },
  });

  return (
    <motion.div
      ref={scene}
      className={`ps-scene ps-scene-${index}`}
      aria-hidden="true"
      initial={stopped ? false : "hidden"}
      animate={visible ? "visible" : "hidden"}
    >
      <div className="ps-halo" />
      {index === 0 && (
        <>
          <svg
            className="ps-connectors"
            viewBox="0 0 520 430"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M92 158 V186 Q92 203 112 203 H240 Q260 203 260 225"
              {...draw(0.3)}
            />
            <motion.path d="M260 165 V225" {...draw(0.4)} />
            <motion.path
              d="M428 158 V186 Q428 203 408 203 H280 Q260 203 260 225"
              {...draw(0.5)}
            />
          </svg>
          <div className="ps-sources">
            {[
              {
                name: "Repair order",
                detail: "Repair narrative",
                Icon: FileText,
              },
              { name: "GFF log", detail: "Test evidence", Icon: ListChecks },
              {
                name: "OEM manual",
                detail: "Source procedure",
                Icon: BookOpen,
              },
            ].map(({ name, detail, Icon }, i) => (
              <motion.div
                className={`ps-source ps-source-${i}`}
                key={name}
                {...arrive(i * 0.12, (i - 1) * 36, 30)}
              >
                <Icon size={20} strokeWidth={1.5} />
                <strong>{name}</strong>
                <span>{detail}</span>
                <div className="ps-paper-lines">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="ps-source-foot">
                  <span /> Document
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div className="ps-review" {...arrive(0.6, 0, 32)}>
            <div className="ps-review-heading">
              <div>
                <span className="ps-overline">SOURCE-LINKED</span>
                <h3>Claim review</h3>
              </div>
              <div className="ps-review-mark">
                <Link2 size={19} />
              </div>
            </div>
            <motion.div className="ps-finding" {...arrive(0.95, 12, 0)}>
              <span className="ps-finding-icon">
                <Check size={15} />
              </span>
              <span>Diagnosis supported</span>
              <small>Matched</small>
            </motion.div>
            <motion.div
              className="ps-finding ps-finding-review"
              {...arrive(1.12, 12, 0)}
            >
              <span className="ps-finding-icon">
                <CircleHelp size={15} />
              </span>
              <span>Guided test evidence</span>
              <small>Review</small>
            </motion.div>
            <div className="ps-review-footer">
              <Link2 size={12} /> Every finding returns to its source
            </div>
          </motion.div>
        </>
      )}

      {index === 1 && (
        <>
          <motion.div className="ps-report" {...arrive(0, -28, 28)}>
            <div className="ps-report-heading">
              <FileSpreadsheet size={18} />
              <strong>Daily report</strong>
            </div>
            <div className="ps-report-table">
              {Array.from({ length: 6 }, (_, row) => (
                <div key={row}>
                  {Array.from({ length: 4 }, (_, col) => (
                    <i key={col} />
                  ))}
                </div>
              ))}
            </div>
            <span className="ps-report-footer">Operational data</span>
          </motion.div>
          <svg
            className="ps-connectors"
            viewBox="0 0 520 430"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M120 185 V222 Q120 240 140 240 H266"
              {...draw(0.2)}
            />
            <motion.path
              d="M181 101 H250 Q272 101 272 126 V162"
              {...draw(0.25)}
            />
          </svg>
          <motion.div className="ps-scorecard" {...arrive(0.25, 25, 12)}>
            <div className="ps-scorecard-head">
              <span className="ps-overline">ONE CLEAR VIEW</span>
              <h3>See the operation.</h3>
            </div>
            <div className="ps-chart-title">
              <span>Advisor activity</span>
              <span>Sample view</span>
            </div>
            <div className="ps-advisor-bars">
              {[62, 86, 46, 74, 57].map((height, i) => (
                <div className="ps-bar-column" key={i}>
                  <motion.i
                    style={{ height: `${height}%`, transformOrigin: "bottom" }}
                    initial={stopped ? false : { scaleY: 0 }}
                    animate={{ scaleY: visible ? 1 : 0 }}
                    transition={{
                      delay: stopped ? 0 : 0.65 + i * 0.08,
                      duration: stopped ? 0 : 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                  <span>{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <div className="ps-store-legend">
              <span>
                <i /> Advisors
              </span>
              <span>
                <i /> Stores
              </span>
              <span>
                <i /> Trends
              </span>
            </div>
          </motion.div>
          <motion.div className="ps-trend-card" {...arrive(0.85, -20, 18)}>
            <div>
              <span>Patterns over time</span>
              <ArrowUpRight size={15} />
            </div>
            <svg viewBox="0 0 220 62" preserveAspectRatio="none">
              <path className="ps-trend-baseline" d="M0 52 H220" />
              <motion.path
                d="M0 44 C18 44 20 25 39 30 S62 44 82 28 S102 18 123 24 S151 11 166 19 S191 30 220 8"
                {...draw(1.05)}
              />
            </svg>
          </motion.div>
        </>
      )}

      {index === 2 && (
        <>
          <svg
            className="ps-connectors ps-agent-connectors"
            viewBox="0 0 520 430"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M135 131 V166 Q135 190 158 190 H216"
              {...draw(0.2)}
            />
            <motion.path
              d="M364 212 V268 Q364 290 340 290 H290"
              {...draw(0.65)}
            />
          </svg>
          <motion.div className="ps-task" {...arrive(0, -22, -12)}>
            <span className="ps-overline">THE TASK</span>
            <div className="ps-task-title">
              <Route size={22} />
              <h3>Coordinate a handoff</h3>
            </div>
            <p>Keep the work moving.</p>
          </motion.div>
          <motion.div className="ps-boundary" {...arrive(0.3, 30, 0)}>
            <div className="ps-boundary-title">
              <LockKeyhole size={17} />
              <strong>Defined tool access</strong>
            </div>
            <div className="ps-tool">
              <Check size={14} />
              <span>Read context</span>
            </div>
            <div className="ps-tool">
              <Check size={14} />
              <span>Prepare next action</span>
            </div>
            <span className="ps-boundary-caption">Within your boundaries</span>
          </motion.div>
          <motion.div className="ps-checkpoint" {...arrive(0.75, -15, 28)}>
            <div className="ps-person">
              <UserRound size={24} />
            </div>
            <div className="ps-checkpoint-copy">
              <span className="ps-overline">HUMAN CHECKPOINT</span>
              <h3>Your team stays in control.</h3>
              <p>Review. Decide. Move forward.</p>
            </div>
            <motion.span className="ps-ready" {...arrive(1.05, 0, 0)}>
              <Check size={13} /> Ready for review
            </motion.span>
          </motion.div>
        </>
      )}
      <div className="ps-disclosure">
        Illustrative workflow ·{" "}
        {index === 1 ? "Sample data" : "Product concept"}
      </div>
    </motion.div>
  );
}
