// import React from "react";
// import { Link } from "react-router-dom";

// function OurApproach() {

//   const steps = [
//     {
//       number: "01",
//       icon: "🔍",
//       title: "Discover",
//       text: "We start by understanding your business, audience, competitors and digital goals.",
//     },
//     {
//       number: "02",
//       icon: "🧠",
//       title: "Strategize",
//       text: "We create a clear digital strategy designed around your unique business objectives.",
//     },
//     {
//       number: "03",
//       icon: "⚡",
//       title: "Execute",
//       text: "Our team turns ideas into high-impact campaigns, content and digital experiences.",
//     },
//     {
//       number: "04",
//       icon: "📈",
//       title: "Optimize",
//       text: "We continuously analyze performance and improve campaigns for better results.",
//     },
//   ];

//   const principles = [
//     {
//       icon: "🎯",
//       title: "Goal Focused",
//       text: "Every decision starts with your business goals and desired outcomes.",
//     },
//     {
//       icon: "📊",
//       title: "Data Driven",
//       text: "We use real performance data to make smarter marketing decisions.",
//     },
//     {
//       icon: "💡",
//       title: "Creative Thinking",
//       text: "We combine strategy and creativity to make your brand stand out.",
//     },
//     {
//       icon: "🚀",
//       title: "Growth Mindset",
//       text: "We constantly test, learn and optimize to create sustainable growth.",
//     },
//   ];

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .approach-page {
//           min-height: 100vh;
//           overflow: hidden;
//           position: relative;

//           color: #ffffff;

//           background:
//             radial-gradient(
//               circle at 10% 10%,
//               rgba(157, 45, 255, .15),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 90% 35%,
//               rgba(45, 105, 255, .13),
//               transparent 30%
//             ),
//             #030308;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;

//           padding-bottom: 100px;
//         }


//         /* =========================
//            BACKGROUND GLOW
//         ========================= */

//         .approach-glow {
//           position: absolute;

//           width: 420px;
//           height: 420px;

//           border-radius: 50%;

//           filter: blur(110px);

//           opacity: .2;

//           pointer-events: none;
//         }

//         .approach-glow-one {
//           top: 100px;
//           left: -220px;

//           background: #a52cff;

//           animation:
//             approachGlowOne 8s
//             ease-in-out
//             infinite alternate;
//         }

//         .approach-glow-two {
//           top: 700px;
//           right: -220px;

//           background: #326cff;

//           animation:
//             approachGlowTwo 10s
//             ease-in-out
//             infinite alternate;
//         }

//         @keyframes approachGlowOne {

//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(180px, 130px);
//           }

//         }

//         @keyframes approachGlowTwo {

//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(-180px, -100px);
//           }

//         }


//         /* =========================
//            HERO
//         ========================= */

//         .approach-hero {
//           min-height: 520px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           text-align: center;

//           padding: 90px 20px 60px;

//           position: relative;
//         }

//         .approach-hero-content {
//           position: relative;

//           z-index: 2;

//           max-width: 850px;

//           animation:
//             approachHeroIn 1s
//             ease forwards;
//         }

//         @keyframes approachHeroIn {

//           from {
//             opacity: 0;

//             transform:
//               translateY(45px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateY(0);
//           }

//         }

//         .approach-badge {
//           display: inline-block;

//           padding: 10px 20px;

//           margin-bottom: 22px;

//           border-radius: 50px;

//           color: #c55cff;

//           background:
//             rgba(165, 44, 255, .08);

//           border:
//             1px solid
//             rgba(165, 44, 255, .25);

//           font-size: 12px;

//           letter-spacing: 3px;

//           animation:
//             approachBadge 3s
//             ease-in-out
//             infinite;
//         }

//         @keyframes approachBadge {

//           0%,
//           100% {
//             box-shadow:
//               0 0 15px
//               rgba(165, 44, 255, .1);
//           }

//           50% {
//             box-shadow:
//               0 0 35px
//               rgba(165, 44, 255, .4);
//           }

//         }

//         .approach-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px, 8vw, 88px);

//           line-height: 1.05;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #bf2cff,
//               #718cff,
//               #43c9ff,
//               #bf2cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           animation:
//             approachGradient 5s
//             linear
//             infinite;
//         }

//         @keyframes approachGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }

//         .approach-hero h2 {
//           margin:
//             22px 0 15px;

//           font-size:
//             clamp(22px, 3vw, 35px);
//         }

//         .approach-hero p {
//           max-width: 700px;

//           margin: auto;

//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;
//         }


//         /* =========================
//            CONTAINER
//         ========================= */

//         .approach-container {
//           max-width: 1180px;

//           margin: auto;

//           padding:
//             20px 25px;

//           position: relative;

//           z-index: 2;
//         }


//         /* =========================
//            SECTION TITLE
//         ========================= */

//         .approach-title {
//           text-align: center;

//           margin-bottom: 50px;
//         }

//         .approach-label {
//           color: #bb50ff;

//           font-size: 12px;

//           letter-spacing: 3px;

//           font-weight: 600;

//           margin-bottom: 12px;
//         }

//         .approach-title h2 {
//           margin:
//             0 0 12px;

//           font-size:
//             clamp(32px, 5vw, 48px);
//         }

//         .approach-title h2 span {
//           background:
//             linear-gradient(
//               90deg,
//               #c12cff,
//               #4dbdff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;
//         }

//         .approach-title p {
//           margin: 0;

//           color: #888895;

//           font-size: 14px;
//         }


//         /* =========================
//            PROCESS
//         ========================= */

//         .approach-process {
//           display: grid;

//           grid-template-columns:
//             repeat(4, 1fr);

//           gap: 18px;

//           margin-bottom: 120px;
//         }

//         .approach-card {
//           position: relative;

//           padding: 32px 25px;

//           min-height: 300px;

//           border-radius: 22px;

//           overflow: hidden;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.055),
//               rgba(255,255,255,.012)
//             );

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           transition:
//             .4s ease;

//           animation:
//             approachCardIn .8s ease both;
//         }

//         .approach-card:nth-child(2) {
//           animation-delay: .15s;
//         }

//         .approach-card:nth-child(3) {
//           animation-delay: .3s;
//         }

//         .approach-card:nth-child(4) {
//           animation-delay: .45s;
//         }

//         @keyframes approachCardIn {

//           from {
//             opacity: 0;

//             transform:
//               translateY(40px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateY(0);
//           }

//         }

//         .approach-card::before {
//           content: "";

//           position: absolute;

//           width: 180px;
//           height: 180px;

//           top: -100px;
//           right: -100px;

//           border-radius: 50%;

//           background: #a52cff;

//           filter: blur(70px);

//           opacity: .12;

//           transition: .4s ease;
//         }

//         .approach-card:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(175,65,255,.4);

//           box-shadow:
//             0 20px 55px
//             rgba(110,35,255,.18);
//         }

//         .approach-card:hover::before {
//           transform:
//             scale(1.5);

//           opacity: .3;
//         }

//         .approach-number {
//           font-size: 42px;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #a82cff,
//               #4d9dff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           opacity: .8;

//           margin-bottom: 20px;
//         }

//         .approach-icon {
//           width: 55px;
//           height: 55px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           border-radius: 15px;

//           font-size: 25px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(160,50,255,.15),
//               rgba(50,100,255,.08)
//             );

//           border:
//             1px solid
//             rgba(170,60,255,.18);

//           margin-bottom: 20px;

//           transition: .4s ease;
//         }

//         .approach-card:hover .approach-icon {
//           transform:
//             rotate(-7deg)
//             scale(1.1);

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.3);
//         }

