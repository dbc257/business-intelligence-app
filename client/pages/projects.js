import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsContent from '../components/Projects/ProjectsContent';
import FunFacts from '../components/Common/FunFacts';
import GetStartedProject from '../components/Common/GetStartedProject';
import Customers from '../components/Common/Customers';
import SubscribeStyleThree from '../components/Common/SubscribeStyleThree';
import Footer from '../components/Layouts/Footer';

class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Projects" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Projects" 
                    breadcrumbUrl="/" 
                />
                <ProjectsContent />
                <FunFacts />
                <div className="pb-100">
                    <GetStartedProject />
                </div>
                <Customers />
                <div className="ptb-100">
                    <SubscribeStyleThree />
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Projects;