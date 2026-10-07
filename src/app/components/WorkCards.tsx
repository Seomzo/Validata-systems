import {
  ArrowUpRight,
  BarChart3,
  Check,
  FileText,
  GitBranch,
  ScanLine,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { Reveal } from "./SiteMotion";

export function WorkCards() {
  return (
    <div className="work-grid">
      <Reveal className="work-card">
        <div className="work-art claim-art" aria-hidden="true">
          <div className="mini-document">
            <div>
              <ScanLine size={19} />
              <span>Claim review</span>
              <span className="mini-label">CS</span>
            </div>
            <i />
            <i />
            <p>
              <Check size={13} />
              Diagnostic evidence<span>Matched</span>
            </p>
            <p>
              <FileText size={13} />
              Repair documentation<span>Review</span>
            </p>
          </div>
          <span className="art-index">01 / VALIDATE</span>
        </div>
        <div className="work-card-copy">
          <span className="mono">WARRANTY INTELLIGENCE</span>
          <h3>
            ClaimScanner<span>.ai</span>
          </h3>
          <p>
            Connect repair orders and diagnostic logs to OEM procedures. Put
            evidence at the center of warranty review.
          </p>
          <Link className="text-link" to="/claimscanner">
            Explore ClaimScanner
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </Reveal>
      <Reveal className="work-card">
        <div className="work-art reports-art" aria-hidden="true">
          <div className="mini-report">
            <div>
              <BarChart3 size={18} />
              <span>Operational visibility</span>
            </div>
            <div className="mini-chart">
              {[31, 45, 40, 63, 55, 76, 67, 86, 78].map((h, i) => (
                <span key={i} style={{ height: h + "%" }} />
              ))}
            </div>
            <div className="mini-chart-axis">
              <span>ADVISORS</span>
              <span>STORES</span>
              <span>TRENDS</span>
            </div>
          </div>
          <span className="art-index">02 / UNDERSTAND</span>
        </div>
        <div className="work-card-copy">
          <span className="mono">FIXED OPERATIONS</span>
          <h3>Fixed Ops Reports</h3>
          <p>
            Turn Tekion report data into advisor scorecards, store-level
            visibility, and a clearer view of daily performance.
          </p>
          <a
            className="text-link"
            href="https://www.fixedopsreports.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Fixed Ops Reports
            <ArrowUpRight size={17} />
          </a>
        </div>
      </Reveal>
      <Reveal className="work-card">
        <div className="work-art agents-art" aria-hidden="true">
          <div className="mini-agent">
            <div>
              <FileText size={17} />
              <span>Task</span>
            </div>
            <i />
            <div className="agent-core">
              <GitBranch size={22} />
              <span>Agent harness</span>
            </div>
            <i />
            <div>
              <ShieldCheck size={17} />
              <span>Controlled action</span>
            </div>
          </div>
          <span className="art-index">03 / COORDINATE</span>
        </div>
        <div className="work-card-copy">
          <span className="mono">SPECIALIZED AGENT SYSTEMS</span>
          <h3>Dealership agents</h3>
          <p>
            A purpose-built harness for dealership logistics and operational
            workflows, with defined tools and human checkpoints.
          </p>
          <Link className="text-link" to="/agents">
            Explore the approach
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
