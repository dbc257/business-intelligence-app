import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import RegisterContent from "../components/Register/RegisterContent";

class Register extends Component {
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
        <RegisterContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Register;
