import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";
import FooterSection from "@/imports/landing/FooterSection";

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
import bmsGreen from "@/assets/bms//bmsgreen.mp4";
import bmsYellow from "@/assets/bms//bmsyellow.mp4";
import bmsRed from "@/assets/bms/red.mp4";

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
        marginTop: 0,
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
        <div id="top"style={{marginTop:-20}}>
        <SectionImage  src={s1} alt="BMS Case Study - Section 1" />
</div>
        {/* Section 6  */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#65a3d4",
            height: 750,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#65a3d4",
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
                fontWeight: 600,
                padding: "40px",
              }}
            >
              Gaps in existing design
            </p>

            <div style={{ width: "100%", marginTop: 10 }}>
              <div
                style={{ height: 540, borderRadius: 8, overflow: "visible" }}
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
        {/* section 7 */}
        <SectionImage src={s3a} alt="BMS Case Study - Section 7" />

        {/* section 8 */}

        {/* section 9 */}

        <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#6baf74",
            height: 850,
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
              }}
            >
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
                BUILD MY STORE LANDING PAGE
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
                The landing page highlights how BuildMyStore makes it simple for
                local buisnesses to take their store online, showcasing key
                tools, benifits and trust-building feautures.
              </p>
            </div>

            <div style={{ width: "100%", margin: "10px auto 0" }}>
              <div style={{ height: 540, borderRadius: 8, overflow: "hidden" }}>
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
        <div style={{ display: "flex", position: "relative", margin: 30 }}>
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
                height: 700,
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#f0f3e1be",
                borderRadius: 30,
                padding: 40,
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
              alignItems: "center",
              justifyContent: "center",
              margin: "80px 30px",
            }}
          >
            {/* <img
              src={s10}
              alt="BMS Case Study - Section 10"
              style={{ width: "100%", objectFit: "cover" }}
            /> */}
            <div>
              <p>hii</p>
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
              backgroundColor: "#FEF9F6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "80px 30px",
              marginBottom: 30,
            }}
          >
            <img
              src={s11}
              alt="BMS Case Study - Section 11"
              style={{ width: "100%", objectFit: "cover" }}
            />
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
                height: 700,
                // width: "100%",
                objectFit: "fill",
                backgroundColor: "#f0f3e1be",
                borderRadius: 30,
                padding: 40,
                margin: 20,
                marginRight: -60,
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
            height: 930,
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
            </div>

            <div style={{ width: "100%", margin:"10px auto 0" }}>
              <div style={{ height: 620, borderRadius: 8, overflow: "hidden" }}>
                <video
                  src={bmsYellow}
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

        {/* section 13 */}
        <SectionImage src={s13} alt="BMS Case Study - Section 13" />

        {/* section 14 */}

          <div
          style={{
            // display: "flex",
            position: "relative",
            backgroundColor: "#EF775E",
            height: 1050,
            marginTop: 180,
          }}
        >
          <div
            style={{
              width: "100%",
              objectFit: "cover",
              backgroundColor: "#EF775E",
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

            <div style={{ width: "100%", display:"flex", justifyContent:"center",alignItems:"center", margin:"100px auto 0" }}>
              <div style={{  borderRadius: 8, overflow: "hidden" }}>
                <video
                  src={bmsRed}
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
