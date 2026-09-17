// import React from "react";
// import { Link } from "react-router-dom";
// function Footer() {
//   return (
//     <>
//       <style>{`

//         /* ================= FOOTER ================= */

//         .rohil-footer {
//           position: relative;

//           padding: 70px 6% 25px;

//           background:
//             radial-gradient(
//               circle at 20% 20%,
//               rgba(140, 40, 255, 0.12),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 80% 30%,
//               rgba(30, 100, 255, 0.10),
//               transparent 30%
//             ),
//             #020207;

//           border-top: 1px solid rgba(170, 70, 255, 0.15);

//           overflow: hidden;
//         }

//         /* Top Glow */

//         .footer-glow {
//           position: absolute;

//           top: -80px;
//           left: 50%;

//           width: 400px;
//           height: 150px;

//           transform: translateX(-50%);

//           background: #963cff;

//           filter: blur(100px);

//           opacity: 0.12;

//           pointer-events: none;
//         }

//         /* ================= MAIN ================= */

//        .footer-container {
//   position: relative;
//   z-index: 2;

//   max-width: 1250px;

//   margin: auto;

//   display: grid;

//   grid-template-columns:
//     1.5fr
//     0.8fr
//     0.9fr
//     0.8fr
//     1.2fr;

//   gap: 35px;
// }

//         /* ================= BRAND ================= */

//         .footer-brand {
//           max-width: 350px;
//         }

//         .footer-logo {
//           width: 190px;

//           display: block;

//           margin-bottom: 20px;

//           filter:
//             drop-shadow(
//               0 0 12px rgba(160, 60, 255, 0.35)
//             );

//           transition: 0.3s;
//         }

//         .footer-logo:hover {
//           transform: scale(1.04);

//           filter:
//             drop-shadow(
//               0 0 20px rgba(170, 60, 255, 0.6)
//             );
//         }

//         .footer-description {
//           color: #9999a8;

//           font-size: 14px;

//           line-height: 1.8;

//           margin-bottom: 25px;
//         }

//         /* ================= SOCIAL ================= */

//         .footer-social {
//           display: flex;

//           gap: 10px;
//         }

//         .footer-social a {
//           width: 38px;
//           height: 38px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           color: white;

//           text-decoration: none;

//           background:
//             rgba(255,255,255,0.06);

//           border:
//             1px solid rgba(255,255,255,0.1);

//           transition: 0.3s;
//         }

//         .footer-social a:hover {
//           transform:
//             translateY(-5px)
//             rotate(8deg);

//           background: #793cff;

//           border-color: #a940ff;

//           box-shadow:
//             0 0 20px rgba(130,50,255,0.6);
//         }

//         /* ================= TITLES ================= */

//         .footer-column h3 {
//           position: relative;

//           margin-bottom: 22px;

//           color: white;

//           font-size: 17px;
//         }

//         .footer-column h3::after {
//           content: "";

//           position: absolute;

//           left: 0;
//           bottom: -8px;

//           width: 30px;
//           height: 2px;

//           background:
//             linear-gradient(
//               90deg,
//               #b238ff,
//               #357cff
//             );

//           box-shadow:
//             0 0 8px #923cff;
//         }

//         /* ================= LINKS ================= */

//         .footer-links {
//           list-style: none;

//           padding: 0;
//           margin: 0;
//         }

//         .footer-links li {
//           margin-bottom: 13px;
//         }

//         .footer-links a {
//           position: relative;

//           color: #9696a5;

//           text-decoration: none;

//           font-size: 14px;

//           transition: 0.3s;
//         }

//         .footer-links a::before {
//           content: "›";

//           margin-right: 7px;

//           color: #933cff;

//           opacity: 0;

//           transform: translateX(-5px);

//           display: inline-block;

//           transition: 0.3s;
//         }

//         .footer-links a:hover {
//           color: #c04cff;

//           padding-left: 3px;

//           text-shadow:
//             0 0 10px rgba(180,60,255,0.35);
//         }

//         .footer-links a:hover::before {
//           opacity: 1;

//           transform: translateX(0);
//         }

//         /* ================= CONTACT ================= */

//         .footer-contact {
//           display: flex;

//           flex-direction: column;

//           gap: 15px;
//         }

//         .footer-contact-item {
//           display: flex;

//           align-items: flex-start;

//           gap: 12px;

//           color: #9999a8;

//           font-size: 14px;

//           line-height: 1.5;
//         }

//         .contact-icon {
//           min-width: 34px;
//           height: 34px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 9px;

//           background:
//             rgba(150,55,255,0.12);

//           border:
//             1px solid rgba(160,60,255,0.2);

//           color: #b449ff;

