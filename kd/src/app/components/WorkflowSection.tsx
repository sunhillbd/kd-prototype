"use client";

import React, { useState } from "react";

interface PipelineStage {
  id: string;
  step: string;
  tag: string;
  title: string;
  summary: string;
  accent: string;
  badgeBg: string;
  badgeColor: string;
  metric: string;
  metricLabel: string;
  widgetType: "ast" | "contract" | "parallel" | "audit";
}

const pipelineStages: PipelineStage[] = [
  {
    id: "context",
    step: "01",
    tag: "INGESTION",
    title: "Context & Codebase Mapping",
    summary: "Indexes AST trees, dependency graphs, and schema contracts in seconds to eliminate guesswork.",
    accent: "#8B80F9",
    badgeBg: "rgba(139, 128, 249, 0.12)",
    badgeColor: "#6A5EE8",
    metric: "60 min → 3 min",
    metricLabel: "Context gathering speed",
    widgetType: "ast",
  },
  {
    id: "spec",
    step: "02",
    tag: "PLANNING",
    title: "Spec-Driven Architecture",
    summary: "Decomposes complex requirements into atomic tasks and strict type contracts before writing any code.",
    accent: "#0284C7",
    badgeBg: "rgba(2, 132, 199, 0.12)",
    badgeColor: "#0284C7",
    metric: "1–2 days → 15 min",
    metricLabel: "Backlog & spec turnaround",
    widgetType: "contract",
  },
  {
    id: "execution",
    step: "03",
    tag: "SYNTHESIS",
    title: "Autonomous Agentic Build",
    summary: "Spawns parallel subagents in isolated sandboxes to implement logic and verify unit suites.",
    accent: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    badgeColor: "#D97706",
    metric: "3× Faster",
    metricLabel: "Feature delivery velocity",
    widgetType: "parallel",
  },
  {
    id: "audit",
    step: "04",
    tag: "VERIFICATION",
    title: "Senior Staff Engineer Gate",
    summary: "100% human-verified quality assurance. Senior engineers audit diffs, architecture, and security.",
    accent: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    badgeColor: "#059669",
    metric: "Zero Regressions",
    metricLabel: "Enterprise audit standard",
    widgetType: "audit",
  },
];

