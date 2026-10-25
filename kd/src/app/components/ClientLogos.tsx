"use client";

import React from "react";
import Image from "next/image";

interface LogoItem {
  name: string;
  src: string;
  width: number;
  height: number;
  scale?: number;
}

const clientLogos: LogoItem[] = [
  // Row 1
  {
    name: "Continental",
    src: "/logos/continental.png",
    width: 137,
    height: 26,
  },
  {
    name: "Hagerty",
    src: "/logos/hagerty.png",
    width: 103,
    height: 19,
  },
  {
    name: "FT Strategies",
    src: "/logos/ft.png",
    width: 135,
    height: 28,
  },
  {
    name: "Wren Kitchens",
    src: "/logos/wren.svg",
    width: 128,
    height: 22,
  },
  {
    name: "Bakkt",
    src: "/logos/bakkt.svg",
    width: 108,
    height: 30,
  },

  // Row 2
  {
    name: "Mr & Mrs Smith",
    src: "/logos/mrmrssmith.svg",
    width: 117,
    height: 42,
  },
  {
    name: "Pets4Homes",
    src: "/logos/pets4home.svg",
    width: 144,
    height: 57,
  },
  {
    name: "xpate",
    src: "/logos/xpate.png",
    width: 73,
    height: 22,
  },
  {
    name: "AWS Advanced Partner",
    src: "/logos/aws-partner.png",
    width: 126,
    height: 36,
  },
  {
    name: "Adyen",
    src: "/logos/adyen.png",
    width: 91,
    height: 30,
  },
];

export default function ClientLogos() {
  return (
    <section className="client-logos-section" id="clients">
      {/* Background ambient gradient matching hero bottom that fades out smoothly */}
      <div className="client-logos-bg-gradient" aria-hidden="true" />
      <div className="content-wrapper">
        {/* Caption Header */}
        <div className="client-logos-header">
          <p className="client-logos-caption">
            160+ PRODUCT TEAMS → FROM SCALE-UPS TO FORTUNE 500
          </p>
        </div>

        {/* 5x2 Grid */}
        <div className="client-logos-grid" role="list">
          {clientLogos.map((logo, index) => {
            const isRow1 = index < 5;
            const isLastInRow = index % 5 === 4;

            return (
              <div
                key={logo.name}
                className={`logo-cell ${isRow1 ? "cell-row-1" : "cell-row-2"} ${
                  isLastInRow ? "cell-last-col" : "cell-mid-col"
                }`}
                role="listitem"
              >
                <div className="logo-inner">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="client-logo-img"
                    style={{
                      maxHeight: "36px",
                      width: "auto",
                      maxWidth: "150px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
