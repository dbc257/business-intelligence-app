import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ExploreContent from "../components/Explore/ExploreContent";
import Footer from "../components/Layouts/Footer";

class Explore extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="Explore"
          breadcrumbTextOne="Home"
          breadcrumbTextTwo="Explore"
          breadcrumbUrl="/"
        />
        <ExploreContent />

        <Footer />
      </React.Fragment>
    );
  }
}

export default Explore;