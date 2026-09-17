// import React from "react";
// import { Link } from "react-router-dom";

// function Insights() {
//   const insights = [
//     {
//       icon: "📈",
//       title: "Digital Marketing Trends",
//       text: "Discover the latest digital marketing strategies, trends and opportunities that can help your business grow online.",
//       category: "MARKETING",
//     },
//     {
//       icon: "🤖",
//       title: "AI & Automation",
//       text: "Explore how AI and automation are transforming marketing, customer engagement and business growth.",
//       category: "ARTIFICIAL INTELLIGENCE",
//     },
//     {
//       icon: "🔍",
//       title: "SEO Insights",
//       text: "Learn practical SEO strategies to improve search visibility, attract the right audience and generate organic growth.",
//       category: "SEO",
//     },
//     {
//       icon: "🎯",
//       title: "Paid Advertising",
//       text: "Understand Google Ads, Meta Ads and performance marketing strategies that help businesses reach the right customers.",
//       category: "ADVERTISING",
//     },
//     {
//       icon: "📱",
//       title: "Social Media",
//       text: "Get insights into social media content, engagement strategies and ways to build a stronger digital presence.",
//       category: "SOCIAL MEDIA",
//     },
//     {
//       icon: "✨",
//       title: "Brand Growth",
//       text: "Learn how strong branding, creative storytelling and consistent communication can build memorable brands.",
//       category: "BRANDING",
//     },
//   ];

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .insights-page {
//           min-height: 100vh;
//           padding-bottom: 100px;
//           color: white;
//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 15% 15%,
//               rgba(160,45,255,.15),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 85% 45%,
//               rgba(40,100,255,.13),
//               transparent 30%
//             ),
//             #030308;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;
//         }

//         /* =========================
//            HERO
//         ========================= */

//         .insights-hero {
//           position: relative;

//           min-height: 500px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           text-align: center;

//           padding: 80px 20px 60px;
//         }

//         .insights-hero-content {
//           position: relative;
//           z-index: 2;

//           animation:
//             insightsHeroIn 1s ease forwards;
//         }

//         @keyframes insightsHeroIn {

//           from {
//             opacity: 0;
//             transform: translateY(45px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }

//         .insights-badge {
//           display: inline-block;

//           padding: 9px 18px;

//           margin-bottom: 22px;

//           border-radius: 50px;

//           color: #c45cff;

//           background:
//             rgba(170,50,255,.08);

//           border:
//             1px solid
//             rgba(170,50,255,.25);

//           font-size: 12px;

//           letter-spacing: 3px;

//           animation:
//             insightsBadge 3s
//             ease-in-out
//             infinite;
//         }

//         @keyframes insightsBadge {

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

//         .insights-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px, 7vw, 85px);

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
//             insightsGradient 5s
//             linear infinite;
//         }

//         @keyframes insightsGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }

//         .insights-hero h2 {
//           margin:
//             20px 0 15px;

//           font-size:
//             clamp(23px, 3vw, 36px);
//         }

//         .insights-hero p {
//           max-width: 720px;

//           margin: auto;

//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;
//         }

//         /* =========================
//            CONTAINER
//         ========================= */

//         .insights-container {
//           position: relative;

//           z-index: 2;

//           max-width: 1200px;

//           margin: auto;

//           padding:
//             20px 25px;
//         }

//         .insights-title {
//           text-align: center;

//           margin-bottom: 45px;
//         }

//         .insights-label {
//           color: #bb50ff;

//           font-size: 12px;

//           letter-spacing: 3px;

//           font-weight: 600;

//           margin-bottom: 12px;
//         }

//         .insights-title h2 {
//           margin:
//             0 0 12px;

//           font-size:
//             clamp(32px, 5vw, 46px);
//         }

//         .insights-title h2 span {
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

//         .insights-title p {
//           margin: 0;

//           color: #888895;

//           font-size: 14px;
//         }

//         /* =========================
//            CARDS
//         ========================= */

//         .insights-grid {
//           display: grid;

//           grid-template-columns:
//             repeat(3, 1fr);

//           gap: 20px;

//           margin-bottom: 100px;
//         }

//         .insight-card {
//           position: relative;

//           min-height: 300px;

//           padding: 30px;

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
//             insightCardIn .8s ease both;
//         }

//         .insight-card:nth-child(2) {
//           animation-delay: .1s;
//         }

//         .insight-card:nth-child(3) {
//           animation-delay: .2s;
//         }

//         .insight-card:nth-child(4) {
//           animation-delay: .3s;
//         }

//         .insight-card:nth-child(5) {
//           animation-delay: .4s;
//         }

//         .insight-card:nth-child(6) {
//           animation-delay: .5s;
//         }

//         @keyframes insightCardIn {

//           from {
//             opacity: 0;
//             transform:
//               translateY(35px);
//           }

//           to {
//             opacity: 1;
//             transform:
//               translateY(0);
//           }

//         }

//         .insight-card::before {
//           content: "";

//           position: absolute;

//           width: 200px;
//           height: 200px;

//           right: -110px;
//           top: -110px;

//           border-radius: 50%;

//           background: #a52cff;

//           filter: blur(70px);

//           opacity: .1;

//           transition: .4s ease;
//         }

//         .insight-card:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(175,65,255,.35);

//           box-shadow:
//             0 20px 50px
//             rgba(110,35,255,.16);
//         }

//         .insight-card:hover::before {
//           opacity: .3;

//           transform:
//             scale(1.4);
//         }

//         .insight-icon {
//           width: 62px;
//           height: 62px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 16px;

//           font-size: 28px;

//           margin-bottom: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(160,50,255,.16),
//               rgba(50,100,255,.08)
//             );

//           border:
//             1px solid
//             rgba(170,60,255,.18);

//           transition:
//             .4s ease;
//         }

//         .insight-card:hover .insight-icon {
//           transform:
//             rotate(-6deg)
//             scale(1.1);

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.25);
//         }

