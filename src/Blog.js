// import React from "react";
// import { Link } from "react-router-dom";

// function Blog() {

//   const blogs = [
//     {
//       image: "/images/blog-1.jpeg",
//       date: "August 21, 2026",
//       category: "SEO",
//       title: "How SEO Helps Your Business Grow Online",
//       text: "Discover how a strong SEO strategy can improve your search visibility, attract the right audience and generate long-term organic growth."
//     },
//     {
//       image: "/images/blog-2.jpeg",
//       date: "August 18, 2026",
//       category: "GOOGLE ADS",
//       title: "Google Ads Strategies That Drive Better Results",
//       text: "Learn how targeted Google Ads campaigns can help businesses reach high-intent customers and improve their advertising performance."
//     },
//     {
//       image: "/images/blog-3.jpeg",
//       date: "August 15, 2026",
//       category: "META ADS",
//       title: "Grow Your Business With Meta Advertising",
//       text: "Explore effective Facebook and Instagram advertising strategies to connect with your target audience and increase conversions."
//     },
//     {
//       image: "/images/blog-4.jpeg",
//       date: "August 12, 2026",
//       category: "SOCIAL MEDIA",
//       title: "Building A Strong Social Media Presence",
//       text: "A consistent social media strategy can help your brand build trust, engage customers and create a stronger online presence."
//     },
//     {
//       image: "/images/blog-5.jpeg",
//       date: "August 09, 2026",
//       category: "BRANDING",
//       title: "Why Strong Branding Matters For Businesses",
//       text: "Your brand is more than just a logo. Learn how strong branding creates recognition, trust and a memorable customer experience."
//     },
//     {
//       image: "/images/blog-6.jpeg",
//       date: "August 05, 2026",
//       category: "DIGITAL MARKETING",
//       title: "Digital Marketing Trends You Should Know",
//       text: "Explore important digital marketing trends that can help businesses adapt, reach new audiences and achieve better online growth."
//     }
//   ];


//   return (
//     <>
//       <style>{`

//         * {
//           box-sizing: border-box;
//         }

//         .blog-page {
//           min-height: 100vh;
//           padding: 120px 20px 80px;

//           color: white;

//           background:
//             radial-gradient(
//               circle at 10% 10%,
//               rgba(255, 150, 40, .12),
//               transparent 30%
//             ),
//             radial-gradient(
//               circle at 90% 30%,
//               rgba(255, 50, 150, .10),
//               transparent 30%
//             ),
//             #030308;

//           font-family:
//             Arial,
//             Helvetica,
//             sans-serif;
//         }


//         /* HERO */

//         .blog-hero {
//           max-width: 850px;
//           margin: auto;

//           text-align: center;

//           margin-bottom: 65px;

//           animation:
//             blogHeroIn .8s ease;
//         }


//         @keyframes blogHeroIn {

//           from {
//             opacity: 0;
//             transform: translateY(35px);
//           }

//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }

//         }


//         .blog-label {
//           display: inline-block;

//           padding: 8px 17px;

//           border-radius: 50px;

//           color: #ffc05a;

//           background:
//             rgba(255, 180, 50, .08);

//           border:
//             1px solid
//             rgba(255, 180, 50, .22);

//           font-size: 10px;

//           letter-spacing: 3px;

//           margin-bottom: 20px;
//         }


//         .blog-hero h1 {
//           margin: 0;

//           font-size:
//             clamp(48px, 7vw, 82px);

//           line-height: 1;

//           background:
//             linear-gradient(
//               90deg,
//               #ffc04b,
//               #ff579e,
//               #ff8738,
//               #ffc04b
//             );

//           background-size: 300% auto;

//           -webkit-background-clip: text;
//           background-clip: text;

//           color: transparent;

//           animation:
//             blogGradient 5s linear infinite;
//         }


//         @keyframes blogGradient {

//           to {
//             background-position: 300% center;
//           }

//         }


//         .blog-hero p {
//           max-width: 650px;

//           margin:
//             22px auto 0;

//           color: #858592;

//           font-size: 14px;

//           line-height: 1.8;
//         }


