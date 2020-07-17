import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1>Big Data And Analytics</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    About Us
                                                    <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/about-us">
                                                <a className="default-btn" href="/contact">
                                                    Contact Us 
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image"> 
                                        {/* Shape images */}
                                        <ReactWOW animation='fadeInUp' delay='0.2s'>
                                            <img src="/images/home-two/home-two-shape1.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                            <img src="/images/home-two/home-two-shape2.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInRight' delay='0.2s'>
                                            <img src="/images/home-two/home-two-shape3.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='0.2s'>
                                            <img src="/images/home-two/home-two-shape4.png" alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='zoomIn' delay='0.2s'>
                                            <img src="/images/home-two/home-two-shape5.png" alt="image" />
                                        </ReactWOW>

                                        {/* Main image */}
                                        <ReactWOW animation='zoomIn' delay='0.2s'>
                                            <img src="/images/home-two/main-image2.png" alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="circle-img">
                                        <img src="/images/home-two/home-two-shape6.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src="/images/main-banner-shape/home-shape-2.png" alt="main-image" />
                </div>
                <div className="shape-dot">
                    <img src="/images/main-banner-shape/main-banner-dot.png" alt="main-image" />
                </div>
            </div>
        );
    }
}

export default MainBanner;