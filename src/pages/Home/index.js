import React from "react";

import Navbar from "../../components/Navbar";
import Homee from "../../components/Homee";
import OurServices from "../../components/OurServices";
import Testimonials from "../../components/Testimonials";
import Faq from "../../components/Faq";
import WhyUs from "../../components/WhyUs";
import BonusPage from "../../components/BonusPage";
import Footer from "../../components/Footer";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Homee />
      <OurServices />
      <WhyUs />
      <Testimonials />
      <BonusPage />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