//           transition: 0.3s;
//         }

//         .footer-contact-item:hover .contact-icon {
//           background: #8c3cff;

//           color: white;

//           box-shadow:
//             0 0 15px rgba(140,60,255,0.5);
//         }

//         /* ================= NEWSLETTER ================= */

//         .footer-newsletter {
//           margin-top: 25px;
//         }

//         .footer-newsletter p {
//           color: #888895;

//           font-size: 13px;

//           line-height: 1.6;

//           margin-bottom: 12px;
//         }

//         .newsletter-box {
//           display: flex;

//           height: 45px;

//           border-radius: 8px;

//           overflow: hidden;

//           border:
//             1px solid rgba(255,255,255,0.12);

//           background:
//             rgba(255,255,255,0.04);
//         }

//         .newsletter-box input {
//           min-width: 0;

//           flex: 1;

//           border: none;

//           outline: none;

//           padding: 0 13px;

//           background: transparent;

//           color: white;

//           font-size: 13px;
//         }

//         .newsletter-box input::placeholder {
//           color: #777783;
//         }

//         .newsletter-box button {
//           border: none;

//           padding: 0 15px;

//           cursor: pointer;

//           color: white;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a32cff,
//               #435cff
//             );

//           transition: 0.3s;
//         }

//         .newsletter-box button:hover {
//           box-shadow:
//             0 0 20px rgba(140,50,255,0.6);
//         }

//         /* ================= BOTTOM ================= */

//         .footer-bottom {
//           position: relative;
//           z-index: 2;

//           max-width: 1250px;

//           margin: 55px auto 0;

//           padding-top: 22px;

//           border-top:
//             1px solid rgba(255,255,255,0.08);

//           display: flex;

//           align-items: center;
//           justify-content: space-between;

//           gap: 20px;

//           color: #6f6f7d;

//           font-size: 12px;
//         }

//         .footer-bottom-links {
//           display: flex;

//           gap: 22px;
//         }

//         .footer-bottom-links a {
//           color: #777783;

//           text-decoration: none;

//           transition: 0.3s;
//         }

//         .footer-bottom-links a:hover {
//           color: #b342ff;
//         }

//         /* ================= FLOATING LIGHT ================= */

//         .footer-orb {
//           position: absolute;

//           width: 5px;
//           height: 5px;

//           border-radius: 50%;

//           background: white;

//           box-shadow:
//             0 0 10px #b43cff,
//             0 0 20px #723cff;

//           animation: footerFloat 4s infinite ease-in-out;
//         }

//         .footer-orb.one {
//           top: 25%;
//           left: 8%;
//         }

//         .footer-orb.two {
//           top: 60%;
//           right: 10%;

//           animation-delay: 1s;
//         }

//         .footer-orb.three {
//           bottom: 15%;
//           left: 45%;

//           animation-delay: 2s;
//         }

//         @keyframes footerFloat {

//           0%,100% {
//             opacity: .2;

//             transform:
//               translateY(0)
//               scale(.7);
//           }

//           50% {
//             opacity: 1;

//             transform:
//               translateY(-15px)
//               scale(1.4);
//           }

//         }

//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 1000px) {

//           .footer-container {
//             grid-template-columns:
//               1fr 1fr;

//             gap: 45px 30px;
//           }

//         }

//         @media (max-width: 600px) {

//           .rohil-footer {
//             padding:
//               55px 20px
//               20px;
//           }

//           .footer-container {
//             grid-template-columns: 1fr;

//             gap: 35px;
//           }

//           .footer-brand {
//             max-width: 100%;
//           }

//           .footer-logo {
//             width: 165px;
//           }

//           .footer-bottom {
//             flex-direction: column;

//             text-align: center;

//             margin-top: 40px;
//           }

//           .footer-bottom-links {
//             justify-content: center;

//             flex-wrap: wrap;

//             gap: 15px;
//           }

//         }

//       `}</style>

//       <footer className="rohil-footer">

//         <div className="footer-glow"></div>

//         <span className="footer-orb one"></span>
//         <span className="footer-orb two"></span>
//         <span className="footer-orb three"></span>

//         <div className="footer-container">

//           {/* ================= BRAND ================= */}

//           <div className="footer-brand">

//             <img
//               src="/images/logo.png"
//               alt="Rohil Digital Spark Media"
//               className="footer-logo"
//             />

//             <p className="footer-description">
//               We help businesses grow online through
//               creative strategies, AI-powered marketing
//               and result-driven digital campaigns.
//             </p>

//             <div className="footer-social">

//               <a
//   href="https://www.facebook.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Facebook"
// >
//   f
// </a>

