// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// function OurWork() {

//   const [activeFilter, setActiveFilter] = useState("All");

//   const projects = [
//     {
//       title: "Business Website",
//       category: "Web Design",
//       icon: "💻",
//       description:
//         "Modern responsive website designed to create a strong digital presence and improve customer engagement.",
//       result: "40% More Engagement",
//     },
//     {
//       title: "SEO Growth Campaign",
//       category: "SEO",
//       icon: "🚀",
//       description:
//         "Search engine optimization strategy focused on improving organic visibility, rankings and website traffic.",
//       result: "3X Organic Traffic",
//     },
//     {
//       title: "Google Ads Campaign",
//       category: "Google Ads",
//       icon: "🎯",
//       description:
//         "Performance-focused Google Ads campaign designed to generate qualified leads and maximize conversions.",
//       result: "2.8X ROAS",
//     },
//     {
//       title: "Meta Ads Campaign",
//       category: "Meta Ads",
//       icon: "📢",
//       description:
//         "Creative Facebook and Instagram advertising campaign built to increase reach, leads and conversions.",
//       result: "65% Lower CPL",
//     },
//     {
//       title: "Social Media Growth",
//       category: "Social Media",
//       icon: "📱",
//       description:
//         "Content strategy and social media management designed to build an active and engaging online community.",
//       result: "120K+ Reach",
//     },
//     {
//       title: "Brand Identity",
//       category: "Branding",
//       icon: "🎨",
//       description:
//         "Complete visual branding solution including brand identity, creative direction and digital assets.",
//       result: "Strong Brand Presence",
//     },
//   ];

//   const filters = [
//     "All",
//     "Web Design",
//     "SEO",
//     "Google Ads",
//     "Meta Ads",
//     "Social Media",
//     "Branding",
//   ];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter(
//           (project) =>
//             project.category === activeFilter
//         );

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .work-page {
//           min-height: 100vh;
//             width: 100%;
//           padding-bottom: 100px;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 10% 15%,
//               rgba(145,45,255,.15),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 90% 35%,
//               rgba(40,100,255,.12),
//               transparent 30%
//             ),
//             #030308;

//           overflow: hidden;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;
//         }


//         /* ======================
//            HERO
//         ====================== */

//         .work-hero {
//           position: relative;

//           min-height: 430px;

//           display: flex;

//           justify-content: center;

//           align-items: center;

//           text-align: center;

//           padding: 80px 20px 50px;
//         }


//         .work-hero-content {
//           position: relative;

//           z-index: 2;

//           animation:
//             workHero 1s ease forwards;
//         }


//         @keyframes workHero {

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


//         .work-badge {
//           display: inline-block;

//           padding:
//             9px 18px;

//           margin-bottom: 20px;

//           border-radius: 50px;

//           color: #c35cff;

//           background:
//             rgba(170,50,255,.08);

//           border:
//             1px solid
//             rgba(170,50,255,.25);

//           font-size: 12px;

//           letter-spacing: 3px;

//           text-transform: uppercase;

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.12);
//         }


//         .work-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px, 7vw, 85px);

//           line-height: 1.05;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #c42cff,
//               #6f8cff,
//               #42c8ff,
//               #c42cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation:
//             workGradient 5s linear infinite;
//         }


//         @keyframes workGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }


//         .work-hero h2 {
//           margin:
//             18px 0;

//           font-size:
//             clamp(23px, 3vw, 36px);
//         }


//         .work-hero p {
//           max-width: 700px;

//           margin: auto;

//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;
//         }


//         /* ======================
//            GLOW
//         ====================== */

//         .work-glow {
//           position: absolute;

//           width: 350px;
//           height: 350px;

//           border-radius: 50%;

//           filter: blur(100px);

//           opacity: .2;
//         }


//         .work-glow-one {
//           top: 0;
//           left: -150px;

//           background: #a42cff;

//           animation:
//             workGlowOne 8s infinite alternate;
//         }


//         .work-glow-two {
//           right: -150px;
//           bottom: -100px;

//           background: #246cff;

//           animation:
//             workGlowTwo 10s infinite alternate;
//         }


//         @keyframes workGlowOne {

//           to {
//             transform:
//               translate(
//                 180px,
//                 150px
//               );
//           }

//         }


//         @keyframes workGlowTwo {

//           to {
//             transform:
//               translate(
//                 -180px,
//                 -120px
//               );
//           }