//         .approach-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 20px;
//         }

//         .approach-card p {
//           margin: 0;

//           color: #898995;

//           font-size: 13px;

//           line-height: 1.8;
//         }


//         /* =========================
//            PRINCIPLES
//         ========================= */

//         .approach-principles {
//           display: grid;

//           grid-template-columns:
//             repeat(2, 1fr);

//           gap: 18px;

//           margin-bottom: 110px;
//         }

//         .principle-card {
//           display: flex;

//           gap: 20px;

//           padding: 28px;

//           border-radius: 18px;

//           background:
//             rgba(255,255,255,.025);

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .35s ease;
//         }

//         .principle-card:hover {
//           transform:
//             translateY(-7px);

//           border-color:
//             rgba(170,60,255,.35);

//           background:
//             rgba(150,50,255,.05);
//         }

//         .principle-icon {
//           min-width: 55px;
//           height: 55px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           border-radius: 14px;

//           font-size: 24px;

//           background:
//             rgba(165,44,255,.1);
//         }

//         .principle-card h3 {
//           margin:
//             0 0 8px;

//           font-size: 18px;
//         }

//         .principle-card p {
//           margin: 0;

//           color: #858592;

//           font-size: 13px;

//           line-height: 1.7;
//         }


//         /* =========================
//            CTA
//         ========================= */

