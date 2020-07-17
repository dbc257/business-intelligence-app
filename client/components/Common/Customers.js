import React, { Component } from 'react';
import Link from 'next/link';

class Customers extends Component {
    render() {
        return (
            <div className="partner-section pt-100 pb-70">
                <div className="container">
                    <div className="partner-title">
                        <span>Customer</span>
                        <h2>Discover Customer Successful Stories</h2>
                    </div>

                    <div className="partner-list">
                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner1.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner2.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner3.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner4.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner5.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner5.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner6.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner7.png" alt="image" />
                                </a>
                            </Link>
                        </div>

                        <div className="partner-item">
                            <Link href="/partner">
                                <a>
                                    <img src="/images/partner/partner8.png" alt="image" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="partner-shape">
                    <img src="/images/shape/partnar-shape-1.png" alt="main-image" />
                </div>
                <div className="partner-shape-img1">
                    <img src="/images/shape/partnar-shape-2.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default Customers;