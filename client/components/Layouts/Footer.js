import React, { Component } from "react";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <React.Fragment>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>&copy; {currentYear} Business Intelligence App</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
