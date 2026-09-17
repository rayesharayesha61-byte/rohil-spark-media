// import React, { useState } from "react";

// function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);


  

//   const handleChanges = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmits = (e) => {
//   e.preventDefault();

//   const whatsappNumber = "919480242900";

//   const whatsappMessage = `
// Hello Rohil Digital Spark Media,

// I would like to enquire about your services.

// Name: ${formData.name}
// Email: ${formData.email}
// Phone: ${formData.phone || "Not provided"}
// Service: ${formData.service}

// Message:
// ${formData.message}

// Thank you.
//   `;

//   const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//     whatsappMessage
//   )}`;

//   window.open(whatsappURL, "_blank");

//   setSubmitted(true);

//   setFormData({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });
// };
//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .contact-page {
//           min-height: 100vh;

//           padding-bottom: 100px;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 10% 20%,
//               rgba(155,45,255,.15),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 90% 45%,
//               rgba(40,100,255,.12),
//               transparent 30%
//             ),
//             #030308;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;

//           overflow: hidden;
//         }


//         /* HERO */

//         .contact-hero {
//           position: relative;

//           text-align: center;

//           padding:
//             85px 20px 55px;

//           animation:
//             contactHero 1s ease;
//         }


//         @keyframes contactHero {

//           from {
//             opacity: 0;

//             transform:
//               translateY(35px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateY(0);
//           }

//         }


//         .contact-badge {
//           display: inline-block;

//           padding:
//             9px 18px;

//           margin-bottom: 20px;

//           border-radius: 50px;

//           color: #c45cff;

//           background:
//             rgba(170,50,255,.08);

//           border:
//             1px solid
//             rgba(170,50,255,.25);

//           font-size: 12px;

//           letter-spacing: 3px;
//         }


//         .contact-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px,7vw,82px);

//           line-height: 1.05;

//           font-weight: 800;

//           background:
//             linear-gradient(
//               90deg,
//               #c42cff,
//               #708cff,
//               #42c8ff,
//               #c42cff
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           animation:
//             contactGradient 5s linear infinite;
//         }


//         @keyframes contactGradient {

//           to {
//             background-position:
//               300% center;
//           }

//         }


//         .contact-hero p {
//           max-width: 650px;

//           margin:
//             20px auto 0;

//           color: #9999a8;

//           font-size: 15px;

//           line-height: 1.8;
//         }


//         /* CONTAINER */

//         .contact-container {
//           max-width: 1150px;

//           margin: auto;

//           padding:
//             20px 25px;
//         }


//         .contact-grid {
//           display: grid;

//           grid-template-columns:
//             .8fr 1.2fr;

//           gap: 25px;

//           align-items: stretch;
//         }


//         /* LEFT */

//         .contact-info {
//           padding: 35px;

//           border-radius: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.055),
//               rgba(255,255,255,.012)
//             );

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           animation:
//             contactLeft .8s ease;
//         }


//         @keyframes contactLeft {

//           from {
//             opacity: 0;

//             transform:
//               translateX(-30px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateX(0);
//           }

//         }


//         .contact-info h2 {
//           margin:
//             0 0 12px;

//           font-size: 28px;
//         }


//         .contact-info > p {
//           color: #888895;

//           font-size: 13px;

//           line-height: 1.8;

//           margin-bottom: 30px;
//         }


//         .contact-info-item {
//           display: flex;

//           gap: 15px;

//           padding:
//             17px 0;

//           border-bottom:
//             1px solid
//             rgba(255,255,255,.06);
//         }


//         .contact-info-item:last-child {
//           border-bottom: none;
//         }


//         .contact-info-icon {
//           width: 45px;
//           height: 45px;

//           flex-shrink: 0;

//           display: flex;

//           align-items: center;

//           justify-content: center;

//           border-radius: 12px;

//           font-size: 20px;

//           background:
//             rgba(155,50,255,.1);

//           border:
//             1px solid
//             rgba(170,60,255,.18);
//         }


//         .contact-info-item strong {
//           display: block;

//           font-size: 13px;

//           margin-bottom: 5px;
//         }


//         .contact-info-item span {
//           color: #858592;

//           font-size: 12px;

//           line-height: 1.6;
//         }


//         /* FORM */

//         .contact-form-box {
//           padding: 35px;

//           border-radius: 22px;

//           background:
//             linear-gradient(
//               145deg,
//               rgba(255,255,255,.055),
//               rgba(255,255,255,.012)
//             );

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           animation:
//             contactRight .8s ease;
//         }


