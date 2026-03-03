import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
// import imgBackground from "figma:asset/59441181721f9ec0057cf0ca5351b45db44c073a.png";
import imgBazarghorr from "@/assets/work/bazarghorr1.png";
import imgBuildMyStore from "@/assets/work/bmsC.png";
import imgMentorMe from "@/assets/work/mentorme1.png";
import newBackground from "@/assets/landing-work/blue-bg.png"
// import journey from "@/assets/landing-work/journey.png"

type BackgroundSectionProps = {
  containerRef?: React.RefObject<HTMLDivElement | null>;
};

type ProjectData = {
  image: string;
  alt: string;
  link: string;
};

const PROJECTS: ProjectData[] = [
  { image: imgBazarghorr, alt: "Bazarghorr — Hyperlocal Grocery App", link: "/bazarghorr" },

  { image: imgMentorMe, alt: "MentorMe — Purpose-Led Brand Identity", link: "/mentorme" },
    { image: imgBuildMyStore, alt: "BuildMyStore — All-in-One Ecommerce Platform", link: "/" }
];


 function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block", overflow: "visible",zIndex:100 }}
      loading="lazy"
    />
  );
}

function WorkCard({ project }: { project: ProjectData }) {
  return (
    <Link
      to={project.link}
      style={{
        display: "block",
        width: 1450,
        borderRadius: 24,
        overflow: "hidden",
        cursor: "pointer",
        textDecoration: "none",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      // onMouseEnter={(e) => {
      //   e.currentTarget.style.transform = "scale(1.06)";
      //   e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.25)";
      // }}
      // onMouseLeave={(e) => {
      //   e.currentTarget.style.transform = "scale(1)";
      //   e.currentTarget.style.boxShadow = "none";
      // }}
    >
      <img
        src={project.image}
        alt={project.alt}
        style={{
          width: "100%",
          display: "block",
          borderRadius: 24,
        }}
      />
    </Link>
  );
}

export default function BackgroundSection({ containerRef }: BackgroundSectionProps) {
  return (
    <div ref={containerRef} className="relative w-full shrink-0" style={{ minHeight: 3500,top:160,zIndex:105}}>
      {/* Full-width background image */}
      <div
        className="absolute left-1/2 top-0 h-full"
        style={{ width: "133.33vw", transform: "translateX(-50%)" }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden" >
          <img
            alt=""
            className="absolute left-0 top-0 h-full w-full max-w-none object-cover"
            src={newBackground}
            style={{ borderBottomLeftRadius: "48px", borderBottomRightRadius: "48px" }}
          />
        </div>
      </div>

      {/* Content: Title + Work Cards */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 80,
          paddingBottom: 100,
          gap: 108,
        }}
      >
        <h2
          style={{
            fontFamily: "ClashDisplay, sans-serif",
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: 4,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          SELECTED WORK
        </h2>

        {PROJECTS.map((project) => (
          <WorkCard key={project.link} project={project} />
        ))}
        
      </div>
      {/* <SectionImage src={journey} alt="My journey so far" /> */}
    </div>
  );
}
