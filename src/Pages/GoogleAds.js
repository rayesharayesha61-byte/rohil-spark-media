// // import React from "react";
// // import { Link } from "react-router-dom";

// // function GoogleAds() {
// //   const adServices = [
// //     {
// //       icon: "🔎",
// //       title: "Search Ads",
// //       text: "Show your business at the right moment when potential customers are actively searching."
// //     },
// //     {
// //       icon: "🖼️",
// //       title: "Display Ads",
// //       text: "Reach your audience across websites and apps with engaging visual advertisements."
// //     },
// //     {
// //       icon: "▶️",
// //       title: "YouTube Ads",
// //       text: "Connect with your audience through powerful video campaigns and engaging creatives."
// //     },
// //     {
// //       icon: "🛒",
// //       title: "Shopping Ads",
// //       text: "Promote your products directly in Google search results and reach high-intent shoppers."
// //     },
// //     {
// //       icon: "🔁",
// //       title: "Remarketing",
// //       text: "Reconnect with people who have already visited your website and bring them back."
// //     },
// //     {
// //       icon: "📊",
// //       title: "Campaign Analytics",
// //       text: "Track clicks, conversions and campaign performance to make smarter decisions."
// //     }
// //   ];

// //   const process = [
// //     {
// //       number: "01",
// //       title: "Research",
// //       text: "Understand your business, audience, competitors and advertising goals."
// //     },
// //     {
// //       number: "02",
// //       title: "Strategy",
// //       text: "Create the right campaign structure, targeting and keyword strategy."
// //     },
// //     {
// //       number: "03",
// //       title: "Launch",
// //       text: "Build and launch highly targeted campaigns with compelling ad creatives."
// //     },
// //     {
// //       number: "04",
// //       title: "Optimize",
// //       text: "Continuously analyze performance and improve campaigns for better results."
// //     }
// //   ];

// //   return (
// //     <>
// //       <style>{`

// //         * {
// //           box-sizing: border-box;
// //         }

// //         .google-page {
// //           min-height: 100vh;
// //           color: white;

// //           background:
// //             radial-gradient(
// //               circle at 10% 10%,
// //               rgba(70, 130, 255, .15),
// //               transparent 30%
// //             ),
// //             radial-gradient(
// //               circle at 90% 30%,
// //               rgba(170, 50, 255, .14),
// //               transparent 30%
// //             ),
// //             #030308;

// //           font-family:
// //             Arial,
// //             Helvetica,
// //             sans-serif;

// //           overflow: hidden;
// //         }


// //         /* =========================
// //            HERO
// //         ========================= */

// //         .google-hero {
// //           position: relative;

// //           min-height: 620px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;

// //           text-align: center;

// //           padding:
// //             90px 20px 80px;
// //         }


// //         .google-glow {
// //           position: absolute;

// //           width: 430px;
// //           height: 430px;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #4285f4,
// //               #a52cff
// //             );

// //           filter: blur(130px);

// //           opacity: .13;

// //           animation:
// //             googleGlow 7s
// //             ease-in-out
// //             infinite alternate;
// //         }


// //         @keyframes googleGlow {

// //           from {
// //             transform:
// //               translate(-120px, 20px)
// //               scale(.8);
// //           }

// //           to {
// //             transform:
// //               translate(120px, -30px)
// //               scale(1.2);
// //           }

// //         }


// //         .google-hero-content {
// //           position: relative;

// //           z-index: 2;

// //           max-width: 900px;

// //           animation:
// //             googleHeroIn 1s ease;
// //         }


// //         @keyframes googleHeroIn {

// //           from {
// //             opacity: 0;

// //             transform:
// //               translateY(45px);
// //           }

// //           to {
// //             opacity: 1;

// //             transform:
// //               translateY(0);
// //           }

// //         }


// //         .google-badge {
// //           display: inline-block;

// //           padding:
// //             9px 18px;

// //           margin-bottom: 22px;

// //           border-radius: 50px;

// //           color: #67a3ff;

// //           background:
// //             rgba(66, 133, 244, .08);

// //           border:
// //             1px solid
// //             rgba(66, 133, 244, .25);

// //           font-size: 11px;

// //           letter-spacing: 3px;

// //           animation:
// //             googlePulse 3s
// //             ease-in-out
// //             infinite;
// //         }


// //         @keyframes googlePulse {

// //           0%,
// //           100% {
// //             box-shadow:
// //               0 0 10px
// //               rgba(66, 133, 244, .05);
// //           }

// //           50% {
// //             box-shadow:
// //               0 0 30px
// //               rgba(66, 133, 244, .3);
// //           }

// //         }


// //         .google-hero h1 {
// //           margin: 0;

// //           font-size:
// //             clamp(52px, 8vw, 105px);

// //           line-height: 1;

// //           font-weight: 800;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #4285f4,
// //               #a52cff,
// //               #5c9cff,
// //               #4285f4
// //             );

// //           background-size: 300% auto;

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;

// //           animation:
// //             googleGradient 5s
// //             linear
// //             infinite;
// //         }


// //         @keyframes googleGradient {

// //           to {
// //             background-position:
// //               300% center;
// //           }

// //         }


// //         .google-hero h2 {
// //           margin:
// //             25px 0 15px;

// //           font-size:
// //             clamp(25px, 4vw, 40px);
// //         }


// //         .google-hero p {
// //           max-width: 680px;

// //           margin: auto;

// //           color: #92929f;

// //           font-size: 15px;

// //           line-height: 1.9;
// //         }


// //         .google-buttons {
// //           display: flex;

// //           justify-content: center;

// //           gap: 12px;

// //           margin-top: 30px;
// //         }


// //         .google-btn {
// //           padding:
// //             14px 25px;

// //           border-radius: 10px;

// //           text-decoration: none;

// //           color: white;

// //           font-size: 13px;

// //           transition:
// //             .3s ease;
// //         }


// //         .google-primary {
// //           background:
// //             linear-gradient(
// //               100deg,
// //               #4285f4,
// //               #a52cff
// //             );
// //         }


// //         .google-secondary {
// //           border:
// //             1px solid
// //             rgba(255,255,255,.12);

// //           background:
// //             rgba(255,255,255,.04);
// //         }


// //         .google-btn:hover {
// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 30px
// //             rgba(70,120,255,.3);
// //         }


// //         /* =========================
// //            CONTAINER
// //         ========================= */

// //         .google-container {
// //           max-width: 1200px;

// //           margin: auto;

// //           padding:
// //             20px 25px;
// //         }


// //         .google-title {
// //           text-align: center;

// //           margin-bottom: 45px;
// //         }


// //         .google-label {
// //           color: #5798ff;

// //           font-size: 11px;

// //           letter-spacing: 3px;

// //           margin-bottom: 12px;
// //         }


// //         .google-title h2 {
// //           margin:
// //             0 0 12px;

// //           font-size:
// //             clamp(32px, 5vw, 48px);
// //         }


// //         .google-title h2 span {
// //           background:
// //             linear-gradient(
// //               90deg,
// //               #4285f4,
// //               #b24cff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .google-title p {
// //           color: #858592;

// //           font-size: 14px;
// //         }


// //         /* =========================
// //            SERVICE CARDS
// //         ========================= */

// //         .google-services {
// //           display: grid;

// //           grid-template-columns:
// //             repeat(3, 1fr);

// //           gap: 20px;

// //           margin-bottom: 120px;
// //         }


// //         .google-card {
// //           min-height: 270px;

// //           padding: 30px;

// //           border-radius: 20px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255,255,255,.055),
// //               rgba(255,255,255,.012)
// //             );

// //           border:
// //             1px solid
// //             rgba(255,255,255,.08);

// //           transition:
// //             .4s ease;

// //           animation:
// //             googleCardIn .7s ease both;
// //         }


// //         .google-card:nth-child(2) {
// //           animation-delay: .1s;
// //         }

// //         .google-card:nth-child(3) {
// //           animation-delay: .2s;
// //         }

