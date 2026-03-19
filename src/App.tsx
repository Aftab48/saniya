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

  return (
    <div className="min-h-[100dvh] w-screen overflow-hidden bg-[#f3f1ec]">
      <div
        className="relative mx-auto min-h-[100dvh] w-full px-[clamp(14px,4.2vw,28px)]"
        style={{
          paddingTop: "calc(env(safe-area-inset-top, 0px) + clamp(18px, 4.2vw, 30px))",
          paddingBottom:
            "calc(env(safe-area-inset-bottom, 0px) + clamp(18px, 4.2vw, 30px))",
        }}
      >
        <button
          type="button"
          onClick={downloadResume}
          className="absolute right-[clamp(14px,4.2vw,28px)] top-[calc(env(safe-area-inset-top,0px)+clamp(18px,4.2vw,30px))] inline-flex items-center gap-1 text-[clamp(15px,3.9vw,22px)] font-semibold leading-none text-[#2d6dc3] transition-opacity hover:opacity-70"
        >
          Resume
          <Download size={16} strokeWidth={2.2} />
        </button>

        <div className="relative mt-[clamp(68px,16vw,112px)] h-[clamp(360px,62vh,540px)] w-full">
          <img
            src={mobileCanvas}
            alt="Saniya painting on a canvas"
            className="h-full w-[clamp(228px,62vw,360px)] object-contain object-left-top"
          />

          <p className="absolute right-[clamp(0px,2vw,20px)] top-[clamp(36px,9vw,62px)] w-[clamp(150px,43vw,260px)] text-left font-['ClashDisplay',sans-serif] text-[clamp(15px,4.7vw,28px)] font-semibold leading-[1.12] text-[#141414]">
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
