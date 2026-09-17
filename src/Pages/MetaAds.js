// // import React from "react";
// // import { Link } from "react-router-dom";

// // function MetaAds() {

// //   const services = [
// //     {
// //       icon: "📣",
// //       title: "Facebook Ads",
// //       text: "Reach your target audience with highly focused Facebook advertising campaigns."
// //     },
// //     {
// //       icon: "📸",
// //       title: "Instagram Ads",
// //       text: "Create scroll-stopping campaigns that connect your brand with the right audience."
// //     },
// //     {
// //       icon: "🎯",
// //       title: "Audience Targeting",
// //       text: "Reach people based on interests, behavior, demographics and online activity."
// //     },
// //     {
// //       icon: "🔁",
// //       title: "Retargeting",
// //       text: "Reconnect with people who already interacted with your website or social pages."
// //     },
// //     {
// //       icon: "🛍️",
// //       title: "Conversion Campaigns",
// //       text: "Turn social media traffic into leads, enquiries, purchases and real business results."
// //     },
// //     {
// //       icon: "📊",
// //       title: "Campaign Analytics",
// //       text: "Track clicks, reach, conversions and performance to continuously improve campaigns."
// //     }
// //   ];

// //   const process = [
// //     {
// //       number: "01",
// //       title: "Research",
// //       text: "Understand your audience, competitors, products and business objectives."
// //     },
// //     {
// //       number: "02",
// //       title: "Target",
// //       text: "Build highly relevant audiences based on interests, behavior and demographics."
// //     },
// //     {
// //       number: "03",
// //       title: "Create",
// //       text: "Develop engaging ad creatives and messaging designed to capture attention."
// //     },
// //     {
// //       number: "04",
// //       title: "Optimize",
// //       text: "Monitor campaign data and continuously optimize for better performance."
// //     }
// //   ];

// //   return (
// //     <>
// //       <style>{`

// //         * {
// //           box-sizing: border-box;
// //         }

// //         .meta-page {
// //           min-height: 100vh;
// //           color: white;

// //           background:
// //             radial-gradient(
// //               circle at 10% 10%,
// //               rgba(220, 45, 180, .16),
// //               transparent 30%
// //             ),
// //             radial-gradient(
// //               circle at 90% 30%,
// //               rgba(75, 90, 255, .16),
// //               transparent 30%
// //             ),
// //             #030308;

// //           font-family: Arial, Helvetica, sans-serif;

// //           overflow: hidden;
// //         }


// //         /* HERO */

// //         .meta-hero {
// //           position: relative;

// //           min-height: 650px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           text-align: center;

// //           overflow: hidden;

// //           padding: 90px 20px 80px;
// //         }


// //         .meta-bg-video {
// //           position: absolute;

// //           top: 50%;
// //           left: 50%;

// //           width: 100%;
// //           height: 100%;

// //           object-fit: cover;

// //           transform:
// //             translate(-50%, -50%);

// //           opacity: .42;

// //           z-index: 0;
// //         }


// //         .meta-video-overlay {
// //           position: absolute;

// //           inset: 0;

// //           z-index: 1;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               rgba(3,3,8,.95),
// //               rgba(3,3,8,.55),
// //               rgba(3,3,8,.92)
// //             );
// //         }


// //         .meta-glow {
// //           position: absolute;

// //           width: 450px;
// //           height: 450px;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #ff2ca8,
// //               #695cff
// //             );

// //           filter: blur(130px);

// //           opacity: .13;

// //           z-index: 1;

// //           animation:
// //             metaGlow 7s
// //             ease-in-out
// //             infinite alternate;
// //         }


// //         @keyframes metaGlow {

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


// //         .meta-hero-content {
// //           position: relative;

// //           z-index: 3;

// //           max-width: 900px;

// //           animation:
// //             metaHeroIn 1s ease;
// //         }


// //         @keyframes metaHeroIn {

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


// //         .meta-badge {
// //           display: inline-block;

// //           padding:
// //             9px 18px;

// //           margin-bottom: 22px;

// //           border-radius: 50px;

// //           color: #ff63bd;

// //           background:
// //             rgba(255,50,170,.08);

// //           border:
// //             1px solid
// //             rgba(255,80,190,.25);

// //           font-size: 11px;

// //           letter-spacing: 3px;
// //         }


// //         .meta-hero h1 {

// //           margin: 0;

// //           font-size:
// //             clamp(52px, 8vw, 105px);

// //           line-height: 1;

// //           font-weight: 800;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #ff2ca8,
// //               #7b61ff,
// //               #39a8ff,
// //               #ff2ca8
// //             );

// //           background-size: 300% auto;

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;

// //           animation:
// //             metaGradient 5s linear infinite;
// //         }


// //         @keyframes metaGradient {

// //           to {
// //             background-position:
// //               300% center;
// //           }

// //         }


// //         .meta-hero h2 {

// //           margin:
// //             25px 0 15px;

// //           font-size:
// //             clamp(25px, 4vw, 40px);
// //         }


// //         .meta-hero p {

// //           max-width: 680px;

// //           margin: auto;

// //           color: #92929f;

// //           font-size: 15px;

// //           line-height: 1.9;
// //         }


// //         .meta-buttons {

// //           display: flex;

// //           justify-content: center;

// //           gap: 12px;

// //           margin-top: 30px;
// //         }


// //         .meta-btn {

// //           padding:
// //             14px 25px;

// //           border-radius: 10px;

// //           text-decoration: none;

// //           color: white;

// //           font-size: 13px;

// //           transition: .3s ease;
// //         }


// //         .meta-primary {

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #ff2ca8,
// //               #675cff
// //             );
// //         }


// //         .meta-secondary {

// //           border:
// //             1px solid
// //             rgba(255,255,255,.12);

// //           background:
// //             rgba(255,255,255,.04);
// //         }


// //         .meta-btn:hover {

// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 30px
// //             rgba(220,50,180,.3);
// //         }


// //         /* CONTAINER */

// //         .meta-container {

// //           max-width: 1200px;

// //           margin: auto;

// //           padding:
// //             20px 25px;
// //         }


// //         .meta-title {

// //           text-align: center;

// //           margin-bottom: 45px;
// //         }


// //         .meta-label {

// //           color: #ff55b7;

// //           font-size: 11px;

// //           letter-spacing: 3px;

// //           margin-bottom: 12px;
// //         }


// //         .meta-title h2 {

// //           margin:
// //             0 0 12px;

// //           font-size:
// //             clamp(32px, 5vw, 48px);
// //         }


// //         .meta-title h2 span {

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #ff2ca8,
// //               #6b62ff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .meta-title p {

// //           color: #858592;

// //           font-size: 14px;
// //         }


// //         /* SERVICES */

// //         .meta-services {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(3, 1fr);

// //           gap: 20px;

// //           margin-bottom: 120px;
// //         }


// //         .meta-card {

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

// //           transition: .4s ease;

// //           animation:
// //             metaCardIn .7s ease both;
// //         }


// //         @keyframes metaCardIn {

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


// //         .meta-card:hover {

// //           transform:
// //             translateY(-9px);

// //           border-color:
// //             rgba(255,60,180,.4);

// //           box-shadow:
// //             0 25px 55px
// //             rgba(200,40,160,.13);
// //         }


// //         .meta-icon {

// //           width: 55px;
// //           height: 55px;

// //           display: flex;

// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 14px;

// //           font-size: 25px;

// //           background:
// //             rgba(255,50,170,.1);

// //           border:
// //             1px solid
// //             rgba(255,70,180,.18);

// //           margin-bottom: 22px;

// //           transition: .4s ease;
// //         }


// //         .meta-card:hover .meta-icon {

// //           transform:
// //             rotate(-7deg)
// //             scale(1.1);

// //           box-shadow:
// //             0 0 25px
// //             rgba(255,50,180,.2);
// //         }


// //         .meta-card h3 {

// //           margin:
// //             0 0 12px;

