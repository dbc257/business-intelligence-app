// import React from "react";
import "../scss/LoginPage.scss";
import { Login } from "./login/index";
// import { connect } from "react-redux";
// import * as actionCreators from "../../store/creators/actionCreators";

import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import LoginPage from "../components/Login/LoginPage";
// import { setAuthenticationHeader } from "../../utils/Auth";

class Login extends Component {
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

        <LoginPage />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
