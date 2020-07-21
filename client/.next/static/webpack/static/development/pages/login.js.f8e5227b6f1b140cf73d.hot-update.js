webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/LoginContent.js":
/*!******************************************!*\
  !*** ./components/Login/LoginContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Auth */ \"./utils/Auth.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/davidcarlisle1/repos/business-intelligence-app/client/components/Login/LoginContent.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// import React from \"react\";\n // import loginImg from \"../../public/images/login.svg\";\n\n // import { connect } from \"react-redux\";\n// import * as actionCreators from \"../../../store/creators/actionCreators\";\n\n\n\nvar LoginContent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LoginContent, _React$Component);\n\n  var _super = _createSuper(LoginContent);\n\n  function LoginContent(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LoginContent);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLogin\", function (e) {\n      _this.setState({\n        user: _objectSpread(_objectSpread({}, _this.state.user), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value))\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLoginPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/login\", {\n        username: _this.state.user.username,\n        password: _this.state.user.password\n      }).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token);\n          console.log(token); //   this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleGuestPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/guest-login\", {}).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token);\n          console.log(token); // this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    _this.state = {\n      user: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LoginContent, [{\n    key: \"render\",\n    value: function render() {\n      var _jsx, _jsx2;\n\n      return (// <h4>Login</h4>\n        // <div className=\"contact-section ptb-100\">\n        //   <div className=\"container\">\n        __jsx(\"div\", {\n          className: \"row align-items-center\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 9\n          }\n        }, __jsx(\"div\", {\n          className: \"contact-image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }\n        }, __jsx(\"img\", {\n          src: \"/images/contact.png\",\n          alt: \"image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }\n        }))), __jsx(\"div\", {\n          className: \"col-lg-6 col-md-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 9\n          }\n        }, __jsx(\"h2\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 11\n          }\n        }, \"Login\"), __jsx(\"div\", {\n          className: \"contact-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"row\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-10 col-md-10\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 15\n          }\n        }, __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 17\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"text\",\n          name: \"username\",\n          placeholder: \"Username\",\n          className: \"form-control\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 19\n          }\n        })), __jsx(\"br\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 17\n          }\n        }), __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 17\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          className: \"form-control\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 19\n          }\n        })), __jsx(\"br\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 17\n          }\n        }), __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 17\n          }\n        }, __jsx(\"button\", (_jsx = {\n          onClick: this.handleLoginPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 19\n        }), _jsx), \"Login\"))))), __jsx(\"br\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 11\n          }\n        }), __jsx(\"div\", {\n          className: \"contact-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"row\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-10 col-md-10\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 15\n          }\n        }, __jsx(\"button\", (_jsx2 = {\n          onClick: this.handleGuestPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 147,\n          columnNumber: 17\n        }), _jsx2), \"Guest Login\")))))) // </div>\n        // </div>\n\n      );\n    }\n  }]);\n\n  return LoginContent;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const mapDispatchToProps = (dispatch) => {\n//   return {\n//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),\n//   };\n// };\n// export default connect(null, mapDispatchToProps)(LoginJSX);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginContent);\n/* <div className=\"base-container\" ref={this.props.containerRef}>\n        <div className=\"header\">Login</div>\n        <div className=\"content\">\n          {/* <div className=\"image\">\n            <img alt=\"login\" src={loginImg} />\n          </div>\n          <div className=\"form\">\n            <div className=\"form-group\">\n              <label htmlFor=\"username\">Username</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"text\"\n                name=\"username\"\n                placeholder=\"username\"\n                required\n              />\n              <label htmlFor=\"password\">Password</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"password\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <button\n          onClick={this.handleLoginPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Login\n        </button>\n        <hr />\n        <button\n          onClick={this.handleGuestPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Guest Login\n        </button>\n      </div> */\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcz8xNTY2Il0sIm5hbWVzIjpbIkxvZ2luQ29udGVudCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidXNlciIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0QXV0aGVudGljYXRpb25IZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJtZXNzYWdlIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dpblBvc3QiLCJoYW5kbGVHdWVzdFBvc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7QUFDQTs7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsc05BT0wsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxZQUFJLGtDQUNDLE1BQUtDLEtBQUwsQ0FBV0QsSUFEWixxR0FFREYsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLElBRlIsRUFFZUwsQ0FBQyxDQUFDSSxNQUFGLENBQVNFLEtBRnhCO0FBRFEsT0FBZDtBQU1ELEtBZGtCOztBQUFBLDBOQWdCRCxZQUFNO0FBQ3RCQyxrREFBSyxDQUNGQyxJQURILENBQ1EsaUNBRFIsRUFDMkM7QUFDdkNDLGdCQUFRLEVBQUUsTUFBS04sS0FBTCxDQUFXRCxJQUFYLENBQWdCTyxRQURhO0FBRXZDQyxnQkFBUSxFQUFFLE1BQUtQLEtBQUwsQ0FBV0QsSUFBWCxDQUFnQlE7QUFGYSxPQUQzQyxFQUtHQyxJQUxILENBS1Es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QWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssbUJBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUU7QUFDRSxpQkFBTyxFQUFFLEtBQUtDLGVBRGhCO0FBRUUsY0FBSSxFQUFDO0FBRlAsb0hBR08sUUFIUCxpSEFJWSxpQkFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUZGLENBREYsQ0FERixDQXZERixDQU5GLENBSkYsQ0FvRkU7QUFDQTs7QUFyRkY7QUF1RkQ7Ozs7RUE1SndCQyw0Q0FBSyxDQUFDQyxTLEdBK0pqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVlN0IsMkVBQWY7QUFFQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9naW4vTG9naW5Db250ZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGxvZ2luSW1nIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ2luLnN2Z1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuLy8gaW1wb3J0ICogYXMgYWN0aW9uQ3JlYXRvcnMgZnJvbSBcIi4uLy4uLy4uL3N0b3JlL2NyZWF0b3JzL2FjdGlvbkNyZWF0b3JzXCI7XG5pbXBvcnQgeyBzZXRBdXRoZW50aWNhdGlvbkhlYWRlciB9IGZyb20gXCIuLi8uLi91dGlscy9BdXRoXCI7XG5cbmNsYXNzIExvZ2luQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlTG9naW4gPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdXNlcjoge1xuICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUxvZ2luUG9zdCA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlci51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUudXNlci5wYXNzd29yZCxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlbjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImpzb253ZWJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgICAgc2V0QXV0aGVudGljYXRpb25IZWFkZXIodG9rZW4pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgICAgICAvLyAgIHRoaXMucHJvcHMub25BdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgYWxlcnQoXCJyZXNwb25zZSBmYWlsZWRcIik7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlR3Vlc3RQb3N0ID0gKCkgPT4ge1xuICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL2d1ZXN0LWxvZ2luXCIsIHt9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3VjY2Vzcykge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwianNvbndlYnRva2VuXCIsIHRva2VuKTtcbiAgICAgICAgc2V0QXV0aGVudGljYXRpb25IZWFkZXIodG9rZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgIC8vIHRoaXMucHJvcHMub25BdXRoZW50aWNhdGVkKHRydWUpO1xuICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAvLyB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChcIi9cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBhbGVydChcInJlc3BvbnNlIGZhaWxlZFwiKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zdGF0ZSA9IHtcbiAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gPGg0PkxvZ2luPC9oND5cbiAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1zZWN0aW9uIHB0Yi0xMDBcIj5cbiAgICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWltYWdlXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY29udGFjdC5wbmdcIiBhbHQ9XCJpbWFnZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgPGgyPkxvZ2luPC9oMj5cblxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICB7LyogPGZvcm0+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgY29sLW1kLTEwXCI+XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c2xldHRlci1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnRuIG10LTJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICB7LyogPC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8L2Zvcm0+ICovfVxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIHsvKiA8Zm9ybT4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiPiAqL31cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUd1ZXN0UG9zdH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnRuIG10LTJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIEd1ZXN0IExvZ2luXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiA8L2Zvcm0+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgLy8gPC9kaXY+XG4gICAgICAvLyA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIG9uQXV0aGVudGljYXRlZDogKCkgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuYXV0aGVudGljYXRlZCh0cnVlKSksXG4vLyAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5KU1gpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRlbnQ7XG5cbi8qIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1jb250YWluZXJcIiByZWY9e3RoaXMucHJvcHMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Mb2dpbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dpblwiIHNyYz17bG9naW5JbWd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luUG9zdH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1idG5cIlxuICAgICAgICA+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVHdWVzdFBvc3R9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tYnRuXCJcbiAgICAgICAgPlxuICAgICAgICAgIEd1ZXN0IExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+ICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login/LoginContent.js\n");

/***/ })

})