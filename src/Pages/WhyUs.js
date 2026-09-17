// import React from "react";
// import { Link } from "react-router-dom";
// function WhyUs() {

//   const reasons = [
//     {
//       icon: "🎯",
//       title: "Result Driven",
//       text: "We focus on measurable outcomes that help your business generate visibility, leads and growth.",
//     },
//     {
//       icon: "💡",
//       title: "Creative Strategies",
//       text: "Every brand is different. We create unique strategies based on your business goals and audience.",
//     },
//     {
//       icon: "📊",
//       title: "Data Powered",
//       text: "We use campaign data and performance insights to continuously improve your digital marketing.",
//     },
//     {
//       icon: "⚡",
//       title: "Fast Execution",
//       text: "From ideas to campaigns, we move quickly while maintaining quality and consistency.",
//     },
//     {
//       icon: "🤝",
//       title: "Transparent Approach",
//       text: "Clear communication, honest reporting and complete visibility into your marketing activities.",
//     },
//     {
//       icon: "🚀",
//       title: "Growth Focused",
//       text: "Our goal is not just traffic or followers. We focus on sustainable business growth.",
//     },
//   ];


//   const process = [
//     {
//       number: "01",
//       title: "Understand",
//       text: "We understand your business, audience and goals.",
//     },
//     {
//       number: "02",
//       title: "Strategize",
//       text: "We create a customized digital marketing strategy.",
//     },
//     {
//       number: "03",
//       title: "Execute",
//       text: "Our team turns the strategy into powerful campaigns.",
//     },
//     {
//       number: "04",
//       title: "Optimize",
//       text: "We analyze results and continuously improve performance.",
//     },
//   ];


//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }


//        .why-page {
//   width: 100%;
//   max-width: 100%;
//   min-height: 100vh;

//   overflow-x: hidden;

//   color: white;

//   background:
//     radial-gradient(
//       circle at 15% 15%,
//       rgba(155,45,255,.14),
//       transparent 30%
//     ),
//     radial-gradient(
//       circle at 85% 40%,
//       rgba(40,100,255,.12),
//       transparent 30%
//     ),
//     #030308;

//   font-family:
//     Arial,
//     Helvetica,
//     sans-serif;

//   padding-bottom: 100px;
// }

//         /* =========================
//            GLOW
//         ========================= */

//         .why-glow {
//           position: absolute;

//           width: 400px;
//           height: 400px;

//           border-radius: 50%;

//           filter: blur(100px);

//           opacity: .18;

//           pointer-events: none;
//         }


//         .why-glow-one {
//           top: 100px;
//           left: -180px;

//           background: #a62cff;

//           animation:
//             whyGlowOne 8s
//             ease-in-out
//             infinite alternate;
//         }


//         .why-glow-two {
//           top: 650px;
//           right: -180px;

//           background: #246cff;

//           animation:
//             whyGlowTwo 10s
//             ease-in-out
//             infinite alternate;
//         }


//         @keyframes whyGlowOne {

//           from {
//             transform:
//               translate(0,0);
//           }

//           to {
//             transform:
//               translate(180px,120px);
//           }

//         }


//         @keyframes whyGlowTwo {

//           from {
//             transform:
//               translate(0,0);
//           }

//           to {
//             transform:
//               translate(-180px,-100px);
//           }

//         }


//         /* =========================
//            HERO
//         ========================= */

//         .why-hero {
//           position: relative;

//           min-height: 480px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           text-align: center;

//           padding:
//             80px 20px 60px;
//         }


//         .why-hero-content {
//           position: relative;

//           z-index: 2;

//           animation:
//             whyHeroIn 1s
//             ease forwards;
//         }


//         @keyframes whyHeroIn {

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


//         .why-badge {
//           display: inline-block;

//           padding:
//             9px 18px;

//           margin-bottom: 20px;

//           border-radius: 50px;

//           color: #c65cff;

//           background:
//             rgba(170,50,255,.08);

//           border:
//             1px solid
//             rgba(170,50,255,.25);

//           font-size: 12px;

//           letter-spacing: 3px;

//           text-transform: uppercase;

//           animation:
//             whyBadge 3s
//             ease-in-out
//             infinite;
//         }


