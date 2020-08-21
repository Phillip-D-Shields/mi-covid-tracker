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

/***/ "./components/FolderList.js":
/*!**********************************!*\
  !*** ./components/FolderList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FolderList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LocalHospital */ \"@material-ui/icons/LocalHospital\");\n/* harmony import */ var _material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Hotel */ \"@material-ui/icons/Hotel\");\n/* harmony import */ var _material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Report__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Report */ \"@material-ui/icons/Report\");\n/* harmony import */ var _material_ui_icons_Report__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Report__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_icons_LocalPharmacy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LocalPharmacy */ \"@material-ui/icons/LocalPharmacy\");\n/* harmony import */ var _material_ui_icons_LocalPharmacy__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalPharmacy__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Work */ \"@material-ui/icons/Work\");\n/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/BeachAccess */ \"@material-ui/icons/BeachAccess\");\n/* harmony import */ var _material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BeachAccess__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/components/FolderList.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: {\n    width: '100%',\n    maxWidth: 360,\n    backgroundColor: theme.palette.background.paper\n  }\n}));\nfunction FolderList(props) {\n  const classes = useStyles();\n  return __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"amber\"][500]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_LocalHospital__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"amber\"][600]\n    },\n    primary: props.primary00,\n    secondary: \"Currently Hospitalized\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"red\"][600]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_Hotel__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"red\"][600]\n    },\n    primary: props.primary01,\n    secondary: \"Currently in ICU\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"purple\"][600]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_Report__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"purple\"][600]\n    },\n    primary: props.primary02,\n    secondary: \"Deaths\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"green\"][600]\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_icons_LocalPharmacy__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"green\"][600]\n    },\n    primary: props.primary03,\n    secondary: \"Recovered\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"green\"][600]\n    },\n    primary: props.primary04,\n    secondary: \"YYYYMMDD Data updated\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    style: {\n      color: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"green\"][600]\n    },\n    primary: props.primary05,\n    secondary: \"Current Data Quality Grade\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZvbGRlckxpc3QuanM/NGVkNiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJtYXhXaWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJGb2xkZXJMaXN0IiwicHJvcHMiLCJjbGFzc2VzIiwiYW1iZXIiLCJjb2xvciIsInByaW1hcnkwMCIsInJlZCIsInByaW1hcnkwMSIsInB1cnBsZSIsInByaW1hcnkwMiIsImdyZWVuIiwicHJpbWFyeTAzIiwicHJpbWFyeTA0IiwicHJpbWFyeTA1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBRUMsS0FBRCxLQUFZO0FBQ3ZDQyxNQUFJLEVBQUU7QUFDSkMsU0FBSyxFQUFFLE1BREg7QUFFSkMsWUFBUSxFQUFFLEdBRk47QUFHSkMsbUJBQWUsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBSHRDO0FBRGlDLENBQVosQ0FBRCxDQUE1QjtBQVNlLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3hDLFFBQU1DLE9BQU8sR0FBR1osU0FBUyxFQUF6QjtBQUVBLFNBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFDTSxxQkFBZSxFQUFFTywrREFBSyxDQUFDLEdBQUQ7QUFBdkIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyxxRUFBRDtBQUFjLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUVELCtEQUFLLENBQUMsR0FBRDtBQUFiLEtBQXJCO0FBQTBDLFdBQU8sRUFBRUYsS0FBSyxDQUFDSSxTQUF6RDtBQUFvRSxhQUFTLEVBQUMsd0JBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLEVBU0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFDVCxxQkFBZSxFQUFFVSw2REFBRyxDQUFDLEdBQUQ7QUFBckIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyxxRUFBRDtBQUFjLFNBQUssRUFBRTtBQUFDRixXQUFLLEVBQUVFLDZEQUFHLENBQUMsR0FBRDtBQUFYLEtBQXJCO0FBQXdDLFdBQU8sRUFBRUwsS0FBSyxDQUFDTSxTQUF2RDtBQUFrRSxhQUFTLEVBQUMsa0JBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQVRGLEVBaUJFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBUyxTQUFLLEVBQUU7QUFBQ1gscUJBQWUsRUFBRVksZ0VBQU0sQ0FBQyxHQUFEO0FBQXhCLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRSxNQUFDLHFFQUFEO0FBQWMsU0FBSyxFQUFFO0FBQUNKLFdBQUssRUFBRUksZ0VBQU0sQ0FBQyxHQUFEO0FBQWQsS0FBckI7QUFBMkMsV0FBTyxFQUFFUCxLQUFLLENBQUNRLFNBQTFEO0FBQXFFLGFBQVMsRUFBQyxRQUEvRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsQ0FqQkYsRUF5QkUsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrREFBRDtBQUFRLFNBQUssRUFBRTtBQUFDYixxQkFBZSxFQUFFYywrREFBSyxDQUFDLEdBQUQ7QUFBdkIsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLEVBTUUsTUFBQyxxRUFBRDtBQUFjLFNBQUssRUFBRTtBQUFDTixXQUFLLEVBQUVNLCtEQUFLLENBQUMsR0FBRDtBQUFiLEtBQXJCO0FBQTBDLFdBQU8sRUFBRVQsS0FBSyxDQUFDVSxTQUF6RDtBQUFvRSxhQUFTLEVBQUMsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBekJGLEVBaUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMscUVBQUQ7QUFBYyxTQUFLLEVBQUU7QUFBQ1AsV0FBSyxFQUFFTSwrREFBSyxDQUFDLEdBQUQ7QUFBYixLQUFyQjtBQUEwQyxXQUFPLEVBQUVULEtBQUssQ0FBQ1csU0FBekQ7QUFBb0UsYUFBUyxFQUFDLHVCQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FqQ0YsRUFxQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyxxRUFBRDtBQUFjLFNBQUssRUFBRTtBQUFDUixXQUFLLEVBQUVNLCtEQUFLLENBQUMsR0FBRDtBQUFiLEtBQXJCO0FBQTBDLFdBQU8sRUFBRVQsS0FBSyxDQUFDWSxTQUF6RDtBQUFvRSxhQUFTLEVBQUMsNEJBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQXJDRixDQURGO0FBNENEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb2xkZXJMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IExvY2FsSG9zcGl0YWwgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsSG9zcGl0YWwnO1xuaW1wb3J0IEhvdGVsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG90ZWwnO1xuaW1wb3J0IFJlcG9ydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydCc7XG5pbXBvcnQgTG9jYWxQaGFybWFjeUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsUGhhcm1hY3knO1xuXG5pbXBvcnQgV29ya0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dvcmsnO1xuaW1wb3J0IEJlYWNoQWNjZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQmVhY2hBY2Nlc3MnO1xuaW1wb3J0IHsgYW1iZXIsIHJlZCwgZ3JlZW4sIHB1cnBsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogMzYwLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICB9LFxuICBcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9sZGVyTGlzdChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGlzdCA+XG4gICAgICA8TGlzdEl0ZW0gPlxuICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgPEF2YXRhciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYW1iZXJbNTAwXX19PlxuICAgICAgICAgICAgPExvY2FsSG9zcGl0YWwgLz5cbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgPExpc3RJdGVtVGV4dCBzdHlsZT17e2NvbG9yOiBhbWJlcls2MDBdfX0gcHJpbWFyeT17cHJvcHMucHJpbWFyeTAwfSBzZWNvbmRhcnk9XCJDdXJyZW50bHkgSG9zcGl0YWxpemVkXCIgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICA8QXZhdGFyIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiByZWRbNjAwXX19ID5cbiAgICAgICAgICAgIDxIb3RlbEljb24vPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7Y29sb3I6IHJlZFs2MDBdfX0gcHJpbWFyeT17cHJvcHMucHJpbWFyeTAxfSBzZWNvbmRhcnk9XCJDdXJyZW50bHkgaW4gSUNVXCIgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICA8QXZhdGFyICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogcHVycGxlWzYwMF19fT5cbiAgICAgICAgICAgIDxSZXBvcnRJY29uIC8+XG4gICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgc3R5bGU9e3tjb2xvcjogcHVycGxlWzYwMF19fSBwcmltYXJ5PXtwcm9wcy5wcmltYXJ5MDJ9IHNlY29uZGFyeT1cIkRlYXRoc1wiIC8+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPExpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgPEF2YXRhciBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogZ3JlZW5bNjAwXX19PlxuICAgICAgICAgICAgPExvY2FsUGhhcm1hY3lJY29uIC8+XG4gICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgIDwvTGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgc3R5bGU9e3tjb2xvcjogZ3JlZW5bNjAwXX19IHByaW1hcnk9e3Byb3BzLnByaW1hcnkwM30gc2Vjb25kYXJ5PVwiUmVjb3ZlcmVkXCIgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0+XG4gICAgICAgIFxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7Y29sb3I6IGdyZWVuWzYwMF19fSBwcmltYXJ5PXtwcm9wcy5wcmltYXJ5MDR9IHNlY29uZGFyeT1cIllZWVlNTUREIERhdGEgdXBkYXRlZFwiIC8+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPExpc3RJdGVtPlxuICAgICAgICBcbiAgICAgICAgPExpc3RJdGVtVGV4dCBzdHlsZT17e2NvbG9yOiBncmVlbls2MDBdfX0gcHJpbWFyeT17cHJvcHMucHJpbWFyeTA1fSBzZWNvbmRhcnk9XCJDdXJyZW50IERhdGEgUXVhbGl0eSBHcmFkZVwiIC8+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIDwvTGlzdD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FolderList.js\n");

