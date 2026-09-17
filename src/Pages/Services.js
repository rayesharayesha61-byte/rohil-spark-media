import React from "react";
import { Link } from "react-router-dom";

function Services() {

  const services = [
    {
      icon: "🔍",
      number: "01",
      title: "SEO",
      subtitle: "Search Engine Optimization",
      description:
        "Improve your search visibility, attract the right audience and build long-term organic growth.",
      points: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Local SEO",
      ],
    },
    {
      icon: "🎯",
      number: "02",
      title: "Google Ads",
      subtitle: "Performance Advertising",
      description:
        "Reach customers when they are actively searching for your products or services.",
      points: [
        "Search Campaigns",
        "Display Ads",
        "Remarketing",
        "Campaign Optimization",
      ],
    },
    {
      icon: "📱",
      number: "03",
      title: "Meta Ads",
      subtitle: "Facebook & Instagram Ads",
      description:
        "Create targeted campaigns that connect your brand with the right audience.",
      points: [
        "Campaign Strategy",
        "Audience Targeting",
        "Creative Ads",
        "Performance Tracking",
      ],
    },
    {
      icon: "📣",
      number: "04",
      title: "Social Media",
      subtitle: "Social Media Marketing",
      description:
        "Build a strong social presence with engaging content and consistent brand communication.",
      points: [
        "Content Planning",
        "Creative Posts",
        "Social Management",
        "Analytics",
      ],
    },
    {
      icon: "✨",
      number: "05",
      title: "Branding",
      subtitle: "Build Your Brand Identity",
      description:
        "Create a memorable brand identity that communicates your business clearly and professionally.",
      points: [
        "Brand Strategy",
        "Logo Design",
        "Visual Identity",
        "Brand Guidelines",
      ],
    },
    {
      icon: "💻",
      number: "06",
      title: "Web Development",
      subtitle: "Modern Digital Experiences",
      description:
        "Design and develop responsive websites that look great and deliver a smooth user experience.",
      points: [
        "Website Design",
        "Responsive Development",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .services-page {
          min-height: 100vh;
          padding-bottom: 100px;

          color: white;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(160, 45, 255, .16),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(45, 100, 255, .13),
              transparent 30%
            ),
            #030308;

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;
        }


        /* =========================
           BACKGROUND EFFECTS
        ========================= */

        .service-orb {
          position: absolute;

          width: 350px;
          height: 350px;

          border-radius: 50%;

          filter: blur(100px);

          opacity: .16;

          pointer-events: none;
        }


        .service-orb-one {
          top: 300px;
          left: -180px;

          background: #a52cff;

          animation:
            serviceOrbOne 8s
            ease-in-out
            infinite alternate;
        }


        .service-orb-two {
          top: 800px;
          right: -180px;

          background: #326cff;

          animation:
            serviceOrbTwo 9s
            ease-in-out
            infinite alternate;
        }


        @keyframes serviceOrbOne {

          from {
            transform:
              translate(0, 0);
          }

          to {
            transform:
              translate(180px, 100px);
          }

        }


        @keyframes serviceOrbTwo {

          from {
            transform:
              translate(0, 0);
          }

          to {
            transform:
              translate(-160px, -100px);
          }

        }


        /* =========================
           HERO
        ========================= */

        .services-hero {
          position: relative;

          min-height: 500px;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;

          padding:
            90px 20px 60px;

          z-index: 2;
        }


        .services-hero-content {
          animation:
            servicesHeroIn 1s ease;
        }


        @keyframes servicesHeroIn {

          from {
            opacity: 0;

            transform:
              translateY(45px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .services-badge {
          display: inline-block;

          padding:
            9px 18px;

          margin-bottom: 22px;

          border-radius: 50px;

          color: #c45cff;

          background:
            rgba(170, 50, 255, .08);

          border:
            1px solid
            rgba(170, 50, 255, .25);

          font-size: 11px;

          letter-spacing: 3px;

          animation:
            serviceBadge 3s
            ease-in-out
            infinite;
        }


        @keyframes serviceBadge {

          0%,
          100% {
            box-shadow:
              0 0 10px
              rgba(170, 50, 255, .05);
          }

          50% {
            box-shadow:
              0 0 30px
              rgba(170, 50, 255, .3);
          }

        }


        .services-hero h1 {
          margin: 0;

          font-size:
            clamp(50px, 7vw, 90px);

          line-height: 1.03;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #c52cff,
              #708cff,
              #43c9ff,
              #c52cff
            );

          background-size: 300% auto;

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          animation:
            serviceGradient 5s
            linear
            infinite;
        }


        @keyframes serviceGradient {

          to {
            background-position:
              300% center;
          }

        }


        .services-hero h2 {
          margin:
            20px 0 15px;

          font-size:
            clamp(23px, 3vw, 36px);
        }


        .services-hero p {
          max-width: 700px;

          margin: auto;

          color: #9696a4;

          font-size: 15px;

          line-height: 1.8;
        }


        /* =========================
           CONTAINER
        ========================= */

        .services-container {
          position: relative;

          z-index: 3;

          max-width: 1200px;

          margin: auto;

          padding:
            20px 25px;
        }


        /* =========================
           SECTION TITLE
        ========================= */

        .services-title {
          text-align: center;

          margin-bottom: 45px;
        }


        .services-label {
          color: #bc4cff;

          font-size: 11px;

          letter-spacing: 3px;

          margin-bottom: 12px;

          font-weight: 600;
        }


        .services-title h2 {
          margin: 0 0 12px;

          font-size:
            clamp(32px, 5vw, 48px);
        }


        .services-title h2 span {
          background:
            linear-gradient(
              90deg,
              #c02cff,
              #4f9cff
            );

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;
        }


        .services-title p {
          margin: 0;

          color: #858592;

          font-size: 14px;
        }


        /* =========================
           SERVICE GRID
        ========================= */

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;

          margin-bottom: 110px;
        }


        .service-card {
          position: relative;

          min-height: 390px;

          padding: 30px;

          overflow: hidden;

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, .055),
              rgba(255, 255, 255, .012)
            );

          border:
            1px solid
            rgba(255, 255, 255, .08);

          transition:
            .45s ease;

          animation:
            serviceCardIn .7s ease both;
        }


        .service-card:nth-child(2) {
          animation-delay: .1s;
        }

        .service-card:nth-child(3) {
          animation-delay: .2s;
        }

        .service-card:nth-child(4) {
          animation-delay: .3s;
        }

        .service-card:nth-child(5) {
          animation-delay: .4s;
        }

        .service-card:nth-child(6) {
          animation-delay: .5s;
        }


        @keyframes serviceCardIn {

          from {
            opacity: 0;

            transform:
              translateY(40px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .service-card::before {
          content: "";

          position: absolute;

          width: 200px;
          height: 200px;

          top: -110px;
          right: -110px;

          border-radius: 50%;

          background:
            #a52cff;

          filter: blur(75px);

          opacity: .1;

          transition:
            .5s ease;
        }


        .service-card:hover {

          transform:
            translateY(-10px);

          border-color:
            rgba(175, 65, 255, .4);

          box-shadow:
            0 25px 60px
            rgba(100, 30, 255, .15);
        }


        .service-card:hover::before {

          opacity: .3;

          transform:
            scale(1.5);
        }


        /* =========================
           CARD TOP
        ========================= */

        .service-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 25px;
        }


        .service-icon {
          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 15px;

          font-size: 27px;

          background:
            linear-gradient(
              145deg,
              rgba(160, 50, 255, .15),
              rgba(50, 100, 255, .08)
            );

          border:
            1px solid
            rgba(170, 60, 255, .18);

          transition:
            .4s ease;
        }


        .service-card:hover .service-icon {

          transform:
            rotate(-7deg)
            scale(1.1);

          box-shadow:
            0 0 25px
            rgba(160, 50, 255, .25);
        }


        .service-number {

          color: #575765;

          font-size: 12px;

          font-weight: 600;

          letter-spacing: 1px;
        }


        .service-card h3 {
          margin:
            0 0 7px;

          font-size: 23px;
        }


        .service-subtitle {
          color: #bd4dff;

          font-size: 11px;

          font-weight: 600;

          letter-spacing: .5px;

          margin-bottom: 17px;
        }


        .service-description {
          color: #858592;

          font-size: 13px;

          line-height: 1.8;

          margin-bottom: 20px;
        }


        /* =========================
           POINTS
        ========================= */

        .service-points {
          display: flex;

          flex-direction: column;

          gap: 9px;
        }


        .service-point {
          display: flex;

          align-items: center;

          gap: 9px;

          color: #aaaab5;

          font-size: 11px;
        }


        .service-point span {
          color: #b84cff;

          font-size: 12px;
        }


        /* =========================
           CTA
        ========================= */

        .services-cta {
          position: relative;

          text-align: center;

          padding:
            70px 25px;

          border-radius: 25px;

          overflow: hidden;

          background:
            linear-gradient(
              110deg,
              rgba(150, 45, 255, .12),
              rgba(35, 100, 255, .08)
            );

          border:
            1px solid
            rgba(170, 70, 255, .2);

          margin-bottom: 50px;
        }


        .services-cta::before {

          content: "";

          position: absolute;

          width: 400px;
          height: 400px;

          top: -300px;
          left: 50%;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            #a52cff;

          filter: blur(100px);

          opacity: .16;
        }


        .services-cta h2 {
          position: relative;

          margin:
            0 0 15px;

          font-size:
            clamp(28px, 4vw, 45px);
        }


        .services-cta p {
          position: relative;

          max-width: 650px;

          margin:
            0 auto 28px;

          color: #92929f;

          line-height: 1.8;

          font-size: 14px;
        }


        .services-cta a {
          position: relative;

          display: inline-block;

          padding:
            14px 28px;

          color: white;

          text-decoration: none;

          border-radius: 10px;

          background:
            linear-gradient(
              100deg,
              #a52cff,
              #326cff
            );

          font-size: 13px;

          font-weight: 600;

          transition:
            .3s ease;
        }


        .services-cta a:hover {

          transform:
            translateY(-4px);

          box-shadow:
            0 0 35px
            rgba(130, 45, 255, .4);
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 950px) {

          .services-grid {

            grid-template-columns:
              repeat(2, 1fr);

          }

        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {

          .services-hero {

            min-height: 430px;

            padding:
              70px 18px 45px;

          }


          .services-hero h1 {

            font-size: 52px;

          }


          .services-hero h2 {

            font-size: 22px;

          }


          .services-hero p {

            font-size: 14px;

          }


          .services-container {

            padding:
              15px 16px;

          }


          .services-grid {

            grid-template-columns: 1fr;

            gap: 15px;

            margin-bottom: 80px;

          }


          .service-card {

            min-height: 370px;

            padding: 25px;

          }


          .service-card:hover {

            transform:
              translateY(-5px);

          }


          .services-cta {

            padding:
              50px 20px;

          }


          .services-cta h2 {

            font-size: 29px;

          }

        }

/* =================================
   LIGHT THEME
================================= */

body.light-theme .services-page {
  color: #172033;

  background:
    radial-gradient(
      circle at 10% 10%,
      rgba(168, 85, 247, 0.10),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 35%,
      rgba(59, 130, 246, 0.10),
      transparent 30%
    ),
    #f8faff;
}

/* Hero */

body.light-theme .services-hero h1 {
  background: linear-gradient(
    90deg,
    #7c3aed,
    #2563eb,
    #0891b2
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

body.light-theme .services-hero h2 {
  color: #172033;
}

body.light-theme .services-hero p {
  color: #64748b;
}

/* Badge */

body.light-theme .services-badge {
  color: #7c3aed;

  background: rgba(124, 58, 237, 0.08);

  border-color: rgba(124, 58, 237, 0.20);
}

/* Section Title */

body.light-theme .services-label {
  color: #7c3aed;
}

body.light-theme .services-title h2 {
  color: #172033;
}

body.light-theme .services-title h2 span {
  background: linear-gradient(
    90deg,
    #7c3aed,
    #2563eb
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

body.light-theme .services-title p {
  color: #64748b;
}

/* Service Cards */

body.light-theme .service-card {
  background: linear-gradient(
    145deg,
    #ffffff,
    #f5f7ff
  );

  border-color: #e2e8f0;

  box-shadow:
    0 8px 25px rgba(15, 23, 42, 0.05);
}

body.light-theme .service-card:hover {
  border-color: rgba(124, 58, 237, 0.35);

  box-shadow:
    0 20px 45px rgba(15, 23, 42, 0.10);
}

body.light-theme .service-card h3 {
  color: #172033;
}

body.light-theme .service-subtitle {
  color: #7c3aed;
}

body.light-theme .service-description {
  color: #64748b;
}

body.light-theme .service-point {
  color: #475569;
}

body.light-theme .service-point span {
  color: #7c3aed;
}

body.light-theme .service-number {
  color: #94a3b8;
}

/* Service Icons */

body.light-theme .service-icon {
  background: linear-gradient(
    145deg,
    rgba(124, 58, 237, 0.10),
    rgba(37, 99, 235, 0.08)
  );

  border-color: rgba(124, 58, 237, 0.18);
}

/* CTA */

body.light-theme .services-cta {
  background: linear-gradient(
    110deg,
    rgba(124, 58, 237, 0.08),
    rgba(37, 99, 235, 0.08)
  );

  border-color: rgba(124, 58, 237, 0.18);
}

body.light-theme .services-cta h2 {
  color: #172033;
}

body.light-theme .services-cta p {
  color: #64748b;
}

body.light-theme .services-cta a {
  color: #ffffff;

  background: linear-gradient(
    100deg,
    #7c3aed,
    #2563eb
  );
}

/* Background Orbs */

body.light-theme .service-orb {
  opacity: 0.08;
}
      `}</style>


      <section className="services-page">

        <div className="service-orb service-orb-one"></div>

        <div className="service-orb service-orb-two"></div>


        {/* =========================
            HERO
        ========================= */}

        <div className="services-hero">

          <div className="services-hero-content">

            <div className="services-badge">
              ✦ WHAT WE DO
            </div>


            <h1>
              Digital
              <br />
              Services
            </h1>


            <h2>
              Strategy. Creativity.
              <br />
              Measurable Growth.
            </h2>


            <p>
              We create powerful digital strategies
              that help brands attract customers,
              build visibility and turn ideas into
              measurable business growth.
            </p>

          </div>

        </div>


        <div className="services-container">


          {/* =========================
              TITLE
          ========================= */}

          <div className="services-title">

            <div className="services-label">
              OUR EXPERTISE
            </div>


            <h2>
              Everything Your Brand
              <span> Needs To Grow</span>
            </h2>


            <p>
              One team. Multiple digital growth solutions.
            </p>

          </div>


          {/* =========================
              SERVICES
          ========================= */}

          <div className="services-grid">

            {services.map(
              (service, index) => (

                <div
                  className="service-card"
                  key={index}
                >

                  <div className="service-top">

                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <div className="service-number">
                      {service.number}
                    </div>

                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <div className="service-subtitle">
                    {service.subtitle}
                  </div>


                  <p className="service-description">
                    {service.description}
                  </p>


                  <div className="service-points">

                    {service.points.map(
                      (point) => (

                        <div
                          className="service-point"
                          key={point}
                        >

                          <span>
                            ✓
                          </span>

                          {point}

                        </div>

                      )
                    )}

                  </div>

                </div>

              )
            )}

          </div>


          {/* =========================
              CTA
          ========================= */}

          <div className="services-cta">

            <h2>
              Have A Growth Goal?
            </h2>


            <p>
              Let's turn your ideas into a digital
              strategy that creates real impact.
            </p>


            <Link to="/contact">
              Start Your Project →
            </Link>

          </div>


        </div>

      </section>
    </>
  );
}

export default Services;