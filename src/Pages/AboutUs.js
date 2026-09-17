// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // function AboutUs() {
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setVisible(true);
// //     }, 200);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   const stats = [
// //     {
// //       number: "100+",
// //       title: "Projects",
// //       icon: "🚀",
// //     },
// //     {
// //       number: "50+",
// //       title: "Happy Clients",
// //       icon: "🤝",
// //     },
// //     {
// //       number: "5+",
// //       title: "Years Experience",
// //       icon: "⭐",
// //     },
// //     {
// //       number: "24/7",
// //       title: "Support",
// //       icon: "⚡",
// //     },
// //   ];

// //   const values = [
// //     {
// //       icon: "🎯",
// //       title: "Result Driven",
// //       text: "We focus on strategies that generate real business growth and measurable results.",
// //     },
// //     {
// //       icon: "💡",
// //       title: "Creative Thinking",
// //       text: "We combine creativity, technology and marketing to create unique digital experiences.",
// //     },
// //     {
// //       icon: "📊",
// //       title: "Data Powered",
// //       text: "Our campaigns are continuously improved using data, insights and performance analysis.",
// //     },
// //     {
// //       icon: "🤝",
// //       title: "Client First",
// //       text: "We build long-term partnerships by understanding every client's unique business goals.",
// //     },
// //   ];

// //   return (
// //     <>
// //       <style>{`

// //         * {
// //           box-sizing: border-box;
// //         }

// //         .about-page {
// //           position: relative;

// //           width: 100%;

// //           min-height: 100vh;

// //           overflow: hidden;

// //           background:
// //             radial-gradient(
// //               circle at 15% 20%,
// //               rgba(137, 45, 255, 0.14),
// //               transparent 30%
// //             ),
// //             radial-gradient(
// //               circle at 85% 30%,
// //               rgba(0, 110, 255, 0.13),
// //               transparent 30%
// //             ),
// //             #030308;

// //           color: white;

// //           font-family:
// //             Arial,
// //             Helvetica,
// //             sans-serif;
// //         }


// //         /* =========================
// //            BACKGROUND GLOW
// //         ========================= */

// //         .about-glow {
// //           position: absolute;

// //           width: 450px;
// //           height: 450px;

// //           border-radius: 50%;

// //           filter: blur(90px);

// //           opacity: 0.25;

// //           pointer-events: none;
// //         }


// //         .about-glow-one {
// //           top: 100px;
// //           left: -200px;

// //           background: #a62cff;

// //           animation:
// //             glowMoveOne 8s ease-in-out infinite alternate;
// //         }


// //         .about-glow-two {
// //           top: 600px;
// //           right: -200px;

// //           background: #176cff;

// //           animation:
// //             glowMoveTwo 10s ease-in-out infinite alternate;
// //         }


// //         @keyframes glowMoveOne {

// //           from {
// //             transform: translate(0, 0);
// //           }

// //           to {
// //             transform: translate(180px, 120px);
// //           }

// //         }


// //         @keyframes glowMoveTwo {

// //           from {
// //             transform: translate(0, 0);
// //           }

// //           to {
// //             transform: translate(-180px, -100px);
// //           }

// //         }


// //         /* =========================
// //            PARTICLES
// //         ========================= */

// //         .about-particle {
// //           position: absolute;

// //           width: 4px;
// //           height: 4px;

// //           border-radius: 50%;

// //           background: #c95cff;

// //           box-shadow:
// //             0 0 12px #c95cff;

// //           animation:
// //             particleFloat 5s ease-in-out infinite;
// //         }


// //         .particle-1 {
// //           top: 15%;
// //           left: 12%;
// //         }

// //         .particle-2 {
// //           top: 30%;
// //           left: 45%;

// //           animation-delay: 1s;
// //         }

// //         .particle-3 {
// //           top: 65%;
// //           left: 20%;

// //           animation-delay: 2s;
// //         }

// //         .particle-4 {
// //           top: 20%;
// //           right: 18%;

// //           animation-delay: 1.5s;
// //         }

// //         .particle-5 {
// //           top: 70%;
// //           right: 15%;

// //           animation-delay: 3s;
// //         }


// //         @keyframes particleFloat {

// //           0%,
// //           100% {
// //             transform:
// //               translateY(0)
// //               scale(1);

// //             opacity: 0.4;
// //           }

// //           50% {
// //             transform:
// //               translateY(-25px)
// //               scale(1.6);

// //             opacity: 1;
// //           }

// //         }


// //         /* =========================
// //            HERO
// //         ========================= */

// //         .about-hero {
// //           position: relative;

// //           min-height: 520px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;

// //           text-align: center;

// //           padding: 100px 20px 80px;

// //           z-index: 2;
// //         }


// //         .about-hero-content {
// //           max-width: 900px;

// //           opacity: 0;

// //           transform: translateY(40px);

// //           transition:
// //             opacity 1s ease,
// //             transform 1s ease;
// //         }


// //         .about-hero-content.show {
// //           opacity: 1;

// //           transform: translateY(0);
// //         }


// //         .about-small-title {
// //           display: inline-block;

// //           margin-bottom: 20px;

// //           padding: 9px 18px;

// //           border-radius: 50px;

// //           color: #c96aff;

// //           background:
// //             rgba(166, 44, 255, 0.08);

// //           border:
// //             1px solid rgba(166, 44, 255, 0.25);

// //           font-size: 13px;

// //           letter-spacing: 3px;

// //           text-transform: uppercase;

// //           box-shadow:
// //             0 0 25px rgba(166, 44, 255, 0.12);

// //           animation:
// //             badgePulse 3s ease-in-out infinite;
// //         }


// //         @keyframes badgePulse {

// //           0%,
// //           100% {
// //             box-shadow:
// //               0 0 15px rgba(166, 44, 255, 0.1);
// //           }

// //           50% {
// //             box-shadow:
// //               0 0 30px rgba(166, 44, 255, 0.35);
// //           }

// //         }


// //         .about-hero h1 {
// //           margin: 0;

// //           font-size: clamp(
// //             48px,
// //             7vw,
// //             88px
// //           );

// //           line-height: 1.05;

// //           font-weight: 800;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #c52cff,
// //               #7f8cff,
// //               #42c8ff,
// //               #c52cff
// //             );

// //           background-size: 300% auto;

// //           -webkit-background-clip: text;
// //           background-clip: text;

// //           color: transparent;

// //           animation:
// //             gradientText 5s linear infinite;
// //         }


