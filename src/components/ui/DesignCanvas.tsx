import React, { useLayoutEffect, useRef, useState } from "react";

/**
 * Lays children out on a fixed `width` x `height` design-pixel grid and scales
 * the whole thing to the container's width — behaves like the
 * `<img style={{ width: "100%" }}>` it replaces, but is real HTML.
 */
export function DesignCanvas({
  width,
  height,
  style,
  children,
}: {
  width: number;
  height: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current!;
    const update = () => setScale(el.offsetWidth / width);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        aspectRatio: `${width} / ${height}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "0 0",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/** Absolutely positioned box in design pixels. */
export function At({
  x,
  y,
  w,
  h,
  style,
  children,
  ...rest
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...rest}
      style={{ position: "absolute", left: x, top: y, width: w, height: h, ...style }}
    >
      {children}
    </div>
  );
}

/**
 * Single line of text whose cap-height top sits at `y` (what you measure off a
 * design export). `k` = distance from line box top to cap top, in em, for
 * line-height 1. Montserrat 0.16, Alike 0.145.
 */
export function Txt({
  x,
  y,
  size,
  k = 0.16,
  align = "left",
  style,
  children,
}: {
  x: number;
  y: number;
  size: number;
  k?: number;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const shift = align === "center" ? "-50%" : align === "right" ? "-100%" : "0";
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y - k * size,
        fontSize: size,
        lineHeight: 1,
        whiteSpace: "nowrap",
        transform: `translateX(${shift})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