//         .approach-cta {
//           position: relative;

//           overflow: hidden;

//           text-align: center;

//           padding:
//             70px 25px;

//           border-radius: 25px;

//           background:
//             linear-gradient(
//               110deg,
//               rgba(150,45,255,.13),
//               rgba(35,100,255,.08)
//             );

//           border:
//             1px solid
//             rgba(170,70,255,.2);
//         }

//         .approach-cta::before {
//           content: "";

//           position: absolute;

//           width: 350px;
//           height: 350px;

//           left: 50%;
//           top: -280px;

//           transform:
//             translateX(-50%);

//           border-radius: 50%;

//           background: #a62cff;

//           filter: blur(100px);

//           opacity: .2;
//         }

//         .approach-cta h2 {
//           position: relative;

//           margin:
//             0 0 15px;

//           font-size:
//             clamp(28px, 5vw, 42px);
//         }

//         .approach-cta p {
//           position: relative;

//           max-width: 650px;

//           margin:
//             0 auto 28px;

//           color: #9999a8;

//           line-height: 1.8;
//         }

//         .approach-cta-button {
//           position: relative;

//           display: inline-block;

//           padding:
//             14px 30px;

//           border-radius: 10px;

//           color: white !important;

//           text-decoration: none;

//           font-size: 14px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );

//           box-shadow:
//             0 0 25px
//             rgba(130,45,255,.3);

//           transition: .3s ease;
//         }

//         .approach-cta-button:hover {
//           transform:
//             translateY(-5px);

//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.55);
//         }


//         /* =========================
//            TABLET
//         ========================= */

//         @media (max-width: 900px) {

//           .approach-process {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }

//         }


//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 600px) {

//           .approach-hero {
//             min-height: 430px;

//             padding:
//               70px 18px 45px;
//           }

//           .approach-hero h1 {
//             font-size: 50px;
//           }

//           .approach-hero h2 {
//             font-size: 22px;
//           }

//           .approach-hero p {
//             font-size: 14px;
//           }

//           .approach-container {
//             padding:
//               15px 16px;
//           }

//           .approach-process {
//             grid-template-columns: 1fr;

//             gap: 15px;

//             margin-bottom: 80px;
//           }

//           .approach-card {
//             min-height: 250px;

//             padding: 25px;
//           }

//           .approach-principles {
//             grid-template-columns: 1fr;

//             margin-bottom: 80px;
//           }

//           .principle-card {
//             padding: 23px;
//           }

//           .approach-cta {
//             padding:
//               50px 20px;
//           }

//           .approach-cta h2 {
//             font-size: 28px;
//           }

//           .approach-cta-button {
//             width: 100%;

//             max-width: 280px;
//           }

//         }

//       `}</style>


//       <section className="approach-page">

//         <div className="approach-glow approach-glow-one"></div>

//         <div className="approach-glow approach-glow-two"></div>


//         {/* =========================
//             HERO
//         ========================= */}

//         <div className="approach-hero">

//           <div className="approach-hero-content">

//             <div className="approach-badge">
//               ✦ OUR APPROACH
//             </div>

//             <h1>
//               Strategy.
//               <br />
//               Creativity.
//               <br />
//               Growth.
//             </h1>

