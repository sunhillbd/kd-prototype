"use client";

import React, { useState, useRef, useEffect } from "react";

export interface TestimonialItem {
  id: string;
  type: "video" | "text";
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  extendedStory: string;
  videoDuration?: string;
  videoTopic?: string;
  metric?: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "eyass",
    type: "video",
    name: "Eyass Shakrah",
    role: "Co-Founder",
    company: "PET MEDIA GROUP",
    image: "/testimonials/eyass.png",
    quote: "We regard the TSH team as co-founders in our business",
    extendedStory:
      "TSH took full ownership of re-architecting our legacy monolith into high-throughput microservices. In 4 months, our API latency dropped by 55% while supporting over 2 million monthly active users across 6 European markets.",
    videoDuration: "1:45",
    videoTopic: "Scaling to 2M MAUs & Modernizing Legacy Core",
    metric: "55% Faster API Latency",
  },
  {
    id: "daniel",
    type: "text",
    name: "Daniel Kellenberger",
    role: "Chief Technology Officer",
    company: "OBLIGATE",
    image: "/testimonials/daniel.png",
    quote: "I have nothing but great respect for them",
    extendedStory:
      "Their engineering rigor on regulated smart contracts is second to none. They shipped 18 consecutive sprints with zero regressions, passing every external cryptographic audit on the first pass.",
    metric: "Zero Audit Regressions",
  },
  {
    id: "scott",
    type: "video",
    name: "Scott Phillips",
    role: "CEO & Founder",
    company: "THE PENSION LAB",
    image: "/testimonials/scott.png",
    quote:
      "I can honestly say that TSH has contributed to our positive business outcomes",
    extendedStory:
      "Deploying a secure open-banking aggregation platform requires extreme technical discipline. TSH didn't just write code; they challenged our architectural assumptions and helped us close our £12M funding round.",
    videoDuration: "2:10",
    videoTopic: "Building Bank-Grade Security for Pension Systems",
    metric: "£12M Series A Closed",
  },
  {
    id: "nick",
    type: "text",
    name: "Nick Gold",
    role: "Founder",
    company: "SPEAKERS' CORNER",
    image: "/testimonials/nick.png",
    quote: "They are more than just a software company",
    extendedStory:
      "They operate like a genuine in-house product team. The proactive communication, design intuition, and speed of feature delivery have made them an indispensable strategic partner for 4+ years.",
    metric: "4+ Years Partnership",
  },
  {
    id: "elena",
    type: "video",
    name: "Dr. Elena Rostova",
    role: "VP of Medical Informatics",
    company: "VITALIS HEALTH",
    image: "/case-studies/sophie.png",
    quote:
      "Their autonomous QA pipeline saved us months of FDA compliance review",
    extendedStory:
      "Building clinical diagnostic AI requires bulletproof verification. TSH's senior staff engineer gates caught critical medical edge cases in staging, allowing us to pass FDA validation ahead of forecast.",
    videoDuration: "1:35",
    videoTopic: "Deploying Clinical AI with Sub-10ms Diagnostics",
    metric: "FDA Approved Ahead of Schedule",
  },
  {
    id: "julian",
    type: "text",
    name: "Julian Becker",
    role: "Head of Mobility Architecture",
    company: "AURA MOBILITY",
    image: "/testimonials/scott.png",
    quote:
      "Autonomous engineering squads in 2 weeks wasn't a pitch — it was reality",
    extendedStory:
      "We needed dedicated embedded Linux and UI engineers immediately. TSH fielded a senior team in 11 days that integrated cleanly with our vehicle CAN-bus test harness with zero onboarding friction.",
    metric: "11 Days to Production Squad",
  },
];

