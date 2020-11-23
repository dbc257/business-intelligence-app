import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
import Button from "react-bootstrap/Button";
import { setAuthenticationHeader } from "../../utils/Auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticated } from "../../store/login/action";

class Navbar extends Component {
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  handleSignOut = () => {
    this.props.authenticated(false);
    localStorage.removeItem("jsonwebtoken");
    localStorage.removeItem("jwt_access_token");
    setAuthenticationHeader(null);
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <React.Fragment>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <div className="white-logo">
                      <img
                        src="/images/logo-white.png"
                        alt="logo"
                      />{" "}
                      <label>BI App</label>
                    </div>
                    <div className="black-logo">
                      <img
                        src="/images/logo-white.png"
                        alt="logo"
                      />{" "}
                      <label>BI App</label>
                    </div>
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Button variant="link" size="sm" className="nav-link">
                        <Link href="/" activeClassName="active">
                          <a className="nav-link">Home</a>
                        </Link>
                      </Button>
                    </li>
                    <li className="nav-item">
                      <Button variant="link" size="sm" className="nav-link">
                        <Link href="/explore" activeClassName="active">
                          <a className="nav-link">Explore</a>
                        </Link>
                      </Button>
                    </li>
                    <li className="nav-item">
                      <Button variant="link" size="sm" className="nav-link">
                        <Link href="/about-us" activeClassName="active">
                          <a className="nav-link">About Us</a>
                        </Link>
                      </Button>
                    </li>
                    {this.props.isLoggedIn == false ? (
                      <li className="nav-item">
                        <Button variant="link" size="sm" className="nav-link">
                          <Link href="/login" activeClassName="active">
                            <a className="nav-link">Login</a>
                          </Link>
                        </Button>
                      </li>
                    ) : null}
                    {this.props.isLoggedIn == false ? (
                      <li className="nav-item">
                        <Button variant="link" size="sm" className="nav-link">
                          <Link href="/register" activeClassName="active">
                            <a className="nav-link">Register</a>
                          </Link>
                        </Button>
                      </li>
                    ) : (
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <Button
                            variant="link"
                            size="sm"
                            onClick={this.handleSignOut}
                            className="nav-link"
                          >
                            <a className="nav-link">Signout</a>
                          </Button>
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    authenticated: bindActionCreators(authenticated, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