// //         @keyframes gradientText {

// //           to {
// //             background-position:
// //               300% center;
// //           }

// //         }


// //         .about-hero h2 {
// //           margin: 20px 0;

// //           font-size: clamp(
// //             24px,
// //             3vw,
// //             38px
// //           );

// //           color: #f4f4f7;
// //         }


// //         .about-hero p {
// //           max-width: 720px;

// //           margin: 0 auto;

// //           color: #a5a5b4;

// //           font-size: 17px;

// //           line-height: 1.8;
// //         }


// //         /* =========================
// //            MAIN CONTAINER
// //         ========================= */

// //         .about-container {
// //           position: relative;

// //           width: 100%;

// //           max-width: 1200px;

// //           margin: auto;

// //           padding:
// //             40px 25px 100px;

// //           z-index: 2;
// //         }


// //         /* =========================
// //            WHO WE ARE
// //         ========================= */

// //         .about-who {
// //           display: grid;

// //           grid-template-columns:
// //             1fr 1fr;

// //           gap: 70px;

// //           align-items: center;

// //           margin-bottom: 120px;
// //         }


// //         .about-section-label {
// //           color: #b74cff;

// //           font-size: 13px;

// //           font-weight: 600;

// //           letter-spacing: 3px;

// //           text-transform: uppercase;

// //           margin-bottom: 15px;
// //         }


// //         .about-who h2 {
// //           margin: 0 0 20px;

// //           font-size: 42px;

// //           line-height: 1.15;
// //         }


// //         .about-gradient-text {
// //           background:
// //             linear-gradient(
// //               90deg,
// //               #c02cff,
// //               #3e9cff
// //             );

// //           -webkit-background-clip: text;
// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .about-who p {
// //           color: #9999a8;

// //           font-size: 16px;

// //           line-height: 1.8;

// //           margin-bottom: 18px;
// //         }


// //         /* =========================
// //            DIGITAL ORB
// //         ========================= */

// //         .about-orb-wrapper {
// //           position: relative;

// //           height: 400px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;
// //         }


// //         .about-orb {
// //           position: relative;

// //           width: 270px;
// //           height: 270px;

// //           border-radius: 50%;

// //           background:
// //             radial-gradient(
// //               circle at 35% 30%,
// //               rgba(255,255,255,.25),
// //               rgba(145,45,255,.15) 25%,
// //               rgba(20,10,50,.8) 65%
// //             );

// //           border:
// //             1px solid rgba(184,75,255,.6);

// //           box-shadow:
// //             0 0 40px rgba(170,50,255,.35),
// //             inset 0 0 50px rgba(80,100,255,.15);

// //           animation:
// //             orbFloat 5s ease-in-out infinite;
// //         }


// //         @keyframes orbFloat {

// //           0%,
// //           100% {
// //             transform:
// //               translateY(0)
// //               rotate(0deg);
// //           }

// //           50% {
// //             transform:
// //               translateY(-20px)
// //               rotate(5deg);
// //           }

// //         }


// //         .about-orb::before,
// //         .about-orb::after {
// //           content: "";

// //           position: absolute;

// //           top: 50%;
// //           left: 50%;

// //           width: 340px;
// //           height: 110px;

// //           border:
// //             2px solid rgba(100,90,255,.55);

// //           border-radius: 50%;

// //           transform:
// //             translate(-50%, -50%)
// //             rotate(25deg);

// //           box-shadow:
// //             0 0 20px rgba(100,90,255,.3);
// //         }


// //         .about-orb::after {
// //           transform:
// //             translate(-50%, -50%)
// //             rotate(-25deg);
// //         }


// //         .orb-center {
// //           position: absolute;

// //           top: 50%;
// //           left: 50%;

// //           transform:
// //             translate(-50%, -50%);

// //           text-align: center;
// //         }


// //         .orb-center strong {
// //           display: block;

// //           font-size: 38px;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #c32cff,
// //               #4ac8ff
// //             );

// //           -webkit-background-clip: text;
// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .orb-center span {
// //           color: #aaa;

// //           font-size: 12px;

// //           letter-spacing: 2px;
// //         }


// //         /* =========================
// //            STATS
// //         ========================= */

// //         .about-stats {
// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 18px;

// //           margin-bottom: 120px;
// //         }


// //         .about-stat {
// //           position: relative;

// //           padding: 30px 20px;

// //           text-align: center;

// //           border-radius: 18px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255,255,255,.055),
// //               rgba(255,255,255,.015)
// //             );

// //           border:
// //             1px solid rgba(255,255,255,.08);

// //           overflow: hidden;

// //           transition:
// //             transform .35s ease,
// //             border .35s ease,
// //             box-shadow .35s ease;
// //         }


// //         .about-stat::before {
// //           content: "";

// //           position: absolute;

// //           top: -80px;
// //           left: -80px;

// //           width: 150px;
// //           height: 150px;

// //           border-radius: 50%;

// //           background: #9d32ff;

// //           filter: blur(70px);

// //           opacity: .15;
// //         }


// //         .about-stat:hover {
// //           transform:
// //             translateY(-10px);

// //           border-color:
// //             rgba(181, 66, 255, .4);

// //           box-shadow:
// //             0 15px 40px rgba(125, 35, 255, .15);
// //         }


// //         .about-stat-icon {
// //           font-size: 28px;

// //           margin-bottom: 12px;
// //         }


// //         .about-stat h3 {
// //           margin: 0;

// //           font-size: 34px;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #bd36ff,
// //               #46bfff
// //             );

// //           -webkit-background-clip: text;
// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .about-stat p {
// //           margin: 8px 0 0;

// //           color: #888896;

// //           font-size: 14px;
// //         }


// //         /* =========================
// //            MISSION VISION
// //         ========================= */

// //         .about-mission {
// //           display: grid;

// //           grid-template-columns:
// //             1fr 1fr;

// //           gap: 25px;

// //           margin-bottom: 120px;
// //         }


// //         .about-info-card {
// //           position: relative;

// //           padding: 40px;

// //           min-height: 260px;

// //           border-radius: 22px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(145,50,255,.09),
// //               rgba(20,90,255,.04)
// //             );

// //           border:
// //             1px solid rgba(160,70,255,.18);

// //           overflow: hidden;

// //           transition: .4s ease;
// //         }


// //         .about-info-card::after {
// //           content: "";

// //           position: absolute;

// //           width: 180px;
// //           height: 180px;

