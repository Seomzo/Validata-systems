import { useId, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ClipboardList,
  FileText,
  ScanLine,
} from "lucide-react";
import { useSiteMotion } from "./SiteMotion";
import "./evidence-review.css";

const sources = [
  {
    name: "Repair order",
    icon: FileText,
    type: "SERVICE RECORD",
    title: "What was documented.",
    contextLabel: "Customer concern",
    context: "Intermittent warning message during normal driving.",
    excerptLabel: "Technician narrative",
    excerpt:
      "Guided fault finding completed. Repair performed following the diagnostic result.",
    note: "Sample excerpt · No customer or vehicle data",
    finding:
      "Does the repair narrative include the final verification? Compare it with the diagnostic record.",
  },
  {
    name: "Diagnostic log",
    icon: ClipboardList,
    type: "GUIDED FAULT FINDING",
    title: "What the tests recorded.",
    contextLabel: "Test plan",
    context: "System checks performed to investigate the reported concern.",
    excerptLabel: "Recorded outcome",
    excerpt:
      "Diagnostic result saved. A post-repair test result is not included in this excerpt.",
    note: "Sample excerpt · No customer or vehicle data",
    finding:
      "Check the complete diagnostic log for the post-repair test and its recorded result.",
  },
  {
    name: "OEM procedure",
    icon: BookOpen,
    type: "PROCEDURE REFERENCE",
    title: "What the procedure requires.",
    contextLabel: "Relevant instruction",
    context:
      "Review the procedure applicable to the vehicle and the documented repair.",
    excerptLabel: "Verification requirement",
    excerpt: "Complete the specified post-repair checks and record the result.",
    note: "Illustrative procedure text · Not an actual OEM excerpt",
    finding:
      "Compare the required checks with both source records. A person makes the final review decision.",
  },
];

export function EvidenceReview() {
  const [selected, setSelected] = useState(0);
  const { stopped } = useSiteMotion();
  const id = useId();
  const source = sources[selected];

  return (
    <div className="evidence-review" data-stopped={stopped}>
      <div className="evidence-review-caption">
        <span>
          <ScanLine size={16} aria-hidden="true" /> Illustrative review
        </span>
        <span>Sample data</span>
      </div>
      <div
        className="evidence-review-sources"
        role="group"
        aria-label="Choose a source document"
      >
        {sources.map((item, index) => (
          <button
            type="button"
            key={item.name}
            aria-pressed={selected === index}
            aria-controls={`${id}-document`}
            onClick={() => setSelected(index)}
          >
            <item.icon size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <article
        className="evidence-review-paper"
        id={`${id}-document`}
        aria-labelledby={`${id}-title`}
      >
        <div className="evidence-review-document-kind">
          <span>{source.type}</span>
          <FileText size={19} strokeWidth={1.3} aria-hidden="true" />
        </div>
        <h4 id={`${id}-title`}>{source.title}</h4>
        <div className="evidence-review-context">
          <span>{source.contextLabel}</span>
          <p>{source.context}</p>
        </div>
        <div className="evidence-review-excerpt">
          <span>{source.excerptLabel}</span>
          <p key={selected}>{source.excerpt}</p>
        </div>
        <p className="evidence-review-paper-note">{source.note}</p>
      </article>
      <div className="evidence-review-checkpoint">
        <ArrowUpRight
          className="evidence-review-checkpoint-mark"
          size={20}
          aria-hidden="true"
        />
        <div>
          <strong>Reviewer checkpoint</strong>
          <p>{source.finding}</p>
        </div>
      </div>
      <span
        className="evidence-review-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {source.name} selected. {source.finding}
      </span>
    </div>
  );
}
