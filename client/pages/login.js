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
import { connect } from "react-redux";
// import { setAuthenticationHeader } from "../../utils/Auth";
import { bindActionCreators } from "redux";
import { authenticated } from "../store/login/action";
import { wrapper } from "../store/store";

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

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(authenticated);
    // store.dispatch(addCount())
  }
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // isLoggedIn: bindActionCreators(authenticated, dispatch),
//     authenticated: bindActionCreators(authenticated(true), dispatch),
//     // startClock: bindActionCreators(startClock, dispatch),
//   };
// };
// export default Login;
export default connect((state) => state)(Login);
// export default connect(null, mapDispatchToProps)(Login);
