"use client";

import React, { useState } from "react";

export default function StatementSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="statement-section" id="value-statement">
      {/* Ambient Gradient Background */}
      <div className="statement-bg-gradient" aria-hidden="true">
        <img
          src="/typewriter-gradient-bg.svg"
          alt=""
          className="statement-bg-img"
        />
      </div>

      <div className="content-wrapper relative z-10">
        <div className="statement-content-box">
          <h2 className="statement-headline">
            <span className="statement-dark">→ We help CTOs and product teams </span>

            {/* Keyword 1: scale fast */}
            <span
              className="keyword-interactive keyword-lavender"
              onMouseEnter={() => setActiveTooltip("scale")}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() =>
                setActiveTooltip(activeTooltip === "scale" ? null : "scale")
              }
              role="button"
              tabIndex={0}
            >
              <span className="keyword-text">scale fast</span>
              <span className="keyword-badge" aria-hidden="true">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 40 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="badge-svg"
                >
                  <path
                    fill="#B5B4FF"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0v46l13.916-5.086V46l20.083-7.34V7.014L13.917 0v4.86z"
                  />
                  <path
                    fill="#444849"
                    d="m10.195 27.89 5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.08c-.67-.46-1.58.01-1.58.82v8.14c0 .81.91 1.28 1.58.82m7.42-8.96v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81"
                  />
                </svg>
              </span>
              {activeTooltip === "scale" && (
                <span className="statement-tooltip">
                  <b>Scale Fast</b>: Deploy dedicated senior engineering squads in under 14 days.
                </span>
              )}
            </span>

            <span className="statement-dark"> when opportunity hits, </span>

            {/* Keyword 2: unblock delivery */}
            <span
              className="keyword-interactive keyword-peach"
              onMouseEnter={() => setActiveTooltip("unblock")}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() =>
                setActiveTooltip(activeTooltip === "unblock" ? null : "unblock")
              }
              role="button"
              tabIndex={0}
            >
              <span className="keyword-text">unblock delivery</span>
              <span className="keyword-badge" aria-hidden="true">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 40 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="badge-svg"
                >
                  <path
                    fill="#FFCE85"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0v46l13.916-5.086V46l20.083-7.34V7.014L13.917 0v4.86z"
                  />
                  <path
                    fill="#444849"
                    d="M20.667 20.25h3.666v10.083h-3.666zm-5.5-4.583h3.666v14.666h-3.666zM9.667 23h3.666v7.333H9.667z"
                  />
                </svg>
              </span>
              {activeTooltip === "unblock" && (
                <span className="statement-tooltip">
                  <b>Unblock Delivery</b>: Resolve architectural bottlenecks and clear critical sprint backlogs.
                </span>
              )}
            </span>

            <span className="statement-dark"> , and </span>

            {/* Keyword 3: ship new ideas */}
            <span
              className="keyword-interactive keyword-sky"
              onMouseEnter={() => setActiveTooltip("ship")}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() =>
                setActiveTooltip(activeTooltip === "ship" ? null : "ship")
              }
              role="button"
              tabIndex={0}
            >
              <span className="keyword-text">ship new ideas</span>
              <span className="keyword-badge" aria-hidden="true">
                <svg
                  width="28"
                  height="38"
                  viewBox="0 0 40 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="badge-svg"
                >
                  <path
                    fill="#8DD4FF"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0v46l13.916-5.086V46l20.083-7.34V7.014L13.917 0v4.86z"
                  />
                  <path
                    fill="#444849"
                    d="M22.583 23.333a5 5 0 0 0-.716-.333c.241-.092.483-.2.716-.333a5.01 5.01 0 0 0 2.5-4.325 5 5 0 0 0-5 0c-.233.133-.45.291-.65.45q.065-.39.067-.792a5 5 0 0 0-2.5-4.325A5 5 0 0 0 14.5 18c0 .267.025.533.067.792a4.5 4.5 0 0 0-.65-.459 5 5 0 0 0-5 0c0 1.725.891 3.4 2.5 4.325.233.134.475.242.716.334-.241.091-.483.2-.716.333a5.01 5.01 0 0 0-2.5 4.325 5 5 0 0 0 5 0c.233-.133.45-.292.65-.45a5 5 0 0 0-.067.8 5 5 0 0 0 2.5 4.325A5 5 0 0 0 19.5 28q-.002-.402-.067-.792.3.25.65.45c1.6.925 3.5.859 5 0a5.01 5.01 0 0 0-2.5-4.325m-5.583 3a3.332 3.332 0 1 1 0-6.666 3.332 3.332 0 1 1 0 6.666"
                  />
                </svg>
              </span>
              {activeTooltip === "ship" && (
                <span className="statement-tooltip">
                  <b>Ship New Ideas</b>: Prototype, validate, and launch AI-native products faster.
                </span>
              )}
            </span>

            <span className="statement-dark"> without stretching the team</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
