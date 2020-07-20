webpackHotUpdate("static/development/pages/login.js",{

/***/ "./components/Login/LoginContent.js":
/*!******************************************!*\
  !*** ./components/Login/LoginContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_Auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Auth */ \"./utils/Auth.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/davidcarlisle1/repos/business-intelligence-app/client/components/Login/LoginContent.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n // import loginImg from \"../../public/images/login.svg\";\n\n // import { connect } from \"react-redux\";\n// import * as actionCreators from \"../../../store/creators/actionCreators\";\n\n\n\nvar LoginContent = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(LoginContent, _React$Component);\n\n  var _super = _createSuper(LoginContent);\n\n  function LoginContent(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, LoginContent);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLogin\", function (e) {\n      _this.setState({\n        user: _objectSpread(_objectSpread({}, _this.state.user), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, e.target.name, e.target.value))\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleLoginPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/login\", {\n        username: _this.state.user.username,\n        password: _this.state.user.password\n      }).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token); // console.log(token);\n          //   this.props.onAuthenticated(true);\n\n          alert(response.data.message);\n\n          _this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"handleGuestPost\", function () {\n      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(\"http://localhost:3001/api/guest-login\", {}).then(function (response) {\n        if (response.data.success) {\n          var token = response.data.token;\n          localStorage.setItem(\"jsonwebtoken\", token);\n          Object(_utils_Auth__WEBPACK_IMPORTED_MODULE_9__[\"setAuthenticationHeader\"])(token); // console.log(token);\n          // this.props.onAuthenticated(true);\n\n          alert(response.data.message);\n\n          _this.props.history.push(\"/\");\n        } else {\n          alert(response.data.message);\n          alert(\"response failed\");\n          _this.props.state = {\n            user: _objectSpread(_objectSpread({}, _this.state.user), {}, {\n              password: \"\"\n            })\n          };\n        }\n      });\n    });\n\n    _this.state = {\n      user: {}\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(LoginContent, [{\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: \"base-container\",\n        ref: this.props.containerRef,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: \"header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 9\n        }\n      }, \"Login\"), __jsx(\"div\", {\n        className: \"content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"form\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"form-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 13\n        }\n      }, __jsx(\"label\", {\n        htmlFor: \"username\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 15\n        }\n      }, \"Username\"), __jsx(\"input\", {\n        onChange: this.handleLogin,\n        type: \"text\",\n        name: \"username\",\n        placeholder: \"username\",\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 15\n        }\n      }), __jsx(\"label\", {\n        htmlFor: \"password\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 15\n        }\n      }, \"Password\"), __jsx(\"input\", {\n        onChange: this.handleLogin,\n        type: \"password\",\n        name: \"password\",\n        placeholder: \"password\",\n        required: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 15\n        }\n      })))), __jsx(\"button\", {\n        onClick: this.handleLoginPost,\n        type: \"button\",\n        className: \"login-btn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 9\n        }\n      }, \"Login\"), __jsx(\"hr\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 9\n        }\n      }), __jsx(\"button\", {\n        onClick: this.handleGuestPost,\n        type: \"button\",\n        className: \"login-btn\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 9\n        }\n      }, \"Guest Login\"));\n    }\n  }]);\n\n  return LoginContent;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // const mapDispatchToProps = (dispatch) => {\n//   return {\n//     onAuthenticated: () => dispatch(actionCreators.authenticated(true)),\n//   };\n// };\n// export default connect(null, mapDispatchToProps)(LoginJSX);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginContent);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcz8xNTY2Il0sIm5hbWVzIjpbIkxvZ2luQ29udGVudCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidXNlciIsInN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiYXhpb3MiLCJwb3N0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJzdWNjZXNzIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic2V0QXV0aGVudGljYXRpb25IZWFkZXIiLCJhbGVydCIsIm1lc3NhZ2UiLCJoaXN0b3J5IiwicHVzaCIsImNvbnRhaW5lclJlZiIsImhhbmRsZUxvZ2luIiwiaGFuZGxlTG9naW5Qb3N0IiwiaGFuZGxlR3Vlc3RQb3N0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTtBQUNBOztBQUNBOztJQUVNQSxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixzTkFPTCxVQUFDQyxDQUFELEVBQU87QUFDbkIsWUFBS0MsUUFBTCxDQUFjO0FBQ1pDLFlBQUksa0NBQ0MsTUFBS0MsS0FBTCxDQUFXRCxJQURaLHFHQUVERixDQUFDLENBQUNJLE1BQUYsQ0FBU0MsSUFGUixFQUVlTCxDQUFDLENBQUNJLE1BQUYsQ0FBU0UsS0FGeEI7QUFEUSxPQUFkO0FBTUQsS0Fka0I7O0FBQUEsME5BZ0JELFlBQU07QUFDdEJDLGtEQUFLLENBQ0ZDLElBREgsQ0FDUSxpQ0FEUixFQUMyQztBQUN2Q0MsZ0JBQVEsRUFBRSxNQUFLTixLQUFMLENBQVdELElBQVgsQ0FBZ0JPLFFBRGE7QUFFdkNDLGdCQUFRLEVBQUUsTUFBS1AsS0FBTCxDQUFXRCxJQUFYLENBQWdCUTtBQUZhLE9BRDNDLEVBS0dD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QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLEVBU0U7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLEVBVUU7QUFDRSxnQkFBUSxFQUFFLEtBQUtBLFdBRGpCO0FBRUUsWUFBSSxFQUFDLFVBRlA7QUFHRSxZQUFJLEVBQUMsVUFIUDtBQUlFLG1CQUFXLEVBQUMsVUFKZDtBQUtFLGdCQUFRLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVZGLENBREYsQ0FKRixDQUZGLEVBMkJFO0FBQ0UsZUFBTyxFQUFFLEtBQUtDLGVBRGhCO0FBRUUsWUFBSSxFQUFDLFFBRlA7QUFHRSxpQkFBUyxFQUFDLFdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkYsRUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWxDRixFQW1DRTtBQUNFLGVBQU8sRUFBRSxLQUFLQyxlQURoQjtBQUVFLFlBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVMsRUFBQyxXQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkNGLENBREY7QUE2Q0Q7Ozs7RUFsSHdCQyw0Q0FBSyxDQUFDQyxTLEdBcUhqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVlOUIsMkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luQ29udGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBsb2dpbkltZyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy9sb2dpbi5zdmdcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbi8vIGltcG9ydCAqIGFzIGFjdGlvbkNyZWF0b3JzIGZyb20gXCIuLi8uLi8uLi9zdG9yZS9jcmVhdG9ycy9hY3Rpb25DcmVhdG9yc1wiO1xuaW1wb3J0IHsgc2V0QXV0aGVudGljYXRpb25IZWFkZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvQXV0aFwiO1xuXG5jbGFzcyBMb2dpbkNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjoge30sXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUxvZ2luID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVMb2dpblBvc3QgPSAoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9sb2dpblwiLCB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnVzZXIucGFzc3dvcmQsXG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJqc29ud2VidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgICAgIHNldEF1dGhlbnRpY2F0aW9uSGVhZGVyKHRva2VuKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgICAgICAgLy8gICB0aGlzLnByb3BzLm9uQXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIGFsZXJ0KFwicmVzcG9uc2UgZmFpbGVkXCIpO1xuICAgICAgICAgIHRoaXMucHJvcHMuc3RhdGUgPSB7XG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudXNlcixcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUd1ZXN0UG9zdCA9ICgpID0+IHtcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ndWVzdC1sb2dpblwiLCB7fSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImpzb253ZWJ0b2tlblwiLCB0b2tlbik7XG4gICAgICAgIHNldEF1dGhlbnRpY2F0aW9uSGVhZGVyKHRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgICAvLyB0aGlzLnByb3BzLm9uQXV0aGVudGljYXRlZCh0cnVlKTtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgYWxlcnQoXCJyZXNwb25zZSBmYWlsZWRcIik7XG4gICAgICAgIHRoaXMucHJvcHMuc3RhdGUgPSB7XG4gICAgICAgICAgdXNlcjoge1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS51c2VyLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFzZS1jb250YWluZXJcIiByZWY9e3RoaXMucHJvcHMuY29udGFpbmVyUmVmfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5Mb2dpbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgPGltZyBhbHQ9XCJsb2dpblwiIHNyYz17bG9naW5JbWd9IC8+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvZ2lufVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpblBvc3R9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9naW4tYnRuXCJcbiAgICAgICAgPlxuICAgICAgICAgIExvZ2luXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR3Vlc3RQb3N0fVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLWJ0blwiXG4gICAgICAgID5cbiAgICAgICAgICBHdWVzdCBMb2dpblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgb25BdXRoZW50aWNhdGVkOiAoKSA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5hdXRoZW50aWNhdGVkKHRydWUpKSxcbi8vICAgfTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkpTWCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29udGVudDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Login/LoginContent.js\n");

/***/ })

})