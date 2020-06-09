module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json");
var next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! next-i18next/package.json */ "./node_modules/next-i18next/package.json", 1);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = ({
  t
}) => __jsx("footer", null, __jsx("p", null, t('description')), __jsx("p", null, "next-i18next v", next_i18next_package_json__WEBPACK_IMPORTED_MODULE_2__["version"]));

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["withTranslation"])('footer')(Footer));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Header = ({
  title
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "next-i18next"), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "/static/app.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css",
  rel: "stylesheet"
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600",
  rel: "stylesheet"
}), __jsx("link", {
  "data-react-helmet": "true",
  rel: "icon",
  href: "https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media"
})), __jsx("h2", null, "next-i18next", __jsx("hr", null)), __jsx("h1", null, title), __jsx("a", {
  className: "github",
  href: "//github.com/isaachinman/next-i18next"
}, __jsx("i", {
  className: "typcn typcn-social-github-circular"
})));

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Do not copy/paste this code. It is used internally
  to manage end-to-end test suites.
*/
const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

const {
  localeSubpaths
} = __webpack_require__(/*! next/config */ "next/config").default().publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    de: 'de'
  },
  all: {
    en: 'en',
    de: 'de'
  }
};
module.exports = new NextI18Next({
  otherLanguages: ['de'],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});

/***/ }),

