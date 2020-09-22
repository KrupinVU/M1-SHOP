/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar burger = document.querySelector(\".nav__burger\");\nvar menu = document.querySelector(\".nav__list\");\nvar orderButtons = document.querySelectorAll(\".item__order\");\nvar popup = document.querySelector(\".popup\");\nvar popupTitle = document.querySelector(\".popup__title\");\nvar popupImg = document.querySelector(\".popup__img\");\nvar sizes = document.querySelectorAll(\".item__size\");\nvar sizeInput = document.querySelector(\"#size\");\nvar colors = document.querySelectorAll(\".item__color\");\nvar colorInput = document.querySelector(\"#color\");\nvar popupButton = document.querySelector(\".popup__order\");\nburger.addEventListener(\"click\", function () {\n  if (menu.style.display === \"flex\") {\n    menu.style.display = \"none\";\n  } else {\n    menu.style.display = \"flex\";\n  }\n});\n\nvar _iterator = _createForOfIteratorHelper(sizes),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var size = _step.value;\n    size.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      var _iterator4 = _createForOfIteratorHelper(sizes),\n          _step4;\n\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var _size = _step4.value;\n\n          _size.classList.remove(\"item__size_active\");\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n\n      size.classList.add(\"item__size_active\");\n      sizeInput.value = e.target.innerText;\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nvar _iterator2 = _createForOfIteratorHelper(colors),\n    _step2;\n\ntry {\n  var _loop2 = function _loop2() {\n    var color = _step2.value;\n    color.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n\n      var _iterator5 = _createForOfIteratorHelper(colors),\n          _step5;\n\n      try {\n        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n          var _color = _step5.value;\n\n          _color.classList.remove(\"item__color_active\");\n        }\n      } catch (err) {\n        _iterator5.e(err);\n      } finally {\n        _iterator5.f();\n      }\n\n      color.classList.add(\"item__color_active\");\n      colorInput.value = e.target.innerText;\n    });\n  };\n\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    _loop2();\n  }\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n\nvar _iterator3 = _createForOfIteratorHelper(orderButtons),\n    _step3;\n\ntry {\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    var orderButton = _step3.value;\n    orderButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      popup.style.display = \"flex\";\n      popupTitle.innerText = e.target.parentElement.querySelector(\".item__name\").innerText;\n      popupImg.setAttribute(\"src\", e.target.parentElement.querySelector(\"img\").getAttribute(\"src\"));\n    });\n  }\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\n\npopup.addEventListener(\"click\", function (event) {\n  if (event.target === document.querySelector(\".popup\")) {\n    popup.style.display = \"none\";\n  }\n});\npopup.addEventListener(\"click\", function (event) {\n  popup.style.display = \"none\";\n});\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
