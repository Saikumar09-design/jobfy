import React, { useEffect, useState } from "react";
import { FiSearch } from 'react-icons/fi';
import img from '../image/hero-image.png';
import FAQSection from "../Components/FAQsection";
import ContactUs from "../pages/ContactUs";
import logo from "../image/Screenshot 2025-11-26 150345.png";
import Footerpage from "../pages/Footerpage";

export default function LandingPage() {

  const navItem = {
    cursor: "pointer",
    transition: "0.2s",
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: '🎖️' },
    { number: '50K+', label: 'Successful Placements', icon: '✅' },
    { number: '500+', label: 'Global Employers', icon: '🌍' },
    { number: '98%', label: 'Client Satisfaction', icon: '⭐' }
  ];

  const aboutCard = {
    background: "#f1f5f9",
    borderRadius: "10px",
    padding: "12px 16px",
    marginBottom: "10px",
    fontWeight: "600",
    color: "#0f172a"
  };

   const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const isMobile = width < 640;
  const isTablet = width < 900;

  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", background: "#ffffff" }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        background: "linear-gradient(135deg,#0b5cff,#0439a6)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "0 6px 16px rgba(0,0,0,.12)",
        flexWrap: "wrap",
        gap: "10px"
      }}>

        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="Jobify"
            style={{
              height: "42px",
              objectFit: "contain",
              borderRadius: "30%"
            }}
          />
          <h3 style={{
            margin: 0,
            fontWeight: "700",
            letterSpacing: ".5px"
          }}>
            JobPortal
          </h3>
        </div>

        {/* MENU */}
        <div style={{
          display: "flex",
          gap: "20px",
          fontWeight: "600",
          fontSize: ".95rem",
          flexWrap: "wrap"
        }}>
          <span style={navItem}>About Company</span>
          <span style={navItem} onClick={() => scrollToSection("faq")}>FAQ</span>
          <span style={navItem} onClick={() => scrollToSection("contact")}>Contact Us</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-5" style={{ minHeight: "555px" }}>
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-12 mb-5">
              <p
                className="small fw-bold mb-2"
                style={{
                  color: "#14274e",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  background: "rgba(45, 90, 140, 0.1)",
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "6px",
                }}
              >
                Ready to Find Your Dream Job?
              </p>

              <h1
                className="fw-bold mb-4"
                style={{
                  color: "#14274e",
                  fontSize: "2.4rem",
                  lineHeight: "1.2",
                }}
              >
                Find a Perfect Job & Shape <br /> Your Future
              </h1>

              <p className="fs-5 mb-4" style={{ color: "#455a75" }}>
                Connect with prestigious institutions, Fortune 500 companies,
                and top-tier financial organizations hiring elite professionals.
              </p>

              {/* STATS */}
              <div className="row g-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6">
                    <div
                      style={{
                        background: "rgba(26, 54, 93, 0.05)",
                        borderRadius: "8px",
                        padding: "12px"
                      }}
                    >
                      <h3
                        className="fw-bold mb-1"
                        style={{
                          color: "#1a365d",
                          fontSize: "1.9rem",
                        }}
                      >
                        {stat.number}
                      </h3>
                      <p className="text-muted small mb-0">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="col-lg-6 col-md-12 text-center">
              <div
                className="p-3 rounded-4 shadow-sm"
                style={{
                  background: "white",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={img}
                  alt="Hero"
                  className="img-fluid rounded-4"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BUTTON SECTION */}
       <div style={{
      padding: isMobile ? "25px 12px" : "40px 15px",
      background: "#f8fafc"
    }}>
      <div
        style={{
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
          gap: isMobile ? "16px" : "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center"
        }}
      >

        {/* CARD 1 */}
        <ResponsiveCard
          title="Download Our App"
          subtitle="Get instant job alerts & apply faster"
          btnText="Install Now →"
          color1="#2563eb"
          color2="#1e3a8a"
          icon="https://cdn-icons-png.flaticon.com/512/724/724933.png"
          fullWidth={isMobile}
          small={isTablet}
        />

        {/* CARD 2 */}
        <ResponsiveCard
          title="Recruiter Panel"
         subtitle="Find great talent and hire fast"


          btnText="Post a Job →"
          color1="#22c55e"
          color2="#15803d"
          icon="https://cdn-icons-png.flaticon.com/512/3135/3135683.png"
          fullWidth={isMobile}
          small={isTablet}
        />

      </div>
    </div>

      {/* ABOUT SECTION */}
      <section id="about" style={{
        padding: "90px 20px",
        background: "linear-gradient(120deg, #f8fafc, #ffffff)"
      }}>
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 mb-4">
              <p style={{
                color: "#1e40af",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontSize: "13px"
              }}>
                About Our Company
              </p>

              <h2 style={{
                fontWeight: "800",
                fontSize: "2.5rem",
                color: "#14274e",
                marginBottom: "16px"
              }}>
                We Connect Talent With Opportunity
              </h2>

              <p style={{
                color: "#475569",
                fontSize: "16px",
                lineHeight: "1.7"
              }}>
                JobPortal is a next-generation recruitment platform designed to bridge the gap
                between skilled professionals and top hiring companies worldwide.
              </p>

              <ul style={{
                listStyle: "none",
                padding: 0,
                fontSize: "15px",
                color: "#334155",
                marginTop: "24px"
              }}>
                <li>✅ Verified employers & job listings</li>
                <li>✅ Smart job matching AI</li>
                <li>✅ Resume optimization tools</li>
                <li>✅ Confidential recruiter access</li>
                <li>✅ Real-time job alerts</li>
              </ul>

              <button style={{
                marginTop: "22px",
                background: "#0b5cff",
                color: "#fff",
                padding: "12px 26px",
                border: "none",
                borderRadius: "24px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(11,92,255,.25)"
              }}>
                Learn More →
              </button>
            </div>

            {/* RIGHT */}
            <div className="col-lg-6 col-md-12">
              <div style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 16px 40px rgba(0,0,0,0.08)",
                padding: "30px"
              }}>

                <h4 style={{ fontWeight: "700", marginBottom: "14px", color: "#1e293b" }}>
                  Why Choose Us?
                </h4>

                <div style={aboutCard}>🚀 Fast Hiring Process</div>
                <div style={aboutCard}>🎯 Candidate Precision Matching</div>
                <div style={aboutCard}>🔒 Secure Profiles & Hiring</div>
                <div style={aboutCard}>🌎 Global Job Network</div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <ContactUs />
      </div>

      <Footerpage />
    </div>
  );
}

/*** RESPONSIVE CARD COMPONENT ***/
function ResponsiveCard({ title, subtitle, btnText, color1, color2, icon }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg,${color1},${color2})`,
        color: "#fff",
        padding: "34px 34px",
        borderRadius: "26px",
        width: "100%",
        maxWidth: "600px",
        minHeight: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 20px 50px rgba(0,0,0,.2)",
        cursor: "pointer",
        transition: "all .35s ease",
        position: "relative",
        overflow: "hidden",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >
      <div>
        <h3 style={{ fontWeight: "800", marginBottom: "10px" }}>{title}</h3>
        <p style={{ opacity: 0.9, marginBottom: "16px", fontSize: "15px" }}>
          {subtitle}
        </p>

        <button style={{
          background: "#fff",
          color: color2,
          border: "none",
          borderRadius: "25px",
          padding: "8px 18px",
          fontWeight: "600",
          cursor: "pointer",
          transition: ".3s"
        }}>
          {btnText}
        </button>
      </div>

      <div style={{
        width: "64px",
        height: "64px",
        background: "rgba(255,255,255,0.25)",
        borderRadius: "50%",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img
          src={icon}
          alt="icon"
          style={{ width: "32px" }}
        />
      </div>
    </div>
  );
}
