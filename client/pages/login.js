import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";
import LoginContent from "../components/Login/LoginContent";
import { connect } from "react-redux";
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
  }
);

export default connect((state) => state)(Login);
