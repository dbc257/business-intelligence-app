import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFour/MainBanner";
import OurServices from "../components/HomeFour/OurServices";
import AboutUs from "../components/HomeFour/AboutUs";
// import FunFacts from "../components/Common/FunFacts";
// import SolutionsTab from "../components/Common/SolutionsTab";
// import FeaturedService from "../components/HomeFour/FeaturedService";
// import Testimonial from '../components/Common/Testimonial';
// import GetStartedProject from "../components/Common/GetStartedProject";
// import BlogPost from "../components/Common/BlogPost";
// import ContactForm from "../components/Contact/ContactForm";
// import CustomerStyleTwo from "../components/Common/CustomerStyleTwo";
import Footer from "../components/Layouts/Footer";

class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        <OurServices />
        <AboutUs />
        {/* <FunFacts /> */}
        {/* <SolutionsTab /> */}
        {/* <FeaturedService /> */}
        {/* <Testimonial /> */}
        {/* <GetStartedProject /> */}
        {/* <BlogPost /> */}
        {/* <ContactForm /> */}
        {/* <CustomerStyleTwo /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index4;
