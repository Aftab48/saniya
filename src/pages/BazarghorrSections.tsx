import React from "react";
import { At, DesignCanvas, Txt } from "@/components/ui/DesignCanvas";
import aaravImg from "@/assets/bazarghorr/personas/aarav.webp";
import sitaImg from "@/assets/bazarghorr/personas/sita.webp";
import rameshImg from "@/assets/bazarghorr/personas/ramesh.webp";
import stallImg from "@/assets/bazarghorr/research/stall.webp";
import voicesImg from "@/assets/bazarghorr/research/voices.webp";

// Coded replacements for sections that used to be flat PNG exports.
// Coordinates are the design-pixel positions from the original 1920px exports.

const MONT = "Montserrat, sans-serif";
const ALIKE = "Alike, serif";
const LIME = "#bbff67";
const CREAM = "#fef9f6";
const CHARCOAL = "#33302f";

// ─── s3: Design Process ──────────────────────────────────────────────

function IconCircle({ x, y, children }: { x: number; y: number; children: React.ReactNode }) {
  return (
    <svg
      width={77}
      height={77}
      viewBox="0 0 77 77"
      fill="none"
      stroke={LIME}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "absolute", left: x, top: y }}
    >
      <circle cx={38.5} cy={38.5} r={37.5} />
      {children}
    </svg>
  );
}

type Chip = [label: string, x: number, y: number, w: number, green?: boolean];

const PROCESS_CHIPS: Chip[] = [
  ["Team Alignment", 114, 525, 174],
  ["User Research", 297, 525, 153, true],
  ["SWOT Analysis", 114, 601, 209],
  ["User Persona", 331, 601, 135],
  ["Info. Architecture", 114, 678, 180, true],
  ["User Flow", 576, 749, 153, true],
  ["JTBD", 737, 751, 144],
  ["CJM", 576, 827, 124],
  ["Mid-Fid Wireframes", 709, 827, 201, true],
  ["Visual Concept", 1021, 498, 170],
  ["Design System", 1200, 500, 144, true],
  ["Hi-Fi Screens", 1021, 576, 134, true],
  ["Testing", 1454, 749, 104],
  ["Interactive Prototyping", 1570, 749, 236, true],
  ["Iterations", 1454, 827, 124],
];

const PROCESS_TITLES: [string, number, number][] = [
  ["RESEARCH &", 114, 429],
  ["DISCOVERY", 114, 462],
  ["IDEATION", 577, 686],
  ["SOLUTION", 1029, 435],
  ["TESTING", 1455, 686],
];

/** Dark rounded panel with the "0X/10 ─── TITLE" header used by s3/s5. */
function DarkPanel({
  num,
  title,
  height,
  bottomGap = 0,
  children,
}: {
  num: string;
  title: string;
  height: number;
  bottomGap?: number;
  children: React.ReactNode;
}) {
  return (
    <DesignCanvas width={1920} height={height}>
      <div
        style={{
          position: "absolute",
          inset: `0 0 ${bottomGap}px 0`,
          background: CHARCOAL,
          borderRadius: "66px 66px 0 0",
          fontFamily: MONT,
          color: CREAM,
        }}
      >
        <Txt x={43} y={71} size={20} style={{ color: "#bfbbb8" }}>
          {num}
        </Txt>
        <At x={38} y={101} w={1842} h={1} style={{ background: CREAM }} />
        <Txt x={34} y={151} size={64} style={{ fontWeight: 500, letterSpacing: 2.7 }}>
          {title}
        </Txt>
        {children}
      </div>
    </DesignCanvas>
  );
}

function ChipBox({
  label,
  x,
  y,
  w,
  h,
  green,
}: {
  label: string;
  x: number;
  y: number;
  w: number;
  h: number;
  green?: boolean;
}) {
  return (
    <At
      x={x}
      y={y}
      w={w}
      h={h}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        borderRadius: 16,
        border: `1px solid ${green ? "#7a9b4c" : "#575a5b"}`,
        background: "linear-gradient(#2f2c2b, #383534)",
        boxShadow: "inset 0 0 12px rgba(0,0,0,0.12)",
        color: "#ece8e5",
        fontSize: 17,
        letterSpacing: 0.3,
        lineHeight: 1,
        paddingBottom: 1,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </At>
  );
}

