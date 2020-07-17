import React, { Component } from 'react';
import Link from 'next/link';

class PricingContent extends Component {
    render() {
        return (
            <div className="pricing-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Basic</h3>
                                    <p>That is a long established fact that a reader will be distracted.</p>
                                </div>

                                <div className="price">
                                    $29<span>/month</span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Managed Analytics
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Business Intelligence
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        International payments
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Data Management
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Social Integration
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Relevant App Content
                                    </li>
                                </ul>

                                <div className="price-btn">
                                    <Link href="#">
                                        <a className="price-btn-one">Choose This Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Advanced</h3>
                                    <p>That is a long established fact that a reader will be distracted.</p>
                                </div>

                                <div className="price">
                                    $59<span>/month</span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Managed Analytics
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Business Intelligence
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        International payments
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Data Management
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Social Integration
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Relevant App Content
                                    </li>
                                </ul>

                                <div className="price-btn">
                                    <Link href="#">
                                        <a className="price-btn-one">Choose This Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Premium</h3>
                                    <p>That is a long established fact that a reader will be distracted.</p>
                                </div>

                                <div className="price">
                                    $99<span>/month</span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Managed Analytics
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i>
                                        Business Intelligence
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        International payments
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Data Management
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Social Integration
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> 
                                        Relevant App Content
                                    </li>
                                </ul>

                               <div className="price-btn">
                                    <Link href="#">
                                        <a className="price-btn-one">Choose This Plan</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PricingContent;