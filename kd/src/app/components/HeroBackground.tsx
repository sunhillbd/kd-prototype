"use client";

import React from "react";

interface HeroBackgroundProps {
  mouseOffset: { x: number; y: number };
}

export default function HeroBackground({ mouseOffset }: HeroBackgroundProps) {
  return (
    <div className="hero-bg-stage" aria-hidden="true">
      <svg
        className="hero-custom-canvas"
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Ambient Blurred Background Lights */}
          <filter id="bg-glow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="95" result="blur" />
          </filter>
          <filter id="glass-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="-25" dy="35" stdDeviation="30" floodColor="#1e293b" floodOpacity="0.04" />
          </filter>
          <filter id="glass-shadow-deep" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="-40" dy="50" stdDeviation="45" floodColor="#0f172a" floodOpacity="0.06" />
          </filter>

          {/* Ambient Glow Gradients */}
          <linearGradient id="glow-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDEB5" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFC27A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFA07A" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="glow-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D8B4F8" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#B4A8FF" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#B8B4F6" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="glow-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7EE0FF" stopOpacity="0.8" />
            <stop offset="55%" stopColor="#3B82F6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>

          {/* Glass Panels Gradients */}
          {/* Slab 1: Warm Amber Gold */}
          <linearGradient id="slab-amber-fill" x1="0%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#FFECCC" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#FFC988" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="slab-amber-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFE0B2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          {/* Slab 2: Champagne & Soft Peach */}
          <linearGradient id="slab-champagne-fill" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#FFF3E0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFD180" stopOpacity="0.04" />
          </linearGradient>

          {/* Slab 3: Soft Lavender / Lilac */}
          <linearGradient id="slab-lavender-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#E9D5FF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="slab-lavender-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#E9D5FF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
          </linearGradient>

          {/* Slab 4: Central Periwinkle Prismatic Blade */}
          <linearGradient id="slab-periwinkle-fill" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.38" />
            <stop offset="50%" stopColor="#C7D2FE" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#818CF8" stopOpacity="0.04" />
          </linearGradient>

          {/* Slab 5: Luminous Cyan/Sky Blue Monolith */}
          <linearGradient id="slab-cyan-fill" x1="0%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="40%" stopColor="#BAE6FD" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="slab-cyan-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          {/* Slab 6: Deep Azure & Cobalt Wing */}
          <linearGradient id="slab-azure-fill" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#BFDBFE" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.04" />
          </linearGradient>

          {/* Slab 7: Far-Right Horizon Slice */}
          <linearGradient id="slab-horizon-fill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#DBEAFE" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* 1. LAYER 1: Ambient Luminous Mesh Gradients */}
        <g filter="url(#bg-glow-blur)">
          {/* Warm Amber/Gold Light on Left */}
          <ellipse cx="220" cy="240" rx="420" ry="340" fill="url(#glow-gold)" />
          {/* Ethereal Orchid/Violet Light in Center */}
          <ellipse cx="780" cy="180" rx="460" ry="380" fill="url(#glow-violet)" />
          {/* Radiant Azure & Cyan Light on Right */}
          <ellipse cx="1320" cy="220" rx="480" ry="360" fill="url(#glow-cyan)" />
          {/* Soft Upper Highlights */}
          <circle cx="1060" cy="90" r="280" fill="#BAE6FD" fillOpacity="0.35" />
          <circle cx="480" cy="80" r="260" fill="#FED7AA" fillOpacity="0.3" />
          {/* Bottom Ambient Glows to enrich bottom gradient and transition */}
          <ellipse cx="200" cy="880" rx="420" ry="260" fill="url(#glow-gold)" opacity="0.8" />
          <ellipse cx="1380" cy="880" rx="450" ry="260" fill="url(#glow-cyan)" opacity="0.8" />
          <ellipse cx="780" cy="900" rx="380" ry="180" fill="url(#glow-violet)" opacity="0.4" />
        </g>

        {/* 2. LAYER 2: Background Glass Geometry (Subtle slow float) */}
        <g
          className="bg-layer-deep"
          style={{
            transform: `translate(${mouseOffset.x * 0.15}px, ${mouseOffset.y * 0.15}px)`,
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Deep Plane Left */}
          <polygon
            points="-60,40 220,-80 290,480 10,600"
            fill="url(#slab-champagne-fill)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="0.8"
            className="animate-plane-deep"
          />

          {/* Deep Plane Center-Lavender */}
          <polygon
            points="460,-120 780,-260 840,420 520,560"
            fill="url(#slab-lavender-fill)"
            stroke="url(#slab-lavender-stroke)"
            strokeWidth="1"
            className="animate-plane-mid"
          />

          {/* Deep Plane Right-Azure */}
          <polygon
            points="1140,-100 1480,-240 1540,460 1200,600"
            fill="url(#slab-horizon-fill)"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="0.8"
            className="animate-plane-deep"
          />
        </g>

        {/* 3. LAYER 3: Prominent Foreground Glass Slabs (Architectural Monoliths) */}
        <g
          className="bg-layer-fore"
          style={{
            transform: `translate(${mouseOffset.x * 0.35}px, ${mouseOffset.y * 0.35}px)`,
            transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Slab 1: Tilted Amber Monolith (Left) */}
          <g filter="url(#glass-shadow)" className="animate-plane-float-1">
            <polygon
              points="15,160 310,20 375,620 80,760"
              fill="url(#slab-amber-fill)"
              stroke="url(#slab-amber-stroke)"
              strokeWidth="1.2"
            />
            {/* Luminous Inner Reflection Line */}
            <line
              x1="310"
              y1="20"
              x2="375"
              y2="620"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeOpacity="0.8"
            />
          </g>

          {/* Slab 2: Central Tall Glass Blade (Center-Left) */}
          <g filter="url(#glass-shadow-deep)" className="animate-plane-float-2">
            <polygon
              points="340,60 580,-40 635,520 395,620"
              fill="url(#slab-lavender-fill)"
              stroke="url(#slab-lavender-stroke)"
              strokeWidth="1.2"
            />
            {/* Specular Edge Highlight */}
            <line
              x1="580"
              y1="-40"
              x2="635"
              y2="520"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeOpacity="0.75"
            />
          </g>

          {/* Slab 3: Central Prismatic Monolith (Center) */}
          <g filter="url(#glass-shadow)" className="animate-plane-float-3">
            <polygon
              points="600,-30 860,-150 915,450 655,570"
              fill="url(#slab-periwinkle-fill)"
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.2"
            />
            <line
              x1="860"
              y1="-150"
              x2="915"
              y2="450"
              stroke="#FFFFFF"
              strokeWidth="1.8"
              strokeOpacity="0.85"
            />
          </g>

          {/* Slab 4: Radiant Cyan Crystal Slab (Center-Right) */}
          <g filter="url(#glass-shadow-deep)" className="animate-plane-float-1">
            <polygon
              points="840,-60 1140,-190 1205,430 905,560"
              fill="url(#slab-cyan-fill)"
              stroke="url(#slab-cyan-stroke)"
              strokeWidth="1.4"
            />
            <line
              x1="1140"
              y1="-190"
              x2="1205"
              y2="430"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeOpacity="0.9"
            />
          </g>

          {/* Slab 5: Azure Geometric Wing (Right) */}
          <g filter="url(#glass-shadow)" className="animate-plane-float-2">
            <polygon
              points="1100,40 1420,-100 1485,510 1165,650"
              fill="url(#slab-azure-fill)"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.2"
            />
            <line
              x1="1420"
              y1="-100"
              x2="1485"
              y2="510"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeOpacity="0.8"
            />
          </g>

          {/* Slab 6: Far-Right Subtle Glass Panel */}
          <g filter="url(#glass-shadow)" className="animate-plane-float-3">
            <polygon
              points="1360,110 1640,-10 1695,570 1415,690"
              fill="url(#slab-horizon-fill)"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="1"
            />
          </g>
        </g>

        {/* 4. Subtle Architectural Geometric Accent Lines / Refractions */}
        <g stroke="rgba(255,255,255,0.35)" strokeWidth="0.75" strokeDasharray="3 3">
          <line x1="180" y1="0" x2="380" y2="900" />
          <line x1="680" y1="0" x2="880" y2="900" />
          <line x1="1180" y1="0" x2="1380" y2="900" />
        </g>
      </svg>
    </div>
  );
}