export function DesignProcessSection() {
  return (
    <DarkPanel num="02/10" title="DESIGN PROCESS" height={1091} bottomGap={20}>

        {[509, 960, 1411].map((x) => (
          <At key={x} x={x} y={302} w={2} h={608} style={{ background: "#5d5958" }} />
        ))}

        <IconCircle x={114} y={316}>
          <circle cx={35} cy={35} r={13} />
          <path d="M44.2 44.2 58.5 57.5" />
        </IconCircle>
        <IconCircle x={576} y={573}>
          <path d="M38.5 20.5 26.5 35.5V60.5M38.5 20.5 50.5 35.5V60.5M38.5 40.5V60.5M34 26H43M26.5 35.5Q32.5 41 38.5 40.5Q44.5 41 50.5 35.5" />
        </IconCircle>
        <IconCircle x={1030} y={322}>
          <path d="M36.8 18.5V25.2M22.8 26.2 27.5 30.2M51.8 26.2 47.5 30.2M16.8 39.2H23.5M50.8 39.2H57.5" />
          <path d="M33 50C33 46 28 45 28 40A9 9 0 1 1 45.6 40C45.6 45 40.6 46 40.6 50Z" />
          <rect x={33} y={50} width={7.6} height={6} rx={1} />
        </IconCircle>
        <IconCircle x={1455} y={573}>
          <rect x={17.9} y={36.9} width={10.6} height={17.6} rx={2} opacity={0.45} />
          <rect x={33.5} y={14.2} width={10.7} height={40.3} rx={2} />
          <rect x={48.5} y={28.5} width={10.7} height={26} rx={2} opacity={0.6} />
        </IconCircle>

        {PROCESS_TITLES.map(([t, x, y]) => (
          <Txt key={t} x={x} y={y} size={33.5} style={{ fontWeight: 500, letterSpacing: 0.3 }}>
            {t}
          </Txt>
        ))}

        {PROCESS_CHIPS.map(([label, x, y, w, green]) => (
          <ChipBox key={label} label={label} x={x} y={y} w={w} h={61} green={green} />
        ))}
    </DarkPanel>
  );
}

// ─── s5: User Persona ────────────────────────────────────────────────

// [bullet-dot x, first-line top, lines]
type PersonaList = [number, number, string[]];

const PERSONAS: {
  img: string;
  box: [number, number, number, number];
  name: string;
  cx: number;
  chipX: number;
  chips: [string, string, string];
  labelX: number;
  painY: number;
  goals: PersonaList[];
  pains: PersonaList[];
}[] = [
  {
    img: aaravImg,
    box: [182, 292, 322, 255],
    name: "AARAV GHOSH",
    cx: 333,
    chipX: 92,
    chips: ["Age: 21", "Student", "Baduria"],
    labelX: 105,
    painY: 892,
    goals: [
      [246, 765, ["Order essentials in", "small quantity"]],
      [454, 765, ["Affordable", "pricing/ offers"]],
    ],
    pains: [
      [242, 896, ["Limited mobility"]],
      [440, 895, ["Inconsistent", "product availability"]],
    ],
  },
  {
    img: sitaImg,
    box: [788, 301, 320, 246],
    name: "SITA DAS",
    cx: 958.5,
    chipX: 703,
    chips: ["Age: 36", "Home Maker", "Arambagh"],
    labelX: 716,
    painY: 896,
    goals: [
      [857, 765, ["Order daily", "groceries without", "visiting multiple", "stores"]],
      [1059, 765, ["Trust product", "quality and", "pricing"]],
    ],
    pains: [[853, 892, ["Limited time due to", "household chores"]]],
  },
  {
    img: rameshImg,
    box: [1418, 294, 297, 254],
    name: "RAMESH GUPTA",
    cx: 1586,
    chipX: 1324,
    chips: ["Age: 48", "Kirana Shop Owner", "Residential Area"],
    labelX: 1337,
    painY: 896,
    goals: [
      [1478, 765, ["Retain loyal", "neighborhood", "customers"]],
      [1680, 765, ["Grow business", "without losing", "local trust"]],
    ],
    pains: [
      [1474, 892, ["No structured", "system to manage", "online orders"]],
      [1673, 892, ["Hesitation in", "adopting digital", "tools"]],
    ],
  },
];

function PersonaBullets({ list: [dx, top, lines] }: { list: PersonaList }) {
  return (
    <>
      <At x={dx} y={top + 6} w={3} h={3} style={{ borderRadius: "50%", background: "#b5b1ae" }} />
      {lines.map((l, i) => (
        <Txt key={l} x={dx + 13} y={top + 2 + i * 22} size={16} style={{ letterSpacing: 0.6 }}>
          {l}
        </Txt>
      ))}
    </>
  );
}