//         @keyframes whyBadge {

//           0%,
//           100% {
//             box-shadow:
//               0 0 15px
//               rgba(170,50,255,.1);
//           }

//           50% {
//             box-shadow:
//               0 0 30px
//               rgba(170,50,255,.35);
//           }

//         }


//         .why-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px,7vw,85px);

//           line-height: 1.05;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #c32cff,
//               #718cff,
//               #43c9ff,
//               #c32cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation:
//             whyGradient 5s
//             linear
//             infinite;
//         }


//         @keyframes whyGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }


//         .why-hero h2 {
//           margin:
//             20px 0 15px;

//           font-size:
//             clamp(23px,3vw,36px);
//         }


//         .why-hero p {
//           max-width: 720px;

//           margin: auto;

//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;
//         }


//         /* =========================
//            CONTAINER
//         ========================= */

//         .why-container {
//   position: relative;
//   z-index: 2;

//   width: 100%;
//   max-width: 1200px;

//   margin: auto;

//   padding: 20px 25px;

//   box-sizing: border-box;
// }


//         /* =========================
//            REASONS
//         ========================= */

//         .why-title {
//           text-align: center;

//           margin-bottom: 45px;
//         }


//         .why-label {
//           color: #bb50ff;

//           font-size: 12px;

//           letter-spacing: 3px;

//           font-weight: 600;

//           margin-bottom: 12px;
//         }


//         .why-title h2 {
//           margin: 0 0 12px;

//           font-size:
//             clamp(32px,5vw,46px);
//         }


//         .why-title span {
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


//         .why-title p {
//           margin: 0;

//           color: #888895;

//           font-size: 14px;
//         }


//         .why-grid {
//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 20px;

//           margin-bottom: 120px;
//         }


//         .why-card {
//           position: relative;

//           padding: 30px;

//           min-height: 260px;

//           overflow: hidden;

//           border-radius: 20px;

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
//             whyCardIn .7s ease both;
//         }


//         .why-card:nth-child(2) {
//           animation-delay: .1s;
//         }

//         .why-card:nth-child(3) {
//           animation-delay: .2s;
//         }

//         .why-card:nth-child(4) {
//           animation-delay: .3s;
//         }

//         .why-card:nth-child(5) {
//           animation-delay: .4s;
//         }

//         .why-card:nth-child(6) {
//           animation-delay: .5s;
//         }


//         @keyframes whyCardIn {

//           from {
//             opacity: 0;

//             transform:
//               translateY(30px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateY(0);
//           }

//         }


//         .why-card::before {
//           content: "";

//           position: absolute;

//           width: 180px;
//           height: 180px;

//           right: -100px;
//           top: -100px;

//           border-radius: 50%;

//           background:
//             #a52cff;

//           filter: blur(70px);

//           opacity: .12;

//           transition: .4s ease;
//         }


//         .why-card:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(175,65,255,.35);

//           box-shadow:
//             0 20px 50px
//             rgba(110,35,255,.14);
//         }


//         .why-card:hover::before {
//           opacity: .28;

//           transform:
//             scale(1.4);
//         }


//         .why-icon {
//           width: 58px;
//           height: 58px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           border-radius: 15px;

//           font-size: 27px;

//           margin-bottom: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(160,50,255,.15),
//               rgba(50,100,255,.08)
//             );

//           border:
//             1px solid
//             rgba(170,60,255,.18);

//           transition:
//             .4s ease;
//         }


//         .why-card:hover .why-icon {
//           transform:
//             rotate(-6deg)
//             scale(1.1);

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.2);
//         }


//         .why-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 19px;
//         }


//         .why-card p {
//           margin: 0;

//           color: #898995;

//           font-size: 13px;

//           line-height: 1.8;
//         }


//         /* =========================
//            PROCESS
//         ========================= */

//         .why-process-section {
//           margin-bottom: 120px;
//         }


//         .why-process {
//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 15px;
//         }


//         .why-process-card {
//           position: relative;

//           padding: 30px 22px;

//           min-height: 220px;

//           border-radius: 18px;

//           background:
//             rgba(255,255,255,.025);

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition:
//             .35s ease;
//         }