//         /* BLOG GRID */

//         .blog-container {
//           max-width: 1200px;

//           margin: auto;
//         }


//       .blog-grid {
//   display: grid;

//   grid-template-columns: repeat(3, 1fr);

//   gap: 25px;

//   width: 100%;
//   max-width: 1200px;

//   height: auto;

//   margin: 0 auto;
// }


//         /* CARD */

//         .blog-card {

//           overflow: hidden;

//           border-radius: 20px;

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
//             .4s ease;

//           animation:
//             blogCardIn .7s ease both;
//         }


//         @keyframes blogCardIn {

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


//         .blog-card:hover {

//           transform:
//             translateY(-10px);

//           border-color:
//             rgba(255, 175, 55, .35);

//           box-shadow:
//             0 25px 60px
//             rgba(255, 130, 40, .12);
//         }


//         /* IMAGE */

//         .blog-image-wrapper {

//           height: 220px;

//           overflow: hidden;

//           position: relative;
//         }


//         .blog-image {

//           width: 100%;
//           height: 100%;

//           object-fit: cover;

//           transition:
//             transform .6s ease;
//         }


//         .blog-card:hover .blog-image {

//           transform:
//             scale(1.08);
//         }


//         .blog-category {

//           position: absolute;

//           left: 16px;
//           bottom: 15px;

//           padding:
//             7px 12px;

//           border-radius: 30px;

//           background:
//             rgba(0,0,0,.7);

//           backdrop-filter:
//             blur(8px);

//           color: #ffc05a;

//           font-size: 9px;

//           letter-spacing: 1.5px;
//         }


//         /* CONTENT */

//         .blog-content {

//           padding: 24px;
//         }


//         .blog-date {

//           display: block;

//           color: #777783;

//           font-size: 11px;

//           margin-bottom: 12px;
//         }


//         .blog-content h2 {

//           margin:
//             0 0 12px;

//           font-size: 20px;

//           line-height: 1.4;

//           transition:
//             color .3s ease;
//         }


//         .blog-card:hover h2 {

//           color: #ffc05a;
//         }


//         .blog-content p {

//           margin: 0 0 20px;

//           color: #858592;

//           font-size: 12px;

//           line-height: 1.8;
//         }


//         .blog-read {

//           display: inline-flex;

//           align-items: center;

//           gap: 8px;

//           color: white;

//           text-decoration: none;

//           font-size: 12px;

//           font-weight: 600;

//           transition:
//             .3s ease;
//         }


//         .blog-read:hover {

//           color: #ffc05a;

//           gap: 13px;
//         }


//         /* MOBILE */

//         @media (max-width: 950px) {

//           .blog-grid {
//             grid-template-columns:
//               repeat(2, 1fr);
//           }

//         }


//         @media (max-width: 600px) {

//           .blog-page {
//             padding:
//               100px 15px 60px;
//           }


//           .blog-hero {
//             margin-bottom: 40px;
//           }


//           .blog-hero h1 {
//             font-size: 50px;
//           }


//           .blog-hero p {
//             font-size: 13px;
//           }


//           .blog-grid {
//             grid-template-columns: 1fr;

//             gap: 18px;
//           }


//           .blog-image-wrapper {
//             height: 210px;
//           }


//           .blog-content {
//             padding: 21px;
//           }


//           .blog-content h2 {
//             font-size: 19px;
//           }

//         }

//       `}</style>


//       <section className="blog-page">

//         {/* HERO */}

//         <div className="blog-hero">

//           <div className="blog-label">
//             ROHIL DIGITAL SPARK MEDIA
//           </div>


//           <h1>
//             Our Blog
//           </h1>


//           <p>
//             Explore digital marketing insights,
//             strategies, trends and ideas to help
//             your business grow in the digital world.
//           </p>

//         </div>


//         {/* BLOGS */}

//         <div className="blog-container">

//           <div className="blog-grid">

//             {blogs.map((blog, index) => (

//               <article
//                 className="blog-card"
//                 key={index}
//               >

//                 <div className="blog-image-wrapper">

//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="blog-image"
//                   />


