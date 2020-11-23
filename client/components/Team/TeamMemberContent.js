import React, { Component } from "react";
import Link from "next/link";

class TeamMemberContent extends Component {
  render() {
    return (
      <section className="team-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Our Experts</span>
            <h2>Meet Our Leadership Preparing For Your Success</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team1.jpg" alt="team" />
                  <div className="team-social">
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Thomas Edison</h3>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team2.jpg" alt="team" />
                  <div className="team-social">
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Louis Pasteur</h3>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-team-item">
                <div className="team-image">
                  <img src="/images/team/team3.jpg" alt="team" />
                  <div className="team-social">
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="#">
                      <a target="_blank">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="team-content">
                  <h3>Pierre Curie</h3>
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TeamMemberContent;
