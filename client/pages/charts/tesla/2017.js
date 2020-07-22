import React, { Component } from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ChartsTesla2017 from "../../../components/Charts/ChartsTesla2017";
import Footer from "../../../components/Layouts/Footer";

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
                <ChartsTesla2017 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Charts;