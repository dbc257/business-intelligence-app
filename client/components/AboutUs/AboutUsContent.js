import React, { Component } from "react";
import Link from "next/link";

class AboutUsContent extends Component {
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
                <p>
                  Users are able to display data through intuitive and
                  insightful charts at the click of a button.
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
                  <li>
                    <i className="flaticon-tick"></i>
                    Pie Charts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUsContent;
