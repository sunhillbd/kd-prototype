"use client";

import React, { useState, useEffect } from "react";
import HeroBackground from "./components/HeroBackground";
import ClientLogos from "./components/ClientLogos";
import StatementSection from "./components/StatementSection";
import WorkflowSection from "./components/WorkflowSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <div className="hero-wrapper" id="hero-section">
      {/* Bespoke Geometric Crystal & Ambient Mesh Background */}
      <HeroBackground mouseOffset={mouseOffset} />

      {/* Top Navbar */}
      <header className="site-header">
        <nav className="nav-container" aria-label="Main Navigation">
          {/* Logo */}
          <a href="#" className="brand-logo-link" aria-label="The Software House">
            <img
              src="/logo-dark.svg"
              alt="The Software House"
              className="brand-logo-img"
              width={166}
              height={75}
            />
          </a>

          {/* Center Navigation Links */}
          <ul className="nav-menu">
            {/* Solutions Dropdown */}
            <li
              className={`nav-item ${activeDropdown === "solutions" ? "open" : ""}`}
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => toggleDropdown("solutions")}
                aria-expanded={activeDropdown === "solutions"}
              >
                <span>Solutions</span>
                <svg
                  className="nav-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="nav-dropdown">
                <div className="dropdown-grid">
                  <a href="#platform-modernization" className="dropdown-card">
                    <span className="card-title">→ Platform Modernization</span>
                    <span className="card-desc">
                      Legacy is slowing us down but we can&apos;t stop
                    </span>
                  </a>
                  <a href="#ai-delivery" className="dropdown-card">
                    <span className="card-title">→ AI Solutions &amp; Agents</span>
                    <span className="card-desc">
                      Agents, MCP servers, GenAI features — built and shipped
                    </span>
                  </a>
                  <a href="#post-ma" className="dropdown-card">
                    <span className="card-title">→ Post-M&amp;A Integration</span>
                    <span className="card-desc">
                      We acquired a company, need to merge platforms
                    </span>
                  </a>
                  <a href="#software-delivery" className="dropdown-card">
                    <span className="card-title">→ Software Delivery</span>
                    <span className="card-desc">
                      Full lifecycle engineering teams ready in 2 weeks
                    </span>
                  </a>
                </div>
              </div>
            </li>

            {/* Sprints™ Dropdown */}
            <li
              className={`nav-item ${activeDropdown === "sprints" ? "open" : ""}`}
              onMouseEnter={() => setActiveDropdown("sprints")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => toggleDropdown("sprints")}
                aria-expanded={activeDropdown === "sprints"}
              >
                <span>Sprints™</span>
                <svg
                  className="nav-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="nav-dropdown" style={{ minWidth: "520px" }}>
                <div className="dropdown-grid">
                  <a href="#modernization-roadmap" className="dropdown-card">
                    <span className="card-title">
                      → Modernization Roadmap Sprint™
                    </span>
                    <span className="card-desc">
                      5 days · Discover priorities &amp; avoid risks
                    </span>
                  </a>
                  <a href="#product-discovery" className="dropdown-card">
                    <span className="card-title">→ Product Discovery Sprint™</span>
                    <span className="card-desc">
                      5-10 days · Prototype + go/no-go decision
                    </span>
                  </a>
                </div>
              </div>
            </li>

            {/* Case Studies */}
            <li className="nav-item">
              <a href="#case-studies" className="nav-link-btn">
                <span>Case studies</span>
              </a>
            </li>

            {/* Industries Dropdown */}
            <li
              className={`nav-item ${activeDropdown === "industries" ? "open" : ""}`}
              onMouseEnter={() => setActiveDropdown("industries")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => toggleDropdown("industries")}
                aria-expanded={activeDropdown === "industries"}
              >
                <span>Industries</span>
                <svg
                  className="nav-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="nav-dropdown" style={{ minWidth: "480px" }}>
                <div className="dropdown-grid">
                  <a href="#fintech" className="dropdown-card">
                    <span className="card-title">→ FinTech &amp; Banking</span>
                    <span className="card-desc">
                      High-throughput, compliant financial products
                    </span>
                  </a>
                  <a href="#saas" className="dropdown-card">
                    <span className="card-title">→ Enterprise SaaS</span>
                    <span className="card-desc">
                      Scalable multi-tenant cloud architectures
                    </span>
                  </a>
                </div>
              </div>
            </li>

            {/* Company Dropdown */}
            <li
              className={`nav-item ${activeDropdown === "company" ? "open" : ""}`}
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="nav-link-btn"
                onClick={() => toggleDropdown("company")}
                aria-expanded={activeDropdown === "company"}
              >
                <span>Company</span>
                <svg
                  className="nav-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div className="nav-dropdown" style={{ minWidth: "440px" }}>
                <div className="dropdown-grid">
                  <a href="#about" className="dropdown-card">
                    <span className="card-title">→ About TSH</span>
                    <span className="card-desc">
                      12+ years, 160+ delivered tech projects
                    </span>
                  </a>
                  <a href="#careers" className="dropdown-card">
                    <span className="card-title">→ Careers</span>
                    <span className="card-desc">
                      Join our team of top senior engineers
                    </span>
                  </a>
                </div>
              </div>
            </li>
          </ul>

          {/* Right CTA Button */}
          <div>
            <a href="#contact" className="swipe-btn" id="get-in-touch-btn">
              <span>Get in touch</span>
            </a>
          </div>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="content-wrapper hero-main-content">
        {/* Main Headline */}
        <h1 className="hero-title">
          <span>The engineering partner</span>
          <br />
          <span>CTOs call when</span>
          <br />
          <span>the stakes are high</span>
        </h1>

        {/* Subtitles & Social Proof Bar */}
        <div className="hero-footer-bar">
          {/* Left: Two-part description with arrow */}
          <div className="subtitles-group">
            <p className="subtitle-box subtitle-left">
              When you&apos;re behind on a deadline, scaling fast, or modernizing
              something critical
            </p>

            <svg
              className="sub-arrow-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>

            <a href="#book-call" className="book-call-btn" id="hero-book-call-btn">
              <span>Book a 30-minute Call</span>
              <svg
                className="btn-arrow"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Right: Clutch.co Review Rating Badge */}
          <div className="clutch-badge" id="clutch-rating">
            <div className="clutch-score-row">
              <span className="clutch-score">
                4.8 / 5
              </span>
              <span className="clutch-stars" aria-label="5 out of 5 stars">
                ★ ★ ★ ★ ★
              </span>
            </div>
            <p className="clutch-subtext">
              impartial reviews on <b>clutch.co</b>
            </p>
          </div>
        </div>
      </main>

      {/* Floating Cookiebot Consent Badge (bottom-left) */}
      <button
        type="button"
        className="cookiebot-widget"
        id="cookie-consent-widget"
        onClick={() => setCookieModalOpen(!cookieModalOpen)}
        title="Cookie & Privacy Settings"
        aria-label="Cookie & Privacy Settings"
      >
        <svg
          className="cookiebot-icon"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left C loop */}
          <path
            d="M10 3C5.6 3 2 6.6 2 11C2 15.4 5.6 19 10 19C13.8 19 16.9 16.3 17.7 12.8H14.5C13.8 14.6 12 15.9 10 15.9C7.3 15.9 5.1 13.7 5.1 11C5.1 8.3 7.3 6.1 10 6.1C12 6.1 13.8 7.4 14.5 9.2H17.7C16.9 5.7 13.8 3 10 3Z"
            fill="white"
          />
          {/* Right O loop */}
          <path
            d="M22 3C17.6 3 14 6.6 14 11C14 15.4 17.6 19 22 19C26.4 19 30 15.4 30 11C30 6.6 26.4 3 22 3ZM22 15.9C19.3 15.9 17.1 13.7 17.1 11C17.1 8.3 19.3 6.1 22 6.1C24.7 6.1 26.9 8.3 26.9 11C26.9 13.7 24.7 15.9 22 15.9Z"
            fill="white"
          />
        </svg>
      </button>

      {/* Cookie Preferences Modal */}
      {cookieModalOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "74px",
            left: "20px",
            background: "rgba(29, 31, 32, 0.96)",
            color: "#ffffff",
            padding: "16px 20px",
            borderRadius: "6px",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
            backdropFilter: "blur(12px)",
            maxWidth: "310px",
            fontSize: "13px",
            lineHeight: "1.4",
            zIndex: 10000,
          }}
        >
          <div style={{ fontWeight: 500, marginBottom: "6px", fontSize: "14px" }}>
            Cookie Preferences
          </div>
          <p style={{ color: "#d5d7d8", marginBottom: "12px", fontSize: "12px" }}>
            This website uses cookies for essential operation, analytics, and personalizing your experience.
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setCookieModalOpen(false)}
              style={{
                background: "#ffffff",
                color: "#1d1f20",
                padding: "6px 14px",
                borderRadius: "3px",
                fontSize: "12px",
                fontWeight: 500,
              }}
            >
              Accept all
            </button>
            <button
              onClick={() => setCookieModalOpen(false)}
              style={{
                background: "transparent",
                color: "#bfc3c4",
                padding: "6px 12px",
                fontSize: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "3px",
              }}
            >
              Decline
            </button>
          </div>
        </div>
      )}
      </div>

      {/* Client Logos / Social Proof Section */}
      <ClientLogos />

      {/* Statement Section */}
      <StatementSection />

      {/* Custom AI Engineering Workflow Section */}
      <WorkflowSection />

      {/* Case Studies Section with Interactive Stacking & Overlapping */}
      <CaseStudiesSection />

      {/* Testimonials Section: Mix of Video & Text Based Reviews */}
      <TestimonialsSection />
    </>
  );
}
