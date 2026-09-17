
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);
// const [discoverOpen, setDiscoverOpen] = useState(false);
//   const closeMenu = () => {
//     setMenuOpen(false);
//     setServicesOpen(false);
//   };
// const [darkMode, setDarkMode] = useState(true);

// const toggleTheme = () => {
//   const newMode = !darkMode;
//   setDarkMode(newMode);

//   document.body.classList.toggle("light-theme", !newMode);
// };
//   return (
//     <>
//       <style>{`

//         /* =========================
//            HEADER
//         ========================= */

//         .rohil-header {
//           position: sticky;
//           top: 0;
//           left: 0;

//           width: 100%;
//           height: 105px;

//           z-index: 9999;

//           background: rgba(3, 3, 8, 0.96);

//           backdrop-filter: blur(15px);
//           -webkit-backdrop-filter: blur(15px);

//           border-bottom:
//             1px solid rgba(255, 255, 255, 0.08);
//         }


//         .rohil-header-container {
//           width: 100%;
//           max-width: 1450px;

//           height: 100%;

//           margin: 0 auto;

//           padding: 0 35px;

//           display: flex;

//           align-items: center;

//           justify-content: space-between;
//         }


//         /* =========================
//            LOGO
//         ========================= */

//         .rohil-logo {
//           width: 190px;

//           display: flex;

//           align-items: center;

//           text-decoration: none;

//           flex-shrink: 0;
//         }


//         .rohil-logo img {
//           width: 180px;
//           height: auto;

//           display: block;

//           object-fit: contain;

//           filter:
//             drop-shadow(
//               0 0 8px rgba(170, 60, 255, 0.35)
//             );

//           transition: 0.3s ease;
//         }


//         .rohil-logo:hover img {
//           transform: scale(1.04);

//           filter:
//             drop-shadow(
//               0 0 15px rgba(170, 60, 255, 0.65)
//             );
//         }


//         /* =========================
//            DESKTOP NAVIGATION
//         ========================= */

//         .rohil-desktop-nav {
//           display: flex;

//           align-items: center;

//           gap: 30px;
//         }


//         .rohil-desktop-nav > a {
//           position: relative;

//           color: #eeeeef;

//           text-decoration: none;

//           font-size: 15px;

//           font-weight: 500;

//           white-space: nowrap;

//           transition: 0.3s ease;
//         }


//         .rohil-desktop-nav > a:hover {
//           color: #bd4cff;

//           text-shadow:
//             0 0 12px rgba(189, 76, 255, 0.45);
//         }


//         .rohil-desktop-nav > a.active {
//           color: #bd4cff;
//         }


//         .rohil-desktop-nav > a.active::after {
//           content: "";

//           position: absolute;

//           left: 0;
//           bottom: -15px;

//           width: 100%;
//           height: 2px;

//           background:
//             linear-gradient(
//               90deg,
//               #c02cff,
//               #654cff
//             );

//           box-shadow:
//             0 0 10px #a63cff;
//         }


//         /* =========================
//            SERVICES BUTTON
//         ========================= */

//         .rohil-services {
//           position: relative;
//         }


//         .rohil-services-button {
//           display: flex;

//           align-items: center;

//           gap: 7px;

//           padding: 10px 0;

//           border: none;

//           background: transparent;

//           color: #eeeeef;

//           font-size: 15px;

//           font-weight: 500;

//           cursor: pointer;

//           transition: 0.3s ease;
//         }


//         .rohil-services-button:hover,
//         .rohil-services-button.open {
//           color: #bd4cff;

//           text-shadow:
//             0 0 12px rgba(189, 76, 255, 0.45);
//         }


//         .rohil-services-arrow {
//           font-size: 9px;

//           transition: 0.3s ease;
//         }


//         .rohil-services-button.open
//         .rohil-services-arrow {
//           transform: rotate(180deg);
//         }


//         /* =========================
//            SERVICES DROPDOWN
//         ========================= */

//         .rohil-services-dropdown {
//           position: absolute;

//           top: 48px;
//           left: 50%;

//           width: 285px;

//           transform:
//             translateX(-50%)
//             translateY(0);

//           padding: 10px;

//           background:
//             rgba(8, 7, 15, 0.98);

//           border:
//             1px solid rgba(170, 60, 255, 0.28);

//           border-radius: 14px;

//           box-shadow:
//             0 20px 55px rgba(0, 0, 0, 0.65),
//             0 0 30px rgba(130, 40, 255, 0.16);

//           animation:
//             serviceDropdown 0.25s ease;
//         }


//         @keyframes serviceDropdown {

//           from {
//             opacity: 0;

//             transform:
//               translateX(-50%)
//               translateY(-10px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateX(-50%)
//               translateY(0);
//           }

//         }


//         /* =========================
//            SERVICE ITEM
//         ========================= */

//         .rohil-service-item {
//           display: flex;

//           align-items: center;

//           gap: 12px;

//           width: 100%;

//           padding: 12px;

//           color: #eeeeef;

//           text-decoration: none;

//           border-radius: 9px;

//           transition: 0.25s ease;
//         }


//         .rohil-service-item:hover {
//           color: white;

//           background:
//             linear-gradient(
//               90deg,
//               rgba(160, 50, 255, 0.16),
//               rgba(40, 100, 255, 0.10)
//             );

//           transform: translateX(4px);
//         }


//         .rohil-service-icon {
//           width: 38px;
//           height: 38px;

//           flex-shrink: 0;

//           display: flex;

//           align-items: center;
//           justify-content: center;

//           border-radius: 9px;

//           background:
//             rgba(150, 50, 255, 0.12);

//           border:
//             1px solid rgba(160, 60, 255, 0.2);

//           font-size: 18px;

//           transition: 0.25s ease;
//         }


//         .rohil-service-item:hover
//         .rohil-service-icon {
//           background:
//             rgba(150, 50, 255, 0.25);

//           box-shadow:
//             0 0 15px rgba(150, 50, 255, 0.25);
//         }


//         .rohil-service-content strong {
//           display: block;

//           color: #eeeeef;

//           font-size: 14px;

//           font-weight: 600;
//         }


//         .rohil-service-content small {
//           display: block;