// //           font-size: 20px;
// //         }


// //         .meta-card p {

// //           margin: 0;

// //           color: #858592;

// //           font-size: 13px;

// //           line-height: 1.8;
// //         }


// //         /* PROCESS */

// //         .meta-process {

// //           margin-bottom: 120px;
// //         }


// //         .meta-process-grid {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 18px;
// //         }


// //         .meta-process-card {

// //           padding:
// //             28px 22px;

// //           border-radius: 18px;

// //           background:
// //             rgba(255,255,255,.035);

// //           border:
// //             1px solid
// //             rgba(255,255,255,.07);

// //           transition: .4s ease;
// //         }


// //         .meta-process-card:hover {

// //           transform:
// //             translateY(-7px);

// //           border-color:
// //             rgba(255,60,180,.3);
// //         }


// //         .meta-number {

// //           display: inline-flex;

// //           width: 42px;
// //           height: 42px;

// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #ff2ca8,
// //               #675cff
// //             );

// //           font-size: 11px;

// //           font-weight: bold;

// //           margin-bottom: 20px;
// //         }


// //         .meta-process-card h3 {

// //           margin:
// //             0 0 10px;

// //           font-size: 18px;
// //         }


// //         .meta-process-card p {

// //           margin: 0;

// //           color: #858592;

// //           font-size: 12px;

// //           line-height: 1.8;
// //         }


// //         /* STATS */

// //         .meta-stats {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 15px;

// //           margin-bottom: 110px;
// //         }


// //         .meta-stat {

// //           text-align: center;

// //           padding:
// //             28px 15px;

// //           border-radius: 16px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255,50,170,.08),
// //               rgba(100,80,255,.04)
// //             );

// //           border:
// //             1px solid
// //             rgba(255,70,180,.12);
// //         }


// //         .meta-stat strong {

// //           display: block;

// //           font-size: 30px;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #ff2ca8,
// //               #7770ff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .meta-stat span {

// //           display: block;

// //           margin-top: 7px;

// //           color: #858592;

// //           font-size: 11px;
// //         }


// //         /* CTA */

// //         .meta-cta {

// //           text-align: center;

// //           padding:
// //             70px 25px;

// //           margin-bottom: 70px;

// //           border-radius: 25px;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               rgba(255,45,170,.12),
// //               rgba(90,70,255,.08)
// //             );

// //           border:
// //             1px solid
// //             rgba(255,70,180,.2);
// //         }


// //         .meta-cta h2 {

// //           margin:
// //             0 0 15px;

// //           font-size:
// //             clamp(30px, 4vw, 45px);
// //         }


// //         .meta-cta p {

// //           max-width: 650px;

// //           margin:
// //             0 auto 28px;

// //           color: #92929f;

// //           font-size: 14px;

// //           line-height: 1.8;
// //         }


// //         .meta-cta a {

// //           display: inline-block;

// //           padding:
// //             14px 28px;

// //           color: white;

// //           text-decoration: none;

// //           border-radius: 10px;

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #ff2ca8,
// //               #675cff
// //             );

// //           font-size: 13px;

// //           font-weight: 600;

// //           transition: .3s ease;
// //         }


// //         .meta-cta a:hover {

// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 35px
// //             rgba(255,50,180,.35);
// //         }


// //         /* TABLET */

// //         @media (max-width: 950px) {

// //           .meta-services {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .meta-process-grid {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .meta-stats {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //         }


// //         /* MOBILE */

// //         @media (max-width: 600px) {

// //           .meta-hero {

// //             min-height: 600px;

// //             padding:
// //               70px 18px 60px;
// //           }


// //           .meta-bg-video {

// //             opacity: .32;
// //           }


// //           .meta-video-overlay {

// //             background:
// //               linear-gradient(
// //                 180deg,
// //                 rgba(3,3,8,.93),
// //                 rgba(3,3,8,.62),
// //                 rgba(3,3,8,.96)
// //               );
// //           }


// //           .meta-hero h1 {

// //             font-size: 55px;
// //           }


// //           .meta-hero h2 {

// //             font-size: 23px;
// //           }


// //           .meta-hero p {

// //             font-size: 14px;
// //           }


// //           .meta-buttons {

// //             flex-direction: column;

// //             max-width: 260px;

// //             margin:
// //               28px auto 0;
// //           }


// //           .meta-container {

// //             padding:
// //               15px 16px;
// //           }


// //           .meta-services {

// //             grid-template-columns: 1fr;

// //             gap: 15px;

// //             margin-bottom: 80px;
// //           }


// //           .meta-card {

// //             min-height: 240px;

// //             padding: 25px;
// //           }


// //           .meta-process-grid {

// //             grid-template-columns: 1fr;
// //           }


// //           .meta-stats {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }


// //           .meta-stat strong {

// //             font-size: 25px;
// //           }


// //           .meta-cta {

// //             padding:
// //               50px 20px;
// //           }

// //         }

// //       `}</style>


// //       <section className="meta-page">

// //         {/* HERO */}

// //         <div className="meta-hero">

// //           <video
// //             className="meta-bg-video"
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //           >
// //             <source
// //               src="/videos/meta-ads.mp4"
// //               type="video/mp4"
// //             />
// //           </video>


// //           <div className="meta-video-overlay"></div>

// //           <div className="meta-glow"></div>


// //           <div className="meta-hero-content">

// //             <div className="meta-badge">
// //               ✦ META ADS
// //             </div>


// //             <h1>
// //               Meta Ads
// //             </h1>


// //             <h2>
// //               Stop The Scroll.
// //               <br />
// //               Start The Conversation.
// //             </h2>


// //             <p>
// //               Reach the right audience across
// //               Facebook and Instagram with creative,
// //               targeted and performance-driven
// //               advertising campaigns.
// //             </p>


// //             <div className="meta-buttons">

// //               <Link
// //                 to="/contact"
// //                 className="meta-btn meta-primary"
// //               >
// //                 Start Your Campaign →
// //               </Link>


// //               <Link
// //                 to="/services"
// //                 className="meta-btn meta-secondary"
// //               >
// //                 View All Services
// //               </Link>

// //             </div>

// //           </div>

// //         </div>


// //         <div className="meta-container">

// //           <div className="meta-title">

// //             <div className="meta-label">
// //               OUR META ADS EXPERTISE
// //             </div>

// //             <h2>
// //               Social Advertising That
// //               <span> Gets Attention</span>
// //             </h2>

// //             <p>
// //               Creative campaigns designed to reach,
// //               engage and convert your audience.
// //             </p>

// //           </div>


// //           <div className="meta-services">

// //             {services.map((service) => (

// //               <div
// //                 className="meta-card"
// //                 key={service.title}
// //               >

// //                 <div className="meta-icon">
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


// //           <div className="meta-process">

// //             <div className="meta-title">

// //               <div className="meta-label">
// //                 OUR PROCESS
// //               </div>

// //               <h2>
// //                 From Attention To
// //                 <span> Action</span>
// //               </h2>

// //             </div>


// //             <div className="meta-process-grid">

// //               {process.map((item) => (

// //                 <div
// //                   className="meta-process-card"
// //                   key={item.number}
// //                 >

// //                   <div className="meta-number">
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


// //           <div className="meta-stats">

// //             <div className="meta-stat">
// //               <strong>FB</strong>
// //               <span>Audience Reach</span>
// //             </div>

// //             <div className="meta-stat">
// //               <strong>IG</strong>
// //               <span>Visual Engagement</span>
// //             </div>

// //             <div className="meta-stat">
// //               <strong>ROI</strong>
// //               <span>Performance Focus</span>
// //             </div>

// //             <div className="meta-stat">
// //               <strong>DATA</strong>
// //               <span>Driven Optimization</span>
// //             </div>

// //           </div>


// //           <div className="meta-cta">

// //             <h2>
// //               Ready To Make Your Brand
// //               Unmissable?
// //             </h2>

