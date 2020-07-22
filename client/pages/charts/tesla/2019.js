import React, { Component } from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ChartsTesla2019 from "../../../components/Charts/ChartsTesla2019"
import Footer from "../../../components/Layouts/Footer";

export default class Charts extends Component {
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
                <ChartTesla2019/>
                <Footer />
            </React.Fragment>
        );
    }
}