//         }


//         /* ======================
//            CONTAINER
//         ====================== */

//        .work-container {
//   position: relative;
//   z-index: 2;
//   width: 100%;
//   max-width: 1200px;
//   margin: auto;
//   padding: 20px 25px;
// }


//         /* ======================
//            FILTER
//         ====================== */

//         .work-filters {
//           display: flex;

//           justify-content: center;

//           align-items: center;

//           flex-wrap: wrap;

//           gap: 10px;

//           margin-bottom: 55px;
//         }


//         .work-filter {
//           padding:
//             11px 17px;

//           border-radius: 50px;

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           background:
//             rgba(255,255,255,.025);

//           color: #aaaab5;

//           cursor: pointer;

//           font-size: 13px;

//           transition:
//             .3s ease;
//         }


//         .work-filter:hover {
//           color: white;

//           border-color:
//             rgba(170,60,255,.4);

//           transform:
//             translateY(-2px);
//         }


//         .work-filter.active {
//           color: white;

//           border-color:
//             transparent;

//           background:
//             linear-gradient(
//               100deg,
//               #a72cff,
//               #5964ff
//             );

//           box-shadow:
//             0 0 22px
//             rgba(140,50,255,.25);
//         }


//         /* ======================
//            PROJECT GRID
//         ====================== */

//         .work-grid {
//           display: grid;

//           grid-template-columns:
//             repeat(2, 1fr);

//           gap: 25px;
//         }


//         .work-card {
//           position: relative;

//           min-height: 380px;

//           padding: 35px;

//           border-radius: 22px;

//           overflow: hidden;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.055),
//               rgba(255,255,255,.015)
//             );

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           transition:
//             transform .4s ease,
//             border .4s ease,
//             box-shadow .4s ease;

//           animation:
//             workCard .5s ease;
//         }


//         @keyframes workCard {

//           from {
//             opacity: 0;

//             transform:
//               translateY(25px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateY(0);
//           }

//         }


//         .work-card::before {
//           content: "";

//           position: absolute;

//           width: 220px;
//           height: 220px;

//           right: -100px;
//           top: -100px;

//           border-radius: 50%;

//           background:
//             #a42cff;

//           filter:
//             blur(80px);

//           opacity: .13;

//           transition:
//             .4s ease;
//         }


//         .work-card:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(177,65,255,.35);

//           box-shadow:
//             0 20px 60px
//             rgba(100,30,255,.15);
//         }


//         .work-card:hover::before {
//           opacity: .28;

//           transform:
//             scale(1.3);
//         }


//         /* CARD TOP */

//         .work-card-top {
//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           margin-bottom: 35px;
//         }


//         .work-icon {
//           width: 65px;
//           height: 65px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           border-radius: 17px;

//           font-size: 30px;

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


//         .work-card:hover
//         .work-icon {
//           transform:
//             rotate(-6deg)
//             scale(1.08);

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.2);
//         }


//         .work-category {
//           padding:
//             7px 12px;

//           border-radius: 50px;

//           color: #b65cff;

//           background:
//             rgba(160,50,255,.08);

//           border:
//             1px solid
//             rgba(160,50,255,.15);

//           font-size: 11px;

//           letter-spacing: .5px;
//         }


//         /* CARD CONTENT */

//         .work-card h3 {
//           margin:
//             0 0 15px;

//           font-size: 25px;
//         }


//         .work-card p {
//           margin:
//             0 0 28px;

//           color: #90909d;

//           font-size: 14px;

//           line-height: 1.8;
//         }


//         /* RESULT */

//         .work-result {
//           position: absolute;

//           left: 35px;
//           right: 35px;
//           bottom: 30px;

//           display: flex;

//           justify-content: space-between;

//           align-items: center;

//           padding-top: 18px;

//           border-top:
//             1px solid
//             rgba(255,255,255,.07);
//         }


//         .work-result span {
//           color: #777784;

//           font-size: 12px;
//         }


//         .work-result strong {
//           color: #bd5cff;

//           font-size: 13px;
//         }


//         /* ======================
//            BOTTOM CTA
//         ====================== */

//         .work-cta {
//           position: relative;

//           margin-top: 90px;

//           padding:
//             65px 30px;

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


//         .work-cta h2 {
//           margin:
//             0 0 15px;

//           font-size:
//             clamp(28px, 4vw, 40px);
//         }


