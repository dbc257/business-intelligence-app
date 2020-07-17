import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Expolre Our Data Services</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-big-data"></i>
                                </div>

                                <h3>Big Data</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-analytics"></i>
                                </div>

                                <h3>Data Analytics</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-document"></i>
                                </div>
                                <h3>Managed Analytics</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-chart"></i>
                                </div>
                                <h3>Business Intelligence</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-science"></i>
                                </div>
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-data-management"></i>
                                </div>
                                <h3>Data Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</p>

                                <Link href="/service-details">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesContent;