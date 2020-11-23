import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import TeamMember from "../components/Common/TeamMember";
import Footer from "../components/Layouts/Footer";

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
        <TeamMember />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;
