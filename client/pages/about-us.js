import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import FunFacts from "../components/Common/FunFacts";
import GetStartedProject from "../components/Common/GetStartedProject";
// import Testimonial from '../components/Common/Testimonial';
import TeamMember from "../components/Common/TeamMember";
// import Customers from "../components/Common/Customers";
import Footer from "../components/Layouts/Footer";
import { connect } from "react-redux";
// import { authenticated } from "../store/login/action";
import { bindActionCreators } from "redux";
import { authenticated } from "../store/login/action";
import { wrapper } from "../store/store";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="About Us"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="About Us"
          breadcrumbUrl="/"
        />
        {/* <AboutUsContent /> */}
        {/* <FunFacts />

        <div className="pb-100">
          <GetStartedProject />
        </div> */}

        {/* <Testimonial /> */}
        <TeamMember />
        {/* <Customers /> */}
        <Footer />
      </React.Fragment>
    );
  }
}
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(authenticated(true));
    // store.dispatch(addCount())
  }
);

export default connect((state) => state)(AboutUs);
// export default AboutUs;
