import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeFour/MainBanner";
import AboutUs from "../components/HomeFour/AboutUs";
import CustomerStyleTwo from "../components/Common/CustomerStyleTwo";
import Footer from "../components/Layouts/Footer";
import { connect } from "react-redux";
import { authenticated } from "../store/login/action";
import { wrapper } from "../store/store";

class Index4 extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MainBanner />
        <AboutUs />
        <CustomerStyleTwo />
        <Footer />
      </React.Fragment>
    );
  }
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(authenticated(true));
  }
);

export default connect((state) => state)(Index4);