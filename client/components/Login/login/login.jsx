import React from "react";
import loginImg from "../../../images/login.svg";
import axios from "axios";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/creators/actionCreators";
import { setAuthenticationHeader } from "../../../utils/Auth";

export class Login extends React.Component {
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
          this.props.onAuthenticated(true);
          alert(response.data.message);
          this.props.history.push("/cube-buttons");
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
        this.props.onAuthenticated(true);
        alert(response.data.message);
        this.props.history.push("/cube-buttons");
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
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
