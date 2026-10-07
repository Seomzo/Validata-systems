import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "../Brand";

export function Footer() {
  return (
    <footer className="site-footer wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" aria-label="Validata Systems home">
            <Brand />
          </Link>
          <p>
            Real work. Intelligent systems.
            <br />
            Built for automotive.
          </p>
        </div>
        <div>
          <h2>Our work</h2>
          <Link to="/claimscanner">ClaimScanner</Link>
          <a
            href="https://www.fixedopsreports.com/"
            target="_blank"
            rel="noreferrer"
          >
            Fixed Ops Reports <ArrowUpRight size={13} />
          </a>
          <Link to="/agents">Dealership agents</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link to="/about">About Validata</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/security">Trust & security</Link>
          <Link to="/contact">
            Get in touch <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Validata Systems</p>
        <span>Built for the details that matter.</span>
      </div>
    </footer>
  );
}
