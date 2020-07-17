import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogCard from '../components/Blog/BlogCard';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Blog Grid" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Blog Grid" 
                    breadcrumbUrl="/" 
                />
                <BlogCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;