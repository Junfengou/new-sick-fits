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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/reset.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, undefined), error.message.replace("GraphQL error: ", "")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined));
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, undefined), error.message.replace("GraphQL error: ", "")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 3
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\RequestReset.js";








const REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		sendUserPasswordResetLink(email: $email) {
			code
			message
		}
	}
`;

function RequestReset() {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    email: ""
  });
  const [sendUserPasswordResetLink, {
    data,
    error,
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(REQUEST_RESET_MUTATION, {
    variables: inputs,
    // refetch the currently logged in user
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_7__["CURRENT_USER_QUERY"]
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault(); // console.log(inputs);
    // Send the email and password to graphql API

    await sendUserPasswordResetLink().catch(console.error);
    resetForm();
  }
  /*
     const error =
  	data?.authenticateUserWithPassword.__typename ===
  	"UserAuthenticationWithPasswordFailure"
  		? data?.authenticateUserWithPassword
  		: undefined;
     */


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Request for password reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Success! Check your email for the link"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (RequestReset);

/***/ }),

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Reset.js";








const RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
	mutation RESET_MUTATION(
		$email: String!
		$token: String!
		$password: String!
	) {
		redeemUserPasswordResetToken(
			email: $email
			token: $token
			password: $password
		) {
			code
			message
		}
	}
`;

function Reset({
  token
}) {
  var _data$redeemUserPassw;

  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    email: "",
    password: "",
    token
  });
  const [redeemUserPasswordResetToken, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(RESET_MUTATION, {
    variables: inputs
  });
  const successfulError = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken : undefined;

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs); // Send the email and password to graphql API

    const res = await redeemUserPasswordResetToken().catch(console.error);
    console.log(res);
    console.log({
      data,
      loading,
      error
    });
    resetForm();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Reset your password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: error || successfulError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Success! You can now sign in"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "email",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Password Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Reset);

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: CURRENT_USER_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/*
	This is used in the [ <Nav /> ]

    It is very important to remember that the [authenticatedItem] returns a union type, meaning it's capable of returning multiple types
    This is keystone specific: 
        authenticatedItem
*/

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
	query {
		authenticatedItem {
			... on User {
				id
				email
				name
				# Todo: Query the cart once we have it
			}
		}
	}
