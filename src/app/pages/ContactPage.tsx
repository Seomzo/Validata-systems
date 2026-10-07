import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { Eyebrow } from "../components/Sections";

const interests: Record<string, string> = {
  general: "A partnership or project",
  claimscanner: "ClaimScanner",
  reports: "Fixed Ops Reports",
  agents: "Dealership agents",
  security: "Security and deployment",
};
export function ContactPage() {
  const [params] = useSearchParams();
  const [draft, setDraft] = useState("");
  const requested = params.get("interest") || "general";
  const initialInterest = interests[requested] ? requested : "general";
  function prepareDraft(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const subject =
      "Validata inquiry: " + interests[String(values.get("interest"))];
    const body =
      "Hi Validata,\n\n" +
      values.get("message") +
      "\n\nName: " +
      values.get("name") +
      "\nCompany: " +
      values.get("company") +
      "\nWork email: " +
      values.get("email");
    setDraft(
      "mailto:Omar@validatasystems.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body),
    );
  }
  return (
    <section className="wrap contact-section">
      <div className="contact-intro">
        <Eyebrow>LET’S TALK</Eyebrow>
        <h1>
          Start with
          <br />
          the <em>real work.</em>
        </h1>
        <p className="intro-copy">
          A product walkthrough, a partnership, or a workflow that needs a
          better system. We’d like to hear about it.
        </p>
        <div className="contact-direct">
          <span className="mono">REACH US DIRECTLY</span>
          <a href="mailto:Omar@validatasystems.com">
            Omar@validatasystems.com
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="contact-expect">
          <span className="mono">A GOOD PLACE TO START</span>
          <p>
            Tell us about your team, the systems you use, and what you’d like to
            improve. We’ll take it from there.
          </p>
        </div>
      </div>
      <div className="contact-form-panel">
        <div className="form-heading">
          <h2>What are you working on?</h2>
          <Mail size={22} />
        </div>
        <p>Share a little context and prepare an email to our team.</p>
        <form onSubmit={prepareDraft} onChange={() => setDraft("")}>
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                maxLength={100}
              />
            </label>
            <label>
              Company
              <input
                name="company"
                autoComplete="organization"
                placeholder="Your dealership or company"
                required
                maxLength={150}
              />
            </label>
          </div>
          <label>
            Work email
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="alex@company.com"
              required
              maxLength={200}
            />
          </label>
          <label>
            I’d like to discuss
            <select name="interest" defaultValue={initialInterest}>
              {Object.entries(interests).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <label>
            A little about your workflow
            <textarea
              name="message"
              rows={4}
              placeholder="What would you like to see, solve, or build?"
              required
              maxLength={2000}
            />
          </label>
          <button className="button" type="submit">
            Prepare email <ArrowUpRight size={17} />
          </button>
          <p className="form-note">
            You’ll review and send the draft from your email app. This form does
            not submit or store your information.
          </p>
        </form>
        {draft && (
          <div className="draft-ready" role="status">
            <strong>
              <Check size={16} />
              Your email draft is ready.
            </strong>
            <p>
              Open it in your email app, then press Send there. If you use
              webmail, you can also email us at the address above.
            </p>
            <a className="text-link" href={draft}>
              Open email draft
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
