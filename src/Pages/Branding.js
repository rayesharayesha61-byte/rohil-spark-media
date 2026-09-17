// import React from "react";
// import { Link } from "react-router-dom";
// function Branding() {
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .branding-page {
//           min-height: 100vh;
//           background: #030307;
//           color: #fff;
//           font-family: Arial, sans-serif;
//           overflow: hidden;
//         }

//         /* ================= HERO ================= */

//         .branding-hero {
//           min-height: 90vh;
//           padding: 120px 7% 80px;
//           display: flex;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .branding-hero::before {
//           content: "";
//           position: absolute;

//           width: 500px;
//           height: 500px;

//           left: -180px;
//           top: -180px;

//           border-radius: 50%;

//           background: #a855f7;

//           filter: blur(160px);

//           opacity: .15;

//           animation: brandGlow 7s infinite alternate;
//         }

//         .branding-hero::after {
//           content: "";

//           position: absolute;

//           width: 450px;
//           height: 450px;

//           right: -150px;
//           bottom: -180px;

//           border-radius: 50%;

//           background: #f97316;

//           filter: blur(160px);

//           opacity: .12;

//           animation: brandGlowTwo 8s infinite alternate;
//         }

//         @keyframes brandGlow {
//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(130px,100px);
//           }
//         }

//         @keyframes brandGlowTwo {
//           from {
//             transform: translate(0,0);
//           }

//           to {
//             transform: translate(-120px,-90px);
//           }
//         }

//         .branding-hero-content {
//           width: 55%;

//           position: relative;

//           z-index: 5;

//           animation: brandHeroIn 1s ease;
//         }

//         @keyframes brandHeroIn {
//           from {
//             opacity: 0;
//             transform: translateX(-60px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .branding-label {
//           display: inline-block;

//           padding: 8px 16px;

//           border-radius: 30px;

//           border:
//             1px solid rgba(168,85,247,.3);

//           background:
//             rgba(168,85,247,.08);

//           color: #c084fc;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 22px;
//         }

//         .branding-title {
//           margin: 0;

//           font-size: clamp(45px,6vw,78px);

//           line-height: 1.03;
//         }

//         .branding-title span {
//           background:
//             linear-gradient(
//               90deg,
//               #a855f7,
//               #ec4899,
//               #f97316,
//               #a855f7
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;

//           background-clip: text;

//           color: transparent;

//           animation:
//             brandGradient 5s linear infinite;
//         }

//         @keyframes brandGradient {
//           to {
//             background-position: 300% center;
//           }
//         }

//         .branding-description {
//           max-width: 620px;

//           margin-top: 25px;

//           color: #92929f;

//           font-size: 15px;

//           line-height: 1.9;
//         }

//         .branding-button {
//           display: inline-flex;

//           margin-top: 30px;

//           padding: 15px 27px;

//           border-radius: 12px;

//           text-decoration: none;

//           color: #fff;

//           font-size: 13px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a855f7,
//               #ec4899,
//               #f97316
//             );

//           box-shadow:
//             0 0 30px
//             rgba(168,85,247,.3);

//           transition: .3s;
//         }

//         .branding-button:hover {
//           transform:
//             translateY(-5px)
//             scale(1.03);

//           box-shadow:
//             0 0 45px
//             rgba(168,85,247,.55);
//         }


//         /* ================= BRAND VISUAL ================= */

//         .branding-visual {
//           position: absolute;

//           right: 5%;

//           width: 43%;

//           height: 480px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           z-index: 4;
//         }

//         .branding-circle {
//           position: absolute;

//           width: 370px;
//           height: 370px;

//           border-radius: 50%;

//           border:
//             1px dashed
//             rgba(168,85,247,.35);

//           animation:
//             brandRotate 15s linear infinite;
//         }

//         .branding-circle::before {
//           content: "";

//           position: absolute;

//           width: 13px;
//           height: 13px;

//           border-radius: 50%;

//           background: #a855f7;

//           box-shadow:
//             0 0 25px #a855f7;

//           top: 12px;

//           left: 50%;
//         }

//         .branding-circle-two {
//           width: 280px;
//           height: 280px;

//           border-color:
//             rgba(249,115,22,.35);

//           animation:
//             brandRotateReverse 10s linear infinite;
//         }

//         .branding-circle-two::before {
//           top: auto;

//           bottom: 7px;

//           background: #f97316;

//           box-shadow:
//             0 0 25px #f97316;
//         }

//         @keyframes brandRotate {
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes brandRotateReverse {
//           to {
//             transform: rotate(-360deg);
//           }
//         }


//         /* BRAND CARD */

//         .branding-card {
//           width: 310px;

//           padding: 25px;

//           border-radius: 24px;

//           background:
//             rgba(13,12,23,.95);

//           border:
//             1px solid
//             rgba(255,255,255,.1);

//           backdrop-filter: blur(15px);

//           box-shadow:
//             0 25px 70px
//             rgba(0,0,0,.6);

//           position: relative;

//           z-index: 5;

//           animation:
//             brandingFloat 4s ease-in-out infinite;
//         }

//         @keyframes brandingFloat {
//           0%,100% {
//             transform:
//               translateY(0)
//               rotate(0);
//           }

//           50% {
//             transform:
//               translateY(-18px)
//               rotate(1deg);
//           }
//         }

//         .brand-card-top {
//           display: flex;

//           justify-content: space-between;

//           align-items: center;

//           margin-bottom: 20px;
//         }

//         .brand-card-logo {
//           width: 48px;
//           height: 48px;

//           border-radius: 14px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           font-size: 23px;

//           font-weight: bold;

//           background:
//             linear-gradient(
//               135deg,
//               #a855f7,
//               #ec4899,
//               #f97316
//             );

//           animation:
//             logoPulse 2s infinite;
//         }

//         @keyframes logoPulse {
//           0%,100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.08);
//           }
//         }

//         .brand-card-top small {
//           color: #777;

//           font-size: 9px;

//           letter-spacing: 2px;
//         }

//         .brand-card-name {
//           font-size: 24px;

//           font-weight: 700;

//           letter-spacing: 2px;

//           margin-bottom: 8px;
//         }

//         .brand-card-subtitle {
//           color: #888;

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 25px;
//         }

//         .brand-line {
//           height: 1px;

//           background:
//             rgba(255,255,255,.08);

//           margin-bottom: 20px;
//         }

//         .brand-color-row {
//           display: flex;

//           gap: 9px;
//         }

//         .brand-color {
//           width: 42px;
//           height: 42px;

//           border-radius: 10px;

//           animation:
//             colorMove 3s ease-in-out infinite;
//         }

//         .brand-color:nth-child(2) {
//           animation-delay: .5s;
//         }

//         .brand-color:nth-child(3) {
//           animation-delay: 1s;
//         }

//         .brand-color:nth-child(4) {
//           animation-delay: 1.5s;
//         }

//         .brand-color-one {
//           background: #a855f7;
//         }

//         .brand-color-two {
//           background: #ec4899;
//         }

//         .brand-color-three {
//           background: #f97316;
//         }

//         .brand-color-four {
//           background: #facc15;
//         }

//         @keyframes colorMove {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }
//         }


//         /* FLOATING LABELS */

//         .branding-floating {
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
//             brandTagFloat 4s ease-in-out infinite;
//         }

//         .branding-float-one {
//           top: 40px;
//           right: 0;
//         }

//         .branding-float-two {
//           left: 0;
//           bottom: 50px;

//           animation-delay: 1.5s;
//         }

//         .branding-float-three {
//           top: 120px;
//           left: 10px;

//           animation-delay: 2.5s;
//         }

//         @keyframes brandTagFloat {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-13px);
//           }
//         }


//         /* ================= INTRO ================= */

//         .branding-intro {
//           padding: 100px 7%;

//           display: grid;

//           grid-template-columns:
//             1.1fr .9fr;

//           gap: 70px;

//           background: #05050b;
//         }

//         .branding-mini-title {
//           color: #c084fc;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .branding-intro h2 {
//           margin:
//             15px 0 25px;

//           font-size:
//             clamp(35px,5vw,58px);

//           line-height: 1.1;
//         }

//         .branding-intro p {
//           color: #858592;

//           font-size: 14px;

//           line-height: 1.9;

//           margin-bottom: 15px;
//         }

//         .branding-intro-right {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 15px;
//         }

//         .branding-intro-card {
//           padding: 24px;

//           border-radius: 16px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .3s;
//         }

//         .branding-intro-card:hover {
//           transform: translateX(10px);

//           border-color:
//             rgba(168,85,247,.4);
//         }

//         .branding-intro-card strong {
//           display: block;

//           color: #c084fc;

//           font-size: 23px;

//           margin-bottom: 6px;
//         }

//         .branding-intro-card span {
//           color: #aaa;

//           font-size: 12px;
//         }


//         /* ================= SERVICES ================= */

//         .branding-services {
//           padding: 100px 7%;
//         }

//         .branding-heading {
//           max-width: 720px;

//           text-align: center;

//           margin:
//             0 auto 55px;
//         }

//         .branding-heading span {
//           color: #c084fc;

//           font-size: 10px;

//           letter-spacing: 3px;
//         }

//         .branding-heading h2 {
//           margin: 15px 0;

//           font-size:
//             clamp(32px,5vw,52px);
//         }

//         .branding-heading p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.8;
//         }

//         .branding-service-grid {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 22px;
//         }

//         .branding-service-card {
//           min-height: 250px;

//           padding: 30px;

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
//             brandingCardMove 5s ease-in-out infinite;
//         }

//         .branding-service-card:nth-child(2) {
//           animation-delay: .6s;
//         }

//         .branding-service-card:nth-child(3) {
//           animation-delay: 1.2s;
//         }

//         .branding-service-card:nth-child(4) {
//           animation-delay: 1.8s;
//         }

//         .branding-service-card:nth-child(5) {
//           animation-delay: 2.4s;
//         }

//         .branding-service-card:nth-child(6) {
//           animation-delay: 3s;
//         }

//         @keyframes brandingCardMove {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-7px);
//           }
//         }

//         .branding-service-card:hover {
//           transform:
//             translateY(-12px)
//             scale(1.02);

//           border-color:
//             rgba(168,85,247,.45);

//           box-shadow:
//             0 20px 50px
//             rgba(168,85,247,.12);
//         }

//         .branding-service-icon {
//           width: 52px;
//           height: 52px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 14px;

//           background:
//             rgba(168,85,247,.1);

//           font-size: 23px;

//           margin-bottom: 20px;
//         }

//         .branding-service-card h3 {
//           margin:
//             0 0 12px;

//           font-size: 18px;
//         }

//         .branding-service-card p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         /* ================= BRAND ELEMENTS ================= */

//         .brand-elements {
//           padding: 100px 7%;

//           background: #05050b;
//         }

//         .brand-elements-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 18px;
//         }

//         .brand-element {
//           min-height: 190px;

//           padding: 25px;

//           border-radius: 18px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);

//           transition: .35s;

//           text-align: center;
//         }

//         .brand-element:hover {
//           transform:
//             translateY(-10px)
//             rotate(1deg);

//           border-color:
//             rgba(236,72,153,.4);
//         }

//         .brand-element-icon {
//           font-size: 32px;
//         }

//         .brand-element h3 {
//           margin:
//             17px 0 10px;

//           font-size: 16px;
//         }

//         .brand-element p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= PROCESS ================= */

//         .branding-process {
//           padding: 100px 7%;
//         }

//         .branding-process-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 20px;
//         }

//         .branding-process-card {
//           text-align: center;

//           padding: 25px;
//         }

//         .branding-number {
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
//               #a855f7,
//               #ec4899,
//               #f97316
//             );

//           box-shadow:
//             0 0 30px
//             rgba(168,85,247,.25);

//           font-size: 12px;

//           font-weight: bold;

//           animation:
//             numberPulse 2.5s infinite;
//         }

//         @keyframes numberPulse {
//           0%,100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.08);
//           }
//         }

//         .branding-process-card h3 {
//           margin-top: 20px;

//           font-size: 16px;
//         }

//         .branding-process-card p {
//           color: #858592;

//           font-size: 11px;

//           line-height: 1.8;
//         }


//         /* ================= BENEFITS ================= */

//         .branding-benefits {
//           padding: 100px 10%;

//           display: grid;

//           grid-template-columns: 1fr 1fr;

//           gap: 80px;

//           background:
//             radial-gradient(
//               circle at 20% 50%,
//               rgba(168,85,247,.1),
//               transparent 35%
//             ),
//             #05050b;
//         }

//         .branding-benefits h2 {
//           margin:
//             15px 0 20px;

//           font-size:
//             clamp(35px,5vw,58px);
//         }

//         .branding-benefits p {
//           color: #858592;

//           font-size: 13px;

//           line-height: 1.9;
//         }

//         .branding-benefit-list {
//           display: flex;

//           flex-direction: column;

//           justify-content: center;

//           gap: 14px;
//         }

//         .branding-benefit-list div {
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

//         .branding-benefit-list div:hover {
//           transform: translateX(8px);

//           border-color:
//             rgba(168,85,247,.4);
//         }

//         .branding-benefit-list b {
//           color: #c084fc;

//           margin-right: 10px;
//         }


//         /* ================= FAQ ================= */

//         .branding-faq {
//           padding: 100px 7%;
//         }

//         .branding-faq-container {
//           max-width: 850px;

//           margin: auto;
//         }

//         .branding-faq details {
//           margin-bottom: 14px;

//           padding: 20px 25px;

//           border-radius: 15px;

//           background: #0d0b15;

//           border:
//             1px solid
//             rgba(255,255,255,.07);
//         }

//         .branding-faq summary {
//           cursor: pointer;

//           font-size: 14px;

//           font-weight: 600;
//         }

//         .branding-faq details p {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;

//           margin-top: 18px;
//         }


//         /* ================= CTA ================= */

//         .branding-cta {
//           margin: 70px 6%;

//           padding: 75px 30px;

//           text-align: center;

//           border-radius: 28px;

//           position: relative;

//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 50% 0%,
//               rgba(168,85,247,.2),
//               transparent 50%
//             ),
//             linear-gradient(
//               135deg,
//               #080812,
//               #0d0a18
//             );

//           border:
//             1px solid
//             rgba(168,85,247,.2);
//         }

//         .branding-cta h2 {
//           position: relative;

//           font-size:
//             clamp(30px,4vw,50px);
//         }

//         .branding-cta p {
//           position: relative;

//           color: #858592;

//           margin-top: 15px;
//         }


//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 950px) {

//           .branding-hero {
//             min-height: auto;

//             display: block;

//             padding:
//               110px 6% 70px;
//           }

//           .branding-hero-content {
//             width: 100%;

//             text-align: center;
//           }

//           .branding-description {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .branding-visual {
//             position: relative;

//             right: auto;

//             width: 100%;

//             height: 370px;

//             margin-top: 45px;
//           }

//           .branding-intro {
//             grid-template-columns: 1fr;
//           }

//           .branding-service-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .brand-elements-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .branding-process-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//           .branding-benefits {
//             grid-template-columns: 1fr;
//           }

//         }


//         @media (max-width: 600px) {

//           .branding-title {
//             font-size: 44px;
//           }

//           .branding-description {
//             font-size: 13px;
//           }

//           .branding-visual {
//             height: 310px;
//           }

//           .branding-circle {
//             width: 260px;
//             height: 260px;
//           }

//           .branding-circle-two {
//             width: 180px;
//             height: 180px;
//           }

//           .branding-card {
//             width: 245px;

//             padding: 18px;
//           }

//           .brand-card-name {
//             font-size: 19px;
//           }

//           .brand-color {
//             width: 34px;
//             height: 34px;
//           }

//           .branding-floating {
//             font-size: 8px;

//             padding: 7px 10px;
//           }

//           .branding-service-grid,
//           .brand-elements-grid,
//           .branding-process-grid {
//             grid-template-columns: 1fr;
//           }

//           .branding-intro {
//             padding: 70px 5%;
//           }

//           .branding-services,
//           .brand-elements,
//           .branding-process,
//           .branding-faq {
//             padding: 70px 5%;
//           }

//           .branding-benefits {
//             padding: 70px 6%;
//           }

//           .branding-cta {
//             margin: 40px 5%;

//             padding: 55px 20px;
//           }

//         }

//       `}</style>


//       <main className="branding-page">

//         {/* ================= HERO ================= */}

//         <section className="branding-hero">

//           <div className="branding-hero-content">

//             <div className="branding-label">
//               BRANDING SERVICES
//             </div>

//             <h1 className="branding-title">

//               Build A Brand
//               <br />

//               <span>
//                 People Remember.
//               </span>

//             </h1>

//             <p className="branding-description">

//               We create powerful brand identities that
//               communicate your story, build trust and
//               make your business stand out in a crowded
//               digital world.

//             </p>

            
// <Link to="/contact">
//   Build Your Brand →
// </Link>
//           </div>


//           {/* ANIMATED BRAND VISUAL */}

//           <div className="branding-visual">

//             <div className="branding-floating branding-float-one">
//               BRAND IDENTITY
//             </div>

//             <div className="branding-floating branding-float-two">
//               CREATIVE DESIGN
//             </div>

//             <div className="branding-floating branding-float-three">
//               VISUAL STORY
//             </div>


//             <div className="branding-circle"></div>

//             <div className="branding-circle branding-circle-two"></div>


//             <div className="branding-card">

//               <div className="brand-card-top">

//                 <div className="brand-card-logo">
//                   R
//                 </div>

//                 <small>
//                   BRAND SYSTEM
//                 </small>

//               </div>


//               <div className="brand-card-name">
//                 ROHIL
//               </div>

//               <div className="brand-card-subtitle">
//                 DIGITAL SPARK MEDIA
//               </div>


//               <div className="brand-line"></div>


//               <div className="brand-color-row">

//                 <div className="brand-color brand-color-one"></div>

//                 <div className="brand-color brand-color-two"></div>

//                 <div className="brand-color brand-color-three"></div>

//                 <div className="brand-color brand-color-four"></div>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* ================= INTRO ================= */}

//         <section className="branding-intro">

//           <div>

//             <span className="branding-mini-title">
//               BRAND STRATEGY
//             </span>

//             <h2>
//               Your Brand Is
//               More Than A Logo
//             </h2>

//             <p>
//               A strong brand creates an emotional
//               connection with your audience. It tells
//               people who you are, what you stand for
//               and why they should choose you.
//             </p>

//             <p>
//               We combine strategy, creativity and
//               visual design to create a brand identity
//               that is memorable and consistent across
//               every touchpoint.
//             </p>

//           </div>


//           <div className="branding-intro-right">

//             <div className="branding-intro-card">

//               <strong>
//                 01
//               </strong>

//               <span>
//                 Define a clear and memorable brand identity
//               </span>

//             </div>


//             <div className="branding-intro-card">

//               <strong>
//                 02
//               </strong>

//               <span>
//                 Build trust and credibility with your audience
//               </span>

//             </div>


//             <div className="branding-intro-card">

//               <strong>
//                 03
//               </strong>

//               <span>
//                 Create consistency across every platform
//               </span>

//             </div>

//           </div>

//         </section>


//         {/* ================= SERVICES ================= */}

//         <section className="branding-services">

//           <div className="branding-heading">

//             <span>
//               WHAT WE CREATE
//             </span>

//             <h2>
//               Complete Branding Solutions
//             </h2>

//             <p>
//               From strategy and naming to visual identity
//               and brand guidelines, we create everything
//               your brand needs to grow confidently.
//             </p>

//           </div>


//           <div className="branding-service-grid">

//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 🧠
//               </div>

//               <h3>
//                 Brand Strategy
//               </h3>

//               <p>
//                 Define your positioning, audience,
//                 personality and unique value proposition.
//               </p>

//             </div>


//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 ✏️
//               </div>

//               <h3>
//                 Logo Design
//               </h3>

//               <p>
//                 Create a distinctive logo that represents
//                 your business and becomes instantly
//                 recognizable.
//               </p>

//             </div>


//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 🎨
//               </div>

//               <h3>
//                 Visual Identity
//               </h3>

//               <p>
//                 Develop colors, typography, graphics and
//                 visual elements that define your brand.
//               </p>

//             </div>


//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 📝
//               </div>

//               <h3>
//                 Brand Guidelines
//               </h3>

//               <p>
//                 Establish clear guidelines to keep your
//                 brand consistent across all platforms.
//               </p>

//             </div>


//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 💬
//               </div>

//               <h3>
//                 Brand Messaging
//               </h3>

//               <p>
//                 Build a strong communication style that
//                 connects your brand with your audience.
//               </p>

//             </div>


//             <div className="branding-service-card">

//               <div className="branding-service-icon">
//                 📦
//               </div>

//               <h3>
//                 Marketing Collateral
//               </h3>

//               <p>
//                 Design professional business materials
//                 that maintain your brand identity.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= BRAND ELEMENTS ================= */}

//         <section className="brand-elements">

//           <div className="branding-heading">

//             <span>
//               BRAND ELEMENTS
//             </span>

//             <h2>
//               Every Detail Matters
//             </h2>

//             <p>
//               We create a complete visual language
//               so your brand looks consistent everywhere.
//             </p>

//           </div>


//           <div className="brand-elements-grid">

//             <div className="brand-element">

//               <div className="brand-element-icon">
//                 🔷
//               </div>

//               <h3>
//                 Logo
//               </h3>

//               <p>
//                 A unique visual mark that makes your
//                 business instantly recognizable.
//               </p>

//             </div>


//             <div className="brand-element">

//               <div className="brand-element-icon">
//                 🌈
//               </div>

//               <h3>
//                 Colors
//               </h3>

//               <p>
//                 Strategic colors that communicate your
//                 brand personality and emotion.
//               </p>

//             </div>


//             <div className="brand-element">

//               <div className="brand-element-icon">
//                 🔤
//               </div>

//               <h3>
//                 Typography
//               </h3>

//               <p>
//                 Fonts and typography systems that create
//                 a consistent visual voice.
//               </p>

//             </div>


//             <div className="brand-element">

//               <div className="brand-element-icon">
//                 🖼️
//               </div>

//               <h3>
//                 Visual Style
//               </h3>

//               <p>
//                 Images, graphics and design elements that
//                 strengthen your brand identity.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= PROCESS ================= */}

//         <section className="branding-process">

//           <div className="branding-heading">

//             <span>
//               OUR PROCESS
//             </span>

//             <h2>
//               From Idea To Identity
//             </h2>

//           </div>


//           <div className="branding-process-grid">

//             <div className="branding-process-card">

//               <div className="branding-number">
//                 01
//               </div>

//               <h3>
//                 Discover
//               </h3>

//               <p>
//                 Understand your business, audience,
//                 competitors and goals.
//               </p>

//             </div>


//             <div className="branding-process-card">

//               <div className="branding-number">
//                 02
//               </div>

//               <h3>
//                 Define
//               </h3>

//               <p>
//                 Create your positioning, personality,
//                 messaging and brand direction.
//               </p>

//             </div>


//             <div className="branding-process-card">

//               <div className="branding-number">
//                 03
//               </div>

//               <h3>
//                 Design
//               </h3>

//               <p>
//                 Transform the strategy into a powerful
//                 visual identity.
//               </p>

//             </div>


//             <div className="branding-process-card">

//               <div className="branding-number">
//                 04
//               </div>

//               <h3>
//                 Launch
//               </h3>

//               <p>
//                 Apply your new identity consistently
//                 across your digital and physical presence.
//               </p>

//             </div>

//           </div>

//         </section>


//         {/* ================= BENEFITS ================= */}

//         <section className="branding-benefits">

//           <div>

//             <span className="branding-mini-title">
//               WHY BRANDING
//             </span>

//             <h2>
//               Make Your Business
//               Unforgettable
//             </h2>

//             <p>
//               Strong branding helps customers recognize
//               your business, trust your services and
//               remember you when they are ready to buy.
//             </p>

//           </div>


//           <div className="branding-benefit-list">

//             <div>
//               <b>✓</b>
//               Build strong brand recognition
//             </div>

//             <div>
//               <b>✓</b>
//               Increase customer trust
//             </div>

//             <div>
//               <b>✓</b>
//               Stand out from competitors
//             </div>

//             <div>
//               <b>✓</b>
//               Create consistent communication
//             </div>

//             <div>
//               <b>✓</b>
//               Build long-term brand value
//             </div>

//           </div>

//         </section>


//         {/* ================= FAQ ================= */}

//         <section className="branding-faq">

//           <div className="branding-heading">

//             <span>
//               FAQ
//             </span>

//             <h2>
//               Branding Questions?
//             </h2>

//           </div>


//           <div className="branding-faq-container">

//             <details>

//               <summary>
//                 Why does my business need branding?
//               </summary>

//               <p>
//                 Branding helps customers recognize your
//                 business, understand your value and build
//                 trust with your company.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Do you create complete brand identities?
//               </summary>

//               <p>
//                 Yes. A branding project can include
//                 strategy, logo design, colors, typography,
//                 visual identity and brand guidelines.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Can you redesign an existing brand?
//               </summary>

//               <p>
//                 Yes. Existing brands can be refreshed or
//                 completely repositioned based on their
//                 current business goals.
//               </p>

//             </details>


//             <details>

//               <summary>
//                 Will the branding work for social media?
//               </summary>

//               <p>
//                 Yes. The visual identity can be designed
//                 to remain consistent across websites,
//                 social media and marketing materials.
//               </p>

//             </details>

//           </div>

//         </section>


//         {/* ================= CTA ================= */}

//         <section className="branding-cta">

//           <h2>
//             Ready To Build A Powerful Brand?
//           </h2>

//           <p>
//             Let's create an identity that people
//             recognize, trust and remember.
//           </p>

          
          
//           <Link to="/contact">
//    Start Your Branding Journey →
// </Link>

//         </section>

//       </main>
//     </>
//   );
// }

// export default Branding;
import React from "react";
import { Link } from "react-router-dom";

import {
  FaBullseye,
  FaPenNib,
  FaPalette,
  FaFileAlt,
  FaComments,
  FaBoxOpen,
  FaShapes,
  FaRainbow,
  FaFont,
  FaImage,
  FaCheck,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

function Branding() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .branding-page {
          --brand-bg: #030307;
          --brand-section-bg: #05050b;
          --brand-card-bg: #0d0b15;
          --brand-card-bg-two: #12101b;
          --brand-text: #ffffff;
          --brand-muted: #858592;
          --brand-soft-text: #aaaaaa;
          --brand-border: rgba(255, 255, 255, 0.08);
          --brand-border-strong: rgba(255, 255, 255, 0.14);
          --brand-purple: #a855f7;
          --brand-pink: #ec4899;
          --brand-orange: #f97316;
          --brand-purple-light: #c084fc;
          --brand-shadow: rgba(0, 0, 0, 0.6);

          min-height: 100vh;
          background: var(--brand-bg);
          color: var(--brand-text);
          font-family: Arial, sans-serif;
          overflow: hidden;
          transition:
            background 0.3s ease,
            color 0.3s ease;
        }

        /*
          Light theme support.

          This works when your Header adds:
          light-theme, light, or data-theme="light"
        */

        body.light-theme .branding-page,
        html.light-theme .branding-page,
        body.light .branding-page,
        html.light .branding-page,
        [data-theme="light"] .branding-page {
          --brand-bg: #f8f8fc;
          --brand-section-bg: #eef0f7;
          --brand-card-bg: #ffffff;
          --brand-card-bg-two: #f4f1ff;
          --brand-text: #171725;
          --brand-muted: #5f6373;
          --brand-soft-text: #555b6b;
          --brand-border: rgba(25, 25, 55, 0.12);
          --brand-border-strong: rgba(25, 25, 55, 0.2);
          --brand-shadow: rgba(40, 40, 80, 0.15);
        }

        .branding-hero {
          min-height: 90vh;
          padding: 120px 7% 80px;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .branding-hero::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          left: -180px;
          top: -180px;
          border-radius: 50%;
          background: var(--brand-purple);
          filter: blur(160px);
          opacity: 0.15;
          animation: brandGlow 7s infinite alternate;
        }

        .branding-hero::after {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          right: -150px;
          bottom: -180px;
          border-radius: 50%;
          background: var(--brand-orange);
          filter: blur(160px);
          opacity: 0.12;
          animation: brandGlowTwo 8s infinite alternate;
        }

        @keyframes brandGlow {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(130px, 100px);
          }
        }

        @keyframes brandGlowTwo {
          from {
            transform: translate(0, 0);
          }

          to {
            transform: translate(-120px, -90px);
          }
        }

        .branding-hero-content {
          width: 55%;
          position: relative;
          z-index: 5;
          animation: brandHeroIn 1s ease;
        }

        @keyframes brandHeroIn {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .branding-label {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 30px;
          border: 1px solid rgba(168, 85, 247, 0.3);
          background: rgba(168, 85, 247, 0.08);
          color: var(--brand-purple-light);
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .branding-title {
          margin: 0;
          font-size: clamp(45px, 6vw, 78px);
          line-height: 1.03;
           color: var(--meta-text);
        }

        .branding-title span {
          background: linear-gradient(
            90deg,
            var(--brand-purple),
            var(--brand-pink),
            var(--brand-orange),
            var(--brand-purple)
          );
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: brandGradient 5s linear infinite;
        }

        @keyframes brandGradient {
          to {
            background-position: 300% center;
          }
        }

        .branding-description {
          max-width: 620px;
          margin-top: 25px;
          color: var(--brand-muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .branding-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 30px;
          padding: 15px 27px;
          border-radius: 12px;
          text-decoration: none;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          background: linear-gradient(
            100deg,
            var(--brand-purple),
            var(--brand-pink),
            var(--brand-orange)
          );
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
          transition: 0.3s;
        }

        .branding-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 45px rgba(168, 85, 247, 0.55);
        }

        .branding-visual {
          position: absolute;
          right: 5%;
          width: 43%;
          height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
        }

        .branding-circle {
          position: absolute;
          width: 370px;
          height: 370px;
          border-radius: 50%;
          border: 1px dashed rgba(168, 85, 247, 0.35);
          animation: brandRotate 15s linear infinite;
        }

        .branding-circle::before {
          content: "";
          position: absolute;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: var(--brand-purple);
          box-shadow: 0 0 25px var(--brand-purple);
          top: 12px;
          left: 50%;
        }

        .branding-circle-two {
          width: 280px;
          height: 280px;
          border-color: rgba(249, 115, 22, 0.35);
          animation: brandRotateReverse 10s linear infinite;
        }

        .branding-circle-two::before {
          top: auto;
          bottom: 7px;
          background: var(--brand-orange);
          box-shadow: 0 0 25px var(--brand-orange);
        }

        @keyframes brandRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes brandRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .branding-card {
          width: 310px;
          padding: 25px;
          border-radius: 24px;
          background: var(--brand-card-bg);
          border: 1px solid var(--brand-border-strong);
          backdrop-filter: blur(15px);
          box-shadow: 0 25px 70px var(--brand-shadow);
          position: relative;
          z-index: 5;
          animation: brandingFloat 4s ease-in-out infinite;
        }

        @keyframes brandingFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }

          50% {
            transform: translateY(-18px) rotate(1deg);
          }
        }

        .brand-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .brand-card-logo {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 23px;
          font-weight: bold;
          background: linear-gradient(
            135deg,
            var(--brand-purple),
            var(--brand-pink),
            var(--brand-orange)
          );
          animation: logoPulse 2s infinite;
        }

        @keyframes logoPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .brand-card-top small {
          color: var(--brand-muted);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .brand-card-name {
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .brand-card-subtitle {
          color: var(--brand-muted);
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 25px;
        }

        .brand-line {
          height: 1px;
          background: var(--brand-border);
          margin-bottom: 20px;
        }

        .brand-color-row {
          display: flex;
          gap: 9px;
        }

        .brand-color {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          animation: colorMove 3s ease-in-out infinite;
        }

        .brand-color:nth-child(2) {
          animation-delay: 0.5s;
        }

        .brand-color:nth-child(3) {
          animation-delay: 1s;
        }

        .brand-color:nth-child(4) {
          animation-delay: 1.5s;
        }

        .brand-color-one {
          background: #a855f7;
        }

        .brand-color-two {
          background: #ec4899;
        }

        .brand-color-three {
          background: #f97316;
        }

        .brand-color-four {
          background: #facc15;
        }

        @keyframes colorMove {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .branding-floating {
          position: absolute;
          padding: 9px 14px;
          border-radius: 30px;
          background: var(--brand-card-bg-two);
          border: 1px solid var(--brand-border);
          backdrop-filter: blur(10px);
          color: var(--brand-muted);
          font-size: 9px;
          animation: brandTagFloat 4s ease-in-out infinite;
        }

        .branding-float-one {
          top: 40px;
          right: 0;
        }

        .branding-float-two {
          left: 0;
          bottom: 50px;
          animation-delay: 1.5s;
        }

        .branding-float-three {
          top: 120px;
          left: 10px;
          animation-delay: 2.5s;
        }

        @keyframes brandTagFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-13px);
          }
        }

        .branding-intro {
          padding: 100px 7%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          background: var(--brand-section-bg);
        }

        .branding-mini-title {
          color: var(--brand-purple-light);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .branding-intro h2 {
          margin: 15px 0 25px;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1.1;
        }

        .branding-intro p {
          color: var(--brand-muted);
          font-size: 14px;
          line-height: 1.9;
          margin-bottom: 15px;
        }

        .branding-intro-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 15px;
        }

        .branding-intro-card {
          padding: 24px;
          border-radius: 16px;
          background: var(--brand-card-bg);
          border: 1px solid var(--brand-border);
          transition: 0.3s;
        }

        .branding-intro-card:hover {
          transform: translateX(10px);
          border-color: rgba(168, 85, 247, 0.4);
        }

        .branding-intro-card strong {
          display: block;
          color: var(--brand-purple-light);
          font-size: 23px;
          margin-bottom: 6px;
        }

        .branding-intro-card span {
          color: var(--brand-soft-text);
          font-size: 12px;
        }

        .branding-services {
          padding: 100px 7%;
        }

        .branding-heading {
          max-width: 720px;
          text-align: center;
          margin: 0 auto 55px;
        }

        .branding-heading > span {
          color: var(--brand-purple-light);
          font-size: 10px;
          letter-spacing: 3px;
        }

        .branding-heading h2 {
          margin: 15px 0;
          font-size: clamp(32px, 5vw, 52px);
        }

        .branding-heading p {
          color: var(--brand-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .branding-service-grid {
          max-width: 1150px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .branding-service-card {
          min-height: 250px;
          padding: 30px;
          border-radius: 20px;
          background: linear-gradient(
            145deg,
            var(--brand-card-bg-two),
            var(--brand-card-bg)
          );
          border: 1px solid var(--brand-border);
          transition: 0.4s;
          animation: brandingCardMove 5s ease-in-out infinite;
        }

        .branding-service-card:nth-child(2) {
          animation-delay: 0.6s;
        }

        .branding-service-card:nth-child(3) {
          animation-delay: 1.2s;
        }

        .branding-service-card:nth-child(4) {
          animation-delay: 1.8s;
        }

        .branding-service-card:nth-child(5) {
          animation-delay: 2.4s;
        }

        .branding-service-card:nth-child(6) {
          animation-delay: 3s;
        }

        @keyframes brandingCardMove {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }

        .branding-service-card:hover {
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(168, 85, 247, 0.45);
          box-shadow: 0 20px 50px rgba(168, 85, 247, 0.12);
        }

        .branding-service-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: rgba(168, 85, 247, 0.1);
          color: var(--brand-purple-light);
          font-size: 23px;
          margin-bottom: 20px;
        }

        .branding-service-card h3 {
          margin: 0 0 12px;
          font-size: 18px;
        }

        .branding-service-card p {
          color: var(--brand-muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .brand-elements {
          padding: 100px 7%;
          background: var(--brand-section-bg);
        }

        .brand-elements-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .brand-element {
          min-height: 190px;
          padding: 25px;
          border-radius: 18px;
          background: var(--brand-card-bg);
          border: 1px solid var(--brand-border);
          transition: 0.35s;
          text-align: center;
        }

        .brand-element:hover {
          transform: translateY(-10px) rotate(1deg);
          border-color: rgba(236, 72, 153, 0.4);
        }

        .brand-element-icon {
          display: flex;
          justify-content: center;
          color: var(--brand-purple-light);
          font-size: 32px;
        }

        .brand-element h3 {
          margin: 17px 0 10px;
          font-size: 16px;
        }

        .brand-element p {
          color: var(--brand-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .branding-process {
          padding: 100px 7%;
        }

        .branding-process-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .branding-process-card {
          text-align: center;
          padding: 25px;
        }

        .branding-number {
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
            var(--brand-purple),
            var(--brand-pink),
            var(--brand-orange)
          );
          box-shadow: 0 0 30px rgba(168, 85, 247, 0.25);
          font-size: 12px;
          font-weight: bold;
          animation: numberPulse 2.5s infinite;
        }

        @keyframes numberPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        .branding-process-card h3 {
          margin-top: 20px;
          font-size: 16px;
        }

        .branding-process-card p {
          color: var(--brand-muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .branding-benefits {
          padding: 100px 10%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          background:
            radial-gradient(
              circle at 20% 50%,
              rgba(168, 85, 247, 0.1),
              transparent 35%
            ),
            var(--brand-section-bg);
        }

        .branding-benefits h2 {
          margin: 15px 0 20px;
          font-size: clamp(35px, 5vw, 58px);
        }

        .branding-benefits p {
          color: var(--brand-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .branding-benefit-list {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
        }

        .branding-benefit-list div {
          display: flex;
          align-items: center;
          padding: 18px;
          border-radius: 12px;
          background: var(--brand-card-bg);
          border: 1px solid var(--brand-border);
          color: var(--brand-soft-text);
          font-size: 13px;
          transition: 0.3s;
        }

        .branding-benefit-list div:hover {
          transform: translateX(8px);
          border-color: rgba(168, 85, 247, 0.4);
        }

        .branding-benefit-list b {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-purple-light);
          margin-right: 10px;
        }

        .branding-faq {
          padding: 100px 7%;
        }

        .branding-faq-container {
          max-width: 850px;
          margin: auto;
        }

        .branding-faq details {
          margin-bottom: 14px;
          padding: 20px 25px;
          border-radius: 15px;
          background: var(--brand-card-bg);
          border: 1px solid var(--brand-border);
        }

        .branding-faq summary {
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
        }

        .branding-faq details p {
          color: var(--brand-muted);
          font-size: 12px;
          line-height: 1.8;
          margin-top: 18px;
        }

        .branding-cta {
          margin: 70px 6%;
          padding: 75px 30px;
          text-align: center;
          border-radius: 28px;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(168, 85, 247, 0.2),
              transparent 50%
            ),
            linear-gradient(
              135deg,
              var(--brand-card-bg),
              var(--brand-card-bg-two)
            );
          border: 1px solid rgba(168, 85, 247, 0.2);
        }

        .branding-cta h2 {
          position: relative;
          font-size: clamp(30px, 4vw, 50px);
        }

        .branding-cta p {
          position: relative;
          color: var(--brand-muted);
          margin-top: 15px;
        }

        .branding-cta .branding-button {
          position: relative;
        }

        @media (max-width: 950px) {
          .branding-hero {
            min-height: auto;
            display: block;
            padding: 110px 6% 70px;
          }

          .branding-hero-content {
            width: 100%;
            text-align: center;
          }

          .branding-description {
            margin-left: auto;
            margin-right: auto;
          }

          .branding-visual {
            position: relative;
            right: auto;
            width: 100%;
            height: 370px;
            margin-top: 45px;
          }

          .branding-intro {
            grid-template-columns: 1fr;
          }

          .branding-service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .brand-elements-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .branding-process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .branding-benefits {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .branding-title {
            font-size: 44px;
          }

          .branding-description {
            font-size: 13px;
          }

          .branding-visual {
            height: 310px;
          }

          .branding-circle {
            width: 260px;
            height: 260px;
          }

          .branding-circle-two {
            width: 180px;
            height: 180px;
          }

          .branding-card {
            width: 245px;
            padding: 18px;
          }

          .brand-card-name {
            font-size: 19px;
          }

          .brand-color {
            width: 34px;
            height: 34px;
          }

          .branding-floating {
            font-size: 8px;
            padding: 7px 10px;
          }

          .branding-service-grid,
          .brand-elements-grid,
          .branding-process-grid {
            grid-template-columns: 1fr;
          }

          .branding-intro {
            padding: 70px 5%;
          }

          .branding-services,
          .brand-elements,
          .branding-process,
          .branding-faq {
            padding: 70px 5%;
          }

          .branding-benefits {
            padding: 70px 6%;
          }

          .branding-cta {
            margin: 40px 5%;
            padding: 55px 20px;
          }
        }
      `}</style>

      <main className="branding-page">
        {/* HERO */}
        <section className="branding-hero">
          <div className="branding-hero-content">
            <div className="branding-label">BRANDING SERVICES</div>

            <h1 className="branding-title">
              Build A Brand
              <br />
              <span>People Remember.</span>
            </h1>

            <p className="branding-description">
              We create powerful brand identities that communicate your story,
              build trust and make your business stand out in a crowded digital
              world.
            </p>

            <Link to="/contact" className="branding-button">
              Build Your Brand
              <FaArrowRight />
            </Link>
          </div>

          <div className="branding-visual">
            <div className="branding-floating branding-float-one">
              BRAND IDENTITY
            </div>

            <div className="branding-floating branding-float-two">
              CREATIVE DESIGN
            </div>

            <div className="branding-floating branding-float-three">
              VISUAL STORY
            </div>

            <div className="branding-circle"></div>
            <div className="branding-circle branding-circle-two"></div>

            <div className="branding-card">
              <div className="brand-card-top">
                <div className="brand-card-logo">
                  <FaStar />
                </div>

                <small>BRAND SYSTEM</small>
              </div>

              <div className="brand-card-name">ROHIL</div>

              <div className="brand-card-subtitle">
                DIGITAL SPARK MEDIA
              </div>

              <div className="brand-line"></div>

              <div className="brand-color-row">
                <div className="brand-color brand-color-one"></div>
                <div className="brand-color brand-color-two"></div>
                <div className="brand-color brand-color-three"></div>
                <div className="brand-color brand-color-four"></div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="branding-intro">
          <div>
            <span className="branding-mini-title">BRAND STRATEGY</span>

            <h2>
              Your Brand Is
              <br />
              More Than A Logo
            </h2>

            <p>
              A strong brand creates an emotional connection with your
              audience. It tells people who you are, what you stand for and why
              they should choose you.
            </p>

            <p>
              We combine strategy, creativity and visual design to create a
              brand identity that is memorable and consistent across every
              touchpoint.
            </p>
          </div>

          <div className="branding-intro-right">
            <div className="branding-intro-card">
              <strong>01</strong>
              <span>Define a clear and memorable brand identity</span>
            </div>

            <div className="branding-intro-card">
              <strong>02</strong>
              <span>Build trust and credibility with your audience</span>
            </div>

            <div className="branding-intro-card">
              <strong>03</strong>
              <span>Create consistency across every platform</span>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="branding-services">
          <div className="branding-heading">
            <span>WHAT WE CREATE</span>

            <h2>Complete Branding Solutions</h2>

            <p>
              From strategy and naming to visual identity and brand
              guidelines, we create everything your brand needs to grow
              confidently.
            </p>
          </div>

          <div className="branding-service-grid">
            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaBullseye />
              </div>

              <h3>Brand Strategy</h3>

              <p>
                Define your positioning, audience, personality and unique value
                proposition.
              </p>
            </div>

            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaPenNib />
              </div>

              <h3>Logo Design</h3>

              <p>
                Create a distinctive logo that represents your business and
                becomes instantly recognizable.
              </p>
            </div>

            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaPalette />
              </div>

              <h3>Visual Identity</h3>

              <p>
                Develop colors, typography, graphics and visual elements that
                define your brand.
              </p>
            </div>

            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaFileAlt />
              </div>

              <h3>Brand Guidelines</h3>

              <p>
                Establish clear guidelines to keep your brand consistent across
                all platforms.
              </p>
            </div>

            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaComments />
              </div>

              <h3>Brand Messaging</h3>

              <p>
                Build a strong communication style that connects your brand
                with your audience.
              </p>
            </div>

            <div className="branding-service-card">
              <div className="branding-service-icon">
                <FaBoxOpen />
              </div>

              <h3>Marketing Collateral</h3>

              <p>
                Design professional business materials that maintain your brand
                identity.
              </p>
            </div>
          </div>
        </section>

        {/* BRAND ELEMENTS */}
        <section className="brand-elements">
          <div className="branding-heading">
            <span>BRAND ELEMENTS</span>

            <h2>Every Detail Matters</h2>

            <p>
              We create a complete visual language so your brand looks
              consistent everywhere.
            </p>
          </div>

          <div className="brand-elements-grid">
            <div className="brand-element">
              <div className="brand-element-icon">
                <FaShapes />
              </div>

              <h3>Logo</h3>

              <p>
                A unique visual mark that makes your business instantly
                recognizable.
              </p>
            </div>

            <div className="brand-element">
              <div className="brand-element-icon">
                <FaRainbow />
              </div>

              <h3>Colors</h3>

              <p>
                Strategic colors that communicate your brand personality and
                emotion.
              </p>
            </div>

            <div className="brand-element">
              <div className="brand-element-icon">
                <FaFont />
              </div>

              <h3>Typography</h3>

              <p>
                Fonts and typography systems that create a consistent visual
                voice.
              </p>
            </div>

            <div className="brand-element">
              <div className="brand-element-icon">
                <FaImage />
              </div>

              <h3>Visual Style</h3>

              <p>
                Images, graphics and design elements that strengthen your brand
                identity.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="branding-process">
          <div className="branding-heading">
            <span>OUR PROCESS</span>

            <h2>From Idea To Identity</h2>
          </div>

          <div className="branding-process-grid">
            <div className="branding-process-card">
              <div className="branding-number">01</div>

              <h3>Discover</h3>

              <p>
                Understand your business, audience, competitors and goals.
              </p>
            </div>

            <div className="branding-process-card">
              <div className="branding-number">02</div>

              <h3>Define</h3>

              <p>
                Create your positioning, personality, messaging and brand
                direction.
              </p>
            </div>

            <div className="branding-process-card">
              <div className="branding-number">03</div>

              <h3>Design</h3>

              <p>
                Transform the strategy into a powerful visual identity.
              </p>
            </div>

            <div className="branding-process-card">
              <div className="branding-number">04</div>

              <h3>Launch</h3>

              <p>
                Apply your new identity consistently across your digital and
                physical presence.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="branding-benefits">
          <div>
            <span className="branding-mini-title">WHY BRANDING</span>

            <h2>
              Make Your Business
              <br />
              Unforgettable
            </h2>

            <p>
              Strong branding helps customers recognize your business, trust
              your services and remember you when they are ready to buy.
            </p>
          </div>

          <div className="branding-benefit-list">
            <div>
              <b>
                <FaCheck />
              </b>
              Build strong brand recognition
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Increase customer trust
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Stand out from competitors
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Create consistent communication
            </div>

            <div>
              <b>
                <FaCheck />
              </b>
              Build long-term brand value
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="branding-faq">
          <div className="branding-heading">
            <span>FAQ</span>

            <h2>Branding Questions?</h2>
          </div>

          <div className="branding-faq-container">
            <details>
              <summary>Why does my business need branding?</summary>

              <p>
                Branding helps customers recognize your business, understand
                your value and build trust with your company.
              </p>
            </details>

            <details>
              <summary>
                Do you create complete brand identities?
              </summary>

              <p>
                Yes. A branding project can include strategy, logo design,
                colors, typography, visual identity and brand guidelines.
              </p>
            </details>

            <details>
              <summary>Can you redesign an existing brand?</summary>

              <p>
                Yes. Existing brands can be refreshed or completely
                repositioned based on their current business goals.
              </p>
            </details>

            <details>
              <summary>
                Will the branding work for social media?
              </summary>

              <p>
                Yes. The visual identity can be designed to remain consistent
                across websites, social media and marketing materials.
              </p>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="branding-cta">
          <h2>Ready To Build A Powerful Brand?</h2>

          <p>
            Let's create an identity that people recognize, trust and remember.
          </p>

          <Link to="/contact" className="branding-button">
            Start Your Branding Journey
            <FaArrowRight />
          </Link>
        </section>
      </main>
    </>
  );
}

export default Branding;