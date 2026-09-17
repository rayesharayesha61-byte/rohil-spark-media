// // import React from "react";
// // import { Link } from "react-router-dom";

// // function SocialMedia() {

// //   const services = [
// //     {
// //       icon: "📱",
// //       title: "Social Media Management",
// //       text: "Manage your social presence with consistent, engaging and meaningful content."
// //     },
// //     {
// //       icon: "🎨",
// //       title: "Content Creation",
// //       text: "Create visually attractive posts, reels and stories that represent your brand."
// //     },
// //     {
// //       icon: "📅",
// //       title: "Content Strategy",
// //       text: "Build a clear content plan designed around your audience and business goals."
// //     },
// //     {
// //       icon: "💬",
// //       title: "Community Engagement",
// //       text: "Build relationships with your audience through meaningful conversations and interactions."
// //     },
// //     {
// //       icon: "🎥",
// //       title: "Reels & Short Videos",
// //       text: "Create engaging short-form videos designed to capture attention and increase reach."
// //     },
// //     {
// //       icon: "📈",
// //       title: "Social Analytics",
// //       text: "Track reach, engagement and growth to understand what works for your brand."
// //     }
// //   ];

// //   const process = [
// //     {
// //       number: "01",
// //       title: "Understand",
// //       text: "Learn about your brand, audience, competitors and communication style."
// //     },
// //     {
// //       number: "02",
// //       title: "Plan",
// //       text: "Create a customized content strategy and monthly social media calendar."
// //     },
// //     {
// //       number: "03",
// //       title: "Create",
// //       text: "Design engaging content, visuals, captions, reels and stories."
// //     },
// //     {
// //       number: "04",
// //       title: "Grow",
// //       text: "Measure performance and continuously improve your social presence."
// //     }
// //   ];

// //   return (
// //     <>
// //       <style>{`

// //         * {
// //           box-sizing: border-box;
// //         }

// //         .social-page {

// //           min-height: 100vh;

// //           color: white;

// //           background:
// //             radial-gradient(
// //               circle at 10% 10%,
// //               rgba(0, 210, 190, .13),
// //               transparent 30%
// //             ),
// //             radial-gradient(
// //               circle at 90% 30%,
// //               rgba(120, 50, 255, .16),
// //               transparent 30%
// //             ),
// //             #030308;

// //           font-family:
// //             Arial,
// //             Helvetica,
// //             sans-serif;

// //           overflow: hidden;
// //         }


// //         /* HERO */

// //         .social-hero {

// //           position: relative;

// //           min-height: 650px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;

// //           text-align: center;

// //           overflow: hidden;

// //           padding:
// //             90px 20px 80px;
// //         }


// //         .social-bg-video {

// //           position: absolute;

// //           top: 50%;
// //           left: 50%;

// //           width: 100%;
// //           height: 100%;

// //           object-fit: cover;

// //           transform:
// //             translate(-50%, -50%);

// //           opacity: .38;

// //           z-index: 0;
// //         }


// //         .social-video-overlay {

// //           position: absolute;

// //           inset: 0;

// //           z-index: 1;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               rgba(3,3,8,.95),
// //               rgba(3,3,8,.58),
// //               rgba(3,3,8,.92)
// //             );
// //         }


// //         .social-glow {

// //           position: absolute;

// //           width: 450px;
// //           height: 450px;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #00d9c5,
// //               #7855ff
// //             );

// //           filter: blur(130px);

// //           opacity: .13;

// //           z-index: 1;

// //           animation:
// //             socialGlow 7s
// //             ease-in-out
// //             infinite alternate;
// //         }


// //         @keyframes socialGlow {

// //           from {
// //             transform:
// //               translate(-110px, 20px)
// //               scale(.8);
// //           }

// //           to {
// //             transform:
// //               translate(110px, -30px)
// //               scale(1.2);
// //           }

// //         }


// //         .social-hero-content {

// //           position: relative;

// //           z-index: 3;

// //           max-width: 900px;

// //           animation:
// //             socialHeroIn 1s ease;
// //         }


// //         @keyframes socialHeroIn {

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


// //         .social-badge {

// //           display: inline-block;

// //           padding:
// //             9px 18px;

// //           margin-bottom: 22px;

// //           border-radius: 50px;

// //           color: #4de4d2;

// //           background:
// //             rgba(0,210,190,.08);

// //           border:
// //             1px solid
// //             rgba(0,220,200,.25);

// //           font-size: 11px;

// //           letter-spacing: 3px;
// //         }


// //         .social-hero h1 {

// //           margin: 0;

// //           font-size:
// //             clamp(48px, 8vw, 100px);

// //           line-height: 1;

// //           font-weight: 800;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #00e0cb,
// //               #7662ff,
// //               #36aaff,
// //               #00e0cb
// //             );

// //           background-size: 300% auto;

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;

// //           animation:
// //             socialGradient 5s
// //             linear
// //             infinite;
// //         }


// //         @keyframes socialGradient {

// //           to {
// //             background-position:
// //               300% center;
// //           }

// //         }


// //         .social-hero h2 {

// //           margin:
// //             25px 0 15px;

// //           font-size:
// //             clamp(25px, 4vw, 40px);
// //         }


// //         .social-hero p {

// //           max-width: 680px;

// //           margin: auto;

// //           color: #92929f;

// //           font-size: 15px;

// //           line-height: 1.9;
// //         }


// //         .social-buttons {

// //           display: flex;

// //           justify-content: center;

// //           gap: 12px;

// //           margin-top: 30px;
// //         }


// //         .social-btn {

// //           padding:
// //             14px 25px;

// //           border-radius: 10px;

// //           text-decoration: none;

// //           color: white;

// //           font-size: 13px;

// //           transition:
// //             .3s ease;
// //         }


// //         .social-primary {

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #00cdbb,
// //               #7658ff
// //             );
// //         }


// //         .social-secondary {

// //           border:
// //             1px solid
// //             rgba(255,255,255,.12);

// //           background:
// //             rgba(255,255,255,.04);
// //         }


// //         .social-btn:hover {

// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 30px
// //             rgba(50,210,190,.3);
// //         }


// //         /* CONTAINER */

// //         .social-container {

// //           max-width: 1200px;

// //           margin: auto;

// //           padding:
// //             20px 25px;
// //         }


// //         .social-title {

// //           text-align: center;

// //           margin-bottom: 45px;
// //         }


// //         .social-label {

// //           color: #38d9c8;

// //           font-size: 11px;

// //           letter-spacing: 3px;

// //           margin-bottom: 12px;
// //         }


// //         .social-title h2 {

// //           margin:
// //             0 0 12px;

// //           font-size:
// //             clamp(32px, 5vw, 48px);
// //         }


// //         .social-title h2 span {

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #00d9c5,
// //               #7662ff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .social-title p {

// //           color: #858592;

// //           font-size: 14px;
// //         }


// //         /* SERVICES */

// //         .social-services {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(3, 1fr);

// //           gap: 20px;

// //           margin-bottom: 120px;
// //         }


// //         .social-card {

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
// //             socialCardIn .7s ease both;
// //         }


// //         @keyframes socialCardIn {

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


// //         .social-card:hover {

// //           transform:
// //             translateY(-9px);

// //           border-color:
// //             rgba(0,210,190,.4);

// //           box-shadow:
// //             0 25px 55px
// //             rgba(0,180,170,.12);
// //         }


// //         .social-icon {

// //           width: 55px;
// //           height: 55px;

// //           display: flex;

// //           align-items: center;

// //           justify-content: center;

// //           border-radius: 14px;

// //           font-size: 25px;

// //           background:
// //             rgba(0,210,190,.1);

// //           border:
// //             1px solid
// //             rgba(0,220,200,.18);

// //           margin-bottom: 22px;

// //           transition:
// //             .4s ease;
// //         }