// //           right: -80px;
// //           bottom: -80px;

// //           border-radius: 50%;

// //           background:
// //             #6e35ff;

// //           filter: blur(80px);

// //           opacity: .18;
// //         }


// //         .about-info-card:hover {
// //           transform:
// //             translateY(-8px);

// //           border-color:
// //             rgba(180,70,255,.45);

// //           box-shadow:
// //             0 20px 50px rgba(100,40,255,.13);
// //         }


// //         .about-card-icon {
// //           font-size: 34px;

// //           margin-bottom: 18px;
// //         }


// //         .about-info-card h3 {
// //           margin: 0 0 12px;

// //           font-size: 25px;
// //         }


// //         .about-info-card p {
// //           margin: 0;

// //           color: #9999a8;

// //           line-height: 1.8;

// //           font-size: 15px;
// //         }


// //         /* =========================
// //            VALUES
// //         ========================= */

// //         .about-values-title {
// //           text-align: center;

// //           margin-bottom: 45px;
// //         }


// //         .about-values-title h2 {
// //           margin: 0 0 12px;

// //           font-size: 42px;
// //         }


// //         .about-values-title p {
// //           margin: 0;

// //           color: #898996;
// //         }


// //         .about-values {
// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 18px;
// //         }


// //         .about-value-card {
// //           padding: 28px 22px;

// //           border-radius: 17px;

// //           background:
// //             rgba(255,255,255,.025);

// //           border:
// //             1px solid rgba(255,255,255,.07);

// //           transition: .35s ease;
// //         }


// //         .about-value-card:hover {
// //           transform:
// //             translateY(-8px);

// //           background:
// //             rgba(145,50,255,.07);

// //           border-color:
// //             rgba(175,65,255,.3);

// //           box-shadow:
// //             0 15px 40px rgba(130,40,255,.12);
// //         }


// //         .about-value-icon {
// //           width: 50px;
// //           height: 50px;

// //           display: flex;

// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 13px;

// //           background:
// //             rgba(155,50,255,.1);

// //           font-size: 23px;

// //           margin-bottom: 18px;
// //         }


// //         .about-value-card h3 {
// //           margin: 0 0 10px;

// //           font-size: 17px;
// //         }


// //         .about-value-card p {
// //           margin: 0;

// //           color: #858592;

// //           font-size: 13px;

// //           line-height: 1.7;
// //         }


// //         /* =========================
// //            CTA
// //         ========================= */

// //         .about-cta {
// //           position: relative;

// //           margin-top: 110px;

// //           padding: 65px 30px;

// //           text-align: center;

// //           border-radius: 25px;

// //           overflow: hidden;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               rgba(150,45,255,.13),
// //               rgba(35,100,255,.1)
// //             );

// //           border:
// //             1px solid rgba(170,70,255,.2);
// //         }


// //         .about-cta::before {
// //           content: "";

// //           position: absolute;

// //           width: 350px;
// //           height: 350px;

// //           top: -250px;
// //           left: 50%;

// //           transform:
// //             translateX(-50%);

// //           border-radius: 50%;

// //           background:
// //             #a832ff;

// //           filter: blur(100px);

// //           opacity: .18;
// //         }


// //         .about-cta h2 {
// //           position: relative;

// //           margin: 0 0 15px;

// //           font-size: 38px;
// //         }


// //         .about-cta p {
// //           position: relative;

// //           color: #9999a8;

// //           margin-bottom: 28px;
// //         }


// //         .about-cta a {
// //           position: relative;

// //           display: inline-block;

// //           padding: 14px 28px;

// //           border-radius: 10px;

// //           color: white;

// //           text-decoration: none;

// //           font-weight: 600;

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #a82cff,
// //               #326cff
// //             );

// //           box-shadow:
// //             0 0 25px rgba(130,45,255,.3);

// //           transition: .3s ease;
// //         }


// //         .about-cta a:hover {
// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 35px rgba(130,45,255,.5);
// //         }


// //         /* =========================
// //            RESPONSIVE
// //         ========================= */

// //         @media (max-width: 900px) {

// //           .about-hero {
// //             min-height: 450px;

// //             padding:
// //               80px 20px 50px;
// //           }


// //           .about-who {
// //             grid-template-columns: 1fr;

// //             gap: 20px;

// //             margin-bottom: 80px;
// //           }


// //           .about-orb-wrapper {
// //             height: 330px;

// //             order: -1;
// //           }


// //           .about-stats {
// //             grid-template-columns:
// //               repeat(2, 1fr);

// //             margin-bottom: 80px;
// //           }


// //           .about-mission {
// //             grid-template-columns: 1fr;

// //             margin-bottom: 80px;
// //           }


// //           .about-values {
// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //         }


// //         @media (max-width: 600px) {

// //           .about-hero {
// //             min-height: 430px;

// //             padding:
// //               70px 18px 40px;
// //           }


// //           .about-small-title {
// //             font-size: 10px;

// //             letter-spacing: 2px;
// //           }


// //           .about-hero h2 {
// //             font-size: 22px;
// //           }


// //           .about-hero p {
// //             font-size: 14px;

// //             line-height: 1.7;
// //           }


// //           .about-container {
// //             padding:
// //               20px 16px 70px;
// //           }


// //           .about-who h2 {
// //             font-size: 32px;
// //           }


// //           .about-who p {
// //             font-size: 14px;
// //           }


// //           .about-orb {
// //             width: 210px;
// //             height: 210px;
// //           }


// //           .about-orb::before,
// //           .about-orb::after {
// //             width: 270px;
// //             height: 90px;
// //           }


// //           .orb-center strong {
// //             font-size: 30px;
// //           }


// //           .about-stats {
// //             gap: 10px;
// //           }


// //           .about-stat {
// //             padding: 22px 10px;
// //           }


// //           .about-stat h3 {
// //             font-size: 27px;
// //           }


// //           .about-stat p {
// //             font-size: 12px;
// //           }


// //           .about-info-card {
// //             padding: 28px 22px;
// //           }


// //           .about-values-title h2 {
// //             font-size: 32px;
// //           }


// //           .about-values {
// //             grid-template-columns: 1fr;
// //           }


// //           .about-cta {
// //             margin-top: 75px;

// //             padding:
// //               45px 20px;
// //           }


// //           .about-cta h2 {
// //             font-size: 28px;
// //           }

// //         }

// //       `}</style>


// //       <section
// //         className="about-page"
// //         id="about-us"
// //       >

// //         {/* Background */}