//             <h2>
//               A Smarter Way To Build Digital Success.
//             </h2>

//             <p>
//               We combine strategy, creativity, technology
//               and data to create digital marketing
//               experiences that deliver meaningful results.
//             </p>

//           </div>

//         </div>


//         <div className="approach-container">


//           {/* =========================
//               PROCESS
//           ========================= */}

//           <div className="approach-title">

//             <div className="approach-label">
//               HOW WE APPROACH YOUR BUSINESS
//             </div>

//             <h2>
//               From Idea To
//               <span> Impact</span>
//             </h2>

//             <p>
//               A simple process designed for powerful results.
//             </p>

//           </div>


//           <div className="approach-process">

//             {steps.map((step) => (

//               <div
//                 className="approach-card"
//                 key={step.number}
//               >

//                 <div className="approach-number">
//                   {step.number}
//                 </div>

//                 <div className="approach-icon">
//                   {step.icon}
//                 </div>

//                 <h3>
//                   {step.title}
//                 </h3>

//                 <p>
//                   {step.text}
//                 </p>

//               </div>

//             ))}

//           </div>


//           {/* =========================
//               PRINCIPLES
//           ========================= */}

//           <div className="approach-title">

//             <div className="approach-label">
//               OUR PRINCIPLES
//             </div>

//             <h2>
//               What Drives
//               <span> Our Work</span>
//             </h2>

//             <p>
//               The principles behind every strategy we create.
//             </p>

//           </div>


//           <div className="approach-principles">

//             {principles.map((item) => (

//               <div
//                 className="principle-card"
//                 key={item.title}
//               >

//                 <div className="principle-icon">
//                   {item.icon}
//                 </div>

//                 <div>

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>


//           {/* =========================
//               CTA
//           ========================= */}

//           <div className="approach-cta">

//             <h2>
//               Ready To Build Something Great?
//             </h2>

//             <p>
//               Let's create a digital strategy that turns
//               your ideas into measurable business growth.
//             </p>

//             <Link
//               to="/contact"
//               className="approach-cta-button"
//             >
//               Start Your Project →
//             </Link>

//           </div>


//         </div>

//       </section>
//     </>
//   );
// }

