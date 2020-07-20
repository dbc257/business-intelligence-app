import React, { Component } from "react";
import Link from "next/link";

class TeamMember extends Component {
  render() {
    return (
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Experts</span>
            <h2>Meet The Developers</h2>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team1.jpg" alt="team" />

                  <div className="team-social">
                    <Link href="//linkedin.com/in/david-c-48287133/">
                      <a target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </Link>

                    <Link href="//github.com/dbc257">
                      <a target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </Link>

                    <Link href="//davidcarlisle.me">
                      <a target="_blank">
                        <i className="fa fa-link"></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="team-content">
                  <h3>David Carlisle</h3>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team2.jpg" alt="team" />

                  <div className="team-social">
                    <Link href="//linkedin.com/in/victorpetsev/">
                      <a target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </Link>

                    <Link href="//github.com/VPetsev/">
                      <a target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </Link>

                    <Link href="//vpetsev.com">
                      <a target="_blank">
                        <i className="fa fa-link"></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Victor Petsev</h3>
                  <span>Software Developer</span>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team3.jpg" alt="team" />

                  <div className="team-social">
                    <Link href="//linkedin.com/in/travis-wright-43706b41/">
                      <a target="_blank">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </Link>

                    <Link href="//github.com/sivart-wright">
                      <a target="_blank">
                        <i className="fab fa-github"></i>
                      </a>
                    </Link>

                    <Link href="//sivart-wright.github.io/portfolio_/">
                      <a target="_blank">
                        <i className="fa fa-link"></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="team-content">
                  <h3>Travis Wright</h3>
                  <span>Software Developer</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default TeamMember;