export function PersonaSection() {
  const label: React.CSSProperties = { fontWeight: 600 };
  return (
    <DarkPanel num="04/10" title="USER PERSONA" height={1195}>
      {[651, 1269].map((x) => (
        <At key={x} x={x} y={274} w={2} h={608} style={{ background: "#6a6664" }} />
      ))}
      {PERSONAS.map((p) => (
        <React.Fragment key={p.name}>
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            style={{ position: "absolute", left: p.box[0], top: p.box[1], width: p.box[2], height: p.box[3] }}
          />
          <Txt x={p.cx} y={592} size={34} align="center" style={label}>
            {p.name}
          </Txt>
          <ChipBox label={p.chips[0]} x={p.chipX} y={649} w={136} h={60} />
          <ChipBox label={p.chips[1]} x={p.chipX + 149} y={649} w={188} h={60} green />
          <ChipBox label={p.chips[2]} x={p.chipX + 350} y={649} w={170} h={60} />
          <Txt x={p.labelX} y={782} size={23} style={label}>
            GOALS
          </Txt>
          <Txt x={p.labelX} y={p.painY + 1} size={23} style={label}>
            PAIN
          </Txt>
          <Txt x={p.labelX} y={p.painY + 24} size={23} style={label}>
            POINTS
          </Txt>
          {[...p.goals, ...p.pains].map((l) => (
            <PersonaBullets key={l[2][0]} list={l} />
          ))}
        </React.Fragment>
      ))}
    </DarkPanel>
  );
}

// ─── s4: SWOT Analysis ───────────────────────────────────────────────
// Everything below the header sits on one layer rotated 24.21°; coordinates
// are in that layer's (un-rotated) frame.

const SWOT_DARK = "#474443";
const SWOT_LIME = "#c2fe76";

