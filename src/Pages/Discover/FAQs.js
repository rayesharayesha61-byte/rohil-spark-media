// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function FAQs() {

//   const [openIndex, setOpenIndex] = useState(null);

//   const faqs = [
//     {
//       question: "What digital marketing services do you provide?",
//       answer:
//         "We provide SEO, Google Ads, Meta Ads, Social Media Marketing and Branding services to help businesses build a strong digital presence and achieve measurable growth.",
//     },
//     {
//       question: "How can SEO help my business?",
//       answer:
//         "SEO helps your website improve its visibility on search engines, attract relevant visitors and generate long-term organic traffic and leads.",
//     },
//     {
//       question: "Do you provide Google Ads management?",
//       answer:
//         "Yes. We create, manage and optimize Google Ads campaigns to reach the right audience, improve campaign performance and maximize your advertising budget.",
//     },
//     {
//       question: "Do you manage Facebook and Instagram marketing?",
//       answer:
//         "Yes. Our Meta Ads and Social Media services help businesses increase reach, engagement, brand awareness and customer acquisition across Facebook and Instagram.",
//     },
//     {
//       question: "How do you create a marketing strategy?",
//       answer:
//         "We first understand your business, audience and goals. Based on this, we develop a customized strategy and continuously optimize it using performance data.",
//     },
//     {
//       question: "How long does it take to see results?",
//       answer:
//         "Results depend on the service, industry, competition and campaign goals. Some paid campaigns can generate results quickly, while SEO and branding generally require consistent long-term effort.",
//     },
//     {
//       question: "Can you create a strategy specifically for my business?",
//       answer:
//         "Absolutely. We don't follow a one-size-fits-all approach. Every strategy is designed according to your business objectives, target audience and growth requirements.",
//     },
//     {
//       question: "How can I get started?",
//       answer:
//         "You can contact our team or book a free consultation. We'll understand your requirements and discuss the best digital marketing approach for your business.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(
//       openIndex === index ? null : index
//     );
//   };

//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .faq-page {
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

//         .faq-hero {
//           min-height: 470px;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           text-align: center;

//           padding:
//             80px 20px 50px;
//         }


//         .faq-hero-content {
//           animation:
//             faqHeroIn 1s ease forwards;
//         }


//         @keyframes faqHeroIn {

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


//         .faq-badge {
//           display: inline-block;

//           padding:
//             9px 18px;

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
//             faqBadge 3s
//             ease-in-out
//             infinite;
//         }


//         @keyframes faqBadge {

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


//         .faq-hero h1 {
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
//             faqGradient 5s
//             linear infinite;
//         }


//         @keyframes faqGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }


//         .faq-hero h2 {
//           margin:
//             20px 0 15px;

//           font-size:
//             clamp(23px,3vw,36px);
//         }


//         .faq-hero p {
//           max-width: 700px;

//           margin: auto;

//           color: #9999a8;

//           font-size: 16px;

//           line-height: 1.8;
//         }


//         /* =========================
//            CONTAINER
//         ========================= */

//         .faq-container {
//           max-width: 950px;

//           margin: auto;

//           padding:
//             20px 25px;
//         }


//         .faq-title {
//           text-align: center;

//           margin-bottom: 45px;
//         }


//         .faq-label {
//           color: #bb50ff;

//           font-size: 12px;

//           letter-spacing: 3px;

//           font-weight: 600;

//           margin-bottom: 12px;
//         }


//         .faq-title h2 {
//           margin:
//             0 0 12px;

//           font-size:
//             clamp(32px,5vw,46px);
//         }


//         .faq-title h2 span {
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


//         .faq-title p {
//           margin: 0;

//           color: #888895;

//           font-size: 14px;
//         }


//         /* =========================
//            FAQ LIST
//         ========================= */

//         .faq-list {
//           display: flex;

//           flex-direction: column;

//           gap: 14px;

//           margin-bottom: 90px;
//         }


//         .faq-item {
//           overflow: hidden;

//           border-radius: 16px;

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
//             .35s ease;

//           animation:
//             faqItemIn .7s ease both;
//         }


//         @keyframes faqItemIn {

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


