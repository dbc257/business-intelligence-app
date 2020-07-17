import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/Layouts/Footer';

class BlogDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Blog Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog Details" 
                    breadcrumbUrl="/" 
                />
                <BlogDetailsContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default BlogDetails;