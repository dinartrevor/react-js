import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Carousel from "../../components/carousel/Carousel";
import Why from "../../components/why/Why";
import Banner from "../../components/banner/Banner";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";

const Index = () => {
  return (
    <>
      <Navbar fix={true} />
      <Sidebar />
      <Hero showbtn={true} />
      <Services />
      <Why />
      {<Carousel />}
      <Banner />
      <Faq />
      <Footer />
    </>
  );
};

export default Index;