/***/ "./node_modules/next-i18next/package.json":
/*!************************************************!*\
  !*** ./node_modules/next-i18next/package.json ***!
  \************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, bundlesize, dependencies, deprecated, description, devDependencies, engines, funding, homepage, husky, keywords, license, main, name, peerDependencies, repository, scripts, types, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"next-i18next\",\"_id\":\"next-i18next@4.4.2\",\"_inBundle\":false,\"_integrity\":\"sha512-J7A0x4MFqDw2O2nJGId98pmeSTNwRpMHTSNboi4xeQsvl4PN5T3MrA/LZN0GJCa8rsRWR63dkNVYN8fx5OOg1A==\",\"_location\":\"/next-i18next\",\"_phantomChildren\":{\"@babel/runtime\":\"7.9.6\"},\"_requested\":{\"type\":\"tag\",\"registry\":true,\"raw\":\"next-i18next\",\"name\":\"next-i18next\",\"escapedName\":\"next-i18next\",\"rawSpec\":\"\",\"saveSpec\":null,\"fetchSpec\":\"latest\"},\"_requiredBy\":[\"#USER\",\"/\"],\"_resolved\":\"https://registry.npmjs.org/next-i18next/-/next-i18next-4.4.2.tgz\",\"_shasum\":\"ba7ed45d93b9123baa6f06abc29c784e06e2c088\",\"_spec\":\"next-i18next\",\"_where\":\"C:\\\\Users\\\\NguyễnLươngTrườngVĩ\\\\Downloads\\\\next-i18next-master\\\\examples\\\\simple\",\"author\":{\"name\":\"Isaac Hinman\",\"email\":\"isaac@isaachinman.com\"},\"bugs\":{\"url\":\"https://github.com/isaachinman/next-i18next/issues\"},\"bundleDependencies\":false,\"bundlesize\":[{\"path\":\"./examples/simple/.next/static/chunks/commons*.js\",\"maxSize\":\"106 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/main*.js\",\"maxSize\":\"8 kB\"},{\"path\":\"./examples/simple/.next/static/runtime/webpack*.js\",\"maxSize\":\"750 B\"}],\"dependencies\":{\"core-js\":\"^2\",\"detect-node\":\"^2.0.4\",\"hoist-non-react-statics\":\"^3.2.0\",\"i18next\":\"^19.0.3\",\"i18next-browser-languagedetector\":\"^4.0.0\",\"i18next-fs-backend\":\"^1.0.2\",\"i18next-http-backend\":\"^1.0.8\",\"i18next-http-middleware\":\">=1.0.2\",\"path-match\":\"^1.2.4\",\"prop-types\":\"^15.6.2\",\"react-i18next\":\"^11.0.0\",\"url\":\"^0.11.0\"},\"deprecated\":false,\"description\":\"The easiest way to translate your NextJs apps.\",\"devDependencies\":{\"@babel/cli\":\"^7.5.5\",\"@babel/core\":\"^7.5.5\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-transform-runtime\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"@babel/preset-react\":\"^7.0.0\",\"@babel/preset-typescript\":\"^7.3.3\",\"@types/express\":\"^4.16.1\",\"@types/jest\":\"^24.0.16\",\"@types/jest-environment-puppeteer\":\"^4.0.0\",\"@types/react\":\"^16.8.4\",\"@types/react-dom\":\"^16.8.2\",\"@typescript-eslint/eslint-plugin\":\"^1.13.0\",\"@typescript-eslint/parser\":\"^1.13.0\",\"all-contributors-cli\":\"^6.0.0\",\"babel-core\":\"^7.0.0-bridge.0\",\"babel-jest\":\"^24.1.0\",\"babel-plugin-add-module-exports\":\"^1.0.0\",\"babel-plugin-transform-async-to-generator\":\"^6.24.1\",\"bundlesize\":\"^0.18.0\",\"enzyme\":\"^3.8.0\",\"enzyme-adapter-react-16\":\"^1.7.1\",\"eslint\":\"^6.1.0\",\"eslint-plugin-import\":\"^2.17.1\",\"eslint-plugin-jsx-a11y\":\"^6.1.2\",\"eslint-plugin-react\":\"^7.14.3\",\"husky\":\"^3.0.0\",\"jest\":\"^24.1.0\",\"jest-puppeteer\":\"^4.0.0\",\"jsdom\":\"^15.0.0\",\"jsdom-global\":\"^3.0.2\",\"next\":\"^9.0.1\",\"puppeteer\":\"^1.11.0\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"typescript\":\"^3.5.3\"},\"engines\":{\"node\":\">=8\"},\"funding\":{\"type\":\"github\",\"url\":\"https://github.com/sponsors/isaachinman\"},\"homepage\":\"https://github.com/isaachinman/next-i18next#readme\",\"husky\":{\"hooks\":{\"pre-commit\":\"yarn lint && yarn test\"}},\"keywords\":[\"react\",\"i18next\",\"nextjs\",\"next\",\"translation\",\"localisation\",\"localization\",\"locale\"],\"license\":\"MIT\",\"main\":\"dist/commonjs/index.js\",\"name\":\"next-i18next\",\"peerDependencies\":{\"next\":\">= 7.0.0\",\"react\":\">= 16.8.0\"},\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@github.com/isaachinman/next-i18next.git\"},\"scripts\":{\"build\":\"yarn clean && yarn build:cjs && yarn build:es\",\"build:cjs\":\"BABEL_ENV=cjs babel src --extensions '.ts,.tsx' --out-dir dist/commonjs\",\"build:es\":\"BABEL_ENV=es babel src --extensions '.ts,.tsx' --out-dir dist/es\",\"build:examples/simple\":\"yarn --cwd examples/simple && yarn --cwd examples/simple build\",\"check-types\":\"tsc\",\"clean\":\"rm -rf examples/simple/.next && rm -rf dist && mkdir dist\",\"contributors:add\":\"all-contributors add\",\"contributors:check\":\"all-contributors check\",\"contributors:generate\":\"all-contributors generate\",\"heroku-postbuild\":\"yarn build && yarn build:examples/simple\",\"lint\":\"eslint types.d.ts src/**/* examples __tests__/**/*\",\"lint:fix\":\"eslint types.d.ts src/**/* examples __tests__/**/* --fix\",\"prepublishOnly\":\"yarn build\",\"run-example\":\"yarn build && cd examples/simple && yarn && yarn dev\",\"run-example:prod\":\"yarn --cwd examples/simple start\",\"test\":\"yarn check-types && yarn build && yarn build:examples/simple && bundlesize && NODE_ENV=test jest --maxWorkers=1 --silent\"},\"types\":\"./types.d.ts\",\"version\":\"4.4.2\"}");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Homepage = ({
  t
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("main", null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: t('h1')
}), __jsx("div", null, __jsx("button", {
  type: "button",
  onClick: () => _i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].changeLanguage(_i18n__WEBPACK_IMPORTED_MODULE_2__["i18n"].language === 'en' ? 'de' : 'en')
}, t('change-locale')), __jsx(_i18n__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  href: "/second-page"
}, __jsx("button", {
  type: "button"
}, t('to-second-page'))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer']
});

