import { useNavigate } from "react-router-dom";
import NavItem from "./NavItem";
import type { LandingNavigationHandlers } from "./types";
import sanaiPdf from '../../assets/saniya.pdf';
import React from "react";

type NavigationBarProps = LandingNavigationHandlers & {
  isWhite: boolean;
};

export default function NavigationBar({
  onHomeClick,
  onWorkClick,
  onAboutClick,
  onContactClick,
  
  isWhite,
}: NavigationBarProps) {

  const navigate = useNavigate()
  const goHome = () => {
    const el = document.getElementById("top");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#top";
    }
  };

  const goWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#work";
    }
  };
   const goJourney = () => {
    const el = document.getElementById("journey");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#journey";
    }
  };

   const goContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#contact";
    }
  };

    const onResumeClick = () => {
    const url = sanaiPdf // adjust path to your file
    const fileName = 'saniya-resume.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div
      className="fixed left-1/2 top-[20px] z-50 flex -translate-x-1/2 items-center justify-center gap-[50px] font-['Martel:ExtraBold',sans-serif]  not-italic leading-[normal] transition-colors duration-300"
      style={{
        gap: 40,
        background: isWhite ? "rgba(58, 122, 254, 0.15)" : "#fefeff00",
        padding: "10px 26px",
        borderRadius: 15,
        boxShadow: isWhite? "0 8px 30px rgba(0,0,0,0.08)": "0 0 0 rgba(0,0,0,0)",
        backdropFilter: "blur(6px)",
        
      }}
    >
      <NavItem
        label="Home"
        widthClass="w-[64px]"
        onClick={goHome}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Work"
        widthClass="w-[64px]"
        onClick={goWork}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Journey"
        widthClass="w-[102px]"
        onClick={goJourney}
        isWhite={isWhite}
      />
      <NavItem
        label="Contact"
        widthClass="w-[89px]"
        onClick={goContact}
        isWhite={isWhite}
        textLeft
      />
      <NavItem
        label="Resume"
        widthClass="w-[94px]"
        onClick={onResumeClick}
        isWhite={isWhite}
        
      />
    </div>
  );
}