// <a
//   href="https://www.instagram.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Instagram"
// >
//   ◎
// </a>

// <a
//   href="https://www.linkedin.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="LinkedIn"
// >
//   in
// </a>

// <a
//   href="https://wa.me/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="WhatsApp"
// >
//   ☎
// </a>

//             </div>

//           </div>

//           {/* ================= QUICK LINKS ================= */}

//           <div className="footer-column">

//             <h3>
//               Quick Links
//             </h3>

//             <ul className="footer-links">

              
//                 <li>
//   <Link to="/">
//     Home
//   </Link>
// </li>

// <li>
//   <Link to="/services">
//     Services
//   </Link>
// </li>

// <li>
//   <Link to="/about">
//     About Us
//   </Link>
// </li>

// <li>
//   <Link to="/our-work">
//     Our Work
//   </Link>
// </li>

// <li>
//   <Link to="/contact">
//     Contact
//   </Link>
// </li>

//             </ul>

//           </div>

//           {/* ================= SERVICES ================= */}

//           <div className="footer-column">

//             <h3>
//               Services
//             </h3>

//             <ul className="footer-links">

//   <li>
//     <Link to="/seo">
//       SEO
//     </Link>
//   </li>

//   <li>
//     <Link to="/google-ads">
//       Google Ads
//     </Link>
//   </li>

//   <li>
//     <Link to="/meta-ads">
//       Meta Ads
//     </Link>
//   </li>

//   <li>
//     <Link to="/social-media">
//       Social Media
//     </Link>
//   </li>

//   <li>
//     <Link to="/branding">
//       Branding
//     </Link>
//   </li>

// </ul>
//           </div>
// <div className="footer-column">

//             <h3>
//               Discover
//             </h3>

//             <ul className="footer-links">

//   <li>
//     <Link to="our-approach">
//       Our Approach
//     </Link>
//   </li>

//   <li>
//     <Link to="/insights">
//       Insights
//     </Link>
//   </li>

//   <li>
//     <Link to="/faq">
//       FAQs
//     </Link>
//   </li>

 

// </ul>
//           </div>

//           {/* ================= CONTACT ================= */}

//           <div className="footer-column">

//             <h3>
//               Get In Touch
//             </h3>

//             <div className="footer-contact">

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   ✉
//                 </span>

//                 <span>
//                   rohilsparkmedia@gmail.com
//                 </span>

//               </div>

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   ☎
//                 </span>

//                 <span>
//                   +91 97518 67879
//                 </span>

//               </div>

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   📍
//                 </span>

//                 <span>
//                   1 st Floor,Canara Bank Building,Madurai
//                   Viruthunagar-626001.
//                 </span>

//               </div>

//             </div>

//            <div className="footer-newsletter">

//   <p>
//     Subscribe for digital marketing tips
//     and updates.
//   </p>

//  <form
//   onSubmit={(e) => {
//     e.preventDefault();

//     const email = e.target.email.value.trim();

//     if (!email) {
//       alert("Please enter your email");
//       return;
//     }

//     const subject =
//       "Rohil Digital Spark Media Newsletter Subscription";

//     const body = `
// Hello Rohil Digital Spark Media,

// I would like to subscribe to your digital marketing tips and updates.

// Subscriber Email:
// ${email}

// Thank you.
//     `;

//     window.location.href =
//       `mailto:rayesharayesha61@gmail.com?subject=${encodeURIComponent(
//         subject
//       )}&body=${encodeURIComponent(body)}`;
//   }}
//   className="newsletter-box"
// >
//   <input
//     type="email"
//     name="email"
//     placeholder="Your email"
//     required
//   />

//   <button type="submit">
//     →
//   </button>
// </form>


//             </div>

//           </div>

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div className="footer-bottom">

//           <span>
//             © {new Date().getFullYear()} Rohil Spark Media.
//             All Rights Reserved.
//           </span>

//           <div className="footer-bottom-links">

//             <a href="#privacy">
//               Privacy Policy
//             </a>

//             <a href="#terms">
//               Terms & Conditions
//             </a>

//           </div>

//         </div>

//       </footer>
//     </>
//   );
// }

// export default Footer;
// import React from "react";
// import { Link } from "react-router-dom";
// function Footer() {
//   return (
//     <>
//       <style>{`

//         /* ================= FOOTER ================= */

//         .rohil-footer {
//           position: relative;

//           padding: 70px 6% 25px;

//           background:
//             radial-gradient(
//               circle at 20% 20%,
//               rgba(140, 40, 255, 0.12),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 80% 30%,
//               rgba(30, 100, 255, 0.10),
//               transparent 30%
//             ),
//             #020207;