// //         <div className="about-glow about-glow-one"></div>

// //         <div className="about-glow about-glow-two"></div>


// //         <div className="about-particle particle-1"></div>
// //         <div className="about-particle particle-2"></div>
// //         <div className="about-particle particle-3"></div>
// //         <div className="about-particle particle-4"></div>
// //         <div className="about-particle particle-5"></div>


// //         {/* =========================
// //             HERO
// //         ========================= */}

// //         <div className="about-hero">

// //           <div
// //             className={`about-hero-content ${
// //               visible ? "show" : ""
// //             }`}
// //           >

// //             <div className="about-small-title">
// //               ✦ ABOUT ROHIL SPARK MEDIA
// //             </div>


// //             <h1>
// //               We Create.
// //               <br />
// //               We Inspire.
// //               <br />
// //               We Grow.
// //             </h1>


// //             <h2>
// //               Your Digital Growth Partner
// //             </h2>


// //             <p>
// //               Rohil Spark Media is a creative digital
// //               marketing agency focused on helping
// //               businesses build powerful brands,
// //               reach the right audience and grow
// //               faster in the digital world.
// //             </p>

// //           </div>

// //         </div>


// //         <div className="about-container">


// //           {/* =========================
// //               WHO WE ARE
// //           ========================= */}

// //           <div className="about-who">


// //             <div>

// //               <div className="about-section-label">
// //                 WHO WE ARE
// //               </div>


// //               <h2>
// //                 Turning Ideas Into
// //                 <br />

// //                 <span className="about-gradient-text">
// //                   Digital Impact
// //                 </span>
// //               </h2>


// //               <p>
// //                 We are a passionate team of
// //                 digital marketers, creatives and
// //                 strategists who believe every
// //                 business has a unique story.
// //               </p>


// //               <p>
// //                 Our goal is to transform that story
// //                 into a strong digital presence using
// //                 innovative strategies, creative
// //                 content and performance-driven
// //                 marketing.
// //               </p>


// //               <p>
// //                 From SEO and Google Ads to Meta Ads,
// //                 social media and branding, we create
// //                 complete digital solutions designed
// //                 around your business goals.
// //               </p>

// //             </div>


// //             {/* ORB */}

// //             <div className="about-orb-wrapper">

// //               <div className="about-orb">

// //                 <div className="orb-center">

// //                   <strong>
// //                     ROHIL
// //                   </strong>

// //                   <span>
// //                     DIGITAL SPARK MEDIA
// //                   </span>

// //                 </div>

// //               </div>

// //             </div>

// //           </div>


// //           {/* =========================
// //               STATS
// //           ========================= */}

// //           <div className="about-stats">

// //             {stats.map((item, index) => (

// //               <div
// //                 className="about-stat"
// //                 key={index}
// //               >

// //                 <div className="about-stat-icon">
// //                   {item.icon}
// //                 </div>

// //                 <h3>
// //                   {item.number}
// //                 </h3>

// //                 <p>
// //                   {item.title}
// //                 </p>

// //               </div>

// //             ))}

// //           </div>


// //           {/* =========================
// //               MISSION / VISION
// //           ========================= */}

// //           <div className="about-mission">


// //             <div className="about-info-card">

// //               <div className="about-card-icon">
// //                 🎯
// //               </div>

// //               <h3>
// //                 Our Mission
// //               </h3>

// //               <p>
// //                 Our mission is to help businesses
// //                 succeed online by delivering
// //                 creative, transparent and
// //                 result-oriented digital marketing
// //                 solutions.
// //               </p>

// //             </div>


// //             <div className="about-info-card">

// //               <div className="about-card-icon">
// //                 🚀
// //               </div>

// //               <h3>
// //                 Our Vision
// //               </h3>

// //               <p>
// //                 Our vision is to become a trusted
// //                 digital growth partner for businesses
// //                 by continuously innovating and
// //                 creating meaningful digital
// //                 experiences.
// //               </p>

// //             </div>

// //           </div>


// //           {/* =========================
// //               VALUES
// //           ========================= */}

// //           <div className="about-values-title">

// //             <div className="about-section-label">
// //               WHY ROHIL
// //             </div>

// //             <h2>
// //               What Makes Us
// //               <span className="about-gradient-text">
// //                 {" "}Different
// //               </span>
// //             </h2>

// //             <p>
// //               We don't just market your business.
// //               We help build your digital future.
// //             </p>

// //           </div>


// //           <div className="about-values">

// //             {values.map((item, index) => (

// //               <div
// //                 className="about-value-card"
// //                 key={index}
// //               >

// //                 <div className="about-value-icon">
// //                   {item.icon}
// //                 </div>

// //                 <h3>
// //                   {item.title}
// //                 </h3>

// //                 <p>
// //                   {item.text}
// //                 </p>

// //               </div>

// //             ))}

// //           </div>


// //           {/* =========================
// //               CTA
// //           ========================= */}

// //           <div className="about-cta">

// //             <h2>
// //               Ready To Grow Your Business?
// //             </h2>

// //             <p>
// //               Let's create something powerful
// //               together.
// //             </p>

           
// // <Link to="/contact">
// //   Start your Journey
// // </Link>
// //           </div>


// //         </div>

// //       </section>
// //     </>
// //   );
// // }

// // export default AboutUs;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import HandshakeIcon from "@mui/icons-material/Handshake";
// import StarIcon from "@mui/icons-material/Star";
// import BoltIcon from "@mui/icons-material/Bolt";
// import TrackChangesIcon from "@mui/icons-material/TrackChanges";
// import LightbulbIcon from "@mui/icons-material/Lightbulb";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// function AboutUs() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 200);

//     return () => clearTimeout(timer);
//   }, []);

//   const stats = [
//     {
//       number: "100+",
//       title: "Projects",
//       icon: RocketLaunchIcon,
//     },
//     {
//       number: "50+",
//       title: "Happy Clients",
//       icon: HandshakeIcon,
//     },
//     {
//       number: "5+",
//       title: "Years Experience",
//       icon: StarIcon,
//     },
//     {
//       number: "24/7",
//       title: "Support",
//       icon: BoltIcon,
//     },
//   ];