// //         .google-card:nth-child(4) {
// //           animation-delay: .3s;
// //         }

// //         .google-card:nth-child(5) {
// //           animation-delay: .4s;
// //         }

// //         .google-card:nth-child(6) {
// //           animation-delay: .5s;
// //         }


// //         @keyframes googleCardIn {

// //           from {
// //             opacity: 0;

// //             transform:
// //               translateY(35px);
// //           }

// //           to {
// //             opacity: 1;

// //             transform:
// //               translateY(0);
// //           }

// //         }


// //         .google-card:hover {

// //           transform:
// //             translateY(-9px);

// //           border-color:
// //             rgba(66,133,244,.4);

// //           box-shadow:
// //             0 25px 55px
// //             rgba(40,100,255,.13);
// //         }


// //         .google-icon {
// //           width: 55px;
// //           height: 55px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;

// //           border-radius: 14px;

// //           font-size: 25px;

// //           background:
// //             rgba(66,133,244,.1);

// //           border:
// //             1px solid
// //             rgba(66,133,244,.18);

// //           margin-bottom: 22px;

// //           transition:
// //             .4s ease;
// //         }


// //         .google-card:hover
// //         .google-icon {

// //           transform:
// //             rotate(-7deg)
// //             scale(1.1);

// //           box-shadow:
// //             0 0 25px
// //             rgba(66,133,244,.2);
// //         }


// //         .google-card h3 {
// //           margin:
// //             0 0 12px;

// //           font-size: 20px;
// //         }


// //         .google-card p {
// //           margin: 0;

// //           color: #858592;

// //           font-size: 13px;

// //           line-height: 1.8;
// //         }


// //         /* =========================
// //            PROCESS
// //         ========================= */

// //         .google-process {
// //           margin-bottom: 120px;
// //         }


// //         .google-process-grid {
// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 18px;
// //         }


// //         .google-process-card {

// //           padding:
// //             28px 22px;

// //           border-radius: 18px;

// //           background:
// //             rgba(255,255,255,.035);

// //           border:
// //             1px solid
// //             rgba(255,255,255,.07);

// //           transition:
// //             .4s ease;
// //         }


// //         .google-process-card:hover {

// //           transform:
// //             translateY(-7px);

// //           border-color:
// //             rgba(66,133,244,.3);
// //         }


// //         .google-number {

// //           display: inline-flex;

// //           width: 42px;
// //           height: 42px;

// //           align-items: center;

// //           justify-content: center;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #4285f4,
// //               #a52cff
// //             );

// //           font-size: 11px;

// //           font-weight: bold;

// //           margin-bottom: 20px;
// //         }


// //         .google-process-card h3 {
// //           margin:
// //             0 0 10px;

// //           font-size: 18px;
// //         }


// //         .google-process-card p {
// //           margin: 0;

// //           color: #858592;

// //           font-size: 12px;

// //           line-height: 1.8;
// //         }


// //         /* =========================
// //            STATS
// //         ========================= */

// //         .google-stats {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 15px;

// //           margin-bottom: 110px;
// //         }


// //         .google-stat {

// //           text-align: center;

// //           padding:
// //             28px 15px;

// //           border-radius: 16px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(66,133,244,.08),
// //               rgba(165,44,255,.04)
// //             );

// //           border:
// //             1px solid
// //             rgba(66,133,244,.12);
// //         }


// //         .google-stat strong {

// //           display: block;

// //           font-size: 30px;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #4285f4,
// //               #b24cff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .google-stat span {

// //           display: block;

// //           margin-top: 7px;

// //           color: #858592;

// //           font-size: 11px;
// //         }


// //         /* =========================
// //            CTA
// //         ========================= */

// //         .google-cta {

// //           text-align: center;

// //           padding:
// //             70px 25px;

// //           margin-bottom: 70px;

// //           border-radius: 25px;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               rgba(66,133,244,.12),
// //               rgba(150,45,255,.08)
// //             );

// //           border:
// //             1px solid
// //             rgba(66,133,244,.2);
// //         }


// //         .google-cta h2 {

// //           margin:
// //             0 0 15px;

// //           font-size:
// //             clamp(30px, 4vw, 45px);
// //         }


// //         .google-cta p {

// //           max-width: 650px;

// //           margin:
// //             0 auto 28px;

// //           color: #92929f;

// //           font-size: 14px;

// //           line-height: 1.8;
// //         }


// //         .google-cta a {

// //           display: inline-block;

// //           padding:
// //             14px 28px;

// //           color: white;

// //           text-decoration: none;

// //           border-radius: 10px;

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #4285f4,
// //               #a52cff
// //             );

// //           font-size: 13px;

// //           font-weight: 600;

// //           transition:
// //             .3s ease;
// //         }


// //         .google-cta a:hover {

// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 35px
// //             rgba(66,133,244,.35);
// //         }


// //         /* =========================
// //            TABLET
// //         ========================= */

// //         @media (max-width: 950px) {

// //           .google-services {
// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .google-process-grid {
// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .google-stats {
// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //         }


// //         /* =========================
// //            MOBILE
// //         ========================= */

// //         @media (max-width: 600px) {

// //           .google-hero {

// //             min-height: 570px;

// //             padding:
// //               70px 18px 60px;
// //           }


// //           .google-hero h1 {
// //             font-size: 58px;
// //           }


// //           .google-hero h2 {
// //             font-size: 23px;
// //           }


// //           .google-hero p {
// //             font-size: 14px;
// //           }


// //           .google-buttons {

// //             flex-direction: column;

// //             max-width: 260px;

// //             margin:
// //               28px auto 0;
// //           }


// //           .google-container {

// //             padding:
// //               15px 16px;
// //           }


// //           .google-services {

// //             grid-template-columns: 1fr;

// //             gap: 15px;

// //             margin-bottom: 80px;
// //           }


// //           .google-card {

// //             min-height: 240px;

// //             padding: 25px;
// //           }


// //           .google-process-grid {

// //             grid-template-columns: 1fr;
// //           }


// //           .google-stats {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }


// //           .google-stat strong {
// //             font-size: 25px;
// //           }


// //           .google-cta {
// //             padding:
// //               50px 20px;
// //           }

// //         }

// //       `}</style>


// //       <section className="google-page">


// //         {/* HERO */}

// //         <div className="google-hero">

// //           <div className="google-glow"></div>


// //           <div className="google-hero-content">

// //             <div className="google-badge">
// //               ✦ GOOGLE ADS
// //             </div>


// //             <h1>
// //               Google Ads
// //             </h1>


// //             <h2>
// //               Reach The Right People.
// //               <br />
// //               At The Right Time.
// //             </h2>


// //             <p>
// //               Turn searches into customers with
// //               targeted Google Ads campaigns designed
// //               to increase visibility, qualified traffic
// //               and business opportunities.
// //             </p>


// //             <div className="google-buttons">

// //               <Link
// //                 to="/contact"
// //                 className="google-btn google-primary"
// //               >
// //                 Start Your Campaign →
// //               </Link>


// //               <Link
// //                 to="/services"
// //                 className="google-btn google-secondary"
// //               >
// //                 View All Services
// //               </Link>

// //             </div>

// //           </div>

// //         </div>


// //         <div className="google-container">


// //           {/* SERVICES */}

// //           <div className="google-title">

// //             <div className="google-label">
// //               OUR GOOGLE ADS EXPERTISE
// //             </div>


// //             <h2>
// //               Advertising Built For
// //               <span> Performance</span>
// //             </h2>


// //             <p>
// //               From search campaigns to remarketing,
// //               we build strategies around your goals.
// //             </p>

// //           </div>


// //           <div className="google-services">

// //             {adServices.map((service) => (

// //               <div
// //                 className="google-card"
// //                 key={service.title}
// //               >

// //                 <div className="google-icon">
// //                   {service.icon}
// //                 </div>


// //                 <h3>
// //                   {service.title}
// //                 </h3>