//         .insight-category {
//           color: #b85cff;

//           font-size: 10px;

//           font-weight: 700;

//           letter-spacing: 2px;

//           margin-bottom: 10px;
//         }

//         .insight-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 20px;
//         }

//         .insight-card p {
//           margin: 0;

//           color: #898995;

//           font-size: 13px;

//           line-height: 1.8;
//         }

//         .insight-arrow {
//           position: absolute;

//           right: 25px;
//           bottom: 25px;

//           width: 38px;
//           height: 38px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           color: white;

//           background:
//             rgba(255,255,255,.06);

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           transition: .3s ease;
//         }

//         .insight-card:hover .insight-arrow {
//           transform:
//             translateX(5px);

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );
//         }

//         /* =========================
//            CTA
//         ========================= */

//         .insights-cta {
//           position: relative;

//           padding:
//             65px 25px;

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
//         }

//         .insights-cta h2 {
//           margin:
//             0 0 15px;

//           font-size:
//             clamp(28px, 4vw, 42px);
//         }

//         .insights-cta p {
//           max-width: 650px;

//           margin:
//             0 auto 25px;

//           color: #9999a8;

//           line-height: 1.8;
//         }

//         .insights-cta-button {
//           display: inline-block;

//           padding:
//             14px 28px;

//           border-radius: 10px;

//           color: white !important;

//           text-decoration: none !important;

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

//         .insights-cta-button:hover {
//           transform:
//             translateY(-4px);

//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.5);
//         }

//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 900px) {

//           .insights-grid {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }

//         }

//         @media (max-width: 600px) {

//           .insights-hero {
//             min-height: 410px;

//             padding:
//               70px 18px 40px;
//           }

//           .insights-hero h1 {
//             font-size: 50px;
//           }

//           .insights-hero h2 {
//             font-size: 22px;
//           }

//           .insights-hero p {
//             font-size: 14px;
//           }

//           .insights-container {
//             padding:
//               15px 16px;
//           }

//           .insights-grid {
//             grid-template-columns: 1fr;

//             gap: 15px;

