// import React from "react";
// import Header from "./Pages/Header";
// import HomeScreen from "./Pages/HomeScreen";
// import AboutUs from "./Pages/AboutUs";
// import Footer from "./Pages/Footer";
// function App() {
//   return (
//     <>
//       <Header />
//       <HomeScreen />
//       <AboutUs />
//       <Footer />
//       {/* Your other website content */}
//     </>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Pages/Header";
import HomeScreen from "./Pages/HomeScreen";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import Seo from "./Pages/Seo";
import GoogleAds from "./Pages/GoogleAds";
import MetaAds from "./Pages/MetaAds";
import SocialMedia from "./Pages/SocialMedia";
import Branding from "./Pages/Branding";
import AI from "./Pages/AI";
import OurWork from "./Pages/OurWork";
import Blog from "./Blog";
import WhyUs from "./Pages/WhyUs";
import Pricing from "./Pages/Pricing";
import Call from "./Pages/Call";
import BookConsultation from "./Pages/BookConsultation";
import OurApproach from "./Pages/Discover/OurApproach";
import Insights from "./Pages/Discover/Insights";
import FAQs from "./Pages/Discover/FAQs";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<HomeScreen />}
        />

        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/seo"
          element={<Seo />}
        />
        <Route
          path="/google-ads"
          element={<GoogleAds />}
        />
        <Route
          path="/meta-ads"
          element={<MetaAds />}
        />
        <Route
          path="/social-media"
          element={<SocialMedia />}
        />
        <Route
          path="/branding"
          element={<Branding />}
        />
        <Route
          path="/ai"
          element={<AI />}
        />
        <Route
          path="/call"
          element={<Call />}
        />
        <Route
          path="/our-work"
          element={<OurWork />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
        <Route
          path="/why-us"
          element={<WhyUs />}
        />
        <Route
          path="/pricing"
          element={<Pricing />}
        />
        <Route
          path="/book-consultation"
          element={<BookConsultation />}
        />
        <Route
  path="/our-approach"
  element={<OurApproach />}
/>
<Route
  path="/insights"
  element={<Insights />}
/>
<Route
  path="/faq"
  element={<FAQs />}
/>
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;