//           margin-top: 3px;

//           color: #858592;

//           font-size: 11px;
//         }

// /* =========================
//    THEME TOGGLE
// ========================= */

// .rohil-theme-toggle {
//   width: 48px;
//   height: 48px;
//   border: 1px solid rgba(255, 255, 255, 0.12);
//   border-radius: 50%;
//   background: rgba(255, 255, 255, 0.06);
//   color: #ffffff;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   font-size: 20px;
//   cursor: pointer;

//   transition: all 0.3s ease;
//   backdrop-filter: blur(10px);
// }

// .rohil-theme-toggle:hover {
//   transform: rotate(15deg) scale(1.08);
//   background: rgba(189, 76, 255, 0.15);
//   border-color: rgba(189, 76, 255, 0.5);
//   box-shadow: 0 0 18px rgba(189, 76, 255, 0.3);
// }

// /* LIGHT MODE */

// body.light-theme {
//   background: #ffffff;
// }

// body.light-theme .rohil-header {
//   background: rgba(255, 255, 255, 0.96);
//   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
// }

// body.light-theme .rohil-desktop-nav > a,
// body.light-theme .rohil-services-button {
//   color: #222222;
// }

// body.light-theme .rohil-theme-toggle {
//   background: rgba(0, 0, 0, 0.05);
//   color: #222222;
//   border-color: rgba(0, 0, 0, 0.1);
// }

// body.light-theme .rohil-services-dropdown {
//   background: rgba(255, 255, 255, 0.98);
//   border-color: rgba(170, 60, 255, 0.2);
// }

// body.light-theme .rohil-service-item,
// body.light-theme .rohil-service-content strong {
//   color: #222222;
// }

// body.light-theme .rohil-service-content small {
//   color: #666666;
// }
//         /* =========================
//            CONSULTATION BUTTON
//         ========================= */

//         .rohil-consult-button {
//           padding: 15px 22px;

//           color: white;

//           text-decoration: none;

//           white-space: nowrap;

//           border-radius: 12px;

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #624cff,
//               #176df5
//             );

//           box-shadow:
//             0 0 20px rgba(128, 45, 255, 0.25);

//           font-size: 14px;

//           font-weight: 600;

//           transition: 0.3s ease;
//         }


//         .rohil-consult-button:hover {
//           transform: translateY(-3px);

//           box-shadow:
//             0 0 30px rgba(128, 45, 255, 0.5);
//         }


//         /* =========================
//            MOBILE HAMBURGER
//         ========================= */

//         .rohil-menu-button {
//           display: none;

//           width: 44px;
//           height: 44px;

//           align-items: center;
//           justify-content: center;

//           flex-direction: column;

//           gap: 5px;

//           border:
//             1px solid rgba(255, 255, 255, 0.15);

//           border-radius: 10px;

//           background:
//             rgba(255, 255, 255, 0.04);

//           cursor: pointer;
//         }


//         .rohil-menu-button span {
//           width: 21px;
//           height: 2px;

//           background: white;

//           border-radius: 10px;

//           transition: 0.3s ease;
//         }


//         .rohil-menu-button.open
//         span:nth-child(1) {
//           transform:
//             translateY(7px)
//             rotate(45deg);
//         }


//         .rohil-menu-button.open
//         span:nth-child(2) {
//           opacity: 0;
//         }


//         .rohil-menu-button.open
//         span:nth-child(3) {
//           transform:
//             translateY(-7px)
//             rotate(-45deg);
//         }


//         /* =========================
//            MOBILE MENU
//         ========================= */

//         .rohil-mobile-menu {
//           display: none;
//         }


//         /* =========================
//            TABLET
//         ========================= */

//         @media (max-width: 1200px) {

//           .rohil-header-container {
//             padding: 0 22px;
//           }

//           .rohil-desktop-nav {
//             gap: 20px;
//           }

//           .rohil-desktop-nav > a,
//           .rohil-services-button {
//             font-size: 14px;
//           }

//           .rohil-consult-button {
//             padding: 13px 17px;

//             font-size: 13px;
//           }

//         }


//         /* =========================
//            MOBILE
//         ========================= */

//         @media (max-width: 900px) {

//           .rohil-header {
//             height: 76px;
//           }


//           .rohil-header-container {
//             padding: 0 18px;
//           }


//           .rohil-logo {
//             width: 150px;
//           }


//           .rohil-logo img {
//             width: 145px;
//           }


//           .rohil-desktop-nav,
//           .rohil-consult-button {
//             display: none;
//           }


//           .rohil-menu-button {
//             display: flex;
//           }


//           /* MOBILE PANEL */

//           .rohil-mobile-menu {
//             position: absolute;

//             top: 86px;

//             left: 12px;
//             right: 12px;

//             display: flex;

//             flex-direction: column;

//             padding: 12px;

//             background:
//               rgba(7, 6, 15, 0.98);

//             border:
//               1px solid rgba(165, 55, 255, 0.28);

//             border-radius: 16px;

//             box-shadow:
//               0 20px 55px rgba(0, 0, 0, 0.65),
//               0 0 30px rgba(130, 40, 255, 0.15);

//             animation:
//               mobileMenu 0.25s ease;
//           }


//           @keyframes mobileMenu {

//             from {
//               opacity: 0;

//               transform:
//                 translateY(-10px);
//             }

//             to {
//               opacity: 1;

//               transform:
//                 translateY(0);
//             }

//           }


//           /* MOBILE LINKS */

//           .rohil-mobile-menu > a {
//             display: block;

//             width: 100%;

//             padding: 13px 15px;

//             color: #eeeeef;

//             text-decoration: none;

//             font-size: 15px;

//             border-radius: 9px;

//             transition: 0.25s ease;
//           }


//           .rohil-mobile-menu > a:hover {
//             color: #bd4cff;

//             background:
//               rgba(150, 50, 255, 0.1);

//             padding-left: 20px;
//           }


//           /* MOBILE SERVICES BUTTON */

//           .rohil-mobile-services-button {
//             width: 100%;

//             display: flex;

//             align-items: center;

//             justify-content: space-between;

//             padding: 13px 15px;

//             border: none;

//             background: transparent;