Homepage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])('common')(Homepage));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NguyễnLươngTrườngVĩ\Downloads\next-i18next-master\examples\simple\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkZvb3RlciIsInQiLCJ2ZXJzaW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJIZWFkZXIiLCJ0aXRsZSIsInN0cmluZyIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJsb2NhbGVTdWJwYXRocyIsInB1YmxpY1J1bnRpbWVDb25maWciLCJsb2NhbGVTdWJwYXRoVmFyaWF0aW9ucyIsIm5vbmUiLCJmb3JlaWduIiwiZGUiLCJhbGwiLCJlbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJvdGhlckxhbmd1YWdlcyIsIkhvbWVwYWdlIiwiaTE4biIsImNoYW5nZUxhbmd1YWdlIiwibGFuZ3VhZ2UiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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QUNBOztBQUVBLE1BQU1XLFFBQVEsR0FBRyxDQUFDO0FBQUV4QjtBQUFGLENBQUQsS0FDZixNQUFDLDRDQUFELENBQU8sUUFBUCxRQUNFLG9CQUNFLE1BQUMsMERBQUQ7QUFBUSxPQUFLLEVBQUVBLENBQUMsQ0FBQyxJQUFEO0FBQWhCLEVBREYsRUFFRSxtQkFDRTtBQUNFLE1BQUksRUFBQyxRQURQO0FBRUUsU0FBTyxFQUFFLE1BQU15QiwwQ0FBSSxDQUFDQyxjQUFMLENBQW9CRCwwQ0FBSSxDQUFDRSxRQUFMLEtBQWtCLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDLElBQXBEO0FBRmpCLEdBSUczQixDQUFDLENBQUMsZUFBRCxDQUpKLENBREYsRUFPRSxNQUFDLDBDQUFEO0FBQU0sTUFBSSxFQUFDO0FBQVgsR0FDRTtBQUNFLE1BQUksRUFBQztBQURQLEdBR0dBLENBQUMsQ0FBQyxnQkFBRCxDQUhKLENBREYsQ0FQRixDQUZGLENBREYsRUFtQkUsTUFBQywwREFBRCxPQW5CRixDQURGOztBQXdCQXdCLFFBQVEsQ0FBQ0ksZUFBVCxHQUEyQixhQUFhO0FBQ3RDQyxvQkFBa0IsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYO0FBRGtCLENBQWIsQ0FBM0I7O0FBSUFMLFFBQVEsQ0FBQ3RCLFNBQVQsR0FBcUI7QUFDbkJGLEdBQUMsRUFBRUcsaURBQVMsQ0FBQ0MsSUFBVixDQUFlQztBQURDLENBQXJCO0FBSWVDLDRIQUFlLENBQUMsUUFBRCxDQUFmLENBQTBCa0IsUUFBMUIsQ0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICduZXh0LWkxOG5leHQvcGFja2FnZS5qc29uJ1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuXG5jb25zdCBGb290ZXIgPSAoeyB0IH0pID0+IChcbiAgPGZvb3Rlcj5cbiAgICA8cD5cbiAgICAgIHt0KCdkZXNjcmlwdGlvbicpfVxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIG5leHQtaTE4bmV4dCB2XG4gICAgICB7dmVyc2lvbn1cbiAgICA8L3A+XG4gIDwvZm9vdGVyPlxuKVxuXG5Gb290ZXIucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2Zvb3RlcicpKEZvb3RlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIZWFkZXIgPSAoeyB0aXRsZSB9KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5uZXh0LWkxOG5leHQ8L3RpdGxlPlxuXG4gICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbWV5ZXItcmVzZXQvMi4wL3Jlc2V0Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2FwcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3R5cGljb25zLzIuMC45L3R5cGljb25zLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjMwMCw0MDB8T3N3YWxkOjYwMFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgPGxpbmsgZGF0YS1yZWFjdC1oZWxtZXQ9XCJ0cnVlXCIgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL2Jsb2JzY2RuLmdpdGJvb2suY29tL3YwL2IvZ2l0Ym9vay0yODQyNy5hcHBzcG90LmNvbS9vL3NwYWNlcyUyRi1MOWlTNldtMmh5blM1SDlHajdqJTJGYXZhdGFyLnBuZz9nZW5lcmF0aW9uPTE1MjM0NjIyNTQ1NDg3ODAmYW1wO2FsdD1tZWRpYVwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoMj5cbiAgICAgIG5leHQtaTE4bmV4dFxuICAgICAgPGhyIC8+XG4gICAgPC9oMj5cbiAgICA8aDE+XG4gICAgICB7dGl0bGV9XG4gICAgPC9oMT5cbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViXCJcbiAgICAgIGhyZWY9XCIvL2dpdGh1Yi5jb20vaXNhYWNoaW5tYW4vbmV4dC1pMThuZXh0XCJcbiAgICA+XG4gICAgICA8aSBjbGFzc05hbWU9XCJ0eXBjbiB0eXBjbi1zb2NpYWwtZ2l0aHViLWNpcmN1bGFyXCIgLz5cbiAgICA8L2E+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pXG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIiwiLypcbiAgRG8gbm90IGNvcHkvcGFzdGUgdGhpcyBjb2RlLiBJdCBpcyB1c2VkIGludGVybmFsbHlcbiAgdG8gbWFuYWdlIGVuZC10by1lbmQgdGVzdCBzdWl0ZXMuXG4qL1xuXG5jb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHRcbmNvbnN0IHsgbG9jYWxlU3VicGF0aHMgfSA9IHJlcXVpcmUoJ25leHQvY29uZmlnJykuZGVmYXVsdCgpLnB1YmxpY1J1bnRpbWVDb25maWdcblxuY29uc3QgbG9jYWxlU3VicGF0aFZhcmlhdGlvbnMgPSB7XG4gIG5vbmU6IHt9LFxuICBmb3JlaWduOiB7XG4gICAgZGU6ICdkZScsXG4gIH0sXG4gIGFsbDoge1xuICAgIGVuOiAnZW4nLFxuICAgIGRlOiAnZGUnLFxuICB9LFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2RlJ10sXG4gIGxvY2FsZVN1YnBhdGhzOiBsb2NhbGVTdWJwYXRoVmFyaWF0aW9uc1tsb2NhbGVTdWJwYXRoc10sXG59KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5pbXBvcnQgeyBpMThuLCBMaW5rLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY29uc3QgSG9tZXBhZ2UgPSAoeyB0IH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxtYWluPlxuICAgICAgPEhlYWRlciB0aXRsZT17dCgnaDEnKX0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaTE4bi5jaGFuZ2VMYW5ndWFnZShpMThuLmxhbmd1YWdlID09PSAnZW4nID8gJ2RlJyA6ICdlbicpfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2NoYW5nZS1sb2NhbGUnKX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxMaW5rIGhyZWY9Jy9zZWNvbmQtcGFnZSc+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0KCd0by1zZWNvbmQtcGFnZScpfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICAgPEZvb3RlciAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKVxuXG5Ib21lcGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJywgJ2Zvb3RlciddLFxufSlcblxuSG9tZXBhZ2UucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oJ2NvbW1vbicpKEhvbWVwYWdlKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=