//             margin-bottom: 70px;
//           }

//           .insight-card {
//             min-height: 270px;

//             padding: 25px;
//           }

//           .insights-cta {
//             padding:
//               50px 20px;
//           }

//           .insights-cta h2 {
//             font-size: 28px;
//           }

//           .insights-cta p {
//             font-size: 14px;
//           }

//         }

//       `}</style>

//       <section className="insights-page">

//         {/* HERO */}

//         <div className="insights-hero">

//           <div className="insights-hero-content">

//             <div className="insights-badge">
//               ✦ ROHIL SPARK INSIGHTS
//             </div>

//             <h1>
//               Insights
//             </h1>

//             <h2>
//               Ideas That Inspire.
//               <br />
//               Strategies That Grow.
//             </h2>

//             <p>
//               Explore digital marketing insights,
//               technology trends and practical
//               strategies designed to help your
//               business grow in the digital world.
//             </p>

//           </div>

//         </div>


//         <div className="insights-container">

//           {/* TITLE */}

//           <div className="insights-title">

//             <div className="insights-label">
//               EXPLORE OUR INSIGHTS
//             </div>

//             <h2>
//               Learn.
//               <span> Discover. Grow.</span>
//             </h2>

//             <p>
//               Fresh ideas and strategies for your digital growth.
//             </p>

//           </div>


//           {/* CARDS */}

//           <div className="insights-grid">

//             {insights.map((item, index) => (

//               <div
//                 className="insight-card"
//                 key={index}
//               >

//                 <div className="insight-icon">
//                   {item.icon}
//                 </div>

//                 <div className="insight-category">
//                   {item.category}
//                 </div>

//                 <h3>
//                   {item.title}
//                 </h3>

//                 <p>
//                   {item.text}
//                 </p>

//                 <div className="insight-arrow">
//                   →
//                 </div>

//               </div>

//             ))}

//           </div>


//           {/* CTA */}

//           <div className="insights-cta">

//             <h2>
//               Ready To Turn Insights Into Growth?
//             </h2>

//             <p>
//               Let's create a digital strategy
//               built around your business goals.
//             </p>

