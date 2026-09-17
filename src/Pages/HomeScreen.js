
// // import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // function HomeScreen() {
// //   function Counter({ end, suffix = "" }) {

// //   const [count, setCount] = useState(0);

// //   useEffect(() => {

// //     let start = 0;

// //     const duration = 1800;
// //     const increment = end / (duration / 30);

// //     const timer = setInterval(() => {

// //       start += increment;

// //       if (start >= end) {

// //         setCount(end);

// //         clearInterval(timer);

// //       } else {

// //         setCount(Math.floor(start));

// //       }

// //     }, 30);

// //     return () => clearInterval(timer);

// //   }, [end]);


// //   return (
// //     <div className="stat-number">
// //       {count}
// //       {suffix}
// //     </div>
// //   );
// // }

// // const [openFAQ, setOpenFAQ] = useState(null);
// // const faqs = [
// //   {
// //     q: "What services do you offer?",
// //     a: "We provide SEO, Google Ads, Meta Ads, Social Media Marketing and Branding Services."
// //   },
// //   {
// //     q: "How can SEO help my business?",
// //     a: "SEO improves your website visibility and helps attract more relevant organic traffic."
// //   },
// //   {
// //     q: "Do you provide Google Ads management?",
// //     a: "Yes. We create and manage targeted Google Ads campaigns based on your business goals."
// //   },
// //   {
// //     q: "Do you provide social media marketing?",
// //     a: "Yes. We help businesses build their social media presence and engage with their target audience."
// //   },
// //   {
// //     q: "How can I get started?",
// //     a: "Contact us and share your business requirements. We will help you choose the right strategy."
// //   }
// // ];
// //   return (
// //     <>
// //       <style>{`

// //         * {
// //           box-sizing: border-box;
// //         }

// //         html {
// //           scroll-behavior: smooth;
// //         }

// //         /* =====================================================
// //            HERO
// //         ===================================================== */

// //         .home {
// //           position: relative;
// //           min-height: calc(100vh - 105px);
// //           overflow: hidden;

// //           display: flex;
// //           align-items: center;

// //           padding: 70px 5%;

// //           background:
// //             radial-gradient(
// //               circle at 75% 45%,
// //               rgba(248, 248, 248, 0.2),
// //               transparent 32%
// //             ),
// //             radial-gradient(
// //               circle at 15% 20%,
// //               rgba(160, 40, 220, 0.08),
// //               transparent 28%
// //             ),
// //             #020207;
// //         }

// //         /* =====================================================
// //            STARS
// //         ===================================================== */

// //         .stars {
// //           position: absolute;
// //           inset: 0;
// //           pointer-events: none;
// //         }

// //         .star {
// //           position: absolute;
// //           width: 3px;
// //           height: 3px;
// //           border-radius: 50%;
// //           background: white;

// //           box-shadow:
// //             0 0 8px #b43cff,
// //             0 0 18px #673cff;

// //           animation: twinkle 3s infinite;
// //         }

// //         .star:nth-child(1) {
// //           left: 10%;
// //           top: 20%;
// //         }

// //         .star:nth-child(2) {
// //           left: 25%;
// //           top: 70%;
// //           animation-delay: 1s;
// //         }

// //         .star:nth-child(3) {
// //           left: 45%;
// //           top: 15%;
// //           animation-delay: 2s;
// //         }

// //         .star:nth-child(4) {
// //           left: 62%;
// //           top: 75%;
// //           animation-delay: .5s;
// //         }

// //         .star:nth-child(5) {
// //           left: 78%;
// //           top: 18%;
// //           animation-delay: 1.5s;
// //         }

// //         .star:nth-child(6) {
// //           left: 90%;
// //           top: 45%;
// //           animation-delay: 2.5s;
// //         }

// //         @keyframes twinkle {
// //           0%,100% {
// //             opacity: .2;
// //             transform: scale(.5);
// //           }

// //           50% {
// //             opacity: 1;
// //             transform: scale(1.5);
// //           }
// //         }

// //         /* =====================================================
// //            HERO CONTENT
// //         ===================================================== */

// //         .home-content {
// //           position: relative;
// //           z-index: 5;

// //           width: 55%;
// //           max-width: 760px;

// //           animation: contentReveal 1.2s ease;
// //         }

// //         @keyframes contentReveal {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-50px);
// //           }

// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }

// //         .welcome-text {
// //           color: #c1c1cb;
// //           font-size: 16px;
// //           letter-spacing: 2px;
// //         }

// //         .home-title {
// //           margin: 15px 0 0;

// //           font-size: clamp(48px, 5.5vw, 82px);

// //           line-height: 1.05;

// //           font-weight: 800;

// //           letter-spacing: -3px;

// //           background: linear-gradient(
// //             90deg,
// //             #c02cff,
// //             #42baff,
// //             #b44aff,
// //             #55bfff
// //           );

// //           background-size: 300% 300%;

// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;

// //           animation: gradientMove 5s infinite;
// //         }

// //         @keyframes gradientMove {
// //           0% {
// //             background-position: 0% 50%;
// //           }

// //           50% {
// //             background-position: 100% 50%;
// //           }

// //           100% {
// //             background-position: 0% 50%;
// //           }
// //         }

// //         .home-subtitle {
// //           margin-top: 18px;

// //           font-size: clamp(27px, 3vw, 46px);

// //           font-weight: 500;

// //           color: white;
// //         }

// //         .home-services {
// //           display: flex;
// //           flex-wrap: wrap;
// //           align-items: center;

// //           gap: 9px;

// //           margin-top: 20px;

// //           color: #d0d0d8;

// //           font-size: 16px;
// //         }

// //         .service-dot {
// //           color: #a940ff;
// //         }

// //         .home-description {
// //           max-width: 650px;

// //           margin-top: 23px;

// //           color: #a5a5b2;

// //           font-size: 17px;

// //           line-height: 1.7;
// //         }

// //         /* =====================================================
// //            BUTTONS
// //         ===================================================== */

// //         .home-buttons {
// //           display: flex;
// //           gap: 16px;

// //           margin-top: 32px;
// //         }

// //         .home-btn {
// //           display: flex;
// //           align-items: center;
// //           gap: 14px;

// //           padding: 15px 23px;

// //           border-radius: 11px;

// //           text-decoration: none;

// //           font-size: 15px;
// //           font-weight: 600;

// //           transition: .3s;
// //         }

// //         .primary-home-btn {
// //           color: white;

// //           background: linear-gradient(
// //             110deg,
// //             #a72df5,
// //             #654cff,
// //             #1478f5
// //           );

// //           box-shadow:
// //             0 0 25px rgba(130,50,255,.35);
// //         }

// //         .primary-home-btn:hover {
// //           transform: translateY(-4px);

// //           box-shadow:
// //             0 0 40px rgba(130,50,255,.65);
// //         }

// //         .secondary-home-btn {
// //           color: #eee;

// //           border: 1px solid rgba(255,255,255,.22);

// //           background: rgba(255,255,255,.03);
// //         }

// //         .secondary-home-btn:hover {
// //           color: #c34cff;

// //           border-color: #a83dff;

// //           transform: translateY(-4px);
// //         }

// //         /* =====================================================
// //            SOCIAL
// //         ===================================================== */

// //         .home-social {
// //           display: flex;
// //           align-items: center;
// //           gap: 13px;

// //           margin-top: 32px;

// //           color: #aaaab5;
// //         }

// //         .social-icon {
// //           width: 34px;
// //           height: 34px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 50%;

// //           color: white;

// //           text-decoration: none;

// //           background: rgba(255,255,255,.07);

// //           border: 1px solid rgba(255,255,255,.1);

// //           transition: .3s;
// //         }

// //         .social-icon:hover {
// //           transform: translateY(-5px);

// //           background: #793cff;

// //           box-shadow:
// //             0 0 18px rgba(130,60,255,.7);
// //         }

// //         /* =====================================================
// //            HERO LOGO
// //         ===================================================== */

// //         .home-visual {
// //           position: absolute;

// //           z-index: 2;

// //           right: 4%;
// //           top: 50%;

// //           width: 510px;
// //           height: 510px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           transform: translateY(-50%);

// //           animation: floating 5s ease-in-out infinite;
// //         }

// //         @keyframes floating {
// //           0%,100% {
// //             transform: translateY(-50%);
// //           }

// //           50% {
// //             transform: translateY(calc(-50% - 12px));
// //           }
// //         }

// //         .neon-ring {
// //           position: absolute;

// //           width: 100%;
// //           height: 100%;

// //           border-radius: 50%;

// //           border: 3px solid #8b35ff;

// //           box-shadow:
// //             0 0 15px #8b35ff,
// //             0 0 45px rgba(91,60,255,.6),
// //             inset 0 0 35px rgba(130,50,255,.3);

// //           animation: ringRotate 12s linear infinite;
// //         }

// //         @keyframes ringRotate {
// //           from {
// //             transform: rotate(0deg);
// //           }

// //           to {
// //             transform: rotate(360deg);
// //           }
// //         }

// //         .inner-ring {
// //           position: absolute;

// //           width: 78%;
// //           height: 78%;

// //           border-radius: 50%;

// //           border: 1px solid rgba(60,150,255,.45);

// //           animation: ringReverse 16s linear infinite;
// //         }

// //         @keyframes ringReverse {
// //           from {
// //             transform: rotate(360deg);
// //           }

// //           to {
// //             transform: rotate(0deg);
// //           }
// //         }

// //         .inner-ring-two {
// //           position: absolute;

// //           width: 62%;
// //           height: 62%;

// //           border-radius: 50%;

// //           border: 1px solid rgba(200,60,255,.4);

// //           animation: ringRotate 10s linear infinite;
// //         }

// //         .hero-logo {
// //           position: relative;
// //           z-index: 5;

// //           width: 320px;

// //           filter:
// //             drop-shadow(
// //               0 0 18px rgba(180,70,255,.5)
// //             );

// //           animation: logoPulse 3s infinite;
// //         }

// //         @keyframes logoPulse {
// //           0%,100% {
// //             transform: scale(1);
// //           }

// //           50% {
// //             transform: scale(1.04);
// //           }
// //         }

// //         /* =====================================================
// //            STATS
// //         ===================================================== */

// //         .stats-section {
// //           position: relative;

// //           padding: 80px 6%;

// //           background:
// //             linear-gradient(
// //               180deg,
// //               #020207,
// //               #080513
// //             );

// //           border-top: 1px solid rgba(255,255,255,.06);
// //         }

// //         .section-heading {
// //           text-align: center;

// //           margin-bottom: 45px;
// //         }

// //         .section-heading span {
// //           color: #a943ff;

// //           font-size: 13px;

// //           letter-spacing: 3px;
// //         }

// //         .section-heading h2 {
// //           margin-top: 12px;

// //           font-size: clamp(30px,4vw,52px);

// //           background: linear-gradient(
// //             90deg,
// //             #fff,
// //             #bd67ff,
// //             #55baff
// //           );

// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //         }

// //         .stats-grid {
// //           max-width: 1100px;

// //           margin: auto;

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4,1fr);

// //           gap: 20px;
// //         }

// //         .stat-card {
// //           position: relative;

// //           padding: 30px 20px;

// //           text-align: center;

// //           border-radius: 18px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255,255,255,.07),
// //               rgba(255,255,255,.02)
// //             );

// //           border: 1px solid rgba(160,60,255,.18);

// //           overflow: hidden;

// //           transition: .35s;
// //         }

// //         .stat-card::before {
// //           content: "";

// //           position: absolute;

// //           width: 100px;
// //           height: 100px;

// //           top: -50px;
// //           right: -50px;

// //           background: #9c36ff;

// //           filter: blur(60px);

// //           opacity: .35;
// //         }

// //         .stat-card:hover {
// //           transform: translateY(-8px);

// //           border-color: #9d43ff;

// //           box-shadow:
// //             0 15px 40px rgba(130,40,255,.15);
// //         }

// //         .stat-number {
// //           font-size: 38px;

// //           font-weight: 800;

// //           background: linear-gradient(
// //             90deg,
// //             #c137ff,
// //             #45baff
// //           );

// //           -webkit-background-clip: text;
// //           -webkit-text-fill-color: transparent;
// //         }

// //         .stat-label {
// //           margin-top: 8px;

// //           color: #aaaab6;

// //           font-size: 14px;
// //         }

// //         /* =====================================================
// //            SERVICES
// //         ===================================================== */

// //         .services-section {
// //           padding: 100px 6%;

// //           background: #030309;
// //         }

// //         .services-grid {
// //           max-width: 1200px;