// //                 <p>
// //                   {service.text}
// //                 </p>

// //               </div>

// //             ))}

// //           </div>


// //           {/* PROCESS */}

// //           <div className="google-process">

// //             <div className="google-title">

// //               <div className="google-label">
// //                 OUR PROCESS
// //               </div>


// //               <h2>
// //                 From Clicks To
// //                 <span> Conversions</span>
// //               </h2>

// //             </div>


// //             <div className="google-process-grid">

// //               {process.map((item) => (

// //                 <div
// //                   className="google-process-card"
// //                   key={item.number}
// //                 >

// //                   <div className="google-number">
// //                     {item.number}
// //                   </div>


// //                   <h3>
// //                     {item.title}
// //                   </h3>


// //                   <p>
// //                     {item.text}
// //                   </p>

// //                 </div>

// //               ))}

// //             </div>

// //           </div>


// //           {/* STATS */}

// //           <div className="google-stats">

// //             <div className="google-stat">
// //               <strong>ROI</strong>
// //               <span>Focused Campaigns</span>
// //             </div>


// //             <div className="google-stat">
// //               <strong>24/7</strong>
// //               <span>Performance Tracking</span>
// //             </div>


// //             <div className="google-stat">
// //               <strong>DATA</strong>
// //               <span>Driven Decisions</span>
// //             </div>


// //             <div className="google-stat">
// //               <strong>CTR</strong>
// //               <span>Focused Optimization</span>
// //             </div>

// //           </div>


// //           {/* CTA */}

// //           <div className="google-cta">

// //             <h2>
// //               Ready To Grow With Google?
// //             </h2>


// //             <p>
// //               Let's create a Google Ads strategy
// //               that puts your business in front of
// //               customers who are ready to take action.
// //             </p>


// //             <Link to="/contact">
// //               Talk To Our Ads Team →
// //             </Link>

// //           </div>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }

