import React, { Component } from "react";
import Link from "next/link";

class AboutUs extends Component {
  render() {
    return (
      <section className="about-section pb-100">
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
                <p>
                  We provide users a way to display their data through intuitive
                  and insightful charts at the click of a button.
                </p>

                <ul className="about-list">
                  <li>
                    <i className="flaticon-tick"></i>
                    Line Charts
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Bar Charts
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
