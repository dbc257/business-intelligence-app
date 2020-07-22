import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ChartsTeslaContent from "../../components/Charts/ChartsTeslaContent";
import Footer from "../../components/Layouts/Footer";

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Charts"
          breadcrumbTextOne="Explore"
          breadcrumbTextTwo="Tesla, Inc."
          breadcrumbUrl="/explore"
        />
        <ChartsTeslaContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Charts;
