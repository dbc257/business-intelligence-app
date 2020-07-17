import React, { Component } from 'react';

class GetStartedProject extends Component {
    render() {
        return (
            <section className="productive-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="productive-content">
                                <span>Let’s Get Started</span>
                                <h3>Are you ready for a better, more productive business </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices Lorem Ipsum is simply dummy text.</p>

                                <div className="productive-btn">
                                    <a className="productive-btn" href="/projects">
                                        Get Started Project 
                                        <span></span>
                                    </a>
                                    <a href="/contact" className="productive-btn-one">
                                        Contact With Us
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="productive-image">
                                <img src="/images/productive.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GetStartedProject;