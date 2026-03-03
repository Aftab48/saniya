import React, { use, useState, type ReactNode } from "react";
import svgPaths from "../svg-ghixc67pzt";
import footerImage from "figma:asset/thumbs-up-final.png";
import bgImage from "@/assets/landing-work/blue-bg.png";
import footerBg from "@/assets/landing-work/footer bg.png";
type FooterSectionProps = {
  onBackToTop: () => void;
  onLetsTalkClick: () => void;
  useBgImage?: boolean;
};

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
};

function SocialLink({
  href,
  label,
  children,
  external = false,
  useBgImage,
}: SocialLinkProps & { useBgImage: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      aria-label={label}
      className="group flex flex-col items-center  cursor-pointer transition-transform hover:scale-y-110"
      style={{
        width: 60,
        height: 90,
        transform: isHovered ? "scale(1.1)" : "scale(.95)",
        transition: "transform 0.5s ease",
      }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <span
        className="mt-2 text-[18px]"
        style={{
          fontFamily: "Martel, serif",
          color: useBgImage ? "#fefcf4" : "#101010",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 300ms ease, transform 200ms ease",
          fontSize: 16,
        }}
      >
        {label}
      </span>
    </a>
  );
}

function SocialMedia({ useBgImage }: { useBgImage: boolean }) {
  return (
    <div
      className="flex items-center justify-center "
      style={{ gap: 32, marginTop: 10 }}
    >
      <SocialLink
        href="https://www.linkedin.com/in/saniya"
        label="LinkedIn"
        external
        useBgImage={useBgImage}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 45 50"
        >
          <path
            d={svgPaths.p30ba2c00}
            fill={
              useBgImage ? "var(--fill-0, #ffffff)" : "var(--fill-0, #101010)"
            }
          />
        </svg>
      </SocialLink>
      <SocialLink
        href="mailto:saniya@example.com"
        label="Email"
        useBgImage={useBgImage}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 45 50"
        >
          <path
            d={svgPaths.p3150bc00}
            fill={
              useBgImage ? "var(--fill-0, #ffffff)" : "var(--fill-0, #101010)"
            }
          />
        </svg>
      </SocialLink>

      <SocialLink
        href="https://www.behance.net/saniya"
        label="Behance"
        external
        useBgImage={useBgImage}
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 45 50"
        >
          <path
            d={svgPaths.p2b85ed00}
            fill={
              useBgImage ? "var(--fill-0, #ffffff)" : "var(--fill-0, #101010)"
            }
          />
          <path
            d={svgPaths.p3db6fc00}
            fill={
              useBgImage ? "var(--fill-0, #ffffff)" : "var(--fill-0, #101010)"
            }
          />
        </svg>
      </SocialLink>
    </div>
  );
}

function LetsTalkLabelLine({ useBgImage }: { useBgImage: boolean }) {
  return (
    <div className="relative flex h-[54px] items-center justify-center">
      <p
        className="absolute left-[calc(50%-100px)] text-[32px] not-italic leading-[normal]"
        style={{ fontFamily: "Martel, serif", fontWeight: 800, color: useBgImage ? "#fefcf4" : "#2D6DC3" }}
      >
        Let&apos;s Talk
      </p>
      <div className="absolute left-[176px] top-[27px] h-0 w-[24px]">
        <div className="absolute inset-[-7.36px_-4.17%_-7.36px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 25 14.7279"
          >
            <path
              d={svgPaths.p3a9c1f00}
              fill={useBgImage ? "#fefcf4" : "#2D6DC3"}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ContactCta({
  onLetsTalkClick,
  onButtonHover,
  useBgImage,
  isButtonHovered,
}: {
  onLetsTalkClick: () => void;
  onButtonHover: (hovered: boolean) => void;
  useBgImage: boolean;
  isButtonHovered: boolean;
}) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <p
        className="mb-12  text-[28px] not-italic leading-[normal]"
        style={{ fontFamily: "Martel, serif" }}
      >
        That&apos;s a wrap. Or is it?
      </p>
      <h1
        className="mb-8 max-w-[1640px] text-center text-[128px] not-italic leading-[1.03] tracking-[7.68px] "
        style={{
          fontFamily: "ClashDisplay, sans-serif",
          fontWeight: 600,
        }}
      >
        Great design starts with a conversation!
      </h1>
      <p
        className="mb-12 text-center font-['Martel:DemiBold',sans-serif] text-[28px] not-italic leading-[normal] "
        style={{ fontFamily: "Martel, serif",marginTop:30 }}
      >
        Open to opportunities, collabs, creative challenges, or simply a good
        conversation.
      </p>
      <button
        type="button"
        onClick={onLetsTalkClick}
        onMouseEnter={() => onButtonHover(true)}
        onMouseLeave={() => onButtonHover(false)}
        className="group relative mb-4 h-[95px] w-[312px] cursor-pointer overflow-hidden rounded-[38px] border border-solid px-12 py-6"
        style={{
          border: useBgImage ? "solid 1px #ffffff" : "solid 1px #2d6dc3",
          background: isButtonHovered
            ? useBgImage
              ? "rgba(255,255,255,0.18)"
              : "rgba(226,226,226,0.4)"
            : useBgImage
              ? "rgba(255,255,255,0.08)"
              : "rgba(226,226,226,0.2)",
          transition: "background-color 200ms ease",
        }}
      >
        <div className="absolute left-[65px] top-[20.5px] h-[54px] w-[200px] overflow-clip">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[54px]">
            <LetsTalkLabelLine useBgImage={useBgImage} />
            <LetsTalkLabelLine useBgImage={useBgImage} />
          </div>
        </div>
      </button>
      <p
        className="mb-5 font-['Martel:DemiBold',sans-serif] text-[28px] not-italic leading-[normal] "
        style={{ margin: 10, fontFamily: "Martel, serif" }}
      >
        or
      </p>
      <SocialMedia useBgImage={useBgImage} />
    </div>
  );
}

export default function FooterSection({
  onBackToTop,
  onLetsTalkClick,
  useBgImage = false,
}: FooterSectionProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const innerStyle: React.CSSProperties = {
    width: "133.33vw",
    transform: "translateX(-50%)",
    ...(useBgImage
      ? {
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }
      : { backgroundColor: "#fefcf4" }),
  };
  return (
    <div
      className="relative z-50  w-full shrink-0 "
      style={{ height: 1300, color: useBgImage ? "#fefcf4" : "#101010" }}
    >
      <div className="absolute left-1/2  h-full" style={innerStyle}>
        <div
          className="absolute bottom-0 left-1/2 h-[1523px] w-[1920px] -translate-x-1/2"
          data-name="b551d4405bc31b48d23669c7d041acd3 1"
        />
        <div
          className="absolute z-10 overflow-hidden"
          style={{
            right: 220,
            bottom: 72,
            height: 523,
            width: 407,
          }}
        >
          <img
            className="absolute bottom-0 left-0 object-cover transition-transform duration-500 ease-out"
            style={{
              height: 523,
              width: 407,
              transform: isButtonHovered
                ? "translateY(35%)"
                : "translateY(100%)",
            }}
            src={footerImage}
            alt=""
          />
        </div>

        <div
          className="absolute left-1/2  h-0  -translate-x-1/2"
          style={{ bottom: 70, width: "100%" }}
        >
          <div className="absolute inset-[-1px_0_0_0]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1840 1"
            >
              <line
                id="Line 1"
                stroke={
                  useBgImage
                    ? "var(--stroke-0, #ffffff)"
                    : "var(--stroke-0, #101010)"
                }
                x2="1840"
                y1="0.5"
                y2="0.5"
              />
            </svg>
          </div>
        </div>
        <p
          className="absolute left-1/2  max-w-[100px] -translate-x-1/2 text-center text-[14px] not-italic leading-[normal] text-[#101010]"
          style={{
            fontFamily: "Martel, serif",
            bottom: 22,
            fontSize: 15,
            letterSpacing: 0.2,
            color: useBgImage ? "#fefcf4" : "#101010",
            maxWidth: "2000px",
          }}
        >
          Built on coffee, love, many iterations, and way too many open tabs.
          Thanks for stopping by, hope to hear from you soon.
        </p>
        <div className="absolute " style={{ left: 150, bottom: 22 }}>
          <button
            type="button"
            onClick={onBackToTop}
            className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-70"
          >
            <p
              className="text-[16px] not-italic leading-[normal] text-[#101010]"
              style={{
                fontFamily: "Martel, serif",
                fontSize: 15,
                letterSpacing: 0.5,
                color: useBgImage ? "#fefcf4" : "#101010",
              }}
            >
              Back to top
            </p>
            <div className="flex h-[14px] w-0 items-center justify-center">
              <div className="-rotate-90 flex-none">
                <div className="relative h-0 w-[14px]">
                  <div className="absolute inset-[-3.68px_-3.57%_-3.68px_0]">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 14.5 7.36396"
                    >
                      <path
                        d={svgPaths.p3b044f00}
                        fill={
                          useBgImage
                            ? "var(--stroke-0, #ffffff)"
                            : "var(--stroke-0, #101010)"
                        }
                        id="Arrow 2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div
          className="absolute left-1/2 w-full -translate-x-1/2"
          style={{ bottom: 120 }}
        >
          <ContactCta
            onLetsTalkClick={onLetsTalkClick}
            onButtonHover={setIsButtonHovered}
            useBgImage={useBgImage}
            isButtonHovered={isButtonHovered}
          />
        </div>
      </div>
    </div>
  );
}