/***/ }),

/***/ "./components/MainLink.js":
/*!********************************!*\
  !*** ./components/MainLink.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainLink; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/components/MainLink.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction MainLink(props) {\n  return __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: props.href,\n    style: {\n      marginRight: 8\n    },\n    target: \"_blank\",\n    rel: \"noopener noreferrer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"contained\",\n    color: props.btnColor,\n    endIcon: props.endIcon,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, props.btnText));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5MaW5rLmpzP2Y5YjMiXSwibmFtZXMiOlsiTWFpbkxpbmsiLCJwcm9wcyIsImhyZWYiLCJtYXJnaW5SaWdodCIsImJ0bkNvbG9yIiwiZW5kSWNvbiIsImJ0blRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3RDLFNBQ0UsTUFBQyw2REFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFsQjtBQUF3QixTQUFLLEVBQUU7QUFBQ0MsaUJBQVcsRUFBRTtBQUFkLEtBQS9CO0FBQWlELFVBQU0sRUFBQyxRQUF4RDtBQUFpRSxPQUFHLEVBQUMscUJBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLCtEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBRUYsS0FBSyxDQUFDRyxRQUF6QztBQUFtRCxXQUFPLEVBQUVILEtBQUssQ0FBQ0ksT0FBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixLQUFLLENBQUNLLE9BRFQsQ0FERixDQURGO0FBUUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5MaW5rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5MaW5rKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17cHJvcHMuaHJlZn0gc3R5bGU9e3ttYXJnaW5SaWdodDogOH19IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPXtwcm9wcy5idG5Db2xvcn0gZW5kSWNvbj17cHJvcHMuZW5kSWNvbn0+XG4gICAgICAgIHtwcm9wcy5idG5UZXh0fVxuICAgICAgPC9CdXR0b24+XG5cbiAgICA8L0xpbms+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainLink.js\n");

/***/ }),

