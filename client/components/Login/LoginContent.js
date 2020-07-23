// import React from "react";
import React, { Component } from "react";
import Router from "next/router";
// import loginImg from "../../public/images/login.svg";
import axios from "axios";
// import { connect } from "react-redux";
// import * as actionCreators from "../../../store/creators/actionCreators";
import { setAuthenticationHeader } from "../../utils/Auth";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { authenticated } from "../../store/login/action";
// import { wrapper } from "../../store/store";

class LoginContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  // let authenticated = ({ authenticated}) => {
  //   return authenticated(true)
  // }

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
      .post("https://bi-cube.herokuapp.com//api/login", {
        username: this.state.user.username,
        password: this.state.user.password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem("jsonwebtoken", token);
          setAuthenticationHeader(token);
          console.log(token);
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
    axios.post("https://bi-cube.herokuapp.com//api/guest-login", {}).then((response) => {
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("jsonwebtoken", token);
        setAuthenticationHeader(token);
        console.log(token);
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
      // <h4>Login</h4>
      // <div className="contact-section ptb-100">
      //   <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="contact-image">
            <img src="/images/contact.png" alt="image" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h2>Login</h2>
          <br></br>

          {/* <div className="col-lg-6"> */}
          <div className="contact-form">
            {/* <form> */}
            <div className="row">
              <div className="col-lg-10 col-md-10">
                {/* <div className="form-group"> */}
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
                {/* </div> */}
                <br></br>

                {/* <div className="col-lg-10 col-md-10"> */}
                {/* <div className="form-group"> */}
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
                {/* </div> */}
                <br></br>
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
          {/* </form> */}
          <br></br>
          {/* <form> */}
          <div className="row">
            <div className="col-lg-10 col-md-10">
              <div className="contact-form">
                {/* <div className="newsletter-form"> */}
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

            {/* </form> */}
          </div>
        </div>
      </div>
      // </div>
      // </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isLoggedIn: state.login.isLoggedIn,
// });
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(authenticated(true));
//     // store.dispatch(addCount())
//   }
// );

const mapDispatchToProps = (dispatch) => {
  return {
    authenticated: bindActionCreators(authenticated, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(LoginContent);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
//   };
// };

// export default connect(null, mapDispatchToProps)(LoginContent);

// const mapStateToProps = (state) => ({
//   count: state.count.count,
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//   }
// }

// export default LoginContent;

// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { addCount } from '../store/count/action'

// const AddCount = ({ count, addCount }) => {
//   return (
//     <div>
//       <style jsx>{`
//         div {
//           padding: 0 0 20px 0;
//         }
//       `}</style>
//       <h1>
//         AddCount: <span>{count}</span>
//       </h1>
//       <button onClick={addCount}>Add To Count</button>
//     </div>
//   )
// }

// import { useEffect } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Page from '../components/Page'
// import { addCount } from '../store/count/action'
// import { wrapper } from '../store/store'
// import { serverRenderClock, startClock } from '../store/tick/action'

// const Other = (props) => {
//   useEffect(() => {
//     const timer = props.startClock()

//     return () => {
//       clearInterval(timer)
//     }
//   }, [props])

//   return <Page title="Other Page" linkTo="/" />
// }

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     store.dispatch(serverRenderClock(true))
//     store.dispatch(addCount())
//   }
// )

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//     startClock: bindActionCreators(startClock, dispatch),
//   }
// }

// export default connect(null, mapDispatchToProps)(Other)

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