// // export default GoogleAds;
// import React from "react";
// import { Link } from "react-router-dom";
// function GoogleAds() {
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .google-page {
//           min-height: 100vh;
//           background: #030308;
//           color: white;
//           overflow: hidden;
//           font-family: Arial, sans-serif;
//         }


//         /* =====================================================
//            HERO
//         ===================================================== */

//         .google-hero {
//           min-height: 90vh;
//           position: relative;

//           display: flex;
//           align-items: center;

//           padding: 120px 7% 80px;

//           overflow: hidden;
//         }


//         .google-hero::before {
//           content: "";

//           position: absolute;

//           width: 500px;
//           height: 500px;

//           top: -180px;
//           left: -150px;

//           border-radius: 50%;

//           background: #4285f4;

//           filter: blur(150px);

//           opacity: .13;

//           animation:
//             googleGlow 7s ease-in-out infinite alternate;
//         }


//         .google-hero::after {
//           content: "";

//           position: absolute;

//           width: 450px;
//           height: 450px;

//           right: -150px;
//           bottom: -150px;

//           border-radius: 50%;

//           background: #9c4dff;

//           filter: blur(150px);

//           opacity: .13;

//           animation:
//             googleGlow2 8s ease-in-out infinite alternate;
//         }


//         @keyframes googleGlow {

//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(140px,80px);
//           }

//         }


//         @keyframes googleGlow2 {

//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(-120px,-80px);
//           }

//         }


//         .google-hero-content {
//           width: 55%;

//           position: relative;

//           z-index: 5;

//           animation:
//             googleContent 1s ease;
//         }


//         @keyframes googleContent {

//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }

//         }


//         .google-label {
//           display: inline-block;

//           padding: 8px 16px;

//           border-radius: 30px;

//           border: 1px solid
//             rgba(66,133,244,.35);

//           background:
//             rgba(66,133,244,.08);

//           color: #65a0ff;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 22px;
//         }


//         .google-title {
//           margin: 0;

//           font-size:
//             clamp(45px,6vw,78px);

//           line-height: 1.03;
//         }


//         .google-title span {
//           background:
//             linear-gradient(
//               90deg,
//               #4285f4,
//               #8b5cf6,
//               #ea4335,
//               #fbbc05,
//               #34a853
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation:
//             googleGradient 6s linear infinite;
//         }


//         @keyframes googleGradient {

//           to {
//             background-position: 300% center;
//           }

//         }


//         .google-description {
//           max-width: 620px;

//           margin-top: 25px;

//           color: #92929f;

//           font-size: 15px;

//           line-height: 1.9;
//         }


//         .google-button {
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
//               #4285f4,
//               #7b55ed,
//               #a34dff
//             );

//           box-shadow:
//             0 0 30px
//             rgba(66,133,244,.3);

//           transition: .3s;
//         }


//         .google-button:hover {
//           transform:
//             translateY(-5px)
//             scale(1.03);

//           box-shadow:
//             0 0 45px
//             rgba(66,133,244,.55);
//         }


//         /* =====================================================
//            ANIMATED AD VISUAL
//         ===================================================== */

//         .google-visual {
//           position: absolute;

//           right: 6%;

//           width: 42%;
//           height: 450px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           z-index: 4;
//         }


//         .ad-orbit {
//           position: absolute;

//           width: 350px;
//           height: 350px;

//           border:
//             1px dashed
//             rgba(66,133,244,.25);

//           border-radius: 50%;

//           animation:
//             adRotate 14s linear infinite;
//         }


//         .ad-orbit::before {
//           content: "";

//           position: absolute;

//           width: 13px;
//           height: 13px;

//           top: 10px;
//           left: 50%;

//           border-radius: 50%;

//           background: #4285f4;

//           box-shadow:
//             0 0 25px #4285f4;
//         }


//         .ad-orbit-two {
//           width: 260px;
//           height: 260px;

//           border-color:
//             rgba(165,80,255,.25);

//           animation:
//             adRotateReverse 10s linear infinite;
//         }


//         .ad-orbit-two::before {
//           background: #a855f7;

//           box-shadow:
//             0 0 25px #a855f7;

//           top: auto;
//           bottom: 5px;
//         }


//         @keyframes adRotate {

//           to {
//             transform: rotate(360deg);
//           }

//         }


//         @keyframes adRotateReverse {

//           to {
//             transform: rotate(-360deg);
//           }

//         }


//         /* AD CARD */

//         .ad-card {
//           position: relative;

//           width: 300px;

//           padding: 22px;

//           border-radius: 20px;

//           background:
//             rgba(13,12,23,.94);

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           backdrop-filter:
//             blur(15px);

//           box-shadow:
//             0 25px 70px
//             rgba(0,0,0,.55);

//           animation:
//             adFloat 3.5s ease-in-out infinite;
//         }


//         @keyframes adFloat {

//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-18px);
//           }

//         }


//         .ad-header {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           margin-bottom: 18px;
//         }


//         .ad-google-icon {
//           width: 32px;
//           height: 32px;

//           border-radius: 50%;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           background: white;

//           color: #4285f4;

//           font-weight: bold;

//           font-size: 17px;
//         }


//         .ad-header-text {
//           flex: 1;
//         }


//         .ad-header-text strong {
//           display: block;

//           font-size: 12px;
//         }


//         .ad-header-text small {
//           color: #777;

//           font-size: 9px;
//         }


//         .ad-title {
//           font-size: 17px;

//           margin-bottom: 8px;
//         }


//         .ad-url {
//           color: #34a853;

//           font-size: 10px;

//           margin-bottom: 15px;
//         }


//         .ad-description {
//           color: #858592;

//           font-size: 10px;

//           line-height: 1.7;
//         }


//         .ad-metrics {
//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 8px;

//           margin-top: 20px;
//         }


//         .metric {
//           padding: 10px;

//           border-radius: 10px;

//           background:
//             rgba(255,255,255,.04);

//           text-align: center;
//         }


//         .metric strong {
//           display: block;

//           color: #fff;

//           font-size: 13px;
//         }


//         .metric span {
//           color: #777;

//           font-size: 8px;
//         }


//         /* FLOATING TAGS */

//         .google-floating {
//           position: absolute;

//           padding: 9px 14px;

//           border-radius: 30px;

//           background:
//             rgba(255,255,255,.04);

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           backdrop-filter: blur(10px);

//           color: #999;

//           font-size: 9px;

//           animation:
//             tagFloat 4s ease-in-out infinite;
//         }


//         .google-tag-one {
//           top: 30px;
//           right: 10px;
//         }


//         .google-tag-two {
//           bottom: 30px;
//           left: 10px;

//           animation-delay: 1.5s;
//         }


//         .google-tag-three {
//           top: 120px;
//           left: 0;

//           animation-delay: 2.5s;
//         }


//         @keyframes tagFloat {

//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-13px);
//           }

//         }


//         /* =====================================================
//            INTRO
//         ===================================================== */

//         .google-intro {
//           padding: 100px 7%;

//           background: #05050b;

//           display: grid;

//           grid-template-columns:
//             1.2fr .8fr;

//           gap: 70px;
//         }


//         .google-mini-title {
//           color: #4285f4;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }


//         .google-intro h2 {
//           margin:
//             15px 0 25px;

//           font-size:
//             clamp(35px,5vw,58px);

//           line-height: 1.1;
//         }


//         .google-intro p {
//           color: #858592;

//           font-size: 14px;

//           line-height: 1.9;

//           max-width: 650px;
//         }


//         .google-intro-stats {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 15px;
//         }


//         .google-stat {
//           padding: 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .3s;
//         }


//         .google-stat:hover {
//           transform: translateX(10px);

//           border-color:
//             rgba(66,133,244,.4);
//         }


//         .google-stat strong {
//           display: block;

//           color: #4285f4;

//           font-size: 25px;

//           margin-bottom: 5px;
//         }


//         .google-stat span {
//           color: #aaa;

//           font-size: 12px;
//         }


//         /* =====================================================
//            SERVICES
//         ===================================================== */

//         .google-services {
//           padding: 100px 7%;
//         }


//         .google-heading {
//           text-align: center;

//           max-width: 650px;

//           margin:
//             0 auto 55px;
//         }


//         .google-heading span {
//           color: #4285f4;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }


//         .google-heading h2 {
//           margin: 15px 0;

//           font-size:
//             clamp(32px,5vw,52px);
//         }


//         .google-heading p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.8;
//         }


//         .google-service-grid {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 22px;
//         }


//         .google-service-card {
//           padding: 30px;

//           min-height: 230px;

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
//             googleCardFloat 5s ease-in-out infinite;
//         }


//         .google-service-card:nth-child(2) {
//           animation-delay: 1s;
//         }


//         .google-service-card:nth-child(3) {
//           animation-delay: 2s;
//         }


//         @keyframes googleCardFloat {

//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }

//         }


//         .google-service-card:hover {
//           transform:
//             translateY(-12px)
//             scale(1.02);

//           border-color:
//             rgba(66,133,244,.4);

//           box-shadow:
//             0 20px 50px
//             rgba(30,80,200,.15);
//         }


//         .google-icon {
//           width: 48px;
//           height: 48px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           background:
//             rgba(66,133,244,.1);

//           font-size: 22px;

//           margin-bottom: 20px;
//         }


//         .google-service-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 18px;
//         }


//         .google-service-card p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         /* =====================================================
//            CAMPAIGN TYPES
//         ===================================================== */

//         .campaign-section {
//           padding: 100px 7%;

//           background: #05050b;
//         }


//         .campaign-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 18px;
//         }


//         .campaign-card {
//           padding: 25px;

//           border-radius: 18px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .35s;
//         }


//         .campaign-card:hover {
//           transform:
//             translateY(-8px);

//           border-color:
//             rgba(66,133,244,.4);
//         }


//         .campaign-card span {
//           color: #4285f4;

//           font-size: 11px;
//         }


//         .campaign-card h3 {
//           margin:
//             20px 0 10px;

//           font-size: 17px;
//         }


//         .campaign-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* =====================================================
//            PROCESS
//         ===================================================== */

//         .google-process {
//           padding: 100px 7%;
//         }


//         .process-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 20px;
//         }


//         .process-card {
//           text-align: center;

//           padding: 25px;
//         }


//         .process-number {
//           width: 60px;
//           height: 60px;

//           margin: auto;

//           border-radius: 50%;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           background:
//             linear-gradient(
//               135deg,
//               #4285f4,
//               #9c4dff
//             );

//           box-shadow:
//             0 0 30px
//             rgba(66,133,244,.25);

//           font-size: 12px;

//           font-weight: bold;
//         }


//         .process-card h3 {
//           margin-top: 20px;

//           font-size: 16px;
//         }


//         .process-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* =====================================================
//            BENEFITS
//         ===================================================== */

//         .google-benefits {
//           padding: 100px 10%;

//           display: grid;

//           grid-template-columns:
//             1fr 1fr;

//           gap: 80px;

//           background:
//             radial-gradient(
//               circle at 20% 50%,
//               rgba(66,133,244,.12),
//               transparent 35%
//             ),
//             #05050b;
//         }


//         .google-benefits h2 {
//           margin:
//             15px 0 20px;

//           font-size:
//             clamp(35px,5vw,58px);
//         }


//         .google-benefits p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.9;

//           max-width: 550px;
//         }


//         .benefit-list {
//           display: flex;

//           flex-direction: column;

//           gap: 14px;

//           justify-content: center;
//         }


//         .benefit-list div {
//           padding: 18px;

//           border-radius: 12px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.06);

//           color: #ccc;

//           font-size: 13px;

//           transition: .3s;
//         }


//         .benefit-list div:hover {
//           transform:
//             translateX(8px);

//           border-color:
//             rgba(66,133,244,.4);
//         }


//         .benefit-list b {
//           color: #4285f4;

//           margin-right: 10px;
//         }


//         /* =====================================================
//            FAQ
//         ===================================================== */

//         .google-faq {
//           padding: 100px 7%;
//         }


//         .google-faq-container {
//           max-width: 850px;

//           margin: auto;
//         }


//         .google-faq details {
//           margin-bottom: 14px;

//           padding: 20px 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);
//         }


//         .google-faq summary {
//           cursor: pointer;

//           font-size: 14px;

//           font-weight: 600;
//         }


//         .google-faq details p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;

//           margin-top: 18px;
//         }


//         /* =====================================================
//            CTA
//         ===================================================== */

//         .google-cta {
//           margin: 70px 6%;

//           padding: 75px 30px;

//           text-align: center;

//           border-radius: 28px;

//           position: relative;

//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 50% 0%,
//               rgba(66,133,244,.2),
//               transparent 50%
//             ),
//             linear-gradient(
//               135deg,
//               #080812,
//               #0d0a18
//             );

//           border:
//             1px solid
//             rgba(66,133,244,.2);
//         }


//         .google-cta h2 {
//           position: relative;

//           font-size:
//             clamp(30px,4vw,50px);
//         }


//         .google-cta p {
//           position: relative;

//           color: #858592;

//           margin-top: 15px;
//         }


//         /* =====================================================
//            MOBILE
//         ===================================================== */

//         @media (max-width: 950px) {

//           .google-hero {
//             min-height: auto;

//             display: block;

//             padding:
//               110px 6% 70px;
//           }


//           .google-hero-content {
//             width: 100%;

//             text-align: center;
//           }


//           .google-description {
//             margin-left: auto;
//             margin-right: auto;
//           }


//           .google-visual {
//             position: relative;

//             right: auto;

//             width: 100%;

//             height: 370px;

//             margin-top: 45px;
//           }


//           .google-intro {
//             grid-template-columns: 1fr;
//           }


//           .google-service-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }


//           .campaign-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }


//           .process-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }


//           .google-benefits {
//             grid-template-columns: 1fr;
//           }

//         }


//         @media (max-width: 600px) {

//           .google-title {
//             font-size: 46px;
//           }


//           .google-description {
//             font-size: 13px;
//           }


//           .google-visual {
//             height: 310px;
//           }


//           .ad-orbit {
//             width: 260px;
//             height: 260px;
//           }


//           .ad-orbit-two {
//             width: 180px;
//             height: 180px;
//           }


//           .ad-card {
//             width: 240px;

//             padding: 18px;
//           }


//           .google-floating {
//             font-size: 8px;

//             padding: 7px 10px;
//           }


//           .google-service-grid,
//           .campaign-grid,
//           .process-grid {
//             grid-template-columns: 1fr;
//           }


//           .google-intro {
//             padding: 70px 5%;
//           }


//           .google-services,
//           .campaign-section,
//           .google-process,
//           .google-faq {
//             padding: 70px 5%;
//           }


//           .google-benefits {
//             padding: 70px 6%;
//           }


//           .google-cta {
//             margin:
//               40px 5%;

//             padding:
//               55px 20px;
//           }

//         }

//       `}</style>


//       <main className="google-page">


//         {/* =====================================================
//             HERO
//         ===================================================== */}

//         <section className="google-hero">

//           <div className="google-hero-content">

//             <div className="google-label">
//               GOOGLE ADS MANAGEMENT
//             </div>


//             <h1 className="google-title">

//               Get Clicks.
//               <br />

//               <span>
//                 Get Customers.
//               </span>

//             </h1>


//             <p className="google-description">

//               Turn search intent into measurable business
//               growth with highly targeted Google Ads
//               campaigns designed to reach the right
//               audience at the right moment.

//             </p>


          
// <Link
//   to="/contact"
//   className="google-button"
// >
//   Launch Your Campaign →
// </Link>
//           </div>


//           {/* ANIMATED VISUAL */}

//           <div className="google-visual">

//             <div className="google-floating google-tag-one">
//               HIGH INTENT
//             </div>

//             <div className="google-floating google-tag-two">
//               MORE CONVERSIONS
//             </div>

//             <div className="google-floating google-tag-three">
//               SMART TARGETING
//             </div>


//             <div className="ad-orbit"></div>

//             <div className="ad-orbit ad-orbit-two"></div>


//             <div className="ad-card">

//               <div className="ad-header">

//                 <div className="ad-google-icon">
//                   G
//                 </div>

//                 <div className="ad-header-text">

//                   <strong>
//                     Sponsored
//                   </strong>

//                   <small>
//                     Your Business
//                   </small>

//                 </div>

//               </div>


//               <div className="ad-title">
//                 Grow Your Business Online
//               </div>


//               <div className="ad-url">
//                 www.yourbusiness.com
//               </div>


//               <div className="ad-description">
//                 Reach more customers with powerful
//                 digital marketing solutions designed
//                 for measurable growth.
//               </div>


//               <div className="ad-metrics">

//                 <div className="metric">
//                   <strong>4.8%</strong>
//                   <span>CTR</span>
//                 </div>

//                 <div className="metric">
//                   <strong>3.2X</strong>
//                   <span>ROAS</span>
//                 </div>

//                 <div className="metric">
//                   <strong>+68%</strong>
//                   <span>Growth</span>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             INTRO
//         ===================================================== */}

//         <section className="google-intro">

//           <div>

//             <span className="google-mini-title">
//               PERFORMANCE MARKETING
//             </span>

//             <h2>
//               Put Your Business
//               In Front Of Ready-To-Buy Customers
//             </h2>

//             <p>
//               Google Ads allows your business to appear
//               when people are actively searching for the
//               products and services you provide.
//             </p>

//             <p>
//               We build targeted campaigns around your
//               business goals, carefully manage budgets
//               and continuously optimize performance to
//               improve your advertising results.
//             </p>

//           </div>


//           <div className="google-intro-stats">

//             <div className="google-stat">
//               <strong>01</strong>
//               <span>
//                 Target customers with high purchase intent
//               </span>
//             </div>

//             <div className="google-stat">
//               <strong>02</strong>
//               <span>
//                 Control your advertising budget
//               </span>
//             </div>

//             <div className="google-stat">
//               <strong>03</strong>
//               <span>
//                 Measure campaign performance
//               </span>
//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             SERVICES
//         ===================================================== */}

//         <section className="google-services">

//           <div className="google-heading">

//             <span>
//               WHAT WE MANAGE
//             </span>

//             <h2>
//               Complete Google Ads Services
//             </h2>

//             <p>
//               From campaign setup to continuous
//               optimization, we manage every important
//               part of your paid search strategy.
//             </p>

//           </div>


//           <div className="google-service-grid">

//             <div className="google-service-card">

//               <div className="google-icon">
//                 🔎
//               </div>

//               <h3>
//                 Search Ads
//               </h3>

//               <p>
//                 Reach customers actively searching for
//                 your products or services with highly
//                 targeted search campaigns.
//               </p>

//             </div>


//             <div className="google-service-card">

//               <div className="google-icon">
//                 🎯
//               </div>

//               <h3>
//                 Keyword Targeting
//               </h3>

//               <p>
//                 Identify valuable keywords and build
//                 campaigns around relevant search intent.
//               </p>

//             </div>


//             <div className="google-service-card">

//               <div className="google-icon">
//                 📊
//               </div>

//               <h3>
//                 Campaign Optimization
//               </h3>

//               <p>
//                 Continuously analyze campaign data and
//                 optimize bids, keywords and ad performance.
//               </p>

//             </div>


//             <div className="google-service-card">

//               <div className="google-icon">
//                 ✍️
//               </div>

//               <h3>
//                 Ad Copy
//               </h3>

//               <p>
//                 Create compelling ad messaging designed
//                 to attract attention and encourage clicks.
//               </p>

//             </div>


//             <div className="google-service-card">

//               <div className="google-icon">
//                 📈
//               </div>

//               <h3>
//                 Conversion Tracking
//               </h3>

//               <p>
//                 Track important actions and understand
//                 how campaigns contribute to business goals.
//               </p>

//             </div>


//             <div className="google-service-card">

//               <div className="google-icon">
//                 💰
//               </div>

//               <h3>
//                 Budget Management
//               </h3>

//               <p>
//                 Manage advertising budgets efficiently
//                 while focusing spend on valuable opportunities.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             CAMPAIGN TYPES
//         ===================================================== */}

//         <section className="campaign-section">

//           <div className="google-heading">

//             <span>
//               CAMPAIGN TYPES
//             </span>

//             <h2>
//               The Right Campaign
//               For Your Goal
//             </h2>

//           </div>


//           <div className="campaign-grid">

//             <div className="campaign-card">

//               <span>01</span>

//               <h3>
//                 Search Campaigns
//               </h3>

//               <p>
//                 Capture high-intent searches and
//                 connect with potential customers.
//               </p>

//             </div>


//             <div className="campaign-card">

//               <span>02</span>

//               <h3>
//                 Display Campaigns
//               </h3>

//               <p>
//                 Build awareness and reach audiences
//                 across Google's display network.
//               </p>

//             </div>


//             <div className="campaign-card">

//               <span>03</span>

//               <h3>
//                 Shopping Campaigns
//               </h3>

//               <p>
//                 Promote products to people searching
//                 for what you sell.
//               </p>

//             </div>


//             <div className="campaign-card">

//               <span>04</span>

//               <h3>
//                 Remarketing
//               </h3>

//               <p>
//                 Reconnect with visitors who have already
//                 interacted with your business.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             PROCESS
//         ===================================================== */}

//         <section className="google-process">

//           <div className="google-heading">

//             <span>
//               OUR PROCESS
//             </span>

//             <h2>
//               From Strategy
//               To Results
//             </h2>

//           </div>


//           <div className="process-grid">

//             <div className="process-card">

//               <div className="process-number">
//                 01
//               </div>

//               <h3>
//                 Research
//               </h3>

//               <p>
//                 Understand your audience, competitors,
//                 keywords and business goals.
//               </p>

//             </div>


//             <div className="process-card">

//               <div className="process-number">
//                 02
//               </div>

//               <h3>
//                 Build
//               </h3>

//               <p>
//                 Create targeted campaigns, ad groups,
//                 keywords and compelling advertisements.
//               </p>

//             </div>


//             <div className="process-card">

//               <div className="process-number">
//                 03
//               </div>

//               <h3>
//                 Optimize
//               </h3>

//               <p>
//                 Analyze performance and continuously
//                 improve campaign efficiency.
//               </p>

//             </div>


//             <div className="process-card">

//               <div className="process-number">
//                 04
//               </div>

//               <h3>
//                 Scale
//               </h3>

//               <p>
//                 Identify winning campaigns and
//                 opportunities for sustainable growth.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             BENEFITS
//         ===================================================== */}

//         <section className="google-benefits">

//           <div>

//             <span className="google-mini-title">
//               WHY GOOGLE ADS
//             </span>

//             <h2>
//               Turn Ad Spend
//               Into Opportunities
//             </h2>

//             <p>
//               The right paid advertising strategy can
//               help you reach potential customers faster,
//               generate qualified leads and create a
//               predictable growth channel.
//             </p>

//           </div>


//           <div className="benefit-list">

//             <div>
//               <b>✓</b>
//               Reach customers with strong search intent
//             </div>

//             <div>
//               <b>✓</b>
//               Generate targeted website traffic
//             </div>

//             <div>
//               <b>✓</b>
//               Measure campaign performance
//             </div>

//             <div>
//               <b>✓</b>
//               Control your advertising budget
//             </div>

//             <div>
//               <b>✓</b>
//               Optimize campaigns using real data
//             </div>

//           </div>

//         </section>


//         {/* =====================================================
//             FAQ
//         ===================================================== */}

//         <section className="google-faq">

//           <div className="google-heading">

//             <span>
//               FAQ
//             </span>

//             <h2>
//               Google Ads Questions?
//             </h2>

//           </div>


//           <div className="google-faq-container">

//             <details>

//               <summary>
//                 How does Google Ads work?
//               </summary>

//               <p>
//                 Google Ads allows businesses to show
//                 advertisements to people searching for
//                 relevant products or services.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 How much should I spend on Google Ads?
//               </summary>

//               <p>
//                 The right budget depends on your business,
//                 market, competition and campaign goals.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can Google Ads generate leads?
//               </summary>

//               <p>
//                 Yes. Well-targeted campaigns can bring
//                 relevant visitors and potential customers
//                 to your website or landing page.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can you manage existing campaigns?
//               </summary>

//               <p>
//                 Yes. Existing campaigns can be reviewed,
//                 optimized and improved based on their
//                 current performance.
//               </p>

//             </details>

//           </div>

//         </section>


//         {/* =====================================================
//             CTA
//         ===================================================== */}

//         <section className="google-cta">

//           <h2>
//             Ready To Grow With Google Ads?
//           </h2>

//           <p>
//             Let's build campaigns that put your
//             business in front of the right customers.
//           </p>

//          <Link
//   to="/contact"
//   className="google-button"
// >
//   Start Your Campaign →
// </Link>

//         </section>


//       </main>
//     </>
//   );
// }

// export default GoogleAds;
import React from "react";
import { Link } from "react-router-dom";

import {
  Search,

  // Target,
  BarChart,
  Edit,
  TrendingUp,
  AttachMoney,
  CheckCircle,
  ArrowForward,
  Google,
} from "@mui/icons-material";

function GoogleAds() {
  const services = [
    {
      icon: <Search />,
      title: "Search Ads",
      text: "Reach customers actively searching for your products or services with highly targeted search campaigns.",
    },
    {
    
      title: "Keyword Targeting",
      text: "Identify valuable keywords and build campaigns around relevant search intent.",
    },
    {
      icon: <BarChart />,
      title: "Campaign Optimization",
      text: "Continuously analyze campaign data and optimize bids, keywords and ad performance.",
    },
    {
      icon: <Edit />,
      title: "Ad Copy",
      text: "Create compelling ad messaging designed to attract attention and encourage clicks.",
    },
    {
      icon: <TrendingUp />,
      title: "Conversion Tracking",
      text: "Track important actions and understand how campaigns contribute to business goals.",
    },
    {
      icon: <AttachMoney />,
      title: "Budget Management",
      text: "Manage advertising budgets efficiently while focusing spend on valuable opportunities.",
    },
  ];

  const campaignTypes = [
    {
      number: "01",
      title: "Search Campaigns",
      text: "Capture high-intent searches and connect with potential customers.",
    },
    {
      number: "02",
      title: "Display Campaigns",
      text: "Build awareness and reach audiences across Google's display network.",
    },
    {
      number: "03",
      title: "Shopping Campaigns",
      text: "Promote products to people searching for what you sell.",
    },
    {
      number: "04",
      title: "Remarketing",
      text: "Reconnect with visitors who have already interacted with your business.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Research",
      text: "Understand your audience, competitors, keywords and business goals.",
    },
    {
      number: "02",
      title: "Build",
      text: "Create targeted campaigns, ad groups, keywords and compelling advertisements.",
    },
    {
      number: "03",
      title: "Optimize",
      text: "Analyze performance and continuously improve campaign efficiency.",
    },
    {
      number: "04",
      title: "Scale",
      text: "Identify winning campaigns and opportunities for sustainable growth.",
    },
  ];

  const benefits = [
    "Reach customers with strong search intent",
    "Generate targeted website traffic",
    "Measure campaign performance",
    "Control your advertising budget",
    "Optimize campaigns using real data",
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .google-page {
          min-height: 100vh;
          background: #030308;
          color: #ffffff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          transition: background 0.3s ease, color 0.3s ease;
        }

        .google-hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 120px 7% 80px;
          overflow: hidden;
        }

        .google-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          top: -180px;
          left: -150px;
          border-radius: 50%;
          background: #4285f4;
          filter: blur(150px);
          opacity: 0.13;
          animation: googleGlow 7s ease-in-out infinite alternate;
        }

        .google-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -150px;
          bottom: -150px;
          border-radius: 50%;
          background: #9c4dff;
          filter: blur(150px);
          opacity: 0.13;
          animation: googleGlowTwo 8s ease-in-out infinite alternate;
        }

        @keyframes googleGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(140px, 80px);
          }
        }

        @keyframes googleGlowTwo {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-120px, -80px);
          }
        }

        .google-hero-content {
          width: 55%;
          position: relative;
          z-index: 5;
          animation: googleContent 1s ease;
        }

        @keyframes googleContent {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .google-label {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(66, 133, 244, 0.35);
          background: rgba(66, 133, 244, 0.08);
          color: #65a0ff;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .google-title {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1.03;
           color: var(--meta-text);
        }

        .google-title span {
          background: linear-gradient(
            90deg,
            #4285f4,
            #8b5cf6,
            #ea4335,
            #fbbc05,
            #34a853
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: googleGradient 6s linear infinite;
        }

        @keyframes googleGradient {
          to {
            background-position: 300% center;
          }
        }

        .google-description {
          max-width: 620px;
          margin-top: 25px;
          color: #92929f;
          font-size: 15px;
          line-height: 1.9;
        }

        .google-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 30px;
          padding: 15px 25px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            100deg,
            #4285f4,
            #7b55ed,
            #a34dff
          );
          box-shadow: 0 0 30px rgba(66, 133, 244, 0.3);
          transition: 0.3s ease;
        }

        .google-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 45px rgba(66, 133, 244, 0.55);
        }

        .google-visual {
          position: absolute;
          right: 6%;
          width: 42%;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .ad-orbit {
          position: absolute;
          width: 350px;
          height: 350px;
          border: 1px dashed rgba(66, 133, 244, 0.25);
          border-radius: 50%;
          animation: adRotate 14s linear infinite;
        }

        .ad-orbit::before {
          content: "";
          position: absolute;
          width: 13px;
          height: 13px;
          top: 10px;
          left: 50%;
          border-radius: 50%;
          background: #4285f4;
          box-shadow: 0 0 25px #4285f4;
        }

        .ad-orbit-two {
          width: 260px;
          height: 260px;
          border-color: rgba(165, 80, 255, 0.25);
          animation: adRotateReverse 10s linear infinite;
        }

        .ad-orbit-two::before {
          background: #a855f7;
          box-shadow: 0 0 25px #a855f7;
          top: auto;
          bottom: 5px;
        }

        @keyframes adRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes adRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .ad-card {
          position: relative;
          width: 300px;
          padding: 22px;
          border-radius: 20px;
          background: rgba(13, 12, 23, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.55);
          animation: adFloat 3.5s ease-in-out infinite;
        }

        @keyframes adFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-18px);
          }
        }

        .ad-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .ad-google-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #4285f4;
        }

        .ad-google-icon svg {
          font-size: 22px;
        }

        .ad-header-text {
          flex: 1;
        }

        .ad-header-text strong {
          display: block;
          font-size: 12px;
        }

        .ad-header-text small {
          color: #777777;
          font-size: 9px;
        }

        .ad-title {
          font-size: 17px;
          margin-bottom: 8px;
        }

        .ad-url {
          color: #34a853;
          font-size: 10px;
          margin-bottom: 15px;
        }

        .ad-description {
          color: #858592;
          font-size: 10px;
          line-height: 1.7;
        }

        .ad-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 20px;
        }

        .metric {
          padding: 10px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          text-align: center;
        }

        .metric strong {
          display: block;
          color: #ffffff;
          font-size: 13px;
        }

        .metric span {
          color: #777777;
          font-size: 8px;
        }

        .google-floating {
          position: absolute;
          padding: 9px 14px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          color: #999999;
          font-size: 9px;
          animation: tagFloat 4s ease-in-out infinite;
        }

        .google-tag-one {
          top: 30px;
          right: 10px;
        }

        .google-tag-two {
          bottom: 30px;
          left: 10px;
          animation-delay: 1.5s;
        }

        .google-tag-three {
          top: 120px;
          left: 0;
          animation-delay: 2.5s;
        }

        @keyframes tagFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        .google-intro {
          padding: 100px 7%;
          background: #05050b;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 70px;
        }

        .google-mini-title {
          color: #4285f4;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .google-intro h2 {
          margin: 15px 0 25px;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.1;
        }

        .google-intro p {
          color: #858592;
          font-size: 14px;
          line-height: 1.9;
          max-width: 650px;
        }

        .google-intro-stats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
        }

        .google-stat {
          padding: 25px;
          border-radius: 15px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.3s ease;
        }

        .google-stat:hover {
          transform: translateX(10px);
          border-color: rgba(66, 133, 244, 0.4);
        }

        .google-stat strong {
          display: block;
          color: #4285f4;
          font-size: 25px;
          margin-bottom: 5px;
        }

        .google-stat span {
          color: #aaaaaa;
          font-size: 12px;
        }

        .google-services,
        .campaign-section,
        .google-process,
        .google-faq {
          padding: 100px 7%;
        }

        .google-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 55px;
        }

        .google-heading > span {
          color: #4285f4;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .google-heading h2 {
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 52px);
        }

        .google-heading p {
          color: #858592;
          font-size: 13px;
          line-height: 1.8;
        }

        .google-service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .google-service-card {
          padding: 30px;
          min-height: 230px;
          border-radius: 20px;
          background: linear-gradient(145deg, #12101b, #090b14);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.4s ease;
          animation: googleCardFloat 5s ease-in-out infinite;
        }

        .google-service-card:nth-child(2) {
          animation-delay: 1s;
        }

        .google-service-card:nth-child(3) {
          animation-delay: 2s;
        }

        @keyframes googleCardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .google-service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(66, 133, 244, 0.4);
          box-shadow: 0 20px 50px rgba(30, 80, 200, 0.15);
        }

        .google-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(66, 133, 244, 0.1);
          color: #65a0ff;
          margin-bottom: 20px;
        }

        .google-icon svg {
          font-size: 25px;
        }

        .google-service-card h3 {
          margin: 0 0 12px;
          font-size: 18px;
        }

        .google-service-card p {
          color: #858592;
          font-size: 12px;
          line-height: 1.8;
        }

        .campaign-section {
          background: #05050b;
        }

        .campaign-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .campaign-card {
          padding: 25px;
          border-radius: 18px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: 0.35s ease;
        }

        .campaign-card:hover {
          transform: translateY(-8px);
          border-color: rgba(66, 133, 244, 0.4);
        }

        .campaign-card > span {
          color: #4285f4;
          font-size: 11px;
        }

        .campaign-card h3 {
          margin: 20px 0 10px;
          font-size: 17px;
        }

        .campaign-card p {
          color: #858592;
          font-size: 11px;
          line-height: 1.8;
        }

        .process-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-card {
          text-align: center;
          padding: 25px;
        }

        .process-number {
          width: 60px;
          height: 60px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4285f4, #9c4dff);
          box-shadow: 0 0 30px rgba(66, 133, 244, 0.25);
          font-size: 12px;
          font-weight: bold;
        }

        .process-card h3 {
          margin-top: 20px;
          font-size: 16px;
        }

        .process-card p {
          color: #858592;
          font-size: 11px;
          line-height: 1.8;
        }

        .google-benefits {
          padding: 100px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(66, 133, 244, 0.12),
              transparent 35%
            ),
            #05050b;
        }

        .google-benefits h2 {
          margin: 15px 0 20px;
          font-size: clamp(35px, 5vw, 58px);
        }

        .google-benefits p {
          color: #858592;
          font-size: 13px;
          line-height: 1.9;
          max-width: 550px;
        }

        .benefit-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          justify-content: center;
        }

        .benefit-list div {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 18px;
          border-radius: 12px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #cccccc;
          font-size: 13px;
          transition: 0.3s ease;
        }

        .benefit-list div:hover {
          transform: translateX(8px);
          border-color: rgba(66, 133, 244, 0.4);
        }

        .benefit-list svg {
          color: #4285f4;
          font-size: 20px;
          flex-shrink: 0;
        }

        .google-faq-container {
          max-width: 850px;
          margin: auto;
        }

        .google-faq details {
          margin-bottom: 14px;
          padding: 20px 25px;
          border-radius: 15px;
          background: #0d0b15;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .google-faq summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        }

        .google-faq details p {
          color: #858592;
          font-size: 12px;
          line-height: 1.8;
          margin-top: 18px;
        }

        .google-cta {
          margin: 70px 6%;
          padding: 75px 30px;
          text-align: center;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(66, 133, 244, 0.2),
              transparent 50%
            ),
            linear-gradient(135deg, #080812, #0d0a18);
          border: 1px solid rgba(66, 133, 244, 0.2);
        }

        .google-cta h2 {
          position: relative;
          font-size: clamp(30px, 4vw, 50px);
        }

        .google-cta p {
          position: relative;
          color: #858592;
          margin-top: 15px;
        }

        /* LIGHT THEME */

        body.light-theme .google-page {
          background: #f6f8ff;
          color: #171725;
        }

        body.light-theme .google-intro,
        body.light-theme .campaign-section,
        body.light-theme .google-benefits {
          background: #eef2ff;
        }

        body.light-theme .google-description,
        body.light-theme .google-intro p,
        body.light-theme .google-heading p,
        body.light-theme .google-service-card p,
        body.light-theme .campaign-card p,
        body.light-theme .process-card p,
        body.light-theme .google-benefits p,
        body.light-theme .google-faq details p {
          color: #626579;
        }

        body.light-theme .google-service-card,
        body.light-theme .campaign-card,
        body.light-theme .google-stat,
        body.light-theme .benefit-list div,
        body.light-theme .google-faq details {
          background: #ffffff;
          border-color: rgba(20, 30, 70, 0.12);
          box-shadow: 0 10px 30px rgba(40, 50, 100, 0.06);
        }

        body.light-theme .google-service-card h3,
        body.light-theme .campaign-card h3,
        body.light-theme .process-card h3,
        body.light-theme .google-intro h2,
        body.light-theme .google-benefits h2,
        body.light-theme .google-heading h2,
        body.light-theme .google-cta h2 {
          color: #171725;
        }

        body.light-theme .google-stat span,
        body.light-theme .benefit-list div {
          color: #555b72;
        }

        body.light-theme .google-floating {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(20, 30, 70, 0.12);
          color: #555b72;
        }

        body.light-theme .google-cta {
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(66, 133, 244, 0.18),
              transparent 50%
            ),
            #ffffff;
          border-color: rgba(66, 133, 244, 0.25);
        }

        body.light-theme .google-faq summary {
          color: #171725;
        }

        body.light-theme .ad-card {
          background: rgba(255, 255, 255, 0.96);
          border-color: rgba(20, 30, 70, 0.12);
          box-shadow: 0 25px 70px rgba(40, 50, 100, 0.18);
        }

        body.light-theme .ad-title {
          color: #171725;
        }

        body.light-theme .metric {
          background: #f0f3ff;
        }

        body.light-theme .metric strong {
          color: #171725;
        }

        @media (max-width: 950px) {
          .google-hero {
            min-height: auto;
            display: block;
            padding: 110px 6% 70px;
          }

          .google-hero-content {
            width: 100%;
            text-align: center;
          }

          .google-description {
            margin-left: auto;
            margin-right: auto;
          }

          .google-visual {
            position: relative;
            right: auto;
            width: 100%;
            height: 370px;
            margin-top: 45px;
          }

          .google-intro,
          .google-benefits {
            grid-template-columns: 1fr;
          }

          .google-service-grid,
          .campaign-grid,
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .google-title {
            font-size: 46px;
          }

          .google-description {
            font-size: 13px;
          }

          .google-visual {
            height: 310px;
          }

          .ad-orbit {
            width: 260px;
            height: 260px;
          }

          .ad-orbit-two {
            width: 180px;
            height: 180px;
          }

          .ad-card {
            width: 240px;
            padding: 18px;
          }

          .google-floating {
            font-size: 8px;
            padding: 7px 10px;
          }

          .google-service-grid,
          .campaign-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .google-intro {
            padding: 70px 5%;
          }

          .google-services,
          .campaign-section,
          .google-process,
          .google-faq {
            padding: 70px 5%;
          }

          .google-benefits {
            padding: 70px 6%;
          }

          .google-cta {
            margin: 40px 5%;
            padding: 55px 20px;
          }
        }
      `}</style>

      <main className="google-page">
        <section className="google-hero">
          <div className="google-hero-content">
            <div className="google-label">GOOGLE ADS MANAGEMENT</div>

            <h1 className="google-title">
              Get Clicks.
              <br />
              <span>Get Customers.</span>
            </h1>

            <p className="google-description">
              Turn search intent into measurable business growth with highly
              targeted Google Ads campaigns designed to reach the right
              audience at the right moment.
            </p>

            <Link to="/contact" className="google-button">
              Launch Your Campaign
              <ArrowForward />
            </Link>
          </div>

          <div className="google-visual">
            <div className="google-floating google-tag-one">
              HIGH INTENT
            </div>

            <div className="google-floating google-tag-two">
              MORE CONVERSIONS
            </div>

            <div className="google-floating google-tag-three">
              SMART TARGETING
            </div>

            <div className="ad-orbit"></div>
            <div className="ad-orbit ad-orbit-two"></div>

            <div className="ad-card">
              <div className="ad-header">
                <div className="ad-google-icon">
                  <Google />
                </div>

                <div className="ad-header-text">
                  <strong>Sponsored</strong>
                  <small>Your Business</small>
                </div>
              </div>

              <div className="ad-title">Grow Your Business Online</div>

              <div className="ad-url">www.yourbusiness.com</div>

              <div className="ad-description">
                Reach more customers with powerful digital marketing solutions
                designed for measurable growth.
              </div>

              <div className="ad-metrics">
                <div className="metric">
                  <strong>4.8%</strong>
                  <span>CTR</span>
                </div>

                <div className="metric">
                  <strong>3.2X</strong>
                  <span>ROAS</span>
                </div>

                <div className="metric">
                  <strong>+68%</strong>
                  <span>Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="google-intro">
          <div>
            <span className="google-mini-title">
              PERFORMANCE MARKETING
            </span>

            <h2>
              Put Your Business In Front Of Ready-To-Buy Customers
            </h2>

            <p>
              Google Ads allows your business to appear when people are
              actively searching for the products and services you provide.
            </p>

            <p>
              We build targeted campaigns around your business goals, carefully
              manage budgets and continuously optimize performance to improve
              your advertising results.
            </p>
          </div>

          <div className="google-intro-stats">
            <div className="google-stat">
              <strong>01</strong>
              <span>Target customers with high purchase intent</span>
            </div>

            <div className="google-stat">
              <strong>02</strong>
              <span>Control your advertising budget</span>
            </div>

            <div className="google-stat">
              <strong>03</strong>
              <span>Measure campaign performance</span>
            </div>
          </div>
        </section>

        <section className="google-services">
          <div className="google-heading">
            <span>WHAT WE MANAGE</span>
            <h2>Complete Google Ads Services</h2>
            <p>
              From campaign setup to continuous optimization, we manage every
              important part of your paid search strategy.
            </p>
          </div>

          <div className="google-service-grid">
            {services.map((service) => (
              <div className="google-service-card" key={service.title}>
                <div className="google-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="campaign-section">
          <div className="google-heading">
            <span>CAMPAIGN TYPES</span>
            <h2>The Right Campaign For Your Goal</h2>
          </div>

          <div className="campaign-grid">
            {campaignTypes.map((campaign) => (
              <div className="campaign-card" key={campaign.number}>
                <span>{campaign.number}</span>

                <h3>{campaign.title}</h3>

                <p>{campaign.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="google-process">
          <div className="google-heading">
            <span>OUR PROCESS</span>
            <h2>From Strategy To Results</h2>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <div className="process-card" key={item.number}>
                <div className="process-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="google-benefits">
          <div>
            <span className="google-mini-title">WHY GOOGLE ADS</span>

            <h2>Turn Ad Spend Into Opportunities</h2>

            <p>
              The right paid advertising strategy can help you reach potential
              customers faster, generate qualified leads and create a
              predictable growth channel.
            </p>
          </div>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div key={benefit}>
                <CheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="google-faq">
          <div className="google-heading">
            <span>FAQ</span>
            <h2>Google Ads Questions?</h2>
          </div>

          <div className="google-faq-container">
            <details>
              <summary>How does Google Ads work?</summary>
              <p>
                Google Ads allows businesses to show advertisements to people
                searching for relevant products or services.
              </p>
            </details>

            <details>
              <summary>How much should I spend on Google Ads?</summary>
              <p>
                The right budget depends on your business, market, competition
                and campaign goals.
              </p>
            </details>

            <details>
              <summary>Can Google Ads generate leads?</summary>
              <p>
                Yes. Well-targeted campaigns can bring relevant visitors and
                potential customers to your website or landing page.
              </p>
            </details>

            <details>
              <summary>Can you manage existing campaigns?</summary>
              <p>
                Yes. Existing campaigns can be reviewed, optimized and
                improved based on their current performance.
              </p>
            </details>
          </div>
        </section>

        <section className="google-cta">
          <h2>Ready To Grow With Google Ads?</h2>

          <p>
            Let's build campaigns that put your business in front of the right
            customers.
          </p>

          <Link to="/contact" className="google-button">
            Start Your Campaign
            <ArrowForward />
          </Link>
        </section>
      </main>
    </>
  );
}

export default GoogleAds;