//         @keyframes contactRight {

//           from {
//             opacity: 0;

//             transform:
//               translateX(30px);
//           }

//           to {
//             opacity: 1;

//             transform:
//               translateX(0);
//           }

//         }


//         .contact-form-box h2 {
//           margin:
//             0 0 8px;

//           font-size: 28px;
//         }


//         .contact-form-box > p {
//           margin:
//             0 0 28px;

//           color: #858592;

//           font-size: 13px;
//         }


//         .contact-form {
//           display: flex;

//           flex-direction: column;

//           gap: 15px;
//         }


//         .contact-row {
//           display: grid;

//           grid-template-columns:
//             1fr 1fr;

//           gap: 15px;
//         }


//         .contact-field {
//           display: flex;

//           flex-direction: column;

//           gap: 7px;
//         }


//         .contact-field label {
//           color: #aaaab5;

//           font-size: 11px;

//           letter-spacing: .5px;
//         }


//         .contact-field input,
//         .contact-field select,
//         .contact-field textarea {

//           width: 100%;

//           border: none;

//           outline: none;

//           color: white;

//           background:
//             rgba(255,255,255,.035);

//           border:
//             1px solid
//             rgba(255,255,255,.08);

//           border-radius: 9px;

//           padding:
//             13px 14px;

//           font-size: 13px;

//           transition:
//             .3s ease;

//           font-family: inherit;
//         }


//         .contact-field select option {
//           background: #08070f;

//           color: white;
//         }


//         .contact-field textarea {
//           min-height: 125px;

//           resize: vertical;
//         }


//         .contact-field input:focus,
//         .contact-field select:focus,
//         .contact-field textarea:focus {

//           border-color:
//             rgba(175,65,255,.55);

//           box-shadow:
//             0 0 20px
//             rgba(140,50,255,.08);
//         }


//         .contact-submit {
//           border: none;

//           cursor: pointer;

//           margin-top: 5px;

//           padding: 14px;

//           border-radius: 10px;

//           color: white;

//           font-size: 13px;

//           font-weight: 600;

//           background:
//             linear-gradient(
//               100deg,
//               #a52cff,
//               #326cff
//             );

//           box-shadow:
//             0 0 25px
//             rgba(130,45,255,.2);

//           transition:
//             .3s ease;
//         }


//         .contact-submit:hover {
//           transform:
//             translateY(-3px);

//           box-shadow:
//             0 0 35px
//             rgba(130,45,255,.45);
//         }


//         .contact-success {
//           padding:
//             12px 15px;

//           margin-bottom: 10px;

//           border-radius: 9px;

//           color: #b9ffcf;

//           background:
//             rgba(40,200,100,.08);

//           border:
//             1px solid
//             rgba(40,200,100,.2);

//           font-size: 12px;
//         }


//         /* BOTTOM */

//         .contact-bottom {
//           margin-top: 60px;

//           text-align: center;

//           color: #777784;

//           font-size: 12px;
//         }


//         /* TABLET */

//         @media (max-width: 850px) {

//           .contact-grid {
//             grid-template-columns: 1fr;
//           }

//           .contact-info {
//             order: 2;
//           }

//           .contact-form-box {
//             order: 1;
//           }

//         }


//         /* MOBILE */

//         @media (max-width: 550px) {

//           .contact-hero {
//             padding:
//               70px 18px 40px;
//           }


//           .contact-hero h1 {
//             font-size: 50px;
//           }


//           .contact-hero p {
//             font-size: 14px;
//           }


//           .contact-container {
//             padding:
//               15px 16px;
//           }


//           .contact-info,
//           .contact-form-box {
//             padding:
//               25px 20px;
//           }


//           .contact-row {
//             grid-template-columns: 1fr;
//           }


//           .contact-info h2,
//           .contact-form-box h2 {
//             font-size: 24px;
//           }

//         }

//       `}</style>


//       <section className="contact-page">


//         {/* HERO */}

//         <div className="contact-hero">

//           <div className="contact-badge">
//             ✦ LET'S CONNECT
//           </div>

//           <h1>
//             Let's Build
//             <br />
//             Something Great
//           </h1>

//           <p>
//             Have a project, idea or business goal
//             in mind? Tell us about it and let's
//             create a digital strategy that makes
//             an impact.
//           </p>

//         </div>


//         <div className="contact-container">

//           <div className="contact-grid">


//             {/* INFO */}

//             <div className="contact-info">

