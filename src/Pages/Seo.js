// import React from "react";
// import { Link } from "react-router-dom";

// function Seo() {
//   const seoServices = [
//     {
//       icon: "🔎",
//       title: "Keyword Research",
//       text: "Discover high-value keywords that your target customers are actually searching for."
//     },
//     {
//       icon: "⚙️",
//       title: "Technical SEO",
//       text: "Improve website structure, crawlability, speed and technical performance."
//     },
//     {
//       icon: "📄",
//       title: "On-Page SEO",
//       text: "Optimize titles, content, headings, URLs and internal links for better rankings."
//     },
//     {
//       icon: "📍",
//       title: "Local SEO",
//       text: "Help your business become more visible to customers searching in your location."
//     },
//     {
//       icon: "🔗",
//       title: "Link Building",
//       text: "Build a stronger website authority through quality and relevant backlinks."
//     },
//     {
//       icon: "📊",
//       title: "SEO Analytics",
//       text: "Track rankings, traffic and conversions with clear performance reporting."
//     }
//   ];

//   const process = [
//     {
//       number: "01",
//       title: "Discover",
//       text: "We understand your business, audience, competitors and growth goals."
//     },
//     {
//       number: "02",
//       title: "Audit",
//       text: "We analyze your website and identify technical and content opportunities."
//     },
//     {
//       number: "03",
//       title: "Optimize",
//       text: "We implement targeted SEO improvements across your website."
//     },
//     {
//       number: "04",
//       title: "Grow",
//       text: "We monitor results and continuously improve your organic performance."
//     }
//   ];

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .seo-page {
//           min-height: 100vh;
//           color: white;
//           background:
//             radial-gradient(
//               circle at 10% 10%,
//               rgba(160, 45, 255, .16),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 90% 30%,
//               rgba(45, 100, 255, .14),
//               transparent 30%
//             ),
//             #030308;
//           font-family: Arial, Helvetica, sans-serif;
//           overflow: hidden;
//         }

//         /* HERO */

//         .seo-hero {
//           position: relative;
//           min-height: 620px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 90px 20px 80px;
//         }

//         .seo-glow {
//           position: absolute;
//           width: 420px;
//           height: 420px;
//           border-radius: 50%;
//           background: #a52cff;
//           filter: blur(130px);
//           opacity: .12;
//           animation: seoGlow 6s ease-in-out infinite alternate;
//         }

//         @keyframes seoGlow {
//           from {
//             transform: scale(.8) translate(-100px, 0);
//           }

//           to {
//             transform: scale(1.2) translate(100px, 40px);
//           }
//         }

//         .seo-hero-content {
//           position: relative;
//           z-index: 2;
//           max-width: 900px;
//           animation: seoHeroIn 1s ease;
//         }

//         @keyframes seoHeroIn {
//           from {
//             opacity: 0;
//             transform: translateY(45px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .seo-badge {
//           display: inline-block;
//           padding: 9px 18px;
//           margin-bottom: 22px;
//           border-radius: 50px;
//           color: #c45cff;
//           background: rgba(170, 50, 255, .08);
//           border: 1px solid rgba(170, 50, 255, .25);
//           font-size: 11px;
//           letter-spacing: 3px;
//           animation: seoPulse 3s ease-in-out infinite;
//         }

//         @keyframes seoPulse {
//           0%, 100% {
//             box-shadow: 0 0 10px rgba(170, 50, 255, .05);
//           }

//           50% {
//             box-shadow: 0 0 30px rgba(170, 50, 255, .3);
//           }
//         }

//         .seo-hero h1 {
//           margin: 0;
//           font-size: clamp(55px, 8vw, 105px);
//           line-height: 1;
//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #c52cff,
//               #708cff,
//               #42caff,
//               #c52cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;

//           animation: seoGradient 5s linear infinite;
//         }

//         @keyframes seoGradient {
//           to {
//             background-position: 300% center;
//           }
//         }

//         .seo-hero h2 {
//           margin: 25px 0 15px;
//           font-size: clamp(25px, 4vw, 40px);
//         }

//         .seo-hero p {
//           max-width: 680px;
//           margin: auto;
//           color: #92929f;
//           font-size: 15px;
//           line-height: 1.9;
//         }

//         .seo-hero-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 12px;
//           margin-top: 30px;
//         }

//         .seo-btn {
//           padding: 14px 25px;
//           border-radius: 10px;
//           text-decoration: none;
//           color: white;
//           font-size: 13px;
//           transition: .3s ease;
//         }

//         .seo-btn-primary {
//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );
//         }

//         .seo-btn-secondary {
//           border: 1px solid rgba(255,255,255,.12);
//           background: rgba(255,255,255,.04);
//         }

//         .seo-btn:hover {
//           transform: translateY(-4px);
//           box-shadow:
//             0 0 30px
//             rgba(130, 45, 255, .3);
//         }

//         /* CONTAINER */

//         .seo-container {
//           max-width: 1200px;
//           margin: auto;
//           padding: 20px 25px;
//         }

//         .seo-section-title {
//           text-align: center;
//           margin-bottom: 45px;
//         }

//         .seo-label {
//           color: #bd4cff;
//           font-size: 11px;
//           letter-spacing: 3px;
//           margin-bottom: 12px;
//         }

//         .seo-section-title h2 {
//           margin: 0 0 12px;
//           font-size: clamp(32px, 5vw, 48px);
//         }

//         .seo-section-title h2 span {
//           background:
//             linear-gradient(
//               90deg,
//               #c22cff,
//               #529cff
//             );
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .seo-section-title p {
//           color: #858592;
//           font-size: 14px;
//         }

//         /* SERVICES */

//         .seo-services-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//           margin-bottom: 120px;
//         }

//         .seo-service-card {
//           position: relative;
//           min-height: 270px;
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
//             1px solid rgba(255,255,255,.08);

//           transition: .4s ease;

//           animation:
//             seoCardIn .7s ease both;
//         }

//         .seo-service-card:nth-child(2) {
//           animation-delay: .1s;
//         }

//         .seo-service-card:nth-child(3) {
//           animation-delay: .2s;
//         }

//         .seo-service-card:nth-child(4) {
//           animation-delay: .3s;
//         }

//         .seo-service-card:nth-child(5) {
//           animation-delay: .4s;
//         }

//         .seo-service-card:nth-child(6) {
//           animation-delay: .5s;
//         }

//         @keyframes seoCardIn {
//           from {
//             opacity: 0;
//             transform: translateY(35px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .seo-service-card:hover {
//           transform: translateY(-9px);
//           border-color: rgba(175,65,255,.4);
//           box-shadow:
//             0 25px 55px
//             rgba(100,30,255,.14);
//         }

//         .seo-service-icon {
//           width: 55px;
//           height: 55px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;
//           font-size: 25px;

//           background:
//             rgba(160,50,255,.1);

//           border:
//             1px solid
//             rgba(170,60,255,.18);

//           margin-bottom: 22px;

//           transition: .4s ease;
//         }

//         .seo-service-card:hover .seo-service-icon {
//           transform:
//             rotate(-7deg)
//             scale(1.1);

//           box-shadow:
//             0 0 25px
//             rgba(160,50,255,.2);
//         }

//         .seo-service-card h3 {
//           margin: 0 0 12px;
//           font-size: 20px;
//         }

//         .seo-service-card p {
//           margin: 0;
//           color: #858592;
//           font-size: 13px;
//           line-height: 1.8;
//         }

//         /* PROCESS */

//         .seo-process {
//           margin-bottom: 120px;
//         }

//         .seo-process-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 18px;
//         }

//         .seo-process-card {
//           padding: 28px 22px;
//           border-radius: 18px;

//           background:
//             rgba(255,255,255,.035);

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .4s ease;
//         }

//         .seo-process-card:hover {
//           transform: translateY(-7px);
//           border-color:
//             rgba(170,60,255,.3);
//         }

//         .seo-process-number {
//           display: inline-flex;

//           width: 42px;
//           height: 42px;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background:
//             linear-gradient(
//               135deg,
//               #a52cff,
//               #326cff
//             );

//           font-size: 11px;
//           font-weight: bold;

//           margin-bottom: 20px;
//         }

//         .seo-process-card h3 {
//           margin: 0 0 10px;
//           font-size: 18px;
//         }

//         .seo-process-card p {
//           margin: 0;
//           color: #858592;
//           font-size: 12px;
//           line-height: 1.8;
//         }

//         /* STATS */

//         .seo-stats {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 15px;
//           margin-bottom: 110px;
//         }

//         .seo-stat {
//           text-align: center;
//           padding: 28px 15px;
//           border-radius: 16px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(150,45,255,.08),
//               rgba(40,100,255,.04)
//             );

//           border:
//             1px solid
//             rgba(170,70,255,.12);
//         }

//         .seo-stat strong {
//           display: block;
//           font-size: 30px;

//           background:
//             linear-gradient(
//               90deg,
//               #c22cff,
//               #5d9dff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .seo-stat span {
//           display: block;
//           margin-top: 7px;
//           color: #858592;
//           font-size: 11px;
//         }

//         /* CTA */

//         .seo-cta {
//           position: relative;
//           text-align: center;
//           padding: 70px 25px;
//           margin-bottom: 70px;

//           overflow: hidden;
//           border-radius: 25px;

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

//         .seo-cta h2 {
//           position: relative;
//           margin: 0 0 15px;
//           font-size: clamp(30px, 4vw, 45px);
//         }

//         .seo-cta p {
//           position: relative;
//           max-width: 650px;
//           margin: 0 auto 28px;
//           color: #92929f;
//           font-size: 14px;
//           line-height: 1.8;
//         }

//         .seo-cta a {
//           position: relative;
//           display: inline-block;

//           padding: 14px 28px;

//           color: white;
//           text-decoration: none;

//           border-radius: 10px;

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );

//           font-size: 13px;
//           font-weight: 600;

//           transition: .3s ease;
//         }

//         .seo-cta a:hover {
//           transform: translateY(-4px);
//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.4);
//         }

//         /* TABLET */

//         @media (max-width: 950px) {

//           .seo-services-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .seo-process-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .seo-stats {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         /* MOBILE */

//         @media (max-width: 600px) {

//           .seo-hero {
//             min-height: 570px;
//             padding: 70px 18px 60px;
//           }

//           .seo-hero h1 {
//             font-size: 58px;
//           }

//           .seo-hero h2 {
//             font-size: 23px;
//           }

//           .seo-hero p {
//             font-size: 14px;
//           }

//           .seo-hero-buttons {
//             flex-direction: column;
//             max-width: 260px;
//             margin: 28px auto 0;
//           }

//           .seo-container {
//             padding:
//               15px 16px;
//           }

//           .seo-services-grid {
//             grid-template-columns: 1fr;
//             gap: 15px;
//             margin-bottom: 80px;
//           }

//           .seo-service-card {
//             min-height: 240px;
//             padding: 25px;
//           }

//           .seo-process-grid {
//             grid-template-columns: 1fr;
//           }

//           .seo-stats {
//             grid-template-columns: repeat(2, 1fr);
//           }

//           .seo-stat strong {
//             font-size: 25px;
//           }

//           .seo-cta {
//             padding:
//               50px 20px;
//           }
//         }

//       `}</style>

//       <section className="seo-page">

//         {/* HERO */}

//         <div className="seo-hero">

//           <div className="seo-glow"></div>

//           <div className="seo-hero-content">

//             <div className="seo-badge">
//               ✦ SEARCH ENGINE OPTIMIZATION
//             </div>

//             <h1>
//               SEO
//             </h1>

//             <h2>
//               Get Found. Get Clicked.
//               <br />
//               Get Growing.
//             </h2>

//             <p>
//               We help businesses improve their search
//               visibility, attract qualified traffic and
//               turn organic searches into real business
//               opportunities.
//             </p>

//             <div className="seo-hero-buttons">

//               <Link
//                 to="/contact"
//                 className="seo-btn seo-btn-primary"
//               >
//                 Start Your SEO Journey →
//               </Link>

//               <Link
//                 to="/services"
//                 className="seo-btn seo-btn-secondary"
//               >
//                 View All Services
//               </Link>

//             </div>

//           </div>

//         </div>


//         <div className="seo-container">

//           {/* SERVICES */}

//           <div className="seo-section-title">

//             <div className="seo-label">
//               OUR SEO EXPERTISE
//             </div>

//             <h2>
//               SEO That Drives
//               <span> Real Growth</span>
//             </h2>

//             <p>
//               A complete SEO strategy designed around
//               your business goals.
//             </p>

//           </div>


//           <div className="seo-services-grid">

//             {seoServices.map((service) => (

//               <div
//                 className="seo-service-card"
//                 key={service.title}
//               >

//                 <div className="seo-service-icon">
//                   {service.icon}
//                 </div>

//                 <h3>
//                   {service.title}
//                 </h3>

//                 <p>
//                   {service.text}
//                 </p>

//               </div>

//             ))}

//           </div>


//           {/* PROCESS */}

//           <div className="seo-process">

//             <div className="seo-section-title">

//               <div className="seo-label">
//                 OUR PROCESS
//               </div>

//               <h2>
//                 How We Make Your
//                 <span> Website Grow</span>
//               </h2>

//             </div>


//             <div className="seo-process-grid">

//               {process.map((item) => (

//                 <div
//                   className="seo-process-card"
//                   key={item.number}
//                 >

//                   <div className="seo-process-number">
//                     {item.number}
//                   </div>

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <p>
//                     {item.text}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>


//           {/* STATS */}

//           <div className="seo-stats">

//             <div className="seo-stat">
//               <strong>
//                 360°
//               </strong>

//               <span>
//                 SEO Strategy
//               </span>
//             </div>

//             <div className="seo-stat">
//               <strong>
//                 100%
//               </strong>

//               <span>
//                 Data Driven
//               </span>
//             </div>

//             <div className="seo-stat">
//               <strong>
//                 24/7
//               </strong>

//               <span>
//                 Performance Tracking
//               </span>
//             </div>

//             <div className="seo-stat">
//               <strong>
//                 ROI
//               </strong>

//               <span>
//                 Focused Approach
//               </span>
//             </div>

//           </div>


//           {/* CTA */}

//           <div className="seo-cta">

//             <h2>
//               Ready To Rank Higher?
//             </h2>

//             <p>
//               Let's build an SEO strategy that brings
//               more visibility, traffic and opportunities
//               to your business.
//             </p>

//             <Link to="/contact">
//               Talk To Our SEO Team →
//             </Link>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Seo;
// import React from "react";
// import { Link } from "react-router-dom";
// function SEO() {
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .seo-page {
//           min-height: 100vh;
//           overflow: hidden;
//           background: #030308;
//           color: white;
//           font-family: Arial, sans-serif;
//         }


//         /* =====================================================
//            HERO
//         ===================================================== */

//         .seo-hero {
//           min-height: 90vh;
//           position: relative;

//           display: flex;
//           align-items: center;

//           padding: 120px 7% 80px;

//           overflow: hidden;
//         }


//         /* MOVING BACKGROUND */

//         .seo-hero::before {
//           content: "";

//           position: absolute;

//           width: 500px;
//           height: 500px;

//           top: -180px;
//           left: -120px;

//           border-radius: 50%;

//           background: #722cff;

//           filter: blur(150px);

//           opacity: .16;

//           animation: seoGlow 7s ease-in-out infinite alternate;
//         }


//         .seo-hero::after {
//           content: "";

//           position: absolute;

//           width: 450px;
//           height: 450px;

//           right: -150px;
//           bottom: -180px;

//           border-radius: 50%;

//           background: #176df5;

//           filter: blur(150px);

//           opacity: .13;

//           animation: seoGlow2 8s ease-in-out infinite alternate;
//         }


//         @keyframes seoGlow {

//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(150px, 80px);
//           }

//         }


//         @keyframes seoGlow2 {

//           from {
//             transform: translate(0, 0);
//           }

//           to {
//             transform: translate(-120px, -70px);
//           }

//         }


//         .seo-hero-content {
//           position: relative;

//           z-index: 5;

//           width: 55%;

//           animation: seoContentIn 1s ease;
//         }


//         @keyframes seoContentIn {

//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }

//         }


//         .seo-label {
//           display: inline-block;

//           padding: 8px 15px;

//           border-radius: 30px;

//           border: 1px solid
//             rgba(170,80,255,.35);

//           background:
//             rgba(130,50,255,.08);

//           color: #b66cff;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 22px;
//         }


//         .seo-title {
//           margin: 0;

//           font-size:
//             clamp(45px, 6vw, 78px);

//           line-height: 1.02;
//         }


//         .seo-title span {
//           background:
//             linear-gradient(
//               90deg,
//               #a52df4,
//               #614cff,
//               #176df5,
//               #ff4fc3
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           animation:
//             seoGradient 5s linear infinite;
//         }


//         @keyframes seoGradient {

//           to {
//             background-position: 300% center;
//           }

//         }


//         .seo-description {
//           max-width: 620px;

//           margin-top: 25px;

//           color: #92929f;

//           font-size: 15px;

//           line-height: 1.9;
//         }


//         .seo-button {
//           display: inline-flex;

//           margin-top: 30px;

//           padding: 15px 25px;

//           border-radius: 12px;

//           color: white;

//           text-decoration: none;

//           font-size: 13px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a52df4,
//               #614cff,
//               #176df5
//             );

//           box-shadow:
//             0 0 30px
//             rgba(110,60,255,.3);

//           transition: .3s;
//         }


//         .seo-button:hover {
//           transform:
//             translateY(-5px)
//             scale(1.03);

//           box-shadow:
//             0 0 45px
//             rgba(110,60,255,.6);
//         }


//         /* =====================================================
//            ANIMATED SEO VISUAL
//         ===================================================== */

//         .seo-visual {
//           position: absolute;

//           right: 7%;

//           width: 40%;
//           height: 430px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           z-index: 4;
//         }


//         .seo-orbit {
//           position: absolute;

//           width: 330px;
//           height: 330px;

//           border:
//             1px solid
//             rgba(150,80,255,.25);

//           border-radius: 50%;

//           animation:
//             seoRotate 12s linear infinite;
//         }


//         .seo-orbit::before {
//           content: "";

//           position: absolute;

//           width: 12px;
//           height: 12px;

//           top: 20px;
//           left: 50%;

//           border-radius: 50%;

//           background: #b35cff;

//           box-shadow:
//             0 0 20px #b35cff;
//         }


//         .seo-orbit.two {
//           width: 230px;
//           height: 230px;

//           animation:
//             seoRotateReverse 9s linear infinite;
//         }


//         .seo-orbit.two::before {
//           background: #4285ff;

//           box-shadow:
//             0 0 20px #4285ff;

//           top: auto;
//           bottom: 10px;
//         }


//         @keyframes seoRotate {

//           to {
//             transform: rotate(360deg);
//           }

//         }


//         @keyframes seoRotateReverse {

//           to {
//             transform: rotate(-360deg);
//           }

//         }


//         .seo-search-box {
//           position: relative;

//           width: 250px;

//           padding: 18px 22px;

//           border-radius: 16px;

//           background:
//             rgba(15,12,25,.9);

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           box-shadow:
//             0 20px 60px
//             rgba(0,0,0,.5);

//           backdrop-filter:
//             blur(15px);

//           animation:
//             searchFloat 3s ease-in-out infinite;
//         }


//         @keyframes searchFloat {

//           0%, 100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-15px);
//           }

//         }


//         .search-top {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           margin-bottom: 15px;
//         }


//         .search-circle {
//           width: 25px;
//           height: 25px;

//           border-radius: 50%;

//           border: 3px solid #6d55ff;

//           position: relative;
//         }


//         .search-circle::after {
//           content: "";

//           position: absolute;

//           width: 9px;
//           height: 3px;

//           background: #6d55ff;

//           right: -7px;
//           bottom: -3px;

//           transform: rotate(45deg);
//         }


//         .search-line {
//           height: 9px;

//           border-radius: 10px;

//           background:
//             #262237;

//           flex: 1;
//         }


//         .rank-item {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           margin-top: 13px;
//         }


//         .rank-number {
//           width: 24px;

//           color: #b66cff;

//           font-size: 11px;

//           font-weight: bold;
//         }


//         .rank-bar {
//           height: 7px;

//           border-radius: 10px;

//           background:
//             linear-gradient(
//               90deg,
//               #9d43ff,
//               #416cff
//             );

//           animation:
//             rankMove 2.5s ease-in-out infinite alternate;
//         }


//         .rank-item:nth-child(2)
//         .rank-bar {
//           width: 85%;
//         }


//         .rank-item:nth-child(3)
//         .rank-bar {
//           width: 65%;
//         }


//         .rank-item:nth-child(4)
//         .rank-bar {
//           width: 48%;
//         }


//         @keyframes rankMove {

//           from {
//             transform: scaleX(.75);
//             transform-origin: left;
//           }

//           to {
//             transform: scaleX(1);
//             transform-origin: left;
//           }

//         }


//         /* =====================================================
//            FLOATING WORDS
//         ===================================================== */

//         .seo-word {
//           position: absolute;

//           padding: 9px 14px;

//           border-radius: 30px;

//           background:
//             rgba(255,255,255,.04);

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           color: #898995;

//           font-size: 10px;

//           backdrop-filter: blur(10px);

//           animation:
//             wordFloat 4s ease-in-out infinite;
//         }


//         .word-one {
//           top: 20px;
//           right: 20px;
//         }


//         .word-two {
//           bottom: 50px;
//           left: 10px;

//           animation-delay: 1s;
//         }


//         .word-three {
//           top: 100px;
//           left: 30px;

//           animation-delay: 2s;
//         }


//         @keyframes wordFloat {

//           0%, 100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-12px);
//           }

//         }


//         /* =====================================================
//            FEATURES
//         ===================================================== */

//         .seo-features {
//           padding: 90px 7%;

//           background: #05050b;
//         }


//         .seo-section-title {
//           text-align: center;

//           max-width: 650px;

//           margin: auto auto 55px;
//         }


//         .seo-section-title span {
//           color: #a85cff;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }


//         .seo-section-title h2 {
//           margin: 15px 0;

//           font-size:
//             clamp(32px, 5vw, 52px);
//         }


//         .seo-section-title p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.8;
//         }


//         .seo-cards {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3, 1fr);

//           gap: 22px;
//         }


//         .seo-card {
//           padding: 30px;

//           min-height: 210px;

//           border-radius: 20px;

//           background:
//             linear-gradient(
//               145deg,
//               #12101b,
//               #090b14
//             );

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .4s;

//           animation:
//             cardFloat 5s ease-in-out infinite;
//         }


//         .seo-card:nth-child(2) {
//           animation-delay: 1s;
//         }


//         .seo-card:nth-child(3) {
//           animation-delay: 2s;
//         }


//         @keyframes cardFloat {

//           0%, 100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }

//         }


//         .seo-card:hover {
//           transform:
//             translateY(-12px)
//             scale(1.02);

//           border-color:
//             rgba(150,80,255,.35);

//           box-shadow:
//             0 20px 50px
//             rgba(80,40,180,.15);
//         }


//         .seo-card-icon {
//           width: 48px;
//           height: 48px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           background:
//             rgba(130,60,255,.12);

//           font-size: 22px;

//           margin-bottom: 20px;
//         }


//         .seo-card h3 {
//           margin: 0 0 10px;

//           font-size: 18px;
//         }


//         .seo-card p {
//           margin: 0;

//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         /* =====================================================
//            MOBILE
//         ===================================================== */

//         @media (max-width: 900px) {

//           .seo-hero {
//             min-height: auto;

//             padding:
//               110px 6% 70px;

//             display: block;
//           }


//           .seo-hero-content {
//             width: 100%;

//             text-align: center;
//           }


//           .seo-description {
//             margin-left: auto;
//             margin-right: auto;
//           }


//           .seo-visual {
//             position: relative;

//             right: auto;

//             width: 100%;

//             height: 350px;

//             margin-top: 40px;
//           }


//           .seo-cards {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }

//         }


//         @media (max-width: 600px) {

//           .seo-title {
//             font-size: 48px;
//           }


//           .seo-description {
//             font-size: 13px;
//           }


//           .seo-visual {
//             height: 300px;
//           }


//           .seo-orbit {
//             width: 250px;
//             height: 250px;
//           }


//           .seo-orbit.two {
//             width: 175px;
//             height: 175px;
//           }


//           .seo-search-box {
//             width: 210px;
//           }


//           .seo-word {
//             font-size: 8px;

//             padding: 7px 10px;
//           }


//           .seo-cards {
//             grid-template-columns: 1fr;
//           }


//           .seo-card {
//             min-height: auto;
//           }


//           .seo-features {
//             padding:
//               70px 5%;
//           }

//         }
// /* =====================================================
//    SEO INTRO
// ===================================================== */

// .seo-intro {
//   display: grid;

//   grid-template-columns: 1.2fr .8fr;

//   gap: 70px;

//   padding: 100px 7%;

//   background: #05050b;
// }


// .seo-mini-title {
//   color: #a85cff;

//   font-size: 10px;

//   letter-spacing: 3px;
// }


// .seo-intro-content h2 {
//   max-width: 650px;

//   margin: 15px 0 25px;

//   font-size:
//     clamp(35px, 5vw, 58px);

//   line-height: 1.1;
// }


// .seo-intro-content p {
//   max-width: 650px;

//   color: #858592;

//   font-size: 14px;

//   line-height: 1.9;

//   margin-bottom: 15px;
// }


// .seo-intro-points {
//   display: flex;

//   flex-direction: column;

//   justify-content: center;

//   gap: 20px;
// }


// .seo-intro-points div {
//   padding: 25px;

//   display: flex;

//   gap: 20px;

//   align-items: center;

//   border-radius: 15px;

//   background: #0d0b15;

//   border: 1px solid
//     rgba(255,255,255,.07);

//   transition: .3s;
// }


// .seo-intro-points div:hover {
//   transform: translateX(10px);

//   border-color:
//     rgba(160,80,255,.4);
// }


// .seo-intro-points strong {
//   color: #a85cff;

//   font-size: 22px;
// }


// .seo-intro-points span {
//   color: #ddd;

//   font-size: 13px;
// }


// /* =====================================================
//    WHY SEO
// ===================================================== */

// .why-seo {
//   padding: 100px 7%;
// }


// .why-seo-grid {
//   max-width: 1150px;

//   margin: auto;

//   display: grid;

//   grid-template-columns:
//     repeat(4, 1fr);

//   gap: 18px;
// }


// .why-seo-card {
//   padding: 28px;

//   min-height: 230px;

//   border-radius: 18px;

//   background:
//     linear-gradient(
//       145deg,
//       #12101b,
//       #090b14
//     );

//   border: 1px solid
//     rgba(255,255,255,.07);

//   transition: .4s;
// }


// .why-seo-card:hover {
//   transform:
//     translateY(-10px);

//   border-color:
//     rgba(160,80,255,.4);
// }


// .why-seo-card span {
//   color: #a85cff;

//   font-size: 11px;
// }


// .why-seo-card h3 {
//   margin-top: 25px;

//   font-size: 18px;
// }


// .why-seo-card p {
//   color: #858592;

//   font-size: 12px;

//   line-height: 1.8;
// }


// /* =====================================================
//    SERVICES
// ===================================================== */

// .seo-services {
//   padding: 100px 7%;

//   background: #05050b;
// }


// .seo-service-grid {
//   max-width: 1150px;

//   margin: auto;

//   display: grid;

//   grid-template-columns:
//     repeat(3, 1fr);

//   gap: 22px;
// }


// .seo-service-card {
//   padding: 30px;

//   min-height: 240px;

//   border-radius: 20px;

//   background: #0d0b15;

//   border: 1px solid
//     rgba(255,255,255,.07);

//   transition: .4s;
// }


// .seo-service-card:hover {
//   transform:
//     translateY(-10px)
//     scale(1.01);

//   border-color:
//     rgba(160,80,255,.4);

//   box-shadow:
//     0 20px 50px
//     rgba(80,40,180,.15);
// }


// .service-number {
//   color: #a85cff;

//   font-size: 12px;

//   letter-spacing: 2px;
// }


// .seo-service-card h3 {
//   margin: 25px 0 12px;

//   font-size: 19px;
// }


// .seo-service-card p {
//   color: #858592;

//   font-size: 12px;

//   line-height: 1.9;
// }


// /* =====================================================
//    PROCESS
// ===================================================== */

// .seo-process {
//   padding: 100px 7%;
// }


// .process-line {
//   max-width: 1150px;

//   margin: auto;

//   display: grid;

//   grid-template-columns:
//     repeat(4, 1fr);

//   gap: 25px;
// }


// .process-item {
//   text-align: center;

//   position: relative;
// }


// .process-circle {
//   width: 65px;
//   height: 65px;

//   margin: auto;

//   display: flex;

//   align-items: center;
//   justify-content: center;

//   border-radius: 50%;

//   background:
//     linear-gradient(
//       135deg,
//       #9d43ff,
//       #416cff
//     );

//   box-shadow:
//     0 0 30px
//     rgba(130,60,255,.25);

//   font-size: 12px;

//   font-weight: bold;
// }


// .process-item h3 {
//   margin-top: 20px;
// }


// .process-item p {
//   color: #858592;

//   font-size: 12px;

//   line-height: 1.8;
// }


// /* =====================================================
//    BENEFITS
// ===================================================== */

// .seo-benefits {
//   display: grid;

//   grid-template-columns:
//     1fr 1fr;

//   gap: 80px;

//   padding: 100px 10%;

//   background:
//     radial-gradient(
//       circle at 20% 50%,
//       rgba(120,50,255,.12),
//       transparent 35%
//     ),
//     #05050b;
// }


// .seo-benefit-content span {
//   color: #a85cff;

//   font-size: 10px;

//   letter-spacing: 3px;
// }


// .seo-benefit-content h2 {
//   margin: 18px 0;

//   font-size:
//     clamp(35px, 5vw, 58px);
// }


// .seo-benefit-content p {
//   color: #858592;

//   max-width: 550px;

//   font-size: 13px;

//   line-height: 1.9;
// }


// .benefit-list {
//   display: flex;

//   flex-direction: column;

//   justify-content: center;

//   gap: 15px;
// }


// .benefit-list div {
//   padding: 20px;

//   border-radius: 12px;

//   background: #0d0b15;

//   border: 1px solid
//     rgba(255,255,255,.06);

//   color: #ccc;

//   font-size: 13px;

//   transition: .3s;
// }


// .benefit-list div:hover {
//   transform: translateX(8px);

//   border-color:
//     rgba(160,80,255,.4);
// }


// .benefit-list b {
//   color: #a85cff;

//   margin-right: 12px;
// }


// /* =====================================================
//    FAQ
// ===================================================== */

// .seo-faq {
//   padding: 100px 7%;
// }


// .seo-faq-container {
//   max-width: 850px;

//   margin: auto;
// }


// .seo-faq details {
//   margin-bottom: 15px;

//   padding: 20px 25px;

//   border-radius: 15px;

//   background: #0d0b15;

//   border: 1px solid
//     rgba(255,255,255,.07);
// }


// .seo-faq summary {
//   cursor: pointer;

//   color: white;

//   font-size: 14px;

//   font-weight: 600;
// }


// .seo-faq details p {
//   color: #858592;

//   font-size: 12px;

//   line-height: 1.8;

//   margin:
//     18px 0 0;
// }


// /* =====================================================
//    RESPONSIVE
// ===================================================== */

// @media (max-width: 900px) {

//   .seo-intro {
//     grid-template-columns: 1fr;
//   }

//   .why-seo-grid {
//     grid-template-columns:
//       repeat(2, 1fr);
//   }

//   .seo-service-grid {
//     grid-template-columns:
//       repeat(2, 1fr);
//   }

//   .process-line {
//     grid-template-columns:
//       repeat(2, 1fr);

//     row-gap: 50px;
//   }

// }


// @media (max-width: 600px) {

//   .seo-intro {
//     padding: 70px 5%;

//     gap: 40px;
//   }

//   .why-seo {
//     padding: 70px 5%;
//   }

//   .why-seo-grid {
//     grid-template-columns: 1fr;
//   }

//   .seo-services {
//     padding: 70px 5%;
//   }

//   .seo-service-grid {
//     grid-template-columns: 1fr;
//   }

//   .process-line {
//     grid-template-columns: 1fr;

//     row-gap: 35px;
//   }

//   .seo-benefits {
//     grid-template-columns: 1fr;

//     gap: 40px;

//     padding: 70px 6%;
//   }

//   .seo-faq {
//     padding: 70px 5%;
//   }

// }
//       `}</style>


//       <main className="seo-page">

//         {/* HERO */}

//         <section className="seo-hero">

//           <div className="seo-hero-content">

//             <div className="seo-label">
//               SEARCH ENGINE OPTIMIZATION
//             </div>


//             <h1 className="seo-title">

//               Get Found.
//               <br />

//               <span>
//                 Get Growth.
//               </span>

//             </h1>


//             <p className="seo-description">
//               We build powerful SEO strategies that
//               improve search visibility, attract the
//               right audience and turn organic traffic
//               into meaningful business growth.
//             </p>


            
// <Link
//   to="/contact"
// className="seo-button"
// >
// Start Your SEO Journey →
// </Link>
//           </div>


//           {/* ANIMATED VISUAL */}

//           <div className="seo-visual">

//             <div className="seo-word word-one">
//               KEYWORDS
//             </div>

//             <div className="seo-word word-two">
//               ORGANIC TRAFFIC
//             </div>

//             <div className="seo-word word-three">
//               RANKING
//             </div>


//             <div className="seo-orbit"></div>

//             <div className="seo-orbit two"></div>


//             <div className="seo-search-box">

//               <div className="search-top">

//                 <div className="search-circle"></div>

//                 <div className="search-line"></div>

//               </div>


//               <div className="rank-item">

//                 <div className="rank-number">
//                   #1
//                 </div>

//                 <div
//                   className="rank-bar"
//                   style={{ width: "95%" }}
//                 ></div>

//               </div>


//               <div className="rank-item">

//                 <div className="rank-number">
//                   #2
//                 </div>

//                 <div
//                   className="rank-bar"
//                   style={{ width: "80%" }}
//                 ></div>

//               </div>


//               <div className="rank-item">

//                 <div className="rank-number">
//                   #3
//                 </div>

//                 <div
//                   className="rank-bar"
//                   style={{ width: "65%" }}
//                 ></div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* FEATURES */}

//         <section className="seo-features">

//           <div className="seo-section-title">

//             <span>
//               OUR SEO APPROACH
//             </span>

//             <h2>
//               Built To Rank.
//               <br />
//               Designed To Grow.
//             </h2>

//             <p>
//               From technical optimization to content
//               strategy, we focus on every factor that
//               helps your business perform better online.
//             </p>

//           </div>


//           <div className="seo-cards">


//             <div className="seo-card">

//               <div className="seo-card-icon">
//                 🔍
//               </div>

//               <h3>
//                 Keyword Strategy
//               </h3>

//               <p>
//                 Find the right keywords and search
//                 opportunities that match your audience
//                 and business goals.
//               </p>

//             </div>


//             <div className="seo-card">

//               <div className="seo-card-icon">
//                 ⚙️
//               </div>

//               <h3>
//                 Technical SEO
//               </h3>

//               <p>
//                 Improve website structure, speed,
//                 mobile experience and technical
//                 performance for search engines.
//               </p>

//             </div>


//             <div className="seo-card">

//               <div className="seo-card-icon">
//                 📈
//               </div>

//               <h3>
//                 Organic Growth
//               </h3>

//               <p>
//                 Build sustainable organic visibility
//                 and attract qualified visitors who are
//                 searching for your services.
//               </p>

//             </div>


//           </div>

//         </section>
// {/* =====================================================
//     SEO INTRO
// ===================================================== */}

// <section className="seo-intro">

//   <div className="seo-intro-content">

//     <span className="seo-mini-title">
//       SEO THAT DELIVERS RESULTS
//     </span>

//     <h2>
//       Turn Search Visibility
//       Into Business Growth
//     </h2>

//     <p>
//       Search Engine Optimization is more than ranking
//       your website on Google. It is about making your
//       business visible to the right people at the right
//       time.
//     </p>

//     <p>
//       Our SEO strategies combine technical optimization,
//       keyword research, high-quality content, on-page
//       optimization and authority building to create
//       sustainable organic growth.
//     </p>

//   </div>


//   <div className="seo-intro-points">

//     <div>
//       <strong>01</strong>
//       <span>Better Search Visibility</span>
//     </div>

//     <div>
//       <strong>02</strong>
//       <span>Targeted Organic Traffic</span>
//     </div>

//     <div>
//       <strong>03</strong>
//       <span>Long-Term Growth</span>
//     </div>

//   </div>

// </section>


// {/* =====================================================
//     WHY SEO
// ===================================================== */}

// <section className="why-seo">

//   <div className="seo-section-title">

//     <span>
//       WHY SEO MATTERS
//     </span>

//     <h2>
//       Be Where Your
//       Customers Are Searching
//     </h2>

//     <p>
//       Your customers are already searching for products
//       and services like yours. SEO helps your business
//       appear when those searches happen.
//     </p>

//   </div>


//   <div className="why-seo-grid">

//     <div className="why-seo-card">

//       <span>01</span>

//       <h3>
//         Increase Visibility
//       </h3>

//       <p>
//         Improve your website presence across search
//         engines and reach more potential customers.
//       </p>

//     </div>


//     <div className="why-seo-card">

//       <span>02</span>

//       <h3>
//         Attract Quality Traffic
//       </h3>

//       <p>
//         Target relevant keywords and attract visitors
//         who are genuinely interested in your business.
//       </p>

//     </div>


//     <div className="why-seo-card">

//       <span>03</span>

//       <h3>
//         Build Trust
//       </h3>

//       <p>
//         Strong search visibility helps establish
//         credibility and trust with your audience.
//       </p>

//     </div>


//     <div className="why-seo-card">

//       <span>04</span>

//       <h3>
//         Reduce Long-Term Costs
//       </h3>

//       <p>
//         Organic traffic can continue generating value
//         without paying for every individual visitor.
//       </p>

//     </div>

//   </div>

// </section>


// {/* =====================================================
//     SEO SERVICES
// ===================================================== */}

// <section className="seo-services">

//   <div className="seo-section-title">

//     <span>
//       WHAT WE DO
//     </span>

//     <h2>
//       Complete SEO Services
//     </h2>

//     <p>
//       We cover every important part of SEO to build
//       a strong and scalable search presence.
//     </p>

//   </div>


//   <div className="seo-service-grid">

//     <div className="seo-service-card">

//       <div className="service-number">
//         01
//       </div>

//       <h3>
//         Keyword Research
//       </h3>

//       <p>
//         Discover high-value keywords and search terms
//         that match your audience, competition and
//         business objectives.
//       </p>

//     </div>


//     <div className="seo-service-card">

//       <div className="service-number">
//         02
//       </div>

//       <h3>
//         On-Page SEO
//       </h3>

//       <p>
//         Optimize titles, headings, content, URLs,
//         internal links and other important page
//         elements.
//       </p>

//     </div>


//     <div className="seo-service-card">

//       <div className="service-number">
//         03
//       </div>

//       <h3>
//         Technical SEO
//       </h3>

//       <p>
//         Improve website structure, crawlability,
//         indexing, performance and mobile experience.
//       </p>

//     </div>


//     <div className="seo-service-card">

//       <div className="service-number">
//         04
//       </div>

//       <h3>
//         Content Strategy
//       </h3>

//       <p>
//         Create useful and search-focused content that
//         answers customer questions and supports organic
//         growth.
//       </p>

//     </div>


//     <div className="seo-service-card">

//       <div className="service-number">
//         05
//       </div>

//       <h3>
//         Local SEO
//       </h3>

//       <p>
//         Improve local search visibility and help nearby
//         customers discover your business.
//       </p>

//     </div>


//     <div className="seo-service-card">

//       <div className="service-number">
//         06
//       </div>

//       <h3>
//         SEO Analytics
//       </h3>

//       <p>
//         Monitor rankings, traffic, engagement and
//         performance to continuously improve your SEO
//         strategy.
//       </p>

//     </div>

//   </div>

// </section>


// {/* =====================================================
//     SEO PROCESS
// ===================================================== */}

// <section className="seo-process">

//   <div className="seo-section-title">

//     <span>
//       OUR PROCESS
//     </span>

//     <h2>
//       How We Build Your
//       SEO Strategy
//     </h2>

//   </div>


//   <div className="process-line">

//     <div className="process-item">

//       <div className="process-circle">
//         01
//       </div>

//       <h3>
//         Audit
//       </h3>

//       <p>
//         Analyze your current website,
//         rankings and technical performance.
//       </p>

//     </div>


//     <div className="process-item">

//       <div className="process-circle">
//         02
//       </div>

//       <h3>
//         Research
//       </h3>

//       <p>
//         Identify keywords, competitors
//         and valuable search opportunities.
//       </p>

//     </div>


//     <div className="process-item">

//       <div className="process-circle">
//         03
//       </div>

//       <h3>
//         Optimize
//       </h3>

//       <p>
//         Improve technical elements,
//         content and website structure.
//       </p>

//     </div>


//     <div className="process-item">

//       <div className="process-circle">
//         04
//       </div>

//       <h3>
//         Grow
//       </h3>

//       <p>
//         Track results, analyze data and
//         continuously improve performance.
//       </p>

//     </div>

//   </div>

// </section>


// {/* =====================================================
//     SEO BENEFITS
// ===================================================== */}

// <section className="seo-benefits">

//   <div className="seo-benefit-content">

//     <span>
//       THE RESULT
//     </span>

//     <h2>
//       More Visibility.
//       <br />
//       More Opportunities.
//     </h2>

//     <p>
//       A well-planned SEO strategy can help your business
//       attract relevant visitors, generate qualified leads
//       and establish a stronger digital presence.
//     </p>

//   </div>


//   <div className="benefit-list">

//     <div>
//       <b>✓</b>
//       Higher search visibility
//     </div>

//     <div>
//       <b>✓</b>
//       More qualified organic traffic
//     </div>

//     <div>
//       <b>✓</b>
//       Better website experience
//     </div>

//     <div>
//       <b>✓</b>
//       Stronger online authority
//     </div>

//     <div>
//       <b>✓</b>
//       Sustainable business growth
//     </div>

//   </div>

// </section>


// {/* =====================================================
//     SEO FAQ
// ===================================================== */}

// <section className="seo-faq">

//   <div className="seo-section-title">

//     <span>
//       FAQ
//     </span>

//     <h2>
//       SEO Questions?
//       We've Got Answers.
//     </h2>

//   </div>


//   <div className="seo-faq-container">

//     <details>
//       <summary>
//         How long does SEO take?
//       </summary>

//       <p>
//         SEO is a long-term strategy. The timeline depends
//         on competition, website condition, keywords and
//         the overall SEO strategy.
//       </p>

//     </details>


//     <details>
//       <summary>
//         Can SEO increase website traffic?
//       </summary>

//       <p>
//         Yes. Effective SEO can improve search visibility
//         and help attract relevant organic visitors to
//         your website.
//       </p>

//     </details>


//     <details>
//       <summary>
//         Do you provide monthly SEO services?
//       </summary>

//       <p>
//         SEO can be managed as an ongoing strategy where
//         performance is monitored and improvements are
//         continuously implemented.
//       </p>

//     </details>


//     <details>
//       <summary>
//         Why is keyword research important?
//       </summary>

//       <p>
//         Keyword research helps identify the terms and
//         topics your potential customers use when searching
//         for products or services.
//       </p>

//     </details>

//   </div>

// </section>
//       </main>
//     </>
//   );
// }

// export default SEO;
import React from "react";
import { Link } from "react-router-dom";

import {
  Search,
  Settings,
  TrendingUp,
  CheckCircle,
} from "@mui/icons-material";

function SEO() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .seo-page {
          min-height: 100vh;
          overflow: hidden;
          background: #030308;
          color: white;
          font-family: Arial, sans-serif;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .seo-hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 120px 7% 80px;
          overflow: hidden;
        }

        .seo-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          top: -180px;
          left: -120px;
          border-radius: 50%;
          background: #722cff;
          filter: blur(150px);
          opacity: 0.16;
          animation: seoGlow 7s ease-in-out infinite alternate;
        }

        .seo-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -150px;
          bottom: -180px;
          border-radius: 50%;
          background: #176df5;
          filter: blur(150px);
          opacity: 0.13;
          animation: seoGlow2 8s ease-in-out infinite alternate;
        }

        @keyframes seoGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(150px, 80px);
          }
        }

        @keyframes seoGlow2 {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-120px, -70px);
          }
        }

        .seo-hero-content {
          position: relative;
          z-index: 5;
          width: 55%;
          animation: seoContentIn 1s ease;
        }

        @keyframes seoContentIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .seo-label {
          display: inline-block;
          padding: 8px 15px;
          border-radius: 30px;
          border: 1px solid rgba(170, 80, 255, 0.35);
          background: rgba(130, 50, 255, 0.08);
          color: #b66cff;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .seo-title {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1.02;
       color: var(--meta-text);
        }

        .seo-title span {
          background: linear-gradient(
            90deg,
            #a52df4,
            #614cff,
            #176df5,
            #ff4fc3
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: seoGradient 5s linear infinite;
        }

        @keyframes seoGradient {
          to {
            background-position: 300% center;
          }
        }

        .seo-description {
          max-width: 620px;
          margin-top: 25px;
          color: #92929f;
          font-size: 15px;
          line-height: 1.9;
        }

        .seo-button {
          display: inline-flex;
          margin-top: 30px;
          padding: 15px 25px;
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            100deg,
            #a52df4,
            #614cff,
            #176df5
          );
          box-shadow: 0 0 30px rgba(110, 60, 255, 0.3);
          transition: 0.3s;
        }

        .seo-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 45px rgba(110, 60, 255, 0.6);
        }

        .seo-visual {
          position: absolute;
          right: 7%;
          width: 40%;
          height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .seo-orbit {
          position: absolute;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(150, 80, 255, 0.25);
          border-radius: 50%;
          animation: seoRotate 12s linear infinite;
        }

        .seo-orbit::before {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          top: 20px;
          left: 50%;
          border-radius: 50%;
          background: #b35cff;
          box-shadow: 0 0 20px #b35cff;
        }

        .seo-orbit.two {
          width: 230px;
          height: 230px;
          animation: seoRotateReverse 9s linear infinite;
        }

        .seo-orbit.two::before {
          background: #4285ff;
          box-shadow: 0 0 20px #4285ff;
          top: auto;
          bottom: 10px;
        }

        @keyframes seoRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes seoRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .seo-search-box {
          position: relative;
          width: 250px;
          padding: 18px 22px;
          border-radius: 16px;
          background: rgba(15, 12, 25, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
          animation: searchFloat 3s ease-in-out infinite;
        }

        @keyframes searchFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }

        .search-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .search-circle {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 3px solid #6d55ff;
          position: relative;
        }

        .search-circle::after {
          content: "";
          position: absolute;
          width: 9px;
          height: 3px;
          background: #6d55ff;
          right: -7px;
          bottom: -3px;
          transform: rotate(45deg);
        }

        .search-line {
          height: 9px;
          border-radius: 10px;
          background: #262237;
          flex: 1;
        }

        .rank-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 13px;
        }

        .rank-number {
          width: 24px;
          color: #b66cff;
          font-size: 11px;
          font-weight: bold;
        }

        .rank-bar {
          height: 7px;
          border-radius: 10px;
          background: linear-gradient(90deg, #9d43ff, #416cff);
          animation: rankMove 2.5s ease-in-out infinite alternate;
        }

        @keyframes rankMove {
          from {
            transform: scaleX(0.75);
            transform-origin: left;
          }

          to {
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .seo-word {
          position: absolute;
          padding: 9px 14px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #898995;
          font-size: 10px;
          backdrop-filter: blur(10px);
          animation: wordFloat 4s ease-in-out infinite;
        }

        .word-one {
          top: 20px;
          right: 20px;
        }

        .word-two {
          bottom: 50px;
          left: 10px;
          animation-delay: 1s;
        }

        .word-three {
          top: 100px;
          left: 30px;
          animation-delay: 2s;
        }

        @keyframes wordFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        .seo-features,
        .seo-services {
          padding: 90px 7%;
          background: #05050b;
        }

        .seo-section-title {
          text-align: center;
          max-width: 650px;
          margin: auto auto 55px;
        }

        .seo-section-title span,
        .seo-mini-title,
        .seo-benefit-content > span {
          color: #a85cff;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .seo-section-title h2 {
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 52px);
        }

        .seo-section-title p,
        .seo-intro-content p,
        .seo-card p,
        .seo-service-card p,
        .why-seo-card p,
        .process-item p,
        .seo-benefit-content p,
        .seo-faq details p {
          color: #858592;
          font-size: 13px;
          line-height: 1.8;
        }

        .seo-cards,
        .seo-service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .seo-card,
        .seo-service-card,
        .why-seo-card {
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(145deg, #12101b, #090b14);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.4s;
        }

        .seo-card {
          min-height: 210px;
          animation: cardFloat 5s ease-in-out infinite;
        }

        .seo-card:nth-child(2) {
          animation-delay: 1s;
        }

        .seo-card:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes cardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .seo-card:hover,
        .seo-service-card:hover,
        .why-seo-card:hover {
          transform: translateY(-10px);
          border-color: rgba(160, 80, 255, 0.4);
          box-shadow: 0 20px 50px rgba(80, 40, 180, 0.15);
        }

        .seo-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(130, 60, 255, 0.12);
          color: #b66cff;
          margin-bottom: 20px;
        }

        .seo-card-icon svg {
          font-size: 23px;
        }

        .seo-card h3,
        .seo-service-card h3,
        .why-seo-card h3 {
          margin: 0 0 10px;
          font-size: 18px;
        }

        .seo-intro {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 70px;
          padding: 100px 7%;
          background: #05050b;
        }

        .seo-intro-content h2,
        .seo-benefit-content h2 {
          max-width: 650px;
          margin: 15px 0 25px;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.1;
        }

        .seo-intro-points,
        .benefit-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 20px;
        }

        .seo-intro-points div,
        .benefit-list div {
          padding: 25px;
          display: flex;
          gap: 20px;
          align-items: center;
          border-radius: 15px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.3s;
        }

        .seo-intro-points div:hover,
        .benefit-list div:hover {
          transform: translateX(10px);
          border-color: rgba(160, 80, 255, 0.4);
        }

        .seo-intro-points strong,
        .benefit-list b {
          color: #a85cff;
          font-size: 22px;
        }

        .seo-intro-points span {
          color: #ddd;
          font-size: 13px;
        }

        .why-seo {
          padding: 100px 7%;
        }

        .why-seo-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .why-seo-card {
          min-height: 230px;
        }

        .why-seo-card > span,
        .service-number {
          color: #a85cff;
          font-size: 11px;
          letter-spacing: 2px;
        }

        .seo-service-card {
          min-height: 240px;
        }

        .seo-service-card h3 {
          margin-top: 25px;
        }

        .seo-process {
          padding: 100px 7%;
        }

        .process-line {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
        }

        .process-item {
          text-align: center;
          position: relative;
        }

        .process-circle {
          width: 65px;
          height: 65px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: linear-gradient(135deg, #9d43ff, #416cff);
          box-shadow: 0 0 30px rgba(130, 60, 255, 0.25);
          font-size: 12px;
          font-weight: bold;
        }

        .process-item h3 {
          margin-top: 20px;
        }

        .seo-benefits {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 100px 10%;
          background: radial-gradient(
              circle at 20% 50%,
              rgba(120, 50, 255, 0.12),
              transparent 35%
            ),
            #05050b;
        }

        .benefit-list {
          gap: 15px;
        }

        .benefit-list div {
          color: #ccc;
          font-size: 13px;
        }

        .benefit-list b {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .benefit-list b svg {
          font-size: 20px;
        }

        .seo-faq {
          padding: 100px 7%;
        }

        .seo-faq-container {
          max-width: 850px;
          margin: auto;
        }

        .seo-faq details {
          margin-bottom: 15px;
          padding: 20px 25px;
          border-radius: 15px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .seo-faq summary {
          cursor: pointer;
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        /* LIGHT THEME */

        body.light-theme .seo-page {
          background: #f7f8ff;
          color: #171725;
        }

        body.light-theme .seo-features,
        body.light-theme .seo-intro,
        body.light-theme .seo-services,
        body.light-theme .seo-benefits {
          background: #ffffff;
        }

        body.light-theme .why-seo,
        body.light-theme .seo-process,
        body.light-theme .seo-faq {
          background: #f7f8ff;
        }

        body.light-theme .seo-card,
        body.light-theme .seo-service-card,
        body.light-theme .why-seo-card {
          background: linear-gradient(145deg, #ffffff, #f0f2ff);
          border-color: rgba(25, 25, 55, 0.12);
          box-shadow: 0 10px 30px rgba(45, 40, 100, 0.06);
        }

        body.light-theme .seo-search-box {
          background: rgba(255, 255, 255, 0.95);
          border-color: rgba(25, 25, 55, 0.12);
          box-shadow: 0 20px 60px rgba(45, 40, 100, 0.15);
        }

        body.light-theme .search-line {
          background: #dfe2f2;
        }

        body.light-theme .seo-word {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(25, 25, 55, 0.12);
          color: #62647a;
        }

        body.light-theme .seo-section-title h2,
        body.light-theme .seo-intro-content h2,
        body.light-theme .seo-benefit-content h2,
        body.light-theme .seo-card h3,
        body.light-theme .seo-service-card h3,
        body.light-theme .why-seo-card h3 {
          color: #171725;
        }

        body.light-theme .seo-section-title p,
        body.light-theme .seo-intro-content p,
        body.light-theme .seo-card p,
        body.light-theme .seo-service-card p,
        body.light-theme .why-seo-card p,
        body.light-theme .process-item p,
        body.light-theme .seo-benefit-content p {
          color: #62647a;
        }

        body.light-theme .seo-intro-points div,
        body.light-theme .benefit-list div,
        body.light-theme .seo-faq details {
          background: #ffffff;
          border-color: rgba(25, 25, 55, 0.12);
        }

        body.light-theme .seo-intro-points span,
        body.light-theme .benefit-list div {
          color: #4f5065;
        }

        body.light-theme .seo-faq summary {
          color: #171725;
        }

        body.light-theme .seo-faq details p {
          color: #62647a;
        }

        @media (max-width: 900px) {
          .seo-hero {
            min-height: auto;
            padding: 110px 6% 70px;
            display: block;
          }

          .seo-hero-content {
            width: 100%;
            text-align: center;
          }

          .seo-description {
            margin-left: auto;
            margin-right: auto;
          }

          .seo-visual {
            position: relative;
            right: auto;
            width: 100%;
            height: 350px;
            margin-top: 40px;
          }

          .seo-cards,
          .seo-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .seo-intro,
          .seo-benefits {
            grid-template-columns: 1fr;
          }

          .why-seo-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .process-line {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 50px;
          }
        }

        @media (max-width: 600px) {
          .seo-title {
            font-size: 48px;
          }

          .seo-description {
            font-size: 13px;
          }

          .seo-visual {
            height: 300px;
          }

          .seo-orbit {
            width: 250px;
            height: 250px;
          }

          .seo-orbit.two {
            width: 175px;
            height: 175px;
          }

          .seo-search-box {
            width: 210px;
          }

          .seo-word {
            font-size: 8px;
            padding: 7px 10px;
          }

          .seo-cards,
          .seo-service-grid,
          .why-seo-grid,
          .process-line {
            grid-template-columns: 1fr;
          }

          .seo-card,
          .seo-service-card,
          .why-seo-card {
            min-height: auto;
          }

          .seo-features,
          .seo-services,
          .seo-intro,
          .why-seo,
          .seo-process,
          .seo-benefits,
          .seo-faq {
            padding: 70px 5%;
          }

          .seo-benefits {
            gap: 40px;
          }
        }
      `}</style>

      <main className="seo-page">
        <section className="seo-hero">
          <div className="seo-hero-content">
            <div className="seo-label">SEARCH ENGINE OPTIMIZATION</div>

            <h1 className="seo-title">
              Get Found.
              <br />
              <span>Get Growth.</span>
            </h1>

            <p className="seo-description">
              We build powerful SEO strategies that improve search visibility,
              attract the right audience and turn organic traffic into
              meaningful business growth.
            </p>

            <Link to="/contact" className="seo-button">
              Start Your SEO Journey →
            </Link>
          </div>

          <div className="seo-visual">
            <div className="seo-word word-one">KEYWORDS</div>
            <div className="seo-word word-two">ORGANIC TRAFFIC</div>
            <div className="seo-word word-three">RANKING</div>

            <div className="seo-orbit"></div>
            <div className="seo-orbit two"></div>

            <div className="seo-search-box">
              <div className="search-top">
                <div className="search-circle"></div>
                <div className="search-line"></div>
              </div>

              <div className="rank-item">
                <div className="rank-number">#1</div>
                <div className="rank-bar" style={{ width: "95%" }}></div>
              </div>

              <div className="rank-item">
                <div className="rank-number">#2</div>
                <div className="rank-bar" style={{ width: "80%" }}></div>
              </div>

              <div className="rank-item">
                <div className="rank-number">#3</div>
                <div className="rank-bar" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="seo-features">
          <div className="seo-section-title">
            <span>OUR SEO APPROACH</span>

            <h2>
              Built To Rank.
              <br />
              Designed To Grow.
            </h2>

            <p>
              From technical optimization to content strategy, we focus on
              every factor that helps your business perform better online.
            </p>
          </div>

          <div className="seo-cards">
            <div className="seo-card">
              <div className="seo-card-icon">
                <Search />
              </div>

              <h3>Keyword Strategy</h3>

              <p>
                Find the right keywords and search opportunities that match
                your audience and business goals.
              </p>
            </div>

            <div className="seo-card">
              <div className="seo-card-icon">
                <Settings />
              </div>

              <h3>Technical SEO</h3>

              <p>
                Improve website structure, speed, mobile experience and
                technical performance for search engines.
              </p>
            </div>

            <div className="seo-card">
              <div className="seo-card-icon">
                <TrendingUp />
              </div>

              <h3>Organic Growth</h3>

              <p>
                Build sustainable organic visibility and attract qualified
                visitors who are searching for your services.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-intro">
          <div className="seo-intro-content">
            <span className="seo-mini-title">
              SEO THAT DELIVERS RESULTS
            </span>

            <h2>Turn Search Visibility Into Business Growth</h2>

            <p>
              Search Engine Optimization is more than ranking your website on
              Google. It is about making your business visible to the right
              people at the right time.
            </p>

            <p>
              Our SEO strategies combine technical optimization, keyword
              research, high-quality content, on-page optimization and
              authority building to create sustainable organic growth.
            </p>
          </div>

          <div className="seo-intro-points">
            <div>
              <strong>01</strong>
              <span>Better Search Visibility</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Targeted Organic Traffic</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Long-Term Growth</span>
            </div>
          </div>
        </section>

        <section className="why-seo">
          <div className="seo-section-title">
            <span>WHY SEO MATTERS</span>

            <h2>
              Be Where Your
              <br />
              Customers Are Searching
            </h2>

            <p>
              Your customers are already searching for products and services
              like yours. SEO helps your business appear when those searches
              happen.
            </p>
          </div>

          <div className="why-seo-grid">
            <div className="why-seo-card">
              <span>01</span>
              <h3>Increase Visibility</h3>
              <p>
                Improve your website presence across search engines and reach
                more potential customers.
              </p>
            </div>

            <div className="why-seo-card">
              <span>02</span>
              <h3>Attract Quality Traffic</h3>
              <p>
                Target relevant keywords and attract visitors who are
                genuinely interested in your business.
              </p>
            </div>

            <div className="why-seo-card">
              <span>03</span>
              <h3>Build Trust</h3>
              <p>
                Strong search visibility helps establish credibility and trust
                with your audience.
              </p>
            </div>

            <div className="why-seo-card">
              <span>04</span>
              <h3>Reduce Long-Term Costs</h3>
              <p>
                Organic traffic can continue generating value without paying
                for every individual visitor.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-services">
          <div className="seo-section-title">
            <span>WHAT WE DO</span>

            <h2>Complete SEO Services</h2>

            <p>
              We cover every important part of SEO to build a strong and
              scalable search presence.
            </p>
          </div>

          <div className="seo-service-grid">
            <div className="seo-service-card">
              <div className="service-number">01</div>
              <h3>Keyword Research</h3>
              <p>
                Discover high-value keywords and search terms that match your
                audience, competition and business objectives.
              </p>
            </div>

            <div className="seo-service-card">
              <div className="service-number">02</div>
              <h3>On-Page SEO</h3>
              <p>
                Optimize titles, headings, content, URLs, internal links and
                other important page elements.
              </p>
            </div>

            <div className="seo-service-card">
              <div className="service-number">03</div>
              <h3>Technical SEO</h3>
              <p>
                Improve website structure, crawlability, indexing, performance
                and mobile experience.
              </p>
            </div>

            <div className="seo-service-card">
              <div className="service-number">04</div>
              <h3>Content Strategy</h3>
              <p>
                Create useful and search-focused content that answers customer
                questions and supports organic growth.
              </p>
            </div>

            <div className="seo-service-card">
              <div className="service-number">05</div>
              <h3>Local SEO</h3>
              <p>
                Improve local search visibility and help nearby customers
                discover your business.
              </p>
            </div>

            <div className="seo-service-card">
              <div className="service-number">06</div>
              <h3>SEO Analytics</h3>
              <p>
                Monitor rankings, traffic, engagement and performance to
                continuously improve your SEO strategy.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-process">
          <div className="seo-section-title">
            <span>OUR PROCESS</span>

            <h2>
              How We Build Your
              <br />
              SEO Strategy
            </h2>
          </div>

          <div className="process-line">
            <div className="process-item">
              <div className="process-circle">01</div>
              <h3>Audit</h3>
              <p>
                Analyze your current website, rankings and technical
                performance.
              </p>
            </div>

            <div className="process-item">
              <div className="process-circle">02</div>
              <h3>Research</h3>
              <p>
                Identify keywords, competitors and valuable search
                opportunities.
              </p>
            </div>

            <div className="process-item">
              <div className="process-circle">03</div>
              <h3>Optimize</h3>
              <p>
                Improve technical elements, content and website structure.
              </p>
            </div>

            <div className="process-item">
              <div className="process-circle">04</div>
              <h3>Grow</h3>
              <p>
                Track results, analyze data and continuously improve
                performance.
              </p>
            </div>
          </div>
        </section>

        <section className="seo-benefits">
          <div className="seo-benefit-content">
            <span>THE RESULT</span>

            <h2>
              More Visibility.
              <br />
              More Opportunities.
            </h2>

            <p>
              A well-planned SEO strategy can help your business attract
              relevant visitors, generate qualified leads and establish a
              stronger digital presence.
            </p>
          </div>

          <div className="benefit-list">
            <div>
              <b>
                <CheckCircle />
              </b>
              Higher search visibility
            </div>

            <div>
              <b>
                <CheckCircle />
              </b>
              More qualified organic traffic
            </div>

            <div>
              <b>
                <CheckCircle />
              </b>
              Better website experience
            </div>

            <div>
              <b>
                <CheckCircle />
              </b>
              Stronger online authority
            </div>

            <div>
              <b>
                <CheckCircle />
              </b>
              Sustainable business growth
            </div>
          </div>
        </section>

        <section className="seo-faq">
          <div className="seo-section-title">
            <span>FAQ</span>

            <h2>
              SEO Questions?
              <br />
              We've Got Answers.
            </h2>
          </div>

          <div className="seo-faq-container">
            <details>
              <summary>How long does SEO take?</summary>
              <p>
                SEO is a long-term strategy. The timeline depends on
                competition, website condition, keywords and the overall SEO
                strategy.
              </p>
            </details>

            <details>
              <summary>Can SEO increase website traffic?</summary>
              <p>
                Yes. Effective SEO can improve search visibility and help
                attract relevant organic visitors to your website.
              </p>
            </details>

            <details>
              <summary>Do you provide monthly SEO services?</summary>
              <p>
                SEO can be managed as an ongoing strategy where performance is
                monitored and improvements are continuously implemented.
              </p>
            </details>

            <details>
              <summary>Why is keyword research important?</summary>
              <p>
                Keyword research helps identify the terms and topics your
                potential customers use when searching for products or
                services.
              </p>
            </details>
          </div>
        </section>
      </main>
    </>
  );
}

export default SEO;