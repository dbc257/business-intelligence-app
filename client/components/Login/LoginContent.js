// import React from "react";
import React, { Component } from "react";
// import loginImg from "../../public/images/login.svg";
import axios from "axios";
// import { connect } from "react-redux";
// import * as actionCreators from "../../../store/creators/actionCreators";
import { setAuthenticationHeader } from "../../utils/Auth";

class LoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleLogin = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleLoginPost = () => {
    axios
      .post("http://localhost:3001/api/login", {
        username: this.state.user.username,
        password: this.state.user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          // console.log(token);
          //   this.props.onAuthenticated(true);
          alert(response.data.message);
          // this.props.history.push("/");
        } else {
          alert(response.data.message);
          alert("response failed");
          this.props.state = {
            user: {
              ...this.state.user,
              password: "",
            },
          };
        }
      });
  };

  handleGuestPost = () => {
    axios.post("http://localhost:3001/api/guest-login", {}).then((response) => {
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("jsonwebtoken", token);
        setAuthenticationHeader(token);
        // console.log(token);
        // this.props.onAuthenticated(true);
        alert(response.data.message);
        // this.props.history.push("/");
      } else {
        alert(response.data.message);
        alert("response failed");
        this.props.state = {
          user: {
            ...this.state.user,
            password: "",
          },
        };
      }
    });
  };

  render() {
    return (
      // <h4>Login</h4>
      <div className="contact-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-image">
                <img src="/images/contact.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form">
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={this.handleLogin}
                          type="text"
                          name="username"
                          placeholder="Username"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <input
                          onChange={this.handleLogin}
                          type="password"
                          name="password"
                          placeholder="Password"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <button
                        onClick={this.handleLoginPost}
                        type="button"
                        type="submit"
                        className="submit-btn mt-2"
                      >
                        Login
                      </button>
                      <hr />
                      <button
                        onClick={this.handleGuestPost}
                        type="button"
                        type="submit"
                        className="submit-btn mt-2"
                      >
                        Guest Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
//   };
// };

// export default connect(null, mapDispatchToProps)(LoginJSX);

export default LoginContent;

/* <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          {/* <div className="image">
            <img alt="login" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleLogin}
                type="text"
                name="username"
                placeholder="username"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleLogin}
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
        </div>
        <button
          onClick={this.handleLoginPost}
          type="button"
          className="login-btn"
        >
          Login
        </button>
        <hr />
        <button
          onClick={this.handleGuestPost}
          type="button"
          className="login-btn"
        >
          Guest Login
        </button>
      </div> */
