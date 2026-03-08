import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";

//logo
import bmsLogo from "@/assets/bms/logo.png";

//thumbnail
import bmsThumbnail from "@/assets/bms/bmsthumbnail.png";

//macbook mockups

import mac1 from "@/assets/bms/mac1.png";
import mac2 from "@/assets/bms/mac2.png";

//end goals
import endGoals from "@/assets/bms/endgols.png";

//  breakdown

import breakDown from "@/assets/bms/breakdown.png";

//trust eliments

import trustEliments from "@/assets/bms/trust elements.png";

//sections
import s1 from "@/assets/bms/s1a1.png";
import s3a from "@/assets/bms/s3a.png";
import s10 from "@/assets/bms/s10a.jpeg";
import s11 from "@/assets/bms/s11.jpeg";
import s13 from "@/assets/bms/s13.png";
import s15 from "@/assets/bms/Pasted image.png";

//videos
import s10v from "@/assets/bms/s10va.mp4";
import s11v from "@/assets/bms/s11v.mp4";
import bmsBlue from "@/assets/bms//bmsblue.mp4";
import bmsGreen from "@/assets/bms/green.mp4";
import bmsYellow from "@/assets/bms/yellow.mp4";
import bmsRed from "@/assets/bms/redBms.mp4";

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

const items = [
  "Local shop owners (kirana stores, restaurants, salons, pharmacies, boutiques) wanting to go online.",
  "SME retailers needing simple tools for orders, payments, and deliveries.",
  "Non-tech-savvy entrepreneurs looking for an easy, no-code platform.",
];

const solution = [
  "Designed a seamless landing page showing how businesses go online easily.",
  "Simplified journey from offline challenges to BuildMyStore solutions.",
  "Organized tools and services clearly.",
];

const features = [
  {
    title: "Interactive Video",
    text: "Introduces a relatable small business story.",
  },
  {
    title: "Smooth Transition",
    text: "Reveals the headline, CTA, and taskbar seamlessly.",
  },
  {
    title: "Clear Focus",
    text: "Guides attention to BuildMyStore’s value proposition.",
  },
  {
    title: "Immersive Experience",
    text: "Keeps users engaged and leads them forward.",
  },
];

const usages = [
  {
    title: "Intuitative Mockups",
    text: "Show how to launch a buisness using BMS",
  },
  {
    title: "Step-by-Step Flow ",
    text: "Each Screen represents one key step",
  },
  {
    title: "Subtle Motion",
    text: "Rotation keeps the section engaging",
  },
  {
    title: "Focused Highlights",
    text: "One step is emphasized at a time",
  },
  {
    title: "Ease & Accesibility",
    text: "Reinforces how simple BMS is to use",
  },
];

const trustElements = [
  {
    title: "Support Features:",
    text: "Highlight additional offerings like community, help, and social media support — addressing needs users might specifically be looking for.",
  },
  {
    title: "Testimonials:",
    text: "With a catchy heading, showcase real small businesses that BMS has supported, adding trust and a personal touch.",
  },
  {
    title: "Book Demo Banner:",
    text: "Acts as a final nudge, driving conversation and giving the extra push needed to secure the deal.",
  },
  {
    title: "FAQs:",
    text: "Placed at the end to resolve lingering doubts, ensuring clarity and reducing hesitation before decision-making.",
  },
];