//             color: #eeeeef;

//             font-size: 15px;

//             text-align: left;

//             cursor: pointer;

//             border-radius: 9px;

//             transition: 0.25s ease;
//           }


//           .rohil-mobile-services-button:hover {
//             color: #bd4cff;

//             background:
//               rgba(150, 50, 255, 0.1);
//           }


//           .rohil-mobile-arrow {
//             font-size: 9px;

//             transition: 0.3s ease;
//           }


//           .rohil-mobile-arrow.open {
//             transform: rotate(180deg);
//           }


//           /* MOBILE SERVICE LIST */

//           .rohil-mobile-services {
//             margin:
//               0 8px 7px;

//             padding: 5px;

//             border-left:
//               2px solid rgba(170, 60, 255, 0.4);

//             border-radius:
//               0 9px 9px 0;

//             background:
//               rgba(255, 255, 255, 0.025);

//             animation:
//               mobileServices 0.25s ease;
//           }


//           @keyframes mobileServices {

//             from {
//               opacity: 0;

//               transform:
//                 translateY(-5px);
//             }

//             to {
//               opacity: 1;

//               transform:
//                 translateY(0);
//             }

//           }


//           .rohil-mobile-services a {
//             display: flex;

//             align-items: center;

//             gap: 10px;

//             padding: 10px 12px;

//             color: #bdbdc7;

//             text-decoration: none;

//             font-size: 14px;

//             border-radius: 7px;

//             transition: 0.25s ease;
//           }


//           .rohil-mobile-services a:hover {
//             color: #bd4cff;

//             background:
//               rgba(150, 50, 255, 0.08);

//             padding-left: 17px;
//           }


//           /* MOBILE CONSULT */

//           .rohil-mobile-consult {
//             margin-top: 8px;

//             padding: 13px 15px !important;

//             text-align: center;

//             color: white !important;

//             font-weight: 600;

//             background:
//               linear-gradient(
//                 100deg,
//                 #a52cff,
//                 #624cff,
//                 #176df5
//               ) !important;
//           }

//         }


//         /* =========================
//            SMALL MOBILE
//         ========================= */

//         @media (max-width: 480px) {

//           .rohil-header {
//             height: 72px;
//           }


//           .rohil-header-container {
//             padding: 0 14px;
//           }


//           .rohil-logo {
//             width: 130px;
//           }


//           .rohil-logo img {
//             width: 125px;
//           }


//           .rohil-menu-button {
//             width: 41px;
//             height: 41px;
//           }


//           .rohil-mobile-menu {
//             top: 82px;

//             left: 8px;
//             right: 8px;
//           }

//         }

//       `}</style>


//       {/* =========================
//           HEADER
//       ========================= */}

//       <header className="rohil-header">

//         <div className="rohil-header-container">


//           {/* LOGO */}

//           <Link
//   to="/"
//   className="rohil-logo"
// >
//   <img
//     src="/images/logo.png"
//     alt="Rohil Digital Spark Media"
//   />
// </Link>


//           {/* =========================
//               DESKTOP NAV
//           ========================= */}

//           <nav className="rohil-desktop-nav">
// <Link to="/">
//   Home
// </Link>


//             {/* SERVICES */}

//             <div className="rohil-services">

//   <button
//     className={`rohil-services-button ${
//       servicesOpen ? "open" : ""
//     }`}
//     onClick={() =>
//       setServicesOpen(!servicesOpen)
//     }
//   >
//     Services

//     <span className="rohil-services-arrow">
//       ▼
//     </span>
//   </button>


//   {servicesOpen && (

//     <div className="rohil-services-dropdown">

//       {/* SEO */}

//       <Link
//   to="/seo"
//   className="rohil-service-item"
//   onClick={() => setServicesOpen(false)}
// >
//   <span className="rohil-service-icon">
//     🚀
//   </span>

//   <div className="rohil-service-content">
//     <strong>SEO</strong>

//     <small>
//       Grow organic visibility
//     </small>
//   </div>
// </Link>


//       {/* GOOGLE ADS */}

//    <Link
//   to="/google-ads"
//   className="rohil-service-item"
//   onClick={() => setServicesOpen(false)}
// >
//   <span className="rohil-service-icon">
//     🎯
//   </span>

//   <div className="rohil-service-content">
//     <strong>
//       Google Ads
//     </strong>

//     <small>
//       Reach the right customers
//     </small>
//   </div>
// </Link>


//       {/* META ADS */}

//       <Link
//   to="/meta-ads"
//   className="rohil-service-item"
//   onClick={() => setServicesOpen(false)}
// >
//   <span className="rohil-service-icon">
//     📢
//   </span>

//   <div className="rohil-service-content">
//     <strong>Meta Ads</strong>

//     <small>
//       Facebook & Instagram marketing
//     </small>
//   </div>
// </Link>

//       {/* SOCIAL MEDIA */}

//       <Link
//   to="/social-media"
//   className="rohil-service-item"
//   onClick={() => setServicesOpen(false)}
// >
//   <span className="rohil-service-icon">
//     📱
//   </span>

//   <div className="rohil-service-content">
//     <strong>Social Media</strong>

//     <small>
//       Build your online presence
//     </small>
//   </div>
// </Link>


//       {/* BRANDING */}

//    <Link
//   to="/branding"
//   className="rohil-service-item"
//   onClick={() => setServicesOpen(false)}
// >
//   <span className="rohil-service-icon">
//     ✨
//   </span>

//   <div className="rohil-service-content">

//     <strong>
//       Branding
//     </strong>

//     <small>
//       Create a strong brand identity
//     </small>

//   </div>

// </Link>

//     </div>

//   )}

// </div>

//             {/* OTHER LINKS */}
// <Link to="/about">
//   About Us
// </Link>

// <Link to="/our-work">
//   Our Work
// </Link>
// <Link to="/blog">
//   Blog
// </Link>
//            <Link to="/why-us">
//   Why Us
// </Link>

//            <div className="rohil-services">

//   <button
//     className={`rohil-services-button ${
//       discoverOpen ? "open" : ""
//     }`}
//     onClick={() =>
//       setDiscoverOpen(!discoverOpen)
//     }
//   >
//     Discover

