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

/***/ "./pages/getData.js":
/*!**************************!*\
  !*** ./pages/getData.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getData(url) {\n  try {\n    let res = await fetch(url);\n    return await res.json();\n  } catch (error) {\n    console.log(error);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9nZXREYXRhLmpzPzQ4MmQiXSwibmFtZXMiOlsiZ2V0RGF0YSIsInVybCIsInJlcyIsImZldGNoIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QjtBQUUxQixNQUFJO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ0YsR0FBRCxDQUFyQjtBQUNBLFdBQU8sTUFBTUMsR0FBRyxDQUFDRSxJQUFKLEVBQWI7QUFDSCxHQUhELENBR0UsT0FBT0MsS0FBUCxFQUFjO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0g7QUFDRjs7QUFFY0wsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9nZXREYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSh1cmwpIHtcbiAgXG4gIHRyeSB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/getData.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./pages/getData.js\");\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nasync function getStaticProps(context) {\n  const miStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/states/mi/current.json\");\n  const usStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/us/current.json\");\n  return {\n    props: {\n      miStats,\n      usStats\n    }\n  };\n}\n\nfunction Index(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-blue-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \" Current Michigan Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Data Quality Grade: \", props.miStats.dataQualityGrade), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"Data last updated: \", props.miStats.date, \" \", __jsx(\"span\", {\n    className: \"text-gray-700 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 89\n    }\n  }, \" YYYYMMDD \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 73\n    }\n  }, \" \", props.miStats.hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 67\n    }\n  }, props.miStats.inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 57\n    }\n  }, props.miStats.death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 60\n    }\n  }, props.miStats.recovered))), __jsx(\"section\", {\n    className: \"bg-gray-900 p-6 rounded m-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: \"text-red-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \" Current US Data\"), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"Currently hospitalized: \", __jsx(\"span\", {\n    className: \"text-orange-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 73\n    }\n  }, props.usStats[0].hospitalizedCurrently, \" \")), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Currently in ICU: \", __jsx(\"span\", {\n    className: \"text-indigo-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 67\n    }\n  }, props.usStats[0].inIcuCurrently)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"Deaths: \", __jsx(\"span\", {\n    className: \" text-purple-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 57\n    }\n  }, props.usStats[0].death)), __jsx(\"h2\", {\n    className: \"my-1 text-gray-400 pl-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, \"Recovered: \", __jsx(\"span\", {\n    className: \"text-green-400 pl-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 60\n    }\n  }, props.usStats[0].recovered))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1pU3RhdHMiLCJnZXREYXRhIiwidXNTdGF0cyIsInByb3BzIiwiSW5kZXgiLCJkYXRhUXVhbGl0eUdyYWRlIiwiZGF0ZSIsImhvc3BpdGFsaXplZEN1cnJlbnRseSIsImluSWN1Q3VycmVudGx5IiwiZGVhdGgiLCJyZWNvdmVyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFTyxlQUFlQSxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsd0RBQU8sQ0FDM0IseURBRDJCLENBQTdCO0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1ELHdEQUFPLENBQzNCLGtEQUQyQixDQUE3QjtBQUlBLFNBQU87QUFDTEUsU0FBSyxFQUFFO0FBQ0xILGFBREs7QUFFTEU7QUFGSztBQURGLEdBQVA7QUFNRDs7QUFFRCxTQUFTRSxLQUFULENBQWVELEtBQWYsRUFBc0I7QUFFcEIsU0FDRSxtRUFDRTtBQUFTLGFBQVMsRUFBQyw2QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFERixFQUVFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQTZEQSxLQUFLLENBQUNILE9BQU4sQ0FBY0ssZ0JBQTNFLENBRkYsRUFHRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUE0REYsS0FBSyxDQUFDSCxPQUFOLENBQWNNLElBQTFFLE9BQWdGO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFoRixDQUhGLEVBSUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBZ0U7QUFBTSxhQUFTLEVBQUMsc0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBeUNILEtBQUssQ0FBQ0gsT0FBTixDQUFjTyxxQkFBdkQsTUFBaEUsQ0FKRixFQUtFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTBEO0FBQU0sYUFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdDSixLQUFLLENBQUNILE9BQU4sQ0FBY1EsY0FBdEQsQ0FBMUQsQ0FMRixFQU1FO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdEO0FBQU0sYUFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDTCxLQUFLLENBQUNILE9BQU4sQ0FBY1MsS0FBdkQsQ0FBaEQsQ0FORixFQU9FO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQW1EO0FBQU0sYUFBUyxFQUFDLHFCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDTixLQUFLLENBQUNILE9BQU4sQ0FBY1UsU0FBckQsQ0FBbkQsQ0FQRixDQURGLEVBVUU7QUFBVSxhQUFTLEVBQUMsNkJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFHRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUFnRTtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q1AsS0FBSyxDQUFDRCxPQUFOLENBQWMsQ0FBZCxFQUFpQksscUJBQXpELE1BQWhFLENBSEYsRUFJRTtBQUFJLGFBQVMsRUFBQyx5QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUEwRDtBQUFNLGFBQVMsRUFBQyxzQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3Q0osS0FBSyxDQUFDRCxPQUFOLENBQWMsQ0FBZCxFQUFpQk0sY0FBekQsQ0FBMUQsQ0FKRixFQUtFO0FBQUksYUFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWdEO0FBQU0sYUFBUyxFQUFDLHVCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlDTCxLQUFLLENBQUNELE9BQU4sQ0FBYyxDQUFkLEVBQWlCTyxLQUExRCxDQUFoRCxDQUxGLEVBTUU7QUFBSSxhQUFTLEVBQUMseUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbUQ7QUFBTSxhQUFTLEVBQUMscUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUNOLEtBQUssQ0FBQ0QsT0FBTixDQUFjLENBQWQsRUFBaUJRLFNBQXhELENBQW5ELENBTkYsQ0FWRixDQURGO0FBcUJEOztBQUVjTixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vZ2V0RGF0YVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBtaVN0YXRzID0gYXdhaXQgZ2V0RGF0YShcbiAgICBcImh0dHBzOi8vYXBpLmNvdmlkdHJhY2tpbmcuY29tL3YxL3N0YXRlcy9taS9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCB1c1N0YXRzID0gYXdhaXQgZ2V0RGF0YShcbiAgICBcImh0dHBzOi8vYXBpLmNvdmlkdHJhY2tpbmcuY29tL3YxL3VzL2N1cnJlbnQuanNvblwiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWlTdGF0cyxcbiAgICAgIHVzU3RhdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHAtNiByb3VuZGVkIG0tMVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTcwMFwiPiBDdXJyZW50IE1pY2hpZ2FuIERhdGE8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5EYXRhIFF1YWxpdHkgR3JhZGU6IHtwcm9wcy5taVN0YXRzLmRhdGFRdWFsaXR5R3JhZGV9PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy5taVN0YXRzLmRhdGV9IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgcGwtMlwiPiBZWVlZTU1ERCA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGhvc3BpdGFsaXplZDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNDAwIHBsLTJcIj4ge3Byb3BzLm1pU3RhdHMuaG9zcGl0YWxpemVkQ3VycmVudGx5fSA8L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+Q3VycmVudGx5IGluIElDVTogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5pbkljdUN1cnJlbnRseX08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+RGVhdGhzOiA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1wdXJwbGUtNDAwIHBsLTJcIj57cHJvcHMubWlTdGF0cy5kZWF0aH08L3NwYW4+PC9oMj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm15LTEgdGV4dC1ncmF5LTQwMCBwbC00XCI+UmVjb3ZlcmVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTQwMCBwbC0yXCI+e3Byb3BzLm1pU3RhdHMucmVjb3ZlcmVkfTwvc3Bhbj48L2gyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIHAtNiByb3VuZGVkIG0tMVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNzAwXCI+IEN1cnJlbnQgVVMgRGF0YTwvaDE+XG4gICAgICAgIHsvKiA8aDI+RGF0YSBsYXN0IHVwZGF0ZWQ6IHtwcm9wcy51c1N0YXRzWzBdLmRlYXRofTwvaDI+ICovfVxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXktMSB0ZXh0LWdyYXktNDAwIHBsLTRcIj5DdXJyZW50bHkgaG9zcGl0YWxpemVkOiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS00MDAgcGwtMlwiPntwcm9wcy51c1N0YXRzWzBdLmhvc3BpdGFsaXplZEN1cnJlbnRseX0gPC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkN1cnJlbnRseSBpbiBJQ1U6IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uaW5JY3VDdXJyZW50bHl9PC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPkRlYXRoczogPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtcHVycGxlLTQwMCBwbC0yXCI+e3Byb3BzLnVzU3RhdHNbMF0uZGVhdGh9PC9zcGFuPjwvaDI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJteS0xIHRleHQtZ3JheS00MDAgcGwtNFwiPlJlY292ZXJlZDogPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi00MDAgcGwtMlwiPntwcm9wcy51c1N0YXRzWzBdLnJlY292ZXJlZH08L3NwYW4+PC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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