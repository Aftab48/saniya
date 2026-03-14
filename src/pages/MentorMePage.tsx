import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";
import s1 from "@/assets/mentorme/t1.png";
import t2 from "@/assets/mentorme/t2.png";
import s3 from "@/assets/mentorme/mm2.png";
import s2 from "@/assets/mentorme/s2.png";
import mmvideo from "@/assets/mentorme/mentormeVideo.mp4";

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block", overflow: "visible" }}
      loading="lazy"
    />
  );
}

export default function MentorMePage() {
  const [showStickyButton, setShowStickyButton] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goTop = () => {
    const el = document.getElementById("top");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#top";
    }
  };
  useEffect(() => {
    const metadata = {
      title: "MentorMe: Purpose-Led Brand Identity Design Case Study",
      description:
        "Portfolio of Saniya — case studies, selected work, and contact.",
    };

    document.title = metadata.title;
    const onScroll = () => {
      if (window.scrollY > 80) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      style={{
        maxWidth: "100%",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, .87)",
        marginTop: 0,
      }}
    >
      <div style={{ background: "rgba(0, 0, 0, .3)", position: "relative" }}>
        {showStickyButton && (
          <button
            type="button"
            onClick={goHome}
            style={{
              position: "sticky",
              top: 20,
              left: 32,
              zIndex: 30,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 28px",
              borderRadius: 40,
              border: "1px solid rgba(58, 122, 254, 0.65)",
              background: "rgba(58, 122, 254, 0.65)",
              color: "#FEF9F6",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              cursor: "pointer",
              fontFamily: "'Martel:ExtraBold', sans-serif",
              fontSize: 18,

              letterSpacing: 0.5,
            }}
          >
            &larr;&nbsp; Go Back
          </button>
        )}

        {/* Section 1 */}
        <div id="top" style={{ position: "relative" }}>
          <SectionImage src={s1} alt="MentorMe Case Study - Section 1" />
          <a
            href="https://drive.google.com/file/d/1149GpOt_2m2TxVyLWcNBbLu0sCTV06Cr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setLinkHovered(true)}
            onMouseLeave={() => setLinkHovered(false)}
            style={{
              position: "absolute",
              bottom: 305,
              left: "50%",
              transform: "translateX(-50%)",
              color: linkHovered ? "#9e9e9eff" : "white",
              background: "transparent",
              border: "none",
              textDecoration: "underline",
              padding: 0,
              margin: 0,
              zIndex: 20,
              fontFamily: "Alexandria, sans-serif",
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            View Brand Book
          </a>
        </div>

        <SectionImage src={t2} alt="MentorMe Case Study - Section 3" />

        {/* Section 2 */}

        <div
          style={{
            display: "flex",
            position: "relative",
            margin: "30px 0px",
            marginTop: 60,

            backgroundColor: "rgba(0, 0, 0, 0.87)",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 620,
              objectFit: "fill",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <video
              src={mmvideo}
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* Section 3 */}
        <div style={{ position: "relative" }}>
          <div>
            <CaseStudyContainer
              variant="light"
              zIndex={13}
              style={{
                marginTop: 100,
                position: "relative",
                marginBottom: 0,
                borderBottomLeftRadius: 68,
                borderBottomRightRadius: 68,
                boxShadow: "0 24px 40px rgba(0,0,0,0.08)",
              }}
            >
              <SectionImage src={s2} alt="Potential" />
            </CaseStudyContainer>
          </div>
        </div>

        {/* Footer Section */}
        <div
          style={{
            marginBottom: 0,
            position: "relative",
            zIndex: 10,
            marginTop: -160,
            overflow: "visible",
            transform: "scale(0.8)",
            height: 1000,
          }}
        >
          <FooterSection
            useBgImage={true}
            onBackToTop={goTop}
            onLetsTalkClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
