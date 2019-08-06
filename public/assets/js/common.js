(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader');
    setTimeout(function () {
      preloader.style.visibility = 'hidden';
      preloader.style.opacity = '0';
      preloader.style.transition = 'all .5s';
    }, 1000);
  });
  var images = document.images,
      imagesTotalCount = images.length,
      imagesCount = 0,
      percents = document.querySelector('.preloader__persents');

  for (var i = 0; i < images.length; i++) {
    var imageClone = new Image();
    imageClone.onload = imageLoader;
    imageClone.onerror = imageLoader;
    imageClone.src = images[i].src;
  }

  function imageLoader() {
    imagesCount++;
    percents.innerHTML = (100 / imagesTotalCount * imagesCount << 0) + '%';
  }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hamburger; });
var hamburger = function hamburger() {
  var hamburger = document.querySelector('.hamburger-icon');
  var hamburgerMenu = document.querySelector('.hamburger-menu');
  var hamburgerLayer1 = document.querySelector('.hamburger__layer-1');
  var hamburgerLayer2 = document.querySelector('.hamburger__layer-2');
  var hamburgerLayer3 = document.querySelector('.hamburger__layer-3');
  hamburger.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hamburger-menu_active');
    hamburgerLayer1.classList.toggle('hamburger__cross-layer-1');
    hamburgerLayer2.classList.toggle('hamburger__cross-layer-2');
    hamburgerLayer3.classList.toggle('hamburger__cross-layer-3');
  });
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var icon = document.querySelector('.hamburger-icon');
  var hamburgerContainer = document.querySelector('.hamburger-menu__list');
  var hamburgerBgRight = document.querySelector('.hamburger-menu__bg-right');
  var hamburgerBgLeft = document.querySelector('.hamburger-menu__bg-left');
  var togle = false;
  icon.addEventListener('click', function () {
    var hamburgerItems = Array.prototype.slice.call(hamburgerContainer.children);
    var countTransitionDelay = 0.3;
    togle ? togle = false : togle = true;

    if (togle) {
      hamburgerItems.forEach(function (item) {
        countTransitionDelay += 0.1;
        item.style.transition = "opacity .3s linear ".concat(countTransitionDelay, "s");
        item.style.opacity = '1';
        hamburgerBgRight.style.left = '0';
        hamburgerBgLeft.style.right = '0';
      });
    } else {
      hamburgerItems.forEach(function (item) {
        // countTransitionDelay += 0.2;
        item.style.transition = 'none';
        item.style.opacity = '0';
        hamburgerBgRight.style.left = '-50%';
        hamburgerBgLeft.style.right = '-50%';
      });
    }
  });
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (blockClick, toBlockMove) {
  var elementClick = document.querySelector(blockClick);
  var toElementMove = document.querySelector(toBlockMove);
  elementClick.addEventListener('click', function () {
    function elementMoveDown() {
      var timerId = setInterval(function () {
        if (0 >= toElementMove.getBoundingClientRect().top) {
          window.scrollBy(0, toElementMove.getBoundingClientRect().top);
          clearInterval(timerId);
        } else {
          window.scrollBy(0, 8);
        }
      }, 1);
    }

    function elementMoveUp() {
      var timerId = setInterval(function () {
        if (0 <= toElementMove.getBoundingClientRect().top) {
          window.scrollBy(0, toElementMove.getBoundingClientRect().top);
          clearInterval(timerId);
        } else {
          window.scrollBy(0, -12);
        }
      }, 1);
    }

    toElementMove.getBoundingClientRect().top >= 0 ? elementMoveDown() : elementMoveUp();
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
]]);