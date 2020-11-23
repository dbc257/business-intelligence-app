import React from "react";
import Router from "next/router";

class RegisterContent extends React.Component {
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
    fetch("https://bi-cube.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.user),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        Router.push("/login");
      });
  };

  render() {
    return (
      <div className="subscribe-content-area mb-0">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="subscribe-image">
              <img src="/images/subscribe.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="subscribe-content">
              <h2>Register</h2>
            </div>
            <div className="newsletter-form">
              <div>
                <input
                  onChange={this.handleRegister}
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="input-newsletter"
                  required
                />
              </div>
              <br/>
              <div className="newsletter-form">
                <input
                  onChange={this.handleRegister}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-newsletter"
                  required
                />
              </div>
              <br/>
              <div className="newsletter-form">
                <button
                  onClick={this.handleRegisterPost}
                  type="submit"
                  className="submit-btn mt-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterContent;
