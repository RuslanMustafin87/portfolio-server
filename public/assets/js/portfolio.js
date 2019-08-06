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
/******/ 		4: 0
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
/******/ 	deferredModules.push([13,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__(4);

// EXTERNAL MODULE: ./src/pages/main.scss
var main = __webpack_require__(5);

// EXTERNAL MODULE: ./src/pages/portfolio/portfolio.scss
var portfolio = __webpack_require__(12);

// EXTERNAL MODULE: ./src/components/blocks/preloader/preloader.js
var preloader = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/blocks/hamburger_icon/hamburger_icon.js
var hamburger_icon = __webpack_require__(1);

// EXTERNAL MODULE: ./src/components/blocks/hamburger_menu/hamburger_menu.js
var hamburger_menu = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/blocks/slider/js/slider_show.js
/* harmony default export */ var slider_show = (function (sliderContainer, direction, slideActiveClass) {
  var slideFirst = sliderContainer.firstElementChild;
  var slideLast = sliderContainer.lastElementChild;
  var slideActive = sliderContainer.querySelector('.' + slideActiveClass);

  if (direction === 'down') {
    var slideNext = slideActive.nextElementSibling;
    slideActive.classList.remove(slideActiveClass);

    if (slideNext) {
      slideNext.classList.add(slideActiveClass);
    } else {
      slideFirst.classList.add(slideActiveClass);
    }
  } else {
    var slidePrev = slideActive.previousElementSibling;
    slideActive.classList.remove(slideActiveClass);

    if (slidePrev) {
      slidePrev.classList.add(slideActiveClass);
    } else {
      slideLast.classList.add(slideActiveClass);
    }
  }
});
// CONCATENATED MODULE: ./src/components/blocks/slider/js/slider_small.js
// функция для получения порядкового номера элемента в родителе
function indexElem(elem) {
  var i = 0;

  while (elem.previousElementSibling) {
    i++;
    elem = elem.previousElementSibling;
  }

  return i;
} // движение вниз контейнера сладера


function sliderSmallDown(container, activeClass) {
  var slideActive = document.getElementsByClassName(activeClass)[0];
  var slideNext = slideActive.nextElementSibling;
  var slideFirst = container.firstElementChild;
  var positionSlider;
  slideActive.classList.remove(activeClass);

  if (slideNext) {
    slideNext.classList.add(activeClass);
    positionSlider = indexElem(slideNext) * -100;
  } else {
    slideFirst.classList.add(activeClass);
    positionSlider = indexElem(slideFirst) * -100;
  }

  container.style.top = positionSlider + '%';
} // движение вверх контейнера сладера


function sliderSmallUp(container, activeClass) {
  var slideActive = document.getElementsByClassName(activeClass)[0];
  var slidePrev = slideActive.previousElementSibling;
  var slideLast = container.lastElementChild;
  var positionSlider;
  slideActive.classList.remove(activeClass);

  if (slidePrev) {
    slidePrev.classList.add(activeClass);
    positionSlider = indexElem(slidePrev) * -100;
  } else {
    slideLast.classList.add(activeClass);
    positionSlider = indexElem(slideLast) * -100;
  }

  container.style.top = positionSlider + '%';
}


// CONCATENATED MODULE: ./src/components/blocks/slider/js/slider_title.js
var sliderContainer = document.querySelector('.slider-title-list');
var slideFirst = sliderContainer.firstElementChild;
var slideLast = sliderContainer.lastElementChild;

var popUpTextShow = function popUpTextShow(slideActive, slidePrevActive) {
  var itemPrevActive = slidePrevActive.querySelector('.title').querySelector('#popup-text');
  var arrItemPrevChildren = Array.prototype.slice.call(itemPrevActive.children);
  arrItemPrevChildren.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transition = 'none';
  });
  var itemActive = slideActive.querySelector('.title').querySelector('#popup-text');
  var arrItemChildren = Array.prototype.slice.call(itemActive.children);
  var countTransitionDelay = 0;
  arrItemChildren.forEach(function (item) {
    item.style.opacity = '1';
    countTransitionDelay += 0.06;
    item.style.transition = "opacity .05s linear ".concat(countTransitionDelay, "s");
  });
};

document.addEventListener('DOMContentLoaded', popUpTextShow(slideFirst, slideFirst));

var sliderTitleDown = function sliderTitleDown() {
  var slideActive = document.querySelector('.slider-title-list__item_active');
  var slideNext = slideActive.nextElementSibling;
  slideActive.classList.remove('slider-title-list__item_active');

  if (slideNext) {
    slideNext.classList.add('slider-title-list__item_active');
    popUpTextShow(slideNext, slideActive);
  } else {
    slideFirst.classList.add('slider-title-list__item_active');
    popUpTextShow(slideFirst, slideActive);
  }
};

