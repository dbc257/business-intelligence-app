import React, { Component } from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ChartsFacebook2018 from "../../../components/Charts/ChartsFacebook2018";
import Footer from "../../../components/Layouts/Footer";

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
                <ChartsFacebook2018 />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Charts;
