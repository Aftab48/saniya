import React from "react";

type NavItemProps = {
  label: string;
  widthClass: string;
  isWhite: boolean;
  onClick?: () => void;
  href?: string;
  textLeft?: boolean;
};

export default function NavItem({
  label,
  widthClass,
  isWhite,
  onClick,
  href,
  textLeft = false,
}: NavItemProps) {
  const textClasses = `flex h-[34px] items-center font-['Martel:ExtraBold',sans-serif] transition-colors duration-300 ${
    isWhite ? "text-white" : "text-[#2d6dc3]"
  }`;
  const containerClassName = [
    "group relative block h-[34px] shrink-0 overflow-clip",
    widthClass,
    textLeft ? "text-left" : "",
    onClick ? "cursor-pointer" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const animatedLabel = (
    <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[34px]">
      <p
        className={textClasses}
        style={{ fontWeight: 900, fontFamily: "Martel, serif", fontSize: 18 }}
      >
        {label}
      </p>
      <p
        className={textClasses}
        style={{ fontWeight: 900, fontFamily: "Martel, serif", fontSize: 18 }}
      >
        {label}
      </p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={containerClassName} data-name="nav bar text">
        {animatedLabel}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={containerClassName}
      data-name="nav bar text"
    >
      {animatedLabel}
    </button>
  );
}
