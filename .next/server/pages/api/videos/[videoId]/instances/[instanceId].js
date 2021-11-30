"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/videos/[videoId]/instances/[instanceId]";
exports.ids = ["pages/api/videos/[videoId]/instances/[instanceId]"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "./pages/api/videos/[videoId]/instances/[instanceId]/index.ts":
/*!********************************************************************!*\
  !*** ./pages/api/videos/[videoId]/instances/[instanceId]/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../services */ \"./services/index.ts\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nasync function handler(req, res) {\n  if (req.method === 'GET') {\n    const videoId = req.query.videoId;\n    const instanceId = req.query.instanceId;\n    const {\n      data,\n      error\n    } = await _services__WEBPACK_IMPORTED_MODULE_0__.supabaseServer.from('video_instances').select(`\n                video_id (url, length)\n            `).eq('code', instanceId);\n\n    if (error) {\n      console.error(error);\n      res.status(400);\n      res.json({\n        error\n      });\n    }\n\n    res.status(200);\n    res.json({\n      data: data[0]\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdmlkZW9zL1t2aWRlb0lkXS9pbnN0YW5jZXMvW2luc3RhbmNlSWRdL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFQTtBQUVlLGVBQWVDLE9BQWYsQ0FDWEMsR0FEVyxFQUVYQyxHQUZXLEVBR2I7QUFDRSxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN0QixVQUFNQyxPQUFPLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSixDQUFVRCxPQUExQjtBQUNBLFVBQU1FLFVBQVUsR0FBR0wsR0FBRyxDQUFDSSxLQUFKLENBQVVDLFVBQTdCO0FBRUEsVUFBTTtBQUFDQyxNQUFBQSxJQUFEO0FBQU9DLE1BQUFBO0FBQVAsUUFBZ0IsTUFBTVQsMERBQUEsQ0FDbEIsaUJBRGtCLEVBRXZCVyxNQUZ1QixDQUVmO0FBQ3JCO0FBQ0EsYUFKb0MsRUFLdkJDLEVBTHVCLENBS3BCLE1BTG9CLEVBS1pMLFVBTFksQ0FBNUI7O0FBT0EsUUFBSUUsS0FBSixFQUFXO0FBQ1BJLE1BQUFBLE9BQU8sQ0FBQ0osS0FBUixDQUFjQSxLQUFkO0FBQ0FOLE1BQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsTUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBQ04sUUFBQUE7QUFBRCxPQUFUO0FBQ0g7O0FBRUROLElBQUFBLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBQ1AsTUFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUMsQ0FBRDtBQUFYLEtBQVQ7QUFDSDtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFsYWdyaWN1bHR1cmUvLi9wYWdlcy9hcGkvdmlkZW9zL1t2aWRlb0lkXS9pbnN0YW5jZXMvW2luc3RhbmNlSWRdL2luZGV4LnRzPzhmZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHN1cGFiYXNlU2VydmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICBjb25zdCB2aWRlb0lkID0gcmVxLnF1ZXJ5LnZpZGVvSWQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSByZXEucXVlcnkuaW5zdGFuY2VJZDtcblxuICAgICAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gYXdhaXQgc3VwYWJhc2VTZXJ2ZXJcbiAgICAgICAgICAgIC5mcm9tKCd2aWRlb19pbnN0YW5jZXMnKVxuICAgICAgICAgICAgLnNlbGVjdChgXG4gICAgICAgICAgICAgICAgdmlkZW9faWQgKHVybCwgbGVuZ3RoKVxuICAgICAgICAgICAgYClcbiAgICAgICAgICAgIC5lcSgnY29kZScsIGluc3RhbmNlSWQpO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKTtcbiAgICAgICAgICAgIHJlcy5qc29uKHtlcnJvcn0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApO1xuICAgICAgICByZXMuanNvbih7ZGF0YTogZGF0YVswXX0pO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJzdXBhYmFzZVNlcnZlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ2aWRlb0lkIiwicXVlcnkiLCJpbnN0YW5jZUlkIiwiZGF0YSIsImVycm9yIiwiZnJvbSIsInNlbGVjdCIsImVxIiwiY29uc29sZSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/videos/[videoId]/instances/[instanceId]/index.ts\n");

/***/ }),

/***/ "./services/index.ts":
/*!***************************!*\
  !*** ./services/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase),\n/* harmony export */   \"supabaseServer\": () => (/* binding */ supabaseServer)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n // Create a single supabase client for interacting with your database\n\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)('https://lgorurlbqociyuaxqpon.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzgzNjEyOCwiZXhwIjoxOTUzNDEyMTI4fQ.REMBIXKmWgwy-uZ2EVd2YREawtFe9pl1t6JoU7730Jc');\nconst supabaseServer = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)('https://lgorurlbqociyuaxqpon.supabase.co', process.env.SUPABASE_SECRET);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0NBRUE7O0FBQ08sTUFBTUMsUUFBUSxHQUFHRCxtRUFBWSxDQUFDLDBDQUFELEVBQTZDLHFKQUE3QyxDQUE3QjtBQUNBLE1BQU1FLGNBQWMsR0FBR0YsbUVBQVksQ0FBQywwQ0FBRCxFQUE2Q0csT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQXpELENBQW5DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWFsYWdyaWN1bHR1cmUvLi9zZXJ2aWNlcy9pbmRleC50cz85ZWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuLy8gQ3JlYXRlIGEgc2luZ2xlIHN1cGFiYXNlIGNsaWVudCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB5b3VyIGRhdGFiYXNlXG5leHBvcnQgY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoJ2h0dHBzOi8vbGdvcnVybGJxb2NpeXVheHFwb24uc3VwYWJhc2UuY28nLCAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnliMnhsSWpvaVlXNXZiaUlzSW1saGRDSTZNVFl6Tnpnek5qRXlPQ3dpWlhod0lqb3hPVFV6TkRFeU1USTRmUS5SRU1CSVhLbVdnd3ktdVoyRVZkMllSRWF3dEZlOXBsMXQ2Sm9VNzczMEpjJylcbmV4cG9ydCBjb25zdCBzdXBhYmFzZVNlcnZlciA9IGNyZWF0ZUNsaWVudCgnaHR0cHM6Ly9sZ29ydXJsYnFvY2l5dWF4cXBvbi5zdXBhYmFzZS5jbycsIHByb2Nlc3MuZW52LlNVUEFCQVNFX1NFQ1JFVCk7Il0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlIiwic3VwYWJhc2VTZXJ2ZXIiLCJwcm9jZXNzIiwiZW52IiwiU1VQQUJBU0VfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/videos/[videoId]/instances/[instanceId]/index.ts"));
module.exports = __webpack_exports__;

})();