//         .work-cta p {
//           margin:
//             0 0 28px;

//           color: #9999a8;
//         }


//         .work-cta a {
//           display: inline-block;

//           padding:
//             14px 27px;

//           color: white;

//           text-decoration: none;

//           border-radius: 10px;

//           background:
//             linear-gradient(
//               100deg,
//               #a82cff,
//               #326cff
//             );

//           box-shadow:
//             0 0 25px
//             rgba(130,45,255,.3);

//           transition:
//             .3s ease;
//         }


//         .work-cta a:hover {
//           transform:
//             translateY(-4px);

//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.5);
//         }


//         /* ======================
//            MOBILE
//         ====================== */

//         @media (max-width: 800px) {

//           .work-hero {
//             min-height: 400px;

//             padding:
//               70px 18px 40px;
//           }


//           .work-container {
//   width: 100%;
//   max-width: 100%;
//   padding: 15px 16px;
//   box-sizing: border-box;
// }

//           .work-grid {
//             grid-template-columns:
//               1fr;

//             gap: 18px;
//           }


//           .work-card {
//             min-height: 350px;

//             padding: 27px;
//           }


//           .work-result {
//             left: 27px;
//             right: 27px;
//           }

//         }


//         @media (max-width: 500px) {

//           .work-hero h1 {
//             font-size: 48px;
//           }


//           .work-hero h2 {
//             font-size: 22px;
//           }


//           .work-hero p {
//             font-size: 14px;
//           }


//           .work-filters {
//             justify-content: flex-start;

//             overflow-x: auto;

//             flex-wrap: nowrap;

//             padding-bottom: 8px;

//             scrollbar-width: none;
//           }


//           .work-filters::-webkit-scrollbar {
//             display: none;
//           }


//           .work-filter {
//             flex-shrink: 0;
//           }


//           .work-card h3 {
//             font-size: 22px;
//           }


//           .work-card p {
//             font-size: 13px;
//           }


//           .work-cta {
//             margin-top: 65px;

//             padding:
//               45px 20px;
//           }

//         }

//       `}</style>


//       <section className="work-page">

//         <div className="work-glow work-glow-one"></div>

//         <div className="work-glow work-glow-two"></div>


//         {/* HERO */}

//         <div className="work-hero">

//           <div className="work-hero-content">

//             <div className="work-badge">
//               ✦ OUR WORK
//             </div>

//             <h1>
//               Ideas Into
//               <br />
//               Impact
//             </h1>

//             <h2>
//               We Create. We Grow. We Deliver.
//             </h2>

//             <p>
//               Explore some of the digital
//               experiences, campaigns and
//               strategies we create to help
//               businesses grow online.
//             </p>

//           </div>

//         </div>


//         <div className="work-container">


//           {/* FILTER */}

//           <div className="work-filters">

//             {filters.map((filter) => (

//               <button
//                 key={filter}
//                 className={
//                   `work-filter ${
//                     activeFilter === filter
//                       ? "active"
//                       : ""
//                   }`
//                 }
//                 onClick={() =>
//                   setActiveFilter(filter)
//                 }
//               >
//                 {filter}
//               </button>

//             ))}

//           </div>


//           {/* PROJECTS */}

//           <div className="work-grid">

//             {filteredProjects.map(
//               (project, index) => (

//                 <div
//                   className="work-card"
//                   key={index}
//                 >

//                   <div className="work-card-top">

//                     <div className="work-icon">
//                       {project.icon}
//                     </div>

//                     <div className="work-category">
//                       {project.category}
//                     </div>

//                   </div>


//                   <h3>
//                     {project.title}
//                   </h3>


//                   <p>
//                     {project.description}
//                   </p>


//                   <div className="work-result">

//                     <span>
//                       Key Result
//                     </span>

//                     <strong>
//                       {project.result}
//                     </strong>

//                   </div>

//                 </div>

//               )
//             )}

//           </div>


//           {/* CTA */}

//           <div className="work-cta">

//             <h2>
//               Have A Project In Mind?
//             </h2>

//             <p>
//               Let's turn your idea into
//               something remarkable.
//             </p>

           
// <Link
//   to="/contact"

// >
//   Start Your Project →
// </Link>
//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default OurWork;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AutoAwesome,
  Language,
  RocketLaunch,
  AdsClick,
  Campaign,
  PhoneAndroid,
  Palette,
  ArrowForward,
  TrendingUp,

} from "@mui/icons-material";