// //           margin: auto;

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4,1fr);

// //           gap: 22px;
// //         }

// //         .service-card {
// //           position: relative;

// //           padding: 32px 25px;

// //           min-height: 230px;

// //           border-radius: 20px;

// //           background:
// //             linear-gradient(
// //               145deg,
// //               rgba(255,255,255,.07),
// //               rgba(255,255,255,.025)
// //             );

// //           border: 1px solid rgba(255,255,255,.08);

// //           transition: .4s;

// //           overflow: hidden;
// //         }

// //         .service-card::after {
// //           content: "";

// //           position: absolute;

// //           width: 140px;
// //           height: 140px;

// //           right: -60px;
// //           bottom: -70px;

// //           background: #843cff;

// //           filter: blur(70px);

// //           opacity: .25;
// //         }

// //         .service-card:hover {
// //           transform:
// //             translateY(-10px)
// //             scale(1.02);

// //           border-color: rgba(170,60,255,.5);

// //           box-shadow:
// //             0 20px 50px rgba(100,30,200,.18);
// //         }

// //         .service-icon {
// //           width: 55px;
// //           height: 55px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 15px;

// //           font-size: 25px;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               rgba(170,50,255,.25),
// //               rgba(40,120,255,.15)
// //             );

// //           border: 1px solid rgba(180,70,255,.25);
// //         }

// //         .service-card h3 {
// //           margin-top: 22px;
// //             color: #a85cff;
// //           font-size: 20px;
// //         }

// //         .service-card p {
// //           margin-top: 10px;

// //           color: #9999a7;

// //           line-height: 1.6;

// //           font-size: 14px;
// //         }

// //         /* =====================================================
// //            WHY US
// //         ===================================================== */

// //         .why-section {
// //           padding: 100px 6%;

// //           background:
// //             radial-gradient(
// //               circle at center,
// //               rgba(90,35,160,.15),
// //               transparent 45%
// //             ),
// //             #05030b;
// //         }

// //         .why-grid {
// //           max-width: 1150px;

// //           margin: auto;

// //           display: grid;

// //           grid-template-columns:
// //             repeat(3,1fr);

// //           gap: 25px;
// //         }

// //         .why-card {
// //           padding: 35px 28px;

// //           text-align: center;

// //           border-radius: 20px;

// //           border: 1px solid rgba(255,255,255,.08);

// //           background: rgba(255,255,255,.035);

// //           transition: .35s;
// //         }

// //         .why-card:hover {
// //           transform: translateY(-8px);

// //           border-color: #9142ff;

// //           box-shadow:
// //             0 0 35px rgba(120,50,255,.12);
// //         }

// //         .why-number {
// //           font-size: 35px;

// //           font-weight: 800;

// //           color: #a940ff;
// //         }

// //         .why-card h3 {
// //           margin-top: 15px;
// //                   color:rgba(180,70,255,.25);
// //         }

// //         .why-card p {
// //           margin-top: 10px;

// //           color: #9999a6;

// //           line-height: 1.6;

// //           font-size: 14px;
// //         }

// //         /* =====================================================
// //            PROCESS
// //         ===================================================== */

// //         .process-section {
// //           padding: 100px 6%;

// //           background: #020207;
// //         }

// //         .process-grid {
// //           max-width: 1100px;

// //           margin: auto;

// //           display: grid;

// //           grid-template-columns:
// //             repeat(4,1fr);

// //           gap: 20px;
// //         }

// //         .process-card {
// //           position: relative;

// //           padding: 30px 20px;

// //           text-align: center;
// //         }

// //         .process-card::after {
// //           content: "→";

// //           position: absolute;

// //           top: 35px;
// //           right: -17px;

// //           color: #913cff;

// //           font-size: 25px;
// //         }

// //         .process-card:last-child::after {
// //           display: none;
// //         }

// //         .process-circle {
// //           width: 65px;
// //           height: 65px;

// //           margin: auto;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 50%;

// //           background:
// //             linear-gradient(
// //               135deg,
// //               #9c35ff,
// //               #306eff
// //             );

// //           font-size: 20px;

// //           font-weight: 800;

// //           box-shadow:
// //             0 0 25px rgba(130,50,255,.35);
// //         }

// //         .process-card h3 {
// //           margin-top: 20px;
// //         }

// //         .process-card p {
// //           margin-top: 8px;

// //           color: #92929e;

// //           font-size: 14px;

// //           line-height: 1.5;
// //         }

// //         /* =====================================================
// //            CTA
// //         ===================================================== */

// //     .cta-section {
// //   position: relative;

// //   margin: 0;
// //   padding: 70px 6%;

// //   text-align: center;

// //   border-radius: 0;

// //   overflow: hidden;

// //   background:
// //     radial-gradient(
// //       circle at 50% 0%,
// //       rgba(100, 70, 255, 0.25),
// //       transparent 45%
// //     ),
// //     linear-gradient(
// //       135deg,
// //       #050509,
// //       #0b0915,
// //       #050814
// //     );

// //   border: none;

// //   box-shadow: none;
// // }
  
// //        .cta-section::before {
// //   content: "";

// //   position: absolute;

// //   width: 300px;
// //   height: 300px;

// //   top: -150px;
// //   left: 50%;

// //   transform: translateX(-50%);

// //   background: #9e3dff;

// //   filter: blur(130px);

// //   opacity: .20;

// //   pointer-events: none;
// // }

// //         .cta-section h2 {
// //   position: relative;

// //   color: #ffffff;

// //   font-size: clamp(30px, 4vw, 52px);

// //   z-index: 2;
// // }

// // .cta-section p {
// //   position: relative;

// //   margin-top: 15px;

// //   color: #aaaab5;

// //   z-index: 2;
// // }

// //         .cta-button {
// //           position: relative;

// //           display: inline-flex;

// //           margin-top: 30px;

// //           padding: 16px 30px;

// //           border-radius: 12px;

// //           color: white;

// //           text-decoration: none;

// //           font-weight: 600;

// //           background:
// //             linear-gradient(
// //               100deg,
// //               #a52df4,
// //               #614cff,
// //               #176df5
// //             );

// //           box-shadow:
// //             0 0 30px rgba(120,50,255,.3);

// //           transition: .3s;
// //         }

// //         .cta-button:hover {
// //           transform: translateY(-4px) scale(1.03);

// //           box-shadow:
// //             0 0 45px rgba(120,50,255,.55);
// //         }
// // /* =====================================================
// //    FAQ SECTION
// // ===================================================== */

// // .faq-section {
// //   padding: 90px 6%;
// //   background: #030308;
// //   color: white;
// // }


// // /* HEADING */

// // .faq-section .section-heading {
// //   text-align: center;
// //   margin-bottom: 50px;
// // }

// // .faq-section .section-heading span {
// //   color: #a85cff;
// //   font-size: 11px;
// //   font-weight: 700;
// //   letter-spacing: 3px;
// // }

// // .faq-section .section-heading h2 {
// //   margin-top: 15px;

// //   font-size: clamp(32px, 5vw, 52px);

// //   background:
// //     linear-gradient(
// //       90deg,
// //       #ffffff,
// //       #a66cff,
// //       #4f8cff
// //     );

// //   -webkit-background-clip: text;
// //   background-clip: text;

// //   color: transparent;
// // }


// // /* FAQ CONTAINER */

// // .faq-container {
// //   max-width: 900px;
// //   margin: auto;
// // }


// // /* FAQ ITEM */

// // .faq-item {
// //   margin-bottom: 14px;

// //   border-radius: 16px;

// //   background:
// //     linear-gradient(
// //       145deg,
// //       #12101b,
// //       #0b0d16
// //     );

// //   border: 1px solid
// //     rgba(255, 255, 255, 0.08);

// //   overflow: hidden;

// //   transition: .3s ease;
// // }


// // .faq-item:hover {
// //   border-color:
// //     rgba(140, 80, 255, .4);

// //   transform: translateY(-2px);
// // }


// // /* QUESTION */

// // .faq-question {
// //   width: 100%;

// //   padding: 22px 25px;

// //   display: flex;

// //   align-items: center;

// //   justify-content: space-between;

// //   gap: 20px;

// //   border: none;

// //   outline: none;

// //   background: transparent;

// //   color: #ffffff;

// //   text-align: left;

// //   cursor: pointer;

// //   font-size: 14px;

// //   font-weight: 600;
// // }


// // .faq-question span {
// //   min-width: 32px;
// //   height: 32px;

// //   display: flex;

// //   align-items: center;
// //   justify-content: center;

// //   border-radius: 50%;

// //   background:
// //     rgba(130, 70, 255, .12);

// //   color: #a66cff;

// //   font-size: 21px;

// //   transition: .3s ease;
// // }


// // /* ANSWER */

// // .faq-answer {
// //   padding:
// //     0 25px 22px;

// //   color: #92929f;

// //   font-size: 13px;

// //   line-height: 1.8;

// //   animation:
// //     faqOpen .35s ease;
// // }


// // @keyframes faqOpen {

// //   from {
// //     opacity: 0;
// //     transform: translateY(-8px);
// //   }

// //   to {
// //     opacity: 1;
// //     transform: translateY(0);
// //   }

// // }


// // /* MOBILE */

// // @media (max-width: 600px) {

// //   .faq-section {
// //     padding: 65px 15px;
// //   }

// //   .faq-section .section-heading {
// //     margin-bottom: 35px;
// //   }

// //   .faq-section .section-heading h2 {
// //     font-size: 34px;
// //   }

// //   .faq-question {
// //     padding: 18px;

// //     font-size: 13px;
// //   }

// //   .faq-question span {
// //     min-width: 28px;
// //     height: 28px;

// //     font-size: 18px;
// //   }

// //   .faq-answer {
// //     padding:
// //       0 18px 18px;

// //     font-size: 12px;
// //   }

// // }
// //         /* =====================================================
// //            AI BUTTON
// //         ===================================================== */

// //         .ai-button {
// //           position: fixed;

// //           right: 28px;
// //           bottom: 88px;

// //           z-index: 999;

// //           width: 78px;
// //           height: 78px;

// //           display: flex;

// //           flex-direction: column;

// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 50%;

// //           color: white;

// //           text-decoration: none;

// //           background:
// //             radial-gradient(
// //               circle,
// //               #6636a0,
// //               #180c29
// //             );

// //           border: 2px solid #9d43ff;

// //           box-shadow:
// //             0 0 15px #9d43ff,
// //             0 0 35px rgba(120,50,255,.5);

// //           animation: aiFloat 3s infinite;
// //         }

// //         .ai-icon {
// //           font-size: 27px;
// //         }

// //         .ai-text {
// //           font-size: 10px;
// //           margin-top: 2px;
// //         }

// //         @keyframes aiFloat {
// //           0%,100% {
// //             transform: translateY(0);
// //           }

// //           50% {
// //             transform: translateY(-8px);
// //           }
// //         }

// //         /* =====================================================
// //            WHATSAPP
// //         ===================================================== */

// //         .whatsapp-button {
// //           position: fixed;

// //           right: 30px;
// //           bottom: 15px;

// //           z-index: 999;

// //           width: 56px;
// //           height: 56px;

// //           display: flex;
// //           align-items: center;
// //           justify-content: center;

// //           border-radius: 50%;

// //           background: #25d366;

// //           color: white;

// //           text-decoration: none;

// //           font-size: 26px;

// //           box-shadow:
// //             0 0 20px rgba(37,211,102,.5);
// //         }

// //         /* =====================================================
// //            RESPONSIVE
// //         ===================================================== */

// //         @media (max-width: 1200px) {

// //           .home-visual {
// //             width: 400px;
// //             height: 400px;

// //             right: -30px;
// //           }

// //           .hero-logo {
// //             width: 260px;
// //           }

// //           .stats-grid,
// //           .services-grid {
// //             grid-template-columns:
// //               repeat(2,1fr);
// //           }

// //         }

// //         @media (max-width: 900px) {

// //           .home {
// //             min-height: auto;

// //             padding: 60px 20px 100px;

// //             display: block;

// //             text-align: center;
// //           }

// //           .home-content {
// //             width: 100%;
// //             max-width: 700px;

// //             margin: auto;
// //           }

// //           .home-services {
// //             justify-content: center;
// //           }

// //           .home-description {
// //             margin-left: auto;
// //             margin-right: auto;
// //           }

// //           .home-buttons {
// //             justify-content: center;
// //             flex-wrap: wrap;
// //           }

// //           .home-social {
// //             justify-content: center;
// //           }

// //           .home-visual {
// //             position: relative;

// //             top: auto;
// //             right: auto;

