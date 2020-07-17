import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingContent from '../components/Pricing/PricingContent';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Pricing" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Pricing" 
                    breadcrumbUrl="/" 
                />
                <PricingContent />
                <div className="pb-100">
                    <SubscribeStyleThree />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;