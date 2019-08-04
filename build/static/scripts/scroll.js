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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pixelsTag = document.querySelector('div.pixel');\nvar progressTag = document.querySelector(\"div.progress\");\nvar bodyTag = document.querySelector(\"body\");\nvar sections = document.querySelectorAll(\"section\");\nvar clientTag = document.querySelector(\"div.client\");\nvar pageTag = document.querySelector(\"div.page\");\nvar headerTag = document.querySelector(\"header\");\n\n// When we scroll the page, update the pixels tag to show how far we've scrolled\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  pixelsTag.innerHTML = pixels;\n});\n\n// when we scroll the page, make a progress bar that keeps track of the distance\n\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  var pageHeight = bodyTag.getBoundingClientRect().height;\n  var totalScrollableDistance = pageHeight - window.innerHeight;\n  var percentage = pixels / totalScrollableDistance;\n\n  progressTag.style.width = 100 * percentage + \"%\";\n});\n\n// When we scroll the page, see how far down the page we have scrolled, then for each section check whether we've passed it, and if we have.. update the text in the header\n\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  sections.forEach(function (section) {\n    if (section.offsetTop <= pixels) {\n      clientTag.innerHTML = section.getAttribute('data-client');\n      pageTag.innerHTML = section.getAttribute('data-page');\n\n      if (section.hasAttribute('data-dark')) {\n        headerTag.classList.add('white');\n        progressTag.classList.add('white');\n      } else {\n        headerTag.classList.remove('white');\n        progressTag.classList.remove('white');\n      }\n    }\n  });\n});\n\n// When we scroll, make things parallax\n// We want to move certain tags based on how far away they are from an anchor point\n// The anchor point is the middle of the section\n// how far should we parallax?\n// it's a ratio of the scroll from the middle point\n\ndocument.addEventListener('scroll', function () {\n  var topViewport = window.pageYOffset;\n  var midViewport = topViewport + window.innerHeight / 2;\n\n  sections.forEach(function (section) {\n    var topSection = section.offsetTop;\n    var midSection = topSection + section.offsetHeight / 2;\n    var distanceToSection = midViewport - midSection;\n\n    var parallaxTags = section.querySelectorAll('[data-parallax]');\n\n    // loop over each parallaxed tag\n\n    parallaxTags.forEach(function (tag) {\n      var speed = parseFloat(tag.getAttribute('data-parallax'));\n      tag.style.transform = \"translate(0, \" + distanceToSection * speed + \"px)\";\n    });\n\n    var tag = section.querySelector('div.square');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Njcm9sbC5qcz9hNTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcGl4ZWxzVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBpeGVsJyk7XG52YXIgcHJvZ3Jlc3NUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnByb2dyZXNzXCIpO1xudmFyIGJvZHlUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbnZhciBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xudmFyIGNsaWVudFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2xpZW50XCIpO1xudmFyIHBhZ2VUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnBhZ2VcIik7XG52YXIgaGVhZGVyVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxuLy8gV2hlbiB3ZSBzY3JvbGwgdGhlIHBhZ2UsIHVwZGF0ZSB0aGUgcGl4ZWxzIHRhZyB0byBzaG93IGhvdyBmYXIgd2UndmUgc2Nyb2xsZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBpeGVscyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcGl4ZWxzVGFnLmlubmVySFRNTCA9IHBpeGVscztcbn0pO1xuXG4vLyB3aGVuIHdlIHNjcm9sbCB0aGUgcGFnZSwgbWFrZSBhIHByb2dyZXNzIGJhciB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBkaXN0YW5jZVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBwaXhlbHMgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHZhciBwYWdlSGVpZ2h0ID0gYm9keVRhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciB0b3RhbFNjcm9sbGFibGVEaXN0YW5jZSA9IHBhZ2VIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBwZXJjZW50YWdlID0gcGl4ZWxzIC8gdG90YWxTY3JvbGxhYmxlRGlzdGFuY2U7XG5cbiAgcHJvZ3Jlc3NUYWcuc3R5bGUud2lkdGggPSAxMDAgKiBwZXJjZW50YWdlICsgXCIlXCI7XG59KTtcblxuLy8gV2hlbiB3ZSBzY3JvbGwgdGhlIHBhZ2UsIHNlZSBob3cgZmFyIGRvd24gdGhlIHBhZ2Ugd2UgaGF2ZSBzY3JvbGxlZCwgdGhlbiBmb3IgZWFjaCBzZWN0aW9uIGNoZWNrIHdoZXRoZXIgd2UndmUgcGFzc2VkIGl0LCBhbmQgaWYgd2UgaGF2ZS4uIHVwZGF0ZSB0aGUgdGV4dCBpbiB0aGUgaGVhZGVyXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBpeGVscyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgIGlmIChzZWN0aW9uLm9mZnNldFRvcCA8PSBwaXhlbHMpIHtcbiAgICAgIGNsaWVudFRhZy5pbm5lckhUTUwgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGllbnQnKTtcbiAgICAgIHBhZ2VUYWcuaW5uZXJIVE1MID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcGFnZScpO1xuXG4gICAgICBpZiAoc2VjdGlvbi5oYXNBdHRyaWJ1dGUoJ2RhdGEtZGFyaycpKSB7XG4gICAgICAgIGhlYWRlclRhZy5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgICAgICBwcm9ncmVzc1RhZy5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgICAgIHByb2dyZXNzVGFnLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vLyBXaGVuIHdlIHNjcm9sbCwgbWFrZSB0aGluZ3MgcGFyYWxsYXhcbi8vIFdlIHdhbnQgdG8gbW92ZSBjZXJ0YWluIHRhZ3MgYmFzZWQgb24gaG93IGZhciBhd2F5IHRoZXkgYXJlIGZyb20gYW4gYW5jaG9yIHBvaW50XG4vLyBUaGUgYW5jaG9yIHBvaW50IGlzIHRoZSBtaWRkbGUgb2YgdGhlIHNlY3Rpb25cbi8vIGhvdyBmYXIgc2hvdWxkIHdlIHBhcmFsbGF4P1xuLy8gaXQncyBhIHJhdGlvIG9mIHRoZSBzY3JvbGwgZnJvbSB0aGUgbWlkZGxlIHBvaW50XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRvcFZpZXdwb3J0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB2YXIgbWlkVmlld3BvcnQgPSB0b3BWaWV3cG9ydCArIHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5cbiAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoc2VjdGlvbikge1xuICAgIHZhciB0b3BTZWN0aW9uID0gc2VjdGlvbi5vZmZzZXRUb3A7XG4gICAgdmFyIG1pZFNlY3Rpb24gPSB0b3BTZWN0aW9uICsgc2VjdGlvbi5vZmZzZXRIZWlnaHQgLyAyO1xuICAgIHZhciBkaXN0YW5jZVRvU2VjdGlvbiA9IG1pZFZpZXdwb3J0IC0gbWlkU2VjdGlvbjtcblxuICAgIHZhciBwYXJhbGxheFRhZ3MgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhcmFsbGF4XScpO1xuXG4gICAgLy8gbG9vcCBvdmVyIGVhY2ggcGFyYWxsYXhlZCB0YWdcblxuICAgIHBhcmFsbGF4VGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgIHZhciBzcGVlZCA9IHBhcnNlRmxvYXQodGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1wYXJhbGxheCcpKTtcbiAgICAgIHRhZy5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwLCBcIiArIGRpc3RhbmNlVG9TZWN0aW9uICogc3BlZWQgKyBcInB4KVwiO1xuICAgIH0pO1xuXG4gICAgdmFyIHRhZyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignZGl2LnNxdWFyZScpO1xuICB9KTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NjcmlwdHMvc2Nyb2xsLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })

/******/ });