// //         .social-card:hover .social-icon {

// //           transform:
// //             rotate(-7deg)
// //             scale(1.1);

// //           box-shadow:
// //             0 0 25px
// //             rgba(0,220,200,.2);
// //         }


// //         .social-card h3 {

// //           margin:
// //             0 0 12px;

// //           font-size: 20px;
// //         }


// //         .social-card p {

// //           margin: 0;

// //           color: #858592;

// //           font-size: 13px;

// //           line-height: 1.8;
// //         }


// //         /* PROCESS */

// //         .social-process {

// //           margin-bottom: 120px;
// //         }


// //         .social-process-grid {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 18px;
// //         }


// //         .social-process-card {

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


// //         .social-process-card:hover {

// //           transform:
// //             translateY(-7px);

// //           border-color:
// //             rgba(0,210,190,.3);
// //         }


// //         .social-number {

// //           display: inline-flex;

// //           width: 42px;
// //           height: 42px;

// //           align-items: center;

// //           justify-content: center;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #00d9c5,
// //               #7658ff
// //             );

// //           font-size: 11px;

// //           font-weight: bold;

// //           margin-bottom: 20px;
// //         }


// //         .social-process-card h3 {

// //           margin:
// //             0 0 10px;

// //           font-size: 18px;
// //         }


// //         .social-process-card p {

// //           margin: 0;

// //           color: #858592;

// //           font-size: 12px;

// //           line-height: 1.8;
// //         }


// //         /* STATS */

// //         .social-stats {

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4, 1fr);

// //           gap: 15px;

// //           margin-bottom: 110px;
// //         }


// //         .social-stat {

// //           text-align: center;

// //           padding:
// //             28px 15px;

// //           border-radius: 16px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(0,210,190,.08),
// //               rgba(100,80,255,.04)
// //             );

// //           border:
// //             1px solid
// //             rgba(0,220,200,.12);
// //         }


// //         .social-stat strong {

// //           display: block;

// //           font-size: 30px;

// //           background:
// //             linear-gradient(
// //               90deg,
// //               #00d9c5,
// //               #7867ff
// //             );

// //           -webkit-background-clip: text;

// //           background-clip: text;

// //           color: transparent;
// //         }


// //         .social-stat span {

// //           display: block;

// //           margin-top: 7px;

// //           color: #858592;

// //           font-size: 11px;
// //         }


// //         /* CTA */

// //         .social-cta {

// //           text-align: center;

// //           padding:
// //             70px 25px;

// //           margin-bottom: 70px;

// //           border-radius: 25px;

// //           background:
// //             linear-gradient(
// //               110deg,
// //               rgba(0,210,190,.12),
// //               rgba(100,70,255,.08)
// //             );

// //           border:
// //             1px solid
// //             rgba(0,220,200,.2);
// //         }


// //         .social-cta h2 {

// //           margin:
// //             0 0 15px;

// //           font-size:
// //             clamp(30px, 4vw, 45px);
// //         }


// //         .social-cta p {

// //           max-width: 650px;

// //           margin:
// //             0 auto 28px;

// //           color: #92929f;

// //           font-size: 14px;

// //           line-height: 1.8;
// //         }


// //         .social-cta a {

// //           display: inline-block;

// //           padding:
// //             14px 28px;

// //           color: white;

// //           text-decoration: none;

// //           border-radius: 10px;

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #00cdbb,
// //               #7658ff
// //             );

// //           font-size: 13px;

// //           font-weight: 600;

// //           transition:
// //             .3s ease;
// //         }


// //         .social-cta a:hover {

// //           transform:
// //             translateY(-4px);

// //           box-shadow:
// //             0 0 35px
// //             rgba(0,210,190,.35);
// //         }


// //         /* TABLET */

// //         @media (max-width: 950px) {

// //           .social-services {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .social-process-grid {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //           .social-stats {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }

// //         }


// //         /* MOBILE */

// //         @media (max-width: 600px) {

// //           .social-hero {

// //             min-height: 600px;

// //             padding:
// //               70px 18px 60px;
// //           }


// //           .social-bg-video {

// //             opacity: .3;
// //           }


// //           .social-video-overlay {

// //             background:
// //               linear-gradient(
// //                 180deg,
// //                 rgba(3,3,8,.93),
// //                 rgba(3,3,8,.62),
// //                 rgba(3,3,8,.96)
// //               );
// //           }


// //           .social-hero h1 {

// //             font-size: 52px;
// //           }


// //           .social-hero h2 {

// //             font-size: 23px;
// //           }


// //           .social-hero p {

// //             font-size: 14px;
// //           }


// //           .social-buttons {

// //             flex-direction: column;

// //             max-width: 260px;

// //             margin:
// //               28px auto 0;
// //           }


// //           .social-container {

// //             padding:
// //               15px 16px;
// //           }


// //           .social-services {

// //             grid-template-columns: 1fr;

// //             gap: 15px;

// //             margin-bottom: 80px;
// //           }


// //           .social-card {

// //             min-height: 240px;

// //             padding: 25px;
// //           }


// //           .social-process-grid {

// //             grid-template-columns: 1fr;
// //           }


// //           .social-stats {

// //             grid-template-columns:
// //               repeat(2, 1fr);
// //           }


// //           .social-stat strong {

// //             font-size: 25px;
// //           }


// //           .social-cta {

// //             padding:
// //               50px 20px;
// //           }

// //         }

// //       `}</style>


// //       <section className="social-page">


// //         {/* HERO */}

// //         <div className="social-hero">

// //           <video
// //             className="social-bg-video"
// //             autoPlay
// //             muted
// //             loop
// //             playsInline
// //           >

// //             <source
// //               src="/videos/social-media.mp4"
// //               type="video/mp4"
// //             />

// //           </video>


// //           <div className="social-video-overlay"></div>


// //           <div className="social-glow"></div>


// //           <div className="social-hero-content">

// //             <div className="social-badge">
// //               ✦ SOCIAL MEDIA MARKETING
// //             </div>


// //             <h1>
// //               Social Media
// //             </h1>


// //             <h2>
// //               Be Seen.
// //               <br />
// //               Be Remembered.
// //             </h2>


// //             <p>
// //               Build a powerful social presence with
// //               creative content, meaningful engagement
// //               and strategies that help your brand grow.
// //             </p>


// //             <div className="social-buttons">

// //               <Link
// //                 to="/contact"
// //                 className="social-btn social-primary"
// //               >
// //                 Grow Your Brand →
// //               </Link>


// //               <Link
// //                 to="/services"
// //                 className="social-btn social-secondary"
// //               >
// //                 View All Services
// //               </Link>

// //             </div>

// //           </div>

// //         </div>


// //         <div className="social-container">


// //           <div className="social-title">

// //             <div className="social-label">
// //               OUR SOCIAL MEDIA EXPERTISE
// //             </div>


// //             <h2>
// //               Turn Followers Into
// //               <span> Fans</span>
// //             </h2>


// //             <p>
// //               Strategic content and creative storytelling
// //               built around your brand.
// //             </p>

// //           </div>


// //           <div className="social-services">

// //             {services.map((service) => (

// //               <div
// //                 className="social-card"
// //                 key={service.title}
// //               >

// //                 <div className="social-icon">
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


// //           <div className="social-process">

// //             <div className="social-title">

// //               <div className="social-label">
// //                 OUR PROCESS
// //               </div>


// //               <h2>
// //                 From Content To
// //                 <span> Community</span>
// //               </h2>

// //             </div>


// //             <div className="social-process-grid">

// //               {process.map((item) => (

// //                 <div
// //                   className="social-process-card"
// //                   key={item.number}
// //                 >

// //                   <div className="social-number">
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


// //           <div className="social-stats">

// //             <div className="social-stat">
// //               <strong>REACH</strong>
// //               <span>Audience Growth</span>
// //             </div>


