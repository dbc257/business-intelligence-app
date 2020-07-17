import React, { Component } from 'react';

class FeaturedService extends Component {
    render() {
        return (
            <section className="software-section pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="software-content">
                                <span>Our Featured Services</span>
                                <h2>Software Developement Services</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy text.</p>

                                <ul className="features-list">
                                    <li>
                                        <span>Software Development</span>
                                    </li>
                                    <li>
                                        <span>Automatic Optimization</span>
                                    </li>
                                    <li>
                                        <span>Applicatication Services</span>
                                    </li>
                                    <li>
                                        <span>IT Security Services</span>
                                    </li>
                                    <li>
                                        <span>Data Analytics</span>
                                    </li>
                                    <li>
                                        <span>System Integration Service</span>
                                    </li>
                                    <li>
                                        <span>Help Desk Services</span>
                                    </li>
                                    <li>
                                        <span>API Integration Service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="software-image">
                                <img src="/images/software.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedService;