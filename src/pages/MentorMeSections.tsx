import React from "react";
import { DesignCanvas, Txt } from "@/components/ui/DesignCanvas";
import potentialBg from "@/assets/mentorme/potential-bg.webp";

// The glow is low-frequency, so a 96px-wide copy stretched to full size is
// visually identical to the old 1899px export; the text is real text.
export function PotentialBanner() {
  return (
    <DesignCanvas
      width={1899}
      height={1149}
      style={{ background: `url(${potentialBg}) 0 0 / 100% 100%` }}
    >
      <Txt
        x={958.5}
        y={520}
        size={68}
        k={0.145}
        align="center"
        style={{ fontFamily: "Archivo, sans-serif", fontStretch: "100%", fontWeight: 100, letterSpacing: 1.85, color: "#fff" }}
      >
        “Unlock limitless Potential”
      </Txt>
    </DesignCanvas>
  );
}
