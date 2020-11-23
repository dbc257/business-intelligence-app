import React, { Component } from "react";
import Link from "next/link";

class ExploreContent extends Component {
  render() {
    return (
      <section className="services-section pt-100 pb-70 chart-options">
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Charts</h2>
          </div>
          <div className="row">
            <Link href="/charts/[company]" as="/charts/tesla">
              <div className="col-lg-4 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-big-data"></i>
                  </div>
                  <h3 className="service-btn">Tesla</h3>
                  <p className="service-btn">
                    Tesla, Inc. designs, develops, manufactures, leases, and sells
                    electric vehicles, and energy generation and storage systems
                    in the United States and internationally.
                  </p>
                  <a className="service-btn">
                    See Charts
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>
            <Link href="/charts/[company]" as="/charts/facebook">
              <div className="col-lg-4 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-data-analytics"></i>
                  </div>
                  <h3 className="service-btn">Facebook</h3>
                  <p className="service-btn">
                    Facebook, Inc. develops products that enable people to connect
                    and share with friends and family through mobile devices,
                    personal computers, and in-home devices worldwide.
                  </p>
                  <a className="service-btn">
                    See Charts
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>
            <Link href="/charts/[company]" as="/charts/apple">
              <div className="col-lg-4 col-md-6">
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-document"></i>
                  </div>
                  <h3 className="service-btn">Apple</h3>
                  <p className="service-btn">
                    Apple Inc. designs, manufactures, and markets smartphones,
                    personal computers, tablets, wearables, and accessories
                    worldwide. It also sells various related services.
                  </p>
                  <a className="service-btn">
                    See Charts
                    <i className="flaticon-right"></i>
                  </a>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ExploreContent;