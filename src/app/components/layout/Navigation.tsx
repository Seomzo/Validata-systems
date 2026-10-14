import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "../Brand";
import "../../../styles/navigation-refresh.css";

const links = [
  ["Our work", "/products"],
  ["Technology", "/technology"],
  ["Company", "/about"],
  ["Trust", "/security"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  return (
    <header
      className="site-header navigation-refresh"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap nav-inner">
        <Link
          to="/"
          className="navigation-brand"
          aria-label="Validata Systems home"
          onClick={() => {
            setOpen(false);
            if (pathname === "/")
              window.scrollTo({ top: 0, behavior: "instant" });
          }}
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
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
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
              <ArrowUpRight size={18} aria-hidden="true" />
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