//                   <span className="blog-category">
//                     {blog.category}
//                   </span>

//                 </div>


//                 <div className="blog-content">

//                   <span className="blog-date">
//                     📅 {blog.date}
//                   </span>


//                   <h2>
//                     {blog.title}
//                   </h2>


//                   <p>
//                     {blog.text}
//                   </p>


//                   <Link
//                     to="/contact"
//                     className="blog-read"
//                   >
//                     Read More →
//                   </Link>

//                 </div>

//               </article>

//             ))}

//           </div>

//         </div>

//       </section>
//     </>
//   );
// }

// export default Blog;
import React from "react";
import { Link } from "react-router-dom";

import {
  AutoAwesome,
  CalendarMonth,
  ArrowForward,
  TrendingUp,
  Search,
  Campaign,
  Groups,
  Palette,
  Insights,
} from "@mui/icons-material";

function Blog() {
  const blogs = [
    {
      image: "/images/blog-1.jpeg",
      date: "August 21, 2026",
      category: "SEO",
      icon: <TrendingUp />,
      title: "How SEO Helps Your Business Grow Online",
      text:
        "Discover how a strong SEO strategy can improve your search visibility, attract the right audience and generate long-term organic growth.",
    },
    {
      image: "/images/blog-2.jpeg",
      date: "August 18, 2026",
      category: "GOOGLE ADS",
      icon: <Search />,
      title: "Google Ads Strategies That Drive Better Results",
      text:
        "Learn how targeted Google Ads campaigns can help businesses reach high-intent customers and improve their advertising performance.",
    },
    {
      image: "/images/blog-3.jpeg",
      date: "August 15, 2026",
      category: "META ADS",
      icon: <Campaign />,
      title: "Grow Your Business With Meta Advertising",
      text:
        "Explore effective Facebook and Instagram advertising strategies to connect with your target audience and increase conversions.",
    },
    {
      image: "/images/blog-4.jpeg",
      date: "August 12, 2026",
      category: "SOCIAL MEDIA",
      icon: <Groups />,
      title: "Building A Strong Social Media Presence",
      text:
        "A consistent social media strategy can help your brand build trust, engage customers and create a stronger online presence.",
    },
    {
      image: "/images/blog-5.jpeg",
      date: "August 09, 2026",
      category: "BRANDING",
      icon: <Palette />,
      title: "Why Strong Branding Matters For Businesses",
      text:
        "Your brand is more than just a logo. Learn how strong branding creates recognition, trust and a memorable customer experience.",
    },
    {
      image: "/images/blog-6.jpeg",
      date: "August 05, 2026",
      category: "DIGITAL MARKETING",
      icon: <Insights />,
      title: "Digital Marketing Trends You Should Know",
      text:
        "Explore important digital marketing trends that can help businesses adapt, reach new audiences and achieve better online growth.",
    },
  ];

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        /* =====================================
           BLOG PAGE
        ===================================== */

        .blog-page {
          --blog-bg: #030308;
          --blog-text: #ffffff;
          --blog-muted: #9292a2;
          --blog-card: rgba(255,255,255,.045);
          --blog-border: rgba(255,255,255,.09);
          --blog-date: #777783;
          --blog-title: #ffffff;

          position: relative;
          min-height: 100vh;
          width: 100%;

          padding: 0 20px 100px;

          color: var(--blog-text);

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(255,150,40,.12),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(255,50,150,.10),
              transparent 30%
            ),
            var(--blog-bg);

          font-family:
            Arial,
            Helvetica,
            sans-serif;

          overflow: hidden;

          transition:
            background .3s ease,
            color .3s ease;
        }


        /* =====================================
           LIGHT MODE
        ===================================== */

        body.light-theme .blog-page {
          --blog-bg: #f6f8fc;
          --blog-text: #111827;
          --blog-muted: #64748b;
          --blog-card: rgba(255,255,255,.92);
          --blog-border: rgba(15,23,42,.10);
          --blog-date: #64748b;
          --blog-title: #111827;

          background:
            radial-gradient(
              circle at 10% 15%,
              rgba(245,158,11,.10),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(236,72,153,.08),
              transparent 30%
            ),
            var(--blog-bg);
        }


        /* =====================================
           HERO
        ===================================== */

