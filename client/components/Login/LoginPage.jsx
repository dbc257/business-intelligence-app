// import React from "react";
import "../scss/LoginPage.scss";
import { Login } from "./login/index";
import { connect } from "react-redux";
import * as actionCreators from "../../store/creators/actionCreators";
import React from "react";
import "../scss/LoginPage.scss";
import { Login } from "./login/index";
import { connect } from "react-redux";
import * as actionCreators from "../../store/creators/actionCreators";
// import { setAuthenticationHeader } from "../../utils/Auth";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            <Login
              containerRef={(ref) => (this.current = ref)}
              history={this.props.history}
              onAuthenticated={this.props.onAuthenticated}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch(actionCreators.authenticated(true)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