export default function BMSPage() {
  const [showStickyButton, setShowStickyButton] = useState(false);
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
      title: "BuildMyStore — Landing Page Redesign Case Study",
      description:
        "Portfolio of Saniya — case studies, selected work, and contact.",
      // image: String(journey),
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
        background: "#FEF9F6",
        marginTop: -29,
      }}
    >
      <div style={{ background: "#FEF9F6", position: "relative" }}>
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

        <div
          className="flex flex-row "
          style={{
            margin: "30px 0 30px 0",
            alignItems: "start",
            justifyContent: "space-evenly",
            fontSize: "clamp(19px, 2.0vw, 35px)",
            fontWeight: 500,
            letterSpacing: 1.5,
            fontFamily: "Montserrat, serif",
            color: "#2d2d2d",
            gap: 10,
            paddingTop: "24px",
          }}
        >
          <p>BUILDMYSTORE</p>
          <p>BUILDMYSTORE</p>
          <p>BUILDMYSTORE</p>
          <p>BUILDMYSTORE</p>
          <p>BUILDMYSTORE</p>
        </div>

        {/* section 2 - thumbnail */}

        <div style={{ margin: "10px 80px 10px 80px" }}>
          <SectionImage src={bmsThumbnail} alt="BMS Case Study - Thumbnail" />
        </div>

        <div
          className="flex flex-col"
          style={{
            /* push this column to the right */
            margin: "80px 80px 50px auto",
            width: "40%",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <div
            className="flex flex-col"
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "30px",
              textAlign: "left",
              fontFamily: "Lucida Sans, sans-serif",
              fontSize: 18,
            }}
          >
            <h2
              style={{
                fontFamily: "Montserrat, serif",
                color: "#2d2d2d",
                fontWeight: 500,
                fontSize: 31,
              }}
            >
              DESIGN BRIEF
            </h2>
            <img
              src={bmsLogo}
              alt="BuildMyStore Logo"
              height={60}
              width={250}
            />
            <p style={{}}>
              BuildMyStore is an all-in-one platform that helps local buisnesses
              easily set up and manage their online stores from storefront
              creation to payments,orders, and deliveries
            </p>
            <p>
              As the platform grew, there was a need for clear, more engaging
              landing page that better communicated its value. This redisgned
              focused on telling a simple, compelling story of ease and
              efficiency, while showcasing BuildMyStore's tools in a more
              intuitive and impactful way.
            </p>
            <div>
              <h2 style={{ color: "#2d2d2d70" }}>Company</h2>
              <p>BuildMyStore</p>
            </div>
            <div>
              <h2 style={{ color: "#2d2d2d70" }}>Category</h2>
              <p>ECOMMERCE</p>
            </div>
            <div>
              <h2 style={{ color: "#2d2d2d70" }}>Timeline</h2>
              <p>March 2025 - May 2025 </p>
            </div>
            <div>
              <h2 style={{ color: "#2d2d2d70" }}>Role</h2>
              <p>UI/UX Designer</p>
            </div>

            <Link to={"/"}>
              <p style={{ textDecoration: "underline" }}>View Prototype</p>
            </Link>
          </div>
        </div>

        {/* Section -3 - macs */}

        <div
          className="flex flex-row"
          style={{ gap: "60px", margin: "0 70px", alignItems: "flex-start" }}
        >
          <div
            style={{
              height: 620,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={mac1}
              alt="Macbook Mockup 1"
              style={{ height: "100%", width: "auto", objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              height: 620,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={mac2}
              alt="Macbook Mockup 2"
              style={{ height: "100%", width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Section -4 */}

        <div
          className="flex flex-row"
          style={{ margin: "80px 80px 50px auto" }}
        >
          <div
            className="flex"
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              margin: "17px 30px 20px 100px",
              fontFamily: "Lucida Sans, sans-serif",
              fontSize: 21,
              color: "#2d2d2d",
              fontWeight: 700,
            }}
          >
            Challenges
          </div>
          <div
            className="flex flex-col"
            style={{
              width: "50%",
              margin: "20px 50px 20px 80px",
              gap: "50px",
              fontFamily: "Lucida Sans, sans-serif",
              fontSize: 18,
            }}
          >
            <div className="flex flex-col" style={{ gap: "30px" }}>
              <h2
                style={{
                  fontSize: 20,
                  // color: "#2d2d2d",
                  fontWeight: 700,
                }}
              >
                Who are we solving for
              </h2>
              <p>
                The initial round of discussion reaveled that the BuildMyStore
                landing page lacked clear flow, marking tools and information
                feel scattered and overwhelming.
              </p>
            </div>

            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {items.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "18px",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ marginRight: "10px" }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 30 }}>
                What are we solving:{" "}
              </h2>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {solution.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "18px",
                      lineHeight: "1.5",
                    }}
                  >
                    <span style={{ marginRight: "10px" }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section-5-end goals */}

        <div style={{ margin: 70, transform: "scale(0.95)" }}>
          <SectionImage src={endGoals} alt="BMS Case Study - End Goals" />
        </div>

        {/* Section -6 - breakdown of problem */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#5EA0D8",
            height: 1050,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#5EA0D8",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px",
            }}
          >
            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: 20,
                fontWeight: 700,
                fontFamily: "Lucida Sans, sans-serif",
                padding: "40px",
              }}
            >
              Gaps in existing design
            </p>

            <div style={{ width: "100%", marginTop: 10 }}>
              <div
                style={{
                  height: "clamp(660px, 85vh, 950px)",
                  borderRadius: 8,
                  overflow: "hidden",
                  transform: "none",
                  backgroundColor: "#5EA0D8",
                }}
              >
                <video
                  src={bmsBlue}
                  autoPlay
                  muted
                  loop
                  playsInline
                 
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="flex flex-row "
            style={{
              margin: "20px 0 20px 0",
              alignItems: "start",
              justifyContent: "space-evenly",
              fontSize: "clamp(19px, 1.7vw, 34px)",
              fontWeight: 500,
              letterSpacing: 1.3,
              fontFamily: "Montserrat, serif",
              color: "#2d2d2d",
              gap: 7,
            }}
          >
            <p>BREAKDOWN OF THE PROBLEM</p>
            <p>BREAKDOWN OF THE PROBLEM</p>
            <p>BREAKDOWN OF THE PROBLEM</p>
          </div>

          <div
            className="flex"
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 680,
              margin: "0 auto",
            }}
          >
            <p
              style={{
                maxWidth: "100%",
                textAlign: "center",
                fontFamily: "Lucida Sans, sans-serif",
                fontSize: 20,
                color: "#2d2d2d",
                marginBottom: -160,
                marginTop: 15,
              }}
            >
              From the finding above, I mapped out key sections for the landing
              page and the purpose each will serve
            </p>
          </div>
          <div></div>

          <div style={{ transform: "scale(.65)" }}>
            <SectionImage
              src={breakDown}
              alt="BMS Case Study - Breakdown of the Problem"
            />
          </div>
        </div>

        <div
          className="flex flex-row"
          style={{
            margin: "80px 80px 50px auto",
            marginTop:-160,
            fontFamily: "Lucida Sans, sans-serif",
            fontSize: 18,
          }}
        >
          <div
            className="flex"
            style={{
              width: "50%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              margin: "20px 30px 20px 100px",
              fontWeight: 700,
              fontSize: 21,
            }}
          >
            Impact Created
          </div>
          <div
            className="flex flex-col"
            style={{ width: "50%", margin: "20px 50px 20px 80px", gap: "50px" }}
          >
            <div>
              <h2 style={{ fontSize: 21, fontWeight: 700, marginBottom: 30 }}>
                Design exploration
              </h2>
              <p>
                Here's the final design for the BuildMyStore landing page. each
                setion has been broken down to explain its purpose and how it
                guides users through a clear journey - from identifying their
                challanges to discovering BuildMyStore's solutions. the design
                focuses on building trust,showcasing simplicity, and
                demonstrating how easily buisness owners can take their stores
                online, ultimately attracting and converting new users
              </p>
            </div>
          </div>
        </div>

        {/* section 7 */}
        {/* <SectionImage src={s3a} alt="BMS Case Study - Section 7" /> */}

        {/* section 8 */}

        {/* section 9 */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#6baf74",
            height: 910,
            marginBottom: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#6baf74",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "40px 20px 0",
                width: "100%",
                textAlign: "center",
                fontFamily: "Lucida Sans, sans-serif",
                fontSize: 18,
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 27,
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                BUILD MY STORE LANDING PAGE
              </h2>
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 17,
                  fontWeight: 600,
                  maxWidth: 580,
                  paddingBottom: 40,
                  color: "#2d2d2dd1",
                }}
              >
                The landing page highlights how BuildMyStore makes it simple for
                local buisnesses to take their store online, showcasing key
                tools, benifits and trust-building feautures.
              </p>
            </div>

            <div style={{ width: "100%", margin: "10px auto 0" }}>
              <div style={{ height: 700, borderRadius: 8, overflow: "hidden" }}>
                <video
                  src={bmsGreen}
                  autoPlay
                  muted
                  loop
                  playsInline
              
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* section 10 */}
        <div
          style={{
            display: "flex",
            position: "relative",
            margin: "200px 30px 100px 30px",
          }}
        >
          <div
            style={{
              width: "60%",
              objectFit: "cover",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "clamp(480px,65vh, 900px)",
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#ECE9E4",
                borderRadius: 30,
                padding: 60,
                margin: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                src={s10v}
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
          <div
            style={{
              // width: "50%",
              objectFit: "cover",
              // backgroundColor: "#FEF9F6",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              margin: " 0 80px 30px",
              fontSize: 19,
              fontFamily: "Lucida Sans, sans-serif",
            }}
          >
            {/* <img
              src={s10}
              alt="BMS Case Study - Section 10"
              style={{ width: "100%", objectFit: "cover" }}
            /> */}
            <div>
              <h2
                style={{
                  fontSize: "31px",
                  marginBottom: "30px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Hero section & CTA
              </h2>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {features.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "25px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span style={{ marginRight: "12px" }}>•</span>

                    <span>
                      <strong>{item.title}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 11 */}
        <div
          style={{
            display: "flex",
            position: "relative",
            margin: 30,
            marginLeft: 70,
          }}
        >
          <div
            style={{
              // width: "50%",
              objectFit: "cover",
              // backgroundColor: "#FEF9F6",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              margin: "10px 80px 20px",
              marginLeft: "20px",
              marginBottom: 30,
              fontSize: 19,
              fontFamily: "Lucida Sans, sans-serif",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "31px",
                  marginBottom: "30px",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                "How to use" section
              </h2>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {usages.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "25px",
                      lineHeight: "1.6",
                    }}
                  >
                    <span style={{ marginRight: "12px" }}>•</span>

                    <span>
                      <strong>{item.title}:</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              width: "60%",
              objectFit: "cover",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "clamp(480px,65vh, 900px)",
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#ECE9E4",
                borderRadius: 30,
                padding: "60px 80px",
                margin: 20,
                marginRight: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <video
                src={s11v}
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
        </div>
        {/* section 12 */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#E6CE6C",
            // height: 80,
            marginTop: 180,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#E6CE6C",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "40px 20px 0",
                width: "100%",
                textAlign: "center",
                fontFamily: "Lucida Sans, sans-serif",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 27,
                  fontWeight: 600,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                BMS Products & Features Section
              </h2>
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 17,
                  fontWeight: 600,
                  maxWidth: 580,
                  paddingBottom: 40,
                  color: "#2d2d2dd1",
                }}
              >
                All tools, features and product dtails are presented in a single
                view, amking it easier, more convincing and reliable for user to
                access all information at once
              </p>
            </div>

            <div style={{ width: "100%", margin: "10px auto 0" }}>
              <div
                style={{
                  height: 730,
                  marginBottom: 100,
                  borderRadius: 0,
                  overflow: "hidden",
                  transform: "scaleY(1)",
                  marginTop: 20,
                }}
              >
                <video
                  src={bmsYellow}
                  autoPlay
                  muted
                  loop
                  playsInline
                  
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* section 13 */}
        <div
          className="flex flex-row"
          style={{ gap: 50, margin: "170px 50px 10px 50px" }}
        >
          <div style={{ width: "55%" }}>
            <img src={trustEliments} alt="Trust Elements" />
          </div>
          <div
            style={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 30,
              marginTop: "50px",
              fontFamily: "Lucida Sans, sans-serif",
              fontSize: 19,
              lineHeight: 1.9,
            }}
          >
            <h2
              style={{
                fontSize: 31,
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 500,
                marginBottom: 30,
              }}
            >
              Trust-building & Conversation-driving elements
            </h2>
            <ul style={{ listStyle: "none", padding: 10, lineHeight: 2.1 }}>
              {trustElements.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "35px",
                    lineHeight: "1.9",
                  }}
                >
                  <span style={{ marginRight: "12px" }}>•</span>

                  <span>
                    <strong>{item.title} </strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* section 14 */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#F17568",
            padding:"40px 0",
            marginTop: 180,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#F17568",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "40px 20px 0",
                width: "100%",
                textAlign: "center",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
                BMS Products & Features Section
              </h2>
              <p
                style={{
                  margin: "16px 0 0",
                  fontSize: 17,
                  fontWeight: 600,
                  maxWidth: 580,
                  paddingBottom: 40,
                  color: "#2d2d2db6",
                }}
              >
              All tools, features and product dtails are presented in a single view, amking it easier, more convincing and reliable for user to access all information at once
              </p>
            </div> */}

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0px auto ",
              }}
            >
              <div
                style={{
                  borderRadius: 40,
                  overflow: "hidden",
                  backgroundColor: "#f176681f",
                  transform: "scale(1)",
                  width: "80%",
                  marginBottom:"40px"
                  
                }}
              >
                <video
                  src={bmsRed}
                  autoPlay
                  muted
                  loop
                  playsInline
                 
                  style={{
                    width: "100%",
                    height: "100%",
                    transform:"scaleX(1.19)",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 8,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* section 15 */}
        {/* <SectionImage src={s15} alt="BMS Case Study - Section 15" /> */}

        <div style={{ position: "relative" }}>
          <div>
            <CaseStudyContainer
              variant="light"
              zIndex={13}
              style={{
                marginTop: -30,
                position: "relative",
                marginBottom: 0,
                borderBottomLeftRadius: 48,
                borderBottomRightRadius: 48,
                // overflow: "hidden",
                // subtle shadow to lift it above the footer
                boxShadow: "0 24px 40px rgba(0,0,0,0.08)",
              }}
            >
              <SectionImage src={s15} alt="Numbers" />
            </CaseStudyContainer>
          </div>
        </div>

        <div
          style={{
            marginBottom: 0,
            position: "relative",
            zIndex: 10,
            marginTop: -150,
            overflow: "visible",
            transform: "scale(0.8)",
            height: 1000,
          }}
        >
          {/* <SectionImage src={s13} alt="Footer" /> */}
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