// //             <div className="social-stat">
// //               <strong>ENGAGE</strong>
// //               <span>Community Building</span>
// //             </div>


// //             <div className="social-stat">
// //               <strong>CREATE</strong>
// //               <span>Creative Content</span>
// //             </div>


// //             <div className="social-stat">
// //               <strong>GROW</strong>
// //               <span>Brand Presence</span>
// //             </div>

// //           </div>


// //           <div className="social-cta">

// //             <h2>
// //               Ready To Grow Your
// //               Social Presence?
// //             </h2>


// //             <p>
// //               Let's create a social media strategy
// //               that makes your brand impossible to ignore.
// //             </p>


// //             <Link to="/contact">
// //               Start Growing With Us →
// //             </Link>

// //           </div>

// //         </div>

// //       </section>
// //     </>
// //   );
// // }

// // export default SocialMedia;
// import React from "react";
// import { Link } from "react-router-dom";
// function SocialMedia() {
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .social-page {
//           min-height: 100vh;
//           background: #030307;
//           color: #fff;
//           font-family: Arial, sans-serif;
//           overflow: hidden;
//         }

//         /* ================= HERO ================= */

//         .social-hero {
//           min-height: 90vh;
//           padding: 120px 7% 80px;
//           position: relative;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//         }

//         .social-hero::before {
//           content: "";
//           position: absolute;

//           width: 500px;
//           height: 500px;

//           left: -180px;
//           top: -180px;

//           border-radius: 50%;

//           background: #8b5cf6;

//           filter: blur(160px);

//           opacity: .16;

//           animation: socialGlow 7s infinite alternate;
//         }

//         .social-hero::after {
//           content: "";
//           position: absolute;

//           width: 450px;
//           height: 450px;

//           right: -180px;
//           bottom: -150px;

//           border-radius: 50%;

//           background: #06b6d4;

//           filter: blur(150px);

//           opacity: .13;

//           animation: socialGlow2 8s infinite alternate;
//         }

//         @keyframes socialGlow {
//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(130px,100px);
//           }
//         }

//         @keyframes socialGlow2 {
//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(-100px,-90px);
//           }
//         }

//         .social-hero-content {
//           width: 55%;
//           position: relative;
//           z-index: 5;

//           animation: socialHeroIn 1s ease;
//         }

//         @keyframes socialHeroIn {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .social-label {
//           display: inline-block;

//           padding: 8px 16px;

//           border-radius: 30px;

//           background: rgba(139,92,246,.08);

//           border: 1px solid rgba(139,92,246,.3);

//           color: #a78bfa;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 22px;
//         }

//         .social-title {
//           margin: 0;

//           font-size: clamp(45px,6vw,78px);

//           line-height: 1.03;
//         }

//         .social-title span {
//           background:
//             linear-gradient(
//               90deg,
//               #8b5cf6,
//               #ec4899,
//               #06b6d4,
//               #8b5cf6
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation: socialGradient 5s linear infinite;
//         }

//         @keyframes socialGradient {
//           to {
//             background-position: 300% center;
//           }
//         }

//         .social-description {
//           max-width: 620px;

//           margin-top: 25px;

//           color: #92929f;

//           font-size: 15px;

//           line-height: 1.9;
//         }

//         .social-button {
//           display: inline-flex;

//           margin-top: 30px;

//           padding: 15px 26px;

//           border-radius: 12px;

//           color: #fff;

//           text-decoration: none;

//           font-size: 13px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #8b5cf6,
//               #ec4899,
//               #06b6d4
//             );

//           box-shadow:
//             0 0 30px
//             rgba(139,92,246,.3);

//           transition: .3s;
//         }

//         .social-button:hover {
//           transform:
//             translateY(-5px)
//             scale(1.03);

//           box-shadow:
//             0 0 45px
//             rgba(139,92,246,.55);
//         }


//         /* ================= VISUAL ================= */

//         .social-visual {
//           position: absolute;

//           right: 5%;

//           width: 43%;

//           height: 470px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           z-index: 4;
//         }

//         .social-orbit {
//           position: absolute;

//           width: 380px;
//           height: 380px;

//           border-radius: 50%;

//           border: 1px dashed rgba(139,92,246,.3);

//           animation:
//             orbitRotate 14s linear infinite;
//         }

//         .social-orbit::before {
//           content: "";

//           position: absolute;

//           width: 12px;
//           height: 12px;

//           border-radius: 50%;

//           background: #8b5cf6;

//           box-shadow:
//             0 0 25px #8b5cf6;

//           top: 15px;

//           left: 50%;
//         }

//         .social-orbit-two {
//           width: 280px;
//           height: 280px;

//           border-color:
//             rgba(6,182,212,.3);

//           animation:
//             orbitReverse 10s linear infinite;
//         }

//         .social-orbit-two::before {
//           top: auto;
//           bottom: 8px;

//           background: #06b6d4;

//           box-shadow:
//             0 0 25px #06b6d4;
//         }

//         @keyframes orbitRotate {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes orbitReverse {
//           to {
//             transform: rotate(-360deg);
//           }
//         }


//         /* MAIN SOCIAL CARD */

//         .social-main-card {
//           width: 300px;

//           padding: 20px;

//           border-radius: 22px;

//           background:
//             rgba(14,13,25,.95);

//           border:
//             1px solid rgba(255,255,255,.1);

//           backdrop-filter: blur(15px);

//           box-shadow:
//             0 25px 70px
//             rgba(0,0,0,.55);

//           position: relative;

//           z-index: 5;

//           animation:
//             socialFloat 4s ease-in-out infinite;
//         }

//         @keyframes socialFloat {
//           0%,100% {
//             transform: translateY(0) rotate(0);
//           }

//           50% {
//             transform: translateY(-17px) rotate(1deg);
//           }
//         }

//         .social-profile {
//           display: flex;

//           align-items: center;

//           gap: 10px;

//           margin-bottom: 18px;
//         }

//         .social-avatar {
//           width: 40px;
//           height: 40px;

//           border-radius: 50%;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           font-size: 18px;

//           background:
//             linear-gradient(
//               135deg,
//               #8b5cf6,
//               #ec4899
//             );
//         }

//         .social-profile-text {
//           flex: 1;
//         }

//         .social-profile-text strong {
//           display: block;

//           font-size: 12px;
//         }

//         .social-profile-text small {
//           color: #777;

//           font-size: 9px;
//         }

//         .social-dots {
//           color: #777;
//         }

//         .social-post-image {
//           height: 160px;

//           border-radius: 15px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           background:
//             linear-gradient(
//               135deg,
//               #8b5cf6,
//               #ec4899,
//               #06b6d4
//             );

//           background-size: 250% 250%;

//           animation:
//             postGradient 5s ease infinite;
//         }

//         @keyframes postGradient {
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

//         .social-post-image span {
//           font-size: 50px;

//           animation:
//             socialEmoji 2s ease-in-out infinite;
//         }

//         @keyframes socialEmoji {
//           0%,100% {
//             transform: scale(1) rotate(0);
//           }

//           50% {
//             transform: scale(1.15) rotate(5deg);
//           }
//         }

//         .social-actions {
//           display: flex;

//           gap: 18px;

//           margin-top: 15px;

//           font-size: 11px;

//           color: #777;
//         }

//         .social-post-title {
//           margin-top: 13px;

//           font-size: 13px;

//           font-weight: 600;
//         }

//         .social-post-text {
//           margin-top: 6px;

//           color: #858592;

//           font-size: 10px;

//           line-height: 1.6;
//         }


//         /* FLOATING ELEMENTS */

//         .social-floating {
//           position: absolute;

//           padding: 9px 14px;

//           border-radius: 30px;

//           background:
//             rgba(255,255,255,.04);

//           border:
//             1px solid rgba(255,255,255,.08);

//           backdrop-filter: blur(10px);

//           color: #999;

//           font-size: 9px;

//           animation:
//             floatingTag 4s ease-in-out infinite;
//         }

//         .social-float-one {
//           top: 40px;
//           right: 0;
//         }

//         .social-float-two {
//           left: 0;
//           bottom: 45px;

//           animation-delay: 1.5s;
//         }

//         .social-float-three {
//           top: 125px;
//           left: 10px;

//           animation-delay: 2.5s;
//         }

//         @keyframes floatingTag {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-13px);
//           }
//         }


//         /* ================= INTRO ================= */

//         .social-intro {
//           padding: 100px 7%;

//           display: grid;

//           grid-template-columns:
//             1.1fr .9fr;

//           gap: 70px;

//           background: #05050b;
//         }

//         .social-mini-title {
//           color: #a78bfa;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .social-intro h2 {
//           margin:
//             15px 0 25px;

//           font-size:
//             clamp(35px,5vw,58px);

//           line-height: 1.1;
//         }

//         .social-intro p {
//           color: #858592;

//           font-size: 14px;

//           line-height: 1.9;

//           margin-bottom: 15px;
//         }

//         .social-intro-right {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 15px;
//         }

//         .social-intro-card {
//           padding: 24px;

//           border-radius: 16px;

//           background: #0d0b15;

//           border:
//             1px solid rgba(255,255,255,.07);

//           transition: .3s;
//         }

//         .social-intro-card:hover {
//           transform: translateX(10px);

//           border-color:
//             rgba(139,92,246,.4);
//         }

//         .social-intro-card strong {
//           display: block;

//           color: #a78bfa;

//           font-size: 23px;

//           margin-bottom: 6px;
//         }

//         .social-intro-card span {
//           color: #aaa;

//           font-size: 12px;
//         }


//         /* ================= SERVICES ================= */

//         .social-services {
//           padding: 100px 7%;
//         }

//         .social-heading {
//           max-width: 700px;

//           text-align: center;

//           margin:
//             0 auto 55px;
//         }

//         .social-heading span {
//           color: #a78bfa;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .social-heading h2 {
//           margin: 15px 0;

//           font-size:
//             clamp(32px,5vw,52px);
//         }

//         .social-heading p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.8;
//         }

//         .social-service-grid {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 22px;
//         }

//         .social-service-card {
//           padding: 30px;

//           min-height: 240px;

//           border-radius: 20px;

//           background:
//             linear-gradient(
//               145deg,
//               #12101b,
//               #090b14
//             );

//           border:
//             1px solid rgba(255,255,255,.07);

//           transition: .4s;

//           animation:
//             serviceMove 5s ease-in-out infinite;
//         }

//         .social-service-card:nth-child(2) {
//           animation-delay: .7s;
//         }

//         .social-service-card:nth-child(3) {
//           animation-delay: 1.4s;
//         }

//         .social-service-card:nth-child(4) {
//           animation-delay: 2.1s;
//         }

//         .social-service-card:nth-child(5) {
//           animation-delay: 2.8s;
//         }

//         .social-service-card:nth-child(6) {
//           animation-delay: 3.5s;
//         }

//         @keyframes serviceMove {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }
//         }

//         .social-service-card:hover {
//           transform:
//             translateY(-12px)
//             scale(1.02);

//           border-color:
//             rgba(139,92,246,.45);

//           box-shadow:
//             0 20px 50px
//             rgba(139,92,246,.12);
//         }

//         .social-service-icon {
//           width: 50px;
//           height: 50px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           background:
//             rgba(139,92,246,.1);

//           font-size: 22px;

//           margin-bottom: 20px;
//         }

//         .social-service-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 18px;
//         }

//         .social-service-card p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         /* ================= PLATFORMS ================= */

//         .social-platforms {
//           padding: 100px 7%;

//           background: #05050b;
//         }

//         .social-platform-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 18px;
//         }

//         .social-platform {
//           padding: 28px;

//           border-radius: 18px;

//           background: #0d0b15;

//           border:
//             1px solid rgba(255,255,255,.07);

//           transition: .35s;
//         }

//         .social-platform:hover {
//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(236,72,153,.4);
//         }

//         .social-platform-icon {
//           font-size: 28px;
//         }

//         .social-platform h3 {
//           margin:
//             18px 0 10px;

//           font-size: 17px;
//         }

//         .social-platform p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= PROCESS ================= */

//         .social-process {
//           padding: 100px 7%;
//         }

//         .social-process-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 20px;
//         }

//         .social-process-card {
//           text-align: center;

//           padding: 25px;
//         }

//         .social-number {
//           width: 60px;
//           height: 60px;

//           margin: auto;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background:
//             linear-gradient(
//               135deg,
//               #8b5cf6,
//               #ec4899,
//               #06b6d4
//             );

//           box-shadow:
//             0 0 30px
//             rgba(139,92,246,.25);

//           font-size: 12px;

//           font-weight: bold;
//         }

//         .social-process-card h3 {
//           margin-top: 20px;

//           font-size: 16px;
//         }

//         .social-process-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= BENEFITS ================= */

//         .social-benefits {
//           padding: 100px 10%;

//           display: grid;

//           grid-template-columns: 1fr 1fr;

//           gap: 80px;

//           background:
//             radial-gradient(
//               circle at 20% 50%,
//               rgba(139,92,246,.1),
//               transparent 35%
//             ),
//             #05050b;
//         }

//         .social-benefits h2 {
//           margin:
//             15px 0 20px;

//           font-size:
//             clamp(35px,5vw,58px);
//         }

//         .social-benefits p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.9;
//         }

//         .social-benefit-list {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 14px;
//         }

//         .social-benefit-list div {
//           padding: 18px;

//           border-radius: 12px;

//           background: #0d0b15;

//           border:
//             1px solid rgba(255,255,255,.06);

//           color: #ccc;

//           font-size: 13px;

//           transition: .3s;
//         }

//         .social-benefit-list div:hover {
//           transform: translateX(8px);

//           border-color:
//             rgba(139,92,246,.4);
//         }

//         .social-benefit-list b {
//           color: #a78bfa;

//           margin-right: 10px;
//         }


//         /* ================= FAQ ================= */

//         .social-faq {
//           padding: 100px 7%;
//         }

//         .social-faq-container {
//           max-width: 850px;

//           margin: auto;
//         }

//         .social-faq details {
//           margin-bottom: 14px;

//           padding: 20px 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid rgba(255,255,255,.07);
//         }

//         .social-faq summary {
//           cursor: pointer;

//           font-size: 14px;

//           font-weight: 600;
//         }

//         .social-faq details p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;

//           margin-top: 18px;
//         }


//         /* ================= CTA ================= */

//         .social-cta {
//           margin: 70px 6%;

//           padding: 75px 30px;

//           text-align: center;

//           border-radius: 28px;

//           position: relative;

//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 50% 0%,
//               rgba(139,92,246,.2),
//               transparent 50%
//             ),
//             linear-gradient(
//               135deg,
//               #080812,
//               #0d0a18
//             );

//           border:
//             1px solid rgba(139,92,246,.2);
//         }

//         .social-cta h2 {
//           position: relative;

//           font-size:
//             clamp(30px,4vw,50px);
//         }

//         .social-cta p {
//           position: relative;

//           color: #858592;

//           margin-top: 15px;
//         }


//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 950px) {

//           .social-hero {
//             min-height: auto;

//             display: block;

//             padding:
//               110px 6% 70px;
//           }

//           .social-hero-content {
//             width: 100%;

//             text-align: center;
//           }

//           .social-description {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .social-visual {
//             position: relative;

//             right: auto;

//             width: 100%;

//             height: 370px;

//             margin-top: 45px;
//           }

//           .social-intro {
//             grid-template-columns: 1fr;
//           }

//           .social-service-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .social-platform-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .social-process-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .social-benefits {
//             grid-template-columns: 1fr;
//           }

//         }


//         @media (max-width: 600px) {

//           .social-title {
//             font-size: 44px;
//           }

//           .social-description {
//             font-size: 13px;
//           }

//           .social-visual {
//             height: 310px;
//           }

//           .social-orbit {
//             width: 260px;
//             height: 260px;
//           }

//           .social-orbit-two {
//             width: 180px;
//             height: 180px;
//           }

//           .social-main-card {
//             width: 240px;

//             padding: 16px;
//           }

//           .social-post-image {
//             height: 120px;
//           }

//           .social-floating {
//             font-size: 8px;

//             padding: 7px 10px;
//           }

//           .social-service-grid,
//           .social-platform-grid,
//           .social-process-grid {
//             grid-template-columns: 1fr;
//           }

//           .social-intro {
//             padding: 70px 5%;
//           }

//           .social-services,
//           .social-platforms,
//           .social-process,
//           .social-faq {
//             padding: 70px 5%;
//           }

//           .social-benefits {
//             padding: 70px 6%;
//           }

//           .social-cta {
//             margin:
//               40px 5%;

//             padding:
//               55px 20px;
//           }

//         }

//       `}</style>


//       <main className="social-page">

//         {/* ================= HERO ================= */}

//         <section className="social-hero">

//           <div className="social-hero-content">

//             <div className="social-label">
//               SOCIAL MEDIA MARKETING
//             </div>

//             <h1 className="social-title">

//               Build Your
//               <br />

//               <span>
//                 Digital Presence.
//               </span>

//             </h1>

//             <p className="social-description">

//               We create engaging social media strategies
//               that help brands build communities, increase
//               visibility and turn followers into loyal
//               customers.

//             </p>

           
// <Link
//   to="/contact"
//    className="social-button"
// >
//     Grow Your Social Presence →
// </Link>
//           </div>


//           {/* ANIMATED VISUAL */}

//           <div className="social-visual">

//             <div className="social-floating social-float-one">
//               MORE ENGAGEMENT
//             </div>

//             <div className="social-floating social-float-two">
//               BRAND GROWTH
//             </div>

//             <div className="social-floating social-float-three">
//               CREATIVE CONTENT
//             </div>


//             <div className="social-orbit"></div>

//             <div className="social-orbit social-orbit-two"></div>


//             <div className="social-main-card">

//               <div className="social-profile">

//                 <div className="social-avatar">
//                   ✦
//                 </div>

//                 <div className="social-profile-text">

//                   <strong>
//                     Rohil Digital
//                   </strong>

//                   <small>
//                     Social Media
//                   </small>

//                 </div>

//                 <div className="social-dots">
//                   •••
//                 </div>

//               </div>


//               <div className="social-post-image">

//                 <span>
//                   ✨
//                 </span>

//               </div>


//               <div className="social-post-title">
//                 Your Brand. Your Story.
//               </div>

//               <div className="social-post-text">
//                 Creative content designed to connect
//                 your brand with the right audience.
//               </div>


//               <div className="social-actions">

//                 <span>
//                   ♡ 4.8K
//                 </span>

//                 <span>
//                   💬 682
//                 </span>

//                 <span>
//                   ↗ 245
//                 </span>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* ================= INTRO ================= */}

//         <section className="social-intro">

//           <div>

//             <span className="social-mini-title">
//               SOCIAL MEDIA STRATEGY
//             </span>

//             <h2>
//               More Than
//               Just Posting
//             </h2>

//             <p>
//               Social media is more than uploading posts.
//               It is about creating meaningful connections
//               between your brand and your audience.
//             </p>

//             <p>
//               We build social media strategies around
//               your business goals, audience interests
//               and brand identity to create consistent
//               digital experiences.
//             </p>

//           </div>


//           <div className="social-intro-right">

//             <div className="social-intro-card">

//               <strong>
//                 01
//               </strong>

//               <span>
//                 Build a recognizable brand presence
//               </span>

//             </div>


//             <div className="social-intro-card">

//               <strong>
//                 02
//               </strong>

//               <span>
//                 Increase audience engagement
//               </span>

//             </div>


//             <div className="social-intro-card">

//               <strong>
//                 03
//               </strong>

//               <span>
//                 Create consistent brand communication
//               </span>

//             </div>

//           </div>

//         </section>


//         {/* ================= SERVICES ================= */}

//         <section className="social-services">

//           <div className="social-heading">

//             <span>
//               OUR SERVICES
//             </span>

//             <h2>
//               Complete Social Media Solutions
//             </h2>

//             <p>
//               From strategy and content creation to
//               community management and analytics,
//               we handle your complete social media journey.
//             </p>

//           </div>


//           <div className="social-service-grid">

//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 🧠
//               </div>

//               <h3>
//                 Social Media Strategy
//               </h3>

//               <p>
//                 Create a clear social media strategy
//                 aligned with your brand goals and
//                 target audience.
//               </p>

//             </div>


//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 🎨
//               </div>

//               <h3>
//                 Content Creation
//               </h3>

//               <p>
//                 Create attractive and meaningful
//                 content that represents your brand
//                 professionally.
//               </p>

//             </div>


//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 📱
//               </div>

//               <h3>
//                 Social Media Management
//               </h3>

//               <p>
//                 Manage your social profiles with
//                 consistent posting, scheduling and
//                 audience engagement.
//               </p>

//             </div>


//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 💬
//               </div>

//               <h3>
//                 Community Management
//               </h3>

//               <p>
//                 Build relationships with your audience
//                 through comments, messages and
//                 meaningful interactions.
//               </p>

//             </div>


//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 📈
//               </div>

//               <h3>
//                 Performance Analytics
//               </h3>

//               <p>
//                 Track engagement, reach and audience
//                 growth to understand what works best.
//               </p>

//             </div>


//             <div className="social-service-card">

//               <div className="social-service-icon">
//                 🔥
//               </div>

//               <h3>
//                 Trend-Based Content
//               </h3>

//               <p>
//                 Use relevant trends and creative ideas
//                 to keep your brand active and engaging.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= PLATFORMS ================= */}

//         <section className="social-platforms">

//           <div className="social-heading">

//             <span>
//               PLATFORMS
//             </span>

//             <h2>
//               Where Your Audience Lives
//             </h2>

//           </div>


//           <div className="social-platform-grid">

//             <div className="social-platform">

//               <div className="social-platform-icon">
//                 📸
//               </div>

//               <h3>
//                 Instagram
//               </h3>

//               <p>
//                 Visual storytelling, reels, posts,
//                 stories and audience engagement.
//               </p>

//             </div>


//             <div className="social-platform">

//               <div className="social-platform-icon">
//                 f
//               </div>

//               <h3>
//                 Facebook
//               </h3>

//               <p>
//                 Community building, content sharing
//                 and audience interaction.
//               </p>

//             </div>


//             <div className="social-platform">

//               <div className="social-platform-icon">
//                 ▶
//               </div>

//               <h3>
//                 YouTube
//               </h3>

//               <p>
//                 Video content, educational content
//                 and long-term audience growth.
//               </p>

//             </div>


//             <div className="social-platform">

//               <div className="social-platform-icon">
//                 in
//               </div>

//               <h3>
//                 LinkedIn
//               </h3>

//               <p>
//                 Professional branding, B2B content
//                 and industry authority.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= PROCESS ================= */}

//         <section className="social-process">

//           <div className="social-heading">

//             <span>
//               OUR PROCESS
//             </span>

//             <h2>
//               Strategy To Growth
//             </h2>

//           </div>


//           <div className="social-process-grid">

//             <div className="social-process-card">

//               <div className="social-number">
//                 01
//               </div>

//               <h3>
//                 Discover
//               </h3>

//               <p>
//                 Understand your business, audience,
//                 competitors and brand personality.
//               </p>

//             </div>


//             <div className="social-process-card">

//               <div className="social-number">
//                 02
//               </div>

//               <h3>
//                 Strategize
//               </h3>

//               <p>
//                 Build a content strategy and posting
//                 plan around your business goals.
//               </p>

//             </div>


//             <div className="social-process-card">

//               <div className="social-number">
//                 03
//               </div>

//               <h3>
//                 Create
//               </h3>

//               <p>
//                 Develop engaging visual and written
//                 content for your social platforms.
//               </p>

//             </div>


//             <div className="social-process-card">

//               <div className="social-number">
//                 04
//               </div>

//               <h3>
//                 Grow
//               </h3>

//               <p>
//                 Analyze results, improve content and
//                 continuously grow your digital presence.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= BENEFITS ================= */}

//         <section className="social-benefits">

//           <div>

//             <span className="social-mini-title">
//               WHY SOCIAL MEDIA
//             </span>

//             <h2>
//               Turn Followers
//               Into Fans
//             </h2>

//             <p>
//               A strong social presence helps your brand
//               stay connected with customers, increase
//               visibility and build long-term trust.
//             </p>

//           </div>


//           <div className="social-benefit-list">

//             <div>
//               <b>✓</b>
//               Increase brand awareness
//             </div>

//             <div>
//               <b>✓</b>
//               Build stronger customer relationships
//             </div>

//             <div>
//               <b>✓</b>
//               Improve audience engagement
//             </div>

//             <div>
//               <b>✓</b>
//               Create consistent brand identity
//             </div>

//             <div>
//               <b>✓</b>
//               Increase website and campaign traffic
//             </div>

//           </div>

//         </section>


//         {/* ================= FAQ ================= */}

//         <section className="social-faq">

//           <div className="social-heading">

//             <span>
//               FAQ
//             </span>

//             <h2>
//               Social Media Questions?
//             </h2>

//           </div>


//           <div className="social-faq-container">

//             <details>

//               <summary>
//                 Why is social media important for a business?
//               </summary>

//               <p>
//                 Social media helps businesses build
//                 visibility, communicate with customers
//                 and create a consistent online presence.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Do you create social media content?
//               </summary>

//               <p>
//                 Yes. Content planning and creative
//                 development can be included as part
//                 of the social media strategy.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Which platforms should my business use?
//               </summary>

//               <p>
//                 The best platforms depend on your target
//                 audience, industry and business objectives.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can you manage our social media accounts?
//               </summary>

//               <p>
//                 Yes. Social media management can include
//                 content planning, publishing, engagement
//                 and performance tracking.
//               </p>

//             </details>

//           </div>

//         </section>


//         {/* ================= CTA ================= */}

//         <section className="social-cta">

//           <h2>
//             Let's Make Your Brand Social
//           </h2>

//           <p>
//             Build a stronger presence and connect
//             with the audience that matters.
//           </p>

        
//           <Link
//   to="/contact"
//      className="social-button"
// >
//   Start Growing →
// </Link>

//         </section>

//       </main>
//     </>
//   );
// }

// export default SocialMedia;
import React from "react";
import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaBrain,
  FaPalette,
  FaMobileAlt,
  FaComments,
  FaChartLine,
  FaFire,
  FaHeart,
  FaComment,
  FaShare,
  FaStar,
  FaArrowRight,
  FaCheck,
  FaEllipsisH,
} from "react-icons/fa";