//               <h2>
//                 Let's Talk
//               </h2>

//               <p>
//                 We're always excited to hear about
//                 new ideas, projects and opportunities.
//                 Reach out to our team and let's start
//                 a conversation.
//               </p>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   📧
//                 </div>

//                 <div>
//                   <strong>
//                     Email
//                   </strong>

//                   <span>
//                     rohilsparkmedia@gmail.com
//                   </span>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   📞
//                 </div>

//                 <div>
//                   <strong>
//                     Phone
//                   </strong>

//                   <span>
//                     +91 97518 67879
//                   </span>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   📍
//                 </div>

//                 <div>
//                   <strong>
//                     Location
//                   </strong>

//                   <span>
//                      1 st Floor,Canara Bank Building,Madurai
//                   Viruthunagar-626001.
//                   </span>
//                 </div>

//               </div>


//               <div className="contact-info-item">

//                 <div className="contact-info-icon">
//                   ⏰
//                 </div>

//                 <div>
//                   <strong>
//                     Working Hours
//                   </strong>

//                   <span>
//                     Monday - Saturday
//                     <br />
//                     9:00 AM - 6:00 PM
//                   </span>
//                 </div>

//               </div>

//             </div>


//             {/* FORM */}

//             <div className="contact-form-box">

//               <h2>
//                 Start A Conversation
//               </h2>

//               <p>
//                 Fill in the details and we'll
//                 get back to you soon.
//               </p>


//               {submitted && (

//                 <div className="contact-success">

//                   ✓ Thank you! Your message
//                   has been submitted successfully.

//                 </div>

//               )}




 
//     <form
//       className="contact-form"
//       onSubmit={handleSubmits}
//     >

//       <div className="contact-row">

//         <div className="contact-field">
//           <label>
//             YOUR NAME
//           </label>

//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             value={formData.name}
//             onChange={handleChanges}
//             required
//           />
//         </div>


//         <div className="contact-field">
//           <label>
//             EMAIL ADDRESS
//           </label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChanges}
//             required
//           />
//         </div>

//       </div>


//       <div className="contact-row">

//         <div className="contact-field">
//           <label>
//             PHONE NUMBER
//           </label>

//           <input
//             type="tel"
//             name="phone"
//             placeholder="Enter your phone"
//             value={formData.phone}
//             onChange={handleChanges}
//           />
//         </div>


//         <div className="contact-field">
//           <label>
//             SERVICE
//           </label>

//           <select
//             name="service"
//             value={formData.service}
//             onChange={handleChanges}
//             required
//           >
//             <option value="">
//               Select a service
//             </option>

//             <option value="SEO">
//               SEO
//             </option>

//             <option value="Google Ads">
//               Google Ads
//             </option>

//             <option value="Meta Ads">
//               Meta Ads
//             </option>

//             <option value="Social Media">
//               Social Media
//             </option>

//             <option value="Branding">
//               Branding
//             </option>

//             <option value="Web Design">
//               Web Design
//             </option>
//           </select>
//         </div>

//       </div>


//       <div className="contact-field">

//         <label>
//           YOUR MESSAGE
//         </label>

//         <textarea
//           name="message"
//           placeholder="Tell us about your project..."
//           value={formData.message}
//           onChange={handleChanges}
//           required
//         />

//       </div>


//       <button
//         type="submit"
//         className="contact-submit"
//       >
//         Send Message →
//       </button>

//     </form>
//            </div>

//           </div>


//           <div className="contact-bottom">

