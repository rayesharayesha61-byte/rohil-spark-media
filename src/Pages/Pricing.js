import React, { useState } from "react";
import { Link } from "react-router-dom";
function Pricing() {

  const [billing, setBilling] = useState("Monthly");

  const plans = [
    {
      name: "Starter",
      subtitle: "For small businesses getting started",
      price: "₹9,999",
      popular: false,
      features: [
        "Social Media Management",
        "8 Creative Posts",
        "Basic SEO",
        "Monthly Performance Report",
        "Content Strategy",
      ],
    },
    {
      name: "Growth",
      subtitle: "For businesses ready to grow",
      price: "₹19,999",
      popular: true,
      features: [
        "Advanced SEO",
        "Social Media Management",
        "12 Creative Posts",
        "Google Ads Management",
        "Meta Ads Management",
        "Monthly Analytics",
      ],
    },
    {
      name: "Scale",
      subtitle: "For brands targeting bigger growth",
      price: "₹34,999",
      popular: false,
      features: [
        "Complete SEO",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "20 Creative Posts",
        "Branding Strategy",
        "Priority Support",
      ],
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .pricing-page {
          min-height: 100vh;
          padding-bottom: 100px;
          color: white;

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(155,45,255,.14),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 40%,
              rgba(40,100,255,.12),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;
        }

        .pricing-hero {
          position: relative;
          text-align: center;
          padding: 90px 20px 55px;

          animation:
            pricingHero 1s ease;
        }

        @keyframes pricingHero {

          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .pricing-badge {
          display: inline-block;

          padding: 9px 18px;

          border-radius: 50px;

          color: #c45cff;

          background:
            rgba(170,50,255,.08);

          border:
            1px solid
            rgba(170,50,255,.25);

          font-size: 12px;

          letter-spacing: 3px;

          margin-bottom: 20px;
        }

        .pricing-hero h1 {
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
            pricingGradient 5s linear infinite;
        }

        @keyframes pricingGradient {

          to {
            background-position: 300% center;
          }

        }

        .pricing-hero p {
          max-width: 680px;

          margin: 20px auto 0;

          color: #9999a8;

          font-size: 15px;

          line-height: 1.8;
        }

        .pricing-container {
          max-width: 1200px;

          margin: auto;

          padding: 20px 25px;
        }

        /* TOGGLE */

        .pricing-toggle {
          display: flex;

          justify-content: center;

          margin: 20px 0 50px;
        }

        .pricing-toggle-box {
          display: flex;

          padding: 5px;

          border-radius: 50px;

          background:
            rgba(255,255,255,.04);

          border:
            1px solid
            rgba(255,255,255,.08);
        }

        .pricing-toggle button {
          border: none;

          background: transparent;

          color: #8f8f9d;

          padding: 11px 20px;

          border-radius: 50px;

          cursor: pointer;

          font-size: 13px;
        }

        .pricing-toggle button.active {
          color: white;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #4b69ff
            );

          box-shadow:
            0 0 20px
            rgba(140,50,255,.25);
        }

        /* CARDS */

        .pricing-grid {
          display: grid;

          grid-template-columns:
            repeat(3,1fr);

          gap: 22px;
        }

        .pricing-card {
          position: relative;

          padding: 35px 30px;

          border-radius: 22px;

          min-height: 520px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.012)
            );

          border:
            1px solid
            rgba(255,255,255,.08);

          transition:
            .4s ease;

          animation:
            pricingCard .7s ease both;
        }

        .pricing-card:nth-child(2) {
          animation-delay: .15s;
        }

        .pricing-card:nth-child(3) {
          animation-delay: .3s;
        }

        @keyframes pricingCard {

          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .pricing-card:hover {
          transform:
            translateY(-10px);

          border-color:
            rgba(175,65,255,.35);

          box-shadow:
            0 25px 60px
            rgba(100,30,255,.16);
        }

        .pricing-card.popular {
          border:
            1px solid
            rgba(178,65,255,.45);

          box-shadow:
            0 0 40px
            rgba(135,40,255,.12);

          transform:
            translateY(-10px);
        }

        .pricing-popular {
          position: absolute;

          top: 18px;
          right: 18px;

          padding: 7px 12px;

          border-radius: 50px;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #5367ff
            );

          font-size: 10px;

          font-weight: 600;

          letter-spacing: .5px;
        }

        .pricing-card h3 {
          margin:
            0 0 10px;

          font-size: 25px;
        }

        .pricing-subtitle {
          min-height: 42px;

          color: #858592;

          font-size: 12px;

          line-height: 1.6;
        }

        .pricing-price {
          margin:
            25px 0;

          font-size: 38px;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #c22cff,
              #5d9dff
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .pricing-price small {
          font-size: 12px;

          color: #777784;
        }

        .pricing-divider {
          height: 1px;

          background:
            rgba(255,255,255,.07);

          margin-bottom: 25px;
        }

        .pricing-features {
          display: flex;

          flex-direction: column;

          gap: 14px;
        }

        .pricing-feature {
          display: flex;

          align-items: flex-start;

          gap: 10px;

          color: #b4b4bf;

          font-size: 13px;

          line-height: 1.5;
        }

        .pricing-check {
          color: #b64cff;

          font-weight: bold;
        }

        .pricing-button {
          position: absolute;

          left: 30px;
          right: 30px;

          bottom: 30px;

          display: block;

          padding: 13px;

          text-align: center;

          color: white;

          text-decoration: none;

          border-radius: 10px;

          background:
            rgba(255,255,255,.05);

          border:
            1px solid
            rgba(255,255,255,.1);

          transition: .3s ease;

          font-size: 13px;
        }

        .pricing-card.popular
        .pricing-button,
        .pricing-button:hover {

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          border-color: transparent;

          box-shadow:
            0 0 25px
            rgba(130,45,255,.25);

          transform:
            translateY(-3px);
        }

        /* BOTTOM */

        .pricing-bottom {
          margin-top: 90px;

          padding: 60px 25px;

          text-align: center;

          border-radius: 25px;

          background:
            linear-gradient(
              110deg,
              rgba(150,45,255,.1),
              rgba(35,100,255,.07)
            );

          border:
            1px solid
            rgba(170,70,255,.18);
        }

        .pricing-bottom h2 {
          margin: 0 0 15px;

          font-size:
            clamp(27px,4vw,40px);
        }

        .pricing-bottom p {
          color: #92929f;

          margin:
            0 auto 25px;

          max-width: 600px;

          line-height: 1.8;

          font-size: 14px;
        }

        .pricing-bottom Link {
          display: inline-block;

          padding:
            14px 27px;

          color: white;

          text-decoration: none;

          border-radius: 10px;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          transition: .3s ease;
        }

        .pricing-bottom Link:hover {
          transform:
            translateY(-4px);

          box-shadow:
            0 0 30px
            rgba(130,45,255,.4);
        }

        /* MOBILE */

        @media (max-width: 900px) {

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-card {
            min-height: 500px;
          }

          .pricing-card.popular {
            transform: none;
          }

          .pricing-card:hover {
            transform:
              translateY(-5px);
          }

        }

        @media (max-width: 500px) {

          .pricing-hero {
            padding:
              70px 18px 40px;
          }

          .pricing-hero h1 {
            font-size: 50px;
          }

          .pricing-hero p {
            font-size: 14px;
          }

          .pricing-container {
            padding:
              15px 16px;
          }

          .pricing-toggle {
            margin-bottom: 35px;
          }

          .pricing-toggle button {
            padding:
              10px 14px;
          }

          .pricing-card {
            padding:
              28px 24px;
          }

          .pricing-button {
            left: 24px;
            right: 24px;
          }

          .pricing-bottom {
            margin-top: 65px;

            padding:
              45px 20px;
          }

        }

      `}</style>


      <section className="pricing-page">

        {/* HERO */}

        <div className="pricing-hero">

          <div className="pricing-badge">
            ✦ SIMPLE & TRANSPARENT
          </div>

          <h1>
            Plans That
            <br />
            Grow With You
          </h1>

          <p>
            Flexible digital marketing packages
            designed to help businesses build
            visibility, generate leads and grow
            their online presence.
          </p>

        </div>


        <div className="pricing-container">

          {/* TOGGLE */}

          <div className="pricing-toggle">

            <div className="pricing-toggle-box">

              <button
                className={
                  billing === "Monthly"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBilling("Monthly")
                }
              >
                Monthly
              </button>

              <button
                className={
                  billing === "Yearly"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setBilling("Yearly")
                }
              >
                Yearly
              </button>

            </div>

          </div>


          {/* PLANS */}

          <div className="pricing-grid">

            {plans.map(
              (plan, index) => {

                let price = plan.price;

                if (
                  billing === "Yearly"
                ) {
                  price =
                    index === 0
                      ? "₹99,999"
                      : index === 1
                      ? "₹1,99,999"
                      : "₹3,49,999";
                }

                return (

                  <div
                    className={
                      `pricing-card ${
                        plan.popular
                          ? "popular"
                          : ""
                      }`
                    }
                    key={plan.name}
                  >

                    {plan.popular && (
                      <div className="pricing-popular">
                        MOST POPULAR
                      </div>
                    )}


                    <h3>
                      {plan.name}
                    </h3>


                    <div className="pricing-subtitle">
                      {plan.subtitle}
                    </div>


                    <div className="pricing-price">

                      {price}

                      <small>
                        {billing === "Monthly"
                          ? " / month"
                          : " / year"}
                      </small>

                    </div>


                    <div className="pricing-divider"></div>


                    <div className="pricing-features">

                      {plan.features.map(
                        (feature) => (

                          <div
                            className="pricing-feature"
                            key={feature}
                          >

                            <span className="pricing-check">
                              ✓
                            </span>

                            <span>
                              {feature}
                            </span>

                          </div>

                        )
                      )}

                    </div>


                    <a
                      href="/contact"
                      className="pricing-button"
                    >
                      Get Started →
                    </a>

                  </div>

                );
              }
            )}

          </div>


          {/* CTA */}

          <div className="pricing-bottom">

            <h2>
              Need A Custom Package?
            </h2>

            <p>
              Every business has different goals.
              Tell us what you need and we'll create
              a package that fits your business.
            </p>

            <a href="/contact">
              Talk To Our Team →
            </a>
<Link
  to="/contact"

>
 Talk To Our Team →
</Link>
          </div>

        </div>

      </section>
    </>
  );
}

export default Pricing;