// //             width: 330px;
// //             height: 330px;

// //             margin: 70px auto -40px;

// //             transform: none;

// //             opacity: .8;
// //           }

// //           .hero-logo {
// //             width: 210px;
// //           }

// //           .stats-grid,
// //           .services-grid,
// //           .why-grid {
// //             grid-template-columns: 1fr 1fr;
// //           }

// //           .process-grid {
// //             grid-template-columns: 1fr 1fr;
// //           }

// //           .process-card::after {
// //             display: none;
// //           }

// //         }

// //         @media (max-width: 600px) {

// //           .home {
// //             padding: 50px 16px 90px;
// //           }

// //           .home-title {
// //             font-size: 42px;
// //           }

// //           .home-subtitle {
// //             font-size: 23px;
// //           }

// //           .home-services {
// //             font-size: 13px;
// //           }

// //           .home-description {
// //             font-size: 14px;
// //           }

// //           .home-buttons {
// //             flex-direction: column;
// //           }

// //           .home-btn {
// //             justify-content: center;
// //           }

// //           .home-visual {
// //             width: 285px;
// //             height: 285px;

// //             margin-top: 280px;
// //           }

// //           .hero-logo {
// //             width: 180px;
// //           }

// //           .stats-grid,
// //           .services-grid,
// //           .why-grid,
// //           .process-grid {
// //             grid-template-columns: 1fr;
// //           }

// //           .stats-section,
// //           .services-section,
// //           .why-section,
// //           .process-section {
// //             padding: 70px 18px;
// //           }

// //           .cta-section {
// //             margin: 40px 15px;
// //             padding: 55px 20px;
// //           }

// //           .ai-button {
// //             width: 60px;
// //             height: 60px;

// //             right: 12px;
// //             bottom: 82px;
// //           }

// //           .ai-icon {
// //             font-size: 22px;
// //           }

// //           .whatsapp-button {
// //             width: 48px;
// //             height: 48px;

// //             right: 18px;
// //             bottom: 15px;

// //             font-size: 22px;
// //           }

// //         }

// //       `}</style>

// //       {/* =====================================================
// //           HERO
// //       ===================================================== */}

// //       <section className="home" id="home">

// //         <div className="stars">
// //           {Array.from({ length: 6 }).map((_, i) => (
// //             <span
// //               className="star"
// //               key={i}
// //             />
// //           ))}
// //         </div>

// //         <div className="home-content">

// //           <span className="welcome-text">
// //             WELCOME TO
// //           </span>

// //           <h1 className="home-title">
// //             Rohil Spark Media
// //           </h1>

// //           <h2 className="home-subtitle">
// //             Digital Marketing Agency
// //           </h2>

// //           <div className="home-services">

// //             <span>SEO</span>
// //             <span className="service-dot">•</span>

// //             <span>Google Ads</span>
// //             <span className="service-dot">•</span>

// //             <span>Meta Ads</span>
// //             <span className="service-dot">•</span>

// //             <span>Branding</span>
// //             <span className="service-dot">•</span>

// //             <span>Social Media</span>
// //             <span className="service-dot">•</span>

// //             <span>Lead Generation</span>

// //           </div>

// //           <p className="home-description">
// //             We help businesses grow online with creative
// //             strategies, AI-powered marketing & result-driven
// //             campaigns.
// //           </p>

// //       <div className="home-buttons">

// //   <Link
// //     to="/book-consultation"
// //     className="home-btn primary-home-btn"
// //   >
// //     Get Free Consultation
// //     <span>→</span>
// //   </Link>

// //   <Link
// //     to="/services"
// //     className="home-btn secondary-home-btn"
// //   >
// //     Explore Our Services
// //     <span>▶</span>
// //   </Link>

// // </div>

// // <div className="home-social">

// //   <span>Follow Us On</span>

// //   <Link
// //     to="/facebook"
// //     className="social-icon"
// //     aria-label="Facebook"
// //   >
// //     f
// //   </Link>

// //   <Link
// //     to="/instagram"
// //     className="social-icon"
// //     aria-label="Instagram"
// //   >
// //     ◎
// //   </Link>

// //   <Link
// //     to="/linkedin"
// //     className="social-icon"
// //     aria-label="LinkedIn"
// //   >
// //     in
// //   </Link>

// //   <Link
// //     to="/whatsapp"
// //     className="social-icon"
// //     aria-label="WhatsApp"
// //   >
// //     ☎
// //   </Link>

// // </div>
// //         </div>

// //         {/* HERO VISUAL */}

// //         <div className="home-visual">

// //           <div className="neon-ring"></div>

// //           <div className="inner-ring"></div>

// //           <div className="inner-ring-two"></div>

// //           <img
// //             src="/images/logo.png"
// //             alt="Rohil Digital Spark Media"
// //             className="hero-logo"
// //           />

// //         </div>

// //       </section>

// //       {/* =====================================================
// //           STATS
// //       ===================================================== */}
// // <section className="stats-section">

// //   <div className="section-heading">

// //     <span>
// //       OUR IMPACT
// //     </span>

// //     <h2>
// //       Numbers That Speak
// //     </h2>

// //   </div>


// //   <div className="stats-grid">


// //     <div className="stat-card">

// //       <Counter
// //         end={120}
// //         suffix="+"
// //       />

// //       <div className="stat-label">
// //         Projects Completed
// //       </div>

// //     </div>


// //     <div className="stat-card">

// //       <Counter
// //         end={95}
// //         suffix="%"
// //       />

// //       <div className="stat-label">
// //         Client Satisfaction
// //       </div>

// //     </div>


// //     <div className="stat-card">

// //       <Counter
// //         end={3}
// //         suffix="X"
// //       />

// //       <div className="stat-label">
// //         Average Growth
// //       </div>

// //     </div>


// //     <div className="stat-card">

// //       <Counter
// //         end={24}
// //         suffix="/7"
// //       />

// //       <div className="stat-label">
// //         Digital Support
// //       </div>

// //     </div>


// //   </div>

// // </section>

// //       {/* =====================================================
// //           SERVICES
// //       ===================================================== */}

// //       <section
// //         className="services-section"
// //         id="services"
// //       >

// //         <div className="section-heading">

// //           <span>WHAT WE DO</span>

// //           <h2>
// //             Digital Solutions That Grow
// //           </h2>

// //         </div>

// //         <div className="services-grid">

// //           <div className="service-card">

// //             <div className="service-icon">
// //               🚀
// //             </div>

// //             <h3>
// //               SEO
// //             </h3>

// //             <p>
// //               Increase your visibility and bring
// //               qualified organic traffic to your business.
// //             </p>

// //           </div>

// //           <div className="service-card">

// //             <div className="service-icon">
// //               🎯
// //             </div>

// //             <h3>
// //               Google Ads
// //             </h3>

// //             <p>
// //               Data-driven campaigns designed to generate
// //               leads and maximize your advertising ROI.
// //             </p>

// //           </div>

// //           <div className="service-card">

// //             <div className="service-icon">
// //               📱
// //             </div>

// //             <h3>
// //               Social Media
// //             </h3>

// //             <p>
// //               Build a powerful social presence with
// //               creative content and engaging campaigns.
// //             </p>

// //           </div>

// //           <div className="service-card">

// //             <div className="service-icon">
// //               ✨
// //             </div>

// //             <h3>
// //               Branding
// //             </h3>

// //             <p>
// //               Create a memorable brand identity that
// //               connects with your target audience.
// //             </p>

// //           </div>

// //         </div>

// //       </section>

// //       {/* =====================================================
// //           WHY US
// //       ===================================================== */}

// //       <section className="why-section">

// //         <div className="section-heading">

// //           <span>WHY ROHIL</span>

// //           <h2>
// //             Why Choose Us?
// //           </h2>

// //         </div>

// //         <div className="why-grid">

// //           <div className="why-card">

// //             <div className="why-number">
// //               01
// //             </div>

// //             <h3>
// //               AI-Powered Strategy
// //             </h3>

// //             <p>
// //               We combine creativity with modern AI
// //               technology to build smarter campaigns.
// //             </p>

// //           </div>

// //           <div className="why-card">

// //             <div className="why-number">
// //               02
// //             </div>

// //             <h3>
// //               Result Driven
// //             </h3>

// //             <p>
// //               Every campaign is focused on measurable
// //               growth, leads and business results.
// //             </p>

// //           </div>

// //           <div className="why-card">

// //             <div className="why-number">
// //               03
// //             </div>

// //             <h3>
// //               Creative Thinking
// //             </h3>

// //             <p>
// //               Unique ideas and creative strategies that
// //               make your brand stand apart.
// //             </p>

// //           </div>

// //         </div>

// //       </section>

// //       {/* =====================================================
// //           PROCESS
// //       ===================================================== */}

// //       <section className="process-section">

// //         <div className="section-heading">

// //           <span>OUR PROCESS</span>

// //           <h2>
// //             How We Grow Your Brand
// //           </h2>

// //         </div>

// //         <div className="process-grid">

// //           <div className="process-card">

// //             <div className="process-circle">
// //               01
// //             </div>

// //             <h3>
// //               Discover
// //             </h3>

// //             <p>
// //               Understand your business and audience.
// //             </p>

// //           </div>

// //           <div className="process-card">

// //             <div className="process-circle">
// //               02
// //             </div>

// //             <h3>
// //               Strategize
// //             </h3>

// //             <p>
// //               Build a customized growth strategy.
// //             </p>

// //           </div>

// //           <div className="process-card">

// //             <div className="process-circle">
// //               03
// //             </div>

// //             <h3>
// //               Create
// //             </h3>

// //             <p>
// //               Launch creative campaigns and content.
// //             </p>

// //           </div>

// //           <div className="process-card">

// //             <div className="process-circle">
// //               04
// //             </div>

// //             <h3>
// //               Grow
// //             </h3>

// //             <p>
// //               Analyze, optimize and scale results.
// //             </p>

// //           </div>

// //         </div>

// //       </section>

// //       {/* =====================================================
// //           CTA
// //       ===================================================== */}

// //       <section
// //         className="cta-section"
// //         id="contact"
// //       >

// //         <h2>
// //           Ready To Grow Your Business?
// //         </h2>

// //         <p>
// //           Let's build something extraordinary together.
// //         </p>
// // <Link
// //   to="/contact"
// //   className="cta-button"
// // >
// //   Start Your Digital Journey →
// // </Link>

// //       </section>
// // <section className="faq-section">

// //   <div className="section-heading">

// //     <span>FAQ</span>

// //     <h2>
// //       Frequently Asked Questions
// //     </h2>

// //   </div>


// //   <div className="faq-container">

// //     {faqs.map((faq, index) => (

// //       <div
// //         className="faq-item"
// //         key={index}
// //       >

// //         <button
// //           className="faq-question"
// //           onClick={() =>
// //             setOpenFAQ(
// //               openFAQ === index ? null : index
// //             )
// //           }
// //         >

// //           {faq.q}

// //           <span>
// //             {openFAQ === index ? "−" : "+"}
// //           </span>

// //         </button>


// //         {openFAQ === index && (

// //           <div className="faq-answer">

// //             {faq.a}

// //           </div>

// //         )}

// //       </div>

// //     ))}

// //   </div>

// // </section>
// //       {/* =====================================================
// //           FLOATING AI
// //       ===================================================== */}

// //     <Link
// //   to="/ai"
// //   className="ai-button"
// // >
// //   <span className="ai-icon">
// //     🤖
// //   </span>

// //   <span className="ai-text">
// //     Ask AI
// //   </span>
// // </Link>

// //       {/* WHATSAPP */}

// //       <Link
// //   to="/call"
// //   className="whatsapp-button"
// // >
// //   ☎
// // </Link>

// //     </>
// //   );
// // }

// // export default HomeScreen;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// // MUI Icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
// import AdsClickIcon from "@mui/icons-material/AdsClick";
// import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
// import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// // import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import SmartToyIcon from "@mui/icons-material/SmartToy";

// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

// function HomeScreen() {
//   // =====================================================
//   // COUNTER
//   // =====================================================

//   function Counter({ end, suffix = "" }) {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//       let start = 0;

//       const duration = 1800;
//       const increment = end / (duration / 30);

//       const timer = setInterval(() => {
//         start += increment;

//         if (start >= end) {
//           setCount(end);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 30);

//       return () => clearInterval(timer);
//     }, [end]);

//     return (
//       <div className="stat-number">
//         {count}
//         {suffix}
//       </div>
//     );
//   }

//   // =====================================================
//   // FAQ
//   // =====================================================

//   const [openFAQ, setOpenFAQ] = useState(null);

