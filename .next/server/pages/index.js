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

/***/ "./pages/CardLink.js":
/*!***************************!*\
  !*** ./pages/CardLink.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CardLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/CardLink.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction CardLink(props) {\n  return __jsx(\"a\", {\n    href: props.url,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }\n  }, props.description), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }\n  }, props.url));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9DYXJkTGluay5qcz82YTE1Il0sIm5hbWVzIjpbIkNhcmRMaW5rIiwicHJvcHMiLCJ1cmwiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3BDLFNBQ0k7QUFBRyxRQUFJLEVBQUVBLEtBQUssQ0FBQ0MsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxLQUFLLENBQUNFLFdBQVgsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0YsS0FBSyxDQUFDQyxHQUFYLENBRkosQ0FESjtBQU1IIiwiZmlsZSI6Ii4vcGFnZXMvQ2FyZExpbmsuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRMaW5rKHByb3BzKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8YSBocmVmPXtwcm9wcy51cmx9PlxuICAgICAgICAgICAgPGgyPntwcm9wcy5kZXNjcmlwdGlvbn08L2gyPlxuICAgICAgICAgICAgPGgzPntwcm9wcy51cmx9PC9oMz5cbiAgICAgICAgPC9hPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/CardLink.js\n");

/***/ }),

/***/ "./pages/getData.js":
/*!**************************!*\
  !*** ./pages/getData.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getData(url) {\n  try {\n    let res = await fetch(url);\n    return await res.json();\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZXREYXRhLmpzPzQ4MmQiXSwibmFtZXMiOlsiZ2V0RGF0YSIsInVybCIsInJlcyIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixNQUFJO0FBQ0YsUUFBSUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUFyQjtBQUNBLFdBQU8sTUFBTUMsR0FBRyxDQUFDRSxJQUFKLEVBQWI7QUFDRCxHQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRjs7QUFFY0wsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9nZXREYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwpIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/getData.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./pages/getData.js\");\n/* harmony import */ var _CardLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardLink */ \"./pages/CardLink.js\");\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nasync function getStaticProps(context) {\n  const miStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/states/mi/current.json\");\n  const usStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/us/current.json\");\n  const miInfo = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/states/mi/info.json\");\n  return {\n    props: {\n      miStats,\n      usStats,\n      miInfo\n    }\n  };\n}\n\nfunction Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-blue-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \" Current Michigan Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Data Quality Grade: \", props.miStats.dataQualityGrade), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.miStats.date, \" \", __jsx(\"span\", {\n    className: \"text-gray-700 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 89\n    }\n  }, \" YYYYMMDD \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 73\n    }\n  }, \" \", props.miStats.hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 67\n    }\n  }, props.miStats.inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 57\n    }\n  }, props.miStats.death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 60\n    }\n  }, props.miStats.recovered)), __jsx(\"h2\", {\n    className: \"text-2xl my-4 text-blue-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 10\n    }\n  }, \"State Links\"), __jsx(_CardLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    url: props.miInfo.covid19Site,\n    description: \"Michigans current state website\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  })), __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-red-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \" Current US Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 73\n    }\n  }, props.usStats[0].hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 67\n    }\n  }, props.usStats[0].inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 57\n    }\n  }, props.usStats[0].death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 60\n    }\n  }, props.usStats[0].recovered))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1pU3RhdHMiLCJnZXREYXRhIiwidXNTdGF0cyIsIm1pSW5mbyIsInByb3BzIiwiSW5kZXgiLCJkYXRhUXVhbGl0eUdyYWRlIiwiZGF0ZSIsImhvc3BpdGFsaXplZEN1cnJlbnRseSIsImluSWN1Q3VycmVudGx5IiwiZGVhdGgiLCJyZWNvdmVyZWQiLCJjb3ZpZDE5U2l0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLGVBQWVBLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyx3REFBTyxDQUMzQix5REFEMkIsQ0FBN0I7QUFHQSxRQUFNQyxPQUFPLEdBQUcsTUFBTUQsd0RBQU8sQ0FDM0Isa0RBRDJCLENBQTdCO0FBR0EsUUFBTUUsTUFBTSxHQUFHLE1BQU1GLHdEQUFPLENBQzFCLHNEQUQwQixDQUE1QjtBQUlBLFNBQU87QUFDTEcsU0FBSyxFQUFFO0FBQ0xKLGFBREs7QUFFTEUsYUFGSztBQUdMQztBQUhLO0FBREYsR0FBUDtBQU9EOztBQUVELFNBQVNFLEtBQVQsQ0FBZUQsS0FBZixFQUFzQjtBQUVwQixTQUNFLG1FQUNFO0FBQVMsYUFBUyxFQUFDLDZCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBNkRBLEtBQUssQ0FBQ0osT0FBTixDQUFjTSxnQkFBM0UsQ0FGRixFQUdFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQTRERixLQUFL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QU4sQ0FBYyxDQUFkLEVBQWlCUyxTQUF4RCxDQUFuRCxDQU5GLENBdEJGLENBREY7QUFpQ0Q7O0FBRWNOLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0RGF0YSBmcm9tIFwiLi9nZXREYXRhXCI7XG5pbXBvcnQgQ2FyZExpbmsgZnJvbSAnLi9DYXJkTGluaydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgbWlTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS9zdGF0ZXMvbWkvY3VycmVudC5qc29uXCJcbiAgKTtcbiAgY29uc3QgdXNTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS91cy9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCBtaUluZm8gPSBhd2FpdCBnZXREYXRhKFxuICAgIFwiaHR0cHM6Ly9hcGkuY292aWR0cmFja2luZy5jb20vdjEvc3RhdGVzL21pL2luZm8uanNvblwiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWlTdGF0cyxcbiAgICAgIHVzU3RhdHMsXG4gICAgICBtaUluZm8sXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHAtNiByb3VuZGVkIG0tMVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMFwiPiBDdXJyZW50IE1pY2hpZ2FuIERhdGE8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5EYXRhIFF1YWxpdHkgR3JhZGU6IHtwcm9wcy5taVN0YXRzLmRhdGFRdWFsaXR5R3JhZGV9PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy5taVN0YXRzLmRhdGV9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgcGwtMlwiPiBZWVlZTU1ERCA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGhvc3BpdGFsaXplZDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwIHBsLTJcIj4ge3Byb3BzLm1pU3RhdHMuaG9zcGl0YWxpemVkQ3VycmVudGx5fSA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGluIElDVTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5pbkljdUN1cnJlbnRseX08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGVhdGhzOiA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1wdXJwbGUtNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5kZWF0aH08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+UmVjb3ZlcmVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBwbC0yXCI+e3Byb3BzLm1pU3RhdHMucmVjb3ZlcmVkfTwvc3Bhbj48L2gyPlxuXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbXktNCB0ZXh0LWJsdWUtNzAwXCI+U3RhdGUgTGlua3M8L2gyPlxuICAgICAgXG4gICAgICAgICAgICA8Q2FyZExpbmsgdXJsPXtwcm9wcy5taUluZm8uY292aWQxOVNpdGV9IGRlc2NyaXB0aW9uPVwiTWljaGlnYW5zIGN1cnJlbnQgc3RhdGUgd2Vic2l0ZVwiPjwvQ2FyZExpbms+XG4gICAgICAgIFxuICAgICAgPC9zZWN0aW9uPlxuXG5cblxuXG5cblxuXG4gICAgICA8c2VjdGlvbiAgY2xhc3NOYW1lPVwiYmctZ3JheS05MDAgcC02IHJvdW5kZWQgbS0xXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDBcIj4gQ3VycmVudCBVUyBEYXRhPC9oMT5cbiAgICAgICAgey8qIDxoMj5EYXRhIGxhc3QgdXBkYXRlZDoge3Byb3BzLnVzU3RhdHNbMF0uZGVhdGh9PC9oMj4gKi99XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkN1cnJlbnRseSBob3NwaXRhbGl6ZWQ6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uaG9zcGl0YWxpemVkQ3VycmVudGx5fSA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGluIElDVTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIHBsLTJcIj57cHJvcHMudXNTdGF0c1swXS5pbkljdUN1cnJlbnRseX08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGVhdGhzOiA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1wdXJwbGUtNDAwIHBsLTJcIj57cHJvcHMudXNTdGF0c1swXS5kZWF0aH08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+UmVjb3ZlcmVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0ucmVjb3ZlcmVkfTwvc3Bhbj48L2gyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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