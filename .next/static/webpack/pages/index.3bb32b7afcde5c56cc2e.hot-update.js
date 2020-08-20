webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CardLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardLink */ \"./pages/CardLink.js\");\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-blue-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \" Current Michigan Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Data Quality Grade: \", props.miStats.dataQualityGrade), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.miStats.date, \" \", __jsx(\"span\", {\n    className: \"text-gray-700 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 89\n    }\n  }, \" YYYYMMDD \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 73\n    }\n  }, \" \", props.miStats.hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 67\n    }\n  }, props.miStats.inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 57\n    }\n  }, props.miStats.death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 60\n    }\n  }, props.miStats.recovered)), __jsx(\"h2\", {\n    className: \"text-2xl my-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 10\n    }\n  }, \"State Links\"), __jsx(_CardLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: props.miInfo.covid19Site,\n    description: \"Michigans current state website\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  })), __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-red-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \" Current US Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 73\n    }\n  }, props.usStats[0].hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 67\n    }\n  }, props.usStats[0].inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 57\n    }\n  }, props.usStats[0].death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 60\n    }\n  }, props.usStats[0].recovered))));\n}\n\n_c = Index;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwibWlTdGF0cyIsImRhdGFRdWFsaXR5R3JhZGUiLCJkYXRlIiwiaG9zcGl0YWxpemVkQ3VycmVudGx5IiwiaW5JY3VDdXJyZW50bHkiLCJkZWF0aCIsInJlY292ZXJlZCIsIm1pSW5mbyIsImNvdmlkMTlTaXRlIiwidXNTdGF0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFzQkEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBRXBCLFNBQ0UsbUVBQ0U7QUFBUyxhQUFTLEVBQUMsNkJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUE2REEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLGdCQUEzRSxDQUZGLEVBR0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBNERGLEtBQUssQ0FBQ0MsT0FBTixDQUFjRSxJQUExRSxPQUFnRjtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBaEYsQ0FIRixFQUlFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQWdFO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXlDSCxLQUFLLENBQUNDLE9BQU4sQ0FBY0cscUJBQXZELE1BQWhFLENBSkYsRUFLRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUEwRDtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q0osS0FBSyxDQUFDQyxPQUFOLENBQWNJLGNBQXRELENBQTFELENBTEYsRUFNRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFnRDtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5Q0wsS0FBSyxDQUFDQyxPQUFOLENBQWNLLEtBQXZELENBQWhELENBTkYsRUFPRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFtRDtBQUFNLGFBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q04sS0FBSyxDQUFDQyxPQUFOLENBQWNNLFNBQXJELENBQW5ELENBUEYsRUFTRztBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEgsRUFXTSxNQUFDLGlEQUFEO0FBQVUsT0FBRyxFQUFFUCxLQUFLLENBQUNRLE1BQU4sQ0FBYUMsV0FBNUI7QUFBeUMsZUFBVyxFQUFDLGlDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWE4sQ0FERixFQXNCRTtBQUFVLGFBQVMsRUFBQyw2QkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUdFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQWdFO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDVCxLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLEVBQWlCTixxQkFBekQsTUFBaEUsQ0FIRixFQUlFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTBEO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDSixLQUFLLENBQUNVLE9BQU4sQ0FBYyxDQUFkLEVBQWlCTCxjQUF6RCxDQUExRCxDQUpGLEVBS0U7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZ0Q7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNMLEtBQUssQ0FBQ1UsT0FBTixDQUFjLENBQWQsRUFBaUJKLEtBQTFELENBQWhELENBTEYsRUFNRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFtRDtBQUFNLGFBQVMsRUFBQyxxQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1Q04sS0FBSyxDQUFDVSxPQUFOLENBQWMsQ0FBZCxFQUFpQkgsU0FBeEQsQ0FBbkQsQ0FORixDQXRCRixDQURGO0FBaUNEOztLQW5DUVIsSzs7QUFxQ01BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQgQ2FyZExpbmsgZnJvbSAnLi9DYXJkTGluaydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgbWlTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS9zdGF0ZXMvbWkvY3VycmVudC5qc29uXCJcbiAgKTtcbiAgY29uc3QgdXNTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS91cy9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCBtaUluZm8gPSBhd2FpdCBnZXREYXRhKFxuICAgIFwiaHR0cHM6Ly9hcGkuY292aWR0cmFja2luZy5jb20vdjEvc3RhdGVzL21pL2luZm8uanNvblwiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWlTdGF0cyxcbiAgICAgIHVzU3RhdHMsXG4gICAgICBtaUluZm8sXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHAtNiByb3VuZGVkIG0tMVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMFwiPiBDdXJyZW50IE1pY2hpZ2FuIERhdGE8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5EYXRhIFF1YWxpdHkgR3JhZGU6IHtwcm9wcy5taVN0YXRzLmRhdGFRdWFsaXR5R3JhZGV9PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy5taVN0YXRzLmRhdGV9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgcGwtMlwiPiBZWVlZTU1ERCA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGhvc3BpdGFsaXplZDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwIHBsLTJcIj4ge3Byb3BzLm1pU3RhdHMuaG9zcGl0YWxpemVkQ3VycmVudGx5fSA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGluIElDVTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5pbkljdUN1cnJlbnRseX08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGVhdGhzOiA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1wdXJwbGUtNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5kZWF0aH08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+UmVjb3ZlcmVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBwbC0yXCI+e3Byb3BzLm1pU3RhdHMucmVjb3ZlcmVkfTwvc3Bhbj48L2gyPlxuXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXktMlwiPlN0YXRlIExpbmtzPC9oMj5cbiAgICAgIFxuICAgICAgICAgICAgPENhcmRMaW5rIHVybD17cHJvcHMubWlJbmZvLmNvdmlkMTlTaXRlfSBkZXNjcmlwdGlvbj1cIk1pY2hpZ2FucyBjdXJyZW50IHN0YXRlIHdlYnNpdGVcIj48L0NhcmRMaW5rPlxuICAgICAgICBcbiAgICAgIDwvc2VjdGlvbj5cblxuXG5cblxuXG5cblxuICAgICAgPHNlY3Rpb24gIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHAtNiByb3VuZGVkIG0tMVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+IEN1cnJlbnQgVVMgRGF0YTwvaDE+XG4gICAgICAgIHsvKiA8aDI+RGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy51c1N0YXRzWzBdLmRlYXRofTwvaDI+ICovfVxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5DdXJyZW50bHkgaG9zcGl0YWxpemVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS00MDAgcGwtMlwiPntwcm9wcy51c1N0YXRzWzBdLmhvc3BpdGFsaXplZEN1cnJlbnRseX0gPC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkN1cnJlbnRseSBpbiBJQ1U6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uaW5JY3VDdXJyZW50bHl9PC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkRlYXRoczogPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtcHVycGxlLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uZGVhdGh9PC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPlJlY292ZXJlZDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDAgcGwtMlwiPntwcm9wcy51c1N0YXRzWzBdLnJlY292ZXJlZH08L3NwYW4+PC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})