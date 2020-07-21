import React, { Component } from "react";
import Link from "../../utils/ActiveLink";
// import { connect } from "react-redux";
import { setAuthenticationHeader } from "../../utils/Auth";
// import * as actionCreators from "../../store/creators/actionCreators";

class Navbar extends Component {
  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  // handleSignOut = () => {
  //   props.onAuthenticated(false);
  //   localStorage.removeItem("jsonwebtoken");
  //   localStorage.removeItem("jwt_access_token");
  //   setAuthenticationHeader(null);
  // };
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
                    <img
                      src="/images/logo-white.png"
                      className="white-logo"
                      alt="logo"
                    />{" "}
                    <label className="white-logo">BI Cube</label>
                    <img
                      src="/images/logo-white.png"
                      className="black-logo"
                      alt="logo"
                    />
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
                      <Link href="/" activeClassName="active">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/explore" activeClassName="active">
                        <a className="nav-link">Explore</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/charts/examples" activeClassName="active">
                        <a className="nav-link">Charts</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us" activeClassName="active">
                        <a className="nav-link">About Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/login" activeClassName="active">
                        <a className="nav-link">Login</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/register" activeClassName="active">
                        <a className="nav-link">Register</a>
                      </Link>
                    </li>

                    {/* <li className="nav-item">
                      <Link
                        href="/signout"
                        activeClassName="active"
                        type="button"
                        onClick={handleSignOut}
                      >
                        <a className="nav-link">Signout</a>
                      </Link>
                    </li> */}
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

// const mapStateToProps = (state) => {
//   return {
//     isLoggedIn: state.loginRed.isLoggedIn,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuthenticated: (isLoggedIn) =>
//       dispatch(actionCreators.authenticated(isLoggedIn)),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default Navbar;