//         .why-process-card:hover {
//           transform:
//             translateY(-8px);

//           border-color:
//             rgba(170,60,255,.3);

//           background:
//             rgba(150,50,255,.05);
//         }


//         .why-number {
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

//           margin-bottom: 25px;
//         }


//         .why-process-card h3 {
//           margin:
//             0 0 10px;

//           font-size: 18px;
//         }


//         .why-process-card p {
//           margin: 0;

//           color: #858592;

//           font-size: 13px;

//           line-height: 1.7;
//         }


//         /* =========================
//            BIG STATEMENT
//         ========================= */

//         .why-statement {
//           position: relative;

//           padding:
//             70px 30px;

//           text-align: center;

//           border-radius: 25px;

//           overflow: hidden;

//           background:
//             linear-gradient(
//               110deg,
//               rgba(150,45,255,.12),
//               rgba(35,100,255,.08)
//             );

//           border:
//             1px solid
//             rgba(170,70,255,.2);

//           margin-bottom: 80px;
//         }


//         .why-statement::before {
//           content: "";

//           position: absolute;

//           width: 400px;
//           height: 400px;

//           top: -300px;
//           left: 50%;

//           transform:
//             translateX(-50%);

//           border-radius: 50%;

//           background:
//             #a62cff;

//           filter: blur(100px);

//           opacity: .18;
//         }


//         .why-statement h2 {
//           position: relative;

//           margin:
//             0 0 18px;

//           font-size:
//             clamp(28px,4vw,44px);
//         }


//         .why-statement p {
//           position: relative;

//           max-width: 650px;

//           margin: auto;

//           color: #9999a8;

//           line-height: 1.8;
//         }


//         /* =========================
//    CTA
// ========================= */

// .why-cta {
//   text-align: center;
// }

// .why-cta h2 {
//   margin: 0 0 15px;
//   font-size: 32px;
// }

// .why-cta p {
//   margin: 0 0 25px;
//   color: #888895;
// }

// .why-cta-button {
//   display: inline-block;
//   padding: 14px 28px;
//   border-radius: 10px;

//   color: #ffffff !important;
//   text-decoration: none !important;

//   font-size: 14px;
//   font-weight: 600;

//   background: linear-gradient(
//     100deg,
//     #a52cff,
//     #326cff
//   );

//   box-shadow:
//     0 0 25px rgba(130, 45, 255, 0.3);

//   transition: 0.3s ease;
// }

// .why-cta-button:hover {
//   transform: translateY(-4px);

//   box-shadow:
//     0 0 35px rgba(130, 45, 255, 0.5);
// }

//         /* =========================
//            TABLET
//         ========================= */

//         @media (max-width: 900px) {

//           .why-grid {
//             grid-template-columns:
//               repeat(2,1fr);

//             margin-bottom: 80px;
//           }


//           .why-process {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//         }


//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 600px) {

//           .why-hero {
//             min-height: 410px;

//             padding:
//               70px 18px 40px;
//           }


//           .why-hero h1 {
//             font-size: 50px;
//           }


//           .why-hero h2 {
//             font-size: 22px;
//           }


//           .why-hero p {
//             font-size: 14px;
//           }


//           .why-container {
//   width: 100%;
//   max-width: 100%;

//   padding: 15px 16px;

//   box-sizing: border-box;
// }


//           .why-grid {
//             grid-template-columns: 1fr;

//             gap: 15px;

//             margin-bottom: 80px;
//           }


//           .why-card {
//             min-height: 235px;

//             padding: 25px;
//           }


//           .why-process {
//             grid-template-columns: 1fr;

//             gap: 15px;
//           }


//           .why-process-card {
//             min-height: 190px;
//           }


//           .why-statement {
//             padding:
//               50px 20px;
//           }


//           .why-statement h2 {
//             font-size: 28px;
//           }


//           .why-statement p {
//             font-size: 14px;
//           }


//           .why-cta h2 {
//             font-size: 27px;
//           }

//         }

//       `}</style>


//       <section className="why-page">

//         <div className="why-glow why-glow-one"></div>

//         <div className="why-glow why-glow-two"></div>