//             <Link
//               to="/contact"
//               className="insights-cta-button"
//             >
//               Let's Talk →
//             </Link>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Insights;
import React from "react";
import { Link } from "react-router-dom";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SearchIcon from "@mui/icons-material/Search";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Insights() {
 const insights = [
  {
    icon: <TrendingUpIcon />,
    title: "Digital Marketing Trends",
    text: "Discover the latest digital marketing strategies, trends and opportunities that can help your business grow online.",
    category: "MARKETING",
  },
  {
    icon: <SmartToyIcon />,
    title: "AI & Automation",
    text: "Explore how AI and automation are transforming marketing, customer engagement and business growth.",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    icon: <SearchIcon />,
    title: "SEO Insights",
    text: "Learn practical SEO strategies to improve search visibility, attract the right audience and generate organic growth.",
    category: "SEO",
  },
  {
    icon: <AdsClickIcon />,
    title: "Paid Advertising",
    text: "Understand Google Ads, Meta Ads and performance marketing strategies that help businesses reach the right customers.",
    category: "ADVERTISING",
  },
  {
    icon: <PhoneAndroidIcon />,
    title: "Social Media",
    text: "Get insights into social media content, engagement strategies and ways to build a stronger digital presence.",
    category: "SOCIAL MEDIA",
  },
  {
    icon: <AutoAwesomeIcon />,
    title: "Brand Growth",
    text: "Learn how strong branding, creative storytelling and consistent communication can build memorable brands.",
    category: "BRANDING",
  },
];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================
           MAIN PAGE - DARK MODE
        ===================================== */

        .insights-page {
          min-height: 100vh;

          padding-bottom: 100px;

          color: #ffffff;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(160,45,255,.15),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 45%,
              rgba(40,100,255,.13),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          transition:
            background .4s ease,
            color .4s ease;
        }


        /* =====================================
           HERO
        ===================================== */

        .insights-hero {
          position: relative;

          min-height: 520px;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding: 80px 20px 60px;

          background:
            linear-gradient(
              rgba(3,3,8,.48),
              rgba(3,3,8,.68)
            ),
            url("/images/insights-hero.jpg");

          background-size: cover;

          background-position: center;
        }

        .insights-hero-content {
          position: relative;

          z-index: 2;

          max-width: 800px;

          animation:
            insightsHeroIn 1s ease forwards;
        }

        @keyframes insightsHeroIn {

          from {
            opacity: 0;

            transform:
              translateY(45px);
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

        .insights-badge {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding: 9px 18px;

          margin-bottom: 22px;

          border-radius: 50px;

          color: #c45cff;

          background:
            rgba(170,50,255,.08);

          border:
            1px solid
            rgba(170,50,255,.25);

          font-size: 12px;

          letter-spacing: 3px;

          animation:
            insightsBadge 3s
            ease-in-out
            infinite;
        }

        .insights-badge svg {
          font-size: 17px;
        }

        @keyframes insightsBadge {

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

        .insights-hero h1 {
          margin: 0;

          font-size:
            clamp(48px, 7vw, 85px);

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
            insightsGradient 5s
            linear infinite;
        }

        @keyframes insightsGradient {

          to {
            background-position:
              300% center;
          }

        }

        .insights-hero h2 {
          margin:
            20px 0 15px;

          font-size:
            clamp(23px, 3vw, 36px);
        }

        .insights-hero p {
          max-width: 720px;

          margin: auto;

          color: #9999a8;

          font-size: 16px;

          line-height: 1.8;
        }


        /* =====================================
           CONTAINER
        ===================================== */

        .insights-container {
          position: relative;

          z-index: 2;

          max-width: 1200px;

          margin: auto;

          padding:
            70px 25px 20px;
        }


        /* =====================================
           SECTION TITLE
        ===================================== */

        .insights-title {
          text-align: center;

          margin-bottom: 45px;
        }

        .insights-label {
          color: #bb50ff;

          font-size: 12px;

          letter-spacing: 3px;

          font-weight: 600;

          margin-bottom: 12px;
        }

        .insights-title h2 {
          margin:
            0 0 12px;

          font-size:
            clamp(32px, 5vw, 46px);
        }

        .insights-title h2 span {
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

        .insights-title p {
          margin: 0;

          color: #888895;

          font-size: 14px;
        }


        /* =====================================
           CARDS GRID
        ===================================== */

        .insights-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;

          margin-bottom: 100px;
        }


        /* =====================================
           INSIGHT CARD
        ===================================== */

        .insight-card {
          position: relative;

          min-height: 410px;

          padding: 20px;

          overflow: hidden;

          border-radius: 20px;

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
            insightCardIn .8s ease both;
        }

        .insight-card:nth-child(2) {
          animation-delay: .1s;
        }

        .insight-card:nth-child(3) {
          animation-delay: .2s;
        }

        .insight-card:nth-child(4) {
          animation-delay: .3s;
        }

        .insight-card:nth-child(5) {
          animation-delay: .4s;
        }

        .insight-card:nth-child(6) {
          animation-delay: .5s;
        }

        @keyframes insightCardIn {

          from {
            opacity: 0;

            transform:
              translateY(35px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        /* =====================================
           CARD IMAGE
        ===================================== */

        .insight-image {
          width: 100%;

          height: 150px;

          overflow: hidden;

          border-radius: 15px;

          margin-bottom: 20px;

          position: relative;
        }

        .insight-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform .5s ease;
        }

        .insight-image::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(3,3,8,.55),
              transparent
            );
        }

        .insight-card:hover
        .insight-image img {
          transform:
            scale(1.08);
        }


        /* =====================================
           CARD GLOW
        ===================================== */

        .insight-card::before {
          content: "";

          position: absolute;

          width: 200px;
          height: 200px;

          right: -110px;
          top: -110px;

          border-radius: 50%;

          background: #a52cff;

          filter: blur(70px);

          opacity: .1;

          transition: .4s ease;
        }

        .insight-card:hover {
          transform:
            translateY(-10px);

          border-color:
            rgba(175,65,255,.35);

          box-shadow:
            0 20px 50px
            rgba(110,35,255,.16);
        }

        .insight-card:hover::before {
          opacity: .3;

          transform:
            scale(1.4);
        }


        /* =====================================
           ICON
        ===================================== */

        .insight-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 16px;

          margin-bottom: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(160,50,255,.16),
              rgba(50,100,255,.08)
            );

          border:
            1px solid
            rgba(170,60,255,.18);

          transition:
            .4s ease;
        }

        .insight-icon svg {
          font-size: 28px;

          color: #c05cff;
        }

        .insight-card:hover
        .insight-icon {
          transform:
            rotate(-6deg)
            scale(1.1);

          box-shadow:
            0 0 25px
            rgba(160,50,255,.25);
        }


        /* =====================================
           CATEGORY
        ===================================== */

        .insight-category {
          color: #b85cff;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 2px;

          margin-bottom: 10px;
        }

        .insight-card h3 {
          margin:
            0 0 12px;

          font-size: 20px;
        }

        .insight-card p {
          margin: 0;

          color: #898995;

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================
           ARROW
        ===================================== */

        .insight-arrow {
          position: absolute;

          right: 25px;

          bottom: 25px;

          width: 38px;
          height: 38px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          color: white;

          background:
            rgba(255,255,255,.06);

          border:
            1px solid
            rgba(255,255,255,.1);

          transition:
            .3s ease;
        }

        .insight-arrow svg {
          font-size: 19px;
        }

        .insight-card:hover
        .insight-arrow {
          transform:
            translateX(5px);

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );
        }


        /* =====================================
           CTA
        ===================================== */

        .insights-cta {
          position: relative;

          padding:
            65px 25px;

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
        }

        .insights-cta h2 {
          margin:
            0 0 15px;

          font-size:
            clamp(28px, 4vw, 42px);
        }

        .insights-cta p {
          max-width: 650px;

          margin:
            0 auto 25px;

          color: #9999a8;

          line-height: 1.8;
        }

        .insights-cta-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          padding:
            14px 28px;

          border-radius: 10px;

          color: white !important;

          text-decoration: none !important;

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

        .insights-cta-button svg {
          font-size: 19px;

          transition:
            transform .3s ease;
        }

        .insights-cta-button:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.5);
        }

        .insights-cta-button:hover svg {
          transform:
            translateX(4px);
        }


        /* =====================================
           LIGHT MODE
        ===================================== */

        body.light-theme .insights-page {
          color: #171321;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(160,45,255,.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 45%,
              rgba(40,100,255,.07),
              transparent 30%
            ),
            #f7f8fc;
        }

        body.light-theme .insights-hero {
          background:
            linear-gradient(
              rgba(255,255,255,.12),
              rgba(248,250,255,.22)
            ),
            url("/images/insights-hero.jpg");

          background-size: cover;

          background-position: center;
        }

        body.light-theme .insights-hero h2 {
          color: #171321;
        }

        body.light-theme .insights-hero p {
          color: #555766;
        }

        body.light-theme .insights-badge {
          color: #7d28ce;

          background:
            rgba(130,45,220,.07);

          border-color:
            rgba(130,45,220,.20);
        }

        body.light-theme .insights-title h2 {
          color: #171321;
        }

        body.light-theme .insights-title p {
          color: #606170;
        }

        body.light-theme .insight-card {
          background:
            rgba(255,255,255,.88);

          border-color:
            rgba(30,30,50,.10);

          box-shadow:
            0 10px 35px
            rgba(40,30,80,.06);
        }

        body.light-theme .insight-card:hover {
          border-color:
            rgba(130,45,220,.28);

          box-shadow:
            0 20px 50px
            rgba(80,40,150,.12);
        }

        body.light-theme .insight-image::after {
          background:
            linear-gradient(
              to top,
              rgba(20,15,35,.35),
              transparent
            );
        }

        body.light-theme .insight-card h3 {
          color: #171321;
        }

        body.light-theme .insight-card p {
          color: #606170;
        }

        body.light-theme .insight-icon {
          background:
            linear-gradient(
              145deg,
              rgba(150,50,255,.09),
              rgba(50,100,255,.06)
            );

          border-color:
            rgba(130,45,220,.15);
        }

        body.light-theme .insight-icon svg {
          color: #7d29d1;
        }

        body.light-theme .insight-arrow {
          color: #555766;

          background:
            rgba(120,100,160,.06);

          border-color:
            rgba(40,35,60,.10);
        }

        body.light-theme .insights-cta {
          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.07),
              rgba(35,100,255,.05)
            );

          border-color:
            rgba(130,45,220,.18);

          box-shadow:
            0 15px 45px
            rgba(60,40,130,.07);
        }

        body.light-theme .insights-cta h2 {
          color: #171321;
        }

        body.light-theme .insights-cta p {
          color: #606170;
        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 900px) {

          .insights-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {

          .insights-hero {
            min-height: 420px;

            padding:
              70px 18px 40px;
          }

          .insights-hero h1 {
            font-size: 50px;
          }

          .insights-hero h2 {
            font-size: 22px;
          }

          .insights-hero p {
            font-size: 14px;
          }

          .insights-container {
            padding:
              55px 16px 15px;
          }

          .insights-grid {
            grid-template-columns: 1fr;

            gap: 15px;

            margin-bottom: 70px;
          }

          .insight-card {
            min-height: 400px;

            padding: 20px;
          }

          .insight-image {
            height: 155px;
          }

          .insights-cta {
            padding:
              50px 20px;
          }

          .insights-cta h2 {
            font-size: 28px;
          }

          .insights-cta p {
            font-size: 14px;
          }

          .insights-cta-button {
            width: 100%;

            max-width: 280px;
          }

        }

      `}</style>


      <section className="insights-page">


        {/* =====================================
            HERO
        ===================================== */}

        <div className="insights-hero">

          <div className="insights-hero-content">

            <div className="insights-badge">

              <AutoAwesomeIcon />

              ROHIL SPARK INSIGHTS

            </div>


            <h1>
              Insights
            </h1>


            <h2>
              Ideas That Inspire.
              <br />
              Strategies That Grow.
            </h2>


            <p>
              Explore digital marketing insights,
              technology trends and practical
              strategies designed to help your
              business grow in the digital world.
            </p>

          </div>

        </div>


        {/* =====================================
            CONTENT
        ===================================== */}

        <div className="insights-container">


          {/* TITLE */}

          <div className="insights-title">

            <div className="insights-label">
              EXPLORE OUR INSIGHTS
            </div>

            <h2>
              Learn.
              <span>
                Discover. Grow.
              </span>
            </h2>

            <p>
              Fresh ideas and strategies for your digital growth.
            </p>

          </div>


          {/* =====================================
              CARDS
          ===================================== */}

        <div className="insights-grid">
  {insights.map((item, index) => (
    <div
      className="insight-card"
      key={index}
    >

      {/* ICON */}
      <div className="insight-icon">
        {item.icon}
      </div>

      {/* CATEGORY */}
      <div className="insight-category">
        {item.category}
      </div>

      {/* TITLE */}
      <h3>
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p>
        {item.text}
      </p>

      {/* ARROW */}
      <div className="insight-arrow">
        <ArrowForwardIcon />
      </div>

    </div>
  ))}
</div>


          {/* =====================================
              CTA
          ===================================== */}

          <div className="insights-cta">

            <h2>
              Ready To Turn Insights Into Growth?
            </h2>

            <p>
              Let's create a digital strategy
              built around your business goals.
            </p>

            <Link
              to="/contact"
              className="insights-cta-button"
            >
              Let's Talk
              <ArrowForwardIcon />
            </Link>

          </div>


        </div>

      </section>
    </>
  );
}

export default Insights;