.blog-hero {
  position: relative;
  min-height: 520px;
  margin: 0 -20px 70px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 120px 20px 70px;
  overflow: hidden;

  background-image:
    linear-gradient(
      rgba(3, 3, 8, 0.55),
      rgba(3, 3, 8, 0.78)
    ),
    url("/images/blog-hero.jpg");

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  animation: blogHeroIn 0.8s ease;
}

/* Light Theme */
body.light-theme .blog-hero {
  background-image:
    url("/images/blog-hero.jpg");

  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}background-repeat: no-repeat;
} 


        @keyframes blogHeroIn {

          from {
            opacity: 0;

            transform:
              translateY(30px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .blog-hero-content {
          position: relative;

          z-index: 2;

          max-width: 850px;
        }


        /* =====================================
           LABEL
        ===================================== */

        .blog-label {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            9px 18px;

          border-radius: 50px;

          color: #ffc05a;

          background:
            rgba(255,180,50,.09);

          border:
            1px solid
            rgba(255,180,50,.25);

          font-size: 11px;

          letter-spacing: 2.5px;

          margin-bottom: 22px;
        }


        .blog-label svg {
          font-size: 17px;
        }


        /* =====================================
           HERO TITLE
        ===================================== */

        .blog-hero h1 {
          margin: 0;

          font-size:
            clamp(50px, 7vw, 85px);

          line-height: 1;

          font-weight: 800;

          background:
            linear-gradient(
              90deg,
              #ffc04b,
              #ff579e,
              #ff8738,
              #ffc04b
            );

          background-size: 300% auto;

          -webkit-background-clip: text;

          background-clip: text;

          color: transparent;

          animation:
            blogGradient 5s linear infinite;
        }


        @keyframes blogGradient {

          to {
            background-position:
              300% center;
          }

        }


        .blog-hero p {
          max-width: 650px;

          margin:
            25px auto 0;

          color:
            var(--blog-muted);

          font-size: 15px;

          line-height: 1.8;
        }


        /* =====================================
           CONTAINER
        ===================================== */

        .blog-container {
          position: relative;

          z-index: 3;

          width: 100%;

          max-width: 1200px;

          margin: auto;
        }


        /* =====================================
           BLOG GRID
        ===================================== */

        .blog-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 25px;

          width: 100%;
        }


        /* =====================================
           BLOG CARD
        ===================================== */

        .blog-card {
          position: relative;

          overflow: hidden;

          border-radius: 20px;

          background:
            var(--blog-card);

          border:
            1px solid
            var(--blog-border);

          backdrop-filter:
            blur(15px);

          transition:
            transform .4s ease,
            border .4s ease,
            box-shadow .4s ease;

          animation:
            blogCardIn .7s ease both;
        }


        .blog-card:nth-child(2) {
          animation-delay: .08s;
        }

        .blog-card:nth-child(3) {
          animation-delay: .16s;
        }

        .blog-card:nth-child(4) {
          animation-delay: .24s;
        }

        .blog-card:nth-child(5) {
          animation-delay: .32s;
        }

        .blog-card:nth-child(6) {
          animation-delay: .40s;
        }


        @keyframes blogCardIn {

          from {
            opacity: 0;

            transform:
              translateY(35px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        .blog-card:hover {
          transform:
            translateY(-10px);

          border-color:
            rgba(255,175,55,.35);

          box-shadow:
            0 25px 60px
            rgba(255,130,40,.12);
        }


        /* =====================================
           IMAGE
        ===================================== */

        .blog-image-wrapper {
          position: relative;

          height: 220px;

          overflow: hidden;
        }


        .blog-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform .6s ease;
        }


        .blog-card:hover
        .blog-image {
          transform:
            scale(1.08);
        }


        /* =====================================
           IMAGE OVERLAY
        ===================================== */

        .blog-image-wrapper::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0,0,0,.45),
              transparent 55%
            );

          pointer-events: none;
        }


        /* =====================================
           CATEGORY
        ===================================== */

        .blog-category {
          position: absolute;

          z-index: 2;

          left: 16px;

          bottom: 15px;

          display: inline-flex;

          align-items: center;

          gap: 6px;

          padding:
            7px 12px;

          border-radius: 30px;

          background:
            rgba(0,0,0,.72);

          backdrop-filter:
            blur(8px);

          color:
            #ffc05a;

          border:
            1px solid
            rgba(255,255,255,.10);

          font-size: 9px;

          letter-spacing: 1.5px;
        }


        .blog-category svg {
          font-size: 14px;
        }


        /* =====================================
           CONTENT
        ===================================== */

        .blog-content {
          padding: 25px;
        }


        /* =====================================
           DATE
        ===================================== */

        .blog-date {
          display: flex;

          align-items: center;

          gap: 6px;

          color:
            var(--blog-date);

          font-size: 11px;

          margin-bottom: 13px;
        }


        .blog-date svg {
          font-size: 15px;

          color: #f59e0b;
        }


        /* =====================================
           TITLE
        ===================================== */

        .blog-content h2 {
          margin:
            0 0 13px;

          color:
            var(--blog-title);

          font-size: 20px;

          line-height: 1.4;

          transition:
            color .3s ease;
        }


        .blog-card:hover
        .blog-content h2 {
          color:
            #f59e0b;
        }


        /* =====================================
           DESCRIPTION
        ===================================== */

        .blog-content p {
          margin:
            0 0 22px;

          color:
            var(--blog-muted);

          font-size: 12px;

          line-height: 1.8;
        }


        /* =====================================
           READ MORE
        ===================================== */

        .blog-read {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color:
            var(--blog-title);

          text-decoration: none;

          font-size: 12px;

          font-weight: 600;

          transition:
            .3s ease;
        }


        .blog-read svg {
          font-size: 17px;

          transition:
            transform .3s ease;
        }


        .blog-read:hover {
          color:
            #f59e0b;
        }


        .blog-read:hover svg {
          transform:
            translateX(5px);
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 950px) {

          .blog-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        @media (max-width: 600px) {

          .blog-page {
            padding:
              0 15px 60px;
          }


          .blog-hero {
            min-height: 430px;

            margin:
              0 -15px 45px;

            padding:
              100px 18px 50px;
          }


          .blog-hero h1 {
            font-size: 50px;
          }


          .blog-hero p {
            font-size: 13px;
          }


          .blog-grid {
            grid-template-columns:
              1fr;

            gap: 18px;
          }


          .blog-image-wrapper {
            height: 210px;
          }


          .blog-content {
            padding: 21px;
          }


          .blog-content h2 {
            font-size: 19px;
          }

        }


        @media (max-width: 400px) {

          .blog-hero h1 {
            font-size: 44px;
          }

        }

      `}</style>


      <section className="blog-page">

        {/* =====================================
            HERO
        ===================================== */}

        <div className="blog-hero">

          <div className="blog-hero-content">

            <div className="blog-label">

              <AutoAwesome />

              ROHIL DIGITAL SPARK MEDIA

            </div>


            <h1>
              Our Blog
            </h1>


            <p>
              Explore digital marketing insights,
              strategies, trends and ideas to help
              your business grow in the digital world.
            </p>

          </div>

        </div>


        {/* =====================================
            BLOGS
        ===================================== */}

        <div className="blog-container">

          <div className="blog-grid">

            {blogs.map((blog, index) => (

              <article
                className="blog-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="blog-image-wrapper">

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />


                  <span className="blog-category">

                    {blog.icon}

                    {blog.category}

                  </span>

                </div>


                {/* CONTENT */}

                <div className="blog-content">

                  <span className="blog-date">

                    <CalendarMonth />

                    {blog.date}

                  </span>


                  <h2>
                    {blog.title}
                  </h2>


                  <p>
                    {blog.text}
                  </p>


                  <Link
                    to="/contact"
                    className="blog-read"
                  >

                    Read More

                    <ArrowForward />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>
    </>
  );
}

export default Blog;