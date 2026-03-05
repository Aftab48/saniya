import React, { useEffect, useRef, useState } from "react";
import BackgroundSection from "./landing/BackgroundSection";
import {
  NAV_WHITE_SCROLL_END,
  NAV_WHITE_SCROLL_START,
} from "./landing/constants";
import FooterSection from "./landing/FooterSection";
import HeroSection from "./landing/HeroSection";
import NavigationBar from "./landing/NavigationBar";
import type { LandingNavigationHandlers } from "./landing/types";
import journey from "@/assets/landing-work/journey.png";

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        display: "block",
        overflow: "hidden",
        zIndex: 100,
        marginTop: 220,
        marginBottom: 100,
        transform: "scale(1.2)",
      }}
      loading="lazy"
    />
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function findScrollParent(element: HTMLElement | null): HTMLElement | null {
  if (!element) {
    return null;
  }

  let current: HTMLElement | null = element.parentElement;
  while (current) {
    const styles = window.getComputedStyle(current);
    const isScrollable = /(auto|scroll|overlay)/.test(styles.overflowY);
    if (isScrollable && current.scrollHeight > current.clientHeight) {
      return current;
    }
    current = current.parentElement;
  }

  return null;
}

function getHeroCoverProgress(
  heroElement: HTMLElement | null,
  backgroundElement: HTMLElement | null,
) {
  if (!heroElement || !backgroundElement) {
    return 0;
  }

  const heroRect = heroElement.getBoundingClientRect();
  const backgroundRect = backgroundElement.getBoundingClientRect();
  const overlapDistance = heroRect.bottom - backgroundRect.top;
  const animationRange = Math.max(heroRect.height * 0.7, 1);

  return clamp(overlapDistance / animationRange, 0, 1);
}

function LandingSections({
  onBackToTop,
  onLetsTalkClick,
  heroRef,
  backgroundRef,
  footerRef,
  heroCoverProgress,
}: {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
  heroRef: React.RefObject<HTMLDivElement | null>;
  backgroundRef: React.RefObject<HTMLDivElement | null>;
  footerRef: React.RefObject<HTMLDivElement | null>;
  heroCoverProgress: number;
}) {
  return (
    <div
      className="absolute left-1/2 top-[100px] flex w-[calc(100%/0.8)] flex-col items-center"
      style={{
        transform: "translate(-50%, 0) scale(0.8) ",
        transformOrigin: "top center",
        // backgroundColor:"#FEF9F6"
      }}
    >
      <HeroSection coverProgress={heroCoverProgress} containerRef={heroRef} />

      <div id="work" style={{ width: "100%", backgroundColor: "FEF9F6" }}>
        <BackgroundSection containerRef={backgroundRef} />
      </div>

      <div id="journey" style={{ width: "100%",transform:"scale(1.05)" }}>
        <SectionImage src={journey} alt="My journey so far" />
      </div>

      <div
        id="contact"
        ref={footerRef as React.RefObject<HTMLDivElement>}
        style={{ width: "100%" }}
      >
        <FooterSection
          onBackToTop={onBackToTop}
          onLetsTalkClick={onLetsTalkClick}
          useBgImage={true}
        />
      </div>
    </div>
  );
}

export default function LandingFinal({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
}: LandingNavigationHandlers) {
  const [isNavWhite, setIsNavWhite] = useState(false);
  const [heroCoverProgress, setHeroCoverProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const goTop = () => {
    const el = document.getElementById("top");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#top";
    }
  };

  useEffect(() => {
    const prevTitle = document.title;
    const prevMeta = new Map<string, string | null>();

    function updateMeta(
      attr: "name" | "property",
      key: string,
      content: string,
    ) {
      const selector = `meta[${attr}="${key}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        prevMeta.set(`${attr}:${key}`, null);
      } else {
        prevMeta.set(`${attr}:${key}`, el.content || null);
      }
      el.content = content;
    }

    // Customize these values as needed for the landing page
    const metadata = {
      title: "Saniya — Product & Visual Designer",
      description:
        "Portfolio of Saniya — case studies, selected work, and contact.",
      image: String(journey),
    };

    document.title = metadata.title;
    updateMeta("name", "description", metadata.description);
    updateMeta("property", "og:title", metadata.title);
    updateMeta("property", "og:description", metadata.description);
    updateMeta("property", "og:image", metadata.image);
    updateMeta("name", "twitter:card", "summary_large_image");
    updateMeta("name", "twitter:title", metadata.title);
    updateMeta("name", "twitter:description", metadata.description);
    updateMeta("name", "twitter:image", metadata.image);

    return () => {
      document.title = prevTitle;
      prevMeta.forEach((value, k) => {
        const [attr, key] = k.split(":");
        const selector = `meta[${attr}="${key}"]`;
        const el = document.head.querySelector(
          selector,
        ) as HTMLMetaElement | null;
        if (!el) return;
        if (value === null) {
          // was created by us, remove it
          el.remove();
        } else {
          el.content = value;
        }
      });
    };
  }, []);

  useEffect(() => {
    let frameId: number | null = null;
    const scrollParent = findScrollParent(heroRef.current);

    const updatePageAnimations = () => {
      // Make nav white only while the "SELECTED WORK" heading is visible.
      let shouldBeWhite = false;
      let backgroundVisible = false;
      if (backgroundRef.current) {
        // Make nav white only when the BackgroundSection's top reaches the top of the viewport
        const rect = backgroundRef.current.getBoundingClientRect();
        // previously any visibility made it white; require the background's top to be at (or above) viewport top
        if (rect.top <= 0 && rect.bottom > 0) {
          shouldBeWhite = true;
          backgroundVisible = true;
        }
      }

      if (footerRef.current) {
        const candidates = footerRef.current.querySelectorAll("h2, a");
        for (let i = 0; i < candidates.length; i++) {
          const el = candidates[i] as HTMLElement | null;
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            shouldBeWhite = true;
            break;
          }
        }
      }

      if (!shouldBeWhite && footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          shouldBeWhite = true;
        }
      }

      // Make nav blue for `#journey` only when BackgroundSection is not visible.
      if (!backgroundVisible) {
        const journeyEl = document.getElementById("journey");
        if (journeyEl) {
          const rect = journeyEl.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            shouldBeWhite = false;
          }
        }
      }

      setIsNavWhite((current) =>
        current === shouldBeWhite ? current : shouldBeWhite,
      );

      const nextCoverProgress = getHeroCoverProgress(
        heroRef.current,
        backgroundRef.current,
      );
      setHeroCoverProgress((current) =>
        Math.abs(current - nextCoverProgress) < 0.001
          ? current
          : nextCoverProgress,
      );

      frameId = null;
    };

    const handleUpdateRequest = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updatePageAnimations);
      }
    };

    handleUpdateRequest();
    window.addEventListener("scroll", handleUpdateRequest, { passive: true });
    window.addEventListener("resize", handleUpdateRequest);
    scrollParent?.addEventListener("scroll", handleUpdateRequest, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleUpdateRequest);
      window.removeEventListener("resize", handleUpdateRequest);
      scrollParent?.removeEventListener("scroll", handleUpdateRequest);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-screen w-full bg-[#fefcf4]"
      data-name="Landing final"
    >
      <NavigationBar
        onHomeClick={onHomeClick}
        onWorkClick={onWorkClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        isWhite={isNavWhite}
      />
      <LandingSections
        onBackToTop={goTop}
        onLetsTalkClick={onContactClick}
        heroRef={heroRef}
        footerRef={footerRef}
        backgroundRef={backgroundRef}
        heroCoverProgress={heroCoverProgress}
      />
    </div>
  );
}