function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Business Website",
      category: "Web Design",
      icon: <Language />,
      description:
        "Modern responsive website designed to create a strong digital presence and improve customer engagement.",
      result: "40% More Engagement",
    },
    {
      title: "SEO Growth Campaign",
      category: "SEO",
      icon: <RocketLaunch />,
      description:
        "Search engine optimization strategy focused on improving organic visibility, rankings and website traffic.",
      result: "3X Organic Traffic",
    },
    {
      title: "Google Ads Campaign",
      category: "Google Ads",
      icon: <AdsClick />,
      description:
        "Performance-focused Google Ads campaign designed to generate qualified leads and maximize conversions.",
      result: "2.8X ROAS",
    },
    {
      title: "Meta Ads Campaign",
      category: "Meta Ads",
      icon: <Campaign />,
      description:
        "Creative Facebook and Instagram advertising campaign built to increase reach, leads and conversions.",
      result: "65% Lower CPL",
    },
    {
      title: "Social Media Growth",
      category: "Social Media",
      icon: <PhoneAndroid />,
      description:
        "Content strategy and social media management designed to build an active and engaging online community.",
      result: "120K+ Reach",
    },
    {
      title: "Brand Identity",
      category: "Branding",
      icon: <Palette />,
      description:
        "Complete visual branding solution including brand identity, creative direction and digital assets.",
      result: "Strong Brand Presence",
    },
  ];

  const filters = [
    "All",
    "Web Design",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Social Media",
    "Branding",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================
           MAIN PAGE
        ========================= */

        .work-page {
          --work-bg: #030308;
          --work-text: #ffffff;
          --work-muted: #9999a8;
          --work-card: rgba(255,255,255,.045);
          --work-border: rgba(255,255,255,.09);
          --work-card-text: #ffffff;
          --work-result: #bd5cff;

          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-bottom: 100px;

          color: var(--work-text);

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(145,45,255,.15),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(40,100,255,.12),
              transparent 30%
            ),
            var(--work-bg);

          overflow: hidden;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          transition:
            background .3s ease,
            color .3s ease;
        }


        /* =========================
           LIGHT MODE
        ========================= */

        body.light-theme .work-page {
          --work-bg: #f6f8fc;
          --work-text: #111827;
          --work-muted: #64748b;
          --work-card: rgba(255,255,255,.92);
          --work-border: rgba(15,23,42,.10);
          --work-card-text: #111827;
          --work-result: #7c3aed;

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(124,58,237,.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(37,99,235,.08),
              transparent 30%
            ),
            var(--work-bg);
        }


        /* =========================
           HERO
        ========================= */

      .work-hero {
  position: relative;
  min-height: 520px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  padding: 100px 20px 70px;

  overflow: hidden;

  background-image:
    linear-gradient(
      rgba(3, 3, 8, 0.48),
      rgba(3, 3, 8, 0.68)
    ),
    url("/images/our-work-hero.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


      body.light-theme .work-hero {
  background-image:
   
    url("/images/our-work-hero.jpg");

  background-size: cover;
  background-position: center;
}


        .work-hero-content {
          position: relative;

          z-index: 2;

          max-width: 850px;

          animation:
            workHero 1s ease forwards;
        }


        @keyframes workHero {

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


        /* =========================
           BADGE
        ========================= */

        .work-badge {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            10px 18px;

          margin-bottom: 22px;

          border-radius: 50px;

          color: #c35cff;

          background:
            rgba(170,50,255,.10);

          border:
            1px solid
            rgba(170,50,255,.25);

          font-size: 12px;

          letter-spacing: 3px;

          text-transform: uppercase;

          box-shadow:
            0 0 25px
            rgba(160,50,255,.12);
        }


        .work-badge svg {
          font-size: 17px;
        }


        /* =========================
           HERO TITLE
        ========================= */

        .work-hero h1 {
          margin: 0;

          font-size:
            clamp(48px, 7vw, 85px);

          line-height: 1.05;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #c42cff,
              #6f8cff,
              #42c8ff,
              #c42cff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          animation:
            workGradient 5s linear infinite;
        }


        @keyframes workGradient {

          to {
            background-position:
              300% center;
          }

        }


        .work-hero h2 {
          margin:
            20px 0;

          font-size:
            clamp(23px, 3vw, 36px);

          color: var(--work-text);
        }


        .work-hero p {
          max-width: 700px;

          margin: auto;

          color: var(--work-muted);

          font-size: 16px;

          line-height: 1.8;
        }


        /* =========================
           GLOW
        ========================= */

        .work-glow {
          position: absolute;

          width: 350px;
          height: 350px;

          border-radius: 50%;

          filter: blur(100px);

          opacity: .2;

          pointer-events: none;
        }


        .work-glow-one {
          top: 0;
          left: -150px;

          background: #a42cff;

          animation:
            workGlowOne 8s infinite alternate;
        }


        .work-glow-two {
          right: -150px;
          bottom: -100px;

          background: #246cff;

          animation:
            workGlowTwo 10s infinite alternate;
        }


        @keyframes workGlowOne {

          to {
            transform:
              translate(
                180px,
                150px
              );
          }

        }


        @keyframes workGlowTwo {

          to {
            transform:
              translate(
                -180px,
                -120px
              );
          }

        }


        /* =========================
           CONTAINER
        ========================= */

        .work-container {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1200px;

          margin: auto;

          padding:
            30px 25px;
        }


        /* =========================
           FILTER
        ========================= */

        .work-filters {
          display: flex;

          justify-content: center;

          align-items: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-bottom: 55px;
        }


        .work-filter {
          padding:
            11px 17px;

          border-radius: 50px;

          border:
            1px solid
            var(--work-border);

          background:
            var(--work-card);

          color: var(--work-muted);

          cursor: pointer;

          font-size: 13px;

          transition:
            .3s ease;
        }


        .work-filter:hover {
          color: var(--work-text);

          border-color:
            rgba(170,60,255,.4);

          transform:
            translateY(-2px);
        }


        .work-filter.active {
          color: white;

          border-color:
            transparent;

          background:
            linear-gradient(
              100deg,
              #a72cff,
              #5964ff
            );

          box-shadow:
            0 0 22px
            rgba(140,50,255,.25);
        }


        /* =========================
           PROJECT GRID
        ========================= */

        .work-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 25px;
        }


        /* =========================
           CARD
        ========================= */

        .work-card {
          position: relative;

          min-height: 380px;

          padding: 35px;

          border-radius: 22px;

          overflow: hidden;

          background:
            var(--work-card);

          border:
            1px solid
            var(--work-border);

          backdrop-filter:
            blur(15px);

          transition:
            transform .4s ease,
            border .4s ease,
            box-shadow .4s ease;

          animation:
            workCard .5s ease;
        }


        @keyframes workCard {

          from {
            opacity: 0;

            transform:
              translateY(25px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .work-card::before {
          content: "";

          position: absolute;

          width: 220px;
          height: 220px;

          right: -100px;
          top: -100px;

          border-radius: 50%;

          background:
            #a42cff;

          filter:
            blur(80px);

          opacity: .13;

          transition:
            .4s ease;
        }


        .work-card:hover {
          transform:
            translateY(-10px);

          border-color:
            rgba(177,65,255,.35);

          box-shadow:
            0 20px 60px
            rgba(100,30,255,.15);
        }


        .work-card:hover::before {
          opacity: .28;

          transform:
            scale(1.3);
        }


        /* =========================
           CARD TOP
        ========================= */

        .work-card-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 35px;
        }


        .work-icon {
          width: 65px;
          height: 65px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 17px;

          color: #b65cff;

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


        .work-icon svg {
          font-size: 31px;
        }


        .work-card:hover
        .work-icon {
          transform:
            rotate(-6deg)
            scale(1.08);

          box-shadow:
            0 0 25px
            rgba(160,50,255,.2);
        }


        .work-category {
          padding:
            7px 12px;

          border-radius: 50px;

          color: #b65cff;

          background:
            rgba(160,50,255,.08);

          border:
            1px solid
            rgba(160,50,255,.15);

          font-size: 11px;

          letter-spacing: .5px;
        }


        /* =========================
           CARD CONTENT
        ========================= */

        .work-card h3 {
          margin:
            0 0 15px;

          color:
            var(--work-card-text);

          font-size: 25px;
        }


        .work-card p {
          margin:
            0 0 28px;

          color:
            var(--work-muted);

          font-size: 14px;

          line-height: 1.8;
        }


        /* =========================
           RESULT
        ========================= */

        .work-result {
          position: absolute;

          left: 35px;
          right: 35px;
          bottom: 30px;

          display: flex;

          justify-content: space-between;

          align-items: center;

          padding-top: 18px;

          border-top:
            1px solid
            var(--work-border);
        }


        .work-result span {
          color:
            var(--work-muted);

          font-size: 12px;
        }


        .work-result strong {
          color:
            var(--work-result);

          font-size: 13px;
        }


        /* =========================
           CTA
        ========================= */

        .work-cta {
          position: relative;

          margin-top: 90px;

          padding:
            65px 30px;

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


        .work-cta h2 {
          margin:
            0 0 15px;

          color:
            var(--work-text);

          font-size:
            clamp(28px, 4vw, 40px);
        }


        .work-cta p {
          margin:
            0 0 28px;

          color:
            var(--work-muted);
        }


        .work-cta a {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            14px 27px;

          color: white;

          text-decoration: none;

          border-radius: 10px;

          background:
            linear-gradient(
              100deg,
              #a82cff,
              #326cff
            );

          box-shadow:
            0 0 25px
            rgba(130,45,255,.3);

          transition:
            .3s ease;
        }


        .work-cta a:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.5);
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {

          .work-hero {
            min-height: 450px;

            padding:
              80px 18px 50px;
          }


          .work-container {
            width: 100%;

            max-width: 100%;

            padding:
              20px 16px;
          }


          .work-grid {
            grid-template-columns:
              1fr;

            gap: 18px;
          }


          .work-card {
            min-height: 350px;

            padding: 27px;
          }


          .work-result {
            left: 27px;
            right: 27px;
          }

        }


        @media (max-width: 500px) {

          .work-hero h1 {
            font-size: 48px;
          }


          .work-hero h2 {
            font-size: 22px;
          }


          .work-hero p {
            font-size: 14px;
          }


          .work-filters {
            justify-content: flex-start;

            overflow-x: auto;

            flex-wrap: nowrap;

            padding-bottom: 8px;

            scrollbar-width: none;
          }


          .work-filters::-webkit-scrollbar {
            display: none;
          }


          .work-filter {
            flex-shrink: 0;
          }


          .work-card h3 {
            font-size: 22px;
          }


          .work-card p {
            font-size: 13px;
          }


          .work-cta {
            margin-top: 65px;

            padding:
              45px 20px;
          }

        }

      `}</style>


      <section className="work-page">

        <div className="work-glow work-glow-one"></div>

        <div className="work-glow work-glow-two"></div>


        {/* HERO */}

        <div className="work-hero">

          <div className="work-hero-content">

            <div className="work-badge">
              <AutoAwesome />
              OUR WORK
            </div>

            <h1>
              Ideas Into
              <br />
              Impact
            </h1>

            <h2>
              We Create. We Grow. We Deliver.
            </h2>

            <p>
              Explore some of the digital
              experiences, campaigns and
              strategies we create to help
              businesses grow online.
            </p>

          </div>

        </div>


        <div className="work-container">


          {/* FILTER */}

          <div className="work-filters">

            {filters.map((filter) => (

              <button
                key={filter}
                className={
                  `work-filter ${
                    activeFilter === filter
                      ? "active"
                      : ""
                  }`
                }
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>

            ))}

          </div>


          {/* PROJECTS */}

          <div className="work-grid">

            {filteredProjects.map(
              (project, index) => (

                <div
                  className="work-card"
                  key={index}
                >

                  <div className="work-card-top">

                    <div className="work-icon">
                      {project.icon}
                    </div>

                    <div className="work-category">
                      {project.category}
                    </div>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <p>
                    {project.description}
                  </p>


                  <div className="work-result">

                    <span>
                      Key Result
                    </span>

                    <strong>
                      <TrendingUp
                        style={{
                          fontSize: "15px",
                          verticalAlign: "middle",
                          marginRight: "4px",
                        }}
                      />

                      {project.result}
                    </strong>

                  </div>

                </div>

              )
            )}

          </div>


          {/* CTA */}

          <div className="work-cta">

            <h2>
              Have A Project In Mind?
            </h2>

            <p>
              Let's turn your idea into
              something remarkable.
            </p>

            <Link to="/contact">

              Start Your Project

              <ArrowForward
                style={{
                  fontSize: "18px",
                }}
              />

            </Link>

          </div>

        </div>

      </section>
    </>
  );
}

export default OurWork;