//         {/* =========================
//             HERO
//         ========================= */}

//         <div className="why-hero">

//           <div className="why-hero-content">

//             <div className="why-badge">
//               ✦ WHY ROHIL SPARK MEDIA
//             </div>


//             <h1>
//               Why Choose
//               <br />
//               Us?
//             </h1>


//             <h2>
//               More Than Marketing.
//               <br />
//               We Build Growth.
//             </h2>


//             <p>
//               We combine creativity, technology,
//               data and strategy to help brands
//               create meaningful digital experiences
//               and achieve real business growth.
//             </p>

//           </div>

//         </div>


//         <div className="why-container">


//           {/* =========================
//               REASONS
//           ========================= */}

//           <div className="why-title">

//             <div className="why-label">
//               THE ROHIL DIFFERENCE
//             </div>


//             <h2>
//               Why Businesses
//               <span> Choose Us</span>
//             </h2>


//             <p>
//               A smarter approach to digital growth.
//             </p>

//           </div>


//           <div className="why-grid">

//             {reasons.map(
//               (reason, index) => (

//                 <div
//                   className="why-card"
//                   key={index}
//                 >

//                   <div className="why-icon">
//                     {reason.icon}
//                   </div>


//                   <h3>
//                     {reason.title}
//                   </h3>


//                   <p>
//                     {reason.text}
//                   </p>

//                 </div>

//               )
//             )}

//           </div>


//           {/* =========================
//               PROCESS
//           ========================= */}

//           <div className="why-process-section">

//             <div className="why-title">

//               <div className="why-label">
//                 HOW WE WORK
//               </div>


//               <h2>
//                 Simple Process.
//                 <span> Powerful Results.</span>
//               </h2>


//               <p>
//                 From understanding your goals
//                 to optimizing your growth.
//               </p>

//             </div>


//             <div className="why-process">

//               {process.map(
//                 (item, index) => (

//                   <div
//                     className="why-process-card"
//                     key={index}
//                   >

//                     <div className="why-number">
//                       {item.number}
//                     </div>


//                     <h3>
//                       {item.title}
//                     </h3>


//                     <p>
//                       {item.text}
//                     </p>

//                   </div>

//                 )
//               )}

//             </div>

//           </div>


//           {/* =========================
//               STATEMENT
//           ========================= */}

//           <div className="why-statement">

//             <h2>
//               Your Goals.
//               <br />
//               Our Strategy.
//               <br />
//               One Growth Journey.
//             </h2>


//             <p>
//               We don't believe in one-size-fits-all
//               marketing. Every strategy we create
//               is designed around your business,
//               your audience and your goals.
//             </p>

//           </div>


//           {/* =========================
//               CTA
//           ========================= */}

//          <div className="why-cta">

//   <h2>
//     Ready To Grow With Us?
//   </h2>

//   <p>
//     Let's create a digital strategy
//     that moves your business forward.
//   </p>

//   <Link
//     to="/contact"
//     className="why-cta-button"
//   >
//     Let's Talk →
//   </Link>

// </div>


//         </div>

//       </section>
//     </>
//   );
// }

// export default WhyUs;
import React from "react";
import { Link } from "react-router-dom";

import {
  AutoAwesome,
  TrackChanges,
  Lightbulb,
  BarChart,
  Bolt,
  Handshake,
  RocketLaunch,
  Psychology,
  Insights,
  SettingsSuggest,
  TrendingUp,
  ArrowForward,
} from "@mui/icons-material";

