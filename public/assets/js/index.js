/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([14,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(4);

// EXTERNAL MODULE: ./src/pages/main.scss
var main = __webpack_require__(5);

// EXTERNAL MODULE: ./src/pages/index/index.scss
var index = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/blocks/preloader/preloader.js
var preloader = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/blocks/parallax/parallax.js
var parallax = function parallax() {
  var welcome = document.querySelector('.welcome');
  welcome.addEventListener('mousemove', function (event) {
    // var parallaxContainer = document.querySelector('.parallax');
    var layer = document.querySelector('.parallax__layer');
    var coordX = window.innerWidth / 2 - event.pageX;
    var coordY = window.innerHeight / 2 - event.pageY;
    layer.style.transform = "translate(".concat(coordX / 40, "px, ").concat(coordY / 40, "px)");
  });
};
// CONCATENATED MODULE: ./src/pages/index/index.js





Object(preloader["a" /* default */])();
parallax();
var welAutorize = document.querySelector('.autorize');
var welLogin = document.querySelector('.welcome__center_login');
var welAuthor = document.querySelector('.welcome__center_author');
var toMain = document.querySelector('#toMain'); // flip_index gorizont

window.onload = function () {
  welAuthor.style.transition = '.8s linear 1s';
  welAuthor.style.opacity = '1';
  welAuthor.style.transform = 'perspective(600px) rotateX(0deg)';
  setTimeout(function () {
    welAuthor.style.transformOrigin = '50% 50%';
  }, 1800);

  // videoDisable(); 
  // videoResize();
};


function videoDisable() {
  if (window.innerWidth > 768) {
    // eslint-disable-next-line quotes
    document.getElementById('video__container').innerHTML = "<video class='video' autoplay loop muted preload='auto'> <source src='../images/night.webm' type=`video/webm; codecs='vp8, vorbis'` /> <source src='../images/night.mp4' type=`video/mp4; codecs='avc1.42E01E, mp4a.40.2'` /><object data='../images/night.swf' type='application/x-shockwave-flash'><param name='movie' value='/assets/images/video.swf'></object></video>";
    document.querySelector('.video').play();
  }
}

// function videoDisable() {
//   if (window.innerWidth <= 768) {
//     // eslint-disable-next-line quotes
//     console.log(document.getElementById('video__container'))
//     document.getElementById('video__container').remove();
//   }
// }

document.addEventListener("DOMContentLoaded", videoDisable);

// window.addEventListener('resize', videoResize);
// function videoResize(){
// 	let video = document.querySelector('.welcome__video');
// 	if (window.innerWidth >= window.innerHeight) {
// 		video.style.height = 'auto';
// 		video.style.width = '100%';
// 	} else {
// 		video.style.width = 'auto';
// 		video.style.height = '100%';
// 	}
// } 
// flip_index vertical


welAutorize.addEventListener('click', function () {
  welAuthor.style.transition = 'transform .3s linear';
  welLogin.style.transition = 'transform .3s linear';
  welAuthor.style.transitionDelay = '0s';
  welAuthor.style.transform = 'perspective(600px) rotateY(90deg)';
  welLogin.style.transitionDelay = '0.3s';
  welLogin.style.transform = 'perspective(600px) rotateY(0deg)';
  welAutorize.style.opacity = '0';
});
toMain.addEventListener('click', function () {
  welLogin.style.transitionDelay = '0s';
  welLogin.style.transform = 'perspective(600px) rotateY(-90deg)';
  welAuthor.style.transitionDelay = '0.3s';
  welAuthor.style.transform = 'perspective(600px) rotateY(0deg)';
  welAutorize.style.opacity = '1';
});

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });