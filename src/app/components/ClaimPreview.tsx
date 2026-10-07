import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleAlert,
  FileText,
  ScanLine,
} from "lucide-react";

const checks = [
  {
    name: "Diagnostic record",
    state: "Matched",
    source: "GFF log · diagnostic session",
    description:
      "The example diagnostic session contains a recorded test result linked to this repair.",
    detail: "Test result present",
    kind: "matched",
  },
  {
    name: "Required procedure",
    state: "Needs review",
    source: "Repair procedure · post-repair checks",
    description:
      "The example procedure calls for a post-repair check. Supporting evidence is missing from the submitted documents.",
    detail: "Confirm post-repair check",
    kind: "review",
  },
  {
    name: "Repair documentation",
    state: "Matched",
    source: "Repair order · technician narrative",
    description:
      "The example repair order identifies the component, the work performed, and the technician’s repair narrative.",
    detail: "Repair narrative present",
    kind: "matched",
  },
];
export function ClaimPreview() {
  const [selected, setSelected] = useState(1);
  const check = checks[selected];
  return (
    <div className="claim-preview">
      <div className="preview-top">
        <div>
          <ScanLine size={19} />
          <strong>ClaimScanner.ai</strong>
        </div>
        <span className="sample-label">Interactive example</span>
      </div>
      <div className="claim-main">
        <div className="system-heading">
          <span className="mono">REPAIR ORDER / 2048</span>
          <h3>The details, connected.</h3>
        </div>
        <div className="checks-header">
          <span>DOCUMENTATION CHECKS</span>
          <span>2 matched · 1 to review</span>
        </div>
        <div className="check-list" aria-label="Explore example findings">
          {checks.map((item, index) => (
            <button
              key={item.name}
              className={"check-row " + (selected === index ? "selected" : "")}
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
            >
              <span className={"check-icon " + item.kind}>
                {item.kind === "matched" ? (
                  <Check size={13} />
                ) : (
                  <CircleAlert size={13} />
                )}
              </span>
              <span>{item.name}</span>
              <small className={item.kind}>{item.state}</small>
              <ChevronRight size={13} />
            </button>
          ))}
        </div>
        <div
          className={"evidence-detail " + check.kind}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="evidence-title">
            <span>
              {check.kind === "review" ? (
                <CircleAlert size={14} />
              ) : (
                <Check size={14} />
              )}
              {check.detail}
            </span>
            <ArrowUpRight size={14} />
          </div>
          <p>{check.description}</p>
          <div className="evidence-source">
            <FileText size={12} />
            {check.source}
          </div>
        </div>
        <div className="preview-bottom">
          <span>
            <span className="status-dot" />
            Source-linked review
          </span>
          <span>Human decision, always.</span>
        </div>
      </div>
      <div className="preview-caption">
        Illustrative data · select a check to explore
      </div>
    </div>
  );
}
