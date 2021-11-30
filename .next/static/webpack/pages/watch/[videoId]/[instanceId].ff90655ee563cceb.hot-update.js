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

/***/ "./pages/watch/[videoId]/[instanceId]/index.tsx":
/*!******************************************************!*\
  !*** ./pages/watch/[videoId]/[instanceId]/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLocalStorage */ \"./hooks/useLocalStorage.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4,\n    _templateObject5;\n\n\n\n\n\n\n\n\n\n\n\n\nvar getVideoProgressLSKey = function getVideoProgressLSKey(instanceId) {\n  return \"AA_WATCH_\".concat(instanceId);\n};\n\nvar secondsToReadableTime = function secondsToReadableTime(seconds) {\n  var hours = Math.floor(seconds / 3600);\n  var leftoverSecondsFromHours = seconds - hours * 3600;\n  var minutes = Math.floor(leftoverSecondsFromHours / 60);\n  var leftOverSeconds = leftoverSecondsFromHours - minutes * 60;\n  var minutesReadable = minutes < 10 ? \"0\".concat(minutes) : minutes;\n  var secondsReadable = leftOverSeconds < 10 ? \"0\".concat(leftOverSeconds) : leftOverSeconds;\n  return \"\".concat(hours, \":\").concat(minutesReadable, \":\").concat(secondsReadable);\n};\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playerOpen = _useState2[0],\n      setPlayerOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      duration = _useState4[0],\n      setDuration = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState5[0],\n      setProgress = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      volume = _useState6[0],\n      setVolume = _useState6[1];\n\n  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(getVideoProgressLSKey(router.query.instanceId), null),\n      _useLocalStorage2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalStorage, 2),\n      savedProgress = _useLocalStorage2[0],\n      setSavedProgress = _useLocalStorage2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_8__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var togglePlaying = function togglePlaying() {\n    setPlaying(!playing);\n  };\n\n  var handleClose = function handleClose() {\n    setPlayerOpen(false);\n    setPlaying(false);\n  };\n\n  var handleReady = function handleReady() {\n    var _videoRef$current;\n\n    var duration = (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.getDuration();\n    setDuration(Math.floor(duration));\n  };\n\n  var handleProgress = function handleProgress(_ref) {\n    var playedSeconds = _ref.playedSeconds;\n    setProgress(Math.round(playedSeconds));\n    setSavedProgress(playedSeconds);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 25\n        }, _this), videoURL && !playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n          onClick: function onClick() {\n            return setPlayerOpen(true);\n          },\n          children: progress ? 'resume the film' : 'start the film'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 25\n        }, _this), videoURL && playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              ref: videoRef,\n              url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n              muted: !playing,\n              playing: playing,\n              volume: volume,\n              width: \"100%\",\n              height: 400,\n              onReady: handleReady,\n              onProgress: handleProgress,\n              controls: false\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerControls, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: togglePlaying,\n                  children: playing ? 'pause' : 'play'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 113,\n                  columnNumber: 41\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: handleClose,\n                  children: \"close\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 41\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(VolumeWrapper, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(VolumeInput, {\n                  type: \"range\",\n                  min: 0,\n                  max: 1,\n                  step: 0.02,\n                  value: volume,\n                  onChange: function onChange(event) {\n                    setVolume(event.target.valueAsNumber);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Timer, {\n                children: [secondsToReadableTime(progress), \" / \", secondsToReadableTime(duration)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"aEGoqxxBCl9NBuMW/4K1Cn7aUBA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-top: 60px;\\n\\n    \", \" {\\n        margin-right: 10px;\\n    }\\n\"])), _components_styled__WEBPACK_IMPORTED_MODULE_7__.Button);\n_c2 = PlayerWrapper;\nvar PlayerControls = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-top: 30px;\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c3 = PlayerControls;\nvar Timer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n\"])));\n_c4 = Timer;\nvar VolumeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: flex;\\n    align-items: center;\\n\"])));\n_c5 = VolumeWrapper;\nvar VolumeInput = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].input(_templateObject5 || (_templateObject5 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 300px;\\n\"])));\n_c6 = VolumeInput;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"PlayerWrapper\");\n$RefreshReg$(_c3, \"PlayerControls\");\n$RefreshReg$(_c4, \"Timer\");\n$RefreshReg$(_c5, \"VolumeWrapper\");\n$RefreshReg$(_c6, \"VolumeInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1hLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsVUFBRCxFQUFnQztBQUMxRCw0QkFBbUJBLFVBQW5CO0FBQ0gsQ0FGRDs7QUFJQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE9BQUQsRUFBcUI7QUFDL0MsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsT0FBTyxHQUFHLElBQXJCLENBQWQ7QUFDQSxNQUFNSSx3QkFBd0IsR0FBR0osT0FBTyxHQUFJQyxLQUFLLEdBQUcsSUFBcEQ7QUFDQSxNQUFNSSxPQUFPLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXQyx3QkFBd0IsR0FBRyxFQUF0QyxDQUFoQjtBQUNBLE1BQU1FLGVBQWUsR0FBR0Ysd0JBQXdCLEdBQUlDLE9BQU8sR0FBRyxFQUE5RDtBQUVBLE1BQU1FLGVBQWUsR0FBR0YsT0FBTyxHQUFHLEVBQVYsY0FBbUJBLE9BQW5CLElBQStCQSxPQUF2RDtBQUNBLE1BQU1HLGVBQWUsR0FBR0YsZUFBZSxHQUFHLEVBQWxCLGNBQTJCQSxlQUEzQixJQUErQ0EsZUFBdkU7QUFFQSxtQkFBVUwsS0FBVixjQUFtQk0sZUFBbkIsY0FBc0NDLGVBQXRDO0FBQ0gsQ0FWRDs7QUFZQSxJQUFNQyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDekIsa0JBQWdDdkIsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT3dCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHM0IsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTTRCLE1BQU0sR0FBR3ZCLHNEQUFTLEVBQXhCOztBQUNBLG1CQUFvQ0osK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBTzRCLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQThCN0IsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBTzhCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDL0IsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQUEsTUFBT2dDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDakMsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQUEsTUFBT2tDLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQTRCbkMsK0NBQVEsQ0FBQyxDQUFELENBQXBDO0FBQUEsTUFBT29DLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUNBLHlCQUEwQzNCLHVFQUFlLENBQ3JEQyxxQkFBcUIsQ0FBQ2dCLE1BQU0sQ0FBQ1csS0FBUCxDQUFhMUIsVUFBZCxDQURnQyxFQUVyRCxJQUZxRCxDQUF6RDtBQUFBO0FBQUEsTUFBTzJCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUtBMUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTTJDLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNoQixNQUFNLENBQUNXLEtBQVAsQ0FBYUcsT0FBM0IsSUFBc0NkLE1BQU0sQ0FBQ1csS0FBUCxDQUFhRyxPQUFiLENBQXFCLENBQXJCLENBQXRDLEdBQWdFZCxNQUFNLENBQUNXLEtBQVAsQ0FBYUcsT0FBN0Y7QUFDQSxRQUFNN0IsVUFBVSxHQUFHOEIsS0FBSyxDQUFDQyxPQUFOLENBQWNoQixNQUFNLENBQUNXLEtBQVAsQ0FBYTFCLFVBQTNCLElBQXlDZSxNQUFNLENBQUNXLEtBQVAsQ0FBYTFCLFVBQWIsQ0FBd0IsQ0FBeEIsQ0FBekMsR0FBc0VlLE1BQU0sQ0FBQ1csS0FBUCxDQUFhMUIsVUFBdEc7O0FBRUEsUUFBSTZCLE9BQU8sSUFBSTdCLFVBQWYsRUFBMkI7QUFDdkJILE1BQUFBLHdFQUFnQixDQUFDbUMsUUFBUSxDQUFDSCxPQUFELENBQVQsRUFBb0I3QixVQUFwQixDQUFoQixDQUNLaUMsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNUQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBckIsUUFBQUEsV0FBVyxDQUFDcUIsR0FBRyxDQUFDRyxJQUFKLENBQVNDLFFBQVQsQ0FBa0JDLEdBQW5CLENBQVg7QUFDSCxPQUpMO0FBS0g7QUFDSixHQVhRLEVBV04sQ0FBQ3hCLE1BQUQsQ0FYTSxDQUFUOztBQWFBLE1BQU15QixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDeEJyQixJQUFBQSxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQ0gsR0FGRDs7QUFJQSxNQUFNdUIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QnhCLElBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUUsSUFBQUEsVUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsTUFBTXVCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsUUFBTXRCLFFBQVEsd0JBQUdOLFFBQVEsQ0FBQzZCLE9BQVosc0RBQUcsa0JBQWtCQyxXQUFsQixFQUFqQjtBQUNBdkIsSUFBQUEsV0FBVyxDQUFDakIsSUFBSSxDQUFDQyxLQUFMLENBQVdlLFFBQVgsQ0FBRCxDQUFYO0FBQ0gsR0FIRDs7QUFLQSxNQUFNeUIsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUF1QjtBQUFBLFFBQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDMUN2QixJQUFBQSxXQUFXLENBQUNuQixJQUFJLENBQUMyQyxLQUFMLENBQVdELGFBQVgsQ0FBRCxDQUFYO0FBQ0FsQixJQUFBQSxnQkFBZ0IsQ0FBQ2tCLGFBQUQsQ0FBaEI7QUFDSCxHQUhEOztBQUtBLHNCQUNJLCtEQUFDLDZEQUFEO0FBQUEsNEJBQ0ksK0RBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSw2QkFDSSwrREFBQyx5REFBRDtBQUFBLGdDQUNJLCtEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFHSyxDQUFDbEMsUUFBRCxpQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUixFQU9LQSxRQUFRLElBQUksQ0FBQ0ksVUFBYixpQkFDRywrREFBQyxzREFBRDtBQUFRLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsYUFBYSxDQUFDLElBQUQsQ0FBbkI7QUFBQSxXQUFqQjtBQUFBLG9CQUNLSyxRQUFRLEdBQUcsaUJBQUgsR0FBdUI7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSUixFQWFLVixRQUFRLElBQUlJLFVBQVosaUJBQ0csK0RBQUMsYUFBRDtBQUFBLGlDQUNJO0FBQUEsb0NBQ0ksK0RBQUMsb0RBQUQ7QUFDSSxpQkFBRyxFQUFFRixRQURUO0FBRUksaUJBQUcsRUFBQyxrRUFGUjtBQUdJLG1CQUFLLEVBQUUsQ0FBQ0ksT0FIWjtBQUlJLHFCQUFPLEVBQUVBLE9BSmI7QUFLSSxvQkFBTSxFQUFFTSxNQUxaO0FBTUksbUJBQUssRUFBQyxNQU5WO0FBT0ksb0JBQU0sRUFBRSxHQVBaO0FBUUkscUJBQU8sRUFBRWtCLFdBUmI7QUFTSSx3QkFBVSxFQUFFRyxjQVRoQjtBQVVJLHNCQUFRLEVBQUU7QUFWZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBY0ksK0RBQUMsY0FBRDtBQUFBLHNDQUNJO0FBQUEsd0NBQ0ksK0RBQUMsc0RBQUQ7QUFBUSx5QkFBTyxFQUFFTCxhQUFqQjtBQUFBLDRCQUFpQ3RCLE9BQU8sR0FBRyxPQUFILEdBQWE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLCtEQUFDLHNEQUFEO0FBQVEseUJBQU8sRUFBRXVCLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQU1JLCtEQUFDLGFBQUQ7QUFBQSx1Q0FDSSwrREFBQyxXQUFEO0FBQ0ksc0JBQUksRUFBQyxPQURUO0FBRUkscUJBQUcsRUFBRSxDQUZUO0FBR0kscUJBQUcsRUFBRSxDQUhUO0FBSUksc0JBQUksRUFBRSxJQUpWO0FBS0ksdUJBQUssRUFBRWpCLE1BTFg7QUFNSSwwQkFBUSxFQUFFLGtCQUFBd0IsS0FBSyxFQUFJO0FBQ2Z2QixvQkFBQUEsU0FBUyxDQUFDdUIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLGFBQWQsQ0FBVDtBQUNIO0FBUkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTkosZUFtQkksK0RBQUMsS0FBRDtBQUFBLDJCQUNLakQscUJBQXFCLENBQUNxQixRQUFELENBRDFCLFNBQ3lDckIscUJBQXFCLENBQUNtQixRQUFELENBRDlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0VILENBbEhEOztHQUFNVDtVQUdhbkIsb0RBTTJCTTs7O0tBVHhDYTtBQW9ITiwrREFBZUEsSUFBZjtBQUVBLElBQU13QyxhQUFhLEdBQUc3RCw4REFBSCwrZUFZYkksc0RBWmEsQ0FBbkI7TUFBTXlEO0FBaUJOLElBQU1FLGNBQWMsR0FBRy9ELDhEQUFILHNTQUFwQjtNQUFNK0Q7QUFNTixJQUFNQyxLQUFLLEdBQUdoRSw4REFBSCx3T0FBWDtNQUFNZ0U7QUFJTixJQUFNQyxhQUFhLEdBQUdqRSw4REFBSCxvUUFBbkI7TUFBTWlFO0FBSU4sSUFBTUMsV0FBVyxHQUFHbEUsZ0VBQUgseU9BQWpCO01BQU1rRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeD8xZTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFBhZ2VDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlZCc7XG5pbXBvcnQgeyBnZXRWaWRlb0luc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmlkZW9TZXJ2aWNlJztcbmltcG9ydCB7IHVzZUxvY2FsU3RvcmFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2hvb2tzL3VzZUxvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IGdldFZpZGVvUHJvZ3Jlc3NMU0tleSA9IChpbnN0YW5jZUlkOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIHJldHVybiBgQUFfV0FUQ0hfJHtpbnN0YW5jZUlkfWA7XG59XG5cbmNvbnN0IHNlY29uZHNUb1JlYWRhYmxlVGltZSA9IChzZWNvbmRzOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IGxlZnRvdmVyU2Vjb25kc0Zyb21Ib3VycyA9IHNlY29uZHMgLSAoaG91cnMgKiAzNjAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMgLyA2MCk7XG4gICAgY29uc3QgbGVmdE92ZXJTZWNvbmRzID0gbGVmdG92ZXJTZWNvbmRzRnJvbUhvdXJzIC0gKG1pbnV0ZXMgKiA2MCk7XG5cbiAgICBjb25zdCBtaW51dGVzUmVhZGFibGUgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlcztcbiAgICBjb25zdCBzZWNvbmRzUmVhZGFibGUgPSBsZWZ0T3ZlclNlY29uZHMgPCAxMCA/IGAwJHtsZWZ0T3ZlclNlY29uZHN9YCA6IGxlZnRPdmVyU2Vjb25kcztcblxuICAgIHJldHVybiBgJHtob3Vyc306JHttaW51dGVzUmVhZGFibGV9OiR7c2Vjb25kc1JlYWRhYmxlfWA7XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2aWRlb1VSTCwgc2V0VmlkZW9VUkxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3BsYXllck9wZW4sIHNldFBsYXllck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IFtzYXZlZFByb2dyZXNzLCBzZXRTYXZlZFByb2dyZXNzXSA9IHVzZUxvY2FsU3RvcmFnZShcbiAgICAgICAgZ2V0VmlkZW9Qcm9ncmVzc0xTS2V5KHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkIGFzIHN0cmluZyksXG4gICAgICAgIG51bGxcbiAgICApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IEFycmF5LmlzQXJyYXkocm91dGVyLnF1ZXJ5LnZpZGVvSWQpID8gcm91dGVyLnF1ZXJ5LnZpZGVvSWRbMF0gOiByb3V0ZXIucXVlcnkudmlkZW9JZDtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VJZCA9IEFycmF5LmlzQXJyYXkocm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQpID8gcm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWRbMF0gOiByb3V0ZXIucXVlcnkuaW5zdGFuY2VJZDtcblxuICAgICAgICBpZiAodmlkZW9JZCAmJiBpbnN0YW5jZUlkKSB7XG4gICAgICAgICAgICBnZXRWaWRlb0luc3RhbmNlKHBhcnNlSW50KHZpZGVvSWQpLCBpbnN0YW5jZUlkKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9VUkwocmVzLmRhdGEudmlkZW9faWQudXJsKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtyb3V0ZXJdKTtcblxuICAgIGNvbnN0IHRvZ2dsZVBsYXlpbmcgPSAoKSA9PiB7XG4gICAgICAgIHNldFBsYXlpbmcoIXBsYXlpbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRQbGF5ZXJPcGVuKGZhbHNlKTtcbiAgICAgICAgc2V0UGxheWluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdmlkZW9SZWYuY3VycmVudD8uZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgc2V0RHVyYXRpb24oTWF0aC5mbG9vcihkdXJhdGlvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gKHsgcGxheWVkU2Vjb25kcyB9KSA9PiB7XG4gICAgICAgIHNldFByb2dyZXNzKE1hdGgucm91bmQocGxheWVkU2Vjb25kcykpO1xuICAgICAgICBzZXRTYXZlZFByb2dyZXNzKHBsYXllZFNlY29uZHMpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmFhLndhdGNoPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IHBhaWQgdG8gd2F0Y2ggaW1wb3J0YW50IHZpZGVvcyBmcm9tIGFjdGl2aXN0c1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7IXZpZGVvVVJMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Mb2FkaW5nLi4uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9VUkwgJiYgIXBsYXllck9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRQbGF5ZXJPcGVuKHRydWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZ3Jlc3MgPyAncmVzdW1lIHRoZSBmaWxtJyA6ICdzdGFydCB0aGUgZmlsbSd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9VUkwgJiYgcGxheWVyT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmZhcm10cmFuc3BhcmVuY3kub3JnL3VwbG9hZHMvdmlkZW9zL0RvbWluaW9uXzcyMC5tcDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZD17IXBsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lPXt2b2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlUmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzPXtoYW5kbGVQcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlUGxheWluZ30+e3BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PmNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZvbHVtZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZvbHVtZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwPXswLjAyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Vm9sdW1lKGV2ZW50LnRhcmdldC52YWx1ZUFzTnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZvbHVtZVdyYXBwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kc1RvUmVhZGFibGVUaW1lKHByb2dyZXNzKX0gLyB7c2Vjb25kc1RvUmVhZGFibGVUaW1lKGR1cmF0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGltZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYXllcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuY29uc3QgUGxheWVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuXG4gICAgJHtCdXR0b259IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbmA7XG5cbmNvbnN0IFBsYXllckNvbnRyb2xzID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgVGltZXIgPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiAjZmZmO1xuYDtcblxuY29uc3QgVm9sdW1lV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IFZvbHVtZUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIHdpZHRoOiAzMDBweDtcbmA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVkIiwiUmVhY3RQbGF5ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiZ2V0VmlkZW9JbnN0YW5jZSIsInVzZUxvY2FsU3RvcmFnZSIsImdldFZpZGVvUHJvZ3Jlc3NMU0tleSIsImluc3RhbmNlSWQiLCJzZWNvbmRzVG9SZWFkYWJsZVRpbWUiLCJzZWNvbmRzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMiLCJtaW51dGVzIiwibGVmdE92ZXJTZWNvbmRzIiwibWludXRlc1JlYWRhYmxlIiwic2Vjb25kc1JlYWRhYmxlIiwiSG9tZSIsInZpZGVvVVJMIiwic2V0VmlkZW9VUkwiLCJ2aWRlb1JlZiIsInJvdXRlciIsInBsYXllck9wZW4iLCJzZXRQbGF5ZXJPcGVuIiwicGxheWluZyIsInNldFBsYXlpbmciLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInZvbHVtZSIsInNldFZvbHVtZSIsInF1ZXJ5Iiwic2F2ZWRQcm9ncmVzcyIsInNldFNhdmVkUHJvZ3Jlc3MiLCJ2aWRlb0lkIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ2aWRlb19pZCIsInVybCIsInRvZ2dsZVBsYXlpbmciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVJlYWR5IiwiY3VycmVudCIsImdldER1cmF0aW9uIiwiaGFuZGxlUHJvZ3Jlc3MiLCJwbGF5ZWRTZWNvbmRzIiwicm91bmQiLCJldmVudCIsInRhcmdldCIsInZhbHVlQXNOdW1iZXIiLCJQbGF5ZXJXcmFwcGVyIiwiZGl2IiwiUGxheWVyQ29udHJvbHMiLCJUaW1lciIsIlZvbHVtZVdyYXBwZXIiLCJWb2x1bWVJbnB1dCIsImlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});