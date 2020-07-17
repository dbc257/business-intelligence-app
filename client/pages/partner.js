import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CustomerStyleTwo from '../components/Common/CustomerStyleTwo';
import Customers from '../components/Common/Customers';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Testimonial from '../components/Common/Testimonial';
import Footer from '../components/Layouts/Footer';

class Partner extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Partner" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Partner" 
                    breadcrumbUrl="/" 
                />
                <CustomerStyleTwo />
                <Customers />
                <div className="ptb-100">
                    <SubscribeStyleThree />
                </div>
                <Testimonial /> 
                <Footer />
            </React.Fragment>
        );
    }
}

export default Partner;