//     <span className="rohil-services-arrow">
//       ▼
//     </span>
//   </button>

//   {discoverOpen && (

//     <div className="rohil-services-dropdown">

//       {/* OUR APPROACH */}

//       <Link
//         to="/our-approach"
//         className="rohil-service-item"
//         onClick={() => setDiscoverOpen(false)}
//       >
//         <span className="rohil-service-icon">
//           🎯
//         </span>

//         <div className="rohil-service-content">

//           <strong>
//             Our Approach
//           </strong>

//           <small>
//             How we build digital growth
//           </small>

//         </div>
//       </Link>


//       {/* INSIGHTS */}

//       <Link
//         to="/insights"
//         className="rohil-service-item"
//         onClick={() => setDiscoverOpen(false)}
//       >
//         <span className="rohil-service-icon">
//           💡
//         </span>

//         <div className="rohil-service-content">

//           <strong>
//             Insights
//           </strong>

//           <small>
//             Digital marketing ideas & trends
//           </small>

//         </div>
//       </Link>


//       {/* FAQ */}

//       <Link
//         to="/faq"
//         className="rohil-service-item"
//         onClick={() => setDiscoverOpen(false)}
//       >
//         <span className="rohil-service-icon">
//           ❓
//         </span>

//         <div className="rohil-service-content">

//           <strong>
//             FAQ
//           </strong>

//           <small>
//             Frequently asked questions
//           </small>

//         </div>

//       </Link>

//     </div>

//   )}

// </div>
//      <Link to="/contact">
//   Contact
// </Link>

//           </nav>


//           {/* =========================
//               DESKTOP CONSULTATION
//           ========================= */}
// <button
//   className="rohil-theme-toggle"
//   onClick={toggleTheme}
//   aria-label="Toggle dark and light mode"
// >
//   {darkMode ? "☀️" : "🌙"}
// </button>
//       <Link
//   to="/book-consultation"
//   className="rohil-consult-button"
// >
//   Book Free Consultation
// </Link>


//           {/* =========================
//               MOBILE HAMBURGER
//           ========================= */}

//           <button
//             className={`rohil-menu-button ${
//               menuOpen ? "open" : ""
//             }`}
//             onClick={() => {

//               setMenuOpen(!menuOpen);

//               if (menuOpen) {
//                 setServicesOpen(false);
//               }

//             }}
//             aria-label="Open menu"
//           >

//             <span></span>
//             <span></span>
//             <span></span>

//           </button>

//         </div>


//         {/* =========================
//             MOBILE MENU
//         ========================= */}

//         {menuOpen && (

//           <div className="rohil-mobile-menu">


//          <Link to="/" onClick={closeMenu}>
//   Home
// </Link>


//             {/* MOBILE SERVICES */}

//             <button
//               className="rohil-mobile-services-button"
//               onClick={() =>
//                 setServicesOpen(!servicesOpen)
//               }
//             >

//               <span>
//                 Services
//               </span>

//               <span
//                 className={`rohil-mobile-arrow ${
//                   servicesOpen ? "open" : ""
//                 }`}
//               >
//                 ▼
//               </span>

//             </button>


//             {servicesOpen && (
//   <div className="rohil-mobile-services">

//     <Link
//       to="/seo"
//       onClick={closeMenu}
//     >
//       <span>🚀</span>
//       <span>SEO</span>
//     </Link>

//     <Link
//       to="/google-ads"
//       onClick={closeMenu}
//     >
//       <span>🎯</span>
//       <span>Google Ads</span>
//     </Link>

//     <Link
//       to="/meta-ads"
//       onClick={closeMenu}
//     >
//       <span>📢</span>
//       <span>Meta Ads</span>
//     </Link>

//     <Link
//       to="/social-media"
//       onClick={closeMenu}
//     >
//       <span>📱</span>
//       <span>Social Media</span>
//     </Link>

//     <Link
//       to="/branding"
//       onClick={closeMenu}
//     >
//       <span>✨</span>
//       <span>Branding</span>
//     </Link>

//   </div>
// )}


//           <Link to="/about" onClick={closeMenu}>
//   About Us
// </Link>


//            <Link to="/our-work" onClick={closeMenu}>
//   Our Work
// </Link>
// <Link to="/blog">
//   Blog
// </Link>

//             <Link to="/why-us" onClick={closeMenu}>
//   Why Us
// </Link>


//       {/* MOBILE DISCOVER */}

// <button
//   className="rohil-mobile-services-button"
//   onClick={() =>
//     setDiscoverOpen(!discoverOpen)
//   }
// >
//   <span>
//     Discover
//   </span>

//   <span
//     className={`rohil-mobile-arrow ${
//       discoverOpen ? "open" : ""
//     }`}
//   >
//     ▼
//   </span>
// </button>


// {discoverOpen && (

//   <div className="rohil-mobile-services">

//     {/* OUR APPROACH */}
//     <Link
//       to="/our-approach"
//       onClick={closeMenu}
//     >
//       <span>🎯</span>
//       <span>Our Approach</span>
//     </Link>


//     {/* INSIGHTS */}
//     <Link
//       to="/insights"
//       onClick={closeMenu}
//     >
//       <span>💡</span>
//       <span>Insights</span>
//     </Link>


//     {/* FAQS */}
//     <Link
//       to="/faq"
//       onClick={closeMenu}
//     >
//       <span>❓</span>
//       <span>FAQs</span>
//     </Link>

//   </div>

// )}

//            <Link to="/contact" onClick={closeMenu}>
//   Contact
// </Link>

//           <Link
//   to="/book-consultation"
//   className="rohil-mobile-consult"
//   onClick={closeMenu}
// >
//   Book Free Consultation
// </Link>


//           </div>

//         )}

//       </header>
//     </>
//   );
// }

// export default Header;
import React, { useState,useEffect} from "react";
import { Link } from "react-router-dom";

import {
  RocketLaunch,
  AdsClick,
  Campaign,
  PhoneIphone,
  AutoAwesome,
  Explore,
  Lightbulb,
  Help,
  KeyboardArrowDown,
  WbSunny,
  DarkMode,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.classList.toggle("light-theme", !darkMode);

  return () => {
    document.body.classList.remove("light-theme");
  };
}, [darkMode]);

