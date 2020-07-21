import React, { Component } from "react";
// import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ChartsContent from "../components/Charts/ChartsContent";
import Footer from "../components/Layouts/Footer";

class Charts extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Charts"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Charts"
          breadcrumbUrl="/"
        />
        <ChartsContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Charts;