// //             <p>
// //               Let's create Meta Ads campaigns
// //               that turn attention into meaningful
// //               business results.
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

// // export default MetaAds;
// import React from "react";
// import { Link } from "react-router-dom";
// function MetaAds() {
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .meta-page {
//           min-height: 100vh;
//           background: #030308;
//           color: #fff;
//           font-family: Arial, sans-serif;
//           overflow: hidden;
//         }

//         /* ================= HERO ================= */

//         .meta-hero {
//           min-height: 90vh;
//           position: relative;

//           display: flex;
//           align-items: center;

//           padding: 120px 7% 80px;

//           overflow: hidden;
//         }

//         .meta-hero::before {
//           content: "";

//           position: absolute;

//           width: 550px;
//           height: 550px;

//           left: -200px;
//           top: -180px;

//           border-radius: 50%;

//           background: #1877f2;

//           filter: blur(160px);

//           opacity: .15;

//           animation:
//             metaGlow 7s ease-in-out infinite alternate;
//         }

//         .meta-hero::after {
//           content: "";

//           position: absolute;

//           width: 500px;
//           height: 500px;

//           right: -180px;
//           bottom: -180px;

//           border-radius: 50%;

//           background: #e1306c;

//           filter: blur(160px);

//           opacity: .14;

//           animation:
//             metaGlow2 8s ease-in-out infinite alternate;
//         }

//         @keyframes metaGlow {

//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(130px,90px);
//           }

//         }

//         @keyframes metaGlow2 {

//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(-120px,-80px);
//           }

//         }

//         .meta-hero-content {
//           width: 55%;

//           position: relative;

//           z-index: 5;

//           animation:
//             metaContent 1s ease;
//         }

//         @keyframes metaContent {

//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }

//         }

//         .meta-label {
//           display: inline-block;

//           padding: 8px 16px;

//           border-radius: 30px;

//           border:
//             1px solid
//             rgba(225,48,108,.35);

//           background:
//             rgba(225,48,108,.08);

//           color: #e86b9a;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 22px;
//         }

//         .meta-title {
//           margin: 0;

//           font-size:
//             clamp(45px,6vw,78px);

//           line-height: 1.03;
//         }

//         .meta-title span {
//           background:
//             linear-gradient(
//               90deg,
//               #1877f2,
//               #8a3ffc,
//               #e1306c,
//               #f77737,
//               #ffcc70
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation:
//             metaGradient 6s linear infinite;
//         }

//         @keyframes metaGradient {

//           to {
//             background-position: 300% center;
//           }

//         }

//         .meta-description {
//           max-width: 620px;

//           margin-top: 25px;

//           color: #92929f;

//           font-size: 15px;

//           line-height: 1.9;
//         }

//         .meta-button {
//           display: inline-flex;

//           margin-top: 30px;

//           padding: 15px 25px;

//           border-radius: 12px;

//           color: #fff;

//           text-decoration: none;

//           font-size: 13px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #1877f2,
//               #8a3ffc,
//               #e1306c
//             );

//           box-shadow:
//             0 0 30px
//             rgba(225,48,108,.3);

//           transition: .3s;
//         }

//         .meta-button:hover {
//           transform:
//             translateY(-5px)
//             scale(1.03);

//           box-shadow:
//             0 0 45px
//             rgba(225,48,108,.55);
//         }


//         /* ================= VISUAL ================= */

//         .meta-visual {
//           position: absolute;

//           right: 5%;

//           width: 43%;
//           height: 460px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           z-index: 4;
//         }

//         .meta-ring {
//           position: absolute;

//           width: 360px;
//           height: 360px;

//           border:
//             1px dashed
//             rgba(138,63,252,.3);

//           border-radius: 50%;

//           animation:
//             metaRotate 14s linear infinite;
//         }

//         .meta-ring::before {
//           content: "";

//           position: absolute;

//           width: 13px;
//           height: 13px;

//           top: 15px;
//           left: 50%;

//           border-radius: 50%;

//           background: #8a3ffc;

//           box-shadow:
//             0 0 25px #8a3ffc;
//         }

//         .meta-ring-two {
//           width: 270px;
//           height: 270px;

//           border-color:
//             rgba(24,119,242,.3);

//           animation:
//             metaRotateReverse 10s linear infinite;
//         }

//         .meta-ring-two::before {
//           top: auto;
//           bottom: 5px;

//           background: #1877f2;

//           box-shadow:
//             0 0 25px #1877f2;
//         }

//         @keyframes metaRotate {

//           to {
//             transform: rotate(360deg);
//           }

//         }

//         @keyframes metaRotateReverse {

//           to {
//             transform: rotate(-360deg);
//           }

//         }


//         /* SOCIAL CARD */

//         .social-card {
//           position: relative;

//           width: 300px;

//           padding: 20px;

//           border-radius: 20px;

//           background:
//             rgba(13,12,23,.94);

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           backdrop-filter: blur(15px);

//           box-shadow:
//             0 25px 70px
//             rgba(0,0,0,.55);

//           animation:
//             socialFloat 4s ease-in-out infinite;
//         }

//         @keyframes socialFloat {

//           0%,100% {
//             transform:
//               translateY(0)
//               rotate(0deg);
//           }

//           50% {
//             transform:
//               translateY(-18px)
//               rotate(1deg);
//           }

//         }

//         .social-top {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           margin-bottom: 18px;
//         }

//         .meta-avatar {
//           width: 38px;
//           height: 38px;

//           border-radius: 50%;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           background:
//             linear-gradient(
//               135deg,
//               #1877f2,
//               #e1306c
//             );

//           font-size: 18px;
//         }

//         .social-user {
//           flex: 1;
//         }

//         .social-user strong {
//           display: block;

//           font-size: 12px;
//         }

//         .social-user small {
//           color: #777;

//           font-size: 9px;
//         }

//         .sponsored {
//           color: #777;

//           font-size: 9px;
//         }

//         .social-image {
//           height: 145px;

//           border-radius: 14px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           background:
//             linear-gradient(
//               135deg,
//               #1877f2,
//               #8a3ffc,
//               #e1306c
//             );

//           background-size: 200% 200%;

//           animation:
//             socialImage 5s ease infinite;
//         }

//         @keyframes socialImage {

//           0% {
//             background-position: 0% 50%;
//           }

//           50% {
//             background-position: 100% 50%;
//           }

//           100% {
//             background-position: 0% 50%;
//           }

//         }

//         .social-image span {
//           font-size: 45px;

//           animation:
//             socialIcon 2s ease-in-out infinite;
//         }

//         @keyframes socialIcon {

//           0%,100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.15);
//           }

//         }

//         .social-text {
//           margin-top: 15px;
//         }

//         .social-text strong {
//           font-size: 14px;
//         }

//         .social-text p {
//           color: #858592;

//           font-size: 10px;

//           line-height: 1.6;

//           margin-top: 7px;
//         }

//         .social-actions {
//           display: flex;

//           justify-content: space-between;

//           margin-top: 15px;

//           color: #777;

//           font-size: 11px;
//         }


//         /* FLOATING TAGS */

//         .meta-floating {
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
//             metaTagFloat 4s ease-in-out infinite;
//         }

//         .meta-tag-one {
//           top: 35px;
//           right: 5px;
//         }

//         .meta-tag-two {
//           bottom: 35px;
//           left: 5px;

//           animation-delay: 1.5s;
//         }

//         .meta-tag-three {
//           top: 120px;
//           left: 0;

//           animation-delay: 2.5s;
//         }

//         @keyframes metaTagFloat {

//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-13px);
//           }

//         }


//         /* ================= INTRO ================= */

//         .meta-intro {
//           padding: 100px 7%;

//           background: #05050b;

//           display: grid;

//           grid-template-columns:
//             1.2fr .8fr;

//           gap: 70px;
//         }

//         .meta-mini-title {
//           color: #e1306c;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .meta-intro h2 {
//           margin:
//             15px 0 25px;

//           font-size:
//             clamp(35px,5vw,58px);

//           line-height: 1.1;
//         }

//         .meta-intro p {
//           color: #858592;

//           font-size: 14px;

//           line-height: 1.9;

//           max-width: 650px;

//           margin-bottom: 15px;
//         }

//         .meta-stats {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 15px;
//         }

//         .meta-stat {
//           padding: 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .3s;
//         }

//         .meta-stat:hover {
//           transform: translateX(10px);

//           border-color:
//             rgba(225,48,108,.4);
//         }

//         .meta-stat strong {
//           display: block;

//           color: #e1306c;

//           font-size: 25px;

//           margin-bottom: 5px;
//         }

//         .meta-stat span {
//           color: #aaa;

//           font-size: 12px;
//         }


//         /* ================= SERVICES ================= */

//         .meta-services {
//           padding: 100px 7%;
//         }

//         .meta-heading {
//           text-align: center;

//           max-width: 680px;

//           margin:
//             0 auto 55px;
//         }

//         .meta-heading span {
//           color: #e1306c;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .meta-heading h2 {
//           margin: 15px 0;

//           font-size:
//             clamp(32px,5vw,52px);
//         }

//         .meta-heading p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.8;
//         }

//         .meta-service-grid {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 22px;
//         }

//         .meta-service-card {
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
//             metaCardFloat 5s ease-in-out infinite;
//         }

//         .meta-service-card:nth-child(2) {
//           animation-delay: .8s;
//         }

//         .meta-service-card:nth-child(3) {
//           animation-delay: 1.6s;
//         }

//         .meta-service-card:nth-child(4) {
//           animation-delay: 2.4s;
//         }

//         @keyframes metaCardFloat {

//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }

//         }

//         .meta-service-card:hover {
//           transform:
//             translateY(-12px)
//             scale(1.02);

//           border-color:
//             rgba(225,48,108,.4);

//           box-shadow:
//             0 20px 50px
//             rgba(225,48,108,.12);
//         }

//         .meta-icon {
//           width: 48px;
//           height: 48px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           background:
//             rgba(225,48,108,.1);

//           font-size: 22px;

//           margin-bottom: 20px;
//         }

//         .meta-service-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 18px;
//         }

//         .meta-service-card p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         /* ================= PLATFORMS ================= */

//         .meta-platforms {
//           padding: 100px 7%;

//           background: #05050b;
//         }

//         .platform-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 18px;
//         }

//         .platform-card {
//           padding: 28px;

//           border-radius: 18px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .35s;
//         }

//         .platform-card:hover {
//           transform:
//             translateY(-9px);

//           border-color:
//             rgba(138,63,252,.45);
//         }

//         .platform-card span {
//           font-size: 26px;
//         }

//         .platform-card h3 {
//           margin:
//             18px 0 10px;

//           font-size: 17px;
//         }

//         .platform-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= PROCESS ================= */

//         .meta-process {
//           padding: 100px 7%;
//         }

//         .meta-process-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 20px;
//         }

//         .meta-process-card {
//           text-align: center;

//           padding: 25px;
//         }

//         .meta-process-number {
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
//               #1877f2,
//               #e1306c
//             );

//           box-shadow:
//             0 0 30px
//             rgba(225,48,108,.25);

//           font-size: 12px;

//           font-weight: bold;
//         }

//         .meta-process-card h3 {
//           margin-top: 20px;

//           font-size: 16px;
//         }

//         .meta-process-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= BENEFITS ================= */

//         .meta-benefits {
//           padding: 100px 10%;

//           display: grid;

//           grid-template-columns:
//             1fr 1fr;

//           gap: 80px;

//           background:
//             radial-gradient(
//               circle at 20% 50%,
//               rgba(225,48,108,.1),
//               transparent 35%
//             ),
//             #05050b;
//         }

//         .meta-benefits h2 {
//           margin:
//             15px 0 20px;

//           font-size:
//             clamp(35px,5vw,58px);
//         }

//         .meta-benefits p {
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
//             rgba(225,48,108,.4);
//         }

//         .benefit-list b {
//           color: #e1306c;

//           margin-right: 10px;
//         }


//         /* ================= FAQ ================= */

//         .meta-faq {
//           padding: 100px 7%;
//         }

//         .meta-faq-container {
//           max-width: 850px;

//           margin: auto;
//         }

//         .meta-faq details {
//           margin-bottom: 14px;

//           padding: 20px 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);
//         }

//         .meta-faq summary {
//           cursor: pointer;

//           font-size: 14px;

//           font-weight: 600;
//         }

//         .meta-faq details p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;

//           margin-top: 18px;
//         }


//         /* ================= CTA ================= */

//         .meta-cta {
//           margin: 70px 6%;

//           padding: 75px 30px;

//           text-align: center;

//           border-radius: 28px;

//           position: relative;

//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 50% 0%,
//               rgba(225,48,108,.2),
//               transparent 50%
//             ),
//             linear-gradient(
//               135deg,
//               #080812,
//               #0d0a18
//             );

//           border:
//             1px solid
//             rgba(225,48,108,.2);
//         }

//         .meta-cta h2 {
//           position: relative;

//           font-size:
//             clamp(30px,4vw,50px);
//         }

//         .meta-cta p {
//           position: relative;

//           color: #858592;

//           margin-top: 15px;
//         }


//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 950px) {

//           .meta-hero {
//             min-height: auto;

//             display: block;

//             padding:
//               110px 6% 70px;
//           }

//           .meta-hero-content {
//             width: 100%;

//             text-align: center;
//           }

//           .meta-description {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .meta-visual {
//             position: relative;

//             right: auto;

//             width: 100%;

//             height: 370px;

//             margin-top: 45px;
//           }

//           .meta-intro {
//             grid-template-columns: 1fr;
//           }

//           .meta-service-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .platform-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .meta-process-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .meta-benefits {
//             grid-template-columns: 1fr;
//           }

//         }


//         @media (max-width: 600px) {

//           .meta-title {
//             font-size: 45px;
//           }

//           .meta-description {
//             font-size: 13px;
//           }

//           .meta-visual {
//             height: 310px;
//           }

//           .meta-ring {
//             width: 260px;
//             height: 260px;
//           }

//           .meta-ring-two {
//             width: 180px;
//             height: 180px;
//           }

//           .social-card {
//             width: 240px;

//             padding: 16px;
//           }

//           .social-image {
//             height: 120px;
//           }

//           .meta-floating {
//             font-size: 8px;

//             padding: 7px 10px;
//           }

//           .meta-service-grid,
//           .platform-grid,
//           .meta-process-grid {
//             grid-template-columns: 1fr;
//           }

//           .meta-intro {
//             padding: 70px 5%;
//           }

//           .meta-services,
//           .meta-platforms,
//           .meta-process,
//           .meta-faq {
//             padding: 70px 5%;
//           }

//           .meta-benefits {
//             padding: 70px 6%;
//           }

//           .meta-cta {
//             margin:
//               40px 5%;

//             padding:
//               55px 20px;
//           }

//         }

//       `}</style>


//       <main className="meta-page">

//         {/* ================= HERO ================= */}

//         <section className="meta-hero">

//           <div className="meta-hero-content">

//             <div className="meta-label">
//               META ADS MANAGEMENT
//             </div>

//             <h1 className="meta-title">

//               Stop Scrolling.
//               <br />

//               <span>
//                 Start Converting.
//               </span>

//             </h1>

//             <p className="meta-description">

//               Reach the right audience across Facebook
//               and Instagram with creative, data-driven
//               Meta Ads campaigns designed to increase
//               awareness, engagement, leads and sales.

//             </p>

            
// <Link
//   to="/contact"
//   className="meta-button"
// >
//   Start Your Campaign →
// </Link>
//           </div>


//           {/* ANIMATED SOCIAL MEDIA CARD */}

//           <div className="meta-visual">

//             <div className="meta-floating meta-tag-one">
//               TARGETED AUDIENCE
//             </div>

//             <div className="meta-floating meta-tag-two">
//               MORE ENGAGEMENT
//             </div>

//             <div className="meta-floating meta-tag-three">
//               BETTER CONVERSIONS
//             </div>


//             <div className="meta-ring"></div>

//             <div className="meta-ring meta-ring-two"></div>


//             <div className="social-card">

//               <div className="social-top">

//                 <div className="meta-avatar">
//                   f
//                 </div>

//                 <div className="social-user">

//                   <strong>
//                     Your Brand
//                   </strong>

//                   <small>
//                     Digital Marketing
//                   </small>

//                 </div>

//                 <span className="sponsored">
//                   Sponsored
//                 </span>

//               </div>


//               <div className="social-image">

//                 <span>
//                   ✨
//                 </span>

//               </div>


//               <div className="social-text">

//                 <strong>
//                   Grow Your Brand Online
//                 </strong>

//                 <p>
//                   Reach more people with creative
//                   campaigns built for your business.
//                 </p>

//               </div>


//               <div className="social-actions">

//                 <span>
//                   ♡ 2.8K
//                 </span>

//                 <span>
//                   💬 348
//                 </span>

//                 <span>
//                   ↗ 126
//                 </span>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* ================= INTRO ================= */}

//         <section className="meta-intro">

//           <div>

//             <span className="meta-mini-title">
//               SOCIAL MEDIA ADVERTISING
//             </span>

//             <h2>
//               Turn Attention
//               Into Action
//             </h2>

//             <p>
//               Your audience spends hours every day
//               scrolling through social media. Meta Ads
//               help your business appear directly in
//               front of the people most likely to care
//               about your products or services.
//             </p>

//             <p>
//               We combine audience research, creative
//               strategy, campaign optimization and
//               performance tracking to build advertising
//               campaigns that support real business goals.
//             </p>

//           </div>


//           <div className="meta-stats">

//             <div className="meta-stat">

//               <strong>
//                 01
//               </strong>

//               <span>
//                 Reach highly relevant audiences
//               </span>

//             </div>


//             <div className="meta-stat">

//               <strong>
//                 02
//               </strong>

//               <span>
//                 Create engaging social campaigns
//               </span>

//             </div>


//             <div className="meta-stat">

//               <strong>
//                 03
//               </strong>

//               <span>
//                 Track and optimize performance
//               </span>

//             </div>

//           </div>

//         </section>


//         {/* ================= SERVICES ================= */}

//         <section className="meta-services">

//           <div className="meta-heading">

//             <span>
//               WHAT WE DO
//             </span>

//             <h2>
//               Complete Meta Ads Services
//             </h2>

//             <p>
//               We manage the complete advertising
//               journey from strategy and creative
//               development to optimization and reporting.
//             </p>

//           </div>


//           <div className="meta-service-grid">

//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 🎯
//               </div>

//               <h3>
//                 Audience Targeting
//               </h3>

//               <p>
//                 Identify and target relevant audiences
//                 based on interests, behavior,
//                 demographics and business goals.
//               </p>

//             </div>


//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 🎨
//               </div>

//               <h3>
//                 Creative Strategy
//               </h3>

//               <p>
//                 Develop scroll-stopping creative ideas
//                 designed to capture attention and
//                 communicate your brand message.
//               </p>

//             </div>


//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 📱
//               </div>

//               <h3>
//                 Facebook Ads
//               </h3>

//               <p>
//                 Build targeted Facebook campaigns
//                 focused on awareness, traffic,
//                 engagement and conversions.
//               </p>

//             </div>


//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 📸
//               </div>

//               <h3>
//                 Instagram Ads
//               </h3>

//               <p>
//                 Reach Instagram audiences through
//                 visually engaging ads designed for
//                 modern social media behavior.
//               </p>

//             </div>


//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 🔁
//               </div>

//               <h3>
//                 Retargeting
//               </h3>

//               <p>
//                 Reconnect with people who previously
//                 interacted with your website,
//                 content or social profiles.
//               </p>

//             </div>


//             <div className="meta-service-card">

//               <div className="meta-icon">
//                 📊
//               </div>

//               <h3>
//                 Performance Optimization
//               </h3>

//               <p>
//                 Monitor campaign data and continuously
//                 optimize creatives, audiences and
//                 budgets for better performance.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= PLATFORMS ================= */}

//         <section className="meta-platforms">

//           <div className="meta-heading">

//             <span>
//               CAMPAIGN GOALS
//             </span>

//             <h2>
//               Campaigns Built For
//               Your Business Goal
//             </h2>

//           </div>


//           <div className="platform-grid">

//             <div className="platform-card">

//               <span>
//                 👁️
//               </span>

//               <h3>
//                 Brand Awareness
//               </h3>

//               <p>
//                 Introduce your brand to new audiences
//                 and build visibility.
//               </p>

//             </div>


//             <div className="platform-card">

//               <span>
//                 🚀
//               </span>

//               <h3>
//                 Website Traffic
//               </h3>

//               <p>
//                 Drive relevant visitors to your website
//                 and landing pages.
//               </p>

//             </div>


//             <div className="platform-card">

//               <span>
//                 💬
//               </span>

//               <h3>
//                 Engagement
//               </h3>

//               <p>
//                 Encourage people to interact with
//                 your content and brand.
//               </p>

//             </div>


//             <div className="platform-card">

//               <span>
//                 💰
//               </span>

//               <h3>
//                 Sales & Leads
//               </h3>

//               <p>
//                 Build campaigns focused on generating
//                 leads and business conversions.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= PROCESS ================= */}

//         <section className="meta-process">

//           <div className="meta-heading">

//             <span>
//               OUR PROCESS
//             </span>

//             <h2>
//               From Idea To Campaign
//             </h2>

//           </div>


//           <div className="meta-process-grid">

//             <div className="meta-process-card">

//               <div className="meta-process-number">
//                 01
//               </div>

//               <h3>
//                 Research
//               </h3>

//               <p>
//                 Understand your brand, audience,
//                 competitors and objectives.
//               </p>

//             </div>


//             <div className="meta-process-card">

//               <div className="meta-process-number">
//                 02
//               </div>

//               <h3>
//                 Create
//               </h3>

//               <p>
//                 Develop creative concepts and
//                 compelling advertising messages.
//               </p>

//             </div>


//             <div className="meta-process-card">

//               <div className="meta-process-number">
//                 03
//               </div>

//               <h3>
//                 Launch
//               </h3>

//               <p>
//                 Set up audiences, campaigns, budgets
//                 and conversion tracking.
//               </p>

//             </div>


//             <div className="meta-process-card">

//               <div className="meta-process-number">
//                 04
//               </div>

//               <h3>
//                 Optimize
//               </h3>

//               <p>
//                 Analyze results and improve campaign
//                 performance continuously.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= BENEFITS ================= */}

//         <section className="meta-benefits">

//           <div>

//             <span className="meta-mini-title">
//               WHY META ADS
//             </span>

//             <h2>
//               Make Your Brand
//               Impossible To Ignore
//             </h2>

//             <p>
//               Meta's social platforms give businesses
//               the opportunity to reach people through
//               creative experiences while they discover,
//               interact with and explore new brands.
//             </p>

//           </div>


//           <div className="benefit-list">

//             <div>
//               <b>✓</b>
//               Reach highly targeted audiences
//             </div>

//             <div>
//               <b>✓</b>
//               Build strong brand awareness
//             </div>

//             <div>
//               <b>✓</b>
//               Generate website traffic
//             </div>

//             <div>
//               <b>✓</b>
//               Generate leads and conversions
//             </div>

//             <div>
//               <b>✓</b>
//               Retarget interested visitors
//             </div>

//           </div>

//         </section>


//         {/* ================= FAQ ================= */}

//         <section className="meta-faq">

//           <div className="meta-heading">

//             <span>
//               FAQ
//             </span>

//             <h2>
//               Meta Ads Questions?
//             </h2>

//           </div>


//           <div className="meta-faq-container">

//             <details>

//               <summary>
//                 What are Meta Ads?
//               </summary>

//               <p>
//                 Meta Ads are paid advertising campaigns
//                 that can be used to reach audiences across
//                 Meta's social platforms.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can Meta Ads help generate leads?
//               </summary>

//               <p>
//                 Yes. Campaigns can be designed around
//                 lead generation goals and optimized based
//                 on campaign performance.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can you create the ad creatives?
//               </summary>

//               <p>
//                 Creative strategy and advertising content
//                 can be planned around your brand,
//                 audience and campaign objectives.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can you manage existing Meta campaigns?
//               </summary>

//               <p>
//                 Yes. Existing campaigns can be reviewed,
//                 analyzed and optimized based on their
//                 current performance.
//               </p>

//             </details>

//           </div>

//         </section>


//         {/* ================= CTA ================= */}

//         <section className="meta-cta">

//           <h2>
//             Ready To Grow On Social Media?
//           </h2>

//           <p>
//             Let's create Meta Ads that get attention,
//             engagement and results.
//           </p>

         
// <Link
//   to="/contact"
//   className="meta-button"
// >
//   Start Your Campaign →
// </Link>
//         </section>

//       </main>
//     </>
//   );
// }

// export default MetaAds;
import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaBullseye,
  FaPalette,

  FaRetweet,
  FaChartLine,
  FaEye,
  FaRocket,
  FaComments,
  FaMoneyBillWave,
  FaHeart,
  FaShare,
  FaCommentDots,
  FaArrowUp,
  FaCheck,
 
} from "react-icons/fa";

