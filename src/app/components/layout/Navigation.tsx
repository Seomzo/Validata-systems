import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import { Brand } from "../Brand";

const links = [
  ["Our work", "/products"],
  ["Technology", "/technology"],
  ["Company", "/about"],
  ["Trust", "/security"],
];
export function Navigation() {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header
      className={pathname === "/" ? "site-header home-header" : "site-header"}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap nav-inner">
        <Link
          to="/"
          aria-label="Validata Systems home"
          onClick={() => setOpen(false)}
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive ||
                (to === "/products" &&
                  ["/claimscanner", "/agents"].includes(pathname))
                  ? "active"
                  : ""
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="button button-small nav-cta"
          onClick={() => setOpen(false)}
        >
          Let’s talk <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {[...links, ["Contact", "/contact"]].map(([label, to]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
