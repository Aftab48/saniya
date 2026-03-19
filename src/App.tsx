import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Download } from "lucide-react";
import LandingFinal from "./imports/LandingFinal";
import BazarghorrPage from "./pages/BazarghorrPage";
import BMSPage from "./pages/BMSPage";
import MentorMePage from "./pages/MentorMePage";
import mobileCanvas from "./assets/mobile-canvas.png";
import saniyaPdf from "./assets/saniya.pdf";

const WORK_SECTION_TOP = 700;
const ABOUT_SECTION_TOP = 3300;
const MOBILE_BREAKPOINT = 728;

function MobileCanvas() {
  const downloadResume = useCallback(() => {
    const resumeDownloadLink = document.createElement("a");
    resumeDownloadLink.href = saniyaPdf;
    resumeDownloadLink.download = "saniya-resume.pdf";
    document.body.appendChild(resumeDownloadLink);
    resumeDownloadLink.click();
    resumeDownloadLink.remove();
  }, []);
  const safeTop = "calc(env(safe-area-inset-top, 0px) + clamp(14px, 4vw, 24px))";
  const sidePadding = "clamp(14px, 4vw, 28px)";
  const contentTop = "calc(env(safe-area-inset-top, 0px) + clamp(72px, 17vw, 116px))";

  return (
    <div
      style={{
        minHeight: "100dvh",
        width: "100%",
        backgroundColor: "#f3f1ec",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <button
        type="button"
        onClick={downloadResume}
        style={{
          position: "absolute",
          top: safeTop,
          right: sidePadding,
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          whiteSpace: "nowrap",
          fontFamily: "ClashDisplay, sans-serif",
          fontSize: "clamp(16px, 4vw, 22px)",
          fontWeight: 600,
          color: "#2d6dc3",
          lineHeight: 1,
          padding: 0,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <span>Resume</span>
        <Download size={16} strokeWidth={2.2} />
      </button>

      <div
        style={{
          minHeight: "100dvh",
          paddingTop: contentTop,
          paddingLeft: sidePadding,
          paddingRight: sidePadding,
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "560px",
            margin: "0 auto",
            display: "flex",
            alignItems: "flex-start",
            gap: "clamp(8px, 2.8vw, 18px)",
          }}
        >
          <img
            src={mobileCanvas}
            alt="Saniya painting on a canvas"
            style={{
              width: "clamp(160px, 56vw, 330px)",
              height: "auto",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />

          <p
            style={{
              margin: 0,
              marginTop: "clamp(26px, 8vw, 58px)",
              flex: 1,
              minWidth: 0,
              maxWidth: "clamp(110px, 38vw, 250px)",
              fontFamily: "ClashDisplay, sans-serif",
              fontSize: "clamp(14px, 4vw, 28px)",
              lineHeight: 1.12,
              fontWeight: 600,
              color: "#141414",
            }}
          >
            Built for a bigger canvas, best viewed on desktop.
          </p>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const scrollTo = useCallback((top: number) => {
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    scrollTo(0);
  }, [scrollTo]);

  const scrollToWork = useCallback(() => {
    scrollTo(WORK_SECTION_TOP);
  }, [scrollTo]);

  const scrollToAbout = useCallback(() => {
    scrollTo(ABOUT_SECTION_TOP);
  }, [scrollTo]);

  const scrollToContact = useCallback(() => {
    scrollTo(document.documentElement.scrollHeight);
  }, [scrollTo]);

  return (
    <div className="relative flex h-screen w-screen justify-center overflow-auto overflow-x-hidden bg-[#fefcf4]">
      <LandingFinal
        onHomeClick={scrollToTop}
        onWorkClick={scrollToWork}
        onAboutClick={scrollToAbout}
        onContactClick={scrollToContact}
      />
    </div>
  );
}

export default function App() {
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(
    () => window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const updateViewport = () => {
      setIsMobileViewport(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  if (isMobileViewport) {
    return <MobileCanvas />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bazarghorr" element={<BazarghorrPage />} />
      <Route path="/bms" element={<BMSPage />} />
      <Route path="/mentorme" element={<MentorMePage />} />
    </Routes>
  );
}
