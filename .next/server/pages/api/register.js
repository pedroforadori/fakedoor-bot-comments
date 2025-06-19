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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/register.ts":
/*!***********************************!*\
  !*** ./src/pages/api/register.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email, platform } = req.body;\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\", \"emails.json\");\n        const fileData = await fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(filePath, \"utf-8\").catch(()=>\"[]\");\n        const entries = JSON.parse(fileData);\n        const alreadyExists = entries.some((entry)=>entry.email === email && entry.platform === platform);\n        if (!alreadyExists) {\n            entries.push({\n                email,\n                platform,\n                date: new Date().toISOString()\n            });\n            await fs__WEBPACK_IMPORTED_MODULE_0__.promises.writeFile(filePath, JSON.stringify(entries, null, 2));\n        }\n        res.status(200).json({\n            success: true\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3JlZ2lzdGVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ29DO0FBQ1o7QUFFVCxlQUFlRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixJQUFJSyxJQUFJO1FBQ3BDLE1BQU1DLFdBQVdSLGdEQUFTLENBQUNVLFFBQVFDLEdBQUcsSUFBSSxRQUFRO1FBQ2xELE1BQU1DLFdBQVcsTUFBTWIsd0NBQUVBLENBQUNjLFFBQVEsQ0FBQ0wsVUFBVSxTQUFTTSxLQUFLLENBQUMsSUFBTTtRQUNsRSxNQUFNQyxVQUFVQyxLQUFLQyxLQUFLLENBQUNMO1FBQzNCLE1BQU1NLGdCQUFnQkgsUUFBUUksSUFBSSxDQUFDQyxDQUFBQSxRQUFTQSxNQUFNZixLQUFLLEtBQUtBLFNBQVNlLE1BQU1kLFFBQVEsS0FBS0E7UUFDeEYsSUFBSSxDQUFDWSxlQUFlO1lBQ2xCSCxRQUFRTSxJQUFJLENBQUM7Z0JBQUVoQjtnQkFBT0M7Z0JBQVVnQixNQUFNLElBQUlDLE9BQU9DLFdBQVc7WUFBRztZQUMvRCxNQUFNekIsd0NBQUVBLENBQUMwQixTQUFTLENBQUNqQixVQUFVUSxLQUFLVSxTQUFTLENBQUNYLFNBQVMsTUFBTTtRQUM3RDtRQUNBWixJQUFJd0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQUs7SUFDdkMsT0FBTztRQUNMMUIsSUFBSXdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUFxQjtJQUNyRDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFrZS1kb29yLXlvdXR1YmUvLi9zcmMvcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzQzZmMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwbGF0Zm9ybSB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIsIFwiZW1haWxzLmpzb25cIik7XG4gICAgY29uc3QgZmlsZURhdGEgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCwgXCJ1dGYtOFwiKS5jYXRjaCgoKSA9PiBcIltdXCIpO1xuICAgIGNvbnN0IGVudHJpZXMgPSBKU09OLnBhcnNlKGZpbGVEYXRhKTtcbiAgICBjb25zdCBhbHJlYWR5RXhpc3RzID0gZW50cmllcy5zb21lKGVudHJ5ID0+IGVudHJ5LmVtYWlsID09PSBlbWFpbCAmJiBlbnRyeS5wbGF0Zm9ybSA9PT0gcGxhdGZvcm0pO1xuICAgIGlmICghYWxyZWFkeUV4aXN0cykge1xuICAgICAgZW50cmllcy5wdXNoKHsgZW1haWwsIHBsYXRmb3JtLCBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSk7XG4gICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsIDIpKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6IFwiTWV0aG9kIG5vdCBhbGxvd2VkXCIgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcm9taXNlcyIsImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBsYXRmb3JtIiwiYm9keSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJmaWxlRGF0YSIsInJlYWRGaWxlIiwiY2F0Y2giLCJlbnRyaWVzIiwiSlNPTiIsInBhcnNlIiwiYWxyZWFkeUV4aXN0cyIsInNvbWUiLCJlbnRyeSIsInB1c2giLCJkYXRlIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwid3JpdGVGaWxlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/register.ts"));
module.exports = __webpack_exports__;

})();