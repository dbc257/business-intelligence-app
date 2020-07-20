import React from "react";
import "../scss/LoginPage.scss";
import { Register } from "./login/index";
import { connect } from "react-redux";
import * as actionCreators from "../../store/creators/actionCreators";
// import { setAuthenticationHeader } from "../../utils/Auth";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  // changeState() {
  //   const { isLoggedIn } = this.state;

  //   if (isLoggedIn) {
  //     this.rightSide.classList.remove("right");
  //     this.rightSide.classList.add("left");
  //   } else {
  //     this.rightSide.classList.remove("left");
  //     this.rightSide.classList.add("right");
  //   }
  //   this.setState((prevState) => ({
  //     isLoggedIn: !prevState.isLoggedIn,
  //   }));
  // }

  render() {
    const { isLoggedIn } = this.state;
    // const current = isLoggedIn ? "Register" : "Login";
    // const currentActive = isLoggedIn ? "login" : "register";
    return (
      // <div className="wrapper">
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {!isLoggedIn && (
              <Register
                containerRef={(ref) => (this.current = ref)}
                history={this.props.history}
              />
            )}
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

// const RightSide = (props) => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);

// export default function Charts() {
//   return (
//     <div>
//       <Login />
//     </div>
//   );
// }
