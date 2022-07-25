// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"mpVp":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  "use strict";
  /**
   * Easy selector helper function
   */

  var select = function select(el) {
    var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    el = el.trim();

    if (all) {
      return _toConsumableArray(document.querySelectorAll(el));
    } else {
      return document.querySelector(el);
    }
  };
  /**
   * Easy event listener function
   */


  var on = function on(type, el, listener) {
    var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var selectEl = select(el, all);

    if (selectEl) {
      if (all) {
        selectEl.forEach(function (e) {
          return e.addEventListener(type, listener);
        });
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  /**
   * Mobile nav toggle
   */


  on('click', '.mobile-nav-toggle', function (e) {
    select('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });
})();

function addCard(upcardTitle, upcardDesc, upcardFile, upcardFilepath, upcardImg) {
  var cardRow = document.createElement('div');
  cardRow.setAttribute("class", "col"); // var cartItems = document.getElementsByClassName("cart-items")[0]
  // var cartItemNames = cartItems.getElementsByClassName('item-name')
  // for (var i = 0; i < cartItemNames.length; i++){
  //     if (cartItemNames[i].innerText == title){
  //         alert('Item is already in Cart')
  //         return
  //     }
  // }

  var cardRowContent = "\n      <div class=\"col\">\n        <div class=\"card h-100\">\n          <img src=\"/assets/img/portfolio/portfolio-2.jpg\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title fw-bold text-success\" id=\"card-name2\">".concat(upcardTitle, "</h5>\n            <p class=\"card-text\">").concat(upcardDesc, "</p>\n            <div class=\"sample-file\">\n              <span class=\"file fs-5 text-success\" id=\"file\">").concat(upcardFile, "</span>\n              <a href=\"").concat(upcardFilepath, "\" download=\"gg\">\n                  <i class=\"bi bi-download btn p-0 fs-4 float-end text-success\"></i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      ");
  cardRow.innerHTML = cardRowContent;
  document.querySelector('.row').appendChild(cardRow); // document.body.appendChild(cardRow);
}
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.e9f734e2.js.map