/***/ "./components/simpleCard.js":
/*!**********************************!*\
  !*** ./components/simpleCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SimpleCard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ \"@material-ui/core/Link\");\n/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/components/simpleCard.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])({\n  root: {\n    minWidth: 500\n  },\n  title: {\n    fontSize: 14\n  },\n  pos: {\n    marginBottom: 12\n  }\n});\nfunction SimpleCard(props) {\n  const classes = useStyles();\n  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h3\",\n    gutterBottom: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, props.header), props.children), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NpbXBsZUNhcmQuanM/MTZiNSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1pbldpZHRoIiwidGl0bGUiLCJmb250U2l6ZSIsInBvcyIsIm1hcmdpbkJvdHRvbSIsIlNpbXBsZUNhcmQiLCJwcm9wcyIsImNsYXNzZXMiLCJoZWFkZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDM0JDLE1BQUksRUFBRTtBQUNKQyxZQUFRLEVBQUU7QUFETixHQURxQjtBQUkzQkMsT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRTtBQURMLEdBSm9CO0FBTzNCQyxLQUFHLEVBQUU7QUFDSEMsZ0JBQVksRUFBRTtBQURYO0FBUHNCLENBQUQsQ0FBNUI7QUFZZSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUN4QyxRQUFNQyxPQUFPLEdBQUdWLFNBQVMsRUFBekI7QUFFQSxTQUNFLE1BQUMsNkRBQUQ7QUFBTSxhQUFTLEVBQUVVLE9BQU8sQ0FBQ1IsSUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBeUIsZ0JBQVksTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTyxLQUFLLENBQUNFLE1BRFQsQ0FERixFQUtHRixLQUFLLENBQUNHLFFBTFQsQ0FGRixFQVNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLENBREY7QUFjRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2ltcGxlQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtaW5XaWR0aDogNTAwLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgcG9zOiB7XG4gICAgbWFyZ2luQm90dG9tOiAxMixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVDYXJkKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIFxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAge3Byb3BzLmhlYWRlcn1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICBcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDxDYXJkQWN0aW9ucz4gXG4gICAgICA8L0NhcmRBY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/simpleCard.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./pages/getData.js\");\n/* harmony import */ var _components_simpleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/simpleCard */ \"./components/simpleCard.js\");\n/* harmony import */ var _components_FolderList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FolderList */ \"./components/FolderList.js\");\n/* harmony import */ var _components_MainLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MainLink */ \"./components/MainLink.js\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ \"@material-ui/core/Box\");\n/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Twitter */ \"@material-ui/icons/Twitter\");\n/* harmony import */ var _material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/OpenInBrowser */ \"@material-ui/icons/OpenInBrowser\");\n/* harmony import */ var _material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/colors/amber */ \"@material-ui/core/colors/amber\");\n/* harmony import */ var _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);\nvar _jsxFileName = \"/home/phillip/code/nextjs/mi-covid-tracker/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // import { makeStyles } from '@material-ui/core/styles';\n\n\n\n\n\n\n\n\n\n\n\nasync function getStaticProps(context) {\n  const miStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/states/mi/current.json\");\n  const usStats = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/us/current.json\");\n  const miInfo = await Object(_getData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://api.covidtracking.com/v1/states/mi/info.json\");\n  return {\n    props: {\n      miStats,\n      usStats,\n      miInfo\n    }\n  };\n}\n\nfunction Index(props) {\n  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"createMuiTheme\"])({\n    palette: {\n      primary: {\n        main: _material_ui_core_colors_amber__WEBPACK_IMPORTED_MODULE_9___default.a[500]\n      },\n      secondary: {\n        main: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10___default.a[500]\n      }\n    }\n  });\n  return __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"ThemeProvider\"], {\n    theme: theme,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    display: \"flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(_components_simpleCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    header: \"Michigan Data\",\n    linkStyles: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(_components_FolderList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    primary00: props.miStats.hospitalizedCurrently,\n    primary01: props.miStats.inIcuCurrently,\n    primary02: props.miStats.death,\n    primary03: props.miStats.recovered,\n    primary04: props.miStats.date,\n    primary05: props.miStats.dataQualityGrade,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }), __jsx(_components_MainLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    btnText: \"Michigan .Gov\",\n    href: props.miInfo.covid19Site,\n    btnColor: \"secondary\",\n    endIcon: __jsx(_material_ui_icons_OpenInBrowser__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 22\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }), __jsx(_components_MainLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    btnText: \"Michigan HHS\",\n    href: \"https://twitter.com/michiganhhs\",\n    btnColor: \"secondary\",\n    endIcon: __jsx(_material_ui_icons_Twitter__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 22\n      }\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsIm1pU3RhdHMiLCJnZXREYXRhIiwidXNTdGF0cyIsIm1pSW5mbyIsInByb3BzIiwiSW5kZXgiLCJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiYW1iZXIiLCJzZWNvbmRhcnkiLCJncmVlbiIsImhvc3BpdGFsaXplZEN1cnJlbnRseSIsImluSWN1Q3VycmVudGx5IiwiZGVhdGgiLCJyZWNvdmVyZWQiLCJkYXRlIiwiZGF0YVF1YWxpdHlHcmFkZSIsImNvdmlkMTlTaXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJTyxlQUFlQSxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNQyxPQUFPLEdBQUcsTUFBTUMsd0RBQU8sQ0FDM0IseURBRDJCLENBQTdCO0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1ELHdEQUFPLENBQzNCLGtEQUQyQixDQUE3QjtBQUdBLFFBQU1FLE1BQU0sR0FBRyxNQUFNRix3REFBTyxDQUMxQixzREFEMEIsQ0FBNUI7QUFJQSxTQUFPO0FBQ0xHLFNBQUssRUFBRTtBQUNMSixhQURLO0FBRUxFLGFBRks7QUFHTEM7QUFISztBQURGLEdBQVA7QUFPRDs7QUFFRCxTQUFTRSxLQUFULENBQWVELEtBQWYsRUFBc0I7QUFDcEIsUUFBTUUsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxXQUFPLEVBQUU7QUFDUEMsYUFBTyxFQUFFO0FBQ1BDLFlBQUksRUFBRUMscUVBQUssQ0FBQyxHQUFEO0FBREosT0FERjtBQUlQQyxlQUFTLEVBQUU7QUFDVEYsWUFBSSxFQUFFRyxzRUFBSyxDQUFDLEdBQUQ7QUFERjtBQUpKO0FBRGtCLEdBQUQsQ0FBNUI7QUFXQSxTQUNFLE1BQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUVQLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBWSxVQUFNLEVBQUMsZUFBbkI7QUFBbUMsY0FBVSxFQUFDLEVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0UsYUFBUyxFQUFFRixLQUFLLENBQUNKLE9BQU4sQ0FBY2MscUJBRDNCO0FBRUUsYUFBUyxFQUFFVixLQUFLLENBQUNKLE9BQU4sQ0FBY2UsY0FGM0I7QUFHRSxhQUFTLEVBQUVYLEtBQUssQ0FBQ0osT0FBTixDQUFjZ0IsS0FIM0I7QUFJRSxhQUFTLEVBQUVaLEtBQUssQ0FBQ0osT0FBTixDQUFjaUIsU0FKM0I7QUFLRSxhQUFTLEVBQUViLEtBQUssQ0FBQ0osT0FBTixDQUFja0IsSUFMM0I7QUFNRSxhQUFTLEVBQUVkLEtBQUssQ0FBQ0osT0FBTixDQUFjbUIsZ0JBTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVVFLE1BQUMsNERBQUQ7QUFDRSxXQUFPLEVBQUMsZUFEVjtBQUVFLFFBQUksRUFBRWYsS0FBSyxDQUFDRCxNQUFOLENBQWFpQixXQUZyQjtBQUdFLFlBQVEsRUFBQyxXQUhYO0FBSUUsV0FBTyxFQUFFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRixFQWdCRSxNQUFDLDREQUFEO0FBQ0UsV0FBTyxFQUFDLGNBRFY7QUFFRSxRQUFJLEVBQUMsaUNBRlA7QUFHRSxZQUFRLEVBQUMsV0FIWDtBQUlFLFdBQU8sRUFBRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEJGLENBREYsQ0FERixDQURGO0FBOEJEOztBQUVjZixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4vZ2V0RGF0YVwiO1xuLy8gaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgU2ltcGxlQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9zaW1wbGVDYXJkXCI7XG5pbXBvcnQgRm9sZGVyTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb2xkZXJMaXN0XCI7XG5pbXBvcnQgTWFpbkxpbmsgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkxpbmtcIjtcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBUd2l0dGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlcic7XG5pbXBvcnQgT3BlbkluQnJvd3Nlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL09wZW5JbkJyb3dzZXInO1xuXG5pbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBhbWJlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2FtYmVyXCI7XG5pbXBvcnQgZ3JlZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlblwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgbWlTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS9zdGF0ZXMvbWkvY3VycmVudC5qc29uXCJcbiAgKTtcbiAgY29uc3QgdXNTdGF0cyA9IGF3YWl0IGdldERhdGEoXG4gICAgXCJodHRwczovL2FwaS5jb3ZpZHRyYWNraW5nLmNvbS92MS91cy9jdXJyZW50Lmpzb25cIlxuICApO1xuICBjb25zdCBtaUluZm8gPSBhd2FpdCBnZXREYXRhKFxuICAgIFwiaHR0cHM6Ly9hcGkuY292aWR0cmFja2luZy5jb20vdjEvc3RhdGVzL21pL2luZm8uanNvblwiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWlTdGF0cyxcbiAgICAgIHVzU3RhdHMsXG4gICAgICBtaUluZm8sXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBtYWluOiBhbWJlcls1MDBdLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBtYWluOiBncmVlbls1MDBdLFxuICAgICAgfSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCI+XG4gICAgICAgIDxTaW1wbGVDYXJkIGhlYWRlcj1cIk1pY2hpZ2FuIERhdGFcIiBsaW5rU3R5bGVzPVwiXCI+XG4gICAgICAgICAgPEZvbGRlckxpc3RcbiAgICAgICAgICAgIHByaW1hcnkwMD17cHJvcHMubWlTdGF0cy5ob3NwaXRhbGl6ZWRDdXJyZW50bHl9XG4gICAgICAgICAgICBwcmltYXJ5MDE9e3Byb3BzLm1pU3RhdHMuaW5JY3VDdXJyZW50bHl9XG4gICAgICAgICAgICBwcmltYXJ5MDI9e3Byb3BzLm1pU3RhdHMuZGVhdGh9XG4gICAgICAgICAgICBwcmltYXJ5MDM9e3Byb3BzLm1pU3RhdHMucmVjb3ZlcmVkfVxuICAgICAgICAgICAgcHJpbWFyeTA0PXtwcm9wcy5taVN0YXRzLmRhdGV9XG4gICAgICAgICAgICBwcmltYXJ5MDU9e3Byb3BzLm1pU3RhdHMuZGF0YVF1YWxpdHlHcmFkZX1cbiAgICAgICAgICA+PC9Gb2xkZXJMaXN0PlxuICAgICAgICAgXG4gICAgICAgICAgPE1haW5MaW5rXG4gICAgICAgICAgICBidG5UZXh0PVwiTWljaGlnYW4gLkdvdlwiXG4gICAgICAgICAgICBocmVmPXtwcm9wcy5taUluZm8uY292aWQxOVNpdGV9XG4gICAgICAgICAgICBidG5Db2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBlbmRJY29uPXs8T3BlbkluQnJvd3Nlckljb24gLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TWFpbkxpbmtcbiAgICAgICAgICAgIGJ0blRleHQ9J01pY2hpZ2FuIEhIUydcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL21pY2hpZ2FuaGhzXCJcbiAgICAgICAgICAgIGJ0bkNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGVuZEljb249ezxUd2l0dGVySWNvbiAvPn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICA8L1NpbXBsZUNhcmQ+XG4gICAgICA8L0JveD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIj8wMGQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Avatar\n");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Box\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIj81MDZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Box\n");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIj81NzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Button\n");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCI/YjBmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Card\n");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiPzdkODUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CardActions\n");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiPzRkNGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CardContent\n");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI/YjIxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Link\n");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI/YTE2NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/List\n");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiP2I5NzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/ListItem\n");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhclwiPzM0NTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/ListItemAvatar\n");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIj84NTIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/ListItemText\n");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI/MGJlYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/Typography\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/colors/amber":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/amber" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/amber\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvYW1iZXJcIj83ZDNhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9hbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9hbWJlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors/amber\n");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW5cIj8wZGVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors/green\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "@material-ui/icons/BeachAccess":
