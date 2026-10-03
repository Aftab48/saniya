import React from "react";
import { At, DesignCanvas, Txt } from "@/components/ui/DesignCanvas";
import guideImg from "@/assets/bms/goals/guide.webp";
import presentImg from "@/assets/bms/goals/present.webp";
import easyImg from "@/assets/bms/goals/easy.webp";
import signupImg from "@/assets/bms/goals/signup.webp";

// Coded replacements for BMS sections that used to be flat PNG exports.
// Coordinates are design pixels from the original exports.

const MONT = "Montserrat, sans-serif";

// ─── Breakdown of the problem (4961 x 3508 export) ───────────────────

const BREAKDOWN_BOXES: [string, number, number?][] = [
  ["Hero section w/CTA", 88],
  ["BMS partners", 569],
  ["Launch website in 30 sec", 880],
  ["Flip card features", 1191],
  ["BMS tools", 1671],
  ["Benefits of using BMS", 1982],
  ["Testimonials", 2293],
  ["Book demo banner/CTA", 2773, 1663.5],
  ["FAQs", 3086],
];

// [label lines, label centre xs, label top y, arrow centre y, bracket top y, bracket bottom y]
const BREAKDOWN_GROUPS: [string[], number[], number, number, number?, number?][] = [
  [["Drive Conversion"], [3629], 174, 201.5],
  [["Build trust &", "highlight ease of use"], [3627.5, 3639], 952.5, 1007.5, 650, 1324],
  [["Show trust & reliability"], [3629], 2066, 2105, 1747, 2422],
  [["Drive Conversion"], [3629], 3025.5, 3053, 2885, 3231],
];

const LINE = "#939598";

export function BreakdownSection() {
  return (
    <DesignCanvas width={4961} height={3508} style={{ fontFamily: MONT, color: "#231f20" }}>
      {BREAKDOWN_BOXES.map(([label, y, cx = 1675]) => (
        <React.Fragment key={label}>
          <At x={989} y={y} w={1372} h={251} style={{ background: "rgba(35,31,32,0.15)", borderRadius: 20 }} />
          <Txt x={cx} y={y + 84} size={83} align="center">
            {label}
          </Txt>
        </React.Fragment>
      ))}
      {BREAKDOWN_GROUPS.map(([lines, xs, ly, cy, top, bottom]) => (
        <React.Fragment key={cy}>
          {top !== undefined && bottom !== undefined && (
            <>
              <At x={2549} y={top} w={236} h={4} style={{ background: LINE }} />
              <At x={2549} y={bottom - 3} w={236} h={4} style={{ background: LINE }} />
              <At x={2781} y={top} w={4} h={bottom - top + 1} style={{ background: LINE }} />
            </>
          )}
          <At x={2549} y={cy - 2} w={440} h={4} style={{ background: LINE }} />
          <svg width={34} height={37} style={{ position: "absolute", left: 2984, top: cy - 18.5 }}>
            <path d="M0 0 34 18.5 0 37Z" fill={LINE} />
          </svg>
          {lines.map((l, i) => (
            <Txt key={l} x={xs[i]} y={ly + i * 100} size={83} align="center">
              {l}
            </Txt>
          ))}
        </React.Fragment>
      ))}
    </DesignCanvas>
  );
}

// ─── Thank-you strip (1798 x 219 export) ─────────────────────────────

export function ThankYouStrip() {
  return (
    <DesignCanvas width={1798} height={219} style={{ background: "#fffef9", fontFamily: MONT, color: "#000" }}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Txt key={i} x={10 + i * 302.8} y={87} size={46} style={{ letterSpacing: -1.9, wordSpacing: 3 }}>
          THANK YOU
        </Txt>
      ))}
      <At x={0} y={218} w={1798} h={1} style={{ background: "#22262c" }} />
    </DesignCanvas>
  );
}

// ─── End goals (4961 x 1869 export) ──────────────────────────────────

const LUCIDA = "'Lucida Sans Demibold', sans-serif";

// [icon, icon box x y w h, card x y, caption centre x, caption lines]
const GOALS: [string, number, number, number, number, number, number, number, [string, string]][] = [
  [guideImg, 285, 500, 605, 690, 0, 263, 575, ["Guide users smoothly from", "problem to solution"]],
  [presentImg, 1567, 541, 606, 530, 1260, 263, 1844.5, ["Present tools clearly without", "overwhelming users."]],
  [easyImg, 2801, 476, 654, 659, 2520, 252, 3112, ["Show how simple", "BuildMyStore is to use"]],
  [signupImg, 4117, 500, 567, 658, 3777, 248, 4368, ["Drive sign-ups through an", "engaging landing page"]],
];

export function EndGoalsSection() {
  return (
    <DesignCanvas width={4961} height={1869} style={{ fontFamily: LUCIDA, fontWeight: 600, color: "#231f20" }}>
      <Txt x={14} y={69} size={76.4} k={0.14}>
        What are the end goals?
      </Txt>
      {GOALS.map(([img, ix, iy, iw, ih, cx, cy, tx, lines]) => (
        <React.Fragment key={tx}>
          <At
            x={cx}
            y={cy}
            w={1184}
            h={1561}
            style={{ boxSizing: "border-box", border: "12px solid rgba(36,143,205,0.5)", borderRadius: 165 }}
          />
          <img src={img} alt="" loading="lazy" style={{ position: "absolute", left: ix, top: iy, width: iw, height: ih }} />
          {lines.map((l, i) => (
            <Txt key={l} x={tx + 1} y={1370 + i * 73} size={61.2} k={0.14} align="center">
              {l}
            </Txt>
          ))}
        </React.Fragment>
      ))}
    </DesignCanvas>
  );
}
