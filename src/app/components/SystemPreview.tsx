import { useRef, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  CircleAlert,
  FileText,
  GitBranch,
  ScanLine,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const modes = [
  {
    label: "Warranty",
    icon: ScanLine,
    name: "ClaimScanner.ai",
    title: "Every detail. In context.",
    subtitle: "REPAIR ORDER / EXAMPLE",
    bottom: "Source-linked findings",
    color: "orange",
  },
  {
    label: "Reporting",
    icon: BarChart3,
    name: "Fixed Ops Reports",
    title: "See the whole operation.",
    subtitle: "FIXED OPERATIONS / EXAMPLE",
    bottom: "One view of your operation",
    color: "green",
  },
  {
    label: "Agents",
    icon: Workflow,
    name: "Dealership agents",
    title: "Put the workflow in motion.",
    subtitle: "SPECIALIZED WORKFLOW / EXAMPLE",
    bottom: "Purpose-built execution",
    color: "blue",
  },
];
export function SystemPreview() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mode = modes[active];
  function moveTab(event: React.KeyboardEvent, index: number) {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % 3
        : event.key === "ArrowLeft"
          ? (index + 2) % 3
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? 2
              : null;
    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  }
  return (
    <div className="system-preview">
      <div className="preview-top">
        <div>
          <span className="tiny-mark">v.</span>
          <strong>Systems at work</strong>
        </div>
        <span className="sample-label">
          <span />
          Interactive overview
        </span>
      </div>
      <div
        className="system-tabs"
        role="tablist"
        aria-label="Explore our systems"
      >
        {modes.map((item, index) => (
          <button
            key={item.label}
            id={"system-tab-" + index}
            role="tab"
            aria-selected={active === index}
            aria-controls={"system-panel-" + index}
            tabIndex={active === index ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            onKeyDown={(event) => moveTab(event, index)}
            onClick={() => setActive(index)}
          >
            <item.icon size={16} />
            {item.label}
          </button>
        ))}
      </div>
      <div
        className={"system-panel " + mode.color}
        id={"system-panel-" + active}
        role="tabpanel"
        aria-labelledby={"system-tab-" + active}
        tabIndex={0}
      >
        <div className="system-heading">
          <span className="mono">{mode.subtitle}</span>
          <h3>{mode.title}</h3>
          <p>
            {mode.name}
            <ArrowUpRight size={13} />
          </p>
        </div>
        {active === 0 && (
          <div className="warranty-visual">
            <div className="source-docs">
              <span>
                <FileText size={17} />
                Repair order
              </span>
              <span>
                <ScanLine size={17} />
                GFF log
              </span>
              <span>
                <BookOpen size={17} />
                Procedure
              </span>
            </div>
            <div className="connection-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="sample-finding">
              <div>
                <span className="finding-icon">
                  <ScanLine size={19} />
                </span>
                <div>
                  <strong>Documentation review</strong>
                  <small>Evidence connected to requirements</small>
                </div>
                <ShieldCheck size={19} />
              </div>
              <p>
                <Check size={14} />
                <span>Diagnostic record</span>
                <small>Matched</small>
              </p>
              <p>
                <CircleAlert size={14} />
                <span>Post-repair check</span>
                <small className="review-text">Review needed</small>
              </p>
            </div>
            <div className="source-note">
              <span className="source-dot" />A finding is only as useful as the
              evidence behind it.
            </div>
          </div>
        )}
        {active === 1 && (
          <div className="reports-visual">
            <div className="report-filter">
              <span>Service performance</span>
              <span>
                Illustrative week <ChevronRight size={12} />
              </span>
            </div>
            <div
              className="chart-bars"
              aria-label="Illustrative performance chart; sample data, not measured results"
            >
              {[42, 61, 53, 77, 65, 86, 72].map((height, index) => (
                <div key={index}>
                  <div style={{ height: height + "%" }}>
                    <span />
                  </div>
                  <small>{["M", "T", "W", "T", "F", "S", "S"][index]}</small>
                </div>
              ))}
            </div>
            <div className="report-chips">
              <span>Advisor scorecards</span>
              <span>Store rollups</span>
              <span>Daily trends</span>
            </div>
          </div>
        )}
        {active === 2 && (
          <div className="agents-visual">
            {[
              {
                icon: FileText,
                title: "Understand the task",
                text: "A scoped dealership workflow",
              },
              {
                icon: ShieldCheck,
                title: "Check the boundaries",
                text: "Permissions, tools, and human checkpoints",
              },
              {
                icon: GitBranch,
                title: "Coordinate the work",
                text: "Actions, results, and clear handoffs",
              },
            ].map((step, index) => (
              <div className="agent-step" key={step.title}>
                <span>
                  <step.icon size={18} />
                </span>
                <div>
                  <strong>{step.title}</strong>
                  <small>{step.text}</small>
                </div>
                <span className="mono">0{index + 1}</span>
              </div>
            ))}
          </div>
        )}
        <div className="preview-bottom">
          <span>
            <span className="status-dot" />
            {mode.bottom}
          </span>
          <span>Built around the work.</span>
        </div>
      </div>
      <div className="preview-caption">
        <span>Illustrative workflows · no live customer data</span>
        <span>01—03</span>
      </div>
    </div>
  );
}