/*!*************************************************!*\
  !*** external "@material-ui/icons/BeachAccess" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/BeachAccess\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmVhY2hBY2Nlc3NcIj9jNWI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9CZWFjaEFjY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CZWFjaEFjY2Vzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/BeachAccess\n");

/***/ }),

/***/ "@material-ui/icons/Hotel":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Hotel" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Hotel\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG90ZWxcIj9mZjg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9pY29ucy9Ib3RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Ib3RlbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Hotel\n");

/***/ }),

/***/ "@material-ui/icons/LocalHospital":
/*!***************************************************!*\
  !*** external "@material-ui/icons/LocalHospital" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LocalHospital\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxIb3NwaXRhbFwiPzk5ZDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsSG9zcGl0YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxIb3NwaXRhbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/LocalHospital\n");

/***/ }),

/***/ "@material-ui/icons/LocalPharmacy":
/*!***************************************************!*\
  !*** external "@material-ui/icons/LocalPharmacy" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/LocalPharmacy\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxQaGFybWFjeVwiPzRlMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsUGhhcm1hY3kuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxQaGFybWFjeVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/LocalPharmacy\n");

/***/ }),

/***/ "@material-ui/icons/OpenInBrowser":
/*!***************************************************!*\
  !*** external "@material-ui/icons/OpenInBrowser" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/OpenInBrowser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvT3BlbkluQnJvd3NlclwiP2M0MTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL09wZW5JbkJyb3dzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvT3BlbkluQnJvd3NlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/OpenInBrowser\n");

/***/ }),

/***/ "@material-ui/icons/Report":
/*!********************************************!*\
  !*** external "@material-ui/icons/Report" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Report\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0XCI/YTI1YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAbWF0ZXJpYWwtdWkvaWNvbnMvUmVwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1JlcG9ydFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Report\n");

/***/ }),

/***/ "@material-ui/icons/Twitter":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Twitter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiPzg0ZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1R3aXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVHdpdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Twitter\n");

/***/ }),

/***/ "@material-ui/icons/Work":
/*!******************************************!*\
  !*** external "@material-ui/icons/Work" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Work\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV29ya1wiPzBjN2IiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2ljb25zL1dvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvV29ya1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/icons/Work\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ })

/******/ });