//   const values = [
//     {
//       icon: TrackChangesIcon,
//       title: "Result Driven",
//       text: "We focus on strategies that generate real business growth and measurable results.",
//     },
//     {
//       icon: LightbulbIcon,
//       title: "Creative Thinking",
//       text: "We combine creativity, technology and marketing to create unique digital experiences.",
//     },
//     {
//       icon: BarChartIcon,
//       title: "Data Powered",
//       text: "Our campaigns are continuously improved using data, insights and performance analysis.",
//     },
//     {
//       icon: HandshakeIcon,
//       title: "Client First",
//       text: "We build long-term partnerships by understanding every client's unique business goals.",
//     },
//   ];

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .about-page {
//           position: relative;
//           width: 100%;
//           min-height: 100vh;
//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 15% 20%,
//               rgba(137, 45, 255, 0.14),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 85% 30%,
//               rgba(0, 110, 255, 0.13),
//               transparent 30%
//             ),
//             #030308;

//           color: white;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;
//         }

//         /* =========================
//            BACKGROUND GLOW
//         ========================= */

//         .about-glow {
//           position: absolute;
//           width: 450px;
//           height: 450px;
//           border-radius: 50%;
//           filter: blur(90px);
//           opacity: 0.25;
//           pointer-events: none;
//         }

//         .about-glow-one {
//           top: 100px;
//           left: -200px;
//           background: #a62cff;

//           animation:
//             glowMoveOne 8s ease-in-out infinite alternate;
//         }

//         .about-glow-two {
//           top: 600px;
//           right: -200px;
//           background: #176cff;

//           animation:
//             glowMoveTwo 10s ease-in-out infinite alternate;
//         }

//         @keyframes glowMoveOne {
//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(180px, 120px);
//           }
//         }

//         @keyframes glowMoveTwo {
//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(-180px, -100px);
//           }
//         }

//         /* =========================
//            PARTICLES
//         ========================= */

//         .about-particle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           border-radius: 50%;

//           background: #c95cff;

//           box-shadow:
//             0 0 12px #c95cff;

//           animation:
//             particleFloat 5s ease-in-out infinite;
//         }

//         .particle-1 {
//           top: 15%;
//           left: 12%;
//         }

//         .particle-2 {
//           top: 30%;
//           left: 45%;
//           animation-delay: 1s;
//         }

//         .particle-3 {
//           top: 65%;
//           left: 20%;
//           animation-delay: 2s;
//         }

//         .particle-4 {
//           top: 20%;
//           right: 18%;
//           animation-delay: 1.5s;
//         }

//         .particle-5 {
//           top: 70%;
//           right: 15%;
//           animation-delay: 3s;
//         }

//         @keyframes particleFloat {
//           0%,
//           100% {
//             transform:
//               translateY(0)
//               scale(1);

//             opacity: 0.4;
//           }

//           50% {
//             transform:
//               translateY(-25px)
//               scale(1.6);

//             opacity: 1;
//           }
//         }

//         /* =========================
//            HERO
//         ========================= */

//         .about-hero {
//           position: relative;
//           min-height: 520px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           text-align: center;

//           padding: 100px 20px 80px;

//           z-index: 2;
//         }

//         .about-hero-content {
//           max-width: 900px;

//           opacity: 0;

//           transform: translateY(40px);

//           transition:
//             opacity 1s ease,
//             transform 1s ease;
//         }

//         .about-hero-content.show {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .about-small-title {
//           display: inline-flex;

//           align-items: center;
//           justify-content: center;

//           gap: 8px;

//           margin-bottom: 20px;

//           padding: 9px 18px;

//           border-radius: 50px;

//           color: #c96aff;

//           background:
//             rgba(166, 44, 255, 0.08);

//           border:
//             1px solid rgba(166, 44, 255, 0.25);

//           font-size: 13px;

//           letter-spacing: 3px;

//           text-transform: uppercase;

//           box-shadow:
//             0 0 25px rgba(166, 44, 255, 0.12);

//           animation:
//             badgePulse 3s ease-in-out infinite;
//         }

//         .about-title-icon {
//           font-size: 17px !important;
//           flex-shrink: 0;
//         }

//         @keyframes badgePulse {
//           0%,
//           100% {
//             box-shadow:
//               0 0 15px rgba(166, 44, 255, 0.1);
//           }

//           50% {
//             box-shadow:
//               0 0 30px rgba(166, 44, 255, 0.35);
//           }
//         }

//         .about-hero h1 {
//           margin: 0;

//           font-size: clamp(
//             48px,
//             7vw,
//             88px
//           );

//           line-height: 1.05;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #c52cff,
//               #7f8cff,
//               #42c8ff,
//               #c52cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           animation:
//             gradientText 5s linear infinite;
//         }

//         @keyframes gradientText {
//           to {
//             background-position:
//               300% center;
//           }
//         }

//         .about-hero h2 {
//           margin: 20px 0;

//           font-size: clamp(
//             24px,
//             3vw,
//             38px
//           );

//           color: #f4f4f7;
//         }

//         .about-hero p {
//           max-width: 720px;

//           margin: 0 auto;

//           color: #a5a5b4;

//           font-size: 17px;

//           line-height: 1.8;
//         }

//         /* =========================
//            MAIN CONTAINER
//         ========================= */

//         .about-container {
//           position: relative;

//           width: 100%;

//           max-width: 1200px;

//           margin: auto;

//           padding:
//             40px 25px 100px;

//           z-index: 2;
//         }

//         /* =========================
//            WHO WE ARE
//         ========================= */

//         .about-who {
//           display: grid;

//           grid-template-columns:
//             1fr 1fr;

//           gap: 70px;

//           align-items: center;

//           margin-bottom: 120px;
//         }

//         .about-section-label {
//           color: #b74cff;

//           font-size: 13px;

//           font-weight: 600;

//           letter-spacing: 3px;

//           text-transform: uppercase;

//           margin-bottom: 15px;
//         }

//         .about-who h2 {
//           margin: 0 0 20px;

//           font-size: 42px;

//           line-height: 1.15;
//         }

//         .about-gradient-text {
//           background:
//             linear-gradient(
//               90deg,
//               #c02cff,
//               #3e9cff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;
//         }

//         .about-who p {
//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;

//           margin-bottom: 18px;
//         }

//         /* =========================
//            DIGITAL ORB
//         ========================= */

//         .about-orb-wrapper {
//           position: relative;

//           height: 400px;

//           display: flex;

//           align-items: center;

//           justify-content: center;
//         }

//         .about-orb {
//           position: relative;

//           width: 270px;
//           height: 270px;

//           border-radius: 50%;

//           background:
//             radial-gradient(
//               circle at 35% 30%,
//               rgba(255,255,255,.25),
//               rgba(145,45,255,.15) 25%,
//               rgba(20,10,50,.8) 65%
//             );

//           border:
//             1px solid rgba(184,75,255,.6);

//           box-shadow:
//             0 0 40px rgba(170,50,255,.35),
//             inset 0 0 50px rgba(80,100,255,.15);

//           animation:
//             orbFloat 5s ease-in-out infinite;
//         }

//         @keyframes orbFloat {
//           0%,
//           100% {
//             transform:
//               translateY(0)
//               rotate(0deg);
//           }

//           50% {
//             transform:
//               translateY(-20px)
//               rotate(5deg);
//           }
//         }

//         .about-orb::before,
//         .about-orb::after {
//           content: "";

//           position: absolute;

//           top: 50%;
//           left: 50%;

//           width: 340px;
//           height: 110px;

//           border:
//             2px solid rgba(100,90,255,.55);

//           border-radius: 50%;

//           transform:
//             translate(-50%, -50%)
//             rotate(25deg);

//           box-shadow:
//             0 0 20px rgba(100,90,255,.3);
//         }

//         .about-orb::after {
//           transform:
//             translate(-50%, -50%)
//             rotate(-25deg);
//         }

//         .orb-center {
//           position: absolute;

//           top: 50%;
//           left: 50%;

//           transform:
//             translate(-50%, -50%);

//           text-align: center;
//         }

//         .orb-center strong {
//           display: block;

//           font-size: 38px;

//           background:
//             linear-gradient(
//               90deg,
//               #c32cff,
//               #4ac8ff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;
//         }

//         .orb-center span {
//           color: #aaa;

//           font-size: 12px;

//           letter-spacing: 2px;
//         }

//         /* =========================
//            STATS
//         ========================= */

//         .about-stats {
//           display: grid;

//           grid-template-columns:
//             repeat(4, 1fr);

//           gap: 18px;

//           margin-bottom: 120px;
//         }

//         .about-stat {
//           position: relative;

//           padding: 30px 20px;

//           text-align: center;

//           border-radius: 18px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.055),
//               rgba(255,255,255,.015)
//             );

//           border:
//             1px solid rgba(255,255,255,.08);

//           overflow: hidden;

//           transition:
//             transform .35s ease,
//             border .35s ease,
//             box-shadow .35s ease;
//         }

//         .about-stat::before {
//           content: "";

//           position: absolute;

//           top: -80px;
//           left: -80px;

//           width: 150px;
//           height: 150px;

//           border-radius: 50%;

//           background: #9d32ff;

//           filter: blur(70px);

//           opacity: .15;
//         }

//         .about-stat:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(181, 66, 255, .4);

//           box-shadow:
//             0 15px 40px rgba(125, 35, 255, .15);
//         }

//         .about-stat-icon {
//           display: flex;

//           align-items: center;
//           justify-content: center;

//           margin-bottom: 12px;

//           color: #b74cff;

//           position: relative;
//           z-index: 1;
//         }

//         .about-stat-icon svg {
//           font-size: 28px;
//         }

//         .about-stat h3 {
//           margin: 0;

//           font-size: 34px;

//           background:
//             linear-gradient(
//               90deg,
//               #bd36ff,
//               #46bfff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;
//         }

//         .about-stat p {
//           margin: 8px 0 0;

//           color: #888896;

//           font-size: 14px;
//         }

//         /* =========================
//            MISSION VISION
//         ========================= */

//         .about-mission {
//           display: grid;

//           grid-template-columns:
//             1fr 1fr;

//           gap: 25px;

//           margin-bottom: 120px;
//         }

//         .about-info-card {
//           position: relative;

//           padding: 40px;

//           min-height: 260px;

//           border-radius: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(145,50,255,.09),
//               rgba(20,90,255,.04)
//             );

//           border:
//             1px solid rgba(160,70,255,.18);

//           overflow: hidden;

//           transition: .4s ease;
//         }

//         .about-info-card::after {
//           content: "";

//           position: absolute;

//           width: 180px;
//           height: 180px;

//           right: -80px;
//           bottom: -80px;

//           border-radius: 50%;

//           background:
//             #6e35ff;

//           filter: blur(80px);

//           opacity: .18;
//         }

//         .about-info-card:hover {
//           transform:
//             translateY(-8px);

//           border-color:
//             rgba(180,70,255,.45);

//           box-shadow:
//             0 20px 50px rgba(100,40,255,.13);
//         }

//         .about-card-icon {
//           width: 52px;
//           height: 52px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           margin-bottom: 18px;

//           color: #b74cff;

//           background:
//             rgba(155,50,255,.1);

//           border:
//             1px solid rgba(175,65,255,.18);
//         }

//         .about-card-icon svg {
//           font-size: 30px;
//         }

//         .about-info-card h3 {
//           margin: 0 0 12px;

//           font-size: 25px;
//         }

//         .about-info-card p {
//           margin: 0;

//           color: #9999a8;

//           line-height: 1.8;

//           font-size: 15px;
//         }

//         /* =========================
//            VALUES
//         ========================= */

//         .about-values-title {
//           text-align: center;

//           margin-bottom: 45px;
//         }

//         .about-values-title h2 {
//           margin: 0 0 12px;

//           font-size: 42px;
//         }

//         .about-values-title p {
//           margin: 0;

//           color: #898996;
//         }

//         .about-values {
//           display: grid;

//           grid-template-columns:
//             repeat(4, 1fr);

//           gap: 18px;
//         }

//         .about-value-card {
//           padding: 28px 22px;

//           border-radius: 17px;

//           background:
//             rgba(255,255,255,.025);

//           border:
//             1px solid rgba(255,255,255,.07);

//           transition: .35s ease;
//         }

//         .about-value-card:hover {
//           transform:
//             translateY(-8px);

//           background:
//             rgba(145,50,255,.07);

//           border-color:
//             rgba(175,65,255,.3);

//           box-shadow:
//             0 15px 40px rgba(130,40,255,.12);
//         }

//         .about-value-icon {
//           width: 50px;
//           height: 50px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 13px;

//           background:
//             rgba(155,50,255,.1);

//           color: #b74cff;

//           margin-bottom: 18px;
//         }

//         .about-value-icon svg {
//           font-size: 23px;
//         }

//         .about-value-card h3 {
//           margin: 0 0 10px;

//           font-size: 17px;
//         }

//         .about-value-card p {
//           margin: 0;

//           color: #858592;

//           font-size: 13px;

//           line-height: 1.7;
//         }

//         /* =========================
//            CTA
//         ========================= */

//         .about-cta {
//           position: relative;

//           margin-top: 110px;

//           padding: 65px 30px;

//           text-align: center;

//           border-radius: 25px;

//           overflow: hidden;

//           background:
//             linear-gradient(
//               110deg,
//               rgba(150,45,255,.13),
//               rgba(35,100,255,.1)
//             );

//           border:
//             1px solid rgba(170,70,255,.2);
//         }

//         .about-cta::before {
//           content: "";

//           position: absolute;

//           width: 350px;
//           height: 350px;

//           top: -250px;
//           left: 50%;

//           transform:
//             translateX(-50%);

//           border-radius: 50%;

//           background:
//             #a832ff;

//           filter: blur(100px);

//           opacity: .18;
//         }

//         .about-cta h2 {
//           position: relative;

//           margin: 0 0 15px;

//           font-size: 38px;
//         }

//         .about-cta p {
//           position: relative;

//           color: #9999a8;

//           margin-bottom: 28px;
//         }

//         .about-cta a {
//           position: relative;

//           display: inline-flex;

//           align-items: center;
//           justify-content: center;

//           gap: 10px;

//           padding: 14px 28px;

//           border-radius: 10px;

//           color: white;

//           text-decoration: none;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a82cff,
//               #326cff
//             );

//           box-shadow:
//             0 0 25px rgba(130,45,255,.3);

//           transition: .3s ease;
//         }

//         .about-cta a svg {
//           font-size: 20px;
//         }

//         .about-cta a:hover {
//           transform:
//             translateY(-4px);

//           box-shadow:
//             0 0 35px rgba(130,45,255,.5);
//         }

//         /* =========================
//            RESPONSIVE
//         ========================= */

//         @media (max-width: 900px) {

//           .about-hero {
//             min-height: 450px;

//             padding:
//               80px 20px 50px;
//           }

//           .about-who {
//             grid-template-columns: 1fr;

//             gap: 20px;

//             margin-bottom: 80px;
//           }

//           .about-orb-wrapper {
//             height: 330px;

//             order: -1;
//           }

//           .about-stats {
//             grid-template-columns:
//               repeat(2, 1fr);

//             margin-bottom: 80px;
//           }

//           .about-mission {
//             grid-template-columns: 1fr;

//             margin-bottom: 80px;
//           }

//           .about-values {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 600px) {

//           .about-hero {
//             min-height: 430px;

//             padding:
//               70px 18px 40px;
//           }

//           .about-small-title {
//             font-size: 10px;

//             letter-spacing: 2px;

//             gap: 6px;
//           }

//           .about-title-icon {
//             font-size: 14px !important;
//           }

//           .about-hero h2 {
//             font-size: 22px;
//           }

//           .about-hero p {
//             font-size: 14px;

//             line-height: 1.7;
//           }

//           .about-container {
//             padding:
//               20px 16px 70px;
//           }

//           .about-who h2 {
//             font-size: 32px;
//           }

//           .about-who p {
//             font-size: 14px;
//           }

//           .about-orb {
//             width: 210px;
//             height: 210px;
//           }

//           .about-orb::before,
//           .about-orb::after {
//             width: 270px;
//             height: 90px;
//           }

//           .orb-center strong {
//             font-size: 30px;
//           }

//           .about-stats {
//             gap: 10px;
//           }

//           .about-stat {
//             padding: 22px 10px;
//           }

//           .about-stat h3 {
//             font-size: 27px;
//           }

//           .about-stat p {
//             font-size: 12px;
//           }

//           .about-info-card {
//             padding: 28px 22px;
//           }

//           .about-values-title h2 {
//             font-size: 32px;
//           }

//           .about-values {
//             grid-template-columns: 1fr;
//           }

//           .about-cta {
//             margin-top: 75px;

//             padding:
//               45px 20px;
//           }

//           .about-cta h2 {
//             font-size: 28px;
//           }
//         }

//       `}</style>

//       <section
//         className="about-page"
//         id="about-us"
//       >

//         {/* Background */}

//         <div className="about-glow about-glow-one"></div>

//         <div className="about-glow about-glow-two"></div>

//         <div className="about-particle particle-1"></div>
//         <div className="about-particle particle-2"></div>
//         <div className="about-particle particle-3"></div>
//         <div className="about-particle particle-4"></div>
//         <div className="about-particle particle-5"></div>

//         {/* =========================
//             HERO
//         ========================= */}

//         <div className="about-hero">

//           <div
//             className={`about-hero-content ${
//               visible ? "show" : ""
//             }`}
//           >

//             <div className="about-small-title">
//               <AutoAwesomeIcon className="about-title-icon" />
//               <span>ABOUT ROHIL SPARK MEDIA</span>
//             </div>

//             <h1>
//               We Create.
//               <br />
//               We Inspire.
//               <br />
//               We Grow.
//             </h1>

//             <h2>
//               Your Digital Growth Partner
//             </h2>

//             <p>
//               Rohil Spark Media is a creative digital
//               marketing agency focused on helping
//               businesses build powerful brands,
//               reach the right audience and grow
//               faster in the digital world.
//             </p>

//           </div>

//         </div>

//         <div className="about-container">

//           {/* =========================
//               WHO WE ARE
//           ========================= */}

//           <div className="about-who">

//             <div>

//               <div className="about-section-label">
//                 WHO WE ARE
//               </div>

//               <h2>
//                 Turning Ideas Into
//                 <br />

//                 <span className="about-gradient-text">
//                   Digital Impact
//                 </span>
//               </h2>

//               <p>
//                 We are a passionate team of
//                 digital marketers, creatives and
//                 strategists who believe every
//                 business has a unique story.
//               </p>

//               <p>
//                 Our goal is to transform that story
//                 into a strong digital presence using
//                 innovative strategies, creative
//                 content and performance-driven
//                 marketing.
//               </p>

//               <p>
//                 From SEO and Google Ads to Meta Ads,
//                 social media and branding, we create
//                 complete digital solutions designed
//                 around your business goals.
//               </p>

//             </div>

//             {/* ORB */}

//             <div className="about-orb-wrapper">

//               <div className="about-orb">

//                 <div className="orb-center">

//                   <strong>
//                     ROHIL
//                   </strong>

//                   <span>
//                     DIGITAL SPARK MEDIA
//                   </span>

//                 </div>

//               </div>

//             </div>

//           </div>

//           {/* =========================
//               STATS
//           ========================= */}

//           <div className="about-stats">

//             {stats.map((item, index) => {

//               const Icon = item.icon;

//               return (
//                 <div
//                   className="about-stat"
//                   key={index}
//                 >

//                   <div className="about-stat-icon">
//                     <Icon />
//                   </div>

//                   <h3>
//                     {item.number}
//                   </h3>

//                   <p>
//                     {item.title}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>

//           {/* =========================
//               MISSION / VISION
//           ========================= */}

//           <div className="about-mission">

//             <div className="about-info-card">

//               <div className="about-card-icon">
//                 <TrackChangesIcon />
//               </div>

//               <h3>
//                 Our Mission
//               </h3>

//               <p>
//                 Our mission is to help businesses
//                 succeed online by delivering
//                 creative, transparent and
//                 result-oriented digital marketing
//                 solutions.
//               </p>

//             </div>

//             <div className="about-info-card">

//               <div className="about-card-icon">
//                 <RocketLaunchIcon />
//               </div>

//               <h3>
//                 Our Vision
//               </h3>

//               <p>
//                 Our vision is to become a trusted
//                 digital growth partner for businesses
//                 by continuously innovating and
//                 creating meaningful digital
//                 experiences.
//               </p>

//             </div>

//           </div>

//           {/* =========================
//               VALUES
//           ========================= */}

//           <div className="about-values-title">

//             <div className="about-section-label">
//               WHY ROHIL
//             </div>

//             <h2>
//               What Makes Us
//               <span className="about-gradient-text">
//                 {" "}Different
//               </span>
//             </h2>

//             <p>
//               We don't just market your business.
//               We help build your digital future.
//             </p>

//           </div>

//           <div className="about-values">

//             {values.map((item, index) => {

//               const Icon = item.icon;

//               return (
//                 <div
//                   className="about-value-card"
//                   key={index}
//                 >

//                   <div className="about-value-icon">
//                     <Icon />
//                   </div>

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                 </div>
//               );
//             })}

//           </div>

//           {/* =========================
//               CTA
//           ========================= */}

//           <div className="about-cta">

//             <h2>
//               Ready To Grow Your Business?
//             </h2>

//             <p>
//               Let's create something powerful
//               together.
//             </p>

//             <Link to="/contact">
//               <span>Start your Journey</span>
//               <ArrowForwardIcon />
//             </Link>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default AboutUs;
import React from "react";
import {
  RocketLaunch,
  Handshake,
  Star,
  Bolt,
  TrackChanges,
  Lightbulb,
  BarChart,
  AutoAwesome,
  ArrowForward,
} from "@mui/icons-material";

import "./component/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

    {/* HERO */}
<section
  className="about-hero"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(5, 8, 22, 0.60),
        rgba(5, 8, 22, 0.82)
      ),
      url("images/about-hero.jpg")
    `,
  }}
>
  <div className="hero-content">
    <span className="hero-tag">
      <AutoAwesome />
      ABOUT ROHIL SPARK MEDIA
    </span>

    <h1>
      We Create.
      <br />
      <span>We Inspire.</span>
      <br />
      We Grow.
    </h1>

    <p>Your Digital Growth Partner</p>

    <div className="hero-line"></div>
  </div>
</section>

      {/* WHO WE ARE */}
      <section className="who-section">
        <div className="about-container">

          <div className="about-text">
            <span className="section-label">WHO WE ARE</span>

            <h2>
              Turning Ideas Into
              <span> Digital Impact</span>
            </h2>

            <p>
              Rohil Spark Media is a creative digital marketing agency
              focused on helping businesses build a strong digital presence.
            </p>

            <p>
              We combine creativity, technology and data-driven strategies
              to create digital experiences that connect brands with their
              audience and generate measurable growth.
            </p>

            <div className="about-features">

              <div className="about-feature">
                <RocketLaunch />
                <div>
                  <h4>Growth Focused</h4>
                  <p>Strategies designed for real business growth.</p>
                </div>
              </div>

              <div className="about-feature">
                <Handshake />
                <div>
                  <h4>Trusted Partnership</h4>
                  <p>We work closely with our clients at every step.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img
                src="/images/about-us.jpg"
                alt="Rohil Spark Media"
              />

              <div className="image-overlay">
                <Star />
                <span>Creative Digital Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="stats-container">

          <div className="stat-card">
            <RocketLaunch />
            <h3>100+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-card">
            <Handshake />
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-card">
            <Star />
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-card">
            <Bolt />
            <h3>24/7</h3>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="mission-section">
        <div className="about-container">

          <div className="mission-card">
            <div className="mission-icon">
              <TrackChanges />
            </div>

            <span className="section-label">OUR MISSION</span>

            <h2>Build. Connect. Grow.</h2>

            <p>
              Our mission is to help businesses transform their ideas into
              powerful digital experiences using creative strategies,
              modern technology and meaningful content.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <Lightbulb />
            </div>

            <span className="section-label">OUR VISION</span>

            <h2>Creating Digital Futures</h2>

            <p>
              We aim to become a trusted digital partner for businesses by
              delivering innovative solutions that create long-term value
              and sustainable growth.
            </p>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">

        <div className="section-heading">
          <span className="section-label">OUR VALUES</span>

          <h2>
            What Drives <span>Us</span>
          </h2>

          <p>
            Our values guide everything we create and every relationship
            we build.
          </p>
        </div>

        <div className="values-container">

          <div className="value-card">
            <BarChart />
            <h3>Result Driven</h3>
            <p>
              We focus on measurable results and meaningful business growth.
            </p>
          </div>

          <div className="value-card">
            <Lightbulb />
            <h3>Creative Thinking</h3>
            <p>
              Fresh ideas and creative strategies help brands stand out.
            </p>
          </div>

          <div className="value-card">
            <TrackChanges />
            <h3>Data Powered</h3>
            <p>
              We use data and insights to make smarter digital decisions.
            </p>
          </div>

          <div className="value-card">
            <Handshake />
            <h3>Client First</h3>
            <p>
              Our clients and their goals always remain our top priority.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">

          <AutoAwesome className="cta-icon" />

          <h2>
            Ready To Grow Your
            <span> Business?</span>
          </h2>

          <p>Let's create something powerful together.</p>

          <button className="cta-button">
            Start Your Journey
            <ArrowForward />
          </button>

        </div>
      </section>

    </div>
  );
}

export default AboutUs;