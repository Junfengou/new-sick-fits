webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");



var _jsxFileName = "D:\\React\\Advanced-React\\Advanced-React\\sick-fits\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_React_Advanced_React_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Search() {
  _s();

  var _useCombobox = Object(downshift__WEBPACK_IMPORTED_MODULE_2__["useCombobox"])({
    items: [],
    // Fire when input detected in the search box
    onInputValueChange: function onInputValueChange() {
      console.log("Input changed");
    },
    // Fire when someone select an item from dropbown box
    onSelectedItemChange: function onSelectedItemChange() {
      console.log("Selected item change");
    }
  }),
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["SearchStyles"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getComboboxProps), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an item",
        id: "search",
        className: "loading"
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDown"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_DropDown__WEBPACK_IMPORTED_MODULE_4__["DropDownItem"], {
        children: "Woah"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

_s(Search, "ZKwuOux1SqYhJinrbgrSMfKGmEo=", false, function () {
  return [downshift__WEBPACK_IMPORTED_MODULE_2__["useCombobox"]];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/compute-scroll-into-view/dist/index.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/compute-scroll-into-view/dist/index.module.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function t(t){return null!=t&&"object"==typeof t&&1===t.nodeType}function e(t,e){return(!e||"hidden"!==t)&&"visible"!==t&&"clip"!==t}function n(t,n){if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){var r=getComputedStyle(t,null);return e(r.overflowY,n)||e(r.overflowX,n)||function(t){var e=function(t){if(!t.ownerDocument||!t.ownerDocument.defaultView)return null;try{return t.ownerDocument.defaultView.frameElement}catch(t){return null}}(t);return!!e&&(e.clientHeight<t.scrollHeight||e.clientWidth<t.scrollWidth)}(t)}return!1}function r(t,e,n,r,i,o,l,d){return o<t&&l>e||o>t&&l<e?0:o<=t&&d<=n||l>=e&&d>=n?o-t-r:l>e&&d<n||o<t&&d>n?l-e+i:0}/* harmony default export */ __webpack_exports__["default"] = (function(e,i){var o=window,l=i.scrollMode,d=i.block,u=i.inline,h=i.boundary,a=i.skipOverflowHiddenElements,c="function"==typeof h?h:function(t){return t!==h};if(!t(e))throw new TypeError("Invalid target");for(var f=document.scrollingElement||document.documentElement,s=[],p=e;t(p)&&c(p);){if((p=p.parentNode)===f){s.push(p);break}p===document.body&&n(p)&&!n(document.documentElement)||n(p,a)&&s.push(p)}for(var g=o.visualViewport?o.visualViewport.width:innerWidth,m=o.visualViewport?o.visualViewport.height:innerHeight,w=window.scrollX||pageXOffset,v=window.scrollY||pageYOffset,W=e.getBoundingClientRect(),b=W.height,H=W.width,y=W.top,M=W.right,E=W.bottom,V=W.left,x="start"===d||"nearest"===d?y:"end"===d?E:y+b/2,I="center"===u?V+H/2:"end"===u?M:V,C=[],T=0;T<s.length;T++){var k=s[T],B=k.getBoundingClientRect(),D=B.height,O=B.width,R=B.top,X=B.right,Y=B.bottom,L=B.left;if("if-needed"===l&&y>=0&&V>=0&&E<=m&&M<=g&&y>=R&&E<=Y&&V>=L&&M<=X)return C;var S=getComputedStyle(k),j=parseInt(S.borderLeftWidth,10),N=parseInt(S.borderTopWidth,10),q=parseInt(S.borderRightWidth,10),z=parseInt(S.borderBottomWidth,10),A=0,F=0,G="offsetWidth"in k?k.offsetWidth-k.clientWidth-j-q:0,J="offsetHeight"in k?k.offsetHeight-k.clientHeight-N-z:0;if(f===k)A="start"===d?x:"end"===d?x-m:"nearest"===d?r(v,v+m,m,N,z,v+x,v+x+b,b):x-m/2,F="start"===u?I:"center"===u?I-g/2:"end"===u?I-g:r(w,w+g,g,j,q,w+I,w+I+H,H),A=Math.max(0,A+v),F=Math.max(0,F+w);else{A="start"===d?x-R-N:"end"===d?x-Y+z+J:"nearest"===d?r(R,Y,D,N,z+J,x,x+b,b):x-(R+D/2)+J/2,F="start"===u?I-L-j:"center"===u?I-(L+O/2)+G/2:"end"===u?I-X+q+G:r(L,X,O,j,q+G,I,I+H,H);var K=k.scrollLeft,P=k.scrollTop;x+=P-(A=Math.max(0,Math.min(P+A,k.scrollHeight-D+J))),I+=K-(F=Math.max(0,Math.min(K+F,k.scrollWidth-O+G)))}C.push({el:k,top:A,left:F})}return C});
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/downshift/dist/downshift.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/downshift/dist/downshift.esm.js ***!
  \******************************************************/
/*! exports provided: default, resetIdCounter, useCombobox, useMultipleSelection, useSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetIdCounter", function() { return resetIdCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCombobox", function() { return useCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMultipleSelection", function() { return useMultipleSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSelect", function() { return useSelect; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-is */ "./node_modules/downshift/node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! compute-scroll-into-view */ "./node_modules/compute-scroll-into-view/dist/index.module.js");









var idCounter = 0;
/**
 * Accepts a parameter and returns it if it's a function
 * or a noop function if it's not. This allows us to
 * accept a callback, but not worry about it if it's not
 * passed.
 * @param {Function} cb the callback
 * @return {Function} a function
 */

function cbToCb(cb) {
  return typeof cb === 'function' ? cb : noop;
}

function noop() {}
/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node the element that should scroll into view
 * @param {HTMLElement} menuNode the menu element of the component
 */


function scrollIntoView(node, menuNode) {
  if (!node) {
    return;
  }

  var actions = Object(compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_7__["default"])(node, {
    boundary: menuNode,
    block: 'nearest',
    scrollMode: 'if-needed'
  });
  actions.forEach(function (_ref) {
    var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
    el.scrollTop = top;
    el.scrollLeft = left;
  });
}
/**
 * @param {HTMLElement} parent the parent node
 * @param {HTMLElement} child the child node
 * @return {Boolean} whether the parent is the child or the child is in the parent
 */


function isOrContainsNode(parent, child) {
  return parent === child || child instanceof Node && parent.contains && parent.contains(child);
}
/**
 * Simple debounce implementation. Will call the given
 * function once after the time given has passed since
 * it was last called.
 * @param {Function} fn the function to call after the time
 * @param {Number} time the time to wait
 * @return {Function} the debounced function
 */


function debounce(fn, time) {
  var timeoutId;

  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }

  function wrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    cancel();
    timeoutId = setTimeout(function () {
      timeoutId = null;
      fn.apply(void 0, args);
    }, time);
  }

  wrapper.cancel = cancel;
  return wrapper;
}
/**
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them sets
 * `event.preventDownshiftDefault = true`.
 * @param {...Function} fns the event handler functions
 * @return {Function} the event handler to add to an element
 */


function callAllEventHandlers() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return fns.some(function (fn) {
      if (fn) {
        fn.apply(void 0, [event].concat(args));
      }

      return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
    });
  };
}

function handleRefs() {
  for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    refs[_key4] = arguments[_key4];
  }

  return function (node) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    });
  };
}
/**
 * This generates a unique ID for an instance of Downshift
 * @return {String} the unique ID
 */


function generateId() {
  return String(idCounter++);
}
/**
 * Resets idCounter to 0. Used for SSR.
 */


function resetIdCounter() {
  idCounter = 0;
}
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */


function getA11yStatusMessage(_ref2) {
  var isOpen = _ref2.isOpen,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
  }

  return '';
}
/**
 * Takes an argument and if it's an array, returns the first item in the array
 * otherwise returns the argument
 * @param {*} arg the maybe-array
 * @param {*} defaultValue the value if arg is falsey not defined
 * @return {*} the arg or it's first item
 */


function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ?
  /* istanbul ignore next (preact) */
  arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  } else {
    return arg;
  }
}
/**
 * @param {Object} element (P)react element
 * @return {Boolean} whether it's a DOM element
 */


function isDOMElement(element) {


  return typeof element.type === 'string';
}
/**
 * @param {Object} element (P)react element
 * @return {Object} the props
 */


function getElementProps(element) {

  return element.props;
}
/**
 * Throws a helpful error message for required properties. Useful
 * to be used as a default in destructuring or object params.
 * @param {String} fnName the function name
 * @param {String} propName the prop name
 */


function requiredProp(fnName, propName) {
  // eslint-disable-next-line no-console
  console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
}

var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
/**
 * @param {Object} state the state object
 * @return {Object} state that is relevant to downshift
 */

function pickState(state) {
  if (state === void 0) {
    state = {};
  }

  var result = {};
  stateKeys.forEach(function (k) {
    if (state.hasOwnProperty(k)) {
      result[k] = state[k];
    }
  });
  return result;
}
/**
 * This will perform a shallow merge of the given state object
 * with the state coming from props
 * (for the controlled component scenario)
 * This is used in state updater functions so they're referencing
 * the right state regardless of where it comes from.
 *
 * @param {Object} state The state of the component/hook.
 * @param {Object} props The props that may contain controlled values.
 * @returns {Object} The merged controlled state.
 */


function getState(state, props) {
  return Object.keys(state).reduce(function (prevState, key) {
    prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
    return prevState;
  }, {});
}
/**
 * This determines whether a prop is a "controlled prop" meaning it is
 * state which is controlled by the outside of this component rather
 * than within this component.
 *
 * @param {Object} props The props that may contain controlled values.
 * @param {String} key the key to check
 * @return {Boolean} whether it is a controlled controlled prop
 */


function isControlledProp(props, key) {
  return props[key] !== undefined;
}
/**
 * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
 * @param {Object} event a keyboardEvent object
 * @return {String} keyboard key
 */


function normalizeArrowKey(event) {
  var key = event.key,
      keyCode = event.keyCode;
  /* istanbul ignore next (ie) */

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow" + key;
  }

  return key;
}
/**
 * Simple check if the value passed is object literal
 * @param {*} obj any things
 * @return {Boolean} whether it's object literal
 */


function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
 * it will wrap to either 0 or itemCount - 1.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index after the move.
 */


function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  if (circular === void 0) {
    circular = true;
  }

  if (itemCount === 0) {
    return -1;
  }

  var itemsLastIndex = itemCount - 1;

  if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
    baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
  }

  var newIndex = baseIndex + moveAmount;

  if (newIndex < 0) {
    newIndex = circular ? itemsLastIndex : 0;
  } else if (newIndex > itemsLastIndex) {
    newIndex = circular ? 0 : itemsLastIndex;
  }

  var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);

  if (nonDisabledNewIndex === -1) {
    return baseIndex >= itemCount ? -1 : baseIndex;
  }

  return nonDisabledNewIndex;
}
/**
 * Returns the next index in the list of an item that is not disabled.
 *
 * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
 * @param {number} baseIndex The initial position to move from.
 * @param {number} itemCount The total number of items.
 * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
 * @param {boolean} circular Specify if navigation is circular. Default is true.
 * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
 */


function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
  var currentElementNode = getItemNodeFromIndex(baseIndex);

  if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
    return baseIndex;
  }

  if (moveAmount > 0) {
    for (var index = baseIndex + 1; index < itemCount; index++) {
      if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
        return index;
      }
    }
  } else {
    for (var _index = baseIndex - 1; _index >= 0; _index--) {
      if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
        return _index;
      }
    }
  }

  if (circular) {
    return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
  }

  return -1;
}
/**
 * Checks if event target is within the downshift elements.
 *
 * @param {EventTarget} target Target to check.
 * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
 * @param {Document} document The document.
 * @param {boolean} checkActiveElement Whether to also check activeElement.
 *
 * @returns {boolean} Whether or not the target is within downshift elements.
 */


function targetWithinDownshift(target, downshiftElements, document, checkActiveElement) {
  if (checkActiveElement === void 0) {
    checkActiveElement = true;
  }

  return downshiftElements.some(function (contextNode) {
    return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
  });
} // eslint-disable-next-line import/no-mutable-exports


var validateControlledUnchanged = noop;
/* istanbul ignore next */

if (true) {
  validateControlledUnchanged = function validateControlledUnchanged(state, prevProps, nextProps) {
    var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
    Object.keys(state).forEach(function (propKey) {
      if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
      } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
      }
    });
  };
}

var cleanupStatus = debounce(function (documentProp) {
  getStatusDiv(documentProp).textContent = '';
}, 500);
/**
 * @param {String} status the status message
 * @param {Object} documentProp document passed by the user.
 */

function setStatus(status, documentProp) {
  var div = getStatusDiv(documentProp);

  if (!status) {
    return;
  }

  div.textContent = status;
  cleanupStatus(documentProp);
}
/**
 * Get the status node or create it if it does not already exist.
 * @param {Object} documentProp document passed by the user.
 * @return {HTMLElement} the status node.
 */


function getStatusDiv(documentProp) {
  if (documentProp === void 0) {
    documentProp = document;
  }

  var statusDiv = documentProp.getElementById('a11y-status-message');

  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = documentProp.createElement('div');
  statusDiv.setAttribute('id', 'a11y-status-message');
  statusDiv.setAttribute('role', 'status');
  statusDiv.setAttribute('aria-live', 'polite');
  statusDiv.setAttribute('aria-relevant', 'additions text');
  Object.assign(statusDiv.style, {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    width: '1px'
  });
  documentProp.body.appendChild(statusDiv);
  return statusDiv;
}

var unknown =  true ? '__autocomplete_unknown__' : undefined;
var mouseUp =  true ? '__autocomplete_mouseup__' : undefined;
var itemMouseEnter =  true ? '__autocomplete_item_mouseenter__' : undefined;
var keyDownArrowUp =  true ? '__autocomplete_keydown_arrow_up__' : undefined;
var keyDownArrowDown =  true ? '__autocomplete_keydown_arrow_down__' : undefined;
var keyDownEscape =  true ? '__autocomplete_keydown_escape__' : undefined;
var keyDownEnter =  true ? '__autocomplete_keydown_enter__' : undefined;
var keyDownHome =  true ? '__autocomplete_keydown_home__' : undefined;
var keyDownEnd =  true ? '__autocomplete_keydown_end__' : undefined;
var clickItem =  true ? '__autocomplete_click_item__' : undefined;
var blurInput =  true ? '__autocomplete_blur_input__' : undefined;
var changeInput =  true ? '__autocomplete_change_input__' : undefined;
var keyDownSpaceButton =  true ? '__autocomplete_keydown_space_button__' : undefined;
var clickButton =  true ? '__autocomplete_click_button__' : undefined;
var blurButton =  true ? '__autocomplete_blur_button__' : undefined;
var controlledPropUpdatedSelectedItem =  true ? '__autocomplete_controlled_prop_updated_selected_item__' : undefined;
var touchEnd =  true ? '__autocomplete_touchend__' : undefined;

var stateChangeTypes = /*#__PURE__*/Object.freeze({
  __proto__: null,
  unknown: unknown,
  mouseUp: mouseUp,
  itemMouseEnter: itemMouseEnter,
  keyDownArrowUp: keyDownArrowUp,
  keyDownArrowDown: keyDownArrowDown,
  keyDownEscape: keyDownEscape,
  keyDownEnter: keyDownEnter,
  keyDownHome: keyDownHome,
  keyDownEnd: keyDownEnd,
  clickItem: clickItem,
  blurInput: blurInput,
  changeInput: changeInput,
  keyDownSpaceButton: keyDownSpaceButton,
  clickButton: clickButton,
  blurButton: blurButton,
  controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
  touchEnd: touchEnd
});

var Downshift = /*#__PURE__*/function () {
  var Downshift = /*#__PURE__*/function (_Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Downshift, _Component);

    function Downshift(_props) {
      var _this;

      _this = _Component.call(this, _props) || this; // fancy destructuring + defaults + aliases
      // this basically says each value of state should either be set to
      // the initial value or the default value if the initial value is not provided

      _this.id = _this.props.id || "downshift-" + generateId();
      _this.menuId = _this.props.menuId || _this.id + "-menu";
      _this.labelId = _this.props.labelId || _this.id + "-label";
      _this.inputId = _this.props.inputId || _this.id + "-input";

      _this.getItemId = _this.props.getItemId || function (index) {
        return _this.id + "-item-" + index;
      };

      _this.input = null;
      _this.items = [];
      _this.itemCount = null;
      _this.previousResultCount = 0;
      _this.timeoutIds = [];

      _this.internalSetTimeout = function (fn, time) {
        var id = setTimeout(function () {
          _this.timeoutIds = _this.timeoutIds.filter(function (i) {
            return i !== id;
          });
          fn();
        }, time);

        _this.timeoutIds.push(id);
      };

      _this.setItemCount = function (count) {
        _this.itemCount = count;
      };

      _this.unsetItemCount = function () {
        _this.itemCount = null;
      };

      _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
        if (highlightedIndex === void 0) {
          highlightedIndex = _this.props.defaultHighlightedIndex;
        }

        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          highlightedIndex: highlightedIndex
        }, otherStateToSet));
      };

      _this.clearSelection = function (cb) {
        _this.internalSetState({
          selectedItem: null,
          inputValue: '',
          highlightedIndex: _this.props.defaultHighlightedIndex,
          isOpen: _this.props.defaultIsOpen
        }, cb);
      };

      _this.selectItem = function (item, otherStateToSet, cb) {
        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          isOpen: _this.props.defaultIsOpen,
          highlightedIndex: _this.props.defaultHighlightedIndex,
          selectedItem: item,
          inputValue: _this.props.itemToString(item)
        }, otherStateToSet), cb);
      };

      _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
        var item = _this.items[itemIndex];

        if (item == null) {
          return;
        }

        _this.selectItem(item, otherStateToSet, cb);
      };

      _this.selectHighlightedItem = function (otherStateToSet, cb) {
        return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
      };

      _this.internalSetState = function (stateToSet, cb) {
        var isItemSelected, onChangeArg;
        var onStateChangeArg = {};
        var isStateToSetFunction = typeof stateToSet === 'function'; // we want to call `onInputValueChange` before the `setState` call
        // so someone controlling the `inputValue` state gets notified of
        // the input change as soon as possible. This avoids issues with
        // preserving the cursor position.
        // See https://github.com/downshift-js/downshift/issues/217 for more info.

        if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
          _this.props.onInputValueChange(stateToSet.inputValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.getStateAndHelpers(), stateToSet));
        }

        return _this.setState(function (state) {
          state = _this.getState(state);
          var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet; // Your own function that could modify the state that will be set.

          newStateToSet = _this.props.stateReducer(state, newStateToSet); // checks if an item is selected, regardless of if it's different from
          // what was selected before
          // used to determine if onSelect and onChange callbacks should be called

          isItemSelected = newStateToSet.hasOwnProperty('selectedItem'); // this keeps track of the object we want to call with setState

          var nextState = {}; // this is just used to tell whether the state changed
          // and we're trying to update that state. OR if the selection has changed and we're
          // trying to update the selection

          if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
            onChangeArg = newStateToSet.selectedItem;
          }

          newStateToSet.type = newStateToSet.type || unknown;
          Object.keys(newStateToSet).forEach(function (key) {
            // onStateChangeArg should only have the state that is
            // actually changing
            if (state[key] !== newStateToSet[key]) {
              onStateChangeArg[key] = newStateToSet[key];
            } // the type is useful for the onStateChangeArg
            // but we don't actually want to set it in internal state.
            // this is an undocumented feature for now... Not all internalSetState
            // calls support it and I'm not certain we want them to yet.
            // But it enables users controlling the isOpen state to know when
            // the isOpen state changes due to mouseup events which is quite handy.


            if (key === 'type') {
              return;
            }

            newStateToSet[key]; // if it's coming from props, then we don't care to set it internally

            if (!isControlledProp(_this.props, key)) {
              nextState[key] = newStateToSet[key];
            }
          }); // if stateToSet is a function, then we weren't able to call onInputValueChange
          // earlier, so we'll call it now that we know what the inputValue state will be.

          if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
            _this.props.onInputValueChange(newStateToSet.inputValue, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.getStateAndHelpers(), newStateToSet));
          }

          return nextState;
        }, function () {
          // call the provided callback if it's a function
          cbToCb(cb)(); // only call the onStateChange and onChange callbacks if
          // we have relevant information to pass them.

          var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;

          if (hasMoreStateThanType) {
            _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
          }

          if (isItemSelected) {
            _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
          }

          if (onChangeArg !== undefined) {
            _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
          } // this is currently undocumented and therefore subject to change
          // We'll try to not break it, but just be warned.


          _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
        });
      };

      _this.rootRef = function (node) {
        return _this._rootNode = node;
      };

      _this.getRootProps = function (_temp, _temp2) {
        var _extends2;

        var _ref = _temp === void 0 ? {} : _temp,
            _ref$refKey = _ref.refKey,
            refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
            ref = _ref.ref,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["refKey", "ref"]);

        var _ref2 = _temp2 === void 0 ? {} : _temp2,
            _ref2$suppressRefErro = _ref2.suppressRefError,
            suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

        // this is used in the render to know whether the user has called getRootProps.
        // It uses that to know whether to apply the props automatically
        _this.getRootProps.called = true;
        _this.getRootProps.refKey = refKey;
        _this.getRootProps.suppressRefError = suppressRefError;

        var _this$getState = _this.getState(),
            isOpen = _this$getState.isOpen;

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
      };

      _this.keyDownHandlers = {
        ArrowDown: function ArrowDown(event) {
          var _this2 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowDown
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowDown
            }, function () {
              var itemCount = _this2.getItemCount();

              if (itemCount > 0) {
                var _this2$getState = _this2.getState(),
                    highlightedIndex = _this2$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, function (index) {
                  return _this2.getItemNodeFromIndex(index);
                });

                _this2.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowDown
                });
              }
            });
          }
        },
        ArrowUp: function ArrowUp(event) {
          var _this3 = this;

          event.preventDefault();

          if (this.getState().isOpen) {
            var amount = event.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(amount, {
              type: keyDownArrowUp
            });
          } else {
            this.internalSetState({
              isOpen: true,
              type: keyDownArrowUp
            }, function () {
              var itemCount = _this3.getItemCount();

              if (itemCount > 0) {
                var _this3$getState = _this3.getState(),
                    highlightedIndex = _this3$getState.highlightedIndex;

                var nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, function (index) {
                  return _this3.getItemNodeFromIndex(index);
                });

                _this3.setHighlightedIndex(nextHighlightedIndex, {
                  type: keyDownArrowUp
                });
              }
            });
          }
        },
        Enter: function Enter(event) {
          if (event.which === 229) {
            return;
          }

          var _this$getState2 = this.getState(),
              isOpen = _this$getState2.isOpen,
              highlightedIndex = _this$getState2.highlightedIndex;

          if (isOpen && highlightedIndex != null) {
            event.preventDefault();
            var item = this.items[highlightedIndex];
            var itemNode = this.getItemNodeFromIndex(highlightedIndex);

            if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
              return;
            }

            this.selectHighlightedItem({
              type: keyDownEnter
            });
          }
        },
        Escape: function Escape(event) {
          event.preventDefault();
          this.reset(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            type: keyDownEscape
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ''
          }));
        }
      };
      _this.buttonKeyDownHandlers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.keyDownHandlers, {
        ' ': function _(event) {
          event.preventDefault();
          this.toggleMenu({
            type: keyDownSpaceButton
          });
        }
      });
      _this.inputKeyDownHandlers = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.keyDownHandlers, {
        Home: function Home(event) {
          var _this4 = this;

          var _this$getState3 = this.getState(),
              isOpen = _this$getState3.isOpen;

          if (!isOpen) {
            return;
          }

          event.preventDefault();
          var itemCount = this.getItemCount();

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting downwards from 0 if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, function (index) {
            return _this4.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownHome
          });
        },
        End: function End(event) {
          var _this5 = this;

          var _this$getState4 = this.getState(),
              isOpen = _this$getState4.isOpen;

          if (!isOpen) {
            return;
          }

          event.preventDefault();
          var itemCount = this.getItemCount();

          if (itemCount <= 0 || !isOpen) {
            return;
          } // get next non-disabled starting upwards from last index if that's disabled.


          var newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, function (index) {
            return _this5.getItemNodeFromIndex(index);
          }, false);
          this.setHighlightedIndex(newHighlightedIndex, {
            type: keyDownEnd
          });
        }
      });

      _this.getToggleButtonProps = function (_temp3) {
        var _ref3 = _temp3 === void 0 ? {} : _temp3,
            onClick = _ref3.onClick,
            onPress = _ref3.onPress,
            onKeyDown = _ref3.onKeyDown,
            onKeyUp = _ref3.onKeyUp,
            onBlur = _ref3.onBlur,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"]);

        var _this$getState5 = _this.getState(),
            isOpen = _this$getState5.isOpen;

        var enabledEventHandlers =  {
          onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
          onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
          onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
          onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
        };
        var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          type: 'button',
          role: 'button',
          'aria-label': isOpen ? 'close menu' : 'open menu',
          'aria-haspopup': true,
          'data-toggle': true
        }, eventHandlers, rest);
      };

      _this.buttonHandleKeyUp = function (event) {
        // Prevent click event from emitting in Firefox
        event.preventDefault();
      };

      _this.buttonHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (_this.buttonKeyDownHandlers[key]) {
          _this.buttonKeyDownHandlers[key].call(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), event);
        }
      };

      _this.buttonHandleClick = function (event) {
        event.preventDefault(); // handle odd case for Safari and Firefox which
        // don't give the button the focus properly.

        /* istanbul ignore if (can't reasonably test this) */

        if ( _this.props.environment.document.activeElement === _this.props.environment.document.body) {
          event.target.focus();
        } // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
        // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
        // when building for production and should therefore have no impact on production code.


        if (false) {} else {
          // Ensure that toggle of menu occurs after the potential blur event in iOS
          _this.internalSetTimeout(function () {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        }
      };

      _this.buttonHandleBlur = function (event) {
        var blurTarget = event.target; // Save blur target for comparison with activeElement later
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element

        _this.internalSetTimeout(function () {
          if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
          ) {
              _this.reset({
                type: blurButton
              });
            }
        });
      };

      _this.getLabelProps = function (props) {
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          htmlFor: _this.inputId,
          id: _this.labelId
        }, props);
      };

      _this.getInputProps = function (_temp4) {
        var _ref4 = _temp4 === void 0 ? {} : _temp4,
            onKeyDown = _ref4.onKeyDown,
            onBlur = _ref4.onBlur,
            onChange = _ref4.onChange,
            onInput = _ref4.onInput,
            onChangeText = _ref4.onChangeText,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"]);

        var onChangeKey;
        var eventHandlers = {};
        /* istanbul ignore next (preact) */

        {
          onChangeKey = 'onChange';
        }

        var _this$getState6 = _this.getState(),
            inputValue = _this$getState6.inputValue,
            isOpen = _this$getState6.isOpen,
            highlightedIndex = _this$getState6.highlightedIndex;

        if (!rest.disabled) {
          var _eventHandlers;

          eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          'aria-autocomplete': 'list',
          'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
          'aria-controls': isOpen ? _this.menuId : null,
          'aria-labelledby': _this.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: 'off',
          value: inputValue,
          id: _this.inputId
        }, eventHandlers, rest);
      };

      _this.inputHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);

        if (key && _this.inputKeyDownHandlers[key]) {
          _this.inputKeyDownHandlers[key].call(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), event);
        }
      };

      _this.inputHandleChange = function (event) {
        _this.internalSetState({
          type: changeInput,
          isOpen: true,
          inputValue:  event.target.value,
          highlightedIndex: _this.props.defaultHighlightedIndex
        });
      };

      _this.inputHandleBlur = function () {
        // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
        _this.internalSetTimeout(function () {
          var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);

          if (!_this.isMouseDown && !downshiftButtonIsActive) {
            _this.reset({
              type: blurInput
            });
          }
        });
      };

      _this.menuRef = function (node) {
        _this._menuNode = node;
      };

      _this.getMenuProps = function (_temp5, _temp6) {
        var _extends3;

        var _ref5 = _temp5 === void 0 ? {} : _temp5,
            _ref5$refKey = _ref5.refKey,
            refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
            ref = _ref5.ref,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["refKey", "ref"]);

        var _ref6 = _temp6 === void 0 ? {} : _temp6,
            _ref6$suppressRefErro = _ref6.suppressRefError,
            suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;

        _this.getMenuProps.called = true;
        _this.getMenuProps.refKey = refKey;
        _this.getMenuProps.suppressRefError = suppressRefError;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
      };

      _this.getItemProps = function (_temp7) {
        var _enabledEventHandlers;

        var _ref7 = _temp7 === void 0 ? {} : _temp7,
            onMouseMove = _ref7.onMouseMove,
            onMouseDown = _ref7.onMouseDown,
            onClick = _ref7.onClick,
            onPress = _ref7.onPress,
            index = _ref7.index,
            _ref7$item = _ref7.item,
            item = _ref7$item === void 0 ?  false ?
        /* istanbul ignore next */
        undefined : requiredProp('getItemProps', 'item') : _ref7$item,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"]);

        if (index === undefined) {
          _this.items.push(item);

          index = _this.items.indexOf(item);
        } else {
          _this.items[index] = item;
        }

        var onSelectKey =  'onClick';
        var customClickHandler =  onClick;
        var enabledEventHandlers = (_enabledEventHandlers = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: callAllEventHandlers(onMouseMove, function () {
            if (index === _this.getState().highlightedIndex) {
              return;
            }

            _this.setHighlightedIndex(index, {
              type: itemMouseEnter
            }); // We never want to manually scroll when changing state based
            // on `onMouseMove` because we will be moving the element out
            // from under the user which is currently scrolling/moving the
            // cursor


            _this.avoidScrolling = true;

            _this.internalSetTimeout(function () {
              return _this.avoidScrolling = false;
            }, 250);
          }),
          onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
            // This prevents the activeElement from being changed
            // to the item so it can remain with the current activeElement
            // which is a more common use case.
            event.preventDefault();
          })
        }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
          _this.selectItemAtIndex(index, {
            type: clickItem
          });
        }), _enabledEventHandlers); // Passing down the onMouseDown handler to prevent redirect
        // of the activeElement if clicking on disabled items

        var eventHandlers = rest.disabled ? {
          onMouseDown: enabledEventHandlers.onMouseDown
        } : enabledEventHandlers;
        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          id: _this.getItemId(index),
          role: 'option',
          'aria-selected': _this.getState().highlightedIndex === index
        }, eventHandlers, rest);
      };

      _this.clearItems = function () {
        _this.items = [];
      };

      _this.reset = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref8) {
          var selectedItem = _ref8.selectedItem;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            inputValue: _this.props.itemToString(selectedItem)
          }, otherStateToSet);
        }, cb);
      };

      _this.toggleMenu = function (otherStateToSet, cb) {
        if (otherStateToSet === void 0) {
          otherStateToSet = {};
        }

        otherStateToSet = pickState(otherStateToSet);

        _this.internalSetState(function (_ref9) {
          var isOpen = _ref9.isOpen;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
            isOpen: !isOpen
          }, isOpen && {
            highlightedIndex: _this.props.defaultHighlightedIndex
          }, otherStateToSet);
        }, function () {
          var _this$getState7 = _this.getState(),
              isOpen = _this$getState7.isOpen,
              highlightedIndex = _this$getState7.highlightedIndex;

          if (isOpen) {
            if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
              _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
            }
          }

          cbToCb(cb)();
        });
      };

      _this.openMenu = function (cb) {
        _this.internalSetState({
          isOpen: true
        }, cb);
      };

      _this.closeMenu = function (cb) {
        _this.internalSetState({
          isOpen: false
        }, cb);
      };

      _this.updateStatus = debounce(function () {
        var state = _this.getState();

        var item = _this.items[state.highlightedIndex];

        var resultCount = _this.getItemCount();

        var status = _this.props.getA11yStatusMessage(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          itemToString: _this.props.itemToString,
          previousResultCount: _this.previousResultCount,
          resultCount: resultCount,
          highlightedItem: item
        }, state));

        _this.previousResultCount = resultCount;
        setStatus(status, _this.props.environment.document);
      }, 200);

      var _this$props = _this.props,
          defaultHighlightedIndex = _this$props.defaultHighlightedIndex,
          _this$props$initialHi = _this$props.initialHighlightedIndex,
          _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi,
          defaultIsOpen = _this$props.defaultIsOpen,
          _this$props$initialIs = _this$props.initialIsOpen,
          _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs,
          _this$props$initialIn = _this$props.initialInputValue,
          _inputValue = _this$props$initialIn === void 0 ? '' : _this$props$initialIn,
          _this$props$initialSe = _this$props.initialSelectedItem,
          _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;

      var _state = _this.getState({
        highlightedIndex: _highlightedIndex,
        isOpen: _isOpen,
        inputValue: _inputValue,
        selectedItem: _selectedItem
      });

      if (_state.selectedItem != null && _this.props.initialInputValue === undefined) {
        _state.inputValue = _this.props.itemToString(_state.selectedItem);
      }

      _this.state = _state;
      return _this;
    }

    var _proto = Downshift.prototype;

    /**
     * Clear all running timeouts
     */
    _proto.internalClearTimeouts = function internalClearTimeouts() {
      this.timeoutIds.forEach(function (id) {
        clearTimeout(id);
      });
      this.timeoutIds = [];
    }
    /**
     * Gets the state based on internal state or props
     * If a state value is passed via props, then that
     * is the value given, otherwise it's retrieved from
     * stateToMerge
     *
     * @param {Object} stateToMerge defaults to this.state
     * @return {Object} the state
     */
    ;

    _proto.getState = function getState$1(stateToMerge) {
      if (stateToMerge === void 0) {
        stateToMerge = this.state;
      }

      return getState(stateToMerge, this.props);
    };

    _proto.getItemCount = function getItemCount() {
      // things read better this way. They're in priority order:
      // 1. `this.itemCount`
      // 2. `this.props.itemCount`
      // 3. `this.items.length`
      var itemCount = this.items.length;

      if (this.itemCount != null) {
        itemCount = this.itemCount;
      } else if (this.props.itemCount !== undefined) {
        itemCount = this.props.itemCount;
      }

      return itemCount;
    };

    _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
      return this.props.environment.document.getElementById(this.getItemId(index));
    };

    _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
      /* istanbul ignore else (react-native) */
      {
        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      }
    };

    _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
      var _this6 = this;

      var itemCount = this.getItemCount();

      var _this$getState8 = this.getState(),
          highlightedIndex = _this$getState8.highlightedIndex;

      if (itemCount > 0) {
        var nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, function (index) {
          return _this6.getItemNodeFromIndex(index);
        });
        this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
      }
    };

    _proto.getStateAndHelpers = function getStateAndHelpers() {
      var _this$getState9 = this.getState(),
          highlightedIndex = _this$getState9.highlightedIndex,
          inputValue = _this$getState9.inputValue,
          selectedItem = _this$getState9.selectedItem,
          isOpen = _this$getState9.isOpen;

      var itemToString = this.props.itemToString;
      var id = this.id;
      var getRootProps = this.getRootProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getMenuProps = this.getMenuProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;
      return {
        // prop getters
        getRootProps: getRootProps,
        getToggleButtonProps: getToggleButtonProps,
        getLabelProps: getLabelProps,
        getMenuProps: getMenuProps,
        getInputProps: getInputProps,
        getItemProps: getItemProps,
        // actions
        reset: reset,
        openMenu: openMenu,
        closeMenu: closeMenu,
        toggleMenu: toggleMenu,
        selectItem: selectItem,
        selectItemAtIndex: selectItemAtIndex,
        selectHighlightedItem: selectHighlightedItem,
        setHighlightedIndex: setHighlightedIndex,
        clearSelection: clearSelection,
        clearItems: clearItems,
        setItemCount: setItemCount,
        unsetItemCount: unsetItemCount,
        setState: setState,
        // props
        itemToString: itemToString,
        // derived
        id: id,
        // state
        highlightedIndex: highlightedIndex,
        inputValue: inputValue,
        isOpen: isOpen,
        selectedItem: selectedItem
      };
    } //////////////////////////// ROOT
    ;

    _proto.componentDidMount = function componentDidMount() {
      var _this7 = this;

      /* istanbul ignore if (react-native) */
      if ( true && this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
        validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
      }
      /* istanbul ignore if (react-native) */


      {
        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        var onMouseDown = function onMouseDown() {
          _this7.isMouseDown = true;
        };

        var onMouseUp = function onMouseUp(event) {
          _this7.isMouseDown = false; // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift

          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document);

          if (!contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: mouseUp
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        }; // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping


        var onTouchStart = function onTouchStart() {
          _this7.isTouchMove = false;
        };

        var onTouchMove = function onTouchMove() {
          _this7.isTouchMove = true;
        };

        var onTouchEnd = function onTouchEnd(event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document, false);

          if (!_this7.isTouchMove && !contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: touchEnd
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };

        var environment = this.props.environment;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);

        this.cleanup = function () {
          _this7.internalClearTimeouts();

          _this7.updateStatus.cancel();

          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      }
    };

    _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
      var _ref10 = this.props.highlightedIndex === undefined ? this.getState() : this.props,
          currentHighlightedIndex = _ref10.highlightedIndex;

      var _ref11 = prevProps.highlightedIndex === undefined ? prevState : prevProps,
          prevHighlightedIndex = _ref11.highlightedIndex;

      var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
      var scrollWhenNavigating = currentHighlightedIndex !== prevHighlightedIndex;
      return scrollWhenOpen || scrollWhenNavigating;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (true) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        /* istanbul ignore if (react-native) */

        if ( this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
      }

      if (isControlledProp(this.props, 'selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
        this.internalSetState({
          type: controlledPropUpdatedSelectedItem,
          inputValue: this.props.itemToString(this.props.selectedItem)
        });
      }

      if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
        this.scrollHighlightedItemIntoView();
      }
      /* istanbul ignore else (react-native) */


      {
        this.updateStatus();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cleanup(); // avoids memory leak
    };

    _proto.render = function render() {
      var children = unwrapArray(this.props.children, noop); // because the items are rerendered every time we call the children
      // we clear this out each render and it will be populated again as
      // getItemProps is called.

      this.clearItems(); // we reset this so we know whether the user calls getRootProps during
      // this render. If they do then we don't need to do anything,
      // if they don't then we need to clone the element they return and
      // apply the props for them.

      this.getRootProps.called = false;
      this.getRootProps.refKey = undefined;
      this.getRootProps.suppressRefError = undefined; // we do something similar for getMenuProps

      this.getMenuProps.called = false;
      this.getMenuProps.refKey = undefined;
      this.getMenuProps.suppressRefError = undefined; // we do something similar for getLabelProps

      this.getLabelProps.called = false; // and something similar for getInputProps

      this.getInputProps.called = false;
      var element = unwrapArray(children(this.getStateAndHelpers()));

      if (!element) {
        return null;
      }

      if (this.getRootProps.called || this.props.suppressRefError) {
        if ( true && !this.getRootProps.suppressRefError && !this.props.suppressRefError) {
          validateGetRootPropsCalledCorrectly(element, this.getRootProps);
        }

        return element;
      } else if (isDOMElement(element)) {
        // they didn't apply the root props, but we can clone
        // this and apply the props ourselves
        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(element, this.getRootProps(getElementProps(element)));
      }
      /* istanbul ignore else */


      if (true) {
        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete
        throw new Error('downshift: If you return a non-DOM element, you must apply the getRootProps function');
      }
      /* istanbul ignore next */


      return undefined;
    };

    return Downshift;
  }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

  Downshift.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: false,
    getA11yStatusMessage: getA11yStatusMessage,
    itemToString: function itemToString(i) {
      if (i == null) {
        return '';
      }

      if ( true && isPlainObject(i) && !i.hasOwnProperty('toString')) {
        // eslint-disable-next-line no-console
        console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
      }

      return String(i);
    },
    onStateChange: noop,
    onInputValueChange: noop,
    onUserAction: noop,
    onChange: noop,
    onSelect: noop,
    onOuterClick: noop,
    selectedItemChanged: function selectedItemChanged(prevItem, item) {
      return prevItem !== item;
    },
    environment: typeof window === 'undefined'
    /* istanbul ignore next (ssr) */
    ? {} : window,
    stateReducer: function stateReducer(state, stateToSet) {
      return stateToSet;
    },
    suppressRefError: false,
    scrollIntoView: scrollIntoView
  };
  Downshift.stateChangeTypes = stateChangeTypes;
  return Downshift;
}();

 true ? Downshift.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onInputValueChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onUserAction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onOuterClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  selectedItemChanged: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  itemCount: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  }),
  suppressRefError: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  scrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  // things we keep in state for uncontrolled components
  // but can accept as props for controlled components

  /* eslint-disable react/no-unused-prop-types */
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  inputId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
  /* eslint-enable react/no-unused-prop-types */

} : undefined;

function validateGetMenuPropsCalledCorrectly(node, _ref12) {
  var refKey = _ref12.refKey;

  if (!node) {
    // eslint-disable-next-line no-console
    console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
  }
}

function validateGetRootPropsCalledCorrectly(element, _ref13) {
  var refKey = _ref13.refKey;
  var refKeySpecified = refKey !== 'ref';
  var isComposite = !isDOMElement(element);

  if (isComposite && !refKeySpecified && !Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isForwardRef"])(element)) {
    // eslint-disable-next-line no-console
    console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
  } else if (!isComposite && refKeySpecified) {
    // eslint-disable-next-line no-console
    console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_6__["isForwardRef"])(element) && !getElementProps(element)[refKey]) {
    // eslint-disable-next-line no-console
    console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
  }
}

var dropdownDefaultStateValues = {
  highlightedIndex: -1,
  isOpen: false,
  selectedItem: null,
  inputValue: ''
};

function callOnChangeProps(action, state, newState) {
  var props = action.props,
      type = action.type;
  var changes = {};
  Object.keys(state).forEach(function (key) {
    invokeOnChangeHandler(key, action, state, newState);

    if (newState[key] !== state[key]) {
      changes[key] = newState[key];
    }
  });

  if (props.onStateChange && Object.keys(changes).length) {
    props.onStateChange(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, changes));
  }
}

function invokeOnChangeHandler(key, action, state, newState) {
  var props = action.props,
      type = action.type;
  var handler = "on" + capitalizeString(key) + "Change";

  if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
    props[handler](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, newState));
  }
}
/**
 * Default state reducer that returns the changes.
 *
 * @param {Object} s state.
 * @param {Object} a action with changes.
 * @returns {Object} changes.
 */


function stateReducer(s, a) {
  return a.changes;
}
/**
 * Returns a message to be added to aria-live region when item is selected.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11ySelectionMessage(selectionParameters) {
  var selectedItem = selectionParameters.selectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
}
/**
 * Debounced call for updating the a11y message.
 */


var updateA11yStatus = debounce(function (getA11yMessage, document) {
  setStatus(getA11yMessage(), document);
}, 200); // istanbul ignore next

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_5__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_5__["useEffect"];

function useElementIds(_ref) {
  var _ref$id = _ref.id,
      id = _ref$id === void 0 ? "downshift-" + generateId() : _ref$id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId,
      inputId = _ref.inputId;
  var elementIdsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])({
    labelId: labelId || id + "-label",
    menuId: menuId || id + "-menu",
    getItemId: getItemId || function (index) {
      return id + "-item-" + index;
    },
    toggleButtonId: toggleButtonId || id + "-toggle-button",
    inputId: inputId || id + "-input"
  });
  return elementIdsRef.current;
}

function getItemIndex(index, item, items) {
  if (index !== undefined) {
    return index;
  }

  if (items.length === 0) {
    return -1;
  }

  return items.indexOf(item);
}

function itemToString(item) {
  return item ? String(item) : '';
}

function isAcceptedCharacterKey(key) {
  return /^\S{1}$/.test(key);
}

function capitalizeString(string) {
  return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}

function useLatestRef(val) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(val); // technically this is not "concurrent mode safe" because we're manipulating
  // the value during render (so it's not idempotent). However, the places this
  // hook is used is to support memoizing callbacks which will be called
  // *during* render, so we need the latest values *during* render.
  // If not for this, then we'd probably want to use useLayoutEffect instead.

  ref.current = val;
  return ref;
}
/**
 * Computes the controlled state using a the previous state, props,
 * two reducers, one from downshift and an optional one from the user.
 * Also calls the onChange handlers for state values that have changed.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */


function useEnhancedReducer(reducer, initialState, props) {
  var prevStateRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var actionRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var enhancedReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (state, action) {
    actionRef.current = action;
    state = getState(state, action.props);
    var changes = reducer(state, action);
    var newState = action.props.stateReducer(state, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action, {
      changes: changes
    }));
    return newState;
  }, [reducer]);

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(enhancedReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var propsRef = useLatestRef(props);
  var dispatchWithProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (action) {
    return dispatch(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      props: propsRef.current
    }, action));
  }, [propsRef]);
  var action = actionRef.current;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (action && prevStateRef.current && prevStateRef.current !== state) {
      callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
    }

    prevStateRef.current = state;
  }, [state, props, action]);
  return [state, dispatchWithProps];
}
/**
 * Wraps the useEnhancedReducer and applies the controlled prop values before
 * returning the new state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */


function useControlledReducer(reducer, initialState, props) {
  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1];

  return [getState(state, props), dispatch];
}

var defaultProps = {
  itemToString: itemToString,
  stateReducer: stateReducer,
  getA11ySelectionMessage: getA11ySelectionMessage,
  scrollIntoView: scrollIntoView,
  circularNavigation: false,
  environment: typeof window === 'undefined'
  /* istanbul ignore next (ssr) */
  ? {} : window
};

function getDefaultValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  var defaultPropKey = "default" + capitalizeString(propKey);

  if (defaultPropKey in props) {
    return props[defaultPropKey];
  }

  return defaultStateValues[propKey];
}

function getInitialValue(props, propKey, defaultStateValues) {
  if (defaultStateValues === void 0) {
    defaultStateValues = dropdownDefaultStateValues;
  }

  if (propKey in props) {
    return props[propKey];
  }

  var initialPropKey = "initial" + capitalizeString(propKey);

  if (initialPropKey in props) {
    return props[initialPropKey];
  }

  return getDefaultValue(props, propKey, defaultStateValues);
}

function getInitialState(props) {
  var selectedItem = getInitialValue(props, 'selectedItem');
  var isOpen = getInitialValue(props, 'isOpen');
  var highlightedIndex = getInitialValue(props, 'highlightedIndex');
  var inputValue = getInitialValue(props, 'inputValue');
  return {
    highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.indexOf(selectedItem) : highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
  var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
  var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex;

  if (items.length === 0) {
    return -1;
  } // initialHighlightedIndex will give value to highlightedIndex on initial state only.


  if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
    return initialHighlightedIndex;
  }

  if (defaultHighlightedIndex !== undefined) {
    return defaultHighlightedIndex;
  }

  if (selectedItem) {
    if (offset === 0) {
      return items.indexOf(selectedItem);
    }

    return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
  }

  if (offset === 0) {
    return -1;
  }

  return offset < 0 ? items.length - 1 : 0;
}
/**
 * Reuse the movement tracking of mouse and touch events.
 *
 * @param {boolean} isOpen Whether the dropdown is open or not.
 * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
 * @param {Object} environment Environment where component/hook exists.
 * @param {Function} handleBlur Handler on blur from mouse or touch.
 * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
 */


function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
  var mouseAndTouchTrackersRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])({
    isMouseDown: false,
    isTouchMove: false
  });
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // The same strategy for checking if a click occurred inside or outside downsift
    // as in downshift.js.
    var onMouseDown = function onMouseDown() {
      mouseAndTouchTrackersRef.current.isMouseDown = true;
    };

    var onMouseUp = function onMouseUp(event) {
      mouseAndTouchTrackersRef.current.isMouseDown = false;

      if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment.document)) {
        handleBlur();
      }
    };

    var onTouchStart = function onTouchStart() {
      mouseAndTouchTrackersRef.current.isTouchMove = false;
    };

    var onTouchMove = function onTouchMove() {
      mouseAndTouchTrackersRef.current.isTouchMove = true;
    };

    var onTouchEnd = function onTouchEnd(event) {
      if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
        return ref.current;
      }), environment.document, false)) {
        handleBlur();
      }
    };

    environment.addEventListener('mousedown', onMouseDown);
    environment.addEventListener('mouseup', onMouseUp);
    environment.addEventListener('touchstart', onTouchStart);
    environment.addEventListener('touchmove', onTouchMove);
    environment.addEventListener('touchend', onTouchEnd);
    return function cleanup() {
      environment.removeEventListener('mousedown', onMouseDown);
      environment.removeEventListener('mouseup', onMouseUp);
      environment.removeEventListener('touchstart', onTouchStart);
      environment.removeEventListener('touchmove', onTouchMove);
      environment.removeEventListener('touchend', onTouchEnd);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, environment]);
  return mouseAndTouchTrackersRef;
}
/* istanbul ignore next */
// eslint-disable-next-line import/no-mutable-exports


var useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
  return noop;
};
/**
 * Custom hook that checks if getter props are called correctly.
 *
 * @param  {...any} propKeys Getter prop names to be handled.
 * @returns {Function} Setter function called inside getter props to set call information.
 */

/* istanbul ignore next */


if (true) {
  useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
    var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);

    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }

    var getterPropsCalledRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(propKeys.reduce(function (acc, propKey) {
      acc[propKey] = {};
      return acc;
    }, {}));
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
        var propCallInfo = getterPropsCalledRef.current[propKey];

        if (isInitialMountRef.current) {
          if (!Object.keys(propCallInfo).length) {
            // eslint-disable-next-line no-console
            console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
            return;
          }
        }

        var suppressRefError = propCallInfo.suppressRefError,
            refKey = propCallInfo.refKey,
            elementRef = propCallInfo.elementRef;

        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          // eslint-disable-next-line no-console
          console.error("downshift: The ref prop \"" + refKey + "\" from " + propKey + " was not applied correctly on your element.");
        }
      });
      isInitialMountRef.current = false;
    });
    var setGetterPropCallInfo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (propKey, suppressRefError, refKey, elementRef) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError: suppressRefError,
        refKey: refKey,
        elementRef: elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  };
}

function useA11yMessageSetter(getA11yMessage, dependencyArray, _ref2) {
  var isInitialMount = _ref2.isInitialMount,
      highlightedIndex = _ref2.highlightedIndex,
      items = _ref2.items,
      environment = _ref2.environment,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["isInitialMount", "highlightedIndex", "items", "environment"]);

  // Sets a11y status message on changes in state.
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMount) {
      return;
    }

    updateA11yStatus(function () {
      return getA11yMessage(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        highlightedIndex: highlightedIndex,
        highlightedItem: items[highlightedIndex],
        resultCount: items.length
      }, rest));
    }, environment.document); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray);
}

function useScrollIntoView(_ref3) {
  var highlightedIndex = _ref3.highlightedIndex,
      isOpen = _ref3.isOpen,
      itemRefs = _ref3.itemRefs,
      getItemNodeFromIndex = _ref3.getItemNodeFromIndex,
      menuElement = _ref3.menuElement,
      scrollIntoViewProp = _ref3.scrollIntoView;
  // used not to scroll on highlight by mouse.
  var shouldScrollRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // Scroll on highlighted item if change comes from keyboard.

  useIsomorphicLayoutEffect(function () {
    if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
      return;
    }

    if (shouldScrollRef.current === false) {
      shouldScrollRef.current = true;
    } else {
      scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [highlightedIndex]);
  return shouldScrollRef;
} // eslint-disable-next-line import/no-mutable-exports


var useControlPropsValidator = noop;
/* istanbul ignore next */

if (true) {
  useControlPropsValidator = function useControlPropsValidator(_ref4) {
    var isInitialMount = _ref4.isInitialMount,
        props = _ref4.props,
        state = _ref4.state;
    // used for checking when props are moving from controlled to uncontrolled.
    var prevPropsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(props);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
      if (isInitialMount) {
        return;
      }

      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props, isInitialMount]);
  };
}

/* eslint-disable complexity */

function downshiftCommonReducer(state, action, stateChangeTypes) {
  var type = action.type,
      props = action.props;
  var changes;

  switch (type) {
    case stateChangeTypes.ItemMouseMove:
      changes = {
        highlightedIndex: action.index
      };
      break;

    case stateChangeTypes.MenuMouseLeave:
      changes = {
        highlightedIndex: -1
      };
      break;

    case stateChangeTypes.ToggleButtonClick:
    case stateChangeTypes.FunctionToggleMenu:
      changes = {
        isOpen: !state.isOpen,
        highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case stateChangeTypes.FunctionOpenMenu:
      changes = {
        isOpen: true,
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
      };
      break;

    case stateChangeTypes.FunctionCloseMenu:
      changes = {
        isOpen: false
      };
      break;

    case stateChangeTypes.FunctionSetHighlightedIndex:
      changes = {
        highlightedIndex: action.highlightedIndex
      };
      break;

    case stateChangeTypes.FunctionSetInputValue:
      changes = {
        inputValue: action.inputValue
      };
      break;

    case stateChangeTypes.FunctionReset:
      changes = {
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        isOpen: getDefaultValue(props, 'isOpen'),
        selectedItem: getDefaultValue(props, 'selectedItem'),
        inputValue: getDefaultValue(props, 'inputValue')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}
/* eslint-enable complexity */

function getItemIndexByCharacterKey(keysSoFar, highlightedIndex, items, itemToString, getItemNodeFromIndex) {
  var lowerCasedKeysSoFar = keysSoFar.toLowerCase();

  for (var index = 0; index < items.length; index++) {
    var offsetIndex = (index + highlightedIndex + 1) % items.length;

    if (itemToString(items[offsetIndex]).toLowerCase().startsWith(lowerCasedKeysSoFar)) {
      var element = getItemNodeFromIndex(offsetIndex);

      if (!(element && element.hasAttribute('disabled'))) {
        return offsetIndex;
      }
    }
  }

  return highlightedIndex;
}

var propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11ySelectionMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  circularNavigation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  defaultSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  toggleButtonId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onHighlightedIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onIsOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
/**
 * Default implementation for status message. Only added when menu is open.
 * Will specift if there are results in the list, and if so, how many,
 * and what keys are relevant.
 *
 * @param {Object} param the downshift state and other relevant properties
 * @return {String} the a11y status message
 */

function getA11yStatusMessage$1(_ref) {
  var isOpen = _ref.isOpen,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount;

  if (!isOpen) {
    return '';
  }

  if (!resultCount) {
    return 'No results are available.';
  }

  if (resultCount !== previousResultCount) {
    return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
  }

  return '';
}

var defaultProps$1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage$1
}); // eslint-disable-next-line import/no-mutable-exports


var validatePropTypes = noop;
/* istanbul ignore next */

if (true) {
  validatePropTypes = function validatePropTypes(options, caller) {
    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.checkPropTypes(propTypes, options, 'prop', caller.name);
  };
}

var MenuKeyDownArrowDown =  true ? '__menu_keydown_arrow_down__' : undefined;
var MenuKeyDownArrowUp =  true ? '__menu_keydown_arrow_up__' : undefined;
var MenuKeyDownEscape =  true ? '__menu_keydown_escape__' : undefined;
var MenuKeyDownHome =  true ? '__menu_keydown_home__' : undefined;
var MenuKeyDownEnd =  true ? '__menu_keydown_end__' : undefined;
var MenuKeyDownEnter =  true ? '__menu_keydown_enter__' : undefined;
var MenuKeyDownSpaceButton =  true ? '__menu_keydown_space_button__' : undefined;
var MenuKeyDownCharacter =  true ? '__menu_keydown_character__' : undefined;
var MenuBlur =  true ? '__menu_blur__' : undefined;
var MenuMouseLeave =  true ? '__menu_mouse_leave__' : undefined;
var ItemMouseMove =  true ? '__item_mouse_move__' : undefined;
var ItemClick =  true ? '__item_click__' : undefined;
var ToggleButtonClick =  true ? '__togglebutton_click__' : undefined;
var ToggleButtonKeyDownArrowDown =  true ? '__togglebutton_keydown_arrow_down__' : undefined;
var ToggleButtonKeyDownArrowUp =  true ? '__togglebutton_keydown_arrow_up__' : undefined;
var ToggleButtonKeyDownCharacter =  true ? '__togglebutton_keydown_character__' : undefined;
var FunctionToggleMenu =  true ? '__function_toggle_menu__' : undefined;
var FunctionOpenMenu =  true ? '__function_open_menu__' : undefined;
var FunctionCloseMenu =  true ? '__function_close_menu__' : undefined;
var FunctionSetHighlightedIndex =  true ? '__function_set_highlighted_index__' : undefined;
var FunctionSelectItem =  true ? '__function_select_item__' : undefined;
var FunctionSetInputValue =  true ? '__function_set_input_value__' : undefined;
var FunctionReset =  true ? '__function_reset__' : undefined;

var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown: MenuKeyDownArrowDown,
  MenuKeyDownArrowUp: MenuKeyDownArrowUp,
  MenuKeyDownEscape: MenuKeyDownEscape,
  MenuKeyDownHome: MenuKeyDownHome,
  MenuKeyDownEnd: MenuKeyDownEnd,
  MenuKeyDownEnter: MenuKeyDownEnter,
  MenuKeyDownSpaceButton: MenuKeyDownSpaceButton,
  MenuKeyDownCharacter: MenuKeyDownCharacter,
  MenuBlur: MenuBlur,
  MenuMouseLeave: MenuMouseLeave,
  ItemMouseMove: ItemMouseMove,
  ItemClick: ItemClick,
  ToggleButtonClick: ToggleButtonClick,
  ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
  ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
  ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
  FunctionToggleMenu: FunctionToggleMenu,
  FunctionOpenMenu: FunctionOpenMenu,
  FunctionCloseMenu: FunctionCloseMenu,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
  FunctionSelectItem: FunctionSelectItem,
  FunctionSetInputValue: FunctionSetInputValue,
  FunctionReset: FunctionReset
});

/* eslint-disable complexity */

function downshiftSelectReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemClick:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index]
      };
      break;

    case ToggleButtonKeyDownCharacter:
      {
        var lowercasedKey = action.key;
        var inputValue = "" + state.inputValue + lowercasedKey;
        var itemIndex = getItemIndexByCharacterKey(inputValue, state.selectedItem ? props.items.indexOf(state.selectedItem) : -1, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          inputValue: inputValue
        }, itemIndex >= 0 && {
          selectedItem: props.items[itemIndex]
        });
      }
      break;

    case ToggleButtonKeyDownArrowDown:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case ToggleButtonKeyDownArrowUp:
      changes = {
        highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
        isOpen: true
      };
      break;

    case MenuKeyDownEnter:
    case MenuKeyDownSpaceButton:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex')
      }, state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex]
      });
      break;

    case MenuKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case MenuKeyDownEscape:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuBlur:
      changes = {
        isOpen: false,
        highlightedIndex: -1
      };
      break;

    case MenuKeyDownCharacter:
      {
        var _lowercasedKey = action.key;

        var _inputValue = "" + state.inputValue + _lowercasedKey;

        var highlightedIndex = getItemIndexByCharacterKey(_inputValue, state.highlightedIndex, props.items, props.itemToString, action.getItemNodeFromIndex);
        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          inputValue: _inputValue
        }, highlightedIndex >= 0 && {
          highlightedIndex: highlightedIndex
        });
      }
      break;

    case MenuKeyDownArrowDown:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case MenuKeyDownArrowUp:
      changes = {
        highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
      };
      break;

    case FunctionSelectItem:
      changes = {
        selectedItem: action.selectedItem
      };
      break;

    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$1);
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}
/* eslint-enable complexity */

useSelect.stateChangeTypes = stateChangeTypes$1;

function useSelect(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  validatePropTypes(userProps, useSelect); // Props defaults and destructuring.

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$1, userProps);

  var items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      itemToString = props.itemToString,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      getA11yStatusMessage = props.getA11yStatusMessage; // Initial state depending on controlled props.

  var initialState = getInitialState(props);

  var _useControlledReducer = useControlledReducer(downshiftSelectReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue; // Element efs.

  var toggleButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var itemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])({}); // used not to trigger menu blur action in some scenarios.

  var shouldBlurRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // used to keep the inputValue clearTimeout object between renders.

  var clearTimeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null); // prevent id re-generation between renders.

  var elementIds = useElementIds(props); // used to keep track of how many items we had on previous cycle.

  var previousResultCountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // utility callback to get item element.

  var latest = useLatestRef({
    state: state,
    props: props
  }); // Some utils.

  var getItemNodeFromIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]); // Effects.
  // Sets a11y status message on changes in state.

  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Sets a11y status message on changes in selectedItem.

  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Scroll on highlighted item if change comes from keyboard.

  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  }); // Sets cleanup for the keysSoFar after 500ms.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // init the clean function here as we need access to dispatch.
    if (isInitialMountRef.current) {
      clearTimeoutRef.current = debounce(function (outerDispatch) {
        outerDispatch({
          type: FunctionSetInputValue,
          inputValue: ''
        });
      }, 500);
    }

    if (!inputValue) {
      return;
    }

    clearTimeoutRef.current(dispatch);
  }, [dispatch, inputValue]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  });
  /* Controls the focus on the menu or the toggle button. */

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    // Don't focus menu on first render.
    if (isInitialMountRef.current) {
      // Unless it was initialised as open.
      if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
        menuRef.current.focus();
      }

      return;
    } // Focus menu on open.


    if (isOpen) {
      // istanbul ignore else
      if (menuRef.current) {
        menuRef.current.focus();
      }

      return;
    } // Focus toggleButton on close, but not if it was closed with (Shift+)Tab.


    if (environment.document.activeElement === menuRef.current) {
      // istanbul ignore else
      if (toggleButtonRef.current) {
        shouldBlurRef.current = false;
        toggleButtonRef.current.focus();
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  }); // Add mouse/touch events to document.

  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: MenuBlur
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getMenuProps', 'getToggleButtonProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []); // Reset itemRefs on close.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]); // Event handler functions.

  var toggleButtonKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowDown,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: ToggleButtonKeyDownArrowUp,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      }
    };
  }, [dispatch, getItemNodeFromIndex]);
  var menuKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowDown,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownArrowUp,
          getItemNodeFromIndex: getItemNodeFromIndex,
          shiftKey: event.shiftKey
        });
      },
      Home: function Home(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        dispatch({
          type: MenuKeyDownEscape
        });
      },
      Enter: function Enter(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownEnter
        });
      },
      ' ': function _(event) {
        event.preventDefault();
        dispatch({
          type: MenuKeyDownSpaceButton
        });
      }
    };
  }, [dispatch, getItemNodeFromIndex]); // Action functions.

  var toggleMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionToggleMenu
    });
  }, [dispatch]);
  var closeMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionCloseMenu
    });
  }, [dispatch]);
  var openMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionOpenMenu
    });
  }, [dispatch]);
  var setHighlightedIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset
    });
  }, [dispatch]);
  var setInputValue = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue,
      inputValue: newInputValue
    });
  }, [dispatch]); // Getter functions.

  var getLabelProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (labelProps) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      id: elementIds.labelId,
      htmlFor: elementIds.toggleButtonId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp, _temp2) {
    var _extends2;

    var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        onKeyDown = _ref.onKeyDown,
        onBlur = _ref.onBlur,
        ref = _ref.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"]);

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

    var latestState = latest.current.state;

    var menuHandleKeyDown = function menuHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && menuKeyDownHandlers[key]) {
        menuKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: MenuKeyDownCharacter,
          key: key,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };

    var menuHandleBlur = function menuHandleBlur() {
      // if the blur was a result of selection, we don't trigger this action.
      if (shouldBlurRef.current === false) {
        shouldBlurRef.current = true;
        return;
      }

      var shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
      /* istanbul ignore else */

      if (shouldBlur) {
        dispatch({
          type: MenuBlur
        });
      }
    };

    var menuHandleMouseLeave = function menuHandleMouseLeave() {
      dispatch({
        type: MenuMouseLeave
      });
    };

    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIds.labelId, _extends2.tabIndex = -1, _extends2), latestState.isOpen && latestState.highlightedIndex > -1 && {
      'aria-activedescendant': elementIds.getItemId(latestState.highlightedIndex)
    }, {
      onMouseLeave: callAllEventHandlers(onMouseLeave, menuHandleMouseLeave),
      onKeyDown: callAllEventHandlers(onKeyDown, menuHandleKeyDown),
      onBlur: callAllEventHandlers(onBlur, menuHandleBlur)
    }, rest);
  }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  var getToggleButtonProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp3, _temp4) {
    var _extends3;

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["onClick", "onKeyDown", "refKey", "ref"]);

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$suppressRefErro = _ref4.suppressRefError,
        suppressRefError = _ref4$suppressRefErro === void 0 ? false : _ref4$suppressRefErro;

    var toggleButtonHandleClick = function toggleButtonHandleClick() {
      dispatch({
        type: ToggleButtonClick
      });
    };

    var toggleButtonHandleKeyDown = function toggleButtonHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && toggleButtonKeyDownHandlers[key]) {
        toggleButtonKeyDownHandlers[key](event);
      } else if (isAcceptedCharacterKey(key)) {
        dispatch({
          type: ToggleButtonKeyDownCharacter,
          key: key,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };

    var toggleProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends3.id = elementIds.toggleButtonId, _extends3['aria-haspopup'] = 'listbox', _extends3['aria-expanded'] = latest.current.state.isOpen, _extends3['aria-labelledby'] = elementIds.labelId + " " + elementIds.toggleButtonId, _extends3), rest);

    if (!rest.disabled) {
      toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
      toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
    }

    setGetterPropCallInfo('getToggleButtonProps', suppressRefError, refKey, toggleButtonRef);
    return toggleProps;
  }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo, elementIds, getItemNodeFromIndex]);
  var getItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp5) {
    var _extends4;

    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        item = _ref5.item,
        index = _ref5.index,
        onMouseMove = _ref5.onMouseMove,
        onClick = _ref5.onClick,
        _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["item", "index", "onMouseMove", "onClick", "refKey", "ref"]);

    var _latest$current = latest.current,
        latestState = _latest$current.state,
        latestProps = _latest$current.props;

    var itemHandleMouseMove = function itemHandleMouseMove() {
      if (index === latestState.highlightedIndex) {
        return;
      }

      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove,
        index: index
      });
    };

    var itemHandleClick = function itemHandleClick() {
      dispatch({
        type: ItemClick,
        index: index
      });
    };

    var itemIndex = getItemIndex(index, item, latestProps.items);

    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }

    var itemProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends4 = {
      role: 'option',
      'aria-selected': "" + (itemIndex === latestState.highlightedIndex),
      id: elementIds.getItemId(itemIndex)
    }, _extends4[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
      }
    }), _extends4), rest);

    if (!rest.disabled) {
      itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
      itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
    }

    return itemProps;
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  return {
    // prop getters.
    getToggleButtonProps: getToggleButtonProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getItemProps: getItemProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    selectItem: selectItem,
    reset: reset,
    setInputValue: setInputValue,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var InputKeyDownArrowDown =  true ? '__input_keydown_arrow_down__' : undefined;
var InputKeyDownArrowUp =  true ? '__input_keydown_arrow_up__' : undefined;
var InputKeyDownEscape =  true ? '__input_keydown_escape__' : undefined;
var InputKeyDownHome =  true ? '__input_keydown_home__' : undefined;
var InputKeyDownEnd =  true ? '__input_keydown_end__' : undefined;
var InputKeyDownEnter =  true ? '__input_keydown_enter__' : undefined;
var InputChange =  true ? '__input_change__' : undefined;
var InputBlur =  true ? '__input_blur__' : undefined;
var MenuMouseLeave$1 =  true ? '__menu_mouse_leave__' : undefined;
var ItemMouseMove$1 =  true ? '__item_mouse_move__' : undefined;
var ItemClick$1 =  true ? '__item_click__' : undefined;
var ToggleButtonClick$1 =  true ? '__togglebutton_click__' : undefined;
var FunctionToggleMenu$1 =  true ? '__function_toggle_menu__' : undefined;
var FunctionOpenMenu$1 =  true ? '__function_open_menu__' : undefined;
var FunctionCloseMenu$1 =  true ? '__function_close_menu__' : undefined;
var FunctionSetHighlightedIndex$1 =  true ? '__function_set_highlighted_index__' : undefined;
var FunctionSelectItem$1 =  true ? '__function_select_item__' : undefined;
var FunctionSetInputValue$1 =  true ? '__function_set_input_value__' : undefined;
var FunctionReset$1 =  true ? '__function_reset__' : undefined;
var ControlledPropUpdatedSelectedItem =  true ? '__controlled_prop_updated_selected_item__' : undefined;

var stateChangeTypes$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: InputKeyDownArrowDown,
  InputKeyDownArrowUp: InputKeyDownArrowUp,
  InputKeyDownEscape: InputKeyDownEscape,
  InputKeyDownHome: InputKeyDownHome,
  InputKeyDownEnd: InputKeyDownEnd,
  InputKeyDownEnter: InputKeyDownEnter,
  InputChange: InputChange,
  InputBlur: InputBlur,
  MenuMouseLeave: MenuMouseLeave$1,
  ItemMouseMove: ItemMouseMove$1,
  ItemClick: ItemClick$1,
  ToggleButtonClick: ToggleButtonClick$1,
  FunctionToggleMenu: FunctionToggleMenu$1,
  FunctionOpenMenu: FunctionOpenMenu$1,
  FunctionCloseMenu: FunctionCloseMenu$1,
  FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
  FunctionSelectItem: FunctionSelectItem$1,
  FunctionSetInputValue: FunctionSetInputValue$1,
  FunctionReset: FunctionReset$1,
  ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
});

function getInitialState$1(props) {
  var initialState = getInitialState(props);
  var selectedItem = initialState.selectedItem;
  var inputValue = initialState.inputValue;

  if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
    inputValue = props.itemToString(selectedItem);
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, initialState, {
    inputValue: inputValue
  });
}

var propTypes$1 = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yStatusMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11ySelectionMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  circularNavigation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  highlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialHighlightedIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  defaultIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  initialIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  selectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  initialSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  defaultSelectedItem: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  defaultInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  initialInputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  labelId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  menuId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  getItemId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  inputId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  toggleButtonId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onHighlightedIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onStateChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onIsOpenChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onInputValueChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
/**
 * The useCombobox version of useControlledReducer, which also
 * checks if the controlled prop selectedItem changed between
 * renders. If so, it will also update inputValue with its
 * string equivalent. It uses the common useEnhancedReducer to
 * compute the rest of the state.
 *
 * @param {Function} reducer Reducer function from downshift.
 * @param {Object} initialState Initial state of the hook.
 * @param {Object} props The hook props.
 * @returns {Array} An array with the state and an action dispatcher.
 */

function useControlledReducer$1(reducer, initialState, props) {
  var previousSelectedItemRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();

  var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1]; // ToDo: if needed, make same approach as selectedItemChanged from Downshift.


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isControlledProp(props, 'selectedItem')) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }

      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
  });
  return [getState(state, props), dispatch];
} // eslint-disable-next-line import/no-mutable-exports


var validatePropTypes$1 = noop;
/* istanbul ignore next */

if (true) {
  validatePropTypes$1 = function validatePropTypes(options, caller) {
    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.checkPropTypes(propTypes$1, options, 'prop', caller.name);
  };
}

var defaultProps$2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps, {
  getA11yStatusMessage: getA11yStatusMessage,
  circularNavigation: true
});

/* eslint-disable complexity */

function downshiftUseComboboxReducer(state, action) {
  var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
  var changes;

  switch (type) {
    case ItemClick$1:
      changes = {
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        selectedItem: props.items[action.index],
        inputValue: props.itemToString(props.items[action.index])
      };
      break;

    case InputKeyDownArrowDown:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }

      break;

    case InputKeyDownArrowUp:
      if (state.isOpen) {
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
      } else {
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: props.items.length >= 0
        };
      }

      break;

    case InputKeyDownEnter:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.isOpen && state.highlightedIndex >= 0 && {
        selectedItem: props.items[state.highlightedIndex],
        isOpen: getDefaultValue(props, 'isOpen'),
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputKeyDownEscape:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        isOpen: false,
        highlightedIndex: -1
      }, !state.isOpen && {
        selectedItem: null,
        inputValue: ''
      });
      break;

    case InputKeyDownHome:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputKeyDownEnd:
      changes = {
        highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
      };
      break;

    case InputBlur:
      changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        isOpen: false,
        highlightedIndex: -1
      }, state.highlightedIndex >= 0 && action.selectItem && {
        selectedItem: props.items[state.highlightedIndex],
        inputValue: props.itemToString(props.items[state.highlightedIndex])
      });
      break;

    case InputChange:
      changes = {
        isOpen: true,
        highlightedIndex: getDefaultValue(props, 'highlightedIndex'),
        inputValue: action.inputValue
      };
      break;

    case FunctionSelectItem$1:
      changes = {
        selectedItem: action.selectedItem,
        inputValue: props.itemToString(action.selectedItem)
      };
      break;

    case ControlledPropUpdatedSelectedItem:
      changes = {
        inputValue: action.inputValue
      };
      break;

    default:
      return downshiftCommonReducer(state, action, stateChangeTypes$2);
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}
/* eslint-enable complexity */

useCombobox.stateChangeTypes = stateChangeTypes$2;

function useCombobox(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  validatePropTypes$1(userProps, useCombobox); // Props defaults and destructuring.

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$2, userProps);

  var initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      itemToString = props.itemToString; // Initial state depending on controlled props.

  var initialState = getInitialState$1(props);

  var _useControlledReducer = useControlledReducer$1(downshiftUseComboboxReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue; // Element refs.

  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var itemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])({});
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var toggleButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var comboboxRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true); // prevent id re-generation between renders.

  var elementIds = useElementIds(props); // used to keep track of how many items we had on previous cycle.

  var previousResultCountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(); // utility callback to get item element.

  var latest = useLatestRef({
    state: state,
    props: props
  });
  var getItemNodeFromIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (index) {
    return itemRefs.current[elementIds.getItemId(index)];
  }, [elementIds]); // Effects.
  // Sets a11y status message on changes in state.

  useA11yMessageSetter(getA11yStatusMessage, [isOpen, highlightedIndex, inputValue, items], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Sets a11y status message on changes in selectedItem.

  useA11yMessageSetter(getA11ySelectionMessage, [selectedItem], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    isInitialMount: isInitialMountRef.current,
    previousResultCount: previousResultCountRef.current,
    items: items,
    environment: environment,
    itemToString: itemToString
  }, state)); // Scroll on highlighted item if change comes from keyboard.

  var shouldScrollRef = useScrollIntoView({
    menuElement: menuRef.current,
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    itemRefs: itemRefs,
    scrollIntoView: scrollIntoView,
    getItemNodeFromIndex: getItemNodeFromIndex
  });
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  }); // Focus the input on first render if required.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var focusOnOpen = initialIsOpen || defaultIsOpen || isOpen;

    if (focusOnOpen && inputRef.current) {
      inputRef.current.focus();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    previousResultCountRef.current = items.length;
  }); // Add mouse/touch events to document.

  var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, function () {
    dispatch({
      type: InputBlur,
      selectItem: false
    });
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getInputProps', 'getComboboxProps', 'getMenuProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []); // Reset itemRefs on close.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (!isOpen) {
      itemRefs.current = {};
    }
  }, [isOpen]);
  /* Event handler functions */

  var inputKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowDown,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        dispatch({
          type: InputKeyDownArrowUp,
          shiftKey: event.shiftKey,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Home: function Home(event) {
        if (!latest.current.state.isOpen) {
          return;
        }

        event.preventDefault();
        dispatch({
          type: InputKeyDownHome,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      End: function End(event) {
        if (!latest.current.state.isOpen) {
          return;
        }

        event.preventDefault();
        dispatch({
          type: InputKeyDownEnd,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      },
      Escape: function Escape() {
        var latestState = latest.current.state;

        if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
          dispatch({
            type: InputKeyDownEscape
          });
        }
      },
      Enter: function Enter(event) {
        var latestState = latest.current.state; // if closed or no highlighted index, do nothing.

        if (!latestState.isOpen || latestState.highlightedIndex < 0 || event.which === 229 // if IME composing, wait for next Enter keydown event.
        ) {
            return;
          }

        event.preventDefault();
        dispatch({
          type: InputKeyDownEnter,
          getItemNodeFromIndex: getItemNodeFromIndex
        });
      }
    };
  }, [dispatch, latest, getItemNodeFromIndex]); // Getter props.

  var getLabelProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (labelProps) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      id: elementIds.labelId,
      htmlFor: elementIds.inputId
    }, labelProps);
  }, [elementIds]);
  var getMenuProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp, _temp2) {
    var _extends2;

    var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        ref = _ref.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["onMouseLeave", "refKey", "ref"]);

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;

    setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
      menuRef.current = menuNode;
    }), _extends2.id = elementIds.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function () {
      dispatch({
        type: MenuMouseLeave$1
      });
    }), _extends2), rest);
  }, [dispatch, setGetterPropCallInfo, elementIds]);
  var getItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp3) {
    var _extends3, _ref4;

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        item = _ref3.item,
        index = _ref3.index,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onMouseMove = _ref3.onMouseMove,
        onClick = _ref3.onClick,
        onPress = _ref3.onPress,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"]);

    var _latest$current = latest.current,
        latestProps = _latest$current.props,
        latestState = _latest$current.state;
    var itemIndex = getItemIndex(index, item, latestProps.items);

    if (itemIndex < 0) {
      throw new Error('Pass either item or item index in getItemProps!');
    }

    var onSelectKey =  'onClick';
    var customClickHandler =  onClick;

    var itemHandleMouseMove = function itemHandleMouseMove() {
      if (index === latestState.highlightedIndex) {
        return;
      }

      shouldScrollRef.current = false;
      dispatch({
        type: ItemMouseMove$1,
        index: index
      });
    };

    var itemHandleClick = function itemHandleClick() {
      dispatch({
        type: ItemClick$1,
        index: index
      });

      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
      if (itemNode) {
        itemRefs.current[elementIds.getItemId(itemIndex)] = itemNode;
      }
    }), _extends3.role = 'option', _extends3['aria-selected'] = "" + (itemIndex === latestState.highlightedIndex), _extends3.id = elementIds.getItemId(itemIndex), _extends3), !rest.disabled && (_ref4 = {
      onMouseMove: callAllEventHandlers(onMouseMove, itemHandleMouseMove)
    }, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, itemHandleClick), _ref4), rest);
  }, [dispatch, latest, shouldScrollRef, elementIds]);
  var getToggleButtonProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp4) {
    var _extends4;

    var _ref5 = _temp4 === void 0 ? {} : _temp4,
        onClick = _ref5.onClick,
        onPress = _ref5.onPress,
        _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, ["onClick", "onPress", "refKey", "ref"]);

    var toggleButtonHandleClick = function toggleButtonHandleClick() {
      dispatch({
        type: ToggleButtonClick$1
      });

      if (!latest.current.state.isOpen && inputRef.current) {
        inputRef.current.focus();
      }
    };

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
      toggleButtonRef.current = toggleButtonNode;
    }), _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({},  {
      onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
    }), rest);
  }, [dispatch, latest, elementIds]);
  var getInputProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp5, _temp6) {
    var _extends5;

    var _ref6 = _temp5 === void 0 ? {} : _temp5,
        onKeyDown = _ref6.onKeyDown,
        onChange = _ref6.onChange,
        onInput = _ref6.onInput,
        onBlur = _ref6.onBlur,
        onChangeText = _ref6.onChangeText,
        _ref6$refKey = _ref6.refKey,
        refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
        ref = _ref6.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref6, ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"]);

    var _ref7 = _temp6 === void 0 ? {} : _temp6,
        _ref7$suppressRefErro = _ref7.suppressRefError,
        suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;

    setGetterPropCallInfo('getInputProps', suppressRefError, refKey, inputRef);
    var latestState = latest.current.state;

    var inputHandleKeyDown = function inputHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event);
      }
    };

    var inputHandleChange = function inputHandleChange(event) {
      dispatch({
        type: InputChange,
        inputValue:  event.target.value
      });
    };

    var inputHandleBlur = function inputHandleBlur() {
      /* istanbul ignore else */
      if (latestState.isOpen && !mouseAndTouchTrackersRef.current.isMouseDown) {
        dispatch({
          type: InputBlur,
          selectItem: true
        });
      }
    };
    /* istanbul ignore next (preact) */


    var onChangeKey =  'onChange';
    var eventHandlers = {};

    if (!rest.disabled) {
      var _eventHandlers;

      eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
      inputRef.current = inputNode;
    }), _extends5.id = elementIds.inputId, _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIds.menuId, _extends5), latestState.isOpen && latestState.highlightedIndex > -1 && {
      'aria-activedescendant': elementIds.getItemId(latestState.highlightedIndex)
    }, {
      'aria-labelledby': elementIds.labelId,
      // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
      // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
      autoComplete: 'off',
      value: latestState.inputValue
    }, eventHandlers, rest);
  }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo, elementIds]);
  var getComboboxProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp7, _temp8) {
    var _extends6;

    var _ref8 = _temp7 === void 0 ? {} : _temp7,
        _ref8$refKey = _ref8.refKey,
        refKey = _ref8$refKey === void 0 ? 'ref' : _ref8$refKey,
        ref = _ref8.ref,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref8, ["refKey", "ref"]);

    var _ref9 = _temp8 === void 0 ? {} : _temp8,
        _ref9$suppressRefErro = _ref9.suppressRefError,
        suppressRefError = _ref9$suppressRefErro === void 0 ? false : _ref9$suppressRefErro;

    setGetterPropCallInfo('getComboboxProps', suppressRefError, refKey, comboboxRef);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function (comboboxNode) {
      comboboxRef.current = comboboxNode;
    }), _extends6.role = 'combobox', _extends6['aria-haspopup'] = 'listbox', _extends6['aria-owns'] = elementIds.menuId, _extends6['aria-expanded'] = latest.current.state.isOpen, _extends6), rest);
  }, [latest, setGetterPropCallInfo, elementIds]); // returns

  var toggleMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionToggleMenu$1
    });
  }, [dispatch]);
  var closeMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionCloseMenu$1
    });
  }, [dispatch]);
  var openMenu = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionOpenMenu$1
    });
  }, [dispatch]);
  var setHighlightedIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newHighlightedIndex) {
    dispatch({
      type: FunctionSetHighlightedIndex$1,
      highlightedIndex: newHighlightedIndex
    });
  }, [dispatch]);
  var selectItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItem) {
    dispatch({
      type: FunctionSelectItem$1,
      selectedItem: newSelectedItem
    });
  }, [dispatch]);
  var setInputValue = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newInputValue) {
    dispatch({
      type: FunctionSetInputValue$1,
      inputValue: newInputValue
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset$1
    });
  }, [dispatch]);
  return {
    // prop getters.
    getItemProps: getItemProps,
    getLabelProps: getLabelProps,
    getMenuProps: getMenuProps,
    getInputProps: getInputProps,
    getComboboxProps: getComboboxProps,
    getToggleButtonProps: getToggleButtonProps,
    // actions.
    toggleMenu: toggleMenu,
    openMenu: openMenu,
    closeMenu: closeMenu,
    setHighlightedIndex: setHighlightedIndex,
    setInputValue: setInputValue,
    selectItem: selectItem,
    reset: reset,
    // state.
    highlightedIndex: highlightedIndex,
    isOpen: isOpen,
    selectedItem: selectedItem,
    inputValue: inputValue
  };
}

var defaultStateValues = {
  activeIndex: -1,
  selectedItems: []
};
/**
 * Returns the initial value for a state key in the following order:
 * 1. controlled prop, 2. initial prop, 3. default prop, 4. default
 * value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */

function getInitialValue$1(props, propKey) {
  return getInitialValue(props, propKey, defaultStateValues);
}
/**
 * Returns the default value for a state key in the following order:
 * 1. controlled prop, 2. default prop, 3. default value from Downshift.
 *
 * @param {Object} props Props passed to the hook.
 * @param {string} propKey Props key to generate the value for.
 * @returns {any} The initial value for that prop.
 */


function getDefaultValue$1(props, propKey) {
  return getDefaultValue(props, propKey, defaultStateValues);
}
/**
 * Gets the initial state based on the provided props. It uses initial, default
 * and controlled props related to state in order to compute the initial value.
 *
 * @param {Object} props Props passed to the hook.
 * @returns {Object} The initial state.
 */


function getInitialState$2(props) {
  var activeIndex = getInitialValue$1(props, 'activeIndex');
  var selectedItems = getInitialValue$1(props, 'selectedItems');
  return {
    activeIndex: activeIndex,
    selectedItems: selectedItems
  };
}
/**
 * Returns true if dropdown keydown operation is permitted. Should not be
 * allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
 * input element with text content that is either highlighted or selection
 * cursor is not at the starting position.
 *
 * @param {KeyboardEvent} event The event from keydown.
 * @returns {boolean} Whether the operation is allowed.
 */


function isKeyDownOperationPermitted(event) {
  if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }

  var element = event.target;

  if (element instanceof HTMLInputElement && // if element is a text input
  element.value !== '' && ( // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  element.selectionStart !== 0 || element.selectionEnd !== 0)) {
    return false;
  }

  return true;
}
/**
 * Returns a message to be added to aria-live region when item is removed.
 *
 * @param {Object} selectionParameters Parameters required to build the message.
 * @returns {string} The a11y message.
 */


function getA11yRemovalMessage(selectionParameters) {
  var removedSelectedItem = selectionParameters.removedSelectedItem,
      itemToStringLocal = selectionParameters.itemToString;
  return itemToStringLocal(removedSelectedItem) + " has been removed.";
}

var propTypes$2 = {
  selectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  initialSelectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  defaultSelectedItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  itemToString: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  getA11yRemovalMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  stateReducer: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  activeIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  initialActiveIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  defaultActiveIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  onActiveIndexChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onSelectedItemsChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  keyNavigationNext: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  keyNavigationPrevious: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  environment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    addEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    removeEventListener: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
    document: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      getElementById: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
      activeElement: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
      body: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
    })
  })
};
var defaultProps$3 = {
  itemToString: defaultProps.itemToString,
  stateReducer: defaultProps.stateReducer,
  environment: defaultProps.environment,
  getA11yRemovalMessage: getA11yRemovalMessage,
  keyNavigationNext: 'ArrowRight',
  keyNavigationPrevious: 'ArrowLeft'
}; // eslint-disable-next-line import/no-mutable-exports

var validatePropTypes$2 = noop;
/* istanbul ignore next */

if (true) {
  validatePropTypes$2 = function validatePropTypes(options, caller) {
    prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.checkPropTypes(propTypes$2, options, 'prop', caller.name);
  };
}

var SelectedItemClick =  true ? '__selected_item_click__' : undefined;
var SelectedItemKeyDownDelete =  true ? '__selected_item_keydown_delete__' : undefined;
var SelectedItemKeyDownBackspace =  true ? '__selected_item_keydown_backspace__' : undefined;
var SelectedItemKeyDownNavigationNext =  true ? '__selected_item_keydown_navigation_next__' : undefined;
var SelectedItemKeyDownNavigationPrevious =  true ? '__selected_item_keydown_navigation_previous__' : undefined;
var DropdownKeyDownNavigationPrevious =  true ? '__dropdown_keydown_navigation_previous__' : undefined;
var DropdownKeyDownBackspace =  true ? '__dropdown_keydown_backspace__' : undefined;
var DropdownClick =  true ? '__dropdown_click__' : undefined;
var FunctionAddSelectedItem =  true ? '__function_add_selected_item__' : undefined;
var FunctionRemoveSelectedItem =  true ? '__function_remove_selected_item__' : undefined;
var FunctionSetSelectedItems =  true ? '__function_set_selected_items__' : undefined;
var FunctionSetActiveIndex =  true ? '__function_set_active_index__' : undefined;
var FunctionReset$2 =  true ? '__function_reset__' : undefined;

var stateChangeTypes$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SelectedItemClick: SelectedItemClick,
  SelectedItemKeyDownDelete: SelectedItemKeyDownDelete,
  SelectedItemKeyDownBackspace: SelectedItemKeyDownBackspace,
  SelectedItemKeyDownNavigationNext: SelectedItemKeyDownNavigationNext,
  SelectedItemKeyDownNavigationPrevious: SelectedItemKeyDownNavigationPrevious,
  DropdownKeyDownNavigationPrevious: DropdownKeyDownNavigationPrevious,
  DropdownKeyDownBackspace: DropdownKeyDownBackspace,
  DropdownClick: DropdownClick,
  FunctionAddSelectedItem: FunctionAddSelectedItem,
  FunctionRemoveSelectedItem: FunctionRemoveSelectedItem,
  FunctionSetSelectedItems: FunctionSetSelectedItems,
  FunctionSetActiveIndex: FunctionSetActiveIndex,
  FunctionReset: FunctionReset$2
});

/* eslint-disable complexity */

function downshiftMultipleSelectionReducer(state, action) {
  var type = action.type,
      index = action.index,
      props = action.props,
      selectedItem = action.selectedItem;
  var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems;
  var changes;

  switch (type) {
    case SelectedItemClick:
      changes = {
        activeIndex: index
      };
      break;

    case SelectedItemKeyDownNavigationPrevious:
      changes = {
        activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
      };
      break;

    case SelectedItemKeyDownNavigationNext:
      changes = {
        activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
      };
      break;

    case SelectedItemKeyDownBackspace:
    case SelectedItemKeyDownDelete:
      {
        var newActiveIndex = activeIndex;

        if (selectedItems.length === 1) {
          newActiveIndex = -1;
        } else if (activeIndex === selectedItems.length - 1) {
          newActiveIndex = selectedItems.length - 2;
        }

        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
        }, {
          activeIndex: newActiveIndex
        });
        break;
      }

    case DropdownKeyDownNavigationPrevious:
      changes = {
        activeIndex: selectedItems.length - 1
      };
      break;

    case DropdownKeyDownBackspace:
      changes = {
        selectedItems: selectedItems.slice(0, selectedItems.length - 1)
      };
      break;

    case FunctionAddSelectedItem:
      changes = {
        selectedItems: [].concat(selectedItems, [selectedItem])
      };
      break;

    case DropdownClick:
      changes = {
        activeIndex: -1
      };
      break;

    case FunctionRemoveSelectedItem:
      {
        var _newActiveIndex = activeIndex;
        var selectedItemIndex = selectedItems.indexOf(selectedItem);

        if (selectedItems.length === 1) {
          _newActiveIndex = -1;
        } else if (selectedItemIndex === selectedItems.length - 1) {
          _newActiveIndex = selectedItems.length - 2;
        }

        changes = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1))
        }, {
          activeIndex: _newActiveIndex
        });
        break;
      }

    case FunctionSetSelectedItems:
      {
        var newSelectedItems = action.selectedItems;
        changes = {
          selectedItems: newSelectedItems
        };
        break;
      }

    case FunctionSetActiveIndex:
      {
        var _newActiveIndex2 = action.activeIndex;
        changes = {
          activeIndex: _newActiveIndex2
        };
        break;
      }

    case FunctionReset$2:
      changes = {
        activeIndex: getDefaultValue$1(props, 'activeIndex'),
        selectedItems: getDefaultValue$1(props, 'selectedItems')
      };
      break;

    default:
      throw new Error('Reducer called without proper action type.');
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, changes);
}

useMultipleSelection.stateChangeTypes = stateChangeTypes$3;

function useMultipleSelection(userProps) {
  if (userProps === void 0) {
    userProps = {};
  }

  validatePropTypes$2(userProps, useMultipleSelection); // Props defaults and destructuring.

  var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultProps$3, userProps);

  var getA11yRemovalMessage = props.getA11yRemovalMessage,
      itemToString = props.itemToString,
      environment = props.environment,
      keyNavigationNext = props.keyNavigationNext,
      keyNavigationPrevious = props.keyNavigationPrevious; // Reducer init.

  var _useControlledReducer = useControlledReducer(downshiftMultipleSelectionReducer, getInitialState$2(props), props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];

  var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems; // Refs.

  var isInitialMountRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var previousSelectedItemsRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(selectedItems);
  var selectedItemRefs = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  selectedItemRefs.current = [];
  var latest = useLatestRef({
    state: state,
    props: props
  }); // Effects.

  /* Sets a11y status message on changes in selectedItem. */

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    if (selectedItems.length < previousSelectedItemsRef.current.length) {
      var removedSelectedItem = previousSelectedItemsRef.current.find(function (item) {
        return selectedItems.indexOf(item) < 0;
      });
      setStatus(getA11yRemovalMessage({
        itemToString: itemToString,
        resultCount: selectedItems.length,
        removedSelectedItem: removedSelectedItem,
        activeIndex: activeIndex,
        activeSelectedItem: selectedItems[activeIndex]
      }), environment.document);
    }

    previousSelectedItemsRef.current = selectedItems; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems.length]); // Sets focus on active item.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (isInitialMountRef.current) {
      return;
    }

    if (activeIndex === -1 && dropdownRef.current) {
      dropdownRef.current.focus();
    } else if (selectedItemRefs.current[activeIndex]) {
      selectedItemRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);
  useControlPropsValidator({
    isInitialMount: isInitialMountRef.current,
    props: props,
    state: state
  });
  var setGetterPropCallInfo = useGetterPropsCalledChecker('getDropdownProps'); // Make initial ref false.

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    isInitialMountRef.current = false;
  }, []); // Event handler functions.

  var selectedItemKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var _ref;

    return _ref = {}, _ref[keyNavigationPrevious] = function () {
      dispatch({
        type: SelectedItemKeyDownNavigationPrevious
      });
    }, _ref[keyNavigationNext] = function () {
      dispatch({
        type: SelectedItemKeyDownNavigationNext
      });
    }, _ref.Delete = function Delete() {
      dispatch({
        type: SelectedItemKeyDownDelete
      });
    }, _ref.Backspace = function Backspace() {
      dispatch({
        type: SelectedItemKeyDownBackspace
      });
    }, _ref;
  }, [dispatch, keyNavigationNext, keyNavigationPrevious]);
  var dropdownKeyDownHandlers = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var _ref2;

    return _ref2 = {}, _ref2[keyNavigationPrevious] = function (event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownNavigationPrevious
        });
      }
    }, _ref2.Backspace = function Backspace(event) {
      if (isKeyDownOperationPermitted(event)) {
        dispatch({
          type: DropdownKeyDownBackspace
        });
      }
    }, _ref2;
  }, [dispatch, keyNavigationPrevious]); // Getter props.

  var getSelectedItemProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp) {
    var _extends2;

    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        selectedItem = _ref3.selectedItem,
        index = _ref3.index,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"]);

    var latestState = latest.current.state;
    var itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);

    if (itemIndex < 0) {
      throw new Error('Pass either selectedItem or index in getSelectedItemProps!');
    }

    var selectedItemHandleClick = function selectedItemHandleClick() {
      dispatch({
        type: SelectedItemClick,
        index: index
      });
    };

    var selectedItemHandleKeyDown = function selectedItemHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && selectedItemKeyDownHandlers[key]) {
        selectedItemKeyDownHandlers[key](event);
      }
    };

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (selectedItemNode) {
      if (selectedItemNode) {
        selectedItemRefs.current.push(selectedItemNode);
      }
    }), _extends2.tabIndex = index === latestState.activeIndex ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, selectedItemHandleClick), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, selectedItemHandleKeyDown), _extends2), rest);
  }, [dispatch, latest, selectedItemKeyDownHandlers]);
  var getDropdownProps = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_temp2, _temp3) {
    var _extends3;

    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$refKey = _ref4.refKey,
        refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
        ref = _ref4.ref,
        onKeyDown = _ref4.onKeyDown,
        onClick = _ref4.onClick,
        _ref4$preventKeyActio = _ref4.preventKeyAction,
        preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"]);

    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$suppressRefErro = _ref5.suppressRefError,
        suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;

    setGetterPropCallInfo('getDropdownProps', suppressRefError, refKey, dropdownRef);

    var dropdownHandleKeyDown = function dropdownHandleKeyDown(event) {
      var key = normalizeArrowKey(event);

      if (key && dropdownKeyDownHandlers[key]) {
        dropdownKeyDownHandlers[key](event);
      }
    };

    var dropdownHandleClick = function dropdownHandleClick() {
      dispatch({
        type: DropdownClick
      });
    };

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (dropdownNode) {
      if (dropdownNode) {
        dropdownRef.current = dropdownNode;
      }
    }), _extends3), !preventKeyAction && {
      onKeyDown: callAllEventHandlers(onKeyDown, dropdownHandleKeyDown),
      onClick: callAllEventHandlers(onClick, dropdownHandleClick)
    }, rest);
  }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]); // returns

  var addSelectedItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (selectedItem) {
    dispatch({
      type: FunctionAddSelectedItem,
      selectedItem: selectedItem
    });
  }, [dispatch]);
  var removeSelectedItem = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (selectedItem) {
    dispatch({
      type: FunctionRemoveSelectedItem,
      selectedItem: selectedItem
    });
  }, [dispatch]);
  var setSelectedItems = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newSelectedItems) {
    dispatch({
      type: FunctionSetSelectedItems,
      selectedItems: newSelectedItems
    });
  }, [dispatch]);
  var setActiveIndex = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (newActiveIndex) {
    dispatch({
      type: FunctionSetActiveIndex,
      activeIndex: newActiveIndex
    });
  }, [dispatch]);
  var reset = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
    dispatch({
      type: FunctionReset$2
    });
  }, [dispatch]);
  return {
    getSelectedItemProps: getSelectedItemProps,
    getDropdownProps: getDropdownProps,
    addSelectedItem: addSelectedItem,
    removeSelectedItem: removeSelectedItem,
    setSelectedItems: setSelectedItems,
    setActiveIndex: setActiveIndex,
    reset: reset,
    selectedItems: selectedItems,
    activeIndex: activeIndex
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Downshift);



/***/ }),

/***/ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/extends.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/setPrototypeOf */ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/downshift/node_modules/react-is/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/downshift/node_modules/react-is/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/downshift/node_modules/react-is/cjs/react-is.development.js");
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21wdXRlLXNjcm9sbC1pbnRvLXZpZXcvZGlzdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvZGlzdC9kb3duc2hpZnQuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG93bnNoaWZ0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG93bnNoaWZ0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9kb3duc2hpZnQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxxQkFDeUNDLDZEQUFXLENBQUM7QUFDckVDLFNBQUssRUFBRSxFQUQ4RDtBQUVyRTtBQUNBQyxzQkFIcUUsZ0NBR2hEO0FBQ3BCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsS0FMb0U7QUFNckU7QUFDQUMsd0JBUHFFLGtDQU85QztBQUN0QkYsYUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQTtBQVRvRSxHQUFELENBRHBEO0FBQUEsTUFDVEUsWUFEUyxnQkFDVEEsWUFEUztBQUFBLE1BQ0tDLGFBREwsZ0JBQ0tBLGFBREw7QUFBQSxNQUNvQkMsZ0JBRHBCLGdCQUNvQkEsZ0JBRHBCOztBQWFqQixzQkFDQyxxRUFBQyw2REFBRDtBQUFBLDRCQUNDLDRHQUFTQSxnQkFBVDtBQUFBLDZCQUNDLGdHQUNLRCxhQUFhLENBQUM7QUFDakJFLFlBQUksRUFBRSxRQURXO0FBRWpCQyxtQkFBVyxFQUFFLG9CQUZJO0FBR2pCQyxVQUFFLEVBQUUsUUFIYTtBQUlqQkMsaUJBQVMsRUFBRTtBQUpNLE9BQUQsQ0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVlDLHFFQUFDLHlEQUFEO0FBQUEsOEJBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUdDLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNB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QUFTOztBQUVUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxLQUErQztBQUN6RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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cy9fYXBwLjAxMTBkYWQxMmRhNjI2YTQ2ZTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb21ib2JveCB9IGZyb20gXCJkb3duc2hpZnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hTdHlsZXMsIERyb3BEb3duLCBEcm9wRG93bkl0ZW0gfSBmcm9tIFwiLi9zdHlsZXMvRHJvcERvd25cIjtcclxuXHJcbmZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuXHRjb25zdCB7IGdldE1lbnVQcm9wcywgZ2V0SW5wdXRQcm9wcywgZ2V0Q29tYm9ib3hQcm9wcyB9ID0gdXNlQ29tYm9ib3goe1xyXG5cdFx0aXRlbXM6IFtdLFxyXG5cdFx0Ly8gRmlyZSB3aGVuIGlucHV0IGRldGVjdGVkIGluIHRoZSBzZWFyY2ggYm94XHJcblx0XHRvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiSW5wdXQgY2hhbmdlZFwiKTtcclxuXHRcdH0sXHJcblx0XHQvLyBGaXJlIHdoZW4gc29tZW9uZSBzZWxlY3QgYW4gaXRlbSBmcm9tIGRyb3Bib3duIGJveFxyXG5cdFx0b25TZWxlY3RlZEl0ZW1DaGFuZ2UoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaXRlbSBjaGFuZ2VcIik7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFNlYXJjaFN0eWxlcz5cclxuXHRcdFx0PGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wc30+XHJcblx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHR7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcblx0XHRcdFx0XHRcdHR5cGU6IFwic2VhcmNoXCIsXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIlNlYXJjaCBmb3IgYW4gaXRlbVwiLFxyXG5cdFx0XHRcdFx0XHRpZDogXCJzZWFyY2hcIixcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lOiBcImxvYWRpbmdcIixcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PERyb3BEb3duPlxyXG5cdFx0XHRcdDxEcm9wRG93bkl0ZW0+V29haDwvRHJvcERvd25JdGVtPlxyXG5cclxuXHRcdFx0XHQ8RHJvcERvd25JdGVtPldvYWg8L0Ryb3BEb3duSXRlbT5cclxuXHJcblx0XHRcdFx0PERyb3BEb3duSXRlbT5Xb2FoPC9Ecm9wRG93bkl0ZW0+XHJcblx0XHRcdDwvRHJvcERvd24+XHJcblx0XHQ8L1NlYXJjaFN0eWxlcz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImZ1bmN0aW9uIHQodCl7cmV0dXJuIG51bGwhPXQmJlwib2JqZWN0XCI9PXR5cGVvZiB0JiYxPT09dC5ub2RlVHlwZX1mdW5jdGlvbiBlKHQsZSl7cmV0dXJuKCFlfHxcImhpZGRlblwiIT09dCkmJlwidmlzaWJsZVwiIT09dCYmXCJjbGlwXCIhPT10fWZ1bmN0aW9uIG4odCxuKXtpZih0LmNsaWVudEhlaWdodDx0LnNjcm9sbEhlaWdodHx8dC5jbGllbnRXaWR0aDx0LnNjcm9sbFdpZHRoKXt2YXIgcj1nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCk7cmV0dXJuIGUoci5vdmVyZmxvd1ksbil8fGUoci5vdmVyZmxvd1gsbil8fGZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQpe2lmKCF0Lm93bmVyRG9jdW1lbnR8fCF0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpcmV0dXJuIG51bGw7dHJ5e3JldHVybiB0Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZnJhbWVFbGVtZW50fWNhdGNoKHQpe3JldHVybiBudWxsfX0odCk7cmV0dXJuISFlJiYoZS5jbGllbnRIZWlnaHQ8dC5zY3JvbGxIZWlnaHR8fGUuY2xpZW50V2lkdGg8dC5zY3JvbGxXaWR0aCl9KHQpfXJldHVybiExfWZ1bmN0aW9uIHIodCxlLG4scixpLG8sbCxkKXtyZXR1cm4gbzx0JiZsPmV8fG8+dCYmbDxlPzA6bzw9dCYmZDw9bnx8bD49ZSYmZD49bj9vLXQtcjpsPmUmJmQ8bnx8bzx0JiZkPm4/bC1lK2k6MH1leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihlLGkpe3ZhciBvPXdpbmRvdyxsPWkuc2Nyb2xsTW9kZSxkPWkuYmxvY2ssdT1pLmlubGluZSxoPWkuYm91bmRhcnksYT1pLnNraXBPdmVyZmxvd0hpZGRlbkVsZW1lbnRzLGM9XCJmdW5jdGlvblwiPT10eXBlb2YgaD9oOmZ1bmN0aW9uKHQpe3JldHVybiB0IT09aH07aWYoIXQoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdGFyZ2V0XCIpO2Zvcih2YXIgZj1kb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQscz1bXSxwPWU7dChwKSYmYyhwKTspe2lmKChwPXAucGFyZW50Tm9kZSk9PT1mKXtzLnB1c2gocCk7YnJlYWt9cD09PWRvY3VtZW50LmJvZHkmJm4ocCkmJiFuKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCl8fG4ocCxhKSYmcy5wdXNoKHApfWZvcih2YXIgZz1vLnZpc3VhbFZpZXdwb3J0P28udmlzdWFsVmlld3BvcnQud2lkdGg6aW5uZXJXaWR0aCxtPW8udmlzdWFsVmlld3BvcnQ/by52aXN1YWxWaWV3cG9ydC5oZWlnaHQ6aW5uZXJIZWlnaHQsdz13aW5kb3cuc2Nyb2xsWHx8cGFnZVhPZmZzZXQsdj13aW5kb3cuc2Nyb2xsWXx8cGFnZVlPZmZzZXQsVz1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGI9Vy5oZWlnaHQsSD1XLndpZHRoLHk9Vy50b3AsTT1XLnJpZ2h0LEU9Vy5ib3R0b20sVj1XLmxlZnQseD1cInN0YXJ0XCI9PT1kfHxcIm5lYXJlc3RcIj09PWQ/eTpcImVuZFwiPT09ZD9FOnkrYi8yLEk9XCJjZW50ZXJcIj09PXU/VitILzI6XCJlbmRcIj09PXU/TTpWLEM9W10sVD0wO1Q8cy5sZW5ndGg7VCsrKXt2YXIgaz1zW1RdLEI9ay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxEPUIuaGVpZ2h0LE89Qi53aWR0aCxSPUIudG9wLFg9Qi5yaWdodCxZPUIuYm90dG9tLEw9Qi5sZWZ0O2lmKFwiaWYtbmVlZGVkXCI9PT1sJiZ5Pj0wJiZWPj0wJiZFPD1tJiZNPD1nJiZ5Pj1SJiZFPD1ZJiZWPj1MJiZNPD1YKXJldHVybiBDO3ZhciBTPWdldENvbXB1dGVkU3R5bGUoayksaj1wYXJzZUludChTLmJvcmRlckxlZnRXaWR0aCwxMCksTj1wYXJzZUludChTLmJvcmRlclRvcFdpZHRoLDEwKSxxPXBhcnNlSW50KFMuYm9yZGVyUmlnaHRXaWR0aCwxMCksej1wYXJzZUludChTLmJvcmRlckJvdHRvbVdpZHRoLDEwKSxBPTAsRj0wLEc9XCJvZmZzZXRXaWR0aFwiaW4gaz9rLm9mZnNldFdpZHRoLWsuY2xpZW50V2lkdGgtai1xOjAsSj1cIm9mZnNldEhlaWdodFwiaW4gaz9rLm9mZnNldEhlaWdodC1rLmNsaWVudEhlaWdodC1OLXo6MDtpZihmPT09aylBPVwic3RhcnRcIj09PWQ/eDpcImVuZFwiPT09ZD94LW06XCJuZWFyZXN0XCI9PT1kP3Iodix2K20sbSxOLHosdit4LHYreCtiLGIpOngtbS8yLEY9XCJzdGFydFwiPT09dT9JOlwiY2VudGVyXCI9PT11P0ktZy8yOlwiZW5kXCI9PT11P0ktZzpyKHcsdytnLGcsaixxLHcrSSx3K0krSCxIKSxBPU1hdGgubWF4KDAsQSt2KSxGPU1hdGgubWF4KDAsRit3KTtlbHNle0E9XCJzdGFydFwiPT09ZD94LVItTjpcImVuZFwiPT09ZD94LVkreitKOlwibmVhcmVzdFwiPT09ZD9yKFIsWSxELE4seitKLHgseCtiLGIpOngtKFIrRC8yKStKLzIsRj1cInN0YXJ0XCI9PT11P0ktTC1qOlwiY2VudGVyXCI9PT11P0ktKEwrTy8yKStHLzI6XCJlbmRcIj09PXU/SS1YK3ErRzpyKEwsWCxPLGoscStHLEksSStILEgpO3ZhciBLPWsuc2Nyb2xsTGVmdCxQPWsuc2Nyb2xsVG9wO3grPVAtKEE9TWF0aC5tYXgoMCxNYXRoLm1pbihQK0Esay5zY3JvbGxIZWlnaHQtRCtKKSkpLEkrPUstKEY9TWF0aC5tYXgoMCxNYXRoLm1pbihLK0Ysay5zY3JvbGxXaWR0aC1PK0cpKSl9Qy5wdXNoKHtlbDprLHRvcDpBLGxlZnQ6Rn0pfXJldHVybiBDfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQsIENvbXBvbmVudCwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZHVjZXIsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpc0ZvcndhcmRSZWYgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgY29tcHV0ZVNjcm9sbEludG9WaWV3IGZyb20gJ2NvbXB1dGUtc2Nyb2xsLWludG8tdmlldyc7XG5cbnZhciBpZENvdW50ZXIgPSAwO1xuLyoqXG4gKiBBY2NlcHRzIGEgcGFyYW1ldGVyIGFuZCByZXR1cm5zIGl0IGlmIGl0J3MgYSBmdW5jdGlvblxuICogb3IgYSBub29wIGZ1bmN0aW9uIGlmIGl0J3Mgbm90LiBUaGlzIGFsbG93cyB1cyB0b1xuICogYWNjZXB0IGEgY2FsbGJhY2ssIGJ1dCBub3Qgd29ycnkgYWJvdXQgaXQgaWYgaXQncyBub3RcbiAqIHBhc3NlZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiIHRoZSBjYWxsYmFja1xuICogQHJldHVybiB7RnVuY3Rpb259IGEgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBjYlRvQ2IoY2IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJyA/IGNiIDogbm9vcDtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4vKipcbiAqIFNjcm9sbCBub2RlIGludG8gdmlldyBpZiBuZWNlc3NhcnlcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG5vZGUgdGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgc2Nyb2xsIGludG8gdmlld1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbWVudU5vZGUgdGhlIG1lbnUgZWxlbWVudCBvZiB0aGUgY29tcG9uZW50XG4gKi9cblxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhub2RlLCBtZW51Tm9kZSkge1xuICBpZiAoIW5vZGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYWN0aW9ucyA9IGNvbXB1dGVTY3JvbGxJbnRvVmlldyhub2RlLCB7XG4gICAgYm91bmRhcnk6IG1lbnVOb2RlLFxuICAgIGJsb2NrOiAnbmVhcmVzdCcsXG4gICAgc2Nyb2xsTW9kZTogJ2lmLW5lZWRlZCdcbiAgfSk7XG4gIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBlbCA9IF9yZWYuZWwsXG4gICAgICAgIHRvcCA9IF9yZWYudG9wLFxuICAgICAgICBsZWZ0ID0gX3JlZi5sZWZ0O1xuICAgIGVsLnNjcm9sbFRvcCA9IHRvcDtcbiAgICBlbC5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgfSk7XG59XG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudCB0aGUgcGFyZW50IG5vZGVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNoaWxkIHRoZSBjaGlsZCBub2RlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoZSBwYXJlbnQgaXMgdGhlIGNoaWxkIG9yIHRoZSBjaGlsZCBpcyBpbiB0aGUgcGFyZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpc09yQ29udGFpbnNOb2RlKHBhcmVudCwgY2hpbGQpIHtcbiAgcmV0dXJuIHBhcmVudCA9PT0gY2hpbGQgfHwgY2hpbGQgaW5zdGFuY2VvZiBOb2RlICYmIHBhcmVudC5jb250YWlucyAmJiBwYXJlbnQuY29udGFpbnMoY2hpbGQpO1xufVxuLyoqXG4gKiBTaW1wbGUgZGVib3VuY2UgaW1wbGVtZW50YXRpb24uIFdpbGwgY2FsbCB0aGUgZ2l2ZW5cbiAqIGZ1bmN0aW9uIG9uY2UgYWZ0ZXIgdGhlIHRpbWUgZ2l2ZW4gaGFzIHBhc3NlZCBzaW5jZVxuICogaXQgd2FzIGxhc3QgY2FsbGVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gdGhlIGZ1bmN0aW9uIHRvIGNhbGwgYWZ0ZXIgdGhlIHRpbWVcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIHRoZSB0aW1lIHRvIHdhaXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKi9cblxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwcGVyKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKTtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgICBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xuICAgIH0sIHRpbWUpO1xuICB9XG5cbiAgd3JhcHBlci5jYW5jZWwgPSBjYW5jZWw7XG4gIHJldHVybiB3cmFwcGVyO1xufVxuLyoqXG4gKiBUaGlzIGlzIGludGVuZGVkIHRvIGJlIHVzZWQgdG8gY29tcG9zZSBldmVudCBoYW5kbGVycy5cbiAqIFRoZXkgYXJlIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIG9uZSBvZiB0aGVtIHNldHNcbiAqIGBldmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdCA9IHRydWVgLlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZm5zIHRoZSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRoZSBldmVudCBoYW5kbGVyIHRvIGFkZCB0byBhbiBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBjYWxsQWxsRXZlbnRIYW5kbGVycygpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmbnMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBmbnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMgPiAxID8gX2xlbjMgLSAxIDogMCksIF9rZXkzID0gMTsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5MyAtIDFdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm5zLnNvbWUoZnVuY3Rpb24gKGZuKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgZm4uYXBwbHkodm9pZCAwLCBbZXZlbnRdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdCB8fCBldmVudC5oYXNPd25Qcm9wZXJ0eSgnbmF0aXZlRXZlbnQnKSAmJiBldmVudC5uYXRpdmVFdmVudC5wcmV2ZW50RG93bnNoaWZ0RGVmYXVsdDtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVmcygpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCByZWZzID0gbmV3IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgcmVmc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlZihub2RlKTtcbiAgICAgIH0gZWxzZSBpZiAocmVmKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogVGhpcyBnZW5lcmF0ZXMgYSB1bmlxdWUgSUQgZm9yIGFuIGluc3RhbmNlIG9mIERvd25zaGlmdFxuICogQHJldHVybiB7U3RyaW5nfSB0aGUgdW5pcXVlIElEXG4gKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUlkKCkge1xuICByZXR1cm4gU3RyaW5nKGlkQ291bnRlcisrKTtcbn1cbi8qKlxuICogUmVzZXRzIGlkQ291bnRlciB0byAwLiBVc2VkIGZvciBTU1IuXG4gKi9cblxuXG5mdW5jdGlvbiByZXNldElkQ291bnRlcigpIHtcbiAgaWRDb3VudGVyID0gMDtcbn1cbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igc3RhdHVzIG1lc3NhZ2UuIE9ubHkgYWRkZWQgd2hlbiBtZW51IGlzIG9wZW4uXG4gKiBXaWxsIHNwZWNpZnQgaWYgdGhlcmUgYXJlIHJlc3VsdHMgaW4gdGhlIGxpc3QsIGFuZCBpZiBzbywgaG93IG1hbnksXG4gKiBhbmQgd2hhdCBrZXlzIGFyZSByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gdGhlIGRvd25zaGlmdCBzdGF0ZSBhbmQgb3RoZXIgcmVsZXZhbnQgcHJvcGVydGllc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgYTExeSBzdGF0dXMgbWVzc2FnZVxuICovXG5cblxuZnVuY3Rpb24gZ2V0QTExeVN0YXR1c01lc3NhZ2UoX3JlZjIpIHtcbiAgdmFyIGlzT3BlbiA9IF9yZWYyLmlzT3BlbixcbiAgICAgIHJlc3VsdENvdW50ID0gX3JlZjIucmVzdWx0Q291bnQsXG4gICAgICBwcmV2aW91c1Jlc3VsdENvdW50ID0gX3JlZjIucHJldmlvdXNSZXN1bHRDb3VudDtcblxuICBpZiAoIWlzT3Blbikge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghcmVzdWx0Q291bnQpIHtcbiAgICByZXR1cm4gJ05vIHJlc3VsdHMgYXJlIGF2YWlsYWJsZS4nO1xuICB9XG5cbiAgaWYgKHJlc3VsdENvdW50ICE9PSBwcmV2aW91c1Jlc3VsdENvdW50KSB7XG4gICAgcmV0dXJuIHJlc3VsdENvdW50ICsgXCIgcmVzdWx0XCIgKyAocmVzdWx0Q291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZScpICsgXCIgYXZhaWxhYmxlLCB1c2UgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZS4gUHJlc3MgRW50ZXIga2V5IHRvIHNlbGVjdC5cIjtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogVGFrZXMgYW4gYXJndW1lbnQgYW5kIGlmIGl0J3MgYW4gYXJyYXksIHJldHVybnMgdGhlIGZpcnN0IGl0ZW0gaW4gdGhlIGFycmF5XG4gKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgYXJndW1lbnRcbiAqIEBwYXJhbSB7Kn0gYXJnIHRoZSBtYXliZS1hcnJheVxuICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWUgdGhlIHZhbHVlIGlmIGFyZyBpcyBmYWxzZXkgbm90IGRlZmluZWRcbiAqIEByZXR1cm4geyp9IHRoZSBhcmcgb3IgaXQncyBmaXJzdCBpdGVtXG4gKi9cblxuXG5mdW5jdGlvbiB1bndyYXBBcnJheShhcmcsIGRlZmF1bHRWYWx1ZSkge1xuICBhcmcgPSBBcnJheS5pc0FycmF5KGFyZykgP1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAocHJlYWN0KSAqL1xuICBhcmdbMF0gOiBhcmc7XG5cbiAgaWYgKCFhcmcgJiYgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJnO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbGVtZW50IChQKXJlYWN0IGVsZW1lbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQncyBhIERPTSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiBpc0RPTUVsZW1lbnQoZWxlbWVudCkge1xuXG5cbiAgcmV0dXJuIHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gZWxlbWVudCAoUClyZWFjdCBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBwcm9wc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudFByb3BzKGVsZW1lbnQpIHtcblxuICByZXR1cm4gZWxlbWVudC5wcm9wcztcbn1cbi8qKlxuICogVGhyb3dzIGEgaGVscGZ1bCBlcnJvciBtZXNzYWdlIGZvciByZXF1aXJlZCBwcm9wZXJ0aWVzLiBVc2VmdWxcbiAqIHRvIGJlIHVzZWQgYXMgYSBkZWZhdWx0IGluIGRlc3RydWN0dXJpbmcgb3Igb2JqZWN0IHBhcmFtcy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBmbk5hbWUgdGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wTmFtZSB0aGUgcHJvcCBuYW1lXG4gKi9cblxuXG5mdW5jdGlvbiByZXF1aXJlZFByb3AoZm5OYW1lLCBwcm9wTmFtZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKFwiVGhlIHByb3BlcnR5IFxcXCJcIiArIHByb3BOYW1lICsgXCJcXFwiIGlzIHJlcXVpcmVkIGluIFxcXCJcIiArIGZuTmFtZSArIFwiXFxcIlwiKTtcbn1cblxudmFyIHN0YXRlS2V5cyA9IFsnaGlnaGxpZ2h0ZWRJbmRleCcsICdpbnB1dFZhbHVlJywgJ2lzT3BlbicsICdzZWxlY3RlZEl0ZW0nLCAndHlwZSddO1xuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgdGhlIHN0YXRlIG9iamVjdFxuICogQHJldHVybiB7T2JqZWN0fSBzdGF0ZSB0aGF0IGlzIHJlbGV2YW50IHRvIGRvd25zaGlmdFxuICovXG5cbmZ1bmN0aW9uIHBpY2tTdGF0ZShzdGF0ZSkge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0ge307XG4gIH1cblxuICB2YXIgcmVzdWx0ID0ge307XG4gIHN0YXRlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICByZXN1bHRba10gPSBzdGF0ZVtrXTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBUaGlzIHdpbGwgcGVyZm9ybSBhIHNoYWxsb3cgbWVyZ2Ugb2YgdGhlIGdpdmVuIHN0YXRlIG9iamVjdFxuICogd2l0aCB0aGUgc3RhdGUgY29taW5nIGZyb20gcHJvcHNcbiAqIChmb3IgdGhlIGNvbnRyb2xsZWQgY29tcG9uZW50IHNjZW5hcmlvKVxuICogVGhpcyBpcyB1c2VkIGluIHN0YXRlIHVwZGF0ZXIgZnVuY3Rpb25zIHNvIHRoZXkncmUgcmVmZXJlbmNpbmdcbiAqIHRoZSByaWdodCBzdGF0ZSByZWdhcmRsZXNzIG9mIHdoZXJlIGl0IGNvbWVzIGZyb20uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50L2hvb2suXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIHByb3BzIHRoYXQgbWF5IGNvbnRhaW4gY29udHJvbGxlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbWVyZ2VkIGNvbnRyb2xsZWQgc3RhdGUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSwgcHJvcHMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZTdGF0ZSwga2V5KSB7XG4gICAgcHJldlN0YXRlW2tleV0gPSBpc0NvbnRyb2xsZWRQcm9wKHByb3BzLCBrZXkpID8gcHJvcHNba2V5XSA6IHN0YXRlW2tleV07XG4gICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfSwge30pO1xufVxuLyoqXG4gKiBUaGlzIGRldGVybWluZXMgd2hldGhlciBhIHByb3AgaXMgYSBcImNvbnRyb2xsZWQgcHJvcFwiIG1lYW5pbmcgaXQgaXNcbiAqIHN0YXRlIHdoaWNoIGlzIGNvbnRyb2xsZWQgYnkgdGhlIG91dHNpZGUgb2YgdGhpcyBjb21wb25lbnQgcmF0aGVyXG4gKiB0aGFuIHdpdGhpbiB0aGlzIGNvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgVGhlIHByb3BzIHRoYXQgbWF5IGNvbnRhaW4gY29udHJvbGxlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IHRoZSBrZXkgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQgaXMgYSBjb250cm9sbGVkIGNvbnRyb2xsZWQgcHJvcFxuICovXG5cblxuZnVuY3Rpb24gaXNDb250cm9sbGVkUHJvcChwcm9wcywga2V5KSB7XG4gIHJldHVybiBwcm9wc1trZXldICE9PSB1bmRlZmluZWQ7XG59XG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlICdrZXknIHByb3BlcnR5IG9mIGEgS2V5Ym9hcmRFdmVudCBpbiBJRS9FZGdlXG4gKiBAcGFyYW0ge09iamVjdH0gZXZlbnQgYSBrZXlib2FyZEV2ZW50IG9iamVjdFxuICogQHJldHVybiB7U3RyaW5nfSBrZXlib2FyZCBrZXlcbiAqL1xuXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KSB7XG4gIHZhciBrZXkgPSBldmVudC5rZXksXG4gICAgICBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKGllKSAqL1xuXG4gIGlmIChrZXlDb2RlID49IDM3ICYmIGtleUNvZGUgPD0gNDAgJiYga2V5LmluZGV4T2YoJ0Fycm93JykgIT09IDApIHtcbiAgICByZXR1cm4gXCJBcnJvd1wiICsga2V5O1xuICB9XG5cbiAgcmV0dXJuIGtleTtcbn1cbi8qKlxuICogU2ltcGxlIGNoZWNrIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb2JqZWN0IGxpdGVyYWxcbiAqIEBwYXJhbSB7Kn0gb2JqIGFueSB0aGluZ3NcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgaXQncyBvYmplY3QgbGl0ZXJhbFxuICovXG5cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV3IGluZGV4IGluIHRoZSBsaXN0LCBpbiBhIGNpcmN1bGFyIHdheS4gSWYgbmV4dCB2YWx1ZSBpcyBvdXQgb2YgYm9uZHMgZnJvbSB0aGUgdG90YWwsXG4gKiBpdCB3aWxsIHdyYXAgdG8gZWl0aGVyIDAgb3IgaXRlbUNvdW50IC0gMS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbW92ZUFtb3VudCBOdW1iZXIgb2YgcG9zaXRpb25zIHRvIG1vdmUuIE5lZ2F0aXZlIHRvIG1vdmUgYmFja3dhcmRzLCBwb3NpdGl2ZSBmb3J3YXJkcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiYXNlSW5kZXggVGhlIGluaXRpYWwgcG9zaXRpb24gdG8gbW92ZSBmcm9tLlxuICogQHBhcmFtIHtudW1iZXJ9IGl0ZW1Db3VudCBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZ2V0SXRlbU5vZGVGcm9tSW5kZXggVXNlZCB0byBjaGVjayBpZiBpdGVtIGlzIGRpc2FibGVkLlxuICogQHBhcmFtIHtib29sZWFufSBjaXJjdWxhciBTcGVjaWZ5IGlmIG5hdmlnYXRpb24gaXMgY2lyY3VsYXIuIERlZmF1bHQgaXMgdHJ1ZS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBuZXcgaW5kZXggYWZ0ZXIgdGhlIG1vdmUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXROZXh0V3JhcHBpbmdJbmRleChtb3ZlQW1vdW50LCBiYXNlSW5kZXgsIGl0ZW1Db3VudCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGNpcmN1bGFyKSB7XG4gIGlmIChjaXJjdWxhciA9PT0gdm9pZCAwKSB7XG4gICAgY2lyY3VsYXIgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGl0ZW1Db3VudCA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIHZhciBpdGVtc0xhc3RJbmRleCA9IGl0ZW1Db3VudCAtIDE7XG5cbiAgaWYgKHR5cGVvZiBiYXNlSW5kZXggIT09ICdudW1iZXInIHx8IGJhc2VJbmRleCA8IDAgfHwgYmFzZUluZGV4ID49IGl0ZW1Db3VudCkge1xuICAgIGJhc2VJbmRleCA9IG1vdmVBbW91bnQgPiAwID8gLTEgOiBpdGVtc0xhc3RJbmRleCArIDE7XG4gIH1cblxuICB2YXIgbmV3SW5kZXggPSBiYXNlSW5kZXggKyBtb3ZlQW1vdW50O1xuXG4gIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICBuZXdJbmRleCA9IGNpcmN1bGFyID8gaXRlbXNMYXN0SW5kZXggOiAwO1xuICB9IGVsc2UgaWYgKG5ld0luZGV4ID4gaXRlbXNMYXN0SW5kZXgpIHtcbiAgICBuZXdJbmRleCA9IGNpcmN1bGFyID8gMCA6IGl0ZW1zTGFzdEluZGV4O1xuICB9XG5cbiAgdmFyIG5vbkRpc2FibGVkTmV3SW5kZXggPSBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleChtb3ZlQW1vdW50LCBuZXdJbmRleCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgY2lyY3VsYXIpO1xuXG4gIGlmIChub25EaXNhYmxlZE5ld0luZGV4ID09PSAtMSkge1xuICAgIHJldHVybiBiYXNlSW5kZXggPj0gaXRlbUNvdW50ID8gLTEgOiBiYXNlSW5kZXg7XG4gIH1cblxuICByZXR1cm4gbm9uRGlzYWJsZWROZXdJbmRleDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBpbmRleCBpbiB0aGUgbGlzdCBvZiBhbiBpdGVtIHRoYXQgaXMgbm90IGRpc2FibGVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBtb3ZlQW1vdW50IE51bWJlciBvZiBwb3NpdGlvbnMgdG8gbW92ZS4gTmVnYXRpdmUgdG8gbW92ZSBiYWNrd2FyZHMsIHBvc2l0aXZlIGZvcndhcmRzLlxuICogQHBhcmFtIHtudW1iZXJ9IGJhc2VJbmRleCBUaGUgaW5pdGlhbCBwb3NpdGlvbiB0byBtb3ZlIGZyb20uXG4gKiBAcGFyYW0ge251bWJlcn0gaXRlbUNvdW50IFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRJdGVtTm9kZUZyb21JbmRleCBVc2VkIHRvIGNoZWNrIGlmIGl0ZW0gaXMgZGlzYWJsZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNpcmN1bGFyIFNwZWNpZnkgaWYgbmF2aWdhdGlvbiBpcyBjaXJjdWxhci4gRGVmYXVsdCBpcyB0cnVlLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIG5ldyBpbmRleC4gUmV0dXJucyBiYXNlSW5kZXggaWYgaXRlbSBpcyBub3QgZGlzYWJsZWQuIFJldHVybnMgbmV4dCBub24tZGlzYWJsZWQgaXRlbSBvdGhlcndpc2UuIElmIG5vIG5vbi1kaXNhYmxlZCBmb3VuZCBpdCB3aWxsIHJldHVybiAtMS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldE5leHROb25EaXNhYmxlZEluZGV4KG1vdmVBbW91bnQsIGJhc2VJbmRleCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgY2lyY3VsYXIpIHtcbiAgdmFyIGN1cnJlbnRFbGVtZW50Tm9kZSA9IGdldEl0ZW1Ob2RlRnJvbUluZGV4KGJhc2VJbmRleCk7XG5cbiAgaWYgKCFjdXJyZW50RWxlbWVudE5vZGUgfHwgIWN1cnJlbnRFbGVtZW50Tm9kZS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICByZXR1cm4gYmFzZUluZGV4O1xuICB9XG5cbiAgaWYgKG1vdmVBbW91bnQgPiAwKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSBiYXNlSW5kZXggKyAxOyBpbmRleCA8IGl0ZW1Db3VudDsgaW5kZXgrKykge1xuICAgICAgaWYgKCFnZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgX2luZGV4ID0gYmFzZUluZGV4IC0gMTsgX2luZGV4ID49IDA7IF9pbmRleC0tKSB7XG4gICAgICBpZiAoIWdldEl0ZW1Ob2RlRnJvbUluZGV4KF9pbmRleCkuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHJldHVybiBfaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNpcmN1bGFyKSB7XG4gICAgcmV0dXJuIG1vdmVBbW91bnQgPiAwID8gZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgaXRlbUNvdW50LCBnZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpIDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoLTEsIGl0ZW1Db3VudCAtIDEsIGl0ZW1Db3VudCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGV2ZW50IHRhcmdldCBpcyB3aXRoaW4gdGhlIGRvd25zaGlmdCBlbGVtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50VGFyZ2V0fSB0YXJnZXQgVGFyZ2V0IHRvIGNoZWNrLlxuICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBkb3duc2hpZnRFbGVtZW50cyBUaGUgZWxlbWVudHMgdGhhdCBmb3JtIGRvd25zaGlmdCAobGlzdCwgdG9nZ2xlIGJ1dHRvbiBldGMpLlxuICogQHBhcmFtIHtEb2N1bWVudH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50LlxuICogQHBhcmFtIHtib29sZWFufSBjaGVja0FjdGl2ZUVsZW1lbnQgV2hldGhlciB0byBhbHNvIGNoZWNrIGFjdGl2ZUVsZW1lbnQuXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgaXMgd2l0aGluIGRvd25zaGlmdCBlbGVtZW50cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRhcmdldFdpdGhpbkRvd25zaGlmdCh0YXJnZXQsIGRvd25zaGlmdEVsZW1lbnRzLCBkb2N1bWVudCwgY2hlY2tBY3RpdmVFbGVtZW50KSB7XG4gIGlmIChjaGVja0FjdGl2ZUVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgIGNoZWNrQWN0aXZlRWxlbWVudCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZG93bnNoaWZ0RWxlbWVudHMuc29tZShmdW5jdGlvbiAoY29udGV4dE5vZGUpIHtcbiAgICByZXR1cm4gY29udGV4dE5vZGUgJiYgKGlzT3JDb250YWluc05vZGUoY29udGV4dE5vZGUsIHRhcmdldCkgfHwgY2hlY2tBY3RpdmVFbGVtZW50ICYmIGlzT3JDb250YWluc05vZGUoY29udGV4dE5vZGUsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKTtcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cblxudmFyIHZhbGlkYXRlQ29udHJvbGxlZFVuY2hhbmdlZCA9IG5vb3A7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUNvbnRyb2xsZWRVbmNoYW5nZWQgPSBmdW5jdGlvbiB2YWxpZGF0ZUNvbnRyb2xsZWRVbmNoYW5nZWQoc3RhdGUsIHByZXZQcm9wcywgbmV4dFByb3BzKSB7XG4gICAgdmFyIHdhcm5pbmdEZXNjcmlwdGlvbiA9IFwiVGhpcyBwcm9wIHNob3VsZCBub3Qgc3dpdGNoIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIERvd25zaGlmdCBlbGVtZW50IGZvciB0aGUgbGlmZXRpbWUgb2YgdGhlIGNvbXBvbmVudC4gTW9yZSBpbmZvOiBodHRwczovL2dpdGh1Yi5jb20vZG93bnNoaWZ0LWpzL2Rvd25zaGlmdCNjb250cm9sLXByb3BzXCI7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3BLZXkpIHtcbiAgICAgIGlmIChwcmV2UHJvcHNbcHJvcEtleV0gIT09IHVuZGVmaW5lZCAmJiBuZXh0UHJvcHNbcHJvcEtleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBBIGNvbXBvbmVudCBoYXMgY2hhbmdlZCB0aGUgY29udHJvbGxlZCBwcm9wIFxcXCJcIiArIHByb3BLZXkgKyBcIlxcXCIgdG8gYmUgdW5jb250cm9sbGVkLiBcIiArIHdhcm5pbmdEZXNjcmlwdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKHByZXZQcm9wc1twcm9wS2V5XSA9PT0gdW5kZWZpbmVkICYmIG5leHRQcm9wc1twcm9wS2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IEEgY29tcG9uZW50IGhhcyBjaGFuZ2VkIHRoZSB1bmNvbnRyb2xsZWQgcHJvcCBcXFwiXCIgKyBwcm9wS2V5ICsgXCJcXFwiIHRvIGJlIGNvbnRyb2xsZWQuIFwiICsgd2FybmluZ0Rlc2NyaXB0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn1cblxudmFyIGNsZWFudXBTdGF0dXMgPSBkZWJvdW5jZShmdW5jdGlvbiAoZG9jdW1lbnRQcm9wKSB7XG4gIGdldFN0YXR1c0Rpdihkb2N1bWVudFByb3ApLnRleHRDb250ZW50ID0gJyc7XG59LCA1MDApO1xuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RhdHVzIHRoZSBzdGF0dXMgbWVzc2FnZVxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50UHJvcCBkb2N1bWVudCBwYXNzZWQgYnkgdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gc2V0U3RhdHVzKHN0YXR1cywgZG9jdW1lbnRQcm9wKSB7XG4gIHZhciBkaXYgPSBnZXRTdGF0dXNEaXYoZG9jdW1lbnRQcm9wKTtcblxuICBpZiAoIXN0YXR1cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRpdi50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgY2xlYW51cFN0YXR1cyhkb2N1bWVudFByb3ApO1xufVxuLyoqXG4gKiBHZXQgdGhlIHN0YXR1cyBub2RlIG9yIGNyZWF0ZSBpdCBpZiBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50UHJvcCBkb2N1bWVudCBwYXNzZWQgYnkgdGhlIHVzZXIuXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gdGhlIHN0YXR1cyBub2RlLlxuICovXG5cblxuZnVuY3Rpb24gZ2V0U3RhdHVzRGl2KGRvY3VtZW50UHJvcCkge1xuICBpZiAoZG9jdW1lbnRQcm9wID09PSB2b2lkIDApIHtcbiAgICBkb2N1bWVudFByb3AgPSBkb2N1bWVudDtcbiAgfVxuXG4gIHZhciBzdGF0dXNEaXYgPSBkb2N1bWVudFByb3AuZ2V0RWxlbWVudEJ5SWQoJ2ExMXktc3RhdHVzLW1lc3NhZ2UnKTtcblxuICBpZiAoc3RhdHVzRGl2KSB7XG4gICAgcmV0dXJuIHN0YXR1c0RpdjtcbiAgfVxuXG4gIHN0YXR1c0RpdiA9IGRvY3VtZW50UHJvcC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdHVzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYTExeS1zdGF0dXMtbWVzc2FnZScpO1xuICBzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3N0YXR1cycpO1xuICBzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAncG9saXRlJyk7XG4gIHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtcmVsZXZhbnQnLCAnYWRkaXRpb25zIHRleHQnKTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0dXNEaXYuc3R5bGUsIHtcbiAgICBib3JkZXI6ICcwJyxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMXB4J1xuICB9KTtcbiAgZG9jdW1lbnRQcm9wLmJvZHkuYXBwZW5kQ2hpbGQoc3RhdHVzRGl2KTtcbiAgcmV0dXJuIHN0YXR1c0Rpdjtcbn1cblxudmFyIHVua25vd24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfdW5rbm93bl9fJyA6IDA7XG52YXIgbW91c2VVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9tb3VzZXVwX18nIDogMTtcbnZhciBpdGVtTW91c2VFbnRlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9pdGVtX21vdXNlZW50ZXJfXycgOiAyO1xudmFyIGtleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fYXJyb3dfdXBfXycgOiAzO1xudmFyIGtleURvd25BcnJvd0Rvd24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9hcnJvd19kb3duX18nIDogNDtcbnZhciBrZXlEb3duRXNjYXBlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fZXNjYXBlX18nIDogNTtcbnZhciBrZXlEb3duRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9lbnRlcl9fJyA6IDY7XG52YXIga2V5RG93bkhvbWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9ob21lX18nIDogNztcbnZhciBrZXlEb3duRW5kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2tleWRvd25fZW5kX18nIDogODtcbnZhciBjbGlja0l0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfY2xpY2tfaXRlbV9fJyA6IDk7XG52YXIgYmx1cklucHV0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2JsdXJfaW5wdXRfXycgOiAxMDtcbnZhciBjaGFuZ2VJbnB1dCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9jaGFuZ2VfaW5wdXRfXycgOiAxMTtcbnZhciBrZXlEb3duU3BhY2VCdXR0b24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19hdXRvY29tcGxldGVfa2V5ZG93bl9zcGFjZV9idXR0b25fXycgOiAxMjtcbnZhciBjbGlja0J1dHRvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV9jbGlja19idXR0b25fXycgOiAxMztcbnZhciBibHVyQnV0dG9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2JsdXJfYnV0dG9uX18nIDogMTQ7XG52YXIgY29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fYXV0b2NvbXBsZXRlX2NvbnRyb2xsZWRfcHJvcF91cGRhdGVkX3NlbGVjdGVkX2l0ZW1fXycgOiAxNTtcbnZhciB0b3VjaEVuZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2F1dG9jb21wbGV0ZV90b3VjaGVuZF9fJyA6IDE2O1xuXG52YXIgc3RhdGVDaGFuZ2VUeXBlcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICB1bmtub3duOiB1bmtub3duLFxuICBtb3VzZVVwOiBtb3VzZVVwLFxuICBpdGVtTW91c2VFbnRlcjogaXRlbU1vdXNlRW50ZXIsXG4gIGtleURvd25BcnJvd1VwOiBrZXlEb3duQXJyb3dVcCxcbiAga2V5RG93bkFycm93RG93bjoga2V5RG93bkFycm93RG93bixcbiAga2V5RG93bkVzY2FwZToga2V5RG93bkVzY2FwZSxcbiAga2V5RG93bkVudGVyOiBrZXlEb3duRW50ZXIsXG4gIGtleURvd25Ib21lOiBrZXlEb3duSG9tZSxcbiAga2V5RG93bkVuZDoga2V5RG93bkVuZCxcbiAgY2xpY2tJdGVtOiBjbGlja0l0ZW0sXG4gIGJsdXJJbnB1dDogYmx1cklucHV0LFxuICBjaGFuZ2VJbnB1dDogY2hhbmdlSW5wdXQsXG4gIGtleURvd25TcGFjZUJ1dHRvbjoga2V5RG93blNwYWNlQnV0dG9uLFxuICBjbGlja0J1dHRvbjogY2xpY2tCdXR0b24sXG4gIGJsdXJCdXR0b246IGJsdXJCdXR0b24sXG4gIGNvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbTogY29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtLFxuICB0b3VjaEVuZDogdG91Y2hFbmRcbn0pO1xuXG52YXIgRG93bnNoaWZ0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIERvd25zaGlmdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKERvd25zaGlmdCwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEb3duc2hpZnQoX3Byb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX0NvbXBvbmVudC5jYWxsKHRoaXMsIF9wcm9wcykgfHwgdGhpczsgLy8gZmFuY3kgZGVzdHJ1Y3R1cmluZyArIGRlZmF1bHRzICsgYWxpYXNlc1xuICAgICAgLy8gdGhpcyBiYXNpY2FsbHkgc2F5cyBlYWNoIHZhbHVlIG9mIHN0YXRlIHNob3VsZCBlaXRoZXIgYmUgc2V0IHRvXG4gICAgICAvLyB0aGUgaW5pdGlhbCB2YWx1ZSBvciB0aGUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgaW5pdGlhbCB2YWx1ZSBpcyBub3QgcHJvdmlkZWRcblxuICAgICAgX3RoaXMuaWQgPSBfdGhpcy5wcm9wcy5pZCB8fCBcImRvd25zaGlmdC1cIiArIGdlbmVyYXRlSWQoKTtcbiAgICAgIF90aGlzLm1lbnVJZCA9IF90aGlzLnByb3BzLm1lbnVJZCB8fCBfdGhpcy5pZCArIFwiLW1lbnVcIjtcbiAgICAgIF90aGlzLmxhYmVsSWQgPSBfdGhpcy5wcm9wcy5sYWJlbElkIHx8IF90aGlzLmlkICsgXCItbGFiZWxcIjtcbiAgICAgIF90aGlzLmlucHV0SWQgPSBfdGhpcy5wcm9wcy5pbnB1dElkIHx8IF90aGlzLmlkICsgXCItaW5wdXRcIjtcblxuICAgICAgX3RoaXMuZ2V0SXRlbUlkID0gX3RoaXMucHJvcHMuZ2V0SXRlbUlkIHx8IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaWQgKyBcIi1pdGVtLVwiICsgaW5kZXg7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5pbnB1dCA9IG51bGw7XG4gICAgICBfdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgX3RoaXMuaXRlbUNvdW50ID0gbnVsbDtcbiAgICAgIF90aGlzLnByZXZpb3VzUmVzdWx0Q291bnQgPSAwO1xuICAgICAgX3RoaXMudGltZW91dElkcyA9IFtdO1xuXG4gICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoZm4sIHRpbWUpIHtcbiAgICAgICAgdmFyIGlkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMudGltZW91dElkcyA9IF90aGlzLnRpbWVvdXRJZHMuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaSAhPT0gaWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm4oKTtcbiAgICAgICAgfSwgdGltZSk7XG5cbiAgICAgICAgX3RoaXMudGltZW91dElkcy5wdXNoKGlkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldEl0ZW1Db3VudCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICBfdGhpcy5pdGVtQ291bnQgPSBjb3VudDtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVuc2V0SXRlbUNvdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5pdGVtQ291bnQgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleCA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZEluZGV4LCBvdGhlclN0YXRlVG9TZXQpIHtcbiAgICAgICAgaWYgKGhpZ2hsaWdodGVkSW5kZXggPT09IHZvaWQgMCkge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdGhlclN0YXRlVG9TZXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0gcGlja1N0YXRlKG90aGVyU3RhdGVUb1NldCk7XG5cbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleFxuICAgICAgICB9LCBvdGhlclN0YXRlVG9TZXQpKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmNsZWFyU2VsZWN0aW9uID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICBpc09wZW46IF90aGlzLnByb3BzLmRlZmF1bHRJc09wZW5cbiAgICAgICAgfSwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuc2VsZWN0SXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBvdGhlclN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHBpY2tTdGF0ZShvdGhlclN0YXRlVG9TZXQpO1xuXG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICAgIGlzT3BlbjogX3RoaXMucHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IGl0ZW0sXG4gICAgICAgICAgaW5wdXRWYWx1ZTogX3RoaXMucHJvcHMuaXRlbVRvU3RyaW5nKGl0ZW0pXG4gICAgICAgIH0sIG90aGVyU3RhdGVUb1NldCksIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNlbGVjdEl0ZW1BdEluZGV4ID0gZnVuY3Rpb24gKGl0ZW1JbmRleCwgb3RoZXJTdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICB2YXIgaXRlbSA9IF90aGlzLml0ZW1zW2l0ZW1JbmRleF07XG5cbiAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNlbGVjdEl0ZW0oaXRlbSwgb3RoZXJTdGF0ZVRvU2V0LCBjYik7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZWxlY3RIaWdobGlnaHRlZEl0ZW0gPSBmdW5jdGlvbiAob3RoZXJTdGF0ZVRvU2V0LCBjYikge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2VsZWN0SXRlbUF0SW5kZXgoX3RoaXMuZ2V0U3RhdGUoKS5oaWdobGlnaHRlZEluZGV4LCBvdGhlclN0YXRlVG9TZXQsIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVUb1NldCwgY2IpIHtcbiAgICAgICAgdmFyIGlzSXRlbVNlbGVjdGVkLCBvbkNoYW5nZUFyZztcbiAgICAgICAgdmFyIG9uU3RhdGVDaGFuZ2VBcmcgPSB7fTtcbiAgICAgICAgdmFyIGlzU3RhdGVUb1NldEZ1bmN0aW9uID0gdHlwZW9mIHN0YXRlVG9TZXQgPT09ICdmdW5jdGlvbic7IC8vIHdlIHdhbnQgdG8gY2FsbCBgb25JbnB1dFZhbHVlQ2hhbmdlYCBiZWZvcmUgdGhlIGBzZXRTdGF0ZWAgY2FsbFxuICAgICAgICAvLyBzbyBzb21lb25lIGNvbnRyb2xsaW5nIHRoZSBgaW5wdXRWYWx1ZWAgc3RhdGUgZ2V0cyBub3RpZmllZCBvZlxuICAgICAgICAvLyB0aGUgaW5wdXQgY2hhbmdlIGFzIHNvb24gYXMgcG9zc2libGUuIFRoaXMgYXZvaWRzIGlzc3VlcyB3aXRoXG4gICAgICAgIC8vIHByZXNlcnZpbmcgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9kb3duc2hpZnQtanMvZG93bnNoaWZ0L2lzc3Vlcy8yMTcgZm9yIG1vcmUgaW5mby5cblxuICAgICAgICBpZiAoIWlzU3RhdGVUb1NldEZ1bmN0aW9uICYmIHN0YXRlVG9TZXQuaGFzT3duUHJvcGVydHkoJ2lucHV0VmFsdWUnKSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uSW5wdXRWYWx1ZUNoYW5nZShzdGF0ZVRvU2V0LmlucHV0VmFsdWUsIF9leHRlbmRzKHt9LCBfdGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSwgc3RhdGVUb1NldCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgIHN0YXRlID0gX3RoaXMuZ2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgIHZhciBuZXdTdGF0ZVRvU2V0ID0gaXNTdGF0ZVRvU2V0RnVuY3Rpb24gPyBzdGF0ZVRvU2V0KHN0YXRlKSA6IHN0YXRlVG9TZXQ7IC8vIFlvdXIgb3duIGZ1bmN0aW9uIHRoYXQgY291bGQgbW9kaWZ5IHRoZSBzdGF0ZSB0aGF0IHdpbGwgYmUgc2V0LlxuXG4gICAgICAgICAgbmV3U3RhdGVUb1NldCA9IF90aGlzLnByb3BzLnN0YXRlUmVkdWNlcihzdGF0ZSwgbmV3U3RhdGVUb1NldCk7IC8vIGNoZWNrcyBpZiBhbiBpdGVtIGlzIHNlbGVjdGVkLCByZWdhcmRsZXNzIG9mIGlmIGl0J3MgZGlmZmVyZW50IGZyb21cbiAgICAgICAgICAvLyB3aGF0IHdhcyBzZWxlY3RlZCBiZWZvcmVcbiAgICAgICAgICAvLyB1c2VkIHRvIGRldGVybWluZSBpZiBvblNlbGVjdCBhbmQgb25DaGFuZ2UgY2FsbGJhY2tzIHNob3VsZCBiZSBjYWxsZWRcblxuICAgICAgICAgIGlzSXRlbVNlbGVjdGVkID0gbmV3U3RhdGVUb1NldC5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0ZWRJdGVtJyk7IC8vIHRoaXMga2VlcHMgdHJhY2sgb2YgdGhlIG9iamVjdCB3ZSB3YW50IHRvIGNhbGwgd2l0aCBzZXRTdGF0ZVxuXG4gICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IHt9OyAvLyB0aGlzIGlzIGp1c3QgdXNlZCB0byB0ZWxsIHdoZXRoZXIgdGhlIHN0YXRlIGNoYW5nZWRcbiAgICAgICAgICAvLyBhbmQgd2UncmUgdHJ5aW5nIHRvIHVwZGF0ZSB0aGF0IHN0YXRlLiBPUiBpZiB0aGUgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIGFuZCB3ZSdyZVxuICAgICAgICAgIC8vIHRyeWluZyB0byB1cGRhdGUgdGhlIHNlbGVjdGlvblxuXG4gICAgICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkICYmIG5ld1N0YXRlVG9TZXQuc2VsZWN0ZWRJdGVtICE9PSBzdGF0ZS5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlQXJnID0gbmV3U3RhdGVUb1NldC5zZWxlY3RlZEl0ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV3U3RhdGVUb1NldC50eXBlID0gbmV3U3RhdGVUb1NldC50eXBlIHx8IHVua25vd247XG4gICAgICAgICAgT2JqZWN0LmtleXMobmV3U3RhdGVUb1NldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAvLyBvblN0YXRlQ2hhbmdlQXJnIHNob3VsZCBvbmx5IGhhdmUgdGhlIHN0YXRlIHRoYXQgaXNcbiAgICAgICAgICAgIC8vIGFjdHVhbGx5IGNoYW5naW5nXG4gICAgICAgICAgICBpZiAoc3RhdGVba2V5XSAhPT0gbmV3U3RhdGVUb1NldFtrZXldKSB7XG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2VBcmdba2V5XSA9IG5ld1N0YXRlVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH0gLy8gdGhlIHR5cGUgaXMgdXNlZnVsIGZvciB0aGUgb25TdGF0ZUNoYW5nZUFyZ1xuICAgICAgICAgICAgLy8gYnV0IHdlIGRvbid0IGFjdHVhbGx5IHdhbnQgdG8gc2V0IGl0IGluIGludGVybmFsIHN0YXRlLlxuICAgICAgICAgICAgLy8gdGhpcyBpcyBhbiB1bmRvY3VtZW50ZWQgZmVhdHVyZSBmb3Igbm93Li4uIE5vdCBhbGwgaW50ZXJuYWxTZXRTdGF0ZVxuICAgICAgICAgICAgLy8gY2FsbHMgc3VwcG9ydCBpdCBhbmQgSSdtIG5vdCBjZXJ0YWluIHdlIHdhbnQgdGhlbSB0byB5ZXQuXG4gICAgICAgICAgICAvLyBCdXQgaXQgZW5hYmxlcyB1c2VycyBjb250cm9sbGluZyB0aGUgaXNPcGVuIHN0YXRlIHRvIGtub3cgd2hlblxuICAgICAgICAgICAgLy8gdGhlIGlzT3BlbiBzdGF0ZSBjaGFuZ2VzIGR1ZSB0byBtb3VzZXVwIGV2ZW50cyB3aGljaCBpcyBxdWl0ZSBoYW5keS5cblxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAndHlwZScpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXdTdGF0ZVRvU2V0W2tleV07IC8vIGlmIGl0J3MgY29taW5nIGZyb20gcHJvcHMsIHRoZW4gd2UgZG9uJ3QgY2FyZSB0byBzZXQgaXQgaW50ZXJuYWxseVxuXG4gICAgICAgICAgICBpZiAoIWlzQ29udHJvbGxlZFByb3AoX3RoaXMucHJvcHMsIGtleSkpIHtcbiAgICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXdTdGF0ZVRvU2V0W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7IC8vIGlmIHN0YXRlVG9TZXQgaXMgYSBmdW5jdGlvbiwgdGhlbiB3ZSB3ZXJlbid0IGFibGUgdG8gY2FsbCBvbklucHV0VmFsdWVDaGFuZ2VcbiAgICAgICAgICAvLyBlYXJsaWVyLCBzbyB3ZSdsbCBjYWxsIGl0IG5vdyB0aGF0IHdlIGtub3cgd2hhdCB0aGUgaW5wdXRWYWx1ZSBzdGF0ZSB3aWxsIGJlLlxuXG4gICAgICAgICAgaWYgKGlzU3RhdGVUb1NldEZ1bmN0aW9uICYmIG5ld1N0YXRlVG9TZXQuaGFzT3duUHJvcGVydHkoJ2lucHV0VmFsdWUnKSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25JbnB1dFZhbHVlQ2hhbmdlKG5ld1N0YXRlVG9TZXQuaW5wdXRWYWx1ZSwgX2V4dGVuZHMoe30sIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpLCBuZXdTdGF0ZVRvU2V0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIGNhbGwgdGhlIHByb3ZpZGVkIGNhbGxiYWNrIGlmIGl0J3MgYSBmdW5jdGlvblxuICAgICAgICAgIGNiVG9DYihjYikoKTsgLy8gb25seSBjYWxsIHRoZSBvblN0YXRlQ2hhbmdlIGFuZCBvbkNoYW5nZSBjYWxsYmFja3MgaWZcbiAgICAgICAgICAvLyB3ZSBoYXZlIHJlbGV2YW50IGluZm9ybWF0aW9uIHRvIHBhc3MgdGhlbS5cblxuICAgICAgICAgIHZhciBoYXNNb3JlU3RhdGVUaGFuVHlwZSA9IE9iamVjdC5rZXlzKG9uU3RhdGVDaGFuZ2VBcmcpLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgICBpZiAoaGFzTW9yZVN0YXRlVGhhblR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2Uob25TdGF0ZUNoYW5nZUFyZywgX3RoaXMuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc0l0ZW1TZWxlY3RlZCkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25TZWxlY3Qoc3RhdGVUb1NldC5zZWxlY3RlZEl0ZW0sIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25DaGFuZ2VBcmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2Uob25DaGFuZ2VBcmcsIF90aGlzLmdldFN0YXRlQW5kSGVscGVycygpKTtcbiAgICAgICAgICB9IC8vIHRoaXMgaXMgY3VycmVudGx5IHVuZG9jdW1lbnRlZCBhbmQgdGhlcmVmb3JlIHN1YmplY3QgdG8gY2hhbmdlXG4gICAgICAgICAgLy8gV2UnbGwgdHJ5IHRvIG5vdCBicmVhayBpdCwgYnV0IGp1c3QgYmUgd2FybmVkLlxuXG5cbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblVzZXJBY3Rpb24ob25TdGF0ZUNoYW5nZUFyZywgX3RoaXMuZ2V0U3RhdGVBbmRIZWxwZXJzKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJvb3RSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX3Jvb3ROb2RlID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldFJvb3RQcm9wcyA9IGZ1bmN0aW9uIChfdGVtcCwgX3RlbXAyKSB7XG4gICAgICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICAgICAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgICAgICAgIF9yZWYkcmVmS2V5ID0gX3JlZi5yZWZLZXksXG4gICAgICAgICAgICByZWZLZXkgPSBfcmVmJHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmJHJlZktleSxcbiAgICAgICAgICAgIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICAgICAgdmFyIF9yZWYyID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMixcbiAgICAgICAgICAgIF9yZWYyJHN1cHByZXNzUmVmRXJybyA9IF9yZWYyLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjIkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN1cHByZXNzUmVmRXJybztcblxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgaW4gdGhlIHJlbmRlciB0byBrbm93IHdoZXRoZXIgdGhlIHVzZXIgaGFzIGNhbGxlZCBnZXRSb290UHJvcHMuXG4gICAgICAgIC8vIEl0IHVzZXMgdGhhdCB0byBrbm93IHdoZXRoZXIgdG8gYXBwbHkgdGhlIHByb3BzIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgX3RoaXMuZ2V0Um9vdFByb3BzLmNhbGxlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLmdldFJvb3RQcm9wcy5yZWZLZXkgPSByZWZLZXk7XG4gICAgICAgIF90aGlzLmdldFJvb3RQcm9wcy5zdXBwcmVzc1JlZkVycm9yID0gc3VwcHJlc3NSZWZFcnJvcjtcblxuICAgICAgICB2YXIgX3RoaXMkZ2V0U3RhdGUgPSBfdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGUuaXNPcGVuO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIF90aGlzLnJvb3RSZWYpLCBfZXh0ZW5kczIucm9sZSA9ICdjb21ib2JveCcsIF9leHRlbmRzMlsnYXJpYS1leHBhbmRlZCddID0gaXNPcGVuLCBfZXh0ZW5kczJbJ2FyaWEtaGFzcG9wdXAnXSA9ICdsaXN0Ym94JywgX2V4dGVuZHMyWydhcmlhLW93bnMnXSA9IGlzT3BlbiA/IF90aGlzLm1lbnVJZCA6IG51bGwsIF9leHRlbmRzMlsnYXJpYS1sYWJlbGxlZGJ5J10gPSBfdGhpcy5sYWJlbElkLCBfZXh0ZW5kczIpLCByZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmtleURvd25IYW5kbGVycyA9IHtcbiAgICAgICAgQXJyb3dEb3duOiBmdW5jdGlvbiBBcnJvd0Rvd24oZXZlbnQpIHtcbiAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBpZiAodGhpcy5nZXRTdGF0ZSgpLmlzT3Blbikge1xuICAgICAgICAgICAgdmFyIGFtb3VudCA9IGV2ZW50LnNoaWZ0S2V5ID8gNSA6IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEluZGV4KGFtb3VudCwge1xuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtQ291bnQgPSBfdGhpczIuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMyJGdldFN0YXRlID0gX3RoaXMyLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpczIkZ2V0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KDEsIGhpZ2hsaWdodGVkSW5kZXgsIGl0ZW1Db3VudCwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRIaWdobGlnaHRlZEluZGV4KG5leHRIaWdobGlnaHRlZEluZGV4LCB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBrZXlEb3duQXJyb3dEb3duXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcChldmVudCkge1xuICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGlmICh0aGlzLmdldFN0YXRlKCkuaXNPcGVuKSB7XG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gZXZlbnQuc2hpZnRLZXkgPyAtNSA6IC0xO1xuICAgICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbmRleChhbW91bnQsIHtcbiAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93VXBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgICAgICAgIHR5cGU6IGtleURvd25BcnJvd1VwXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtQ291bnQgPSBfdGhpczMuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgaWYgKGl0ZW1Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMzJGdldFN0YXRlID0gX3RoaXMzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpczMkZ2V0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KC0xLCBoaWdobGlnaHRlZEluZGV4LCBpdGVtQ291bnQsIGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5nZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBfdGhpczMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXh0SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgICAgICAgdHlwZToga2V5RG93bkFycm93VXBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBFbnRlcjogZnVuY3Rpb24gRW50ZXIoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDIyOSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTIgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlMi5pc09wZW4sXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRnZXRTdGF0ZTIuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgIGlmIChpc09wZW4gJiYgaGlnaGxpZ2h0ZWRJbmRleCAhPSBudWxsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2hpZ2hsaWdodGVkSW5kZXhdO1xuICAgICAgICAgICAgdmFyIGl0ZW1Ob2RlID0gdGhpcy5nZXRJdGVtTm9kZUZyb21JbmRleChoaWdobGlnaHRlZEluZGV4KTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCB8fCBpdGVtTm9kZSAmJiBpdGVtTm9kZS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkSXRlbSh7XG4gICAgICAgICAgICAgIHR5cGU6IGtleURvd25FbnRlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBFc2NhcGU6IGZ1bmN0aW9uIEVzY2FwZShldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5yZXNldChfZXh0ZW5kcyh7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duRXNjYXBlXG4gICAgICAgICAgfSwgIXRoaXMuc3RhdGUuaXNPcGVuICYmIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogbnVsbCxcbiAgICAgICAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgX3RoaXMuYnV0dG9uS2V5RG93bkhhbmRsZXJzID0gX2V4dGVuZHMoe30sIF90aGlzLmtleURvd25IYW5kbGVycywge1xuICAgICAgICAnICc6IGZ1bmN0aW9uIF8oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlTWVudSh7XG4gICAgICAgICAgICB0eXBlOiBrZXlEb3duU3BhY2VCdXR0b25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBfdGhpcy5pbnB1dEtleURvd25IYW5kbGVycyA9IF9leHRlbmRzKHt9LCBfdGhpcy5rZXlEb3duSGFuZGxlcnMsIHtcbiAgICAgICAgSG9tZTogZnVuY3Rpb24gSG9tZShldmVudCkge1xuICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlMyA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgICAgaXNPcGVuID0gX3RoaXMkZ2V0U3RhdGUzLmlzT3BlbjtcblxuICAgICAgICAgIGlmICghaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgICAgIGlmIChpdGVtQ291bnQgPD0gMCB8fCAhaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBnZXQgbmV4dCBub24tZGlzYWJsZWQgc3RhcnRpbmcgZG93bndhcmRzIGZyb20gMCBpZiB0aGF0J3MgZGlzYWJsZWQuXG5cblxuICAgICAgICAgIHZhciBuZXdIaWdobGlnaHRlZEluZGV4ID0gZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgobmV3SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgdHlwZToga2V5RG93bkhvbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgRW5kOiBmdW5jdGlvbiBFbmQoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTQgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlNC5pc09wZW47XG5cbiAgICAgICAgICBpZiAoIWlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgICBpZiAoaXRlbUNvdW50IDw9IDAgfHwgIWlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH0gLy8gZ2V0IG5leHQgbm9uLWRpc2FibGVkIHN0YXJ0aW5nIHVwd2FyZHMgZnJvbSBsYXN0IGluZGV4IGlmIHRoYXQncyBkaXNhYmxlZC5cblxuXG4gICAgICAgICAgdmFyIG5ld0hpZ2hsaWdodGVkSW5kZXggPSBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgtMSwgaXRlbUNvdW50IC0gMSwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczUuZ2V0SXRlbU5vZGVGcm9tSW5kZXgoaW5kZXgpO1xuICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgobmV3SGlnaGxpZ2h0ZWRJbmRleCwge1xuICAgICAgICAgICAgdHlwZToga2V5RG93bkVuZFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgX3RoaXMuZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSBmdW5jdGlvbiAoX3RlbXAzKSB7XG4gICAgICAgIHZhciBfcmVmMyA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDMsXG4gICAgICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgICAgIG9uUHJlc3MgPSBfcmVmMy5vblByZXNzLFxuICAgICAgICAgICAgb25LZXlEb3duID0gX3JlZjMub25LZXlEb3duLFxuICAgICAgICAgICAgb25LZXlVcCA9IF9yZWYzLm9uS2V5VXAsXG4gICAgICAgICAgICBvbkJsdXIgPSBfcmVmMy5vbkJsdXIsXG4gICAgICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjMsIFtcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcIm9uQmx1clwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlNSA9IF90aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTUuaXNPcGVuO1xuXG4gICAgICAgIHZhciBlbmFibGVkRXZlbnRIYW5kbGVycyA9ICB7XG4gICAgICAgICAgb25DbGljazogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DbGljaywgX3RoaXMuYnV0dG9uSGFuZGxlQ2xpY2spLFxuICAgICAgICAgIG9uS2V5RG93bjogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBfdGhpcy5idXR0b25IYW5kbGVLZXlEb3duKSxcbiAgICAgICAgICBvbktleVVwOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleVVwLCBfdGhpcy5idXR0b25IYW5kbGVLZXlVcCksXG4gICAgICAgICAgb25CbHVyOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkJsdXIsIF90aGlzLmJ1dHRvbkhhbmRsZUJsdXIpXG4gICAgICAgIH07XG4gICAgICAgIHZhciBldmVudEhhbmRsZXJzID0gcmVzdC5kaXNhYmxlZCA/IHt9IDogZW5hYmxlZEV2ZW50SGFuZGxlcnM7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiBpc09wZW4gPyAnY2xvc2UgbWVudScgOiAnb3BlbiBtZW51JyxcbiAgICAgICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWUsXG4gICAgICAgICAgJ2RhdGEtdG9nZ2xlJzogdHJ1ZVxuICAgICAgICB9LCBldmVudEhhbmRsZXJzLCByZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJ1dHRvbkhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIFByZXZlbnQgY2xpY2sgZXZlbnQgZnJvbSBlbWl0dGluZyBpbiBGaXJlZm94XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5idXR0b25IYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmJ1dHRvbktleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgX3RoaXMuYnV0dG9uS2V5RG93bkhhbmRsZXJzW2tleV0uY2FsbChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5idXR0b25IYW5kbGVDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBoYW5kbGUgb2RkIGNhc2UgZm9yIFNhZmFyaSBhbmQgRmlyZWZveCB3aGljaFxuICAgICAgICAvLyBkb24ndCBnaXZlIHRoZSBidXR0b24gdGhlIGZvY3VzIHByb3Blcmx5LlxuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAoY2FuJ3QgcmVhc29uYWJseSB0ZXN0IHRoaXMpICovXG5cbiAgICAgICAgaWYgKCBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgIH0gLy8gdG8gc2ltcGxpZnkgdGVzdGluZyBjb21wb25lbnRzIHRoYXQgdXNlIGRvd25zaGlmdCwgd2UnbGwgbm90IHdyYXAgdGhpcyBpbiBhIHNldFRpbWVvdXRcbiAgICAgICAgLy8gaWYgdGhlIE5PREVfRU5WIGlzIHRlc3QuIFdpdGggdGhlIHByb3BlciBidWlsZCBzeXN0ZW0sIHRoaXMgc2hvdWxkIGJlIGRlYWQgY29kZSBlbGltaW5hdGVkXG4gICAgICAgIC8vIHdoZW4gYnVpbGRpbmcgZm9yIHByb2R1Y3Rpb24gYW5kIHNob3VsZCB0aGVyZWZvcmUgaGF2ZSBubyBpbXBhY3Qgb24gcHJvZHVjdGlvbiBjb2RlLlxuXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICAgICAgICBfdGhpcy50b2dnbGVNZW51KHtcbiAgICAgICAgICAgIHR5cGU6IGNsaWNrQnV0dG9uXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gRW5zdXJlIHRoYXQgdG9nZ2xlIG9mIG1lbnUgb2NjdXJzIGFmdGVyIHRoZSBwb3RlbnRpYWwgYmx1ciBldmVudCBpbiBpT1NcbiAgICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnRvZ2dsZU1lbnUoe1xuICAgICAgICAgICAgICB0eXBlOiBjbGlja0J1dHRvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmJ1dHRvbkhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGJsdXJUYXJnZXQgPSBldmVudC50YXJnZXQ7IC8vIFNhdmUgYmx1ciB0YXJnZXQgZm9yIGNvbXBhcmlzb24gd2l0aCBhY3RpdmVFbGVtZW50IGxhdGVyXG4gICAgICAgIC8vIE5lZWQgc2V0VGltZW91dCwgc28gdGhhdCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgVGFiLCB0aGUgYWN0aXZlRWxlbWVudCBpcyB0aGUgbmV4dCBmb2N1c2VkIGVsZW1lbnQsIG5vdCBib2R5IGVsZW1lbnRcblxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghX3RoaXMuaXNNb3VzZURvd24gJiYgKF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gbnVsbCB8fCBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkICE9PSBfdGhpcy5pbnB1dElkKSAmJiBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBibHVyVGFyZ2V0IC8vIERvIG5vdGhpbmcgaWYgd2UgcmVmb2N1cyB0aGUgc2FtZSBlbGVtZW50IGFnYWluICh0byBzb2x2ZSBpc3N1ZSBpbiBTYWZhcmkgb24gaU9TKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgICBfdGhpcy5yZXNldCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYmx1ckJ1dHRvblxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRMYWJlbFByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgaHRtbEZvcjogX3RoaXMuaW5wdXRJZCxcbiAgICAgICAgICBpZDogX3RoaXMubGFiZWxJZFxuICAgICAgICB9LCBwcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRJbnB1dFByb3BzID0gZnVuY3Rpb24gKF90ZW1wNCkge1xuICAgICAgICB2YXIgX3JlZjQgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICAgICAgb25LZXlEb3duID0gX3JlZjQub25LZXlEb3duLFxuICAgICAgICAgICAgb25CbHVyID0gX3JlZjQub25CbHVyLFxuICAgICAgICAgICAgb25DaGFuZ2UgPSBfcmVmNC5vbkNoYW5nZSxcbiAgICAgICAgICAgIG9uSW5wdXQgPSBfcmVmNC5vbklucHV0LFxuICAgICAgICAgICAgb25DaGFuZ2VUZXh0ID0gX3JlZjQub25DaGFuZ2VUZXh0LFxuICAgICAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY0LCBbXCJvbktleURvd25cIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uSW5wdXRcIiwgXCJvbkNoYW5nZVRleHRcIl0pO1xuXG4gICAgICAgIHZhciBvbkNoYW5nZUtleTtcbiAgICAgICAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7fTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKHByZWFjdCkgKi9cblxuICAgICAgICB7XG4gICAgICAgICAgb25DaGFuZ2VLZXkgPSAnb25DaGFuZ2UnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlNiA9IF90aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICBpbnB1dFZhbHVlID0gX3RoaXMkZ2V0U3RhdGU2LmlucHV0VmFsdWUsXG4gICAgICAgICAgICBpc09wZW4gPSBfdGhpcyRnZXRTdGF0ZTYuaXNPcGVuLFxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJGdldFN0YXRlNi5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICAgIGlmICghcmVzdC5kaXNhYmxlZCkge1xuICAgICAgICAgIHZhciBfZXZlbnRIYW5kbGVycztcblxuICAgICAgICAgIGV2ZW50SGFuZGxlcnMgPSAoX2V2ZW50SGFuZGxlcnMgPSB7fSwgX2V2ZW50SGFuZGxlcnNbb25DaGFuZ2VLZXldID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25DaGFuZ2UsIG9uSW5wdXQsIF90aGlzLmlucHV0SGFuZGxlQ2hhbmdlKSwgX2V2ZW50SGFuZGxlcnMub25LZXlEb3duID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25LZXlEb3duLCBfdGhpcy5pbnB1dEhhbmRsZUtleURvd24pLCBfZXZlbnRIYW5kbGVycy5vbkJsdXIgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkJsdXIsIF90aGlzLmlucHV0SGFuZGxlQmx1ciksIF9ldmVudEhhbmRsZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiBpc09wZW4gJiYgdHlwZW9mIGhpZ2hsaWdodGVkSW5kZXggPT09ICdudW1iZXInICYmIGhpZ2hsaWdodGVkSW5kZXggPj0gMCA/IF90aGlzLmdldEl0ZW1JZChoaWdobGlnaHRlZEluZGV4KSA6IG51bGwsXG4gICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBpc09wZW4gPyBfdGhpcy5tZW51SWQgOiBudWxsLFxuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBfdGhpcy5sYWJlbElkLFxuICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyaW5nX3lvdXJfc2l0ZS9UdXJuaW5nX29mZl9mb3JtX2F1dG9jb21wbGV0aW9uXG4gICAgICAgICAgLy8gcmV2ZXJ0IGJhY2sgc2luY2UgYXV0b2NvbXBsZXRlPVwibm9wZVwiIGlzIGlnbm9yZWQgb24gbGF0ZXN0IENocm9tZSBhbmQgT3BlcmFcbiAgICAgICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgIGlkOiBfdGhpcy5pbnB1dElkXG4gICAgICAgIH0sIGV2ZW50SGFuZGxlcnMsIHJlc3QpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW5wdXRIYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgICAgaWYgKGtleSAmJiBfdGhpcy5pbnB1dEtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgICAgX3RoaXMuaW5wdXRLZXlEb3duSGFuZGxlcnNba2V5XS5jYWxsKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlucHV0SGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIF90aGlzLmludGVybmFsU2V0U3RhdGUoe1xuICAgICAgICAgIHR5cGU6IGNoYW5nZUlucHV0LFxuICAgICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IF90aGlzLnByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuaW5wdXRIYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBOZWVkIHNldFRpbWVvdXQsIHNvIHRoYXQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIFRhYiwgdGhlIGFjdGl2ZUVsZW1lbnQgaXMgdGhlIG5leHQgZm9jdXNlZCBlbGVtZW50LCBub3QgdGhlIGJvZHkgZWxlbWVudFxuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBkb3duc2hpZnRCdXR0b25Jc0FjdGl2ZSA9IF90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50ICYmICEhX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhIV90aGlzLnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuZGF0YXNldCAmJiBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50LmRhdGFzZXQudG9nZ2xlICYmIF90aGlzLl9yb290Tm9kZSAmJiBfdGhpcy5fcm9vdE5vZGUuY29udGFpbnMoX3RoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzLmlzTW91c2VEb3duICYmICFkb3duc2hpZnRCdXR0b25Jc0FjdGl2ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVzZXQoe1xuICAgICAgICAgICAgICB0eXBlOiBibHVySW5wdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5tZW51UmVmID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgX3RoaXMuX21lbnVOb2RlID0gbm9kZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldE1lbnVQcm9wcyA9IGZ1bmN0aW9uIChfdGVtcDUsIF90ZW1wNikge1xuICAgICAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgICAgIHZhciBfcmVmNSA9IF90ZW1wNSA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDUsXG4gICAgICAgICAgICBfcmVmNSRyZWZLZXkgPSBfcmVmNS5yZWZLZXksXG4gICAgICAgICAgICByZWZLZXkgPSBfcmVmNSRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjUkcmVmS2V5LFxuICAgICAgICAgICAgcmVmID0gX3JlZjUucmVmLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNSwgW1wicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgICAgICB2YXIgX3JlZjYgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICAgICAgX3JlZjYkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjYuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmNiRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgICAgIF90aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgPSB0cnVlO1xuICAgICAgICBfdGhpcy5nZXRNZW51UHJvcHMucmVmS2V5ID0gcmVmS2V5O1xuICAgICAgICBfdGhpcy5nZXRNZW51UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHN1cHByZXNzUmVmRXJyb3I7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIF90aGlzLm1lbnVSZWYpLCBfZXh0ZW5kczMucm9sZSA9ICdsaXN0Ym94JywgX2V4dGVuZHMzWydhcmlhLWxhYmVsbGVkYnknXSA9IHByb3BzICYmIHByb3BzWydhcmlhLWxhYmVsJ10gPyBudWxsIDogX3RoaXMubGFiZWxJZCwgX2V4dGVuZHMzLmlkID0gX3RoaXMubWVudUlkLCBfZXh0ZW5kczMpLCBwcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5nZXRJdGVtUHJvcHMgPSBmdW5jdGlvbiAoX3RlbXA3KSB7XG4gICAgICAgIHZhciBfZW5hYmxlZEV2ZW50SGFuZGxlcnM7XG5cbiAgICAgICAgdmFyIF9yZWY3ID0gX3RlbXA3ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNyxcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlID0gX3JlZjcub25Nb3VzZU1vdmUsXG4gICAgICAgICAgICBvbk1vdXNlRG93biA9IF9yZWY3Lm9uTW91c2VEb3duLFxuICAgICAgICAgICAgb25DbGljayA9IF9yZWY3Lm9uQ2xpY2ssXG4gICAgICAgICAgICBvblByZXNzID0gX3JlZjcub25QcmVzcyxcbiAgICAgICAgICAgIGluZGV4ID0gX3JlZjcuaW5kZXgsXG4gICAgICAgICAgICBfcmVmNyRpdGVtID0gX3JlZjcuaXRlbSxcbiAgICAgICAgICAgIGl0ZW0gPSBfcmVmNyRpdGVtID09PSB2b2lkIDAgPyBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID9cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgdW5kZWZpbmVkIDogcmVxdWlyZWRQcm9wKCdnZXRJdGVtUHJvcHMnLCAnaXRlbScpIDogX3JlZjckaXRlbSxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNywgW1wib25Nb3VzZU1vdmVcIiwgXCJvbk1vdXNlRG93blwiLCBcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwiaW5kZXhcIiwgXCJpdGVtXCJdKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIF90aGlzLml0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICBpbmRleCA9IF90aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3RoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvblNlbGVjdEtleSA9ICAnb25DbGljayc7XG4gICAgICAgIHZhciBjdXN0b21DbGlja0hhbmRsZXIgPSAgb25DbGljaztcbiAgICAgICAgdmFyIGVuYWJsZWRFdmVudEhhbmRsZXJzID0gKF9lbmFibGVkRXZlbnRIYW5kbGVycyA9IHtcbiAgICAgICAgICAvLyBvbk1vdXNlTW92ZSBpcyB1c2VkIG92ZXIgb25Nb3VzZUVudGVyIGhlcmUuIG9uTW91c2VNb3ZlXG4gICAgICAgICAgLy8gaXMgb25seSB0cmlnZ2VyZWQgb24gYWN0dWFsIG1vdXNlIG1vdmVtZW50IHdoaWxlIG9uTW91c2VFbnRlclxuICAgICAgICAgIC8vIGNhbiBmaXJlIG9uIERPTSBjaGFuZ2VzLCBpbnRlcnJ1cHRpbmcga2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgICAgICAgIG9uTW91c2VNb3ZlOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTW92ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBfdGhpcy5nZXRTdGF0ZSgpLmhpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4KGluZGV4LCB7XG4gICAgICAgICAgICAgIHR5cGU6IGl0ZW1Nb3VzZUVudGVyXG4gICAgICAgICAgICB9KTsgLy8gV2UgbmV2ZXIgd2FudCB0byBtYW51YWxseSBzY3JvbGwgd2hlbiBjaGFuZ2luZyBzdGF0ZSBiYXNlZFxuICAgICAgICAgICAgLy8gb24gYG9uTW91c2VNb3ZlYCBiZWNhdXNlIHdlIHdpbGwgYmUgbW92aW5nIHRoZSBlbGVtZW50IG91dFxuICAgICAgICAgICAgLy8gZnJvbSB1bmRlciB0aGUgdXNlciB3aGljaCBpcyBjdXJyZW50bHkgc2Nyb2xsaW5nL21vdmluZyB0aGVcbiAgICAgICAgICAgIC8vIGN1cnNvclxuXG5cbiAgICAgICAgICAgIF90aGlzLmF2b2lkU2Nyb2xsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmF2b2lkU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG9uTW91c2VEb3duOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlRG93biwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBUaGlzIHByZXZlbnRzIHRoZSBhY3RpdmVFbGVtZW50IGZyb20gYmVpbmcgY2hhbmdlZFxuICAgICAgICAgICAgLy8gdG8gdGhlIGl0ZW0gc28gaXQgY2FuIHJlbWFpbiB3aXRoIHRoZSBjdXJyZW50IGFjdGl2ZUVsZW1lbnRcbiAgICAgICAgICAgIC8vIHdoaWNoIGlzIGEgbW9yZSBjb21tb24gdXNlIGNhc2UuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIF9lbmFibGVkRXZlbnRIYW5kbGVyc1tvblNlbGVjdEtleV0gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhjdXN0b21DbGlja0hhbmRsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5zZWxlY3RJdGVtQXRJbmRleChpbmRleCwge1xuICAgICAgICAgICAgdHlwZTogY2xpY2tJdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pLCBfZW5hYmxlZEV2ZW50SGFuZGxlcnMpOyAvLyBQYXNzaW5nIGRvd24gdGhlIG9uTW91c2VEb3duIGhhbmRsZXIgdG8gcHJldmVudCByZWRpcmVjdFxuICAgICAgICAvLyBvZiB0aGUgYWN0aXZlRWxlbWVudCBpZiBjbGlja2luZyBvbiBkaXNhYmxlZCBpdGVtc1xuXG4gICAgICAgIHZhciBldmVudEhhbmRsZXJzID0gcmVzdC5kaXNhYmxlZCA/IHtcbiAgICAgICAgICBvbk1vdXNlRG93bjogZW5hYmxlZEV2ZW50SGFuZGxlcnMub25Nb3VzZURvd25cbiAgICAgICAgfSA6IGVuYWJsZWRFdmVudEhhbmRsZXJzO1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICAgIGlkOiBfdGhpcy5nZXRJdGVtSWQoaW5kZXgpLFxuICAgICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogX3RoaXMuZ2V0U3RhdGUoKS5oaWdobGlnaHRlZEluZGV4ID09PSBpbmRleFxuICAgICAgICB9LCBldmVudEhhbmRsZXJzLCByZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmNsZWFySXRlbXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLml0ZW1zID0gW107XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5yZXNldCA9IGZ1bmN0aW9uIChvdGhlclN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIGlmIChvdGhlclN0YXRlVG9TZXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0gcGlja1N0YXRlKG90aGVyU3RhdGVUb1NldCk7XG5cbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjgpIHtcbiAgICAgICAgICB2YXIgc2VsZWN0ZWRJdGVtID0gX3JlZjguc2VsZWN0ZWRJdGVtO1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBpc09wZW46IF90aGlzLnByb3BzLmRlZmF1bHRJc09wZW4sXG4gICAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBfdGhpcy5wcm9wcy5kZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICAgIGlucHV0VmFsdWU6IF90aGlzLnByb3BzLml0ZW1Ub1N0cmluZyhzZWxlY3RlZEl0ZW0pXG4gICAgICAgICAgfSwgb3RoZXJTdGF0ZVRvU2V0KTtcbiAgICAgICAgfSwgY2IpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMudG9nZ2xlTWVudSA9IGZ1bmN0aW9uIChvdGhlclN0YXRlVG9TZXQsIGNiKSB7XG4gICAgICAgIGlmIChvdGhlclN0YXRlVG9TZXQgPT09IHZvaWQgMCkge1xuICAgICAgICAgIG90aGVyU3RhdGVUb1NldCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgb3RoZXJTdGF0ZVRvU2V0ID0gcGlja1N0YXRlKG90aGVyU3RhdGVUb1NldCk7XG5cbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjkpIHtcbiAgICAgICAgICB2YXIgaXNPcGVuID0gX3JlZjkuaXNPcGVuO1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBpc09wZW46ICFpc09wZW5cbiAgICAgICAgICB9LCBpc09wZW4gJiYge1xuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX3RoaXMucHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXhcbiAgICAgICAgICB9LCBvdGhlclN0YXRlVG9TZXQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIF90aGlzJGdldFN0YXRlNyA9IF90aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlNy5pc09wZW4sXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBfdGhpcyRnZXRTdGF0ZTcuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5nZXRJdGVtQ291bnQoKSA+IDAgJiYgdHlwZW9mIGhpZ2hsaWdodGVkSW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIF90aGlzLnNldEhpZ2hsaWdodGVkSW5kZXgoaGlnaGxpZ2h0ZWRJbmRleCwgb3RoZXJTdGF0ZVRvU2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYlRvQ2IoY2IpKCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMub3Blbk1lbnUgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgX3RoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgaXNPcGVuOiB0cnVlXG4gICAgICAgIH0sIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmNsb3NlTWVudSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICBfdGhpcy5pbnRlcm5hbFNldFN0YXRlKHtcbiAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgIH0sIGNiKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3RoaXMuZ2V0U3RhdGUoKTtcblxuICAgICAgICB2YXIgaXRlbSA9IF90aGlzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdO1xuXG4gICAgICAgIHZhciByZXN1bHRDb3VudCA9IF90aGlzLmdldEl0ZW1Db3VudCgpO1xuXG4gICAgICAgIHZhciBzdGF0dXMgPSBfdGhpcy5wcm9wcy5nZXRBMTF5U3RhdHVzTWVzc2FnZShfZXh0ZW5kcyh7XG4gICAgICAgICAgaXRlbVRvU3RyaW5nOiBfdGhpcy5wcm9wcy5pdGVtVG9TdHJpbmcsXG4gICAgICAgICAgcHJldmlvdXNSZXN1bHRDb3VudDogX3RoaXMucHJldmlvdXNSZXN1bHRDb3VudCxcbiAgICAgICAgICByZXN1bHRDb3VudDogcmVzdWx0Q291bnQsXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJdGVtOiBpdGVtXG4gICAgICAgIH0sIHN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMucHJldmlvdXNSZXN1bHRDb3VudCA9IHJlc3VsdENvdW50O1xuICAgICAgICBzZXRTdGF0dXMoc3RhdHVzLCBfdGhpcy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudCk7XG4gICAgICB9LCAyMDApO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJHByb3BzLmRlZmF1bHRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIF90aGlzJHByb3BzJGluaXRpYWxIaSA9IF90aGlzJHByb3BzLmluaXRpYWxIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIF9oaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkcHJvcHMkaW5pdGlhbEhpID09PSB2b2lkIDAgPyBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleCA6IF90aGlzJHByb3BzJGluaXRpYWxIaSxcbiAgICAgICAgICBkZWZhdWx0SXNPcGVuID0gX3RoaXMkcHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgICAgICBfdGhpcyRwcm9wcyRpbml0aWFsSXMgPSBfdGhpcyRwcm9wcy5pbml0aWFsSXNPcGVuLFxuICAgICAgICAgIF9pc09wZW4gPSBfdGhpcyRwcm9wcyRpbml0aWFsSXMgPT09IHZvaWQgMCA/IGRlZmF1bHRJc09wZW4gOiBfdGhpcyRwcm9wcyRpbml0aWFsSXMsXG4gICAgICAgICAgX3RoaXMkcHJvcHMkaW5pdGlhbEluID0gX3RoaXMkcHJvcHMuaW5pdGlhbElucHV0VmFsdWUsXG4gICAgICAgICAgX2lucHV0VmFsdWUgPSBfdGhpcyRwcm9wcyRpbml0aWFsSW4gPT09IHZvaWQgMCA/ICcnIDogX3RoaXMkcHJvcHMkaW5pdGlhbEluLFxuICAgICAgICAgIF90aGlzJHByb3BzJGluaXRpYWxTZSA9IF90aGlzJHByb3BzLmluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgX3NlbGVjdGVkSXRlbSA9IF90aGlzJHByb3BzJGluaXRpYWxTZSA9PT0gdm9pZCAwID8gbnVsbCA6IF90aGlzJHByb3BzJGluaXRpYWxTZTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IF90aGlzLmdldFN0YXRlKHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogX2hpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgIGlzT3BlbjogX2lzT3BlbixcbiAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWUsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogX3NlbGVjdGVkSXRlbVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfc3RhdGUuc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgX3RoaXMucHJvcHMuaW5pdGlhbElucHV0VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBfc3RhdGUuaW5wdXRWYWx1ZSA9IF90aGlzLnByb3BzLml0ZW1Ub1N0cmluZyhfc3RhdGUuc2VsZWN0ZWRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RhdGUgPSBfc3RhdGU7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90byA9IERvd25zaGlmdC5wcm90b3R5cGU7XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgcnVubmluZyB0aW1lb3V0c1xuICAgICAqL1xuICAgIF9wcm90by5pbnRlcm5hbENsZWFyVGltZW91dHMgPSBmdW5jdGlvbiBpbnRlcm5hbENsZWFyVGltZW91dHMoKSB7XG4gICAgICB0aGlzLnRpbWVvdXRJZHMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lb3V0SWRzID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHN0YXRlIGJhc2VkIG9uIGludGVybmFsIHN0YXRlIG9yIHByb3BzXG4gICAgICogSWYgYSBzdGF0ZSB2YWx1ZSBpcyBwYXNzZWQgdmlhIHByb3BzLCB0aGVuIHRoYXRcbiAgICAgKiBpcyB0aGUgdmFsdWUgZ2l2ZW4sIG90aGVyd2lzZSBpdCdzIHJldHJpZXZlZCBmcm9tXG4gICAgICogc3RhdGVUb01lcmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVUb01lcmdlIGRlZmF1bHRzIHRvIHRoaXMuc3RhdGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBzdGF0ZVxuICAgICAqL1xuICAgIDtcblxuICAgIF9wcm90by5nZXRTdGF0ZSA9IGZ1bmN0aW9uIGdldFN0YXRlJDEoc3RhdGVUb01lcmdlKSB7XG4gICAgICBpZiAoc3RhdGVUb01lcmdlID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RhdGVUb01lcmdlID0gdGhpcy5zdGF0ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFN0YXRlKHN0YXRlVG9NZXJnZSwgdGhpcy5wcm9wcyk7XG4gICAgfTtcblxuICAgIF9wcm90by5nZXRJdGVtQ291bnQgPSBmdW5jdGlvbiBnZXRJdGVtQ291bnQoKSB7XG4gICAgICAvLyB0aGluZ3MgcmVhZCBiZXR0ZXIgdGhpcyB3YXkuIFRoZXkncmUgaW4gcHJpb3JpdHkgb3JkZXI6XG4gICAgICAvLyAxLiBgdGhpcy5pdGVtQ291bnRgXG4gICAgICAvLyAyLiBgdGhpcy5wcm9wcy5pdGVtQ291bnRgXG4gICAgICAvLyAzLiBgdGhpcy5pdGVtcy5sZW5ndGhgXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5pdGVtcy5sZW5ndGg7XG5cbiAgICAgIGlmICh0aGlzLml0ZW1Db3VudCAhPSBudWxsKSB7XG4gICAgICAgIGl0ZW1Db3VudCA9IHRoaXMuaXRlbUNvdW50O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLml0ZW1Db3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaXRlbUNvdW50O1xuICAgIH07XG5cbiAgICBfcHJvdG8uZ2V0SXRlbU5vZGVGcm9tSW5kZXggPSBmdW5jdGlvbiBnZXRJdGVtTm9kZUZyb21JbmRleChpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZW52aXJvbm1lbnQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5nZXRJdGVtSWQoaW5kZXgpKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbEhpZ2hsaWdodGVkSXRlbUludG9WaWV3ID0gZnVuY3Rpb24gc2Nyb2xsSGlnaGxpZ2h0ZWRJdGVtSW50b1ZpZXcoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAocmVhY3QtbmF0aXZlKSAqL1xuICAgICAge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuZ2V0SXRlbU5vZGVGcm9tSW5kZXgodGhpcy5nZXRTdGF0ZSgpLmhpZ2hsaWdodGVkSW5kZXgpO1xuICAgICAgICB0aGlzLnByb3BzLnNjcm9sbEludG9WaWV3KG5vZGUsIHRoaXMuX21lbnVOb2RlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLm1vdmVIaWdobGlnaHRlZEluZGV4ID0gZnVuY3Rpb24gbW92ZUhpZ2hsaWdodGVkSW5kZXgoYW1vdW50LCBvdGhlclN0YXRlVG9TZXQpIHtcbiAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5nZXRJdGVtQ291bnQoKTtcblxuICAgICAgdmFyIF90aGlzJGdldFN0YXRlOCA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3RoaXMkZ2V0U3RhdGU4LmhpZ2hsaWdodGVkSW5kZXg7XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgIHZhciBuZXh0SGlnaGxpZ2h0ZWRJbmRleCA9IGdldE5leHRXcmFwcGluZ0luZGV4KGFtb3VudCwgaGlnaGxpZ2h0ZWRJbmRleCwgaXRlbUNvdW50LCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM2LmdldEl0ZW1Ob2RlRnJvbUluZGV4KGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0SGlnaGxpZ2h0ZWRJbmRleChuZXh0SGlnaGxpZ2h0ZWRJbmRleCwgb3RoZXJTdGF0ZVRvU2V0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmdldFN0YXRlQW5kSGVscGVycyA9IGZ1bmN0aW9uIGdldFN0YXRlQW5kSGVscGVycygpIHtcbiAgICAgIHZhciBfdGhpcyRnZXRTdGF0ZTkgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCA9IF90aGlzJGdldFN0YXRlOS5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGlucHV0VmFsdWUgPSBfdGhpcyRnZXRTdGF0ZTkuaW5wdXRWYWx1ZSxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBfdGhpcyRnZXRTdGF0ZTkuc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGlzT3BlbiA9IF90aGlzJGdldFN0YXRlOS5pc09wZW47XG5cbiAgICAgIHZhciBpdGVtVG9TdHJpbmcgPSB0aGlzLnByb3BzLml0ZW1Ub1N0cmluZztcbiAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICB2YXIgZ2V0Um9vdFByb3BzID0gdGhpcy5nZXRSb290UHJvcHMsXG4gICAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSB0aGlzLmdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgICAgICAgIGdldExhYmVsUHJvcHMgPSB0aGlzLmdldExhYmVsUHJvcHMsXG4gICAgICAgICAgZ2V0TWVudVByb3BzID0gdGhpcy5nZXRNZW51UHJvcHMsXG4gICAgICAgICAgZ2V0SW5wdXRQcm9wcyA9IHRoaXMuZ2V0SW5wdXRQcm9wcyxcbiAgICAgICAgICBnZXRJdGVtUHJvcHMgPSB0aGlzLmdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBvcGVuTWVudSA9IHRoaXMub3Blbk1lbnUsXG4gICAgICAgICAgY2xvc2VNZW51ID0gdGhpcy5jbG9zZU1lbnUsXG4gICAgICAgICAgdG9nZ2xlTWVudSA9IHRoaXMudG9nZ2xlTWVudSxcbiAgICAgICAgICBzZWxlY3RJdGVtID0gdGhpcy5zZWxlY3RJdGVtLFxuICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4ID0gdGhpcy5zZWxlY3RJdGVtQXRJbmRleCxcbiAgICAgICAgICBzZWxlY3RIaWdobGlnaHRlZEl0ZW0gPSB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkSXRlbSxcbiAgICAgICAgICBzZXRIaWdobGlnaHRlZEluZGV4ID0gdGhpcy5zZXRIaWdobGlnaHRlZEluZGV4LFxuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uID0gdGhpcy5jbGVhclNlbGVjdGlvbixcbiAgICAgICAgICBjbGVhckl0ZW1zID0gdGhpcy5jbGVhckl0ZW1zLFxuICAgICAgICAgIHJlc2V0ID0gdGhpcy5yZXNldCxcbiAgICAgICAgICBzZXRJdGVtQ291bnQgPSB0aGlzLnNldEl0ZW1Db3VudCxcbiAgICAgICAgICB1bnNldEl0ZW1Db3VudCA9IHRoaXMudW5zZXRJdGVtQ291bnQsXG4gICAgICAgICAgc2V0U3RhdGUgPSB0aGlzLmludGVybmFsU2V0U3RhdGU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBwcm9wIGdldHRlcnNcbiAgICAgICAgZ2V0Um9vdFByb3BzOiBnZXRSb290UHJvcHMsXG4gICAgICAgIGdldFRvZ2dsZUJ1dHRvblByb3BzOiBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICAgICAgZ2V0TWVudVByb3BzOiBnZXRNZW51UHJvcHMsXG4gICAgICAgIGdldElucHV0UHJvcHM6IGdldElucHV0UHJvcHMsXG4gICAgICAgIGdldEl0ZW1Qcm9wczogZ2V0SXRlbVByb3BzLFxuICAgICAgICAvLyBhY3Rpb25zXG4gICAgICAgIHJlc2V0OiByZXNldCxcbiAgICAgICAgb3Blbk1lbnU6IG9wZW5NZW51LFxuICAgICAgICBjbG9zZU1lbnU6IGNsb3NlTWVudSxcbiAgICAgICAgdG9nZ2xlTWVudTogdG9nZ2xlTWVudSxcbiAgICAgICAgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSxcbiAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXg6IHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgICAgICBzZWxlY3RIaWdobGlnaHRlZEl0ZW06IHNlbGVjdEhpZ2hsaWdodGVkSXRlbSxcbiAgICAgICAgc2V0SGlnaGxpZ2h0ZWRJbmRleDogc2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgY2xlYXJTZWxlY3Rpb246IGNsZWFyU2VsZWN0aW9uLFxuICAgICAgICBjbGVhckl0ZW1zOiBjbGVhckl0ZW1zLFxuICAgICAgICBzZXRJdGVtQ291bnQ6IHNldEl0ZW1Db3VudCxcbiAgICAgICAgdW5zZXRJdGVtQ291bnQ6IHVuc2V0SXRlbUNvdW50LFxuICAgICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nLFxuICAgICAgICAvLyBkZXJpdmVkXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgLy8gc3RhdGVcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXG4gICAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtXG4gICAgICB9O1xuICAgIH0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBST09UXG4gICAgO1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIChyZWFjdC1uYXRpdmUpICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhZmFsc2UgJiYgdGhpcy5nZXRNZW51UHJvcHMuY2FsbGVkICYmICF0aGlzLmdldE1lbnVQcm9wcy5zdXBwcmVzc1JlZkVycm9yKSB7XG4gICAgICAgIHZhbGlkYXRlR2V0TWVudVByb3BzQ2FsbGVkQ29ycmVjdGx5KHRoaXMuX21lbnVOb2RlLCB0aGlzLmdldE1lbnVQcm9wcyk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKHJlYWN0LW5hdGl2ZSkgKi9cblxuXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMuaXNNb3VzZURvd24gaGVscHMgdXMgdHJhY2sgd2hldGhlciB0aGUgbW91c2UgaXMgY3VycmVudGx5IGhlbGQgZG93bi5cbiAgICAgICAgLy8gVGhpcyBpcyB1c2VmdWwgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gYW4gaXRlbSBpbiB0aGUgbGlzdCwgYnV0IGhvbGRzIHRoZSBtb3VzZVxuICAgICAgICAvLyBkb3duIGxvbmcgZW5vdWdoIGZvciB0aGUgbGlzdCB0byBkaXNhcHBlYXIgKGJlY2F1c2UgdGhlIGJsdXIgZXZlbnQgZmlyZXMgb24gdGhlIGlucHV0KVxuICAgICAgICAvLyB0aGlzLmlzTW91c2VEb3duIGlzIHVzZWQgaW4gdGhlIGJsdXIgaGFuZGxlciBvbiB0aGUgaW5wdXQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGJsdXIgZXZlbnQgc2hvdWxkXG4gICAgICAgIC8vIHRyaWdnZXIgaGlkaW5nIHRoZSBtZW51LlxuICAgICAgICB2YXIgb25Nb3VzZURvd24gPSBmdW5jdGlvbiBvbk1vdXNlRG93bigpIHtcbiAgICAgICAgICBfdGhpczcuaXNNb3VzZURvd24gPSB0cnVlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvbk1vdXNlVXAgPSBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgICBfdGhpczcuaXNNb3VzZURvd24gPSBmYWxzZTsgLy8gaWYgdGhlIHRhcmdldCBlbGVtZW50IG9yIHRoZSBhY3RpdmVFbGVtZW50IGlzIHdpdGhpbiBhIGRvd25zaGlmdCBub2RlXG4gICAgICAgICAgLy8gdGhlbiB3ZSBkb24ndCB3YW50IHRvIHJlc2V0IGRvd25zaGlmdFxuXG4gICAgICAgICAgdmFyIGNvbnRleHRXaXRoaW5Eb3duc2hpZnQgPSB0YXJnZXRXaXRoaW5Eb3duc2hpZnQoZXZlbnQudGFyZ2V0LCBbX3RoaXM3Ll9yb290Tm9kZSwgX3RoaXM3Ll9tZW51Tm9kZV0sIF90aGlzNy5wcm9wcy5lbnZpcm9ubWVudC5kb2N1bWVudCk7XG5cbiAgICAgICAgICBpZiAoIWNvbnRleHRXaXRoaW5Eb3duc2hpZnQgJiYgX3RoaXM3LmdldFN0YXRlKCkuaXNPcGVuKSB7XG4gICAgICAgICAgICBfdGhpczcucmVzZXQoe1xuICAgICAgICAgICAgICB0eXBlOiBtb3VzZVVwXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczcucHJvcHMub25PdXRlckNsaWNrKF90aGlzNy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07IC8vIFRvdWNoaW5nIGFuIGVsZW1lbnQgaW4gaU9TIGdpdmVzIGZvY3VzIGFuZCBob3ZlciBzdGF0ZXMsIGJ1dCB0b3VjaGluZyBvdXQgb2ZcbiAgICAgICAgLy8gdGhlIGVsZW1lbnQgd2lsbCByZW1vdmUgaG92ZXIsIGFuZCBwZXJzaXN0IHRoZSBmb2N1cyBzdGF0ZSwgcmVzdWx0aW5nIGluIHRoZVxuICAgICAgICAvLyBibHVyIGV2ZW50IG5vdCBiZWluZyB0cmlnZ2VyZWQuXG4gICAgICAgIC8vIHRoaXMuaXNUb3VjaE1vdmUgaGVscHMgdXMgdHJhY2sgd2hldGhlciB0aGUgdXNlciBpcyB0YXBwaW5nIG9yIHN3aXBpbmcgb24gYSB0b3VjaCBzY3JlZW4uXG4gICAgICAgIC8vIElmIHRoZSB1c2VyIHRhcHMgb3V0c2lkZSBvZiBEb3duc2hpZnQsIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHJlc2V0LFxuICAgICAgICAvLyBidXQgbm90IGlmIHRoZSB1c2VyIGlzIHN3aXBpbmdcblxuXG4gICAgICAgIHZhciBvblRvdWNoU3RhcnQgPSBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKSB7XG4gICAgICAgICAgX3RoaXM3LmlzVG91Y2hNb3ZlID0gZmFsc2U7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoKSB7XG4gICAgICAgICAgX3RoaXM3LmlzVG91Y2hNb3ZlID0gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25Ub3VjaEVuZCA9IGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcbiAgICAgICAgICB2YXIgY29udGV4dFdpdGhpbkRvd25zaGlmdCA9IHRhcmdldFdpdGhpbkRvd25zaGlmdChldmVudC50YXJnZXQsIFtfdGhpczcuX3Jvb3ROb2RlLCBfdGhpczcuX21lbnVOb2RlXSwgX3RoaXM3LnByb3BzLmVudmlyb25tZW50LmRvY3VtZW50LCBmYWxzZSk7XG5cbiAgICAgICAgICBpZiAoIV90aGlzNy5pc1RvdWNoTW92ZSAmJiAhY29udGV4dFdpdGhpbkRvd25zaGlmdCAmJiBfdGhpczcuZ2V0U3RhdGUoKS5pc09wZW4pIHtcbiAgICAgICAgICAgIF90aGlzNy5yZXNldCh7XG4gICAgICAgICAgICAgIHR5cGU6IHRvdWNoRW5kXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczcucHJvcHMub25PdXRlckNsaWNrKF90aGlzNy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGVudmlyb25tZW50ID0gdGhpcy5wcm9wcy5lbnZpcm9ubWVudDtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcblxuICAgICAgICB0aGlzLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXM3LmludGVybmFsQ2xlYXJUaW1lb3V0cygpO1xuXG4gICAgICAgICAgX3RoaXM3LnVwZGF0ZVN0YXR1cy5jYW5jZWwoKTtcblxuICAgICAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLnNob3VsZFNjcm9sbCA9IGZ1bmN0aW9uIHNob3VsZFNjcm9sbChwcmV2U3RhdGUsIHByZXZQcm9wcykge1xuICAgICAgdmFyIF9yZWYxMCA9IHRoaXMucHJvcHMuaGlnaGxpZ2h0ZWRJbmRleCA9PT0gdW5kZWZpbmVkID8gdGhpcy5nZXRTdGF0ZSgpIDogdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXJyZW50SGlnaGxpZ2h0ZWRJbmRleCA9IF9yZWYxMC5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICB2YXIgX3JlZjExID0gcHJldlByb3BzLmhpZ2hsaWdodGVkSW5kZXggPT09IHVuZGVmaW5lZCA/IHByZXZTdGF0ZSA6IHByZXZQcm9wcyxcbiAgICAgICAgICBwcmV2SGlnaGxpZ2h0ZWRJbmRleCA9IF9yZWYxMS5oaWdobGlnaHRlZEluZGV4O1xuXG4gICAgICB2YXIgc2Nyb2xsV2hlbk9wZW4gPSBjdXJyZW50SGlnaGxpZ2h0ZWRJbmRleCAmJiB0aGlzLmdldFN0YXRlKCkuaXNPcGVuICYmICFwcmV2U3RhdGUuaXNPcGVuO1xuICAgICAgdmFyIHNjcm9sbFdoZW5OYXZpZ2F0aW5nID0gY3VycmVudEhpZ2hsaWdodGVkSW5kZXggIT09IHByZXZIaWdobGlnaHRlZEluZGV4O1xuICAgICAgcmV0dXJuIHNjcm9sbFdoZW5PcGVuIHx8IHNjcm9sbFdoZW5OYXZpZ2F0aW5nO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YWxpZGF0ZUNvbnRyb2xsZWRVbmNoYW5nZWQodGhpcy5zdGF0ZSwgcHJldlByb3BzLCB0aGlzLnByb3BzKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIChyZWFjdC1uYXRpdmUpICovXG5cbiAgICAgICAgaWYgKCB0aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgJiYgIXRoaXMuZ2V0TWVudVByb3BzLnN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgICB2YWxpZGF0ZUdldE1lbnVQcm9wc0NhbGxlZENvcnJlY3RseSh0aGlzLl9tZW51Tm9kZSwgdGhpcy5nZXRNZW51UHJvcHMpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NvbnRyb2xsZWRQcm9wKHRoaXMucHJvcHMsICdzZWxlY3RlZEl0ZW0nKSAmJiB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbUNoYW5nZWQocHJldlByb3BzLnNlbGVjdGVkSXRlbSwgdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0pKSB7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSh7XG4gICAgICAgICAgdHlwZTogY29udHJvbGxlZFByb3BVcGRhdGVkU2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGlucHV0VmFsdWU6IHRoaXMucHJvcHMuaXRlbVRvU3RyaW5nKHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmF2b2lkU2Nyb2xsaW5nICYmIHRoaXMuc2hvdWxkU2Nyb2xsKHByZXZTdGF0ZSwgcHJldlByb3BzKSkge1xuICAgICAgICB0aGlzLnNjcm9sbEhpZ2hsaWdodGVkSXRlbUludG9WaWV3KCk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAocmVhY3QtbmF0aXZlKSAqL1xuXG5cbiAgICAgIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0dXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTsgLy8gYXZvaWRzIG1lbW9yeSBsZWFrXG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSB1bndyYXBBcnJheSh0aGlzLnByb3BzLmNoaWxkcmVuLCBub29wKTsgLy8gYmVjYXVzZSB0aGUgaXRlbXMgYXJlIHJlcmVuZGVyZWQgZXZlcnkgdGltZSB3ZSBjYWxsIHRoZSBjaGlsZHJlblxuICAgICAgLy8gd2UgY2xlYXIgdGhpcyBvdXQgZWFjaCByZW5kZXIgYW5kIGl0IHdpbGwgYmUgcG9wdWxhdGVkIGFnYWluIGFzXG4gICAgICAvLyBnZXRJdGVtUHJvcHMgaXMgY2FsbGVkLlxuXG4gICAgICB0aGlzLmNsZWFySXRlbXMoKTsgLy8gd2UgcmVzZXQgdGhpcyBzbyB3ZSBrbm93IHdoZXRoZXIgdGhlIHVzZXIgY2FsbHMgZ2V0Um9vdFByb3BzIGR1cmluZ1xuICAgICAgLy8gdGhpcyByZW5kZXIuIElmIHRoZXkgZG8gdGhlbiB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nLFxuICAgICAgLy8gaWYgdGhleSBkb24ndCB0aGVuIHdlIG5lZWQgdG8gY2xvbmUgdGhlIGVsZW1lbnQgdGhleSByZXR1cm4gYW5kXG4gICAgICAvLyBhcHBseSB0aGUgcHJvcHMgZm9yIHRoZW0uXG5cbiAgICAgIHRoaXMuZ2V0Um9vdFByb3BzLmNhbGxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRSb290UHJvcHMucmVmS2V5ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5nZXRSb290UHJvcHMuc3VwcHJlc3NSZWZFcnJvciA9IHVuZGVmaW5lZDsgLy8gd2UgZG8gc29tZXRoaW5nIHNpbWlsYXIgZm9yIGdldE1lbnVQcm9wc1xuXG4gICAgICB0aGlzLmdldE1lbnVQcm9wcy5jYWxsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZ2V0TWVudVByb3BzLnJlZktleSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZ2V0TWVudVByb3BzLnN1cHByZXNzUmVmRXJyb3IgPSB1bmRlZmluZWQ7IC8vIHdlIGRvIHNvbWV0aGluZyBzaW1pbGFyIGZvciBnZXRMYWJlbFByb3BzXG5cbiAgICAgIHRoaXMuZ2V0TGFiZWxQcm9wcy5jYWxsZWQgPSBmYWxzZTsgLy8gYW5kIHNvbWV0aGluZyBzaW1pbGFyIGZvciBnZXRJbnB1dFByb3BzXG5cbiAgICAgIHRoaXMuZ2V0SW5wdXRQcm9wcy5jYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciBlbGVtZW50ID0gdW53cmFwQXJyYXkoY2hpbGRyZW4odGhpcy5nZXRTdGF0ZUFuZEhlbHBlcnMoKSkpO1xuXG4gICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmdldFJvb3RQcm9wcy5jYWxsZWQgfHwgdGhpcy5wcm9wcy5zdXBwcmVzc1JlZkVycm9yKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmdldFJvb3RQcm9wcy5zdXBwcmVzc1JlZkVycm9yICYmICF0aGlzLnByb3BzLnN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgICB2YWxpZGF0ZUdldFJvb3RQcm9wc0NhbGxlZENvcnJlY3RseShlbGVtZW50LCB0aGlzLmdldFJvb3RQcm9wcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH0gZWxzZSBpZiAoaXNET01FbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIC8vIHRoZXkgZGlkbid0IGFwcGx5IHRoZSByb290IHByb3BzLCBidXQgd2UgY2FuIGNsb25lXG4gICAgICAgIC8vIHRoaXMgYW5kIGFwcGx5IHRoZSBwcm9wcyBvdXJzZWx2ZXNcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9jbG9uZUVsZW1lbnQoZWxlbWVudCwgdGhpcy5nZXRSb290UHJvcHMoZ2V0RWxlbWVudFByb3BzKGVsZW1lbnQpKSk7XG4gICAgICB9XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIHRoZXkgZGlkbid0IGFwcGx5IHRoZSByb290IHByb3BzLCBidXQgdGhleSBuZWVkIHRvXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSBjYW4ndCBxdWVyeSBhcm91bmQgdGhlIGF1dG9jb21wbGV0ZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rvd25zaGlmdDogSWYgeW91IHJldHVybiBhIG5vbi1ET00gZWxlbWVudCwgeW91IG11c3QgYXBwbHkgdGhlIGdldFJvb3RQcm9wcyBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG5cbiAgICByZXR1cm4gRG93bnNoaWZ0O1xuICB9KENvbXBvbmVudCk7XG5cbiAgRG93bnNoaWZ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogbnVsbCxcbiAgICBkZWZhdWx0SXNPcGVuOiBmYWxzZSxcbiAgICBnZXRBMTF5U3RhdHVzTWVzc2FnZTogZ2V0QTExeVN0YXR1c01lc3NhZ2UsXG4gICAgaXRlbVRvU3RyaW5nOiBmdW5jdGlvbiBpdGVtVG9TdHJpbmcoaSkge1xuICAgICAgaWYgKGkgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzUGxhaW5PYmplY3QoaSkgJiYgIWkuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS53YXJuKCdkb3duc2hpZnQ6IEFuIG9iamVjdCB3YXMgcGFzc2VkIHRvIHRoZSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIGBpdGVtVG9TdHJpbmdgLiBZb3Ugc2hvdWxkIHByb2JhYmx5IHByb3ZpZGUgeW91ciBvd24gYGl0ZW1Ub1N0cmluZ2AgaW1wbGVtZW50YXRpb24uIFBsZWFzZSByZWZlciB0byB0aGUgYGl0ZW1Ub1N0cmluZ2AgQVBJIGRvY3VtZW50YXRpb24uJywgJ1RoZSBvYmplY3QgdGhhdCB3YXMgcGFzc2VkOicsIGkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3RyaW5nKGkpO1xuICAgIH0sXG4gICAgb25TdGF0ZUNoYW5nZTogbm9vcCxcbiAgICBvbklucHV0VmFsdWVDaGFuZ2U6IG5vb3AsXG4gICAgb25Vc2VyQWN0aW9uOiBub29wLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uU2VsZWN0OiBub29wLFxuICAgIG9uT3V0ZXJDbGljazogbm9vcCxcbiAgICBzZWxlY3RlZEl0ZW1DaGFuZ2VkOiBmdW5jdGlvbiBzZWxlY3RlZEl0ZW1DaGFuZ2VkKHByZXZJdGVtLCBpdGVtKSB7XG4gICAgICByZXR1cm4gcHJldkl0ZW0gIT09IGl0ZW07XG4gICAgfSxcbiAgICBlbnZpcm9ubWVudDogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAoc3NyKSAqL1xuICAgID8ge30gOiB3aW5kb3csXG4gICAgc3RhdGVSZWR1Y2VyOiBmdW5jdGlvbiBzdGF0ZVJlZHVjZXIoc3RhdGUsIHN0YXRlVG9TZXQpIHtcbiAgICAgIHJldHVybiBzdGF0ZVRvU2V0O1xuICAgIH0sXG4gICAgc3VwcHJlc3NSZWZFcnJvcjogZmFsc2UsXG4gICAgc2Nyb2xsSW50b1ZpZXc6IHNjcm9sbEludG9WaWV3XG4gIH07XG4gIERvd25zaGlmdC5zdGF0ZUNoYW5nZVR5cGVzID0gc3RhdGVDaGFuZ2VUeXBlcztcbiAgcmV0dXJuIERvd25zaGlmdDtcbn0oKTtcblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRG93bnNoaWZ0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLFxuICBkZWZhdWx0SGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVmYXVsdElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGluaXRpYWxIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuICBpbml0aWFsSW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5pdGlhbElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGdldEExMXlTdGF0dXNNZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbklucHV0VmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblVzZXJBY3Rpb246IFByb3BUeXBlcy5mdW5jLFxuICBvbk91dGVyQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RlZEl0ZW1DaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3RhdGVSZWR1Y2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW52aXJvbm1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZG9jdW1lbnQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBnZXRFbGVtZW50QnlJZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBhY3RpdmVFbGVtZW50OiBQcm9wVHlwZXMuYW55LFxuICAgICAgYm9keTogUHJvcFR5cGVzLmFueVxuICAgIH0pXG4gIH0pLFxuICBzdXBwcmVzc1JlZkVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2Nyb2xsSW50b1ZpZXc6IFByb3BUeXBlcy5mdW5jLFxuICAvLyB0aGluZ3Mgd2Uga2VlcCBpbiBzdGF0ZSBmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHNcbiAgLy8gYnV0IGNhbiBhY2NlcHQgYXMgcHJvcHMgZm9yIGNvbnRyb2xsZWQgY29tcG9uZW50c1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgbGFiZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5wdXRJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZXRJdGVtSWQ6IFByb3BUeXBlcy5mdW5jXG4gIC8qIGVzbGludC1lbmFibGUgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMgKi9cblxufSA6IHZvaWQgMDtcblxuZnVuY3Rpb24gdmFsaWRhdGVHZXRNZW51UHJvcHNDYWxsZWRDb3JyZWN0bHkobm9kZSwgX3JlZjEyKSB7XG4gIHZhciByZWZLZXkgPSBfcmVmMTIucmVmS2V5O1xuXG4gIGlmICghbm9kZSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcihcImRvd25zaGlmdDogVGhlIHJlZiBwcm9wIFxcXCJcIiArIHJlZktleSArIFwiXFxcIiBmcm9tIGdldE1lbnVQcm9wcyB3YXMgbm90IGFwcGxpZWQgY29ycmVjdGx5IG9uIHlvdXIgbWVudSBlbGVtZW50LlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUdldFJvb3RQcm9wc0NhbGxlZENvcnJlY3RseShlbGVtZW50LCBfcmVmMTMpIHtcbiAgdmFyIHJlZktleSA9IF9yZWYxMy5yZWZLZXk7XG4gIHZhciByZWZLZXlTcGVjaWZpZWQgPSByZWZLZXkgIT09ICdyZWYnO1xuICB2YXIgaXNDb21wb3NpdGUgPSAhaXNET01FbGVtZW50KGVsZW1lbnQpO1xuXG4gIGlmIChpc0NvbXBvc2l0ZSAmJiAhcmVmS2V5U3BlY2lmaWVkICYmICFpc0ZvcndhcmRSZWYoZWxlbWVudCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoJ2Rvd25zaGlmdDogWW91IHJldHVybmVkIGEgbm9uLURPTSBlbGVtZW50LiBZb3UgbXVzdCBzcGVjaWZ5IGEgcmVmS2V5IGluIGdldFJvb3RQcm9wcycpO1xuICB9IGVsc2UgaWYgKCFpc0NvbXBvc2l0ZSAmJiByZWZLZXlTcGVjaWZpZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IFlvdSByZXR1cm5lZCBhIERPTSBlbGVtZW50LiBZb3Ugc2hvdWxkIG5vdCBzcGVjaWZ5IGEgcmVmS2V5IGluIGdldFJvb3RQcm9wcy4gWW91IHNwZWNpZmllZCBcXFwiXCIgKyByZWZLZXkgKyBcIlxcXCJcIik7XG4gIH1cblxuICBpZiAoIWlzRm9yd2FyZFJlZihlbGVtZW50KSAmJiAhZ2V0RWxlbWVudFByb3BzKGVsZW1lbnQpW3JlZktleV0pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IFlvdSBtdXN0IGFwcGx5IHRoZSByZWYgcHJvcCBcXFwiXCIgKyByZWZLZXkgKyBcIlxcXCIgZnJvbSBnZXRSb290UHJvcHMgb250byB5b3VyIHJvb3QgZWxlbWVudC5cIik7XG4gIH1cbn1cblxudmFyIGRyb3Bkb3duRGVmYXVsdFN0YXRlVmFsdWVzID0ge1xuICBoaWdobGlnaHRlZEluZGV4OiAtMSxcbiAgaXNPcGVuOiBmYWxzZSxcbiAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICBpbnB1dFZhbHVlOiAnJ1xufTtcblxuZnVuY3Rpb24gY2FsbE9uQ2hhbmdlUHJvcHMoYWN0aW9uLCBzdGF0ZSwgbmV3U3RhdGUpIHtcbiAgdmFyIHByb3BzID0gYWN0aW9uLnByb3BzLFxuICAgICAgdHlwZSA9IGFjdGlvbi50eXBlO1xuICB2YXIgY2hhbmdlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhzdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaW52b2tlT25DaGFuZ2VIYW5kbGVyKGtleSwgYWN0aW9uLCBzdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgaWYgKG5ld1N0YXRlW2tleV0gIT09IHN0YXRlW2tleV0pIHtcbiAgICAgIGNoYW5nZXNba2V5XSA9IG5ld1N0YXRlW2tleV07XG4gICAgfVxuICB9KTtcblxuICBpZiAocHJvcHMub25TdGF0ZUNoYW5nZSAmJiBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGgpIHtcbiAgICBwcm9wcy5vblN0YXRlQ2hhbmdlKF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBjaGFuZ2VzKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlT25DaGFuZ2VIYW5kbGVyKGtleSwgYWN0aW9uLCBzdGF0ZSwgbmV3U3RhdGUpIHtcbiAgdmFyIHByb3BzID0gYWN0aW9uLnByb3BzLFxuICAgICAgdHlwZSA9IGFjdGlvbi50eXBlO1xuICB2YXIgaGFuZGxlciA9IFwib25cIiArIGNhcGl0YWxpemVTdHJpbmcoa2V5KSArIFwiQ2hhbmdlXCI7XG5cbiAgaWYgKHByb3BzW2hhbmRsZXJdICYmIG5ld1N0YXRlW2tleV0gIT09IHVuZGVmaW5lZCAmJiBuZXdTdGF0ZVtrZXldICE9PSBzdGF0ZVtrZXldKSB7XG4gICAgcHJvcHNbaGFuZGxlcl0oX2V4dGVuZHMoe1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0sIG5ld1N0YXRlKSk7XG4gIH1cbn1cbi8qKlxuICogRGVmYXVsdCBzdGF0ZSByZWR1Y2VyIHRoYXQgcmV0dXJucyB0aGUgY2hhbmdlcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcyBzdGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBhIGFjdGlvbiB3aXRoIGNoYW5nZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBjaGFuZ2VzLlxuICovXG5cblxuZnVuY3Rpb24gc3RhdGVSZWR1Y2VyKHMsIGEpIHtcbiAgcmV0dXJuIGEuY2hhbmdlcztcbn1cbi8qKlxuICogUmV0dXJucyBhIG1lc3NhZ2UgdG8gYmUgYWRkZWQgdG8gYXJpYS1saXZlIHJlZ2lvbiB3aGVuIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdGlvblBhcmFtZXRlcnMgUGFyYW1ldGVycyByZXF1aXJlZCB0byBidWlsZCB0aGUgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBhMTF5IG1lc3NhZ2UuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZShzZWxlY3Rpb25QYXJhbWV0ZXJzKSB7XG4gIHZhciBzZWxlY3RlZEl0ZW0gPSBzZWxlY3Rpb25QYXJhbWV0ZXJzLnNlbGVjdGVkSXRlbSxcbiAgICAgIGl0ZW1Ub1N0cmluZ0xvY2FsID0gc2VsZWN0aW9uUGFyYW1ldGVycy5pdGVtVG9TdHJpbmc7XG4gIHJldHVybiBzZWxlY3RlZEl0ZW0gPyBpdGVtVG9TdHJpbmdMb2NhbChzZWxlY3RlZEl0ZW0pICsgXCIgaGFzIGJlZW4gc2VsZWN0ZWQuXCIgOiAnJztcbn1cbi8qKlxuICogRGVib3VuY2VkIGNhbGwgZm9yIHVwZGF0aW5nIHRoZSBhMTF5IG1lc3NhZ2UuXG4gKi9cblxuXG52YXIgdXBkYXRlQTExeVN0YXR1cyA9IGRlYm91bmNlKGZ1bmN0aW9uIChnZXRBMTF5TWVzc2FnZSwgZG9jdW1lbnQpIHtcbiAgc2V0U3RhdHVzKGdldEExMXlNZXNzYWdlKCksIGRvY3VtZW50KTtcbn0sIDIwMCk7IC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG5cbnZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSAndW5kZWZpbmVkJyA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDtcblxuZnVuY3Rpb24gdXNlRWxlbWVudElkcyhfcmVmKSB7XG4gIHZhciBfcmVmJGlkID0gX3JlZi5pZCxcbiAgICAgIGlkID0gX3JlZiRpZCA9PT0gdm9pZCAwID8gXCJkb3duc2hpZnQtXCIgKyBnZW5lcmF0ZUlkKCkgOiBfcmVmJGlkLFxuICAgICAgbGFiZWxJZCA9IF9yZWYubGFiZWxJZCxcbiAgICAgIG1lbnVJZCA9IF9yZWYubWVudUlkLFxuICAgICAgZ2V0SXRlbUlkID0gX3JlZi5nZXRJdGVtSWQsXG4gICAgICB0b2dnbGVCdXR0b25JZCA9IF9yZWYudG9nZ2xlQnV0dG9uSWQsXG4gICAgICBpbnB1dElkID0gX3JlZi5pbnB1dElkO1xuICB2YXIgZWxlbWVudElkc1JlZiA9IHVzZVJlZih7XG4gICAgbGFiZWxJZDogbGFiZWxJZCB8fCBpZCArIFwiLWxhYmVsXCIsXG4gICAgbWVudUlkOiBtZW51SWQgfHwgaWQgKyBcIi1tZW51XCIsXG4gICAgZ2V0SXRlbUlkOiBnZXRJdGVtSWQgfHwgZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaWQgKyBcIi1pdGVtLVwiICsgaW5kZXg7XG4gICAgfSxcbiAgICB0b2dnbGVCdXR0b25JZDogdG9nZ2xlQnV0dG9uSWQgfHwgaWQgKyBcIi10b2dnbGUtYnV0dG9uXCIsXG4gICAgaW5wdXRJZDogaW5wdXRJZCB8fCBpZCArIFwiLWlucHV0XCJcbiAgfSk7XG4gIHJldHVybiBlbGVtZW50SWRzUmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEl0ZW1JbmRleChpbmRleCwgaXRlbSwgaXRlbXMpIHtcbiAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1zLmluZGV4T2YoaXRlbSk7XG59XG5cbmZ1bmN0aW9uIGl0ZW1Ub1N0cmluZyhpdGVtKSB7XG4gIHJldHVybiBpdGVtID8gU3RyaW5nKGl0ZW0pIDogJyc7XG59XG5cbmZ1bmN0aW9uIGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSB7XG4gIHJldHVybiAvXlxcU3sxfSQvLnRlc3Qoa2V5KTtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHJpbmcpIHtcbiAgcmV0dXJuIFwiXCIgKyBzdHJpbmcuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gdXNlTGF0ZXN0UmVmKHZhbCkge1xuICB2YXIgcmVmID0gdXNlUmVmKHZhbCk7IC8vIHRlY2huaWNhbGx5IHRoaXMgaXMgbm90IFwiY29uY3VycmVudCBtb2RlIHNhZmVcIiBiZWNhdXNlIHdlJ3JlIG1hbmlwdWxhdGluZ1xuICAvLyB0aGUgdmFsdWUgZHVyaW5nIHJlbmRlciAoc28gaXQncyBub3QgaWRlbXBvdGVudCkuIEhvd2V2ZXIsIHRoZSBwbGFjZXMgdGhpc1xuICAvLyBob29rIGlzIHVzZWQgaXMgdG8gc3VwcG9ydCBtZW1vaXppbmcgY2FsbGJhY2tzIHdoaWNoIHdpbGwgYmUgY2FsbGVkXG4gIC8vICpkdXJpbmcqIHJlbmRlciwgc28gd2UgbmVlZCB0aGUgbGF0ZXN0IHZhbHVlcyAqZHVyaW5nKiByZW5kZXIuXG4gIC8vIElmIG5vdCBmb3IgdGhpcywgdGhlbiB3ZSdkIHByb2JhYmx5IHdhbnQgdG8gdXNlIHVzZUxheW91dEVmZmVjdCBpbnN0ZWFkLlxuXG4gIHJlZi5jdXJyZW50ID0gdmFsO1xuICByZXR1cm4gcmVmO1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY29udHJvbGxlZCBzdGF0ZSB1c2luZyBhIHRoZSBwcmV2aW91cyBzdGF0ZSwgcHJvcHMsXG4gKiB0d28gcmVkdWNlcnMsIG9uZSBmcm9tIGRvd25zaGlmdCBhbmQgYW4gb3B0aW9uYWwgb25lIGZyb20gdGhlIHVzZXIuXG4gKiBBbHNvIGNhbGxzIHRoZSBvbkNoYW5nZSBoYW5kbGVycyBmb3Igc3RhdGUgdmFsdWVzIHRoYXQgaGF2ZSBjaGFuZ2VkLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgUmVkdWNlciBmdW5jdGlvbiBmcm9tIGRvd25zaGlmdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbml0aWFsU3RhdGUgSW5pdGlhbCBzdGF0ZSBvZiB0aGUgaG9vay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgaG9vayBwcm9wcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgd2l0aCB0aGUgc3RhdGUgYW5kIGFuIGFjdGlvbiBkaXNwYXRjaGVyLlxuICovXG5cblxuZnVuY3Rpb24gdXNlRW5oYW5jZWRSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpIHtcbiAgdmFyIHByZXZTdGF0ZVJlZiA9IHVzZVJlZigpO1xuICB2YXIgYWN0aW9uUmVmID0gdXNlUmVmKCk7XG4gIHZhciBlbmhhbmNlZFJlZHVjZXIgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbikge1xuICAgIGFjdGlvblJlZi5jdXJyZW50ID0gYWN0aW9uO1xuICAgIHN0YXRlID0gZ2V0U3RhdGUoc3RhdGUsIGFjdGlvbi5wcm9wcyk7XG4gICAgdmFyIGNoYW5nZXMgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIHZhciBuZXdTdGF0ZSA9IGFjdGlvbi5wcm9wcy5zdGF0ZVJlZHVjZXIoc3RhdGUsIF9leHRlbmRzKHt9LCBhY3Rpb24sIHtcbiAgICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgICB9KSk7XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9LCBbcmVkdWNlcl0pO1xuXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZW5oYW5jZWRSZWR1Y2VyLCBpbml0aWFsU3RhdGUpLFxuICAgICAgc3RhdGUgPSBfdXNlUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIHByb3BzUmVmID0gdXNlTGF0ZXN0UmVmKHByb3BzKTtcbiAgdmFyIGRpc3BhdGNoV2l0aFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBkaXNwYXRjaChfZXh0ZW5kcyh7XG4gICAgICBwcm9wczogcHJvcHNSZWYuY3VycmVudFxuICAgIH0sIGFjdGlvbikpO1xuICB9LCBbcHJvcHNSZWZdKTtcbiAgdmFyIGFjdGlvbiA9IGFjdGlvblJlZi5jdXJyZW50O1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChhY3Rpb24gJiYgcHJldlN0YXRlUmVmLmN1cnJlbnQgJiYgcHJldlN0YXRlUmVmLmN1cnJlbnQgIT09IHN0YXRlKSB7XG4gICAgICBjYWxsT25DaGFuZ2VQcm9wcyhhY3Rpb24sIGdldFN0YXRlKHByZXZTdGF0ZVJlZi5jdXJyZW50LCBhY3Rpb24ucHJvcHMpLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgcHJldlN0YXRlUmVmLmN1cnJlbnQgPSBzdGF0ZTtcbiAgfSwgW3N0YXRlLCBwcm9wcywgYWN0aW9uXSk7XG4gIHJldHVybiBbc3RhdGUsIGRpc3BhdGNoV2l0aFByb3BzXTtcbn1cbi8qKlxuICogV3JhcHMgdGhlIHVzZUVuaGFuY2VkUmVkdWNlciBhbmQgYXBwbGllcyB0aGUgY29udHJvbGxlZCBwcm9wIHZhbHVlcyBiZWZvcmVcbiAqIHJldHVybmluZyB0aGUgbmV3IHN0YXRlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgUmVkdWNlciBmdW5jdGlvbiBmcm9tIGRvd25zaGlmdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBpbml0aWFsU3RhdGUgSW5pdGlhbCBzdGF0ZSBvZiB0aGUgaG9vay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyBUaGUgaG9vayBwcm9wcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gQW4gYXJyYXkgd2l0aCB0aGUgc3RhdGUgYW5kIGFuIGFjdGlvbiBkaXNwYXRjaGVyLlxuICovXG5cblxuZnVuY3Rpb24gdXNlQ29udHJvbGxlZFJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcykge1xuICB2YXIgX3VzZUVuaGFuY2VkUmVkdWNlciA9IHVzZUVuaGFuY2VkUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUVuaGFuY2VkUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZUVuaGFuY2VkUmVkdWNlclsxXTtcblxuICByZXR1cm4gW2dldFN0YXRlKHN0YXRlLCBwcm9wcyksIGRpc3BhdGNoXTtcbn1cblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmcsXG4gIHN0YXRlUmVkdWNlcjogc3RhdGVSZWR1Y2VyLFxuICBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZTogZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UsXG4gIHNjcm9sbEludG9WaWV3OiBzY3JvbGxJbnRvVmlldyxcbiAgY2lyY3VsYXJOYXZpZ2F0aW9uOiBmYWxzZSxcbiAgZW52aXJvbm1lbnQ6IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IChzc3IpICovXG4gID8ge30gOiB3aW5kb3dcbn07XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZShwcm9wcywgcHJvcEtleSwgZGVmYXVsdFN0YXRlVmFsdWVzKSB7XG4gIGlmIChkZWZhdWx0U3RhdGVWYWx1ZXMgPT09IHZvaWQgMCkge1xuICAgIGRlZmF1bHRTdGF0ZVZhbHVlcyA9IGRyb3Bkb3duRGVmYXVsdFN0YXRlVmFsdWVzO1xuICB9XG5cbiAgdmFyIGRlZmF1bHRQcm9wS2V5ID0gXCJkZWZhdWx0XCIgKyBjYXBpdGFsaXplU3RyaW5nKHByb3BLZXkpO1xuXG4gIGlmIChkZWZhdWx0UHJvcEtleSBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wc1tkZWZhdWx0UHJvcEtleV07XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFN0YXRlVmFsdWVzW3Byb3BLZXldO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUocHJvcHMsIHByb3BLZXksIGRlZmF1bHRTdGF0ZVZhbHVlcykge1xuICBpZiAoZGVmYXVsdFN0YXRlVmFsdWVzID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0U3RhdGVWYWx1ZXMgPSBkcm9wZG93bkRlZmF1bHRTdGF0ZVZhbHVlcztcbiAgfVxuXG4gIGlmIChwcm9wS2V5IGluIHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzW3Byb3BLZXldO1xuICB9XG5cbiAgdmFyIGluaXRpYWxQcm9wS2V5ID0gXCJpbml0aWFsXCIgKyBjYXBpdGFsaXplU3RyaW5nKHByb3BLZXkpO1xuXG4gIGlmIChpbml0aWFsUHJvcEtleSBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wc1tpbml0aWFsUHJvcEtleV07XG4gIH1cblxuICByZXR1cm4gZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUocHJvcHMpIHtcbiAgdmFyIHNlbGVjdGVkSXRlbSA9IGdldEluaXRpYWxWYWx1ZShwcm9wcywgJ3NlbGVjdGVkSXRlbScpO1xuICB2YXIgaXNPcGVuID0gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCAnaXNPcGVuJyk7XG4gIHZhciBoaWdobGlnaHRlZEluZGV4ID0gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpO1xuICB2YXIgaW5wdXRWYWx1ZSA9IGdldEluaXRpYWxWYWx1ZShwcm9wcywgJ2lucHV0VmFsdWUnKTtcbiAgcmV0dXJuIHtcbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4IDwgMCAmJiBzZWxlY3RlZEl0ZW0gJiYgaXNPcGVuID8gcHJvcHMuaXRlbXMuaW5kZXhPZihzZWxlY3RlZEl0ZW0pIDogaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBpc09wZW46IGlzT3BlbixcbiAgICBzZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbSxcbiAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCBvZmZzZXQsIGdldEl0ZW1Ob2RlRnJvbUluZGV4KSB7XG4gIHZhciBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgaW5pdGlhbEhpZ2hsaWdodGVkSW5kZXggPSBwcm9wcy5pbml0aWFsSGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4ID0gcHJvcHMuZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg7XG4gIHZhciBzZWxlY3RlZEl0ZW0gPSBzdGF0ZS5zZWxlY3RlZEl0ZW0sXG4gICAgICBoaWdobGlnaHRlZEluZGV4ID0gc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleDtcblxuICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IC8vIGluaXRpYWxIaWdobGlnaHRlZEluZGV4IHdpbGwgZ2l2ZSB2YWx1ZSB0byBoaWdobGlnaHRlZEluZGV4IG9uIGluaXRpYWwgc3RhdGUgb25seS5cblxuXG4gIGlmIChpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleCAhPT0gdW5kZWZpbmVkICYmIGhpZ2hsaWdodGVkSW5kZXggPT09IGluaXRpYWxIaWdobGlnaHRlZEluZGV4KSB7XG4gICAgcmV0dXJuIGluaXRpYWxIaWdobGlnaHRlZEluZGV4O1xuICB9XG5cbiAgaWYgKGRlZmF1bHRIaWdobGlnaHRlZEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRJdGVtKSB7XG4gICAgaWYgKG9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGl0ZW1zLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0TmV4dFdyYXBwaW5nSW5kZXgob2Zmc2V0LCBpdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSksIGl0ZW1zLmxlbmd0aCwgZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKTtcbiAgfVxuXG4gIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiAwO1xufVxuLyoqXG4gKiBSZXVzZSB0aGUgbW92ZW1lbnQgdHJhY2tpbmcgb2YgbW91c2UgYW5kIHRvdWNoIGV2ZW50cy5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzT3BlbiBXaGV0aGVyIHRoZSBkcm9wZG93biBpcyBvcGVuIG9yIG5vdC5cbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZG93bnNoaWZ0RWxlbWVudFJlZnMgRG93bnNoaWZ0IGVsZW1lbnQgcmVmcyB0byB0cmFjayBtb3ZlbWVudCAodG9nZ2xlQnV0dG9uLCBtZW51IGV0Yy4pXG4gKiBAcGFyYW0ge09iamVjdH0gZW52aXJvbm1lbnQgRW52aXJvbm1lbnQgd2hlcmUgY29tcG9uZW50L2hvb2sgZXhpc3RzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlQmx1ciBIYW5kbGVyIG9uIGJsdXIgZnJvbSBtb3VzZSBvciB0b3VjaC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlZiBjb250YWluaW5nIHdoZXRoZXIgbW91c2VEb3duIG9yIHRvdWNoTW92ZSBldmVudCBpcyBoYXBwZW5pbmdcbiAqL1xuXG5cbmZ1bmN0aW9uIHVzZU1vdXNlQW5kVG91Y2hUcmFja2VyKGlzT3BlbiwgZG93bnNoaWZ0RWxlbWVudFJlZnMsIGVudmlyb25tZW50LCBoYW5kbGVCbHVyKSB7XG4gIHZhciBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYgPSB1c2VSZWYoe1xuICAgIGlzTW91c2VEb3duOiBmYWxzZSxcbiAgICBpc1RvdWNoTW92ZTogZmFsc2VcbiAgfSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVGhlIHNhbWUgc3RyYXRlZ3kgZm9yIGNoZWNraW5nIGlmIGEgY2xpY2sgb2NjdXJyZWQgaW5zaWRlIG9yIG91dHNpZGUgZG93bnNpZnRcbiAgICAvLyBhcyBpbiBkb3duc2hpZnQuanMuXG4gICAgdmFyIG9uTW91c2VEb3duID0gZnVuY3Rpb24gb25Nb3VzZURvd24oKSB7XG4gICAgICBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc01vdXNlRG93biA9IHRydWU7XG4gICAgfTtcblxuICAgIHZhciBvbk1vdXNlVXAgPSBmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzTW91c2VEb3duID0gZmFsc2U7XG5cbiAgICAgIGlmIChpc09wZW4gJiYgIXRhcmdldFdpdGhpbkRvd25zaGlmdChldmVudC50YXJnZXQsIGRvd25zaGlmdEVsZW1lbnRSZWZzLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICAgIH0pLCBlbnZpcm9ubWVudC5kb2N1bWVudCkpIHtcbiAgICAgICAgaGFuZGxlQmx1cigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCkge1xuICAgICAgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNUb3VjaE1vdmUgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24gb25Ub3VjaE1vdmUoKSB7XG4gICAgICBtb3VzZUFuZFRvdWNoVHJhY2tlcnNSZWYuY3VycmVudC5pc1RvdWNoTW92ZSA9IHRydWU7XG4gICAgfTtcblxuICAgIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24gb25Ub3VjaEVuZChldmVudCkge1xuICAgICAgaWYgKGlzT3BlbiAmJiAhbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNUb3VjaE1vdmUgJiYgIXRhcmdldFdpdGhpbkRvd25zaGlmdChldmVudC50YXJnZXQsIGRvd25zaGlmdEVsZW1lbnRSZWZzLm1hcChmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHJldHVybiByZWYuY3VycmVudDtcbiAgICAgIH0pLCBlbnZpcm9ubWVudC5kb2N1bWVudCwgZmFsc2UpKSB7XG4gICAgICAgIGhhbmRsZUJsdXIoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZW52aXJvbm1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICAgIGVudmlyb25tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICBlbnZpcm9ubWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgICAgZW52aXJvbm1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBlbnZpcm9ubWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0KTtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGVudmlyb25tZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgfTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbaXNPcGVuLCBlbnZpcm9ubWVudF0pO1xuICByZXR1cm4gbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cblxudmFyIHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlciA9IGZ1bmN0aW9uIHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcigpIHtcbiAgcmV0dXJuIG5vb3A7XG59O1xuLyoqXG4gKiBDdXN0b20gaG9vayB0aGF0IGNoZWNrcyBpZiBnZXR0ZXIgcHJvcHMgYXJlIGNhbGxlZCBjb3JyZWN0bHkuXG4gKlxuICogQHBhcmFtICB7Li4uYW55fSBwcm9wS2V5cyBHZXR0ZXIgcHJvcCBuYW1lcyB0byBiZSBoYW5kbGVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBTZXR0ZXIgZnVuY3Rpb24gY2FsbGVkIGluc2lkZSBnZXR0ZXIgcHJvcHMgdG8gc2V0IGNhbGwgaW5mb3JtYXRpb24uXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB1c2VHZXR0ZXJQcm9wc0NhbGxlZENoZWNrZXIgPSBmdW5jdGlvbiB1c2VHZXR0ZXJQcm9wc0NhbGxlZENoZWNrZXIoKSB7XG4gICAgdmFyIGlzSW5pdGlhbE1vdW50UmVmID0gdXNlUmVmKHRydWUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BLZXlzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgcHJvcEtleXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGdldHRlclByb3BzQ2FsbGVkUmVmID0gdXNlUmVmKHByb3BLZXlzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwcm9wS2V5KSB7XG4gICAgICBhY2NbcHJvcEtleV0gPSB7fTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgT2JqZWN0LmtleXMoZ2V0dGVyUHJvcHNDYWxsZWRSZWYuY3VycmVudCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcEtleSkge1xuICAgICAgICB2YXIgcHJvcENhbGxJbmZvID0gZ2V0dGVyUHJvcHNDYWxsZWRSZWYuY3VycmVudFtwcm9wS2V5XTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgICAgIGlmICghT2JqZWN0LmtleXMocHJvcENhbGxJbmZvKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZG93bnNoaWZ0OiBZb3UgZm9yZ290IHRvIGNhbGwgdGhlIFwiICsgcHJvcEtleSArIFwiIGdldHRlciBmdW5jdGlvbiBvbiB5b3VyIGNvbXBvbmVudCAvIGVsZW1lbnQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdXBwcmVzc1JlZkVycm9yID0gcHJvcENhbGxJbmZvLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgICAgICByZWZLZXkgPSBwcm9wQ2FsbEluZm8ucmVmS2V5LFxuICAgICAgICAgICAgZWxlbWVudFJlZiA9IHByb3BDYWxsSW5mby5lbGVtZW50UmVmO1xuXG4gICAgICAgIGlmICgoIWVsZW1lbnRSZWYgfHwgIWVsZW1lbnRSZWYuY3VycmVudCkgJiYgIXN1cHByZXNzUmVmRXJyb3IpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJkb3duc2hpZnQ6IFRoZSByZWYgcHJvcCBcXFwiXCIgKyByZWZLZXkgKyBcIlxcXCIgZnJvbSBcIiArIHByb3BLZXkgKyBcIiB3YXMgbm90IGFwcGxpZWQgY29ycmVjdGx5IG9uIHlvdXIgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHZhciBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocHJvcEtleSwgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBlbGVtZW50UmVmKSB7XG4gICAgICBnZXR0ZXJQcm9wc0NhbGxlZFJlZi5jdXJyZW50W3Byb3BLZXldID0ge1xuICAgICAgICBzdXBwcmVzc1JlZkVycm9yOiBzdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICByZWZLZXk6IHJlZktleSxcbiAgICAgICAgZWxlbWVudFJlZjogZWxlbWVudFJlZlxuICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHNldEdldHRlclByb3BDYWxsSW5mbztcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlQTExeU1lc3NhZ2VTZXR0ZXIoZ2V0QTExeU1lc3NhZ2UsIGRlcGVuZGVuY3lBcnJheSwgX3JlZjIpIHtcbiAgdmFyIGlzSW5pdGlhbE1vdW50ID0gX3JlZjIuaXNJbml0aWFsTW91bnQsXG4gICAgICBoaWdobGlnaHRlZEluZGV4ID0gX3JlZjIuaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIGl0ZW1zID0gX3JlZjIuaXRlbXMsXG4gICAgICBlbnZpcm9ubWVudCA9IF9yZWYyLmVudmlyb25tZW50LFxuICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYyLCBbXCJpc0luaXRpYWxNb3VudFwiLCBcImhpZ2hsaWdodGVkSW5kZXhcIiwgXCJpdGVtc1wiLCBcImVudmlyb25tZW50XCJdKTtcblxuICAvLyBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzdGF0ZS5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVBMTF5U3RhdHVzKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRBMTF5TWVzc2FnZShfZXh0ZW5kcyh7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgIGhpZ2hsaWdodGVkSXRlbTogaXRlbXNbaGlnaGxpZ2h0ZWRJbmRleF0sXG4gICAgICAgIHJlc3VsdENvdW50OiBpdGVtcy5sZW5ndGhcbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9LCBlbnZpcm9ubWVudC5kb2N1bWVudCk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgZGVwZW5kZW5jeUFycmF5KTtcbn1cblxuZnVuY3Rpb24gdXNlU2Nyb2xsSW50b1ZpZXcoX3JlZjMpIHtcbiAgdmFyIGhpZ2hsaWdodGVkSW5kZXggPSBfcmVmMy5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgaXNPcGVuID0gX3JlZjMuaXNPcGVuLFxuICAgICAgaXRlbVJlZnMgPSBfcmVmMy5pdGVtUmVmcyxcbiAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4ID0gX3JlZjMuZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICBtZW51RWxlbWVudCA9IF9yZWYzLm1lbnVFbGVtZW50LFxuICAgICAgc2Nyb2xsSW50b1ZpZXdQcm9wID0gX3JlZjMuc2Nyb2xsSW50b1ZpZXc7XG4gIC8vIHVzZWQgbm90IHRvIHNjcm9sbCBvbiBoaWdobGlnaHQgYnkgbW91c2UuXG4gIHZhciBzaG91bGRTY3JvbGxSZWYgPSB1c2VSZWYodHJ1ZSk7IC8vIFNjcm9sbCBvbiBoaWdobGlnaHRlZCBpdGVtIGlmIGNoYW5nZSBjb21lcyBmcm9tIGtleWJvYXJkLlxuXG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChoaWdobGlnaHRlZEluZGV4IDwgMCB8fCAhaXNPcGVuIHx8ICFPYmplY3Qua2V5cyhpdGVtUmVmcy5jdXJyZW50KS5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkU2Nyb2xsUmVmLmN1cnJlbnQgPT09IGZhbHNlKSB7XG4gICAgICBzaG91bGRTY3JvbGxSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbEludG9WaWV3UHJvcChnZXRJdGVtTm9kZUZyb21JbmRleChoaWdobGlnaHRlZEluZGV4KSwgbWVudUVsZW1lbnQpO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtoaWdobGlnaHRlZEluZGV4XSk7XG4gIHJldHVybiBzaG91bGRTY3JvbGxSZWY7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cblxudmFyIHVzZUNvbnRyb2xQcm9wc1ZhbGlkYXRvciA9IG5vb3A7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB1c2VDb250cm9sUHJvcHNWYWxpZGF0b3IgPSBmdW5jdGlvbiB1c2VDb250cm9sUHJvcHNWYWxpZGF0b3IoX3JlZjQpIHtcbiAgICB2YXIgaXNJbml0aWFsTW91bnQgPSBfcmVmNC5pc0luaXRpYWxNb3VudCxcbiAgICAgICAgcHJvcHMgPSBfcmVmNC5wcm9wcyxcbiAgICAgICAgc3RhdGUgPSBfcmVmNC5zdGF0ZTtcbiAgICAvLyB1c2VkIGZvciBjaGVja2luZyB3aGVuIHByb3BzIGFyZSBtb3ZpbmcgZnJvbSBjb250cm9sbGVkIHRvIHVuY29udHJvbGxlZC5cbiAgICB2YXIgcHJldlByb3BzUmVmID0gdXNlUmVmKHByb3BzKTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlzSW5pdGlhbE1vdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFsaWRhdGVDb250cm9sbGVkVW5jaGFuZ2VkKHN0YXRlLCBwcmV2UHJvcHNSZWYuY3VycmVudCwgcHJvcHMpO1xuICAgICAgcHJldlByb3BzUmVmLmN1cnJlbnQgPSBwcm9wcztcbiAgICB9LCBbc3RhdGUsIHByb3BzLCBpc0luaXRpYWxNb3VudF0pO1xuICB9O1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdENvbW1vblJlZHVjZXIoc3RhdGUsIGFjdGlvbiwgc3RhdGVDaGFuZ2VUeXBlcykge1xuICB2YXIgdHlwZSA9IGFjdGlvbi50eXBlLFxuICAgICAgcHJvcHMgPSBhY3Rpb24ucHJvcHM7XG4gIHZhciBjaGFuZ2VzO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2Ugc3RhdGVDaGFuZ2VUeXBlcy5JdGVtTW91c2VNb3ZlOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogYWN0aW9uLmluZGV4XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHN0YXRlQ2hhbmdlVHlwZXMuTWVudU1vdXNlTGVhdmU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzdGF0ZUNoYW5nZVR5cGVzLlRvZ2dsZUJ1dHRvbkNsaWNrOlxuICAgIGNhc2Ugc3RhdGVDaGFuZ2VUeXBlcy5GdW5jdGlvblRvZ2dsZU1lbnU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IHN0YXRlLmlzT3BlbiA/IC0xIDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDApXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHN0YXRlQ2hhbmdlVHlwZXMuRnVuY3Rpb25PcGVuTWVudTpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDApXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHN0YXRlQ2hhbmdlVHlwZXMuRnVuY3Rpb25DbG9zZU1lbnU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHN0YXRlQ2hhbmdlVHlwZXMuRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogYWN0aW9uLmhpZ2hsaWdodGVkSW5kZXhcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2Ugc3RhdGVDaGFuZ2VUeXBlcy5GdW5jdGlvblNldElucHV0VmFsdWU6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBzdGF0ZUNoYW5nZVR5cGVzLkZ1bmN0aW9uUmVzZXQ6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdoaWdobGlnaHRlZEluZGV4JyksXG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIHNlbGVjdGVkSXRlbTogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnc2VsZWN0ZWRJdGVtJyksXG4gICAgICAgIGlucHV0VmFsdWU6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2lucHV0VmFsdWUnKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBjYWxsZWQgd2l0aG91dCBwcm9wZXIgYWN0aW9uIHR5cGUuJyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG5mdW5jdGlvbiBnZXRJdGVtSW5kZXhCeUNoYXJhY3RlcktleShrZXlzU29GYXIsIGhpZ2hsaWdodGVkSW5kZXgsIGl0ZW1zLCBpdGVtVG9TdHJpbmcsIGdldEl0ZW1Ob2RlRnJvbUluZGV4KSB7XG4gIHZhciBsb3dlckNhc2VkS2V5c1NvRmFyID0ga2V5c1NvRmFyLnRvTG93ZXJDYXNlKCk7XG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIHZhciBvZmZzZXRJbmRleCA9IChpbmRleCArIGhpZ2hsaWdodGVkSW5kZXggKyAxKSAlIGl0ZW1zLmxlbmd0aDtcblxuICAgIGlmIChpdGVtVG9TdHJpbmcoaXRlbXNbb2Zmc2V0SW5kZXhdKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgobG93ZXJDYXNlZEtleXNTb0ZhcikpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZ2V0SXRlbU5vZGVGcm9tSW5kZXgob2Zmc2V0SW5kZXgpO1xuXG4gICAgICBpZiAoIShlbGVtZW50ICYmIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSkge1xuICAgICAgICByZXR1cm4gb2Zmc2V0SW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhpZ2hsaWdodGVkSW5kZXg7XG59XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXRlbVRvU3RyaW5nOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNpcmN1bGFyTmF2aWdhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsSGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIGluaXRpYWxJc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGRlZmF1bHRTZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYWJlbElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtZW51SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdldEl0ZW1JZDogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvZ2dsZUJ1dHRvbklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblNlbGVjdGVkSXRlbUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uSGlnaGxpZ2h0ZWRJbmRleENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhdGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbklzT3BlbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KVxufTtcbi8qKlxuICogRGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igc3RhdHVzIG1lc3NhZ2UuIE9ubHkgYWRkZWQgd2hlbiBtZW51IGlzIG9wZW4uXG4gKiBXaWxsIHNwZWNpZnQgaWYgdGhlcmUgYXJlIHJlc3VsdHMgaW4gdGhlIGxpc3QsIGFuZCBpZiBzbywgaG93IG1hbnksXG4gKiBhbmQgd2hhdCBrZXlzIGFyZSByZWxldmFudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gdGhlIGRvd25zaGlmdCBzdGF0ZSBhbmQgb3RoZXIgcmVsZXZhbnQgcHJvcGVydGllc1xuICogQHJldHVybiB7U3RyaW5nfSB0aGUgYTExeSBzdGF0dXMgbWVzc2FnZVxuICovXG5cbmZ1bmN0aW9uIGdldEExMXlTdGF0dXNNZXNzYWdlJDEoX3JlZikge1xuICB2YXIgaXNPcGVuID0gX3JlZi5pc09wZW4sXG4gICAgICByZXN1bHRDb3VudCA9IF9yZWYucmVzdWx0Q291bnQsXG4gICAgICBwcmV2aW91c1Jlc3VsdENvdW50ID0gX3JlZi5wcmV2aW91c1Jlc3VsdENvdW50O1xuXG4gIGlmICghaXNPcGVuKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKCFyZXN1bHRDb3VudCkge1xuICAgIHJldHVybiAnTm8gcmVzdWx0cyBhcmUgYXZhaWxhYmxlLic7XG4gIH1cblxuICBpZiAocmVzdWx0Q291bnQgIT09IHByZXZpb3VzUmVzdWx0Q291bnQpIHtcbiAgICByZXR1cm4gcmVzdWx0Q291bnQgKyBcIiByZXN1bHRcIiArIChyZXN1bHRDb3VudCA9PT0gMSA/ICcgaXMnIDogJ3MgYXJlJykgKyBcIiBhdmFpbGFibGUsIHVzZSB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlLiBQcmVzcyBFbnRlciBvciBTcGFjZSBCYXIga2V5cyB0byBzZWxlY3QuXCI7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBkZWZhdWx0UHJvcHMkMSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IGdldEExMXlTdGF0dXNNZXNzYWdlJDFcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuXG5cbnZhciB2YWxpZGF0ZVByb3BUeXBlcyA9IG5vb3A7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZVByb3BUeXBlcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKG9wdGlvbnMsIGNhbGxlcikge1xuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIG9wdGlvbnMsICdwcm9wJywgY2FsbGVyLm5hbWUpO1xuICB9O1xufVxuXG52YXIgTWVudUtleURvd25BcnJvd0Rvd24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDA7XG52YXIgTWVudUtleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9rZXlkb3duX2Fycm93X3VwX18nIDogMTtcbnZhciBNZW51S2V5RG93bkVzY2FwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9lc2NhcGVfXycgOiAyO1xudmFyIE1lbnVLZXlEb3duSG9tZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9ob21lX18nIDogMztcbnZhciBNZW51S2V5RG93bkVuZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9lbmRfXycgOiA0O1xudmFyIE1lbnVLZXlEb3duRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fZW50ZXJfXycgOiA1O1xudmFyIE1lbnVLZXlEb3duU3BhY2VCdXR0b24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19tZW51X2tleWRvd25fc3BhY2VfYnV0dG9uX18nIDogNjtcbnZhciBNZW51S2V5RG93bkNoYXJhY3RlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfa2V5ZG93bl9jaGFyYWN0ZXJfXycgOiA3O1xudmFyIE1lbnVCbHVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fbWVudV9ibHVyX18nIDogODtcbnZhciBNZW51TW91c2VMZWF2ZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfbW91c2VfbGVhdmVfXycgOiA5O1xudmFyIEl0ZW1Nb3VzZU1vdmUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX21vdXNlX21vdmVfXycgOiAxMDtcbnZhciBJdGVtQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX2NsaWNrX18nIDogMTE7XG52YXIgVG9nZ2xlQnV0dG9uQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX190b2dnbGVidXR0b25fY2xpY2tfXycgOiAxMjtcbnZhciBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDEzO1xudmFyIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd1VwID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fYXJyb3dfdXBfXycgOiAxNDtcbnZhciBUb2dnbGVCdXR0b25LZXlEb3duQ2hhcmFjdGVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fdG9nZ2xlYnV0dG9uX2tleWRvd25fY2hhcmFjdGVyX18nIDogMTU7XG52YXIgRnVuY3Rpb25Ub2dnbGVNZW51ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fdG9nZ2xlX21lbnVfXycgOiAxNjtcbnZhciBGdW5jdGlvbk9wZW5NZW51ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fb3Blbl9tZW51X18nIDogMTc7XG52YXIgRnVuY3Rpb25DbG9zZU1lbnUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9jbG9zZV9tZW51X18nIDogMTg7XG52YXIgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2hpZ2hsaWdodGVkX2luZGV4X18nIDogMTk7XG52YXIgRnVuY3Rpb25TZWxlY3RJdGVtID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2VsZWN0X2l0ZW1fXycgOiAyMDtcbnZhciBGdW5jdGlvblNldElucHV0VmFsdWUgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZXRfaW5wdXRfdmFsdWVfXycgOiAyMTtcbnZhciBGdW5jdGlvblJlc2V0ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fcmVzZXRfXycgOiAyMjtcblxudmFyIHN0YXRlQ2hhbmdlVHlwZXMkMSA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBNZW51S2V5RG93bkFycm93RG93bjogTWVudUtleURvd25BcnJvd0Rvd24sXG4gIE1lbnVLZXlEb3duQXJyb3dVcDogTWVudUtleURvd25BcnJvd1VwLFxuICBNZW51S2V5RG93bkVzY2FwZTogTWVudUtleURvd25Fc2NhcGUsXG4gIE1lbnVLZXlEb3duSG9tZTogTWVudUtleURvd25Ib21lLFxuICBNZW51S2V5RG93bkVuZDogTWVudUtleURvd25FbmQsXG4gIE1lbnVLZXlEb3duRW50ZXI6IE1lbnVLZXlEb3duRW50ZXIsXG4gIE1lbnVLZXlEb3duU3BhY2VCdXR0b246IE1lbnVLZXlEb3duU3BhY2VCdXR0b24sXG4gIE1lbnVLZXlEb3duQ2hhcmFjdGVyOiBNZW51S2V5RG93bkNoYXJhY3RlcixcbiAgTWVudUJsdXI6IE1lbnVCbHVyLFxuICBNZW51TW91c2VMZWF2ZTogTWVudU1vdXNlTGVhdmUsXG4gIEl0ZW1Nb3VzZU1vdmU6IEl0ZW1Nb3VzZU1vdmUsXG4gIEl0ZW1DbGljazogSXRlbUNsaWNrLFxuICBUb2dnbGVCdXR0b25DbGljazogVG9nZ2xlQnV0dG9uQ2xpY2ssXG4gIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd0Rvd246IFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd0Rvd24sXG4gIFRvZ2dsZUJ1dHRvbktleURvd25BcnJvd1VwOiBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dVcCxcbiAgVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcjogVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcixcbiAgRnVuY3Rpb25Ub2dnbGVNZW51OiBGdW5jdGlvblRvZ2dsZU1lbnUsXG4gIEZ1bmN0aW9uT3Blbk1lbnU6IEZ1bmN0aW9uT3Blbk1lbnUsXG4gIEZ1bmN0aW9uQ2xvc2VNZW51OiBGdW5jdGlvbkNsb3NlTWVudSxcbiAgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgsXG4gIEZ1bmN0aW9uU2VsZWN0SXRlbTogRnVuY3Rpb25TZWxlY3RJdGVtLFxuICBGdW5jdGlvblNldElucHV0VmFsdWU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSxcbiAgRnVuY3Rpb25SZXNldDogRnVuY3Rpb25SZXNldFxufSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cblxuZnVuY3Rpb24gZG93bnNoaWZ0U2VsZWN0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHNoaWZ0S2V5ID0gYWN0aW9uLnNoaWZ0S2V5O1xuICB2YXIgY2hhbmdlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEl0ZW1DbGljazpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1thY3Rpb24uaW5kZXhdXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFRvZ2dsZUJ1dHRvbktleURvd25DaGFyYWN0ZXI6XG4gICAgICB7XG4gICAgICAgIHZhciBsb3dlcmNhc2VkS2V5ID0gYWN0aW9uLmtleTtcbiAgICAgICAgdmFyIGlucHV0VmFsdWUgPSBcIlwiICsgc3RhdGUuaW5wdXRWYWx1ZSArIGxvd2VyY2FzZWRLZXk7XG4gICAgICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXhCeUNoYXJhY3RlcktleShpbnB1dFZhbHVlLCBzdGF0ZS5zZWxlY3RlZEl0ZW0gPyBwcm9wcy5pdGVtcy5pbmRleE9mKHN0YXRlLnNlbGVjdGVkSXRlbSkgOiAtMSwgcHJvcHMuaXRlbXMsIHByb3BzLml0ZW1Ub1N0cmluZywgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KTtcbiAgICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICAgIH0sIGl0ZW1JbmRleCA+PSAwICYmIHtcbiAgICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW2l0ZW1JbmRleF1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93RG93bjpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAxLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgpLFxuICAgICAgICBpc09wZW46IHRydWVcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93VXA6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXRIaWdobGlnaHRlZEluZGV4T25PcGVuKHByb3BzLCBzdGF0ZSwgLTEsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCksXG4gICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkVudGVyOlxuICAgIGNhc2UgTWVudUtleURvd25TcGFjZUJ1dHRvbjpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKVxuICAgICAgfSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25Ib21lOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkVuZDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldE5leHROb25EaXNhYmxlZEluZGV4KC0xLCBwcm9wcy5pdGVtcy5sZW5ndGggLSAxLCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgZmFsc2UpXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duRXNjYXBlOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUJsdXI6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBNZW51S2V5RG93bkNoYXJhY3RlcjpcbiAgICAgIHtcbiAgICAgICAgdmFyIF9sb3dlcmNhc2VkS2V5ID0gYWN0aW9uLmtleTtcblxuICAgICAgICB2YXIgX2lucHV0VmFsdWUgPSBcIlwiICsgc3RhdGUuaW5wdXRWYWx1ZSArIF9sb3dlcmNhc2VkS2V5O1xuXG4gICAgICAgIHZhciBoaWdobGlnaHRlZEluZGV4ID0gZ2V0SXRlbUluZGV4QnlDaGFyYWN0ZXJLZXkoX2lucHV0VmFsdWUsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLCBwcm9wcy5pdGVtVG9TdHJpbmcsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCk7XG4gICAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgaW5wdXRWYWx1ZTogX2lucHV0VmFsdWVcbiAgICAgICAgfSwgaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIE1lbnVLZXlEb3duQXJyb3dEb3duOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyA1IDogMSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIHByb3BzLmNpcmN1bGFyTmF2aWdhdGlvbilcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgTWVudUtleURvd25BcnJvd1VwOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyAtNSA6IC0xLCBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LCBwcm9wcy5pdGVtcy5sZW5ndGgsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCwgcHJvcHMuY2lyY3VsYXJOYXZpZ2F0aW9uKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBGdW5jdGlvblNlbGVjdEl0ZW06XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IGFjdGlvbi5zZWxlY3RlZEl0ZW1cbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZG93bnNoaWZ0Q29tbW9uUmVkdWNlcihzdGF0ZSwgYWN0aW9uLCBzdGF0ZUNoYW5nZVR5cGVzJDEpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgY2hhbmdlcyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cblxudXNlU2VsZWN0LnN0YXRlQ2hhbmdlVHlwZXMgPSBzdGF0ZUNoYW5nZVR5cGVzJDE7XG5cbmZ1bmN0aW9uIHVzZVNlbGVjdCh1c2VyUHJvcHMpIHtcbiAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgdXNlclByb3BzID0ge307XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyh1c2VyUHJvcHMsIHVzZVNlbGVjdCk7IC8vIFByb3BzIGRlZmF1bHRzIGFuZCBkZXN0cnVjdHVyaW5nLlxuXG4gIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMkMSwgdXNlclByb3BzKTtcblxuICB2YXIgaXRlbXMgPSBwcm9wcy5pdGVtcyxcbiAgICAgIHNjcm9sbEludG9WaWV3ID0gcHJvcHMuc2Nyb2xsSW50b1ZpZXcsXG4gICAgICBlbnZpcm9ubWVudCA9IHByb3BzLmVudmlyb25tZW50LFxuICAgICAgaW5pdGlhbElzT3BlbiA9IHByb3BzLmluaXRpYWxJc09wZW4sXG4gICAgICBkZWZhdWx0SXNPcGVuID0gcHJvcHMuZGVmYXVsdElzT3BlbixcbiAgICAgIGl0ZW1Ub1N0cmluZyA9IHByb3BzLml0ZW1Ub1N0cmluZyxcbiAgICAgIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlID0gcHJvcHMuZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UsXG4gICAgICBnZXRBMTF5U3RhdHVzTWVzc2FnZSA9IHByb3BzLmdldEExMXlTdGF0dXNNZXNzYWdlOyAvLyBJbml0aWFsIHN0YXRlIGRlcGVuZGluZyBvbiBjb250cm9sbGVkIHByb3BzLlxuXG4gIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZFJlZHVjZXIgPSB1c2VDb250cm9sbGVkUmVkdWNlcihkb3duc2hpZnRTZWxlY3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSxcbiAgICAgIHN0YXRlID0gX3VzZUNvbnRyb2xsZWRSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMV07XG5cbiAgdmFyIGlzT3BlbiA9IHN0YXRlLmlzT3BlbixcbiAgICAgIGhpZ2hsaWdodGVkSW5kZXggPSBzdGF0ZS5oaWdobGlnaHRlZEluZGV4LFxuICAgICAgc2VsZWN0ZWRJdGVtID0gc3RhdGUuc2VsZWN0ZWRJdGVtLFxuICAgICAgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWU7IC8vIEVsZW1lbnQgZWZzLlxuXG4gIHZhciB0b2dnbGVCdXR0b25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBtZW51UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXRlbVJlZnMgPSB1c2VSZWYoe30pOyAvLyB1c2VkIG5vdCB0byB0cmlnZ2VyIG1lbnUgYmx1ciBhY3Rpb24gaW4gc29tZSBzY2VuYXJpb3MuXG5cbiAgdmFyIHNob3VsZEJsdXJSZWYgPSB1c2VSZWYodHJ1ZSk7IC8vIHVzZWQgdG8ga2VlcCB0aGUgaW5wdXRWYWx1ZSBjbGVhclRpbWVvdXQgb2JqZWN0IGJldHdlZW4gcmVuZGVycy5cblxuICB2YXIgY2xlYXJUaW1lb3V0UmVmID0gdXNlUmVmKG51bGwpOyAvLyBwcmV2ZW50IGlkIHJlLWdlbmVyYXRpb24gYmV0d2VlbiByZW5kZXJzLlxuXG4gIHZhciBlbGVtZW50SWRzID0gdXNlRWxlbWVudElkcyhwcm9wcyk7IC8vIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBob3cgbWFueSBpdGVtcyB3ZSBoYWQgb24gcHJldmlvdXMgY3ljbGUuXG5cbiAgdmFyIHByZXZpb3VzUmVzdWx0Q291bnRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGlzSW5pdGlhbE1vdW50UmVmID0gdXNlUmVmKHRydWUpOyAvLyB1dGlsaXR5IGNhbGxiYWNrIHRvIGdldCBpdGVtIGVsZW1lbnQuXG5cbiAgdmFyIGxhdGVzdCA9IHVzZUxhdGVzdFJlZih7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KTsgLy8gU29tZSB1dGlscy5cblxuICB2YXIgZ2V0SXRlbU5vZGVGcm9tSW5kZXggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gaXRlbVJlZnMuY3VycmVudFtlbGVtZW50SWRzLmdldEl0ZW1JZChpbmRleCldO1xuICB9LCBbZWxlbWVudElkc10pOyAvLyBFZmZlY3RzLlxuICAvLyBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzdGF0ZS5cblxuICB1c2VBMTF5TWVzc2FnZVNldHRlcihnZXRBMTF5U3RhdHVzTWVzc2FnZSwgW2lzT3BlbiwgaGlnaGxpZ2h0ZWRJbmRleCwgaW5wdXRWYWx1ZSwgaXRlbXNdLCBfZXh0ZW5kcyh7XG4gICAgaXNJbml0aWFsTW91bnQ6IGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQsXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudDogcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50LFxuICAgIGl0ZW1zOiBpdGVtcyxcbiAgICBlbnZpcm9ubWVudDogZW52aXJvbm1lbnQsXG4gICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmdcbiAgfSwgc3RhdGUpKTsgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc2VsZWN0ZWRJdGVtLlxuXG4gIHVzZUExMXlNZXNzYWdlU2V0dGVyKGdldEExMXlTZWxlY3Rpb25NZXNzYWdlLCBbc2VsZWN0ZWRJdGVtXSwgX2V4dGVuZHMoe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCxcbiAgICBpdGVtczogaXRlbXMsXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LFxuICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nXG4gIH0sIHN0YXRlKSk7IC8vIFNjcm9sbCBvbiBoaWdobGlnaHRlZCBpdGVtIGlmIGNoYW5nZSBjb21lcyBmcm9tIGtleWJvYXJkLlxuXG4gIHZhciBzaG91bGRTY3JvbGxSZWYgPSB1c2VTY3JvbGxJbnRvVmlldyh7XG4gICAgbWVudUVsZW1lbnQ6IG1lbnVSZWYuY3VycmVudCxcbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIGl0ZW1SZWZzOiBpdGVtUmVmcyxcbiAgICBzY3JvbGxJbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG4gICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gIH0pOyAvLyBTZXRzIGNsZWFudXAgZm9yIHRoZSBrZXlzU29GYXIgYWZ0ZXIgNTAwbXMuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpbml0IHRoZSBjbGVhbiBmdW5jdGlvbiBoZXJlIGFzIHdlIG5lZWQgYWNjZXNzIHRvIGRpc3BhdGNoLlxuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICBjbGVhclRpbWVvdXRSZWYuY3VycmVudCA9IGRlYm91bmNlKGZ1bmN0aW9uIChvdXRlckRpc3BhdGNoKSB7XG4gICAgICAgIG91dGVyRGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSxcbiAgICAgICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0UmVmLmN1cnJlbnQoZGlzcGF0Y2gpO1xuICB9LCBbZGlzcGF0Y2gsIGlucHV0VmFsdWVdKTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuICAvKiBDb250cm9scyB0aGUgZm9jdXMgb24gdGhlIG1lbnUgb3IgdGhlIHRvZ2dsZSBidXR0b24uICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBEb24ndCBmb2N1cyBtZW51IG9uIGZpcnN0IHJlbmRlci5cbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgLy8gVW5sZXNzIGl0IHdhcyBpbml0aWFsaXNlZCBhcyBvcGVuLlxuICAgICAgaWYgKChpbml0aWFsSXNPcGVuIHx8IGRlZmF1bHRJc09wZW4gfHwgaXNPcGVuKSAmJiBtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVudVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZvY3VzIG1lbnUgb24gb3Blbi5cblxuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgLy8gaXN0YW5idWwgaWdub3JlIGVsc2VcbiAgICAgIGlmIChtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgbWVudVJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZvY3VzIHRvZ2dsZUJ1dHRvbiBvbiBjbG9zZSwgYnV0IG5vdCBpZiBpdCB3YXMgY2xvc2VkIHdpdGggKFNoaWZ0KylUYWIuXG5cblxuICAgIGlmIChlbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBtZW51UmVmLmN1cnJlbnQpIHtcbiAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlXG4gICAgICBpZiAodG9nZ2xlQnV0dG9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgc2hvdWxkQmx1clJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHRvZ2dsZUJ1dHRvblJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW2lzT3Blbl0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50ID0gaXRlbXMubGVuZ3RoO1xuICB9KTsgLy8gQWRkIG1vdXNlL3RvdWNoIGV2ZW50cyB0byBkb2N1bWVudC5cblxuICB2YXIgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmID0gdXNlTW91c2VBbmRUb3VjaFRyYWNrZXIoaXNPcGVuLCBbbWVudVJlZiwgdG9nZ2xlQnV0dG9uUmVmXSwgZW52aXJvbm1lbnQsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBNZW51Qmx1clxuICAgIH0pO1xuICB9KTtcbiAgdmFyIHNldEdldHRlclByb3BDYWxsSW5mbyA9IHVzZUdldHRlclByb3BzQ2FsbGVkQ2hlY2tlcignZ2V0TWVudVByb3BzJywgJ2dldFRvZ2dsZUJ1dHRvblByb3BzJyk7IC8vIE1ha2UgaW5pdGlhbCByZWYgZmFsc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTsgLy8gUmVzZXQgaXRlbVJlZnMgb24gY2xvc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgaXRlbVJlZnMuY3VycmVudCA9IHt9O1xuICAgIH1cbiAgfSwgW2lzT3Blbl0pOyAvLyBFdmVudCBoYW5kbGVyIGZ1bmN0aW9ucy5cblxuICB2YXIgdG9nZ2xlQnV0dG9uS2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBUb2dnbGVCdXR0b25LZXlEb3duQXJyb3dEb3duLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleCxcbiAgICAgICAgICBzaGlmdEtleTogZXZlbnQuc2hpZnRLZXlcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgQXJyb3dVcDogZnVuY3Rpb24gQXJyb3dVcChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uS2V5RG93bkFycm93VXAsXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4LFxuICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbZGlzcGF0Y2gsIGdldEl0ZW1Ob2RlRnJvbUluZGV4XSk7XG4gIHZhciBtZW51S2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBNZW51S2V5RG93bkFycm93RG93bixcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEFycm93VXA6IGZ1bmN0aW9uIEFycm93VXAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duQXJyb3dVcCxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXgsXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEhvbWU6IGZ1bmN0aW9uIEhvbWUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duSG9tZSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgRW5kOiBmdW5jdGlvbiBFbmQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duRW5kLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFc2NhcGU6IGZ1bmN0aW9uIEVzY2FwZSgpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duRXNjYXBlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEVudGVyOiBmdW5jdGlvbiBFbnRlcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25FbnRlclxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAnICc6IGZ1bmN0aW9uIF8oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVLZXlEb3duU3BhY2VCdXR0b25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW2Rpc3BhdGNoLCBnZXRJdGVtTm9kZUZyb21JbmRleF0pOyAvLyBBY3Rpb24gZnVuY3Rpb25zLlxuXG4gIHZhciB0b2dnbGVNZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uVG9nZ2xlTWVudVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIGNsb3NlTWVudSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvbkNsb3NlTWVudVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIG9wZW5NZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uT3Blbk1lbnVcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRIaWdobGlnaHRlZEluZGV4ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0hpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICBoaWdobGlnaHRlZEluZGV4OiBuZXdIaWdobGlnaHRlZEluZGV4XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgc2VsZWN0SXRlbSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChuZXdTZWxlY3RlZEl0ZW0pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNlbGVjdEl0ZW0sXG4gICAgICBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uUmVzZXRcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRJbnB1dFZhbHVlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld0lucHV0VmFsdWUpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldElucHV0VmFsdWUsXG4gICAgICBpbnB1dFZhbHVlOiBuZXdJbnB1dFZhbHVlXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pOyAvLyBHZXR0ZXIgZnVuY3Rpb25zLlxuXG4gIHZhciBnZXRMYWJlbFByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGxhYmVsUHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgaWQ6IGVsZW1lbnRJZHMubGFiZWxJZCxcbiAgICAgIGh0bWxGb3I6IGVsZW1lbnRJZHMudG9nZ2xlQnV0dG9uSWRcbiAgICB9LCBsYWJlbFByb3BzKTtcbiAgfSwgW2VsZW1lbnRJZHNdKTtcbiAgdmFyIGdldE1lbnVQcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcCwgX3RlbXAyKSB7XG4gICAgdmFyIF9leHRlbmRzMjtcblxuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIG9uTW91c2VMZWF2ZSA9IF9yZWYub25Nb3VzZUxlYXZlLFxuICAgICAgICBfcmVmJHJlZktleSA9IF9yZWYucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmJHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmJHJlZktleSxcbiAgICAgICAgb25LZXlEb3duID0gX3JlZi5vbktleURvd24sXG4gICAgICAgIG9uQmx1ciA9IF9yZWYub25CbHVyLFxuICAgICAgICByZWYgPSBfcmVmLnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcIm9uTW91c2VMZWF2ZVwiLCBcInJlZktleVwiLCBcIm9uS2V5RG93blwiLCBcIm9uQmx1clwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjIgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgICBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPSBfcmVmMi5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjIkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYyJHN1cHByZXNzUmVmRXJybztcblxuICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuXG4gICAgdmFyIG1lbnVIYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gbWVudUhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgIGlmIChrZXkgJiYgbWVudUtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgIG1lbnVLZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogTWVudUtleURvd25DaGFyYWN0ZXIsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbWVudUhhbmRsZUJsdXIgPSBmdW5jdGlvbiBtZW51SGFuZGxlQmx1cigpIHtcbiAgICAgIC8vIGlmIHRoZSBibHVyIHdhcyBhIHJlc3VsdCBvZiBzZWxlY3Rpb24sIHdlIGRvbid0IHRyaWdnZXIgdGhpcyBhY3Rpb24uXG4gICAgICBpZiAoc2hvdWxkQmx1clJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xuICAgICAgICBzaG91bGRCbHVyUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzaG91bGRCbHVyID0gIW1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZi5jdXJyZW50LmlzTW91c2VEb3duO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgICAgaWYgKHNob3VsZEJsdXIpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IE1lbnVCbHVyXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbWVudUhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiBtZW51SGFuZGxlTW91c2VMZWF2ZSgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogTWVudU1vdXNlTGVhdmVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8oJ2dldE1lbnVQcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgbWVudVJlZik7XG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKG1lbnVOb2RlKSB7XG4gICAgICBtZW51UmVmLmN1cnJlbnQgPSBtZW51Tm9kZTtcbiAgICB9KSwgX2V4dGVuZHMyLmlkID0gZWxlbWVudElkcy5tZW51SWQsIF9leHRlbmRzMi5yb2xlID0gJ2xpc3Rib3gnLCBfZXh0ZW5kczJbJ2FyaWEtbGFiZWxsZWRieSddID0gZWxlbWVudElkcy5sYWJlbElkLCBfZXh0ZW5kczIudGFiSW5kZXggPSAtMSwgX2V4dGVuZHMyKSwgbGF0ZXN0U3RhdGUuaXNPcGVuICYmIGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXggPiAtMSAmJiB7XG4gICAgICAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JzogZWxlbWVudElkcy5nZXRJdGVtSWQobGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleClcbiAgICB9LCB7XG4gICAgICBvbk1vdXNlTGVhdmU6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VMZWF2ZSwgbWVudUhhbmRsZU1vdXNlTGVhdmUpLFxuICAgICAgb25LZXlEb3duOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIG1lbnVIYW5kbGVLZXlEb3duKSxcbiAgICAgIG9uQmx1cjogY2FsbEFsbEV2ZW50SGFuZGxlcnMob25CbHVyLCBtZW51SGFuZGxlQmx1cilcbiAgICB9LCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3QsIG1lbnVLZXlEb3duSGFuZGxlcnMsIG1vdXNlQW5kVG91Y2hUcmFja2Vyc1JlZiwgc2V0R2V0dGVyUHJvcENhbGxJbmZvLCBlbGVtZW50SWRzLCBnZXRJdGVtTm9kZUZyb21JbmRleF0pO1xuICB2YXIgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAzLCBfdGVtcDQpIHtcbiAgICB2YXIgX2V4dGVuZHMzO1xuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgb25DbGljayA9IF9yZWYzLm9uQ2xpY2ssXG4gICAgICAgIG9uS2V5RG93biA9IF9yZWYzLm9uS2V5RG93bixcbiAgICAgICAgX3JlZjMkcmVmS2V5ID0gX3JlZjMucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmMyRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjMkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmMy5yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wib25DbGlja1wiLCBcIm9uS2V5RG93blwiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjQgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICBfcmVmNCRzdXBwcmVzc1JlZkVycm8gPSBfcmVmNC5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjQkc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY0JHN1cHByZXNzUmVmRXJybztcblxuICAgIHZhciB0b2dnbGVCdXR0b25IYW5kbGVDbGljayA9IGZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBUb2dnbGVCdXR0b25DbGlja1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB0b2dnbGVCdXR0b25IYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gdG9nZ2xlQnV0dG9uSGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgaWYgKGtleSAmJiB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnNba2V5XShldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzQWNjZXB0ZWRDaGFyYWN0ZXJLZXkoa2V5KSkge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogVG9nZ2xlQnV0dG9uS2V5RG93bkNoYXJhY3RlcixcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB0b2dnbGVQcm9wcyA9IF9leHRlbmRzKChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKHRvZ2dsZUJ1dHRvbk5vZGUpIHtcbiAgICAgIHRvZ2dsZUJ1dHRvblJlZi5jdXJyZW50ID0gdG9nZ2xlQnV0dG9uTm9kZTtcbiAgICB9KSwgX2V4dGVuZHMzLmlkID0gZWxlbWVudElkcy50b2dnbGVCdXR0b25JZCwgX2V4dGVuZHMzWydhcmlhLWhhc3BvcHVwJ10gPSAnbGlzdGJveCcsIF9leHRlbmRzM1snYXJpYS1leHBhbmRlZCddID0gbGF0ZXN0LmN1cnJlbnQuc3RhdGUuaXNPcGVuLCBfZXh0ZW5kczNbJ2FyaWEtbGFiZWxsZWRieSddID0gZWxlbWVudElkcy5sYWJlbElkICsgXCIgXCIgKyBlbGVtZW50SWRzLnRvZ2dsZUJ1dHRvbklkLCBfZXh0ZW5kczMpLCByZXN0KTtcblxuICAgIGlmICghcmVzdC5kaXNhYmxlZCkge1xuICAgICAgdG9nZ2xlUHJvcHMub25DbGljayA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKTtcbiAgICAgIHRvZ2dsZVByb3BzLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgdG9nZ2xlQnV0dG9uSGFuZGxlS2V5RG93bik7XG4gICAgfVxuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRUb2dnbGVCdXR0b25Qcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgdG9nZ2xlQnV0dG9uUmVmKTtcbiAgICByZXR1cm4gdG9nZ2xlUHJvcHM7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCB0b2dnbGVCdXR0b25LZXlEb3duSGFuZGxlcnMsIHNldEdldHRlclByb3BDYWxsSW5mbywgZWxlbWVudElkcywgZ2V0SXRlbU5vZGVGcm9tSW5kZXhdKTtcbiAgdmFyIGdldEl0ZW1Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDUpIHtcbiAgICB2YXIgX2V4dGVuZHM0O1xuXG4gICAgdmFyIF9yZWY1ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgaXRlbSA9IF9yZWY1Lml0ZW0sXG4gICAgICAgIGluZGV4ID0gX3JlZjUuaW5kZXgsXG4gICAgICAgIG9uTW91c2VNb3ZlID0gX3JlZjUub25Nb3VzZU1vdmUsXG4gICAgICAgIG9uQ2xpY2sgPSBfcmVmNS5vbkNsaWNrLFxuICAgICAgICBfcmVmNSRyZWZLZXkgPSBfcmVmNS5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWY1JHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmNSRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWY1LnJlZixcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY1LCBbXCJpdGVtXCIsIFwiaW5kZXhcIiwgXCJvbk1vdXNlTW92ZVwiLCBcIm9uQ2xpY2tcIiwgXCJyZWZLZXlcIiwgXCJyZWZcIl0pO1xuXG4gICAgdmFyIF9sYXRlc3QkY3VycmVudCA9IGxhdGVzdC5jdXJyZW50LFxuICAgICAgICBsYXRlc3RTdGF0ZSA9IF9sYXRlc3QkY3VycmVudC5zdGF0ZSxcbiAgICAgICAgbGF0ZXN0UHJvcHMgPSBfbGF0ZXN0JGN1cnJlbnQucHJvcHM7XG5cbiAgICB2YXIgaXRlbUhhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uIGl0ZW1IYW5kbGVNb3VzZU1vdmUoKSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG91bGRTY3JvbGxSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJdGVtTW91c2VNb3ZlLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgaXRlbUhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaXRlbUhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJdGVtQ2xpY2ssXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXgoaW5kZXgsIGl0ZW0sIGxhdGVzdFByb3BzLml0ZW1zKTtcblxuICAgIGlmIChpdGVtSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3MgZWl0aGVyIGl0ZW0gb3IgaXRlbSBpbmRleCBpbiBnZXRJdGVtUHJvcHMhJyk7XG4gICAgfVxuXG4gICAgdmFyIGl0ZW1Qcm9wcyA9IF9leHRlbmRzKChfZXh0ZW5kczQgPSB7XG4gICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogXCJcIiArIChpdGVtSW5kZXggPT09IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpLFxuICAgICAgaWQ6IGVsZW1lbnRJZHMuZ2V0SXRlbUlkKGl0ZW1JbmRleClcbiAgICB9LCBfZXh0ZW5kczRbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoaXRlbU5vZGUpIHtcbiAgICAgIGlmIChpdGVtTm9kZSkge1xuICAgICAgICBpdGVtUmVmcy5jdXJyZW50W2VsZW1lbnRJZHMuZ2V0SXRlbUlkKGl0ZW1JbmRleCldID0gaXRlbU5vZGU7XG4gICAgICB9XG4gICAgfSksIF9leHRlbmRzNCksIHJlc3QpO1xuXG4gICAgaWYgKCFyZXN0LmRpc2FibGVkKSB7XG4gICAgICBpdGVtUHJvcHMub25Nb3VzZU1vdmUgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTW92ZSwgaXRlbUhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICBpdGVtUHJvcHMub25DbGljayA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGl0ZW1IYW5kbGVDbGljayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW1Qcm9wcztcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3QsIHNob3VsZFNjcm9sbFJlZiwgZWxlbWVudElkc10pO1xuICByZXR1cm4ge1xuICAgIC8vIHByb3AgZ2V0dGVycy5cbiAgICBnZXRUb2dnbGVCdXR0b25Qcm9wczogZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHM6IGdldE1lbnVQcm9wcyxcbiAgICBnZXRJdGVtUHJvcHM6IGdldEl0ZW1Qcm9wcyxcbiAgICAvLyBhY3Rpb25zLlxuICAgIHRvZ2dsZU1lbnU6IHRvZ2dsZU1lbnUsXG4gICAgb3Blbk1lbnU6IG9wZW5NZW51LFxuICAgIGNsb3NlTWVudTogY2xvc2VNZW51LFxuICAgIHNldEhpZ2hsaWdodGVkSW5kZXg6IHNldEhpZ2hsaWdodGVkSW5kZXgsXG4gICAgc2VsZWN0SXRlbTogc2VsZWN0SXRlbSxcbiAgICByZXNldDogcmVzZXQsXG4gICAgc2V0SW5wdXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICAvLyBzdGF0ZS5cbiAgICBoaWdobGlnaHRlZEluZGV4OiBoaWdobGlnaHRlZEluZGV4LFxuICAgIGlzT3BlbjogaXNPcGVuLFxuICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtLFxuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfTtcbn1cblxudmFyIElucHV0S2V5RG93bkFycm93RG93biA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fYXJyb3dfZG93bl9fJyA6IDA7XG52YXIgSW5wdXRLZXlEb3duQXJyb3dVcCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fYXJyb3dfdXBfXycgOiAxO1xudmFyIElucHV0S2V5RG93bkVzY2FwZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2tleWRvd25fZXNjYXBlX18nIDogMjtcbnZhciBJbnB1dEtleURvd25Ib21lID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfa2V5ZG93bl9ob21lX18nIDogMztcbnZhciBJbnB1dEtleURvd25FbmQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9rZXlkb3duX2VuZF9fJyA6IDQ7XG52YXIgSW5wdXRLZXlEb3duRW50ZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pbnB1dF9rZXlkb3duX2VudGVyX18nIDogNTtcbnZhciBJbnB1dENoYW5nZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2lucHV0X2NoYW5nZV9fJyA6IDY7XG52YXIgSW5wdXRCbHVyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19faW5wdXRfYmx1cl9fJyA6IDc7XG52YXIgTWVudU1vdXNlTGVhdmUkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX21lbnVfbW91c2VfbGVhdmVfXycgOiA4O1xudmFyIEl0ZW1Nb3VzZU1vdmUkMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2l0ZW1fbW91c2VfbW92ZV9fJyA6IDk7XG52YXIgSXRlbUNsaWNrJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19pdGVtX2NsaWNrX18nIDogMTA7XG52YXIgVG9nZ2xlQnV0dG9uQ2xpY2skMSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3RvZ2dsZWJ1dHRvbl9jbGlja19fJyA6IDExO1xudmFyIEZ1bmN0aW9uVG9nZ2xlTWVudSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fdG9nZ2xlX21lbnVfXycgOiAxMjtcbnZhciBGdW5jdGlvbk9wZW5NZW51JDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9vcGVuX21lbnVfXycgOiAxMztcbnZhciBGdW5jdGlvbkNsb3NlTWVudSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fY2xvc2VfbWVudV9fJyA6IDE0O1xudmFyIEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2hpZ2hsaWdodGVkX2luZGV4X18nIDogMTU7XG52YXIgRnVuY3Rpb25TZWxlY3RJdGVtJDEgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9zZWxlY3RfaXRlbV9fJyA6IDE2O1xudmFyIEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X2lucHV0X3ZhbHVlX18nIDogMTc7XG52YXIgRnVuY3Rpb25SZXNldCQxID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fcmVzZXRfXycgOiAxODtcbnZhciBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19jb250cm9sbGVkX3Byb3BfdXBkYXRlZF9zZWxlY3RlZF9pdGVtX18nIDogMTk7XG5cbnZhciBzdGF0ZUNoYW5nZVR5cGVzJDIgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgSW5wdXRLZXlEb3duQXJyb3dEb3duOiBJbnB1dEtleURvd25BcnJvd0Rvd24sXG4gIElucHV0S2V5RG93bkFycm93VXA6IElucHV0S2V5RG93bkFycm93VXAsXG4gIElucHV0S2V5RG93bkVzY2FwZTogSW5wdXRLZXlEb3duRXNjYXBlLFxuICBJbnB1dEtleURvd25Ib21lOiBJbnB1dEtleURvd25Ib21lLFxuICBJbnB1dEtleURvd25FbmQ6IElucHV0S2V5RG93bkVuZCxcbiAgSW5wdXRLZXlEb3duRW50ZXI6IElucHV0S2V5RG93bkVudGVyLFxuICBJbnB1dENoYW5nZTogSW5wdXRDaGFuZ2UsXG4gIElucHV0Qmx1cjogSW5wdXRCbHVyLFxuICBNZW51TW91c2VMZWF2ZTogTWVudU1vdXNlTGVhdmUkMSxcbiAgSXRlbU1vdXNlTW92ZTogSXRlbU1vdXNlTW92ZSQxLFxuICBJdGVtQ2xpY2s6IEl0ZW1DbGljayQxLFxuICBUb2dnbGVCdXR0b25DbGljazogVG9nZ2xlQnV0dG9uQ2xpY2skMSxcbiAgRnVuY3Rpb25Ub2dnbGVNZW51OiBGdW5jdGlvblRvZ2dsZU1lbnUkMSxcbiAgRnVuY3Rpb25PcGVuTWVudTogRnVuY3Rpb25PcGVuTWVudSQxLFxuICBGdW5jdGlvbkNsb3NlTWVudTogRnVuY3Rpb25DbG9zZU1lbnUkMSxcbiAgRnVuY3Rpb25TZXRIaWdobGlnaHRlZEluZGV4OiBGdW5jdGlvblNldEhpZ2hsaWdodGVkSW5kZXgkMSxcbiAgRnVuY3Rpb25TZWxlY3RJdGVtOiBGdW5jdGlvblNlbGVjdEl0ZW0kMSxcbiAgRnVuY3Rpb25TZXRJbnB1dFZhbHVlOiBGdW5jdGlvblNldElucHV0VmFsdWUkMSxcbiAgRnVuY3Rpb25SZXNldDogRnVuY3Rpb25SZXNldCQxLFxuICBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW06IENvbnRyb2xsZWRQcm9wVXBkYXRlZFNlbGVjdGVkSXRlbVxufSk7XG5cbmZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSQxKHByb3BzKSB7XG4gIHZhciBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUocHJvcHMpO1xuICB2YXIgc2VsZWN0ZWRJdGVtID0gaW5pdGlhbFN0YXRlLnNlbGVjdGVkSXRlbTtcbiAgdmFyIGlucHV0VmFsdWUgPSBpbml0aWFsU3RhdGUuaW5wdXRWYWx1ZTtcblxuICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycgJiYgc2VsZWN0ZWRJdGVtICYmIHByb3BzLmRlZmF1bHRJbnB1dFZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvcHMuaW5pdGlhbElucHV0VmFsdWUgPT09IHVuZGVmaW5lZCAmJiBwcm9wcy5pbnB1dFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpbnB1dFZhbHVlID0gcHJvcHMuaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGluaXRpYWxTdGF0ZSwge1xuICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWVcbiAgfSk7XG59XG5cbnZhciBwcm9wVHlwZXMkMSA9IHtcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRBMTF5U3RhdHVzTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEExMXlTZWxlY3Rpb25NZXNzYWdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2lyY3VsYXJOYXZpZ2F0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlnaGxpZ2h0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVmYXVsdEhpZ2hsaWdodGVkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluaXRpYWxIaWdobGlnaHRlZEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0SXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgaW5pdGlhbElzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcbiAgaW5pdGlhbFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcbiAgZGVmYXVsdFNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcbiAgaW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdElucHV0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGluaXRpYWxJbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxJZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWVudUlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZXRJdGVtSWQ6IFByb3BUeXBlcy5mdW5jLFxuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVCdXR0b25JZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhdGVSZWR1Y2VyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3RlZEl0ZW1DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkhpZ2hsaWdodGVkSW5kZXhDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblN0YXRlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Jc09wZW5DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbklucHV0VmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBlbnZpcm9ubWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhZGRFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkb2N1bWVudDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGdldEVsZW1lbnRCeUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGFjdGl2ZUVsZW1lbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgICBib2R5OiBQcm9wVHlwZXMuYW55XG4gICAgfSlcbiAgfSlcbn07XG4vKipcbiAqIFRoZSB1c2VDb21ib2JveCB2ZXJzaW9uIG9mIHVzZUNvbnRyb2xsZWRSZWR1Y2VyLCB3aGljaCBhbHNvXG4gKiBjaGVja3MgaWYgdGhlIGNvbnRyb2xsZWQgcHJvcCBzZWxlY3RlZEl0ZW0gY2hhbmdlZCBiZXR3ZWVuXG4gKiByZW5kZXJzLiBJZiBzbywgaXQgd2lsbCBhbHNvIHVwZGF0ZSBpbnB1dFZhbHVlIHdpdGggaXRzXG4gKiBzdHJpbmcgZXF1aXZhbGVudC4gSXQgdXNlcyB0aGUgY29tbW9uIHVzZUVuaGFuY2VkUmVkdWNlciB0b1xuICogY29tcHV0ZSB0aGUgcmVzdCBvZiB0aGUgc3RhdGUuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBSZWR1Y2VyIGZ1bmN0aW9uIGZyb20gZG93bnNoaWZ0LlxuICogQHBhcmFtIHtPYmplY3R9IGluaXRpYWxTdGF0ZSBJbml0aWFsIHN0YXRlIG9mIHRoZSBob29rLlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFRoZSBob29rIHByb3BzLlxuICogQHJldHVybnMge0FycmF5fSBBbiBhcnJheSB3aXRoIHRoZSBzdGF0ZSBhbmQgYW4gYWN0aW9uIGRpc3BhdGNoZXIuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29udHJvbGxlZFJlZHVjZXIkMShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIHByb3BzKSB7XG4gIHZhciBwcmV2aW91c1NlbGVjdGVkSXRlbVJlZiA9IHVzZVJlZigpO1xuXG4gIHZhciBfdXNlRW5oYW5jZWRSZWR1Y2VyID0gdXNlRW5oYW5jZWRSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgcHJvcHMpLFxuICAgICAgc3RhdGUgPSBfdXNlRW5oYW5jZWRSZWR1Y2VyWzBdLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlRW5oYW5jZWRSZWR1Y2VyWzFdOyAvLyBUb0RvOiBpZiBuZWVkZWQsIG1ha2Ugc2FtZSBhcHByb2FjaCBhcyBzZWxlY3RlZEl0ZW1DaGFuZ2VkIGZyb20gRG93bnNoaWZ0LlxuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNDb250cm9sbGVkUHJvcChwcm9wcywgJ3NlbGVjdGVkSXRlbScpKSB7XG4gICAgICBpZiAocHJldmlvdXNTZWxlY3RlZEl0ZW1SZWYuY3VycmVudCAhPT0gcHJvcHMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuaXRlbVRvU3RyaW5nKHByb3BzLnNlbGVjdGVkSXRlbSlcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzU2VsZWN0ZWRJdGVtUmVmLmN1cnJlbnQgPSBzdGF0ZS5zZWxlY3RlZEl0ZW0gPT09IHByZXZpb3VzU2VsZWN0ZWRJdGVtUmVmLmN1cnJlbnQgPyBwcm9wcy5zZWxlY3RlZEl0ZW0gOiBzdGF0ZS5zZWxlY3RlZEl0ZW07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtnZXRTdGF0ZShzdGF0ZSwgcHJvcHMpLCBkaXNwYXRjaF07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5cblxudmFyIHZhbGlkYXRlUHJvcFR5cGVzJDEgPSBub29wO1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVQcm9wVHlwZXMkMSA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKG9wdGlvbnMsIGNhbGxlcikge1xuICAgIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMkMSwgb3B0aW9ucywgJ3Byb3AnLCBjYWxsZXIubmFtZSk7XG4gIH07XG59XG5cbnZhciBkZWZhdWx0UHJvcHMkMiA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgZ2V0QTExeVN0YXR1c01lc3NhZ2U6IGdldEExMXlTdGF0dXNNZXNzYWdlLFxuICBjaXJjdWxhck5hdmlnYXRpb246IHRydWVcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdFVzZUNvbWJvYm94UmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBwcm9wcyA9IGFjdGlvbi5wcm9wcyxcbiAgICAgIHNoaWZ0S2V5ID0gYWN0aW9uLnNoaWZ0S2V5O1xuICB2YXIgY2hhbmdlcztcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEl0ZW1DbGljayQxOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaXNPcGVuOiBnZXREZWZhdWx0VmFsdWUocHJvcHMsICdpc09wZW4nKSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaGlnaGxpZ2h0ZWRJbmRleCcpLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IHByb3BzLml0ZW1zW2FjdGlvbi5pbmRleF0sXG4gICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhwcm9wcy5pdGVtc1thY3Rpb24uaW5kZXhdKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25BcnJvd0Rvd246XG4gICAgICBpZiAoc3RhdGUuaXNPcGVuKSB7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dFdyYXBwaW5nSW5kZXgoc2hpZnRLZXkgPyA1IDogMSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIHByb3BzLmNpcmN1bGFyTmF2aWdhdGlvbilcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0SGlnaGxpZ2h0ZWRJbmRleE9uT3Blbihwcm9wcywgc3RhdGUsIDEsIGFjdGlvbi5nZXRJdGVtTm9kZUZyb21JbmRleCksXG4gICAgICAgICAgaXNPcGVuOiBwcm9wcy5pdGVtcy5sZW5ndGggPj0gMFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duQXJyb3dVcDpcbiAgICAgIGlmIChzdGF0ZS5pc09wZW4pIHtcbiAgICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0V3JhcHBpbmdJbmRleChzaGlmdEtleSA/IC01IDogLTEsIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXgsIHByb3BzLml0ZW1zLmxlbmd0aCwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4LCBwcm9wcy5jaXJjdWxhck5hdmlnYXRpb24pXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldEhpZ2hsaWdodGVkSW5kZXhPbk9wZW4ocHJvcHMsIHN0YXRlLCAtMSwgYWN0aW9uLmdldEl0ZW1Ob2RlRnJvbUluZGV4KSxcbiAgICAgICAgICBpc09wZW46IHByb3BzLml0ZW1zLmxlbmd0aCA+PSAwXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25FbnRlcjpcbiAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7fSwgc3RhdGUuaXNPcGVuICYmIHN0YXRlLmhpZ2hsaWdodGVkSW5kZXggPj0gMCAmJiB7XG4gICAgICAgIHNlbGVjdGVkSXRlbTogcHJvcHMuaXRlbXNbc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleF0sXG4gICAgICAgIGlzT3BlbjogZ2V0RGVmYXVsdFZhbHVlKHByb3BzLCAnaXNPcGVuJyksXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuaXRlbVRvU3RyaW5nKHByb3BzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRLZXlEb3duRXNjYXBlOlxuICAgICAgY2hhbmdlcyA9IF9leHRlbmRzKHtcbiAgICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogLTFcbiAgICAgIH0sICFzdGF0ZS5pc09wZW4gJiYge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgIGlucHV0VmFsdWU6ICcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25Ib21lOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogZ2V0TmV4dE5vbkRpc2FibGVkSW5kZXgoMSwgMCwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEtleURvd25FbmQ6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBnZXROZXh0Tm9uRGlzYWJsZWRJbmRleCgtMSwgcHJvcHMuaXRlbXMubGVuZ3RoIC0gMSwgcHJvcHMuaXRlbXMubGVuZ3RoLCBhY3Rpb24uZ2V0SXRlbU5vZGVGcm9tSW5kZXgsIGZhbHNlKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBJbnB1dEJsdXI6XG4gICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICBpc09wZW46IGZhbHNlLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiAtMVxuICAgICAgfSwgc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA+PSAwICYmIGFjdGlvbi5zZWxlY3RJdGVtICYmIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBwcm9wcy5pdGVtc1tzdGF0ZS5oaWdobGlnaHRlZEluZGV4XSxcbiAgICAgICAgaW5wdXRWYWx1ZTogcHJvcHMuaXRlbVRvU3RyaW5nKHByb3BzLml0ZW1zW3N0YXRlLmhpZ2hsaWdodGVkSW5kZXhdKVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgSW5wdXRDaGFuZ2U6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpc09wZW46IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGdldERlZmF1bHRWYWx1ZShwcm9wcywgJ2hpZ2hsaWdodGVkSW5kZXgnKSxcbiAgICAgICAgaW5wdXRWYWx1ZTogYWN0aW9uLmlucHV0VmFsdWVcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25TZWxlY3RJdGVtJDE6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW06IGFjdGlvbi5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIGlucHV0VmFsdWU6IHByb3BzLml0ZW1Ub1N0cmluZyhhY3Rpb24uc2VsZWN0ZWRJdGVtKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBDb250cm9sbGVkUHJvcFVwZGF0ZWRTZWxlY3RlZEl0ZW06XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBpbnB1dFZhbHVlOiBhY3Rpb24uaW5wdXRWYWx1ZVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkb3duc2hpZnRDb21tb25SZWR1Y2VyKHN0YXRlLCBhY3Rpb24sIHN0YXRlQ2hhbmdlVHlwZXMkMik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cbi8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG51c2VDb21ib2JveC5zdGF0ZUNoYW5nZVR5cGVzID0gc3RhdGVDaGFuZ2VUeXBlcyQyO1xuXG5mdW5jdGlvbiB1c2VDb21ib2JveCh1c2VyUHJvcHMpIHtcbiAgaWYgKHVzZXJQcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgdXNlclByb3BzID0ge307XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyQxKHVzZXJQcm9wcywgdXNlQ29tYm9ib3gpOyAvLyBQcm9wcyBkZWZhdWx0cyBhbmQgZGVzdHJ1Y3R1cmluZy5cblxuICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFByb3BzJDIsIHVzZXJQcm9wcyk7XG5cbiAgdmFyIGluaXRpYWxJc09wZW4gPSBwcm9wcy5pbml0aWFsSXNPcGVuLFxuICAgICAgZGVmYXVsdElzT3BlbiA9IHByb3BzLmRlZmF1bHRJc09wZW4sXG4gICAgICBpdGVtcyA9IHByb3BzLml0ZW1zLFxuICAgICAgc2Nyb2xsSW50b1ZpZXcgPSBwcm9wcy5zY3JvbGxJbnRvVmlldyxcbiAgICAgIGVudmlyb25tZW50ID0gcHJvcHMuZW52aXJvbm1lbnQsXG4gICAgICBnZXRBMTF5U3RhdHVzTWVzc2FnZSA9IHByb3BzLmdldEExMXlTdGF0dXNNZXNzYWdlLFxuICAgICAgZ2V0QTExeVNlbGVjdGlvbk1lc3NhZ2UgPSBwcm9wcy5nZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSxcbiAgICAgIGl0ZW1Ub1N0cmluZyA9IHByb3BzLml0ZW1Ub1N0cmluZzsgLy8gSW5pdGlhbCBzdGF0ZSBkZXBlbmRpbmcgb24gY29udHJvbGxlZCBwcm9wcy5cblxuICB2YXIgaW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlJDEocHJvcHMpO1xuXG4gIHZhciBfdXNlQ29udHJvbGxlZFJlZHVjZXIgPSB1c2VDb250cm9sbGVkUmVkdWNlciQxKGRvd25zaGlmdFVzZUNvbWJvYm94UmVkdWNlciwgaW5pdGlhbFN0YXRlLCBwcm9wcyksXG4gICAgICBzdGF0ZSA9IF91c2VDb250cm9sbGVkUmVkdWNlclswXSxcbiAgICAgIGRpc3BhdGNoID0gX3VzZUNvbnRyb2xsZWRSZWR1Y2VyWzFdO1xuXG4gIHZhciBpc09wZW4gPSBzdGF0ZS5pc09wZW4sXG4gICAgICBoaWdobGlnaHRlZEluZGV4ID0gc3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgIHNlbGVjdGVkSXRlbSA9IHN0YXRlLnNlbGVjdGVkSXRlbSxcbiAgICAgIGlucHV0VmFsdWUgPSBzdGF0ZS5pbnB1dFZhbHVlOyAvLyBFbGVtZW50IHJlZnMuXG5cbiAgdmFyIG1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHZhciBpdGVtUmVmcyA9IHVzZVJlZih7fSk7XG4gIHZhciBpbnB1dFJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIHRvZ2dsZUJ1dHRvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgdmFyIGNvbWJvYm94UmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgaXNJbml0aWFsTW91bnRSZWYgPSB1c2VSZWYodHJ1ZSk7IC8vIHByZXZlbnQgaWQgcmUtZ2VuZXJhdGlvbiBiZXR3ZWVuIHJlbmRlcnMuXG5cbiAgdmFyIGVsZW1lbnRJZHMgPSB1c2VFbGVtZW50SWRzKHByb3BzKTsgLy8gdXNlZCB0byBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IGl0ZW1zIHdlIGhhZCBvbiBwcmV2aW91cyBjeWNsZS5cblxuICB2YXIgcHJldmlvdXNSZXN1bHRDb3VudFJlZiA9IHVzZVJlZigpOyAvLyB1dGlsaXR5IGNhbGxiYWNrIHRvIGdldCBpdGVtIGVsZW1lbnQuXG5cbiAgdmFyIGxhdGVzdCA9IHVzZUxhdGVzdFJlZih7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KTtcbiAgdmFyIGdldEl0ZW1Ob2RlRnJvbUluZGV4ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1SZWZzLmN1cnJlbnRbZWxlbWVudElkcy5nZXRJdGVtSWQoaW5kZXgpXTtcbiAgfSwgW2VsZW1lbnRJZHNdKTsgLy8gRWZmZWN0cy5cbiAgLy8gU2V0cyBhMTF5IHN0YXR1cyBtZXNzYWdlIG9uIGNoYW5nZXMgaW4gc3RhdGUuXG5cbiAgdXNlQTExeU1lc3NhZ2VTZXR0ZXIoZ2V0QTExeVN0YXR1c01lc3NhZ2UsIFtpc09wZW4sIGhpZ2hsaWdodGVkSW5kZXgsIGlucHV0VmFsdWUsIGl0ZW1zXSwgX2V4dGVuZHMoe1xuICAgIGlzSW5pdGlhbE1vdW50OiBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50LFxuICAgIHByZXZpb3VzUmVzdWx0Q291bnQ6IHByZXZpb3VzUmVzdWx0Q291bnRSZWYuY3VycmVudCxcbiAgICBpdGVtczogaXRlbXMsXG4gICAgZW52aXJvbm1lbnQ6IGVudmlyb25tZW50LFxuICAgIGl0ZW1Ub1N0cmluZzogaXRlbVRvU3RyaW5nXG4gIH0sIHN0YXRlKSk7IC8vIFNldHMgYTExeSBzdGF0dXMgbWVzc2FnZSBvbiBjaGFuZ2VzIGluIHNlbGVjdGVkSXRlbS5cblxuICB1c2VBMTF5TWVzc2FnZVNldHRlcihnZXRBMTF5U2VsZWN0aW9uTWVzc2FnZSwgW3NlbGVjdGVkSXRlbV0sIF9leHRlbmRzKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcmV2aW91c1Jlc3VsdENvdW50OiBwcmV2aW91c1Jlc3VsdENvdW50UmVmLmN1cnJlbnQsXG4gICAgaXRlbXM6IGl0ZW1zLFxuICAgIGVudmlyb25tZW50OiBlbnZpcm9ubWVudCxcbiAgICBpdGVtVG9TdHJpbmc6IGl0ZW1Ub1N0cmluZ1xuICB9LCBzdGF0ZSkpOyAvLyBTY3JvbGwgb24gaGlnaGxpZ2h0ZWQgaXRlbSBpZiBjaGFuZ2UgY29tZXMgZnJvbSBrZXlib2FyZC5cblxuICB2YXIgc2hvdWxkU2Nyb2xsUmVmID0gdXNlU2Nyb2xsSW50b1ZpZXcoe1xuICAgIG1lbnVFbGVtZW50OiBtZW51UmVmLmN1cnJlbnQsXG4gICAgaGlnaGxpZ2h0ZWRJbmRleDogaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBpc09wZW46IGlzT3BlbixcbiAgICBpdGVtUmVmczogaXRlbVJlZnMsXG4gICAgc2Nyb2xsSW50b1ZpZXc6IHNjcm9sbEludG9WaWV3LFxuICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICB9KTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pOyAvLyBGb2N1cyB0aGUgaW5wdXQgb24gZmlyc3QgcmVuZGVyIGlmIHJlcXVpcmVkLlxuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvY3VzT25PcGVuID0gaW5pdGlhbElzT3BlbiB8fCBkZWZhdWx0SXNPcGVuIHx8IGlzT3BlbjtcblxuICAgIGlmIChmb2N1c09uT3BlbiAmJiBpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcHJldmlvdXNSZXN1bHRDb3VudFJlZi5jdXJyZW50ID0gaXRlbXMubGVuZ3RoO1xuICB9KTsgLy8gQWRkIG1vdXNlL3RvdWNoIGV2ZW50cyB0byBkb2N1bWVudC5cblxuICB2YXIgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmID0gdXNlTW91c2VBbmRUb3VjaFRyYWNrZXIoaXNPcGVuLCBbY29tYm9ib3hSZWYsIG1lbnVSZWYsIHRvZ2dsZUJ1dHRvblJlZl0sIGVudmlyb25tZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSW5wdXRCbHVyLFxuICAgICAgc2VsZWN0SXRlbTogZmFsc2VcbiAgICB9KTtcbiAgfSk7XG4gIHZhciBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8gPSB1c2VHZXR0ZXJQcm9wc0NhbGxlZENoZWNrZXIoJ2dldElucHV0UHJvcHMnLCAnZ2V0Q29tYm9ib3hQcm9wcycsICdnZXRNZW51UHJvcHMnKTsgLy8gTWFrZSBpbml0aWFsIHJlZiBmYWxzZS5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlzSW5pdGlhbE1vdW50UmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgfSwgW10pOyAvLyBSZXNldCBpdGVtUmVmcyBvbiBjbG9zZS5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICBpdGVtUmVmcy5jdXJyZW50ID0ge307XG4gICAgfVxuICB9LCBbaXNPcGVuXSk7XG4gIC8qIEV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zICovXG5cbiAgdmFyIGlucHV0S2V5RG93bkhhbmRsZXJzID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIEFycm93RG93bjogZnVuY3Rpb24gQXJyb3dEb3duKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25BcnJvd0Rvd24sXG4gICAgICAgICAgc2hpZnRLZXk6IGV2ZW50LnNoaWZ0S2V5LFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBBcnJvd1VwOiBmdW5jdGlvbiBBcnJvd1VwKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25BcnJvd1VwLFxuICAgICAgICAgIHNoaWZ0S2V5OiBldmVudC5zaGlmdEtleSxcbiAgICAgICAgICBnZXRJdGVtTm9kZUZyb21JbmRleDogZ2V0SXRlbU5vZGVGcm9tSW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgSG9tZTogZnVuY3Rpb24gSG9tZShldmVudCkge1xuICAgICAgICBpZiAoIWxhdGVzdC5jdXJyZW50LnN0YXRlLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25Ib21lLFxuICAgICAgICAgIGdldEl0ZW1Ob2RlRnJvbUluZGV4OiBnZXRJdGVtTm9kZUZyb21JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBFbmQ6IGZ1bmN0aW9uIEVuZChldmVudCkge1xuICAgICAgICBpZiAoIWxhdGVzdC5jdXJyZW50LnN0YXRlLmlzT3Blbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBJbnB1dEtleURvd25FbmQsXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIEVzY2FwZTogZnVuY3Rpb24gRXNjYXBlKCkge1xuICAgICAgICB2YXIgbGF0ZXN0U3RhdGUgPSBsYXRlc3QuY3VycmVudC5zdGF0ZTtcblxuICAgICAgICBpZiAobGF0ZXN0U3RhdGUuaXNPcGVuIHx8IGxhdGVzdFN0YXRlLmlucHV0VmFsdWUgfHwgbGF0ZXN0U3RhdGUuc2VsZWN0ZWRJdGVtIHx8IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXggPiAtMSkge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IElucHV0S2V5RG93bkVzY2FwZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgRW50ZXI6IGZ1bmN0aW9uIEVudGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlOyAvLyBpZiBjbG9zZWQgb3Igbm8gaGlnaGxpZ2h0ZWQgaW5kZXgsIGRvIG5vdGhpbmcuXG5cbiAgICAgICAgaWYgKCFsYXRlc3RTdGF0ZS5pc09wZW4gfHwgbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCA8IDAgfHwgZXZlbnQud2hpY2ggPT09IDIyOSAvLyBpZiBJTUUgY29tcG9zaW5nLCB3YWl0IGZvciBuZXh0IEVudGVyIGtleWRvd24gZXZlbnQuXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogSW5wdXRLZXlEb3duRW50ZXIsXG4gICAgICAgICAgZ2V0SXRlbU5vZGVGcm9tSW5kZXg6IGdldEl0ZW1Ob2RlRnJvbUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCBnZXRJdGVtTm9kZUZyb21JbmRleF0pOyAvLyBHZXR0ZXIgcHJvcHMuXG5cbiAgdmFyIGdldExhYmVsUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobGFiZWxQcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBpZDogZWxlbWVudElkcy5sYWJlbElkLFxuICAgICAgaHRtbEZvcjogZWxlbWVudElkcy5pbnB1dElkXG4gICAgfSwgbGFiZWxQcm9wcyk7XG4gIH0sIFtlbGVtZW50SWRzXSk7XG4gIHZhciBnZXRNZW51UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAsIF90ZW1wMikge1xuICAgIHZhciBfZXh0ZW5kczI7XG5cbiAgICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcmVmLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgX3JlZiRyZWZLZXkgPSBfcmVmLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZiRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZiRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWYucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wib25Nb3VzZUxlYXZlXCIsIFwicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciBfcmVmMiA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDIsXG4gICAgICAgIF9yZWYyJHN1cHByZXNzUmVmRXJybyA9IF9yZWYyLnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmMiRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRNZW51UHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIG1lbnVSZWYpO1xuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChtZW51Tm9kZSkge1xuICAgICAgbWVudVJlZi5jdXJyZW50ID0gbWVudU5vZGU7XG4gICAgfSksIF9leHRlbmRzMi5pZCA9IGVsZW1lbnRJZHMubWVudUlkLCBfZXh0ZW5kczIucm9sZSA9ICdsaXN0Ym94JywgX2V4dGVuZHMyWydhcmlhLWxhYmVsbGVkYnknXSA9IGVsZW1lbnRJZHMubGFiZWxJZCwgX2V4dGVuZHMyLm9uTW91c2VMZWF2ZSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uTW91c2VMZWF2ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBNZW51TW91c2VMZWF2ZSQxXG4gICAgICB9KTtcbiAgICB9KSwgX2V4dGVuZHMyKSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgc2V0R2V0dGVyUHJvcENhbGxJbmZvLCBlbGVtZW50SWRzXSk7XG4gIHZhciBnZXRJdGVtUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXAzKSB7XG4gICAgdmFyIF9leHRlbmRzMywgX3JlZjQ7XG5cbiAgICB2YXIgX3JlZjMgPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzLFxuICAgICAgICBpdGVtID0gX3JlZjMuaXRlbSxcbiAgICAgICAgaW5kZXggPSBfcmVmMy5pbmRleCxcbiAgICAgICAgX3JlZjMkcmVmS2V5ID0gX3JlZjMucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmMyRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjMkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmMy5yZWYsXG4gICAgICAgIG9uTW91c2VNb3ZlID0gX3JlZjMub25Nb3VzZU1vdmUsXG4gICAgICAgIG9uQ2xpY2sgPSBfcmVmMy5vbkNsaWNrLFxuICAgICAgICBvblByZXNzID0gX3JlZjMub25QcmVzcyxcbiAgICAgICAgcmVzdCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBbXCJpdGVtXCIsIFwiaW5kZXhcIiwgXCJyZWZLZXlcIiwgXCJyZWZcIiwgXCJvbk1vdXNlTW92ZVwiLCBcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCJdKTtcblxuICAgIHZhciBfbGF0ZXN0JGN1cnJlbnQgPSBsYXRlc3QuY3VycmVudCxcbiAgICAgICAgbGF0ZXN0UHJvcHMgPSBfbGF0ZXN0JGN1cnJlbnQucHJvcHMsXG4gICAgICAgIGxhdGVzdFN0YXRlID0gX2xhdGVzdCRjdXJyZW50LnN0YXRlO1xuICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXgoaW5kZXgsIGl0ZW0sIGxhdGVzdFByb3BzLml0ZW1zKTtcblxuICAgIGlmIChpdGVtSW5kZXggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3MgZWl0aGVyIGl0ZW0gb3IgaXRlbSBpbmRleCBpbiBnZXRJdGVtUHJvcHMhJyk7XG4gICAgfVxuXG4gICAgdmFyIG9uU2VsZWN0S2V5ID0gICdvbkNsaWNrJztcbiAgICB2YXIgY3VzdG9tQ2xpY2tIYW5kbGVyID0gIG9uQ2xpY2s7XG5cbiAgICB2YXIgaXRlbUhhbmRsZU1vdXNlTW92ZSA9IGZ1bmN0aW9uIGl0ZW1IYW5kbGVNb3VzZU1vdmUoKSB7XG4gICAgICBpZiAoaW5kZXggPT09IGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzaG91bGRTY3JvbGxSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJdGVtTW91c2VNb3ZlJDEsXG4gICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpdGVtSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBpdGVtSGFuZGxlQ2xpY2soKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEl0ZW1DbGljayQxLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uIChpdGVtTm9kZSkge1xuICAgICAgaWYgKGl0ZW1Ob2RlKSB7XG4gICAgICAgIGl0ZW1SZWZzLmN1cnJlbnRbZWxlbWVudElkcy5nZXRJdGVtSWQoaXRlbUluZGV4KV0gPSBpdGVtTm9kZTtcbiAgICAgIH1cbiAgICB9KSwgX2V4dGVuZHMzLnJvbGUgPSAnb3B0aW9uJywgX2V4dGVuZHMzWydhcmlhLXNlbGVjdGVkJ10gPSBcIlwiICsgKGl0ZW1JbmRleCA9PT0gbGF0ZXN0U3RhdGUuaGlnaGxpZ2h0ZWRJbmRleCksIF9leHRlbmRzMy5pZCA9IGVsZW1lbnRJZHMuZ2V0SXRlbUlkKGl0ZW1JbmRleCksIF9leHRlbmRzMyksICFyZXN0LmRpc2FibGVkICYmIChfcmVmNCA9IHtcbiAgICAgIG9uTW91c2VNb3ZlOiBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbk1vdXNlTW92ZSwgaXRlbUhhbmRsZU1vdXNlTW92ZSlcbiAgICB9LCBfcmVmNFtvblNlbGVjdEtleV0gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhjdXN0b21DbGlja0hhbmRsZXIsIGl0ZW1IYW5kbGVDbGljayksIF9yZWY0KSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgbGF0ZXN0LCBzaG91bGRTY3JvbGxSZWYsIGVsZW1lbnRJZHNdKTtcbiAgdmFyIGdldFRvZ2dsZUJ1dHRvblByb3BzID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKF90ZW1wNCkge1xuICAgIHZhciBfZXh0ZW5kczQ7XG5cbiAgICB2YXIgX3JlZjUgPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0LFxuICAgICAgICBvbkNsaWNrID0gX3JlZjUub25DbGljayxcbiAgICAgICAgb25QcmVzcyA9IF9yZWY1Lm9uUHJlc3MsXG4gICAgICAgIF9yZWY1JHJlZktleSA9IF9yZWY1LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjUkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY1JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjUucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIFtcIm9uQ2xpY2tcIiwgXCJvblByZXNzXCIsIFwicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciB0b2dnbGVCdXR0b25IYW5kbGVDbGljayA9IGZ1bmN0aW9uIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBUb2dnbGVCdXR0b25DbGljayQxXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFsYXRlc3QuY3VycmVudC5zdGF0ZS5pc09wZW4gJiYgaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfZXh0ZW5kcygoX2V4dGVuZHM0ID0ge30sIF9leHRlbmRzNFtyZWZLZXldID0gaGFuZGxlUmVmcyhyZWYsIGZ1bmN0aW9uICh0b2dnbGVCdXR0b25Ob2RlKSB7XG4gICAgICB0b2dnbGVCdXR0b25SZWYuY3VycmVudCA9IHRvZ2dsZUJ1dHRvbk5vZGU7XG4gICAgfSksIF9leHRlbmRzNC5pZCA9IGVsZW1lbnRJZHMudG9nZ2xlQnV0dG9uSWQsIF9leHRlbmRzNC50YWJJbmRleCA9IC0xLCBfZXh0ZW5kczQpLCAhcmVzdC5kaXNhYmxlZCAmJiBfZXh0ZW5kcyh7fSwgIHtcbiAgICAgIG9uQ2xpY2s6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIHRvZ2dsZUJ1dHRvbkhhbmRsZUNsaWNrKVxuICAgIH0pLCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3QsIGVsZW1lbnRJZHNdKTtcbiAgdmFyIGdldElucHV0UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXA1LCBfdGVtcDYpIHtcbiAgICB2YXIgX2V4dGVuZHM1O1xuXG4gICAgdmFyIF9yZWY2ID0gX3RlbXA1ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNSxcbiAgICAgICAgb25LZXlEb3duID0gX3JlZjYub25LZXlEb3duLFxuICAgICAgICBvbkNoYW5nZSA9IF9yZWY2Lm9uQ2hhbmdlLFxuICAgICAgICBvbklucHV0ID0gX3JlZjYub25JbnB1dCxcbiAgICAgICAgb25CbHVyID0gX3JlZjYub25CbHVyLFxuICAgICAgICBvbkNoYW5nZVRleHQgPSBfcmVmNi5vbkNoYW5nZVRleHQsXG4gICAgICAgIF9yZWY2JHJlZktleSA9IF9yZWY2LnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjYkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWY2JHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjYucmVmLFxuICAgICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjYsIFtcIm9uS2V5RG93blwiLCBcIm9uQ2hhbmdlXCIsIFwib25JbnB1dFwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlVGV4dFwiLCBcInJlZktleVwiLCBcInJlZlwiXSk7XG5cbiAgICB2YXIgX3JlZjcgPSBfdGVtcDYgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA2LFxuICAgICAgICBfcmVmNyRzdXBwcmVzc1JlZkVycm8gPSBfcmVmNy5zdXBwcmVzc1JlZkVycm9yLFxuICAgICAgICBzdXBwcmVzc1JlZkVycm9yID0gX3JlZjckc3VwcHJlc3NSZWZFcnJvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWY3JHN1cHByZXNzUmVmRXJybztcblxuICAgIHNldEdldHRlclByb3BDYWxsSW5mbygnZ2V0SW5wdXRQcm9wcycsIHN1cHByZXNzUmVmRXJyb3IsIHJlZktleSwgaW5wdXRSZWYpO1xuICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuXG4gICAgdmFyIGlucHV0SGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGlucHV0SGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdmFyIGtleSA9IG5vcm1hbGl6ZUFycm93S2V5KGV2ZW50KTtcblxuICAgICAgaWYgKGtleSAmJiBpbnB1dEtleURvd25IYW5kbGVyc1trZXldKSB7XG4gICAgICAgIGlucHV0S2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaW5wdXRIYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiBpbnB1dEhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBJbnB1dENoYW5nZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogIGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBpbnB1dEhhbmRsZUJsdXIgPSBmdW5jdGlvbiBpbnB1dEhhbmRsZUJsdXIoKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKGxhdGVzdFN0YXRlLmlzT3BlbiAmJiAhbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLmN1cnJlbnQuaXNNb3VzZURvd24pIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IElucHV0Qmx1cixcbiAgICAgICAgICBzZWxlY3RJdGVtOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKHByZWFjdCkgKi9cblxuXG4gICAgdmFyIG9uQ2hhbmdlS2V5ID0gICdvbkNoYW5nZSc7XG4gICAgdmFyIGV2ZW50SGFuZGxlcnMgPSB7fTtcblxuICAgIGlmICghcmVzdC5kaXNhYmxlZCkge1xuICAgICAgdmFyIF9ldmVudEhhbmRsZXJzO1xuXG4gICAgICBldmVudEhhbmRsZXJzID0gKF9ldmVudEhhbmRsZXJzID0ge30sIF9ldmVudEhhbmRsZXJzW29uQ2hhbmdlS2V5XSA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2hhbmdlLCBvbklucHV0LCBpbnB1dEhhbmRsZUNoYW5nZSksIF9ldmVudEhhbmRsZXJzLm9uS2V5RG93biA9IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgaW5wdXRIYW5kbGVLZXlEb3duKSwgX2V2ZW50SGFuZGxlcnMub25CbHVyID0gY2FsbEFsbEV2ZW50SGFuZGxlcnMob25CbHVyLCBpbnB1dEhhbmRsZUJsdXIpLCBfZXZlbnRIYW5kbGVycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczUgPSB7fSwgX2V4dGVuZHM1W3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGlucHV0Tm9kZSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudCA9IGlucHV0Tm9kZTtcbiAgICB9KSwgX2V4dGVuZHM1LmlkID0gZWxlbWVudElkcy5pbnB1dElkLCBfZXh0ZW5kczVbJ2FyaWEtYXV0b2NvbXBsZXRlJ10gPSAnbGlzdCcsIF9leHRlbmRzNVsnYXJpYS1jb250cm9scyddID0gZWxlbWVudElkcy5tZW51SWQsIF9leHRlbmRzNSksIGxhdGVzdFN0YXRlLmlzT3BlbiAmJiBsYXRlc3RTdGF0ZS5oaWdobGlnaHRlZEluZGV4ID4gLTEgJiYge1xuICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IGVsZW1lbnRJZHMuZ2V0SXRlbUlkKGxhdGVzdFN0YXRlLmhpZ2hsaWdodGVkSW5kZXgpXG4gICAgfSwge1xuICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6IGVsZW1lbnRJZHMubGFiZWxJZCxcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL1NlY3VyaXR5L1NlY3VyaW5nX3lvdXJfc2l0ZS9UdXJuaW5nX29mZl9mb3JtX2F1dG9jb21wbGV0aW9uXG4gICAgICAvLyByZXZlcnQgYmFjayBzaW5jZSBhdXRvY29tcGxldGU9XCJub3BlXCIgaXMgaWdub3JlZCBvbiBsYXRlc3QgQ2hyb21lIGFuZCBPcGVyYVxuICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgIHZhbHVlOiBsYXRlc3RTdGF0ZS5pbnB1dFZhbHVlXG4gICAgfSwgZXZlbnRIYW5kbGVycywgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgaW5wdXRLZXlEb3duSGFuZGxlcnMsIGxhdGVzdCwgbW91c2VBbmRUb3VjaFRyYWNrZXJzUmVmLCBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8sIGVsZW1lbnRJZHNdKTtcbiAgdmFyIGdldENvbWJvYm94UHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXA3LCBfdGVtcDgpIHtcbiAgICB2YXIgX2V4dGVuZHM2O1xuXG4gICAgdmFyIF9yZWY4ID0gX3RlbXA3ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNyxcbiAgICAgICAgX3JlZjgkcmVmS2V5ID0gX3JlZjgucmVmS2V5LFxuICAgICAgICByZWZLZXkgPSBfcmVmOCRyZWZLZXkgPT09IHZvaWQgMCA/ICdyZWYnIDogX3JlZjgkcmVmS2V5LFxuICAgICAgICByZWYgPSBfcmVmOC5yZWYsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmOCwgW1wicmVmS2V5XCIsIFwicmVmXCJdKTtcblxuICAgIHZhciBfcmVmOSA9IF90ZW1wOCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDgsXG4gICAgICAgIF9yZWY5JHN1cHByZXNzUmVmRXJybyA9IF9yZWY5LnN1cHByZXNzUmVmRXJyb3IsXG4gICAgICAgIHN1cHByZXNzUmVmRXJyb3IgPSBfcmVmOSRzdXBwcmVzc1JlZkVycm8gPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjkkc3VwcHJlc3NSZWZFcnJvO1xuXG4gICAgc2V0R2V0dGVyUHJvcENhbGxJbmZvKCdnZXRDb21ib2JveFByb3BzJywgc3VwcHJlc3NSZWZFcnJvciwgcmVmS2V5LCBjb21ib2JveFJlZik7XG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczYgPSB7fSwgX2V4dGVuZHM2W3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGNvbWJvYm94Tm9kZSkge1xuICAgICAgY29tYm9ib3hSZWYuY3VycmVudCA9IGNvbWJvYm94Tm9kZTtcbiAgICB9KSwgX2V4dGVuZHM2LnJvbGUgPSAnY29tYm9ib3gnLCBfZXh0ZW5kczZbJ2FyaWEtaGFzcG9wdXAnXSA9ICdsaXN0Ym94JywgX2V4dGVuZHM2WydhcmlhLW93bnMnXSA9IGVsZW1lbnRJZHMubWVudUlkLCBfZXh0ZW5kczZbJ2FyaWEtZXhwYW5kZWQnXSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlLmlzT3BlbiwgX2V4dGVuZHM2KSwgcmVzdCk7XG4gIH0sIFtsYXRlc3QsIHNldEdldHRlclByb3BDYWxsSW5mbywgZWxlbWVudElkc10pOyAvLyByZXR1cm5zXG5cbiAgdmFyIHRvZ2dsZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25Ub2dnbGVNZW51JDFcbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBjbG9zZU1lbnUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25DbG9zZU1lbnUkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIG9wZW5NZW51ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uT3Blbk1lbnUkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldEhpZ2hsaWdodGVkSW5kZXggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SGlnaGxpZ2h0ZWRJbmRleCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SGlnaGxpZ2h0ZWRJbmRleCQxLFxuICAgICAgaGlnaGxpZ2h0ZWRJbmRleDogbmV3SGlnaGxpZ2h0ZWRJbmRleFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNlbGVjdEl0ZW0gPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3U2VsZWN0ZWRJdGVtKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25TZWxlY3RJdGVtJDEsXG4gICAgICBzZWxlY3RlZEl0ZW06IG5ld1NlbGVjdGVkSXRlbVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHNldElucHV0VmFsdWUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3SW5wdXRWYWx1ZSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uU2V0SW5wdXRWYWx1ZSQxLFxuICAgICAgaW5wdXRWYWx1ZTogbmV3SW5wdXRWYWx1ZVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgdmFyIHJlc2V0ID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uUmVzZXQkMVxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIHtcbiAgICAvLyBwcm9wIGdldHRlcnMuXG4gICAgZ2V0SXRlbVByb3BzOiBnZXRJdGVtUHJvcHMsXG4gICAgZ2V0TGFiZWxQcm9wczogZ2V0TGFiZWxQcm9wcyxcbiAgICBnZXRNZW51UHJvcHM6IGdldE1lbnVQcm9wcyxcbiAgICBnZXRJbnB1dFByb3BzOiBnZXRJbnB1dFByb3BzLFxuICAgIGdldENvbWJvYm94UHJvcHM6IGdldENvbWJvYm94UHJvcHMsXG4gICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHM6IGdldFRvZ2dsZUJ1dHRvblByb3BzLFxuICAgIC8vIGFjdGlvbnMuXG4gICAgdG9nZ2xlTWVudTogdG9nZ2xlTWVudSxcbiAgICBvcGVuTWVudTogb3Blbk1lbnUsXG4gICAgY2xvc2VNZW51OiBjbG9zZU1lbnUsXG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleDogc2V0SGlnaGxpZ2h0ZWRJbmRleCxcbiAgICBzZXRJbnB1dFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxuICAgIHNlbGVjdEl0ZW06IHNlbGVjdEl0ZW0sXG4gICAgcmVzZXQ6IHJlc2V0LFxuICAgIC8vIHN0YXRlLlxuICAgIGhpZ2hsaWdodGVkSW5kZXg6IGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW0sXG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZVxuICB9O1xufVxuXG52YXIgZGVmYXVsdFN0YXRlVmFsdWVzID0ge1xuICBhY3RpdmVJbmRleDogLTEsXG4gIHNlbGVjdGVkSXRlbXM6IFtdXG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbml0aWFsIHZhbHVlIGZvciBhIHN0YXRlIGtleSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICogMS4gY29udHJvbGxlZCBwcm9wLCAyLiBpbml0aWFsIHByb3AsIDMuIGRlZmF1bHQgcHJvcCwgNC4gZGVmYXVsdFxuICogdmFsdWUgZnJvbSBEb3duc2hpZnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byB0aGUgaG9vay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wS2V5IFByb3BzIGtleSB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgZm9yLlxuICogQHJldHVybnMge2FueX0gVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoYXQgcHJvcC5cbiAqL1xuXG5mdW5jdGlvbiBnZXRJbml0aWFsVmFsdWUkMShwcm9wcywgcHJvcEtleSkge1xuICByZXR1cm4gZ2V0SW5pdGlhbFZhbHVlKHByb3BzLCBwcm9wS2V5LCBkZWZhdWx0U3RhdGVWYWx1ZXMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIHN0YXRlIGtleSBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuICogMS4gY29udHJvbGxlZCBwcm9wLCAyLiBkZWZhdWx0IHByb3AsIDMuIGRlZmF1bHQgdmFsdWUgZnJvbSBEb3duc2hpZnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIFByb3BzIHBhc3NlZCB0byB0aGUgaG9vay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wS2V5IFByb3BzIGtleSB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgZm9yLlxuICogQHJldHVybnMge2FueX0gVGhlIGluaXRpYWwgdmFsdWUgZm9yIHRoYXQgcHJvcC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSQxKHByb3BzLCBwcm9wS2V5KSB7XG4gIHJldHVybiBnZXREZWZhdWx0VmFsdWUocHJvcHMsIHByb3BLZXksIGRlZmF1bHRTdGF0ZVZhbHVlcyk7XG59XG4vKipcbiAqIEdldHMgdGhlIGluaXRpYWwgc3RhdGUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIHByb3BzLiBJdCB1c2VzIGluaXRpYWwsIGRlZmF1bHRcbiAqIGFuZCBjb250cm9sbGVkIHByb3BzIHJlbGF0ZWQgdG8gc3RhdGUgaW4gb3JkZXIgdG8gY29tcHV0ZSB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgUHJvcHMgcGFzc2VkIHRvIHRoZSBob29rLlxuICogQHJldHVybnMge09iamVjdH0gVGhlIGluaXRpYWwgc3RhdGUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUkMihwcm9wcykge1xuICB2YXIgYWN0aXZlSW5kZXggPSBnZXRJbml0aWFsVmFsdWUkMShwcm9wcywgJ2FjdGl2ZUluZGV4Jyk7XG4gIHZhciBzZWxlY3RlZEl0ZW1zID0gZ2V0SW5pdGlhbFZhbHVlJDEocHJvcHMsICdzZWxlY3RlZEl0ZW1zJyk7XG4gIHJldHVybiB7XG4gICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgIHNlbGVjdGVkSXRlbXM6IHNlbGVjdGVkSXRlbXNcbiAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGRyb3Bkb3duIGtleWRvd24gb3BlcmF0aW9uIGlzIHBlcm1pdHRlZC4gU2hvdWxkIG5vdCBiZVxuICogYWxsb3dlZCBvbiBrZXlkb3duIHdpdGggbW9kaWZpZXIga2V5cyAoY3RybCwgYWx0LCBzaGlmdCwgbWV0YSksIG9uXG4gKiBpbnB1dCBlbGVtZW50IHdpdGggdGV4dCBjb250ZW50IHRoYXQgaXMgZWl0aGVyIGhpZ2hsaWdodGVkIG9yIHNlbGVjdGlvblxuICogY3Vyc29yIGlzIG5vdCBhdCB0aGUgc3RhcnRpbmcgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudCBUaGUgZXZlbnQgZnJvbSBrZXlkb3duLlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgdGhlIG9wZXJhdGlvbiBpcyBhbGxvd2VkLlxuICovXG5cblxuZnVuY3Rpb24gaXNLZXlEb3duT3BlcmF0aW9uUGVybWl0dGVkKGV2ZW50KSB7XG4gIGlmIChldmVudC5zaGlmdEtleSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIC8vIGlmIGVsZW1lbnQgaXMgYSB0ZXh0IGlucHV0XG4gIGVsZW1lbnQudmFsdWUgIT09ICcnICYmICggLy8gYW5kIHdlIGhhdmUgdGV4dCBpbiBpdFxuICAvLyBhbmQgY3Vyc29yIGlzIGVpdGhlciBub3QgYXQgdGhlIHN0YXJ0IG9yIGlzIGN1cnJlbnRseSBoaWdobGlnaHRpbmcgdGV4dC5cbiAgZWxlbWVudC5zZWxlY3Rpb25TdGFydCAhPT0gMCB8fCBlbGVtZW50LnNlbGVjdGlvbkVuZCAhPT0gMCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIG1lc3NhZ2UgdG8gYmUgYWRkZWQgdG8gYXJpYS1saXZlIHJlZ2lvbiB3aGVuIGl0ZW0gaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0aW9uUGFyYW1ldGVycyBQYXJhbWV0ZXJzIHJlcXVpcmVkIHRvIGJ1aWxkIHRoZSBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGExMXkgbWVzc2FnZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEExMXlSZW1vdmFsTWVzc2FnZShzZWxlY3Rpb25QYXJhbWV0ZXJzKSB7XG4gIHZhciByZW1vdmVkU2VsZWN0ZWRJdGVtID0gc2VsZWN0aW9uUGFyYW1ldGVycy5yZW1vdmVkU2VsZWN0ZWRJdGVtLFxuICAgICAgaXRlbVRvU3RyaW5nTG9jYWwgPSBzZWxlY3Rpb25QYXJhbWV0ZXJzLml0ZW1Ub1N0cmluZztcbiAgcmV0dXJuIGl0ZW1Ub1N0cmluZ0xvY2FsKHJlbW92ZWRTZWxlY3RlZEl0ZW0pICsgXCIgaGFzIGJlZW4gcmVtb3ZlZC5cIjtcbn1cblxudmFyIHByb3BUeXBlcyQyID0ge1xuICBzZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGluaXRpYWxTZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGRlZmF1bHRTZWxlY3RlZEl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldEExMXlSZW1vdmFsTWVzc2FnZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHN0YXRlUmVkdWNlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGFjdGl2ZUluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbml0aWFsQWN0aXZlSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGRlZmF1bHRBY3RpdmVJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25BY3RpdmVJbmRleENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0ZWRJdGVtc0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGtleU5hdmlnYXRpb25OZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBrZXlOYXZpZ2F0aW9uUHJldmlvdXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVudmlyb25tZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRvY3VtZW50OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZ2V0RWxlbWVudEJ5SWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgYWN0aXZlRWxlbWVudDogUHJvcFR5cGVzLmFueSxcbiAgICAgIGJvZHk6IFByb3BUeXBlcy5hbnlcbiAgICB9KVxuICB9KVxufTtcbnZhciBkZWZhdWx0UHJvcHMkMyA9IHtcbiAgaXRlbVRvU3RyaW5nOiBkZWZhdWx0UHJvcHMuaXRlbVRvU3RyaW5nLFxuICBzdGF0ZVJlZHVjZXI6IGRlZmF1bHRQcm9wcy5zdGF0ZVJlZHVjZXIsXG4gIGVudmlyb25tZW50OiBkZWZhdWx0UHJvcHMuZW52aXJvbm1lbnQsXG4gIGdldEExMXlSZW1vdmFsTWVzc2FnZTogZ2V0QTExeVJlbW92YWxNZXNzYWdlLFxuICBrZXlOYXZpZ2F0aW9uTmV4dDogJ0Fycm93UmlnaHQnLFxuICBrZXlOYXZpZ2F0aW9uUHJldmlvdXM6ICdBcnJvd0xlZnQnXG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuXG52YXIgdmFsaWRhdGVQcm9wVHlwZXMkMiA9IG5vb3A7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZVByb3BUeXBlcyQyID0gZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMob3B0aW9ucywgY2FsbGVyKSB7XG4gICAgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcyQyLCBvcHRpb25zLCAncHJvcCcsIGNhbGxlci5uYW1lKTtcbiAgfTtcbn1cblxudmFyIFNlbGVjdGVkSXRlbUNsaWNrID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fc2VsZWN0ZWRfaXRlbV9jbGlja19fJyA6IDA7XG52YXIgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZSA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX3NlbGVjdGVkX2l0ZW1fa2V5ZG93bl9kZWxldGVfXycgOiAxO1xudmFyIFNlbGVjdGVkSXRlbUtleURvd25CYWNrc3BhY2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2tleWRvd25fYmFja3NwYWNlX18nIDogMjtcbnZhciBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvbk5leHQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19zZWxlY3RlZF9pdGVtX2tleWRvd25fbmF2aWdhdGlvbl9uZXh0X18nIDogMztcbnZhciBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fc2VsZWN0ZWRfaXRlbV9rZXlkb3duX25hdmlnYXRpb25fcHJldmlvdXNfXycgOiA0O1xudmFyIERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91cyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Ryb3Bkb3duX2tleWRvd25fbmF2aWdhdGlvbl9wcmV2aW91c19fJyA6IDU7XG52YXIgRHJvcGRvd25LZXlEb3duQmFja3NwYWNlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZHJvcGRvd25fa2V5ZG93bl9iYWNrc3BhY2VfXycgOiA2O1xudmFyIERyb3Bkb3duQ2xpY2sgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19kcm9wZG93bl9jbGlja19fJyA6IDc7XG52YXIgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9hZGRfc2VsZWN0ZWRfaXRlbV9fJyA6IDg7XG52YXIgRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW0gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9yZW1vdmVfc2VsZWN0ZWRfaXRlbV9fJyA6IDk7XG52YXIgRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gJ19fZnVuY3Rpb25fc2V0X3NlbGVjdGVkX2l0ZW1zX18nIDogMTA7XG52YXIgRnVuY3Rpb25TZXRBY3RpdmVJbmRleCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICdfX2Z1bmN0aW9uX3NldF9hY3RpdmVfaW5kZXhfXycgOiAxMTtcbnZhciBGdW5jdGlvblJlc2V0JDIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAnX19mdW5jdGlvbl9yZXNldF9fJyA6IDEyO1xuXG52YXIgc3RhdGVDaGFuZ2VUeXBlcyQzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIFNlbGVjdGVkSXRlbUNsaWNrOiBTZWxlY3RlZEl0ZW1DbGljayxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZTogU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZSxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bkJhY2tzcGFjZTogU2VsZWN0ZWRJdGVtS2V5RG93bkJhY2tzcGFjZSxcbiAgU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25OZXh0OiBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvbk5leHQsXG4gIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXM6IFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uUHJldmlvdXMsXG4gIERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91czogRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzLFxuICBEcm9wZG93bktleURvd25CYWNrc3BhY2U6IERyb3Bkb3duS2V5RG93bkJhY2tzcGFjZSxcbiAgRHJvcGRvd25DbGljazogRHJvcGRvd25DbGljayxcbiAgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW06IEZ1bmN0aW9uQWRkU2VsZWN0ZWRJdGVtLFxuICBGdW5jdGlvblJlbW92ZVNlbGVjdGVkSXRlbTogRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW0sXG4gIEZ1bmN0aW9uU2V0U2VsZWN0ZWRJdGVtczogRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zLFxuICBGdW5jdGlvblNldEFjdGl2ZUluZGV4OiBGdW5jdGlvblNldEFjdGl2ZUluZGV4LFxuICBGdW5jdGlvblJlc2V0OiBGdW5jdGlvblJlc2V0JDJcbn0pO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5cbmZ1bmN0aW9uIGRvd25zaGlmdE11bHRpcGxlU2VsZWN0aW9uUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB0eXBlID0gYWN0aW9uLnR5cGUsXG4gICAgICBpbmRleCA9IGFjdGlvbi5pbmRleCxcbiAgICAgIHByb3BzID0gYWN0aW9uLnByb3BzLFxuICAgICAgc2VsZWN0ZWRJdGVtID0gYWN0aW9uLnNlbGVjdGVkSXRlbTtcbiAgdmFyIGFjdGl2ZUluZGV4ID0gc3RhdGUuYWN0aXZlSW5kZXgsXG4gICAgICBzZWxlY3RlZEl0ZW1zID0gc3RhdGUuc2VsZWN0ZWRJdGVtcztcbiAgdmFyIGNoYW5nZXM7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1DbGljazpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4IC0gMSA8IDAgPyAwIDogYWN0aXZlSW5kZXggLSAxXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFNlbGVjdGVkSXRlbUtleURvd25OYXZpZ2F0aW9uTmV4dDpcbiAgICAgIGNoYW5nZXMgPSB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleCArIDEgPj0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggPyAtMSA6IGFjdGl2ZUluZGV4ICsgMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTZWxlY3RlZEl0ZW1LZXlEb3duQmFja3NwYWNlOlxuICAgIGNhc2UgU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZTpcbiAgICAgIHtcbiAgICAgICAgdmFyIG5ld0FjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXg7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVJbmRleCA9PT0gc2VsZWN0ZWRJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgbmV3QWN0aXZlSW5kZXggPSBzZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDI7XG4gICAgICAgIH1cblxuICAgICAgICBjaGFuZ2VzID0gX2V4dGVuZHMoe1xuICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IFtdLmNvbmNhdChzZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIGFjdGl2ZUluZGV4KSwgc2VsZWN0ZWRJdGVtcy5zbGljZShhY3RpdmVJbmRleCArIDEpKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IG5ld0FjdGl2ZUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgRHJvcGRvd25LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzOlxuICAgICAgY2hhbmdlcyA9IHtcbiAgICAgICAgYWN0aXZlSW5kZXg6IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBEcm9wZG93bktleURvd25CYWNrc3BhY2U6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zLnNsaWNlKDAsIHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSlcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25BZGRTZWxlY3RlZEl0ZW06XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbXS5jb25jYXQoc2VsZWN0ZWRJdGVtcywgW3NlbGVjdGVkSXRlbV0pXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIERyb3Bkb3duQ2xpY2s6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogLTFcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgRnVuY3Rpb25SZW1vdmVTZWxlY3RlZEl0ZW06XG4gICAgICB7XG4gICAgICAgIHZhciBfbmV3QWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICAgICAgdmFyIHNlbGVjdGVkSXRlbUluZGV4ID0gc2VsZWN0ZWRJdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgX25ld0FjdGl2ZUluZGV4ID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRJdGVtSW5kZXggPT09IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIF9uZXdBY3RpdmVJbmRleCA9IHNlbGVjdGVkSXRlbXMubGVuZ3RoIC0gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYW5nZXMgPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtczogW10uY29uY2F0KHNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgc2VsZWN0ZWRJdGVtSW5kZXgpLCBzZWxlY3RlZEl0ZW1zLnNsaWNlKHNlbGVjdGVkSXRlbUluZGV4ICsgMSkpXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogX25ld0FjdGl2ZUluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGNhc2UgRnVuY3Rpb25TZXRTZWxlY3RlZEl0ZW1zOlxuICAgICAge1xuICAgICAgICB2YXIgbmV3U2VsZWN0ZWRJdGVtcyA9IGFjdGlvbi5zZWxlY3RlZEl0ZW1zO1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IG5ld1NlbGVjdGVkSXRlbXNcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICBjYXNlIEZ1bmN0aW9uU2V0QWN0aXZlSW5kZXg6XG4gICAgICB7XG4gICAgICAgIHZhciBfbmV3QWN0aXZlSW5kZXgyID0gYWN0aW9uLmFjdGl2ZUluZGV4O1xuICAgICAgICBjaGFuZ2VzID0ge1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiBfbmV3QWN0aXZlSW5kZXgyXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgY2FzZSBGdW5jdGlvblJlc2V0JDI6XG4gICAgICBjaGFuZ2VzID0ge1xuICAgICAgICBhY3RpdmVJbmRleDogZ2V0RGVmYXVsdFZhbHVlJDEocHJvcHMsICdhY3RpdmVJbmRleCcpLFxuICAgICAgICBzZWxlY3RlZEl0ZW1zOiBnZXREZWZhdWx0VmFsdWUkMShwcm9wcywgJ3NlbGVjdGVkSXRlbXMnKVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBjYWxsZWQgd2l0aG91dCBwcm9wZXIgYWN0aW9uIHR5cGUuJyk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCBjaGFuZ2VzKTtcbn1cblxudXNlTXVsdGlwbGVTZWxlY3Rpb24uc3RhdGVDaGFuZ2VUeXBlcyA9IHN0YXRlQ2hhbmdlVHlwZXMkMztcblxuZnVuY3Rpb24gdXNlTXVsdGlwbGVTZWxlY3Rpb24odXNlclByb3BzKSB7XG4gIGlmICh1c2VyUHJvcHMgPT09IHZvaWQgMCkge1xuICAgIHVzZXJQcm9wcyA9IHt9O1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMkMih1c2VyUHJvcHMsIHVzZU11bHRpcGxlU2VsZWN0aW9uKTsgLy8gUHJvcHMgZGVmYXVsdHMgYW5kIGRlc3RydWN0dXJpbmcuXG5cbiAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlZmF1bHRQcm9wcyQzLCB1c2VyUHJvcHMpO1xuXG4gIHZhciBnZXRBMTF5UmVtb3ZhbE1lc3NhZ2UgPSBwcm9wcy5nZXRBMTF5UmVtb3ZhbE1lc3NhZ2UsXG4gICAgICBpdGVtVG9TdHJpbmcgPSBwcm9wcy5pdGVtVG9TdHJpbmcsXG4gICAgICBlbnZpcm9ubWVudCA9IHByb3BzLmVudmlyb25tZW50LFxuICAgICAga2V5TmF2aWdhdGlvbk5leHQgPSBwcm9wcy5rZXlOYXZpZ2F0aW9uTmV4dCxcbiAgICAgIGtleU5hdmlnYXRpb25QcmV2aW91cyA9IHByb3BzLmtleU5hdmlnYXRpb25QcmV2aW91czsgLy8gUmVkdWNlciBpbml0LlxuXG4gIHZhciBfdXNlQ29udHJvbGxlZFJlZHVjZXIgPSB1c2VDb250cm9sbGVkUmVkdWNlcihkb3duc2hpZnRNdWx0aXBsZVNlbGVjdGlvblJlZHVjZXIsIGdldEluaXRpYWxTdGF0ZSQyKHByb3BzKSwgcHJvcHMpLFxuICAgICAgc3RhdGUgPSBfdXNlQ29udHJvbGxlZFJlZHVjZXJbMF0sXG4gICAgICBkaXNwYXRjaCA9IF91c2VDb250cm9sbGVkUmVkdWNlclsxXTtcblxuICB2YXIgYWN0aXZlSW5kZXggPSBzdGF0ZS5hY3RpdmVJbmRleCxcbiAgICAgIHNlbGVjdGVkSXRlbXMgPSBzdGF0ZS5zZWxlY3RlZEl0ZW1zOyAvLyBSZWZzLlxuXG4gIHZhciBpc0luaXRpYWxNb3VudFJlZiA9IHVzZVJlZih0cnVlKTtcbiAgdmFyIGRyb3Bkb3duUmVmID0gdXNlUmVmKG51bGwpO1xuICB2YXIgcHJldmlvdXNTZWxlY3RlZEl0ZW1zUmVmID0gdXNlUmVmKHNlbGVjdGVkSXRlbXMpO1xuICB2YXIgc2VsZWN0ZWRJdGVtUmVmcyA9IHVzZVJlZigpO1xuICBzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnQgPSBbXTtcbiAgdmFyIGxhdGVzdCA9IHVzZUxhdGVzdFJlZih7XG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9KTsgLy8gRWZmZWN0cy5cblxuICAvKiBTZXRzIGExMXkgc3RhdHVzIG1lc3NhZ2Ugb24gY2hhbmdlcyBpbiBzZWxlY3RlZEl0ZW0uICovXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RlZEl0ZW1zLmxlbmd0aCA8IHByZXZpb3VzU2VsZWN0ZWRJdGVtc1JlZi5jdXJyZW50Lmxlbmd0aCkge1xuICAgICAgdmFyIHJlbW92ZWRTZWxlY3RlZEl0ZW0gPSBwcmV2aW91c1NlbGVjdGVkSXRlbXNSZWYuY3VycmVudC5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSkgPCAwO1xuICAgICAgfSk7XG4gICAgICBzZXRTdGF0dXMoZ2V0QTExeVJlbW92YWxNZXNzYWdlKHtcbiAgICAgICAgaXRlbVRvU3RyaW5nOiBpdGVtVG9TdHJpbmcsXG4gICAgICAgIHJlc3VsdENvdW50OiBzZWxlY3RlZEl0ZW1zLmxlbmd0aCxcbiAgICAgICAgcmVtb3ZlZFNlbGVjdGVkSXRlbTogcmVtb3ZlZFNlbGVjdGVkSXRlbSxcbiAgICAgICAgYWN0aXZlSW5kZXg6IGFjdGl2ZUluZGV4LFxuICAgICAgICBhY3RpdmVTZWxlY3RlZEl0ZW06IHNlbGVjdGVkSXRlbXNbYWN0aXZlSW5kZXhdXG4gICAgICB9KSwgZW52aXJvbm1lbnQuZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIHByZXZpb3VzU2VsZWN0ZWRJdGVtc1JlZi5jdXJyZW50ID0gc2VsZWN0ZWRJdGVtczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc2VsZWN0ZWRJdGVtcy5sZW5ndGhdKTsgLy8gU2V0cyBmb2N1cyBvbiBhY3RpdmUgaXRlbS5cblxuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSAmJiBkcm9wZG93blJlZi5jdXJyZW50KSB7XG4gICAgICBkcm9wZG93blJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnRbYWN0aXZlSW5kZXhdKSB7XG4gICAgICBzZWxlY3RlZEl0ZW1SZWZzLmN1cnJlbnRbYWN0aXZlSW5kZXhdLmZvY3VzKCk7XG4gICAgfVxuICB9LCBbYWN0aXZlSW5kZXhdKTtcbiAgdXNlQ29udHJvbFByb3BzVmFsaWRhdG9yKHtcbiAgICBpc0luaXRpYWxNb3VudDogaXNJbml0aWFsTW91bnRSZWYuY3VycmVudCxcbiAgICBwcm9wczogcHJvcHMsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH0pO1xuICB2YXIgc2V0R2V0dGVyUHJvcENhbGxJbmZvID0gdXNlR2V0dGVyUHJvcHNDYWxsZWRDaGVja2VyKCdnZXREcm9wZG93blByb3BzJyk7IC8vIE1ha2UgaW5pdGlhbCByZWYgZmFsc2UuXG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpc0luaXRpYWxNb3VudFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0sIFtdKTsgLy8gRXZlbnQgaGFuZGxlciBmdW5jdGlvbnMuXG5cbiAgdmFyIHNlbGVjdGVkSXRlbUtleURvd25IYW5kbGVycyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltrZXlOYXZpZ2F0aW9uUHJldmlvdXNdID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBTZWxlY3RlZEl0ZW1LZXlEb3duTmF2aWdhdGlvblByZXZpb3VzXG4gICAgICB9KTtcbiAgICB9LCBfcmVmW2tleU5hdmlnYXRpb25OZXh0XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU2VsZWN0ZWRJdGVtS2V5RG93bk5hdmlnYXRpb25OZXh0XG4gICAgICB9KTtcbiAgICB9LCBfcmVmLkRlbGV0ZSA9IGZ1bmN0aW9uIERlbGV0ZSgpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogU2VsZWN0ZWRJdGVtS2V5RG93bkRlbGV0ZVxuICAgICAgfSk7XG4gICAgfSwgX3JlZi5CYWNrc3BhY2UgPSBmdW5jdGlvbiBCYWNrc3BhY2UoKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUtleURvd25CYWNrc3BhY2VcbiAgICAgIH0pO1xuICAgIH0sIF9yZWY7XG4gIH0sIFtkaXNwYXRjaCwga2V5TmF2aWdhdGlvbk5leHQsIGtleU5hdmlnYXRpb25QcmV2aW91c10pO1xuICB2YXIgZHJvcGRvd25LZXlEb3duSGFuZGxlcnMgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICByZXR1cm4gX3JlZjIgPSB7fSwgX3JlZjJba2V5TmF2aWdhdGlvblByZXZpb3VzXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGlzS2V5RG93bk9wZXJhdGlvblBlcm1pdHRlZChldmVudCkpIHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IERyb3Bkb3duS2V5RG93bk5hdmlnYXRpb25QcmV2aW91c1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfcmVmMi5CYWNrc3BhY2UgPSBmdW5jdGlvbiBCYWNrc3BhY2UoZXZlbnQpIHtcbiAgICAgIGlmIChpc0tleURvd25PcGVyYXRpb25QZXJtaXR0ZWQoZXZlbnQpKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBEcm9wZG93bktleURvd25CYWNrc3BhY2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3JlZjI7XG4gIH0sIFtkaXNwYXRjaCwga2V5TmF2aWdhdGlvblByZXZpb3VzXSk7IC8vIEdldHRlciBwcm9wcy5cblxuICB2YXIgZ2V0U2VsZWN0ZWRJdGVtUHJvcHMgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoX3RlbXApIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9yZWYzID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIF9yZWYzJHJlZktleSA9IF9yZWYzLnJlZktleSxcbiAgICAgICAgcmVmS2V5ID0gX3JlZjMkcmVmS2V5ID09PSB2b2lkIDAgPyAncmVmJyA6IF9yZWYzJHJlZktleSxcbiAgICAgICAgcmVmID0gX3JlZjMucmVmLFxuICAgICAgICBvbkNsaWNrID0gX3JlZjMub25DbGljayxcbiAgICAgICAgb25LZXlEb3duID0gX3JlZjMub25LZXlEb3duLFxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBfcmVmMy5zZWxlY3RlZEl0ZW0sXG4gICAgICAgIGluZGV4ID0gX3JlZjMuaW5kZXgsXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMywgW1wicmVmS2V5XCIsIFwicmVmXCIsIFwib25DbGlja1wiLCBcIm9uS2V5RG93blwiLCBcInNlbGVjdGVkSXRlbVwiLCBcImluZGV4XCJdKTtcblxuICAgIHZhciBsYXRlc3RTdGF0ZSA9IGxhdGVzdC5jdXJyZW50LnN0YXRlO1xuICAgIHZhciBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXgoaW5kZXgsIHNlbGVjdGVkSXRlbSwgbGF0ZXN0U3RhdGUuc2VsZWN0ZWRJdGVtcyk7XG5cbiAgICBpZiAoaXRlbUluZGV4IDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXNzIGVpdGhlciBzZWxlY3RlZEl0ZW0gb3IgaW5kZXggaW4gZ2V0U2VsZWN0ZWRJdGVtUHJvcHMhJyk7XG4gICAgfVxuXG4gICAgdmFyIHNlbGVjdGVkSXRlbUhhbmRsZUNsaWNrID0gZnVuY3Rpb24gc2VsZWN0ZWRJdGVtSGFuZGxlQ2xpY2soKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFNlbGVjdGVkSXRlbUNsaWNrLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgc2VsZWN0ZWRJdGVtSGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIHNlbGVjdGVkSXRlbUhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgIGlmIChrZXkgJiYgc2VsZWN0ZWRJdGVtS2V5RG93bkhhbmRsZXJzW2tleV0pIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtS2V5RG93bkhhbmRsZXJzW2tleV0oZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbcmVmS2V5XSA9IGhhbmRsZVJlZnMocmVmLCBmdW5jdGlvbiAoc2VsZWN0ZWRJdGVtTm9kZSkge1xuICAgICAgaWYgKHNlbGVjdGVkSXRlbU5vZGUpIHtcbiAgICAgICAgc2VsZWN0ZWRJdGVtUmVmcy5jdXJyZW50LnB1c2goc2VsZWN0ZWRJdGVtTm9kZSk7XG4gICAgICB9XG4gICAgfSksIF9leHRlbmRzMi50YWJJbmRleCA9IGluZGV4ID09PSBsYXRlc3RTdGF0ZS5hY3RpdmVJbmRleCA/IDAgOiAtMSwgX2V4dGVuZHMyLm9uQ2xpY2sgPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbkNsaWNrLCBzZWxlY3RlZEl0ZW1IYW5kbGVDbGljayksIF9leHRlbmRzMi5vbktleURvd24gPSBjYWxsQWxsRXZlbnRIYW5kbGVycyhvbktleURvd24sIHNlbGVjdGVkSXRlbUhhbmRsZUtleURvd24pLCBfZXh0ZW5kczIpLCByZXN0KTtcbiAgfSwgW2Rpc3BhdGNoLCBsYXRlc3QsIHNlbGVjdGVkSXRlbUtleURvd25IYW5kbGVyc10pO1xuICB2YXIgZ2V0RHJvcGRvd25Qcm9wcyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChfdGVtcDIsIF90ZW1wMykge1xuICAgIHZhciBfZXh0ZW5kczM7XG5cbiAgICB2YXIgX3JlZjQgPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyLFxuICAgICAgICBfcmVmNCRyZWZLZXkgPSBfcmVmNC5yZWZLZXksXG4gICAgICAgIHJlZktleSA9IF9yZWY0JHJlZktleSA9PT0gdm9pZCAwID8gJ3JlZicgOiBfcmVmNCRyZWZLZXksXG4gICAgICAgIHJlZiA9IF9yZWY0LnJlZixcbiAgICAgICAgb25LZXlEb3duID0gX3JlZjQub25LZXlEb3duLFxuICAgICAgICBvbkNsaWNrID0gX3JlZjQub25DbGljayxcbiAgICAgICAgX3JlZjQkcHJldmVudEtleUFjdGlvID0gX3JlZjQucHJldmVudEtleUFjdGlvbixcbiAgICAgICAgcHJldmVudEtleUFjdGlvbiA9IF9yZWY0JHByZXZlbnRLZXlBY3RpbyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNCRwcmV2ZW50S2V5QWN0aW8sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgW1wicmVmS2V5XCIsIFwicmVmXCIsIFwib25LZXlEb3duXCIsIFwib25DbGlja1wiLCBcInByZXZlbnRLZXlBY3Rpb25cIl0pO1xuXG4gICAgdmFyIF9yZWY1ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMyxcbiAgICAgICAgX3JlZjUkc3VwcHJlc3NSZWZFcnJvID0gX3JlZjUuc3VwcHJlc3NSZWZFcnJvcixcbiAgICAgICAgc3VwcHJlc3NSZWZFcnJvciA9IF9yZWY1JHN1cHByZXNzUmVmRXJybyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmNSRzdXBwcmVzc1JlZkVycm87XG5cbiAgICBzZXRHZXR0ZXJQcm9wQ2FsbEluZm8oJ2dldERyb3Bkb3duUHJvcHMnLCBzdXBwcmVzc1JlZkVycm9yLCByZWZLZXksIGRyb3Bkb3duUmVmKTtcblxuICAgIHZhciBkcm9wZG93bkhhbmRsZUtleURvd24gPSBmdW5jdGlvbiBkcm9wZG93bkhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBrZXkgPSBub3JtYWxpemVBcnJvd0tleShldmVudCk7XG5cbiAgICAgIGlmIChrZXkgJiYgZHJvcGRvd25LZXlEb3duSGFuZGxlcnNba2V5XSkge1xuICAgICAgICBkcm9wZG93bktleURvd25IYW5kbGVyc1trZXldKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRyb3Bkb3duSGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBkcm9wZG93bkhhbmRsZUNsaWNrKCkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBEcm9wZG93bkNsaWNrXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW3JlZktleV0gPSBoYW5kbGVSZWZzKHJlZiwgZnVuY3Rpb24gKGRyb3Bkb3duTm9kZSkge1xuICAgICAgaWYgKGRyb3Bkb3duTm9kZSkge1xuICAgICAgICBkcm9wZG93blJlZi5jdXJyZW50ID0gZHJvcGRvd25Ob2RlO1xuICAgICAgfVxuICAgIH0pLCBfZXh0ZW5kczMpLCAhcHJldmVudEtleUFjdGlvbiAmJiB7XG4gICAgICBvbktleURvd246IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uS2V5RG93biwgZHJvcGRvd25IYW5kbGVLZXlEb3duKSxcbiAgICAgIG9uQ2xpY2s6IGNhbGxBbGxFdmVudEhhbmRsZXJzKG9uQ2xpY2ssIGRyb3Bkb3duSGFuZGxlQ2xpY2spXG4gICAgfSwgcmVzdCk7XG4gIH0sIFtkaXNwYXRjaCwgZHJvcGRvd25LZXlEb3duSGFuZGxlcnMsIHNldEdldHRlclByb3BDYWxsSW5mb10pOyAvLyByZXR1cm5zXG5cbiAgdmFyIGFkZFNlbGVjdGVkSXRlbSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChzZWxlY3RlZEl0ZW0pIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvbkFkZFNlbGVjdGVkSXRlbSxcbiAgICAgIHNlbGVjdGVkSXRlbTogc2VsZWN0ZWRJdGVtXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgcmVtb3ZlU2VsZWN0ZWRJdGVtID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNlbGVjdGVkSXRlbSkge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEZ1bmN0aW9uUmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgICAgc2VsZWN0ZWRJdGVtOiBzZWxlY3RlZEl0ZW1cbiAgICB9KTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHZhciBzZXRTZWxlY3RlZEl0ZW1zID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5ld1NlbGVjdGVkSXRlbXMpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldFNlbGVjdGVkSXRlbXMsXG4gICAgICBzZWxlY3RlZEl0ZW1zOiBuZXdTZWxlY3RlZEl0ZW1zXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgc2V0QWN0aXZlSW5kZXggPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAobmV3QWN0aXZlSW5kZXgpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBGdW5jdGlvblNldEFjdGl2ZUluZGV4LFxuICAgICAgYWN0aXZlSW5kZXg6IG5ld0FjdGl2ZUluZGV4XG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB2YXIgcmVzZXQgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogRnVuY3Rpb25SZXNldCQyXG4gICAgfSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICByZXR1cm4ge1xuICAgIGdldFNlbGVjdGVkSXRlbVByb3BzOiBnZXRTZWxlY3RlZEl0ZW1Qcm9wcyxcbiAgICBnZXREcm9wZG93blByb3BzOiBnZXREcm9wZG93blByb3BzLFxuICAgIGFkZFNlbGVjdGVkSXRlbTogYWRkU2VsZWN0ZWRJdGVtLFxuICAgIHJlbW92ZVNlbGVjdGVkSXRlbTogcmVtb3ZlU2VsZWN0ZWRJdGVtLFxuICAgIHNldFNlbGVjdGVkSXRlbXM6IHNldFNlbGVjdGVkSXRlbXMsXG4gICAgc2V0QWN0aXZlSW5kZXg6IHNldEFjdGl2ZUluZGV4LFxuICAgIHJlc2V0OiByZXNldCxcbiAgICBzZWxlY3RlZEl0ZW1zOiBzZWxlY3RlZEl0ZW1zLFxuICAgIGFjdGl2ZUluZGV4OiBhY3RpdmVJbmRleFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEb3duc2hpZnQ7XG5leHBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3gsIHVzZU11bHRpcGxlU2VsZWN0aW9uLCB1c2VTZWxlY3QgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9