var sliderTitleUp = function sliderTitleUp() {
  var slideActive = document.querySelector('.slider-title-list__item_active');
  var slidePrev = slideActive.previousElementSibling;
  slideActive.classList.remove('slider-title-list__item_active');

  if (slidePrev) {
    slidePrev.classList.add('slider-title-list__item_active');
    popUpTextShow(slidePrev, slideActive);
  } else {
    slideLast.classList.add('slider-title-list__item_active');
    popUpTextShow(slideLast, slideActive);
  }
};


// CONCATENATED MODULE: ./src/components/blocks/slider/index.js



/* harmony default export */ var slider = (function () {
  var sliderBigContainer = document.querySelector('.slider__container'); // const sliderTitleContainer = document.querySelector('.slider-title-list');

  var slideDown = document.querySelector('.slider__slide-down');
  var slideUp = document.querySelector('.slider__slide-up');
  var sliderContainerDown = document.querySelector('.slider__container-down');
  var sliderContainerUp = document.querySelector('.slider__container-up');
  slideDown.addEventListener('click', function () {
    sliderTitleDown();
    slider_show(sliderBigContainer, 'down', 'slide__active'); // sliderShow(sliderTitleContainer, 'down', 'slider-title-list__item_active');

    sliderSmallDown(sliderContainerDown, 'slider-vert-roll__slide-active_down');
    sliderSmallUp(sliderContainerUp, 'slider-vert-roll__slide-active_up');
  });
  slideUp.addEventListener('click', function () {
    sliderTitleUp();
    slider_show(sliderBigContainer, 'up', 'slide__active'); // sliderShow(sliderTitleContainer, 'up', 'slider-title-list__item_active');

    sliderSmallDown(sliderContainerUp, 'slider-vert-roll__slide-active_up');
    sliderSmallUp(sliderContainerDown, 'slider-vert-roll__slide-active_down');
  });
});
// EXTERNAL MODULE: ./src/components/blocks/arrowMove/arrow.js
var arrow = __webpack_require__(3);

// CONCATENATED MODULE: ./src/pages/portfolio/portfolio.js








Object(preloader["a" /* default */])();
Object(hamburger_menu["a" /* default */])();
Object(hamburger_icon["a" /* hamburger */])();
slider();
Object(arrow["a" /* default */])('.hero__arrow', '.portfolio-content');
Object(arrow["a" /* default */])('.arrow_direction-up', '.hero'); // позиционирование фона для элемента с блюром

function portfolio_blur() {
  var heightToWidth = 0.7506;
  var widthToHeight = 1.3323; // соотношение ширины к высоте у картинки для фона

  var section = document.querySelector('.portfolio-contact'); // секция родитель

  var blurElem = document.querySelector('.portfolio-contact__form-blur'); // форма

  var form = document.querySelector('.portfolio-contact__form'); // элемент с блюром

  var sectionHeight = section.clientHeight; // высота секции родителя

  var sectionWidth = section.clientWidth;
  var formWidth = form.clientWidth; // ширина формы
  // const formHeight= form.clientHeight; // выстота формы 

  function heightPositioning() {
    // функция позиционирования фона по высоте
    var sectionBackgroundWidth = sectionHeight * widthToHeight; // ширина фона родителя 

    var posTop = -form.offsetTop; // позиционирование по высоте

    var posLeft = -(sectionBackgroundWidth / 2 - formWidth / 2); // позиционирование по высоте

    blurElem.style.backgroundSize = "auto ".concat(sectionHeight, "px"); // размеры фона элемета блюра

    blurElem.style.backgroundPosition = "".concat(posLeft, "px ").concat(posTop, "px"); // позиционирование фона
  }

  function widthPositioning() {
    // функция позиционирования фона по ширине
    var sectionBackgroundHeight = sectionWidth * heightToWidth;
    var posTop = -((sectionBackgroundHeight - sectionHeight) / 2 + form.offsetTop);
    var posLeft = -form.offsetLeft;
    blurElem.style.backgroundSize = "".concat(sectionWidth, "px auto"); // размеры фона элемета блюра

    blurElem.style.backgroundPosition = "".concat(posLeft, "px ").concat(posTop, "px"); // позиционирование фона
  }

  widthToHeight > sectionWidth / sectionHeight ? heightPositioning() : widthPositioning();
}

window.addEventListener('load', portfolio_blur);
window.addEventListener('resize', portfolio_blur);

/***/ })

/******/ });