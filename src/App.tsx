import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingFinal from "./imports/LandingFinal";
import BazarghorrPage from "./pages/BazarghorrPage";
import BMSPage from "./pages/BMSPage";
import MentorMePage from "./pages/MentorMePage";
import mobileCanvas from "./assets/mobile-canvas.png";

const WORK_SECTION_TOP = 700;
const ABOUT_SECTION_TOP = 3300;
const MOBILE_BREAKPOINT = 728;

function MobileCanvas() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center overflow-hidden bg-[#fefcf4]">
      <img
        src={mobileCanvas}
        alt="Mobile canvas"
        className="h-full w-full object-contain"
      />
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
