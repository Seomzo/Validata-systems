import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { SiteMotion, RouteFrame } from "@/app/components/SiteMotion";
import { Navigation } from "@/app/components/layout/Navigation";
import { Footer } from "@/app/components/layout/Footer";
import { HomePage } from "@/app/pages/HomePage";
import { ProductsPage } from "@/app/pages/ProductsPage";
import { ClaimScannerPage } from "@/app/pages/ClaimScannerPage";
import { AgentsPage } from "@/app/pages/AgentsPage";
import { TechnologyPage } from "@/app/pages/TechnologyPage";
import { AboutPage } from "@/app/pages/AboutPage";
import { SecurityPage } from "@/app/pages/SecurityPage";
import { ContactPage } from "@/app/pages/ContactPage";

const metadata: Record<string, [string, string]> = {
  "/": [
    "Intelligence in motion.",
    "Validata Systems builds applied AI for automotive operations: warranty review, fixed ops reporting, and specialized dealership agents.",
  ],
  "/products": [
    "Our Work & Partnerships",
    "Explore ClaimScanner, Fixed Ops Reports, and specialized agent systems for dealership operations.",
  ],
  "/claimscanner": [
    "ClaimScanner · Warranty Intelligence",
    "Connect repair orders, GFF diagnostic logs, and OEM procedures for evidence-based warranty documentation review.",
  ],
  "/agents": [
    "Specialized Dealership Agents",
    "Purpose-built agent harnesses for dealership logistics and operational workflows.",
  ],
  "/technology": [
    "Technology",
    "Domain context, grounded document review, operational data, and specialized agent harnesses.",
  ],
  "/about": [
    "About Us",
    "Meet Validata Systems. Applied AI systems built around the details of real automotive work.",
  ],
  "/security": [
    "Trust & Security",
    "Our approach to data boundaries, inspectable workflows, and human responsibility.",
  ],
  "/contact": [
    "Let’s Talk",
    "Discuss a product walkthrough, dealership workflow, or partnership with Validata Systems.",
  ],
};
function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = metadata[pathname] || [
      "Page not found",
      "Explore Validata Systems.",
    ];
    document.title = title + " | Validata Systems";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", "https://validatasystems.com" + pathname);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", "https://validatasystems.com" + pathname);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
function App() {
  return (
    <BrowserRouter>
      <SiteMotion>
        <RouteEffects />
        <Navigation />
        <RouteFrame>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/claimscanner" element={<ClaimScannerPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <section className="wrap page-intro">
                  <p className="eyebrow">404 / PAGE NOT FOUND</p>
                  <h1>
                    A different
                    <br />
                    <em>way forward.</em>
                  </h1>
                  <p className="intro-copy">
                    This page isn’t here. Let’s get you back to our work.
                  </p>
                  <Link className="button" to="/">
                    Back to Validata
                  </Link>
                </section>
              }
            />
          </Routes>
        </RouteFrame>
        <Footer />
      </SiteMotion>
    </BrowserRouter>
  );
}
export default App;
