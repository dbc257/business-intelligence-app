import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="data-service-section pb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Our Services</span>
                        <h2>Explore Our Data Services</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="data-services-item">
                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-big-data"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Big Data
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-science"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Data Science
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-document"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Managed Analytics
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>   
                        </div>
 
                        <div className="col-lg-4 col-md-6">
                            <div className="data-services-item">
                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-data-analytics"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Data Analytics
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-chart"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Business Intelligence
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-data"></i>
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>
                                                Data Management
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>   
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="data-service-image">
                                <img src="/images/data-service.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;