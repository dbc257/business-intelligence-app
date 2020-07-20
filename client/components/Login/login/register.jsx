import React from "react";
import loginImg from "../../../images/login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  handleRegister = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleRegisterPost = () => {
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.user),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        this.props.history.push("/login");
      });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img alt="register" src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleRegister}
                type="text"
                name="username"
                placeholder="username"
                required
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleRegister}
                type="password"
                name="password"
                placeholder="password"
                required
              />
            </div>
          </div>
          <div>
            <button
              onClick={this.handleRegisterPost}
              type="button"
              className="login-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