//         .faq-item:hover {
//           border-color:
//             rgba(170,60,255,.3);

//           box-shadow:
//             0 10px 35px
//             rgba(100,35,255,.1);
//         }


//         .faq-question {
//           width: 100%;

//           display: flex;

//           align-items: center;

//           justify-content: space-between;

//           gap: 20px;

//           padding:
//             22px 25px;

//           border: none;

//           outline: none;

//           cursor: pointer;

//           color: white;

//           text-align: left;

//           background: transparent;

//           font-size: 16px;

//           font-weight: 600;
//         }


//         .faq-plus {
//           min-width: 32px;

//           height: 32px;

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

//           font-size: 20px;

//           transition:
//             .35s ease;
//         }


//         .faq-item.active {
//           border-color:
//             rgba(165,45,255,.4);

//           box-shadow:
//             0 15px 40px
//             rgba(110,35,255,.12);
//         }


//         .faq-item.active .faq-plus {
//           transform:
//             rotate(45deg);

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );
//         }


//         .faq-answer {
//           display: grid;

//           grid-template-rows:
//             0fr;

//           transition:
//             grid-template-rows .4s ease;
//         }


//         .faq-answer-inner {
//           overflow: hidden;

//           padding:
//             0 25px;

//           color: #9292a0;

//           font-size: 14px;

//           line-height: 1.8;

//           transition:
//             padding .4s ease;
//         }


//         .faq-item.active .faq-answer {
//           grid-template-rows:
//             1fr;
//         }


//         .faq-item.active .faq-answer-inner {
//           padding:
//             0 25px 23px;
//         }


//         /* =========================
//            CTA
//         ========================= */

//         .faq-cta {
//           text-align: center;

//           padding:
//             60px 25px;

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


//         .faq-cta h2 {
//           margin:
//             0 0 15px;

//           font-size:
//             clamp(28px,4vw,42px);
//         }


//         .faq-cta p {
//           max-width: 620px;

//           margin:
//             0 auto 25px;

//           color: #9999a8;

//           line-height: 1.8;
//         }


//         .faq-cta-button {
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

//           transition:
//             .3s ease;
//         }


//         .faq-cta-button:hover {
//           transform:
//             translateY(-4px);

//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.5);
//         }


//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 600px) {

//           .faq-hero {
//             min-height: 410px;

//             padding:
//               70px 18px 40px;
//           }


//           .faq-hero h1 {
//             font-size: 50px;
//           }


//           .faq-hero h2 {
//             font-size: 22px;
//           }


//           .faq-hero p {
//             font-size: 14px;
//           }


//           .faq-container {
//             padding:
//               15px 16px;
//           }


//           .faq-title {
//             margin-bottom: 30px;
//           }


//           .faq-question {
//             padding:
//               18px;

//             font-size: 14px;
//           }


//           .faq-plus {
//             min-width: 30px;

//             height: 30px;
//           }


//           .faq-answer-inner {
//             padding:
//               0 18px;

//             font-size: 13px;
//           }


//           .faq-item.active
//           .faq-answer-inner {
//             padding:
//               0 18px 20px;
//           }


//           .faq-cta {
//             padding:
//               45px 20px;
//           }


//           .faq-cta h2 {
//             font-size: 27px;
//           }


//           .faq-cta p {
//             font-size: 14px;
//           }

//         }

//       `}</style>


//       <section className="faq-page">

//         {/* =========================
//             HERO
//         ========================= */}

//         <div className="faq-hero">

//           <div className="faq-hero-content">

//             <div className="faq-badge">
//               ✦ FREQUENTLY ASKED QUESTIONS
//             </div>


//             <h1>
//               FAQs
//             </h1>


//             <h2>
//               Questions?
//               <br />
//               We've Got Answers.
//             </h2>


//             <p>
//               Find answers to common questions
//               about our digital marketing services,
//               strategies and process.
//             </p>

//           </div>

//         </div>


//         <div className="faq-container">

//           {/* =========================
//               TITLE
//           ========================= */}

//           <div className="faq-title">

//             <div className="faq-label">
//               HAVE QUESTIONS?
//             </div>