const SWOT_ICONS = {
  threat: "M55.2 66.5 53.5 67.0 51.5 68.8 51.0 69.8 51.0 72.8 51.8 74.2 53.2 75.5 56.0 76.0 59.2 74.5 60.5 72.0 60.5 70.8 59.2 68.0 57.5 66.8ZM55.0 37.0 52.8 38.0 51.0 40.5 51.0 58.0 53.0 60.5 55.0 61.2 56.8 61.2 59.2 59.8 60.5 56.8 60.5 41.5 59.2 38.5 57.5 37.2ZM52.8 4.2 50.5 6.5 47.0 12.5 47.0 13.2 45.2 15.5 29.0 44.2 26.0 48.8 21.0 58.0 18.0 62.5 18.0 63.2 16.2 65.5 11.8 74.0 7.2 81.2 6.0 84.2 7.0 88.0 8.5 89.8 10.5 90.8 100.8 90.8 102.8 89.8 104.5 87.8 105.0 86.2 104.8 82.8 60.0 5.5 58.8 4.5 56.8 3.8 54.0 3.8ZM52.0 24.0 55.8 22.8 58.2 23.5 60.5 25.2 63.2 29.5 70.2 42.2 88.2 72.8 88.2 77.2 85.5 80.5 83.8 81.2 78.2 81.5 72.5 81.0 27.5 81.2 25.8 80.5 23.8 78.8 22.8 76.8 22.8 73.8 23.5 72.0 50.0 26.2Z",
  opportunity: "M10.0 72.8 7.8 74.8 7.0 76.2 6.0 82.2 6.2 96.2 6.8 99.2 7.8 101.2 11.0 103.8 15.5 104.5 28.2 104.2 31.5 102.8 33.8 99.8 34.8 93.0 34.8 82.0 34.2 78.2 33.0 75.0 31.8 73.5 28.2 71.8 16.2 71.5 11.5 72.0ZM64.5 59.0 59.2 58.0 48.5 58.5 44.8 60.2 42.5 63.5 41.8 67.5 41.2 80.2 41.8 82.2 41.5 89.5 42.0 98.0 43.8 101.5 46.8 103.8 50.0 104.5 62.8 104.2 67.0 102.2 69.0 99.2 69.8 96.5 69.5 93.2 70.0 87.8 69.8 67.2 69.2 64.0 68.2 62.0 66.2 60.0ZM83.8 41.0 81.2 42.0 79.2 43.8 78.2 45.2 77.2 48.8 76.8 84.2 77.2 88.2 77.0 92.8 77.8 98.8 79.2 101.2 82.5 103.8 86.0 104.5 97.5 104.2 99.5 103.8 102.5 101.8 104.5 98.2 105.2 85.8 105.0 79.2 105.5 76.2 104.8 47.5 102.8 43.5 99.5 41.2 93.5 40.5ZM99.8 7.0 97.5 5.5 96.2 5.2 88.2 5.2 81.5 6.0 76.8 7.2 74.8 9.8 74.5 13.0 75.5 15.2 79.8 19.5 66.8 32.5 60.8 39.2 59.5 38.8 52.2 29.0 50.2 27.5 46.8 26.2 44.2 26.5 41.5 27.5 30.8 35.8 17.5 48.2 10.0 57.0 9.2 59.0 10.0 61.5 10.8 62.5 13.2 63.8 15.0 63.5 16.8 62.5 19.5 59.0 28.5 49.5 38.2 40.8 45.2 35.5 46.0 35.5 47.5 36.8 52.0 43.2 55.2 46.8 57.5 47.8 60.5 48.2 63.5 47.8 67.2 45.2 72.5 39.0 86.0 26.0 86.5 26.0 91.0 30.8 92.5 31.5 95.0 31.8 97.0 31.0 98.2 30.0 99.5 27.8 100.5 22.0 101.0 10.2Z",
  strength: "M22.5 7.0 20.0 9.5 19.0 11.2 18.0 14.8 17.8 17.8 17.2 18.5 16.0 26.5 15.0 30.0 15.0 31.8 14.0 34.8 14.0 37.0 13.0 40.0 13.0 42.0 12.0 45.0 12.0 47.0 11.0 50.2 10.0 57.0 6.0 75.8 6.2 82.0 7.5 86.0 10.2 90.2 13.5 93.2 16.5 95.0 23.8 96.8 93.5 96.5 96.0 95.2 97.8 91.2 98.2 87.2 98.2 82.2 96.8 76.0 94.0 70.8 89.8 65.8 86.2 63.0 81.2 60.5 75.8 59.0 71.0 58.8 66.8 59.2 61.0 61.0 54.2 65.5 49.2 71.5 47.0 77.0 46.5 77.5 45.8 77.0 31.8 29.0 32.5 28.5 34.5 30.2 38.0 31.2 40.8 31.2 44.8 29.5 49.2 26.2 51.5 23.8 52.8 21.2 53.2 18.8 52.8 14.5 50.5 9.8 49.2 8.2 44.8 5.2 40.2 4.8 26.8 5.0Z",
  weakness: "M14.0 6.2 6.2 14.2 5.0 17.5 5.2 20.0 6.8 23.2 19.5 36.0 20.0 39.2 19.0 41.0 6.2 53.8 5.2 56.5 5.2 59.2 6.5 62.2 13.5 69.5 15.5 70.8 19.2 71.5 21.8 70.8 23.8 69.5 36.8 56.8 39.0 56.5 40.2 56.8 52.5 69.0 54.5 70.5 56.5 71.2 59.5 71.2 63.0 69.8 70.5 62.2 71.8 59.2 71.8 56.8 70.2 53.2 58.0 41.0 57.0 39.5 56.8 37.0 58.5 34.5 70.2 23.0 71.5 20.2 71.8 17.5 71.2 15.5 69.8 13.0 61.5 5.5 60.0 5.0 56.0 5.0 53.2 6.5 40.5 19.2 38.5 19.8 35.8 18.8 23.2 6.2 20.2 5.0 16.8 5.0Z",
};

function SwotCard({ x, y, w, h, color }: { x: number; y: number; w: number; h: number; color: string }) {
  return <At x={x} y={y} w={w} h={h} style={{ background: color, borderRadius: 47 }} />;
}

function SwotIcon({ x, y, w, h, d, color }: { x: number; y: number; w: number; h: number; d: string; color: string }) {
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position: "absolute", left: x, top: y }}>
      <path d={d} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function SwotList({ x, y, tilt, color, items }: { x: number; y: number; tilt: number; color: string; items: string[] }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `rotate(${tilt}deg)`,
        transformOrigin: "0 0",
        fontFamily: "Martel, serif",
        fontSize: 18,
        lineHeight: "52px",
        color,
        letterSpacing: color === CREAM ? -0.2 : 0,
        whiteSpace: "nowrap",
      }}
    >
      {items.map((t) => (
        <div key={t}>
          <span style={{ display: "inline-block", width: 19 }}>•</span>
          {t}
        </div>
      ))}
    </div>
  );
}

