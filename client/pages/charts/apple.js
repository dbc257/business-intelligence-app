import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ChartsAppleContent from "../../components/Charts/ChartsAppleContent";
import Footer from "../../components/Layouts/Footer";

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Charts"
          breadcrumbTextOne="Explore"
          breadcrumbTextTwo="Apple, Inc."
          breadcrumbUrl="/explore"
        />
        <ChartsAppleContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Charts;