export default function TestimonialsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "video" | "text">(
    "all"
  );
  const [activeVideoModal, setActiveVideoModal] =
    useState<TestimonialItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(true);

  const trackRef = useRef<HTMLDivElement>(null);

  // Filter items based on activeFilter
  const filteredItems = testimonialsData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  // Track scroll position to toggle arrow disabled states
  const updateScrollState = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollPrev(scrollLeft > 10);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
    const track = trackRef.current;
    if (track) {
      track.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      return () => {
        track.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [filteredItems]);

  const handleScroll = (direction: "prev" | "next") => {
    if (!trackRef.current) return;
    const cardWidth = 340; // Approx card width + border
    const scrollAmount = direction === "next" ? cardWidth * 1.5 : -cardWidth * 1.5;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
      }
    };
    if (activeVideoModal) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [activeVideoModal]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="content-wrapper">
        {/* Section Top Header */}
        <div className="testimonials-header-grid">
          {/* Main Title Left */}
          <div className="testimonials-title-group">
            <h2 className="testimonials-main-title">
              What long-term
              <br />
              clients say
            </h2>
          </div>

          {/* Right Subtitle & Interactive Slider Controls */}
          <div className="testimonials-right-controls">
            <p className="testimonials-header-note">
              CTOs and PMs{" "}
              <span className="testimonials-note-highlight">
                love working with us.
              </span>
              <br />
              They stay for years.
            </p>

            <div className="testimonials-actions-row">
              {/* Type Filter Pills */}
              <div
                className="testimonials-filter-pills"
                role="group"
                aria-label="Filter Testimonials"
              >
                <button
                  type="button"
                  className={`filter-pill ${
                    activeFilter === "all" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  All ({testimonialsData.length})
                </button>
                <button
                  type="button"
                  className={`filter-pill ${
                    activeFilter === "video" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("video")}
                >
                  <span className="filter-pill-icon">▶</span>
                  Video ({testimonialsData.filter((t) => t.type === "video").length})
                </button>
                <button
                  type="button"
                  className={`filter-pill ${
                    activeFilter === "text" ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter("text")}
                >
                  Text ({testimonialsData.filter((t) => t.type === "text").length})
                </button>
              </div>

              {/* Slider Arrows */}
              <div className="testimonials-arrow-group">
                <button
                  type="button"
                  onClick={() => handleScroll("prev")}
                  disabled={!canScrollPrev}
                  className={`testimonial-arrow-btn ${
                    !canScrollPrev ? "disabled" : ""
                  }`}
                  aria-label="Scroll to previous testimonials"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="19" y1="12" x2="5" y2="12" />
                    <polyline points="12 19 5 12 12 5" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => handleScroll("next")}
                  disabled={!canScrollNext}
                  className={`testimonial-arrow-btn ${
                    !canScrollNext ? "disabled" : ""
                  }`}
                  aria-label="Scroll to next testimonials"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Horizontal Carousel Track */}
        <div className="testimonials-track-container">
          <div className="testimonials-track" ref={trackRef}>
            {filteredItems.map((item, index) => {
              const isVideo = item.type === "video";

              return (
                <article
                  key={item.id}
                  className={`testimonial-column ${
                    isVideo ? "is-video-testimonial" : "is-text-testimonial"
                  }`}
                  style={{ "--item-index": index } as React.CSSProperties}
                >
                  {/* Portrait Media Area */}
                  <div className="testimonial-portrait-wrap">
                    <div className="testimonial-chevron-frame">
                      <img
                        src={item.image}
                        alt={`${item.name} - ${item.company}`}
                        className="testimonial-portrait-img"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to default portrait if missing
                          (e.currentTarget as HTMLImageElement).src =
                            "/testimonials/eyass.png";
                        }}
                      />

                      {/* Video Indicator & Interactive Play Trigger */}
                      {isVideo && (
                        <div
                          className="testimonial-video-overlay"
                          onClick={() => {
                            setActiveVideoModal(item);
                            setIsPlaying(true);
                          }}
                          role="button"
                          tabIndex={0}
                          aria-label={`Play video testimonial from ${item.name}`}
                        >
                          <div className="testimonial-play-badge">
                            <span className="play-triangle-icon">▶</span>
                          </div>

                          <div className="testimonial-duration-chip">
                            <span className="pulse-recording-dot" />
                            <span>{item.videoDuration}</span>
                          </div>
                        </div>
                      )}

                      {/* Text Testimonial Verified Badge */}
                      {!isVideo && (
                        <div className="testimonial-verified-chip">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#059669"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Client Identification */}
                  <div className="testimonial-author-block">
                    <h3 className="testimonial-author-name">{item.name}</h3>
                    <p className="testimonial-author-role">{item.role}</p>
                  </div>

                  {/* Main Quote */}
                  <blockquote className="testimonial-quote-block">
                    <span className="testimonial-quote-arrow">→</span>{" "}
                    <span className="testimonial-quote-text">
                      “{item.quote}”
                    </span>
                  </blockquote>

                  {/* Video Watch Prompt / Extended Snippet */}
                  {isVideo ? (
                    <button
                      type="button"
                      className="testimonial-watch-cta"
                      onClick={() => {
                        setActiveVideoModal(item);
                        setIsPlaying(true);
                      }}
                    >
                      <span className="watch-cta-icon">▶</span>
                      <span>Watch Story ({item.videoDuration})</span>
                    </button>
                  ) : (
                    <div className="testimonial-metric-snippet">
                      <span className="metric-snippet-tag">
                        ★ {item.metric}
                      </span>
                    </div>
                  )}

                  {/* Bottom Company Tag */}
                  <div className="testimonial-company-footer">
                    <span className="testimonial-company-name">
                      {item.company}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {/* Video Testimonial Interactive Modal Player */}
      {activeVideoModal && (
        <div
          className="testimonial-modal-backdrop"
          onClick={() => setActiveVideoModal(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div
            className="testimonial-modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-top-bar">
              <div className="modal-client-meta">
                <span className="modal-company-badge">
                  {activeVideoModal.company}
                </span>
                <h4 id="video-modal-title" className="modal-title">
                  {activeVideoModal.videoTopic || activeVideoModal.name}
                </h4>
              </div>

              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close video player"
              >
                ✕
              </button>
            </div>

            {/* Video Player Display */}
            <div className="modal-video-stage">
              {/* Synthetic High-Tech Video Screen Simulation */}
              <div className="video-player-screen">
                <div className="video-canvas-backdrop">
                  <img
                    src={activeVideoModal.image}
                    alt={activeVideoModal.name}
                    className="video-stage-poster"
                  />
                  <div className="video-stage-gradient-overlay" />
                </div>

                {/* Subtitle / Key Quote Overlay */}
                <div className="video-live-caption-bar">
                  <div className="caption-tag">
                    <span className="caption-speaker">
                      {activeVideoModal.name}
                    </span>
                    <span className="caption-live-indicator">LIVE QA</span>
                  </div>
                  <p className="caption-quote-line">
                    “{activeVideoModal.quote}”
                  </p>
                </div>

                {/* Waveform Sound Visualizer (Active when playing) */}
                <div className="video-waveform-container" aria-hidden="true">
                  <span className={`wave-bar b1 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b2 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b3 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b4 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b5 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b6 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b7 ${isPlaying ? "active" : ""}`} />
                  <span className={`wave-bar b8 ${isPlaying ? "active" : ""}`} />
                </div>

                {/* Big Center Play/Pause Indicator if toggled */}
                <button
                  type="button"
                  className="video-center-toggle"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  <span className="center-icon">
                    {isPlaying ? "❚❚" : "▶"}
                  </span>
                </button>
              </div>

              {/* Player Controls Bar */}
              <div className="video-controls-bar">
                <button
                  type="button"
                  className="control-play-btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? "❚❚" : "▶"}
                </button>

                {/* Time Scrubber Track */}
                <div className="scrubber-track">
                  <div
                    className={`scrubber-fill ${isPlaying ? "playing" : ""}`}
                  />
                </div>

                <div className="time-display">
                  <span>{isPlaying ? "0:42" : "0:00"}</span>
                  <span className="time-separator">/</span>
                  <span>{activeVideoModal.videoDuration}</span>
                </div>

                <div className="controls-right-group">
                  <span className="audio-badge">HD • 1080p</span>
                </div>
              </div>
            </div>

            {/* Modal Case Brief Bottom Panel */}
            <div className="modal-summary-panel">
              <div className="modal-author-avatar-row">
                <img
                  src={activeVideoModal.image}
                  alt={activeVideoModal.name}
                  className="modal-author-pic"
                />
                <div>
                  <h5 className="modal-author-name">
                    {activeVideoModal.name}
                  </h5>
                  <p className="modal-author-sub">
                    {activeVideoModal.role} · {activeVideoModal.company}
                  </p>
                </div>
              </div>

              <p className="modal-extended-text">
                {activeVideoModal.extendedStory}
              </p>

              {activeVideoModal.metric && (
                <div className="modal-metric-badge">
                  <span className="modal-metric-star">★ Verified Impact:</span>{" "}
                  <strong>{activeVideoModal.metric}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