export function SwotSection() {
  return (
    <DesignCanvas width={1920} height={1266}>
      <div style={{ position: "absolute", inset: 0, background: CREAM, borderRadius: "62px 62px 0 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: 0, top: 0, transform: "rotate(24.21deg)", transformOrigin: "0 0" }}>
          <SwotCard x={722} y={-900} w={451} h={1100} color={SWOT_LIME} />
          <SwotCard x={1174} y={200} w={451} h={1200} color={SWOT_LIME} />
          <SwotCard x={1174} y={-252} w={1500} h={451} color={SWOT_DARK} />
          <SwotCard x={-600} y={200} w={1773} h={451} color={SWOT_DARK} />

          <SwotIcon x={900} y={40} w={110} h={95} d={SWOT_ICONS.threat} color={SWOT_DARK} />
          <SwotIcon x={1238} y={-82} w={112} h={109} d={SWOT_ICONS.opportunity} color={CREAM} />
          <SwotIcon x={998} y={374} w={104} h={102} d={SWOT_ICONS.strength} color={CREAM} />
          <SwotIcon x={1374} y={260} w={78} h={76} d={SWOT_ICONS.weakness} color={SWOT_DARK} />

          <SwotList x={790} y={-150} tilt={0.5} color="#141414" items={["Entry Of Large Platforms", "Low Kirana Onboarding Adoption", "Resistance To Fees Or App Use"]} />
          <SwotList x={1428} y={-101} tilt={1.25} color={CREAM} items={["Untapped Small-Town Markets", "High Hyperlocal Trust", "Digitizing Udhaar Habits"]} />
          <SwotList x={692} y={348} tilt={2.25} color={CREAM} items={["First-Mover In Small Towns", "Strong Local Kirana Identity", "Shopkeeper-First Model"]} />
          <SwotList x={1253} y={376} tilt={0} color="#141414" items={["Brand Scalability Beyond Bengal", "Dependence On Stock Updates", "Limited Resources"]} />
        </div>

        <At x={0} y={0} w={1920} h={92} style={{ background: CREAM }} />
        <Txt x={42} y={61} size={20} style={{ fontFamily: MONT, color: "#726e6d" }}>
          03/10
        </Txt>
        <At x={38} y={91} w={1844} h={1} style={{ background: CHARCOAL }} />
        <Txt x={35} y={141} size={64} style={{ fontFamily: MONT, fontWeight: 500, letterSpacing: 3.3, color: CHARCOAL }}>
          SWOT ANALYSIS
        </Txt>
      </div>
    </DesignCanvas>
  );
}

// ─── s6: Quantitative Research ───────────────────────────────────────
// The stall photo and the illustrated quotes band (Bengali + English) stay as
// compressed images; everything else is real markup.

const MARTEL = "Martel, serif";

const RESEARCH_STATS: [string, number, number, number, string[]][] = [
  ["62%", 1884, 693, 1924, ["Users Prefer Buying Groceries From Their Trusted", "Local Kirana Stores, But Lack A Convenient Way To", "Order Without Visiting The Shop."]],
  ["48%", 2076, 654, 2117, ["Residents Find It Inconvenient To Step Out For", "Small Or Frequent Purchases, Especially During", "Evenings Or Busy Hours."]],
  ["37%", 2269, 693, 2310, ["Kirana Shop Owners Struggle To Manage Phone And", "WhatsApp Orders, Leading To Missed Or Incorrect", "Orders."]],
];

const SOLUTION_LINES = [
  "Bazarghorr Lets Small-Town Users Order Daily",
  "Essentials From Trusted Neighborhood Kirana Stores,",
  "Combining Local Trust With Doorstep Delivery And",
  "Simple Tools For Shop Owners To Bring Modern",
  "Convenience To Everyday Shopping.",
];

const RESEARCH_INTRO = [
  "We Set Up On-Ground Stalls In Target Areas To Conduct Surveys And Structured Interactions,",
  "Using Activities Such As Interviews And Engagement-Based Exercises To Capture Measurable",
  "Insights Into User Needs And Behaviors.",
];

export function ResearchSection() {
  return (
    <DesignCanvas width={1920} height={2979}>
      <div style={{ position: "absolute", inset: 0, background: CREAM, borderRadius: "66px 66px 0 0", color: CHARCOAL }}>
        <Txt x={42} y={67} size={20} style={{ fontFamily: MONT, color: "#726e6d" }}>
          05/10
        </Txt>
        <At x={38} y={97} w={1844} h={1} style={{ background: CHARCOAL }} />
        <Txt x={66} y={146} size={68} style={{ fontFamily: MONT, letterSpacing: 0.9 }}>
          QUANTITATIVE RESEARCH
        </Txt>
        {RESEARCH_INTRO.map((l, i) => (
          <Txt key={l} x={67} y={240 + i * 33} size={19.5} k={0.025} style={{ fontFamily: MARTEL, color: "#333231" }}>
            {l}
          </Txt>
        ))}
        <svg width={500} height={14} style={{ position: "absolute", left: 466, top: 310 }} fill="none" stroke={CHARCOAL} strokeWidth={2}>
          <path d="M2 6.5H494M488.5 1 494 6.5 488.5 12" />
        </svg>
        <img src={stallImg} alt="Research stall" loading="lazy" style={{ position: "absolute", left: 1132, top: 136, width: 666, height: 320 }} />
        <img src={voicesImg} alt="What shop owners and customers said" loading="lazy" style={{ position: "absolute", left: 0, top: 600, width: 1920, height: 930 }} />

        <At x={949} y={1805} w={713} h={713} style={{ borderRadius: "50%", background: "#c2fe76" }} />
        <Txt x={1305} y={1979} size={55.7} align="center" style={{ fontFamily: MONT, fontWeight: 500, letterSpacing: 1 }}>
          SOLUTION
        </Txt>
        {SOLUTION_LINES.map((l, i) => (
          <Txt key={l} x={1305.5} y={2103 + i * 39} size={20.9} k={0.025} align="center" style={{ fontFamily: MARTEL }}>
            {l}
          </Txt>
        ))}

        {RESEARCH_STATS.map(([num, y, w, textY, lines]) => (
          <React.Fragment key={num}>
            <At
              x={347}
              y={y}
              w={w}
              h={170}
              style={{ boxSizing: "border-box", borderRadius: 85, background: "#6b9176", border: "1px solid #5e7b66" }}
            />
            <At x={258} y={y + 20} w={130} h={130} style={{ borderRadius: "50%", background: "#474443" }} />
            <Txt x={323} y={y + 71} size={40} align="center" style={{ fontFamily: MONT, color: "#fff", letterSpacing: 5.5 }}>
              {num}
            </Txt>
            {lines.map((l, i) => (
              <Txt key={l} x={418} y={textY + 1 + i * 35} size={21} k={0.025} style={{ fontFamily: MARTEL, color: CREAM }}>
                {l}
              </Txt>
            ))}
          </React.Fragment>
        ))}
      </div>
    </DesignCanvas>
  );
}

// ─── s14: Numbers ────────────────────────────────────────────────────

const NUMBERS: [label: string, value: string, cx: number][] = [
  ["SCREENS", "120+", 176.5],
  ["MONTHS", "5", 553.5],
  ["HOURS", "460+", 940.5],
  ["DESIGNERS", "2", 1343],
];

export function NumbersSection() {
  const label: React.CSSProperties = {
    fontFamily: MONT,
    fontWeight: 600,
    color: "#757271",
    letterSpacing: 0.3,
  };
  const value: React.CSSProperties = { fontFamily: ALIKE, color: "#0c582b", letterSpacing: 3 };
  return (
    <DesignCanvas width={1917} height={351} style={{ background: CREAM }}>
      {NUMBERS.map(([l, v, cx]) => (
        <React.Fragment key={l}>
          <Txt x={cx} y={119} size={19} align="center" style={label}>
            {l}
          </Txt>
          <Txt x={cx + 1.5} y={191} size={98} k={0.145} align="center" style={value}>
            {v}
          </Txt>
        </React.Fragment>
      ))}
      <Txt x={1732} y={119} size={19} align="center" style={label}>
        RED BULLS
      </Txt>
      <Txt x={1631} y={191} size={98} k={0.145} style={value}>
        31
      </Txt>
      <Txt x={1726} y={246} size={21} k={0.145} style={{ ...value, letterSpacing: 0.5 }}>
        &amp; counting
      </Txt>
      <At x={25} y={148} w={1844} h={1} style={{ background: CHARCOAL }} />
    </DesignCanvas>
  );
}
