import React from "react";
import Router from "next/router";
import axios from "axios";
import { setAuthenticationHeader } from "../../utils/Auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticated } from "../../store/login/action";

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
      .post("https://bi-cube.herokuapp.com/api/login", {
        username: this.state.user.username,
        password: this.state.user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          this.props.authenticated(true);
          alert(response.data.message);
          Router.push("/");
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
    axios.post("https://bi-cube.herokuapp.com/api/guest-login", {}).then((response) => {
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("jsonwebtoken", token);
        setAuthenticationHeader(token);
        this.props.authenticated(true);
        alert(response.data.message);
        Router.push("/");
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
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="contact-image">
            <img src="/images/contact.png" alt="image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h2>Login</h2>
          <br></br>
          <div className="contact-form">
            <div className="row">
              <div className="col-lg-10 col-md-10">
                <div className="newsletter-form">
                  <input
                    onChange={this.handleLogin}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    required
                  />
                </div>
                <br/>
                <div className="newsletter-form">
                  <input
                    onChange={this.handleLogin}
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    required
                  />
                </div>
                <br/>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="contact-form">
                      <button
                        onClick={this.handleLoginPost}
                        type="button"
                        type="submit"
                        className="submit-btn mt-2"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-lg-10 col-md-10">
              <div className="contact-form">
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
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticated: bindActionCreators(authenticated, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(LoginContent);