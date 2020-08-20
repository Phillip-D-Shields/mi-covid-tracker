webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-blue-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \" Current Michigan Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Data Quality Grade: \", props.miStats.dataQualityGrade), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.miStats.date, \" \", __jsx(\"span\", {\n    className: \"text-gray-700 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 89\n    }\n  }, \" YYYYMMDD \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 73\n    }\n  }, \" \", props.miStats.hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 67\n    }\n  }, props.miStats.inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 57\n    }\n  }, props.miStats.death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 60\n    }\n  }, props.miStats.recovered)), \"//! card links props.miInfo.covid19Site &&\"), __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-red-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }, \" Current US Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 73\n    }\n  }, props.usStats[0].hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 67\n    }\n  }, props.usStats[0].inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 57\n    }\n  }, props.usStats[0].death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 60\n    }\n  }, props.usStats[0].recovered))));\n}\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibWlTdGF0cyIsImRhdGFRdWFsaXR5R3JhZGUiLCJkYXRlIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaW5JY3VDdXJyZW50bHkiLCJkZWF0aCIsInJlY292ZXJlZCIsInVzU3RhdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBcUJBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUVwQixTQUNFLG1FQUNFO0FBQVMsYUFBUyxFQUFDLDZCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBNkRBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxnQkFBM0UsQ0FGRixFQUdFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTRERixLQUFLLENBQUNDLE9BQU4sQ0FBY0UsSUFBMUUsT0FBZ0Y7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhGLENBSEYsRUFJRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFnRTtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUF5Q0gsS0FBSyxDQUFDQyxPQUFOLENBQWNHLHFCQUF2RCxNQUFoRSxDQUpGLEVBS0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBMEQ7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NKLEtBQUssQ0FBQ0MsT0FBTixDQUFjSSxjQUF0RCxDQUExRCxDQUxGLEVBTUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ0Q7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNMLEtBQUssQ0FBQ0MsT0FBTixDQUFjSyxLQUF2RCxDQUFoRCxDQU5GLEVBT0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbUQ7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNOLEtBQUssQ0FBQ0MsT0FBTixDQUFjTSxTQUFyRCxDQUFuRCxDQVBGLCtDQURGLEVBb0JFO0FBQVUsYUFBUyxFQUFDLDZCQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBR0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBZ0U7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsRUFBaUJKLHFCQUF6RCxNQUFoRSxDQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBMEQ7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NKLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsRUFBaUJILGNBQXpELENBQTFELENBSkYsRUFLRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFnRDtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q0wsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxFQUFpQkYsS0FBMUQsQ0FBaEQsQ0FMRixFQU1FO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW1EO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDTixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRCxTQUF4RCxDQUFuRCxDQU5GLENBcEJGLENBREY7QUErQkQ7O0tBakNRUixLOztBQW1DTUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXREYXRhIGZyb20gXCIuL2dldERhdGFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgbWlTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS9zdGF0ZXMvbWkvY3VycmVudC5qc29uXCJcbiAgKTtcbiAgY29uc3QgdXNTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS91cy9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCBtaUluZm8gPSBhd2FpdCBnZXREYXRhKFxuICAgIFwiaHR0cHM6Ly9hcGkuY292aWR0cmFja2luZy5jb20vdjEvc3RhdGVzL21pL2luZm8uanNvblwiXG4gIClcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtaVN0YXRzLFxuICAgICAgdXNTdGF0cyxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcC02IHJvdW5kZWQgbS0xXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNzAwXCI+IEN1cnJlbnQgTWljaGlnYW4gRGF0YTwvaDE+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkRhdGEgUXVhbGl0eSBHcmFkZToge3Byb3BzLm1pU3RhdHMuZGF0YVF1YWxpdHlHcmFkZX08L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5EYXRhIGxhc3QgdXBkYXRlZDoge3Byb3BzLm1pU3RhdHMuZGF0ZX0gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBwbC0yXCI+IFlZWVlNTUREIDwvc3Bhbj48L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5DdXJyZW50bHkgaG9zcGl0YWxpemVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS00MDAgcGwtMlwiPiB7cHJvcHMubWlTdGF0cy5ob3NwaXRhbGl6ZWRDdXJyZW50bHl9IDwvc3Bhbj48L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5DdXJyZW50bHkgaW4gSUNVOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDAgcGwtMlwiPntwcm9wcy5taVN0YXRzLmluSWN1Q3VycmVudGx5fTwvc3Bhbj48L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5EZWF0aHM6IDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LXB1cnBsZS00MDAgcGwtMlwiPntwcm9wcy5taVN0YXRzLmRlYXRofTwvc3Bhbj48L2gyPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5SZWNvdmVyZWQ6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5yZWNvdmVyZWR9PC9zcGFuPjwvaDI+XG5cbiAgICAgICAgLy8hIGNhcmQgbGlua3MgXG4gICAgICAgICAgcHJvcHMubWlJbmZvLmNvdmlkMTlTaXRlICYmIFxuICAgICAgPC9zZWN0aW9uPlxuXG5cblxuXG5cblxuXG4gICAgICA8c2VjdGlvbiAgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcC02IHJvdW5kZWQgbS0xXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj4gQ3VycmVudCBVUyBEYXRhPC9oMT5cbiAgICAgICAgey8qIDxoMj5EYXRhIGxhc3QgdXBkYXRlZDoge3Byb3BzLnVzU3RhdHNbMF0uZGVhdGh9PC9oMj4gKi99XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkN1cnJlbnRseSBob3NwaXRhbGl6ZWQ6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uaG9zcGl0YWxpemVkQ3VycmVudGx5fSA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGluIElDVTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIHBsLTJcIj57cHJvcHMudXNTdGF0c1swXS5pbkljdUN1cnJlbnRseX08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGVhdGhzOiA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1wdXJwbGUtNDAwIHBsLTJcIj57cHJvcHMudXNTdGF0c1swXS5kZWF0aH08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+UmVjb3ZlcmVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0ucmVjb3ZlcmVkfTwvc3Bhbj48L2gyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})