function WhyUs() {
  const reasons = [
    {
      icon: <TrackChanges />,
      title: "Result Driven",
      text: "We focus on measurable outcomes that help your business generate visibility, leads and growth.",
    },
    {
      icon: <Lightbulb />,
      title: "Creative Strategies",
      text: "Every brand is different. We create unique strategies based on your business goals and audience.",
    },
    {
      icon: <BarChart />,
      title: "Data Powered",
      text: "We use campaign data and performance insights to continuously improve your digital marketing.",
    },
    {
      icon: <Bolt />,
      title: "Fast Execution",
      text: "From ideas to campaigns, we move quickly while maintaining quality and consistency.",
    },
    {
      icon: <Handshake />,
      title: "Transparent Approach",
      text: "Clear communication, honest reporting and complete visibility into your marketing activities.",
    },
    {
      icon: <RocketLaunch />,
      title: "Growth Focused",
      text: "Our goal is not just traffic or followers. We focus on sustainable business growth.",
    },
  ];

  const process = [
    {
      number: "01",
      icon: <Psychology />,
      title: "Understand",
      text: "We understand your business, audience and goals.",
    },
    {
      number: "02",
      icon: <Insights />,
      title: "Strategize",
      text: "We create a customized digital marketing strategy.",
    },
    {
      number: "03",
      icon: <SettingsSuggest />,
      title: "Execute",
      text: "Our team turns the strategy into powerful campaigns.",
    },
    {
      number: "04",
      icon: <TrendingUp />,
      title: "Optimize",
      text: "We analyze results and continuously improve performance.",
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================
           MAIN PAGE - DARK DEFAULT
        ===================================== */

        .why-page {
          --why-bg: #030308;
          --why-bg-secondary: #080b18;
          --why-card: rgba(255,255,255,.055);
          --why-card-hover: rgba(255,255,255,.08);

          --why-text: #ffffff;
          --why-text-secondary: #9999a8;
          --why-muted: #858592;

          --why-border: rgba(255,255,255,.08);
          --why-primary: #a52cff;
          --why-secondary: #326cff;

          width: 100%;
          min-height: 100vh;

          overflow: hidden;

          color: var(--why-text);

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(155,45,255,.14),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 40%,
              rgba(40,100,255,.12),
              transparent 30%
            ),
            var(--why-bg);

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          padding-bottom: 100px;

          transition:
            background .4s ease,
            color .4s ease;
        }


        /* =====================================
           LIGHT MODE
        ===================================== */

        body.light-theme .why-page {

          --why-bg: #f7f9fc;
          --why-bg-secondary: #ffffff;

          --why-card: rgba(255,255,255,.92);
          --why-card-hover: #ffffff;

          --why-text: #172033;
          --why-text-secondary: #526078;
          --why-muted: #64748b;

          --why-border: rgba(15,23,42,.10);

          --why-primary: #7c3aed;
          --why-secondary: #2563eb;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(124,58,237,.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 40%,
              rgba(37,99,235,.09),
              transparent 30%
            ),
            #f7f9fc;

          color: var(--why-text);
        }


        /* =====================================
           GLOW
        ===================================== */

        .why-glow {
          position: absolute;

          width: 400px;
          height: 400px;

          border-radius: 50%;

          filter: blur(100px);

          opacity: .18;

          pointer-events: none;
        }

        .why-glow-one {
          top: 100px;
          left: -180px;

          background: #a62cff;

          animation:
            whyGlowOne 8s
            ease-in-out
            infinite alternate;
        }

        .why-glow-two {
          top: 650px;
          right: -180px;

          background: #246cff;

          animation:
            whyGlowTwo 10s
            ease-in-out
            infinite alternate;
        }

        body.light-theme .why-glow {
          opacity: .08;
        }

        @keyframes whyGlowOne {
          from {
            transform: translate(0,0);
          }

          to {
            transform: translate(180px,120px);
          }
        }

        @keyframes whyGlowTwo {
          from {
            transform: translate(0,0);
          }

          to {
            transform: translate(-180px,-100px);
          }
        }


        /* =====================================
           HERO
        ===================================== */

        .why-hero {
          position: relative;

          min-height: 500px;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 80px 20px 60px;

          background:
            linear-gradient(
              rgba(3,3,8,.62),
              rgba(3,3,8,.72)
            ),
            url("/images/why-hero.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        body.light-theme .why-hero {

          background:
           
            url("/images/why-hero.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }


        .why-hero-content {
          position: relative;

          z-index: 2;

          max-width: 850px;

          animation:
            whyHeroIn 1s
            ease forwards;
        }

        @keyframes whyHeroIn {

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


        /* =====================================
           BADGE
        ===================================== */

        .why-badge {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            9px 18px;

          margin-bottom: 20px;

          border-radius: 50px;

          color: #c65cff;

          background:
            rgba(170,50,255,.10);

          border:
            1px solid
            rgba(170,50,255,.25);

          font-size: 12px;

          letter-spacing: 3px;

          text-transform: uppercase;

          backdrop-filter: blur(8px);

          animation:
            whyBadge 3s
            ease-in-out
            infinite;
        }

        .why-badge svg {
          font-size: 17px;
        }

        body.light-theme .why-badge {

          color: #7c3aed;

          background:
            rgba(124,58,237,.08);

          border-color:
            rgba(124,58,237,.18);
        }


        @keyframes whyBadge {

          0%,
          100% {
            box-shadow:
              0 0 15px
              rgba(170,50,255,.1);
          }

          50% {
            box-shadow:
              0 0 30px
              rgba(170,50,255,.35);
          }

        }


        /* =====================================
           HERO TITLE
        ===================================== */

        .why-hero h1 {

          margin: 0;

          font-size:
            clamp(48px,7vw,85px);

          line-height: 1.05;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #c32cff,
              #718cff,
              #43c9ff,
              #c32cff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          animation:
            whyGradient 5s
            linear
            infinite;
        }

        @keyframes whyGradient {

          to {
            background-position:
              300% center;
          }

        }


        .why-hero h2 {

          margin:
            20px 0 15px;

          font-size:
            clamp(23px,3vw,36px);

          color: #ffffff;
        }

        body.light-theme .why-hero h2 {
          color: #172033;
        }


        .why-hero p {

          max-width: 720px;

          margin: auto;

          color: #d0d2dc;

          font-size: 16px;

          line-height: 1.8;
        }

        body.light-theme .why-hero p {
          color: #475569;
        }


        /* =====================================
           CONTAINER
        ===================================== */

        .why-container {

          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1200px;

          margin: auto;

          padding:
            60px 25px 20px;
        }


        /* =====================================
           SECTION TITLE
        ===================================== */

        .why-title {

          text-align: center;

          margin-bottom: 45px;
        }

        .why-label {

          color: #bb50ff;

          font-size: 12px;

          letter-spacing: 3px;

          font-weight: 600;

          margin-bottom: 12px;
        }

        body.light-theme .why-label {
          color: #7c3aed;
        }


        .why-title h2 {

          margin:
            0 0 12px;

          font-size:
            clamp(32px,5vw,46px);

          color: var(--why-text);
        }


        .why-title h2 span {

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


        .why-title p {

          margin: 0;

          color:
            var(--why-muted);

          font-size: 14px;
        }


        /* =====================================
           REASONS GRID
        ===================================== */

        .why-grid {

          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 20px;

          margin-bottom: 120px;
        }


        /* =====================================
           REASON CARD
        ===================================== */

        .why-card {

          position: relative;

          padding: 30px;

          min-height: 270px;

          overflow: hidden;

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              var(--why-card),
              rgba(255,255,255,.015)
            );

          border:
            1px solid
            var(--why-border);

          box-shadow:
            0 10px 35px
            rgba(0,0,0,.10);

          transition:
            .4s ease;

          animation:
            whyCardIn .7s
            ease both;
        }

        body.light-theme .why-card {

          box-shadow:
            0 10px 35px
            rgba(15,23,42,.06);
        }


        .why-card:nth-child(2) {
          animation-delay: .1s;
        }

        .why-card:nth-child(3) {
          animation-delay: .2s;
        }

        .why-card:nth-child(4) {
          animation-delay: .3s;
        }

        .why-card:nth-child(5) {
          animation-delay: .4s;
        }

        .why-card:nth-child(6) {
          animation-delay: .5s;
        }


        @keyframes whyCardIn {

          from {
            opacity: 0;

            transform:
              translateY(30px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .why-card::before {

          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background:
            #a52cff;

          filter:
            blur(70px);

          opacity: .12;

          transition:
            .4s ease;
        }


        .why-card:hover {

          transform:
            translateY(-10px);

          border-color:
            rgba(175,65,255,.35);

          box-shadow:
            0 20px 50px
            rgba(110,35,255,.14);
        }


        .why-card:hover::before {

          opacity: .28;

          transform:
            scale(1.4);
        }


        /* =====================================
           ICON
        ===================================== */

        .why-icon {

          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 15px;

          margin-bottom: 22px;

          color: #c15cff;

          background:
            linear-gradient(
              145deg,
              rgba(160,50,255,.15),
              rgba(50,100,255,.08)
            );

          border:
            1px solid
            rgba(170,60,255,.18);

          transition:
            .4s ease;
        }

        .why-icon svg {
          font-size: 28px;
        }

        body.light-theme .why-icon {

          color: #7c3aed;

          background:
            linear-gradient(
              145deg,
              rgba(124,58,237,.10),
              rgba(37,99,235,.08)
            );

          border-color:
            rgba(124,58,237,.16);
        }


        .why-card:hover .why-icon {

          transform:
            rotate(-6deg)
            scale(1.1);

          box-shadow:
            0 0 25px
            rgba(160,50,255,.2);
        }


        .why-card h3 {

          margin:
            0 0 12px;

          font-size: 19px;

          color:
            var(--why-text);
        }


        .why-card p {

          margin: 0;

          color:
            var(--why-muted);

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================
           PROCESS
        ===================================== */

        .why-process-section {

          margin-bottom: 120px;
        }


        .why-process {

          display: grid;

          grid-template-columns:
            repeat(4,1fr);

          gap: 15px;
        }


        .why-process-card {

          position: relative;

          padding: 30px 22px;

          min-height: 230px;

          border-radius: 18px;

          background:
            rgba(255,255,255,.025);

          border:
            1px solid
            var(--why-border);

          transition:
            .35s ease;
        }

        body.light-theme .why-process-card {

          background:
            rgba(255,255,255,.90);

          box-shadow:
            0 8px 30px
            rgba(15,23,42,.05);
        }


        .why-process-card:hover {

          transform:
            translateY(-8px);

          border-color:
            rgba(170,60,255,.3);

          background:
            rgba(150,50,255,.05);
        }


        .why-process-icon {

          position: absolute;

          top: 25px;
          right: 22px;

          color:
            rgba(170,70,255,.45);
        }

        .why-process-icon svg {
          font-size: 28px;
        }


        .why-number {

          font-size: 42px;

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

          margin-bottom: 25px;
        }


        .why-process-card h3 {

          margin:
            0 0 10px;

          font-size: 18px;

          color:
            var(--why-text);
        }


        .why-process-card p {

          margin: 0;

          color:
            var(--why-muted);

          font-size: 13px;

          line-height: 1.7;
        }


        /* =====================================
           STATEMENT
        ===================================== */

        .why-statement {

          position: relative;

          padding:
            70px 30px;

          text-align: center;

          border-radius: 25px;

          overflow: hidden;

          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.12),
              rgba(35,100,255,.08)
            );

          border:
            1px solid
            rgba(170,70,255,.2);

          margin-bottom: 80px;
        }

        body.light-theme .why-statement {

          background:
            linear-gradient(
              110deg,
              rgba(124,58,237,.08),
              rgba(37,99,235,.06)
            );

          border-color:
            rgba(124,58,237,.15);
        }


        .why-statement::before {

          content: "";

          position: absolute;

          width: 400px;
          height: 400px;

          top: -300px;
          left: 50%;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            #a62cff;

          filter:
            blur(100px);

          opacity: .18;
        }


        .why-statement h2 {

          position: relative;

          margin:
            0 0 18px;

          font-size:
            clamp(28px,4vw,44px);

          color:
            var(--why-text);
        }


        .why-statement p {

          position: relative;

          max-width: 650px;

          margin: auto;

          color:
            var(--why-muted);

          line-height: 1.8;
        }


        /* =====================================
           CTA
        ===================================== */

        .why-cta {

          text-align: center;
        }


        .why-cta h2 {

          margin:
            0 0 15px;

          font-size: 32px;

          color:
            var(--why-text);
        }


        .why-cta p {

          margin:
            0 0 25px;

          color:
            var(--why-muted);
        }


        .why-cta-button {

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding:
            14px 28px;

          border-radius: 10px;

          color:
            #ffffff !important;

          text-decoration:
            none !important;

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

          transition:
            .3s ease;
        }


        .why-cta-button:hover {

          transform:
            translateY(-4px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.5);
        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 900px) {

          .why-grid {

            grid-template-columns:
              repeat(2,1fr);

            margin-bottom: 80px;
          }


          .why-process {

            grid-template-columns:
              repeat(2,1fr);
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {

          .why-hero {

            min-height: 430px;

            padding:
              70px 18px 40px;
          }


          .why-hero h1 {

            font-size: 50px;
          }


          .why-hero h2 {

            font-size: 22px;
          }


          .why-hero p {

            font-size: 14px;
          }


          .why-container {

            width: 100%;

            max-width: 100%;

            padding:
              50px 16px 20px;
          }


          .why-grid {

            grid-template-columns: 1fr;

            gap: 15px;

            margin-bottom: 80px;
          }


          .why-card {

            min-height: 235px;

            padding: 25px;
          }


          .why-process {

            grid-template-columns: 1fr;

            gap: 15px;
          }


          .why-process-card {

            min-height: 190px;
          }


          .why-statement {

            padding:
              50px 20px;
          }


          .why-statement h2 {

            font-size: 28px;
          }


          .why-statement p {

            font-size: 14px;
          }


          .why-cta h2 {

            font-size: 27px;
          }

        }


        @media (max-width: 400px) {

          .why-hero h1 {
            font-size: 43px;
          }

          .why-hero h2 {
            font-size: 20px;
          }

          .why-badge {
            font-size: 9px;
            letter-spacing: 2px;
          }

        }

      `}</style>


      <section className="why-page">

        <div className="why-glow why-glow-one"></div>
        <div className="why-glow why-glow-two"></div>


        {/* =========================
            HERO
        ========================= */}

        <div className="why-hero">

          <div className="why-hero-content">

            <div className="why-badge">
              <AutoAwesome />
              WHY ROHIL SPARK MEDIA
            </div>


            <h1>
              Why Choose
              <br />
              Us?
            </h1>


            <h2>
              More Than Marketing.
              <br />
              We Build Growth.
            </h2>


            <p>
              We combine creativity, technology,
              data and strategy to help brands
              create meaningful digital experiences
              and achieve real business growth.
            </p>

          </div>

        </div>


        <div className="why-container">


          {/* =========================
              REASONS
          ========================= */}

          <div className="why-title">

            <div className="why-label">
              THE ROHIL DIFFERENCE
            </div>


            <h2>
              Why Businesses
              <span> Choose Us</span>
            </h2>


            <p>
              A smarter approach to digital growth.
            </p>

          </div>


          <div className="why-grid">

            {reasons.map((reason, index) => (

              <div
                className="why-card"
                key={index}
              >

                <div className="why-icon">
                  {reason.icon}
                </div>


                <h3>
                  {reason.title}
                </h3>


                <p>
                  {reason.text}
                </p>

              </div>

            ))}

          </div>


          {/* =========================
              PROCESS
          ========================= */}

          <div className="why-process-section">

            <div className="why-title">

              <div className="why-label">
                HOW WE WORK
              </div>


              <h2>
                Simple Process.
                <span> Powerful Results.</span>
              </h2>


              <p>
                From understanding your goals
                to optimizing your growth.
              </p>

            </div>


            <div className="why-process">

              {process.map((item, index) => (

                <div
                  className="why-process-card"
                  key={index}
                >

                  <div className="why-process-icon">
                    {item.icon}
                  </div>


                  <div className="why-number">
                    {item.number}
                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>


          {/* =========================
              STATEMENT
          ========================= */}

          <div className="why-statement">

            <h2>
              Your Goals.
              <br />
              Our Strategy.
              <br />
              One Growth Journey.
            </h2>


            <p>
              We don't believe in one-size-fits-all
              marketing. Every strategy we create
              is designed around your business,
              your audience and your goals.
            </p>

          </div>


          {/* =========================
              CTA
          ========================= */}

          <div className="why-cta">

            <h2>
              Ready To Grow With Us?
            </h2>


            <p>
              Let's create a digital strategy
              that moves your business forward.
            </p>


            <Link
              to="/contact"
              className="why-cta-button"
            >
              Let's Talk
              <ArrowForward />
            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default WhyUs;