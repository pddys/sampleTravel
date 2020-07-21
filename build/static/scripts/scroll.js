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
eval("\n\nvar pixelsTag = document.querySelector('div.pixel');\nvar progressTag = document.querySelector(\"div.progress\");\nvar bodyTag = document.querySelector(\"body\");\nvar sections = document.querySelectorAll(\"section\");\nvar clientTag = document.querySelector(\"div.client\");\nvar pageTag = document.querySelector(\"div.page\");\nvar headerTag = document.querySelector(\"header\");\n\n// When we scroll the page, update the pixels tag to show how far we've scrolled\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  pixelsTag.innerHTML = pixels;\n});\n\n// when we scroll the page, make a progress bar that keeps track of the distance\n\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  var pageHeight = bodyTag.getBoundingClientRect().height;\n  var totalScrollableDistance = pageHeight - window.innerHeight;\n  var percentage = pixels / totalScrollableDistance;\n\n  progressTag.style.width = 100 * percentage + \"%\";\n});\n\n// When we scroll the page, see how far down the page we have scrolled,\n// then for each section check whether we've passed it,\n// and if we have.. update the text in the header\n\ndocument.addEventListener('scroll', function () {\n  var pixels = window.pageYOffset;\n  sections.forEach(function (section) {\n    if (section.offsetTop <= pixels) {\n      clientTag.innerHTML = section.getAttribute('data-client');\n      pageTag.innerHTML = section.getAttribute('data-page');\n\n      if (section.hasAttribute('data-dark')) {\n        headerTag.classList.add('white');\n        progressTag.classList.add('white');\n      } else {\n        headerTag.classList.remove('white');\n        progressTag.classList.remove('white');\n      }\n    }\n  });\n});\n\n// When we scroll, make things parallax\n// We want to move certain tags based on how far away they are from an anchor point\n// The anchor point is the middle of the section\n// how far should we parallax?\n// it's a ratio of the scroll from the middle point\n\ndocument.addEventListener('scroll', function () {\n  var topViewport = window.pageYOffset;\n  var midViewport = topViewport + window.innerHeight / 2;\n\n  sections.forEach(function (section) {\n    var topSection = section.offsetTop;\n    var midSection = topSection + section.offsetHeight / 2;\n    var distanceToSection = midViewport - midSection;\n\n    var parallaxTags = section.querySelectorAll('[data-parallax]');\n\n    // loop over each parallaxed tag\n\n    parallaxTags.forEach(function (tag) {\n      var speed = parseFloat(tag.getAttribute('data-parallax'));\n      tag.style.transform = \"translate(0, \" + distanceToSection * speed + \"px)\";\n    });\n\n    var tag = section.querySelector('div.square');\n  });\n});\n\n//\n// Fade in images once they appear in the viewport\n//\nvar animatedTags = document.querySelectorAll(\"img\");\n\n// Fade out on load\nanimatedTags.forEach(function (tag) {\n  tag.style.opacity = 0;\n});\n\nvar fadeIn = function fadeIn() {\n  var delay = 0.25;\n  // Look through all the animated tags and see with the\n  // getBoundingClientRect if it's in the window\n  animatedTags.forEach(function (tag) {\n    var tagTop = tag.getBoundingClientRect().top;\n    var tagBottom = tag.getBoundingClientRect().bottom;\n\n    if (tagTop < window.innerHeight && tagBottom > 0) {\n      tag.style.animation = \"fadein 1s \" + delay + \"s both\";\n      delay = delay + 0.25;\n    } else {\n      tag.style.opacity = 0;\n      tag.style.animation = \"\";\n    }\n  });\n};\n\n// on load run fade in\nfadeIn();\n\n// on scroll run fade in\ndocument.addEventListener('scroll', function () {\n  fadeIn();\n});\n\n// on browser resize run fade in\nwindow.addEventListener('resize', function () {\n  fadeIn();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3Njcm9sbC5qcz9hNTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcGl4ZWxzVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnBpeGVsJyk7XG52YXIgcHJvZ3Jlc3NUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnByb2dyZXNzXCIpO1xudmFyIGJvZHlUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbnZhciBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWN0aW9uXCIpO1xudmFyIGNsaWVudFRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2xpZW50XCIpO1xudmFyIHBhZ2VUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnBhZ2VcIik7XG52YXIgaGVhZGVyVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcblxuLy8gV2hlbiB3ZSBzY3JvbGwgdGhlIHBhZ2UsIHVwZGF0ZSB0aGUgcGl4ZWxzIHRhZyB0byBzaG93IGhvdyBmYXIgd2UndmUgc2Nyb2xsZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHBpeGVscyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcGl4ZWxzVGFnLmlubmVySFRNTCA9IHBpeGVscztcbn0pO1xuXG4vLyB3aGVuIHdlIHNjcm9sbCB0aGUgcGFnZSwgbWFrZSBhIHByb2dyZXNzIGJhciB0aGF0IGtlZXBzIHRyYWNrIG9mIHRoZSBkaXN0YW5jZVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBwaXhlbHMgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHZhciBwYWdlSGVpZ2h0ID0gYm9keVRhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIHZhciB0b3RhbFNjcm9sbGFibGVEaXN0YW5jZSA9IHBhZ2VIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBwZXJjZW50YWdlID0gcGl4ZWxzIC8gdG90YWxTY3JvbGxhYmxlRGlzdGFuY2U7XG5cbiAgcHJvZ3Jlc3NUYWcuc3R5bGUud2lkdGggPSAxMDAgKiBwZXJjZW50YWdlICsgXCIlXCI7XG59KTtcblxuLy8gV2hlbiB3ZSBzY3JvbGwgdGhlIHBhZ2UsIHNlZSBob3cgZmFyIGRvd24gdGhlIHBhZ2Ugd2UgaGF2ZSBzY3JvbGxlZCxcbi8vIHRoZW4gZm9yIGVhY2ggc2VjdGlvbiBjaGVjayB3aGV0aGVyIHdlJ3ZlIHBhc3NlZCBpdCxcbi8vIGFuZCBpZiB3ZSBoYXZlLi4gdXBkYXRlIHRoZSB0ZXh0IGluIHRoZSBoZWFkZXJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICB2YXIgcGl4ZWxzID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgaWYgKHNlY3Rpb24ub2Zmc2V0VG9wIDw9IHBpeGVscykge1xuICAgICAgY2xpZW50VGFnLmlubmVySFRNTCA9IHNlY3Rpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWNsaWVudCcpO1xuICAgICAgcGFnZVRhZy5pbm5lckhUTUwgPSBzZWN0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1wYWdlJyk7XG5cbiAgICAgIGlmIChzZWN0aW9uLmhhc0F0dHJpYnV0ZSgnZGF0YS1kYXJrJykpIHtcbiAgICAgICAgaGVhZGVyVGFnLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICAgIHByb2dyZXNzVGFnLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJUYWcuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgICAgcHJvZ3Jlc3NUYWcuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIFdoZW4gd2Ugc2Nyb2xsLCBtYWtlIHRoaW5ncyBwYXJhbGxheFxuLy8gV2Ugd2FudCB0byBtb3ZlIGNlcnRhaW4gdGFncyBiYXNlZCBvbiBob3cgZmFyIGF3YXkgdGhleSBhcmUgZnJvbSBhbiBhbmNob3IgcG9pbnRcbi8vIFRoZSBhbmNob3IgcG9pbnQgaXMgdGhlIG1pZGRsZSBvZiB0aGUgc2VjdGlvblxuLy8gaG93IGZhciBzaG91bGQgd2UgcGFyYWxsYXg/XG4vLyBpdCdzIGEgcmF0aW8gb2YgdGhlIHNjcm9sbCBmcm9tIHRoZSBtaWRkbGUgcG9pbnRcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICB2YXIgdG9wVmlld3BvcnQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHZhciBtaWRWaWV3cG9ydCA9IHRvcFZpZXdwb3J0ICsgd2luZG93LmlubmVySGVpZ2h0IC8gMjtcblxuICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChzZWN0aW9uKSB7XG4gICAgdmFyIHRvcFNlY3Rpb24gPSBzZWN0aW9uLm9mZnNldFRvcDtcbiAgICB2YXIgbWlkU2VjdGlvbiA9IHRvcFNlY3Rpb24gKyBzZWN0aW9uLm9mZnNldEhlaWdodCAvIDI7XG4gICAgdmFyIGRpc3RhbmNlVG9TZWN0aW9uID0gbWlkVmlld3BvcnQgLSBtaWRTZWN0aW9uO1xuXG4gICAgdmFyIHBhcmFsbGF4VGFncyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFyYWxsYXhdJyk7XG5cbiAgICAvLyBsb29wIG92ZXIgZWFjaCBwYXJhbGxheGVkIHRhZ1xuXG4gICAgcGFyYWxsYXhUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdmFyIHNwZWVkID0gcGFyc2VGbG9hdCh0YWcuZ2V0QXR0cmlidXRlKCdkYXRhLXBhcmFsbGF4JykpO1xuICAgICAgdGFnLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDAsIFwiICsgZGlzdGFuY2VUb1NlY3Rpb24gKiBzcGVlZCArIFwicHgpXCI7XG4gICAgfSk7XG5cbiAgICB2YXIgdGFnID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdkaXYuc3F1YXJlJyk7XG4gIH0pO1xufSk7XG5cbi8vXG4vLyBGYWRlIGluIGltYWdlcyBvbmNlIHRoZXkgYXBwZWFyIGluIHRoZSB2aWV3cG9ydFxuLy9cbnZhciBhbmltYXRlZFRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuXG4vLyBGYWRlIG91dCBvbiBsb2FkXG5hbmltYXRlZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gIHRhZy5zdHlsZS5vcGFjaXR5ID0gMDtcbn0pO1xuXG52YXIgZmFkZUluID0gZnVuY3Rpb24gZmFkZUluKCkge1xuICB2YXIgZGVsYXkgPSAwLjI1O1xuICAvLyBMb29rIHRocm91Z2ggYWxsIHRoZSBhbmltYXRlZCB0YWdzIGFuZCBzZWUgd2l0aCB0aGVcbiAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlmIGl0J3MgaW4gdGhlIHdpbmRvd1xuICBhbmltYXRlZFRhZ3MuZm9yRWFjaChmdW5jdGlvbiAodGFnKSB7XG4gICAgdmFyIHRhZ1RvcCA9IHRhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIHRhZ0JvdHRvbSA9IHRhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG5cbiAgICBpZiAodGFnVG9wIDwgd2luZG93LmlubmVySGVpZ2h0ICYmIHRhZ0JvdHRvbSA+IDApIHtcbiAgICAgIHRhZy5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVpbiAxcyBcIiArIGRlbGF5ICsgXCJzIGJvdGhcIjtcbiAgICAgIGRlbGF5ID0gZGVsYXkgKyAwLjI1O1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWcuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICB0YWcuc3R5bGUuYW5pbWF0aW9uID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gb24gbG9hZCBydW4gZmFkZSBpblxuZmFkZUluKCk7XG5cbi8vIG9uIHNjcm9sbCBydW4gZmFkZSBpblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICBmYWRlSW4oKTtcbn0pO1xuXG4vLyBvbiBicm93c2VyIHJlc2l6ZSBydW4gZmFkZSBpblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgZmFkZUluKCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3JpcHRzL3Njcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ })

/******/ });