//           border-top: 1px solid rgba(170, 70, 255, 0.15);

//           overflow: hidden;
//         }

//         /* Top Glow */

//         .footer-glow {
//           position: absolute;

//           top: -80px;
//           left: 50%;

//           width: 400px;
//           height: 150px;

//           transform: translateX(-50%);

//           background: #963cff;

//           filter: blur(100px);

//           opacity: 0.12;

//           pointer-events: none;
//         }

//         /* ================= MAIN ================= */

//        .footer-container {
//   position: relative;
//   z-index: 2;

//   max-width: 1250px;

//   margin: auto;

//   display: grid;

//   grid-template-columns:
//     1.5fr
//     0.8fr
//     0.9fr
//     0.8fr
//     1.2fr;

//   gap: 35px;
// }

//         /* ================= BRAND ================= */

//         .footer-brand {
//           max-width: 350px;
//         }

//         .footer-logo {
//           width: 190px;

//           display: block;

//           margin-bottom: 20px;

//           filter:
//             drop-shadow(
//               0 0 12px rgba(160, 60, 255, 0.35)
//             );

//           transition: 0.3s;
//         }

//         .footer-logo:hover {
//           transform: scale(1.04);

//           filter:
//             drop-shadow(
//               0 0 20px rgba(170, 60, 255, 0.6)
//             );
//         }

//         .footer-description {
//           color: #9999a8;

//           font-size: 14px;

//           line-height: 1.8;

//           margin-bottom: 25px;
//         }

//         /* ================= SOCIAL ================= */

//         .footer-social {
//           display: flex;

//           gap: 10px;
//         }

//         .footer-social a {
//           width: 38px;
//           height: 38px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 50%;

//           color: white;

//           text-decoration: none;

//           background:
//             rgba(255,255,255,0.06);

//           border:
//             1px solid rgba(255,255,255,0.1);

//           transition: 0.3s;
//         }

//         .footer-social a:hover {
//           transform:
//             translateY(-5px)
//             rotate(8deg);

//           background: #793cff;

//           border-color: #a940ff;

//           box-shadow:
//             0 0 20px rgba(130,50,255,0.6);
//         }

//         /* ================= TITLES ================= */

//         .footer-column h3 {
//           position: relative;

//           margin-bottom: 22px;

//           color: white;

//           font-size: 17px;
//         }

//         .footer-column h3::after {
//           content: "";

//           position: absolute;

//           left: 0;
//           bottom: -8px;

//           width: 30px;
//           height: 2px;

//           background:
//             linear-gradient(
//               90deg,
//               #b238ff,
//               #357cff
//             );

//           box-shadow:
//             0 0 8px #923cff;
//         }

//         /* ================= LINKS ================= */

//         .footer-links {
//           list-style: none;

//           padding: 0;
//           margin: 0;
//         }

//         .footer-links li {
//           margin-bottom: 13px;
//         }

//         .footer-links a {
//           position: relative;

//           color: #9696a5;

//           text-decoration: none;

//           font-size: 14px;

//           transition: 0.3s;
//         }

//         .footer-links a::before {
//           content: "›";

//           margin-right: 7px;

//           color: #933cff;

//           opacity: 0;

//           transform: translateX(-5px);

//           display: inline-block;

//           transition: 0.3s;
//         }

//         .footer-links a:hover {
//           color: #c04cff;

//           padding-left: 3px;

//           text-shadow:
//             0 0 10px rgba(180,60,255,0.35);
//         }

//         .footer-links a:hover::before {
//           opacity: 1;

//           transform: translateX(0);
//         }

//         /* ================= CONTACT ================= */

//         .footer-contact {
//           display: flex;

//           flex-direction: column;

//           gap: 15px;
//         }

//         .footer-contact-item {
//           display: flex;

//           align-items: flex-start;

//           gap: 12px;

//           color: #9999a8;

//           font-size: 14px;

//           line-height: 1.5;
//         }

//         .contact-icon {
//           min-width: 34px;
//           height: 34px;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 9px;

//           background:
//             rgba(150,55,255,0.12);

//           border:
//             1px solid rgba(160,60,255,0.2);

//           color: #b449ff;

//           transition: 0.3s;
//         }

//         .footer-contact-item:hover .contact-icon {
//           background: #8c3cff;

//           color: white;

//           box-shadow:
//             0 0 15px rgba(140,60,255,0.5);
//         }

//         /* ================= NEWSLETTER ================= */

//         .footer-newsletter {
//           margin-top: 25px;
//         }

//         .footer-newsletter p {
//           color: #888895;

//           font-size: 13px;

//           line-height: 1.6;

//           margin-bottom: 12px;
//         }

