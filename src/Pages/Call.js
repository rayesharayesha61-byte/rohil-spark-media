import React from "react";
import { Link } from "react-router-dom";
function Call() {
  return (
    <>
      <style>{`

        .call-page {
          min-height: 100vh;
          background: #030307;
          color: white;
          padding: 120px 6% 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .call-page::before {
          content: "";
          position: absolute;

          width: 450px;
          height: 450px;

          top: -180px;
          left: -150px;

          border-radius: 50%;

          background: #8b5cf6;

          filter: blur(160px);

          opacity: .16;

          animation: callGlow 7s infinite alternate;
        }

        .call-page::after {
          content: "";

          position: absolute;

          width: 400px;
          height: 400px;

          right: -150px;
          bottom: -180px;

          border-radius: 50%;

          background: #2563eb;

          filter: blur(160px);

          opacity: .14;

          animation: callGlow2 8s infinite alternate;
        }

        @keyframes callGlow {
          to {
            transform: translate(120px,100px);
          }
        }

        @keyframes callGlow2 {
          to {
            transform: translate(-100px,-100px);
          }
        }


        .call-container {
          width: 100%;
          max-width: 1050px;

          position: relative;
          z-index: 2;

          display: grid;

          grid-template-columns: .9fr 1.1fr;

          gap: 70px;

          align-items: center;
        }


        /* LEFT */

        .call-left {
          animation: callLeft .9s ease;
        }

        @keyframes callLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .call-badge {
          display: inline-block;

          padding: 8px 15px;

          border-radius: 30px;

          background: rgba(139,92,246,.08);

          border:
            1px solid rgba(139,92,246,.25);

          color: #b794f4;

          font-size: 9px;

          letter-spacing: 2px;
        }

        .call-left h1 {
          margin: 22px 0 15px;

          font-size: clamp(45px,6vw,70px);

          line-height: 1.05;
        }

        .call-left h1 span {
          background:
            linear-gradient(
              90deg,
              #a855f7,
              #6366f1,
              #22d3ee
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .call-left p {
          color: #858592;

          font-size: 14px;

          line-height: 1.9;

          max-width: 520px;
        }


        /* CONTACT ITEMS */

        .call-details {
          margin-top: 30px;

          display: flex;

          flex-direction: column;

          gap: 12px;
        }

        .call-detail {
          display: flex;

          align-items: center;

          gap: 14px;

          padding: 15px;

          border-radius: 14px;

          background:
            rgba(255,255,255,.035);

          border:
            1px solid rgba(255,255,255,.07);

          transition: .3s;
        }

        .call-detail:hover {
          transform: translateX(7px);

          border-color:
            rgba(139,92,246,.4);

          background:
            rgba(139,92,246,.07);
        }

        .call-detail-icon {
          width: 42px;
          height: 42px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 12px;

          background:
            rgba(139,92,246,.1);

          font-size: 18px;
        }

        .call-detail div {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }

        .call-detail strong {
          font-size: 12px;
        }

        .call-detail span {
          color: #777784;

          font-size: 10px;
        }


        /* RIGHT CARD */

        .call-card {
          padding: 45px 35px;

          border-radius: 28px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.07),
              rgba(255,255,255,.025)
            );

          border:
            1px solid rgba(255,255,255,.1);

          backdrop-filter: blur(20px);

          box-shadow:
            0 30px 80px rgba(0,0,0,.4);

          text-align: center;

          animation:
            callCardFloat 4s ease-in-out infinite;
        }

        @keyframes callCardFloat {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }


        /* PHONE */

        .call-phone {
          width: 110px;
          height: 110px;

          margin: 0 auto 30px;

          border-radius: 50%;

          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 45px;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #6366f1
            );

          box-shadow:
            0 0 0 12px rgba(139,92,246,.08),
            0 0 50px rgba(139,92,246,.35);

          animation:
            phonePulse 2s infinite;
        }

        @keyframes phonePulse {

          0%,100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }

        }


        .call-card h2 {
          font-size: 28px;

          margin-bottom: 10px;
        }

        .call-card p {
          color: #858592;

          font-size: 12px;

          line-height: 1.8;

          margin-bottom: 25px;
        }


        /* BUTTONS */

        .call-buttons {
          display: flex;

          gap: 10px;

          justify-content: center;
        }

        .call-btn {
          flex: 1;

          padding: 15px 18px;

          border-radius: 12px;

          text-decoration: none;

          color: white;

          font-size: 12px;

          font-weight: 600;

          transition: .3s;
        }

        .call-now {
          background:
            linear-gradient(
              100deg,
              #8b5cf6,
              #6366f1
            );

          box-shadow:
            0 0 25px
            rgba(139,92,246,.25);
        }

        .whatsapp-btn {
          background:
            #128c7e;
        }

        .call-btn:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 12px 30px
            rgba(0,0,0,.3);
        }


        .call-hours {
          margin-top: 25px;

          padding-top: 20px;

          border-top:
            1px solid
            rgba(255,255,255,.07);

          color: #686873;

          font-size: 10px;
        }


        /* MOBILE */

        @media (max-width: 800px) {

          .call-page {
            padding:
              100px 5% 50px;
          }

          .call-container {
            grid-template-columns: 1fr;

            gap: 45px;
          }

          .call-left {
            text-align: center;
          }

          .call-left p {
            margin: auto;
          }

          .call-details {
            text-align: left;
          }

          .call-card {
            max-width: 500px;

            width: 100%;

            margin: auto;
          }

        }


        @media (max-width: 500px) {

          .call-left h1 {
            font-size: 43px;
          }

          .call-card {
            padding:
              35px 20px;
          }

          .call-phone {
            width: 90px;
            height: 90px;

            font-size: 35px;
          }

          .call-buttons {
            flex-direction: column;
          }

          .call-btn {
            width: 100%;
          }

        }

      `}</style>


      <section className="call-page">

        <div className="call-container">


          {/* LEFT */}

          <div className="call-left">

            <span className="call-badge">
              LET'S CONNECT
            </span>

            <h1>
              Let's Talk
              <br />

              <span>About Your Growth.</span>
            </h1>

            <p>
              Have a project in mind or want to grow
              your digital presence? Our team is ready
              to understand your goals and help you
              find the right digital marketing strategy.
            </p>


            <div className="call-details">

              <div className="call-detail">

                <div className="call-detail-icon">
                  📞
                </div>

                <div>
                  <strong>
                    Call Us
                  </strong>

                  <span>
                    +91 97518 67879
                  </span>
                </div>

              </div>


              <div className="call-detail">

                <div className="call-detail-icon">
                  📧
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


              <div className="call-detail">

                <div className="call-detail-icon">
                  🕐
                </div>

                <div>
                  <strong>
                    Working Hours
                  </strong>

                  <span>
                    Mon - Sat · 9:00 AM - 6:00 PM
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT */}

          <div className="call-card">

            <div className="call-phone">
              📞
            </div>

            <h2>
              Speak With Us
            </h2>

            <p>
              Let's discuss your business,
              understand your goals and create
              a strategy that works for you.
            </p>


            <div className="call-buttons">

              <Link
  to="tel:+919751867879"
  className="call-btn call-now"
>
  📞 Call Now
</Link>

<Link
  to="https://wa.me/919751867879"
  className="call-btn whatsapp-btn"
>
  💬 WhatsApp
</Link>

            </div>


            <div className="call-hours">
              Usually responds within a few minutes
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Call;