//             ✦ We usually respond within
//             24 business hours.

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Contact;
import React, { useState } from "react";
import {
  AutoAwesome,
  Email,
  Phone,
  LocationOn,
  AccessTime,
  CheckCircle,
  ArrowForward,
  Send,
} from "@mui/icons-material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmits = (e) => {
    e.preventDefault();

    const whatsappNumber = "919480242900";

    const whatsappMessage = `
Hello Rohil Digital Spark Media,

I would like to enquire about your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service}

Message:
${formData.message}

Thank you.
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =========================================
           DARK MODE DEFAULT
        ========================================= */

        .contact-page {
          width: 100%;
          min-height: 100vh;

          padding-bottom: 100px;

          color: #ffffff;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(155,45,255,.15),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 45%,
              rgba(40,100,255,.12),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;

          transition:
            background .35s ease,
            color .35s ease;
        }


        /* =========================================
           LIGHT MODE
        ========================================= */

        body.light-theme .contact-page {
          color: #172033;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(124,58,237,.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 45%,
              rgba(14,165,233,.08),
              transparent 30%
            ),
            #f7f9fc;
        }


        /* =========================================
           HERO
        ========================================= */

        .contact-hero {
          position: relative;

          text-align: center;

          padding:
            85px 20px 55px;

          animation:
            contactHero 1s ease;
        }


        @keyframes contactHero {

          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }


        .contact-badge {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding:
            9px 18px;

          margin-bottom: 20px;

          border-radius: 50px;

          color: #c45cff;

          background:
            rgba(170,50,255,.08);

          border:
            1px solid
            rgba(170,50,255,.25);

          font-size: 12px;

          letter-spacing: 3px;

          transition: .3s ease;
        }


        .contact-badge svg {
          font-size: 16px;
        }


        body.light-theme .contact-badge {
          color: #7c3aed;

          background:
            rgba(124,58,237,.08);

          border-color:
            rgba(124,58,237,.2);
        }


        .contact-hero h1 {
          margin: 0;

          font-size:
            clamp(48px,7vw,82px);

          line-height: 1.05;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #c42cff,
              #708cff,
              #42c8ff,
              #c42cff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          animation:
            contactGradient 5s linear infinite;
        }


        @keyframes contactGradient {

          to {
            background-position:
              300% center;
          }

        }


        .contact-hero p {
          max-width: 650px;

          margin:
            20px auto 0;

          color: #9999a8;

          font-size: 15px;

          line-height: 1.8;
        }


        body.light-theme .contact-hero p {
          color: #64748b;
        }


        /* =========================================
           CONTAINER
        ========================================= */

        .contact-container {
          width: 100%;

          max-width: 1150px;

          margin: auto;

          padding:
            20px 25px;
        }


        .contact-grid {
          display: grid;

          grid-template-columns:
            .8fr 1.2fr;

          gap: 25px;

          align-items: stretch;
        }


        /* =========================================
           LEFT INFO
        ========================================= */

        .contact-info {
          padding: 35px;

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.012)
            );

          border:
            1px solid
            rgba(255,255,255,.08);

          animation:
            contactLeft .8s ease;

          transition:
            background .35s ease,
            border .35s ease,
            box-shadow .35s ease;
        }


        body.light-theme .contact-info {
          background:
            rgba(255,255,255,.92);

          border:
            1px solid
            rgba(15,23,42,.08);

          box-shadow:
            0 15px 45px
            rgba(15,23,42,.06);
        }


        @keyframes contactLeft {

          from {
            opacity: 0;
            transform: translateX(-30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        .contact-info h2 {
          margin:
            0 0 12px;

          font-size: 28px;
        }


        .contact-info > p {
          color: #888895;

          font-size: 13px;

          line-height: 1.8;

          margin-bottom: 30px;
        }


        body.light-theme .contact-info > p {
          color: #64748b;
        }


        /* =========================================
           INFO ITEM
        ========================================= */

        .contact-info-item {
          display: flex;

          gap: 15px;

          padding:
            17px 0;

          border-bottom:
            1px solid
            rgba(255,255,255,.06);
        }


        body.light-theme .contact-info-item {
          border-bottom-color:
            rgba(15,23,42,.08);
        }


        .contact-info-item:last-child {
          border-bottom: none;
        }


        .contact-info-icon {
          width: 45px;
          height: 45px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 12px;

          color: #bd5cff;

          background:
            rgba(155,50,255,.1);

          border:
            1px solid
            rgba(170,60,255,.18);

          transition:
            .3s ease;
        }


        .contact-info-icon svg {
          font-size: 21px;
        }


        .contact-info-item:hover
        .contact-info-icon {
          transform:
            translateY(-3px)
            scale(1.05);

          box-shadow:
            0 0 20px
            rgba(155,50,255,.2);
        }


        body.light-theme .contact-info-icon {
          color: #7c3aed;

          background:
            rgba(124,58,237,.08);

          border-color:
            rgba(124,58,237,.15);
        }


        .contact-info-item strong {
          display: block;

          font-size: 13px;

          margin-bottom: 5px;
        }


        .contact-info-item span {
          color: #858592;

          font-size: 12px;

          line-height: 1.6;
        }


        body.light-theme
        .contact-info-item span {
          color: #64748b;
        }


        /* =========================================
           FORM BOX
        ========================================= */

        .contact-form-box {
          padding: 35px;

          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.012)
            );

          border:
            1px solid
            rgba(255,255,255,.08);

          animation:
            contactRight .8s ease;

          transition:
            background .35s ease,
            border .35s ease,
            box-shadow .35s ease;
        }


        body.light-theme .contact-form-box {
          background:
            rgba(255,255,255,.92);

          border:
            1px solid
            rgba(15,23,42,.08);

          box-shadow:
            0 15px 45px
            rgba(15,23,42,.06);
        }


        @keyframes contactRight {

          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }

        }


        .contact-form-box h2 {
          margin:
            0 0 8px;

          font-size: 28px;
        }


        .contact-form-box > p {
          margin:
            0 0 28px;

          color: #858592;

          font-size: 13px;
        }


        body.light-theme
        .contact-form-box > p {
          color: #64748b;
        }


        /* =========================================
           FORM
        ========================================= */

        .contact-form {
          display: flex;

          flex-direction: column;

          gap: 15px;
        }


        .contact-row {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 15px;
        }


        .contact-field {
          display: flex;

          flex-direction: column;

          gap: 7px;
        }


        .contact-field label {
          color: #aaaab5;

          font-size: 11px;

          letter-spacing: .5px;
        }


        body.light-theme
        .contact-field label {
          color: #475569;
        }


        .contact-field input,
        .contact-field select,
        .contact-field textarea {

          width: 100%;

          outline: none;

          color: white;

          background:
            rgba(255,255,255,.035);

          border:
            1px solid
            rgba(255,255,255,.08);

          border-radius: 9px;

          padding:
            13px 14px;

          font-size: 13px;

          transition:
            .3s ease;

          font-family: inherit;
        }


        body.light-theme
        .contact-field input,
        body.light-theme
        .contact-field select,
        body.light-theme
        .contact-field textarea {

          color: #172033;

          background:
            #f8fafc;

          border-color:
            rgba(15,23,42,.12);
        }


        .contact-field input::placeholder,
        .contact-field textarea::placeholder {
          color: #666675;
        }


        body.light-theme
        .contact-field input::placeholder,
        body.light-theme
        .contact-field textarea::placeholder {
          color: #94a3b8;
        }


        .contact-field select option {
          background: #08070f;

          color: white;
        }


        body.light-theme
        .contact-field select option {
          background: white;

          color: #172033;
        }


        .contact-field textarea {
          min-height: 125px;

          resize: vertical;
        }


        .contact-field input:focus,
        .contact-field select:focus,
        .contact-field textarea:focus {

          border-color:
            rgba(175,65,255,.55);

          box-shadow:
            0 0 20px
            rgba(140,50,255,.08);
        }


        body.light-theme
        .contact-field input:focus,
        body.light-theme
        .contact-field select:focus,
        body.light-theme
        .contact-field textarea:focus {

          border-color:
            rgba(124,58,237,.5);

          box-shadow:
            0 0 20px
            rgba(124,58,237,.1);
        }


        /* =========================================
           SUBMIT BUTTON
        ========================================= */

        .contact-submit {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 8px;

          border: none;

          cursor: pointer;

          margin-top: 5px;

          padding: 14px;

          border-radius: 10px;

          color: white;

          font-size: 13px;

          font-weight: 600;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          box-shadow:
            0 0 25px
            rgba(130,45,255,.2);

          transition:
            .3s ease;
        }


        .contact-submit svg {
          font-size: 18px;
        }


        .contact-submit:hover {
          transform:
            translateY(-3px);

          box-shadow:
            0 0 35px
            rgba(130,45,255,.45);
        }


        /* =========================================
           SUCCESS
        ========================================= */

        .contact-success {

          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            12px 15px;

          margin-bottom: 10px;

          border-radius: 9px;

          color: #b9ffcf;

          background:
            rgba(40,200,100,.08);

          border:
            1px solid
            rgba(40,200,100,.2);

          font-size: 12px;
        }


        .contact-success svg {
          font-size: 18px;
        }


        body.light-theme .contact-success {
          color: #15803d;

          background:
            rgba(34,197,94,.08);

          border-color:
            rgba(34,197,94,.2);
        }


        /* =========================================
           BOTTOM
        ========================================= */

        .contact-bottom {

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          margin-top: 60px;

          text-align: center;

          color: #777784;

          font-size: 12px;
        }


        body.light-theme .contact-bottom {
          color: #64748b;
        }


        .contact-bottom svg {
          font-size: 16px;

          color: #a52cff;
        }


        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 850px) {

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-info {
            order: 2;
          }

          .contact-form-box {
            order: 1;
          }

        }


        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 550px) {

          .contact-hero {
            padding:
              70px 18px 40px;
          }


          .contact-hero h1 {
            font-size: 50px;
          }


          .contact-hero p {
            font-size: 14px;
          }


          .contact-container {
            padding:
              15px 16px;
          }


          .contact-info,
          .contact-form-box {
            padding:
              25px 20px;
          }


          .contact-row {
            grid-template-columns: 1fr;
          }


          .contact-info h2,
          .contact-form-box h2 {
            font-size: 24px;
          }


          .contact-badge {
            font-size: 10px;

            letter-spacing: 2px;
          }

        }

      `}</style>


      <section className="contact-page">

        {/* =========================================
            HERO
        ========================================= */}

        <div className="contact-hero">

          <div className="contact-badge">

            <AutoAwesome />

            LET'S CONNECT

          </div>


          <h1>
            Let's Build
            <br />
            Something Great
          </h1>


          <p>
            Have a project, idea or business goal
            in mind? Tell us about it and let's
            create a digital strategy that makes
            an impact.
          </p>

        </div>


        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="contact-container">

          <div className="contact-grid">


            {/* =====================================
                CONTACT INFORMATION
            ===================================== */}

            <div className="contact-info">

              <h2>
                Let's Talk
              </h2>


              <p>
                We're always excited to hear about
                new ideas, projects and opportunities.
                Reach out to our team and let's start
                a conversation.
              </p>


              {/* EMAIL */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <Email />
                </div>

                <div>

                  <strong>
                    Email
                  </strong>

                  <span>
                    rohilsparkmedia@gmail.com
                  </span>

                </div>

              </div>


              {/* PHONE */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <Phone />
                </div>

                <div>

                  <strong>
                    Phone
                  </strong>

                  <span>
                    +91 97518 67879
                  </span>

                </div>

              </div>


              {/* LOCATION */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <LocationOn />
                </div>

                <div>

                  <strong>
                    Location
                  </strong>

                  <span>
                    1st Floor, Canara Bank Building,
                    Madurai Viruthunagar - 626001.
                  </span>

                </div>

              </div>


              {/* WORKING HOURS */}

              <div className="contact-info-item">

                <div className="contact-info-icon">
                  <AccessTime />
                </div>

                <div>

                  <strong>
                    Working Hours
                  </strong>

                  <span>
                    Monday - Saturday
                    <br />
                    9:00 AM - 6:00 PM
                  </span>

                </div>

              </div>

            </div>


            {/* =====================================
                FORM
            ===================================== */}

            <div className="contact-form-box">

              <h2>
                Start A Conversation
              </h2>


              <p>
                Fill in the details and we'll
                get back to you soon.
              </p>


              {submitted && (

                <div className="contact-success">

                  <CheckCircle />

                  <span>
                    Thank you! Your message
                    has been submitted successfully.
                  </span>

                </div>

              )}


              <form
                className="contact-form"
                onSubmit={handleSubmits}
              >


                {/* NAME + EMAIL */}

                <div className="contact-row">

                  <div className="contact-field">

                    <label>
                      YOUR NAME
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChanges}
                      required
                    />

                  </div>


                  <div className="contact-field">

                    <label>
                      EMAIL ADDRESS
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChanges}
                      required
                    />

                  </div>

                </div>


                {/* PHONE + SERVICE */}

                <div className="contact-row">

                  <div className="contact-field">

                    <label>
                      PHONE NUMBER
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleChanges}
                    />

                  </div>


                  <div className="contact-field">

                    <label>
                      SERVICE
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChanges}
                      required
                    >

                      <option value="">
                        Select a service
                      </option>

                      <option value="SEO">
                        SEO
                      </option>

                      <option value="Google Ads">
                        Google Ads
                      </option>

                      <option value="Meta Ads">
                        Meta Ads
                      </option>

                      <option value="Social Media">
                        Social Media
                      </option>

                      <option value="Branding">
                        Branding
                      </option>

                      <option value="Web Design">
                        Web Design
                      </option>

                    </select>

                  </div>

                </div>


                {/* MESSAGE */}

                <div className="contact-field">

                  <label>
                    YOUR MESSAGE
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChanges}
                    required
                  />

                </div>


                {/* BUTTON */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  <Send />

                  Send Message

                  <ArrowForward />

                </button>

              </form>

            </div>

          </div>


          {/* BOTTOM */}

          <div className="contact-bottom">

            <AccessTime />

            <span>
              We usually respond within
              24 business hours.
            </span>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;