//         .newsletter-box {
//           display: flex;

//           height: 45px;

//           border-radius: 8px;

//           overflow: hidden;

//           border:
//             1px solid rgba(255,255,255,0.12);

//           background:
//             rgba(255,255,255,0.04);
//         }

//         .newsletter-box input {
//           min-width: 0;

//           flex: 1;

//           border: none;

//           outline: none;

//           padding: 0 13px;

//           background: transparent;

//           color: white;

//           font-size: 13px;
//         }

//         .newsletter-box input::placeholder {
//           color: #777783;
//         }

//         .newsletter-box button {
//           border: none;

//           padding: 0 15px;

//           cursor: pointer;

//           color: white;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a32cff,
//               #435cff
//             );

//           transition: 0.3s;
//         }

//         .newsletter-box button:hover {
//           box-shadow:
//             0 0 20px rgba(140,50,255,0.6);
//         }

//         /* ================= BOTTOM ================= */

//         .footer-bottom {
//           position: relative;
//           z-index: 2;

//           max-width: 1250px;

//           margin: 55px auto 0;

//           padding-top: 22px;

//           border-top:
//             1px solid rgba(255,255,255,0.08);

//           display: flex;

//           align-items: center;
//           justify-content: space-between;

//           gap: 20px;

//           color: #6f6f7d;

//           font-size: 12px;
//         }

//         .footer-bottom-links {
//           display: flex;

//           gap: 22px;
//         }

//         .footer-bottom-links a {
//           color: #777783;

//           text-decoration: none;

//           transition: 0.3s;
//         }

//         .footer-bottom-links a:hover {
//           color: #b342ff;
//         }

//         /* ================= FLOATING LIGHT ================= */

//         .footer-orb {
//           position: absolute;

//           width: 5px;
//           height: 5px;

//           border-radius: 50%;

//           background: white;

//           box-shadow:
//             0 0 10px #b43cff,
//             0 0 20px #723cff;

//           animation: footerFloat 4s infinite ease-in-out;
//         }

//         .footer-orb.one {
//           top: 25%;
//           left: 8%;
//         }

//         .footer-orb.two {
//           top: 60%;
//           right: 10%;

//           animation-delay: 1s;
//         }

//         .footer-orb.three {
//           bottom: 15%;
//           left: 45%;

//           animation-delay: 2s;
//         }

//         @keyframes footerFloat {

//           0%,100% {
//             opacity: .2;

//             transform:
//               translateY(0)
//               scale(.7);
//           }

//           50% {
//             opacity: 1;

//             transform:
//               translateY(-15px)
//               scale(1.4);
//           }

//         }

//         /* ================= RESPONSIVE ================= */

//         @media (max-width: 1000px) {

//           .footer-container {
//             grid-template-columns:
//               1fr 1fr;

//             gap: 45px 30px;
//           }

//         }

//         @media (max-width: 600px) {

//           .rohil-footer {
//             padding:
//               55px 20px
//               20px;
//           }

//           .footer-container {
//             grid-template-columns: 1fr;

//             gap: 35px;
//           }

//           .footer-brand {
//             max-width: 100%;
//           }

//           .footer-logo {
//             width: 165px;
//           }

//           .footer-bottom {
//             flex-direction: column;

//             text-align: center;

//             margin-top: 40px;
//           }

//           .footer-bottom-links {
//             justify-content: center;

//             flex-wrap: wrap;

//             gap: 15px;
//           }

//         }

//       `}</style>

//       <footer className="rohil-footer">

//         <div className="footer-glow"></div>

//         <span className="footer-orb one"></span>
//         <span className="footer-orb two"></span>
//         <span className="footer-orb three"></span>

//         <div className="footer-container">

//           {/* ================= BRAND ================= */}

//           <div className="footer-brand">

//             <img
//               src="/images/logo.png"
//               alt="Rohil Digital Spark Media"
//               className="footer-logo"
//             />

//             <p className="footer-description">
//               We help businesses grow online through
//               creative strategies, AI-powered marketing
//               and result-driven digital campaigns.
//             </p>

//             <div className="footer-social">

//               <a
//   href="https://www.facebook.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Facebook"
// >
//   f
// </a>

// <a
//   href="https://www.instagram.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Instagram"
// >
//   ◎
// </a>

// <a
//   href="https://www.linkedin.com/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="LinkedIn"
// >
//   in
// </a>

// <a
//   href="https://wa.me/"
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="WhatsApp"
// >
//   ☎
// </a>

//             </div>

//           </div>

//           {/* ================= QUICK LINKS ================= */}

//           <div className="footer-column">

//             <h3>
//               Quick Links
//             </h3>