function MetaAds() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .meta-page {
          --meta-bg: #030308;
          --meta-section-bg: #05050b;
          --meta-card-bg: #0d0b15;
          --meta-card-bg-two: #12101b;
          --meta-text: #ffffff;
          --meta-muted: #858592;
          --meta-soft-text: #aaaaaa;
          --meta-border: rgba(255, 255, 255, 0.08);
          --meta-border-hover: rgba(225, 48, 108, 0.45);
          --meta-blue: #1877f2;
          --meta-purple: #8a3ffc;
          --meta-pink: #e1306c;
          --meta-orange: #f77737;
          --meta-yellow: #ffcc70;

          min-height: 100vh;
          background: var(--meta-bg);
          color: var(--meta-text);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        /*
          LIGHT THEME SUPPORT

          These selectors work if your Header uses:
          body.light-theme
          body.light
          data-theme="light"
        */

        body.light-theme .meta-page,
        body.light .meta-page,
        [data-theme="light"] .meta-page {
          --meta-bg: #f7f8fc;
          --meta-section-bg: #ffffff;
          --meta-card-bg: #ffffff;
          --meta-card-bg-two: #f1f3f9;
          --meta-text: #171827;
          --meta-muted: #626779;
          --meta-soft-text: #555b6d;
          --meta-border: rgba(20, 25,  fifty, 0.12);
          --meta-border-hover: rgba(225, 48, 108, 0.45);
        }

        .meta-page a {
          -webkit-tap-highlight-color: transparent;
        }

        /* ================= HERO ================= */

        .meta-hero {
          min-height: 90vh;
          position: relative;
          display: flex;
          align-items: center;
          padding: 120px 7% 80px;
          overflow: hidden;
          background: var(--meta-bg);
        }

        .meta-hero::before {
          content: "";
          position: absolute;
          width: 550px;
          height: 550px;
          left: -200px;
          top: -180px;
          border-radius: 50%;
          background: var(--meta-blue);
          filter: blur(160px);
          opacity: 0.15;
          animation: metaGlow 7s ease-in-out infinite alternate;
          pointer-events: none;
        }

        .meta-hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -180px;
          bottom: -180px;
          border-radius: 50%;
          background: var(--meta-pink);
          filter: blur(160px);
          opacity: 0.14;
          animation: metaGlowTwo 8s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes metaGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(130px, 90px);
          }
        }

        @keyframes metaGlowTwo {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-120px, -80px);
          }
        }

        .meta-hero-content {
          width: 55%;
          position: relative;
          z-index: 5;
          animation: metaContent 1s ease;
        }

        @keyframes metaContent {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .meta-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(225, 48, 108, 0.35);
          background: rgba(225, 48, 108, 0.08);
          color: #e86b9a;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .meta-title {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1.03;
          color: var(--meta-text);
        }

        .meta-title span {
          background: linear-gradient(
            90deg,
            var(--meta-blue),
            var(--meta-purple),
            var(--meta-pink),
            var(--meta-orange),
            var(--meta-yellow)
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: metaGradient 6s linear infinite;
        }

        @keyframes metaGradient {
          to {
            background-position: 300% center;
          }
        }

        .meta-description {
          max-width: 620px;
          margin-top: 25px;
          color: var(--meta-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .meta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
          padding: 15px 25px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            100deg,
            var(--meta-blue),
            var(--meta-purple),
            var(--meta-pink)
          );
          box-shadow: 0 0 30px rgba(225, 48, 108, 0.3);
          transition: 0.3s ease;
        }

        .meta-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 45px rgba(225, 48, 108, 0.55);
        }

        /* ================= VISUAL ================= */

        .meta-visual {
          position: absolute;
          right: 5%;
          width: 43%;
          height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .meta-ring {
          position: absolute;
          width: 360px;
          height: 360px;
          border: 1px dashed rgba(138, 63, 252, 0.3);
          border-radius: 50%;
          animation: metaRotate 14s linear infinite;
        }

        .meta-ring::before {
          content: "";
          position: absolute;
          width: 13px;
          height: 13px;
          top: 15px;
          left: 50%;
          border-radius: 50%;
          background: var(--meta-purple);
          box-shadow: 0 0 25px var(--meta-purple);
        }

        .meta-ring-two {
          width: 270px;
          height: 270px;
          border-color: rgba(24, 119, 242, 0.3);
          animation: metaRotateReverse 10s linear infinite;
        }

        .meta-ring-two::before {
          top: auto;
          bottom: 5px;
          background: var(--meta-blue);
          box-shadow: 0 0 25px var(--meta-blue);
        }

        @keyframes metaRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes metaRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .social-card {
          position: relative;
          width: 300px;
          padding: 20px;
          border-radius: 20px;
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
          animation: socialFloat 4s ease-in-out infinite;
        }

        @keyframes socialFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(1deg);
          }
        }

        .social-top {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .meta-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--meta-blue),
            var(--meta-pink)
          );
          font-size: 18px;
        }

        .social-user {
          flex: 1;
        }

        .social-user strong {
          display: block;
          color: var(--meta-text);
          font-size: 12px;
        }

        .social-user small,
        .sponsored {
          color: var(--meta-muted);
          font-size: 9px;
        }

        .social-image {
          height: 145px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--meta-blue),
            var(--meta-purple),
            var(--meta-pink)
          );
          background-size: 200% 200%;
          animation: socialImage 5s ease infinite;
        }

        @keyframes socialImage {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        .social-image svg {
          font-size: 45px;
          animation: socialIcon 2s ease-in-out infinite;
        }

        @keyframes socialIcon {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.15);
          }
        }

        .social-text {
          margin-top: 15px;
        }

        .social-text strong {
          color: var(--meta-text);
          font-size: 14px;
        }

        .social-text p {
          color: var(--meta-muted);
          font-size: 10px;
          line-height: 1.6;
          margin-top: 7px;
        }

        .social-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          color: var(--meta-muted);
          font-size: 11px;
        }

        .social-action {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        /* ================= FLOATING TAGS ================= */

        .meta-floating {
          position: absolute;
          padding: 9px 14px;
          border-radius: 30px;
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
          backdrop-filter: blur(10px);
          color: var(--meta-muted);
          font-size: 9px;
          animation: metaTagFloat 4s ease-in-out infinite;
        }

        .meta-tag-one {
          top: 35px;
          right: 5px;
        }

        .meta-tag-two {
          bottom: 35px;
          left: 5px;
          animation-delay: 1.5s;
        }

        .meta-tag-three {
          top: 120px;
          left: 0;
          animation-delay: 2.5s;
        }

        @keyframes metaTagFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        /* ================= INTRO ================= */

        .meta-intro {
          padding: 100px 7%;
          background: var(--meta-section-bg);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 70px;
        }

        .meta-mini-title {
          color: var(--meta-pink);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .meta-intro h2,
        .meta-benefits h2 {
          margin: 15px 0 25px;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.1;
          color: var(--meta-text);
        }

        .meta-intro p,
        .meta-benefits p {
          color: var(--meta-muted);
          font-size: 14px;
          line-height: 1.9;
          max-width: 650px;
          margin-bottom: 15px;
        }

        .meta-stats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
        }

        .meta-stat {
          padding: 25px;
          border-radius: 15px;
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
          transition: 0.3s ease;
        }

        .meta-stat:hover {
          transform: translateX(10px);
          border-color: var(--meta-border-hover);
        }

        .meta-stat strong {
          display: block;
          color: var(--meta-pink);
          font-size: 25px;
          margin-bottom: 5px;
        }

        .meta-stat span {
          color: var(--meta-muted);
          font-size: 12px;
        }

        /* ================= COMMON HEADINGS ================= */

        .meta-heading {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 55px;
        }

        .meta-heading > span {
          color: var(--meta-pink);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .meta-heading h2 {
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 52px);
          color: var(--meta-text);
        }

        .meta-heading p {
          color: var(--meta-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        /* ================= SERVICES ================= */

        .meta-services {
          padding: 100px 7%;
          background: var(--meta-bg);
        }

        .meta-service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .meta-service-card {
          padding: 30px;
          min-height: 230px;
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            var(--meta-card-bg-two),
            var(--meta-card-bg)
          );
          border: 1px solid var(--meta-border);
          transition: 0.4s ease;
          animation: metaCardFloat 5s ease-in-out infinite;
        }

        .meta-service-card:nth-child(2) {
          animation-delay: 0.8s;
        }

        .meta-service-card:nth-child(3) {
          animation-delay: 1.6s;
        }

        .meta-service-card:nth-child(4) {
          animation-delay: 2.4s;
        }

        @keyframes metaCardFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .meta-service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: var(--meta-border-hover);
          box-shadow: 0 20px 50px rgba(225, 48, 108, 0.12);
        }

        .meta-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(225, 48, 108, 0.1);
          color: var(--meta-pink);
          font-size: 22px;
          margin-bottom: 20px;
        }

        .meta-service-card h3,
        .platform-card h3,
        .meta-process-card h3 {
          color: var(--meta-text);
        }

        .meta-service-card h3 {
          margin: 0 0 12px;
          font-size: 18px;
        }

        .meta-service-card p,
        .platform-card p,
        .meta-process-card p {
          color: var(--meta-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        /* ================= PLATFORMS ================= */

        .meta-platforms {
          padding: 100px 7%;
          background: var(--meta-section-bg);
        }

        .platform-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .platform-card {
          padding: 28px;
          border-radius: 18px;
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
          transition: 0.35s ease;
        }

        .platform-card:hover {
          transform: translateY(-9px);
          border-color: rgba(138, 63, 252, 0.45);
        }

        .platform-card > svg {
          color: var(--meta-pink);
          font-size: 26px;
        }

        .platform-card h3 {
          margin: 18px 0 10px;
          font-size: 17px;
        }

        /* ================= PROCESS ================= */

        .meta-process {
          padding: 100px 7%;
          background: var(--meta-bg);
        }

        .meta-process-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .meta-process-card {
          text-align: center;
          padding: 25px;
        }

        .meta-process-number {
          width: 60px;
          height: 60px;
          margin: auto;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--meta-blue),
            var(--meta-pink)
          );
          box-shadow: 0 0 30px rgba(225, 48, 108, 0.25);
          font-size: 12px;
          font-weight: bold;
        }

        .meta-process-card h3 {
          margin-top: 20px;
          font-size: 16px;
        }

        /* ================= BENEFITS ================= */

        .meta-benefits {
          padding: 100px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(225, 48, 108, 0.1),
              transparent 35%
            ),
            var(--meta-section-bg);
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
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
          color: var(--meta-muted);
          font-size: 13px;
          transition: 0.3s ease;
        }

        .benefit-list div:hover {
          transform: translateX(8px);
          border-color: var(--meta-border-hover);
        }

        .benefit-list b {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--meta-pink);
        }

        /* ================= FAQ ================= */

        .meta-faq {
          padding: 100px 7%;
          background: var(--meta-bg);
        }

        .meta-faq-container {
          max-width: 850px;
          margin: auto;
        }

        .meta-faq details {
          margin-bottom: 14px;
          padding: 20px 25px;
          border-radius: 15px;
          background: var(--meta-card-bg);
          border: 1px solid var(--meta-border);
        }

        .meta-faq summary {
          cursor: pointer;
          color: var(--meta-text);
          font-size: 14px;
          font-weight: 600;
        }

        .meta-faq details p {
          color: var(--meta-muted);
          font-size: 12px;
          line-height: 1.8;
          margin-top: 18px;
        }

        /* ================= CTA ================= */

        .meta-cta {
          margin: 70px 6%;
          padding: 75px 30px;
          text-align: center;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(225, 48, 108, 0.2),
              transparent 50%
            ),
            linear-gradient(
              135deg,
              var(--meta-card-bg-two),
              var(--meta-card-bg)
            );
          border: 1px solid rgba(225, 48, 108, 0.2);
        }

        .meta-cta h2 {
          position: relative;
          color: var(--meta-text);
          font-size: clamp(30px, 4vw, 50px);
        }

        .meta-cta p {
          position: relative;
          color: var(--meta-muted);
          margin-top: 15px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 950px) {
          .meta-hero {
            min-height: auto;
            display: block;
            padding: 110px 6% 70px;
          }

          .meta-hero-content {
            width: 100%;
            text-align: center;
          }

          .meta-description {
            margin-left: auto;
            margin-right: auto;
          }

          .meta-visual {
            position: relative;
            right: auto;
            width: 100%;
            height: 370px;
            margin-top: 45px;
          }

          .meta-intro {
            grid-template-columns: 1fr;
          }

          .meta-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .meta-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .meta-benefits {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .meta-title {
            font-size: 45px;
          }

          .meta-description {
            font-size: 13px;
          }

          .meta-visual {
            height: 310px;
          }

          .meta-ring {
            width: 260px;
            height: 260px;
          }

          .meta-ring-two {
            width: 180px;
            height: 180px;
          }

          .social-card {
            width: 240px;
            padding: 16px;
          }

          .social-image {
            height: 120px;
          }

          .meta-floating {
            font-size: 8px;
            padding: 7px 10px;
          }

          .meta-service-grid,
          .platform-grid,
          .meta-process-grid {
            grid-template-columns: 1fr;
          }

          .meta-intro {
            padding: 70px 5%;
          }

          .meta-services,
          .meta-platforms,
          .meta-process,
          .meta-faq {
            padding: 70px 5%;
          }

          .meta-benefits {
            padding: 70px 6%;
          }

          .meta-cta {
            margin: 40px 5%;
            padding: 55px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .meta-page *,
          .meta-page *::before,
          .meta-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="meta-page">
        {/* ================= HERO ================= */}

        <section className="meta-hero">
          <div className="meta-hero-content">
            <div className="meta-label">
              <FaBullseye />
              META ADS MANAGEMENT
            </div>

            <h1 className="meta-title">
              Stop Scrolling.
              <br />
              <span>Start Converting.</span>
            </h1>

            <p className="meta-description">
              Reach the right audience across Facebook and Instagram with
              creative, data-driven Meta Ads campaigns designed to increase
              awareness, engagement, leads and sales.
            </p>

            <Link to="/contact" className="meta-button">
              Start Your Campaign <FaArrowUp />
            </Link>
          </div>

          <div className="meta-visual">
            <div className="meta-floating meta-tag-one">
              TARGETED AUDIENCE
            </div>

            <div className="meta-floating meta-tag-two">
              MORE ENGAGEMENT
            </div>

            <div className="meta-floating meta-tag-three">
              BETTER CONVERSIONS
            </div>

            <div className="meta-ring" />
            <div className="meta-ring meta-ring-two" />

            <div className="social-card">
              <div className="social-top">
                <div className="meta-avatar">
                  <FaFacebookF />
                </div>

                <div className="social-user">
                  <strong>Your Brand</strong>
                  <small>Digital Marketing</small>
                </div>

                <span className="sponsored">Sponsored</span>
              </div>

              <div className="social-image">
          
              </div>

              <div className="social-text">
                <strong>Grow Your Brand Online</strong>

                <p>
                  Reach more people with creative campaigns built for your
                  business.
                </p>
              </div>

              <div className="social-actions">
                <span className="social-action">
                  <FaHeart /> 2.8K
                </span>

                <span className="social-action">
                  <FaCommentDots /> 348
                </span>

                <span className="social-action">
                  <FaShare /> 126
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INTRO ================= */}

        <section className="meta-intro">
          <div>
            <span className="meta-mini-title">
              SOCIAL MEDIA ADVERTISING
            </span>

            <h2>
              Turn Attention
              <br />
              Into Action
            </h2>

            <p>
              Your audience spends hours every day scrolling through social
              media. Meta Ads help your business appear directly in front of
              the people most likely to care about your products or services.
            </p>

            <p>
              We combine audience research, creative strategy, campaign
              optimization and performance tracking to build advertising
              campaigns that support real business goals.
            </p>
          </div>

          <div className="meta-stats">
            <div className="meta-stat">
              <strong>01</strong>
              <span>Reach highly relevant audiences</span>
            </div>

            <div className="meta-stat">
              <strong>02</strong>
              <span>Create engaging social campaigns</span>
            </div>

            <div className="meta-stat">
              <strong>03</strong>
              <span>Track and optimize performance</span>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}

        <section className="meta-services">
          <div className="meta-heading">
            <span>WHAT WE DO</span>

            <h2>Complete Meta Ads Services</h2>

            <p>
              We manage the complete advertising journey from strategy and
              creative development to optimization and reporting.
            </p>
          </div>

          <div className="meta-service-grid">
            <div className="meta-service-card">
              <div className="meta-icon">
                <FaBullseye />
              </div>

              <h3>Audience Targeting</h3>

              <p>
                Identify and target relevant audiences based on interests,
                behavior, demographics and business goals.
              </p>
            </div>

            <div className="meta-service-card">
              <div className="meta-icon">
                <FaPalette />
              </div>

              <h3>Creative Strategy</h3>

              <p>
                Develop scroll-stopping creative ideas designed to capture
                attention and communicate your brand message.
              </p>
            </div>

            <div className="meta-service-card">
              <div className="meta-icon">
                <FaFacebookF />
              </div>

              <h3>Facebook Ads</h3>

              <p>
                Build targeted Facebook campaigns focused on awareness,
                traffic, engagement and conversions.
              </p>
            </div>

            <div className="meta-service-card">
              <div className="meta-icon">
                <FaInstagram />
              </div>

              <h3>Instagram Ads</h3>

              <p>
                Reach Instagram audiences through visually engaging ads
                designed for modern social media behavior.
              </p>
            </div>

            <div className="meta-service-card">
              <div className="meta-icon">
                <FaRetweet />
              </div>

              <h3>Retargeting</h3>

              <p>
                Reconnect with people who previously interacted with your
                website, content or social profiles.
              </p>
            </div>

            <div className="meta-service-card">
              <div className="meta-icon">
                <FaChartLine />
              </div>

              <h3>Performance Optimization</h3>

              <p>
                Monitor campaign data and continuously optimize creatives,
                audiences and budgets for better performance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PLATFORMS ================= */}

        <section className="meta-platforms">
          <div className="meta-heading">
            <span>CAMPAIGN GOALS</span>

            <h2>
              Campaigns Built For
              <br />
              Your Business Goal
            </h2>
          </div>

          <div className="platform-grid">
            <div className="platform-card">
              <FaEye />

              <h3>Brand Awareness</h3>

              <p>
                Introduce your brand to new audiences and build visibility.
              </p>
            </div>

            <div className="platform-card">
              <FaRocket />

              <h3>Website Traffic</h3>

              <p>
                Drive relevant visitors to your website and landing pages.
              </p>
            </div>

            <div className="platform-card">
              <FaComments />

              <h3>Engagement</h3>

              <p>
                Encourage people to interact with your content and brand.
              </p>
            </div>

            <div className="platform-card">
              <FaMoneyBillWave />

              <h3>Sales & Leads</h3>

              <p>
                Build campaigns focused on generating leads and business
                conversions.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PROCESS ================= */}

        <section className="meta-process">
          <div className="meta-heading">
            <span>OUR PROCESS</span>

            <h2>From Idea To Campaign</h2>
          </div>

          <div className="meta-process-grid">
            <div className="meta-process-card">
              <div className="meta-process-number">01</div>

              <h3>Research</h3>

              <p>
                Understand your brand, audience, competitors and objectives.
              </p>
            </div>

            <div className="meta-process-card">
              <div className="meta-process-number">02</div>

              <h3>Create</h3>

              <p>
                Develop creative concepts and compelling advertising
                messages.
              </p>
            </div>

            <div className="meta-process-card">
              <div className="meta-process-number">03</div>

              <h3>Launch</h3>

              <p>
                Set up audiences, campaigns, budgets and conversion tracking.
              </p>
            </div>

            <div className="meta-process-card">
              <div className="meta-process-number">04</div>

              <h3>Optimize</h3>

              <p>
                Analyze results and improve campaign performance
                continuously.
              </p>
            </div>
          </div>
        </section>

        {/* ================= BENEFITS ================= */}

        <section className="meta-benefits">
          <div>
            <span className="meta-mini-title">WHY META ADS</span>

            <h2>
              Make Your Brand
              <br />
              Impossible To Ignore
            </h2>

            <p>
              Meta's social platforms give businesses the opportunity to reach
              people through creative experiences while they discover,
              interact with and explore new brands.
            </p>
          </div>

          <div className="benefit-list">
            <div>
              <b>
                <FaCheck />
              </b>
              Reach highly targeted audiences
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Build strong brand awareness
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Generate website traffic
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Generate leads and conversions
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Retarget interested visitors
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="meta-faq">
          <div className="meta-heading">
            <span>FAQ</span>

            <h2>Meta Ads Questions?</h2>
          </div>

          <div className="meta-faq-container">
            <details>
              <summary>What are Meta Ads?</summary>

              <p>
                Meta Ads are paid advertising campaigns that can be used to
                reach audiences across Meta's social platforms.
              </p>
            </details>

            <details>
              <summary>Can Meta Ads help generate leads?</summary>

              <p>
                Yes. Campaigns can be designed around lead generation goals
                and optimized based on campaign performance.
              </p>
            </details>

            <details>
              <summary>Can you create the ad creatives?</summary>

              <p>
                Creative strategy and advertising content can be planned around
                your brand, audience and campaign objectives.
              </p>
            </details>

            <details>
              <summary>Can you manage existing Meta campaigns?</summary>

              <p>
                Yes. Existing campaigns can be reviewed, analyzed and
                optimized based on their current performance.
              </p>
            </details>
          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="meta-cta">
          <h2>Ready To Grow On Social Media?</h2>

          <p>
            Let's create Meta Ads that get attention, engagement and results.
          </p>

          <Link to="/contact" className="meta-button">
            Start Your Campaign <FaArrowUp />
          </Link>
        </section>
      </main>
    </>
  );
}

export default MetaAds;