export default function WorkflowSection() {
  const [activeStageId, setActiveStageId] = useState<string>("context");

  const activeStage = pipelineStages.find((s) => s.id === activeStageId) || pipelineStages[0];

  return (
    <section className="workflow-section" id="ai-framework">
      <div className="content-wrapper">
        {/* Section Header Top */}
        <div className="workflow-header-top">
          <div className="workflow-tag-row">
            <span className="workflow-pill-tag">
              AUTONOMOUS ENGINEERING LIFECYCLE
            </span>
          </div>

          <div className="workflow-divider-line" />

          <div className="workflow-title-row">
            <h2 className="workflow-main-title">
              Engineered with AI.{" "}
              <span className="highlight-gold">
                Audited &amp; signed off by senior engineers.
              </span>
            </h2>
            <p className="workflow-subtitle">
              A bespoke 4-stage delivery pipeline connecting automated context ingestion,
              type-safe specification, parallel agent synthesis, and human-in-the-loop audit gates.
            </p>
          </div>
        </div>

        {/* Custom Visual Pipeline Board */}
        <div className="bespoke-pipeline-board">
          {/* Ambient luminous glow backdrops */}
          <div className="pipeline-ambient-mesh" aria-hidden="true">
            <div className="pipeline-glow glow-1" />
            <div className="pipeline-glow glow-2" />
          </div>

          {/* Connected SVG Flow Ribbon */}
          <div className="pipeline-conduit-strip" aria-hidden="true">
            <svg width="100%" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
              <line
                x1="40"
                y1="12"
                x2="960"
                y2="12"
                stroke="rgba(0, 0, 0, 0.08)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <line
                x1="40"
                y1="12"
                x2="960"
                y2="12"
                stroke="url(#pipelineFlowGradient)"
                strokeWidth="2.5"
                className="animated-pulse-line"
              />
              <defs>
                <linearGradient id="pipelineFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B80F9" stopOpacity="0.9" />
                  <stop offset="35%" stopColor="#0284C7" stopOpacity="0.9" />
                  <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.9" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 4 Spacious Pipeline Stage Cards */}
          <div className="pipeline-cards-grid">
            {pipelineStages.map((stage, idx) => {
              const isActive = stage.id === activeStageId;

              return (
                <div
                  key={stage.id}
                  className={`pipeline-stage-card ${isActive ? "active-stage" : ""}`}
                  onClick={() => setActiveStageId(stage.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveStageId(stage.id);
                    }
                  }}
                  aria-label={`Select stage ${stage.step}: ${stage.title}`}
                >
                  {/* Stage Top Meta */}
                  <div className="stage-card-header">
                    <span
                      className="stage-num-badge"
                      style={{ color: stage.accent, borderColor: stage.accent }}
                    >
                      {stage.step}
                    </span>
                    <span
                      className="stage-tag-badge"
                      style={{ backgroundColor: stage.badgeBg, color: stage.badgeColor }}
                    >
                      {stage.tag}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="stage-card-title">{stage.title}</h3>
                  <p className="stage-card-summary">{stage.summary}</p>

                  {/* Stage Visual Graphic Mini-Widget */}
                  <div className="stage-widget-container">
                    {/* Widget 1: AST & Dependency Ingestion */}
                    {stage.widgetType === "ast" && (
                      <div className="widget-box widget-ast">
                        <div className="ast-node-row">
                          <span className="ast-pill pill-repo">
                            <span className="dot-icon">●</span> Repositories
                          </span>
                          <span className="ast-connector">→</span>
                          <span className="ast-pill pill-graph">
                            <span className="dot-icon">⚡</span> AST Graph
                          </span>
                        </div>
                        <div className="ast-status-foot">
                          <span className="code-badge">12,400+ nodes mapped</span>
                        </div>
                      </div>
                    )}

                    {/* Widget 2: Spec-Driven Contract */}
                    {stage.widgetType === "contract" && (
                      <div className="widget-box widget-contract">
                        <div className="code-snippet-box">
                          <span className="code-line keyword">interface TargetSpec &#123;</span>
                          <span className="code-line indent prop">schema: StrictTypes;</span>
                          <span className="code-line indent prop">audit: "Zero Ambiguity";</span>
                          <span className="code-line keyword">&#125;</span>
                        </div>
                        <div className="ast-status-foot">
                          <span className="code-badge verified">✓ Typed Contracts</span>
                        </div>
                      </div>
                    )}

                    {/* Widget 3: Parallel Agentic Execution */}
                    {stage.widgetType === "parallel" && (
                      <div className="widget-box widget-parallel">
                        <div className="thread-list">
                          <div className="thread-item">
                            <span className="thread-bullet">●</span>
                            <span className="thread-name">Core Logic</span>
                            <span className="thread-tag ok">Pass</span>
                          </div>
                          <div className="thread-item">
                            <span className="thread-bullet">●</span>
                            <span className="thread-name">UI System</span>
                            <span className="thread-tag ok">Ready</span>
                          </div>
                          <div className="thread-item">
                            <span className="thread-bullet">●</span>
                            <span className="thread-name">Unit Tests</span>
                            <span className="thread-tag ok">100%</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Widget 4: Senior Staff Audit Gate */}
                    {stage.widgetType === "audit" && (
                      <div className="widget-box widget-audit">
                        <div className="audit-shield-box">
                          <span className="shield-symbol">🛡️</span>
                          <div className="audit-labels">
                            <span className="audit-main">Staff Engineer Gate</span>
                            <span className="audit-sub">Full diff &amp; security review</span>
                          </div>
                        </div>
                        <div className="ast-status-foot">
                          <span className="code-badge green-badge">✓ Signed Off &amp; Merged</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Stage Bottom Metric */}
                  <div className="stage-card-footer">
                    <span className="stage-metric-val" style={{ color: stage.accent }}>
                      {stage.metric}
                    </span>
                    <span className="stage-metric-label">{stage.metricLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Core Pillars Below the Diagram */}
        <div className="workflow-pillars-row">
          {/* Pillar 01 */}
          <div className="workflow-pillar-col">
            <div className="pillar-num-badge">
              <svg viewBox="0 0 10 25" className="pillar-bracket" fill="currentColor">
                <path d="M10 21.035 0 25V0l10 3.896z" />
              </svg>
              <span className="pillar-num">01</span>
            </div>
            <div className="pillar-content">
              <h4 className="pillar-title">Full lifecycle agent orchestration</h4>
              <p className="pillar-desc">
                An integrated autonomous pipeline from context gathering to automated test suites.
                Not an ad-hoc collection of chat prompts.
              </p>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="workflow-pillar-col">
            <div className="pillar-num-badge">
              <svg viewBox="0 0 10 25" className="pillar-bracket" fill="currentColor">
                <path d="M10 21.035 0 25V0l10 3.896z" />
              </svg>
              <span className="pillar-num">02</span>
            </div>
            <div className="pillar-content">
              <h4 className="pillar-title">Speed up where teams lose time</h4>
              <p className="pillar-desc">
                Average lead time reduced by up to 40%. Backlog creation from 1–2 days
                to 15 minutes. Context discovery in under 3 minutes.
              </p>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="workflow-pillar-col">
            <div className="pillar-num-badge">
              <svg viewBox="0 0 10 25" className="pillar-bracket" fill="currentColor">
                <path d="M10 21.035 0 25V0l10 3.896z" />
              </svg>
              <span className="pillar-num">03</span>
            </div>
            <div className="pillar-content">
              <h4 className="pillar-title">Zero slop. Senior staff verification</h4>
              <p className="pillar-desc">
                Proven on mission-critical products with continuous automated testing and senior
                engineer approval at every release milestone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
