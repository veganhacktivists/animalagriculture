"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/watch/[videoId]/[instanceId]",{

/***/ "./components/CaptchaQueue.tsx":
/*!*************************************!*\
  !*** ./components/CaptchaQueue.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/components/CaptchaQueue.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5,\n    _templateObject6;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar CaptchaQueue = function CaptchaQueue(_ref) {\n  _s();\n\n  var captchas = _ref.captchas;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      answers = _useState[0],\n      setAnswers = _useState[1];\n\n  var setCaptchaAnswer = function setCaptchaAnswer(id, value) {\n    setAnswers(function (answers) {\n      return _objectSpread(_objectSpread({}, answers), {}, (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, id, value));\n    });\n  };\n\n  var submitCaptchaAnswer = function submitCaptchaAnswer(id) {};\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: captchas.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Queue, {\n      children: captchas.map(function (captcha) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CaptchaWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CaptchaImage, {\n            dangerouslySetInnerHTML: {\n              __html: captcha.image\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(AnswerWrapper, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CaptchaAnswer, {\n              type: \"text\",\n              placeholder: \"What does the above captcha say?\",\n              onChange: function onChange(e) {\n                return setCaptchaAnswer(captcha.id, e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(SubmitButton, {\n              onClick: function onClick() {\n                return submitCaptchaAnswer(captcha.id);\n              },\n              children: \"submit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 29\n          }, _this)]\n        }, captcha.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(CaptchaQueue, \"SlLgiTL1v/ZMs8/MrcyjPCigSRg=\");\n\n_c = CaptchaQueue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaptchaQueue);\nvar Queue = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding-left: 30px;\\n\"])));\n_c2 = Queue;\nvar CaptchaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-bottom: 30px; \\n    background-color: #fff;\\n\"])));\n_c3 = CaptchaWrapper;\nvar CaptchaImage = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\"])));\n_c4 = CaptchaImage;\nvar AnswerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c5 = AnswerWrapper;\nvar CaptchaAnswer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input(_templateObject5 || (_templateObject5 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    padding: 10px 15px;\\n    margin-top: 0;\\n    border: none;\\n    background-color: #eee;\\n\"])));\n_c6 = CaptchaAnswer;\nvar SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button(_templateObject6 || (_templateObject6 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    border: none;\\n    background-color: \", \";\\n    color: #fff;\\n    padding: 10px 15px;\\n    cursor: pointer;\\n\"])), _styled__WEBPACK_IMPORTED_MODULE_3__.Colors.Indigo);\n_c7 = SubmitButton;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"CaptchaQueue\");\n$RefreshReg$(_c2, \"Queue\");\n$RefreshReg$(_c3, \"CaptchaWrapper\");\n$RefreshReg$(_c4, \"CaptchaImage\");\n$RefreshReg$(_c5, \"AnswerWrapper\");\n$RefreshReg$(_c6, \"CaptchaAnswer\");\n$RefreshReg$(_c7, \"SubmitButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcHRjaGFRdWV1ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7O0FBTUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQ2pDLGtCQUE4QkosK0NBQVEsQ0FBaUIsRUFBakIsQ0FBdEM7QUFBQSxNQUFPSyxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsRUFBRCxFQUFhQyxLQUFiLEVBQStCO0FBQ3BESCxJQUFBQSxVQUFVLENBQUMsVUFBQUQsT0FBTyxFQUFJO0FBQ2xCLDZDQUNPQSxPQURQLHdLQUVLRyxFQUZMLEVBRVVDLEtBRlY7QUFJSCxLQUxTLENBQVY7QUFNSCxHQVBEOztBQVNBLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0YsRUFBRCxFQUFnQixDQUUzQyxDQUZEOztBQUlBLHNCQUNJO0FBQUEsY0FDQ0osUUFBUSxDQUFDTyxNQUFULGlCQUNHLDhEQUFDLEtBQUQ7QUFBQSxnQkFDS1AsUUFBUSxDQUFDUSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCLDRCQUNJLDhEQUFDLGNBQUQ7QUFBQSxrQ0FDSSw4REFBQyxZQUFEO0FBQWMsbUNBQXVCLEVBQUU7QUFBQ0MsY0FBQUEsTUFBTSxFQUFFRCxPQUFPLENBQUNFO0FBQWpCO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxhQUFEO0FBQUEsb0NBQ0ksOERBQUMsYUFBRDtBQUNJLGtCQUFJLEVBQUMsTUFEVDtBQUVJLHlCQUFXLEVBQUMsa0NBRmhCO0FBR0ksc0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHVCQUFPVCxnQkFBZ0IsQ0FBQ00sT0FBTyxDQUFDTCxFQUFULEVBQWFRLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUF0QixDQUF2QjtBQUFBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JLDhEQUFDLFlBQUQ7QUFBYyxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLG1CQUFtQixDQUFDRyxPQUFPLENBQUNMLEVBQVQsQ0FBekI7QUFBQSxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQSxXQUFxQkssT0FBTyxDQUFDTCxFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBZUgsT0FoQkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosbUJBREo7QUF5QkgsQ0F6Q0Q7O0dBQU1MOztLQUFBQTtBQTJDTiwrREFBZUEsWUFBZjtBQUdBLElBQU1lLEtBQUssR0FBR2pCLDZEQUFILDZPQUFYO01BQU1pQjtBQUlOLElBQU1FLGNBQWMsR0FBR25CLDZEQUFILDhRQUFwQjtNQUFNbUI7QUFJTixJQUFNQyxZQUFZLEdBQUdwQiw2REFBSCxzTkFBbEI7TUFBTW9CO0FBRU4sSUFBTUMsYUFBYSxHQUFHckIsNkRBQUgsK1FBQW5CO01BQU1xQjtBQUlOLElBQU1DLGFBQWEsR0FBR3RCLCtEQUFILHFVQUFuQjtNQUFNc0I7QUFPTixJQUFNRSxZQUFZLEdBQUd4QixnRUFBSCx3VUFFTUMsa0RBRk4sQ0FBbEI7TUFBTXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FwdGNoYVF1ZXVlLnRzeD9jMzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gJy4vc3R5bGVkJztcblxudHlwZSBDYXB0Y2hhQW5zd2VycyA9IHtcbiAgICBbY2FwdGNoYUlkOiBzdHJpbmddOiBzdHJpbmdcbn1cblxuY29uc3QgQ2FwdGNoYVF1ZXVlID0gKHtjYXB0Y2hhc30pID0+IHtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZTxDYXB0Y2hhQW5zd2Vycz4oe30pO1xuXG4gICAgY29uc3Qgc2V0Q2FwdGNoYUFuc3dlciA9IChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEFuc3dlcnMoYW5zd2VycyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgW2lkXTogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0Q2FwdGNoYUFuc3dlciA9IChpZDogc3RyaW5nKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICB7Y2FwdGNoYXMubGVuZ3RoICYmIChcbiAgICAgICAgICAgIDxRdWV1ZT5cbiAgICAgICAgICAgICAgICB7Y2FwdGNoYXMubWFwKChjYXB0Y2hhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FwdGNoYVdyYXBwZXIga2V5PXtjYXB0Y2hhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FwdGNoYUltYWdlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjYXB0Y2hhLmltYWdlfX0+PC9DYXB0Y2hhSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuc3dlcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXB0Y2hhQW5zd2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgZG9lcyB0aGUgYWJvdmUgY2FwdGNoYSBzYXk/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FwdGNoYUFuc3dlcihjYXB0Y2hhLmlkLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b24gb25DbGljaz17KCkgPT4gc3VibWl0Q2FwdGNoYUFuc3dlcihjYXB0Y2hhLmlkKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJtaXRCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbnN3ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXB0Y2hhV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9RdWV1ZT5cbiAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhUXVldWU7XG5cblxuY29uc3QgUXVldWUgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbmA7XG5cbmNvbnN0IENhcHRjaGFXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4OyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuYDtcbmNvbnN0IENhcHRjaGFJbWFnZSA9IHN0eWxlZC5kaXZgXG5gO1xuY29uc3QgQW5zd2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuY29uc3QgQ2FwdGNoYUFuc3dlciA9IHN0eWxlZC5pbnB1dGBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbmA7XG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9ycy5JbmRpZ299O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5gOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiQ29sb3JzIiwiQ2FwdGNoYVF1ZXVlIiwiY2FwdGNoYXMiLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsInNldENhcHRjaGFBbnN3ZXIiLCJpZCIsInZhbHVlIiwic3VibWl0Q2FwdGNoYUFuc3dlciIsImxlbmd0aCIsIm1hcCIsImNhcHRjaGEiLCJfX2h0bWwiLCJpbWFnZSIsImUiLCJ0YXJnZXQiLCJRdWV1ZSIsImRpdiIsIkNhcHRjaGFXcmFwcGVyIiwiQ2FwdGNoYUltYWdlIiwiQW5zd2VyV3JhcHBlciIsIkNhcHRjaGFBbnN3ZXIiLCJpbnB1dCIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsIkluZGlnbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CaptchaQueue.tsx\n");

/***/ })

});