// export default OurApproach;
import React from "react";
import { Link } from "react-router-dom";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SearchIcon from "@mui/icons-material/Search";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BoltIcon from "@mui/icons-material/Bolt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import BarChartIcon from "@mui/icons-material/BarChart";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function OurApproach() {
  const steps = [
    {
      number: "01",
      icon: <SearchIcon />,
      title: "Discover",
      text: "We start by understanding your business, audience, competitors and digital goals.",
      image: "/images/approach-discover.jpg",
    },
    {
      number: "02",
      icon: <PsychologyIcon />,
      title: "Strategize",
      text: "We create a clear digital strategy designed around your unique business objectives.",
      image: "/images/approach-strategy.jpg",
    },
    {
      number: "03",
      icon: <BoltIcon />,
      title: "Execute",
      text: "Our team turns ideas into high-impact campaigns, content and digital experiences.",
      image: "/images/approach-execute.jpg",
    },
    {
      number: "04",
      icon: <TrendingUpIcon />,
      title: "Optimize",
      text: "We continuously analyze performance and improve campaigns for better results.",
      image: "/images/approach-optimize.jpg",
    },
  ];

  const principles = [
    {
      icon: <TrackChangesIcon />,
      title: "Goal Focused",
      text: "Every decision starts with your business goals and desired outcomes.",
    },
    {
      icon: <BarChartIcon />,
      title: "Data Driven",
      text: "We use real performance data to make smarter marketing decisions.",
    },
    {
      icon: <LightbulbIcon />,
      title: "Creative Thinking",
      text: "We combine strategy and creativity to make your brand stand out.",
    },
    {
      icon: <RocketLaunchIcon />,
      title: "Growth Mindset",
      text: "We constantly test, learn and optimize to create sustainable growth.",
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           MAIN PAGE - DARK MODE
        ========================================= */

        .approach-page {
          min-height: 100vh;
          overflow: hidden;
          position: relative;

          color: #ffffff;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(157, 45, 255, .15),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(45, 105, 255, .13),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          padding-bottom: 100px;

          transition:
            background .4s ease,
            color .4s ease;
        }


        /* =========================================
           BACKGROUND GLOW
        ========================================= */

        .approach-glow {
          position: absolute;

          width: 420px;
          height: 420px;

          border-radius: 50%;

          filter: blur(110px);

          opacity: .2;

          pointer-events: none;
        }

        .approach-glow-one {
          top: 100px;
          left: -220px;

          background: #a52cff;

          animation:
            approachGlowOne 8s
            ease-in-out
            infinite alternate;
        }

        .approach-glow-two {
          top: 700px;
          right: -220px;

          background: #326cff;

          animation:
            approachGlowTwo 10s
            ease-in-out
            infinite alternate;
        }

        @keyframes approachGlowOne {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(180px, 130px);
          }
        }

        @keyframes approachGlowTwo {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-180px, -100px);
          }
        }


        /* =========================================
           HERO
        ========================================= */

        .approach-hero {
          min-height: 560px;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 90px 20px 60px;

          position: relative;

          background:
            linear-gradient(
              rgba(3,3,8,.45),
              rgba(3,3,8,.65)
            ),
            url("/images/approach-hero.jpg");

          background-size: cover;

          background-position: center;
        }

        .approach-hero-content {
          position: relative;

          z-index: 2;

          max-width: 850px;

          animation:
            approachHeroIn 1s
            ease forwards;
        }

        @keyframes approachHeroIn {
          from {
            opacity: 0;
            transform: translateY(45px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* =========================================
           BADGE
        ========================================= */

        .approach-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 10px 20px;

          margin-bottom: 22px;

          border-radius: 50px;

          color: #c55cff;

          background:
            rgba(165, 44, 255, .08);

          border:
            1px solid
            rgba(165, 44, 255, .25);

          font-size: 12px;

          letter-spacing: 3px;

          animation:
            approachBadge 3s
            ease-in-out
            infinite;
        }

        .approach-badge svg {
          font-size: 18px;
        }

        @keyframes approachBadge {

          0%,
          100% {
            box-shadow:
              0 0 15px
              rgba(165, 44, 255, .1);
          }

          50% {
            box-shadow:
              0 0 35px
              rgba(165, 44, 255, .4);
          }
        }


        /* =========================================
           HERO TITLE
        ========================================= */

        .approach-hero h1 {
          margin: 0;

          font-size:
            clamp(48px, 8vw, 88px);

          line-height: 1.05;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #bf2cff,
              #718cff,
              #43c9ff,
              #bf2cff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          animation:
            approachGradient 5s
            linear
            infinite;
        }

        @keyframes approachGradient {
          to {
            background-position:
              300% center;
          }
        }

        .approach-hero h2 {
          margin:
            22px 0 15px;

          font-size:
            clamp(22px, 3vw, 35px);
        }

        .approach-hero p {
          max-width: 700px;

          margin: auto;

          color: #9999a8;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =========================================
           CONTAINER
        ========================================= */

        .approach-container {
          max-width: 1180px;

          margin: auto;

          padding:
            70px 25px 20px;

          position: relative;

          z-index: 2;
        }


        /* =========================================
           SECTION TITLE
        ========================================= */

        .approach-title {
          text-align: center;

          margin-bottom: 50px;
        }

        .approach-label {
          color: #bb50ff;

          font-size: 12px;

          letter-spacing: 3px;

          font-weight: 600;

          margin-bottom: 12px;
        }

        .approach-title h2 {
          margin:
            0 0 12px;

          font-size:
            clamp(32px, 5vw, 48px);
        }

        .approach-title h2 span {
          background:
            linear-gradient(
              90deg,
              #c12cff,
              #4dbdff
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;
        }

        .approach-title p {
          margin: 0;

          color: #888895;

          font-size: 14px;
        }


        /* =========================================
           PROCESS GRID
        ========================================= */

        .approach-process {
          display: grid;

          grid-template-columns:
            repeat(4, 1fr);

          gap: 18px;

          margin-bottom: 120px;
        }


        /* =========================================
           PROCESS CARD
        ========================================= */

        .approach-card {
          position: relative;

          padding: 28px 22px;

          min-height: 390px;

          border-radius: 22px;

          overflow: hidden;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.012)
            );

          border:
            1px solid
            rgba(255,255,255,.08);

          transition:
            .4s ease;

          animation:
            approachCardIn .8s ease both;
        }

        .approach-card:nth-child(2) {
          animation-delay: .15s;
        }

        .approach-card:nth-child(3) {
          animation-delay: .3s;
        }

        .approach-card:nth-child(4) {
          animation-delay: .45s;
        }

        @keyframes approachCardIn {
          from {
            opacity: 0;
            transform:
              translateY(40px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }
        }


        /* =========================================
           CARD IMAGE
        ========================================= */

        .approach-card-image {
          width: 100%;

          height: 130px;

          border-radius: 15px;

          overflow: hidden;

          margin-bottom: 22px;

          position: relative;
        }

        .approach-card-image img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          display: block;

          transition:
            transform .5s ease;
        }

        .approach-card-image::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(3,3,8,.7),
              transparent
            );
        }

        .approach-card:hover
        .approach-card-image img {
          transform: scale(1.08);
        }


        /* =========================================
           CARD GLOW
        ========================================= */

        .approach-card::before {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          top: -100px;
          right: -100px;

          border-radius: 50%;

          background: #a52cff;

          filter: blur(70px);

          opacity: .12;

          transition: .4s ease;
        }

        .approach-card:hover {
          transform:
            translateY(-10px);

          border-color:
            rgba(175,65,255,.4);

          box-shadow:
            0 20px 55px
            rgba(110,35,255,.18);
        }

        .approach-card:hover::before {
          transform:
            scale(1.5);

          opacity: .3;
        }


        /* =========================================
           NUMBER
        ========================================= */

        .approach-number {
          font-size: 38px;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #a82cff,
              #4d9dff
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          opacity: .8;

          margin-bottom: 15px;
        }


        /* =========================================
           ICON
        ========================================= */

        .approach-icon {
          width: 55px;
          height: 55px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              rgba(160,50,255,.15),
              rgba(50,100,255,.08)
            );

          border:
            1px solid
            rgba(170,60,255,.18);

          margin-bottom: 18px;

          transition: .4s ease;
        }

        .approach-icon svg {
          font-size: 27px;

          color: #bd5cff;
        }

        .approach-card:hover
        .approach-icon {
          transform:
            rotate(-7deg)
            scale(1.1);

          box-shadow:
            0 0 25px
            rgba(160,50,255,.3);
        }


        .approach-card h3 {
          margin:
            0 0 12px;

          font-size: 20px;
        }

        .approach-card p {
          margin: 0;

          color: #898995;

          font-size: 13px;

          line-height: 1.8;
        }


        /* =========================================
           PRINCIPLES
        ========================================= */

        .approach-principles {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 18px;

          margin-bottom: 110px;
        }

        .principle-card {
          display: flex;

          gap: 20px;

          padding: 28px;

          border-radius: 18px;

          background:
            rgba(255,255,255,.025);

          border:
            1px solid
            rgba(255,255,255,.07);

          transition: .35s ease;
        }

        .principle-card:hover {
          transform:
            translateY(-7px);

          border-color:
            rgba(170,60,255,.35);

          background:
            rgba(150,50,255,.05);
        }

        .principle-icon {
          min-width: 55px;
          height: 55px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 14px;

          background:
            rgba(165,44,255,.1);

          border:
            1px solid
            rgba(165,44,255,.15);
        }

        .principle-icon svg {
          color: #bd5cff;

          font-size: 25px;
        }

        .principle-card h3 {
          margin:
            0 0 8px;

          font-size: 18px;
        }

        .principle-card p {
          margin: 0;

          color: #858592;

          font-size: 13px;

          line-height: 1.7;
        }


        /* =========================================
           CTA
        ========================================= */

        .approach-cta {
          position: relative;

          overflow: hidden;

          text-align: center;

          padding:
            70px 25px;

          border-radius: 25px;

          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.13),
              rgba(35,100,255,.08)
            );

          border:
            1px solid
            rgba(170,70,255,.2);
        }

        .approach-cta::before {
          content: "";

          position: absolute;

          width: 350px;
          height: 350px;

          left: 50%;
          top: -280px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background: #a62cff;

          filter: blur(100px);

          opacity: .2;
        }

        .approach-cta h2 {
          position: relative;

          margin:
            0 0 15px;

          font-size:
            clamp(28px, 5vw, 42px);
        }

        .approach-cta p {
          position: relative;

          max-width: 650px;

          margin:
            0 auto 28px;

          color: #9999a8;

          line-height: 1.8;
        }

        .approach-cta-button {
          position: relative;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding:
            14px 30px;

          border-radius: 10px;

          color: white !important;

          text-decoration: none;

          font-size: 14px;

          font-weight: 600;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          box-shadow:
            0 0 25px
            rgba(130,45,255,.3);

          transition: .3s ease;
        }

        .approach-cta-button svg {
          font-size: 19px;

          transition: .3s ease;
        }

        .approach-cta-button:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.55);
        }

        .approach-cta-button:hover svg {
          transform:
            translateX(4px);
        }


        /* =========================================
           LIGHT MODE
        ========================================= */

        body.light-theme .approach-page {
          color: #171321;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(168,70,255,.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(55,110,255,.09),
              transparent 30%
            ),
            #f7f8fc;
        }

        body.light-theme .approach-hero {
          background:
            linear-gradient(
              rgba(255,255,255,.12),
              rgba(248,250,255,.22)
            ),
            url("/images/approach-hero.jpg");

          background-size: cover;

          background-position: center;
        }

        body.light-theme .approach-hero h2 {
          color: #171321;
        }

        body.light-theme .approach-hero p {
          color: #555766;
        }

        body.light-theme .approach-badge {
          color: #8125d8;

          background:
            rgba(132,45,220,.08);

          border-color:
            rgba(132,45,220,.22);
        }

        body.light-theme .approach-title h2 {
          color: #171321;
        }

        body.light-theme .approach-title p {
          color: #626575;
        }

        body.light-theme .approach-card {
          background:
            rgba(255,255,255,.82);

          border-color:
            rgba(35,35,55,.10);

          box-shadow:
            0 10px 35px
            rgba(40,30,80,.06);
        }

        body.light-theme .approach-card::before {
          opacity: .07;
        }

        body.light-theme .approach-card:hover {
          border-color:
            rgba(130,45,220,.28);

          box-shadow:
            0 20px 55px
            rgba(90,50,180,.13);
        }

        body.light-theme .approach-card-image::after {
          background:
            linear-gradient(
              to top,
              rgba(20,15,35,.45),
              transparent
            );
        }

        body.light-theme .approach-card h3 {
          color: #171321;
        }

        body.light-theme .approach-card p {
          color: #606170;
        }

        body.light-theme .approach-icon {
          background:
            linear-gradient(
              145deg,
              rgba(150,50,255,.10),
              rgba(50,100,255,.08)
            );

          border-color:
            rgba(130,45,220,.16);
        }

        body.light-theme .approach-icon svg {
          color: #7b29d1;
        }

        body.light-theme .principle-card {
          background:
            rgba(255,255,255,.85);

          border-color:
            rgba(35,35,55,.10);

          box-shadow:
            0 8px 28px
            rgba(40,30,80,.05);
        }

        body.light-theme .principle-card:hover {
          background:
            rgba(250,247,255,.98);

          border-color:
            rgba(130,45,220,.25);

          box-shadow:
            0 15px 35px
            rgba(80,45,150,.10);
        }

        body.light-theme .principle-card h3 {
          color: #171321;
        }

        body.light-theme .principle-card p {
          color: #606170;
        }

        body.light-theme .principle-icon {
          background:
            rgba(130,45,220,.08);

          border-color:
            rgba(130,45,220,.13);
        }

        body.light-theme .principle-icon svg {
          color: #7b29d1;
        }

        body.light-theme .approach-cta {
          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.08),
              rgba(35,100,255,.06)
            );

          border-color:
            rgba(130,45,220,.18);

          box-shadow:
            0 15px 45px
            rgba(60,40,130,.07);
        }

        body.light-theme .approach-cta h2 {
          color: #171321;
        }

        body.light-theme .approach-cta p {
          color: #606170;
        }

        body.light-theme .approach-glow-one {
          opacity: .08;
        }

        body.light-theme .approach-glow-two {
          opacity: .06;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .approach-process {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {

          .approach-hero {
            min-height: 470px;

            padding:
              70px 18px 45px;
          }

          .approach-hero h1 {
            font-size: 50px;
          }

          .approach-hero h2 {
            font-size: 22px;
          }

          .approach-hero p {
            font-size: 14px;
          }

          .approach-container {
            padding:
              55px 16px 15px;
          }

          .approach-process {
            grid-template-columns: 1fr;

            gap: 15px;

            margin-bottom: 80px;
          }

          .approach-card {
            min-height: 350px;

            padding: 24px;
          }

          .approach-card-image {
            height: 150px;
          }

          .approach-principles {
            grid-template-columns: 1fr;

            margin-bottom: 80px;
          }

          .principle-card {
            padding: 23px;
          }

          .approach-cta {
            padding:
              50px 20px;
          }

          .approach-cta h2 {
            font-size: 28px;
          }

          .approach-cta-button {
            width: 100%;

            max-width: 280px;
          }

        }

      `}</style>


      <section className="approach-page">

        <div className="approach-glow approach-glow-one"></div>

        <div className="approach-glow approach-glow-two"></div>


        {/* =========================================
            HERO
        ========================================= */}

        <div className="approach-hero">

          <div className="approach-hero-content">

            <div className="approach-badge">
              <AutoAwesomeIcon />
              OUR APPROACH
            </div>

            <h1>
              Strategy.
              <br />
              Creativity.
              <br />
              Growth.
            </h1>

            <h2>
              A Smarter Way To Build Digital Success.
            </h2>

            <p>
              We combine strategy, creativity, technology
              and data to create digital marketing
              experiences that deliver meaningful results.
            </p>

          </div>

        </div>


        <div className="approach-container">


          {/* =========================================
              PROCESS
          ========================================= */}

          <div className="approach-title">

            <div className="approach-label">
              HOW WE APPROACH YOUR BUSINESS
            </div>

            <h2>
              From Idea To
              <span> Impact</span>
            </h2>

            <p>
              A simple process designed for powerful results.
            </p>

          </div>


          <div className="approach-process">

            {steps.map((step) => (

              <div
                className="approach-card"
                key={step.number}
              >

                <div className="approach-card-image">

                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                  />

                </div>

                <div className="approach-number">
                  {step.number}
                </div>

                <div className="approach-icon">
                  {step.icon}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>

            ))}

          </div>


          {/* =========================================
              PRINCIPLES
          ========================================= */}

          <div className="approach-title">

            <div className="approach-label">
              OUR PRINCIPLES
            </div>

            <h2>
              What Drives
              <span> Our Work</span>
            </h2>

            <p>
              The principles behind every strategy we create.
            </p>

          </div>


          <div className="approach-principles">

            {principles.map((item) => (

              <div
                className="principle-card"
                key={item.title}
              >

                <div className="principle-icon">
                  {item.icon}
                </div>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* =========================================
              CTA
          ========================================= */}

          <div className="approach-cta">

            <h2>
              Ready To Build Something Great?
            </h2>

            <p>
              Let's create a digital strategy that turns
              your ideas into measurable business growth.
            </p>

            <Link
              to="/contact"
              className="approach-cta-button"
            >
              Start Your Project
              <ArrowForwardIcon />
            </Link>

          </div>


        </div>

      </section>
    </>
  );
}

export default OurApproach;