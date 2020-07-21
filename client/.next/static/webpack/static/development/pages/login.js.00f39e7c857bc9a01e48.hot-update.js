webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/LoginContent.js":
/*!******************************************!*\
  !*** ./components/Login/LoginContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Auth */ \"./utils/Auth.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/davidcarlisle1/repos/business-intelligence-app/client/components/Login/LoginContent.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// import React from \"react\";\n // import loginImg from \"../../public/images/login.svg\";\n\n // import { connect } from \"react-redux\";\n// import * as actionCreators from \"../../../store/creators/actionCreators\";\n\n\n\nvar LoginContent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LoginContent, _React$Component);\n\n  var _super = _createSuper(LoginContent);\n\n  function LoginContent(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LoginContent);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLogin\", function (e) {\n      _this.setState({\n        user: _objectSpread(_objectSpread({}, _this.state.user), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value))\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLoginPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/login\", {\n        username: _this.state.user.username,\n        password: _this.state.user.password\n      }).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token); // console.log(token);\n          //   this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleGuestPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/guest-login\", {}).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token); // console.log(token);\n          // this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    _this.state = {\n      user: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LoginContent, [{\n    key: \"render\",\n    value: function render() {\n      var _jsx, _jsx2;\n\n      return (// <h4>Login</h4>\n        __jsx(\"div\", {\n          className: \"contact-section ptb-100\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"container\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 9\n          }\n        }, __jsx(\"div\", {\n          className: \"row align-items-center\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"contact-image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 15\n          }\n        }, __jsx(\"img\", {\n          src: \"/images/contact.png\",\n          alt: \"image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 17\n          }\n        }))), __jsx(\"div\", {\n          className: \"col-lg-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"contact-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 15\n          }\n        }, __jsx(\"form\", {\n          id: \"contactForm\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 17\n          }\n        }, __jsx(\"div\", {\n          className: \"row\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 19\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-6 col-md-8\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 21\n          }\n        }, __jsx(\"div\", {\n          className: \"form-group\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 23\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"text\",\n          name: \"username\",\n          placeholder: \"Username\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 25\n          }\n        }))), __jsx(\"div\", {\n          className: \"col-lg-6 col-md-8\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 21\n          }\n        }, __jsx(\"div\", {\n          className: \"form-group\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 23\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 25\n          }\n        }))), __jsx(\"div\", {\n          className: \"col-lg-12 col-md-12\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 21\n          }\n        }, __jsx(\"button\", (_jsx = {\n          onClick: this.handleLoginPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 23\n        }), _jsx), \"Login\"), __jsx(\"hr\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 23\n          }\n        }), __jsx(\"button\", (_jsx2 = {\n          onClick: this.handleGuestPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 23\n        }), _jsx2), \"Guest Login\")))))))))\n      );\n    }\n  }]);\n\n  return LoginContent;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const mapDispatchToProps = (dispatch) => {\n//   return {\n//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),\n//   };\n// };\n// export default connect(null, mapDispatchToProps)(LoginJSX);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginContent);\n/* <div className=\"base-container\" ref={this.props.containerRef}>\n        <div className=\"header\">Login</div>\n        <div className=\"content\">\n          {/* <div className=\"image\">\n            <img alt=\"login\" src={loginImg} />\n          </div>\n          <div className=\"form\">\n            <div className=\"form-group\">\n              <label htmlFor=\"username\">Username</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"text\"\n                name=\"username\"\n                placeholder=\"username\"\n                required\n              />\n              <label htmlFor=\"password\">Password</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"password\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <button\n          onClick={this.handleLoginPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Login\n        </button>\n        <hr />\n        <button\n          onClick={this.handleGuestPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Guest Login\n        </button>\n      </div> */\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcz8xNTY2Il0sIm5hbWVzIjpbIkxvZ2luQ29udGVudCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidXNlciIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0QXV0aGVudGljYXRpb25IZWFkZXIiLCJhbGVydCIsIm1lc3NhZ2UiLCJoYW5kbGVMb2dpbiIsImhhbmRsZUxvZ2luUG9zdCIsImhhbmRsZUd1ZXN0UG9zdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FFQTtBQUNBOztBQUNBOztJQUVNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixzTkFPTCxVQUFDQyxDQUFELEVBQU87QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFlBQUksa0NBQ0MsTUFBS0MsS0FBTCxDQUFXRCxJQURaLHFHQUVERixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsSUFGUixFQUVlTCxDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FGeEI7QUFEUSxPQUFkO0FBTUQsS0Fka0I7O0FBQUEsME5BZ0JELFlBQU07QUFDdEJDLGtEQUFLLENBQ0ZDLElBREgsQ0FDUSxpQ0FEUixFQUMyQztBQUN2Q0MsZ0JBQVEsRUFBRSxNQUFLTixLQUFMLENBQVdELElBQVgsQ0FBZ0JPLFFBRGE7QUFFdkNDLGdCQUFRLEVBQUUsTUFBS1AsS0FBTCxDQUFXRCxJQUFYLENBQWdCUTtBQUZhLE9BRDNDLEVBS0dDLElBTEgsQ0FLUSxVQUFDQyxRQUFELEVBQWM7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LENBUEYsQ0FERixDQURGO0FBRkY7QUFrRUQ7Ozs7RUF2SXdCQyw0Q0FBSyxDQUFDQyxTLEdBMElqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVlM0IsMkVBQWY7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGxvZ2luSW1nIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ2luLnN2Z1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2NyZWF0b3JzL2FjdGlvbkNyZWF0b3JzXCI7XG5pbXBvcnQgeyBzZXRBdXRoZW50aWNhdGlvbkhlYWRlciB9IGZyb20gXCIuLi8uLi91dGlscy9BdXRoXCI7XG5cbmNsYXNzIExvZ2luQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUxvZ2luUG9zdCA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlci51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUudXNlci5wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImpzb253ZWJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgc2V0QXV0aGVudGljYXRpb25IZWFkZXIodG9rZW4pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgICAgICAvLyAgIHRoaXMucHJvcHMub25BdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgYWxlcnQoXCJyZXNwb25zZSBmYWlsZWRcIik7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlR3Vlc3RQb3N0ID0gKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2d1ZXN0LWxvZ2luXCIsIHt9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwianNvbndlYnRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgc2V0QXV0aGVudGljYXRpb25IZWFkZXIodG9rZW4pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgIC8vIHRoaXMucHJvcHMub25BdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBhbGVydChcInJlc3BvbnNlIGZhaWxlZFwiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9IHtcbiAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGg0PkxvZ2luPC9oND5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1zZWN0aW9uIHB0Yi0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NvbnRhY3QucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJjb250YWN0Rm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5Qb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG4gbXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUd1ZXN0UG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnRuIG10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIEd1ZXN0IExvZ2luXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgb25BdXRoZW50aWNhdGVkOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5hdXRoZW50aWNhdGVkKHRydWUpKSxcbi8vICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkpTWCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29udGVudDtcblxuLyogPGRpdiBjbGFzc05hbWU9XCJiYXNlLWNvbnRhaW5lclwiIHJlZj17dGhpcy5wcm9wcy5jb250YWluZXJSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPkxvZ2luPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIGFsdD1cImxvZ2luXCIgc3JjPXtsb2dpbkltZ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5Qb3N0fVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiXG4gICAgICAgID5cbiAgICAgICAgICBMb2dpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUd1ZXN0UG9zdH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1idG5cIlxuICAgICAgICA+XG4gICAgICAgICAgR3Vlc3QgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gKi9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login/LoginContent.js\n");

/***/ })

})