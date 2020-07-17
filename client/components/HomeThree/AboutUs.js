import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="/images/about.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Focused On Actionable Insights</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Professional Consultancy Service
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        24/7 Support Center
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Custom Service & Operation
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Advanced Advisory Team
                                    </li>
                                </ul>
                                
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        Read More <span></span>
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

export default AboutUs;