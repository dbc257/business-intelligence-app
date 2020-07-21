webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/LoginContent.js":
/*!******************************************!*\
  !*** ./components/Login/LoginContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Auth */ \"./utils/Auth.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/davidcarlisle1/repos/business-intelligence-app/client/components/Login/LoginContent.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// import React from \"react\";\n // import loginImg from \"../../public/images/login.svg\";\n\n // import { connect } from \"react-redux\";\n// import * as actionCreators from \"../../../store/creators/actionCreators\";\n\n\n\nvar LoginContent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LoginContent, _React$Component);\n\n  var _super = _createSuper(LoginContent);\n\n  function LoginContent(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LoginContent);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLogin\", function (e) {\n      _this.setState({\n        user: _objectSpread(_objectSpread({}, _this.state.user), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value))\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLoginPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/login\", {\n        username: _this.state.user.username,\n        password: _this.state.user.password\n      }).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token);\n          console.log(token); //   this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleGuestPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/guest-login\", {}).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token);\n          console.log(token); // this.props.onAuthenticated(true);\n\n          alert(response.data.message); // this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    _this.state = {\n      user: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LoginContent, [{\n    key: \"render\",\n    value: function render() {\n      var _jsx, _jsx2;\n\n      return (// <h4>Login</h4>\n        // <div className=\"contact-section ptb-100\">\n        //   <div className=\"container\">\n        __jsx(\"div\", {\n          className: \"row align-items-center\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 9\n          }\n        }, __jsx(\"div\", {\n          className: \"contact-image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }\n        }, __jsx(\"img\", {\n          src: \"/images/contact.png\",\n          alt: \"image\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }\n        }))), __jsx(\"div\", {\n          className: \"col-lg-6 col-md-6\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 9\n          }\n        }, __jsx(\"div\", {\n          className: \"subscribe-content\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 11\n          }\n        }, __jsx(\"h2\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 13\n          }\n        }, \"Login\")), __jsx(\"div\", {\n          className: \"contact-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 11\n          }\n        }, __jsx(\"div\", {\n          className: \"row\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-10 col-md-10\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 15\n          }\n        }, __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 17\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"text\",\n          name: \"username\",\n          placeholder: \"Username\",\n          className: \"form-control\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 19\n          }\n        })), __jsx(\"br\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 17\n          }\n        }), __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 17\n          }\n        }, __jsx(\"input\", {\n          onChange: this.handleLogin,\n          type: \"password\",\n          name: \"password\",\n          placeholder: \"Password\",\n          className: \"form-control\",\n          required: true,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 19\n          }\n        })), __jsx(\"div\", {\n          className: \"col-lg-10 col-md-10\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 126,\n            columnNumber: 17\n          }\n        }, __jsx(\"div\", {\n          className: \"newsletter-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 19\n          }\n        }, __jsx(\"button\", (_jsx = {\n          onClick: this.handleLoginPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 128,\n          columnNumber: 21\n        }), _jsx), \"Login\"))))), __jsx(\"br\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 13\n          }\n        }), __jsx(\"div\", {\n          className: \"contact-form\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 143,\n            columnNumber: 13\n          }\n        }, __jsx(\"div\", {\n          className: \"row\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 144,\n            columnNumber: 15\n          }\n        }, __jsx(\"div\", {\n          className: \"col-lg-10 col-md-10\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 145,\n            columnNumber: 17\n          }\n        }, __jsx(\"button\", (_jsx2 = {\n          onClick: this.handleGuestPost,\n          type: \"button\"\n        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"type\", \"submit\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"className\", \"submit-btn mt-2\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__self\", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_jsx2, \"__source\", {\n          fileName: _jsxFileName,\n          lineNumber: 146,\n          columnNumber: 19\n        }), _jsx2), \"Guest Login\"))))))) // </div>\n\n      );\n    }\n  }]);\n\n  return LoginContent;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const mapDispatchToProps = (dispatch) => {\n//   return {\n//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),\n//   };\n// };\n// export default connect(null, mapDispatchToProps)(LoginJSX);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginContent);\n/* <div className=\"base-container\" ref={this.props.containerRef}>\n        <div className=\"header\">Login</div>\n        <div className=\"content\">\n          {/* <div className=\"image\">\n            <img alt=\"login\" src={loginImg} />\n          </div>\n          <div className=\"form\">\n            <div className=\"form-group\">\n              <label htmlFor=\"username\">Username</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"text\"\n                name=\"username\"\n                placeholder=\"username\"\n                required\n              />\n              <label htmlFor=\"password\">Password</label>\n              <input\n                onChange={this.handleLogin}\n                type=\"password\"\n                name=\"password\"\n                placeholder=\"password\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n        <button\n          onClick={this.handleLoginPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Login\n        </button>\n        <hr />\n        <button\n          onClick={this.handleGuestPost}\n          type=\"button\"\n          className=\"login-btn\"\n        >\n          Guest Login\n        </button>\n      </div> */\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcz8xNTY2Il0sIm5hbWVzIjpbIkxvZ2luQ29udGVudCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidXNlciIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0QXV0aGVudGljYXRpb25IZWFkZXIiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJtZXNzYWdlIiwiaGFuZGxlTG9naW4iLCJoYW5kbGVMb2dpblBvc3QiLCJoYW5kbGVHdWVzdFBvc3QiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0NBRUE7QUFDQTs7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsc05BT0wsVUFBQ0MsQ0FBRCxFQUFPO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxZQUFJLGtDQUNDLE1BQUtDLEtBQUwsQ0FBV0QsSUFEWixxR0FFREYsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLElBRlIsRUFFZUwsQ0FBQyxDQUFDSSxNQUFGLENBQVNFLEtBRnhCO0FBRFEsT0FBZDtBQU1ELEtBZGtCOztBQUFBLDBOQWdCRCxZQUFNO0FBQ3RCQyxrREFBSyxDQUNGQyxJQURILENBQ1EsaUNBRFIsRUFDMkM7QUFDdkNDLGdCQUFRLEVBQUUsTUFBS04sS0FBTCxDQUFXRCxJQUFYLENBQWdCTyxRQURhO0FBRXZDQyxnQkFBUSxFQUFFLE1BQUtQLEtBQUwsQ0FBV0QsSUFBWCxDQUFnQlE7QUFGYSxPQUQzQyxFQUtHQyxJQUxILENBS1Es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REU7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQ0UsaUJBQU8sRUFBRSxLQUFLQyxlQURoQjtBQUVFLGNBQUksRUFBQztBQUZQLG9IQUdPLFFBSFAsaUhBSVksaUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQURGLENBREYsQ0FqREYsQ0FORixDQU5GLENBSkYsQ0FvRkU7O0FBcEZGO0FBc0ZEOzs7O0VBM0p3QkMsNENBQUssQ0FBQ0MsUyxHQThKakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFFZTdCLDJFQUFmO0FBRUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBsb2dpbkltZyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dpbi5zdmdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gXCIuLi8uLi8uLi9zdG9yZS9jcmVhdG9ycy9hY3Rpb25DcmVhdG9yc1wiO1xuaW1wb3J0IHsgc2V0QXV0aGVudGljYXRpb25IZWFkZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQXV0aFwiO1xuXG5jbGFzcyBMb2dpbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjoge30sXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVMb2dpblBvc3QgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9sb2dpblwiLCB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJqc29ud2VidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgICAgIHNldEF1dGhlbnRpY2F0aW9uSGVhZGVyKHRva2VuKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgICAgLy8gICB0aGlzLnByb3BzLm9uQXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIC8vIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIGFsZXJ0KFwicmVzcG9uc2UgZmFpbGVkXCIpO1xuICAgICAgICAgIHRoaXMucHJvcHMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudXNlcixcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUd1ZXN0UG9zdCA9ICgpID0+IHtcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ndWVzdC1sb2dpblwiLCB7fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImpzb253ZWJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW9uSGVhZGVyKHRva2VuKTtcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAvLyB0aGlzLnByb3BzLm9uQXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgYWxlcnQoXCJyZXNwb25zZSBmYWlsZWRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGUgPSB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8vIDxoND5Mb2dpbjwvaDQ+XG4gICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Qtc2VjdGlvbiBwdGItMTAwXCI+XG4gICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NvbnRhY3QucG5nXCIgYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Vic2NyaWJlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgey8qIDxmb3JtPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVMb2dpbn1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cblxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBjb2wtbWQtMTBcIj4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzbGV0dGVyLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9naW5Qb3N0fVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdC1idG4gbXQtMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDwvZm9ybT4gKi99XG4gICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgIHsvKiA8Zm9ybT4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIGNvbC1tZC0xMFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUd1ZXN0UG9zdH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXQtYnRuIG10LTJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBHdWVzdCBMb2dpblxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiA8L2Zvcm0+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAvLyA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuLy8gICByZXR1cm4ge1xuLy8gICAgIG9uQXV0aGVudGljYXRlZDogKCkgPT4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvcnMuYXV0aGVudGljYXRlZCh0cnVlKSksXG4vLyAgIH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5KU1gpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRlbnQ7XG5cbi8qIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1jb250YWluZXJcIiByZWY9e3RoaXMucHJvcHMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Mb2dpbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dpblwiIHNyYz17bG9naW5JbWd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTG9naW59XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luUG9zdH1cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1idG5cIlxuICAgICAgICA+XG4gICAgICAgICAgTG9naW5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVHdWVzdFBvc3R9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tYnRuXCJcbiAgICAgICAgPlxuICAgICAgICAgIEd1ZXN0IExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+ICovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login/LoginContent.js\n");

/***/ })

})