//             <ul className="footer-links">

              
//                 <li>
//   <Link to="/">
//     Home
//   </Link>
// </li>

// <li>
//   <Link to="/services">
//     Services
//   </Link>
// </li>

// <li>
//   <Link to="/about">
//     About Us
//   </Link>
// </li>

// <li>
//   <Link to="/our-work">
//     Our Work
//   </Link>
// </li>

// <li>
//   <Link to="/contact">
//     Contact
//   </Link>
// </li>

//             </ul>

//           </div>

//           {/* ================= SERVICES ================= */}

//           <div className="footer-column">

//             <h3>
//               Services
//             </h3>

//             <ul className="footer-links">

//   <li>
//     <Link to="/seo">
//       SEO
//     </Link>
//   </li>

//   <li>
//     <Link to="/google-ads">
//       Google Ads
//     </Link>
//   </li>

//   <li>
//     <Link to="/meta-ads">
//       Meta Ads
//     </Link>
//   </li>

//   <li>
//     <Link to="/social-media">
//       Social Media
//     </Link>
//   </li>

//   <li>
//     <Link to="/branding">
//       Branding
//     </Link>
//   </li>

// </ul>
//           </div>
// <div className="footer-column">

//             <h3>
//               Discover
//             </h3>

//             <ul className="footer-links">

//   <li>
//     <Link to="our-approach">
//       Our Approach
//     </Link>
//   </li>

//   <li>
//     <Link to="/insights">
//       Insights
//     </Link>
//   </li>

//   <li>
//     <Link to="/faq">
//       FAQs
//     </Link>
//   </li>

 

// </ul>
//           </div>

//           {/* ================= CONTACT ================= */}

//           <div className="footer-column">

//             <h3>
//               Get In Touch
//             </h3>

//             <div className="footer-contact">

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   ✉
//                 </span>

//                 <span>
//                   rohilsparkmedia@gmail.com
//                 </span>

//               </div>

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   ☎
//                 </span>

//                 <span>
//                   +91 97518 67879
//                 </span>

//               </div>

//               <div className="footer-contact-item">

//                 <span className="contact-icon">
//                   📍
//                 </span>

//                 <span>
//                   1 st Floor,Canara Bank Building,Madurai
//                   Viruthunagar-626001.
//                 </span>

//               </div>

//             </div>

//            <div className="footer-newsletter">

//   <p>
//     Subscribe for digital marketing tips
//     and updates.
//   </p>

//  <form
//   onSubmit={(e) => {
//     e.preventDefault();

//     const email = e.target.email.value.trim();

//     if (!email) {
//       alert("Please enter your email");
//       return;
//     }

//     const subject =
//       "Rohil Digital Spark Media Newsletter Subscription";

//     const body = `
// Hello Rohil Digital Spark Media,

// I would like to subscribe to your digital marketing tips and updates.

// Subscriber Email:
// ${email}

// Thank you.
//     `;

//     window.location.href =
//       `mailto:rayesharayesha61@gmail.com?subject=${encodeURIComponent(
//         subject
//       )}&body=${encodeURIComponent(body)}`;
//   }}
//   className="newsletter-box"
// >
//   <input
//     type="email"
//     name="email"
//     placeholder="Your email"
//     required
//   />

//   <button type="submit">
//     →
//   </button>
// </form>


//             </div>

//           </div>

//         </div>

//         {/* ================= BOTTOM ================= */}

//         <div className="footer-bottom">

//           <span>
//             © {new Date().getFullYear()} Rohil Spark Media.
//             All Rights Reserved.
//           </span>

//           <div className="footer-bottom-links">

//             <a href="#privacy">
//               Privacy Policy
//             </a>

//             <a href="#terms">
//               Terms & Conditions
//             </a>

//           </div>

//         </div>