//   const faqs = [
//     {
//       q: "What services do you offer?",
//       a: "We provide SEO, Google Ads, Meta Ads, Social Media Marketing and Branding Services.",
//     },
//     {
//       q: "How can SEO help my business?",
//       a: "SEO improves your website visibility and helps attract more relevant organic traffic.",
//     },
//     {
//       q: "Do you provide Google Ads management?",
//       a: "Yes. We create and manage targeted Google Ads campaigns based on your business goals.",
//     },
//     {
//       q: "Do you provide social media marketing?",
//       a: "Yes. We help businesses build their social media presence and engage with their target audience.",
//     },
//     {
//       q: "How can I get started?",
//       a: "Contact us and share your business requirements. We will help you choose the right strategy.",
//     },
//   ];
// const [currentSlide, setCurrentSlide] = useState(0);

// const sliderImages = [
//   {
//     image: "/images/seo-slider.jpg",
//     title: "SEO",
//     text: "Grow Your Search Visibility",
//   },
//   {
//     image: "/images/google-ads-slider.jpg",
//     title: "Google Ads",
//     text: "Reach The Right Customers",
//   },
//   {
//     image: "/images/meta-ads-slider.jpg",
//     title: "Meta Ads",
//     text: "Boost Your Social Campaigns",
//   },
//   {
//     image: "/images/social-media-slider.jpg",
//     title: "Social Media",
//     text: "Build Your Digital Presence",
//   },
//   {
//     image: "/images/branding-slider.jpg",
//     title: "Branding",
//     text: "Create A Powerful Brand",
//   },
// ];


// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
//   }, 3000);