const toggleTheme = () => {
  setDarkMode((prev) => !prev);
};
  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDiscoverOpen(false);
  };

  /* =========================
     TOGGLE SERVICES
  ========================= */

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
    setDiscoverOpen(false);
  };

  /* =========================
     TOGGLE DISCOVER
  ========================= */

  const toggleDiscover = () => {
    setDiscoverOpen((prev) => !prev);
    setServicesOpen(false);
  };

  return (
    <>
      <style>{`

        /* =====================================================
           HEADER
        ===================================================== */

        .rohil-header {
          position: sticky;
          top: 0;
          left: 0;

          width: 100%;
          height: 105px;

          z-index: 9999;

          background: rgba(3, 3, 8, 0.96);

          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);

          border-bottom:
            1px solid rgba(255, 255, 255, 0.08);
        }


        .rohil-header-container {
          width: 100%;
          max-width: 1450px;

          height: 100%;

          margin: 0 auto;

          padding: 0 35px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .rohil-logo {
  display: flex;
  align-items: center;
}

.rohil-logo img {
  width: 150px;
  height: auto;
  display: block;
}

/* Dark Mode */
.logo-light {
  display: none !important;
}

.logo-dark {
  display: block !important;
}

/* Light Mode */
body.light-theme .logo-dark {
  display: none !important;
}

body.light-theme .logo-light {
  display: block !important;
}


        .rohil-logo:hover img {
          transform: scale(1.04);

          filter:
            drop-shadow(
              0 0 15px rgba(170, 60, 255, 0.65)
            );
        }


        /* =====================================================
           DESKTOP NAVIGATION
        ===================================================== */

        .rohil-desktop-nav {
          display: flex;

          align-items: center;

          gap: 28px;
        }


        .rohil-desktop-nav > a {
          position: relative;

          color: #eeeeef;

          text-decoration: none;

          font-size: 15px;

          font-weight: 500;

          white-space: nowrap;

          transition: 0.3s ease;
        }


        .rohil-desktop-nav > a:hover {
          color: #bd4cff;

          text-shadow:
            0 0 12px rgba(189, 76, 255, 0.45);
        }


        .rohil-desktop-nav > a.active {
          color: #bd4cff;
        }


        .rohil-desktop-nav > a.active::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -15px;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #c02cff,
              #654cff
            );

          box-shadow:
            0 0 10px #a63cff;
        }


        /* =====================================================
           DROPDOWN WRAPPER
        ===================================================== */

        .rohil-services {
          position: relative;
        }


        .rohil-services-button {
          display: flex;

          align-items: center;

          gap: 6px;

          padding: 10px 0;

          border: none;

          background: transparent;

          color: #eeeeef;

          font-size: 15px;

          font-weight: 500;

          cursor: pointer;

          transition: 0.3s ease;
        }


        .rohil-services-button:hover,
        .rohil-services-button.open {
          color: #bd4cff;

          text-shadow:
            0 0 12px rgba(189, 76, 255, 0.45);
        }


        .rohil-services-arrow {
          display: flex;

          align-items: center;

          justify-content: center;

          transition: 0.3s ease;
        }


        .rohil-services-button.open
        .rohil-services-arrow {
          transform: rotate(180deg);
        }


        /* =====================================================
           DROPDOWN
        ===================================================== */

        .rohil-services-dropdown {
          position: absolute;

          top: 48px;
          left: 50%;

          width: 285px;

          transform:
            translateX(-50%)
            translateY(0);

          padding: 10px;

          background:
            rgba(8, 7, 15, 0.98);

          border:
            1px solid rgba(170, 60, 255, 0.28);

          border-radius: 14px;

          box-shadow:
            0 20px 55px rgba(0, 0, 0, 0.65),
            0 0 30px rgba(130, 40, 255, 0.16);

          animation:
            serviceDropdown 0.25s ease;
        }


        @keyframes serviceDropdown {

          from {
            opacity: 0;

            transform:
              translateX(-50%)
              translateY(-10px);
          }

          to {
            opacity: 1;

            transform:
              translateX(-50%)
              translateY(0);
          }

        }


        /* =====================================================
           SERVICE ITEM
        ===================================================== */

        .rohil-service-item {
          display: flex;

          align-items: center;

          gap: 12px;

          width: 100%;

          padding: 12px;

          color: #eeeeef;

          text-decoration: none;

          border-radius: 9px;

          transition: 0.25s ease;
        }


        .rohil-service-item:hover {
          color: white;

          background:
            linear-gradient(
              90deg,
              rgba(160, 50, 255, 0.16),
              rgba(40, 100, 255, 0.10)
            );

          transform: translateX(4px);
        }


        /* =====================================================
           SERVICE ICON
        ===================================================== */

        .rohil-service-icon {
          width: 38px;
          height: 38px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 9px;

          background:
            rgba(150, 50, 255, 0.12);

          border:
            1px solid rgba(160, 60, 255, 0.2);

          color: #bd4cff;

          transition: 0.25s ease;
        }


        .rohil-service-item:hover
        .rohil-service-icon {
          background:
            rgba(150, 50, 255, 0.25);

          box-shadow:
            0 0 15px rgba(150, 50, 255, 0.25);
        }


        .rohil-service-content strong {
          display: block;

          color: #eeeeef;

          font-size: 14px;

          font-weight: 600;
        }


        .rohil-service-content small {
          display: block;

          margin-top: 3px;

          color: #858592;

          font-size: 11px;
        }


        /* =====================================================
           THEME TOGGLE
        ===================================================== */

        .rohil-theme-toggle {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          border:
            1px solid rgba(255, 255, 255, 0.12);

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.06);

          color: #ffffff;

          display: flex;

          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition: all 0.3s ease;

          backdrop-filter: blur(10px);
        }


        .rohil-theme-toggle:hover {
          transform:
            rotate(15deg)
            scale(1.08);

          background:
            rgba(189, 76, 255, 0.15);

          border-color:
            rgba(189, 76, 255, 0.5);

          box-shadow:
            0 0 18px rgba(189, 76, 255, 0.3);
        }


        /* =====================================================
           CONSULTATION BUTTON
        ===================================================== */

        .rohil-consult-button {
          padding: 15px 22px;

          color: white;

          text-decoration: none;

          white-space: nowrap;

          border-radius: 12px;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #624cff,
              #176df5
            );

          box-shadow:
            0 0 20px rgba(128, 45, 255, 0.25);

          font-size: 14px;

          font-weight: 600;

          transition: 0.3s ease;
        }


        .rohil-consult-button:hover {
          transform: translateY(-3px);

          box-shadow:
            0 0 30px rgba(128, 45, 255, 0.5);
        }


        /* =====================================================
           MOBILE MENU BUTTON
        ===================================================== */

        .rohil-menu-button {
          display: none;

          width: 44px;
          height: 44px;

          align-items: center;
          justify-content: center;

          border:
            1px solid rgba(255, 255, 255, 0.15);

          border-radius: 10px;

          background:
            rgba(255, 255, 255, 0.04);

          color: white;

          cursor: pointer;

          transition: 0.3s ease;
        }


        .rohil-menu-button:hover {
          border-color:
            rgba(189, 76, 255, 0.5);

          background:
            rgba(150, 50, 255, 0.1);
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .rohil-mobile-menu {
          display: none;
        }


        /* =====================================================
           LIGHT MODE
        ===================================================== */

        body.light-theme {
          background: #f7f9fc;
        }


        body.light-theme .rohil-header {
          background:
            rgba(255, 255, 255, 0.96);

          border-bottom:
            1px solid rgba(15, 23, 42, 0.08);

          box-shadow:
            0 5px 25px rgba(15, 23, 42, 0.06);
        }


        body.light-theme .rohil-desktop-nav > a,
        body.light-theme .rohil-services-button {
          color: #172033;
        }


        body.light-theme .rohil-desktop-nav > a:hover,
        body.light-theme .rohil-services-button:hover,
        body.light-theme .rohil-services-button.open {
          color: #7c3aed;

          text-shadow: none;
        }


        body.light-theme .rohil-theme-toggle {
          background:
            rgba(15, 23, 42, 0.05);

          color: #172033;

          border-color:
            rgba(15, 23, 42, 0.10);
        }


        body.light-theme .rohil-theme-toggle:hover {
          background:
            rgba(124, 58, 237, 0.10);

          border-color:
            rgba(124, 58, 237, 0.30);

          box-shadow:
            0 0 18px rgba(124, 58, 237, 0.15);
        }


        body.light-theme .rohil-services-dropdown {
          background:
            rgba(255, 255, 255, 0.98);

          border-color:
            rgba(124, 58, 237, 0.18);

          box-shadow:
            0 20px 50px rgba(15, 23, 42, 0.12);
        }


        body.light-theme .rohil-service-item {
          color: #172033;
        }


        body.light-theme .rohil-service-item:hover {
          color: #6d28d9;

          background:
            linear-gradient(
              90deg,
              rgba(124, 58, 237, 0.08),
              rgba(79, 70, 229, 0.05)
            );
        }


        body.light-theme .rohil-service-content strong {
          color: #172033;
        }


        body.light-theme .rohil-service-content small {
          color: #64748b;
        }


        body.light-theme .rohil-service-icon {
          background:
            linear-gradient(
              135deg,
              #f3e8ff,
              #eef2ff
            );

          border-color:
            #ddd6fe;

          color: #7c3aed;
        }


        body.light-theme .rohil-menu-button {
          background:
            rgba(15, 23, 42, 0.04);

          border-color:
            rgba(15, 23, 42, 0.12);

          color: #172033;
        }


        body.light-theme .rohil-mobile-menu {
          background:
            rgba(255, 255, 255, 0.98);

          border-color:
            rgba(124, 58, 237, 0.18);

          box-shadow:
            0 20px 55px rgba(15, 23, 42, 0.12);
        }


        body.light-theme .rohil-mobile-menu > a,
        body.light-theme .rohil-mobile-services-button {
          color: #172033;
        }


        body.light-theme .rohil-mobile-menu > a:hover,
        body.light-theme .rohil-mobile-services-button:hover {
          color: #7c3aed;

          background:
            rgba(124, 58, 237, 0.07);
        }


        body.light-theme .rohil-mobile-services {
          background:
            rgba(124, 58, 237, 0.035);

          border-left-color:
            rgba(124, 58, 237, 0.35);
        }


        body.light-theme .rohil-mobile-services a {
          color: #475569;
        }


        body.light-theme .rohil-mobile-services a:hover {
          color: #7c3aed;

          background:
            rgba(124, 58, 237, 0.06);
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 1100px) {

          .rohil-header-container {
            padding: 0 22px;
          }

          .rohil-desktop-nav {
            gap: 18px;
          }

          .rohil-desktop-nav > a,
          .rohil-services-button {
            font-size: 14px;
          }

          .rohil-consult-button {
            padding: 13px 17px;
            font-size: 13px;
          }

        }


        @media (max-width: 900px) {

          .rohil-header {
            height: 76px;
          }


          .rohil-header-container {
            padding: 0 18px;
          }


          .rohil-logo {
            width: 150px;
          }


          .rohil-logo img {
            width: 145px;
          }


          .rohil-desktop-nav,
          .rohil-consult-button,
          .rohil-theme-toggle {
            display: none;
          }


          .rohil-menu-button {
            display: flex;
          }


          /* =================================================
             MOBILE PANEL
          ================================================= */

          .rohil-mobile-menu {
            position: absolute;

            top: 86px;

            left: 12px;
            right: 12px;

            display: flex;

            flex-direction: column;

            max-height: calc(100vh - 100px);

            overflow-y: auto;

            padding: 12px;

            background:
              rgba(7, 6, 15, 0.98);

            border:
              1px solid rgba(165, 55, 255, 0.28);

            border-radius: 16px;

            box-shadow:
              0 20px 55px rgba(0, 0, 0, 0.65),
              0 0 30px rgba(130, 40, 255, 0.15);

            animation:
              mobileMenu 0.25s ease;
          }


          @keyframes mobileMenu {

            from {
              opacity: 0;
              transform: translateY(-10px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          /* =================================================
             MOBILE LINKS
          ================================================= */

          .rohil-mobile-menu > a {
            display: block;

            width: 100%;

            padding: 13px 15px;

            color: #eeeeef;

            text-decoration: none;

            font-size: 15px;

            border-radius: 9px;

            transition: 0.25s ease;
          }


          .rohil-mobile-menu > a:hover {
            color: #bd4cff;

            background:
              rgba(150, 50, 255, 0.1);

            padding-left: 20px;
          }


          /* =================================================
             MOBILE DROPDOWN BUTTON
          ================================================= */

          .rohil-mobile-services-button {
            width: 100%;

            display: flex;

            align-items: center;

            justify-content: space-between;

            padding: 13px 15px;

            border: none;

            background: transparent;

            color: #eeeeef;

            font-size: 15px;

            text-align: left;

            cursor: pointer;

            border-radius: 9px;

            transition: 0.25s ease;
          }


          .rohil-mobile-services-button:hover {
            color: #bd4cff;

            background:
              rgba(150, 50, 255, 0.1);
          }


          .rohil-mobile-arrow {
            display: flex;

            align-items: center;

            transition: 0.3s ease;
          }


          .rohil-mobile-arrow.open {
            transform: rotate(180deg);
          }


          /* =================================================
             MOBILE SERVICE LIST
          ================================================= */

          .rohil-mobile-services {
            margin:
              0 8px 7px;

            padding: 5px;

            border-left:
              2px solid rgba(170, 60, 255, 0.4);

            border-radius:
              0 9px 9px 0;

            background:
              rgba(255, 255, 255, 0.025);

            animation:
              mobileServices 0.25s ease;
          }


          @keyframes mobileServices {

            from {
              opacity: 0;
              transform: translateY(-5px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }

          }


          .rohil-mobile-services a {
            display: flex;

            align-items: center;

            gap: 10px;

            padding: 10px 12px;

            color: #bdbdc7;

            text-decoration: none;

            font-size: 14px;

            border-radius: 7px;

            transition: 0.25s ease;
          }


          .rohil-mobile-services a:hover {
            color: #bd4cff;

            background:
              rgba(150, 50, 255, 0.08);

            padding-left: 17px;
          }


          .rohil-mobile-service-icon {
            display: flex;

            align-items: center;
            justify-content: center;

            color: #bd4cff;
          }


          /* =================================================
             MOBILE CONSULTATION
          ================================================= */

          .rohil-mobile-consult {
            margin-top: 8px;

            padding: 13px 15px !important;

            text-align: center;

            color: white !important;

            font-weight: 600;

            background:
              linear-gradient(
                100deg,
                #a52cff,
                #624cff,
                #176df5
              ) !important;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .rohil-header {
            height: 72px;
          }


          .rohil-header-container {
            padding: 0 14px;
          }


          .rohil-logo {
            width: 130px;
          }


          .rohil-logo img {
            width: 125px;
          }


          .rohil-menu-button {
            width: 41px;
            height: 41px;
          }


          .rohil-mobile-menu {
            top: 82px;

            left: 8px;
            right: 8px;
          }

        }

      `}</style>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="rohil-header">

        <div className="rohil-header-container">


          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            to="/"
            className="rohil-logo"
            onClick={closeMenu}
          >
           <div className="rohil-logo">
  <img
    className="logo-dark"
    src="/images/logo.png"
    alt="Rohil Digital Spark Media"
  />

  <img
    className="logo-light"
    src="/images/logo-white.jpg"
    alt="Rohil Digital Spark Media"
  />
</div>
          </Link>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="rohil-desktop-nav">

            <Link to="/">
              Home
            </Link>


            {/* ================= SERVICES ================= */}

            <div className="rohil-services">

              <button
                className={`rohil-services-button ${
                  servicesOpen ? "open" : ""
                }`}
                onClick={toggleServices}
              >

                Services

                <span className="rohil-services-arrow">
                  <KeyboardArrowDown fontSize="small" />
                </span>

              </button>


              {servicesOpen && (

                <div className="rohil-services-dropdown">

                  {/* SEO */}

                  <Link
                    to="/seo"
                    className="rohil-service-item"
                    onClick={() => setServicesOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <RocketLaunch fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        SEO
                      </strong>

                      <small>
                        Grow organic visibility
                      </small>

                    </div>

                  </Link>


                  {/* GOOGLE ADS */}

                  <Link
                    to="/google-ads"
                    className="rohil-service-item"
                    onClick={() => setServicesOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <AdsClick fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Google Ads
                      </strong>

                      <small>
                        Reach the right customers
                      </small>

                    </div>

                  </Link>


                  {/* META ADS */}

                  <Link
                    to="/meta-ads"
                    className="rohil-service-item"
                    onClick={() => setServicesOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <Campaign fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Meta Ads
                      </strong>

                      <small>
                        Facebook & Instagram marketing
                      </small>

                    </div>

                  </Link>


                  {/* SOCIAL MEDIA */}

                  <Link
                    to="/social-media"
                    className="rohil-service-item"
                    onClick={() => setServicesOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <PhoneIphone fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Social Media
                      </strong>

                      <small>
                        Build your online presence
                      </small>

                    </div>

                  </Link>


                  {/* BRANDING */}

                  <Link
                    to="/branding"
                    className="rohil-service-item"
                    onClick={() => setServicesOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <AutoAwesome fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Branding
                      </strong>

                      <small>
                        Create a strong brand identity
                      </small>

                    </div>

                  </Link>

                </div>

              )}

            </div>


            {/* ================= OTHER LINKS ================= */}

            <Link to="/about">
              About Us
            </Link>

            <Link to="/our-work">
              Our Work
            </Link>

            <Link to="/blog">
              Blog
            </Link>

            <Link to="/why-us">
              Why Us
            </Link>


            {/* ================= DISCOVER ================= */}

            <div className="rohil-services">

              <button
                className={`rohil-services-button ${
                  discoverOpen ? "open" : ""
                }`}
                onClick={toggleDiscover}
              >

                Discover

                <span className="rohil-services-arrow">
                  <KeyboardArrowDown fontSize="small" />
                </span>

              </button>


              {discoverOpen && (

                <div className="rohil-services-dropdown">


                  {/* OUR APPROACH */}

                  <Link
                    to="/our-approach"
                    className="rohil-service-item"
                    onClick={() => setDiscoverOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <Explore fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Our Approach
                      </strong>

                      <small>
                        How we build digital growth
                      </small>

                    </div>

                  </Link>


                  {/* INSIGHTS */}

                  <Link
                    to="/insights"
                    className="rohil-service-item"
                    onClick={() => setDiscoverOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <Lightbulb fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        Insights
                      </strong>

                      <small>
                        Digital marketing ideas & trends
                      </small>

                    </div>

                  </Link>


                  {/* FAQ */}

                  <Link
                    to="/faq"
                    className="rohil-service-item"
                    onClick={() => setDiscoverOpen(false)}
                  >

                    <span className="rohil-service-icon">
                      <Help fontSize="small" />
                    </span>

                    <div className="rohil-service-content">

                      <strong>
                        FAQ
                      </strong>

                      <small>
                        Frequently asked questions
                      </small>

                    </div>

                  </Link>

                </div>

              )}

            </div>


            <Link to="/contact">
              Contact
            </Link>

          </nav>


          {/* =================================================
              DESKTOP THEME TOGGLE
          ================================================= */}

          <button
            className="rohil-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            title=
           {darkMode ? (
  <WbSunny fontSize="small" />
) : (
  <DarkMode fontSize="small" />
)}
            
          >

            {darkMode ? (
              <WbSunny fontSize="small" />
            ) : (
              <DarkMode fontSize="small" />
            )}

          </button>


          {/* =================================================
              DESKTOP CONSULTATION
          ================================================= */}

          <Link
            to="/book-consultation"
            className="rohil-consult-button"
          >
            Book Free Consultation
          </Link>


          {/* =================================================
              MOBILE HAMBURGER
          ================================================= */}

          <button
            className="rohil-menu-button"
            onClick={() => {
              setMenuOpen((prev) => !prev);

              if (menuOpen) {
                setServicesOpen(false);
                setDiscoverOpen(false);
              }
            }}
            aria-label="Toggle menu"
          >

            {menuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}

          </button>

        </div>


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {menuOpen && (

          <div className="rohil-mobile-menu">


            {/* HOME */}

            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>


            {/* =================================================
                MOBILE SERVICES
            ================================================= */}

            <button
              className="rohil-mobile-services-button"
              onClick={toggleServices}
            >

              <span>
                Services
              </span>

              <span
                className={`rohil-mobile-arrow ${
                  servicesOpen ? "open" : ""
                }`}
              >
                <KeyboardArrowDown fontSize="small" />
              </span>

            </button>


            {servicesOpen && (

              <div className="rohil-mobile-services">


                {/* SEO */}

                <Link
                  to="/seo"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <RocketLaunch fontSize="small" />
                  </span>

                  <span>
                    SEO
                  </span>

                </Link>


                {/* GOOGLE ADS */}

                <Link
                  to="/google-ads"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <AdsClick fontSize="small" />
                  </span>

                  <span>
                    Google Ads
                  </span>

                </Link>


                {/* META ADS */}

                <Link
                  to="/meta-ads"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <Campaign fontSize="small" />
                  </span>

                  <span>
                    Meta Ads
                  </span>

                </Link>


                {/* SOCIAL MEDIA */}

                <Link
                  to="/social-media"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <PhoneIphone fontSize="small" />
                  </span>

                  <span>
                    Social Media
                  </span>

                </Link>


                {/* BRANDING */}

                <Link
                  to="/branding"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <AutoAwesome fontSize="small" />
                  </span>

                  <span>
                    Branding
                  </span>

                </Link>

              </div>

            )}


            {/* =================================================
                OTHER LINKS
            ================================================= */}

            <Link
              to="/about"
              onClick={closeMenu}
            >
              About Us
            </Link>


            <Link
              to="/our-work"
              onClick={closeMenu}
            >
              Our Work
            </Link>


            <Link
              to="/blog"
              onClick={closeMenu}
            >
              Blog
            </Link>


            <Link
              to="/why-us"
              onClick={closeMenu}
            >
              Why Us
            </Link>


            {/* =================================================
                MOBILE DISCOVER
            ================================================= */}

            <button
              className="rohil-mobile-services-button"
              onClick={toggleDiscover}
            >

              <span>
                Discover
              </span>

              <span
                className={`rohil-mobile-arrow ${
                  discoverOpen ? "open" : ""
                }`}
              >
                <KeyboardArrowDown fontSize="small" />
              </span>

            </button>


            {discoverOpen && (

              <div className="rohil-mobile-services">


                {/* OUR APPROACH */}

                <Link
                  to="/our-approach"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <Explore fontSize="small" />
                  </span>

                  <span>
                    Our Approach
                  </span>

                </Link>


                {/* INSIGHTS */}

                <Link
                  to="/insights"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <Lightbulb fontSize="small" />
                  </span>

                  <span>
                    Insights
                  </span>

                </Link>


                {/* FAQ */}

                <Link
                  to="/faq"
                  onClick={closeMenu}
                >

                  <span className="rohil-mobile-service-icon">
                    <Help fontSize="small" />
                  </span>

                  <span>
                    FAQs
                  </span>

                </Link>

              </div>

            )}


            {/* CONTACT */}

            <Link
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>


            {/* =================================================
                MOBILE THEME TOGGLE
            ================================================= */}

            <button
              className="rohil-mobile-services-button"
              onClick={toggleTheme}
            >

              <span>
                {darkMode
                  ? "Light Mode"
                  : "Dark Mode"}
              </span>

              <span className="rohil-mobile-service-icon">

                {darkMode ? (
                  <WbSunny fontSize="small" />
                ) : (
                  <DarkMode fontSize="small" />
                )}

              </span>

            </button>


            {/* =================================================
                MOBILE CONSULTATION
            ================================================= */}

            <Link
              to="/book-consultation"
              className="rohil-mobile-consult"
              onClick={closeMenu}
            >
              Book Free Consultation
            </Link>

          </div>

        )}

      </header>
    </>
  );
}

export default Header;