//       </footer>
//     </>
//   );
// }

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Footer() {
  return (
    <>
      <style>{`

        /* ================= FOOTER ================= */

        .rohil-footer {
          position: relative;
          padding: 70px 6% 25px;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(140, 40, 255, 0.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(30, 100, 255, 0.10),
              transparent 30%
            ),
            #020207;

          border-top: 1px solid rgba(170, 70, 255, 0.15);
          overflow: hidden;
        }

        /* Top Glow */

        .footer-glow {
          position: absolute;
          top: -80px;
          left: 50%;

          width: 400px;
          height: 150px;

          transform: translateX(-50%);

          background: #963cff;
          filter: blur(100px);
          opacity: 0.12;

          pointer-events: none;
        }

        /* ================= MAIN ================= */

        .footer-container {
          position: relative;
          z-index: 2;

          max-width: 1250px;
          margin: auto;

          display: grid;

          grid-template-columns:
            1.5fr
            0.8fr
            0.9fr
            0.8fr
            1.2fr;

          gap: 35px;
        }

        /* ================= BRAND ================= */

        .footer-brand {
          max-width: 350px;
        }

        .footer-logo {
          width: 190px;
          display: block;
          margin-bottom: 20px;

          filter:
            drop-shadow(
              0 0 12px rgba(160, 60, 255, 0.35)
            );

          transition: 0.3s;
        }

        .footer-logo:hover {
          transform: scale(1.04);

          filter:
            drop-shadow(
              0 0 20px rgba(170, 60, 255, 0.6)
            );
        }

        .footer-description {
          color: #9999a8;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 25px;
        }

        /* ================= SOCIAL ================= */

        .footer-social {
          display: flex;
          gap: 10px;
        }

        .footer-social a {
          width: 38px;
          height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          color: white;
          text-decoration: none;

          background: rgba(255, 255, 255, 0.06);

          border: 1px solid rgba(255, 255, 255, 0.1);

          transition: 0.3s;
        }

        .footer-social a:hover {
          transform: translateY(-5px) rotate(8deg);

          background: #793cff;
          border-color: #a940ff;

          box-shadow:
            0 0 20px rgba(130, 50, 255, 0.6);
        }

        .footer-social svg {
          font-size: 19px;
        }

        /* ================= TITLES ================= */

        .footer-column h3 {
          position: relative;

          margin-bottom: 22px;

          color: white;
          font-size: 17px;
        }

        .footer-column h3::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -8px;

          width: 30px;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #b238ff,
              #357cff
            );

          box-shadow:
            0 0 8px #923cff;
        }

        /* ================= LINKS ================= */

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 13px;
        }

        .footer-links a {
          position: relative;

          color: #9696a5;

          text-decoration: none;

          font-size: 14px;

          transition: 0.3s;
        }

        .footer-links a::before {
          content: "›";

          margin-right: 7px;

          color: #933cff;

          opacity: 0;

          transform: translateX(-5px);

          display: inline-block;

          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #c04cff;
          padding-left: 3px;

          text-shadow:
            0 0 10px rgba(180, 60, 255, 0.35);
        }

        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* ================= CONTACT ================= */

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;

          gap: 12px;

          color: #9999a8;

          font-size: 14px;
          line-height: 1.5;
        }

        .contact-icon {
          min-width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background: rgba(150, 55, 255, 0.12);

          border: 1px solid rgba(160, 60, 255, 0.2);

          color: #b449ff;

          transition: 0.3s;
        }

        .contact-icon svg {
          font-size: 18px;
        }

        .footer-contact-item:hover .contact-icon {
          background: #8c3cff;
          color: white;

          box-shadow:
            0 0 15px rgba(140, 60, 255, 0.5);
        }

        /* ================= NEWSLETTER ================= */

        .footer-newsletter {
          margin-top: 25px;
        }

        .footer-newsletter p {
          color: #888895;

          font-size: 13px;
          line-height: 1.6;

          margin-bottom: 12px;
        }

        .newsletter-box {
          display: flex;

          height: 45px;

          border-radius: 8px;

          overflow: hidden;

          border:
            1px solid rgba(255, 255, 255, 0.12);

          background:
            rgba(255, 255, 255, 0.04);
        }

        .newsletter-box input {
          min-width: 0;

          flex: 1;

          border: none;
          outline: none;

          padding: 0 13px;

          background: transparent;

          color: white;

          font-size: 13px;
        }

        .newsletter-box input::placeholder {
          color: #777783;
        }

        .newsletter-box button {
          width: 50px;

          border: none;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          color: white;

          background:
            linear-gradient(
              100deg,
              #a32cff,
              #435cff
            );

          transition: 0.3s;
        }

        .newsletter-box button:hover {
          box-shadow:
            0 0 20px rgba(140, 50, 255, 0.6);
        }

        .newsletter-box button svg {
          font-size: 20px;
        }

        /* ================= BOTTOM ================= */

        .footer-bottom {
          position: relative;
          z-index: 2;

          max-width: 1250px;

          margin: 55px auto 0;

          padding-top: 22px;

          border-top:
            1px solid rgba(255, 255, 255, 0.08);

          display: flex;

          align-items: center;
          justify-content: space-between;

          gap: 20px;

          color: #6f6f7d;

          font-size: 12px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 22px;
        }

        .footer-bottom-links a {
          color: #777783;

          text-decoration: none;

          transition: 0.3s;
        }

        .footer-bottom-links a:hover {
          color: #b342ff;
        }

        /* ================= FLOATING LIGHT ================= */

        .footer-orb {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: white;

          box-shadow:
            0 0 10px #b43cff,
            0 0 20px #723cff;

          animation: footerFloat 4s infinite ease-in-out;
        }

        .footer-orb.one {
          top: 25%;
          left: 8%;
        }

        .footer-orb.two {
          top: 60%;
          right: 10%;

          animation-delay: 1s;
        }

        .footer-orb.three {
          bottom: 15%;
          left: 45%;

          animation-delay: 2s;
        }

        @keyframes footerFloat {

          0%, 100% {
            opacity: 0.2;

            transform:
              translateY(0)
              scale(0.7);
          }

          50% {
            opacity: 1;

            transform:
              translateY(-15px)
              scale(1.4);
          }
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {

          .footer-container {
            grid-template-columns:
              1fr 1fr;

            gap: 45px 30px;
          }
        }

        @media (max-width: 600px) {

          .rohil-footer {
            padding:
              55px 20px
              20px;
          }

          .footer-container {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-logo {
            width: 165px;
          }

          .footer-bottom {
            flex-direction: column;

            text-align: center;

            margin-top: 40px;
          }

          .footer-bottom-links {
            justify-content: center;

            flex-wrap: wrap;

            gap: 15px;
          }
        }

      `}</style>

      <footer className="rohil-footer">

        <div className="footer-glow"></div>

        <span className="footer-orb one"></span>
        <span className="footer-orb two"></span>
        <span className="footer-orb three"></span>

        <div className="footer-container">

          {/* ================= BRAND ================= */}

          <div className="footer-brand">

            <img
              src="/images/logo.png"
              alt="Rohil Digital Spark Media"
              className="footer-logo"
            />

            <p className="footer-description">
              We help businesses grow online through
              creative strategies, AI-powered marketing
              and result-driven digital campaigns.
            </p>

            <div className="footer-social">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div className="footer-column">

            <h3>Quick Links</h3>

            <ul className="footer-links">

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/about">About Us</Link>
              </li>

              <li>
                <Link to="/our-work">Our Work</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* ================= SERVICES ================= */}

          <div className="footer-column">

            <h3>Services</h3>

            <ul className="footer-links">

              <li>
                <Link to="/seo">SEO</Link>
              </li>

              <li>
                <Link to="/google-ads">Google Ads</Link>
              </li>

              <li>
                <Link to="/meta-ads">Meta Ads</Link>
              </li>

              <li>
                <Link to="/social-media">Social Media</Link>
              </li>

              <li>
                <Link to="/branding">Branding</Link>
              </li>

            </ul>

          </div>

          {/* ================= DISCOVER ================= */}

          <div className="footer-column">

            <h3>Discover</h3>

            <ul className="footer-links">

              <li>
                <Link to="/our-approach">
                  Our Approach
                </Link>
              </li>

              <li>
                <Link to="/insights">
                  Insights
                </Link>
              </li>

              <li>
                <Link to="/faq">
                  FAQs
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div className="footer-column">

            <h3>Get In Touch</h3>

            <div className="footer-contact">

              <div className="footer-contact-item">

                <span className="contact-icon">
                  <EmailIcon />
                </span>

                <span>
                  rohilsparkmedia@gmail.com
                </span>

              </div>

              <div className="footer-contact-item">

                <span className="contact-icon">
                  <PhoneIcon />
                </span>

                <span>
                  +91 97518 67879
                </span>

              </div>

              <div className="footer-contact-item">

                <span className="contact-icon">
                  <LocationOnIcon />
                </span>

                <span>
                  1 st Floor, Canara Bank Building,
                  Madurai Viruthunagar-626001.
                </span>

              </div>

            </div>

            {/* ================= NEWSLETTER ================= */}

            <div className="footer-newsletter">

              <p>
                Subscribe for digital marketing tips
                and updates.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const email =
                    e.target.email.value.trim();

                  if (!email) {
                    alert("Please enter your email");
                    return;
                  }

                  const subject =
                    "Rohil Digital Spark Media Newsletter Subscription";

                  const body = `
Hello Rohil Digital Spark Media,

I would like to subscribe to your digital marketing tips and updates.

Subscriber Email:
${email}

Thank you.
                  `;

                  window.location.href =
                    `mailto:rayesharayesha61@gmail.com?subject=${encodeURIComponent(
                      subject
                    )}&body=${encodeURIComponent(body)}`;
                }}
                className="newsletter-box"
              >

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />

                <button type="submit" aria-label="Subscribe">
                  <ArrowForwardIcon />
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Rohil Spark Media.
            All Rights Reserved.
          </span>

          <div className="footer-bottom-links">

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;