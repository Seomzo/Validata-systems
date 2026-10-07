import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="page-intro wrap">
      <Eyebrow>{label}</Eyebrow>
      <h1>{title}</h1>
      <p className="intro-copy">{children}</p>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>LET’S BUILD WHAT’S NEXT</Eyebrow>
          <h2>
            Your next bottleneck.
            <br />
            <em>Our next challenge.</em>
          </h2>
        </div>
        <div className="cta-aside">
          <p>
            Show us the work that slows your team down. Let’s explore what a
            purpose-built system can do.
          </p>
          <Link className="button button-light" to="/contact">
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function TextLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
