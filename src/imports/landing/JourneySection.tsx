import React, { useState } from "react";
import { At, DesignCanvas, Txt } from "@/components/ui/DesignCanvas";

// Coded version of the old journey.png export (1920 x 1511 design px).

const HEADING: React.CSSProperties = {
  fontFamily: "Archivo, sans-serif",
  fontStretch: "112.5%",
  fontWeight: 730,
  letterSpacing: 0.8,
  color: "#101010",
};
const BLUE: React.CSSProperties = { fontFamily: "Martel, serif", fontWeight: 800, color: "#2d6dc3" };
const BODY: React.CSSProperties = { fontFamily: "Martel, serif", color: "#101010" };

// [title, internship tag x (if any), date, description, heading cap top, description top, date right edge, description size]
const ENTRIES: [string, number | null, string, string, number, number, number?, number?][] = [
  ["Zeux | Andhra Pradesh Grameen Bank", 891, "June-August 2026", "Redesigned the bank's website, net banking, and mobile banking into one consistent, easier-to-use experience.", 320, 376],
  ["Zeux | Cibil", 365, "June-August 2026", "Audited CIBIL's website, dashboard, mobile app, & PDFs against WCAG 2.1.", 479, 536],
  ["Bazarghorr", 389, "Sept 2025- Feb 2026", "Designed a scalable, no-inventory grocery delivery app for small-town commerce.", 642, 696],
  ["MentorMe", 360, "May-July 2025", "Created a comprehensive brand identity system establishing logo, typography, and color guidelines.", 801, 856],
  ["Buildmystore", 412, "March-May 2025", "An all-in-one ecommerce platform for launching and managing online stores.", 960, 1014],
  ["Cyber Cypher Hackathon, Nmims Mumbai", null, "February 2025", "A platform bridging startup founders with industry experts for mentorship and support.", 1119, 1173],
  ["Winner of Global Game Jam", null, "January 2025", "Designed a board game, MythBursters, during a 48-hour international game jam themed “Bubbles.”", 1278, 1332],
  ["Winner of Kriti Hackathon, NIT Patna", null, "September 2024", "Designed Furnico, a furniture shopping app using AR/VR to visualize products in real environments.", 1436, 1491, 1787, 17.9],
];

const VISIBLE = 5;

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);
  const entries = expanded ? ENTRIES : ENTRIES.slice(0, VISIBLE);
  return (
    <DesignCanvas width={1920} height={expanded ? 1511 : 1200}>
      <At x={0} y={0} w={1920} h={1430} style={{ background: "#fefcf4" }} />
      <Txt x={965} y={109} size={56.5} k={0.145} align="center" style={{ ...HEADING, fontWeight: 750, letterSpacing: 0 }}>
        JOURNEY
      </Txt>
      <Txt x={959.5} y={192} size={22.2} k={0.025} align="center" style={{ ...BLUE, fontWeight: 700 }}>
        Somewhere between logic and exploration, that’s where my design journey lives.
      </Txt>
      {entries.map(([title, tagX, date, desc, y, dy, right = 1773, descSize = 19.9]) => (
        <div key={title}>
          <Txt x={138} y={y + 2} size={34} k={0.145} style={HEADING}>
            {title}
          </Txt>
          {tagX !== null && (
            <Txt x={tagX} y={y + 7} size={19.8} k={0.025} style={BLUE}>
              (internship)
            </Txt>
          )}
          <Txt x={right + 1} y={y + 6} size={25} k={0.025} align="right" style={BLUE}>
            {date}
          </Txt>
          <Txt x={140} y={dy + 1} size={descSize} k={0.025} style={BODY}>
            {desc}
          </Txt>
        </div>
      ))}
      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          style={{
            position: "absolute",
            left: 960,
            top: 1105,
            transform: "translateX(-50%)",
            padding: "16px 44px",
            borderRadius: 60,
            border: "2px solid #2d6dc3",
            background: "transparent",
            cursor: "pointer",
            ...BLUE,
            fontSize: 24,
          }}
        >
          Show more
        </button>
      )}
    </DesignCanvas>
  );
}
