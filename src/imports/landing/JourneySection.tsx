import React, { useRef, useState } from "react";
import { DesignCanvas, Txt } from "@/components/ui/DesignCanvas";

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

// [title, internship tag x (if any), date, description, heading cap top, description top]
const ENTRIES: [string, number | null, string, string, number, number][] = [
  ["Zeux | Andhra Pradesh Grameen Bank", 891, "June-August 2026", "Redesigned the bank's website, net banking, and mobile banking into one consistent, easier-to-use experience.", 320, 376],
  ["Zeux | Cibil", 365, "June-August 2026", "Audited CIBIL's website, dashboard, mobile app, & PDFs against WCAG 2.1.", 479, 536],
  ["Bazarghorr", 389, "Sept 2025- Feb 2026", "Designed a scalable, no-inventory grocery delivery app for small-town commerce.", 642, 696],
  ["MentorMe", 360, "May-July 2025", "Created a comprehensive brand identity system establishing logo, typography, and color guidelines.", 801, 856],
  ["Buildmystore", 412, "March-May 2025", "An all-in-one ecommerce platform for launching and managing online stores.", 960, 1014],
  ["Cyber Cypher Hackathon, Nmims Mumbai", null, "February 2025", "A platform bridging startup founders with industry experts for mentorship and support.", 1119, 1173],
  ["Winner of Global Game Jam", null, "January 2025", "Designed a board game, MythBursters, during a 48-hour international game jam themed “Bubbles.”", 1278, 1332],
  ["Winner of Kriti Hackathon, NIT Patna", null, "September 2024", "Designed Furnico, a furniture shopping app using AR/VR to visualize products in real environments.", 1437, 1491],
];

const VISIBLE = 5;
// Design-pixel rows: entries 1-5 end above SPLIT, entries 6-8 live in a collapsible band.
const SPLIT = 1090;
const MORE_H = 480;
const EASE = "520ms cubic-bezier(0.22, 1, 0.36, 1)";

function Entry({ entry: [title, tagX, date, desc, y, dy], offset = 0 }: { entry: (typeof ENTRIES)[number]; offset?: number }) {
  return (
    <>
      <Txt x={138} y={y - offset + 2} size={34} k={0.145} style={HEADING}>
        {title}
      </Txt>
      {tagX !== null && (
        <Txt x={tagX} y={y - offset + 7} size={19.8} k={0.025} style={BLUE}>
          (internship)
        </Txt>
      )}
      <Txt x={1774} y={y - offset + 6} size={25} k={0.025} align="right" style={BLUE}>
        {date}
      </Txt>
      <Txt x={140} y={dy - offset + 1} size={19.9} k={0.025} style={BODY}>
        {desc}
      </Txt>
    </>
  );
}

function scrollParent(el: HTMLElement | null): HTMLElement | null {
  for (let p = el?.parentElement; p; p = p.parentElement) {
    if (/(auto|scroll)/.test(getComputedStyle(p).overflowY) && p.scrollHeight > p.clientHeight) return p;
  }
  return null;
}

export default function JourneySection() {
  const [expanded, setExpanded] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const el = moreRef.current;
    const scroller = el && (scrollParent(el) ?? document.scrollingElement);
    if (expanded && el && scroller) {
      // While collapsing, scroll up by exactly the height removed each frame so the button stays under the cursor.
      const h0 = el.getBoundingClientRect().height;
      const top0 = scroller.scrollTop;
      const start = performance.now();
      const follow = () => {
        scroller.scrollTop = top0 - (h0 - el.getBoundingClientRect().height);
        if (performance.now() - start < 700) requestAnimationFrame(follow);
      };
      requestAnimationFrame(follow);
    }
    setExpanded(!expanded);
  };

  return (
    <div>
      <DesignCanvas width={1920} height={SPLIT}>
        <Txt x={965} y={109} size={56.5} k={0.145} align="center" style={{ ...HEADING, fontWeight: 750, letterSpacing: 0 }}>
          JOURNEY
        </Txt>
        <Txt x={959.5} y={192} size={22.2} k={0.025} align="center" style={{ ...BLUE, fontWeight: 700 }}>
          Somewhere between logic and exploration, that’s where my design journey lives.
        </Txt>
        {ENTRIES.slice(0, VISIBLE).map((e) => (
          <Entry key={e[0]} entry={e} />
        ))}
      </DesignCanvas>

      {/* Accordion-style height animation: grid row 0fr -> 1fr. */}
      <div
        ref={moreRef}
        aria-hidden={!expanded}
        className="journey-more"
        style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr", transition: `grid-template-rows ${EASE}` }}
      >
        <div style={{ overflow: "hidden", minHeight: 0 }}>
          <div
            className="journey-more"
            style={{
              opacity: expanded ? 1 : 0,
              transform: expanded ? "none" : "translateY(-24px)",
              transition: `opacity ${EASE}, transform ${EASE}`,
              visibility: expanded ? "visible" : "hidden",
              transitionProperty: "opacity, transform, visibility",
            }}
          >
            <DesignCanvas width={1920} height={MORE_H}>
              {ENTRIES.slice(VISIBLE).map((e) => (
                <Entry key={e[0]} entry={e} offset={SPLIT} />
              ))}
            </DesignCanvas>
          </div>
        </div>
      </div>

      <DesignCanvas width={1920} height={190}>
        <button
          type="button"
          onClick={toggle}
          aria-expanded={expanded}
          className="journey-toggle"
          style={{
            position: "absolute",
            left: 960,
            top: 15,
            transform: "translateX(-50%)",
            padding: "13px 34px 13px 26px",
            // Blends into the section like the nav items: no background, border or shadow.
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontFamily: "Martel, serif",
            fontWeight: 900,
            fontSize: 24,
            color: "#2d6dc3",
          }}
        >
          {/* Same hover roll as the nav items: arrow + label slide up, a copy slides in. */}
          <span style={{ display: "block", height: 34, overflow: "hidden" }}>
            <span className="journey-roll" style={{ display: "block", transition: "transform 300ms ease-in-out" }}>
              {[0, 1].map((i) => (
                <span key={i} aria-hidden={i === 1} style={{ display: "flex", alignItems: "center", gap: 12, height: 34 }}>
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    style={{ transform: expanded ? "rotate(180deg)" : "none", transition: `transform ${EASE}` }}
                  >
                    <path d="M5 9l7 7 7-7" />
                  </svg>
                  {expanded ? "Show less" : "Show more"}
                </span>
              ))}
            </span>
          </span>
        </button>
      </DesignCanvas>
      <style>{`.journey-toggle:hover .journey-roll { transform: translateY(-34px); } @media (prefers-reduced-motion: reduce) { .journey-more, .journey-more *, .journey-roll { transition: none !important; } }`}</style>
    </div>
  );
}
