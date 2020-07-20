import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

class Explore extends Component {
    render() {
        return (
            <React.Fragment >
                <Navbar />
                <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Explore Our Charts</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-big-data"></i>
                                </div>

                                <h3>Tesla</h3>
                                    <p>Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems in the United States and internationally.</p>

                                <Link href="/charts/[pid]" as="/charts/tesla">
                                    <a className="service-btn">
                                        See Charts
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

                                <h3>Facebook</h3>
                                    <p>Facebook, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, and in-home devices worldwide.</p>

                                <Link href="/charts/[pid]" as="/charts/facebook">
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
                                <h3>Apple</h3>
                                    <p>Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services.</p>

                                    <Link href="/charts/[pid]" as="/charts/apple">
                                    <a className="service-btn">
                                        Read More
                                        <i className="flaticon-right"></i>
                                    </a>
                                    
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="section-title">
                            <h2>Or...</h2>
                            <br/>
                        <span>Upload your own data</span>
                    </div>
                </div>
            </section>
                <Footer />
            </React.Fragment >
        )
    }
}

export default Explore;