//   return () => clearInterval(interval);
// }, []);
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         html {
//           scroll-behavior: smooth;
//         }

//         /* =====================================================
//            HERO
//         ===================================================== */

//         .home {
//           position: relative;
//           min-height: calc(100vh - 105px);
//           overflow: hidden;

//           display: flex;
//           align-items: center;

//           padding: 70px 5%;

//           background:
//             radial-gradient(
//               circle at 75% 45%,
//               rgba(248, 248, 248, 0.2),
//               transparent 32%
//             ),
//             radial-gradient(
//               circle at 15% 20%,
//               rgba(160, 40, 220, 0.08),
//               transparent 28%
//             ),
//             #020207;
//         }

//         /* =====================================================
//            STARS
//         ===================================================== */

//         .stars {
//           position: absolute;
//           inset: 0;
//           pointer-events: none;
//         }

//         .star {
//           position: absolute;
//           width: 3px;
//           height: 3px;
//           border-radius: 50%;
//           background: white;

//           box-shadow:
//             0 0 8px #b43cff,
//             0 0 18px #673cff;

//           animation: twinkle 3s infinite;
//         }

//         .star:nth-child(1) {
//           left: 10%;
//           top: 20%;
//         }

//         .star:nth-child(2) {
//           left: 25%;
//           top: 70%;
//           animation-delay: 1s;
//         }

//         .star:nth-child(3) {
//           left: 45%;
//           top: 15%;
//           animation-delay: 2s;
//         }

//         .star:nth-child(4) {
//           left: 62%;
//           top: 75%;
//           animation-delay: .5s;
//         }

//         .star:nth-child(5) {
//           left: 78%;
//           top: 18%;
//           animation-delay: 1.5s;
//         }

//         .star:nth-child(6) {
//           left: 90%;
//           top: 45%;
//           animation-delay: 2.5s;
//         }

//         @keyframes twinkle {
//           0%,100% {
//             opacity: .2;
//             transform: scale(.5);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.5);
//           }
//         }

//         /* =====================================================
//            HERO CONTENT
//         ===================================================== */

//         .home-content {
//           position: relative;
//           z-index: 5;

//           width: 55%;
//           max-width: 760px;

//           animation: contentReveal 1.2s ease;
//         }

//         @keyframes contentReveal {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }

//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .welcome-text {
//           color: #c1c1cb;
//           font-size: 16px;
//           letter-spacing: 2px;
//         }

//         .home-title {
//           margin: 15px 0 0;

//           font-size: clamp(48px, 5.5vw, 82px);

//           line-height: 1.05;

//           font-weight: 800;

//           letter-spacing: -3px;

//           background: linear-gradient(
//             90deg,
//             #c02cff,
//             #42baff,
//             #b44aff,
//             #55bfff
//           );

//           background-size: 300% 300%;

//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;

//           animation: gradientMove 5s infinite;
//         }

//         @keyframes gradientMove {
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

//         .home-subtitle {
//           margin-top: 18px;

//           font-size: clamp(27px, 3vw, 46px);

//           font-weight: 500;

//           color: white;
//         }

//         .home-services {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;

//           gap: 9px;

//           margin-top: 20px;

//           color: #d0d0d8;

//           font-size: 16px;
//         }

//         .service-dot {
//           color: #a940ff;
//         }

//         .home-description {
//           max-width: 650px;

//           margin-top: 23px;

//           color: #a5a5b2;

//           font-size: 17px;

//           line-height: 1.7;
//         }

//         /* =====================================================
//            BUTTONS
//         ===================================================== */

//         .home-buttons {
//           display: flex;
//           gap: 16px;

//           margin-top: 32px;
//         }

//         .home-btn {
//           display: flex;
//           align-items: center;
//           gap: 14px;

//           padding: 15px 23px;

//           border-radius: 11px;

//           text-decoration: none;

//           font-size: 15px;
//           font-weight: 600;

//           transition: .3s;
//         }

//         .home-btn svg {
//           font-size: 20px;
//           transition: .3s ease;
//         }

//         .home-btn:hover svg {
//           transform: translateX(4px);
//         }

//         .primary-home-btn {
//           color: white;

//           background: linear-gradient(
//             110deg,
//             #a72df5,
//             #654cff,
//             #1478f5
//           );

//           box-shadow:
//             0 0 25px rgba(130,50,255,.35);
//         }

//         .primary-home-btn:hover {
//           transform: translateY(-4px);

//           box-shadow:
//             0 0 40px rgba(130,50,255,.65);
//         }

//         .secondary-home-btn {
//           color: #eee;

//           border: 1px solid rgba(255,255,255,.22);

//           background: rgba(255,255,255,.03);
//         }

//         .secondary-home-btn:hover {
//           color: #c34cff;

//           border-color: #a83dff;

//           transform: translateY(-4px);
//         }

//         /* =====================================================
//            SOCIAL
//         ===================================================== */

//         .home-social {
//           display: flex;
//           align-items: center;
//           gap: 13px;

//           margin-top: 32px;

//           color: #aaaab5;
//         }

//         .social-icon {
//           width: 34px;
//           height: 34px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           color: white;

//           text-decoration: none;

//           background: rgba(255,255,255,.07);

//           border: 1px solid rgba(255,255,255,.1);

//           transition: .3s;
//         }

//         .social-icon svg {
//           font-size: 19px;
//         }

//         .social-icon:hover {
//           transform: translateY(-5px);

//           background: #793cff;

//           box-shadow:
//             0 0 18px rgba(130,60,255,.7);
//         }

//         .social-icon:hover svg {
//           transform: scale(1.1);
//         }

//         /* =====================================================
//    HERO SLIDER
// ===================================================== */

// .home-visual {
//   position: absolute;
//   z-index: 2;

//   right: 4%;
//   top: 50%;

//   width: 510px;
//   height: 510px;

//   transform: translateY(-50%);

//   animation: floating 5s ease-in-out infinite;

//   display: block;
// }

// .slider-container {
//   position: relative;

//   width: 100%;
//   height: 100%;

//   overflow: hidden;

//   border-radius: 30px;

//   background: #080510;

//   box-shadow:
//     0 0 30px rgba(130, 70, 255, 0.25),
//     0 0 80px rgba(80, 100, 255, 0.15);
// }

// .slider-slide {
//   position: absolute;

//   inset: 0;

//   width: 100%;
//   height: 100%;

//   opacity: 0;

//   visibility: hidden;

//   transition:
//     opacity 1s ease-in-out,
//     transform 1s ease-in-out;

//   transform: scale(1.05);

//   pointer-events: none;
// }

// .slider-slide.active {
//   opacity: 1;

//   visibility: visible;

//   transform: scale(1);

//   pointer-events: auto;
// }

// .slider-slide img {
//   position: absolute;

//   inset: 0;

//   width: 100%;
//   height: 100%;

//   display: block;

//   object-fit: cover;
//   object-position: center;
// }

// /* Dark overlay */

// .slider-slide::after {
//   content: "";

//   position: absolute;

//   inset: 0;

//   background:
//     linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0.05),
//       rgba(0, 0, 0, 0.80)
//     );

//   z-index: 1;
// }

// /* Slider text */

// .slider-overlay {
//   position: absolute;

//   left: 30px;
//   right: 30px;
//   bottom: 55px;

//   z-index: 3;
// }

// .slider-overlay h3 {
//   margin: 0;

//   font-size: 32px;

//   font-weight: 800;

//   color: white;
// }

// .slider-overlay p {
//   margin: 8px 0 0;

//   font-size: 15px;

//   color: #eeeeee;
// }

// /* Dots */

// .slider-dots {
//   position: absolute;

//   left: 30px;
//   bottom: 20px;

//   z-index: 5;

//   display: flex;

//   align-items: center;

//   gap: 8px;
// }

// .slider-dots span {
//   display: block;

//   width: 9px;
//   height: 9px;

//   border-radius: 50%;

//   background: rgba(255, 255, 255, 0.5);

//   cursor: pointer;

//   transition: all 0.3s ease;
// }

// .slider-dots span.active-dot {
//   width: 28px;

//   border-radius: 10px;

//   background: #9b5cff;

//   box-shadow:
//     0 0 12px rgba(155, 92, 255, 0.8);
// }
//         /* =====================================================
//            STATS
//         ===================================================== */

//         .stats-section {
//           position: relative;

//           padding: 80px 6%;

//           background:
//             linear-gradient(
//               180deg,
//               #020207,
//               #080513
//             );

//           border-top: 1px solid rgba(255,255,255,.06);
//         }

//         .section-heading {
//           text-align: center;

//           margin-bottom: 45px;
//         }

//         .section-heading span {
//           color: #a943ff;

//           font-size: 13px;

//           letter-spacing: 3px;
//         }

//         .section-heading h2 {
//           margin-top: 12px;

//           font-size: clamp(30px,4vw,52px);

//           background: linear-gradient(
//             90deg,
//             #fff,
//             #bd67ff,
//             #55baff
//           );

//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .stats-grid {
//           max-width: 1100px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 20px;
//         }

//         .stat-card {
//           position: relative;

//           padding: 30px 20px;

//           text-align: center;

//           border-radius: 18px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.07),
//               rgba(255,255,255,.02)
//             );

//           border: 1px solid rgba(160,60,255,.18);

//           overflow: hidden;

//           transition: .35s;
//         }

//         .stat-card::before {
//           content: "";

//           position: absolute;

//           width: 100px;
//           height: 100px;

//           top: -50px;
//           right: -50px;

//           background: #9c36ff;

//           filter: blur(60px);

//           opacity: .35;
//         }

//         .stat-card:hover {
//           transform: translateY(-8px);

//           border-color: #9d43ff;

//           box-shadow:
//             0 15px 40px rgba(130,40,255,.15);
//         }

//         .stat-number {
//           font-size: 38px;

//           font-weight: 800;

//           background: linear-gradient(
//             90deg,
//             #c137ff,
//             #45baff
//           );

//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .stat-label {
//           margin-top: 8px;

//           color: #aaaab6;

//           font-size: 14px;
//         }

//         /* =====================================================
//            SERVICES
//         ===================================================== */

//         .services-section {
//           padding: 100px 6%;

//           background: #030309;
//         }

//         .services-grid {
//           max-width: 1200px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(4,1fr);

//           gap: 22px;
//         }

//         .service-card {
//           position: relative;

//           padding: 32px 25px;

//           min-height: 230px;

//           border-radius: 20px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.07),
//               rgba(255,255,255,.025)
//             );

//           border: 1px solid rgba(255,255,255,.08);

//           transition: .4s;

//           overflow: hidden;
//         }

//         .service-card::after {
//           content: "";

//           position: absolute;

//           width: 140px;
//           height: 140px;

//           right: -60px;
//           bottom: -70px;

//           background: #843cff;

//           filter: blur(70px);

//           opacity: .25;
//         }

//         .service-card:hover {
//           transform:
//             translateY(-10px)
//             scale(1.02);

//           border-color: rgba(170,60,255,.5);

//           box-shadow:
//             0 20px 50px rgba(100,30,200,.18);
//         }

//         .service-icon {
//           width: 55px;
//           height: 55px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border-radius: 15px;

//           background:
//             linear-gradient(
//               135deg,
//               rgba(170,50,255,.25),
//               rgba(40,120,255,.15)
//             );

//           border: 1px solid rgba(180,70,255,.25);
//         }

//         .service-icon svg {
//           font-size: 28px;
//           color: #ffffff;
//         }

//         .service-card h3 {
//           margin-top: 22px;
//           color: #a85cff;
//           font-size: 20px;
//         }

//         .service-card p {
//           margin-top: 10px;

//           color: #9999a7;

//           line-height: 1.6;

//           font-size: 14px;
//         }

//         /* =====================================================
//            WHY US
//         ===================================================== */

//         .why-section {
//           padding: 100px 6%;

//           background:
//             radial-gradient(
//               circle at center,
//               rgba(90,35,160,.15),
//               transparent 45%
//             ),
//             #05030b;
//         }

//         .why-grid {
//           max-width: 1150px;

//           margin: auto;

//           display: grid;

//           grid-template-columns:
//             repeat(3,1fr);

//           gap: 25px;
//         }

//         .why-card {
//           padding: 35px 28px;

//           text-align: center;

//           border-radius: 20px;

//           border: 1px solid rgba(255,255,255,.08);

//           background: rgba(255,255,255,.035);

//           transition: .35s;
//         }

//         .why-card:hover {
//           transform: translateY(-8px);

//           border-color: #9142ff;

//           box-shadow:
//             0 0 35px rgba(120,50,255,.12);
//         }

//         .why-number {
//           font-size: 35px;

//           font-weight: 800;

//           color: #a940ff;
//         }

//         .why-card h3 {
//           margin-top: 15px;
//           color: rgba(180,70,255,.25);
//         }

//         .why-card p {
//           margin-top: 10px;

//           color: #9999a6;

//           line-height: 1.6;

//           font-size: 14px;
//         }

//         /* =====================================================
//            PROCESS
//         ===================================================== */

//         .process-section {
//           padding: 100px 6%;

//           background: #020207;
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
//           position: relative;

//           padding: 30px 20px;

//           text-align: center;
//         }

//         .process-card::after {
//           content: "→";

//           position: absolute;

//           top: 35px;
//           right: -17px;

//           color: #913cff;

//           font-size: 25px;
//         }

//         .process-card:last-child::after {
//           display: none;
//         }

//         .process-circle {
//           width: 65px;
//           height: 65px;

//           margin: auto;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background:
//             linear-gradient(
//               135deg,
//               #9c35ff,
//               #306eff
//             );

//           font-size: 20px;

//           font-weight: 800;

//           box-shadow:
//             0 0 25px rgba(130,50,255,.35);
//         }

//         .process-card h3 {
//           margin-top: 20px;
//         }

//         .process-card p {
//           margin-top: 8px;

//           color: #92929e;

//           font-size: 14px;

//           line-height: 1.5;
//         }

//         /* =====================================================
//            CTA
//         ===================================================== */

//         .cta-section {
//           position: relative;

//           margin: 0;
//           padding: 70px 6%;

//           text-align: center;

//           border-radius: 0;

//           overflow: hidden;

//           background:
//             radial-gradient(
//               circle at 50% 0%,
//               rgba(100, 70, 255, 0.25),
//               transparent 45%
//             ),
//             linear-gradient(
//               135deg,
//               #050509,
//               #0b0915,
//               #050814
//             );

//           border: none;

//           box-shadow: none;
//         }

//         .cta-section::before {
//           content: "";

//           position: absolute;

//           width: 300px;
//           height: 300px;

//           top: -150px;
//           left: 50%;

//           transform: translateX(-50%);

//           background: #9e3dff;

//           filter: blur(130px);

//           opacity: .20;

//           pointer-events: none;
//         }

//         .cta-section h2 {
//           position: relative;

//           color: #ffffff;

//           font-size: clamp(30px, 4vw, 52px);

//           z-index: 2;
//         }

//         .cta-section p {
//           position: relative;

//           margin-top: 15px;

//           color: #aaaab5;

//           z-index: 2;
//         }

//         .cta-button {
//           position: relative;

//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;

//           margin-top: 30px;

//           padding: 16px 30px;

//           border-radius: 12px;

//           color: white;

//           text-decoration: none;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a52df4,
//               #614cff,
//               #176df5
//             );

//           box-shadow:
//             0 0 30px rgba(120,50,255,.3);

//           transition: .3s;

//           z-index: 2;
//         }

//         .cta-button svg {
//           font-size: 20px;
//           transition: .3s ease;
//         }

//         .cta-button:hover {
//           transform: translateY(-4px) scale(1.03);

//           box-shadow:
//             0 0 45px rgba(120,50,255,.55);
//         }

//         .cta-button:hover svg {
//           transform: translateX(4px);
//         }

//         /* =====================================================
//            FAQ
//         ===================================================== */

//         .faq-section {
//           padding: 90px 6%;
//           background: #030308;
//           color: white;
//         }

//         .faq-section .section-heading {
//           text-align: center;
//           margin-bottom: 50px;
//         }

//         .faq-section .section-heading span {
//           color: #a85cff;
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 3px;
//         }

//         .faq-section .section-heading h2 {
//           margin-top: 15px;

//           font-size: clamp(32px, 5vw, 52px);

//           background:
//             linear-gradient(
//               90deg,
//               #ffffff,
//               #a66cff,
//               #4f8cff
//             );

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;
//         }

//         .faq-container {
//           max-width: 900px;
//           margin: auto;
//         }

//         .faq-item {
//           margin-bottom: 14px;

//           border-radius: 16px;

//           background:
//             linear-gradient(
//               145deg,
//               #12101b,
//               #0b0d16
//             );

//           border: 1px solid
//             rgba(255, 255, 255, 0.08);

//           overflow: hidden;

//           transition: .3s ease;
//         }

//         .faq-item:hover {
//           border-color:
//             rgba(140, 80, 255, .4);

//           transform: translateY(-2px);
//         }

//         .faq-question {
//           width: 100%;

//           padding: 22px 25px;

//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           gap: 20px;

//           border: none;

//           outline: none;

//           background: transparent;

//           color: #ffffff;

//           text-align: left;

//           cursor: pointer;

//           font-size: 14px;

//           font-weight: 600;
//         }

//         .faq-question > span {
//           min-width: 32px;
//           height: 32px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background:
//             rgba(130, 70, 255, .12);

//           color: #a66cff;

//           transition: .3s ease;

//           flex-shrink: 0;
//         }

//         .faq-question > span svg {
//           font-size: 19px;
//         }

//         .faq-answer {
//           padding:
//             0 25px 22px;

//           color: #92929f;

//           font-size: 13px;

//           line-height: 1.8;

//           animation:
//             faqOpen .35s ease;
//         }

//         @keyframes faqOpen {

//           from {
//             opacity: 0;
//             transform: translateY(-8px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }

//         /* =====================================================
//            AI BUTTON
//         ===================================================== */

//         .ai-button {
//           position: fixed;

//           right: 28px;
//           bottom: 88px;

//           z-index: 999;

//           width: 78px;
//           height: 78px;

//           display: flex;

//           flex-direction: column;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           color: white;

//           text-decoration: none;

//           background:
//             radial-gradient(
//               circle,
//               #6636a0,
//               #180c29
//             );

//           border: 2px solid #9d43ff;

//           box-shadow:
//             0 0 15px #9d43ff,
//             0 0 35px rgba(120,50,255,.5);

//           animation: aiFloat 3s infinite;
//         }

//         .ai-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .ai-icon svg {
//           font-size: 27px;
//         }

//         .ai-text {
//           font-size: 10px;
//           margin-top: 2px;
//         }

//         @keyframes aiFloat {
//           0%,100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         /* =====================================================
//            WHATSAPP
//         ===================================================== */

//         .whatsapp-button {
//           position: fixed;

//           right: 30px;
//           bottom: 15px;

//           z-index: 999;

//           width: 56px;
//           height: 56px;

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           background: #25d366;

//           color: white;

//           text-decoration: none;

//           box-shadow:
//             0 0 20px rgba(37,211,102,.5);

//           transition: .3s ease;
//         }

//         .whatsapp-button svg {
//           font-size: 28px;
//         }

//         .whatsapp-button:hover {
//           transform: scale(1.08);

//           box-shadow:
//             0 0 30px rgba(37,211,102,.7);
//         }

// /* =========================================================
//    PROFESSIONAL LIGHT MODE
//    Clean • Premium • Corporate • Modern
//    ========================================================= */

// body.light-theme {
//   background: #f8fafc;
//   color: #172033;
// }

// /* =========================================================
//    HERO
//    ========================================================= */

// body.light-theme .home {
//   background:
//     radial-gradient(
//       circle at 85% 25%,
//       rgba(37, 99, 235, 0.10),
//       transparent 28%
//     ),
//     radial-gradient(
//       circle at 10% 80%,
//       rgba(14, 165, 233, 0.07),
//       transparent 25%
//     ),
//     linear-gradient(
//       135deg,
//       #ffffff 0%,
//       #f8fbff 55%,
//       #eef6ff 100%
//     );

//   border-bottom: 1px solid #e8eef6;
// }

// /* =========================================================
//    HERO TEXT
//    ========================================================= */

// body.light-theme .welcome-text {
//   color: #64748b;
//   font-weight: 600;
//   letter-spacing: 2.5px;
// }

// body.light-theme .home-title {
//   background:
//     linear-gradient(
//       100deg,
//       #2563eb 0%,
//       #0891b2 45%,
//       #4f46e5 100%
//     );

//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// body.light-theme .home-subtitle {
//   color: #172033;
//   font-weight: 600;
// }

// body.light-theme .home-services {
//   color: #475569;
// }

// body.light-theme .service-dot {
//   color: #2563eb;
//   font-weight: 700;
// }

// body.light-theme .home-description {
//   color: #64748b;
// }

// /* =========================================================
//    HERO BUTTONS
//    ========================================================= */

// body.light-theme .primary-home-btn {
//   color: #ffffff;

//   background:
//     linear-gradient(
//       110deg,
//       #2563eb,
//       #0891b2
//     );

//   box-shadow:
//     0 10px 28px rgba(37, 99, 235, 0.20);
// }

// body.light-theme .primary-home-btn:hover {
//   transform: translateY(-4px);

//   box-shadow:
//     0 16px 35px rgba(37, 99, 235, 0.30);
// }

// body.light-theme .secondary-home-btn {
//   color: #1e293b;

//   background: rgba(255,255,255,0.9);

//   border: 1px solid #dbe4ef;

//   box-shadow:
//     0 5px 18px rgba(15, 23, 42, 0.04);
// }

// body.light-theme .secondary-home-btn:hover {
//   color: #2563eb;

//   border-color: #93c5fd;

//   background: #ffffff;

//   box-shadow:
//     0 10px 25px rgba(37, 99, 235, 0.10);
// }

// /* =========================================================
//    SOCIAL
//    ========================================================= */

// body.light-theme .home-social {
//   color: #64748b;
// }

// body.light-theme .social-icon {
//   color: #334155;

//   background: #ffffff;

//   border: 1px solid #dbe4ef;

//   box-shadow:
//     0 4px 12px rgba(15,23,42,0.04);
// }

// body.light-theme .social-icon:hover {
//   color: #ffffff;

//   background: #2563eb;

//   border-color: #2563eb;

//   box-shadow:
//     0 8px 22px rgba(37,99,235,0.25);
// }

// /* =========================================================
//    HERO SLIDER
//    ========================================================= */

// body.light-theme .home-visual {
//   filter: drop-shadow(
//     0 25px 50px rgba(15, 70, 130, 0.16)
//   );
// }

// body.light-theme .slider-container {
//   background: #ffffff;

//   border: 1px solid rgba(148,163,184,0.18);

//   box-shadow:
//     0 20px 55px rgba(15, 70, 130, 0.14),
//     0 5px 20px rgba(15,23,42,0.05);
// }

// body.light-theme .slider-slide::after {
//   background:
//     linear-gradient(
//       to bottom,
//       rgba(0,0,0,0.02),
//       rgba(0,0,0,0.75)
//     );
// }

// body.light-theme .slider-overlay h3 {
//   color: #ffffff;
// }

// body.light-theme .slider-overlay p {
//   color: rgba(255,255,255,0.88);
// }

// body.light-theme .slider-dots span {
//   background: rgba(255,255,255,0.65);
// }

// body.light-theme .slider-dots span.active-dot {
//   background: #2563eb;

//   box-shadow:
//     0 0 12px rgba(37,99,235,0.65);
// }

// /* =========================================================
//    STARS
//    ========================================================= */

// body.light-theme .stars {
//   opacity: 0;
// }

// /* =========================================================
//    SECTION HEADINGS
//    ========================================================= */

// body.light-theme .section-heading span {
//   color: #2563eb;

//   font-weight: 700;
//   letter-spacing: 3px;
// }

// body.light-theme .section-heading h2 {
//   background:
//     linear-gradient(
//       90deg,
//       #172033,
//       #2563eb,
//       #0891b2
//     );

//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* =========================================================
//    STATS
//    ========================================================= */

// body.light-theme .stats-section {
//   background:
//     linear-gradient(
//       180deg,
//       #ffffff 0%,
//       #f8fafc 100%
//     );

//   border-top: 1px solid #e8eef6;
// }

// body.light-theme .stat-card {
//   background:
//     linear-gradient(
//       145deg,
//       #ffffff,
//       #f8fbff
//     );

//   border: 1px solid #e2e8f0;

//   box-shadow:
//     0 8px 30px rgba(15,23,42,0.045);
// }

// body.light-theme .stat-card::before {
//   background: #2563eb;
//   opacity: 0.08;
// }

// body.light-theme .stat-card:hover {
//   transform: translateY(-8px);

//   border-color: #93c5fd;

//   box-shadow:
//     0 18px 45px rgba(37,99,235,0.11);
// }

// body.light-theme .stat-number {
//   background:
//     linear-gradient(
//       90deg,
//       #2563eb,
//       #0891b2
//     );

//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// body.light-theme .stat-label {
//   color: #64748b;
// }

// /* =========================================================
//    SERVICES
//    ========================================================= */

// body.light-theme .services-section {
//   background:
//     linear-gradient(
//       180deg,
//       #f8fafc 0%,
//       #ffffff 100%
//     );
// }

// body.light-theme .service-card {
//   background: #ffffff;

//   border: 1px solid #e2e8f0;

//   box-shadow:
//     0 8px 28px rgba(15,23,42,0.045);
// }

// body.light-theme .service-card::after {
//   background: #2563eb;
//   opacity: 0.07;
// }

// body.light-theme .service-card:hover {
//   transform:
//     translateY(-10px)
//     scale(1.01);

//   border-color: #93c5fd;

//   box-shadow:
//     0 20px 50px rgba(37,99,235,0.12);
// }

// body.light-theme .service-icon {
//   background:
//     linear-gradient(
//       135deg,
//       #eff6ff,
//       #ecfeff
//     );

//   border: 1px solid #dbeafe;
// }

// body.light-theme .service-icon svg {
//   color: #2563eb;
// }

// body.light-theme .service-card h3 {
//   color: #1e40af;
// }

// body.light-theme .service-card p {
//   color: #64748b;
// }

// /* =========================================================
//    WHY US
//    ========================================================= */

// body.light-theme .why-section {
//   background:
//     radial-gradient(
//       circle at 50% 0%,
//       rgba(37,99,235,0.07),
//       transparent 40%
//     ),
//     linear-gradient(
//       180deg,
//       #ffffff,
//       #f7fbff
//     );
// }

// body.light-theme .why-card {
//   background: rgba(255,255,255,0.92);

//   border: 1px solid #e2e8f0;

//   box-shadow:
//     0 8px 30px rgba(15,23,42,0.04);
// }

// body.light-theme .why-card:hover {
//   transform: translateY(-8px);

//   border-color: #93c5fd;

//   box-shadow:
//     0 18px 40px rgba(37,99,235,0.10);
// }

// body.light-theme .why-number {
//   color: #2563eb;
// }

// body.light-theme .why-card h3 {
//   color: #172033;
// }

// body.light-theme .why-card p {
//   color: #64748b;
// }

// /* =========================================================
//    PROCESS
//    ========================================================= */

// body.light-theme .process-section {
//   background:
//     linear-gradient(
//       180deg,
//       #f8fbff,
//       #ffffff
//     );
// }

// body.light-theme .process-card h3 {
//   color: #172033;
// }

// body.light-theme .process-card p {
//   color: #64748b;
// }

// body.light-theme .process-circle {
//   color: #ffffff;

//   background:
//     linear-gradient(
//       135deg,
//       #2563eb,
//       #0891b2
//     );

//   box-shadow:
//     0 10px 25px rgba(37,99,235,0.20);
// }

// body.light-theme .process-card::after {
//   color: #2563eb;
// }

// /* =========================================================
//    CTA
//    ========================================================= */

// body.light-theme .cta-section {
//   background:
//     radial-gradient(
//       circle at 50% 0%,
//       rgba(37,99,235,0.13),
//       transparent 45%
//     ),
//     linear-gradient(
//       135deg,
//       #ffffff,
//       #eff7ff
//     );

//   border-top: 1px solid #e2e8f0;
//   border-bottom: 1px solid #e2e8f0;
// }

// body.light-theme .cta-section::before {
//   background: #2563eb;
//   opacity: 0.08;
// }

// body.light-theme .cta-section h2 {
//   color: #172033;
// }

// body.light-theme .cta-section p {
//   color: #64748b;
// }

// body.light-theme .cta-button {
//   background:
//     linear-gradient(
//       100deg,
//       #2563eb,
//       #0891b2
//     );

//   box-shadow:
//     0 10px 30px rgba(37,99,235,0.20);
// }

// body.light-theme .cta-button:hover {
//   box-shadow:
//     0 16px 40px rgba(37,99,235,0.30);
// }

// /* =========================================================
//    FAQ
//    ========================================================= */

// body.light-theme .faq-section {
//   background:
//     linear-gradient(
//       180deg,
//       #f8fbff,
//       #ffffff
//     );

//   color: #172033;
// }

// body.light-theme .faq-section .section-heading span {
//   color: #2563eb;
// }

// body.light-theme .faq-section .section-heading h2 {
//   background:
//     linear-gradient(
//       90deg,
//       #172033,
//       #2563eb,
//       #0891b2
//     );

//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// body.light-theme .faq-item {
//   background: #ffffff;

//   border: 1px solid #e2e8f0;

//   box-shadow:
//     0 6px 20px rgba(15,23,42,0.035);
// }

// body.light-theme .faq-item:hover {
//   border-color: #93c5fd;

//   box-shadow:
//     0 10px 28px rgba(37,99,235,0.08);
// }

// body.light-theme .faq-question {
//   color: #1e293b;
// }

// body.light-theme .faq-question > span {
//   background: #eff6ff;

//   color: #2563eb;

//   border: 1px solid #dbeafe;
// }

// body.light-theme .faq-answer {
//   color: #64748b;
// }

// /* =========================================================
//    AI FLOATING BUTTON
//    ========================================================= */

// body.light-theme .ai-button {
//   background:
//     linear-gradient(
//       145deg,
//       #2563eb,
//       #4338ca
//     );

//   border: 2px solid #ffffff;

//   box-shadow:
//     0 8px 28px rgba(37,99,235,0.30);
// }

// body.light-theme .ai-button:hover {
//   box-shadow:
//     0 12px 35px rgba(37,99,235,0.40);
// }

// /* =========================================================
//    WHATSAPP
//    ========================================================= */

// body.light-theme .whatsapp-button {
//   box-shadow:
//     0 8px 25px rgba(37,211,102,0.25);
// }

// /* =========================================================
//    LIGHT MODE MOBILE
//    ========================================================= */

// @media (max-width: 900px) {

//   body.light-theme .home {
//     background:
//       linear-gradient(
//         180deg,
//         #ffffff,
//         #f5faff
//       );
//   }

//   body.light-theme .home-visual {
//     filter:
//       drop-shadow(
//         0 18px 35px rgba(30,90,160,0.14)
//       );
//   }

// }

// @media (max-width: 600px) {

//   body.light-theme .home {
//     padding-left: 16px;
//     padding-right: 16px;
//   }

//   body.light-theme .home-title {
//     font-size: 42px;
//   }

//   body.light-theme .home-subtitle {
//     font-size: 23px;
//   }

//   body.light-theme .stat-card,
//   body.light-theme .service-card,
//   body.light-theme .why-card,
//   body.light-theme .faq-item {
//     box-shadow:
//       0 6px 20px rgba(15,23,42,0.045);
//   }

//   body.light-theme .cta-section {
//     margin: 40px 15px;
//     border-radius: 20px;
//   }
// }



// /* =====================================================
//    RESPONSIVE SLIDER
// ===================================================== */

// @media (max-width: 900px) {

//   .home-visual {
//     width: 90%;
//     max-width: 560px;
//     height: 320px;
//     margin: 70px auto 0;
//   }

//   .slider-container {
//     width: 100%;
//     height: 100%;
//     border-radius: 22px;
//   }

// }

// @media (max-width: 600px) {

//   .home-visual {
//     width: 94%;
//     height: 240px;
//     margin: 55px auto 0;
//   }

//   .slider-container {
//     border-radius: 18px;
//   }

// }


//         /* =====================================================
//            RESPONSIVE
//         ===================================================== */

//         @media (max-width: 1200px) {

//           .home-visual {
//             width: 400px;
//             height: 400px;

//             right: -30px;
//           }

//           .hero-logo {
//             width: 260px;
//           }

//           .stats-grid,
//           .services-grid {
//             grid-template-columns:
//               repeat(2,1fr);
//           }

//         }

//         @media (max-width: 900px) {

//           .home {
//             min-height: auto;

//             padding: 60px 20px 100px;

//             display: block;

//             text-align: center;
//           }

//           .home-content {
//             width: 100%;
//             max-width: 700px;

//             margin: auto;
//           }

//           .home-services {
//             justify-content: center;
//           }

//           .home-description {
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .home-buttons {
//             justify-content: center;
//             flex-wrap: wrap;
//           }

//           .home-social {
//             justify-content: center;
//           }
// .slider-container {
//   position: relative;
//   width: 100%;
//   max-width: 510px;
//   height: 510px;
//   overflow: hidden;
//   border-radius: 30px;
// }

// .slider-slide {
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   visibility: hidden;
//   transition: opacity 1s ease-in-out;
// }

// .slider-slide.active {
//   opacity: 1;
//   visibility: visible;
// }

// .slider-slide img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;       /* FULL COVER */
//   object-position: center; /* CENTER */
//   display: block;
// }
//           .home-visual {
//             position: relative;

//             top: auto;
//             right: auto;

//             width: 330px;
//             height: 330px;

//             margin: 70px auto -40px;

//             transform: none;

//             opacity: .8;
//           }

//           .hero-logo {
//             width: 210px;
//           }

//           .stats-grid,
//           .services-grid,
//           .why-grid {
//             grid-template-columns: 1fr 1fr;
//           }

//           .process-grid {
//             grid-template-columns: 1fr 1fr;
//           }

//           .process-card::after {
//             display: none;
//           }

//         }

//         @media (max-width: 600px) {

//           .home {
//             padding: 50px 16px 90px;
//           }

//           .home-title {
//             font-size: 42px;
//           }

//           .home-subtitle {
//             font-size: 23px;
//           }

//           .home-services {
//             font-size: 13px;
//           }

//           .home-description {
//             font-size: 14px;
//           }

//           .home-buttons {
//             flex-direction: column;
//           }

//           .home-btn {
//             justify-content: center;
//           }

//           .home-visual {
//             width: 285px;
//             height: 285px;

//             margin-top: 280px;
//           }

//           .hero-logo {
//             width: 180px;
//           }

//           .stats-grid,
//           .services-grid,
//           .why-grid,
//           .process-grid {
//             grid-template-columns: 1fr;
//           }

//           .stats-section,
//           .services-section,
//           .why-section,
//           .process-section {
//             padding: 70px 18px;
//           }

//           .cta-section {
//             margin: 40px 15px;
//             padding: 55px 20px;
//           }

//           .ai-button {
//             width: 60px;
//             height: 60px;

//             right: 12px;
//             bottom: 82px;
//           }

//           .ai-icon svg {
//             font-size: 22px;
//           }

//           .whatsapp-button {
//             width: 48px;
//             height: 48px;

//             right: 18px;
//             bottom: 15px;
//           }

//           .whatsapp-button svg {
//             font-size: 22px;
//           }

//           .faq-section {
//             padding: 65px 15px;
//           }

//           .faq-section .section-heading {
//             margin-bottom: 35px;
//           }

//           .faq-section .section-heading h2 {
//             font-size: 34px;
//           }

//           .faq-question {
//             padding: 18px;
//             font-size: 13px;
//           }

//           .faq-question > span {
//             min-width: 28px;
//             height: 28px;
//           }

//           .faq-question > span svg {
//             font-size: 17px;
//           }

//           .faq-answer {
//             padding:
//               0 18px 18px;

//             font-size: 12px;
//           }

//         }

//       `}
      
//       </style>

//       {/* =====================================================
//           HERO
//       ===================================================== */}

//       <section className="home" id="home">

//         <div className="stars">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <span
//               className="star"
//               key={i}
//             />
//           ))}
//         </div>

//         <div className="home-content">

//           <span className="welcome-text">
//             WELCOME TO
//           </span>

//           <h1 className="home-title">
//             Rohil Spark Media
//           </h1>

//           <h2 className="home-subtitle">
//             Digital Marketing Agency
//           </h2>

//           <div className="home-services">

//             <span>SEO</span>
//             <span className="service-dot">•</span>

//             <span>Google Ads</span>
//             <span className="service-dot">•</span>

//             <span>Meta Ads</span>
//             <span className="service-dot">•</span>

//             <span>Branding</span>
//             <span className="service-dot">•</span>

//             <span>Social Media</span>
//             <span className="service-dot">•</span>

//             <span>Lead Generation</span>

//           </div>

//           <p className="home-description">
//             We help businesses grow online with creative
//             strategies, AI-powered marketing & result-driven
//             campaigns.
//           </p>

//           {/* BUTTONS */}

//           <div className="home-buttons">

//             <Link
//               to="/book-consultation"
//               className="home-btn primary-home-btn"
//             >
//               Get Free Consultation
//               <ArrowForwardIcon fontSize="small" />
//             </Link>

//             <Link
//               to="/services"
//               className="home-btn secondary-home-btn"
//             >
//               Explore Our Services
//               {/* <PlayArrowIcon fontSize="small" /> */}
//             </Link>

//           </div>

//           {/* SOCIAL */}

//           <div className="home-social">

//             <span>
//               Follow Us On
//             </span>

//             <Link
//               to="/facebook"
//               className="social-icon"
//               aria-label="Facebook"
//             >
//               <FacebookIcon fontSize="small" />
//             </Link>

//             <Link
//               to="/instagram"
//               className="social-icon"
//               aria-label="Instagram"
//             >
//               <InstagramIcon fontSize="small" />
//             </Link>

//             <Link
//               to="/linkedin"
//               className="social-icon"
//               aria-label="LinkedIn"
//             >
//               <LinkedInIcon fontSize="small" />
//             </Link>

//             <Link
//               to="/whatsapp"
//               className="social-icon"
//               aria-label="WhatsApp"
//             >
//               <WhatsAppIcon fontSize="small" />
//             </Link>

//           </div>

//         </div>

//         {/* =====================================================
//             HERO VISUAL
//         ===================================================== */}

//         {/* <div className="home-visual">

//           <div className="neon-ring"></div>

//           <div className="inner-ring"></div>

//           <div className="inner-ring-two"></div>

//           <img
//             src="/images/logo.png"
//             alt="Rohil Digital Spark Media"
//             className="hero-logo"
//           />

//         </div> */}
// <div className="home-visual">

//   <div className="slider-container">

//     {sliderImages.map((slide, index) => (
//       <div
//         key={index}
//         className={`slider-slide ${
//           index === currentSlide ? "active" : ""
//         }`}
//       >
//         <img
//           src={slide.image}
//           alt={`${slide.title} - Rohil Spark Media`}
//         />

//         <div className="slider-overlay">
//           <h3>{slide.title}</h3>
//           <p>{slide.text}</p>
//         </div>
//       </div>
//     ))}

//     <div className="slider-dots">
//       {sliderImages.map((_, index) => (
//         <span
//           key={index}
//           className={index === currentSlide ? "active-dot" : ""}
//           onClick={() => setCurrentSlide(index)}
//         />
//       ))}
//     </div>

//   </div>

// </div>
//       </section>

//       {/* =====================================================
//           STATS
//       ===================================================== */}

//       <section className="stats-section">

//         <div className="section-heading">

//           <span>
//             OUR IMPACT
//           </span>

//           <h2>
//             Numbers That Speak
//           </h2>

//         </div>

//         <div className="stats-grid">

//           <div className="stat-card">

//             <Counter
//               end={120}
//               suffix="+"
//             />

//             <div className="stat-label">
//               Projects Completed
//             </div>

//           </div>

//           <div className="stat-card">

//             <Counter
//               end={95}
//               suffix="%"
//             />

//             <div className="stat-label">
//               Client Satisfaction
//             </div>

//           </div>

//           <div className="stat-card">

//             <Counter
//               end={3}
//               suffix="X"
//             />

//             <div className="stat-label">
//               Average Growth
//             </div>

//           </div>

//           <div className="stat-card">

//             <Counter
//               end={24}
//               suffix="/7"
//             />

//             <div className="stat-label">
//               Digital Support
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           SERVICES
//       ===================================================== */}

//       <section
//         className="services-section"
//         id="services"
//       >

//         <div className="section-heading">

//           <span>
//             WHAT WE DO
//           </span>

//           <h2>
//             Digital Solutions That Grow
//           </h2>

//         </div>

//         <div className="services-grid">

//           {/* SEO */}

//           <div className="service-card">

//             <div className="service-icon">
//               <RocketLaunchIcon />
//             </div>

//             <h3>
//               SEO
//             </h3>

//             <p>
//               Increase your visibility and bring
//               qualified organic traffic to your business.
//             </p>

//           </div>

//           {/* GOOGLE ADS */}

//           <div className="service-card">

//             <div className="service-icon">
//               <AdsClickIcon />
//             </div>

//             <h3>
//               Google Ads
//             </h3>

//             <p>
//               Data-driven campaigns designed to generate
//               leads and maximize your advertising ROI.
//             </p>

//           </div>

//           {/* SOCIAL MEDIA */}

//           <div className="service-card">

//             <div className="service-icon">
//               <PhoneAndroidIcon />
//             </div>

//             <h3>
//               Social Media
//             </h3>

//             <p>
//               Build a powerful social presence with
//               creative content and engaging campaigns.
//             </p>

//           </div>

//           {/* BRANDING */}

//           <div className="service-card">

//             <div className="service-icon">
//               <AutoAwesomeIcon />
//             </div>

//             <h3>
//               Branding
//             </h3>

//             <p>
//               Create a memorable brand identity that
//               connects with your target audience.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           WHY US
//       ===================================================== */}

//       <section className="why-section">

//         <div className="section-heading">

//           <span>
//             WHY ROHIL
//           </span>

//           <h2>
//             Why Choose Us?
//           </h2>

//         </div>

//         <div className="why-grid">

//           <div className="why-card">

//             <div className="why-number">
//               01
//             </div>

//             <h3>
//               AI-Powered Strategy
//             </h3>

//             <p>
//               We combine creativity with modern AI
//               technology to build smarter campaigns.
//             </p>

//           </div>

//           <div className="why-card">

//             <div className="why-number">
//               02
//             </div>

//             <h3>
//               Result Driven
//             </h3>

//             <p>
//               Every campaign is focused on measurable
//               growth, leads and business results.
//             </p>

//           </div>

//           <div className="why-card">

//             <div className="why-number">
//               03
//             </div>

//             <h3>
//               Creative Thinking
//             </h3>

//             <p>
//               Unique ideas and creative strategies that
//               make your brand stand apart.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           PROCESS
//       ===================================================== */}

//       <section className="process-section">

//         <div className="section-heading">

//           <span>
//             OUR PROCESS
//           </span>

//           <h2>
//             How We Grow Your Brand
//           </h2>

//         </div>

//         <div className="process-grid">

//           <div className="process-card">

//             <div className="process-circle">
//               01
//             </div>

//             <h3>
//               Discover
//             </h3>

//             <p>
//               Understand your business and audience.
//             </p>

//           </div>

//           <div className="process-card">

//             <div className="process-circle">
//               02
//             </div>

//             <h3>
//               Strategize
//             </h3>

//             <p>
//               Build a customized growth strategy.
//             </p>

//           </div>

//           <div className="process-card">

//             <div className="process-circle">
//               03
//             </div>

//             <h3>
//               Create
//             </h3>

//             <p>
//               Launch creative campaigns and content.
//             </p>

//           </div>

//           <div className="process-card">

//             <div className="process-circle">
//               04
//             </div>

//             <h3>
//               Grow
//             </h3>

//             <p>
//               Analyze, optimize and scale results.
//             </p>

//           </div>

//         </div>

//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}

//       <section
//         className="cta-section"
//         id="contact"
//       >

//         <h2>
//           Ready To Grow Your Business?
//         </h2>

//         <p>
//           Let's build something extraordinary together.
//         </p>

//         <Link
//           to="/contact"
//           className="cta-button"
//         >
//           Start Your Digital Journey
//           <ArrowForwardIcon fontSize="small" />
//         </Link>

//       </section>

//       {/* =====================================================
//           FAQ
//       ===================================================== */}

//       <section className="faq-section">

//         <div className="section-heading">

//           <span>
//             FAQ
//           </span>

//           <h2>
//             Frequently Asked Questions
//           </h2>

//         </div>

//         <div className="faq-container">

//           {faqs.map((faq, index) => (

//             <div
//               className="faq-item"
//               key={index}
//             >

//               <button
//                 className="faq-question"
//                 onClick={() =>
//                   setOpenFAQ(
//                     openFAQ === index ? null : index
//                   )
//                 }
//               >

//                 {faq.q}

//                 <span>
//                   {openFAQ === index ? (
//                     <RemoveIcon fontSize="small" />
//                   ) : (
//                     <AddIcon fontSize="small" />
//                   )}
//                 </span>

//               </button>

//               {openFAQ === index && (

//                 <div className="faq-answer">
//                   {faq.a}
//                 </div>

//               )}

//             </div>

//           ))}

//         </div>

//       </section>

//       {/* =====================================================
//           FLOATING AI
//       ===================================================== */}

//       <Link
//         to="/ai"
//         className="ai-button"
//         aria-label="Ask AI"
//       >

//         <span className="ai-icon">
//           <SmartToyIcon />
//         </span>

//         <span className="ai-text">
//           Ask AI
//         </span>

//       </Link>

//       {/* =====================================================
//           WHATSAPP
//       ===================================================== */}

//       <Link
//         to="/call"
//         className="whatsapp-button"
//         aria-label="WhatsApp"
//       >
//         <WhatsAppIcon />
//       </Link>

//     </>
//   );
// }

// export default HomeScreen;
import React from "react";
import {
  
  Button,
  Container,
  Typography,
} from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// MUI Icons
import SearchIcon from "@mui/icons-material/Search";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import CampaignIcon from "@mui/icons-material/Campaign";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./component/HomeScreen.css";

export default function HomeScreen() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const slides = [
    {
      image: "/images/seo-slider.jpg",
      title: "SEO That Drives Real Growth",
      subtitle:
        "Improve your search visibility, attract qualified visitors and grow your business organically.",
      path: "/seo",
      tag: "SEARCH ENGINE OPTIMIZATION",
      button1: "Explore SEO",
      button2: "Get Free SEO Audit",
    },
    {
      image: "/images/google-ads-slider.jpg",
      title: "Reach Customers With Google Ads",
      subtitle:
        "Target the right audience at the right time with high-performance Google advertising campaigns.",
      path: "/google-ads",
      tag: "GOOGLE ADS",
      button1: "Explore Google Ads",
      button2: "Start Your Campaign",
    },
    {
      image: "/images/meta-ads-slider.jpg",
      title: "Turn Social Ads Into Business Results",
      subtitle:
        "Build powerful Meta campaigns that increase reach, engagement, leads and conversions.",
      path: "/meta-ads",
      tag: "META ADS",
      button1: "Explore Meta Ads",
      button2: "Get Campaign Strategy",
    },
    {
      image: "/images/social-media-slider.jpg",
      title: "Build A Strong Social Presence",
      subtitle:
        "Create engaging social media experiences that connect your brand with the right audience.",
      path: "/social-media",
      tag: "SOCIAL MEDIA MARKETING",
      button1: "Explore Social Media",
      button2: "Grow Your Brand",
    },
    {
      image: "/images/branding-slider.jpg",
      title: "Create A Brand People Remember",
      subtitle:
        "From identity to visual communication, we build brands that stand out in a competitive market.",
      path: "/branding",
      tag: "BRANDING",
      button1: "Explore Branding",
      button2: "Build Your Brand",
    },
    {
      image: "/images/lead-generation-slider.jpg",
      title: "Generate More Qualified Leads",
      subtitle:
        "Combine strategy, creative campaigns and data-driven marketing to turn attention into opportunities.",
      path: "/digital-marketing",
      tag: "LEAD GENERATION",
      button1: "Explore Marketing",
      button2: "Get Free Consultation",
    },
  ];

  const services = [
    {
      icon: <SearchIcon />,
      title: "SEO",
      description:
        "Improve your Google rankings and attract more organic traffic with strategic SEO.",
      path: "/digital-marketing/seo",
    },
    {
      icon: <AdsClickIcon />,
      title: "Google Ads",
      description:
        "Reach high-intent customers with targeted and conversion-focused Google Ads campaigns.",
      path: "/digital-marketing/google-ads",
    },
    {
      icon: <CampaignIcon />,
      title: "Meta Ads",
      description:
        "Grow your business through strategic Facebook and Instagram advertising campaigns.",
      path: "/digital-marketing/meta-ads",
    },
    {
      icon: <GroupsIcon />,
      title: "Social Media",
      description:
        "Build a powerful social presence with creative content and audience-focused strategies.",
      path: "/digital-marketing/social-media",
    },
    {
      icon: <AutoAwesomeIcon />,
      title: "Branding",
      description:
        "Create a memorable brand identity that communicates your business with confidence.",
      path: "/digital-marketing/branding",
    },
    {
      icon: <TrendingUpIcon />,
      title: "Lead Generation",
      description:
        "Generate quality leads using performance marketing and conversion-driven campaigns.",
      path: "/digital-marketing",
    },
  ];

  const whyUs = [
    {
      number: "01",
      icon: <AnalyticsIcon />,
      title: "Data-Driven Strategy",
      text: "Every campaign starts with research, insights and measurable business objectives.",
    },
    {
      number: "02",
      icon: <AutoAwesomeIcon />,
      title: "Creative Thinking",
      text: "We combine creative ideas with modern digital strategies to make your brand stand out.",
    },
    {
      number: "03",
      icon: <RocketLaunchIcon />,
      title: "Growth Focused",
      text: "Our campaigns are designed around visibility, engagement, leads and long-term growth.",
    },
    {
      number: "04",
      icon: <SupportAgentIcon />,
      title: "Dedicated Support",
      text: "We work closely with you and continuously optimize your digital marketing strategy.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discover",
      text: "Understand your business, audience, competitors and goals.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "Build a customized digital marketing strategy for your brand.",
    },
    {
      number: "03",
      title: "Create",
      text: "Develop campaigns, content and creative experiences.",
    },
    {
      number: "04",
      title: "Grow",
      text: "Measure results, optimize performance and scale what works.",
    },
  ];

  const stats = [
    {
      value: "120+",
      label: "Projects Completed",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "3X",
      label: "Average Growth",
    },
    {
      value: "24/7",
      label: "Digital Support",
    },
  ];

  return (
    <main className="rsm-home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="rsm-hero" id="home">

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop
          className="rsm-hero-swiper"
        >

          {slides.map((slide, index) => (
            <SwiperSlide key={index}>

              <a
                href={slide.path}
                className="rsm-slide-link"
                aria-label={`Learn more about ${slide.title}`}
              >

                <div className="rsm-slide">

                  {/* Background */}
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    className="rsm-slide-image"
                    initial={{
                      scale: 1.15,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.4,
                      ease: "easeOut",
                    }}
                  />

                  {/* Overlay */}
                  <div className="rsm-slide-overlay"></div>

                  {/* Content */}
                  <div className="rsm-hero-content">

                    <motion.div
                      className="rsm-hero-inner"
                      initial={{
                        opacity: 0,
                        y: 45,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2,
                      }}
                    >

                      <div className="rsm-hero-tag">
                        <span></span>
                        {slide.tag}
                      </div>

                      <Typography
                        component="h1"
                        className="rsm-hero-title"
                      >
                        {slide.title}
                      </Typography>

                      <Typography
                        component="p"
                        className="rsm-hero-subtitle"
                      >
                        {slide.subtitle}
                      </Typography>

                      <div className="rsm-hero-buttons">

                        <Button
                          variant="contained"
                          className="rsm-primary-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            goTo(slide.path);
                          }}
                          endIcon={<ArrowForwardIcon />}
                        >
                          {slide.button1}
                        </Button>

                        <Button
                          variant="outlined"
                          className="rsm-outline-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            goTo("/contact");
                          }}
                          endIcon={<ArrowForwardIcon />}
                        >
                          {slide.button2}
                        </Button>

                      </div>

                    </motion.div>

                  </div>

                  {/* Bottom label */}
                  <div className="rsm-slide-counter">
                    <span>0{index + 1}</span>
                    <div></div>
                    <span>06</span>
                  </div>

                </div>

              </a>

            </SwiperSlide>
          ))}

        </Swiper>

        {/* Scroll Indicator */}
        <div className="rsm-scroll-indicator">
          <span></span>
          <p>SCROLL TO EXPLORE</p>
        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="rsm-intro section-space">

        <Container maxWidth="lg">

          <div className="rsm-intro-grid">

            <motion.div
              className="rsm-intro-left"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <span className="section-label">
                ROHIL SPARK MEDIA
              </span>

              <h2>
                We Turn Digital
                <span> Ideas Into Growth.</span>
              </h2>

            </motion.div>

            <motion.div
              className="rsm-intro-right"
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p>
                Rohil Spark Media is a result-driven digital marketing
                agency helping businesses build stronger brands, reach
                the right audience and achieve sustainable online growth.
              </p>

              <Button
                className="text-arrow-btn"
                onClick={() => goTo("/about-us")}
                endIcon={<ArrowForwardIcon />}
              >
                Discover Who We Are
              </Button>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="rsm-stats">

        <Container maxWidth="lg">

          <div className="rsm-stats-grid">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="rsm-stat"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <strong>{stat.value}</strong>
                <span>{stat.label}</span>

              </motion.div>
            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="rsm-services section-space"
        id="services"
      >

        <Container maxWidth="lg">

          <div className="section-heading">

            <span className="section-label">
              WHAT WE DO
            </span>

            <h2>
              Digital Marketing
              <span> That Delivers.</span>
            </h2>

            <p>
              Powerful digital solutions designed to improve your
              visibility, connect with your audience and accelerate growth.
            </p>

          </div>

          <div className="rsm-services-grid">

            {services.map((service, index) => (
              <motion.div
                key={index}
                className="rsm-service-card"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                onClick={() => goTo(service.path)}
              >

                <div className="rsm-service-number">
                  0{index + 1}
                </div>

                <div className="rsm-service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button>
                  Explore Service
                  <ArrowForwardIcon />
                </button>

              </motion.div>
            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section
        className="rsm-why section-space"
        id="why-us"
      >

        <Container maxWidth="lg">

          <div className="rsm-why-layout">

            <motion.div
              className="rsm-why-intro"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="section-label">
                WHY ROHIL SPARK MEDIA
              </span>

              <h2>
                Strategy.
                <br />
                Creativity.
                <br />
                <span>Growth.</span>
              </h2>

              <p>
                We don't just run campaigns. We build digital
                strategies around your business goals and continuously
                improve them using data and creativity.
              </p>

              <Button
                className="dark-arrow-btn"
                onClick={() => goTo("/contact")}
                endIcon={<ArrowForwardIcon />}
              >
                Let's Work Together
              </Button>

            </motion.div>


            <div className="rsm-why-grid">

              {whyUs.map((item, index) => (
                <motion.div
                  className="rsm-why-card"
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >

                  <div className="rsm-why-top">
                    <span>{item.number}</span>
                    <div>{item.icon}</div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </motion.div>
              ))}

            </div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="rsm-process section-space">

        <Container maxWidth="lg">

          <div className="section-heading">

            <span className="section-label">
              OUR PROCESS
            </span>

            <h2>
              From Strategy
              <span> To Success.</span>
            </h2>

            <p>
              A simple and transparent process designed to turn
              your business goals into measurable digital results.
            </p>

          </div>

          <div className="rsm-process-grid">

            {process.map((item, index) => (
              <motion.div
                className="rsm-process-card"
                key={index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
              >

                <div className="rsm-process-number">
                  {item.number}
                </div>

                <div className="rsm-process-line"></div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </motion.div>
            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className="rsm-results">

        <Container maxWidth="lg">

          <motion.div
            className="rsm-results-content"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <div>

              <span className="section-label">
                READY TO GROW?
              </span>

              <h2>
                Your Next Digital
                <br />
                <span>Success Story Starts Here.</span>
              </h2>

              <p>
                Let's create a digital strategy that gets your
                business noticed, remembered and chosen.
              </p>

            </div>

            <div className="rsm-results-actions">

              <Button
                className="rsm-results-btn"
                onClick={() => goTo("/contact")}
                endIcon={<ArrowForwardIcon />}
              >
                Start Your Digital Journey
              </Button>

            </div>

          </motion.div>

        </Container>

      </section>


      {/* =====================================================
          DIGITAL CHECKLIST
      ===================================================== */}

      <section className="rsm-checklist section-space">

        <Container maxWidth="lg">

          <div className="rsm-checklist-grid">

            <div className="rsm-checklist-image">

              <img
                src="/images/digital-marketing.jpg"
                alt="Digital Marketing"
              />

              <div className="rsm-checklist-badge">
                <RocketLaunchIcon />
                <span>
                  Growth<br />
                  Starts Here
                </span>
              </div>

            </div>


            <motion.div
              className="rsm-checklist-content"
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >

              <span className="section-label">
                YOUR DIGITAL ADVANTAGE
              </span>

              <h2>
                Everything Your
                <span> Brand Needs To Grow.</span>
              </h2>

              <p>
                From visibility to conversions, we bring the
                essential pieces of digital marketing together
                under one strategy.
              </p>

              <ul>

                <li>
                  <CheckCircleIcon />
                  Search visibility and organic growth
                </li>

                <li>
                  <CheckCircleIcon />
                  High-performance paid advertising
                </li>

                <li>
                  <CheckCircleIcon />
                  Social media brand building
                </li>

                <li>
                  <CheckCircleIcon />
                  Creative branding and content
                </li>

                <li>
                  <CheckCircleIcon />
                  Data-driven campaign optimization
                </li>

              </ul>

              <Button
                className="text-arrow-btn"
                onClick={() => goTo("/services")}
                endIcon={<ArrowForwardIcon />}
              >
                Explore All Services
              </Button>

            </motion.div>

          </div>

        </Container>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="rsm-faq section-space">

        <Container maxWidth="md">

          <div className="section-heading">

            <span className="section-label">
              FAQ
            </span>

            <h2>
              Questions?
              <span> We've Got Answers.</span>
            </h2>

          </div>

          <div className="rsm-faq-list">

            {[
              {
                q: "What digital marketing services do you offer?",
                a: "We provide SEO, Google Ads, Meta Ads, Social Media Marketing, Branding and Lead Generation services.",
              },
              {
                q: "How can digital marketing help my business?",
                a: "A strong digital marketing strategy can improve online visibility, reach the right audience, generate leads and support long-term business growth.",
              },
              {
                q: "Do you provide customized marketing strategies?",
                a: "Yes. We build strategies based on your business goals, target audience, industry and current digital presence.",
              },
              {
                q: "How can I get started?",
                a: "Simply contact us and share your business requirements. Our team will help you identify the right digital marketing approach.",
              },
            ].map((faq, index) => (
              <details
                className="rsm-faq-item"
                key={index}
              >

                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-plus">+</span>
                </summary>

                <p>{faq.a}</p>

              </details>
            ))}

          </div>

        </Container>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="rsm-final-cta">

        <Container maxWidth="lg">

          <motion.div
            className="rsm-final-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <span className="section-label">
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2>
              Ready To Make Your
              <span> Brand Stand Out?</span>
            </h2>

            <p>
              Let's turn your ideas into a powerful digital presence.
            </p>

            <div className="rsm-final-buttons">

              <Button
                className="rsm-final-primary"
                onClick={() => goTo("/contact")}
                endIcon={<ArrowForwardIcon />}
              >
                Get Free Consultation
              </Button>

              <Button
                className="rsm-final-secondary"
                onClick={() => goTo("/services")}
              >
                Explore Services
              </Button>

            </div>

          </motion.div>

        </Container>

      </section>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <button
        className="rsm-whatsapp"
        onClick={() => goTo("/contact")}
        aria-label="Contact Rohil Spark Media"
      >
        <WhatsAppIcon />
        <span>Let's Talk</span>
      </button>

    </main>
  );
}