function SocialMedia() {
  const services = [
    {
      icon: <FaBrain />,
      title: "Social Media Strategy",
      text: "Create a clear social media strategy aligned with your brand goals and target audience.",
    },
    {
      icon: <FaPalette />,
      title: "Content Creation",
      text: "Create attractive and meaningful content that represents your brand professionally.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Social Media Management",
      text: "Manage your social profiles with consistent posting, scheduling and audience engagement.",
    },
    {
      icon: <FaComments />,
      title: "Community Management",
      text: "Build relationships with your audience through comments, messages and meaningful interactions.",
    },
    {
      icon: <FaChartLine />,
      title: "Performance Analytics",
      text: "Track engagement, reach and audience growth to understand what works best.",
    },
    {
      icon: <FaFire />,
      title: "Trend-Based Content",
      text: "Use relevant trends and creative ideas to keep your brand active and engaging.",
    },
  ];

  const platforms = [
    {
      icon: <FaInstagram />,
      title: "Instagram",
      text: "Visual storytelling, reels, posts, stories and audience engagement.",
    },
    {
      icon: <FaFacebookF />,
      title: "Facebook",
      text: "Community building, content sharing and audience interaction.",
    },
    {
      icon: <FaYoutube />,
      title: "YouTube",
      text: "Video content, educational content and long-term audience growth.",
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      text: "Professional branding, B2B content and industry authority.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "Understand your business, audience, competitors and brand personality.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "Build a content strategy and posting plan around your business goals.",
    },
    {
      number: "03",
      title: "Create",
      text: "Develop engaging visual and written content for your social platforms.",
    },
    {
      number: "04",
      title: "Grow",
      text: "Analyze results, improve content and continuously grow your digital presence.",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .social-page {
          --social-bg: #030307;
          --social-section-bg: #05050b;
          --social-card-bg: #0d0b15;
          --social-service-bg: linear-gradient(145deg, #12101b, #090b14);
          --social-text: #ffffff;
          --social-muted: #858592;
          --social-soft-text: #aaaaaa;
          --social-border: rgba(255, 255, 255, 0.08);
          --social-label: #a78bfa;
          --social-purple: #8b5cf6;
          --social-pink: #ec4899;
          --social-cyan: #06b6d4;

          min-height: 100vh;
          background: var(--social-bg);
          color: var(--social-text);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        /*
          Light theme support.

          Your Header should add "light-theme" to the body
          when the light theme button is clicked.
        */

        body.light-theme .social-page {
          --social-bg: #f7f8fc;
          --social-section-bg: #ffffff;
          --social-card-bg: #ffffff;
          --social-service-bg: linear-gradient(145deg, #ffffff, #f1f3f9);
          --social-text: #171525;
          --social-muted: #606274;
          --social-soft-text: #555866;
          --social-border: rgba(20, 20, 40, 0.12);
          --social-label: #7652d9;
        }

        /* ================= HERO ================= */

        .social-hero {
          min-height: 90vh;
          padding: 120px 7% 80px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--social-bg);
        }

        .social-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          left: -180px;
          top: -180px;
          border-radius: 50%;
          background: var(--social-purple);
          filter: blur(160px);
          opacity: 0.16;
          animation: socialGlow 7s infinite alternate;
        }

        .social-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -180px;
          bottom: -150px;
          border-radius: 50%;
          background: var(--social-cyan);
          filter: blur(150px);
          opacity: 0.13;
          animation: socialGlowTwo 8s infinite alternate;
        }

        @keyframes socialGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(130px, 100px);
          }
        }

        @keyframes socialGlowTwo {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-100px, -90px);
          }
        }

        .social-hero-content {
          width: 55%;
          position: relative;
          z-index: 5;
          animation: socialHeroIn 1s ease;
        }

        @keyframes socialHeroIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .social-label {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 30px;
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: var(--social-label);
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .social-title {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1.03;
          color: var(--social-text);
        }

        .social-title span {
          background: linear-gradient(
            90deg,
            var(--social-purple),
            var(--social-pink),
            var(--social-cyan),
            var(--social-purple)
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: socialGradient 5s linear infinite;
        }

        @keyframes socialGradient {
          to {
            background-position: 300% center;
          }
        }

        .social-description {
          max-width: 620px;
          margin-top: 25px;
          color: var(--social-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .social-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          padding: 15px 26px;
          border-radius: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            100deg,
            var(--social-purple),
            var(--social-pink),
            var(--social-cyan)
          );
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
          transition: 0.3s ease;
        }

        .social-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 45px rgba(139, 92, 246, 0.55);
        }

        /* ================= HERO VISUAL ================= */

        .social-visual {
          position: absolute;
          right: 5%;
          width: 43%;
          height: 470px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .social-orbit {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          border: 1px dashed rgba(139, 92, 246, 0.3);
          animation: orbitRotate 14s linear infinite;
        }

        .social-orbit::before {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--social-purple);
          box-shadow: 0 0 25px var(--social-purple);
          top: 15px;
          left: 50%;
        }

        .social-orbit-two {
          width: 280px;
          height: 280px;
          border-color: rgba(6, 182, 212, 0.3);
          animation: orbitReverse 10s linear infinite;
        }

        .social-orbit-two::before {
          top: auto;
          bottom: 8px;
          background: var(--social-cyan);
          box-shadow: 0 0 25px var(--social-cyan);
        }

        @keyframes orbitRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes orbitReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .social-main-card {
          width: 300px;
          padding: 20px;
          border-radius: 22px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
          position: relative;
          z-index: 5;
          animation: socialFloat 4s ease-in-out infinite;
        }

        @keyframes socialFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }

          50% {
            transform: translateY(-17px) rotate(1deg);
          }
        }

        .social-profile {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
        }

        .social-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--social-purple),
            var(--social-pink)
          );
        }

        .social-profile-text {
          flex: 1;
        }

        .social-profile-text strong {
          display: block;
          font-size: 12px;
          color: var(--social-text);
        }

        .social-profile-text small {
          color: var(--social-muted);
          font-size: 9px;
        }

        .social-dots {
          color: var(--social-muted);
          font-size: 14px;
        }

        .social-post-image {
          height: 160px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--social-purple),
            var(--social-pink),
            var(--social-cyan)
          );
          background-size: 250% 250%;
          animation: postGradient 5s ease infinite;
        }

        @keyframes postGradient {
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

        .social-post-image svg {
          font-size: 50px;
          animation: socialIconPulse 2s ease-in-out infinite;
        }

        @keyframes socialIconPulse {
          0%,
          100% {
            transform: scale(1) rotate(0);
          }

          50% {
            transform: scale(1.15) rotate(5deg);
          }
        }

        .social-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 15px;
          font-size: 11px;
          color: var(--social-muted);
        }

        .social-action-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        .social-post-title {
          margin-top: 13px;
          font-size: 13px;
          font-weight: 600;
          color: var(--social-text);
        }

        .social-post-text {
          margin-top: 6px;
          color: var(--social-muted);
          font-size: 10px;
          line-height: 1.6;
        }

        /* ================= FLOATING TAGS ================= */

        .social-floating {
          position: absolute;
          padding: 9px 14px;
          border-radius: 30px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
          backdrop-filter: blur(10px);
          color: var(--social-muted);
          font-size: 9px;
          animation: floatingTag 4s ease-in-out infinite;
        }

        .social-float-one {
          top: 40px;
          right: 0;
        }

        .social-float-two {
          left: 0;
          bottom: 45px;
          animation-delay: 1.5s;
        }

        .social-float-three {
          top: 125px;
          left: 10px;
          animation-delay: 2.5s;
        }

        @keyframes floatingTag {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        /* ================= INTRO ================= */

        .social-intro {
          padding: 100px 7%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          background: var(--social-section-bg);
        }

        .social-mini-title {
          color: var(--social-label);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .social-intro h2 {
          margin: 15px 0 25px;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.1;
          color: var(--social-text);
        }

        .social-intro p {
          color: var(--social-muted);
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 15px;
        }

        .social-intro-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
        }

        .social-intro-card {
          padding: 24px;
          border-radius: 16px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
          transition: 0.3s ease;
        }

        .social-intro-card:hover {
          transform: translateX(10px);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .social-intro-card strong {
          display: block;
          color: var(--social-label);
          font-size: 23px;
          margin-bottom: 6px;
        }

        .social-intro-card span {
          color: var(--social-soft-text);
          font-size: 12px;
        }

        /* ================= SERVICES ================= */

        .social-services {
          padding: 100px 7%;
          background: var(--social-bg);
        }

        .social-heading {
          max-width: 700px;
          text-align: center;
          margin: 0 auto 55px;
        }

        .social-heading > span {
          color: var(--social-label);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .social-heading h2 {
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 52px);
          color: var(--social-text);
        }

        .social-heading p {
          color: var(--social-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .social-service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .social-service-card {
          padding: 30px;
          min-height: 240px;
          border-radius: 20px;
          background: var(--social-service-bg);
          border: 1px solid var(--social-border);
          transition: 0.4s ease;
          animation: serviceMove 5s ease-in-out infinite;
        }

        .social-service-card:nth-child(2) {
          animation-delay: 0.7s;
        }

        .social-service-card:nth-child(3) {
          animation-delay: 1.4s;
        }

        .social-service-card:nth-child(4) {
          animation-delay: 2.1s;
        }

        .social-service-card:nth-child(5) {
          animation-delay: 2.8s;
        }

        .social-service-card:nth-child(6) {
          animation-delay: 3.5s;
        }

        @keyframes serviceMove {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .social-service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(139, 92, 246, 0.45);
          box-shadow: 0 20px 50px rgba(139, 92, 246, 0.12);
        }

        .social-service-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(139, 92, 246, 0.1);
          color: var(--social-label);
          font-size: 22px;
          margin-bottom: 20px;
        }

        .social-service-card h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: var(--social-text);
        }

        .social-service-card p {
          color: var(--social-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        /* ================= PLATFORMS ================= */

        .social-platforms {
          padding: 100px 7%;
          background: var(--social-section-bg);
        }

        .social-platform-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .social-platform {
          padding: 28px;
          border-radius: 18px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
          transition: 0.35s ease;
        }

        .social-platform:hover {
          transform: translateY(-10px);
          border-color: rgba(236, 72, 153, 0.4);
        }

        .social-platform-icon {
          color: var(--social-label);
          font-size: 28px;
        }

        .social-platform h3 {
          margin: 18px 0 10px;
          font-size: 17px;
          color: var(--social-text);
        }

        .social-platform p {
          color: var(--social-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        /* ================= PROCESS ================= */

        .social-process {
          padding: 100px 7%;
          background: var(--social-bg);
        }

        .social-process-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .social-process-card {
          text-align: center;
          padding: 25px;
        }

        .social-number {
          width: 60px;
          height: 60px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            var(--social-purple),
            var(--social-pink),
            var(--social-cyan)
          );
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.25);
          font-size: 12px;
          font-weight: bold;
        }

        .social-process-card h3 {
          margin-top: 20px;
          font-size: 16px;
          color: var(--social-text);
        }

        .social-process-card p {
          color: var(--social-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        /* ================= BENEFITS ================= */

        .social-benefits {
          padding: 100px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          background: var(--social-section-bg);
        }

        .social-benefits h2 {
          margin: 15px 0 20px;
          font-size: clamp(35px, 5vw, 58px);
          color: var(--social-text);
        }

        .social-benefits p {
          color: var(--social-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .social-benefit-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
        }

        .social-benefit-list div {
          display: flex;
          align-items: center;
          padding: 18px;
          border-radius: 12px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
          color: var(--social-soft-text);
          font-size: 13px;
          transition: 0.3s ease;
        }

        .social-benefit-list div:hover {
          transform: translateX(8px);
          border-color: rgba(139, 92, 246, 0.4);
        }

        .social-benefit-list b {
          display: inline-flex;
          margin-right: 10px;
          color: var(--social-label);
        }

        /* ================= FAQ ================= */

        .social-faq {
          padding: 100px 7%;
          background: var(--social-bg);
        }

        .social-faq-container {
          max-width: 850px;
          margin: auto;
        }

        .social-faq details {
          margin-bottom: 14px;
          padding: 20px 25px;
          border-radius: 15px;
          background: var(--social-card-bg);
          border: 1px solid var(--social-border);
        }

        .social-faq summary {
          cursor: pointer;
          color: var(--social-text);
          font-size: 14px;
          font-weight: 600;
        }

        .social-faq details p {
          color: var(--social-muted);
          font-size: 12px;
          line-height: 1.8;
          margin-top: 18px;
        }

        /* ================= CTA ================= */

        .social-cta {
          margin: 70px 6%;
          padding: 75px 30px;
          text-align: center;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(139, 92, 246, 0.2),
              transparent 50%
            ),
            var(--social-card-bg);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .social-cta h2 {
          position: relative;
          color: var(--social-text);
          font-size: clamp(30px, 4vw, 50px);
        }

        .social-cta p {
          position: relative;
          color: var(--social-muted);
          margin-top: 15px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 950px) {
          .social-hero {
            min-height: auto;
            display: block;
            padding: 110px 6% 70px;
          }

          .social-hero-content {
            width: 100%;
            text-align: center;
          }

          .social-description {
            margin-left: auto;
            margin-right: auto;
          }

          .social-visual {
            position: relative;
            right: auto;
            width: 100%;
            height: 370px;
            margin-top: 45px;
          }

          .social-intro {
            grid-template-columns: 1fr;
          }

          .social-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .social-platform-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .social-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .social-benefits {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .social-title {
            font-size: 44px;
          }

          .social-description {
            font-size: 13px;
          }

          .social-visual {
            height: 310px;
          }

          .social-orbit {
            width: 260px;
            height: 260px;
          }

          .social-orbit-two {
            width: 180px;
            height: 180px;
          }

          .social-main-card {
            width: 240px;
            padding: 16px;
          }

          .social-post-image {
            height: 120px;
          }

          .social-floating {
            font-size: 8px;
            padding: 7px 10px;
          }

          .social-service-grid,
          .social-platform-grid,
          .social-process-grid {
            grid-template-columns: 1fr;
          }

          .social-intro {
            padding: 70px 5%;
          }

          .social-services,
          .social-platforms,
          .social-process,
          .social-faq {
            padding: 70px 5%;
          }

          .social-benefits {
            padding: 70px 6%;
          }

          .social-cta {
            margin: 40px 5%;
            padding: 55px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .social-page *,
          .social-page *::before,
          .social-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <main className="social-page">
        {/* HERO */}
        <section className="social-hero">
          <div className="social-hero-content">
            <div className="social-label">
              SOCIAL MEDIA MARKETING
            </div>

            <h1 className="social-title">
              Build Your
              <br />
              <span>Digital Presence.</span>
            </h1>

            <p className="social-description">
              We create engaging social media strategies that help brands
              build communities, increase visibility and turn followers into
              loyal customers.
            </p>

            <Link to="/contact" className="social-button">
              Grow Your Social Presence
              <FaArrowRight />
            </Link>
          </div>

          {/* ANIMATED VISUAL */}
          <div className="social-visual">
            <div className="social-floating social-float-one">
              MORE ENGAGEMENT
            </div>

            <div className="social-floating social-float-two">
              BRAND GROWTH
            </div>

            <div className="social-floating social-float-three">
              CREATIVE CONTENT
            </div>

            <div className="social-orbit"></div>
            <div className="social-orbit social-orbit-two"></div>

            <div className="social-main-card">
              <div className="social-profile">
                <div className="social-avatar">
                  <FaStar />
                </div>

                <div className="social-profile-text">
                  <strong>Rohil Digital</strong>
                  <small>Social Media</small>
                </div>

                <div className="social-dots">
                  <FaEllipsisH />
                </div>
              </div>

              <div className="social-post-image">
                <FaStar />
              </div>

              <div className="social-post-title">
                Your Brand. Your Story.
              </div>

              <div className="social-post-text">
                Creative content designed to connect your brand with the right
                audience.
              </div>

              <div className="social-actions">
                <span className="social-action-item">
                  <FaHeart /> 4.8K
                </span>

                <span className="social-action-item">
                  <FaComment /> 682
                </span>

                <span className="social-action-item">
                  <FaShare /> 245
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="social-intro">
          <div>
            <span className="social-mini-title">
              SOCIAL MEDIA STRATEGY
            </span>

            <h2>
              More Than
              <br />
              Just Posting
            </h2>

            <p>
              Social media is more than uploading posts. It is about creating
              meaningful connections between your brand and your audience.
            </p>

            <p>
              We build social media strategies around your business goals,
              audience interests and brand identity to create consistent
              digital experiences.
            </p>
          </div>

          <div className="social-intro-right">
            <div className="social-intro-card">
              <strong>01</strong>
              <span>Build a recognizable brand presence</span>
            </div>

            <div className="social-intro-card">
              <strong>02</strong>
              <span>Increase audience engagement</span>
            </div>

            <div className="social-intro-card">
              <strong>03</strong>
              <span>Create consistent brand communication</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="social-services">
          <div className="social-heading">
            <span>OUR SERVICES</span>

            <h2>Complete Social Media Solutions</h2>

            <p>
              From strategy and content creation to community management and
              analytics, we handle your complete social media journey.
            </p>
          </div>

          <div className="social-service-grid">
            {services.map((service) => (
              <div className="social-service-card" key={service.title}>
                <div className="social-service-icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PLATFORMS */}
        <section className="social-platforms">
          <div className="social-heading">
            <span>PLATFORMS</span>

            <h2>Where Your Audience Lives</h2>
          </div>

          <div className="social-platform-grid">
            {platforms.map((platform) => (
              <div className="social-platform" key={platform.title}>
                <div className="social-platform-icon">
                  {platform.icon}
                </div>

                <h3>{platform.title}</h3>

                <p>{platform.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section className="social-process">
          <div className="social-heading">
            <span>OUR PROCESS</span>

            <h2>Strategy To Growth</h2>
          </div>

          <div className="social-process-grid">
            {process.map((item) => (
              <div className="social-process-card" key={item.number}>
                <div className="social-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="social-benefits">
          <div>
            <span className="social-mini-title">WHY SOCIAL MEDIA</span>

            <h2>
              Turn Followers
              <br />
              Into Fans
            </h2>

            <p>
              A strong social presence helps your brand stay connected with
              customers, increase visibility and build long-term trust.
            </p>
          </div>

          <div className="social-benefit-list">
            <div>
              <b>
                <FaCheck />
              </b>
              Increase brand awareness
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Build stronger customer relationships
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Improve audience engagement
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Create consistent brand identity
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Increase website and campaign traffic
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="social-faq">
          <div className="social-heading">
            <span>FAQ</span>

            <h2>Social Media Questions?</h2>
          </div>

          <div className="social-faq-container">
            <details>
              <summary>
                Why is social media important for a business?
              </summary>

              <p>
                Social media helps businesses build visibility, communicate
                with customers and create a consistent online presence.
              </p>
            </details>

            <details>
              <summary>Do you create social media content?</summary>

              <p>
                Yes. Content planning and creative development can be included
                as part of the social media strategy.
              </p>
            </details>

            <details>
              <summary>
                Which platforms should my business use?
              </summary>

              <p>
                The best platforms depend on your target audience, industry
                and business objectives.
              </p>
            </details>

            <details>
              <summary>
                Can you manage our social media accounts?
              </summary>

              <p>
                Yes. Social media management can include content planning,
                publishing, engagement and performance tracking.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="social-cta">
          <h2>Let's Make Your Brand Social</h2>

          <p>
            Build a stronger presence and connect with the audience that
            matters.
          </p>

          <Link to="/contact" className="social-button">
            Start Growing
            <FaArrowRight />
          </Link>
        </section>
      </main>
    </>
  );
}

export default SocialMedia;