//             <h2>
//               Everything You
//               <span> Need To Know</span>
//             </h2>


//             <p>
//               Click on a question to discover the answer.
//             </p>

//           </div>


//           {/* =========================
//               FAQ LIST
//           ========================= */}

//           <div className="faq-list">

//             {faqs.map((faq, index) => (

//               <div
//                 className={`faq-item ${
//                   openIndex === index
//                     ? "active"
//                     : ""
//                 }`}
//                 key={index}
//               >

//                 <button
//                   className="faq-question"
//                   onClick={() =>
//                     toggleFAQ(index)
//                   }
//                 >

//                   <span>
//                     {faq.question}
//                   </span>


//                   <span className="faq-plus">
//                     +
//                   </span>

//                 </button>


//                 <div className="faq-answer">

//                   <div className="faq-answer-inner">
//                     {faq.answer}
//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>


//           {/* =========================
//               CTA
//           ========================= */}

//           <div className="faq-cta">

//             <h2>
//               Still Have Questions?
//             </h2>


//             <p>
//               Our team is ready to understand
//               your requirements and help you
//               choose the right digital strategy.
//             </p>


//             <Link
//               to="/contact"
//               className="faq-cta-button"
//             >
//               Let's Talk →
//             </Link>

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default FAQs;
import React, { useState } from "react";
import { Link } from "react-router-dom";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What digital marketing services do you provide?",
      answer:
        "We provide SEO, Google Ads, Meta Ads, Social Media Marketing and Branding services to help businesses build a strong digital presence and achieve measurable growth.",
    },
    {
      question: "How can SEO help my business?",
      answer:
        "SEO helps your website improve its visibility on search engines, attract relevant visitors and generate long-term organic traffic and leads.",
    },
    {
      question: "Do you provide Google Ads management?",
      answer:
        "Yes. We create, manage and optimize Google Ads campaigns to reach the right audience, improve campaign performance and maximize your advertising budget.",
    },
    {
      question: "Do you manage Facebook and Instagram marketing?",
      answer:
        "Yes. Our Meta Ads and Social Media services help businesses increase reach, engagement, brand awareness and customer acquisition across Facebook and Instagram.",
    },
    {
      question: "How do you create a marketing strategy?",
      answer:
        "We first understand your business, audience and goals. Based on this, we develop a customized strategy and continuously optimize it using performance data.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results depend on the service, industry, competition and campaign goals. Some paid campaigns can generate results quickly, while SEO and branding generally require consistent long-term effort.",
    },
    {
      question: "Can you create a strategy specifically for my business?",
      answer:
        "Absolutely. We don't follow a one-size-fits-all approach. Every strategy is designed according to your business objectives, target audience and growth requirements.",
    },
    {
      question: "How can I get started?",
      answer:
        "You can contact our team or book a free consultation. We'll understand your requirements and discuss the best digital marketing approach for your business.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        /* =========================================
           MAIN PAGE
        ========================================= */

        .faq-page {
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
            background .35s ease,
            color .35s ease;
        }

        /* =========================================
           HERO
        ========================================= */

        .faq-hero {
          min-height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;

          padding: 90px 20px 60px;

          position: relative;
          overflow: hidden;

          background:
            linear-gradient(
              90deg,
              rgba(3,3,8,.72),
              rgba(3,3,8,.42),
              rgba(3,3,8,.25)
            ),
            url("/images/faq-hero.jpg");

          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .faq-hero::after {
          content: "";
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at center,
              transparent 20%,
              rgba(3,3,8,.35) 100%
            );

          pointer-events: none;
        }

        .faq-hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;

          animation:
            faqHeroIn 1s ease forwards;
        }

        @keyframes faqHeroIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* =========================================
           BADGE
        ========================================= */

        .faq-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 10px 18px;
          margin-bottom: 22px;

          border-radius: 50px;

          color: #d26aff;

          background:
            rgba(170,50,255,.10);

          border:
            1px solid
            rgba(170,50,255,.28);

          font-size: 12px;
          letter-spacing: 3px;

          animation:
            faqBadge 3s ease-in-out infinite;
        }

        .faq-badge svg {
          font-size: 17px;
        }

        @keyframes faqBadge {
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

        /* =========================================
           HERO TITLE
        ========================================= */

        .faq-hero h1 {
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
            faqGradient 5s linear infinite;
        }

        @keyframes faqGradient {
          to {
            background-position:
              300% center;
          }
        }

        .faq-hero h2 {
          margin: 20px 0 15px;

          font-size:
            clamp(23px,3vw,36px);

          color: #ffffff;
        }

        .faq-hero p {
          max-width: 700px;
          margin: auto;

          color: #b0b0bd;

          font-size: 16px;
          line-height: 1.8;
        }

        /* =========================================
           CONTAINER
        ========================================= */

        .faq-container {
          max-width: 950px;
          margin: auto;
          padding: 20px 25px;
        }

        .faq-title {
          text-align: center;
          margin-bottom: 45px;
        }

        .faq-label {
          color: #bb50ff;

          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 600;

          margin-bottom: 12px;
        }

        .faq-title h2 {
          margin: 0 0 12px;

          font-size:
            clamp(32px,5vw,46px);

          color: #ffffff;
        }

        .faq-title h2 span {
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

        .faq-title p {
          margin: 0;
          color: #888895;
          font-size: 14px;
        }

        /* =========================================
           FAQ LIST
        ========================================= */

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 14px;

          margin-bottom: 90px;
        }

        .faq-item {
          overflow: hidden;

          border-radius: 16px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.015)
            );

          border:
            1px solid
            rgba(255,255,255,.08);

          transition:
            .35s ease;

          animation:
            faqItemIn .7s ease both;
        }

        @keyframes faqItemIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-item:hover {
          border-color:
            rgba(170,60,255,.3);

          box-shadow:
            0 10px 35px
            rgba(100,35,255,.1);
        }

        /* =========================================
           QUESTION
        ========================================= */

        .faq-question {
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding: 22px 25px;

          border: none;
          outline: none;

          cursor: pointer;

          color: #ffffff;

          text-align: left;

          background: transparent;

          font-size: 16px;
          font-weight: 600;
        }

        .faq-question-text {
          flex: 1;
        }

        .faq-plus {
          min-width: 34px;
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: #ffffff;

          background:
            rgba(255,255,255,.06);

          border:
            1px solid
            rgba(255,255,255,.1);

          transition:
            .35s ease;
        }

        .faq-plus svg {
          font-size: 20px;
        }

        .faq-item.active {
          border-color:
            rgba(165,45,255,.4);

          box-shadow:
            0 15px 40px
            rgba(110,35,255,.12);
        }

        .faq-item.active .faq-plus {
          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          border-color: transparent;

          transform: rotate(180deg);
        }

        /* =========================================
           ANSWER
        ========================================= */

        .faq-answer {
          display: grid;

          grid-template-rows:
            0fr;

          transition:
            grid-template-rows .4s ease;
        }

        .faq-answer-inner {
          overflow: hidden;

          padding: 0 25px;

          color: #9292a0;

          font-size: 14px;
          line-height: 1.8;

          transition:
            padding .4s ease;
        }

        .faq-item.active .faq-answer {
          grid-template-rows:
            1fr;
        }

        .faq-item.active .faq-answer-inner {
          padding:
            0 25px 23px;
        }

        /* =========================================
           CTA
        ========================================= */

        .faq-cta {
          text-align: center;

          padding: 60px 25px;

          border-radius: 25px;

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

        .faq-cta h2 {
          margin: 0 0 15px;

          font-size:
            clamp(28px,4vw,42px);

          color: #ffffff;
        }

        .faq-cta p {
          max-width: 620px;

          margin:
            0 auto 25px;

          color: #9999a8;

          line-height: 1.8;
        }

        .faq-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 14px 28px;

          border-radius: 10px;

          color: #ffffff !important;

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

        .faq-cta-button:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.5);
        }

        /* =========================================
           LIGHT MODE
        ========================================= */

        body.light-theme .faq-page {
          color: #171722;

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

        body.light-theme .faq-hero {
          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,.28),
              rgba(255,255,255,.10),
              rgba(255,255,255,.05)
            ),
            url("/images/faq-hero.jpg");

          background-size: cover;
          background-position: center;
        }

        body.light-theme .faq-hero::after {
          background:
            radial-gradient(
              circle at center,
              transparent 20%,
              rgba(255,255,255,.12) 100%
            );
        }

        body.light-theme .faq-hero h2 {
          color: #171722;
        }

        body.light-theme .faq-hero p {
          color: #555566;
        }

        body.light-theme .faq-title h2 {
          color: #171722;
        }

        body.light-theme .faq-title p {
          color: #666675;
        }

        body.light-theme .faq-item {
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.95),
              rgba(248,249,253,.95)
            );

          border-color:
            rgba(20,20,40,.09);

          box-shadow:
            0 8px 30px
            rgba(30,30,60,.05);
        }

        body.light-theme .faq-item:hover {
          border-color:
            rgba(150,50,255,.25);

          box-shadow:
            0 12px 35px
            rgba(60,40,100,.10);
        }

        body.light-theme .faq-question {
          color: #20202c;
        }

        body.light-theme .faq-plus {
          color: #444452;

          background:
            rgba(80,80,100,.06);

          border-color:
            rgba(50,50,70,.10);
        }

        body.light-theme .faq-answer-inner {
          color: #666675;
        }

        body.light-theme .faq-item.active {
          border-color:
            rgba(150,50,255,.35);
        }

        body.light-theme .faq-cta {
          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.08),
              rgba(35,100,255,.06)
            );

          border-color:
            rgba(140,60,220,.16);
        }

        body.light-theme .faq-cta h2 {
          color: #20202c;
        }

        body.light-theme .faq-cta p {
          color: #666675;
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 600px) {
          .faq-hero {
            min-height: 420px;
            padding: 70px 18px 40px;
          }

          .faq-hero h1 {
            font-size: 50px;
          }

          .faq-hero h2 {
            font-size: 22px;
          }

          .faq-hero p {
            font-size: 14px;
          }

          .faq-container {
            padding: 15px 16px;
          }

          .faq-title {
            margin-bottom: 30px;
          }

          .faq-question {
            padding: 18px;
            font-size: 14px;
          }

          .faq-plus {
            min-width: 30px;
            width: 30px;
            height: 30px;
          }

          .faq-answer-inner {
            padding: 0 18px;
            font-size: 13px;
          }

          .faq-item.active .faq-answer-inner {
            padding: 0 18px 20px;
          }

          .faq-cta {
            padding: 45px 20px;
          }

          .faq-cta h2 {
            font-size: 27px;
          }

          .faq-cta p {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="faq-page">

        {/* HERO */}
        <div className="faq-hero">
          <div className="faq-hero-content">

            <div className="faq-badge">
              <AutoAwesomeIcon />
              FREQUENTLY ASKED QUESTIONS
            </div>

            <h1>
              FAQs
            </h1>

            <h2>
              Questions?
              <br />
              We've Got Answers.
            </h2>

            <p>
              Find answers to common questions
              about our digital marketing services,
              strategies and process.
            </p>

          </div>
        </div>

        {/* CONTENT */}
        <div className="faq-container">

          {/* TITLE */}
          <div className="faq-title">

            <div className="faq-label">
              HAVE QUESTIONS?
            </div>

            <h2>
              Everything You
              <span> Need To Know</span>
            </h2>

            <p>
              Click on a question to discover the answer.
            </p>

          </div>

          {/* FAQ LIST */}
          <div className="faq-list">

            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  openIndex === index ? "active" : ""
                }`}
                key={index}
              >

                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >

                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span className="faq-plus">
                    {openIndex === index ? (
                      <RemoveIcon />
                    ) : (
                      <AddIcon />
                    )}
                  </span>

                </button>

                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    {faq.answer}
                  </div>
                </div>

              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="faq-cta">

            <h2>
              Still Have Questions?
            </h2>

            <p>
              Our team is ready to understand
              your requirements and help you
              choose the right digital strategy.
            </p>

            <Link
              to="/contact"
              className="faq-cta-button"
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

export default FAQs;