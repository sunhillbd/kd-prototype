"use client";

import React, { useState, useEffect, useRef } from "react";

interface CaseStudy {
  id: string;
  category: string;
  categoryTag: string;
  title: string;
  description: string;
  scope: string;
  duration: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  cardBg: string;
  arrowColor: string;
  image: string;
  fallbackImage: string;
  imageAlt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fmcg",
    category: "FMCG",
    categoryTag: "FMCG",
    title: "Brand Identity Design That Tells Stories",
    description:
      "A playful identity system gave every flavor its own lovable personality while keeping the entire candy family instantly recognizable together.",
    scope: "Branding",
    duration: "3 Months",
    authorName: "Sophie Lindqvist",
    authorRole: "Gummiz CMO",
    authorAvatar: "/case-studies/sophie.png",
    cardBg: "#BAE5FF", // Designmonks signature FMCG sky blue
    arrowColor: "#7C3AED",
    image: "/case-studies/gummiz.avif",
    fallbackImage: "/case-studies/gummiz.png",
    imageAlt: "Gummiz Brand Identity Design That Tells Stories",
  },
  {
    id: "fintech",
    category: "FINTECH",
    categoryTag: "FinTech",
    title: "The Friendlier Side of Finance",
    description:
      "Built to simplify personal finance, the finance app combines saving, investing, and global transfers into one clear and intuitive experience.",
    scope: "Mobile App Design",
    duration: "6 Months",
    authorName: "Kunle Adetayo",
    authorRole: "Plenty Pay CEO",
    authorAvatar: "/case-studies/author_kunle.png",
    cardBg: "#E1FFB9", // Designmonks signature FinTech lime green
    arrowColor: "#15803D",
    image: "/case-studies/plentypay.avif",
    fallbackImage: "/case-studies/fintech.jpg",
    imageAlt: "Plenty Pay - The Friendlier Side of Finance",
  },
  {
    id: "edtech",
    category: "EDTECH",
    categoryTag: "EdTech",
    title: "Learning Platform That Never Feels Heavy",
    description:
      "A smarter learning platform brings live classes, recorded lessons, and personalized learning together in one engaging experience.",
    scope: "Product Design",
    duration: "4 Months",
    authorName: "Dr. Elena Rostova",
    authorRole: "Skillophy Founder",
    authorAvatar: "/case-studies/elena.png",
    cardBg: "#FFCD51", // Designmonks signature EdTech warm amber
    arrowColor: "#B45309",
    image: "/case-studies/oter.avif",
    fallbackImage: "/case-studies/health.jpg",
    imageAlt: "Learning Platform That Never Feels Heavy",
  },
  {
    id: "mobility",
    category: "MOBILITY & AI",
    categoryTag: "Mobility & AI",
    title: "Next-Gen In-Cabin OS for Autonomous Fleets",
    description:
      "Architected a real-time infotainment and fleet telemetry pipeline for next-generation electric autonomous shuttles with sub-millisecond edge vehicle synchronization.",
    scope: "Embedded IoT & UI",
    duration: "5 Months",
    authorName: "Julian Becker",
    authorRole: "Aura Mobility Head of Product",
    authorAvatar: "/case-studies/julian.png",
    cardBg: "#FED7AA", // Warm pastel peach
    arrowColor: "#C2410C",
    image: "/case-studies/gridline.avif",
    fallbackImage: "/case-studies/auto.jpg",
    imageAlt: "Aura Next-Gen In-Cabin OS for Autonomous Fleets",
  },
];

