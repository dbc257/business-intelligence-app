// import React from "react";
// import "../scss/LoginPage.scss";
// import { Login } from "./login/index";
// import { connect } from "react-redux";
// import * as actionCreators from "../../store/creators/actionCreators";

import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import LoginContent from "../components/Login/LoginContent";
// import { setAuthenticationHeader } from "../../utils/Auth";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Login"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Login"
          breadcrumbUrl="/"
        />

        <LoginContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Login;