`;

function useUser() {
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/* harmony default export */ __webpack_exports__["default"] = (useUser);

/***/ }),

/***/ "./components/styles/Form.js":
/*!***********************************!*\
  !*** ./components/styles/Form.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const loading = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{background-position:0 0;}to{background-position:100% 100%;}"]);
const Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Form",
  componentId: "sc-1xszr8q-0"
})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:", " 0.5s linear infinite;}}"], loading);
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function useForm(initial = {}) {
  // create a state object for our input
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);
  const initialValue = Object.values(initial).join("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInputs(initial);
  }, [initialValue]);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === "number") {
      value = Number(value);
    }

    if (type === "file") {
      [value] = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }
  /*
         take the [input] object and turn it into an array with Object.entries()
         then map through the array and destructure the key and value and for each key, we set the value to empty
     */


  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));
    setInputs(blankState);
  } // return the things we want to surface


  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useForm);

/***/ }),

/***/ "./pages/reset.js":
/*!************************!*\
  !*** ./pages/reset.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_Reset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Reset */ "./components/Reset.js");

var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\pages\\reset.js";




function reset({
  query
}) {
  if (!(query !== null && query !== void 0 && query.token)) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Sorry! You must supply a token!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_RequestReset__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Reset your password ", query.token]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Reset__WEBPACK_IMPORTED_MODULE_3__["default"], {
      token: query.token
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (reset);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNldC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdHlsZXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXNldC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkVycm9yU3R5bGVzIiwic3R5bGVkIiwiZGl2IiwiRGlzcGxheUVycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwibmV0d29ya0Vycm9yIiwicmVzdWx0IiwiZXJyb3JzIiwibGVuZ3RoIiwibWFwIiwiaSIsInJlcGxhY2UiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJSRVFVRVNUX1JFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVxdWVzdFJlc2V0IiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlRm9ybSIsImVtYWlsIiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayIsImRhdGEiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2F0Y2giLCJjb25zb2xlIiwiUkVTRVRfTVVUQVRJT04iLCJSZXNldCIsInRva2VuIiwicGFzc3dvcmQiLCJyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuIiwic3VjY2Vzc2Z1bEVycm9yIiwiY29kZSIsInVuZGVmaW5lZCIsImxvZyIsInJlcyIsInVzZVVzZXIiLCJ1c2VRdWVyeSIsImF1dGhlbnRpY2F0ZWRJdGVtIiwia2V5ZnJhbWVzIiwiRm9ybSIsImZvcm0iLCJpbml0aWFsIiwic2V0SW5wdXRzIiwidXNlU3RhdGUiLCJpbml0aWFsVmFsdWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwidXNlRWZmZWN0IiwidmFsdWUiLCJuYW1lIiwidHlwZSIsInRhcmdldCIsIk51bWJlciIsImZpbGVzIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImtleSIsInJlc2V0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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O0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQU1BOztBQUVjaUMsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvcmVzZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3Jlc2V0LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5cclxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0bWFyZ2luOiAycmVtIDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHRib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcclxuXHRwIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0fVxyXG5cdHN0cm9uZyB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDFyZW07XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xyXG5cdGlmICghZXJyb3IgfHwgIWVycm9yLm1lc3NhZ2UpIHJldHVybiBudWxsO1xyXG5cdGlmIChcclxuXHRcdGVycm9yLm5ldHdvcmtFcnJvciAmJlxyXG5cdFx0ZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdCAmJlxyXG5cdFx0ZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubGVuZ3RoXHJcblx0KSB7XHJcblx0XHRyZXR1cm4gZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnMubWFwKChlcnJvciwgaSkgPT4gKFxyXG5cdFx0XHQ8RXJyb3JTdHlsZXMga2V5PXtpfT5cclxuXHRcdFx0XHQ8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XHJcblx0XHRcdFx0XHQ8c3Ryb25nPlNob290ITwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0e2Vycm9yLm1lc3NhZ2UucmVwbGFjZShcIkdyYXBoUUwgZXJyb3I6IFwiLCBcIlwiKX1cclxuXHRcdFx0XHQ8L3A+XHJcblx0XHRcdDwvRXJyb3JTdHlsZXM+XHJcblx0XHQpKTtcclxuXHR9XHJcblx0cmV0dXJuIChcclxuXHRcdDxFcnJvclN0eWxlcz5cclxuXHRcdFx0PHAgZGF0YS10ZXN0PVwiZ3JhcGhxbC1lcnJvclwiPlxyXG5cdFx0XHRcdDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XHJcblx0XHRcdFx0e2Vycm9yLm1lc3NhZ2UucmVwbGFjZShcIkdyYXBoUUwgZXJyb3I6IFwiLCBcIlwiKX1cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9FcnJvclN0eWxlcz5cclxuXHQpO1xyXG59O1xyXG5cclxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcclxuXHRlcnJvcjoge30sXHJcbn07XHJcblxyXG5EaXNwbGF5RXJyb3IucHJvcFR5cGVzID0ge1xyXG5cdGVycm9yOiBQcm9wVHlwZXMub2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUVycm9yO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCBFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuXHJcbmNvbnN0IFJFUVVFU1RfUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gUkVRVUVTVF9SRVNFVF9NVVRBVElPTigkZW1haWw6IFN0cmluZyEpIHtcclxuXHRcdHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoZW1haWw6ICRlbWFpbCkge1xyXG5cdFx0XHRjb2RlXHJcblx0XHRcdG1lc3NhZ2VcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBSZXF1ZXN0UmVzZXQoKSB7XHJcblx0Y29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuXHRcdGVtYWlsOiBcIlwiLFxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBbc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluaywgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFxyXG5cdFx0UkVRVUVTVF9SRVNFVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHRcdC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG5cdFx0XHRyZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuXHRcdH1cclxuXHQpO1xyXG5cclxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coaW5wdXRzKTtcclxuXHJcblx0XHQvLyBTZW5kIHRoZSBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gZ3JhcGhxbCBBUElcclxuXHRcdGF3YWl0IHNlbmRVc2VyUGFzc3dvcmRSZXNldExpbmsoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0LypcclxuICAgIGNvbnN0IGVycm9yID1cclxuXHRcdGRhdGE/LmF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQuX190eXBlbmFtZSA9PT1cclxuXHRcdFwiVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZVwiXHJcblx0XHRcdD8gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZFxyXG5cdFx0XHQ6IHVuZGVmaW5lZDtcclxuICAgICovXHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcblx0XHRcdDxoMj5SZXF1ZXN0IGZvciBwYXNzd29yZCByZXNldDwvaDI+XHJcblx0XHRcdDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XHJcblx0XHRcdDxmaWVsZHNldD5cclxuXHRcdFx0XHR7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcblx0XHRcdFx0XHQ8cD5TdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsIGZvciB0aGUgbGluazwvcD5cclxuXHRcdFx0XHQpfVxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRFbWFpbFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUGFzc3dvcmQgUmVzZXQ8L2J1dHRvbj5cclxuXHRcdFx0PC9maWVsZHNldD5cclxuXHRcdDwvRm9ybT5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0UmVzZXQ7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yTWVzc2FnZVwiO1xyXG5cclxuY29uc3QgUkVTRVRfTVVUQVRJT04gPSBncWxgXHJcblx0bXV0YXRpb24gUkVTRVRfTVVUQVRJT04oXHJcblx0XHQkZW1haWw6IFN0cmluZyFcclxuXHRcdCR0b2tlbjogU3RyaW5nIVxyXG5cdFx0JHBhc3N3b3JkOiBTdHJpbmchXHJcblx0KSB7XHJcblx0XHRyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxyXG5cdFx0XHRlbWFpbDogJGVtYWlsXHJcblx0XHRcdHRva2VuOiAkdG9rZW5cclxuXHRcdFx0cGFzc3dvcmQ6ICRwYXNzd29yZFxyXG5cdFx0KSB7XHJcblx0XHRcdGNvZGVcclxuXHRcdFx0bWVzc2FnZVxyXG5cdFx0fVxyXG5cdH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFJlc2V0KHsgdG9rZW4gfSkge1xyXG5cdGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcblx0XHRlbWFpbDogXCJcIixcclxuXHRcdHBhc3N3b3JkOiBcIlwiLFxyXG5cdFx0dG9rZW4sXHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IFtyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcblx0XHRSRVNFVF9NVVRBVElPTixcclxuXHRcdHtcclxuXHRcdFx0dmFyaWFibGVzOiBpbnB1dHMsXHJcblx0XHR9XHJcblx0KTtcclxuXHJcblx0Y29uc3Qgc3VjY2Vzc2Z1bEVycm9yID0gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbj8uY29kZVxyXG5cdFx0PyBkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuXHJcblx0XHQ6IHVuZGVmaW5lZDtcclxuXHJcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKGlucHV0cyk7XHJcblxyXG5cdFx0Ly8gU2VuZCB0aGUgZW1haWwgYW5kIHBhc3N3b3JkIHRvIGdyYXBocWwgQVBJXHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKCkuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcblx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0Y29uc29sZS5sb2coeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9KTtcclxuXHRcdHJlc2V0Rm9ybSgpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuXHRcdFx0PGgyPlJlc2V0IHlvdXIgcGFzc3dvcmQ8L2gyPlxyXG5cdFx0XHQ8RXJyb3IgZXJyb3I9e2Vycm9yIHx8IHN1Y2Nlc3NmdWxFcnJvcn0gLz5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHRcdHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcclxuXHRcdFx0XHRcdDxwPlN1Y2Nlc3MhIFlvdSBjYW4gbm93IHNpZ24gaW48L3A+XHJcblx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0PGxhYmVsPlxyXG5cdFx0XHRcdFx0RW1haWxcclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuXHRcdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWw+XHJcblx0XHRcdFx0XHRQYXNzd29yZFxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5SZXF1ZXN0IFBhc3N3b3JkIFJlc2V0PC9idXR0b24+XHJcblx0XHRcdDwvZmllbGRzZXQ+XHJcblx0XHQ8L0Zvcm0+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVzZXQ7XHJcbiIsImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuXHJcbi8qXHJcblx0VGhpcyBpcyB1c2VkIGluIHRoZSBbIDxOYXYgLz4gXVxyXG5cclxuICAgIEl0IGlzIHZlcnkgaW1wb3J0YW50IHRvIHJlbWVtYmVyIHRoYXQgdGhlIFthdXRoZW50aWNhdGVkSXRlbV0gcmV0dXJucyBhIHVuaW9uIHR5cGUsIG1lYW5pbmcgaXQncyBjYXBhYmxlIG9mIHJldHVybmluZyBtdWx0aXBsZSB0eXBlc1xyXG4gICAgVGhpcyBpcyBrZXlzdG9uZSBzcGVjaWZpYzogXHJcbiAgICAgICAgYXV0aGVudGljYXRlZEl0ZW1cclxuKi9cclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcblx0cXVlcnkge1xyXG5cdFx0YXV0aGVudGljYXRlZEl0ZW0ge1xyXG5cdFx0XHQuLi4gb24gVXNlciB7XHJcblx0XHRcdFx0aWRcclxuXHRcdFx0XHRlbWFpbFxyXG5cdFx0XHRcdG5hbWVcclxuXHRcdFx0XHQjIFRvZG86IFF1ZXJ5IHRoZSBjYXJ0IG9uY2Ugd2UgaGF2ZSBpdFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gdXNlVXNlcigpIHtcclxuXHRjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcblx0cmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyO1xyXG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgbG9hZGluZyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIC8qIHJvdGF0ZTogMDsgKi9cbiAgfVxuXG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XG4gICAgLyogcm90YXRlOiAzNjBkZWc7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAwIDVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsYWJlbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBpbnB1dCxcbiAgdGV4dGFyZWEsXG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXJlZCk7XG4gICAgfVxuICB9XG4gIGJ1dHRvbixcbiAgaW5wdXRbdHlwZT0nc3VibWl0J10ge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gIH1cbiAgZmllbGRzZXQge1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgICAmOjpiZWZvcmUge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gcmlnaHQsXG4gICAgICAgICNmZjMwMTkgMCUsXG4gICAgICAgICNlMmIwNGEgNTAlLFxuICAgICAgICAjZmYzMDE5IDEwMCVcbiAgICAgICk7XG4gICAgfVxuICAgICZbYXJpYS1idXN5PSd0cnVlJ106OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJSBhdXRvO1xuICAgICAgYW5pbWF0aW9uOiAke2xvYWRpbmd9IDAuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm0oaW5pdGlhbCA9IHt9KSB7XHJcblx0Ly8gY3JlYXRlIGEgc3RhdGUgb2JqZWN0IGZvciBvdXIgaW5wdXRcclxuXHRjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoaW5pdGlhbCk7XHJcblx0Y29uc3QgaW5pdGlhbFZhbHVlID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKFwiXCIpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0SW5wdXRzKGluaXRpYWwpO1xyXG5cdH0sIFtpbml0aWFsVmFsdWVdKTtcclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcclxuXHRcdGxldCB7IHZhbHVlLCBuYW1lLCB0eXBlIH0gPSBlLnRhcmdldDtcclxuXHRcdGlmICh0eXBlID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodHlwZSA9PT0gXCJmaWxlXCIpIHtcclxuXHRcdFx0W3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG5cdFx0fVxyXG5cdFx0c2V0SW5wdXRzKHtcclxuXHRcdFx0Li4uaW5wdXRzLFxyXG5cdFx0XHRbbmFtZV06IHZhbHVlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByZXNldEZvcm0oKSB7XHJcblx0XHRzZXRJbnB1dHMoaW5pdGlhbCk7XHJcblx0fVxyXG5cclxuXHQvKlxyXG4gICAgICAgIHRha2UgdGhlIFtpbnB1dF0gb2JqZWN0IGFuZCB0dXJuIGl0IGludG8gYW4gYXJyYXkgd2l0aCBPYmplY3QuZW50cmllcygpXHJcbiAgICAgICAgdGhlbiBtYXAgdGhyb3VnaCB0aGUgYXJyYXkgYW5kIGRlc3RydWN0dXJlIHRoZSBrZXkgYW5kIHZhbHVlIGFuZCBmb3IgZWFjaCBrZXksIHdlIHNldCB0aGUgdmFsdWUgdG8gZW1wdHlcclxuICAgICovXHJcblx0ZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG5cdFx0Y29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuXHRcdFx0T2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgXCJcIl0pXHJcblx0XHQpO1xyXG5cdFx0c2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG5cdH1cclxuXHJcblx0Ly8gcmV0dXJuIHRoZSB0aGluZ3Mgd2Ugd2FudCB0byBzdXJmYWNlXHJcblx0cmV0dXJuIHtcclxuXHRcdGlucHV0cyxcclxuXHRcdGhhbmRsZUNoYW5nZSxcclxuXHRcdHJlc2V0Rm9ybSxcclxuXHRcdGNsZWFyRm9ybSxcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VGb3JtO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVxdWVzdFJlc2V0XCI7XHJcbmltcG9ydCBSZXNldCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNldFwiO1xyXG5cclxuZnVuY3Rpb24gcmVzZXQoeyBxdWVyeSB9KSB7XHJcblx0aWYgKCFxdWVyeT8udG9rZW4pIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PHA+U29ycnkhIFlvdSBtdXN0IHN1cHBseSBhIHRva2VuITwvcD5cclxuXHRcdFx0XHQ8UmVxdWVzdFJlc2V0IC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8cD5SZXNldCB5b3VyIHBhc3N3b3JkIHtxdWVyeS50b2tlbn08L3A+XHJcblx0XHRcdDxSZXNldCB0b2tlbj17cXVlcnkudG9rZW59IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXNldDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==