export default function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState("fmcg");
  const sectionRef = useRef<HTMLElement>(null);

  // Jump to specific card on tab click
  const handlePillClick = (id: string, index: number) => {
    setActiveCategory(id);
    const cardEl = document.getElementById(`case-study-${id}`);
    if (cardEl) {
      // Calculate target scroll position taking into account sticky offset
      const topOffset = 96 + index * 56;
      const cardRect = cardEl.getBoundingClientRect();
      const targetY = window.pageYOffset + cardRect.top - topOffset;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  // Scroll listener to update active tab based on which card is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = caseStudies.length - 1; i >= 0; i--) {
        const el = document.getElementById(`case-study-${caseStudies[i].id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elemTop = window.pageYOffset + rect.top;
          if (scrollPos >= elemTop - 120) {
            setActiveCategory(caseStudies[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="case-studies-section" id="case-studies" ref={sectionRef}>
      <div className="content-wrapper">
        {/* Top Header */}
        <div className="case-studies-header">
          <div className="case-studies-badge">
            <span>Selected Work</span>
          </div>

          <h2 className="case-studies-title">
            <span>Proven Success in</span>
            <br />
            <span className="case-studies-serif-italic">Every Industry</span>
          </h2>

          {/* Interactive Category Selector Tabs */}
          <div
            className="case-studies-pills-row"
            role="tablist"
            aria-label="Case Study Industries"
          >
            {caseStudies.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === item.id}
                onClick={() => handlePillClick(item.id, idx)}
                className={`case-study-tab-btn ${
                  activeCategory === item.id ? "active" : ""
                }`}
              >
                <span>{item.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stacking Overlapping Cards Container */}
        <div className="case-studies-stack">
          {caseStudies.map((study, index) => {
            // 64px incremental sticky offset perfectly aligns with the card header strip
            const stickyTop = 80 + index * 64;

            return (
              <article
                key={study.id}
                id={`case-study-${study.id}`}
                className="case-study-sticky-wrapper"
                style={
                  {
                    top: `${stickyTop}px`,
                    zIndex: index + 10,
                    "--card-index": index,
                  } as React.CSSProperties
                }
              >
                <div
                  className="case-study-card"
                  style={{ backgroundColor: study.cardBg }}
                  onClick={() => handlePillClick(study.id, index)}
                >
                  <div className="case-study-card-grid">
                    {/* Left Column: Details & Meta */}
                    <div className="case-study-info-col">
                      <div>
                        {/* Exposed Category Header (Visible even when stacked) */}
                        <div className="case-study-cat-header-strip">
                          <span className="case-study-cat-label">
                            {study.categoryTag}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="case-study-item-title">
                          {study.title}
                        </h3>

                        {/* Description */}
                        <p className="case-study-desc">{study.description}</p>
                      </div>

                      {/* Bottom Meta & Client Testimonial Pill */}
                      <div className="case-study-bottom-group">
                        {/* Scope & Duration 2-Col Grid */}
                        <div className="case-study-meta-row">
                          <div className="meta-item">
                            <span className="meta-label">Scope</span>
                            <span className="meta-value">{study.scope}</span>
                          </div>
                          <div className="meta-item">
                            <span className="meta-label">Duration</span>
                            <span className="meta-value">{study.duration}</span>
                          </div>
                        </div>

                        {/* White Rounded Testimonial Pill */}
                        <div
                          className="case-study-author-pill"
                          aria-label={`Client endorsement for ${study.title}`}
                        >
                          <div className="author-left">
                            <img
                              src={study.authorAvatar}
                              alt={study.authorName}
                              className="author-avatar"
                              width={44}
                              height={44}
                              onError={(e) => {
                                // Graceful fallback if avatar image is missing
                                (e.currentTarget as HTMLImageElement).src =
                                  "/case-studies/sophie.png";
                              }}
                            />
                            <div className="author-text">
                              <span className="author-name">
                                {study.authorName}
                              </span>
                              <span className="author-role">
                                {study.authorRole}
                              </span>
                            </div>
                          </div>

                          <div
                            className="author-arrow"
                            style={{ color: study.arrowColor }}
                            aria-hidden="true"
                          >
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Hero Visual Asset */}
                    <div className="case-study-media-col">
                      <div className="case-study-img-frame">
                        <img
                          src={study.image}
                          alt={study.imageAlt}
                          className="case-study-featured-img"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback to PNG/JPG if AVIF not supported or file missing
                            const target = e.currentTarget as HTMLImageElement;
                            if (target.src !== study.fallbackImage) {
                              target.src = study.fallbackImage;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
