module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nasync function getStaticProps(context) {\n  const miRes = await fetch(\"https://api.covidtracking.com/v1/states/mi/current.json\");\n  const usRes = await fetch(\"https://api.covidtracking.com/v1/us/current.json\");\n  const miStats = await miRes.json();\n  const usStats = await usRes.json();\n  console.log(usStats);\n  return {\n    props: {\n      miStats,\n      usStats\n    }\n  };\n}\n\nfunction Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \" Current Michigan Data\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Data Quality Grade: \", props.miStats.dataQualityGrade), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.miStats.date), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", props.miStats.hospitalizedCurrently, \" \"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", props.miStats.inIcuCurrently), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", props.miStats.death), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", props.miStats.recovered)), __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \" Current US Data\"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.usStats.date), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", props.usStats.hospitalizedCurrently, \" \"), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", props.usStats.inIcuCurrently), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", props.usStats.death), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", props.usStats.recovered)));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1pUmVzIiwiZmV0Y2giLCJ1c1JlcyIsIm1pU3RhdHMiLCJqc29uIiwidXNTdGF0cyIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsIkluZGV4IiwiZGF0YVF1YWxpdHlHcmFkZSIsImRhdGUiLCJob3NwaXRhbGl6ZWRDdXJyZW50bHkiLCJpbkljdUN1cnJlbnRseSIsImRlYXRoIiwicmVjb3ZlcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sZUFBZUEsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLEtBQUssQ0FDdkIseURBRHVCLENBQXpCO0FBR0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1ELEtBQUssQ0FBQyxrREFBRCxDQUF6QjtBQUVBLFFBQU1FLE9BQU8sR0FBRyxNQUFNSCxLQUFLLENBQUNJLElBQU4sRUFBdEI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUgsS0FBSyxDQUFDRSxJQUFOLEVBQXRCO0FBRUFFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0EsU0FBTztBQUNMRyxTQUFLLEVBQUU7QUFDTEwsYUFESztBQUVMRTtBQUZLO0FBREYsR0FBUDtBQU1EOztBQUVELFNBQVNJLEtBQVQsQ0FBZUQsS0FBZixFQUFzQjtBQUNwQixTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBeUJBLEtBQUssQ0FBQ0wsT0FBTixDQUFjTyxnQkFBdkMsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ3NCRixLQUFLLENBQUNMLE9BQU4sQ0FBY1EsSUFEcEMsQ0FIRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTZCSCxLQUFLLENBQUNMLE9BQU4sQ0FBY1MscUJBQTNDLE1BTkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUF1QkosS0FBSyxDQUFDTCxPQUFOLENBQWNVLGNBQXJDLENBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFhTCxLQUFLLENBQUNMLE9BQU4sQ0FBY1csS0FBM0IsQ0FSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWdCTixLQUFLLENBQUNMLE9BQU4sQ0FBY1ksU0FBOUIsQ0FURixDQURGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUNzQlAsS0FBSyxDQUFDSCxPQUFOLENBQWNNLElBRHBDLENBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUE2QkgsS0FBSyxDQUFDSCxPQUFOLENBQWNPLHFCQUEzQyxNQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBdUJKLEtBQUssQ0FBQ0gsT0FBTixDQUFjUSxjQUFyQyxDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYUwsS0FBSyxDQUFDSCxPQUFOLENBQWNTLEtBQTNCLENBUEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFnQk4sS0FBSyxDQUFDSCxPQUFOLENBQWNVLFNBQTlCLENBUkYsQ0FaRixDQURGO0FBeUJEOztBQUVjTixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgbWlSZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vYXBpLmNvdmlkdHJhY2tpbmcuY29tL3YxL3N0YXRlcy9taS9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCB1c1JlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkuY292aWR0cmFja2luZy5jb20vdjEvdXMvY3VycmVudC5qc29uXCIpO1xuXG4gIGNvbnN0IG1pU3RhdHMgPSBhd2FpdCBtaVJlcy5qc29uKCk7XG4gIGNvbnN0IHVzU3RhdHMgPSBhd2FpdCB1c1Jlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2codXNTdGF0cyk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG1pU3RhdHMsXG4gICAgICB1c1N0YXRzXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT4gQ3VycmVudCBNaWNoaWdhbiBEYXRhPC9oMT5cbiAgICAgICAgPGgyPkRhdGEgUXVhbGl0eSBHcmFkZToge3Byb3BzLm1pU3RhdHMuZGF0YVF1YWxpdHlHcmFkZX08L2gyPlxuICAgICAgICA8aDI+XG4gICAgICAgICAgRGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy5taVN0YXRzLmRhdGV9XG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxoMj5DdXJyZW50bHkgaG9zcGl0YWxpemVkOiB7cHJvcHMubWlTdGF0cy5ob3NwaXRhbGl6ZWRDdXJyZW50bHl9IDwvaDI+XG4gICAgICAgIDxoMj5DdXJyZW50bHkgaW4gSUNVOiB7cHJvcHMubWlTdGF0cy5pbkljdUN1cnJlbnRseX08L2gyPlxuICAgICAgICA8aDI+RGVhdGhzOiB7cHJvcHMubWlTdGF0cy5kZWF0aH08L2gyPlxuICAgICAgICA8aDI+UmVjb3ZlcmVkOiB7cHJvcHMubWlTdGF0cy5yZWNvdmVyZWR9PC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+IEN1cnJlbnQgVVMgRGF0YTwvaDE+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBEYXRhIGxhc3QgdXBkYXRlZDoge3Byb3BzLnVzU3RhdHMuZGF0ZX1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGgyPkN1cnJlbnRseSBob3NwaXRhbGl6ZWQ6IHtwcm9wcy51c1N0YXRzLmhvc3BpdGFsaXplZEN1cnJlbnRseX0gPC9oMj5cbiAgICAgICAgPGgyPkN1cnJlbnRseSBpbiBJQ1U6IHtwcm9wcy51c1N0YXRzLmluSWN1Q3VycmVudGx5fTwvaDI+XG4gICAgICAgIDxoMj5EZWF0aHM6IHtwcm9wcy51c1N0YXRzLmRlYXRofTwvaDI+XG4gICAgICAgIDxoMj5SZWNvdmVyZWQ6IHtwcm9wcy51c1N0YXRzLnJlY292ZXJlZH08L2gyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });