// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style/grid.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../Users/vitamin/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/framework/Component.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Component =
/*#__PURE__*/
function () {
  function Component(host) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.host = host;
    this.props = props;
    this.state = {};
    this.componentWillMount();

    this._render();

    this.componentDidMount();
  }

  _createClass(Component, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "updateState",
    value: function updateState(nextState) {
      this.state = Object.assign({}, this.state, nextState);

      this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this = this;

      this.host.innerHTML = '';
      var content = this.render();

      if (!Array.isArray(content)) {
        content = [content]; // this.host.innerHTML = content;
      }

      content.map(function (item) {
        return _this._vDomPrototypeElementToHtmlElement(item);
      }) // [string|HTMLElement] => [HTMLElement]
      .forEach(function (htmlElement) {
        _this.host.appendChild(htmlElement);
      });
    }
    /* @return {string|[string|HTMLElement|Component]} => [HTMLElement, HTMLElement]*/

  }, {
    key: "render",
    value: function render() {
      return this.host.innerHTML = 'No child method !';
    }
    /**
     *
     * @param {string|HTMLElement|Object} element
     *
     */

  }, {
    key: "_vDomPrototypeElementToHtmlElement",
    value: function _vDomPrototypeElementToHtmlElement(element) {
      var _this2 = this;

      if (typeof element === 'string') {
        var container;
        var containsHtmlTags = /[<>&]/.test(element);

        if (containsHtmlTags) {
          container = document.createElement('div');
          container.innerHTML = element;
        } else {
          container = document.createTextNode(element);
        }

        return container;
      } else {
        if (element.tag) {
          if (typeof element.tag === "function") {
            var _container = document.createDocumentFragment();

            new element.tag(_container, element.props);
            return _container;
          } else {
            //string
            var _container2 = document.createElement(element.tag);

            if (element.content) {
              _container2.innerHTML = element.content;
            } //ensure following element properties that should be Array


            ['classList', 'attributes', 'children', 'eventHandler'].forEach(function (item) {
              if (element[item] && !Array.isArray(element[item])) {
                element[item] = [element[item]];
              }
            });

            if (element.classList) {
              var _container2$classList;

              (_container2$classList = _container2.classList).add.apply(_container2$classList, _toConsumableArray(element.classList));
            }

            if (element.attributes) {
              element.attributes.forEach(function (attributeSpec) {
                _container2.setAttribute(attributeSpec.name, attributeSpec.value);
              });
            }

            if (element.eventHandler && Array.isArray(element.eventHandler)) {
              element.eventHandler.forEach(function (item) {
                _container2.addEventListener(item.eventType, item.handler);
              });
            }

            if (element.eventHandler && !Array.isArray(element.eventHandler)) {
              console.log("test");
              Object.keys(element.eventHandler).forEach(function (eventType) {
                _container2.addEventListener(eventType, element.eventHandler[eventType]);
              });
            } // if(element.eventHandler) {
            //     Object.keys(element.eventHandler).forEach(eventType => {
            //         container.addEventListener(eventType, element.eventHandler[eventType]);
            //     });
            // }


            if (element.children) {
              element.children.forEach(function (el) {
                var htmlElement = _this2._vDomPrototypeElementToHtmlElement(el);

                _container2.appendChild(htmlElement);
              });
            }

            return _container2;
          }
        }

        return element;
      }
    }
  }]);

  return Component;
}();

var _default = Component;
exports.default = _default;
},{}],"scripts/framework/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function () {
    return _Component.default;
  }
});

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./Component":"scripts/framework/Component.js"}],"../node_modules/core-js/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"../node_modules/core-js/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"../node_modules/core-js/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"../node_modules/core-js/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"../node_modules/core-js/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"../node_modules/core-js/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js"}],"../node_modules/core-js/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_dom-create":"../node_modules/core-js/modules/_dom-create.js"}],"../node_modules/core-js/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js"}],"../node_modules/core-js/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_ie8-dom-define":"../node_modules/core-js/modules/_ie8-dom-define.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js"}],"../node_modules/core-js/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"../node_modules/core-js/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js"}],"../node_modules/core-js/modules/_uid.js":[function(require,module,exports) {
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],"../node_modules/core-js/modules/_library.js":[function(require,module,exports) {
module.exports = false;

},{}],"../node_modules/core-js/modules/_shared.js":[function(require,module,exports) {

var core = require('./_core');
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: require('./_library') ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

},{"./_core":"../node_modules/core-js/modules/_core.js","./_global":"../node_modules/core-js/modules/_global.js","./_library":"../node_modules/core-js/modules/_library.js"}],"../node_modules/core-js/modules/_function-to-string.js":[function(require,module,exports) {
module.exports = require('./_shared')('native-function-to-string', Function.toString);

},{"./_shared":"../node_modules/core-js/modules/_shared.js"}],"../node_modules/core-js/modules/_redefine.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var has = require('./_has');
var SRC = require('./_uid')('src');
var $toString = require('./_function-to-string');
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

require('./_core').inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

},{"./_global":"../node_modules/core-js/modules/_global.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_has":"../node_modules/core-js/modules/_has.js","./_uid":"../node_modules/core-js/modules/_uid.js","./_function-to-string":"../node_modules/core-js/modules/_function-to-string.js","./_core":"../node_modules/core-js/modules/_core.js"}],"../node_modules/core-js/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"../node_modules/core-js/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"../node_modules/core-js/modules/_a-function.js"}],"../node_modules/core-js/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"../node_modules/core-js/modules/_global.js","./_core":"../node_modules/core-js/modules/_core.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_ctx":"../node_modules/core-js/modules/_ctx.js"}],"../node_modules/core-js/modules/_meta.js":[function(require,module,exports) {
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_uid":"../node_modules/core-js/modules/_uid.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_has":"../node_modules/core-js/modules/_has.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/_wks.js":[function(require,module,exports) {
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_shared":"../node_modules/core-js/modules/_shared.js","./_uid":"../node_modules/core-js/modules/_uid.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/_set-to-string-tag.js":[function(require,module,exports) {
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_has":"../node_modules/core-js/modules/_has.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_wks-ext.js":[function(require,module,exports) {
exports.f = require('./_wks');

},{"./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_wks-define.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_global":"../node_modules/core-js/modules/_global.js","./_core":"../node_modules/core-js/modules/_core.js","./_library":"../node_modules/core-js/modules/_library.js","./_wks-ext":"../node_modules/core-js/modules/_wks-ext.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js"}],"../node_modules/core-js/modules/_cof.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],"../node_modules/core-js/modules/_iobject.js":[function(require,module,exports) {
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/_defined.js":[function(require,module,exports) {
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],"../node_modules/core-js/modules/_to-iobject.js":[function(require,module,exports) {
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_iobject":"../node_modules/core-js/modules/_iobject.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/_to-integer.js":[function(require,module,exports) {
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],"../node_modules/core-js/modules/_to-length.js":[function(require,module,exports) {
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":"../node_modules/core-js/modules/_to-integer.js"}],"../node_modules/core-js/modules/_to-absolute-index.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":"../node_modules/core-js/modules/_to-integer.js"}],"../node_modules/core-js/modules/_array-includes.js":[function(require,module,exports) {
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js"}],"../node_modules/core-js/modules/_shared-key.js":[function(require,module,exports) {
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":"../node_modules/core-js/modules/_shared.js","./_uid":"../node_modules/core-js/modules/_uid.js"}],"../node_modules/core-js/modules/_object-keys-internal.js":[function(require,module,exports) {
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_has":"../node_modules/core-js/modules/_has.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_array-includes":"../node_modules/core-js/modules/_array-includes.js","./_shared-key":"../node_modules/core-js/modules/_shared-key.js"}],"../node_modules/core-js/modules/_enum-bug-keys.js":[function(require,module,exports) {
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],"../node_modules/core-js/modules/_object-keys.js":[function(require,module,exports) {
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_object-keys-internal":"../node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../node_modules/core-js/modules/_enum-bug-keys.js"}],"../node_modules/core-js/modules/_object-gops.js":[function(require,module,exports) {
exports.f = Object.getOwnPropertySymbols;

},{}],"../node_modules/core-js/modules/_object-pie.js":[function(require,module,exports) {
exports.f = {}.propertyIsEnumerable;

},{}],"../node_modules/core-js/modules/_enum-keys.js":[function(require,module,exports) {
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_object-gops":"../node_modules/core-js/modules/_object-gops.js","./_object-pie":"../node_modules/core-js/modules/_object-pie.js"}],"../node_modules/core-js/modules/_is-array.js":[function(require,module,exports) {
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/_object-dps.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js"}],"../node_modules/core-js/modules/_html.js":[function(require,module,exports) {
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/_object-create.js":[function(require,module,exports) {
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_object-dps":"../node_modules/core-js/modules/_object-dps.js","./_enum-bug-keys":"../node_modules/core-js/modules/_enum-bug-keys.js","./_shared-key":"../node_modules/core-js/modules/_shared-key.js","./_dom-create":"../node_modules/core-js/modules/_dom-create.js","./_html":"../node_modules/core-js/modules/_html.js"}],"../node_modules/core-js/modules/_object-gopn.js":[function(require,module,exports) {
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_object-keys-internal":"../node_modules/core-js/modules/_object-keys-internal.js","./_enum-bug-keys":"../node_modules/core-js/modules/_enum-bug-keys.js"}],"../node_modules/core-js/modules/_object-gopn-ext.js":[function(require,module,exports) {
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js"}],"../node_modules/core-js/modules/_object-gopd.js":[function(require,module,exports) {
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_object-pie":"../node_modules/core-js/modules/_object-pie.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_has":"../node_modules/core-js/modules/_has.js","./_ie8-dom-define":"../node_modules/core-js/modules/_ie8-dom-define.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js"}],"../node_modules/core-js/modules/es6.symbol.js":[function(require,module,exports) {

'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_global":"../node_modules/core-js/modules/_global.js","./_has":"../node_modules/core-js/modules/_has.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_export":"../node_modules/core-js/modules/_export.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_shared":"../node_modules/core-js/modules/_shared.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js","./_uid":"../node_modules/core-js/modules/_uid.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_wks-ext":"../node_modules/core-js/modules/_wks-ext.js","./_wks-define":"../node_modules/core-js/modules/_wks-define.js","./_enum-keys":"../node_modules/core-js/modules/_enum-keys.js","./_is-array":"../node_modules/core-js/modules/_is-array.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_object-create":"../node_modules/core-js/modules/_object-create.js","./_object-gopn-ext":"../node_modules/core-js/modules/_object-gopn-ext.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./_object-pie":"../node_modules/core-js/modules/_object-pie.js","./_object-gops":"../node_modules/core-js/modules/_object-gops.js","./_library":"../node_modules/core-js/modules/_library.js","./_hide":"../node_modules/core-js/modules/_hide.js"}],"../node_modules/core-js/modules/es6.object.create.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-create":"../node_modules/core-js/modules/_object-create.js"}],"../node_modules/core-js/modules/es6.object.define-property.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js"}],"../node_modules/core-js/modules/es6.object.define-properties.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperties: require('./_object-dps') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-dps":"../node_modules/core-js/modules/_object-dps.js"}],"../node_modules/core-js/modules/_object-sap.js":[function(require,module,exports) {
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_export":"../node_modules/core-js/modules/_export.js","./_core":"../node_modules/core-js/modules/_core.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js":[function(require,module,exports) {
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/_to-object.js":[function(require,module,exports) {
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/_object-gpo.js":[function(require,module,exports) {
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":"../node_modules/core-js/modules/_has.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_shared-key":"../node_modules/core-js/modules/_shared-key.js"}],"../node_modules/core-js/modules/es6.object.get-prototype-of.js":[function(require,module,exports) {
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_to-object":"../node_modules/core-js/modules/_to-object.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.keys.js":[function(require,module,exports) {
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_to-object":"../node_modules/core-js/modules/_to-object.js","./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.get-own-property-names.js":[function(require,module,exports) {
// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

},{"./_object-sap":"../node_modules/core-js/modules/_object-sap.js","./_object-gopn-ext":"../node_modules/core-js/modules/_object-gopn-ext.js"}],"../node_modules/core-js/modules/es6.object.freeze.js":[function(require,module,exports) {
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.seal.js":[function(require,module,exports) {
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.prevent-extensions.js":[function(require,module,exports) {
// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.is-frozen.js":[function(require,module,exports) {
// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.is-sealed.js":[function(require,module,exports) {
// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/es6.object.is-extensible.js":[function(require,module,exports) {
// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_object-sap":"../node_modules/core-js/modules/_object-sap.js"}],"../node_modules/core-js/modules/_object-assign.js":[function(require,module,exports) {
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

},{"./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_object-gops":"../node_modules/core-js/modules/_object-gops.js","./_object-pie":"../node_modules/core-js/modules/_object-pie.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_iobject":"../node_modules/core-js/modules/_iobject.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.object.assign.js":[function(require,module,exports) {
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', { assign: require('./_object-assign') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-assign":"../node_modules/core-js/modules/_object-assign.js"}],"../node_modules/core-js/modules/_same-value.js":[function(require,module,exports) {
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};

},{}],"../node_modules/core-js/modules/es6.object.is.js":[function(require,module,exports) {
// 19.1.3.10 Object.is(value1, value2)
var $export = require('./_export');
$export($export.S, 'Object', { is: require('./_same-value') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_same-value":"../node_modules/core-js/modules/_same-value.js"}],"../node_modules/core-js/modules/_set-proto.js":[function(require,module,exports) {
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js"}],"../node_modules/core-js/modules/es6.object.set-prototype-of.js":[function(require,module,exports) {
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_set-proto":"../node_modules/core-js/modules/_set-proto.js"}],"../node_modules/core-js/modules/_classof.js":[function(require,module,exports) {
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":"../node_modules/core-js/modules/_cof.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.object.to-string.js":[function(require,module,exports) {
'use strict';
// 19.1.3.6 Object.prototype.toString()
var classof = require('./_classof');
var test = {};
test[require('./_wks')('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  require('./_redefine')(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

},{"./_classof":"../node_modules/core-js/modules/_classof.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_redefine":"../node_modules/core-js/modules/_redefine.js"}],"../node_modules/core-js/modules/_invoke.js":[function(require,module,exports) {
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

},{}],"../node_modules/core-js/modules/_bind.js":[function(require,module,exports) {
'use strict';
var aFunction = require('./_a-function');
var isObject = require('./_is-object');
var invoke = require('./_invoke');
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

},{"./_a-function":"../node_modules/core-js/modules/_a-function.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_invoke":"../node_modules/core-js/modules/_invoke.js"}],"../node_modules/core-js/modules/es6.function.bind.js":[function(require,module,exports) {
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = require('./_export');

$export($export.P, 'Function', { bind: require('./_bind') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_bind":"../node_modules/core-js/modules/_bind.js"}],"../node_modules/core-js/modules/es6.function.name.js":[function(require,module,exports) {
var dP = require('./_object-dp').f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || require('./_descriptors') && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js"}],"../node_modules/core-js/modules/es6.function.has-instance.js":[function(require,module,exports) {
'use strict';
var isObject = require('./_is-object');
var getPrototypeOf = require('./_object-gpo');
var HAS_INSTANCE = require('./_wks')('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) require('./_object-dp').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js"}],"../node_modules/core-js/modules/_string-ws.js":[function(require,module,exports) {
module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

},{}],"../node_modules/core-js/modules/_string-trim.js":[function(require,module,exports) {
var $export = require('./_export');
var defined = require('./_defined');
var fails = require('./_fails');
var spaces = require('./_string-ws');
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;

},{"./_export":"../node_modules/core-js/modules/_export.js","./_defined":"../node_modules/core-js/modules/_defined.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_string-ws":"../node_modules/core-js/modules/_string-ws.js"}],"../node_modules/core-js/modules/_parse-int.js":[function(require,module,exports) {
var $parseInt = require('./_global').parseInt;
var $trim = require('./_string-trim').trim;
var ws = require('./_string-ws');
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;

},{"./_global":"../node_modules/core-js/modules/_global.js","./_string-trim":"../node_modules/core-js/modules/_string-trim.js","./_string-ws":"../node_modules/core-js/modules/_string-ws.js"}],"../node_modules/core-js/modules/es6.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_parse-int":"../node_modules/core-js/modules/_parse-int.js"}],"../node_modules/core-js/modules/_parse-float.js":[function(require,module,exports) {
var $parseFloat = require('./_global').parseFloat;
var $trim = require('./_string-trim').trim;

module.exports = 1 / $parseFloat(require('./_string-ws') + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

},{"./_global":"../node_modules/core-js/modules/_global.js","./_string-trim":"../node_modules/core-js/modules/_string-trim.js","./_string-ws":"../node_modules/core-js/modules/_string-ws.js"}],"../node_modules/core-js/modules/es6.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_parse-float":"../node_modules/core-js/modules/_parse-float.js"}],"../node_modules/core-js/modules/_inherit-if-required.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var setPrototypeOf = require('./_set-proto').set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_set-proto":"../node_modules/core-js/modules/_set-proto.js"}],"../node_modules/core-js/modules/es6.number.constructor.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var has = require('./_has');
var cof = require('./_cof');
var inheritIfRequired = require('./_inherit-if-required');
var toPrimitive = require('./_to-primitive');
var fails = require('./_fails');
var gOPN = require('./_object-gopn').f;
var gOPD = require('./_object-gopd').f;
var dP = require('./_object-dp').f;
var $trim = require('./_string-trim').trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(require('./_object-create')(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = require('./_descriptors') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require('./_redefine')(global, NUMBER, $Number);
}

},{"./_global":"../node_modules/core-js/modules/_global.js","./_has":"../node_modules/core-js/modules/_has.js","./_cof":"../node_modules/core-js/modules/_cof.js","./_inherit-if-required":"../node_modules/core-js/modules/_inherit-if-required.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_string-trim":"../node_modules/core-js/modules/_string-trim.js","./_object-create":"../node_modules/core-js/modules/_object-create.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_redefine":"../node_modules/core-js/modules/_redefine.js"}],"../node_modules/core-js/modules/_a-number-value.js":[function(require,module,exports) {
var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

},{"./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/_string-repeat.js":[function(require,module,exports) {
'use strict';
var toInteger = require('./_to-integer');
var defined = require('./_defined');

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};

},{"./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/es6.number.to-fixed.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toInteger = require('./_to-integer');
var aNumberValue = require('./_a-number-value');
var repeat = require('./_string-repeat');
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !require('./_fails')(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_a-number-value":"../node_modules/core-js/modules/_a-number-value.js","./_string-repeat":"../node_modules/core-js/modules/_string-repeat.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.number.to-precision.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $fails = require('./_fails');
var aNumberValue = require('./_a-number-value');
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_a-number-value":"../node_modules/core-js/modules/_a-number-value.js"}],"../node_modules/core-js/modules/es6.number.epsilon.js":[function(require,module,exports) {
// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.number.is-finite.js":[function(require,module,exports) {
// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/_is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js"}],"../node_modules/core-js/modules/es6.number.is-integer.js":[function(require,module,exports) {
// 20.1.2.3 Number.isInteger(number)
var $export = require('./_export');

$export($export.S, 'Number', { isInteger: require('./_is-integer') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_is-integer":"../node_modules/core-js/modules/_is-integer.js"}],"../node_modules/core-js/modules/es6.number.is-nan.js":[function(require,module,exports) {
// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.number.is-safe-integer.js":[function(require,module,exports) {
// 20.1.2.5 Number.isSafeInteger(number)
var $export = require('./_export');
var isInteger = require('./_is-integer');
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_is-integer":"../node_modules/core-js/modules/_is-integer.js"}],"../node_modules/core-js/modules/es6.number.max-safe-integer.js":[function(require,module,exports) {
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.number.min-safe-integer.js":[function(require,module,exports) {
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = require('./_export');

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.number.parse-float.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_parse-float":"../node_modules/core-js/modules/_parse-float.js"}],"../node_modules/core-js/modules/es6.number.parse-int.js":[function(require,module,exports) {
var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_parse-int":"../node_modules/core-js/modules/_parse-int.js"}],"../node_modules/core-js/modules/_math-log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};

},{}],"../node_modules/core-js/modules/es6.math.acosh.js":[function(require,module,exports) {
// 20.2.2.3 Math.acosh(x)
var $export = require('./_export');
var log1p = require('./_math-log1p');
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-log1p":"../node_modules/core-js/modules/_math-log1p.js"}],"../node_modules/core-js/modules/es6.math.asinh.js":[function(require,module,exports) {
// 20.2.2.5 Math.asinh(x)
var $export = require('./_export');
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.math.atanh.js":[function(require,module,exports) {
// 20.2.2.7 Math.atanh(x)
var $export = require('./_export');
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/_math-sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};

},{}],"../node_modules/core-js/modules/es6.math.cbrt.js":[function(require,module,exports) {
// 20.2.2.9 Math.cbrt(x)
var $export = require('./_export');
var sign = require('./_math-sign');

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-sign":"../node_modules/core-js/modules/_math-sign.js"}],"../node_modules/core-js/modules/es6.math.clz32.js":[function(require,module,exports) {
// 20.2.2.11 Math.clz32(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.math.cosh.js":[function(require,module,exports) {
// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/_math-expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;

},{}],"../node_modules/core-js/modules/es6.math.expm1.js":[function(require,module,exports) {
// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-expm1":"../node_modules/core-js/modules/_math-expm1.js"}],"../node_modules/core-js/modules/_math-fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var sign = require('./_math-sign');
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};

},{"./_math-sign":"../node_modules/core-js/modules/_math-sign.js"}],"../node_modules/core-js/modules/es6.math.fround.js":[function(require,module,exports) {
// 20.2.2.16 Math.fround(x)
var $export = require('./_export');

$export($export.S, 'Math', { fround: require('./_math-fround') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-fround":"../node_modules/core-js/modules/_math-fround.js"}],"../node_modules/core-js/modules/es6.math.hypot.js":[function(require,module,exports) {
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = require('./_export');
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.math.imul.js":[function(require,module,exports) {
// 20.2.2.18 Math.imul(x, y)
var $export = require('./_export');
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * require('./_fails')(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.math.log10.js":[function(require,module,exports) {
// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.math.log1p.js":[function(require,module,exports) {
// 20.2.2.20 Math.log1p(x)
var $export = require('./_export');

$export($export.S, 'Math', { log1p: require('./_math-log1p') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-log1p":"../node_modules/core-js/modules/_math-log1p.js"}],"../node_modules/core-js/modules/es6.math.log2.js":[function(require,module,exports) {
// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.math.sign.js":[function(require,module,exports) {
// 20.2.2.28 Math.sign(x)
var $export = require('./_export');

$export($export.S, 'Math', { sign: require('./_math-sign') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-sign":"../node_modules/core-js/modules/_math-sign.js"}],"../node_modules/core-js/modules/es6.math.sinh.js":[function(require,module,exports) {
// 20.2.2.30 Math.sinh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * require('./_fails')(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-expm1":"../node_modules/core-js/modules/_math-expm1.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.math.tanh.js":[function(require,module,exports) {
// 20.2.2.33 Math.tanh(x)
var $export = require('./_export');
var expm1 = require('./_math-expm1');
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-expm1":"../node_modules/core-js/modules/_math-expm1.js"}],"../node_modules/core-js/modules/es6.math.trunc.js":[function(require,module,exports) {
// 20.2.2.34 Math.trunc(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.string.from-code-point.js":[function(require,module,exports) {
var $export = require('./_export');
var toAbsoluteIndex = require('./_to-absolute-index');
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js"}],"../node_modules/core-js/modules/es6.string.raw.js":[function(require,module,exports) {
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_to-length":"../node_modules/core-js/modules/_to-length.js"}],"../node_modules/core-js/modules/es6.string.trim.js":[function(require,module,exports) {
'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

},{"./_string-trim":"../node_modules/core-js/modules/_string-trim.js"}],"../node_modules/core-js/modules/_string-at.js":[function(require,module,exports) {
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/_iterators.js":[function(require,module,exports) {
module.exports = {};

},{}],"../node_modules/core-js/modules/_iter-create.js":[function(require,module,exports) {
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_object-create":"../node_modules/core-js/modules/_object-create.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_iter-define.js":[function(require,module,exports) {
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_library":"../node_modules/core-js/modules/_library.js","./_export":"../node_modules/core-js/modules/_export.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_iterators":"../node_modules/core-js/modules/_iterators.js","./_iter-create":"../node_modules/core-js/modules/_iter-create.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.string.iterator.js":[function(require,module,exports) {
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_string-at":"../node_modules/core-js/modules/_string-at.js","./_iter-define":"../node_modules/core-js/modules/_iter-define.js"}],"../node_modules/core-js/modules/es6.string.code-point-at.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-at":"../node_modules/core-js/modules/_string-at.js"}],"../node_modules/core-js/modules/_is-regexp.js":[function(require,module,exports) {
// 7.2.8 IsRegExp(argument)
var isObject = require('./_is-object');
var cof = require('./_cof');
var MATCH = require('./_wks')('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_cof":"../node_modules/core-js/modules/_cof.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_string-context.js":[function(require,module,exports) {
// helper for String#{startsWith, endsWith, includes}
var isRegExp = require('./_is-regexp');
var defined = require('./_defined');

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

},{"./_is-regexp":"../node_modules/core-js/modules/_is-regexp.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/_fails-is-regexp.js":[function(require,module,exports) {
var MATCH = require('./_wks')('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};

},{"./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.string.ends-with.js":[function(require,module,exports) {
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_string-context":"../node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../node_modules/core-js/modules/_fails-is-regexp.js"}],"../node_modules/core-js/modules/es6.string.includes.js":[function(require,module,exports) {
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
'use strict';
var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-context":"../node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../node_modules/core-js/modules/_fails-is-regexp.js"}],"../node_modules/core-js/modules/es6.string.repeat.js":[function(require,module,exports) {
var $export = require('./_export');

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require('./_string-repeat')
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-repeat":"../node_modules/core-js/modules/_string-repeat.js"}],"../node_modules/core-js/modules/es6.string.starts-with.js":[function(require,module,exports) {
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
'use strict';
var $export = require('./_export');
var toLength = require('./_to-length');
var context = require('./_string-context');
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * require('./_fails-is-regexp')(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_string-context":"../node_modules/core-js/modules/_string-context.js","./_fails-is-regexp":"../node_modules/core-js/modules/_fails-is-regexp.js"}],"../node_modules/core-js/modules/_string-html.js":[function(require,module,exports) {
var $export = require('./_export');
var fails = require('./_fails');
var defined = require('./_defined');
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

},{"./_export":"../node_modules/core-js/modules/_export.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/es6.string.anchor.js":[function(require,module,exports) {
'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.big.js":[function(require,module,exports) {
'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.blink.js":[function(require,module,exports) {
'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.bold.js":[function(require,module,exports) {
'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.fixed.js":[function(require,module,exports) {
'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.fontcolor.js":[function(require,module,exports) {
'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.fontsize.js":[function(require,module,exports) {
'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.italics.js":[function(require,module,exports) {
'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.link.js":[function(require,module,exports) {
'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.small.js":[function(require,module,exports) {
'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.strike.js":[function(require,module,exports) {
'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.sub.js":[function(require,module,exports) {
'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.string.sup.js":[function(require,module,exports) {
'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

},{"./_string-html":"../node_modules/core-js/modules/_string-html.js"}],"../node_modules/core-js/modules/es6.date.now.js":[function(require,module,exports) {
// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.date.to-json.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');

$export($export.P + $export.F * require('./_fails')(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/_date-to-iso-string.js":[function(require,module,exports) {
'use strict';
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = require('./_fails');
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;

},{"./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.date.to-iso-string.js":[function(require,module,exports) {
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = require('./_export');
var toISOString = require('./_date-to-iso-string');

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_date-to-iso-string":"../node_modules/core-js/modules/_date-to-iso-string.js"}],"../node_modules/core-js/modules/es6.date.to-string.js":[function(require,module,exports) {
var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  require('./_redefine')(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

},{"./_redefine":"../node_modules/core-js/modules/_redefine.js"}],"../node_modules/core-js/modules/_date-to-primitive.js":[function(require,module,exports) {
'use strict';
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js"}],"../node_modules/core-js/modules/es6.date.to-primitive.js":[function(require,module,exports) {
var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

},{"./_wks":"../node_modules/core-js/modules/_wks.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_date-to-primitive":"../node_modules/core-js/modules/_date-to-primitive.js"}],"../node_modules/core-js/modules/es6.array.is-array.js":[function(require,module,exports) {
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = require('./_export');

$export($export.S, 'Array', { isArray: require('./_is-array') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_is-array":"../node_modules/core-js/modules/_is-array.js"}],"../node_modules/core-js/modules/_iter-call.js":[function(require,module,exports) {
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/_is-array-iter.js":[function(require,module,exports) {
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":"../node_modules/core-js/modules/_iterators.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_create-property.js":[function(require,module,exports) {
'use strict';
var $defineProperty = require('./_object-dp');
var createDesc = require('./_property-desc');

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js"}],"../node_modules/core-js/modules/core.get-iterator-method.js":[function(require,module,exports) {
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":"../node_modules/core-js/modules/_classof.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_iterators":"../node_modules/core-js/modules/_iterators.js","./_core":"../node_modules/core-js/modules/_core.js"}],"../node_modules/core-js/modules/_iter-detect.js":[function(require,module,exports) {
var ITERATOR = require('./_wks')('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

},{"./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.array.from.js":[function(require,module,exports) {
'use strict';
var ctx = require('./_ctx');
var $export = require('./_export');
var toObject = require('./_to-object');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var toLength = require('./_to-length');
var createProperty = require('./_create-property');
var getIterFn = require('./core.get-iterator-method');

$export($export.S + $export.F * !require('./_iter-detect')(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

},{"./_ctx":"../node_modules/core-js/modules/_ctx.js","./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_iter-call":"../node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../node_modules/core-js/modules/_is-array-iter.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_create-property":"../node_modules/core-js/modules/_create-property.js","./core.get-iterator-method":"../node_modules/core-js/modules/core.get-iterator-method.js","./_iter-detect":"../node_modules/core-js/modules/_iter-detect.js"}],"../node_modules/core-js/modules/es6.array.of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var createProperty = require('./_create-property');

// WebKit Array.of isn't generic
$export($export.S + $export.F * require('./_fails')(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_create-property":"../node_modules/core-js/modules/_create-property.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/_strict-method.js":[function(require,module,exports) {
'use strict';
var fails = require('./_fails');

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

},{"./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.array.join.js":[function(require,module,exports) {
'use strict';
// 22.1.3.13 Array.prototype.join(separator)
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (require('./_iobject') != Object || !require('./_strict-method')(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_iobject":"../node_modules/core-js/modules/_iobject.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.slice.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var html = require('./_html');
var cof = require('./_cof');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * require('./_fails')(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_html":"../node_modules/core-js/modules/_html.js","./_cof":"../node_modules/core-js/modules/_cof.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.array.sort.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var fails = require('./_fails');
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !require('./_strict-method')($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/_array-species-constructor.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js","./_is-array":"../node_modules/core-js/modules/_is-array.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/_array-species-create.js":[function(require,module,exports) {
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":"../node_modules/core-js/modules/_array-species-constructor.js"}],"../node_modules/core-js/modules/_array-methods.js":[function(require,module,exports) {
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_ctx":"../node_modules/core-js/modules/_ctx.js","./_iobject":"../node_modules/core-js/modules/_iobject.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_array-species-create":"../node_modules/core-js/modules/_array-species-create.js"}],"../node_modules/core-js/modules/es6.array.for-each.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $forEach = require('./_array-methods')(0);
var STRICT = require('./_strict-method')([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.map.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $map = require('./_array-methods')(1);

$export($export.P + $export.F * !require('./_strict-method')([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.filter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $filter = require('./_array-methods')(2);

$export($export.P + $export.F * !require('./_strict-method')([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.some.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $some = require('./_array-methods')(3);

$export($export.P + $export.F * !require('./_strict-method')([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.every.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $every = require('./_array-methods')(4);

$export($export.P + $export.F * !require('./_strict-method')([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/_array-reduce.js":[function(require,module,exports) {
var aFunction = require('./_a-function');
var toObject = require('./_to-object');
var IObject = require('./_iobject');
var toLength = require('./_to-length');

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};

},{"./_a-function":"../node_modules/core-js/modules/_a-function.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_iobject":"../node_modules/core-js/modules/_iobject.js","./_to-length":"../node_modules/core-js/modules/_to-length.js"}],"../node_modules/core-js/modules/es6.array.reduce.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-reduce":"../node_modules/core-js/modules/_array-reduce.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.reduce-right.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $reduce = require('./_array-reduce');

$export($export.P + $export.F * !require('./_strict-method')([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-reduce":"../node_modules/core-js/modules/_array-reduce.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $indexOf = require('./_array-includes')(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-includes":"../node_modules/core-js/modules/_array-includes.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/es6.array.last-index-of.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toIObject = require('./_to-iobject');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !require('./_strict-method')($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_strict-method":"../node_modules/core-js/modules/_strict-method.js"}],"../node_modules/core-js/modules/_array-copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};

},{"./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../node_modules/core-js/modules/_to-length.js"}],"../node_modules/core-js/modules/_add-to-unscopables.js":[function(require,module,exports) {
// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = require('./_wks')('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) require('./_hide')(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

},{"./_wks":"../node_modules/core-js/modules/_wks.js","./_hide":"../node_modules/core-js/modules/_hide.js"}],"../node_modules/core-js/modules/es6.array.copy-within.js":[function(require,module,exports) {
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { copyWithin: require('./_array-copy-within') });

require('./_add-to-unscopables')('copyWithin');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-copy-within":"../node_modules/core-js/modules/_array-copy-within.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/_array-fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
'use strict';
var toObject = require('./_to-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

},{"./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../node_modules/core-js/modules/_to-length.js"}],"../node_modules/core-js/modules/es6.array.fill.js":[function(require,module,exports) {
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = require('./_export');

$export($export.P, 'Array', { fill: require('./_array-fill') });

require('./_add-to-unscopables')('fill');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-fill":"../node_modules/core-js/modules/_array-fill.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/es6.array.find.js":[function(require,module,exports) {
'use strict';
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/es6.array.find-index.js":[function(require,module,exports) {
'use strict';
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = require('./_export');
var $find = require('./_array-methods')(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require('./_add-to-unscopables')(KEY);

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/_set-species.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_global":"../node_modules/core-js/modules/_global.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.array.species.js":[function(require,module,exports) {
require('./_set-species')('Array');

},{"./_set-species":"../node_modules/core-js/modules/_set-species.js"}],"../node_modules/core-js/modules/_iter-step.js":[function(require,module,exports) {
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],"../node_modules/core-js/modules/es6.array.iterator.js":[function(require,module,exports) {
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js","./_iter-step":"../node_modules/core-js/modules/_iter-step.js","./_iterators":"../node_modules/core-js/modules/_iterators.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_iter-define":"../node_modules/core-js/modules/_iter-define.js"}],"../node_modules/core-js/modules/_flags.js":[function(require,module,exports) {
'use strict';
// 21.2.5.3 get RegExp.prototype.flags
var anObject = require('./_an-object');
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.regexp.constructor.js":[function(require,module,exports) {

var global = require('./_global');
var inheritIfRequired = require('./_inherit-if-required');
var dP = require('./_object-dp').f;
var gOPN = require('./_object-gopn').f;
var isRegExp = require('./_is-regexp');
var $flags = require('./_flags');
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (require('./_descriptors') && (!CORRECT_NEW || require('./_fails')(function () {
  re2[require('./_wks')('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  require('./_redefine')(global, 'RegExp', $RegExp);
}

require('./_set-species')('RegExp');

},{"./_global":"../node_modules/core-js/modules/_global.js","./_inherit-if-required":"../node_modules/core-js/modules/_inherit-if-required.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./_is-regexp":"../node_modules/core-js/modules/_is-regexp.js","./_flags":"../node_modules/core-js/modules/_flags.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_set-species":"../node_modules/core-js/modules/_set-species.js"}],"../node_modules/core-js/modules/_regexp-exec.js":[function(require,module,exports) {
'use strict';

var regexpFlags = require('./_flags');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

},{"./_flags":"../node_modules/core-js/modules/_flags.js"}],"../node_modules/core-js/modules/es6.regexp.exec.js":[function(require,module,exports) {
'use strict';
var regexpExec = require('./_regexp-exec');
require('./_export')({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

},{"./_regexp-exec":"../node_modules/core-js/modules/_regexp-exec.js","./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.regexp.flags.js":[function(require,module,exports) {
// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

},{"./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_flags":"../node_modules/core-js/modules/_flags.js"}],"../node_modules/core-js/modules/es6.regexp.to-string.js":[function(require,module,exports) {

'use strict';
require('./es6.regexp.flags');
var anObject = require('./_an-object');
var $flags = require('./_flags');
var DESCRIPTORS = require('./_descriptors');
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  require('./_redefine')(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (require('./_fails')(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

},{"./es6.regexp.flags":"../node_modules/core-js/modules/es6.regexp.flags.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_flags":"../node_modules/core-js/modules/_flags.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/_advance-string-index.js":[function(require,module,exports) {
'use strict';
var at = require('./_string-at')(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

},{"./_string-at":"../node_modules/core-js/modules/_string-at.js"}],"../node_modules/core-js/modules/_regexp-exec-abstract.js":[function(require,module,exports) {
'use strict';

var classof = require('./_classof');
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};

},{"./_classof":"../node_modules/core-js/modules/_classof.js"}],"../node_modules/core-js/modules/_fix-re-wks.js":[function(require,module,exports) {
'use strict';
require('./es6.regexp.exec');
var redefine = require('./_redefine');
var hide = require('./_hide');
var fails = require('./_fails');
var defined = require('./_defined');
var wks = require('./_wks');
var regexpExec = require('./_regexp-exec');

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

},{"./es6.regexp.exec":"../node_modules/core-js/modules/es6.regexp.exec.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_defined":"../node_modules/core-js/modules/_defined.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_regexp-exec":"../node_modules/core-js/modules/_regexp-exec.js"}],"../node_modules/core-js/modules/es6.regexp.match.js":[function(require,module,exports) {
'use strict';

var anObject = require('./_an-object');
var toLength = require('./_to-length');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');

// @@match logic
require('./_fix-re-wks')('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_advance-string-index":"../node_modules/core-js/modules/_advance-string-index.js","./_regexp-exec-abstract":"../node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"../node_modules/core-js/modules/_fix-re-wks.js"}],"../node_modules/core-js/modules/es6.regexp.replace.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

var anObject = require('./_an-object');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var advanceStringIndex = require('./_advance-string-index');
var regExpExec = require('./_regexp-exec-abstract');
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
require('./_fix-re-wks')('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_advance-string-index":"../node_modules/core-js/modules/_advance-string-index.js","./_regexp-exec-abstract":"../node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"../node_modules/core-js/modules/_fix-re-wks.js"}],"../node_modules/core-js/modules/es6.regexp.search.js":[function(require,module,exports) {
'use strict';

var anObject = require('./_an-object');
var sameValue = require('./_same-value');
var regExpExec = require('./_regexp-exec-abstract');

// @@search logic
require('./_fix-re-wks')('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_same-value":"../node_modules/core-js/modules/_same-value.js","./_regexp-exec-abstract":"../node_modules/core-js/modules/_regexp-exec-abstract.js","./_fix-re-wks":"../node_modules/core-js/modules/_fix-re-wks.js"}],"../node_modules/core-js/modules/_species-constructor.js":[function(require,module,exports) {
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var SPECIES = require('./_wks')('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es6.regexp.split.js":[function(require,module,exports) {
'use strict';

var isRegExp = require('./_is-regexp');
var anObject = require('./_an-object');
var speciesConstructor = require('./_species-constructor');
var advanceStringIndex = require('./_advance-string-index');
var toLength = require('./_to-length');
var callRegExpExec = require('./_regexp-exec-abstract');
var regexpExec = require('./_regexp-exec');
var fails = require('./_fails');
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
require('./_fix-re-wks')('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});

},{"./_is-regexp":"../node_modules/core-js/modules/_is-regexp.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_species-constructor":"../node_modules/core-js/modules/_species-constructor.js","./_advance-string-index":"../node_modules/core-js/modules/_advance-string-index.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_regexp-exec-abstract":"../node_modules/core-js/modules/_regexp-exec-abstract.js","./_regexp-exec":"../node_modules/core-js/modules/_regexp-exec.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_fix-re-wks":"../node_modules/core-js/modules/_fix-re-wks.js"}],"../node_modules/core-js/modules/_an-instance.js":[function(require,module,exports) {
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],"../node_modules/core-js/modules/_for-of.js":[function(require,module,exports) {
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_ctx":"../node_modules/core-js/modules/_ctx.js","./_iter-call":"../node_modules/core-js/modules/_iter-call.js","./_is-array-iter":"../node_modules/core-js/modules/_is-array-iter.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./core.get-iterator-method":"../node_modules/core-js/modules/core.get-iterator-method.js"}],"../node_modules/core-js/modules/_task.js":[function(require,module,exports) {


var ctx = require('./_ctx');
var invoke = require('./_invoke');
var html = require('./_html');
var cel = require('./_dom-create');
var global = require('./_global');
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (require('./_cof')(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

},{"./_ctx":"../node_modules/core-js/modules/_ctx.js","./_invoke":"../node_modules/core-js/modules/_invoke.js","./_html":"../node_modules/core-js/modules/_html.js","./_dom-create":"../node_modules/core-js/modules/_dom-create.js","./_global":"../node_modules/core-js/modules/_global.js","./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/_microtask.js":[function(require,module,exports) {


var global = require('./_global');
var macrotask = require('./_task').set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = require('./_cof')(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

},{"./_global":"../node_modules/core-js/modules/_global.js","./_task":"../node_modules/core-js/modules/_task.js","./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/_new-promise-capability.js":[function(require,module,exports) {
'use strict';
// 25.4.1.5 NewPromiseCapability(C)
var aFunction = require('./_a-function');

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

},{"./_a-function":"../node_modules/core-js/modules/_a-function.js"}],"../node_modules/core-js/modules/_perform.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

},{}],"../node_modules/core-js/modules/_user-agent.js":[function(require,module,exports) {

var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

},{"./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/_promise-resolve.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var newPromiseCapability = require('./_new-promise-capability');

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

},{"./_an-object":"../node_modules/core-js/modules/_an-object.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_new-promise-capability":"../node_modules/core-js/modules/_new-promise-capability.js"}],"../node_modules/core-js/modules/_redefine-all.js":[function(require,module,exports) {
var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

},{"./_redefine":"../node_modules/core-js/modules/_redefine.js"}],"../node_modules/core-js/modules/es6.promise.js":[function(require,module,exports) {


'use strict';
var LIBRARY = require('./_library');
var global = require('./_global');
var ctx = require('./_ctx');
var classof = require('./_classof');
var $export = require('./_export');
var isObject = require('./_is-object');
var aFunction = require('./_a-function');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var speciesConstructor = require('./_species-constructor');
var task = require('./_task').set;
var microtask = require('./_microtask')();
var newPromiseCapabilityModule = require('./_new-promise-capability');
var perform = require('./_perform');
var userAgent = require('./_user-agent');
var promiseResolve = require('./_promise-resolve');
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

},{"./_library":"../node_modules/core-js/modules/_library.js","./_global":"../node_modules/core-js/modules/_global.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_classof":"../node_modules/core-js/modules/_classof.js","./_export":"../node_modules/core-js/modules/_export.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_for-of":"../node_modules/core-js/modules/_for-of.js","./_species-constructor":"../node_modules/core-js/modules/_species-constructor.js","./_task":"../node_modules/core-js/modules/_task.js","./_microtask":"../node_modules/core-js/modules/_microtask.js","./_new-promise-capability":"../node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../node_modules/core-js/modules/_perform.js","./_user-agent":"../node_modules/core-js/modules/_user-agent.js","./_promise-resolve":"../node_modules/core-js/modules/_promise-resolve.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js","./_set-species":"../node_modules/core-js/modules/_set-species.js","./_core":"../node_modules/core-js/modules/_core.js","./_iter-detect":"../node_modules/core-js/modules/_iter-detect.js"}],"../node_modules/core-js/modules/_validate-collection.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":"../node_modules/core-js/modules/_is-object.js"}],"../node_modules/core-js/modules/_collection-strong.js":[function(require,module,exports) {
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_object-create":"../node_modules/core-js/modules/_object-create.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_for-of":"../node_modules/core-js/modules/_for-of.js","./_iter-define":"../node_modules/core-js/modules/_iter-define.js","./_iter-step":"../node_modules/core-js/modules/_iter-step.js","./_set-species":"../node_modules/core-js/modules/_set-species.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js"}],"../node_modules/core-js/modules/_collection.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var $export = require('./_export');
var redefine = require('./_redefine');
var redefineAll = require('./_redefine-all');
var meta = require('./_meta');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var fails = require('./_fails');
var $iterDetect = require('./_iter-detect');
var setToStringTag = require('./_set-to-string-tag');
var inheritIfRequired = require('./_inherit-if-required');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_global":"../node_modules/core-js/modules/_global.js","./_export":"../node_modules/core-js/modules/_export.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_for-of":"../node_modules/core-js/modules/_for-of.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_iter-detect":"../node_modules/core-js/modules/_iter-detect.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js","./_inherit-if-required":"../node_modules/core-js/modules/_inherit-if-required.js"}],"../node_modules/core-js/modules/es6.map.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection-strong":"../node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js","./_collection":"../node_modules/core-js/modules/_collection.js"}],"../node_modules/core-js/modules/es6.set.js":[function(require,module,exports) {
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var SET = 'Set';

// 23.2 Set Objects
module.exports = require('./_collection')(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

},{"./_collection-strong":"../node_modules/core-js/modules/_collection-strong.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js","./_collection":"../node_modules/core-js/modules/_collection.js"}],"../node_modules/core-js/modules/_collection-weak.js":[function(require,module,exports) {
'use strict';
var redefineAll = require('./_redefine-all');
var getWeak = require('./_meta').getWeak;
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var createArrayMethod = require('./_array-methods');
var $has = require('./_has');
var validate = require('./_validate-collection');
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

},{"./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_for-of":"../node_modules/core-js/modules/_for-of.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_has":"../node_modules/core-js/modules/_has.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js"}],"../node_modules/core-js/modules/es6.weak-map.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var each = require('./_array-methods')(0);
var redefine = require('./_redefine');
var meta = require('./_meta');
var assign = require('./_object-assign');
var weak = require('./_collection-weak');
var isObject = require('./_is-object');
var validate = require('./_validate-collection');
var NATIVE_WEAK_MAP = require('./_validate-collection');
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require('./_collection')(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}

},{"./_global":"../node_modules/core-js/modules/_global.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_meta":"../node_modules/core-js/modules/_meta.js","./_object-assign":"../node_modules/core-js/modules/_object-assign.js","./_collection-weak":"../node_modules/core-js/modules/_collection-weak.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js","./_collection":"../node_modules/core-js/modules/_collection.js"}],"../node_modules/core-js/modules/es6.weak-set.js":[function(require,module,exports) {
'use strict';
var weak = require('./_collection-weak');
var validate = require('./_validate-collection');
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
require('./_collection')(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);

},{"./_collection-weak":"../node_modules/core-js/modules/_collection-weak.js","./_validate-collection":"../node_modules/core-js/modules/_validate-collection.js","./_collection":"../node_modules/core-js/modules/_collection.js"}],"../node_modules/core-js/modules/_typed.js":[function(require,module,exports) {

var global = require('./_global');
var hide = require('./_hide');
var uid = require('./_uid');
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};

},{"./_global":"../node_modules/core-js/modules/_global.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_uid":"../node_modules/core-js/modules/_uid.js"}],"../node_modules/core-js/modules/_to-index.js":[function(require,module,exports) {
// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};

},{"./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_to-length":"../node_modules/core-js/modules/_to-length.js"}],"../node_modules/core-js/modules/_typed-buffer.js":[function(require,module,exports) {

'use strict';
var global = require('./_global');
var DESCRIPTORS = require('./_descriptors');
var LIBRARY = require('./_library');
var $typed = require('./_typed');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var fails = require('./_fails');
var anInstance = require('./_an-instance');
var toInteger = require('./_to-integer');
var toLength = require('./_to-length');
var toIndex = require('./_to-index');
var gOPN = require('./_object-gopn').f;
var dP = require('./_object-dp').f;
var arrayFill = require('./_array-fill');
var setToStringTag = require('./_set-to-string-tag');
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;

},{"./_global":"../node_modules/core-js/modules/_global.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_library":"../node_modules/core-js/modules/_library.js","./_typed":"../node_modules/core-js/modules/_typed.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_to-index":"../node_modules/core-js/modules/_to-index.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_array-fill":"../node_modules/core-js/modules/_array-fill.js","./_set-to-string-tag":"../node_modules/core-js/modules/_set-to-string-tag.js"}],"../node_modules/core-js/modules/es6.typed.array-buffer.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var $typed = require('./_typed');
var buffer = require('./_typed-buffer');
var anObject = require('./_an-object');
var toAbsoluteIndex = require('./_to-absolute-index');
var toLength = require('./_to-length');
var isObject = require('./_is-object');
var ArrayBuffer = require('./_global').ArrayBuffer;
var speciesConstructor = require('./_species-constructor');
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * require('./_fails')(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require('./_set-species')(ARRAY_BUFFER);

},{"./_export":"../node_modules/core-js/modules/_export.js","./_typed":"../node_modules/core-js/modules/_typed.js","./_typed-buffer":"../node_modules/core-js/modules/_typed-buffer.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_global":"../node_modules/core-js/modules/_global.js","./_species-constructor":"../node_modules/core-js/modules/_species-constructor.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_set-species":"../node_modules/core-js/modules/_set-species.js"}],"../node_modules/core-js/modules/es6.typed.data-view.js":[function(require,module,exports) {
var $export = require('./_export');
$export($export.G + $export.W + $export.F * !require('./_typed').ABV, {
  DataView: require('./_typed-buffer').DataView
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_typed":"../node_modules/core-js/modules/_typed.js","./_typed-buffer":"../node_modules/core-js/modules/_typed-buffer.js"}],"../node_modules/core-js/modules/_typed-array.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';
if (require('./_descriptors')) {
  var LIBRARY = require('./_library');
  var global = require('./_global');
  var fails = require('./_fails');
  var $export = require('./_export');
  var $typed = require('./_typed');
  var $buffer = require('./_typed-buffer');
  var ctx = require('./_ctx');
  var anInstance = require('./_an-instance');
  var propertyDesc = require('./_property-desc');
  var hide = require('./_hide');
  var redefineAll = require('./_redefine-all');
  var toInteger = require('./_to-integer');
  var toLength = require('./_to-length');
  var toIndex = require('./_to-index');
  var toAbsoluteIndex = require('./_to-absolute-index');
  var toPrimitive = require('./_to-primitive');
  var has = require('./_has');
  var classof = require('./_classof');
  var isObject = require('./_is-object');
  var toObject = require('./_to-object');
  var isArrayIter = require('./_is-array-iter');
  var create = require('./_object-create');
  var getPrototypeOf = require('./_object-gpo');
  var gOPN = require('./_object-gopn').f;
  var getIterFn = require('./core.get-iterator-method');
  var uid = require('./_uid');
  var wks = require('./_wks');
  var createArrayMethod = require('./_array-methods');
  var createArrayIncludes = require('./_array-includes');
  var speciesConstructor = require('./_species-constructor');
  var ArrayIterators = require('./es6.array.iterator');
  var Iterators = require('./_iterators');
  var $iterDetect = require('./_iter-detect');
  var setSpecies = require('./_set-species');
  var arrayFill = require('./_array-fill');
  var arrayCopyWithin = require('./_array-copy-within');
  var $DP = require('./_object-dp');
  var $GOPD = require('./_object-gopd');
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };

},{"./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_library":"../node_modules/core-js/modules/_library.js","./_global":"../node_modules/core-js/modules/_global.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_export":"../node_modules/core-js/modules/_export.js","./_typed":"../node_modules/core-js/modules/_typed.js","./_typed-buffer":"../node_modules/core-js/modules/_typed-buffer.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_to-index":"../node_modules/core-js/modules/_to-index.js","./_to-absolute-index":"../node_modules/core-js/modules/_to-absolute-index.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_has":"../node_modules/core-js/modules/_has.js","./_classof":"../node_modules/core-js/modules/_classof.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_is-array-iter":"../node_modules/core-js/modules/_is-array-iter.js","./_object-create":"../node_modules/core-js/modules/_object-create.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./core.get-iterator-method":"../node_modules/core-js/modules/core.get-iterator-method.js","./_uid":"../node_modules/core-js/modules/_uid.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_array-methods":"../node_modules/core-js/modules/_array-methods.js","./_array-includes":"../node_modules/core-js/modules/_array-includes.js","./_species-constructor":"../node_modules/core-js/modules/_species-constructor.js","./es6.array.iterator":"../node_modules/core-js/modules/es6.array.iterator.js","./_iterators":"../node_modules/core-js/modules/_iterators.js","./_iter-detect":"../node_modules/core-js/modules/_iter-detect.js","./_set-species":"../node_modules/core-js/modules/_set-species.js","./_array-fill":"../node_modules/core-js/modules/_array-fill.js","./_array-copy-within":"../node_modules/core-js/modules/_array-copy-within.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js"}],"../node_modules/core-js/modules/es6.typed.int8-array.js":[function(require,module,exports) {
require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.uint8-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.uint8-clamped-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.int16-array.js":[function(require,module,exports) {
require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.uint16-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.int32-array.js":[function(require,module,exports) {
require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.uint32-array.js":[function(require,module,exports) {
require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.float32-array.js":[function(require,module,exports) {
require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.typed.float64-array.js":[function(require,module,exports) {
require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

},{"./_typed-array":"../node_modules/core-js/modules/_typed-array.js"}],"../node_modules/core-js/modules/es6.reflect.apply.js":[function(require,module,exports) {
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = require('./_export');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var rApply = (require('./_global').Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !require('./_fails')(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_global":"../node_modules/core-js/modules/_global.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.reflect.construct.js":[function(require,module,exports) {
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = require('./_export');
var create = require('./_object-create');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var isObject = require('./_is-object');
var fails = require('./_fails');
var bind = require('./_bind');
var rConstruct = (require('./_global').Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-create":"../node_modules/core-js/modules/_object-create.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_bind":"../node_modules/core-js/modules/_bind.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/es6.reflect.define-property.js":[function(require,module,exports) {
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = require('./_object-dp');
var $export = require('./_export');
var anObject = require('./_an-object');
var toPrimitive = require('./_to-primitive');

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * require('./_fails')(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_export":"../node_modules/core-js/modules/_export.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_fails":"../node_modules/core-js/modules/_fails.js"}],"../node_modules/core-js/modules/es6.reflect.delete-property.js":[function(require,module,exports) {
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = require('./_export');
var gOPD = require('./_object-gopd').f;
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.reflect.enumerate.js":[function(require,module,exports) {
'use strict';
// 26.1.5 Reflect.enumerate(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
require('./_iter-create')(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_iter-create":"../node_modules/core-js/modules/_iter-create.js"}],"../node_modules/core-js/modules/es6.reflect.get.js":[function(require,module,exports) {
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var isObject = require('./_is-object');
var anObject = require('./_an-object');

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });

},{"./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_has":"../node_modules/core-js/modules/_has.js","./_export":"../node_modules/core-js/modules/_export.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js":[function(require,module,exports) {
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = require('./_object-gopd');
var $export = require('./_export');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});

},{"./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_export":"../node_modules/core-js/modules/_export.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.reflect.get-prototype-of.js":[function(require,module,exports) {
// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.reflect.has.js":[function(require,module,exports) {
// 26.1.9 Reflect.has(target, propertyKey)
var $export = require('./_export');

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es6.reflect.is-extensible.js":[function(require,module,exports) {
// 26.1.10 Reflect.isExtensible(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/_own-keys.js":[function(require,module,exports) {
// all object keys, includes non-enumerable and symbols
var gOPN = require('./_object-gopn');
var gOPS = require('./_object-gops');
var anObject = require('./_an-object');
var Reflect = require('./_global').Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

},{"./_object-gopn":"../node_modules/core-js/modules/_object-gopn.js","./_object-gops":"../node_modules/core-js/modules/_object-gops.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/es6.reflect.own-keys.js":[function(require,module,exports) {
// 26.1.11 Reflect.ownKeys(target)
var $export = require('./_export');

$export($export.S, 'Reflect', { ownKeys: require('./_own-keys') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_own-keys":"../node_modules/core-js/modules/_own-keys.js"}],"../node_modules/core-js/modules/es6.reflect.prevent-extensions.js":[function(require,module,exports) {
// 26.1.12 Reflect.preventExtensions(target)
var $export = require('./_export');
var anObject = require('./_an-object');
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es6.reflect.set.js":[function(require,module,exports) {
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = require('./_object-dp');
var gOPD = require('./_object-gopd');
var getPrototypeOf = require('./_object-gpo');
var has = require('./_has');
var $export = require('./_export');
var createDesc = require('./_property-desc');
var anObject = require('./_an-object');
var isObject = require('./_is-object');

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });

},{"./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_has":"../node_modules/core-js/modules/_has.js","./_export":"../node_modules/core-js/modules/_export.js","./_property-desc":"../node_modules/core-js/modules/_property-desc.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_is-object":"../node_modules/core-js/modules/_is-object.js"}],"../node_modules/core-js/modules/es6.reflect.set-prototype-of.js":[function(require,module,exports) {
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = require('./_export');
var setProto = require('./_set-proto');

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_set-proto":"../node_modules/core-js/modules/_set-proto.js"}],"../node_modules/core-js/modules/es7.array.includes.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/Array.prototype.includes
var $export = require('./_export');
var $includes = require('./_array-includes')(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require('./_add-to-unscopables')('includes');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_array-includes":"../node_modules/core-js/modules/_array-includes.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/_flatten-into-array.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = require('./_is-array');
var isObject = require('./_is-object');
var toLength = require('./_to-length');
var ctx = require('./_ctx');
var IS_CONCAT_SPREADABLE = require('./_wks')('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;

},{"./_is-array":"../node_modules/core-js/modules/_is-array.js","./_is-object":"../node_modules/core-js/modules/_is-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/modules/es7.array.flat-map.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var aFunction = require('./_a-function');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

require('./_add-to-unscopables')('flatMap');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_flatten-into-array":"../node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_array-species-create":"../node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/es7.array.flatten.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = require('./_export');
var flattenIntoArray = require('./_flatten-into-array');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var toInteger = require('./_to-integer');
var arraySpeciesCreate = require('./_array-species-create');

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

require('./_add-to-unscopables')('flatten');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_flatten-into-array":"../node_modules/core-js/modules/_flatten-into-array.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_to-integer":"../node_modules/core-js/modules/_to-integer.js","./_array-species-create":"../node_modules/core-js/modules/_array-species-create.js","./_add-to-unscopables":"../node_modules/core-js/modules/_add-to-unscopables.js"}],"../node_modules/core-js/modules/es7.string.at.js":[function(require,module,exports) {
'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-at":"../node_modules/core-js/modules/_string-at.js"}],"../node_modules/core-js/modules/_string-pad.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-string-pad-start-end
var toLength = require('./_to-length');
var repeat = require('./_string-repeat');
var defined = require('./_defined');

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};

},{"./_to-length":"../node_modules/core-js/modules/_to-length.js","./_string-repeat":"../node_modules/core-js/modules/_string-repeat.js","./_defined":"../node_modules/core-js/modules/_defined.js"}],"../node_modules/core-js/modules/es7.string.pad-start.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-pad":"../node_modules/core-js/modules/_string-pad.js","./_user-agent":"../node_modules/core-js/modules/_user-agent.js"}],"../node_modules/core-js/modules/es7.string.pad-end.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-string-pad-start-end
var $export = require('./_export');
var $pad = require('./_string-pad');
var userAgent = require('./_user-agent');

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_string-pad":"../node_modules/core-js/modules/_string-pad.js","./_user-agent":"../node_modules/core-js/modules/_user-agent.js"}],"../node_modules/core-js/modules/es7.string.trim-left.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

},{"./_string-trim":"../node_modules/core-js/modules/_string-trim.js"}],"../node_modules/core-js/modules/es7.string.trim-right.js":[function(require,module,exports) {
'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

},{"./_string-trim":"../node_modules/core-js/modules/_string-trim.js"}],"../node_modules/core-js/modules/es7.string.match-all.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/String.prototype.matchAll/
var $export = require('./_export');
var defined = require('./_defined');
var toLength = require('./_to-length');
var isRegExp = require('./_is-regexp');
var getFlags = require('./_flags');
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

require('./_iter-create')($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_defined":"../node_modules/core-js/modules/_defined.js","./_to-length":"../node_modules/core-js/modules/_to-length.js","./_is-regexp":"../node_modules/core-js/modules/_is-regexp.js","./_flags":"../node_modules/core-js/modules/_flags.js","./_iter-create":"../node_modules/core-js/modules/_iter-create.js"}],"../node_modules/core-js/modules/es7.symbol.async-iterator.js":[function(require,module,exports) {
require('./_wks-define')('asyncIterator');

},{"./_wks-define":"../node_modules/core-js/modules/_wks-define.js"}],"../node_modules/core-js/modules/es7.symbol.observable.js":[function(require,module,exports) {
require('./_wks-define')('observable');

},{"./_wks-define":"../node_modules/core-js/modules/_wks-define.js"}],"../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = require('./_export');
var ownKeys = require('./_own-keys');
var toIObject = require('./_to-iobject');
var gOPD = require('./_object-gopd');
var createProperty = require('./_create-property');

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_own-keys":"../node_modules/core-js/modules/_own-keys.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_create-property":"../node_modules/core-js/modules/_create-property.js"}],"../node_modules/core-js/modules/_object-to-array.js":[function(require,module,exports) {
var getKeys = require('./_object-keys');
var toIObject = require('./_to-iobject');
var isEnum = require('./_object-pie').f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};

},{"./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_to-iobject":"../node_modules/core-js/modules/_to-iobject.js","./_object-pie":"../node_modules/core-js/modules/_object-pie.js"}],"../node_modules/core-js/modules/es7.object.values.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-to-array":"../node_modules/core-js/modules/_object-to-array.js"}],"../node_modules/core-js/modules/es7.object.entries.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_object-to-array":"../node_modules/core-js/modules/_object-to-array.js"}],"../node_modules/core-js/modules/_object-forced-pam.js":[function(require,module,exports) {
'use strict';
// Forced replacement prototype accessors methods
module.exports = require('./_library') || !require('./_fails')(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete require('./_global')[K];
});

},{"./_library":"../node_modules/core-js/modules/_library.js","./_fails":"../node_modules/core-js/modules/_fails.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/es7.object.define-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../node_modules/core-js/modules/_object-forced-pam.js"}],"../node_modules/core-js/modules/es7.object.define-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var aFunction = require('./_a-function');
var $defineProperty = require('./_object-dp');

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_object-dp":"../node_modules/core-js/modules/_object-dp.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../node_modules/core-js/modules/_object-forced-pam.js"}],"../node_modules/core-js/modules/es7.object.lookup-getter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../node_modules/core-js/modules/_object-forced-pam.js"}],"../node_modules/core-js/modules/es7.object.lookup-setter.js":[function(require,module,exports) {
'use strict';
var $export = require('./_export');
var toObject = require('./_to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-gpo');
var getOwnPropertyDescriptor = require('./_object-gopd').f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require('./_descriptors') && $export($export.P + require('./_object-forced-pam'), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_to-object":"../node_modules/core-js/modules/_to-object.js","./_to-primitive":"../node_modules/core-js/modules/_to-primitive.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js","./_object-gopd":"../node_modules/core-js/modules/_object-gopd.js","./_descriptors":"../node_modules/core-js/modules/_descriptors.js","./_object-forced-pam":"../node_modules/core-js/modules/_object-forced-pam.js"}],"../node_modules/core-js/modules/_array-from-iterable.js":[function(require,module,exports) {
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":"../node_modules/core-js/modules/_for-of.js"}],"../node_modules/core-js/modules/_collection-to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_classof":"../node_modules/core-js/modules/_classof.js","./_array-from-iterable":"../node_modules/core-js/modules/_array-from-iterable.js"}],"../node_modules/core-js/modules/es7.map.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_collection-to-json":"../node_modules/core-js/modules/_collection-to-json.js"}],"../node_modules/core-js/modules/es7.set.to-json.js":[function(require,module,exports) {
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_collection-to-json":"../node_modules/core-js/modules/_collection-to-json.js"}],"../node_modules/core-js/modules/_set-collection-of.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":"../node_modules/core-js/modules/_set-collection-of.js"}],"../node_modules/core-js/modules/es7.set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
require('./_set-collection-of')('Set');

},{"./_set-collection-of":"../node_modules/core-js/modules/_set-collection-of.js"}],"../node_modules/core-js/modules/es7.weak-map.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
require('./_set-collection-of')('WeakMap');

},{"./_set-collection-of":"../node_modules/core-js/modules/_set-collection-of.js"}],"../node_modules/core-js/modules/es7.weak-set.of.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
require('./_set-collection-of')('WeakSet');

},{"./_set-collection-of":"../node_modules/core-js/modules/_set-collection-of.js"}],"../node_modules/core-js/modules/_set-collection-from.js":[function(require,module,exports) {
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_export":"../node_modules/core-js/modules/_export.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_ctx":"../node_modules/core-js/modules/_ctx.js","./_for-of":"../node_modules/core-js/modules/_for-of.js"}],"../node_modules/core-js/modules/es7.map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":"../node_modules/core-js/modules/_set-collection-from.js"}],"../node_modules/core-js/modules/es7.set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
require('./_set-collection-from')('Set');

},{"./_set-collection-from":"../node_modules/core-js/modules/_set-collection-from.js"}],"../node_modules/core-js/modules/es7.weak-map.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
require('./_set-collection-from')('WeakMap');

},{"./_set-collection-from":"../node_modules/core-js/modules/_set-collection-from.js"}],"../node_modules/core-js/modules/es7.weak-set.from.js":[function(require,module,exports) {
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
require('./_set-collection-from')('WeakSet');

},{"./_set-collection-from":"../node_modules/core-js/modules/_set-collection-from.js"}],"../node_modules/core-js/modules/es7.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/es7.system.global.js":[function(require,module,exports) {
// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_global":"../node_modules/core-js/modules/_global.js"}],"../node_modules/core-js/modules/es7.error.is-error.js":[function(require,module,exports) {
// https://github.com/ljharb/proposal-is-error
var $export = require('./_export');
var cof = require('./_cof');

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/es7.math.clamp.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.deg-per-rad.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.degrees.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/_math-scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};

},{}],"../node_modules/core-js/modules/es7.math.fscale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var scale = require('./_math-scale');
var fround = require('./_math-fround');

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-scale":"../node_modules/core-js/modules/_math-scale.js","./_math-fround":"../node_modules/core-js/modules/_math-fround.js"}],"../node_modules/core-js/modules/es7.math.iaddh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.isubh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.imulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.rad-per-deg.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.radians.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.scale.js":[function(require,module,exports) {
// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', { scale: require('./_math-scale') });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_math-scale":"../node_modules/core-js/modules/_math-scale.js"}],"../node_modules/core-js/modules/es7.math.umulh.js":[function(require,module,exports) {
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = require('./_export');

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.math.signbit.js":[function(require,module,exports) {
// http://jfbastien.github.io/papers/Math.signbit.html
var $export = require('./_export');

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });

},{"./_export":"../node_modules/core-js/modules/_export.js"}],"../node_modules/core-js/modules/es7.promise.finally.js":[function(require,module,exports) {

// https://github.com/tc39/proposal-promise-finally
'use strict';
var $export = require('./_export');
var core = require('./_core');
var global = require('./_global');
var speciesConstructor = require('./_species-constructor');
var promiseResolve = require('./_promise-resolve');

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_core":"../node_modules/core-js/modules/_core.js","./_global":"../node_modules/core-js/modules/_global.js","./_species-constructor":"../node_modules/core-js/modules/_species-constructor.js","./_promise-resolve":"../node_modules/core-js/modules/_promise-resolve.js"}],"../node_modules/core-js/modules/es7.promise.try.js":[function(require,module,exports) {
'use strict';
// https://github.com/tc39/proposal-promise-try
var $export = require('./_export');
var newPromiseCapability = require('./_new-promise-capability');
var perform = require('./_perform');

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_new-promise-capability":"../node_modules/core-js/modules/_new-promise-capability.js","./_perform":"../node_modules/core-js/modules/_perform.js"}],"../node_modules/core-js/modules/_metadata.js":[function(require,module,exports) {
var Map = require('./es6.map');
var $export = require('./_export');
var shared = require('./_shared')('metadata');
var store = shared.store || (shared.store = new (require('./es6.weak-map'))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};

},{"./es6.map":"../node_modules/core-js/modules/es6.map.js","./_export":"../node_modules/core-js/modules/_export.js","./_shared":"../node_modules/core-js/modules/_shared.js","./es6.weak-map":"../node_modules/core-js/modules/es6.weak-map.js"}],"../node_modules/core-js/modules/es7.reflect.define-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es7.reflect.delete-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es7.reflect.get-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js"}],"../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js":[function(require,module,exports) {
var Set = require('./es6.set');
var from = require('./_array-from-iterable');
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./es6.set":"../node_modules/core-js/modules/es6.set.js","./_array-from-iterable":"../node_modules/core-js/modules/_array-from-iterable.js","./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js"}],"../node_modules/core-js/modules/es7.reflect.get-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es7.reflect.has-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var getPrototypeOf = require('./_object-gpo');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_object-gpo":"../node_modules/core-js/modules/_object-gpo.js"}],"../node_modules/core-js/modules/es7.reflect.has-own-metadata.js":[function(require,module,exports) {
var metadata = require('./_metadata');
var anObject = require('./_an-object');
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js"}],"../node_modules/core-js/modules/es7.reflect.metadata.js":[function(require,module,exports) {
var $metadata = require('./_metadata');
var anObject = require('./_an-object');
var aFunction = require('./_a-function');
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });

},{"./_metadata":"../node_modules/core-js/modules/_metadata.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_a-function":"../node_modules/core-js/modules/_a-function.js"}],"../node_modules/core-js/modules/es7.asap.js":[function(require,module,exports) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = require('./_export');
var microtask = require('./_microtask')();
var process = require('./_global').process;
var isNode = require('./_cof')(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_microtask":"../node_modules/core-js/modules/_microtask.js","./_global":"../node_modules/core-js/modules/_global.js","./_cof":"../node_modules/core-js/modules/_cof.js"}],"../node_modules/core-js/modules/es7.observable.js":[function(require,module,exports) {

'use strict';
// https://github.com/zenparsing/es-observable
var $export = require('./_export');
var global = require('./_global');
var core = require('./_core');
var microtask = require('./_microtask')();
var OBSERVABLE = require('./_wks')('observable');
var aFunction = require('./_a-function');
var anObject = require('./_an-object');
var anInstance = require('./_an-instance');
var redefineAll = require('./_redefine-all');
var hide = require('./_hide');
var forOf = require('./_for-of');
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

require('./_set-species')('Observable');

},{"./_export":"../node_modules/core-js/modules/_export.js","./_global":"../node_modules/core-js/modules/_global.js","./_core":"../node_modules/core-js/modules/_core.js","./_microtask":"../node_modules/core-js/modules/_microtask.js","./_wks":"../node_modules/core-js/modules/_wks.js","./_a-function":"../node_modules/core-js/modules/_a-function.js","./_an-object":"../node_modules/core-js/modules/_an-object.js","./_an-instance":"../node_modules/core-js/modules/_an-instance.js","./_redefine-all":"../node_modules/core-js/modules/_redefine-all.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_for-of":"../node_modules/core-js/modules/_for-of.js","./_set-species":"../node_modules/core-js/modules/_set-species.js"}],"../node_modules/core-js/modules/web.timers.js":[function(require,module,exports) {

// ie9- setTimeout & setInterval additional parameters fix
var global = require('./_global');
var $export = require('./_export');
var userAgent = require('./_user-agent');
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});

},{"./_global":"../node_modules/core-js/modules/_global.js","./_export":"../node_modules/core-js/modules/_export.js","./_user-agent":"../node_modules/core-js/modules/_user-agent.js"}],"../node_modules/core-js/modules/web.immediate.js":[function(require,module,exports) {
var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

},{"./_export":"../node_modules/core-js/modules/_export.js","./_task":"../node_modules/core-js/modules/_task.js"}],"../node_modules/core-js/modules/web.dom.iterable.js":[function(require,module,exports) {

var $iterators = require('./es6.array.iterator');
var getKeys = require('./_object-keys');
var redefine = require('./_redefine');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var wks = require('./_wks');
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

},{"./es6.array.iterator":"../node_modules/core-js/modules/es6.array.iterator.js","./_object-keys":"../node_modules/core-js/modules/_object-keys.js","./_redefine":"../node_modules/core-js/modules/_redefine.js","./_global":"../node_modules/core-js/modules/_global.js","./_hide":"../node_modules/core-js/modules/_hide.js","./_iterators":"../node_modules/core-js/modules/_iterators.js","./_wks":"../node_modules/core-js/modules/_wks.js"}],"../node_modules/core-js/shim.js":[function(require,module,exports) {
require('./modules/es6.symbol');
require('./modules/es6.object.create');
require('./modules/es6.object.define-property');
require('./modules/es6.object.define-properties');
require('./modules/es6.object.get-own-property-descriptor');
require('./modules/es6.object.get-prototype-of');
require('./modules/es6.object.keys');
require('./modules/es6.object.get-own-property-names');
require('./modules/es6.object.freeze');
require('./modules/es6.object.seal');
require('./modules/es6.object.prevent-extensions');
require('./modules/es6.object.is-frozen');
require('./modules/es6.object.is-sealed');
require('./modules/es6.object.is-extensible');
require('./modules/es6.object.assign');
require('./modules/es6.object.is');
require('./modules/es6.object.set-prototype-of');
require('./modules/es6.object.to-string');
require('./modules/es6.function.bind');
require('./modules/es6.function.name');
require('./modules/es6.function.has-instance');
require('./modules/es6.parse-int');
require('./modules/es6.parse-float');
require('./modules/es6.number.constructor');
require('./modules/es6.number.to-fixed');
require('./modules/es6.number.to-precision');
require('./modules/es6.number.epsilon');
require('./modules/es6.number.is-finite');
require('./modules/es6.number.is-integer');
require('./modules/es6.number.is-nan');
require('./modules/es6.number.is-safe-integer');
require('./modules/es6.number.max-safe-integer');
require('./modules/es6.number.min-safe-integer');
require('./modules/es6.number.parse-float');
require('./modules/es6.number.parse-int');
require('./modules/es6.math.acosh');
require('./modules/es6.math.asinh');
require('./modules/es6.math.atanh');
require('./modules/es6.math.cbrt');
require('./modules/es6.math.clz32');
require('./modules/es6.math.cosh');
require('./modules/es6.math.expm1');
require('./modules/es6.math.fround');
require('./modules/es6.math.hypot');
require('./modules/es6.math.imul');
require('./modules/es6.math.log10');
require('./modules/es6.math.log1p');
require('./modules/es6.math.log2');
require('./modules/es6.math.sign');
require('./modules/es6.math.sinh');
require('./modules/es6.math.tanh');
require('./modules/es6.math.trunc');
require('./modules/es6.string.from-code-point');
require('./modules/es6.string.raw');
require('./modules/es6.string.trim');
require('./modules/es6.string.iterator');
require('./modules/es6.string.code-point-at');
require('./modules/es6.string.ends-with');
require('./modules/es6.string.includes');
require('./modules/es6.string.repeat');
require('./modules/es6.string.starts-with');
require('./modules/es6.string.anchor');
require('./modules/es6.string.big');
require('./modules/es6.string.blink');
require('./modules/es6.string.bold');
require('./modules/es6.string.fixed');
require('./modules/es6.string.fontcolor');
require('./modules/es6.string.fontsize');
require('./modules/es6.string.italics');
require('./modules/es6.string.link');
require('./modules/es6.string.small');
require('./modules/es6.string.strike');
require('./modules/es6.string.sub');
require('./modules/es6.string.sup');
require('./modules/es6.date.now');
require('./modules/es6.date.to-json');
require('./modules/es6.date.to-iso-string');
require('./modules/es6.date.to-string');
require('./modules/es6.date.to-primitive');
require('./modules/es6.array.is-array');
require('./modules/es6.array.from');
require('./modules/es6.array.of');
require('./modules/es6.array.join');
require('./modules/es6.array.slice');
require('./modules/es6.array.sort');
require('./modules/es6.array.for-each');
require('./modules/es6.array.map');
require('./modules/es6.array.filter');
require('./modules/es6.array.some');
require('./modules/es6.array.every');
require('./modules/es6.array.reduce');
require('./modules/es6.array.reduce-right');
require('./modules/es6.array.index-of');
require('./modules/es6.array.last-index-of');
require('./modules/es6.array.copy-within');
require('./modules/es6.array.fill');
require('./modules/es6.array.find');
require('./modules/es6.array.find-index');
require('./modules/es6.array.species');
require('./modules/es6.array.iterator');
require('./modules/es6.regexp.constructor');
require('./modules/es6.regexp.exec');
require('./modules/es6.regexp.to-string');
require('./modules/es6.regexp.flags');
require('./modules/es6.regexp.match');
require('./modules/es6.regexp.replace');
require('./modules/es6.regexp.search');
require('./modules/es6.regexp.split');
require('./modules/es6.promise');
require('./modules/es6.map');
require('./modules/es6.set');
require('./modules/es6.weak-map');
require('./modules/es6.weak-set');
require('./modules/es6.typed.array-buffer');
require('./modules/es6.typed.data-view');
require('./modules/es6.typed.int8-array');
require('./modules/es6.typed.uint8-array');
require('./modules/es6.typed.uint8-clamped-array');
require('./modules/es6.typed.int16-array');
require('./modules/es6.typed.uint16-array');
require('./modules/es6.typed.int32-array');
require('./modules/es6.typed.uint32-array');
require('./modules/es6.typed.float32-array');
require('./modules/es6.typed.float64-array');
require('./modules/es6.reflect.apply');
require('./modules/es6.reflect.construct');
require('./modules/es6.reflect.define-property');
require('./modules/es6.reflect.delete-property');
require('./modules/es6.reflect.enumerate');
require('./modules/es6.reflect.get');
require('./modules/es6.reflect.get-own-property-descriptor');
require('./modules/es6.reflect.get-prototype-of');
require('./modules/es6.reflect.has');
require('./modules/es6.reflect.is-extensible');
require('./modules/es6.reflect.own-keys');
require('./modules/es6.reflect.prevent-extensions');
require('./modules/es6.reflect.set');
require('./modules/es6.reflect.set-prototype-of');
require('./modules/es7.array.includes');
require('./modules/es7.array.flat-map');
require('./modules/es7.array.flatten');
require('./modules/es7.string.at');
require('./modules/es7.string.pad-start');
require('./modules/es7.string.pad-end');
require('./modules/es7.string.trim-left');
require('./modules/es7.string.trim-right');
require('./modules/es7.string.match-all');
require('./modules/es7.symbol.async-iterator');
require('./modules/es7.symbol.observable');
require('./modules/es7.object.get-own-property-descriptors');
require('./modules/es7.object.values');
require('./modules/es7.object.entries');
require('./modules/es7.object.define-getter');
require('./modules/es7.object.define-setter');
require('./modules/es7.object.lookup-getter');
require('./modules/es7.object.lookup-setter');
require('./modules/es7.map.to-json');
require('./modules/es7.set.to-json');
require('./modules/es7.map.of');
require('./modules/es7.set.of');
require('./modules/es7.weak-map.of');
require('./modules/es7.weak-set.of');
require('./modules/es7.map.from');
require('./modules/es7.set.from');
require('./modules/es7.weak-map.from');
require('./modules/es7.weak-set.from');
require('./modules/es7.global');
require('./modules/es7.system.global');
require('./modules/es7.error.is-error');
require('./modules/es7.math.clamp');
require('./modules/es7.math.deg-per-rad');
require('./modules/es7.math.degrees');
require('./modules/es7.math.fscale');
require('./modules/es7.math.iaddh');
require('./modules/es7.math.isubh');
require('./modules/es7.math.imulh');
require('./modules/es7.math.rad-per-deg');
require('./modules/es7.math.radians');
require('./modules/es7.math.scale');
require('./modules/es7.math.umulh');
require('./modules/es7.math.signbit');
require('./modules/es7.promise.finally');
require('./modules/es7.promise.try');
require('./modules/es7.reflect.define-metadata');
require('./modules/es7.reflect.delete-metadata');
require('./modules/es7.reflect.get-metadata');
require('./modules/es7.reflect.get-metadata-keys');
require('./modules/es7.reflect.get-own-metadata');
require('./modules/es7.reflect.get-own-metadata-keys');
require('./modules/es7.reflect.has-metadata');
require('./modules/es7.reflect.has-own-metadata');
require('./modules/es7.reflect.metadata');
require('./modules/es7.asap');
require('./modules/es7.observable');
require('./modules/web.timers');
require('./modules/web.immediate');
require('./modules/web.dom.iterable');
module.exports = require('./modules/_core');

},{"./modules/es6.symbol":"../node_modules/core-js/modules/es6.symbol.js","./modules/es6.object.create":"../node_modules/core-js/modules/es6.object.create.js","./modules/es6.object.define-property":"../node_modules/core-js/modules/es6.object.define-property.js","./modules/es6.object.define-properties":"../node_modules/core-js/modules/es6.object.define-properties.js","./modules/es6.object.get-own-property-descriptor":"../node_modules/core-js/modules/es6.object.get-own-property-descriptor.js","./modules/es6.object.get-prototype-of":"../node_modules/core-js/modules/es6.object.get-prototype-of.js","./modules/es6.object.keys":"../node_modules/core-js/modules/es6.object.keys.js","./modules/es6.object.get-own-property-names":"../node_modules/core-js/modules/es6.object.get-own-property-names.js","./modules/es6.object.freeze":"../node_modules/core-js/modules/es6.object.freeze.js","./modules/es6.object.seal":"../node_modules/core-js/modules/es6.object.seal.js","./modules/es6.object.prevent-extensions":"../node_modules/core-js/modules/es6.object.prevent-extensions.js","./modules/es6.object.is-frozen":"../node_modules/core-js/modules/es6.object.is-frozen.js","./modules/es6.object.is-sealed":"../node_modules/core-js/modules/es6.object.is-sealed.js","./modules/es6.object.is-extensible":"../node_modules/core-js/modules/es6.object.is-extensible.js","./modules/es6.object.assign":"../node_modules/core-js/modules/es6.object.assign.js","./modules/es6.object.is":"../node_modules/core-js/modules/es6.object.is.js","./modules/es6.object.set-prototype-of":"../node_modules/core-js/modules/es6.object.set-prototype-of.js","./modules/es6.object.to-string":"../node_modules/core-js/modules/es6.object.to-string.js","./modules/es6.function.bind":"../node_modules/core-js/modules/es6.function.bind.js","./modules/es6.function.name":"../node_modules/core-js/modules/es6.function.name.js","./modules/es6.function.has-instance":"../node_modules/core-js/modules/es6.function.has-instance.js","./modules/es6.parse-int":"../node_modules/core-js/modules/es6.parse-int.js","./modules/es6.parse-float":"../node_modules/core-js/modules/es6.parse-float.js","./modules/es6.number.constructor":"../node_modules/core-js/modules/es6.number.constructor.js","./modules/es6.number.to-fixed":"../node_modules/core-js/modules/es6.number.to-fixed.js","./modules/es6.number.to-precision":"../node_modules/core-js/modules/es6.number.to-precision.js","./modules/es6.number.epsilon":"../node_modules/core-js/modules/es6.number.epsilon.js","./modules/es6.number.is-finite":"../node_modules/core-js/modules/es6.number.is-finite.js","./modules/es6.number.is-integer":"../node_modules/core-js/modules/es6.number.is-integer.js","./modules/es6.number.is-nan":"../node_modules/core-js/modules/es6.number.is-nan.js","./modules/es6.number.is-safe-integer":"../node_modules/core-js/modules/es6.number.is-safe-integer.js","./modules/es6.number.max-safe-integer":"../node_modules/core-js/modules/es6.number.max-safe-integer.js","./modules/es6.number.min-safe-integer":"../node_modules/core-js/modules/es6.number.min-safe-integer.js","./modules/es6.number.parse-float":"../node_modules/core-js/modules/es6.number.parse-float.js","./modules/es6.number.parse-int":"../node_modules/core-js/modules/es6.number.parse-int.js","./modules/es6.math.acosh":"../node_modules/core-js/modules/es6.math.acosh.js","./modules/es6.math.asinh":"../node_modules/core-js/modules/es6.math.asinh.js","./modules/es6.math.atanh":"../node_modules/core-js/modules/es6.math.atanh.js","./modules/es6.math.cbrt":"../node_modules/core-js/modules/es6.math.cbrt.js","./modules/es6.math.clz32":"../node_modules/core-js/modules/es6.math.clz32.js","./modules/es6.math.cosh":"../node_modules/core-js/modules/es6.math.cosh.js","./modules/es6.math.expm1":"../node_modules/core-js/modules/es6.math.expm1.js","./modules/es6.math.fround":"../node_modules/core-js/modules/es6.math.fround.js","./modules/es6.math.hypot":"../node_modules/core-js/modules/es6.math.hypot.js","./modules/es6.math.imul":"../node_modules/core-js/modules/es6.math.imul.js","./modules/es6.math.log10":"../node_modules/core-js/modules/es6.math.log10.js","./modules/es6.math.log1p":"../node_modules/core-js/modules/es6.math.log1p.js","./modules/es6.math.log2":"../node_modules/core-js/modules/es6.math.log2.js","./modules/es6.math.sign":"../node_modules/core-js/modules/es6.math.sign.js","./modules/es6.math.sinh":"../node_modules/core-js/modules/es6.math.sinh.js","./modules/es6.math.tanh":"../node_modules/core-js/modules/es6.math.tanh.js","./modules/es6.math.trunc":"../node_modules/core-js/modules/es6.math.trunc.js","./modules/es6.string.from-code-point":"../node_modules/core-js/modules/es6.string.from-code-point.js","./modules/es6.string.raw":"../node_modules/core-js/modules/es6.string.raw.js","./modules/es6.string.trim":"../node_modules/core-js/modules/es6.string.trim.js","./modules/es6.string.iterator":"../node_modules/core-js/modules/es6.string.iterator.js","./modules/es6.string.code-point-at":"../node_modules/core-js/modules/es6.string.code-point-at.js","./modules/es6.string.ends-with":"../node_modules/core-js/modules/es6.string.ends-with.js","./modules/es6.string.includes":"../node_modules/core-js/modules/es6.string.includes.js","./modules/es6.string.repeat":"../node_modules/core-js/modules/es6.string.repeat.js","./modules/es6.string.starts-with":"../node_modules/core-js/modules/es6.string.starts-with.js","./modules/es6.string.anchor":"../node_modules/core-js/modules/es6.string.anchor.js","./modules/es6.string.big":"../node_modules/core-js/modules/es6.string.big.js","./modules/es6.string.blink":"../node_modules/core-js/modules/es6.string.blink.js","./modules/es6.string.bold":"../node_modules/core-js/modules/es6.string.bold.js","./modules/es6.string.fixed":"../node_modules/core-js/modules/es6.string.fixed.js","./modules/es6.string.fontcolor":"../node_modules/core-js/modules/es6.string.fontcolor.js","./modules/es6.string.fontsize":"../node_modules/core-js/modules/es6.string.fontsize.js","./modules/es6.string.italics":"../node_modules/core-js/modules/es6.string.italics.js","./modules/es6.string.link":"../node_modules/core-js/modules/es6.string.link.js","./modules/es6.string.small":"../node_modules/core-js/modules/es6.string.small.js","./modules/es6.string.strike":"../node_modules/core-js/modules/es6.string.strike.js","./modules/es6.string.sub":"../node_modules/core-js/modules/es6.string.sub.js","./modules/es6.string.sup":"../node_modules/core-js/modules/es6.string.sup.js","./modules/es6.date.now":"../node_modules/core-js/modules/es6.date.now.js","./modules/es6.date.to-json":"../node_modules/core-js/modules/es6.date.to-json.js","./modules/es6.date.to-iso-string":"../node_modules/core-js/modules/es6.date.to-iso-string.js","./modules/es6.date.to-string":"../node_modules/core-js/modules/es6.date.to-string.js","./modules/es6.date.to-primitive":"../node_modules/core-js/modules/es6.date.to-primitive.js","./modules/es6.array.is-array":"../node_modules/core-js/modules/es6.array.is-array.js","./modules/es6.array.from":"../node_modules/core-js/modules/es6.array.from.js","./modules/es6.array.of":"../node_modules/core-js/modules/es6.array.of.js","./modules/es6.array.join":"../node_modules/core-js/modules/es6.array.join.js","./modules/es6.array.slice":"../node_modules/core-js/modules/es6.array.slice.js","./modules/es6.array.sort":"../node_modules/core-js/modules/es6.array.sort.js","./modules/es6.array.for-each":"../node_modules/core-js/modules/es6.array.for-each.js","./modules/es6.array.map":"../node_modules/core-js/modules/es6.array.map.js","./modules/es6.array.filter":"../node_modules/core-js/modules/es6.array.filter.js","./modules/es6.array.some":"../node_modules/core-js/modules/es6.array.some.js","./modules/es6.array.every":"../node_modules/core-js/modules/es6.array.every.js","./modules/es6.array.reduce":"../node_modules/core-js/modules/es6.array.reduce.js","./modules/es6.array.reduce-right":"../node_modules/core-js/modules/es6.array.reduce-right.js","./modules/es6.array.index-of":"../node_modules/core-js/modules/es6.array.index-of.js","./modules/es6.array.last-index-of":"../node_modules/core-js/modules/es6.array.last-index-of.js","./modules/es6.array.copy-within":"../node_modules/core-js/modules/es6.array.copy-within.js","./modules/es6.array.fill":"../node_modules/core-js/modules/es6.array.fill.js","./modules/es6.array.find":"../node_modules/core-js/modules/es6.array.find.js","./modules/es6.array.find-index":"../node_modules/core-js/modules/es6.array.find-index.js","./modules/es6.array.species":"../node_modules/core-js/modules/es6.array.species.js","./modules/es6.array.iterator":"../node_modules/core-js/modules/es6.array.iterator.js","./modules/es6.regexp.constructor":"../node_modules/core-js/modules/es6.regexp.constructor.js","./modules/es6.regexp.exec":"../node_modules/core-js/modules/es6.regexp.exec.js","./modules/es6.regexp.to-string":"../node_modules/core-js/modules/es6.regexp.to-string.js","./modules/es6.regexp.flags":"../node_modules/core-js/modules/es6.regexp.flags.js","./modules/es6.regexp.match":"../node_modules/core-js/modules/es6.regexp.match.js","./modules/es6.regexp.replace":"../node_modules/core-js/modules/es6.regexp.replace.js","./modules/es6.regexp.search":"../node_modules/core-js/modules/es6.regexp.search.js","./modules/es6.regexp.split":"../node_modules/core-js/modules/es6.regexp.split.js","./modules/es6.promise":"../node_modules/core-js/modules/es6.promise.js","./modules/es6.map":"../node_modules/core-js/modules/es6.map.js","./modules/es6.set":"../node_modules/core-js/modules/es6.set.js","./modules/es6.weak-map":"../node_modules/core-js/modules/es6.weak-map.js","./modules/es6.weak-set":"../node_modules/core-js/modules/es6.weak-set.js","./modules/es6.typed.array-buffer":"../node_modules/core-js/modules/es6.typed.array-buffer.js","./modules/es6.typed.data-view":"../node_modules/core-js/modules/es6.typed.data-view.js","./modules/es6.typed.int8-array":"../node_modules/core-js/modules/es6.typed.int8-array.js","./modules/es6.typed.uint8-array":"../node_modules/core-js/modules/es6.typed.uint8-array.js","./modules/es6.typed.uint8-clamped-array":"../node_modules/core-js/modules/es6.typed.uint8-clamped-array.js","./modules/es6.typed.int16-array":"../node_modules/core-js/modules/es6.typed.int16-array.js","./modules/es6.typed.uint16-array":"../node_modules/core-js/modules/es6.typed.uint16-array.js","./modules/es6.typed.int32-array":"../node_modules/core-js/modules/es6.typed.int32-array.js","./modules/es6.typed.uint32-array":"../node_modules/core-js/modules/es6.typed.uint32-array.js","./modules/es6.typed.float32-array":"../node_modules/core-js/modules/es6.typed.float32-array.js","./modules/es6.typed.float64-array":"../node_modules/core-js/modules/es6.typed.float64-array.js","./modules/es6.reflect.apply":"../node_modules/core-js/modules/es6.reflect.apply.js","./modules/es6.reflect.construct":"../node_modules/core-js/modules/es6.reflect.construct.js","./modules/es6.reflect.define-property":"../node_modules/core-js/modules/es6.reflect.define-property.js","./modules/es6.reflect.delete-property":"../node_modules/core-js/modules/es6.reflect.delete-property.js","./modules/es6.reflect.enumerate":"../node_modules/core-js/modules/es6.reflect.enumerate.js","./modules/es6.reflect.get":"../node_modules/core-js/modules/es6.reflect.get.js","./modules/es6.reflect.get-own-property-descriptor":"../node_modules/core-js/modules/es6.reflect.get-own-property-descriptor.js","./modules/es6.reflect.get-prototype-of":"../node_modules/core-js/modules/es6.reflect.get-prototype-of.js","./modules/es6.reflect.has":"../node_modules/core-js/modules/es6.reflect.has.js","./modules/es6.reflect.is-extensible":"../node_modules/core-js/modules/es6.reflect.is-extensible.js","./modules/es6.reflect.own-keys":"../node_modules/core-js/modules/es6.reflect.own-keys.js","./modules/es6.reflect.prevent-extensions":"../node_modules/core-js/modules/es6.reflect.prevent-extensions.js","./modules/es6.reflect.set":"../node_modules/core-js/modules/es6.reflect.set.js","./modules/es6.reflect.set-prototype-of":"../node_modules/core-js/modules/es6.reflect.set-prototype-of.js","./modules/es7.array.includes":"../node_modules/core-js/modules/es7.array.includes.js","./modules/es7.array.flat-map":"../node_modules/core-js/modules/es7.array.flat-map.js","./modules/es7.array.flatten":"../node_modules/core-js/modules/es7.array.flatten.js","./modules/es7.string.at":"../node_modules/core-js/modules/es7.string.at.js","./modules/es7.string.pad-start":"../node_modules/core-js/modules/es7.string.pad-start.js","./modules/es7.string.pad-end":"../node_modules/core-js/modules/es7.string.pad-end.js","./modules/es7.string.trim-left":"../node_modules/core-js/modules/es7.string.trim-left.js","./modules/es7.string.trim-right":"../node_modules/core-js/modules/es7.string.trim-right.js","./modules/es7.string.match-all":"../node_modules/core-js/modules/es7.string.match-all.js","./modules/es7.symbol.async-iterator":"../node_modules/core-js/modules/es7.symbol.async-iterator.js","./modules/es7.symbol.observable":"../node_modules/core-js/modules/es7.symbol.observable.js","./modules/es7.object.get-own-property-descriptors":"../node_modules/core-js/modules/es7.object.get-own-property-descriptors.js","./modules/es7.object.values":"../node_modules/core-js/modules/es7.object.values.js","./modules/es7.object.entries":"../node_modules/core-js/modules/es7.object.entries.js","./modules/es7.object.define-getter":"../node_modules/core-js/modules/es7.object.define-getter.js","./modules/es7.object.define-setter":"../node_modules/core-js/modules/es7.object.define-setter.js","./modules/es7.object.lookup-getter":"../node_modules/core-js/modules/es7.object.lookup-getter.js","./modules/es7.object.lookup-setter":"../node_modules/core-js/modules/es7.object.lookup-setter.js","./modules/es7.map.to-json":"../node_modules/core-js/modules/es7.map.to-json.js","./modules/es7.set.to-json":"../node_modules/core-js/modules/es7.set.to-json.js","./modules/es7.map.of":"../node_modules/core-js/modules/es7.map.of.js","./modules/es7.set.of":"../node_modules/core-js/modules/es7.set.of.js","./modules/es7.weak-map.of":"../node_modules/core-js/modules/es7.weak-map.of.js","./modules/es7.weak-set.of":"../node_modules/core-js/modules/es7.weak-set.of.js","./modules/es7.map.from":"../node_modules/core-js/modules/es7.map.from.js","./modules/es7.set.from":"../node_modules/core-js/modules/es7.set.from.js","./modules/es7.weak-map.from":"../node_modules/core-js/modules/es7.weak-map.from.js","./modules/es7.weak-set.from":"../node_modules/core-js/modules/es7.weak-set.from.js","./modules/es7.global":"../node_modules/core-js/modules/es7.global.js","./modules/es7.system.global":"../node_modules/core-js/modules/es7.system.global.js","./modules/es7.error.is-error":"../node_modules/core-js/modules/es7.error.is-error.js","./modules/es7.math.clamp":"../node_modules/core-js/modules/es7.math.clamp.js","./modules/es7.math.deg-per-rad":"../node_modules/core-js/modules/es7.math.deg-per-rad.js","./modules/es7.math.degrees":"../node_modules/core-js/modules/es7.math.degrees.js","./modules/es7.math.fscale":"../node_modules/core-js/modules/es7.math.fscale.js","./modules/es7.math.iaddh":"../node_modules/core-js/modules/es7.math.iaddh.js","./modules/es7.math.isubh":"../node_modules/core-js/modules/es7.math.isubh.js","./modules/es7.math.imulh":"../node_modules/core-js/modules/es7.math.imulh.js","./modules/es7.math.rad-per-deg":"../node_modules/core-js/modules/es7.math.rad-per-deg.js","./modules/es7.math.radians":"../node_modules/core-js/modules/es7.math.radians.js","./modules/es7.math.scale":"../node_modules/core-js/modules/es7.math.scale.js","./modules/es7.math.umulh":"../node_modules/core-js/modules/es7.math.umulh.js","./modules/es7.math.signbit":"../node_modules/core-js/modules/es7.math.signbit.js","./modules/es7.promise.finally":"../node_modules/core-js/modules/es7.promise.finally.js","./modules/es7.promise.try":"../node_modules/core-js/modules/es7.promise.try.js","./modules/es7.reflect.define-metadata":"../node_modules/core-js/modules/es7.reflect.define-metadata.js","./modules/es7.reflect.delete-metadata":"../node_modules/core-js/modules/es7.reflect.delete-metadata.js","./modules/es7.reflect.get-metadata":"../node_modules/core-js/modules/es7.reflect.get-metadata.js","./modules/es7.reflect.get-metadata-keys":"../node_modules/core-js/modules/es7.reflect.get-metadata-keys.js","./modules/es7.reflect.get-own-metadata":"../node_modules/core-js/modules/es7.reflect.get-own-metadata.js","./modules/es7.reflect.get-own-metadata-keys":"../node_modules/core-js/modules/es7.reflect.get-own-metadata-keys.js","./modules/es7.reflect.has-metadata":"../node_modules/core-js/modules/es7.reflect.has-metadata.js","./modules/es7.reflect.has-own-metadata":"../node_modules/core-js/modules/es7.reflect.has-own-metadata.js","./modules/es7.reflect.metadata":"../node_modules/core-js/modules/es7.reflect.metadata.js","./modules/es7.asap":"../node_modules/core-js/modules/es7.asap.js","./modules/es7.observable":"../node_modules/core-js/modules/es7.observable.js","./modules/web.timers":"../node_modules/core-js/modules/web.timers.js","./modules/web.immediate":"../node_modules/core-js/modules/web.immediate.js","./modules/web.dom.iterable":"../node_modules/core-js/modules/web.dom.iterable.js","./modules/_core":"../node_modules/core-js/modules/_core.js"}],"../node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

},{}],"../node_modules/core-js/modules/_replacer.js":[function(require,module,exports) {
module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};

},{}],"../node_modules/core-js/modules/core.regexp.escape.js":[function(require,module,exports) {
// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export');
var $re = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

},{"./_export":"../node_modules/core-js/modules/_export.js","./_replacer":"../node_modules/core-js/modules/_replacer.js"}],"../node_modules/core-js/fn/regexp/escape.js":[function(require,module,exports) {
require('../../modules/core.regexp.escape');
module.exports = require('../../modules/_core').RegExp.escape;

},{"../../modules/core.regexp.escape":"../node_modules/core-js/modules/core.regexp.escape.js","../../modules/_core":"../node_modules/core-js/modules/_core.js"}],"../node_modules/babel-polyfill/lib/index.js":[function(require,module,exports) {
var global = arguments[3];

"use strict";

require("core-js/shim");

require("regenerator-runtime/runtime");

require("core-js/fn/regexp/escape");

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
},{"core-js/shim":"../node_modules/core-js/shim.js","regenerator-runtime/runtime":"../node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js","core-js/fn/regexp/escape":"../node_modules/core-js/fn/regexp/escape.js"}],"data/city.min.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CITIES = void 0;
var CITIES = [{
  "id": 707860,
  "name": "Hurzuf",
  "country": "UA",
  "coord": {
    "lon": 34.283333,
    "lat": 44.549999
  }
}, {
  "id": 519188,
  "name": "Novinki",
  "country": "RU",
  "coord": {
    "lon": 37.666668,
    "lat": 55.683334
  }
}, {
  "id": 1283378,
  "name": "Gorkhā",
  "country": "NP",
  "coord": {
    "lon": 84.633331,
    "lat": 28
  }
}, {
  "id": 1270260,
  "name": "State of Haryāna",
  "country": "IN",
  "coord": {
    "lon": 76,
    "lat": 29
  }
}, {
  "id": 708546,
  "name": "Holubynka",
  "country": "UA",
  "coord": {
    "lon": 33.900002,
    "lat": 44.599998
  }
}, {
  "id": 1283710,
  "name": "Bāgmatī Zone",
  "country": "NP",
  "coord": {
    "lon": 85.416664,
    "lat": 28
  }
}, {
  "id": 529334,
  "name": "Mar’ina Roshcha",
  "country": "RU",
  "coord": {
    "lon": 37.611111,
    "lat": 55.796391
  }
}, {
  "id": 1269750,
  "name": "Republic of India",
  "country": "IN",
  "coord": {
    "lon": 77,
    "lat": 20
  }
}, {
  "id": 1283240,
  "name": "Kathmandu",
  "country": "NP",
  "coord": {
    "lon": 85.316666,
    "lat": 27.716667
  }
}, {
  "id": 703363,
  "name": "Laspi",
  "country": "UA",
  "coord": {
    "lon": 33.733334,
    "lat": 44.416668
  }
}, {
  "id": 3632308,
  "name": "Merida",
  "country": "VE",
  "coord": {
    "lon": -71.144997,
    "lat": 8.598333
  }
}, {
  "id": 473537,
  "name": "Vinogradovo",
  "country": "RU",
  "coord": {
    "lon": 38.545555,
    "lat": 55.423332
  }
}, {
  "id": 384848,
  "name": "Qarah Gawl al ‘Ulyā",
  "country": "IQ",
  "coord": {
    "lon": 45.6325,
    "lat": 35.353889
  }
}, {
  "id": 569143,
  "name": "Cherkizovo",
  "country": "RU",
  "coord": {
    "lon": 37.728889,
    "lat": 55.800835
  }
}, {
  "id": 713514,
  "name": "Alupka",
  "country": "UA",
  "coord": {
    "lon": 34.049999,
    "lat": 44.416668
  }
}, {
  "id": 2878044,
  "name": "Lichtenrade",
  "country": "DE",
  "coord": {
    "lon": 13.40637,
    "lat": 52.398441
  }
}, {
  "id": 464176,
  "name": "Zavety Il’icha",
  "country": "RU",
  "coord": {
    "lon": 37.849998,
    "lat": 56.049999
  }
}, {
  "id": 295582,
  "name": "‘Azriqam",
  "country": "IL",
  "coord": {
    "lon": 34.700001,
    "lat": 31.75
  }
}, {
  "id": 1271231,
  "name": "Ghūra",
  "country": "IN",
  "coord": {
    "lon": 79.883331,
    "lat": 24.766666
  }
}, {
  "id": 690856,
  "name": "Tyuzler",
  "country": "UA",
  "coord": {
    "lon": 34.083332,
    "lat": 44.466667
  }
}, {
  "id": 464737,
  "name": "Zaponor’ye",
  "country": "RU",
  "coord": {
    "lon": 38.861942,
    "lat": 55.639999
  }
}, {
  "id": 707716,
  "name": "Il’ichëvka",
  "country": "UA",
  "coord": {
    "lon": 34.383331,
    "lat": 44.666668
  }
}, {
  "id": 697959,
  "name": "Partyzans’ke",
  "country": "UA",
  "coord": {
    "lon": 34.083332,
    "lat": 44.833332
  }
}, {
  "id": 803611,
  "name": "Yurevichi",
  "country": "RU",
  "coord": {
    "lon": 39.934444,
    "lat": 43.600555
  }
}, {
  "id": 614371,
  "name": "Gumist’a",
  "country": "GE",
  "coord": {
    "lon": 40.973888,
    "lat": 43.026943
  }
}, {
  "id": 874560,
  "name": "Ptitsefabrika",
  "country": "GE",
  "coord": {
    "lon": 40.290558,
    "lat": 43.183613
  }
}, {
  "id": 874652,
  "name": "Orekhovo",
  "country": "GE",
  "coord": {
    "lon": 40.146111,
    "lat": 43.351391
  }
}, {
  "id": 2347078,
  "name": "Birim",
  "country": "NG",
  "coord": {
    "lon": 9.997027,
    "lat": 10.062094
  }
}, {
  "id": 2051302,
  "name": "Priiskovyy",
  "country": "RU",
  "coord": {
    "lon": 132.822495,
    "lat": 42.819168
  }
}, {
  "id": 563692,
  "name": "Dzhaga",
  "country": "RU",
  "coord": {
    "lon": 42.650002,
    "lat": 43.25
  }
}, {
  "id": 481725,
  "name": "Tret’ya Rota",
  "country": "RU",
  "coord": {
    "lon": 39.681389,
    "lat": 43.741943
  }
}, {
  "id": 2638976,
  "name": "Ruislip",
  "country": "GB",
  "coord": {
    "lon": -0.42341,
    "lat": 51.573441
  }
}, {
  "id": 2892705,
  "name": "Karow",
  "country": "DE",
  "coord": {
    "lon": 13.48117,
    "lat": 52.609039
  }
}, {
  "id": 2922336,
  "name": "Gatow",
  "country": "DE",
  "coord": {
    "lon": 13.18285,
    "lat": 52.483238
  }
}, {
  "id": 975511,
  "name": "Mkuze",
  "country": "ZA",
  "coord": {
    "lon": 32.038609,
    "lat": -27.616409
  }
}, {
  "id": 1280737,
  "name": "Lhasa",
  "country": "CN",
  "coord": {
    "lon": 91.099998,
    "lat": 29.65
  }
}, {
  "id": 745042,
  "name": "İstanbul",
  "country": "TR",
  "coord": {
    "lon": 28.983311,
    "lat": 41.03508
  }
}, {
  "id": 3496831,
  "name": "Mao",
  "country": "DO",
  "coord": {
    "lon": -71.078133,
    "lat": 19.551861
  }
}, {
  "id": 2017370,
  "name": "Russian Federation",
  "country": "RU",
  "coord": {
    "lon": 100,
    "lat": 60
  }
}, {
  "id": 2045761,
  "name": "De-Friz",
  "country": "RU",
  "coord": {
    "lon": 131.991394,
    "lat": 43.27861
  }
}, {
  "id": 1257986,
  "name": "Rumbak",
  "country": "IN",
  "coord": {
    "lon": 77.416664,
    "lat": 34.049999
  }
}, {
  "id": 476350,
  "name": "Vavibet",
  "country": "RU",
  "coord": {
    "lon": 34.916668,
    "lat": 67.933334
  }
}, {
  "id": 1343000,
  "name": "Surtagān Chib",
  "country": "PK",
  "coord": {
    "lon": 64.656113,
    "lat": 26.474443
  }
}, {
  "id": 456169,
  "name": "Rīgas Rajons",
  "country": "LV",
  "coord": {
    "lon": 24.333332,
    "lat": 57
  }
}, {
  "id": 475279,
  "name": "Verkhneye Shchekotikhino",
  "country": "RU",
  "coord": {
    "lon": 36.133331,
    "lat": 53
  }
}, {
  "id": 711349,
  "name": "Bucha",
  "country": "UA",
  "coord": {
    "lon": 30.366671,
    "lat": 50.583328
  }
}, {
  "id": 798544,
  "name": "Republic of Poland",
  "country": "PL",
  "coord": {
    "lon": 20,
    "lat": 52
  }
}, {
  "id": 3094325,
  "name": "Kuchary",
  "country": "PL",
  "coord": {
    "lon": 19.383329,
    "lat": 52.150002
  }
}, {
  "id": 6255149,
  "name": "North America",
  "country": "",
  "coord": {
    "lon": -100.546883,
    "lat": 46.073231
  }
}, {
  "id": 3575514,
  "name": "Brumaire",
  "country": "KN",
  "coord": {
    "lon": -62.73333,
    "lat": 17.299999
  }
}, {
  "id": 1861387,
  "name": "Ishikawa-ken",
  "country": "JP",
  "coord": {
    "lon": 136.770493,
    "lat": 36.77145
  }
}, {
  "id": 1857578,
  "name": "Matoba",
  "country": "JP",
  "coord": {
    "lon": 133.949997,
    "lat": 34.25
  }
}, {
  "id": 1299298,
  "name": "Pya",
  "country": "MM",
  "coord": {
    "lon": 95.599998,
    "lat": 21.51667
  }
}, {
  "id": 3256023,
  "name": "Kalanac",
  "country": "BA",
  "coord": {
    "lon": 18.78389,
    "lat": 44.86861
  }
}, {
  "id": 2921044,
  "name": "Federal Republic of Germany",
  "country": "DE",
  "coord": {
    "lon": 10.5,
    "lat": 51.5
  }
}, {
  "id": 2861876,
  "name": "Land Nordrhein-Westfalen",
  "country": "DE",
  "coord": {
    "lon": 7,
    "lat": 51.5
  }
}, {
  "id": 802899,
  "name": "Mutaykutan",
  "country": "RU",
  "coord": {
    "lon": 47.660641,
    "lat": 42.818859
  }
}, {
  "id": 523523,
  "name": "Nalchik",
  "country": "RU",
  "coord": {
    "lon": 43.618889,
    "lat": 43.498058
  }
}, {
  "id": 546448,
  "name": "Kolganov",
  "country": "RU",
  "coord": {
    "lon": 40.066669,
    "lat": 44.366669
  }
}, {
  "id": 500023,
  "name": "Rybatskiy",
  "country": "RU",
  "coord": {
    "lon": 44.166389,
    "lat": 44.799171
  }
}, {
  "id": 2207349,
  "name": "Bellara",
  "country": "AU",
  "coord": {
    "lon": 153.149597,
    "lat": -27.063919
  }
}, {
  "id": 7870412,
  "name": "Bartlett",
  "country": "ZA",
  "coord": {
    "lon": 28.25263,
    "lat": -26.17061
  }
}, {
  "id": 961935,
  "name": "Rietfontein",
  "country": "ZA",
  "coord": {
    "lon": 29.200001,
    "lat": -25.5
  }
}, {
  "id": 3371200,
  "name": "Hardap",
  "country": "NA",
  "coord": {
    "lon": 17.25,
    "lat": -24.5
  }
}, {
  "id": 1016666,
  "name": "Botswana",
  "country": "ZA",
  "coord": {
    "lon": 30.533331,
    "lat": -24.33333
  }
}, {
  "id": 3858204,
  "name": "El Destierro",
  "country": "AR",
  "coord": {
    "lon": -62.47662,
    "lat": -24.1
  }
}, {
  "id": 4070245,
  "name": "Jones Crossroads",
  "country": "US",
  "coord": {
    "lon": -85.484657,
    "lat": 31.21073
  }
}, {
  "id": 4344544,
  "name": "Vernon Parish",
  "country": "US",
  "coord": {
    "lon": -93.183502,
    "lat": 31.11685
  }
}, {
  "id": 4215307,
  "name": "Pennick",
  "country": "US",
  "coord": {
    "lon": -81.55899,
    "lat": 31.313
  }
}, {
  "id": 5285039,
  "name": "Black Bear Spring",
  "country": "US",
  "coord": {
    "lon": -110.288139,
    "lat": 31.386209
  }
}, {
  "id": 4673179,
  "name": "Bee House",
  "country": "US",
  "coord": {
    "lon": -98.081139,
    "lat": 31.40266
  }
}, {
  "id": 6078447,
  "name": "Morden",
  "country": "CA",
  "coord": {
    "lon": -98.101357,
    "lat": 49.191898
  }
}, {
  "id": 2201316,
  "name": "Nasirotu",
  "country": "FJ",
  "coord": {
    "lon": 178.25,
    "lat": -18.033331
  }
}, {
  "id": 1938756,
  "name": "Sisali",
  "country": "ID",
  "coord": {
    "lon": 124.531387,
    "lat": -9.19167
  }
}, {
  "id": 2009359,
  "name": "Puntan",
  "country": "ID",
  "coord": {
    "lon": 110.553329,
    "lat": -7.51944
  }
}, {
  "id": 2566086,
  "name": "Tsiémé-Mandiélé",
  "country": "CG",
  "coord": {
    "lon": 15.2875,
    "lat": -4.22694
  }
}, {
  "id": 154733,
  "name": "Masama",
  "country": "TZ",
  "coord": {
    "lon": 37.183331,
    "lat": -3.23333
  }
}, {
  "id": 1630349,
  "name": "Purukcahu",
  "country": "ID",
  "coord": {
    "lon": 114.583328,
    "lat": -0.58333
  }
}, {
  "id": 2224928,
  "name": "Néméyong II",
  "country": "CM",
  "coord": {
    "lon": 13.5,
    "lat": 2.91667
  }
}, {
  "id": 6716279,
  "name": "Pondok Genteng",
  "country": "ID",
  "coord": {
    "lon": 99.0709,
    "lat": 3.2245
  }
}, {
  "id": 2384618,
  "name": "Mbongoté",
  "country": "CF",
  "coord": {
    "lon": 18.283331,
    "lat": 4.25
  }
}, {
  "id": 378867,
  "name": "Amiling",
  "country": "SS",
  "coord": {
    "lon": 32.355831,
    "lat": 4.19417
  }
}, {
  "id": 2230362,
  "name": "Kélkoto",
  "country": "CM",
  "coord": {
    "lon": 11.16667,
    "lat": 4.43333
  }
}, {
  "id": 343846,
  "name": "Angetu",
  "country": "ET",
  "coord": {
    "lon": 39.48333,
    "lat": 6.33333
  }
}, {
  "id": 370366,
  "name": "Massa",
  "country": "SD",
  "coord": {
    "lon": 29.466669,
    "lat": 10.98333
  }
}, {
  "id": 365618,
  "name": "Tumko",
  "country": "SD",
  "coord": {
    "lon": 24.6,
    "lat": 12.01667
  }
}, {
  "id": 524894,
  "name": "Moskva",
  "country": "RU",
  "coord": {
    "lon": 37.606667,
    "lat": 55.761665
  }
}, {
  "id": 1861060,
  "name": "Japan",
  "country": "JP",
  "coord": {
    "lon": 139.753098,
    "lat": 35.68536
  }
}, {
  "id": 2130037,
  "name": "Hokkaidō",
  "country": "JP",
  "coord": {
    "lon": 141.346603,
    "lat": 43.06451
  }
}, {
  "id": 6199126,
  "name": "Sanggrahan",
  "country": "ID",
  "coord": {
    "lon": 110.246109,
    "lat": -7.46056
  }
}, {
  "id": 6388445,
  "name": "Karangmangle",
  "country": "ID",
  "coord": {
    "lon": 109.0075,
    "lat": -7.43028
  }
}, {
  "id": 494806,
  "name": "Sheremetyevskiy",
  "country": "RU",
  "coord": {
    "lon": 37.491112,
    "lat": 55.98
  }
}, {
  "id": 467104,
  "name": "Yershovo",
  "country": "RU",
  "coord": {
    "lon": 36.858055,
    "lat": 55.771111
  }
}, {
  "id": 462352,
  "name": "Znamenka",
  "country": "RU",
  "coord": {
    "lon": 35.981392,
    "lat": 52.896671
  }
}, {
  "id": 2267057,
  "name": "Lisbon",
  "country": "PT",
  "coord": {
    "lon": -9.13333,
    "lat": 38.716671
  }
}, {
  "id": 3082707,
  "name": "Walbrzych",
  "country": "PL",
  "coord": {
    "lon": 16.284321,
    "lat": 50.771412
  }
}, {
  "id": 3091150,
  "name": "Naklo nad Notecia",
  "country": "PL",
  "coord": {
    "lon": 17.60181,
    "lat": 53.142139
  }
}, {
  "id": 1784658,
  "name": "Zhengzhou",
  "country": "CN",
  "coord": {
    "lon": 113.648613,
    "lat": 34.757778
  }
}, {
  "id": 7301040,
  "name": "Tonyrefail",
  "country": "GB",
  "coord": {
    "lon": -3.41503,
    "lat": 51.580238
  }
}, {
  "id": 1348747,
  "name": "Bankra",
  "country": "IN",
  "coord": {
    "lon": 88.298058,
    "lat": 22.627501
  }
}, {
  "id": 6255148,
  "name": "Europe",
  "country": "",
  "coord": {
    "lon": 9.140625,
    "lat": 48.69096
  }
}, {
  "id": 524925,
  "name": "Moskovskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 37.628334,
    "lat": 55.75639
  }
}, {
  "id": 4047656,
  "name": "Provo",
  "country": "US",
  "coord": {
    "lon": -94.107697,
    "lat": 34.037609
  }
}, {
  "id": 5493998,
  "name": "Tejon",
  "country": "US",
  "coord": {
    "lon": -105.28611,
    "lat": 34.58979
  }
}, {
  "id": 1463749,
  "name": "Guliston",
  "country": "UZ",
  "coord": {
    "lon": 65.518929,
    "lat": 38.510029
  }
}, {
  "id": 749184,
  "name": "Ciciler",
  "country": "TR",
  "coord": {
    "lon": 30.063601,
    "lat": 40.442982
  }
}, {
  "id": 750594,
  "name": "Bilmece",
  "country": "TR",
  "coord": {
    "lon": 36.150002,
    "lat": 41.150002
  }
}, {
  "id": 3113208,
  "name": "Provincia de Pontevedra",
  "country": "ES",
  "coord": {
    "lon": -8.5,
    "lat": 42.5
  }
}, {
  "id": 2653753,
  "name": "Carmarthenshire",
  "country": "GB",
  "coord": {
    "lon": -4.16667,
    "lat": 51.833328
  }
}, {
  "id": 658226,
  "name": "Helsinki",
  "country": "FI",
  "coord": {
    "lon": 24.93417,
    "lat": 60.17556
  }
}, {
  "id": 2744819,
  "name": "Gemeente Wervershoof",
  "country": "NL",
  "coord": {
    "lon": 5.13333,
    "lat": 52.716671
  }
}, {
  "id": 3017680,
  "name": "Forville",
  "country": "FR",
  "coord": {
    "lon": 6.6239,
    "lat": 44.913849
  }
}, {
  "id": 448961,
  "name": "Tall ‘Alāwī",
  "country": "IQ",
  "coord": {
    "lon": 44.552891,
    "lat": 31.59358
  }
}, {
  "id": 3007202,
  "name": "La Portanière",
  "country": "FR",
  "coord": {
    "lon": 6.17341,
    "lat": 43.248611
  }
}, {
  "id": 2650353,
  "name": "East Portlemouth",
  "country": "GB",
  "coord": {
    "lon": -3.75578,
    "lat": 50.232159
  }
}, {
  "id": 2058430,
  "name": "Whyalla",
  "country": "AU",
  "coord": {
    "lon": 137.583328,
    "lat": -33.033329
  }
}, {
  "id": 2181258,
  "name": "Terrace End",
  "country": "NZ",
  "coord": {
    "lon": 175.616669,
    "lat": -40.349998
  }
}, {
  "id": 2130135,
  "name": "Hashimoto",
  "country": "JP",
  "coord": {
    "lon": 140.75,
    "lat": 40.816669
  }
}, {
  "id": 2110681,
  "name": "Tsukuba-kenkyūgakuen-toshi",
  "country": "JP",
  "coord": {
    "lon": 140.116669,
    "lat": 36.083328
  }
}, {
  "id": 1862845,
  "name": "Higashi-asahimachi",
  "country": "JP",
  "coord": {
    "lon": 133.066666,
    "lat": 35.466671
  }
}, {
  "id": 1863250,
  "name": "Hanabatachō",
  "country": "JP",
  "coord": {
    "lon": 130.699997,
    "lat": 32.799999
  }
}, {
  "id": 1852699,
  "name": "Senzaki",
  "country": "JP",
  "coord": {
    "lon": 131.199997,
    "lat": 34.383331
  }
}, {
  "id": 1853163,
  "name": "Sakaki",
  "country": "JP",
  "coord": {
    "lon": 138.183334,
    "lat": 36.466671
  }
}, {
  "id": 1864427,
  "name": "Daisen",
  "country": "JP",
  "coord": {
    "lon": 133.533325,
    "lat": 35.383331
  }
}, {
  "id": 1861816,
  "name": "Ikaruga",
  "country": "JP",
  "coord": {
    "lon": 134.583328,
    "lat": 34.833328
  }
}, {
  "id": 1857451,
  "name": "Matsuzaki",
  "country": "JP",
  "coord": {
    "lon": 138.783325,
    "lat": 34.75
  }
}, {
  "id": 2128894,
  "name": "Noboribetsu",
  "country": "JP",
  "coord": {
    "lon": 141.173065,
    "lat": 42.451389
  }
}, {
  "id": 3175936,
  "name": "Grandate",
  "country": "IT",
  "coord": {
    "lon": 9.05784,
    "lat": 45.775181
  }
}, {
  "id": 6539582,
  "name": "Biella",
  "country": "IT",
  "coord": {
    "lon": 8.05002,
    "lat": 45.55986
  }
}, {
  "id": 6542288,
  "name": "Soverato",
  "country": "IT",
  "coord": {
    "lon": 16.54991,
    "lat": 38.684978
  }
}, {
  "id": 6540662,
  "name": "Pinerolo",
  "country": "IT",
  "coord": {
    "lon": 7.33312,
    "lat": 44.883942
  }
}, {
  "id": 3333225,
  "name": "Dundee City",
  "country": "GB",
  "coord": {
    "lon": -2.91667,
    "lat": 56.466671
  }
}, {
  "id": 7290647,
  "name": "Nuneaton and Bedworth District",
  "country": "GB",
  "coord": {
    "lon": -1.47802,
    "lat": 52.500641
  }
}, {
  "id": 7291924,
  "name": "Rhyl",
  "country": "GB",
  "coord": {
    "lon": -3.47247,
    "lat": 53.31905
  }
}, {
  "id": 2649140,
  "name": "Foulridge",
  "country": "GB",
  "coord": {
    "lon": -2.16864,
    "lat": 53.87579
  }
}, {
  "id": 2647062,
  "name": "Hermitage",
  "country": "GB",
  "coord": {
    "lon": -1.26823,
    "lat": 51.455399
  }
}, {
  "id": 2648355,
  "name": "Golcar",
  "country": "GB",
  "coord": {
    "lon": -1.8557,
    "lat": 53.639919
  }
}, {
  "id": 2636001,
  "name": "Thornbury",
  "country": "GB",
  "coord": {
    "lon": -2.55,
    "lat": 52.23333
  }
}, {
  "id": 510291,
  "name": "Peterhof",
  "country": "RU",
  "coord": {
    "lon": 29.9,
    "lat": 59.883331
  }
}, {
  "id": 518858,
  "name": "Grebnevo",
  "country": "RU",
  "coord": {
    "lon": 38.072777,
    "lat": 55.961945
  }
}, {
  "id": 3746183,
  "name": "Centro Habana",
  "country": "CU",
  "coord": {
    "lon": -82.364166,
    "lat": 23.13833
  }
}, {
  "id": 1014012,
  "name": "Carolina",
  "country": "ZA",
  "coord": {
    "lon": 30.114889,
    "lat": -26.069269
  }
}, {
  "id": 3579132,
  "name": "Gustavia",
  "country": "BL",
  "coord": {
    "lon": -62.849781,
    "lat": 17.896179
  }
}, {
  "id": 1790413,
  "name": "Xianju",
  "country": "CN",
  "coord": {
    "lon": 120.73333,
    "lat": 28.85
  }
}, {
  "id": 1850144,
  "name": "Tōkyō-to",
  "country": "JP",
  "coord": {
    "lon": 139.691711,
    "lat": 35.689499
  }
}, {
  "id": 5815135,
  "name": "Washington",
  "country": "US",
  "coord": {
    "lon": -120.501472,
    "lat": 47.500118
  }
}, {
  "id": 5391891,
  "name": "San Dimas",
  "country": "US",
  "coord": {
    "lon": -117.806732,
    "lat": 34.106682
  }
}, {
  "id": 148251,
  "name": "Culfa",
  "country": "AZ",
  "coord": {
    "lon": 45.630798,
    "lat": 38.955799
  }
}, {
  "id": 141668,
  "name": "Bandar Emām Khomeynī",
  "country": "IR",
  "coord": {
    "lon": 49.076279,
    "lat": 30.429831
  }
}, {
  "id": 66108,
  "name": "Shāhrūd",
  "country": "IR",
  "coord": {
    "lon": 55.01667,
    "lat": 36.416672
  }
}, {
  "id": 2410048,
  "name": "Bo",
  "country": "SL",
  "coord": {
    "lon": -11.73833,
    "lat": 7.96472
  }
}, {
  "id": 1092342,
  "name": "Daché",
  "country": "KM",
  "coord": {
    "lon": 43.251389,
    "lat": -11.7125
  }
}, {
  "id": 3719432,
  "name": "Département de l'Ouest",
  "country": "HT",
  "coord": {
    "lon": -72.291412,
    "lat": 18.663811
  }
}, {
  "id": 6538016,
  "name": "Montescudo",
  "country": "IT",
  "coord": {
    "lon": 12.54295,
    "lat": 43.91946
  }
}, {
  "id": 3428577,
  "name": "San Pedro",
  "country": "AR",
  "coord": {
    "lon": -54.108421,
    "lat": -26.62207
  }
}, {
  "id": 7871309,
  "name": "Wels(Stadt)",
  "country": "AT",
  "coord": {
    "lon": 14.02164,
    "lat": 48.16082
  }
}, {
  "id": 7839407,
  "name": "Palmerston",
  "country": "AU",
  "coord": {
    "lon": 130.977966,
    "lat": -12.4962
  }
}, {
  "id": 147059,
  "name": "Telmankend",
  "country": "AZ",
  "coord": {
    "lon": 48.399021,
    "lat": 39.87867
  }
}, {
  "id": 147425,
  "name": "Neftcala",
  "country": "AZ",
  "coord": {
    "lon": 49.247219,
    "lat": 39.374168
  }
}, {
  "id": 148340,
  "name": "Pushkino",
  "country": "AZ",
  "coord": {
    "lon": 48.544998,
    "lat": 39.458328
  }
}, {
  "id": 2784549,
  "name": "Visé",
  "country": "BE",
  "coord": {
    "lon": 5.7019,
    "lat": 50.738628
  }
}, {
  "id": 2793079,
  "name": "Lede",
  "country": "BE",
  "coord": {
    "lon": 3.94544,
    "lat": 50.962582
  }
}, {
  "id": 2795101,
  "name": "Ieper",
  "country": "BE",
  "coord": {
    "lon": 2.86733,
    "lat": 50.85704
  }
}, {
  "id": 2354349,
  "name": "Titao",
  "country": "BF",
  "coord": {
    "lon": -2.06667,
    "lat": 13.76667
  }
}, {
  "id": 6930703,
  "name": "Cascades",
  "country": "BF",
  "coord": {
    "lon": -4.76292,
    "lat": 10.65015
  }
}, {
  "id": 3901501,
  "name": "Villazon",
  "country": "BO",
  "coord": {
    "lon": -65.594223,
    "lat": -22.08659
  }
}, {
  "id": 6050612,
  "name": "Laval",
  "country": "CA",
  "coord": {
    "lon": -73.749184,
    "lat": 45.583382
  }
}, {
  "id": 203717,
  "name": "Yangambi",
  "country": "CD",
  "coord": {
    "lon": 24.43359,
    "lat": 0.81021
  }
}, {
  "id": 204283,
  "name": "Watsa",
  "country": "CD",
  "coord": {
    "lon": 29.535509,
    "lat": 3.03716
  }
}, {
  "id": 204318,
  "name": "Wamba",
  "country": "CD",
  "coord": {
    "lon": 27.994659,
    "lat": 2.14838
  }
}, {
  "id": 210379,
  "name": "Lusambo",
  "country": "CD",
  "coord": {
    "lon": 23.450001,
    "lat": -4.96667
  }
}, {
  "id": 210939,
  "name": "Luebo",
  "country": "CD",
  "coord": {
    "lon": 21.41667,
    "lat": -5.35
  }
}, {
  "id": 211098,
  "name": "Lubao",
  "country": "CD",
  "coord": {
    "lon": 25.75,
    "lat": -5.36667
  }
}, {
  "id": 214575,
  "name": "Kampene",
  "country": "CD",
  "coord": {
    "lon": 26.66667,
    "lat": -3.6
  }
}, {
  "id": 215527,
  "name": "Kabinda",
  "country": "CD",
  "coord": {
    "lon": 24.48333,
    "lat": -6.13333
  }
}, {
  "id": 215605,
  "name": "Kabare",
  "country": "CD",
  "coord": {
    "lon": 28.824169,
    "lat": -2.46833
  }
}, {
  "id": 217637,
  "name": "Businga",
  "country": "CD",
  "coord": {
    "lon": 20.883329,
    "lat": 3.33333
  }
}, {
  "id": 2311968,
  "name": "Nioki",
  "country": "CD",
  "coord": {
    "lon": 17.683331,
    "lat": -2.71667
  }
}, {
  "id": 2312249,
  "name": "Mushie",
  "country": "CD",
  "coord": {
    "lon": 16.9,
    "lat": -3.01667
  }
}, {
  "id": 2313084,
  "name": "Mangai",
  "country": "CD",
  "coord": {
    "lon": 19.533331,
    "lat": -4.05
  }
}, {
  "id": 2314300,
  "name": "Ville de Kinshasa",
  "country": "CD",
  "coord": {
    "lon": 15.5,
    "lat": -4.5
  }
}, {
  "id": 7286409,
  "name": "Luzern",
  "country": "CH",
  "coord": {
    "lon": 8.32518,
    "lat": 47.047138
  }
}, {
  "id": 6295429,
  "name": "Fahrweid (südl. Teil)",
  "country": "CH",
  "coord": {
    "lon": 8.41367,
    "lat": 47.408138
  }
}, {
  "id": 7286907,
  "name": "Riehen",
  "country": "CH",
  "coord": {
    "lon": 7.65117,
    "lat": 47.579418
  }
}, {
  "id": 6291739,
  "name": "Bärenbohl",
  "country": "CH",
  "coord": {
    "lon": 8.51832,
    "lat": 47.434929
  }
}, {
  "id": 6295642,
  "name": "Letten",
  "country": "CH",
  "coord": {
    "lon": 8.53458,
    "lat": 47.32811
  }
}, {
  "id": 2280376,
  "name": "Touba",
  "country": "CI",
  "coord": {
    "lon": -7.68333,
    "lat": 8.28333
  }
}, {
  "id": 2221394,
  "name": "Tonga",
  "country": "CM",
  "coord": {
    "lon": 10.7,
    "lat": 4.96667
  }
}, {
  "id": 3072342,
  "name": "Lahovičky",
  "country": "CZ",
  "coord": {
    "lon": 14.39698,
    "lat": 50.001339
  }
}, {
  "id": 3064531,
  "name": "Svépravice",
  "country": "CZ",
  "coord": {
    "lon": 14.6131,
    "lat": 50.100712
  }
}, {
  "id": 6547426,
  "name": "Wardenburg",
  "country": "DE",
  "coord": {
    "lon": 8.19785,
    "lat": 53.062222
  }
}, {
  "id": 6553084,
  "name": "Wachtberg",
  "country": "DE",
  "coord": {
    "lon": 7.1259,
    "lat": 50.6213
  }
}, {
  "id": 2835344,
  "name": "Schwalmtal",
  "country": "DE",
  "coord": {
    "lon": 6.26667,
    "lat": 51.216671
  }
}, {
  "id": 7602475,
  "name": "Pfaffenhofen an der Ilm",
  "country": "DE",
  "coord": {
    "lon": 11.502,
    "lat": 48.528431
  }
}, {
  "id": 6553078,
  "name": "Odenthal",
  "country": "DE",
  "coord": {
    "lon": 7.1182,
    "lat": 51.034801
  }
}, {
  "id": 6553081,
  "name": "Much",
  "country": "DE",
  "coord": {
    "lon": 7.3537,
    "lat": 50.874699
  }
}, {
  "id": 2915013,
  "name": "Großstädteln",
  "country": "DE",
  "coord": {
    "lon": 12.38333,
    "lat": 51.26667
  }
}, {
  "id": 6553073,
  "name": "Lindlar",
  "country": "DE",
  "coord": {
    "lon": 7.3665,
    "lat": 51.033199
  }
}, {
  "id": 6553056,
  "name": "Kreuzau",
  "country": "DE",
  "coord": {
    "lon": 6.4771,
    "lat": 50.729401
  }
}, {
  "id": 6557629,
  "name": "Höxter, Stadt",
  "country": "DE",
  "coord": {
    "lon": 9.39737,
    "lat": 51.796371
  }
}, {
  "id": 2820086,
  "name": "Kreis Unna",
  "country": "DE",
  "coord": {
    "lon": 7.7175,
    "lat": 51.568611
  }
}, {
  "id": 6553128,
  "name": "Hille",
  "country": "DE",
  "coord": {
    "lon": 8.7722,
    "lat": 52.330898
  }
}, {
  "id": 6556314,
  "name": "Haar",
  "country": "DE",
  "coord": {
    "lon": 11.7333,
    "lat": 48.099998
  }
}, {
  "id": 2916630,
  "name": "Grossenhain",
  "country": "DE",
  "coord": {
    "lon": 13.55,
    "lat": 51.283329
  }
}, {
  "id": 6553174,
  "name": "Ginsheim-Gustavsburg",
  "country": "DE",
  "coord": {
    "lon": 8.3425,
    "lat": 49.985802
  }
}, {
  "id": 6553072,
  "name": "Engelskirchen",
  "country": "DE",
  "coord": {
    "lon": 7.4,
    "lat": 50.983299
  }
}, {
  "id": 6555618,
  "name": "Eggenstein-Leopoldshafen",
  "country": "DE",
  "coord": {
    "lon": 8.39056,
    "lat": 49.095299
  }
}, {
  "id": 6553040,
  "name": "Brüggen",
  "country": "DE",
  "coord": {
    "lon": 6.1886,
    "lat": 51.2379
  }
}, {
  "id": 2957818,
  "name": "Bönen",
  "country": "DE",
  "coord": {
    "lon": 7.76667,
    "lat": 51.583328
  }
}, {
  "id": 3221125,
  "name": "Kreisfreie Stadt Bielefeld",
  "country": "DE",
  "coord": {
    "lon": 8.55861,
    "lat": 52.017502
  }
}, {
  "id": 2949188,
  "name": "Bielefeld",
  "country": "DE",
  "coord": {
    "lon": 8.5,
    "lat": 52
  }
}, {
  "id": 6555717,
  "name": "Baiersbronn",
  "country": "DE",
  "coord": {
    "lon": 8.3495,
    "lat": 48.515499
  }
}, {
  "id": 6552854,
  "name": "Bad Zwischenahn",
  "country": "DE",
  "coord": {
    "lon": 8.04142,
    "lat": 53.1717
  }
}, {
  "id": 6557561,
  "name": "Bad Honnef, Stadt",
  "country": "DE",
  "coord": {
    "lon": 7.26114,
    "lat": 50.647579
  }
}, {
  "id": 6553094,
  "name": "Ascheberg",
  "country": "DE",
  "coord": {
    "lon": 7.61667,
    "lat": 51.783298
  }
}, {
  "id": 2856307,
  "name": "Ostfildern",
  "country": "DE",
  "coord": {
    "lon": 9.25143,
    "lat": 48.7267
  }
}, {
  "id": 7602483,
  "name": "Spremberg, Stadt",
  "country": "DE",
  "coord": {
    "lon": 14.37355,
    "lat": 51.56971
  }
}, {
  "id": 6543938,
  "name": "Høje-Taastrup Kommune",
  "country": "DK",
  "coord": {
    "lon": 12.24854,
    "lat": 55.656429
  }
}, {
  "id": 2616011,
  "name": "Nyborg Kommune",
  "country": "DK",
  "coord": {
    "lon": 10.75,
    "lat": 55.333328
  }
}, {
  "id": 2618525,
  "name": "Kolding Kommune",
  "country": "DK",
  "coord": {
    "lon": 9.46667,
    "lat": 55.533329
  }
}, {
  "id": 3495858,
  "name": "Neiba",
  "country": "DO",
  "coord": {
    "lon": -71.416672,
    "lat": 18.5
  }
}, {
  "id": 3496332,
  "name": "Moca",
  "country": "DO",
  "coord": {
    "lon": -70.5,
    "lat": 19.5
  }
}, {
  "id": 2476412,
  "name": "el hed",
  "country": "DZ",
  "coord": {
    "lon": 4.77361,
    "lat": 36.650002
  }
}, {
  "id": 2479183,
  "name": "Souma",
  "country": "DZ",
  "coord": {
    "lon": 2.90528,
    "lat": 36.51833
  }
}, {
  "id": 2482939,
  "name": "Rouached",
  "country": "DZ",
  "coord": {
    "lon": 6.04267,
    "lat": 36.457741
  }
}, {
  "id": 2483761,
  "name": "Reggane",
  "country": "DZ",
  "coord": {
    "lon": 0.1714,
    "lat": 26.715759
  }
}, {
  "id": 2487620,
  "name": "Metlili Chaamba",
  "country": "DZ",
  "coord": {
    "lon": 3.63333,
    "lat": 32.26667
  }
}, {
  "id": 2498775,
  "name": "El Abiodh Sidi Cheikh",
  "country": "DZ",
  "coord": {
    "lon": 0.54839,
    "lat": 32.893002
  }
}, {
  "id": 6361023,
  "name": "Osuna",
  "country": "ES",
  "coord": {
    "lon": -5.11371,
    "lat": 37.22229
  }
}, {
  "id": 6361010,
  "name": "Lora del Río",
  "country": "ES",
  "coord": {
    "lon": -5.48845,
    "lat": 37.660149
  }
}, {
  "id": 6359459,
  "name": "Fuengirola",
  "country": "ES",
  "coord": {
    "lon": -4.61206,
    "lat": 36.551491
  }
}, {
  "id": 6358465,
  "name": "Bailén",
  "country": "ES",
  "coord": {
    "lon": -3.78418,
    "lat": 38.080231
  }
}, {
  "id": 6362958,
  "name": "Utebo",
  "country": "ES",
  "coord": {
    "lon": -1.00454,
    "lat": 41.715591
  }
}, {
  "id": 6356273,
  "name": "Barberà del Vallès",
  "country": "ES",
  "coord": {
    "lon": 2.13201,
    "lat": 41.517361
  }
}, {
  "id": 6359334,
  "name": "Pinto",
  "country": "ES",
  "coord": {
    "lon": -3.68321,
    "lat": 40.258942
  }
}, {
  "id": 6533993,
  "name": "Pineda de Mar",
  "country": "ES",
  "coord": {
    "lon": 2.66524,
    "lat": 41.636478
  }
}, {
  "id": 6534092,
  "name": "Palamós",
  "country": "ES",
  "coord": {
    "lon": 3.14432,
    "lat": 41.860611
  }
}, {
  "id": 6359320,
  "name": "Navalcarnero",
  "country": "ES",
  "coord": {
    "lon": -3.99743,
    "lat": 40.282101
  }
}, {
  "id": 6359308,
  "name": "Mejorada del Campo",
  "country": "ES",
  "coord": {
    "lon": -3.47564,
    "lat": 40.402061
  }
}, {
  "id": 6356141,
  "name": "Manlleu",
  "country": "ES",
  "coord": {
    "lon": 2.28035,
    "lat": 41.999298
  }
}, {
  "id": 6359300,
  "name": "Leganés",
  "country": "ES",
  "coord": {
    "lon": -3.77931,
    "lat": 40.327358
  }
}, {
  "id": 6362203,
  "name": "Laguna de Duero",
  "country": "ES",
  "coord": {
    "lon": -4.72002,
    "lat": 41.56963
  }
}, {
  "id": 6357300,
  "name": "Coruña (A)",
  "country": "ES",
  "coord": {
    "lon": -8.4188,
    "lat": 43.371262
  }
}, {
  "id": 6361741,
  "name": "Illescas",
  "country": "ES",
  "coord": {
    "lon": -3.85713,
    "lat": 40.135811
  }
}, {
  "id": 6356206,
  "name": "la Roca del Vallès",
  "country": "ES",
  "coord": {
    "lon": 2.32741,
    "lat": 41.601181
  }
}, {
  "id": 6362379,
  "name": "Ermua",
  "country": "ES",
  "coord": {
    "lon": -2.50305,
    "lat": 43.18774
  }
}, {
  "id": 6358120,
  "name": "Eibar",
  "country": "ES",
  "coord": {
    "lon": -2.46165,
    "lat": 43.19978
  }
}, {
  "id": 6362372,
  "name": "Durango",
  "country": "ES",
  "coord": {
    "lon": -2.6498,
    "lat": 43.16481
  }
}, {
  "id": 6359273,
  "name": "Collado Villalba",
  "country": "ES",
  "coord": {
    "lon": -3.99052,
    "lat": 40.642971
  }
}, {
  "id": 6359266,
  "name": "Ciempozuelos",
  "country": "ES",
  "coord": {
    "lon": -3.6001,
    "lat": 40.153599
  }
}, {
  "id": 6356068,
  "name": "Caldes de Montbui",
  "country": "ES",
  "coord": {
    "lon": 2.14934,
    "lat": 41.65057
  }
}, {
  "id": 6359026,
  "name": "Calahorra",
  "country": "ES",
  "coord": {
    "lon": -1.95262,
    "lat": 42.307869
  }
}, {
  "id": 6356985,
  "name": "Benicasim/Benicàssim",
  "country": "ES",
  "coord": {
    "lon": 0.06334,
    "lat": 40.052799
  }
}, {
  "id": 6360635,
  "name": "Realejos (Los)",
  "country": "ES",
  "coord": {
    "lon": -16.59104,
    "lat": 28.381981
  }
}, {
  "id": 3128528,
  "name": "Basauri",
  "country": "ES",
  "coord": {
    "lon": -2.88271,
    "lat": 43.234821
  }
}, {
  "id": 6357735,
  "name": "Lobras",
  "country": "ES",
  "coord": {
    "lon": -3.20859,
    "lat": 36.90868
  }
}, {
  "id": 329586,
  "name": "Robit",
  "country": "ET",
  "coord": {
    "lon": 39.633331,
    "lat": 12.01667
  }
}, {
  "id": 331180,
  "name": "Mekele",
  "country": "ET",
  "coord": {
    "lon": 39.475281,
    "lat": 13.49667
  }
}, {
  "id": 332880,
  "name": "Kolito",
  "country": "ET",
  "coord": {
    "lon": 38.083328,
    "lat": 7.31667
  }
}, {
  "id": 2204582,
  "name": "Lambasa",
  "country": "FJ",
  "coord": {
    "lon": 179.383331,
    "lat": -16.41667
  }
}, {
  "id": 7626930,
  "name": "Sokehs Municipality",
  "country": "FM",
  "coord": {
    "lon": 158.1427,
    "lat": 6.93273
  }
}, {
  "id": 6441676,
  "name": "Wittenheim",
  "country": "FR",
  "coord": {
    "lon": 7.33333,
    "lat": 47.816669
  }
}, {
  "id": 6438569,
  "name": "Wattrelos",
  "country": "FR",
  "coord": {
    "lon": 3.21667,
    "lat": 50.700001
  }
}, {
  "id": 6454050,
  "name": "Vitré",
  "country": "FR",
  "coord": {
    "lon": -1.2,
    "lat": 48.133331
  }
}, {
  "id": 6446231,
  "name": "Viry-Châtillon",
  "country": "FR",
  "coord": {
    "lon": 2.38333,
    "lat": 48.666672
  }
}, {
  "id": 6452039,
  "name": "Villeneuve-le-Roi",
  "country": "FR",
  "coord": {
    "lon": 2.41667,
    "lat": 48.73333
  }
}, {
  "id": 6453748,
  "name": "Vierzon",
  "country": "FR",
  "coord": {
    "lon": 2.08333,
    "lat": 47.216671
  }
}, {
  "id": 6446218,
  "name": "Verrières-le-Buisson",
  "country": "FR",
  "coord": {
    "lon": 2.26667,
    "lat": 48.75
  }
}, {
  "id": 6457368,
  "name": "Arrondissement d'Antony",
  "country": "FR",
  "coord": {
    "lon": 2.3006,
    "lat": 48.7617
  }
}, {
  "id": 6425695,
  "name": "Vallauris",
  "country": "FR",
  "coord": {
    "lon": 7.05,
    "lat": 43.583328
  }
}, {
  "id": 6438526,
  "name": "Tourcoing",
  "country": "FR",
  "coord": {
    "lon": 3.15,
    "lat": 50.716671
  }
}, {
  "id": 6446342,
  "name": "Taverny",
  "country": "FR",
  "coord": {
    "lon": 2.21667,
    "lat": 49.033329
  }
}, {
  "id": 6446340,
  "name": "Soisy-sous-Montmorency",
  "country": "FR",
  "coord": {
    "lon": 2.3,
    "lat": 48.98333
  }
}, {
  "id": 6438498,
  "name": "Sin-le-Noble",
  "country": "FR",
  "coord": {
    "lon": 3.11667,
    "lat": 50.366669
  }
}, {
  "id": 6451981,
  "name": "Sèvres",
  "country": "FR",
  "coord": {
    "lon": 2.2,
    "lat": 48.816669
  }
}, {
  "id": 6427088,
  "name": "Salon-de-Provence",
  "country": "FR",
  "coord": {
    "lon": 5.1,
    "lat": 43.633331
  }
}, {
  "id": 6455342,
  "name": "Saint-Ouen",
  "country": "FR",
  "coord": {
    "lon": 2.33333,
    "lat": 48.900002
  }
}, {
  "id": 6441760,
  "name": "Saint-Fons",
  "country": "FR",
  "coord": {
    "lon": 4.86667,
    "lat": 45.700001
  }
}, {
  "id": 6454369,
  "name": "Saint-Avold",
  "country": "FR",
  "coord": {
    "lon": 6.7,
    "lat": 49.099998
  }
}, {
  "id": 6454153,
  "name": "Rezé",
  "country": "FR",
  "coord": {
    "lon": -1.56667,
    "lat": 47.200001
  }
}, {
  "id": 6454341,
  "name": "Pontivy",
  "country": "FR",
  "coord": {
    "lon": -2.98333,
    "lat": 48.066669
  }
}, {
  "id": 6454014,
  "name": "Pessac",
  "country": "FR",
  "coord": {
    "lon": -0.61667,
    "lat": 44.799999
  }
}, {
  "id": 6446184,
  "name": "Palaiseau",
  "country": "FR",
  "coord": {
    "lon": 2.25,
    "lat": 48.716671
  }
}, {
  "id": 6443784,
  "name": "Ozoir-la-Ferrière",
  "country": "FR",
  "coord": {
    "lon": 2.66667,
    "lat": 48.76667
  }
}, {
  "id": 6441724,
  "name": "Oullins",
  "country": "FR",
  "coord": {
    "lon": 4.8,
    "lat": 45.716671
  }
}, {
  "id": 6446721,
  "name": "Mougins",
  "country": "FR",
  "coord": {
    "lon": 7,
    "lat": 43.599998
  }
}, {
  "id": 6446177,
  "name": "Morsang-sur-Orge",
  "country": "FR",
  "coord": {
    "lon": 2.35,
    "lat": 48.666672
  }
}, {
  "id": 6430140,
  "name": "Montélimar",
  "country": "FR",
  "coord": {
    "lon": 4.75,
    "lat": 44.566669
  }
}, {
  "id": 6453858,
  "name": "Montbéliard",
  "country": "FR",
  "coord": {
    "lon": 6.8,
    "lat": 47.51667
  }
}, {
  "id": 6452024,
  "name": "Maisons-Alfort",
  "country": "FR",
  "coord": {
    "lon": 2.43333,
    "lat": 48.799999
  }
}, {
  "id": 6430468,
  "name": "Louviers",
  "country": "FR",
  "coord": {
    "lon": 1.16667,
    "lat": 49.216671
  }
}, {
  "id": 6452023,
  "name": "Limeil-Brévannes",
  "country": "FR",
  "coord": {
    "lon": 2.4893,
    "lat": 48.7467
  }
}, {
  "id": 6457185,
  "name": "Les Pavillons-sous-Bois",
  "country": "FR",
  "coord": {
    "lon": 2.51667,
    "lat": 48.900002
  }
}, {
  "id": 6432528,
  "name": "Lattes",
  "country": "FR",
  "coord": {
    "lon": 3.9,
    "lat": 43.566669
  }
}, {
  "id": 6446146,
  "name": "Grigny",
  "country": "FR",
  "coord": {
    "lon": 2.39382,
    "lat": 48.653931
  }
}, {
  "id": 6446274,
  "name": "Goussainville",
  "country": "FR",
  "coord": {
    "lon": 2.474,
    "lat": 49.032001
  }
}, {
  "id": 6454157,
  "name": "Gien",
  "country": "FR",
  "coord": {
    "lon": 2.6297,
    "lat": 47.689201
  }
}, {
  "id": 6451993,
  "name": "Gagny",
  "country": "FR",
  "coord": {
    "lon": 2.53333,
    "lat": 48.883331
  }
}, {
  "id": 6455107,
  "name": "Firminy",
  "country": "FR",
  "coord": {
    "lon": 4.3,
    "lat": 45.383331
  }
}, {
  "id": 6433192,
  "name": "Échirolles",
  "country": "FR",
  "coord": {
    "lon": 5.71667,
    "lat": 45.133331
  }
}, {
  "id": 6441821,
  "name": "Décines-Charpieu",
  "country": "FR",
  "coord": {
    "lon": 4.9598,
    "lat": 45.7686
  }
}, {
  "id": 6455404,
  "name": "Dammarie-les-Lys",
  "country": "FR",
  "coord": {
    "lon": 2.65,
    "lat": 48.51667
  }
}, {
  "id": 6455339,
  "name": "Colombes",
  "country": "FR",
  "coord": {
    "lon": 2.25,
    "lat": 48.916672
  }
}, {
  "id": 6453697,
  "name": "Cognac",
  "country": "FR",
  "coord": {
    "lon": -0.33333,
    "lat": 45.700001
  }
}, {
  "id": 6428545,
  "name": "Chenôve",
  "country": "FR",
  "coord": {
    "lon": 5,
    "lat": 47.283329
  }
}, {
  "id": 6443604,
  "name": "Chelles",
  "country": "FR",
  "coord": {
    "lon": 2.6,
    "lat": 48.883331
  }
}, {
  "id": 6618272,
  "name": "Cesson-Sévigné",
  "country": "FR",
  "coord": {
    "lon": -1.603,
    "lat": 48.121201
  }
}, {
  "id": 3028097,
  "name": "Cayenne",
  "country": "FR",
  "coord": {
    "lon": 1.62803,
    "lat": 49.558578
  }
}, {
  "id": 6439436,
  "name": "Carvin",
  "country": "FR",
  "coord": {
    "lon": 2.96667,
    "lat": 50.48333
  }
}, {
  "id": 6452010,
  "name": "Bonneuil-sur-Marne",
  "country": "FR",
  "coord": {
    "lon": 2.48333,
    "lat": 48.76667
  }
}, {
  "id": 6455331,
  "name": "Belfort",
  "country": "FR",
  "coord": {
    "lon": 6.86667,
    "lat": 47.633331
  }
}, {
  "id": 6447202,
  "name": "Bayeux",
  "country": "FR",
  "coord": {
    "lon": -0.703,
    "lat": 49.278599
  }
}, {
  "id": 6613166,
  "name": "Bagnolet",
  "country": "FR",
  "coord": {
    "lon": 2.41667,
    "lat": 48.866669
  }
}, {
  "id": 6450845,
  "name": "Autun",
  "country": "FR",
  "coord": {
    "lon": 4.3,
    "lat": 46.950001
  }
}, {
  "id": 6448311,
  "name": "Auch",
  "country": "FR",
  "coord": {
    "lon": 0.58333,
    "lat": 43.650002
  }
}, {
  "id": 6451006,
  "name": "Annecy-le-Vieux",
  "country": "FR",
  "coord": {
    "lon": 6.15,
    "lat": 45.916672
  }
}, {
  "id": 6452610,
  "name": "Alfortville",
  "country": "FR",
  "coord": {
    "lon": 2.41667,
    "lat": 48.799999
  }
}, {
  "id": 6455394,
  "name": "Les Ulis",
  "country": "FR",
  "coord": {
    "lon": 2.16932,
    "lat": 48.68174
  }
}, {
  "id": 7300065,
  "name": "Yate",
  "country": "GB",
  "coord": {
    "lon": -2.40944,
    "lat": 51.54805
  }
}, {
  "id": 7292818,
  "name": "Caia Park",
  "country": "GB",
  "coord": {
    "lon": -2.97767,
    "lat": 53.045219
  }
}, {
  "id": 7290657,
  "name": "Worcester District",
  "country": "GB",
  "coord": {
    "lon": -2.20886,
    "lat": 52.196121
  }
}, {
  "id": 3333222,
  "name": "Borough of Wolverhampton",
  "country": "GB",
  "coord": {
    "lon": -2.11667,
    "lat": 52.583328
  }
}, {
  "id": 7299965,
  "name": "Winsford",
  "country": "GB",
  "coord": {
    "lon": -2.52331,
    "lat": 53.19191
  }
}, {
  "id": 2634551,
  "name": "Welwyn Hatfield",
  "country": "GB",
  "coord": {
    "lon": -0.21667,
    "lat": 51.75
  }
}, {
  "id": 3333211,
  "name": "Borough of Trafford",
  "country": "GB",
  "coord": {
    "lon": -2.33333,
    "lat": 53.416672
  }
}, {
  "id": 7290632,
  "name": "Tamworth District",
  "country": "GB",
  "coord": {
    "lon": -1.6829,
    "lat": 52.62273
  }
}, {
  "id": 7291961,
  "name": "Wroughton",
  "country": "GB",
  "coord": {
    "lon": -1.8056,
    "lat": 51.517849
  }
}, {
  "id": 7290571,
  "name": "Dartford District",
  "country": "GB",
  "coord": {
    "lon": 0.24851,
    "lat": 51.43388
  }
}, {
  "id": 7290673,
  "name": "South Derbyshire District",
  "country": "GB",
  "coord": {
    "lon": -1.53296,
    "lat": 52.821999
  }
}, {
  "id": 3333208,
  "name": "Borough of Tameside",
  "country": "GB",
  "coord": {
    "lon": -2.08333,
    "lat": 53.5
  }
}, {
  "id": 7291795,
  "name": "Mossley",
  "country": "GB",
  "coord": {
    "lon": -2.02418,
    "lat": 53.516338
  }
}, {
  "id": 7294483,
  "name": "Seaham",
  "country": "GB",
  "coord": {
    "lon": -1.34838,
    "lat": 54.8391
  }
}, {
  "id": 7295275,
  "name": "Sandown",
  "country": "GB",
  "coord": {
    "lon": -1.14195,
    "lat": 50.661251
  }
}, {
  "id": 7297739,
  "name": "Ryton",
  "country": "GB",
  "coord": {
    "lon": -2.35315,
    "lat": 52.624569
  }
}, {
  "id": 7290656,
  "name": "Redditch District",
  "country": "GB",
  "coord": {
    "lon": -1.94565,
    "lat": 52.279331
  }
}, {
  "id": 7294048,
  "name": "Prestatyn",
  "country": "GB",
  "coord": {
    "lon": -3.40514,
    "lat": 53.334641
  }
}, {
  "id": 7294693,
  "name": "Peterlee",
  "country": "GB",
  "coord": {
    "lon": -1.32905,
    "lat": 54.758461
  }
}, {
  "id": 7301708,
  "name": "Penarth",
  "country": "GB",
  "coord": {
    "lon": -3.18138,
    "lat": 51.43095
  }
}, {
  "id": 7292284,
  "name": "Oswestry",
  "country": "GB",
  "coord": {
    "lon": -3.05832,
    "lat": 52.857101
  }
}, {
  "id": 7294581,
  "name": "Northwich",
  "country": "GB",
  "coord": {
    "lon": -2.51575,
    "lat": 53.255798
  }
}, {
  "id": 2657122,
  "name": "Ards District",
  "country": "GB",
  "coord": {
    "lon": -5.58333,
    "lat": 54.5
  }
}, {
  "id": 2641519,
  "name": "Newtownards",
  "country": "GB",
  "coord": {
    "lon": -5.69092,
    "lat": 54.592361
  }
}, {
  "id": 7300025,
  "name": "Newquay",
  "country": "GB",
  "coord": {
    "lon": -5.07426,
    "lat": 50.424091
  }
}, {
  "id": 7298888,
  "name": "Nailsea",
  "country": "GB",
  "coord": {
    "lon": -2.77756,
    "lat": 51.424
  }
}, {
  "id": 7293862,
  "name": "Morley",
  "country": "GB",
  "coord": {
    "lon": -1.6034,
    "lat": 53.742901
  }
}, {
  "id": 7293814,
  "name": "Mirfield",
  "country": "GB",
  "coord": {
    "lon": -1.69404,
    "lat": 53.673901
  }
}, {
  "id": 7291605,
  "name": "Maesteg",
  "country": "GB",
  "coord": {
    "lon": -3.64713,
    "lat": 51.61528
  }
}, {
  "id": 7296039,
  "name": "Sutton",
  "country": "GB",
  "coord": {
    "lon": -2.0931,
    "lat": 53.227161
  }
}, {
  "id": 3333218,
  "name": "City of Westminster",
  "country": "GB",
  "coord": {
    "lon": -0.16667,
    "lat": 51.5
  }
}, {
  "id": 7295996,
  "name": "Sefton",
  "country": "GB",
  "coord": {
    "lon": -2.97287,
    "lat": 53.50441
  }
}, {
  "id": 3333227,
  "name": "East Dunbartonshire",
  "country": "GB",
  "coord": {
    "lon": -4.2,
    "lat": 55.933331
  }
}, {
  "id": 3333226,
  "name": "East Ayrshire",
  "country": "GB",
  "coord": {
    "lon": -4.25,
    "lat": 55.5
  }
}, {
  "id": 7296076,
  "name": "Keynsham",
  "country": "GB",
  "coord": {
    "lon": -2.49775,
    "lat": 51.41251
  }
}, {
  "id": 7301693,
  "name": "Kempston",
  "country": "GB",
  "coord": {
    "lon": -0.49955,
    "lat": 52.116791
  }
}, {
  "id": 7299757,
  "name": "Horwich",
  "country": "GB",
  "coord": {
    "lon": -2.52379,
    "lat": 53.603069
  }
}, {
  "id": 7290564,
  "name": "Dacorum District",
  "country": "GB",
  "coord": {
    "lon": -0.57377,
    "lat": 51.768509
  }
}, {
  "id": 7290687,
  "name": "Hastings District",
  "country": "GB",
  "coord": {
    "lon": 0.58145,
    "lat": 50.867279
  }
}, {
  "id": 7291323,
  "name": "Guisborough",
  "country": "GB",
  "coord": {
    "lon": -1.07738,
    "lat": 54.535629
  }
}, {
  "id": 7290595,
  "name": "Great Yarmouth District",
  "country": "GB",
  "coord": {
    "lon": 1.6469,
    "lat": 52.633961
  }
}, {
  "id": 7290630,
  "name": "South Staffordshire District",
  "country": "GB",
  "coord": {
    "lon": -2.15319,
    "lat": 52.604481
  }
}, {
  "id": 7296623,
  "name": "Goole",
  "country": "GB",
  "coord": {
    "lon": -0.87588,
    "lat": 53.70216
  }
}, {
  "id": 7290556,
  "name": "Fareham District",
  "country": "GB",
  "coord": {
    "lon": -1.21114,
    "lat": 50.8535
  }
}, {
  "id": 7290639,
  "name": "Epsom and Ewell District",
  "country": "GB",
  "coord": {
    "lon": -0.26017,
    "lat": 51.335732
  }
}, {
  "id": 7290641,
  "name": "Runnymede District",
  "country": "GB",
  "coord": {
    "lon": -0.53722,
    "lat": 51.394421
  }
}, {
  "id": 7300545,
  "name": "Ebbw Vale",
  "country": "GB",
  "coord": {
    "lon": -3.20482,
    "lat": 51.77298
  }
}, {
  "id": 7290615,
  "name": "Broxtowe District",
  "country": "GB",
  "coord": {
    "lon": -1.25781,
    "lat": 52.973049
  }
}, {
  "id": 7296192,
  "name": "Dunstable",
  "country": "GB",
  "coord": {
    "lon": -0.5173,
    "lat": 51.884651
  }
}, {
  "id": 3333142,
  "name": "City of Derby",
  "country": "GB",
  "coord": {
    "lon": -1.47217,
    "lat": 52.9207
  }
}, {
  "id": 7300542,
  "name": "Eccleshill",
  "country": "GB",
  "coord": {
    "lon": -2.4517,
    "lat": 53.706779
  }
}, {
  "id": 7291971,
  "name": "Cwmbran Central",
  "country": "GB",
  "coord": {
    "lon": -3.02699,
    "lat": 51.641171
  }
}, {
  "id": 7300082,
  "name": "Healeyfield",
  "country": "GB",
  "coord": {
    "lon": -1.8608,
    "lat": 54.830681
  }
}, {
  "id": 7290582,
  "name": "Ribble Valley District",
  "country": "GB",
  "coord": {
    "lon": -2.41624,
    "lat": 53.902439
  }
}, {
  "id": 7299112,
  "name": "Sodbury",
  "country": "GB",
  "coord": {
    "lon": -2.35653,
    "lat": 51.541489
  }
}, {
  "id": 7296198,
  "name": "Brymbo",
  "country": "GB",
  "coord": {
    "lon": -3.08351,
    "lat": 53.074551
  }
}, {
  "id": 7296060,
  "name": "Brixham",
  "country": "GB",
  "coord": {
    "lon": -3.51133,
    "lat": 50.390831
  }
}, {
  "id": 7296000,
  "name": "Bracknell",
  "country": "GB",
  "coord": {
    "lon": -0.75918,
    "lat": 51.406029
  }
}, {
  "id": 7291483,
  "name": "Blyth",
  "country": "GB",
  "coord": {
    "lon": -1.53835,
    "lat": 55.117748
  }
}, {
  "id": 7299866,
  "name": "Biggleswade",
  "country": "GB",
  "coord": {
    "lon": -0.24536,
    "lat": 52.078602
  }
}, {
  "id": 7298694,
  "name": "Berkhamsted",
  "country": "GB",
  "coord": {
    "lon": -0.5578,
    "lat": 51.755138
  }
}, {
  "id": 7296167,
  "name": "Bathampton",
  "country": "GB",
  "coord": {
    "lon": -2.32627,
    "lat": 51.3923
  }
}, {
  "id": 2641376,
  "name": "North Down District",
  "country": "GB",
  "coord": {
    "lon": -5.66667,
    "lat": 54.666672
  }
}, {
  "id": 7298620,
  "name": "Bangor",
  "country": "GB",
  "coord": {
    "lon": -4.13579,
    "lat": 53.222301
  }
}, {
  "id": 2656408,
  "name": "Banbridge District",
  "country": "GB",
  "coord": {
    "lon": -6.16667,
    "lat": 54.333328
  }
}, {
  "id": 7292321,
  "name": "Aberystwyth",
  "country": "GB",
  "coord": {
    "lon": -4.07708,
    "lat": 52.41227
  }
}, {
  "id": 6690583,
  "name": "Chalk Farm",
  "country": "GB",
  "coord": {
    "lon": -0.14987,
    "lat": 51.543129
  }
}, {
  "id": 7290681,
  "name": "East Dorset District",
  "country": "GB",
  "coord": {
    "lon": -1.976,
    "lat": 50.866901
  }
}, {
  "id": 612366,
  "name": "Poti",
  "country": "GE",
  "coord": {
    "lon": 41.67197,
    "lat": 42.14616
  }
}, {
  "id": 2294938,
  "name": "Tafo",
  "country": "GH",
  "coord": {
    "lon": -1.61275,
    "lat": 6.73453
  }
}, {
  "id": 2295385,
  "name": "Shama Junction",
  "country": "GH",
  "coord": {
    "lon": -1.63011,
    "lat": 5.00872
  }
}, {
  "id": 2295672,
  "name": "Saltpond",
  "country": "GH",
  "coord": {
    "lon": -1.06058,
    "lat": 5.20913
  }
}, {
  "id": 2301400,
  "name": "Dunkwa",
  "country": "GH",
  "coord": {
    "lon": -1.77995,
    "lat": 5.96562
  }
}, {
  "id": 2416443,
  "name": "Pita",
  "country": "GN",
  "coord": {
    "lon": -12.4,
    "lat": 11.08333
  }
}, {
  "id": 6690393,
  "name": "Sainte-Anne",
  "country": "GP",
  "coord": {
    "lon": -61.366669,
    "lat": 16.23333
  }
}, {
  "id": 6690399,
  "name": "Pointe-à-Pitre",
  "country": "GP",
  "coord": {
    "lon": -61.51667,
    "lat": 16.23333
  }
}, {
  "id": 6690387,
  "name": "Les Abymes",
  "country": "GP",
  "coord": {
    "lon": -61.5,
    "lat": 16.26667
  }
}, {
  "id": 6690413,
  "name": "Le Moule",
  "country": "GP",
  "coord": {
    "lon": -61.333328,
    "lat": 16.33333
  }
}, {
  "id": 6690408,
  "name": "Capesterre-Belle-Eau",
  "country": "GP",
  "coord": {
    "lon": -61.549999,
    "lat": 16.049999
  }
}, {
  "id": 8133766,
  "name": "Dimos Salamis",
  "country": "GR",
  "coord": {
    "lon": 23.47966,
    "lat": 37.938259
  }
}, {
  "id": 8133808,
  "name": "Dimos Fyli",
  "country": "GR",
  "coord": {
    "lon": 23.668631,
    "lat": 38.12466
  }
}, {
  "id": 3426466,
  "name": "Grytviken",
  "country": "GS",
  "coord": {
    "lon": -36.509201,
    "lat": -54.281109
  }
}, {
  "id": 3589799,
  "name": "Municipio de San Marcos",
  "country": "GT",
  "coord": {
    "lon": -91.800003,
    "lat": 14.96667
  }
}, {
  "id": 3595722,
  "name": "Municipio de Flores",
  "country": "GT",
  "coord": {
    "lon": -89.897087,
    "lat": 16.923809
  }
}, {
  "id": 3600456,
  "name": "Departamento de Valle",
  "country": "HN",
  "coord": {
    "lon": -87.583328,
    "lat": 13.58333
  }
}, {
  "id": 3716661,
  "name": "Thor",
  "country": "HT",
  "coord": {
    "lon": -72.401382,
    "lat": 18.536461
  }
}, {
  "id": 3740016,
  "name": "Ti Port-de-Paix",
  "country": "HT",
  "coord": {
    "lon": -72.833328,
    "lat": 19.933331
  }
}, {
  "id": 3053876,
  "name": "Csukásitanyák",
  "country": "HU",
  "coord": {
    "lon": 19.316669,
    "lat": 47.5
  }
}, {
  "id": 1213547,
  "name": "Tanjungbalai",
  "country": "ID",
  "coord": {
    "lon": 99.800003,
    "lat": 2.96667
  }
}, {
  "id": 1214055,
  "name": "Reuleuet",
  "country": "ID",
  "coord": {
    "lon": 96.283333,
    "lat": 5.21667
  }
}, {
  "id": 294622,
  "name": "Judieda Makr",
  "country": "IL",
  "coord": {
    "lon": 35.154999,
    "lat": 32.92556
  }
}, {
  "id": 1252738,
  "name": "Yeola",
  "country": "IN",
  "coord": {
    "lon": 74.48333,
    "lat": 20.033331
  }
}, {
  "id": 1252744,
  "name": "Yellapur",
  "country": "IN",
  "coord": {
    "lon": 74.716667,
    "lat": 14.96667
  }
}, {
  "id": 1252773,
  "name": "Yaval",
  "country": "IN",
  "coord": {
    "lon": 75.699997,
    "lat": 21.16667
  }
}, {
  "id": 6540553,
  "name": "Ventimiglia",
  "country": "IT",
  "coord": {
    "lon": 7.60264,
    "lat": 43.793522
  }
}, {
  "id": 6542009,
  "name": "Savona",
  "country": "IT",
  "coord": {
    "lon": 8.47375,
    "lat": 44.30814
  }
}, {
  "id": 6537557,
  "name": "Ruvo di Puglia",
  "country": "IT",
  "coord": {
    "lon": 16.48778,
    "lat": 41.113628
  }
}, {
  "id": 6539485,
  "name": "Pioltello",
  "country": "IT",
  "coord": {
    "lon": 9.32435,
    "lat": 45.497971
  }
}, {
  "id": 6536957,
  "name": "Palestrina",
  "country": "IT",
  "coord": {
    "lon": 12.88899,
    "lat": 41.835522
  }
}, {
  "id": 6537567,
  "name": "Palagiano",
  "country": "IT",
  "coord": {
    "lon": 17.037399,
    "lat": 40.57822
  }
}, {
  "id": 6538821,
  "name": "Pagani",
  "country": "IT",
  "coord": {
    "lon": 14.61334,
    "lat": 40.751511
  }
}, {
  "id": 6541936,
  "name": "Orta Nova",
  "country": "IT",
  "coord": {
    "lon": 15.71066,
    "lat": 41.329929
  }
}, {
  "id": 6540026,
  "name": "Oria",
  "country": "IT",
  "coord": {
    "lon": 17.64131,
    "lat": 40.49733
  }
}, {
  "id": 6537554,
  "name": "Noicattaro",
  "country": "IT",
  "coord": {
    "lon": 16.98959,
    "lat": 41.033829
  }
}, {
  "id": 6542044,
  "name": "Nettuno",
  "country": "IT",
  "coord": {
    "lon": 12.67899,
    "lat": 41.482609
  }
}, {
  "id": 6541509,
  "name": "Negrar",
  "country": "IT",
  "coord": {
    "lon": 10.93798,
    "lat": 45.52879
  }
}, {
  "id": 6540220,
  "name": "Mira",
  "country": "IT",
  "coord": {
    "lon": 12.13481,
    "lat": 45.435799
  }
}, {
  "id": 6540584,
  "name": "Lissone",
  "country": "IT",
  "coord": {
    "lon": 9.24655,
    "lat": 45.615582
  }
}, {
  "id": 6538560,
  "name": "Lastra a Signa",
  "country": "IT",
  "coord": {
    "lon": 11.10282,
    "lat": 43.771351
  }
}, {
  "id": 6541484,
  "name": "Imperia",
  "country": "IT",
  "coord": {
    "lon": 8.02225,
    "lat": 43.88332
  }
}, {
  "id": 6541474,
  "name": "Jesi",
  "country": "IT",
  "coord": {
    "lon": 13.24017,
    "lat": 43.528759
  }
}, {
  "id": 6541164,
  "name": "Giugliano in Campania",
  "country": "IT",
  "coord": {
    "lon": 14.19103,
    "lat": 40.92741
  }
}, {
  "id": 6537588,
  "name": "Galatone",
  "country": "IT",
  "coord": {
    "lon": 18.070419,
    "lat": 40.142921
  }
}, {
  "id": 6542094,
  "name": "Gaeta",
  "country": "IT",
  "coord": {
    "lon": 13.56281,
    "lat": 41.218311
  }
}, {
  "id": 6541853,
  "name": "Frosinone",
  "country": "IT",
  "coord": {
    "lon": 13.3401,
    "lat": 41.640018
  }
}, {
  "id": 6538453,
  "name": "Formigine",
  "country": "IT",
  "coord": {
    "lon": 10.847,
    "lat": 44.57296
  }
}, {
  "id": 6541136,
  "name": "Fondi",
  "country": "IT",
  "coord": {
    "lon": 13.43131,
    "lat": 41.354111
  }
}, {
  "id": 6540408,
  "name": "Fidenza",
  "country": "IT",
  "coord": {
    "lon": 10.06668,
    "lat": 44.86396
  }
}, {
  "id": 6536870,
  "name": "Corciano",
  "country": "IT",
  "coord": {
    "lon": 12.28736,
    "lat": 43.12904
  }
}, {
  "id": 6540023,
  "name": "Conversano",
  "country": "IT",
  "coord": {
    "lon": 17.11479,
    "lat": 40.966228
  }
}, {
  "id": 6539925,
  "name": "Cittadella",
  "country": "IT",
  "coord": {
    "lon": 11.7842,
    "lat": 45.650002
  }
}, {
  "id": 6538144,
  "name": "Bra",
  "country": "IT",
  "coord": {
    "lon": 7.85563,
    "lat": 44.703041
  }
}, {
  "id": 6542123,
  "name": "Benevento",
  "country": "IT",
  "coord": {
    "lon": 14.78614,
    "lat": 41.12952
  }
}, {
  "id": 6542012,
  "name": "Bareggio",
  "country": "IT",
  "coord": {
    "lon": 8.99994,
    "lat": 45.487671
  }
}, {
  "id": 6541492,
  "name": "Arese",
  "country": "IT",
  "coord": {
    "lon": 9.07654,
    "lat": 45.552269
  }
}, {
  "id": 6541135,
  "name": "Aprilia",
  "country": "IT",
  "coord": {
    "lon": 12.65009,
    "lat": 41.589512
  }
}, {
  "id": 6540534,
  "name": "Anagni",
  "country": "IT",
  "coord": {
    "lon": 13.15269,
    "lat": 41.74472
  }
}, {
  "id": 6536221,
  "name": "Spinea",
  "country": "IT",
  "coord": {
    "lon": 12.16251,
    "lat": 45.488701
  }
}, {
  "id": 6542340,
  "name": "Volla",
  "country": "IT",
  "coord": {
    "lon": 14.34293,
    "lat": 40.87841
  }
}, {
  "id": 3489227,
  "name": "Old Harbour",
  "country": "JM",
  "coord": {
    "lon": -77.108978,
    "lat": 17.941441
  }
}, {
  "id": 3489297,
  "name": "New Kingston",
  "country": "JM",
  "coord": {
    "lon": -76.783188,
    "lat": 18.007469
  }
}, {
  "id": 1859472,
  "name": "Kimiidera",
  "country": "JP",
  "coord": {
    "lon": 135.199997,
    "lat": 34.183331
  }
}, {
  "id": 1037370,
  "name": "Mocimboa",
  "country": "MZ",
  "coord": {
    "lon": 40.349998,
    "lat": -11.31667
  }
}, {
  "id": 2749810,
  "name": "Gemeente Noordwijkerhout",
  "country": "NL",
  "coord": {
    "lon": 4.48333,
    "lat": 52.25
  }
}, {
  "id": 2751688,
  "name": "Gemeente Leusden",
  "country": "NL",
  "coord": {
    "lon": 5.41667,
    "lat": 52.133331
  }
}, {
  "id": 2753467,
  "name": "Gemeente Huizen",
  "country": "NL",
  "coord": {
    "lon": 5.23333,
    "lat": 52.283329
  }
}, {
  "id": 2753718,
  "name": "Gemeente Hoogeveen",
  "country": "NL",
  "coord": {
    "lon": 6.58333,
    "lat": 52.683331
  }
}, {
  "id": 2754696,
  "name": "Gemeente Heemskerk",
  "country": "NL",
  "coord": {
    "lon": 4.65386,
    "lat": 52.509449
  }
}, {
  "id": 2759874,
  "name": "Gemeente Alphen aan den Rijn",
  "country": "NL",
  "coord": {
    "lon": 4.65,
    "lat": 52.133331
  }
}, {
  "id": 3160606,
  "name": "Horten",
  "country": "NO",
  "coord": {
    "lon": 10.48527,
    "lat": 59.41547
  }
}, {
  "id": 6453374,
  "name": "Haugesund",
  "country": "NO",
  "coord": {
    "lon": 5.27551,
    "lat": 59.410149
  }
}, {
  "id": 6453355,
  "name": "Gjøvik",
  "country": "NO",
  "coord": {
    "lon": 10.69287,
    "lat": 60.79472
  }
}, {
  "id": 6453341,
  "name": "Ålesund",
  "country": "NO",
  "coord": {
    "lon": 6.15424,
    "lat": 62.471241
  }
}, {
  "id": 1282635,
  "name": "Tulsipur",
  "country": "NP",
  "coord": {
    "lon": 82.297256,
    "lat": 28.130989
  }
}, {
  "id": 6240770,
  "name": "Cambridge",
  "country": "NZ",
  "coord": {
    "lon": 175.440201,
    "lat": -37.87822
  }
}, {
  "id": 288721,
  "name": "Bidbid",
  "country": "OM",
  "coord": {
    "lon": 58.1283,
    "lat": 23.40786
  }
}, {
  "id": 288764,
  "name": "Bawshar",
  "country": "OM",
  "coord": {
    "lon": 58.398899,
    "lat": 23.55563
  }
}, {
  "id": 288902,
  "name": "Badiyah",
  "country": "OM",
  "coord": {
    "lon": 58.799999,
    "lat": 22.450001
  }
}, {
  "id": 288955,
  "name": "As Suwayq",
  "country": "OM",
  "coord": {
    "lon": 57.43861,
    "lat": 23.84944
  }
}, {
  "id": 3691094,
  "name": "Uchiza",
  "country": "PE",
  "coord": {
    "lon": -76.463333,
    "lat": -8.45917
  }
}, {
  "id": 7530966,
  "name": "Włocławek",
  "country": "PL",
  "coord": {
    "lon": 19.060829,
    "lat": 52.665379
  }
}, {
  "id": 7531696,
  "name": "Świdwin",
  "country": "PL",
  "coord": {
    "lon": 15.7973,
    "lat": 53.7742
  }
}, {
  "id": 7530961,
  "name": "Jastrzębie-Zdrój",
  "country": "PL",
  "coord": {
    "lon": 18.600531,
    "lat": 49.960629
  }
}, {
  "id": 7532652,
  "name": "Bełchatów",
  "country": "PL",
  "coord": {
    "lon": 19.3626,
    "lat": 51.3545
  }
}, {
  "id": 4562506,
  "name": "Aguadilla",
  "country": "PR",
  "coord": {
    "lon": -67.154068,
    "lat": 18.42745
  }
}, {
  "id": 8014434,
  "name": "Vila Franca de Xira",
  "country": "PT",
  "coord": {
    "lon": -8.96442,
    "lat": 38.912411
  }
}, {
  "id": 8012598,
  "name": "Ramada",
  "country": "PT",
  "coord": {
    "lon": -9.19464,
    "lat": 38.806961
  }
}, {
  "id": 8013113,
  "name": "Almada",
  "country": "PT",
  "coord": {
    "lon": -9.16249,
    "lat": 38.678871
  }
}, {
  "id": 8012746,
  "name": "Gueifães",
  "country": "PT",
  "coord": {
    "lon": -8.6052,
    "lat": 41.215248
  }
}, {
  "id": 499452,
  "name": "Safonovo",
  "country": "RU",
  "coord": {
    "lon": 33.216671,
    "lat": 55.150002
  }
}, {
  "id": 2695079,
  "name": "Lillsjönäs",
  "country": "SE",
  "coord": {
    "lon": 17.950001,
    "lat": 59.333328
  }
}, {
  "id": 2407660,
  "name": "Koidu",
  "country": "SL",
  "coord": {
    "lon": -10.83333,
    "lat": 8.41667
  }
}, {
  "id": 1607257,
  "name": "Prakhon Chai",
  "country": "TH",
  "coord": {
    "lon": 103.120811,
    "lat": 14.60592
  }
}, {
  "id": 1609031,
  "name": "Changwat Lop Buri",
  "country": "TH",
  "coord": {
    "lon": 100.75,
    "lat": 14.93333
  }
}, {
  "id": 742902,
  "name": "Kocaali",
  "country": "TR",
  "coord": {
    "lon": 30.852779,
    "lat": 41.05336
  }
}, {
  "id": 148942,
  "name": "Vwawa",
  "country": "TZ",
  "coord": {
    "lon": 32.933331,
    "lat": -9.11667
  }
}, {
  "id": 4056099,
  "name": "Coffee County",
  "country": "US",
  "coord": {
    "lon": -86.000221,
    "lat": 31.41683
  }
}, {
  "id": 4151245,
  "name": "Clay County",
  "country": "US",
  "coord": {
    "lon": -81.833153,
    "lat": 29.99968
  }
}, {
  "id": 4155535,
  "name": "Flagler County",
  "country": "US",
  "coord": {
    "lon": -81.291451,
    "lat": 29.45859
  }
}, {
  "id": 4158449,
  "name": "Hernando County",
  "country": "US",
  "coord": {
    "lon": -82.458153,
    "lat": 28.541941
  }
}, {
  "id": 4174301,
  "name": "Sumter County",
  "country": "US",
  "coord": {
    "lon": -82.083138,
    "lat": 28.708599
  }
}, {
  "id": 4196508,
  "name": "Fulton County",
  "country": "US",
  "coord": {
    "lon": -84.449928,
    "lat": 33.766769
  }
}, {
  "id": 4191014,
  "name": "DeKalb County",
  "country": "US",
  "coord": {
    "lon": -84.233253,
    "lat": 33.750381
  }
}, {
  "id": 4255818,
  "name": "Clark County",
  "country": "US",
  "coord": {
    "lon": -85.761353,
    "lat": 38.483398
  }
}, {
  "id": 4310411,
  "name": "Sylvania",
  "country": "US",
  "coord": {
    "lon": -85.87413,
    "lat": 38.157009
  }
}, {
  "id": 4287837,
  "name": "Clark County",
  "country": "US",
  "coord": {
    "lon": -84.266602,
    "lat": 37.98341
  }
}, {
  "id": 4347820,
  "name": "City of Baltimore",
  "country": "US",
  "coord": {
    "lon": -76.61219,
    "lat": 39.290379
  }
}, {
  "id": 7198188,
  "name": "Cashell Estates",
  "country": "US",
  "coord": {
    "lon": -77.138702,
    "lat": 39.137199
  }
}, {
  "id": 4372589,
  "name": "Wakely Terrace",
  "country": "US",
  "coord": {
    "lon": -76.334961,
    "lat": 39.525661
  }
}, {
  "id": 4406835,
  "name": "Saint Charles County",
  "country": "US",
  "coord": {
    "lon": -90.733459,
    "lat": 38.76672
  }
}, {
  "id": 4407084,
  "name": "City of Saint Louis",
  "country": "US",
  "coord": {
    "lon": -90.197891,
    "lat": 38.62727
  }
}, {
  "id": 4422178,
  "name": "Coahoma County",
  "country": "US",
  "coord": {
    "lon": -90.567879,
    "lat": 34.217892
  }
}, {
  "id": 4431425,
  "name": "Jackson County",
  "country": "US",
  "coord": {
    "lon": -88.6278,
    "lat": 30.42325
  }
}, {
  "id": 4481511,
  "name": "Nash County",
  "country": "US",
  "coord": {
    "lon": -77.96637,
    "lat": 35.96682
  }
}, {
  "id": 4475520,
  "name": "Lee County",
  "country": "US",
  "coord": {
    "lon": -79.183083,
    "lat": 35.46682
  }
}, {
  "id": 4527624,
  "name": "Warren County",
  "country": "US",
  "coord": {
    "lon": -84.166603,
    "lat": 39.433392
  }
}, {
  "id": 4534444,
  "name": "Creek County",
  "country": "US",
  "coord": {
    "lon": -96.400291,
    "lat": 35.900082
  }
}, {
  "id": 4592843,
  "name": "Richland County",
  "country": "US",
  "coord": {
    "lon": -80.916481,
    "lat": 34.016819
  }
}, {
  "id": 4735729,
  "name": "Taylor County",
  "country": "US",
  "coord": {
    "lon": -99.833702,
    "lat": 32.300129
  }
}, {
  "id": 4697444,
  "name": "Hidalgo County",
  "country": "US",
  "coord": {
    "lon": -98.200287,
    "lat": 26.333679
  }
}, {
  "id": 4740157,
  "name": "Washington County",
  "country": "US",
  "coord": {
    "lon": -96.400238,
    "lat": 30.233549
  }
}, {
  "id": 4739690,
  "name": "Walker County",
  "country": "US",
  "coord": {
    "lon": -95.566887,
    "lat": 30.73353
  }
}, {
  "id": 4703071,
  "name": "Kerr County",
  "country": "US",
  "coord": {
    "lon": -99.300323,
    "lat": 30.050211
  }
}, {
  "id": 4744106,
  "name": "City of Alexandria",
  "country": "US",
  "coord": {
    "lon": -77.046921,
    "lat": 38.80484
  }
}, {
  "id": 4749005,
  "name": "City of Bristol",
  "country": "US",
  "coord": {
    "lon": -82.188469,
    "lat": 36.596489
  }
}, {
  "id": 4752046,
  "name": "City of Charlottesville",
  "country": "US",
  "coord": {
    "lon": -78.476677,
    "lat": 38.029308
  }
}, {
  "id": 4752215,
  "name": "City of Chesapeake",
  "country": "US",
  "coord": {
    "lon": -76.312157,
    "lat": 36.687649
  }
}, {
  "id": 4753684,
  "name": "City of Colonial Heights",
  "country": "US",
  "coord": {
    "lon": -77.410263,
    "lat": 37.244041
  }
}, {
  "id": 4755298,
  "name": "City of Danville",
  "country": "US",
  "coord": {
    "lon": -79.39502,
    "lat": 36.585972
  }
}, {
  "id": 4758109,
  "name": "City of Fairfax",
  "country": "US",
  "coord": {
    "lon": -77.306374,
    "lat": 38.846218
  }
}, {
  "id": 4760084,
  "name": "City of Fredericksburg",
  "country": "US",
  "coord": {
    "lon": -77.460541,
    "lat": 38.303181
  }
}, {
  "id": 4763237,
  "name": "City of Harrisonburg",
  "country": "US",
  "coord": {
    "lon": -78.868919,
    "lat": 38.44957
  }
}, {
  "id": 4764849,
  "name": "City of Hopewell",
  "country": "US",
  "coord": {
    "lon": -77.287201,
    "lat": 37.304321
  }
}, {
  "id": 4771099,
  "name": "City of Lynchburg",
  "country": "US",
  "coord": {
    "lon": -79.14225,
    "lat": 37.41375
  }
}, {
  "id": 4771426,
  "name": "City of Manassas",
  "country": "US",
  "coord": {
    "lon": -77.475273,
    "lat": 38.75095
  }
}, {
  "id": 4776037,
  "name": "City of Newport News",
  "country": "US",
  "coord": {
    "lon": -76.508011,
    "lat": 37.062649
  }
}, {
  "id": 4776242,
  "name": "City of Norfolk",
  "country": "US",
  "coord": {
    "lon": -76.261879,
    "lat": 36.891258
  }
}, {
  "id": 4778642,
  "name": "City of Petersburg",
  "country": "US",
  "coord": {
    "lon": -77.401932,
    "lat": 37.227928
  }
}, {
  "id": 4780019,
  "name": "City of Portsmouth",
  "country": "US",
  "coord": {
    "lon": -76.354668,
    "lat": 36.85487
  }
}, {
  "id": 4780851,
  "name": "City of Radford",
  "country": "US",
  "coord": {
    "lon": -80.576447,
    "lat": 37.13179
  }
}, {
  "id": 4781756,
  "name": "City of Richmond",
  "country": "US",
  "coord": {
    "lon": -77.460258,
    "lat": 37.553761
  }
}, {
  "id": 4782241,
  "name": "City of Roanoke",
  "country": "US",
  "coord": {
    "lon": -79.941429,
    "lat": 37.270969
  }
}, {
  "id": 4784205,
  "name": "City of Salem",
  "country": "US",
  "coord": {
    "lon": -80.054764,
    "lat": 37.293468
  }
}, {
  "id": 4788160,
  "name": "City of Suffolk",
  "country": "US",
  "coord": {
    "lon": -76.608009,
    "lat": 36.708481
  }
}, {
  "id": 4787467,
  "name": "City of Staunton",
  "country": "US",
  "coord": {
    "lon": -79.071701,
    "lat": 38.149578
  }
}, {
  "id": 4792534,
  "name": "City of Waynesboro",
  "country": "US",
  "coord": {
    "lon": -78.889473,
    "lat": 38.06847
  }
}, {
  "id": 4794134,
  "name": "City of Winchester",
  "country": "US",
  "coord": {
    "lon": -78.16333,
    "lat": 39.185661
  }
}, {
  "id": 5151606,
  "name": "Cuyahoga County",
  "country": "US",
  "coord": {
    "lon": -81.666519,
    "lat": 41.433392
  }
}, {
  "id": 4899519,
  "name": "Lee County",
  "country": "US",
  "coord": {
    "lon": -89.283432,
    "lat": 41.750591
  }
}, {
  "id": 4898722,
  "name": "Knox County",
  "country": "US",
  "coord": {
    "lon": -90.200119,
    "lat": 40.933369
  }
}, {
  "id": 5004681,
  "name": "Ottawa County",
  "country": "US",
  "coord": {
    "lon": -86.000603,
    "lat": 42.95002
  }
}, {
  "id": 4985190,
  "name": "Bay County",
  "country": "US",
  "coord": {
    "lon": -84.016647,
    "lat": 43.73336
  }
}, {
  "id": 5000477,
  "name": "Macomb County",
  "country": "US",
  "coord": {
    "lon": -82.949928,
    "lat": 42.700031
  }
}, {
  "id": 4997130,
  "name": "Ingham County",
  "country": "US",
  "coord": {
    "lon": -84.383301,
    "lat": 42.60004
  }
}, {
  "id": 5009706,
  "name": "Shiawassee County",
  "country": "US",
  "coord": {
    "lon": -84.149971,
    "lat": 42.950031
  }
}, {
  "id": 5128316,
  "name": "Nassau County",
  "country": "US",
  "coord": {
    "lon": -73.582901,
    "lat": 40.75066
  }
}, {
  "id": 6941775,
  "name": "Kings County",
  "country": "US",
  "coord": {
    "lon": -73.949577,
    "lat": 40.650101
  }
}, {
  "id": 5113792,
  "name": "Cortland County",
  "country": "US",
  "coord": {
    "lon": -76.082977,
    "lat": 42.600071
  }
}, {
  "id": 5112738,
  "name": "City Line",
  "country": "US",
  "coord": {
    "lon": -73.887077,
    "lat": 40.676208
  }
}, {
  "id": 5118116,
  "name": "Fulton County",
  "country": "US",
  "coord": {
    "lon": -74.449577,
    "lat": 43.116741
  }
}, {
  "id": 5122534,
  "name": "Jamestown",
  "country": "US",
  "coord": {
    "lon": -79.235329,
    "lat": 42.097
  }
}, {
  "id": 6332485,
  "name": "Queensbridge Houses",
  "country": "US",
  "coord": {
    "lon": -73.945,
    "lat": 40.75528
  }
}, {
  "id": 7250946,
  "name": "Carnegie Hill",
  "country": "US",
  "coord": {
    "lon": -73.95472,
    "lat": 40.783329
  }
}, {
  "id": 5133668,
  "name": "Rensselaer County",
  "country": "US",
  "coord": {
    "lon": -73.482887,
    "lat": 42.716751
  }
}, {
  "id": 5161640,
  "name": "Mahoning County",
  "country": "US",
  "coord": {
    "lon": -80.766472,
    "lat": 41.03339
  }
}, {
  "id": 5151896,
  "name": "Delaware County",
  "country": "US",
  "coord": {
    "lon": -83.000183,
    "lat": 40.266731
  }
}, {
  "id": 5145576,
  "name": "Allen County",
  "country": "US",
  "coord": {
    "lon": -84.083282,
    "lat": 40.76672
  }
}, {
  "id": 5153362,
  "name": "Erie County",
  "country": "US",
  "coord": {
    "lon": -82.599899,
    "lat": 41.350052
  }
}, {
  "id": 5221078,
  "name": "Bristol County",
  "country": "US",
  "coord": {
    "lon": -71.271721,
    "lat": 41.71677
  }
}, {
  "id": 5393068,
  "name": "Santa Cruz County",
  "country": "US",
  "coord": {
    "lon": -122.051071,
    "lat": 37.066608
  }
}, {
  "id": 5391997,
  "name": "San Francisco County",
  "country": "US",
  "coord": {
    "lon": -122.45108,
    "lat": 37.766602
  }
}, {
  "id": 5423573,
  "name": "Grand Junction",
  "country": "US",
  "coord": {
    "lon": -108.550652,
    "lat": 39.063869
  }
}, {
  "id": 5525886,
  "name": "Maverick County",
  "country": "US",
  "coord": {
    "lon": -100.350349,
    "lat": 28.76692
  }
}, {
  "id": 5522430,
  "name": "Gray County",
  "country": "US",
  "coord": {
    "lon": -100.802002,
    "lat": 35.416698
  }
}, {
  "id": 1512838,
  "name": "Shofirkon",
  "country": "UZ",
  "coord": {
    "lon": 64.501389,
    "lat": 40.119999
  }
}, {
  "id": 1512978,
  "name": "Qushkupir",
  "country": "UZ",
  "coord": {
    "lon": 60.345558,
    "lat": 41.535
  }
}, {
  "id": 1513017,
  "name": "Parkent",
  "country": "UZ",
  "coord": {
    "lon": 69.676392,
    "lat": 41.294441
  }
}, {
  "id": 1513023,
  "name": "Pop",
  "country": "UZ",
  "coord": {
    "lon": 71.108887,
    "lat": 40.873611
  }
}, {
  "id": 1513038,
  "name": "Paxtakor",
  "country": "UZ",
  "coord": {
    "lon": 67.954437,
    "lat": 40.315281
  }
}, {
  "id": 1513092,
  "name": "Novyy Turtkul",
  "country": "UZ",
  "coord": {
    "lon": 61.01667,
    "lat": 41.549999
  }
}, {
  "id": 1513245,
  "name": "Manghit",
  "country": "UZ",
  "coord": {
    "lon": 60.059719,
    "lat": 42.115559
  }
}, {
  "id": 1513655,
  "name": "Haqqulobod",
  "country": "UZ",
  "coord": {
    "lon": 72.116669,
    "lat": 40.916672
  }
}, {
  "id": 1513900,
  "name": "Iskandar",
  "country": "UZ",
  "coord": {
    "lon": 69.700829,
    "lat": 41.55389
  }
}, {
  "id": 1513957,
  "name": "Hazorasp",
  "country": "UZ",
  "coord": {
    "lon": 61.074169,
    "lat": 41.319439
  }
}, {
  "id": 1514215,
  "name": "Chinoz",
  "country": "UZ",
  "coord": {
    "lon": 68.769722,
    "lat": 40.93639
  }
}, {
  "id": 1514330,
  "name": "Buka",
  "country": "UZ",
  "coord": {
    "lon": 69.198608,
    "lat": 40.810829
  }
}, {
  "id": 1514387,
  "name": "Beruniy",
  "country": "UZ",
  "coord": {
    "lon": 60.752499,
    "lat": 41.691109
  }
}, {
  "id": 1514396,
  "name": "Bektemir",
  "country": "UZ",
  "coord": {
    "lon": 69.334167,
    "lat": 41.209721
  }
}, {
  "id": 1526979,
  "name": "Quva",
  "country": "UZ",
  "coord": {
    "lon": 72.072922,
    "lat": 40.522041
  }
}, {
  "id": 3748724,
  "name": "Redemption",
  "country": "VC",
  "coord": {
    "lon": -61.229439,
    "lat": 13.16444
  }
}, {
  "id": 3649281,
  "name": "Municipio Anaco",
  "country": "VE",
  "coord": {
    "lon": -64.466667,
    "lat": 9.33333
  }
}, {
  "id": 3486270,
  "name": "Anaco",
  "country": "VE",
  "coord": {
    "lon": -64.472778,
    "lat": 9.43889
  }
}, {
  "id": 3625123,
  "name": "Municipio Zamora",
  "country": "VE",
  "coord": {
    "lon": -67.5,
    "lat": 10.06667
  }
}, {
  "id": 3625547,
  "name": "Municipio Valencia",
  "country": "VE",
  "coord": {
    "lon": -68.083328,
    "lat": 10.08333
  }
}, {
  "id": 8129205,
  "name": "Municipio Santiago Mariño",
  "country": "VE",
  "coord": {
    "lon": -67.472878,
    "lat": 10.22388
  }
}, {
  "id": 3628416,
  "name": "Municipio San Felipe",
  "country": "VE",
  "coord": {
    "lon": -68.633331,
    "lat": 10.5
  }
}, {
  "id": 3645361,
  "name": "Municipio Colón",
  "country": "VE",
  "coord": {
    "lon": -72.083328,
    "lat": 9
  }
}, {
  "id": 3628494,
  "name": "Municipio San Carlos",
  "country": "VE",
  "coord": {
    "lon": -68.583328,
    "lat": 9.58333
  }
}, {
  "id": 8129204,
  "name": "Municipio Los Salias",
  "country": "VE",
  "coord": {
    "lon": -66.95179,
    "lat": 10.38854
  }
}, {
  "id": 8129175,
  "name": "Municipio Sucre",
  "country": "VE",
  "coord": {
    "lon": -66.801552,
    "lat": 10.47226
  }
}, {
  "id": 8129237,
  "name": "Municipio Libertador",
  "country": "VE",
  "coord": {
    "lon": -67.541939,
    "lat": 10.17389
  }
}, {
  "id": 3630932,
  "name": "Palo Negro",
  "country": "VE",
  "coord": {
    "lon": -67.541939,
    "lat": 10.17389
  }
}, {
  "id": 3631506,
  "name": "Municipio Nirgua",
  "country": "VE",
  "coord": {
    "lon": -68.666672,
    "lat": 10.08333
  }
}, {
  "id": 3631741,
  "name": "Mucumpiz",
  "country": "VE",
  "coord": {
    "lon": -71.133331,
    "lat": 8.41667
  }
}, {
  "id": 8129172,
  "name": "Municipio Juan José Mora",
  "country": "VE",
  "coord": {
    "lon": -68.200279,
    "lat": 10.48889
  }
}, {
  "id": 3633677,
  "name": "Los Rastrojos",
  "country": "VE",
  "coord": {
    "lon": -69.241661,
    "lat": 10.02588
  }
}, {
  "id": 8129202,
  "name": "Municipio José Félix Ribas",
  "country": "VE",
  "coord": {
    "lon": -67.33017,
    "lat": 10.21844
  }
}, {
  "id": 8129149,
  "name": "Municipio Santos Michelena",
  "country": "VE",
  "coord": {
    "lon": -67.184723,
    "lat": 10.25237
  }
}, {
  "id": 3635325,
  "name": "Las Tejerias",
  "country": "VE",
  "coord": {
    "lon": -67.184723,
    "lat": 10.25237
  }
}, {
  "id": 3637623,
  "name": "Lagunillas",
  "country": "VE",
  "coord": {
    "lon": -71.25946,
    "lat": 10.13008
  }
}, {
  "id": 8129268,
  "name": "Municipio Vargas",
  "country": "VE",
  "coord": {
    "lon": -66.934601,
    "lat": 10.59901
  }
}, {
  "id": 8131449,
  "name": "Municipio Marcano",
  "country": "VE",
  "coord": {
    "lon": -63.964119,
    "lat": 11.08307
  }
}, {
  "id": 8131484,
  "name": "Municipio Valdez",
  "country": "VE",
  "coord": {
    "lon": -62.300289,
    "lat": 10.57945
  }
}, {
  "id": 3625122,
  "name": "Municipio Zamora",
  "country": "VE",
  "coord": {
    "lon": -66.5,
    "lat": 10.5
  }
}, {
  "id": 3630003,
  "name": "Municipio Plaza",
  "country": "VE",
  "coord": {
    "lon": -66.666672,
    "lat": 10.5
  }
}, {
  "id": 8131393,
  "name": "Municipio Mario Briceño Iragorry",
  "country": "VE",
  "coord": {
    "lon": -67.633614,
    "lat": 10.30028
  }
}, {
  "id": 3642833,
  "name": "El Limon",
  "country": "VE",
  "coord": {
    "lon": -67.632118,
    "lat": 10.30589
  }
}, {
  "id": 8129201,
  "name": "Municipio El Hatillo",
  "country": "VE",
  "coord": {
    "lon": -66.816101,
    "lat": 10.42994
  }
}, {
  "id": 8129178,
  "name": "Municipio Chacao",
  "country": "VE",
  "coord": {
    "lon": -66.85347,
    "lat": 10.49598
  }
}, {
  "id": 3646062,
  "name": "Tacarigua",
  "country": "VE",
  "coord": {
    "lon": -67.919823,
    "lat": 10.08621
  }
}, {
  "id": 8131442,
  "name": "Municipio Baruta",
  "country": "VE",
  "coord": {
    "lon": -66.875412,
    "lat": 10.43346
  }
}, {
  "id": 8129200,
  "name": "Municipio José Tadeo Monagas",
  "country": "VE",
  "coord": {
    "lon": -66.381393,
    "lat": 9.86005
  }
}, {
  "id": 3640668,
  "name": "Municipio García de Hevia",
  "country": "VE",
  "coord": {
    "lon": -72.25,
    "lat": 8.33333
  }
}, {
  "id": 1559969,
  "name": "Tỉnh Nghệ An",
  "country": "VN",
  "coord": {
    "lon": 104.833328,
    "lat": 19.33333
  }
}, {
  "id": 1905577,
  "name": "Tỉnh Phú Thọ",
  "country": "VN",
  "coord": {
    "lon": 105.166672,
    "lat": 21.33333
  }
}, {
  "id": 1562820,
  "name": "Viet Tri",
  "country": "VN",
  "coord": {
    "lon": 105.430832,
    "lat": 21.301941
  }
}, {
  "id": 1568758,
  "name": "Tỉnh Quảng Ninh",
  "country": "VN",
  "coord": {
    "lon": 107.333328,
    "lat": 21.25
  }
}, {
  "id": 1569805,
  "name": "Tỉnh Phú Yên",
  "country": "VN",
  "coord": {
    "lon": 109.166672,
    "lat": 13.16667
  }
}, {
  "id": 6165683,
  "name": "Thornhill",
  "country": "CA",
  "coord": {
    "lon": -79.416298,
    "lat": 43.80011
  }
}, {
  "id": 6111881,
  "name": "Port Hope",
  "country": "CA",
  "coord": {
    "lon": -78.292992,
    "lat": 43.951172
  }
}, {
  "id": 4004156,
  "name": "Estado de Jalisco",
  "country": "MX",
  "coord": {
    "lon": -103.666672,
    "lat": 20.33333
  }
}, {
  "id": 3982729,
  "name": "Tabasco",
  "country": "MX",
  "coord": {
    "lon": -102.916672,
    "lat": 21.866671
  }
}, {
  "id": 2900752,
  "name": "Holdereggen",
  "country": "DE",
  "coord": {
    "lon": 9.68333,
    "lat": 47.549999
  }
}, {
  "id": 3249065,
  "name": "Landkreis Saarlouis",
  "country": "DE",
  "coord": {
    "lon": 6.78944,
    "lat": 49.338612
  }
}, {
  "id": 2842569,
  "name": "Sachsen",
  "country": "DE",
  "coord": {
    "lon": 10.4,
    "lat": 49.299999
  }
}, {
  "id": 2826166,
  "name": "Straße",
  "country": "DE",
  "coord": {
    "lon": 7.48333,
    "lat": 50.866669
  }
}, {
  "id": 2941283,
  "name": "Burghaun",
  "country": "DE",
  "coord": {
    "lon": 9.72453,
    "lat": 50.696838
  }
}, {
  "id": 2891205,
  "name": "Kiedrich",
  "country": "DE",
  "coord": {
    "lon": 8.08333,
    "lat": 50.033329
  }
}, {
  "id": 2911739,
  "name": "Haiterbach",
  "country": "DE",
  "coord": {
    "lon": 8.65,
    "lat": 48.533329
  }
}, {
  "id": 2865825,
  "name": "Neuenberg",
  "country": "DE",
  "coord": {
    "lon": 9.66145,
    "lat": 50.546268
  }
}, {
  "id": 6555433,
  "name": "Schlaitdorf",
  "country": "DE",
  "coord": {
    "lon": 9.22302,
    "lat": 48.604252
  }
}, {
  "id": 2823141,
  "name": "Thale",
  "country": "DE",
  "coord": {
    "lon": 11.05,
    "lat": 51.75
  }
}, {
  "id": 2821254,
  "name": "Treuchtlingen",
  "country": "DE",
  "coord": {
    "lon": 10.91667,
    "lat": 48.950001
  }
}, {
  "id": 2888846,
  "name": "Klein Glienicke",
  "country": "DE",
  "coord": {
    "lon": 13.1,
    "lat": 52.416672
  }
}, {
  "id": 6553115,
  "name": "Ostbevern",
  "country": "DE",
  "coord": {
    "lon": 7.839,
    "lat": 52.056599
  }
}, {
  "id": 2928927,
  "name": "Eselsburg",
  "country": "DE",
  "coord": {
    "lon": 14.1,
    "lat": 51.26667
  }
}, {
  "id": 2848920,
  "name": "Reifert",
  "country": "DE",
  "coord": {
    "lon": 7.38333,
    "lat": 50.566669
  }
}, {
  "id": 2751791,
  "name": "Gemeente Leeuwarden",
  "country": "NL",
  "coord": {
    "lon": 5.78333,
    "lat": 53.183331
  }
}, {
  "id": 2754273,
  "name": "Het Hazebos",
  "country": "NL",
  "coord": {
    "lon": 6.60543,
    "lat": 52.564899
  }
}, {
  "id": 7874246,
  "name": "Musiskwartier",
  "country": "NL",
  "coord": {
    "lon": 5.91203,
    "lat": 51.982712
  }
}, {
  "id": 2658457,
  "name": "Suhr",
  "country": "CH",
  "coord": {
    "lon": 8.07967,
    "lat": 47.371719
  }
}, {
  "id": 3866425,
  "name": "Albardon",
  "country": "AR",
  "coord": {
    "lon": -68.525558,
    "lat": -31.43722
  }
}, {
  "id": 586925,
  "name": "Buzovna",
  "country": "AZ",
  "coord": {
    "lon": 50.113899,
    "lat": 40.517891
  }
}, {
  "id": 587261,
  "name": "Amirdzhan",
  "country": "AZ",
  "coord": {
    "lon": 49.983608,
    "lat": 40.426392
  }
}, {
  "id": 587342,
  "name": "Aghsu Rayon",
  "country": "AZ",
  "coord": {
    "lon": 48.333328,
    "lat": 40.5
  }
}, {
  "id": 1185111,
  "name": "Satkhira",
  "country": "BD",
  "coord": {
    "lon": 89.099998,
    "lat": 22.716669
  }
}, {
  "id": 2787891,
  "name": "Roeselare",
  "country": "BE",
  "coord": {
    "lon": 3.13333,
    "lat": 50.950001
  }
}, {
  "id": 2788507,
  "name": "Puurs",
  "country": "BE",
  "coord": {
    "lon": 4.28999,
    "lat": 51.075001
  }
}, {
  "id": 2353169,
  "name": "Province du Zoundwéogo",
  "country": "BF",
  "coord": {
    "lon": -1,
    "lat": 11.58333
  }
}, {
  "id": 2360615,
  "name": "Garango",
  "country": "BF",
  "coord": {
    "lon": -0.55056,
    "lat": 11.8
  }
}, {
  "id": 2355248,
  "name": "Province du Soum",
  "country": "BF",
  "coord": {
    "lon": -1.25,
    "lat": 14.33333
  }
}, {
  "id": 2354771,
  "name": "Province de la Tapoa",
  "country": "BF",
  "coord": {
    "lon": 1.75,
    "lat": 12
  }
}, {
  "id": 425551,
  "name": "Muramvya",
  "country": "BI",
  "coord": {
    "lon": 29.607901,
    "lat": -3.2682
  }
}, {
  "id": 2391377,
  "name": "Tchaourou",
  "country": "BJ",
  "coord": {
    "lon": 2.59752,
    "lat": 8.88649
  }
}, {
  "id": 2395261,
  "name": "Bassila",
  "country": "BJ",
  "coord": {
    "lon": 1.6654,
    "lat": 9.00814
  }
}, {
  "id": 3385122,
  "name": "Viana",
  "country": "BR",
  "coord": {
    "lon": -45.003609,
    "lat": -3.22028
  }
}, {
  "id": 3386567,
  "name": "Sao Joao dos Inhamuns",
  "country": "BR",
  "coord": {
    "lon": -40.283329,
    "lat": -6
  }
}, {
  "id": 3387266,
  "name": "Solanea",
  "country": "BR",
  "coord": {
    "lon": -35.540001,
    "lat": -6.755
  }
}, {
  "id": 3447473,
  "name": "Sobradinho",
  "country": "BR",
  "coord": {
    "lon": -39.099998,
    "lat": -12.83333
  }
}, {
  "id": 218253,
  "name": "Bondo",
  "country": "CD",
  "coord": {
    "lon": 23.686649,
    "lat": 3.81461
  }
}, {
  "id": 238566,
  "name": "Ippy",
  "country": "CF",
  "coord": {
    "lon": 21.22468,
    "lat": 6.26793
  }
}, {
  "id": 3874943,
  "name": "Puerto Quellon",
  "country": "CL",
  "coord": {
    "lon": -73.616669,
    "lat": -43.116669
  }
}, {
  "id": 3879123,
  "name": "Nacimiento",
  "country": "CL",
  "coord": {
    "lon": -72.666672,
    "lat": -37.5
  }
}, {
  "id": 2228005,
  "name": "Mbanga",
  "country": "CM",
  "coord": {
    "lon": 9.5671,
    "lat": 4.5016
  }
}, {
  "id": 2228675,
  "name": "Mamfe",
  "country": "CM",
  "coord": {
    "lon": 9.3123,
    "lat": 5.754
  }
}, {
  "id": 2491335,
  "name": "Ksar Chellala",
  "country": "DZ",
  "coord": {
    "lon": 2.31889,
    "lat": 35.212219
  }
}, {
  "id": 2492345,
  "name": "Kerkera",
  "country": "DZ",
  "coord": {
    "lon": 6.58556,
    "lat": 36.929169
  }
}, {
  "id": 2498752,
  "name": "El Affroun",
  "country": "DZ",
  "coord": {
    "lon": 2.62528,
    "lat": 36.4701
  }
}, {
  "id": 360542,
  "name": "Al Qurayn",
  "country": "EG",
  "coord": {
    "lon": 31.73514,
    "lat": 30.61618
  }
}, {
  "id": 361495,
  "name": "Al Ayyat",
  "country": "EG",
  "coord": {
    "lon": 31.2575,
    "lat": 29.61972
  }
}, {
  "id": 362882,
  "name": "Abu al Matamir",
  "country": "EG",
  "coord": {
    "lon": 30.174379,
    "lat": 30.910179
  }
}, {
  "id": 448500,
  "name": "Zoba Gash-Barka",
  "country": "ER",
  "coord": {
    "lon": 37.5,
    "lat": 15.25
  }
}, {
  "id": 330811,
  "name": "Metahara",
  "country": "ET",
  "coord": {
    "lon": 39.916672,
    "lat": 8.9
  }
}, {
  "id": 332746,
  "name": "Korem",
  "country": "ET",
  "coord": {
    "lon": 39.522781,
    "lat": 12.50583
  }
}, {
  "id": 336372,
  "name": "Giyon",
  "country": "ET",
  "coord": {
    "lon": 37.98333,
    "lat": 8.53333
  }
}, {
  "id": 336496,
  "name": "Gimbi",
  "country": "ET",
  "coord": {
    "lon": 35.833328,
    "lat": 9.16667
  }
}, {
  "id": 336931,
  "name": "Genet",
  "country": "ET",
  "coord": {
    "lon": 38.5,
    "lat": 9.06667
  }
}, {
  "id": 337712,
  "name": "Finote Selam",
  "country": "ET",
  "coord": {
    "lon": 37.26667,
    "lat": 10.7
  }
}, {
  "id": 338726,
  "name": "Dodola",
  "country": "ET",
  "coord": {
    "lon": 39.183331,
    "lat": 6.98333
  }
}, {
  "id": 341297,
  "name": "Butajira",
  "country": "ET",
  "coord": {
    "lon": 38.366669,
    "lat": 8.11667
  }
}, {
  "id": 343409,
  "name": "Asaita",
  "country": "ET",
  "coord": {
    "lon": 41.439442,
    "lat": 11.56361
  }
}, {
  "id": 343413,
  "name": "Asasa",
  "country": "ET",
  "coord": {
    "lon": 39.200001,
    "lat": 7.1
  }
}, {
  "id": 343593,
  "name": "Areka",
  "country": "ET",
  "coord": {
    "lon": 37.700001,
    "lat": 7.06667
  }
}, {
  "id": 6434715,
  "name": "Saint-Jean-de-la-Ruelle",
  "country": "FR",
  "coord": {
    "lon": 1.86667,
    "lat": 47.916672
  }
}, {
  "id": 6434515,
  "name": "Saint-Herblain",
  "country": "FR",
  "coord": {
    "lon": -1.65,
    "lat": 47.216671
  }
}, {
  "id": 6614010,
  "name": "Saint-Étienne",
  "country": "FR",
  "coord": {
    "lon": 4.4,
    "lat": 45.433331
  }
}, {
  "id": 6433106,
  "name": "Saint-Cyr-sur-Loire",
  "country": "FR",
  "coord": {
    "lon": 0.66667,
    "lat": 47.400002
  }
}, {
  "id": 6455259,
  "name": "Paris",
  "country": "FR",
  "coord": {
    "lon": 2.35236,
    "lat": 48.856461
  }
}, {
  "id": 3031132,
  "name": "Arrondissement de Boulogne-sur-Mer",
  "country": "FR",
  "coord": {
    "lon": 1.83333,
    "lat": 50.75
  }
}, {
  "id": 6439779,
  "name": "Outreau",
  "country": "FR",
  "coord": {
    "lon": 1.58333,
    "lat": 50.700001
  }
}, {
  "id": 2989170,
  "name": "Orvault",
  "country": "FR",
  "coord": {
    "lon": -1.6219,
    "lat": 47.27095
  }
}, {
  "id": 2994149,
  "name": "Arrondissement de Metz-Ville",
  "country": "FR",
  "coord": {
    "lon": 6.16667,
    "lat": 49.083328
  }
}, {
  "id": 6455403,
  "name": "Maurepas",
  "country": "FR",
  "coord": {
    "lon": 1.91667,
    "lat": 48.76667
  }
}, {
  "id": 6453527,
  "name": "Laon",
  "country": "FR",
  "coord": {
    "lon": 3.61667,
    "lat": 49.566669
  }
}, {
  "id": 6457117,
  "name": "La Crau",
  "country": "FR",
  "coord": {
    "lon": 6.06667,
    "lat": 43.150002
  }
}, {
  "id": 6457183,
  "name": "La Courneuve",
  "country": "FR",
  "coord": {
    "lon": 2.3966,
    "lat": 48.931198
  }
}, {
  "id": 6613140,
  "name": "Gentilly",
  "country": "FR",
  "coord": {
    "lon": 2.33333,
    "lat": 48.816669
  }
}, {
  "id": 6451968,
  "name": "Garches",
  "country": "FR",
  "coord": {
    "lon": 2.18333,
    "lat": 48.849998
  }
}, {
  "id": 6454404,
  "name": "Croix",
  "country": "FR",
  "coord": {
    "lon": 3.15,
    "lat": 50.666672
  }
}, {
  "id": 6449087,
  "name": "Couëron",
  "country": "FR",
  "coord": {
    "lon": -1.73333,
    "lat": 47.216671
  }
}, {
  "id": 1213530,
  "name": "Tanjungtiram",
  "country": "ID",
  "coord": {
    "lon": 98.369904,
    "lat": 4.0613
  }
}, {
  "id": 1214189,
  "name": "Percut",
  "country": "ID",
  "coord": {
    "lon": 98.863998,
    "lat": 3.6253
  }
}, {
  "id": 1214191,
  "name": "Perbaungan",
  "country": "ID",
  "coord": {
    "lon": 98.956001,
    "lat": 3.5679
  }
}, {
  "id": 1214800,
  "name": "Labuhan Deli",
  "country": "ID",
  "coord": {
    "lon": 98.673798,
    "lat": 3.7278
  }
}, {
  "id": 1215199,
  "name": "Deli Tua",
  "country": "ID",
  "coord": {
    "lon": 98.683899,
    "lat": 3.5078
  }
}, {
  "id": 1215350,
  "name": "Bireun",
  "country": "ID",
  "coord": {
    "lon": 96.700897,
    "lat": 5.203
  }
}, {
  "id": 1621520,
  "name": "Wiradesa",
  "country": "ID",
  "coord": {
    "lon": 109.619003,
    "lat": -6.8922
  }
}, {
  "id": 1621613,
  "name": "Weru",
  "country": "ID",
  "coord": {
    "lon": 108.5037,
    "lat": -6.711
  }
}, {
  "id": 1621659,
  "name": "Welahan",
  "country": "ID",
  "coord": {
    "lon": 110.716667,
    "lat": -6.8
  }
}, {
  "id": 1622090,
  "name": "Wangon",
  "country": "ID",
  "coord": {
    "lon": 109.053886,
    "lat": -7.51611
  }
}, {
  "id": 1622636,
  "name": "Ungaran",
  "country": "ID",
  "coord": {
    "lon": 110.404999,
    "lat": -7.13972
  }
}, {
  "id": 1623080,
  "name": "Tulungagung",
  "country": "ID",
  "coord": {
    "lon": 111.902496,
    "lat": -8.0657
  }
}, {
  "id": 1624545,
  "name": "Tayu",
  "country": "ID",
  "coord": {
    "lon": 111.051804,
    "lat": -6.5397
  }
}, {
  "id": 1630088,
  "name": "Randudongkal",
  "country": "ID",
  "coord": {
    "lon": 109.324303,
    "lat": -7.0981
  }
}, {
  "id": 1630997,
  "name": "Plumbon",
  "country": "ID",
  "coord": {
    "lon": 108.472778,
    "lat": -6.705
  }
}, {
  "id": 1632276,
  "name": "Parung",
  "country": "ID",
  "coord": {
    "lon": 106.733063,
    "lat": -6.42139
  }
}, {
  "id": 1632566,
  "name": "Panji",
  "country": "ID",
  "coord": {
    "lon": 114.099541,
    "lat": -7.72528
  }
}, {
  "id": 1632694,
  "name": "Pangkalanbuun",
  "country": "ID",
  "coord": {
    "lon": 111.616669,
    "lat": -2.68333
  }
}, {
  "id": 1632937,
  "name": "Pamulang",
  "country": "ID",
  "coord": {
    "lon": 106.738327,
    "lat": -6.34278
  }
}, {
  "id": 1633182,
  "name": "Pakisaji",
  "country": "ID",
  "coord": {
    "lon": 112.598099,
    "lat": -8.0665
  }
}, {
  "id": 1638775,
  "name": "Lahat",
  "country": "ID",
  "coord": {
    "lon": 103.533333,
    "lat": -3.8
  }
}, {
  "id": 1638870,
  "name": "Labuan",
  "country": "ID",
  "coord": {
    "lon": 105.830002,
    "lat": -6.3784
  }
}, {
  "id": 1638981,
  "name": "Kutoarjo",
  "country": "ID",
  "coord": {
    "lon": 109.912781,
    "lat": -7.71694
  }
}, {
  "id": 1639337,
  "name": "Kroya",
  "country": "ID",
  "coord": {
    "lon": 109.246109,
    "lat": -7.63306
  }
}, {
  "id": 1639356,
  "name": "Krian",
  "country": "ID",
  "coord": {
    "lon": 112.579201,
    "lat": -7.4104
  }
}, {
  "id": 1639850,
  "name": "Klungkung",
  "country": "ID",
  "coord": {
    "lon": 115.400002,
    "lat": -8.53333
  }
}, {
  "id": 1640044,
  "name": "Kijang",
  "country": "ID",
  "coord": {
    "lon": 104.633331,
    "lat": 0.9
  }
}, {
  "id": 1640138,
  "name": "Ketanggungan",
  "country": "ID",
  "coord": {
    "lon": 108.890999,
    "lat": -6.9383
  }
}, {
  "id": 1642628,
  "name": "Jekulo",
  "country": "ID",
  "coord": {
    "lon": 110.926201,
    "lat": -6.8057
  }
}, {
  "id": 1643981,
  "name": "Godean",
  "country": "ID",
  "coord": {
    "lon": 110.293892,
    "lat": -7.76972
  }
}, {
  "id": 1646448,
  "name": "Cimahi",
  "country": "ID",
  "coord": {
    "lon": 107.542503,
    "lat": -6.87222
  }
}, {
  "id": 1647936,
  "name": "Buduran",
  "country": "ID",
  "coord": {
    "lon": 112.723396,
    "lat": -7.4281
  }
}, {
  "id": 1648266,
  "name": "Bondowoso",
  "country": "ID",
  "coord": {
    "lon": 113.821449,
    "lat": -7.91346
  }
}, {
  "id": 1648451,
  "name": "Bojonegoro",
  "country": "ID",
  "coord": {
    "lon": 111.881699,
    "lat": -7.1502
  }
}, {
  "id": 1648759,
  "name": "Bima",
  "country": "ID",
  "coord": {
    "lon": 118.716667,
    "lat": -8.46667
  }
}, {
  "id": 1650319,
  "name": "Bangil",
  "country": "ID",
  "coord": {
    "lon": 112.818604,
    "lat": -7.59939
  }
}, {
  "id": 294387,
  "name": "Maghar",
  "country": "IL",
  "coord": {
    "lon": 35.407028,
    "lat": 32.889839
  }
}, {
  "id": 1252840,
  "name": "Wokha",
  "country": "IN",
  "coord": {
    "lon": 94.26667,
    "lat": 26.1
  }
}, {
  "id": 1252925,
  "name": "Warora",
  "country": "IN",
  "coord": {
    "lon": 79,
    "lat": 20.23333
  }
}, {
  "id": 1252946,
  "name": "Waraseoni",
  "country": "IN",
  "coord": {
    "lon": 80.033333,
    "lat": 21.75
  }
}, {
  "id": 1253041,
  "name": "Wadi",
  "country": "IN",
  "coord": {
    "lon": 76.98333,
    "lat": 17.066669
  }
}, {
  "id": 1253132,
  "name": "Virarajendrapet",
  "country": "IN",
  "coord": {
    "lon": 75.800003,
    "lat": 12.2
  }
}, {
  "id": 1253133,
  "name": "Virar",
  "country": "IN",
  "coord": {
    "lon": 72.800003,
    "lat": 19.466669
  }
}, {
  "id": 1253219,
  "name": "Vettaikkaranpudur",
  "country": "IN",
  "coord": {
    "lon": 76.933327,
    "lat": 10.56667
  }
}, {
  "id": 1253330,
  "name": "Vedaraniyam",
  "country": "IN",
  "coord": {
    "lon": 79.849998,
    "lat": 10.36667
  }
}, {
  "id": 1253340,
  "name": "Vayalar",
  "country": "IN",
  "coord": {
    "lon": 76.333328,
    "lat": 9.7
  }
}, {
  "id": 1253357,
  "name": "Vasudevanallur",
  "country": "IN",
  "coord": {
    "lon": 77.416672,
    "lat": 9.23333
  }
}, {
  "id": 1253605,
  "name": "Vadakku Valliyur",
  "country": "IN",
  "coord": {
    "lon": 77.650002,
    "lat": 8.38333
  }
}, {
  "id": 1253671,
  "name": "Usilampatti",
  "country": "IN",
  "coord": {
    "lon": 77.800003,
    "lat": 9.96667
  }
}, {
  "id": 1253698,
  "name": "Uravakonda",
  "country": "IN",
  "coord": {
    "lon": 77.26667,
    "lat": 14.95
  }
}, {
  "id": 1253702,
  "name": "Uran",
  "country": "IN",
  "coord": {
    "lon": 72.93972,
    "lat": 18.87694
  }
}, {
  "id": 1253736,
  "name": "Upleta",
  "country": "IN",
  "coord": {
    "lon": 70.283333,
    "lat": 21.73333
  }
}, {
  "id": 1253744,
  "name": "Uppal Kalan",
  "country": "IN",
  "coord": {
    "lon": 78.559113,
    "lat": 17.405769
  }
}, {
  "id": 1253747,
  "name": "Unnao",
  "country": "IN",
  "coord": {
    "lon": 80.5,
    "lat": 26.533331
  }
}, {
  "id": 1253750,
  "name": "Unjha",
  "country": "IN",
  "coord": {
    "lon": 72.400002,
    "lat": 23.799999
  }
}, {
  "id": 1253786,
  "name": "Un",
  "country": "IN",
  "coord": {
    "lon": 71.76667,
    "lat": 23.883329
  }
}, {
  "id": 1253805,
  "name": "Umreth",
  "country": "IN",
  "coord": {
    "lon": 73.116669,
    "lat": 22.700001
  }
}, {
  "id": 1253807,
  "name": "Umred",
  "country": "IN",
  "coord": {
    "lon": 79.333328,
    "lat": 20.85
  }
}, {
  "id": 1254043,
  "name": "Turaiyur",
  "country": "IN",
  "coord": {
    "lon": 78.616669,
    "lat": 11.16667
  }
}, {
  "id": 1254282,
  "name": "Todaraisingh",
  "country": "IN",
  "coord": {
    "lon": 75.48333,
    "lat": 26.01667
  }
}, {
  "id": 1254304,
  "name": "Titlagarh",
  "country": "IN",
  "coord": {
    "lon": 83.150002,
    "lat": 20.299999
  }
}, {
  "id": 1254317,
  "name": "Tisaiyanvilai",
  "country": "IN",
  "coord": {
    "lon": 77.883331,
    "lat": 8.33333
  }
}, {
  "id": 1254335,
  "name": "Tiruvalla",
  "country": "IN",
  "coord": {
    "lon": 76.566673,
    "lat": 9.38333
  }
}, {
  "id": 1254727,
  "name": "Terdal",
  "country": "IN",
  "coord": {
    "lon": 75.050003,
    "lat": 16.5
  }
}, {
  "id": 1254732,
  "name": "Teonthar",
  "country": "IN",
  "coord": {
    "lon": 81.650002,
    "lat": 24.98333
  }
}, {
  "id": 1254794,
  "name": "Tekkali",
  "country": "IN",
  "coord": {
    "lon": 84.23333,
    "lat": 18.616671
  }
}, {
  "id": 1254797,
  "name": "Tekari",
  "country": "IN",
  "coord": {
    "lon": 84.833328,
    "lat": 24.933331
  }
}, {
  "id": 1254868,
  "name": "Tarn Taran",
  "country": "IN",
  "coord": {
    "lon": 74.925278,
    "lat": 31.450001
  }
}, {
  "id": 1254909,
  "name": "Tarana",
  "country": "IN",
  "coord": {
    "lon": 76.033333,
    "lat": 23.33333
  }
}, {
  "id": 1254953,
  "name": "Tanuku",
  "country": "IN",
  "coord": {
    "lon": 81.699997,
    "lat": 16.75
  }
}, {
  "id": 1255027,
  "name": "Tanakpur",
  "country": "IN",
  "coord": {
    "lon": 80.116669,
    "lat": 29.08333
  }
}, {
  "id": 1255076,
  "name": "Talwara",
  "country": "IN",
  "coord": {
    "lon": 75.866669,
    "lat": 31.94861
  }
}, {
  "id": 1255104,
  "name": "Taloda",
  "country": "IN",
  "coord": {
    "lon": 74.216667,
    "lat": 21.566669
  }
}, {
  "id": 1255121,
  "name": "Taliparamba",
  "country": "IN",
  "coord": {
    "lon": 75.349998,
    "lat": 12.05
  }
}, {
  "id": 1255131,
  "name": "Taleigao",
  "country": "IN",
  "coord": {
    "lon": 73.800003,
    "lat": 15.46667
  }
}, {
  "id": 1255211,
  "name": "Taki",
  "country": "IN",
  "coord": {
    "lon": 88.921387,
    "lat": 22.586109
  }
}, {
  "id": 1255344,
  "name": "Suriapet",
  "country": "IN",
  "coord": {
    "lon": 79.616669,
    "lat": 17.15
  }
}, {
  "id": 1255483,
  "name": "Suluru",
  "country": "IN",
  "coord": {
    "lon": 80.01667,
    "lat": 13.7
  }
}, {
  "id": 1255488,
  "name": "Sultanpur",
  "country": "IN",
  "coord": {
    "lon": 75.199722,
    "lat": 31.215281
  }
}, {
  "id": 1255551,
  "name": "Suket",
  "country": "IN",
  "coord": {
    "lon": 76.033333,
    "lat": 24.65
  }
}, {
  "id": 1255597,
  "name": "Suar",
  "country": "IN",
  "coord": {
    "lon": 79.050003,
    "lat": 29.033331
  }
}, {
  "id": 1255620,
  "name": "Srivaikuntam",
  "country": "IN",
  "coord": {
    "lon": 77.933327,
    "lat": 8.61667
  }
}, {
  "id": 1255621,
  "name": "Srisailam",
  "country": "IN",
  "coord": {
    "lon": 78.866669,
    "lat": 16.08333
  }
}, {
  "id": 1255625,
  "name": "Sriramnagar",
  "country": "IN",
  "coord": {
    "lon": 78.25544,
    "lat": 17.26652
  }
}, {
  "id": 1255630,
  "name": "Sriperumbudur",
  "country": "IN",
  "coord": {
    "lon": 79.948891,
    "lat": 12.96889
  }
}, {
  "id": 1255714,
  "name": "Sopur",
  "country": "IN",
  "coord": {
    "lon": 74.466667,
    "lat": 34.299999
  }
}, {
  "id": 1255762,
  "name": "Songadh",
  "country": "IN",
  "coord": {
    "lon": 73.566673,
    "lat": 21.16667
  }
}, {
  "id": 1255788,
  "name": "Sonari",
  "country": "IN",
  "coord": {
    "lon": 95.033333,
    "lat": 27.066669
  }
}, {
  "id": 1255860,
  "name": "Sojat",
  "country": "IN",
  "coord": {
    "lon": 73.666672,
    "lat": 25.91667
  }
}, {
  "id": 1255884,
  "name": "Sohagpur",
  "country": "IN",
  "coord": {
    "lon": 78.199997,
    "lat": 22.700001
  }
}, {
  "id": 1255925,
  "name": "Siwana",
  "country": "IN",
  "coord": {
    "lon": 72.416672,
    "lat": 25.633329
  }
}, {
  "id": 1255927,
  "name": "Siwan",
  "country": "IN",
  "coord": {
    "lon": 84.366669,
    "lat": 26.216669
  }
}, {
  "id": 1255963,
  "name": "Sitarganj",
  "country": "IN",
  "coord": {
    "lon": 79.699997,
    "lat": 28.933331
  }
}, {
  "id": 1256029,
  "name": "Siruguppa",
  "country": "IN",
  "coord": {
    "lon": 76.900002,
    "lat": 15.63333
  }
}, {
  "id": 1256039,
  "name": "Sirsilla",
  "country": "IN",
  "coord": {
    "lon": 78.833328,
    "lat": 18.383329
  }
}, {
  "id": 1256176,
  "name": "Singarayakonda",
  "country": "IN",
  "coord": {
    "lon": 80.033333,
    "lat": 15.25
  }
}, {
  "id": 1256184,
  "name": "Singanallur",
  "country": "IN",
  "coord": {
    "lon": 77.01667,
    "lat": 11
  }
}, {
  "id": 1256333,
  "name": "Sikka",
  "country": "IN",
  "coord": {
    "lon": 69.833328,
    "lat": 22.433331
  }
}, {
  "id": 1256369,
  "name": "Sidhi",
  "country": "IN",
  "coord": {
    "lon": 81.883331,
    "lat": 24.41667
  }
}, {
  "id": 1256372,
  "name": "Sidhauli",
  "country": "IN",
  "coord": {
    "lon": 80.833328,
    "lat": 27.283331
  }
}, {
  "id": 1256382,
  "name": "Siddhapur",
  "country": "IN",
  "coord": {
    "lon": 72.383331,
    "lat": 23.91667
  }
}, {
  "id": 1256418,
  "name": "Shujalpur",
  "country": "IN",
  "coord": {
    "lon": 76.716667,
    "lat": 23.4
  }
}, {
  "id": 1256539,
  "name": "Shiggaon",
  "country": "IN",
  "coord": {
    "lon": 75.23333,
    "lat": 15
  }
}, {
  "id": 1256558,
  "name": "Shertallai",
  "country": "IN",
  "coord": {
    "lon": 76.333328,
    "lat": 9.7
  }
}, {
  "id": 1256722,
  "name": "Shahpur",
  "country": "IN",
  "coord": {
    "lon": 76.833328,
    "lat": 16.700001
  }
}, {
  "id": 1256913,
  "name": "Sehore",
  "country": "IN",
  "coord": {
    "lon": 77.083328,
    "lat": 23.200001
  }
}, {
  "id": 1256922,
  "name": "Secunderabad",
  "country": "IN",
  "coord": {
    "lon": 78.542633,
    "lat": 17.504271
  }
}, {
  "id": 1256929,
  "name": "Sayla",
  "country": "IN",
  "coord": {
    "lon": 71.466667,
    "lat": 22.549999
  }
}, {
  "id": 1256959,
  "name": "Savda",
  "country": "IN",
  "coord": {
    "lon": 75.883331,
    "lat": 21.15
  }
}, {
  "id": 1256989,
  "name": "Sathyamangalam",
  "country": "IN",
  "coord": {
    "lon": 77.25,
    "lat": 11.51667
  }
}, {
  "id": 1257093,
  "name": "Sarwar",
  "country": "IN",
  "coord": {
    "lon": 75,
    "lat": 26.066669
  }
}, {
  "id": 1257191,
  "name": "Sardulgarh",
  "country": "IN",
  "coord": {
    "lon": 75.25,
    "lat": 29.700001
  }
}, {
  "id": 1257198,
  "name": "Sardarshahr",
  "country": "IN",
  "coord": {
    "lon": 74.48333,
    "lat": 28.433331
  }
}, {
  "id": 1257307,
  "name": "Saoner",
  "country": "IN",
  "coord": {
    "lon": 78.900002,
    "lat": 21.383329
  }
}, {
  "id": 1257409,
  "name": "Sangola",
  "country": "IN",
  "coord": {
    "lon": 75.199997,
    "lat": 17.433331
  }
}, {
  "id": 1257410,
  "name": "Sangod",
  "country": "IN",
  "coord": {
    "lon": 76.283333,
    "lat": 24.91667
  }
}, {
  "id": 1257429,
  "name": "Sangaria",
  "country": "IN",
  "coord": {
    "lon": 74.449997,
    "lat": 29.799999
  }
}, {
  "id": 1257456,
  "name": "Sandur",
  "country": "IN",
  "coord": {
    "lon": 76.550003,
    "lat": 15.1
  }
}, {
  "id": 1257477,
  "name": "Sanchor",
  "country": "IN",
  "coord": {
    "lon": 71.772217,
    "lat": 24.75528
  }
}, {
  "id": 1257481,
  "name": "Sanawad",
  "country": "IN",
  "coord": {
    "lon": 76.066673,
    "lat": 22.183331
  }
}, {
  "id": 1257528,
  "name": "Samdari",
  "country": "IN",
  "coord": {
    "lon": 72.583328,
    "lat": 25.816669
  }
}, {
  "id": 1257542,
  "name": "Sambalpur",
  "country": "IN",
  "coord": {
    "lon": 83.966667,
    "lat": 21.450001
  }
}, {
  "id": 1257698,
  "name": "Sakleshpur",
  "country": "IN",
  "coord": {
    "lon": 75.783333,
    "lat": 12.96667
  }
}, {
  "id": 1257751,
  "name": "Sainthia",
  "country": "IN",
  "coord": {
    "lon": 87.666672,
    "lat": 23.950001
  }
}, {
  "id": 1257936,
  "name": "Rusera",
  "country": "IN",
  "coord": {
    "lon": 86.033333,
    "lat": 25.75
  }
}, {
  "id": 1258111,
  "name": "Robertsganj",
  "country": "IN",
  "coord": {
    "lon": 83.066673,
    "lat": 24.700001
  }
}, {
  "id": 1258229,
  "name": "Remuna",
  "country": "IN",
  "coord": {
    "lon": 86.872223,
    "lat": 21.52611
  }
}, {
  "id": 1258247,
  "name": "Rehli",
  "country": "IN",
  "coord": {
    "lon": 79.083328,
    "lat": 23.633329
  }
}, {
  "id": 1258278,
  "name": "Raybag",
  "country": "IN",
  "coord": {
    "lon": 74.783333,
    "lat": 16.48333
  }
}, {
  "id": 1258294,
  "name": "Raxaul",
  "country": "IN",
  "coord": {
    "lon": 84.849998,
    "lat": 26.98333
  }
}, {
  "id": 1258342,
  "name": "Ratlam",
  "country": "IN",
  "coord": {
    "lon": 75.066673,
    "lat": 23.316669
  }
}, {
  "id": 1258386,
  "name": "Rasipuram",
  "country": "IN",
  "coord": {
    "lon": 78.166672,
    "lat": 11.46667
  }
}, {
  "id": 1258584,
  "name": "Rampura",
  "country": "IN",
  "coord": {
    "lon": 75.23333,
    "lat": 30.25
  }
}, {
  "id": 1258952,
  "name": "Raisen",
  "country": "IN",
  "coord": {
    "lon": 77.800003,
    "lat": 23.33333
  }
}, {
  "id": 1258967,
  "name": "Raipur",
  "country": "IN",
  "coord": {
    "lon": 78.099998,
    "lat": 30.316669
  }
}, {
  "id": 1259154,
  "name": "Pusad",
  "country": "IN",
  "coord": {
    "lon": 77.583328,
    "lat": 19.9
  }
}, {
  "id": 1259243,
  "name": "Punalur",
  "country": "IN",
  "coord": {
    "lon": 76.933327,
    "lat": 9
  }
}, {
  "id": 1259263,
  "name": "Puliyangudi",
  "country": "IN",
  "coord": {
    "lon": 77.416672,
    "lat": 9.16667
  }
}, {
  "id": 1259508,
  "name": "Pithapuram",
  "country": "IN",
  "coord": {
    "lon": 82.26667,
    "lat": 17.116671
  }
}, {
  "id": 1259535,
  "name": "Piriyapatna",
  "country": "IN",
  "coord": {
    "lon": 76.099167,
    "lat": 12.33972
  }
}, {
  "id": 1259552,
  "name": "Pipri",
  "country": "IN",
  "coord": {
    "lon": 75.533333,
    "lat": 19.799999
  }
}, {
  "id": 1259608,
  "name": "Pipar",
  "country": "IN",
  "coord": {
    "lon": 73.537781,
    "lat": 26.385559
  }
}, {
  "id": 1259693,
  "name": "Pilani",
  "country": "IN",
  "coord": {
    "lon": 75.604103,
    "lat": 28.368401
  }
}, {
  "id": 1259701,
  "name": "Pihani",
  "country": "IN",
  "coord": {
    "lon": 80.199997,
    "lat": 27.633329
  }
}, {
  "id": 1259879,
  "name": "Periyakulam",
  "country": "IN",
  "coord": {
    "lon": 77.550003,
    "lat": 10.11667
  }
}, {
  "id": 1260040,
  "name": "Pattukkottai",
  "country": "IN",
  "coord": {
    "lon": 79.316673,
    "lat": 10.43333
  }
}, {
  "id": 1260129,
  "name": "Patharia",
  "country": "IN",
  "coord": {
    "lon": 79.199997,
    "lat": 23.9
  }
}, {
  "id": 1260135,
  "name": "Pathardi",
  "country": "IN",
  "coord": {
    "lon": 75.183327,
    "lat": 19.16667
  }
}, {
  "id": 1260141,
  "name": "Pathalgaon",
  "country": "IN",
  "coord": {
    "lon": 83.466667,
    "lat": 22.566669
  }
}, {
  "id": 1260178,
  "name": "Patamundai",
  "country": "IN",
  "coord": {
    "lon": 86.566673,
    "lat": 20.566669
  }
}, {
  "id": 1260421,
  "name": "Paonta Sahib",
  "country": "IN",
  "coord": {
    "lon": 77.616669,
    "lat": 30.450001
  }
}, {
  "id": 1260527,
  "name": "Pandua",
  "country": "IN",
  "coord": {
    "lon": 88.283333,
    "lat": 23.08333
  }
}, {
  "id": 1260612,
  "name": "Panagar",
  "country": "IN",
  "coord": {
    "lon": 79.98333,
    "lat": 23.299999
  }
}, {
  "id": 1260718,
  "name": "Pali",
  "country": "IN",
  "coord": {
    "lon": 81.050003,
    "lat": 23.35
  }
}, {
  "id": 1261012,
  "name": "Osmanabad",
  "country": "IN",
  "coord": {
    "lon": 76.050003,
    "lat": 18.16667
  }
}, {
  "id": 1261110,
  "name": "Nuzvid",
  "country": "IN",
  "coord": {
    "lon": 80.849998,
    "lat": 16.783331
  }
}, {
  "id": 1261205,
  "name": "Nongstoin",
  "country": "IN",
  "coord": {
    "lon": 91.26667,
    "lat": 25.51667
  }
}, {
  "id": 1261342,
  "name": "Neem ka Thana",
  "country": "IN",
  "coord": {
    "lon": 75.800003,
    "lat": 27.73333
  }
}, {
  "id": 1261369,
  "name": "Nimbahera",
  "country": "IN",
  "coord": {
    "lon": 74.683327,
    "lat": 24.616671
  }
}, {
  "id": 1261539,
  "name": "Nelamangala",
  "country": "IN",
  "coord": {
    "lon": 77.389999,
    "lat": 13.10222
  }
}, {
  "id": 1261667,
  "name": "Navalgund",
  "country": "IN",
  "coord": {
    "lon": 75.366669,
    "lat": 15.56667
  }
}, {
  "id": 1261705,
  "name": "Nattam",
  "country": "IN",
  "coord": {
    "lon": 78.23333,
    "lat": 10.23333
  }
}, {
  "id": 6542104,
  "name": "Misterbianco",
  "country": "IT",
  "coord": {
    "lon": 14.95377,
    "lat": 37.53405
  }
}, {
  "id": 6542331,
  "name": "Tremestieri Etneo",
  "country": "IT",
  "coord": {
    "lon": 15.07089,
    "lat": 37.581249
  }
}, {
  "id": 250199,
  "name": "Muḩāfaz̧at aţ Ţafīlah",
  "country": "JO",
  "coord": {
    "lon": 35.583328,
    "lat": 30.75
  }
}, {
  "id": 250420,
  "name": "Anjarah",
  "country": "JO",
  "coord": {
    "lon": 35.756531,
    "lat": 32.306301
  }
}, {
  "id": 1848382,
  "name": "Youkaichi",
  "country": "JP",
  "coord": {
    "lon": 136.197678,
    "lat": 35.116261
  }
}, {
  "id": 1849154,
  "name": "Ushibuka",
  "country": "JP",
  "coord": {
    "lon": 130.022781,
    "lat": 32.190559
  }
}, {
  "id": 1851357,
  "name": "Suzaka",
  "country": "JP",
  "coord": {
    "lon": 138.316666,
    "lat": 36.650002
  }
}, {
  "id": 1851390,
  "name": "Susaki",
  "country": "JP",
  "coord": {
    "lon": 133.283325,
    "lat": 33.366669
  }
}, {
  "id": 1851542,
  "name": "Sueyoshi",
  "country": "JP",
  "coord": {
    "lon": 131.016663,
    "lat": 31.65
  }
}, {
  "id": 1852102,
  "name": "Shinichi",
  "country": "JP",
  "coord": {
    "lon": 133.266663,
    "lat": 34.549999
  }
}, {
  "id": 1854028,
  "name": "Ono",
  "country": "JP",
  "coord": {
    "lon": 132.266663,
    "lat": 34.283329
  }
}, {
  "id": 1862302,
  "name": "Hofu",
  "country": "JP",
  "coord": {
    "lon": 131.566666,
    "lat": 34.049999
  }
}, {
  "id": 1863426,
  "name": "Haebaru",
  "country": "JP",
  "coord": {
    "lon": 127.871941,
    "lat": 26.336941
  }
}, {
  "id": 1873172,
  "name": "Ongjin",
  "country": "KP",
  "coord": {
    "lon": 125.361938,
    "lat": 37.934719
  }
}, {
  "id": 1875632,
  "name": "Kosan",
  "country": "KP",
  "coord": {
    "lon": 127.41806,
    "lat": 38.855831
  }
}, {
  "id": 1877615,
  "name": "Haeju",
  "country": "KP",
  "coord": {
    "lon": 125.714722,
    "lat": 38.040562
  }
}, {
  "id": 2054927,
  "name": "Nasŏn-si",
  "country": "KP",
  "coord": {
    "lon": 130.366394,
    "lat": 42.336109
  }
}, {
  "id": 1832257,
  "name": "Neietsu",
  "country": "KR",
  "coord": {
    "lon": 128.468216,
    "lat": 37.184471
  }
}, {
  "id": 1832501,
  "name": "Reiko",
  "country": "KR",
  "coord": {
    "lon": 126.509438,
    "lat": 35.275002
  }
}, {
  "id": 1832743,
  "name": "Yeoju",
  "country": "KR",
  "coord": {
    "lon": 127.633888,
    "lat": 37.29583
  }
}, {
  "id": 1832909,
  "name": "Yanggu",
  "country": "KR",
  "coord": {
    "lon": 127.989441,
    "lat": 38.105831
  }
}, {
  "id": 1840886,
  "name": "Mungyeong",
  "country": "KR",
  "coord": {
    "lon": 128.199463,
    "lat": 36.594582
  }
}, {
  "id": 1841976,
  "name": "Kurye",
  "country": "KR",
  "coord": {
    "lon": 127.464439,
    "lat": 35.209438
  }
}, {
  "id": 1845519,
  "name": "Cheongsong gun",
  "country": "KR",
  "coord": {
    "lon": 129.057007,
    "lat": 36.43351
  }
}, {
  "id": 1846095,
  "name": "Chinchon",
  "country": "KR",
  "coord": {
    "lon": 127.443329,
    "lat": 36.85667
  }
}, {
  "id": 1925943,
  "name": "Hwawon",
  "country": "KR",
  "coord": {
    "lon": 128.500824,
    "lat": 35.80167
  }
}, {
  "id": 285728,
  "name": "Ar Riqqah",
  "country": "KW",
  "coord": {
    "lon": 48.094719,
    "lat": 29.14583
  }
}, {
  "id": 285798,
  "name": "Muḩāfaz̧at Jahrā’",
  "country": "KW",
  "coord": {
    "lon": 47.666672,
    "lat": 29.33333
  }
}, {
  "id": 609123,
  "name": "Qulsary",
  "country": "KZ",
  "coord": {
    "lon": 54.019779,
    "lat": 46.953072
  }
}, {
  "id": 610445,
  "name": "Balyqshy",
  "country": "KZ",
  "coord": {
    "lon": 51.866669,
    "lat": 47.066669
  }
}, {
  "id": 1521379,
  "name": "Lenger",
  "country": "KZ",
  "coord": {
    "lon": 69.883926,
    "lat": 42.18301
  }
}, {
  "id": 1524245,
  "name": "Georgievka",
  "country": "KZ",
  "coord": {
    "lon": 81.576111,
    "lat": 49.33139
  }
}, {
  "id": 1654491,
  "name": "Khouèng Oudômxai",
  "country": "LA",
  "coord": {
    "lon": 101.5,
    "lat": 20.16667
  }
}, {
  "id": 1235846,
  "name": "Matara",
  "country": "LK",
  "coord": {
    "lon": 80.535278,
    "lat": 5.94851
  }
}, {
  "id": 1241964,
  "name": "Kalutara",
  "country": "LK",
  "coord": {
    "lon": 79.959297,
    "lat": 6.5831
  }
}, {
  "id": 2273312,
  "name": "Voinjama",
  "country": "LR",
  "coord": {
    "lon": -9.74778,
    "lat": 8.42194
  }
}, {
  "id": 2208655,
  "name": "Zaltan",
  "country": "LY",
  "coord": {
    "lon": 11.86647,
    "lat": 32.94701
  }
}, {
  "id": 2214845,
  "name": "Sha‘bīyat Mişrātah",
  "country": "LY",
  "coord": {
    "lon": 14.41667,
    "lat": 31.41667
  }
}, {
  "id": 7602693,
  "name": "Sha‘bīyat Wādī al Ḩayāt",
  "country": "LY",
  "coord": {
    "lon": 12.85,
    "lat": 26.549999
  }
}, {
  "id": 3692667,
  "name": "Zana",
  "country": "PE",
  "coord": {
    "lon": -79.584167,
    "lat": -6.92222
  }
}, {
  "id": 3693057,
  "name": "Querecotillo",
  "country": "PE",
  "coord": {
    "lon": -80.645561,
    "lat": -4.83778
  }
}, {
  "id": 3693645,
  "name": "Picsi",
  "country": "PE",
  "coord": {
    "lon": -79.769722,
    "lat": -6.71778
  }
}, {
  "id": 3694112,
  "name": "Paita",
  "country": "PE",
  "coord": {
    "lon": -81.114441,
    "lat": -5.08917
  }
}, {
  "id": 3695754,
  "name": "Lambayeque",
  "country": "PE",
  "coord": {
    "lon": -79.906113,
    "lat": -6.70111
  }
}, {
  "id": 3698390,
  "name": "Chepen",
  "country": "PE",
  "coord": {
    "lon": -79.449997,
    "lat": -7.21667
  }
}, {
  "id": 3925476,
  "name": "Yunguyo",
  "country": "PE",
  "coord": {
    "lon": -69.083328,
    "lat": -16.25
  }
}, {
  "id": 3927942,
  "name": "Tambopata",
  "country": "PE",
  "coord": {
    "lon": -69.183327,
    "lat": -12.73333
  }
}, {
  "id": 3935572,
  "name": "Mala",
  "country": "PE",
  "coord": {
    "lon": -76.630829,
    "lat": -12.65806
  }
}, {
  "id": 3946985,
  "name": "Ayaviri",
  "country": "PE",
  "coord": {
    "lon": -70.58889,
    "lat": -14.88639
  }
}, {
  "id": 2089470,
  "name": "Bougainville",
  "country": "PG",
  "coord": {
    "lon": 155,
    "lat": -6
  }
}, {
  "id": 2100633,
  "name": "Arawa",
  "country": "PG",
  "coord": {
    "lon": 155.536743,
    "lat": -6.21319
  }
}, {
  "id": 1707667,
  "name": "Province of Lanao del Sur",
  "country": "PH",
  "coord": {
    "lon": 124.333328,
    "lat": 7.91667
  }
}, {
  "id": 1731616,
  "name": "Province of Albay",
  "country": "PH",
  "coord": {
    "lon": 123.550003,
    "lat": 13.21667
  }
}, {
  "id": 1682479,
  "name": "Teresa",
  "country": "PH",
  "coord": {
    "lon": 121.23333,
    "lat": 14.58333
  }
}, {
  "id": 1683340,
  "name": "Tanauan",
  "country": "PH",
  "coord": {
    "lon": 121.14975,
    "lat": 14.08627
  }
}, {
  "id": 1684016,
  "name": "Talavera",
  "country": "PH",
  "coord": {
    "lon": 120.919197,
    "lat": 15.5883
  }
}, {
  "id": 1684139,
  "name": "Talacogon",
  "country": "PH",
  "coord": {
    "lon": 125.800003,
    "lat": 8.41667
  }
}, {
  "id": 1684137,
  "name": "Talacogon",
  "country": "PH",
  "coord": {
    "lon": 125.784172,
    "lat": 8.45611
  }
}, {
  "id": 1685230,
  "name": "Surallah",
  "country": "PH",
  "coord": {
    "lon": 124.73333,
    "lat": 6.36667
  }
}, {
  "id": 1685876,
  "name": "Solano",
  "country": "PH",
  "coord": {
    "lon": 121.199997,
    "lat": 16.533331
  }
}, {
  "id": 1686549,
  "name": "Silang",
  "country": "PH",
  "coord": {
    "lon": 121,
    "lat": 14.2
  }
}, {
  "id": 7532438,
  "name": "Świętochłowice",
  "country": "PL",
  "coord": {
    "lon": 18.9102,
    "lat": 50.297901
  }
}, {
  "id": 7530929,
  "name": "Powiat sierpecki",
  "country": "PL",
  "coord": {
    "lon": 19.71216,
    "lat": 52.83353
  }
}, {
  "id": 7531863,
  "name": "Jastrzębie-Zdrój",
  "country": "PL",
  "coord": {
    "lon": 18.6005,
    "lat": 49.960602
  }
}, {
  "id": 7531533,
  "name": "Gostynin",
  "country": "PL",
  "coord": {
    "lon": 19.46258,
    "lat": 52.42424
  }
}, {
  "id": 8012295,
  "name": "Custóias",
  "country": "PT",
  "coord": {
    "lon": -7.31505,
    "lat": 41.107601
  }
}, {
  "id": 8011806,
  "name": "Coimbra (Sé Nova)",
  "country": "PT",
  "coord": {
    "lon": -8.41645,
    "lat": 40.206322
  }
}, {
  "id": 8014132,
  "name": "Baguim do Monte (Rio Tinto)",
  "country": "PT",
  "coord": {
    "lon": -8.5346,
    "lat": 41.190311
  }
}, {
  "id": 2742506,
  "name": "Baguim do Monte",
  "country": "PT",
  "coord": {
    "lon": -8.54133,
    "lat": 41.19392
  }
}, {
  "id": 8010756,
  "name": "Vera Cruz",
  "country": "PT",
  "coord": {
    "lon": -8.67914,
    "lat": 40.678631
  }
}, {
  "id": 790698,
  "name": "Glogovac",
  "country": "RS",
  "coord": {
    "lon": 21.316389,
    "lat": 44.039719
  }
}, {
  "id": 378493,
  "name": "Ar Rahad",
  "country": "SD",
  "coord": {
    "lon": 30.65,
    "lat": 12.71667
  }
}, {
  "id": 2426370,
  "name": "Oum Hadjer",
  "country": "TD",
  "coord": {
    "lon": 19.6966,
    "lat": 13.2954
  }
}, {
  "id": 2427336,
  "name": "Moussoro",
  "country": "TD",
  "coord": {
    "lon": 16.49007,
    "lat": 13.64084
  }
}, {
  "id": 174968,
  "name": "Aygavan",
  "country": "AM",
  "coord": {
    "lon": 44.669842,
    "lat": 39.87326
  }
}, {
  "id": 616053,
  "name": "Yerazgavors",
  "country": "AM",
  "coord": {
    "lon": 43.75,
    "lat": 40.700001
  }
}, {
  "id": 616071,
  "name": "Voskevaz",
  "country": "AM",
  "coord": {
    "lon": 44.29509,
    "lat": 40.276779
  }
}, {
  "id": 616097,
  "name": "Verin Dvin",
  "country": "AM",
  "coord": {
    "lon": 44.590382,
    "lat": 40.024342
  }
}, {
  "id": 616119,
  "name": "Vaghashen",
  "country": "AM",
  "coord": {
    "lon": 45.328789,
    "lat": 40.13578
  }
}, {
  "id": 616120,
  "name": "Vahagni",
  "country": "AM",
  "coord": {
    "lon": 44.60873,
    "lat": 40.906979
  }
}, {
  "id": 616464,
  "name": "Lukashin",
  "country": "AM",
  "coord": {
    "lon": 44.018608,
    "lat": 40.175831
  }
}, {
  "id": 616492,
  "name": "Lanjaghbyur",
  "country": "AM",
  "coord": {
    "lon": 45.140381,
    "lat": 40.271461
  }
}, {
  "id": 616523,
  "name": "Kosh",
  "country": "AM",
  "coord": {
    "lon": 44.155842,
    "lat": 40.299992
  }
}, {
  "id": 616572,
  "name": "Karchaghbyur",
  "country": "AM",
  "coord": {
    "lon": 45.57785,
    "lat": 40.170479
  }
}, {
  "id": 616576,
  "name": "Karanlukh",
  "country": "AM",
  "coord": {
    "lon": 45.289719,
    "lat": 40.104439
  }
}, {
  "id": 616668,
  "name": "Getazat",
  "country": "AM",
  "coord": {
    "lon": 44.56369,
    "lat": 40.038441
  }
}, {
  "id": 616763,
  "name": "Darpas",
  "country": "AM",
  "coord": {
    "lon": 44.424938,
    "lat": 40.836739
  }
}, {
  "id": 616789,
  "name": "Bjni",
  "country": "AM",
  "coord": {
    "lon": 44.648121,
    "lat": 40.455898
  }
}, {
  "id": 616791,
  "name": "Byurakan",
  "country": "AM",
  "coord": {
    "lon": 44.271381,
    "lat": 40.338001
  }
}, {
  "id": 616806,
  "name": "Bazum",
  "country": "AM",
  "coord": {
    "lon": 44.439781,
    "lat": 40.86763
  }
}, {
  "id": 616828,
  "name": "Bagratashen",
  "country": "AM",
  "coord": {
    "lon": 44.817371,
    "lat": 41.24358
  }
}, {
  "id": 616853,
  "name": "Aknalich",
  "country": "AM",
  "coord": {
    "lon": 44.149799,
    "lat": 40.14315
  }
}, {
  "id": 616879,
  "name": "Ashnak",
  "country": "AM",
  "coord": {
    "lon": 43.91848,
    "lat": 40.328869
  }
}, {
  "id": 616921,
  "name": "Arevashat",
  "country": "AM",
  "coord": {
    "lon": 44.370682,
    "lat": 40.142502
  }
}, {
  "id": 616954,
  "name": "Apaga",
  "country": "AM",
  "coord": {
    "lon": 44.251572,
    "lat": 40.096661
  }
}, {
  "id": 616955,
  "name": "Anushavan",
  "country": "AM",
  "coord": {
    "lon": 43.977558,
    "lat": 40.650131
  }
}, {
  "id": 616981,
  "name": "Akunk",
  "country": "AM",
  "coord": {
    "lon": 44.684811,
    "lat": 40.268829
  }
}, {
  "id": 617003,
  "name": "Aghavnadzor",
  "country": "AM",
  "coord": {
    "lon": 44.695808,
    "lat": 40.581951
  }
}, {
  "id": 617027,
  "name": "Abovyan",
  "country": "AM",
  "coord": {
    "lon": 44.547421,
    "lat": 40.048512
  }
}, {
  "id": 823755,
  "name": "Artsvaberd",
  "country": "AM",
  "coord": {
    "lon": 45.471111,
    "lat": 40.833611
  }
}, {
  "id": 823791,
  "name": "Nor Yerznka",
  "country": "AM",
  "coord": {
    "lon": 44.404831,
    "lat": 40.31356
  }
}, {
  "id": 823805,
  "name": "Lenughi",
  "country": "AM",
  "coord": {
    "lon": 43.96484,
    "lat": 40.125622
  }
}, {
  "id": 823808,
  "name": "Gay",
  "country": "AM",
  "coord": {
    "lon": 44.305561,
    "lat": 40.083889
  }
}, {
  "id": 866137,
  "name": "Mrgavet",
  "country": "AM",
  "coord": {
    "lon": 44.482521,
    "lat": 40.02779
  }
}, {
  "id": 866138,
  "name": "Arevabuyr",
  "country": "AM",
  "coord": {
    "lon": 44.469341,
    "lat": 40.037121
  }
}, {
  "id": 2239076,
  "name": "Ndalatando",
  "country": "AO",
  "coord": {
    "lon": 14.91162,
    "lat": -9.29782
  }
}, {
  "id": 3427454,
  "name": "Villa del Rosario",
  "country": "AR",
  "coord": {
    "lon": -57.912571,
    "lat": -30.79567
  }
}, {
  "id": 3429567,
  "name": "Riacho Eh-Eh",
  "country": "AR",
  "coord": {
    "lon": -58.2775,
    "lat": -25.362089
  }
}, {
  "id": 3429801,
  "name": "Puerto Bermejo",
  "country": "AR",
  "coord": {
    "lon": -58.505379,
    "lat": -26.93173
  }
}, {
  "id": 3430178,
  "name": "Panambi",
  "country": "AR",
  "coord": {
    "lon": -54.915138,
    "lat": -27.7237
  }
}, {
  "id": 3435525,
  "name": "Cerro Cora",
  "country": "AR",
  "coord": {
    "lon": -55.608959,
    "lat": -27.5131
  }
}, {
  "id": 3435765,
  "name": "Campo Ramon",
  "country": "AR",
  "coord": {
    "lon": -55.019009,
    "lat": -27.461081
  }
}, {
  "id": 3834403,
  "name": "Tilcara",
  "country": "AR",
  "coord": {
    "lon": -65.350899,
    "lat": -23.57757
  }
}, {
  "id": 3834814,
  "name": "Tafi del Valle",
  "country": "AR",
  "coord": {
    "lon": -65.709831,
    "lat": -26.852751
  }
}, {
  "id": 3834843,
  "name": "Taco Pozo",
  "country": "AR",
  "coord": {
    "lon": -63.283329,
    "lat": -25.616671
  }
}, {
  "id": 3835866,
  "name": "Santiago Temple",
  "country": "AR",
  "coord": {
    "lon": -63.418209,
    "lat": -31.38731
  }
}, {
  "id": 3837624,
  "name": "San Francisco del Monte de Oro",
  "country": "AR",
  "coord": {
    "lon": -66.125389,
    "lat": -32.598251
  }
}, {
  "id": 3837823,
  "name": "San Cristobal",
  "country": "AR",
  "coord": {
    "lon": -61.23724,
    "lat": -30.31053
  }
}, {
  "id": 3843436,
  "name": "Napenay",
  "country": "AR",
  "coord": {
    "lon": -60.616669,
    "lat": -26.73333
  }
}, {
  "id": 3843504,
  "name": "Mutquin",
  "country": "AR",
  "coord": {
    "lon": -66.142532,
    "lat": -28.321039
  }
}, {
  "id": 3845490,
  "name": "Los Varela",
  "country": "AR",
  "coord": {
    "lon": -65.865501,
    "lat": -27.954821
  }
}, {
  "id": 3860319,
  "name": "Contraalmirante Cordero",
  "country": "AR",
  "coord": {
    "lon": -68.15284,
    "lat": -38.724232
  }
}, {
  "id": 3860419,
  "name": "Concepcion del Bermejo",
  "country": "AR",
  "coord": {
    "lon": -60.946171,
    "lat": -26.59926
  }
}, {
  "id": 3860757,
  "name": "Colonia La Tordilla",
  "country": "AR",
  "coord": {
    "lon": -63.06134,
    "lat": -31.237459
  }
}, {
  "id": 5881165,
  "name": "Tau",
  "country": "AS",
  "coord": {
    "lon": -169.514435,
    "lat": -14.23361
  }
}, {
  "id": 7267965,
  "name": "Faleasao County",
  "country": "AS",
  "coord": {
    "lon": -169.478195,
    "lat": -14.22079
  }
}, {
  "id": 2760380,
  "name": "Millstatt",
  "country": "AT",
  "coord": {
    "lon": 13.58056,
    "lat": 46.804169
  }
}, {
  "id": 2760523,
  "name": "Zirl",
  "country": "AT",
  "coord": {
    "lon": 11.23333,
    "lat": 47.283329
  }
}, {
  "id": 2760704,
  "name": "Zederhaus",
  "country": "AT",
  "coord": {
    "lon": 13.5,
    "lat": 47.150002
  }
}, {
  "id": 2760797,
  "name": "Wurmla",
  "country": "AT",
  "coord": {
    "lon": 15.86031,
    "lat": 48.254971
  }
}, {
  "id": 2760814,
  "name": "Wundschuh",
  "country": "AT",
  "coord": {
    "lon": 15.45111,
    "lat": 46.926392
  }
}, {
  "id": 2760839,
  "name": "Worth an der Lafnitz",
  "country": "AT",
  "coord": {
    "lon": 16.066669,
    "lat": 47.200001
  }
}, {
  "id": 2760906,
  "name": "Wolfsberg im Schwarzautal",
  "country": "AT",
  "coord": {
    "lon": 15.65889,
    "lat": 46.843891
  }
}, {
  "id": 2761615,
  "name": "Weissenbach an der Triesting",
  "country": "AT",
  "coord": {
    "lon": 16.039351,
    "lat": 47.982109
  }
}, {
  "id": 2761689,
  "name": "Weingraben",
  "country": "AT",
  "coord": {
    "lon": 16.366671,
    "lat": 47.51667
  }
}, {
  "id": 2768118,
  "name": "Politischer Bezirk Radkersburg",
  "country": "AT",
  "coord": {
    "lon": 15.85,
    "lat": 46.75
  }
}, {
  "id": 2761697,
  "name": "Weinburg am Sassbach",
  "country": "AT",
  "coord": {
    "lon": 15.72111,
    "lat": 46.753609
  }
}, {
  "id": 2761772,
  "name": "Weichselbaum",
  "country": "AT",
  "coord": {
    "lon": 16.1875,
    "lat": 46.942501
  }
}, {
  "id": 7873628,
  "name": "Wattenberg",
  "country": "AT",
  "coord": {
    "lon": 11.62618,
    "lat": 47.206909
  }
}, {
  "id": 7873700,
  "name": "Wängle",
  "country": "AT",
  "coord": {
    "lon": 10.66587,
    "lat": 47.487701
  }
}, {
  "id": 2763118,
  "name": "Unterauersbach",
  "country": "AT",
  "coord": {
    "lon": 15.77028,
    "lat": 46.865559
  }
}, {
  "id": 7873332,
  "name": "Unken",
  "country": "AT",
  "coord": {
    "lon": 12.68151,
    "lat": 47.63969
  }
}, {
  "id": 7873305,
  "name": "Thalgau",
  "country": "AT",
  "coord": {
    "lon": 13.25171,
    "lat": 47.848572
  }
}, {
  "id": 7872827,
  "name": "Strengberg",
  "country": "AT",
  "coord": {
    "lon": 14.64814,
    "lat": 48.14954
  }
}, {
  "id": 7873697,
  "name": "Steeg",
  "country": "AT",
  "coord": {
    "lon": 10.24982,
    "lat": 47.23756
  }
}, {
  "id": 2764625,
  "name": "Stattegg",
  "country": "AT",
  "coord": {
    "lon": 15.41667,
    "lat": 47.133331
  }
}, {
  "id": 7872462,
  "name": "Spital am Semmering",
  "country": "AT",
  "coord": {
    "lon": 15.78324,
    "lat": 47.605782
  }
}, {
  "id": 7871793,
  "name": "Spillern",
  "country": "AT",
  "coord": {
    "lon": 16.264481,
    "lat": 48.372162
  }
}, {
  "id": 2764797,
  "name": "Spillern",
  "country": "AT",
  "coord": {
    "lon": 16.25,
    "lat": 48.383331
  }
}, {
  "id": 2764806,
  "name": "Spielfeld",
  "country": "AT",
  "coord": {
    "lon": 15.63722,
    "lat": 46.705559
  }
}, {
  "id": 7873657,
  "name": "Söll",
  "country": "AT",
  "coord": {
    "lon": 12.20422,
    "lat": 47.50407
  }
}, {
  "id": 2764988,
  "name": "Sittersdorf",
  "country": "AT",
  "coord": {
    "lon": 14.60583,
    "lat": 46.544441
  }
}, {
  "id": 7872710,
  "name": "Sieggraben",
  "country": "AT",
  "coord": {
    "lon": 16.387939,
    "lat": 47.65868
  }
}, {
  "id": 7873440,
  "name": "Siegersdorf bei Herberstein",
  "country": "AT",
  "coord": {
    "lon": 15.7932,
    "lat": 47.21376
  }
}, {
  "id": 7872367,
  "name": "Sebersdorf",
  "country": "AT",
  "coord": {
    "lon": 16.00522,
    "lat": 47.191299
  }
}, {
  "id": 2765338,
  "name": "Sebersdorf",
  "country": "AT",
  "coord": {
    "lon": 15.98333,
    "lat": 47.200001
  }
}, {
  "id": 7872572,
  "name": "Schwoich",
  "country": "AT",
  "coord": {
    "lon": 12.15178,
    "lat": 47.53714
  }
}, {
  "id": 7873642,
  "name": "Schwendt",
  "country": "AT",
  "coord": {
    "lon": 12.39171,
    "lat": 47.614689
  }
}, {
  "id": 7872892,
  "name": "Schrattenthal",
  "country": "AT",
  "coord": {
    "lon": 15.89765,
    "lat": 48.740009
  }
}, {
  "id": 2766084,
  "name": "Scheffau am Wilden Kaiser",
  "country": "AT",
  "coord": {
    "lon": 12.25139,
    "lat": 47.52943
  }
}, {
  "id": 2766143,
  "name": "Scharndorf",
  "country": "AT",
  "coord": {
    "lon": 16.783331,
    "lat": 48.083328
  }
}, {
  "id": 7872755,
  "name": "Schandorf",
  "country": "AT",
  "coord": {
    "lon": 16.42375,
    "lat": 47.23402
  }
}, {
  "id": 7873594,
  "name": "Sautens",
  "country": "AT",
  "coord": {
    "lon": 10.85456,
    "lat": 47.201881
  }
}, {
  "id": 2766357,
  "name": "Sankt Veit an der Golsen",
  "country": "AT",
  "coord": {
    "lon": 15.66942,
    "lat": 48.043201
  }
}, {
  "id": 2766372,
  "name": "Sankt Ulrich bei Steyr",
  "country": "AT",
  "coord": {
    "lon": 14.42419,
    "lat": 48.021851
  }
}, {
  "id": 7872430,
  "name": "Sankt Stefan ob Leoben",
  "country": "AT",
  "coord": {
    "lon": 15.00455,
    "lat": 47.295929
  }
}, {
  "id": 7873527,
  "name": "Sankt Peter am Kammersberg",
  "country": "AT",
  "coord": {
    "lon": 14.18306,
    "lat": 47.201809
  }
}, {
  "id": 2766444,
  "name": "Sankt Peter am Kammersberg",
  "country": "AT",
  "coord": {
    "lon": 14.18333,
    "lat": 47.183331
  }
}, {
  "id": 7872343,
  "name": "Sankt Oswald bei Plankenwarth",
  "country": "AT",
  "coord": {
    "lon": 15.29907,
    "lat": 47.088921
  }
}, {
  "id": 7872418,
  "name": "Sankt Nikolai ob Draßling",
  "country": "AT",
  "coord": {
    "lon": 15.66296,
    "lat": 46.801819
  }
}, {
  "id": 7872417,
  "name": "Sankt Nikolai im Sausal",
  "country": "AT",
  "coord": {
    "lon": 15.44996,
    "lat": 46.823872
  }
}, {
  "id": 7872428,
  "name": "Sankt Michael in Obersteiermark",
  "country": "AT",
  "coord": {
    "lon": 15.05883,
    "lat": 47.3125
  }
}, {
  "id": 7873322,
  "name": "Sankt Michael im Lungau",
  "country": "AT",
  "coord": {
    "lon": 13.61442,
    "lat": 47.106091
  }
}, {
  "id": 7872697,
  "name": "Sankt Michael im Burgenland",
  "country": "AT",
  "coord": {
    "lon": 16.26557,
    "lat": 47.12516
  }
}, {
  "id": 7872272,
  "name": "Sankt Martin im Sulmtal",
  "country": "AT",
  "coord": {
    "lon": 15.29627,
    "lat": 46.763111
  }
}, {
  "id": 7872704,
  "name": "Sankt Martin an der Raab",
  "country": "AT",
  "coord": {
    "lon": 16.122549,
    "lat": 46.90802
  }
}, {
  "id": 7872450,
  "name": "Sankt Martin am Grimming",
  "country": "AT",
  "coord": {
    "lon": 13.96173,
    "lat": 47.491119
  }
}, {
  "id": 2766551,
  "name": "Sankt Margarethen bei Knittelfeld",
  "country": "AT",
  "coord": {
    "lon": 14.86667,
    "lat": 47.216671
  }
}, {
  "id": 2766563,
  "name": "Sankt Marein bei Neumarkt",
  "country": "AT",
  "coord": {
    "lon": 14.41667,
    "lat": 47.066669
  }
}, {
  "id": 7872397,
  "name": "Sankt Marein bei Knittelfeld",
  "country": "AT",
  "coord": {
    "lon": 14.84398,
    "lat": 47.315399
  }
}, {
  "id": 7873412,
  "name": "Sankt Marein bei Graz",
  "country": "AT",
  "coord": {
    "lon": 15.69616,
    "lat": 47.01886
  }
}, {
  "id": 7872415,
  "name": "Sankt Georgen an der Stiefing",
  "country": "AT",
  "coord": {
    "lon": 15.59152,
    "lat": 46.878319
  }
}, {
  "id": 2766699,
  "name": "Sankt Georgen an der Stiefing",
  "country": "AT",
  "coord": {
    "lon": 15.57972,
    "lat": 46.873329
  }
}, {
  "id": 2766725,
  "name": "Sankt Gallen",
  "country": "AT",
  "coord": {
    "lon": 14.6,
    "lat": 47.683331
  }
}, {
  "id": 7872997,
  "name": "Sankt Corona am Wechsel",
  "country": "AT",
  "coord": {
    "lon": 16.000549,
    "lat": 47.577549
  }
}, {
  "id": 2766757,
  "name": "Sankt Anton am Arlberg",
  "country": "AT",
  "coord": {
    "lon": 10.26372,
    "lat": 47.127499
  }
}, {
  "id": 2766905,
  "name": "Sachsenburg",
  "country": "AT",
  "coord": {
    "lon": 13.355,
    "lat": 46.82917
  }
}, {
  "id": 2767005,
  "name": "Ruden",
  "country": "AT",
  "coord": {
    "lon": 14.77639,
    "lat": 46.658329
  }
}, {
  "id": 2767074,
  "name": "Rothis",
  "country": "AT",
  "coord": {
    "lon": 9.65484,
    "lat": 47.29332
  }
}, {
  "id": 7873060,
  "name": "Rohr im Gebirge",
  "country": "AT",
  "coord": {
    "lon": 15.73702,
    "lat": 47.885422
  }
}, {
  "id": 7872901,
  "name": "Röhrenbach",
  "country": "AT",
  "coord": {
    "lon": 15.49357,
    "lat": 48.662849
  }
}, {
  "id": 2767681,
  "name": "Reisenberg",
  "country": "AT",
  "coord": {
    "lon": 16.51667,
    "lat": 48
  }
}, {
  "id": 7873032,
  "name": "Reinsberg",
  "country": "AT",
  "coord": {
    "lon": 15.08148,
    "lat": 47.992119
  }
}, {
  "id": 2767696,
  "name": "Reinsberg",
  "country": "AT",
  "coord": {
    "lon": 15.07067,
    "lat": 47.985668
  }
}, {
  "id": 2767907,
  "name": "Ratschendorf",
  "country": "AT",
  "coord": {
    "lon": 15.81583,
    "lat": 46.742222
  }
}, {
  "id": 2767987,
  "name": "Randegg",
  "country": "AT",
  "coord": {
    "lon": 14.97334,
    "lat": 48.011978
  }
}, {
  "id": 2768007,
  "name": "Ramsau im Zillertal",
  "country": "AT",
  "coord": {
    "lon": 11.87545,
    "lat": 47.203831
  }
}, {
  "id": 7872307,
  "name": "Raabau",
  "country": "AT",
  "coord": {
    "lon": 15.91384,
    "lat": 46.962189
  }
}, {
  "id": 7872889,
  "name": "Pulkau",
  "country": "AT",
  "coord": {
    "lon": 15.86013,
    "lat": 48.709671
  }
}, {
  "id": 2768263,
  "name": "Puhret",
  "country": "AT",
  "coord": {
    "lon": 13.71667,
    "lat": 48.033329
  }
}, {
  "id": 7873575,
  "name": "Puch bei Weiz",
  "country": "AT",
  "coord": {
    "lon": 15.72771,
    "lat": 47.220139
  }
}, {
  "id": 7872200,
  "name": "Puch bei Hallein",
  "country": "AT",
  "coord": {
    "lon": 13.12168,
    "lat": 47.734241
  }
}, {
  "id": 7873668,
  "name": "Prutz",
  "country": "AT",
  "coord": {
    "lon": 10.67599,
    "lat": 47.077621
  }
}, {
  "id": 2768295,
  "name": "Pruggern",
  "country": "AT",
  "coord": {
    "lon": 13.86667,
    "lat": 47.416672
  }
}, {
  "id": 2768316,
  "name": "Prinzersdorf",
  "country": "AT",
  "coord": {
    "lon": 15.51667,
    "lat": 48.200001
  }
}, {
  "id": 7871679,
  "name": "Preitenegg",
  "country": "AT",
  "coord": {
    "lon": 14.94735,
    "lat": 46.948711
  }
}, {
  "id": 7872765,
  "name": "Poggersdorf",
  "country": "AT",
  "coord": {
    "lon": 14.47562,
    "lat": 46.66243
  }
}, {
  "id": 7873666,
  "name": "Pfunds",
  "country": "AT",
  "coord": {
    "lon": 10.58164,
    "lat": 46.948799
  }
}, {
  "id": 7872115,
  "name": "Pfarrkirchen im Mühlkreis",
  "country": "AT",
  "coord": {
    "lon": 13.82664,
    "lat": 48.50375
  }
}, {
  "id": 7872144,
  "name": "Pfarrkirchen bei Bad Hall",
  "country": "AT",
  "coord": {
    "lon": 14.19189,
    "lat": 48.019562
  }
}, {
  "id": 2769344,
  "name": "Ottenschlag im Muhlkreis",
  "country": "AT",
  "coord": {
    "lon": 14.38471,
    "lat": 48.46632
  }
}, {
  "id": 7873276,
  "name": "Offenhausen",
  "country": "AT",
  "coord": {
    "lon": 13.84551,
    "lat": 48.153259
  }
}, {
  "id": 7873502,
  "name": "Öblarn",
  "country": "AT",
  "coord": {
    "lon": 14.02492,
    "lat": 47.42738
  }
}, {
  "id": 7872409,
  "name": "Obervogau",
  "country": "AT",
  "coord": {
    "lon": 15.58618,
    "lat": 46.745682
  }
}, {
  "id": 7871655,
  "name": "Obervellach",
  "country": "AT",
  "coord": {
    "lon": 13.19738,
    "lat": 46.93309
  }
}, {
  "id": 7872164,
  "name": "Oberndorf bei Schwanenstadt",
  "country": "AT",
  "coord": {
    "lon": 13.75406,
    "lat": 48.0606
  }
}, {
  "id": 7873301,
  "name": "Oberndorf bei Salzburg",
  "country": "AT",
  "coord": {
    "lon": 12.94163,
    "lat": 47.940189
  }
}, {
  "id": 7871614,
  "name": "Oberloisdorf",
  "country": "AT",
  "coord": {
    "lon": 16.498171,
    "lat": 47.442249
  }
}, {
  "id": 7872599,
  "name": "Oberlienz",
  "country": "AT",
  "coord": {
    "lon": 12.70049,
    "lat": 46.850788
  }
}, {
  "id": 2769994,
  "name": "Oberkurzheim",
  "country": "AT",
  "coord": {
    "lon": 14.58333,
    "lat": 47.23333
  }
}, {
  "id": 7873612,
  "name": "Oberhofen im Inntal",
  "country": "AT",
  "coord": {
    "lon": 11.0973,
    "lat": 47.273251
  }
}, {
  "id": 2770041,
  "name": "Oberhofen im Inntal",
  "country": "AT",
  "coord": {
    "lon": 11.08333,
    "lat": 47.299999
  }
}, {
  "id": 2770042,
  "name": "Oberhofen am Irrsee",
  "country": "AT",
  "coord": {
    "lon": 13.3,
    "lat": 47.950001
  }
}, {
  "id": 7872408,
  "name": "Oberhaag",
  "country": "AT",
  "coord": {
    "lon": 15.35343,
    "lat": 46.679409
  }
}, {
  "id": 2770086,
  "name": "Oberhaag",
  "country": "AT",
  "coord": {
    "lon": 15.33202,
    "lat": 46.686901
  }
}, {
  "id": 2770472,
  "name": "Nochling",
  "country": "AT",
  "coord": {
    "lon": 14.98123,
    "lat": 48.224331
  }
}, {
  "id": 2770482,
  "name": "Niklasdorf",
  "country": "AT",
  "coord": {
    "lon": 15.15,
    "lat": 47.383331
  }
}, {
  "id": 7872753,
  "name": "Neustift an der Lafnitz",
  "country": "AT",
  "coord": {
    "lon": 16.03647,
    "lat": 47.362961
  }
}, {
  "id": 2770772,
  "name": "Neuhaus am Klausenbach",
  "country": "AT",
  "coord": {
    "lon": 16.028891,
    "lat": 46.87056
  }
}, {
  "id": 7871536,
  "name": "Neufeld an der Leitha",
  "country": "AT",
  "coord": {
    "lon": 16.375071,
    "lat": 47.863708
  }
}, {
  "id": 2770897,
  "name": "Neckenmarkt",
  "country": "AT",
  "coord": {
    "lon": 16.549999,
    "lat": 47.599998
  }
}, {
  "id": 2770910,
  "name": "Nauders",
  "country": "AT",
  "coord": {
    "lon": 10.51667,
    "lat": 46.883331
  }
}, {
  "id": 7873691,
  "name": "Namlos",
  "country": "AT",
  "coord": {
    "lon": 10.6651,
    "lat": 47.359879
  }
}, {
  "id": 2771207,
  "name": "Mortantsch",
  "country": "AT",
  "coord": {
    "lon": 15.56667,
    "lat": 47.200001
  }
}, {
  "id": 7872243,
  "name": "Mittersill",
  "country": "AT",
  "coord": {
    "lon": 12.48588,
    "lat": 47.234741
  }
}, {
  "id": 2771533,
  "name": "Mittelberg",
  "country": "AT",
  "coord": {
    "lon": 10.15463,
    "lat": 47.3237
  }
}, {
  "id": 7872299,
  "name": "Merkendorf",
  "country": "AT",
  "coord": {
    "lon": 15.9116,
    "lat": 46.850731
  }
}, {
  "id": 2771764,
  "name": "Mauterndorf",
  "country": "AT",
  "coord": {
    "lon": 13.67884,
    "lat": 47.13451
  }
}, {
  "id": 7873073,
  "name": "Mauerbach",
  "country": "AT",
  "coord": {
    "lon": 16.172501,
    "lat": 48.252949
  }
}, {
  "id": 7873609,
  "name": "Matrei am Brenner",
  "country": "AT",
  "coord": {
    "lon": 11.45222,
    "lat": 47.128521
  }
}, {
  "id": 7871739,
  "name": "Markgrafneusiedl",
  "country": "AT",
  "coord": {
    "lon": 16.63883,
    "lat": 48.281181
  }
}, {
  "id": 7871820,
  "name": "Maria Taferl",
  "country": "AT",
  "coord": {
    "lon": 15.15958,
    "lat": 48.235229
  }
}, {
  "id": 2771940,
  "name": "Maria Enzersdorf",
  "country": "AT",
  "coord": {
    "lon": 16.283331,
    "lat": 48.099998
  }
}, {
  "id": 2771949,
  "name": "Maria-Anzbach",
  "country": "AT",
  "coord": {
    "lon": 15.93155,
    "lat": 48.190121
  }
}, {
  "id": 2772058,
  "name": "Maissau",
  "country": "AT",
  "coord": {
    "lon": 15.81667,
    "lat": 48.566669
  }
}, {
  "id": 7872242,
  "name": "Maishofen",
  "country": "AT",
  "coord": {
    "lon": 12.80358,
    "lat": 47.366131
  }
}, {
  "id": 7873380,
  "name": "Maierdorf",
  "country": "AT",
  "coord": {
    "lon": 15.85394,
    "lat": 46.902229
  }
}, {
  "id": 7873072,
  "name": "Leopoldsdorf",
  "country": "AT",
  "coord": {
    "lon": 16.39854,
    "lat": 48.10788
  }
}, {
  "id": 2772645,
  "name": "Leobersdorf",
  "country": "AT",
  "coord": {
    "lon": 16.216511,
    "lat": 47.927959
  }
}, {
  "id": 2772653,
  "name": "Lenzing",
  "country": "AT",
  "coord": {
    "lon": 13.60846,
    "lat": 47.973259
  }
}, {
  "id": 7872618,
  "name": "Lechaschau",
  "country": "AT",
  "coord": {
    "lon": 10.69546,
    "lat": 47.497478
  }
}, {
  "id": 2772796,
  "name": "Lechaschau",
  "country": "AT",
  "coord": {
    "lon": 10.7,
    "lat": 47.48333
  }
}, {
  "id": 2772891,
  "name": "Lassing",
  "country": "AT",
  "coord": {
    "lon": 14.26667,
    "lat": 47.51667
  }
}, {
  "id": 7871736,
  "name": "Lassee",
  "country": "AT",
  "coord": {
    "lon": 16.82222,
    "lat": 48.233189
  }
}, {
  "id": 7871936,
  "name": "Lanzenkirchen",
  "country": "AT",
  "coord": {
    "lon": 16.256689,
    "lat": 47.73888
  }
}, {
  "id": 2776496,
  "name": "Politischer Bezirk Hermagor",
  "country": "AT",
  "coord": {
    "lon": 13.13333,
    "lat": 46.599998
  }
}, {
  "id": 7872756,
  "name": "Kirchbach",
  "country": "AT",
  "coord": {
    "lon": 13.1659,
    "lat": 46.638401
  }
}, {
  "id": 2775307,
  "name": "Imst",
  "country": "AT",
  "coord": {
    "lon": 10.73974,
    "lat": 47.245041
  }
}, {
  "id": 7872837,
  "name": "Hernstein",
  "country": "AT",
  "coord": {
    "lon": 16.08,
    "lat": 47.913319
  }
}, {
  "id": 2776485,
  "name": "Hernstein",
  "country": "AT",
  "coord": {
    "lon": 16.10561,
    "lat": 47.89465
  }
}, {
  "id": 2027487,
  "name": "Arkhara",
  "country": "RU",
  "coord": {
    "lon": 130.084198,
    "lat": 49.4212
  }
}, {
  "id": 498817,
  "name": "Saint Petersburg",
  "country": "RU",
  "coord": {
    "lon": 30.264168,
    "lat": 59.894444
  }
}, {
  "id": 2643743,
  "name": "London",
  "country": "GB",
  "coord": {
    "lon": -0.12574,
    "lat": 51.50853
  }
}, {
  "id": 539907,
  "name": "Kudepsta",
  "country": "RU",
  "coord": {
    "lon": 39.896389,
    "lat": 43.494446
  }
}, {
  "id": 6217081,
  "name": "Ashburton",
  "country": "NZ",
  "coord": {
    "lon": 171.730103,
    "lat": -43.898338
  }
}, {
  "id": 964078,
  "name": "Prince Albert",
  "country": "ZA",
  "coord": {
    "lon": 22.02993,
    "lat": -33.22263
  }
}, {
  "id": 939702,
  "name": "Williston",
  "country": "ZA",
  "coord": {
    "lon": 20.91544,
    "lat": -31.340481
  }
}, {
  "id": 944024,
  "name": "Victoria West",
  "country": "ZA",
  "coord": {
    "lon": 23.114611,
    "lat": -31.403641
  }
}, {
  "id": 988429,
  "name": "Koffiefontein",
  "country": "ZA",
  "coord": {
    "lon": 25.00309,
    "lat": -29.40661
  }
}, {
  "id": 1548958,
  "name": "Xiaoshi",
  "country": "CN",
  "coord": {
    "lon": 118.781479,
    "lat": 32.096531
  }
}, {
  "id": 6544490,
  "name": "Usera",
  "country": "ES",
  "coord": {
    "lon": -3.70035,
    "lat": 40.38866
  }
}, {
  "id": 3090990,
  "name": "Niegowonice",
  "country": "PL",
  "coord": {
    "lon": 19.42263,
    "lat": 50.389091
  }
}, {
  "id": 2892051,
  "name": "Kaulsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.58871,
    "lat": 52.517319
  }
}, {
  "id": 2652249,
  "name": "Coulsdon",
  "country": "GB",
  "coord": {
    "lon": -0.14088,
    "lat": 51.320019
  }
}, {
  "id": 2650228,
  "name": "Edgware",
  "country": "GB",
  "coord": {
    "lon": -0.27539,
    "lat": 51.612801
  }
}, {
  "id": 2633975,
  "name": "Wickham",
  "country": "GB",
  "coord": {
    "lon": -1.18815,
    "lat": 50.899239
  }
}, {
  "id": 2640331,
  "name": "Pevensey",
  "country": "GB",
  "coord": {
    "lon": 0.33963,
    "lat": 50.81966
  }
}, {
  "id": 996409,
  "name": "Himeville",
  "country": "ZA",
  "coord": {
    "lon": 29.513611,
    "lat": -29.74674
  }
}, {
  "id": 3116156,
  "name": "Moratalaz",
  "country": "ES",
  "coord": {
    "lon": -3.65,
    "lat": 40.416672
  }
}, {
  "id": 6176421,
  "name": "Wasaga Beach",
  "country": "CA",
  "coord": {
    "lon": -80.016373,
    "lat": 44.5168
  }
}, {
  "id": 3027857,
  "name": "Cernay",
  "country": "FR",
  "coord": {
    "lon": 7.17699,
    "lat": 47.8097
  }
}, {
  "id": 2641290,
  "name": "Northolt",
  "country": "GB",
  "coord": {
    "lon": -0.36778,
    "lat": 51.54855
  }
}, {
  "id": 1002108,
  "name": "Germiston",
  "country": "ZA",
  "coord": {
    "lon": 28.176649,
    "lat": -26.23481
  }
}, {
  "id": 2508813,
  "name": "Adrar",
  "country": "DZ",
  "coord": {
    "lon": -0.29388,
    "lat": 27.87429
  }
}, {
  "id": 2151649,
  "name": "Richmond",
  "country": "AU",
  "coord": {
    "lon": 145.001755,
    "lat": -37.818192
  }
}, {
  "id": 2171000,
  "name": "Collingwood",
  "country": "AU",
  "coord": {
    "lon": 144.983337,
    "lat": -37.799999
  }
}, {
  "id": 2154855,
  "name": "North Sydney",
  "country": "AU",
  "coord": {
    "lon": 151.207214,
    "lat": -33.840561
  }
}, {
  "id": 2166584,
  "name": "Fitzroy",
  "country": "AU",
  "coord": {
    "lon": 144.983337,
    "lat": -37.783329
  }
}, {
  "id": 6943577,
  "name": "Fortitude Valley",
  "country": "AU",
  "coord": {
    "lon": 153.034744,
    "lat": -27.45718
  }
}, {
  "id": 2065337,
  "name": "Mundaring",
  "country": "AU",
  "coord": {
    "lon": 116.166672,
    "lat": -31.9
  }
}, {
  "id": 2176264,
  "name": "Belmont",
  "country": "AU",
  "coord": {
    "lon": 153.116669,
    "lat": -27.5
  }
}, {
  "id": 1809104,
  "name": "Haidian",
  "country": "CN",
  "coord": {
    "lon": 116.299171,
    "lat": 39.979172
  }
}, {
  "id": 6834870,
  "name": "Haitou",
  "country": "CN",
  "coord": {
    "lon": 110.38295,
    "lat": 21.20347
  }
}, {
  "id": 2033115,
  "name": "Zhenzhuquan",
  "country": "CN",
  "coord": {
    "lon": 116.419724,
    "lat": 40.55389
  }
}, {
  "id": 2033458,
  "name": "Yanqing",
  "country": "CN",
  "coord": {
    "lon": 115.966667,
    "lat": 40.466671
  }
}, {
  "id": 2111401,
  "name": "Onagawa Cho",
  "country": "JP",
  "coord": {
    "lon": 141.449997,
    "lat": 38.438332
  }
}, {
  "id": 2991935,
  "name": "Montussan",
  "country": "FR",
  "coord": {
    "lon": -0.42181,
    "lat": 44.880569
  }
}, {
  "id": 2743177,
  "name": "Aldeia de Joanes",
  "country": "PT",
  "coord": {
    "lon": -7.51694,
    "lat": 40.13905
  }
}, {
  "id": 261807,
  "name": "Igoumenitsa",
  "country": "GR",
  "coord": {
    "lon": 20.26556,
    "lat": 39.503891
  }
}, {
  "id": 2634341,
  "name": "City of Westminster",
  "country": "GB",
  "coord": {
    "lon": -0.11667,
    "lat": 51.5
  }
}, {
  "id": 2636147,
  "name": "Teddington",
  "country": "GB",
  "coord": {
    "lon": -0.33053,
    "lat": 51.422329
  }
}, {
  "id": 2637490,
  "name": "Southall",
  "country": "GB",
  "coord": {
    "lon": -0.3713,
    "lat": 51.508961
  }
}, {
  "id": 2637063,
  "name": "Stanmore",
  "country": "GB",
  "coord": {
    "lon": -0.31667,
    "lat": 51.616669
  }
}, {
  "id": 2646004,
  "name": "Isleworth",
  "country": "GB",
  "coord": {
    "lon": -0.34246,
    "lat": 51.475182
  }
}, {
  "id": 2640275,
  "name": "Pinner",
  "country": "GB",
  "coord": {
    "lon": -0.38216,
    "lat": 51.593842
  }
}, {
  "id": 2647972,
  "name": "Greenford",
  "country": "GB",
  "coord": {
    "lon": -0.35508,
    "lat": 51.52866
  }
}, {
  "id": 2647550,
  "name": "Hampton",
  "country": "GB",
  "coord": {
    "lon": -0.36684,
    "lat": 51.421051
  }
}, {
  "id": 2633655,
  "name": "Woodford Green",
  "country": "GB",
  "coord": {
    "lon": 0.02329,
    "lat": 51.609379
  }
}, {
  "id": 3517270,
  "name": "Santa Maria Chimalhuacan",
  "country": "MX",
  "coord": {
    "lon": -98.900002,
    "lat": 19.41667
  }
}, {
  "id": 2870310,
  "name": "Moabit",
  "country": "DE",
  "coord": {
    "lon": 13.33903,
    "lat": 52.526348
  }
}, {
  "id": 2835411,
  "name": "Schwaigern",
  "country": "DE",
  "coord": {
    "lon": 9.055,
    "lat": 49.14389
  }
}, {
  "id": 2914548,
  "name": "Gruibingen",
  "country": "DE",
  "coord": {
    "lon": 9.64389,
    "lat": 48.59483
  }
}, {
  "id": 2924770,
  "name": "Friedenau",
  "country": "DE",
  "coord": {
    "lon": 13.32813,
    "lat": 52.471329
  }
}, {
  "id": 2951935,
  "name": "Baumschulenweg",
  "country": "DE",
  "coord": {
    "lon": 13.48333,
    "lat": 52.466671
  }
}, {
  "id": 2873589,
  "name": "Marienfelde",
  "country": "DE",
  "coord": {
    "lon": 13.36723,
    "lat": 52.418678
  }
}, {
  "id": 2948064,
  "name": "Blankenfelde",
  "country": "DE",
  "coord": {
    "lon": 13.39057,
    "lat": 52.618629
  }
}, {
  "id": 2896592,
  "name": "Ilfeld",
  "country": "DE",
  "coord": {
    "lon": 10.78333,
    "lat": 51.583328
  }
}, {
  "id": 2855373,
  "name": "Partenheim",
  "country": "DE",
  "coord": {
    "lon": 8.08222,
    "lat": 49.883888
  }
}, {
  "id": 2892811,
  "name": "Karlshorst",
  "country": "DE",
  "coord": {
    "lon": 13.53185,
    "lat": 52.484192
  }
}, {
  "id": 2843350,
  "name": "Rudow",
  "country": "DE",
  "coord": {
    "lon": 13.48529,
    "lat": 52.424068
  }
}, {
  "id": 2953541,
  "name": "Bad Blankenburg",
  "country": "DE",
  "coord": {
    "lon": 11.26667,
    "lat": 50.683331
  }
}, {
  "id": 2862888,
  "name": "Niederschonhausen",
  "country": "DE",
  "coord": {
    "lon": 13.40272,
    "lat": 52.584831
  }
}, {
  "id": 2924577,
  "name": "Friedrichshagen",
  "country": "DE",
  "coord": {
    "lon": 13.62463,
    "lat": 52.45052
  }
}, {
  "id": 2838009,
  "name": "Schmargendorf",
  "country": "DE",
  "coord": {
    "lon": 13.29071,
    "lat": 52.47517
  }
}, {
  "id": 2844910,
  "name": "Rosenthal",
  "country": "DE",
  "coord": {
    "lon": 13.37774,
    "lat": 52.599758
  }
}, {
  "id": 2907298,
  "name": "Heinersdorf",
  "country": "DE",
  "coord": {
    "lon": 13.43757,
    "lat": 52.571732
  }
}, {
  "id": 3337408,
  "name": "Gropiusstadt",
  "country": "DE",
  "coord": {
    "lon": 13.46667,
    "lat": 52.424999
  }
}, {
  "id": 2880498,
  "name": "Lankwitz",
  "country": "DE",
  "coord": {
    "lon": 13.3459,
    "lat": 52.43623
  }
}, {
  "id": 2942341,
  "name": "Buchholz",
  "country": "DE",
  "coord": {
    "lon": 13.43019,
    "lat": 52.602421
  }
}, {
  "id": 2949073,
  "name": "Biesdorf",
  "country": "DE",
  "coord": {
    "lon": 13.5534,
    "lat": 52.50906
  }
}, {
  "id": 2959441,
  "name": "Adlershof",
  "country": "DE",
  "coord": {
    "lon": 13.54825,
    "lat": 52.435478
  }
}, {
  "id": 2947022,
  "name": "Bogenhausen",
  "country": "DE",
  "coord": {
    "lon": 11.61667,
    "lat": 48.150002
  }
}, {
  "id": 2874455,
  "name": "Mahlsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.61373,
    "lat": 52.50935
  }
}, {
  "id": 6947479,
  "name": "Koeln-Ehrenfeld",
  "country": "DE",
  "coord": {
    "lon": 6.92059,
    "lat": 50.945599
  }
}, {
  "id": 2946887,
  "name": "Bohnsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.57339,
    "lat": 52.394341
  }
}, {
  "id": 2814196,
  "name": "Wannsee",
  "country": "DE",
  "coord": {
    "lon": 13.15531,
    "lat": 52.419151
  }
}, {
  "id": 2873292,
  "name": "Markt Nordheim",
  "country": "DE",
  "coord": {
    "lon": 10.35,
    "lat": 49.583328
  }
}, {
  "id": 2829962,
  "name": "Staaken",
  "country": "DE",
  "coord": {
    "lon": 13.13333,
    "lat": 52.533329
  }
}, {
  "id": 2859103,
  "name": "Oberschoneweide",
  "country": "DE",
  "coord": {
    "lon": 13.52108,
    "lat": 52.46106
  }
}, {
  "id": 2862890,
  "name": "Niederschoneweide",
  "country": "DE",
  "coord": {
    "lon": 13.5,
    "lat": 52.450001
  }
}, {
  "id": 2873606,
  "name": "Mariendorf",
  "country": "DE",
  "coord": {
    "lon": 13.38109,
    "lat": 52.437801
  }
}, {
  "id": 2868837,
  "name": "Muggelheim",
  "country": "DE",
  "coord": {
    "lon": 13.66403,
    "lat": 52.411369
  }
}, {
  "id": 2837672,
  "name": "Schmockwitz",
  "country": "DE",
  "coord": {
    "lon": 13.64948,
    "lat": 52.37513
  }
}, {
  "id": 2512465,
  "name": "Playa Blanca",
  "country": "ES",
  "coord": {
    "lon": -13.82814,
    "lat": 28.86426
  }
}, {
  "id": 3106054,
  "name": "Vicalvaro",
  "country": "ES",
  "coord": {
    "lon": -3.6,
    "lat": 40.400002
  }
}, {
  "id": 3890338,
  "name": "El Tabo",
  "country": "CL",
  "coord": {
    "lon": -71.666672,
    "lat": -33.450001
  }
}, {
  "id": 3433359,
  "name": "Ituzaingo",
  "country": "AR",
  "coord": {
    "lon": -58.65836,
    "lat": -34.655819
  }
}, {
  "id": 2181108,
  "name": "Tinwald",
  "country": "NZ",
  "coord": {
    "lon": 171.716675,
    "lat": -43.916672
  }
}, {
  "id": 2659262,
  "name": "Pailly",
  "country": "CH",
  "coord": {
    "lon": 6.6754,
    "lat": 46.701229
  }
}, {
  "id": 2661591,
  "name": "Bavois",
  "country": "CH",
  "coord": {
    "lon": 6.5671,
    "lat": 46.684029
  }
}, {
  "id": 2660540,
  "name": "Grancy",
  "country": "CH",
  "coord": {
    "lon": 6.46391,
    "lat": 46.59214
  }
}, {
  "id": 2661633,
  "name": "Ballens",
  "country": "CH",
  "coord": {
    "lon": 6.3731,
    "lat": 46.554852
  }
}, {
  "id": 2659638,
  "name": "Mollens",
  "country": "CH",
  "coord": {
    "lon": 6.3632,
    "lat": 46.577599
  }
}, {
  "id": 2658588,
  "name": "Silvaplana",
  "country": "CH",
  "coord": {
    "lon": 9.79514,
    "lat": 46.458099
  }
}, {
  "id": 2658867,
  "name": "Saint-Livres",
  "country": "CH",
  "coord": {
    "lon": 6.38753,
    "lat": 46.507938
  }
}, {
  "id": 2659258,
  "name": "Pampigny",
  "country": "CH",
  "coord": {
    "lon": 6.42941,
    "lat": 46.580929
  }
}, {
  "id": 2658543,
  "name": "Sottens",
  "country": "CH",
  "coord": {
    "lon": 6.74197,
    "lat": 46.655209
  }
}, {
  "id": 973709,
  "name": "Mossel Bay",
  "country": "ZA",
  "coord": {
    "lon": 22.146049,
    "lat": -34.183071
  }
}, {
  "id": 3363094,
  "name": "Paarl",
  "country": "ZA",
  "coord": {
    "lon": 18.975229,
    "lat": -33.73378
  }
}, {
  "id": 984998,
  "name": "Ladysmith",
  "country": "ZA",
  "coord": {
    "lon": 29.7827,
    "lat": -28.553909
  }
}, {
  "id": 1004962,
  "name": "Estcourt",
  "country": "ZA",
  "coord": {
    "lon": 29.86619,
    "lat": -29.01269
  }
}, {
  "id": 996195,
  "name": "Hoedspruit",
  "country": "ZA",
  "coord": {
    "lon": 30.95332,
    "lat": -24.351219
  }
}, {
  "id": 980595,
  "name": "Mafikeng",
  "country": "ZA",
  "coord": {
    "lon": 25.644211,
    "lat": -25.865219
  }
}, {
  "id": 961152,
  "name": "Riversdale",
  "country": "ZA",
  "coord": {
    "lon": 21.25725,
    "lat": -34.093449
  }
}, {
  "id": 976764,
  "name": "Meyerton",
  "country": "ZA",
  "coord": {
    "lon": 28.019501,
    "lat": -26.55987
  }
}, {
  "id": 972803,
  "name": "Mtubatuba",
  "country": "ZA",
  "coord": {
    "lon": 32.18483,
    "lat": -28.417891
  }
}, {
  "id": 1019933,
  "name": "Bergville",
  "country": "ZA",
  "coord": {
    "lon": 29.35187,
    "lat": -28.73122
  }
}, {
  "id": 1022145,
  "name": "Ashton",
  "country": "ZA",
  "coord": {
    "lon": 20.055941,
    "lat": -33.83136
  }
}, {
  "id": 994418,
  "name": "Ixopo",
  "country": "ZA",
  "coord": {
    "lon": 30.08333,
    "lat": -30.15
  }
}, {
  "id": 978944,
  "name": "Marble Hall",
  "country": "ZA",
  "coord": {
    "lon": 29.29068,
    "lat": -24.96627
  }
}, {
  "id": 944531,
  "name": "Ventersdorp",
  "country": "ZA",
  "coord": {
    "lon": 26.822229,
    "lat": -26.314011
  }
}, {
  "id": 985004,
  "name": "Lady Grey",
  "country": "ZA",
  "coord": {
    "lon": 27.216129,
    "lat": -30.71084
  }
}, {
  "id": 1010967,
  "name": "Dendron",
  "country": "ZA",
  "coord": {
    "lon": 29.323709,
    "lat": -23.36669
  }
}, {
  "id": 1008612,
  "name": "Douglas",
  "country": "ZA",
  "coord": {
    "lon": 23.7743,
    "lat": -29.055309
  }
}, {
  "id": 997861,
  "name": "Harding",
  "country": "ZA",
  "coord": {
    "lon": 29.88401,
    "lat": -30.576429
  }
}, {
  "id": 1012528,
  "name": "Creighton",
  "country": "ZA",
  "coord": {
    "lon": 29.83955,
    "lat": -30.027201
  }
}, {
  "id": 1002917,
  "name": "Ganyesa",
  "country": "ZA",
  "coord": {
    "lon": 24.176121,
    "lat": -26.596121
  }
}, {
  "id": 1011062,
  "name": "Delareyville",
  "country": "ZA",
  "coord": {
    "lon": 25.45907,
    "lat": -26.68638
  }
}, {
  "id": 2244322,
  "name": "Touba",
  "country": "SN",
  "coord": {
    "lon": -15.88333,
    "lat": 14.85
  }
}, {
  "id": 3090285,
  "name": "Ogrodzieniec",
  "country": "PL",
  "coord": {
    "lon": 19.519871,
    "lat": 50.451771
  }
}, {
  "id": 626064,
  "name": "Lyozna",
  "country": "BY",
  "coord": {
    "lon": 30.795561,
    "lat": 55.02486
  }
}, {
  "id": 730987,
  "name": "Gulubovo",
  "country": "BG",
  "coord": {
    "lon": 25.85,
    "lat": 42.133331
  }
}, {
  "id": 662986,
  "name": "Victoria",
  "country": "RO",
  "coord": {
    "lon": 24.683331,
    "lat": 45.73333
  }
}, {
  "id": 668997,
  "name": "Reghin",
  "country": "RO",
  "coord": {
    "lon": 24.70216,
    "lat": 46.7742
  }
}, {
  "id": 680636,
  "name": "Cosambesti",
  "country": "RO",
  "coord": {
    "lon": 27.43441,
    "lat": 44.559292
  }
}, {
  "id": 681850,
  "name": "Campulung",
  "country": "RO",
  "coord": {
    "lon": 25.049999,
    "lat": 45.26667
  }
}, {
  "id": 677463,
  "name": "Onesti",
  "country": "RO",
  "coord": {
    "lon": 26.75,
    "lat": 46.25
  }
}, {
  "id": 681862,
  "name": "Campina",
  "country": "RO",
  "coord": {
    "lon": 25.73333,
    "lat": 45.133331
  }
}, {
  "id": 679119,
  "name": "Domnesti",
  "country": "RO",
  "coord": {
    "lon": 25.91972,
    "lat": 44.399441
  }
}, {
  "id": 685836,
  "name": "Baia de Arama",
  "country": "RO",
  "coord": {
    "lon": 22.806669,
    "lat": 45
  }
}, {
  "id": 662284,
  "name": "Zarnesti",
  "country": "RO",
  "coord": {
    "lon": 25.299999,
    "lat": 45.549999
  }
}, {
  "id": 668882,
  "name": "Ramnicelu",
  "country": "RO",
  "coord": {
    "lon": 27.116671,
    "lat": 45.366669
  }
}, {
  "id": 683842,
  "name": "Brastavatu",
  "country": "RO",
  "coord": {
    "lon": 24.4,
    "lat": 43.916672
  }
}, {
  "id": 662691,
  "name": "Visina Noua",
  "country": "RO",
  "coord": {
    "lon": 24.41667,
    "lat": 43.866669
  }
}, {
  "id": 673090,
  "name": "Marsani",
  "country": "RO",
  "coord": {
    "lon": 24.01667,
    "lat": 44.01667
  }
}, {
  "id": 672084,
  "name": "Obarsia",
  "country": "RO",
  "coord": {
    "lon": 24.33333,
    "lat": 43.883331
  }
}, {
  "id": 2762077,
  "name": "Waidhofen an der Ybbs",
  "country": "AT",
  "coord": {
    "lon": 14.77361,
    "lat": 47.960041
  }
}, {
  "id": 2766080,
  "name": "Scheibbs",
  "country": "AT",
  "coord": {
    "lon": 15.16817,
    "lat": 48.004742
  }
}, {
  "id": 782519,
  "name": "Librazhd",
  "country": "AL",
  "coord": {
    "lon": 20.315001,
    "lat": 41.17944
  }
}, {
  "id": 781988,
  "name": "Pogradec",
  "country": "AL",
  "coord": {
    "lon": 20.6525,
    "lat": 40.9025
  }
}, {
  "id": 2562746,
  "name": "Imdina",
  "country": "MT",
  "coord": {
    "lon": 14.4025,
    "lat": 35.88694
  }
}, {
  "id": 3691474,
  "name": "Tarapoto",
  "country": "PE",
  "coord": {
    "lon": -76.365562,
    "lat": -6.50139
  }
}, {
  "id": 3926282,
  "name": "Ventanilla",
  "country": "PE",
  "coord": {
    "lon": -77.118332,
    "lat": -11.87528
  }
}, {
  "id": 3928245,
  "name": "Surco",
  "country": "PE",
  "coord": {
    "lon": -77.01667,
    "lat": -12.15
  }
}, {
  "id": 3945612,
  "name": "Carabayllo",
  "country": "PE",
  "coord": {
    "lon": -77.037781,
    "lat": -11.85333
  }
}, {
  "id": 3947437,
  "name": "Aplao",
  "country": "PE",
  "coord": {
    "lon": -72.493889,
    "lat": -16.07583
  }
}, {
  "id": 3930835,
  "name": "Quillabamba",
  "country": "PE",
  "coord": {
    "lon": -72.783333,
    "lat": -12.81667
  }
}, {
  "id": 3696372,
  "name": "Huari",
  "country": "PE",
  "coord": {
    "lon": -77.23333,
    "lat": -9.33333
  }
}, {
  "id": 3944665,
  "name": "Chaclacayo",
  "country": "PE",
  "coord": {
    "lon": -76.767502,
    "lat": -11.98278
  }
}, {
  "id": 3931251,
  "name": "Punta Hermosa",
  "country": "PE",
  "coord": {
    "lon": -76.816673,
    "lat": -12.33333
  }
}, {
  "id": 3693461,
  "name": "Pomalca",
  "country": "PE",
  "coord": {
    "lon": -79.777222,
    "lat": -6.7675
  }
}, {
  "id": 3928547,
  "name": "Socabaya",
  "country": "PE",
  "coord": {
    "lon": -71.52758,
    "lat": -16.470249
  }
}, {
  "id": 2056999,
  "name": "Oesapa",
  "country": "ID",
  "coord": {
    "lon": 123.650002,
    "lat": -10.15
  }
}, {
  "id": 2034449,
  "name": "Tianzhu",
  "country": "CN",
  "coord": {
    "lon": 116.556107,
    "lat": 40.066669
  }
}, {
  "id": 1004303,
  "name": "Ficksburg",
  "country": "ZA",
  "coord": {
    "lon": 27.875059,
    "lat": -28.872
  }
}, {
  "id": 3128832,
  "name": "Barajas de Madrid",
  "country": "ES",
  "coord": {
    "lon": -3.57777,
    "lat": 40.47366
  }
}, {
  "id": 598392,
  "name": "Karmelava",
  "country": "LT",
  "coord": {
    "lon": 24.066669,
    "lat": 54.966671
  }
}, {
  "id": 2653229,
  "name": "Chessington",
  "country": "GB",
  "coord": {
    "lon": -0.30427,
    "lat": 51.3624
  }
}, {
  "id": 3696448,
  "name": "Huanchaco",
  "country": "PE",
  "coord": {
    "lon": -79.116669,
    "lat": -8.08333
  }
}, {
  "id": 3929520,
  "name": "San Juan",
  "country": "PE",
  "coord": {
    "lon": -75.162216,
    "lat": -15.36528
  }
}, {
  "id": 3930769,
  "name": "Quince Mil",
  "country": "PE",
  "coord": {
    "lon": -70.754013,
    "lat": -13.23092
  }
}, {
  "id": 6559994,
  "name": "Buenos Aires",
  "country": "PE",
  "coord": {
    "lon": -78.497498,
    "lat": -9.12417
  }
}, {
  "id": 501847,
  "name": "Rochegda",
  "country": "RU",
  "coord": {
    "lon": 43.25,
    "lat": 62.799999
  }
}, {
  "id": 569339,
  "name": "Cheremisinovo",
  "country": "RU",
  "coord": {
    "lon": 37.264599,
    "lat": 51.885502
  }
}, {
  "id": 1496889,
  "name": "Novoomskiy",
  "country": "RU",
  "coord": {
    "lon": 73.301743,
    "lat": 54.841518
  }
}, {
  "id": 2768274,
  "name": "Puchenstuben",
  "country": "AT",
  "coord": {
    "lon": 15.28748,
    "lat": 47.928188
  }
}, {
  "id": 2771725,
  "name": "Mayrhofen",
  "country": "AT",
  "coord": {
    "lon": 11.86667,
    "lat": 47.166672
  }
}, {
  "id": 2771893,
  "name": "Mariazell",
  "country": "AT",
  "coord": {
    "lon": 15.31639,
    "lat": 47.77306
  }
}, {
  "id": 728825,
  "name": "Nesebar",
  "country": "BG",
  "coord": {
    "lon": 27.736019,
    "lat": 42.65921
  }
}, {
  "id": 1806421,
  "name": "Jiangan",
  "country": "CN",
  "coord": {
    "lon": 114.306831,
    "lat": 30.6089
  }
}, {
  "id": 2864067,
  "name": "Neustadt",
  "country": "DE",
  "coord": {
    "lon": 9.98558,
    "lat": 53.55196
  }
}, {
  "id": 2911288,
  "name": "Hamburg-Mitte",
  "country": "DE",
  "coord": {
    "lon": 10.01667,
    "lat": 53.549999
  }
}, {
  "id": 2613539,
  "name": "Sherrebek",
  "country": "DK",
  "coord": {
    "lon": 8.76901,
    "lat": 55.157349
  }
}, {
  "id": 2616933,
  "name": "Middelfart",
  "country": "DK",
  "coord": {
    "lon": 9.73054,
    "lat": 55.505909
  }
}, {
  "id": 2622666,
  "name": "Ejby",
  "country": "DK",
  "coord": {
    "lon": 9.92973,
    "lat": 55.430099
  }
}, {
  "id": 2978954,
  "name": "Saint-Laurent",
  "country": "FR",
  "coord": {
    "lon": 4.77193,
    "lat": 49.764488
  }
}, {
  "id": 2981274,
  "name": "Saint-Bris-le-Vineux",
  "country": "FR",
  "coord": {
    "lon": 3.64922,
    "lat": 47.743961
  }
}, {
  "id": 7302683,
  "name": "Southbank",
  "country": "AU",
  "coord": {
    "lon": 144.96434,
    "lat": -37.8228
  }
}, {
  "id": 2637347,
  "name": "South Petherton",
  "country": "GB",
  "coord": {
    "lon": -2.80708,
    "lat": 50.948292
  }
}, {
  "id": 2647297,
  "name": "Hawick",
  "country": "GB",
  "coord": {
    "lon": -2.78666,
    "lat": 55.422729
  }
}, {
  "id": 2648299,
  "name": "Gorleston-on-Sea",
  "country": "GB",
  "coord": {
    "lon": 1.73069,
    "lat": 52.573009
  }
}, {
  "id": 2648928,
  "name": "Galashiels",
  "country": "GB",
  "coord": {
    "lon": -2.80695,
    "lat": 55.614578
  }
}, {
  "id": 2654578,
  "name": "Bromyard",
  "country": "GB",
  "coord": {
    "lon": -2.50875,
    "lat": 52.190189
  }
}, {
  "id": 3345093,
  "name": "Looe",
  "country": "GB",
  "coord": {
    "lon": -4.45418,
    "lat": 50.35778
  }
}, {
  "id": 3166440,
  "name": "Solbiate Arno",
  "country": "IT",
  "coord": {
    "lon": 8.81433,
    "lat": 45.72197
  }
}, {
  "id": 3167329,
  "name": "San Teodoro",
  "country": "IT",
  "coord": {
    "lon": 9.67344,
    "lat": 40.77037
  }
}, {
  "id": 3170220,
  "name": "Ponte San Nicolo",
  "country": "IT",
  "coord": {
    "lon": 11.92111,
    "lat": 45.370491
  }
}, {
  "id": 3171502,
  "name": "Pantigliate",
  "country": "IT",
  "coord": {
    "lon": 9.3522,
    "lat": 45.435261
  }
}, {
  "id": 3173985,
  "name": "Marcon",
  "country": "IT",
  "coord": {
    "lon": 12.29889,
    "lat": 45.564442
  }
}, {
  "id": 3174662,
  "name": "Livo",
  "country": "IT",
  "coord": {
    "lon": 9.30414,
    "lat": 46.168491
  }
}, {
  "id": 3177672,
  "name": "Curno",
  "country": "IT",
  "coord": {
    "lon": 9.60705,
    "lat": 45.68898
  }
}, {
  "id": 3180246,
  "name": "Casalbore",
  "country": "IT",
  "coord": {
    "lon": 15.00674,
    "lat": 41.233921
  }
}, {
  "id": 3180389,
  "name": "Carugate",
  "country": "IT",
  "coord": {
    "lon": 9.34375,
    "lat": 45.54977
  }
}, {
  "id": 3182410,
  "name": "Baranzate",
  "country": "IT",
  "coord": {
    "lon": 9.11724,
    "lat": 45.527168
  }
}, {
  "id": 3182732,
  "name": "Asolo",
  "country": "IT",
  "coord": {
    "lon": 11.9117,
    "lat": 45.792301
  }
}, {
  "id": 6534466,
  "name": "Assago",
  "country": "IT",
  "coord": {
    "lon": 9.12565,
    "lat": 45.408871
  }
}, {
  "id": 6534799,
  "name": "Cavaso del Tomba",
  "country": "IT",
  "coord": {
    "lon": 11.8984,
    "lat": 45.860699
  }
}, {
  "id": 6535147,
  "name": "Busnago",
  "country": "IT",
  "coord": {
    "lon": 9.46375,
    "lat": 45.616482
  }
}, {
  "id": 6535768,
  "name": "Caponago",
  "country": "IT",
  "coord": {
    "lon": 9.37585,
    "lat": 45.566479
  }
}, {
  "id": 2206939,
  "name": "Bluff",
  "country": "NZ",
  "coord": {
    "lon": 168.333328,
    "lat": -46.599998
  }
}, {
  "id": 3093768,
  "name": "Lazy",
  "country": "PL",
  "coord": {
    "lon": 19.39465,
    "lat": 50.427689
  }
}, {
  "id": 6544494,
  "name": "City Center",
  "country": "ES",
  "coord": {
    "lon": -3.70275,
    "lat": 40.418308
  }
}, {
  "id": 688105,
  "name": "Yevpatoriya",
  "country": "UA",
  "coord": {
    "lon": 33.355831,
    "lat": 45.197224
  }
}, {
  "id": 703845,
  "name": "Kryvyy Rih",
  "country": "UA",
  "coord": {
    "lon": 33.349998,
    "lat": 47.916668
  }
}, {
  "id": 487928,
  "name": "Staryy Oskol",
  "country": "RU",
  "coord": {
    "lon": 37.841667,
    "lat": 51.296665
  }
}, {
  "id": 2171085,
  "name": "Coffs Harbour",
  "country": "AU",
  "coord": {
    "lon": 153.133331,
    "lat": -30.299999
  }
}, {
  "id": 1259229,
  "name": "Pune",
  "country": "IN",
  "coord": {
    "lon": 73.855347,
    "lat": 18.519569
  }
}, {
  "id": 2766824,
  "name": "Salzburg",
  "country": "AT",
  "coord": {
    "lon": 13.04399,
    "lat": 47.799412
  }
}, {
  "id": 3531673,
  "name": "Cancun",
  "country": "MX",
  "coord": {
    "lon": -86.846558,
    "lat": 21.17429
  }
}, {
  "id": 786714,
  "name": "Pristina",
  "country": "XK",
  "coord": {
    "lon": 21.16688,
    "lat": 42.672722
  }
}, {
  "id": 1806097,
  "name": "Ningde",
  "country": "CN",
  "coord": {
    "lon": 119.522781,
    "lat": 26.661671
  }
}, {
  "id": 1807544,
  "name": "Daxing",
  "country": "CN",
  "coord": {
    "lon": 116.32917,
    "lat": 39.72139
  }
}, {
  "id": 3164603,
  "name": "Venezia",
  "country": "IT",
  "coord": {
    "lon": 12.32667,
    "lat": 45.43861
  }
}, {
  "id": 5964347,
  "name": "Grande Prairie",
  "country": "CA",
  "coord": {
    "lon": -118.802711,
    "lat": 55.166672
  }
}, {
  "id": 2892518,
  "name": "Kassel",
  "country": "DE",
  "coord": {
    "lon": 9.5,
    "lat": 51.316669
  }
}, {
  "id": 2842647,
  "name": "Saarbrucken",
  "country": "DE",
  "coord": {
    "lon": 7,
    "lat": 49.23333
  }
}, {
  "id": 2522098,
  "name": "Alcoy",
  "country": "ES",
  "coord": {
    "lon": -0.47432,
    "lat": 38.705448
  }
}, {
  "id": 2660646,
  "name": "Geneve",
  "country": "CH",
  "coord": {
    "lon": 6.14569,
    "lat": 46.202221
  }
}, {
  "id": 3081368,
  "name": "Wroclaw",
  "country": "PL",
  "coord": {
    "lon": 17.033331,
    "lat": 51.099998
  }
}, {
  "id": 588409,
  "name": "Tallinn",
  "country": "EE",
  "coord": {
    "lon": 24.753531,
    "lat": 59.436958
  }
}, {
  "id": 6075357,
  "name": "Mississauga",
  "country": "CA",
  "coord": {
    "lon": -79.658302,
    "lat": 43.578899
  }
}, {
  "id": 2655603,
  "name": "Birmingham",
  "country": "GB",
  "coord": {
    "lon": -1.89983,
    "lat": 52.481419
  }
}, {
  "id": 5128638,
  "name": "New York",
  "country": "US",
  "coord": {
    "lon": -75.499901,
    "lat": 43.000351
  }
}, {
  "id": 10722858,
  "name": "Svetlogorsk",
  "country": "BY",
  "coord": {
    "lon": 29.733333,
    "lat": 52.633333
  }
}, {
  "id": 2013465,
  "name": "Verkhoyansk",
  "country": "RU",
  "coord": {
    "lon": 133.384995,
    "lat": 67.544724
  }
}, {
  "id": 7169710,
  "name": "City of Cape Canaveral",
  "country": "US",
  "coord": {
    "lon": -80.60567,
    "lat": 28.39367
  }
}, {
  "id": 2082539,
  "name": "Merauke",
  "country": "ID",
  "coord": {
    "lon": 140.333328,
    "lat": -8.46667
  }
}, {
  "id": 2127202,
  "name": "Anadyr",
  "country": "RU",
  "coord": {
    "lon": 177.483337,
    "lat": 64.75
  }
}, {
  "id": 2122311,
  "name": "Oymyakon",
  "country": "RU",
  "coord": {
    "lon": 142.816666,
    "lat": 63.466671
  }
}, {
  "id": 3827409,
  "name": "Cuauhtemoc",
  "country": "MX",
  "coord": {
    "lon": -99.156937,
    "lat": 19.417219
  }
}, {
  "id": 1800657,
  "name": "Mentougou",
  "country": "CN",
  "coord": {
    "lon": 116.091667,
    "lat": 39.939171
  }
}, {
  "id": 2947416,
  "name": "Bochum",
  "country": "DE",
  "coord": {
    "lon": 7.21667,
    "lat": 51.48333
  }
}, {
  "id": 3176059,
  "name": "Giugliano in Campania",
  "country": "IT",
  "coord": {
    "lon": 14.19103,
    "lat": 40.92741
  }
}, {
  "id": 6255150,
  "name": "South America",
  "country": "",
  "coord": {
    "lon": -57.65625,
    "lat": -14.604847
  }
}, {
  "id": 3629941,
  "name": "Estado Portuguesa",
  "country": "VE",
  "coord": {
    "lon": -69.25,
    "lat": 9.166667
  }
}, {
  "id": 3746666,
  "name": "Miraflores",
  "country": "VE",
  "coord": {
    "lon": -69.18306,
    "lat": 9.594444
  }
}, {
  "id": 578652,
  "name": "Batyunino",
  "country": "RU",
  "coord": {
    "lon": 37.700001,
    "lat": 55.66
  }
}, {
  "id": 3797606,
  "name": "Santa Marta",
  "country": "VE",
  "coord": {
    "lon": -71.136108,
    "lat": 8.618333
  }
}, {
  "id": 6255147,
  "name": "Asia",
  "country": "",
  "coord": {
    "lon": 89.296875,
    "lat": 29.840645
  }
}, {
  "id": 690791,
  "name": "Ukraine",
  "country": "UA",
  "coord": {
    "lon": 32,
    "lat": 49
  }
}, {
  "id": 703447,
  "name": "Misto Kyyiv",
  "country": "UA",
  "coord": {
    "lon": 30.516666,
    "lat": 50.433334
  }
}, {
  "id": 703883,
  "name": "Avtonomna Respublika Krym",
  "country": "UA",
  "coord": {
    "lon": 34,
    "lat": 45
  }
}, {
  "id": 6941685,
  "name": "Pisang",
  "country": "NP",
  "coord": {
    "lon": 84.147202,
    "lat": 28.614647
  }
}, {
  "id": 583489,
  "name": "Alachkovo",
  "country": "RU",
  "coord": {
    "lon": 37.560001,
    "lat": 55.200001
  }
}, {
  "id": 6417336,
  "name": "Dal’niye Prudishchi",
  "country": "RU",
  "coord": {
    "lon": 37.860279,
    "lat": 55.553333
  }
}, {
  "id": 520077,
  "name": "Nagatino",
  "country": "RU",
  "coord": {
    "lon": 37.683334,
    "lat": 55.683334
  }
}, {
  "id": 3642267,
  "name": "El Pantano",
  "country": "VE",
  "coord": {
    "lon": -71.083336,
    "lat": 8.7
  }
}, {
  "id": 3485968,
  "name": "Campo Claro",
  "country": "VE",
  "coord": {
    "lon": -65.083336,
    "lat": 9.338889
  }
}, {
  "id": 1282682,
  "name": "Thapathali",
  "country": "NP",
  "coord": {
    "lon": 85.316666,
    "lat": 27.716667
  }
}, {
  "id": 467951,
  "name": "Yelgazino",
  "country": "RU",
  "coord": {
    "lon": 37.866669,
    "lat": 55.416668
  }
}, {
  "id": 3481258,
  "name": "La Horquilla",
  "country": "VE",
  "coord": {
    "lon": -66.99778,
    "lat": 10.580556
  }
}, {
  "id": 576721,
  "name": "Besedy",
  "country": "RU",
  "coord": {
    "lon": 37.790001,
    "lat": 55.610001
  }
}, {
  "id": 3625420,
  "name": "Vera de Agua",
  "country": "VE",
  "coord": {
    "lon": -71.698059,
    "lat": 8.715833
  }
}, {
  "id": 1273840,
  "name": "Connaught Place",
  "country": "IN",
  "coord": {
    "lon": 77.216667,
    "lat": 28.633333
  }
}, {
  "id": 3633244,
  "name": "Mampote",
  "country": "VE",
  "coord": {
    "lon": -66.666664,
    "lat": 10.466667
  }
}, {
  "id": 3649138,
  "name": "Arabopó",
  "country": "VE",
  "coord": {
    "lon": -60.733334,
    "lat": 5.1
  }
}, {
  "id": 470819,
  "name": "Vvedenskoye",
  "country": "RU",
  "coord": {
    "lon": 36.894444,
    "lat": 55.695278
  }
}, {
  "id": 502018,
  "name": "Reutov",
  "country": "RU",
  "coord": {
    "lon": 37.861668,
    "lat": 55.759445
  }
}, {
  "id": 538601,
  "name": "Kurovskoye",
  "country": "RU",
  "coord": {
    "lon": 38.910831,
    "lat": 55.578335
  }
}, {
  "id": 820027,
  "name": "Gorenosovo",
  "country": "RU",
  "coord": {
    "lon": 37.250278,
    "lat": 55.818054
  }
}, {
  "id": 560756,
  "name": "Golitsyno",
  "country": "RU",
  "coord": {
    "lon": 36.983334,
    "lat": 55.612221
  }
}, {
  "id": 519690,
  "name": "Novaya Gollandiya",
  "country": "RU",
  "coord": {
    "lon": 30.290508,
    "lat": 59.929432
  }
}, {
  "id": 536203,
  "name": "Sankt-Peterburg",
  "country": "RU",
  "coord": {
    "lon": 30.25,
    "lat": 59.916668
  }
}, {
  "id": 531232,
  "name": "Malaya Yablonovka",
  "country": "RU",
  "coord": {
    "lon": 30.433332,
    "lat": 59.933334
  }
}, {
  "id": 531483,
  "name": "Malaya Okhta",
  "country": "RU",
  "coord": {
    "lon": 30.4125,
    "lat": 59.928333
  }
}, {
  "id": 630336,
  "name": "Republic of Belarus",
  "country": "BY",
  "coord": {
    "lon": 28,
    "lat": 53
  }
}, {
  "id": 521561,
  "name": "Nikol’skoye",
  "country": "RU",
  "coord": {
    "lon": 36.716667,
    "lat": 56.150002
  }
}, {
  "id": 537691,
  "name": "Kuznetsovo",
  "country": "RU",
  "coord": {
    "lon": 36.650002,
    "lat": 56.133331
  }
}, {
  "id": 463666,
  "name": "Zen’kino",
  "country": "RU",
  "coord": {
    "lon": 36.771942,
    "lat": 55.94389
  }
}, {
  "id": 485279,
  "name": "Sychëvka",
  "country": "RU",
  "coord": {
    "lon": 36.822498,
    "lat": 55.914165
  }
}, {
  "id": 689552,
  "name": "Vinogradnoye",
  "country": "UA",
  "coord": {
    "lon": 34.099998,
    "lat": 44.483334
  }
}, {
  "id": 6726099,
  "name": "Vecheri",
  "country": "RU",
  "coord": {
    "lon": 37.512775,
    "lat": 54.844013
  }
}, {
  "id": 465825,
  "name": "Zabor’ye",
  "country": "RU",
  "coord": {
    "lon": 37.785278,
    "lat": 55.384167
  }
}, {
  "id": 5415040,
  "name": "Broomfield County",
  "country": "US",
  "coord": {
    "lon": -105.086647,
    "lat": 39.92054
  }
}, {
  "id": 5419396,
  "name": "Denver County",
  "country": "US",
  "coord": {
    "lon": -104.950539,
    "lat": 39.666649
  }
}, {
  "id": 5420241,
  "name": "Durango",
  "country": "US",
  "coord": {
    "lon": -107.880074,
    "lat": 37.27528
  }
}, {
  "id": 5431716,
  "name": "Montrose County",
  "country": "US",
  "coord": {
    "lon": -108.267303,
    "lat": 38.416649
  }
}, {
  "id": 5445820,
  "name": "Liberal",
  "country": "US",
  "coord": {
    "lon": -100.920998,
    "lat": 37.043079
  }
}, {
  "id": 5478585,
  "name": "McKinley County",
  "country": "US",
  "coord": {
    "lon": -109.033981,
    "lat": 35.900009
  }
}, {
  "id": 5507669,
  "name": "Lyon County",
  "country": "US",
  "coord": {
    "lon": -119.126259,
    "lat": 39.000198
  }
}, {
  "id": 5508180,
  "name": "Mesquite",
  "country": "US",
  "coord": {
    "lon": -114.067192,
    "lat": 36.805531
  }
}, {
  "id": 5520910,
  "name": "Ector County",
  "country": "US",
  "coord": {
    "lon": -102.55043,
    "lat": 31.866791
  }
}, {
  "id": 5781925,
  "name": "Spring Circle",
  "country": "US",
  "coord": {
    "lon": -111.854927,
    "lat": 40.57217
  }
}, {
  "id": 5784685,
  "name": "Wheadon Acres",
  "country": "US",
  "coord": {
    "lon": -111.96299,
    "lat": 40.560501
  }
}, {
  "id": 5790179,
  "name": "Clark County",
  "country": "US",
  "coord": {
    "lon": -122.484543,
    "lat": 45.799839
  }
}, {
  "id": 5820705,
  "name": "Casper",
  "country": "US",
  "coord": {
    "lon": -106.31308,
    "lat": 42.866631
  }
}, {
  "id": 3439525,
  "name": "Young",
  "country": "UY",
  "coord": {
    "lon": -57.633331,
    "lat": -32.683331
  }
}, {
  "id": 3439781,
  "name": "Treinta y Tres",
  "country": "UY",
  "coord": {
    "lon": -54.383331,
    "lat": -33.23333
  }
}, {
  "id": 3440645,
  "name": "Departamento de San José",
  "country": "UY",
  "coord": {
    "lon": -56.61694,
    "lat": -34.455002
  }
}, {
  "id": 3442098,
  "name": "La Paz",
  "country": "UY",
  "coord": {
    "lon": -56.22361,
    "lat": -34.761669
  }
}, {
  "id": 3442778,
  "name": "Delta del Tigre",
  "country": "UY",
  "coord": {
    "lon": -56.385281,
    "lat": -34.763329
  }
}, {
  "id": 601417,
  "name": "Oltinkol",
  "country": "UZ",
  "coord": {
    "lon": 58.903721,
    "lat": 43.068741
  }
}, {
  "id": 1215694,
  "name": "Zomin",
  "country": "UZ",
  "coord": {
    "lon": 68.395828,
    "lat": 39.96056
  }
}, {
  "id": 1216115,
  "name": "Shorchi",
  "country": "UZ",
  "coord": {
    "lon": 67.787498,
    "lat": 37.999439
  }
}, {
  "id": 1216787,
  "name": "Kitob",
  "country": "UZ",
  "coord": {
    "lon": 66.833183,
    "lat": 39.084251
  }
}, {
  "id": 1217362,
  "name": "Juma",
  "country": "UZ",
  "coord": {
    "lon": 66.664169,
    "lat": 39.71611
  }
}, {
  "id": 1217540,
  "name": "Chiroqchi",
  "country": "UZ",
  "coord": {
    "lon": 66.57222,
    "lat": 39.033611
  }
}, {
  "id": 1217569,
  "name": "Chelak",
  "country": "UZ",
  "coord": {
    "lon": 66.861107,
    "lat": 39.92028
  }
}, {
  "id": 1217658,
  "name": "Bulungur",
  "country": "UZ",
  "coord": {
    "lon": 67.271393,
    "lat": 39.764721
  }
}, {
  "id": 1217703,
  "name": "Beshkent",
  "country": "UZ",
  "coord": {
    "lon": 65.653061,
    "lat": 38.821388
  }
}, {
  "id": 1217734,
  "name": "Boysun",
  "country": "UZ",
  "coord": {
    "lon": 67.198608,
    "lat": 38.206108
  }
}, {
  "id": 1217926,
  "name": "Oqtosh",
  "country": "UZ",
  "coord": {
    "lon": 65.925278,
    "lat": 39.921391
  }
}, {
  "id": 1512287,
  "name": "Zafar",
  "country": "UZ",
  "coord": {
    "lon": 68.900002,
    "lat": 40.98333
  }
}, {
  "id": 1512348,
  "name": "Yangirabot",
  "country": "UZ",
  "coord": {
    "lon": 65.960953,
    "lat": 40.025391
  }
}, {
  "id": 1512350,
  "name": "Yangiqorgon",
  "country": "UZ",
  "coord": {
    "lon": 71.73333,
    "lat": 41.187222
  }
}, {
  "id": 1512480,
  "name": "Dashtobod",
  "country": "UZ",
  "coord": {
    "lon": 68.494438,
    "lat": 40.126942
  }
}, {
  "id": 1512524,
  "name": "Tuytepa",
  "country": "UZ",
  "coord": {
    "lon": 69.362534,
    "lat": 41.032101
  }
}, {
  "id": 1512549,
  "name": "Turagurghon",
  "country": "UZ",
  "coord": {
    "lon": 71.51162,
    "lat": 40.99984
  }
}, {
  "id": 1512658,
  "name": "Toshbuloq",
  "country": "UZ",
  "coord": {
    "lon": 71.572144,
    "lat": 40.923389
  }
}, {
  "id": 1512790,
  "name": "Showot",
  "country": "UZ",
  "coord": {
    "lon": 60.302502,
    "lat": 41.65583
  }
}, {
  "id": 1512934,
  "name": "Salor",
  "country": "UZ",
  "coord": {
    "lon": 69.381668,
    "lat": 41.372219
  }
}, {
  "id": 1513714,
  "name": "Kosonsoy",
  "country": "UZ",
  "coord": {
    "lon": 71.550827,
    "lat": 41.256111
  }
}, {
  "id": 1514011,
  "name": "Gagarin",
  "country": "UZ",
  "coord": {
    "lon": 68.172218,
    "lat": 40.661942
  }
}, {
  "id": 1514125,
  "name": "Dustlik",
  "country": "UZ",
  "coord": {
    "lon": 68.035828,
    "lat": 40.524719
  }
}, {
  "id": 3748726,
  "name": "Kingstown Park",
  "country": "VC",
  "coord": {
    "lon": -61.235001,
    "lat": 13.15833
  }
}, {
  "id": 3625829,
  "name": "Turmero",
  "country": "VE",
  "coord": {
    "lon": -67.472878,
    "lat": 10.22388
  }
}, {
  "id": 8131514,
  "name": "Municipio Rosario de Perijá",
  "country": "VE",
  "coord": {
    "lon": -72.314407,
    "lat": 10.32573
  }
}, {
  "id": 3640464,
  "name": "Municipio Guacara",
  "country": "VE",
  "coord": {
    "lon": -67.833328,
    "lat": 10.3
  }
}, {
  "id": 3626657,
  "name": "Municipio Sucre",
  "country": "VE",
  "coord": {
    "lon": -64.083328,
    "lat": 10.41667
  }
}, {
  "id": 3626083,
  "name": "Municipio Torres",
  "country": "VE",
  "coord": {
    "lon": -70.25,
    "lat": 10.16667
  }
}, {
  "id": 3648112,
  "name": "Municipio Bolívar",
  "country": "VE",
  "coord": {
    "lon": -70.414467,
    "lat": 8.75988
  }
}, {
  "id": 3643617,
  "name": "El Coche",
  "country": "VE",
  "coord": {
    "lon": -66.783333,
    "lat": 10.48333
  }
}, {
  "id": 1563241,
  "name": "Uong Bi",
  "country": "VN",
  "coord": {
    "lon": 106.783333,
    "lat": 21.033331
  }
}, {
  "id": 1577995,
  "name": "Lagi",
  "country": "VN",
  "coord": {
    "lon": 107.783333,
    "lat": 10.66667
  }
}, {
  "id": 785234,
  "name": "Komuna e Thërandës",
  "country": "XK",
  "coord": {
    "lon": 20.85,
    "lat": 42.349998
  }
}, {
  "id": 831101,
  "name": "Komuna e Shtimes",
  "country": "XK",
  "coord": {
    "lon": 21.01667,
    "lat": 42.416672
  }
}, {
  "id": 787156,
  "name": "Komuna e Pejës",
  "country": "XK",
  "coord": {
    "lon": 20.28997,
    "lat": 42.659679
  }
}, {
  "id": 831104,
  "name": "Komuna e Malisheves",
  "country": "XK",
  "coord": {
    "lon": 20.74667,
    "lat": 42.488609
  }
}, {
  "id": 791579,
  "name": "Komuna e Deçanit",
  "country": "XK",
  "coord": {
    "lon": 20.28816,
    "lat": 42.539101
  }
}, {
  "id": 69499,
  "name": "Zabīd",
  "country": "YE",
  "coord": {
    "lon": 43.368408,
    "lat": 14.27742
  }
}, {
  "id": 69558,
  "name": "Yarīm",
  "country": "YE",
  "coord": {
    "lon": 44.31176,
    "lat": 14.25388
  }
}, {
  "id": 6940677,
  "name": "Al Bayda City",
  "country": "YE",
  "coord": {
    "lon": 45.556599,
    "lat": 13.9849
  }
}, {
  "id": 957339,
  "name": "Schapenrust",
  "country": "ZA",
  "coord": {
    "lon": 28.366421,
    "lat": -26.267509
  }
}, {
  "id": 963525,
  "name": "Queensdale",
  "country": "ZA",
  "coord": {
    "lon": 26.978621,
    "lat": -31.87101
  }
}, {
  "id": 974670,
  "name": "Mondlo",
  "country": "ZA",
  "coord": {
    "lon": 30.71769,
    "lat": -27.98299
  }
}, {
  "id": 985011,
  "name": "Lady Frere",
  "country": "ZA",
  "coord": {
    "lon": 27.232901,
    "lat": -31.703119
  }
}, {
  "id": 1005768,
  "name": "Ellisras",
  "country": "ZA",
  "coord": {
    "lon": 27.744261,
    "lat": -23.6649
  }
}, {
  "id": 1012600,
  "name": "Cradock",
  "country": "ZA",
  "coord": {
    "lon": 25.619181,
    "lat": -32.164219
  }
}, {
  "id": 906044,
  "name": "Monze",
  "country": "ZM",
  "coord": {
    "lon": 27.48333,
    "lat": -16.283331
  }
}, {
  "id": 913613,
  "name": "Kansanshi",
  "country": "ZM",
  "coord": {
    "lon": 26.427271,
    "lat": -12.09514
  }
}, {
  "id": 890983,
  "name": "Gokwe",
  "country": "ZW",
  "coord": {
    "lon": 28.9349,
    "lat": -18.20476
  }
}, {
  "id": 1626493,
  "name": "Srandakan",
  "country": "ID",
  "coord": {
    "lon": 110.250557,
    "lat": -7.93861
  }
}, {
  "id": 1626498,
  "name": "Sragen",
  "country": "ID",
  "coord": {
    "lon": 111.022217,
    "lat": -7.42639
  }
}, {
  "id": 1626560,
  "name": "Soreang",
  "country": "ID",
  "coord": {
    "lon": 107.518333,
    "lat": -7.03306
  }
}, {
  "id": 485275,
  "name": "Sychevo",
  "country": "RU",
  "coord": {
    "lon": 38.71384,
    "lat": 55.061958
  }
}, {
  "id": 499051,
  "name": "Samashki",
  "country": "RU",
  "coord": {
    "lon": 45.301392,
    "lat": 43.290562
  }
}, {
  "id": 561534,
  "name": "Gerzel-Aul",
  "country": "RU",
  "coord": {
    "lon": 46.4025,
    "lat": 43.247219
  }
}, {
  "id": 580299,
  "name": "Avdon",
  "country": "RU",
  "coord": {
    "lon": 55.716671,
    "lat": 54.666672
  }
}, {
  "id": 1120471,
  "name": "Zorkot",
  "country": "AF",
  "coord": {
    "lon": 69.734169,
    "lat": 33.542221
  }
}, {
  "id": 703446,
  "name": "Kyyivs’ka Oblast’",
  "country": "UA",
  "coord": {
    "lon": 30.5,
    "lat": 50.25
  }
}, {
  "id": 6417711,
  "name": "Posëlok Neftebazy",
  "country": "RU",
  "coord": {
    "lon": 37.851944,
    "lat": 55.785831
  }
}, {
  "id": 1273293,
  "name": "National Capital Territory of Delhi",
  "country": "IN",
  "coord": {
    "lon": 77.25,
    "lat": 28.75
  }
}, {
  "id": 1273294,
  "name": "Delhi",
  "country": "IN",
  "coord": {
    "lon": 77.216667,
    "lat": 28.666668
  }
}, {
  "id": 696234,
  "name": "Privol’noye",
  "country": "UA",
  "coord": {
    "lon": 34.333332,
    "lat": 44.783333
  }
}, {
  "id": 3648106,
  "name": "Estado Bolívar",
  "country": "VE",
  "coord": {
    "lon": -63.5,
    "lat": 6.333333
  }
}, {
  "id": 3644660,
  "name": "Curatabaca",
  "country": "VE",
  "coord": {
    "lon": -62.849998,
    "lat": 6.316667
  }
}, {
  "id": 3632824,
  "name": "Masu-parú-mota",
  "country": "VE",
  "coord": {
    "lon": -61.150002,
    "lat": 5.05
  }
}, {
  "id": 1283076,
  "name": "Manangbhot",
  "country": "NP",
  "coord": {
    "lon": 84.01667,
    "lat": 28.666668
  }
}, {
  "id": 1283150,
  "name": "Lamjung",
  "country": "NP",
  "coord": {
    "lon": 84.366669,
    "lat": 28.200001
  }
}, {
  "id": 502069,
  "name": "Reshetnikovo",
  "country": "RU",
  "coord": {
    "lon": 36.566666,
    "lat": 56.450001
  }
}, {
  "id": 480041,
  "name": "Tverskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 35.004879,
    "lat": 57.009644
  }
}, {
  "id": 517183,
  "name": "Novyye Berëzki",
  "country": "RU",
  "coord": {
    "lon": 37.366669,
    "lat": 56.866669
  }
}, {
  "id": 711987,
  "name": "Bobyanskoye",
  "country": "UA",
  "coord": {
    "lon": 34.366669,
    "lat": 44.650002
  }
}, {
  "id": 509820,
  "name": "Petrozavodsk",
  "country": "RU",
  "coord": {
    "lon": 34.346909,
    "lat": 61.784912
  }
}, {
  "id": 545633,
  "name": "Kondoka",
  "country": "RU",
  "coord": {
    "lon": 30.6,
    "lat": 64.583336
  }
}, {
  "id": 547560,
  "name": "Klimovsk",
  "country": "RU",
  "coord": {
    "lon": 37.525002,
    "lat": 55.364723
  }
}, {
  "id": 498349,
  "name": "Savëlovo",
  "country": "RU",
  "coord": {
    "lon": 37.366669,
    "lat": 56.866669
  }
}, {
  "id": 513633,
  "name": "Oynashniyemi",
  "country": "RU",
  "coord": {
    "lon": 30.416668,
    "lat": 65.116669
  }
}, {
  "id": 523110,
  "name": "Nazarovo",
  "country": "RU",
  "coord": {
    "lon": 36.616669,
    "lat": 56.066666
  }
}, {
  "id": 507614,
  "name": "Pokoyevo",
  "country": "RU",
  "coord": {
    "lon": 36.633331,
    "lat": 56.033333
  }
}, {
  "id": 498337,
  "name": "Savel’yevo",
  "country": "RU",
  "coord": {
    "lon": 36.599998,
    "lat": 56
  }
}, {
  "id": 565711,
  "name": "Dolevo",
  "country": "RU",
  "coord": {
    "lon": 36.615833,
    "lat": 55.993332
  }
}, {
  "id": 538585,
  "name": "Kursakovo-Markovo",
  "country": "RU",
  "coord": {
    "lon": 36.641666,
    "lat": 55.978611
  }
}, {
  "id": 562837,
  "name": "Filatovo",
  "country": "RU",
  "coord": {
    "lon": 36.677223,
    "lat": 55.973057
  }
}, {
  "id": 561278,
  "name": "Glebovo",
  "country": "RU",
  "coord": {
    "lon": 36.69389,
    "lat": 55.955002
  }
}, {
  "id": 571144,
  "name": "Bukarevo",
  "country": "RU",
  "coord": {
    "lon": 36.728889,
    "lat": 55.952499
  }
}, {
  "id": 569406,
  "name": "Chepelëvo",
  "country": "RU",
  "coord": {
    "lon": 37.491112,
    "lat": 55.18222
  }
}, {
  "id": 476368,
  "name": "Vatutino",
  "country": "RU",
  "coord": {
    "lon": 37.686668,
    "lat": 55.879723
  }
}, {
  "id": 547379,
  "name": "Klyaz’ma",
  "country": "RU",
  "coord": {
    "lon": 37.834721,
    "lat": 55.979168
  }
}, {
  "id": 503978,
  "name": "Pushkino",
  "country": "RU",
  "coord": {
    "lon": 37.833332,
    "lat": 56.011112
  }
}, {
  "id": 528211,
  "name": "Mayskoye",
  "country": "RU",
  "coord": {
    "lon": 37.916668,
    "lat": 56.133331
  }
}, {
  "id": 463790,
  "name": "Zelentsino",
  "country": "RU",
  "coord": {
    "lon": 38.75,
    "lat": 56.283333
  }
}, {
  "id": 532598,
  "name": "Lyubimezh",
  "country": "RU",
  "coord": {
    "lon": 38.799999,
    "lat": 56.083332
  }
}, {
  "id": 473936,
  "name": "Vetchi",
  "country": "RU",
  "coord": {
    "lon": 39,
    "lat": 55.950001
  }
}, {
  "id": 566950,
  "name": "Davydovo",
  "country": "RU",
  "coord": {
    "lon": 38.856945,
    "lat": 55.609722
  }
}, {
  "id": 1264031,
  "name": "Malpura",
  "country": "IN",
  "coord": {
    "lon": 77.916664,
    "lat": 27.116667
  }
}, {
  "id": 1266510,
  "name": "Kiraoli",
  "country": "IN",
  "coord": {
    "lon": 77.783333,
    "lat": 27.15
  }
}, {
  "id": 1279275,
  "name": "Aghāpur",
  "country": "IN",
  "coord": {
    "lon": 77.51667,
    "lat": 27.15
  }
}, {
  "id": 3762839,
  "name": "Mamonal",
  "country": "VE",
  "coord": {
    "lon": -62.399445,
    "lat": 8.070556
  }
}, {
  "id": 818493,
  "name": "Shchekutina",
  "country": "RU",
  "coord": {
    "lon": 36.699444,
    "lat": 55.327499
  }
}, {
  "id": 818486,
  "name": "Rogacheva",
  "country": "RU",
  "coord": {
    "lon": 36.665001,
    "lat": 55.261944
  }
}, {
  "id": 523186,
  "name": "Navlya",
  "country": "RU",
  "coord": {
    "lon": 34.49889,
    "lat": 52.828056
  }
}, {
  "id": 709584,
  "name": "Druzhba",
  "country": "UA",
  "coord": {
    "lon": 33.945278,
    "lat": 52.042778
  }
}, {
  "id": 707611,
  "name": "Imshanaya",
  "country": "UA",
  "coord": {
    "lon": 33.783333,
    "lat": 51.900002
  }
}, {
  "id": 818030,
  "name": "Svitino",
  "country": "RU",
  "coord": {
    "lon": 37.372501,
    "lat": 55.306667
  }
}, {
  "id": 473353,
  "name": "Vislyy Bor",
  "country": "RU",
  "coord": {
    "lon": 41.81139,
    "lat": 53.665558
  }
}, {
  "id": 6708894,
  "name": "Burovka",
  "country": "RU",
  "coord": {
    "lon": 47.502453,
    "lat": 52.455254
  }
}, {
  "id": 478203,
  "name": "Uspenskiy",
  "country": "RU",
  "coord": {
    "lon": 48.700001,
    "lat": 52.049999
  }
}, {
  "id": 610067,
  "name": "Churbanov",
  "country": "KZ",
  "coord": {
    "lon": 50.799999,
    "lat": 51.349998
  }
}, {
  "id": 474751,
  "name": "Verkhnyaya Akhtuba",
  "country": "RU",
  "coord": {
    "lon": 44.790001,
    "lat": 48.771667
  }
}, {
  "id": 1268571,
  "name": "Kakarmatha",
  "country": "IN",
  "coord": {
    "lon": 82.966667,
    "lat": 25.283333
  }
}, {
  "id": 1267806,
  "name": "Karchana",
  "country": "IN",
  "coord": {
    "lon": 81.933334,
    "lat": 25.283333
  }
}, {
  "id": 1282940,
  "name": "Parāsi",
  "country": "NP",
  "coord": {
    "lon": 83.666664,
    "lat": 27.533333
  }
}, {
  "id": 1283692,
  "name": "Bālāju",
  "country": "NP",
  "coord": {
    "lon": 85.300003,
    "lat": 27.733334
  }
}, {
  "id": 688041,
  "name": "Yurov",
  "country": "UA",
  "coord": {
    "lon": 29.733334,
    "lat": 50.416668
  }
}, {
  "id": 462970,
  "name": "Zhirovo",
  "country": "RU",
  "coord": {
    "lon": 38.540558,
    "lat": 55.601944
  }
}, {
  "id": 576263,
  "name": "Biserovo",
  "country": "RU",
  "coord": {
    "lon": 38.115833,
    "lat": 55.783054
  }
}, {
  "id": 471980,
  "name": "Voroniy Ostrov",
  "country": "RU",
  "coord": {
    "lon": 35.5,
    "lat": 62.183334
  }
}, {
  "id": 3469034,
  "name": "Federative Republic of Brazil",
  "country": "BR",
  "coord": {
    "lon": -55,
    "lat": -10
  }
}, {
  "id": 572275,
  "name": "Borodino",
  "country": "RU",
  "coord": {
    "lon": 36.733334,
    "lat": 56.316666
  }
}, {
  "id": 481603,
  "name": "Troitskaya",
  "country": "RU",
  "coord": {
    "lon": 29.75,
    "lat": 59.916668
  }
}, {
  "id": 560455,
  "name": "Gol’yevo",
  "country": "RU",
  "coord": {
    "lon": 37.31139,
    "lat": 55.799721
  }
}, {
  "id": 471748,
  "name": "Vorya-Bogorodskoye",
  "country": "RU",
  "coord": {
    "lon": 38.166668,
    "lat": 56.049999
  }
}, {
  "id": 495619,
  "name": "Sharya",
  "country": "RU",
  "coord": {
    "lon": 45.514442,
    "lat": 58.36861
  }
}, {
  "id": 572248,
  "name": "Borodulino",
  "country": "RU",
  "coord": {
    "lon": 42.883331,
    "lat": 56.650002
  }
}, {
  "id": 527451,
  "name": "Mervino",
  "country": "RU",
  "coord": {
    "lon": 39.669998,
    "lat": 54.642776
  }
}, {
  "id": 6198157,
  "name": "Yalpay",
  "country": "RU",
  "coord": {
    "lon": 47.899166,
    "lat": 56.176388
  }
}, {
  "id": 6198533,
  "name": "Puchina",
  "country": "RU",
  "coord": {
    "lon": 47.786667,
    "lat": 56.197498
  }
}, {
  "id": 491687,
  "name": "Smolensk",
  "country": "RU",
  "coord": {
    "lon": 32.040001,
    "lat": 54.781666
  }
}, {
  "id": 627962,
  "name": "Guraki",
  "country": "BY",
  "coord": {
    "lon": 30.883612,
    "lat": 54.572777
  }
}, {
  "id": 619258,
  "name": "Zalozy",
  "country": "BY",
  "coord": {
    "lon": 25.583332,
    "lat": 53.333332
  }
}, {
  "id": 467030,
  "name": "Yesiplevo",
  "country": "RU",
  "coord": {
    "lon": 46.366669,
    "lat": 60.733334
  }
}, {
  "id": 701619,
  "name": "Massandra",
  "country": "UA",
  "coord": {
    "lon": 34.183334,
    "lat": 44.516666
  }
}, {
  "id": 703776,
  "name": "Kudryne",
  "country": "UA",
  "coord": {
    "lon": 33.950001,
    "lat": 44.700001
  }
}, {
  "id": 704360,
  "name": "Krasnopeshchernaya",
  "country": "UA",
  "coord": {
    "lon": 34.333332,
    "lat": 44.866669
  }
}, {
  "id": 823660,
  "name": "Verkhovskoye",
  "country": "RU",
  "coord": {
    "lon": 39.816666,
    "lat": 43.623333
  }
}, {
  "id": 567322,
  "name": "Chvizhepse",
  "country": "RU",
  "coord": {
    "lon": 40.085278,
    "lat": 43.631111
  }
}, {
  "id": 542681,
  "name": "Krasnaya Polyana",
  "country": "RU",
  "coord": {
    "lon": 40.207222,
    "lat": 43.675835
  }
}, {
  "id": 823675,
  "name": "Kul’turnoye Uchdere",
  "country": "RU",
  "coord": {
    "lon": 39.636665,
    "lat": 43.676945
  }
}, {
  "id": 805597,
  "name": "Sergey-Pole",
  "country": "RU",
  "coord": {
    "lon": 39.704723,
    "lat": 43.673889
  }
}, {
  "id": 805616,
  "name": "Nizhneye Orekhovo",
  "country": "RU",
  "coord": {
    "lon": 39.7775,
    "lat": 43.707222
  }
}, {
  "id": 805557,
  "name": "Vtoraya Rota",
  "country": "RU",
  "coord": {
    "lon": 39.711109,
    "lat": 43.772499
  }
}, {
  "id": 805559,
  "name": "Verkhnerusskaya Khobza",
  "country": "RU",
  "coord": {
    "lon": 39.630001,
    "lat": 43.782501
  }
}, {
  "id": 823556,
  "name": "Khartsiz Pervyy",
  "country": "RU",
  "coord": {
    "lon": 39.638889,
    "lat": 43.794167
  }
}, {
  "id": 490936,
  "name": "Solokhaul",
  "country": "RU",
  "coord": {
    "lon": 39.678055,
    "lat": 43.799442
  }
}, {
  "id": 570140,
  "name": "Bzogu",
  "country": "RU",
  "coord": {
    "lon": 39.718613,
    "lat": 43.812778
  }
}, {
  "id": 501043,
  "name": "Rozhdestvenskiy",
  "country": "RU",
  "coord": {
    "lon": 39.583889,
    "lat": 43.86639
  }
}, {
  "id": 804366,
  "name": "-",
  "country": "RU",
  "coord": {
    "lon": 40.099167,
    "lat": 44.304443
  }
}, {
  "id": 615994,
  "name": "Abzhaqva",
  "country": "GE",
  "coord": {
    "lon": 41.073612,
    "lat": 43.02639
  }
}, {
  "id": 823854,
  "name": "Ip’nari",
  "country": "GE",
  "coord": {
    "lon": 40.321667,
    "lat": 43.231945
  }
}, {
  "id": 613220,
  "name": "Leselidze",
  "country": "GE",
  "coord": {
    "lon": 40.013058,
    "lat": 43.390556
  }
}, {
  "id": 530631,
  "name": "Maloye Obraztsovo",
  "country": "RU",
  "coord": {
    "lon": 38.150002,
    "lat": 54.916668
  }
}, {
  "id": 481501,
  "name": "Troitskoye",
  "country": "RU",
  "coord": {
    "lon": 35.917778,
    "lat": 55.193054
  }
}, {
  "id": 2048736,
  "name": "Sanatornaya",
  "country": "RU",
  "coord": {
    "lon": 131.984161,
    "lat": 43.227501
  }
}, {
  "id": 554667,
  "name": "Kabardino-Balkarskaya Respublika",
  "country": "RU",
  "coord": {
    "lon": 43.5,
    "lat": 43.5
  }
}, {
  "id": 516981,
  "name": "Novyy Krugozor",
  "country": "RU",
  "coord": {
    "lon": 42.50111,
    "lat": 43.247223
  }
}, {
  "id": 2014571,
  "name": "Uglovoye",
  "country": "RU",
  "coord": {
    "lon": 132.09166,
    "lat": 43.328888
  }
}, {
  "id": 2021956,
  "name": "Knevichi",
  "country": "RU",
  "coord": {
    "lon": 132.180283,
    "lat": 43.399166
  }
}, {
  "id": 584243,
  "name": "Adler",
  "country": "RU",
  "coord": {
    "lon": 39.919998,
    "lat": 43.43
  }
}, {
  "id": 823631,
  "name": "Yakornaya Shchel'",
  "country": "RU",
  "coord": {
    "lon": 39.565834,
    "lat": 43.810555
  }
}, {
  "id": 584003,
  "name": "Agoy",
  "country": "RU",
  "coord": {
    "lon": 39.029999,
    "lat": 44.139999
  }
}, {
  "id": 713772,
  "name": "Aeroflots’kyy",
  "country": "UA",
  "coord": {
    "lon": 34.033333,
    "lat": 45.016666
  }
}, {
  "id": 501165,
  "name": "Rostovskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 42,
    "lat": 47
  }
}, {
  "id": 703973,
  "name": "Krucha",
  "country": "UA",
  "coord": {
    "lon": 34.650002,
    "lat": 46.183334
  }
}, {
  "id": 713155,
  "name": "-",
  "country": "UA",
  "coord": {
    "lon": 33.866669,
    "lat": 46.450001
  }
}, {
  "id": 553428,
  "name": "-",
  "country": "RU",
  "coord": {
    "lon": 39.696945,
    "lat": 47.279446
  }
}, {
  "id": 2013229,
  "name": "Vyazemskiy",
  "country": "RU",
  "coord": {
    "lon": 134.752502,
    "lat": 47.537777
  }
}, {
  "id": 692248,
  "name": "Sukhoivanovskoye",
  "country": "UA",
  "coord": {
    "lon": 35.366669,
    "lat": 47.583332
  }
}, {
  "id": 700755,
  "name": "Morozovskiy",
  "country": "UA",
  "coord": {
    "lon": 35.416668,
    "lat": 48.366669
  }
}, {
  "id": 709624,
  "name": "Dravtse",
  "country": "UA",
  "coord": {
    "lon": 22.333332,
    "lat": 48.583332
  }
}, {
  "id": 797077,
  "name": "Popovka",
  "country": "RU",
  "coord": {
    "lon": 40.347221,
    "lat": 48.698891
  }
}, {
  "id": 798056,
  "name": "-",
  "country": "RU",
  "coord": {
    "lon": 44.862778,
    "lat": 48.735001
  }
}, {
  "id": 472045,
  "name": "Voronezh",
  "country": "RU",
  "coord": {
    "lon": 39.169998,
    "lat": 51.666389
  }
}, {
  "id": 575343,
  "name": "Bolokhovo",
  "country": "RU",
  "coord": {
    "lon": 37.818333,
    "lat": 54.093613
  }
}, {
  "id": 1273690,
  "name": "Dahmi",
  "country": "IN",
  "coord": {
    "lon": 75.583336,
    "lat": 26.833332
  }
}, {
  "id": 819162,
  "name": "Voslinka",
  "country": "RU",
  "coord": {
    "lon": 38.533611,
    "lat": 54.726112
  }
}, {
  "id": 524304,
  "name": "Murmanskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 34,
    "lat": 68
  }
}, {
  "id": 528562,
  "name": "Matrosy",
  "country": "RU",
  "coord": {
    "lon": 33.799999,
    "lat": 61.783333
  }
}, {
  "id": 554230,
  "name": "Kaliningradskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 21.5,
    "lat": 54.75
  }
}, {
  "id": 826279,
  "name": "Gorbatovka",
  "country": "RU",
  "coord": {
    "lon": 20.156389,
    "lat": 54.920555
  }
}, {
  "id": 826278,
  "name": "Prigorodnyy",
  "country": "RU",
  "coord": {
    "lon": 20.156944,
    "lat": 54.92889
  }
}, {
  "id": 2609894,
  "name": "Yantarnyy",
  "country": "RU",
  "coord": {
    "lon": 19.938057,
    "lat": 54.871666
  }
}, {
  "id": 873882,
  "name": "Torfyanoye",
  "country": "RU",
  "coord": {
    "lon": 30.320557,
    "lat": 60.077499
  }
}, {
  "id": 1176832,
  "name": "Hoshāb",
  "country": "PK",
  "coord": {
    "lon": 63.911945,
    "lat": 26.016945
  }
}, {
  "id": 1109143,
  "name": "Kamāl Halq",
  "country": "PK",
  "coord": {
    "lon": 63.709721,
    "lat": 25.970833
  }
}, {
  "id": 1176862,
  "name": "Hirok",
  "country": "PK",
  "coord": {
    "lon": 63.59861,
    "lat": 26.00639
  }
}, {
  "id": 1178148,
  "name": "Gorcop",
  "country": "PK",
  "coord": {
    "lon": 63.541389,
    "lat": 25.874722
  }
}, {
  "id": 1109671,
  "name": "Kārez",
  "country": "PK",
  "coord": {
    "lon": 63.488888,
    "lat": 25.872223
  }
}, {
  "id": 1336846,
  "name": "Niāmi Kalag",
  "country": "PK",
  "coord": {
    "lon": 63.461388,
    "lat": 25.853611
  }
}, {
  "id": 1337368,
  "name": "Akil Iomak",
  "country": "PK",
  "coord": {
    "lon": 63.400833,
    "lat": 25.849722
  }
}, {
  "id": 1176303,
  "name": "Jamak",
  "country": "PK",
  "coord": {
    "lon": 63.393055,
    "lat": 25.845833
  }
}, {
  "id": 1336786,
  "name": "Kārez",
  "country": "PK",
  "coord": {
    "lon": 63.236111,
    "lat": 25.85
  }
}, {
  "id": 1336708,
  "name": "Dram Kol",
  "country": "PK",
  "coord": {
    "lon": 63.218613,
    "lat": 25.843332
  }
}, {
  "id": 1521977,
  "name": "Orel",
  "country": "KZ",
  "coord": {
    "lon": 68.330002,
    "lat": 54.964722
  }
}, {
  "id": 1522281,
  "name": "Kopa",
  "country": "KZ",
  "coord": {
    "lon": 75.833336,
    "lat": 43.516666
  }
}, {
  "id": 1276632,
  "name": "Bechiwāra",
  "country": "IN",
  "coord": {
    "lon": 73.51667,
    "lat": 23.783333
  }
}, {
  "id": 7113953,
  "name": "Thamel",
  "country": "NP",
  "coord": {
    "lon": 85.310211,
    "lat": 27.715141
  }
}, {
  "id": 456172,
  "name": "Riga",
  "country": "LV",
  "coord": {
    "lon": 24.1,
    "lat": 56.950001
  }
}, {
  "id": 563249,
  "name": "Fedoreyevka",
  "country": "RU",
  "coord": {
    "lon": 36.147499,
    "lat": 53.004723
  }
}, {
  "id": 524844,
  "name": "Mostki",
  "country": "RU",
  "coord": {
    "lon": 36.156666,
    "lat": 52.99139
  }
}, {
  "id": 504849,
  "name": "Prokurovka",
  "country": "RU",
  "coord": {
    "lon": 36.133331,
    "lat": 52.983334
  }
}, {
  "id": 463043,
  "name": "Zhilina",
  "country": "RU",
  "coord": {
    "lon": 36.083332,
    "lat": 52.983334
  }
}, {
  "id": 515012,
  "name": "Orel",
  "country": "RU",
  "coord": {
    "lon": 36.080276,
    "lat": 52.965832
  }
}, {
  "id": 6723018,
  "name": "Shatylivka",
  "country": "UA",
  "coord": {
    "lon": 36.233105,
    "lat": 50.019814
  }
}, {
  "id": 498093,
  "name": "Saygatovo",
  "country": "RU",
  "coord": {
    "lon": 38.01667,
    "lat": 54.866669
  }
}, {
  "id": 559229,
  "name": "Gostishchevo",
  "country": "RU",
  "coord": {
    "lon": 36.655159,
    "lat": 50.779449
  }
}, {
  "id": 695305,
  "name": "Rozovka",
  "country": "UA",
  "coord": {
    "lon": 35.316669,
    "lat": 47.216671
  }
}, {
  "id": 1794299,
  "name": "Sichuan Sheng",
  "country": "CN",
  "coord": {
    "lon": 102.5,
    "lat": 30.5
  }
}, {
  "id": 3337493,
  "name": "Województwo Łódzkie",
  "country": "PL",
  "coord": {
    "lon": 19.5,
    "lat": 51.5
  }
}, {
  "id": 2130075,
  "name": "Hinode",
  "country": "JP",
  "coord": {
    "lon": 141.916672,
    "lat": 43.066669
  }
}, {
  "id": 1862047,
  "name": "Hyōgo-ken",
  "country": "JP",
  "coord": {
    "lon": 134.825974,
    "lat": 35.040321
  }
}, {
  "id": 1856300,
  "name": "Myōrakuji",
  "country": "JP",
  "coord": {
    "lon": 134.916672,
    "lat": 34.966671
  }
}, {
  "id": 1864226,
  "name": "Ehime-ken",
  "country": "JP",
  "coord": {
    "lon": 132.854721,
    "lat": 33.625801
  }
}, {
  "id": 1926016,
  "name": "Yokogawara",
  "country": "JP",
  "coord": {
    "lon": 132.886414,
    "lat": 33.803761
  }
}, {
  "id": 2110554,
  "name": "Yamagata-ken",
  "country": "JP",
  "coord": {
    "lon": 140.099701,
    "lat": 38.450298
  }
}, {
  "id": 2114102,
  "name": "Mazawa",
  "country": "JP",
  "coord": {
    "lon": 140.124176,
    "lat": 38.433891
  }
}, {
  "id": 1848681,
  "name": "Yamaguchi-ken",
  "country": "JP",
  "coord": {
    "lon": 131.570465,
    "lat": 34.206081
  }
}, {
  "id": 1864470,
  "name": "Daidō",
  "country": "JP",
  "coord": {
    "lon": 131.483337,
    "lat": 34.049999
  }
}, {
  "id": 1848649,
  "name": "Yamanashi-ken",
  "country": "JP",
  "coord": {
    "lon": 138.608002,
    "lat": 35.61602
  }
}, {
  "id": 1861454,
  "name": "Isawa",
  "country": "JP",
  "coord": {
    "lon": 138.633331,
    "lat": 35.650002
  }
}, {
  "id": 1865694,
  "name": "Aichi-ken",
  "country": "JP",
  "coord": {
    "lon": 136.906555,
    "lat": 35.180168
  }
}, {
  "id": 1865110,
  "name": "Arimatsu",
  "country": "JP",
  "coord": {
    "lon": 136.966675,
    "lat": 35.066669
  }
}, {
  "id": 2110608,
  "name": "Wada",
  "country": "JP",
  "coord": {
    "lon": 140.216675,
    "lat": 39.650002
  }
}, {
  "id": 2112669,
  "name": "Ibaraki-ken",
  "country": "JP",
  "coord": {
    "lon": 140.316147,
    "lat": 36.310349
  }
}, {
  "id": 1856472,
  "name": "Mukai-awagasaki",
  "country": "JP",
  "coord": {
    "lon": 136.633331,
    "lat": 36.633331
  }
}, {
  "id": 543138,
  "name": "Kozlovka",
  "country": "RU",
  "coord": {
    "lon": 35.196388,
    "lat": 54.790001
  }
}, {
  "id": 525713,
  "name": "Mokroye",
  "country": "RU",
  "coord": {
    "lon": 35.23056,
    "lat": 54.759441
  }
}, {
  "id": 817438,
  "name": "Podbor’ye",
  "country": "RU",
  "coord": {
    "lon": 35.261669,
    "lat": 54.775002
  }
}, {
  "id": 538108,
  "name": "Kuvshinovo",
  "country": "RU",
  "coord": {
    "lon": 35.275829,
    "lat": 54.78056
  }
}, {
  "id": 545992,
  "name": "Kolykhmanovo",
  "country": "RU",
  "coord": {
    "lon": 35.285,
    "lat": 54.763062
  }
}, {
  "id": 483269,
  "name": "Terskol",
  "country": "RU",
  "coord": {
    "lon": 42.515282,
    "lat": 43.25528
  }
}, {
  "id": 1541618,
  "name": "Zaton",
  "country": "RU",
  "coord": {
    "lon": 82.859718,
    "lat": 55.032219
  }
}, {
  "id": 2014927,
  "name": "Tulun",
  "country": "RU",
  "coord": {
    "lon": 100.57917,
    "lat": 54.561111
  }
}, {
  "id": 2018046,
  "name": "Perevoz",
  "country": "RU",
  "coord": {
    "lon": 100.633331,
    "lat": 54.549999
  }
}, {
  "id": 2052144,
  "name": "Azey",
  "country": "RU",
  "coord": {
    "lon": 100.76667,
    "lat": 54.509171
  }
}, {
  "id": 2027288,
  "name": "Azey",
  "country": "RU",
  "coord": {
    "lon": 100.791672,
    "lat": 54.452782
  }
}, {
  "id": 2016742,
  "name": "Sheragul",
  "country": "RU",
  "coord": {
    "lon": 100.89389,
    "lat": 54.451389
  }
}, {
  "id": 2018854,
  "name": "Novotroitsk",
  "country": "RU",
  "coord": {
    "lon": 101.044998,
    "lat": 54.45472
  }
}, {
  "id": 2015082,
  "name": "Traktovaya",
  "country": "RU",
  "coord": {
    "lon": 101.058891,
    "lat": 54.481392
  }
}, {
  "id": 2014917,
  "name": "Tulyushka",
  "country": "RU",
  "coord": {
    "lon": 101.169998,
    "lat": 54.458328
  }
}, {
  "id": 2019963,
  "name": "Mingatuy",
  "country": "RU",
  "coord": {
    "lon": 101.301392,
    "lat": 54.431938
  }
}, {
  "id": 2052150,
  "name": "Yelanskiy",
  "country": "RU",
  "coord": {
    "lon": 101.371109,
    "lat": 54.34972
  }
}, {
  "id": 2021093,
  "name": "Kuytun",
  "country": "RU",
  "coord": {
    "lon": 101.503609,
    "lat": 54.341942
  }
}, {
  "id": 2023085,
  "name": "Kas’yanovka",
  "country": "RU",
  "coord": {
    "lon": 101.583328,
    "lat": 54.316669
  }
}, {
  "id": 804310,
  "name": "Tashlinskiy",
  "country": "RU",
  "coord": {
    "lon": 42.088329,
    "lat": 45.098061
  }
}, {
  "id": 518310,
  "name": "Novo-Pokrovskoye",
  "country": "RU",
  "coord": {
    "lon": 47.98333,
    "lat": 46.299999
  }
}, {
  "id": 804751,
  "name": "Salyno-Khulsunskiye",
  "country": "RU",
  "coord": {
    "lon": 44.338058,
    "lat": 46.38694
  }
}, {
  "id": 2121529,
  "name": "Sakhalinskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 143,
    "lat": 50
  }
}, {
  "id": 2124604,
  "name": "Khomutovo",
  "country": "RU",
  "coord": {
    "lon": 142.744431,
    "lat": 46.885979
  }
}, {
  "id": 712443,
  "name": "Berdyanskoye",
  "country": "UA",
  "coord": {
    "lon": 37.44722,
    "lat": 47.100559
  }
}, {
  "id": 8144372,
  "name": "Kirlichnyy",
  "country": "RU",
  "coord": {
    "lon": 39.835018,
    "lat": 47.252258
  }
}, {
  "id": 1517381,
  "name": "Shyghys Qazaqstan Oblysy",
  "country": "KZ",
  "coord": {
    "lon": 82,
    "lat": 48.5
  }
}, {
  "id": 1517060,
  "name": "Zaysan",
  "country": "KZ",
  "coord": {
    "lon": 84.866669,
    "lat": 47.466671
  }
}, {
  "id": 2020162,
  "name": "Matveyevka",
  "country": "RU",
  "coord": {
    "lon": 135.190002,
    "lat": 48.548889
  }
}, {
  "id": 560399,
  "name": "Gonchary",
  "country": "RU",
  "coord": {
    "lon": 44.355831,
    "lat": 48.794998
  }
}, {
  "id": 2024173,
  "name": "Gardami",
  "country": "RU",
  "coord": {
    "lon": 136.366669,
    "lat": 49.25
  }
}, {
  "id": 1520066,
  "name": "Praporshchikovo",
  "country": "KZ",
  "coord": {
    "lon": 82.433327,
    "lat": 50.049999
  }
}, {
  "id": 2027748,
  "name": "Amurskaya Oblast’",
  "country": "RU",
  "coord": {
    "lon": 128,
    "lat": 54
  }
}, {
  "id": 809954,
  "name": "Muralevo",
  "country": "RU",
  "coord": {
    "lon": 36.294331,
    "lat": 51.79583
  }
}, {
  "id": 483828,
  "name": "Tekstil’shchik",
  "country": "RU",
  "coord": {
    "lon": 37.844719,
    "lat": 55.94083
  }
}, {
  "id": 1495797,
  "name": "Ovsyanka",
  "country": "RU",
  "coord": {
    "lon": 92.551941,
    "lat": 55.9575
  }
}, {
  "id": 1509223,
  "name": "Bol’shoy Istok",
  "country": "RU",
  "coord": {
    "lon": 60.783298,
    "lat": 56.719501
  }
}, {
  "id": 592170,
  "name": "Harjumaa",
  "country": "EE",
  "coord": {
    "lon": 24.75,
    "lat": 59.416672
  }
}, {
  "id": 7522301,
  "name": "Kernu vald",
  "country": "EE",
  "coord": {
    "lon": 24.415819,
    "lat": 59.16851
  }
}, {
  "id": 2013727,
  "name": "Vanavara",
  "country": "RU",
  "coord": {
    "lon": 102.279716,
    "lat": 60.34
  }
}, {
  "id": 2020221,
  "name": "Markha",
  "country": "RU",
  "coord": {
    "lon": 129.726944,
    "lat": 62.105282
  }
}, {
  "id": 6217203,
  "name": "Allenton",
  "country": "NZ",
  "coord": {
    "lon": 171.740112,
    "lat": -43.888329
  }
}, {
  "id": 6241300,
  "name": "Whakarewarewa",
  "country": "NZ",
  "coord": {
    "lon": 176.250214,
    "lat": -38.158218
  }
}, {
  "id": 7839424,
  "name": "Grant",
  "country": "AU",
  "coord": {
    "lon": 140.633163,
    "lat": -37.836418
  }
}, {
  "id": 2177022,
  "name": "Bamarong",
  "country": "AU",
  "coord": {
    "lon": 150.533325,
    "lat": -34.900002
  }
}, {
  "id": 3883281,
  "name": "Región del Libertador General Bernardo O’Higgins",
  "country": "CL",
  "coord": {
    "lon": -71,
    "lat": -34.5
  }
}, {
  "id": 3882585,
  "name": "Lo Moscoso",
  "country": "CL",
  "coord": {
    "lon": -71.116669,
    "lat": -34.599998
  }
}, {
  "id": 2058645,
  "name": "State of Western Australia",
  "country": "AU",
  "coord": {
    "lon": 122,
    "lat": -25
  }
}, {
  "id": 2063213,
  "name": "Plantagenet Shire",
  "country": "AU",
  "coord": {
    "lon": 117.597527,
    "lat": -34.62508
  }
}, {
  "id": 2065724,
  "name": "Mortigallup",
  "country": "AU",
  "coord": {
    "lon": 117.51667,
    "lat": -34.466671
  }
}, {
  "id": 7839789,
  "name": "Wingecarribee",
  "country": "AU",
  "coord": {
    "lon": 150.354858,
    "lat": -34.49091
  }
}, {
  "id": 2147795,
  "name": "Sutton Forest",
  "country": "AU",
  "coord": {
    "lon": 150.316666,
    "lat": -34.583328
  }
}, {
  "id": 7839730,
  "name": "Hay",
  "country": "AU",
  "coord": {
    "lon": 144.580276,
    "lat": -34.15731
  }
}, {
  "id": 2163774,
  "name": "Hay",
  "country": "AU",
  "coord": {
    "lon": 144.850006,
    "lat": -34.5
  }
}, {
  "id": 3429959,
  "name": "Piñero",
  "country": "AR",
  "coord": {
    "lon": -58.75,
    "lat": -34.533329
  }
}, {
  "id": 7839434,
  "name": "Mallala",
  "country": "AU",
  "coord": {
    "lon": 138.427826,
    "lat": -34.510349
  }
}, {
  "id": 7839360,
  "name": "Fairfield",
  "country": "AU",
  "coord": {
    "lon": 150.901047,
    "lat": -33.86742
  }
}, {
  "id": 2163136,
  "name": "Hornsby Shire",
  "country": "AU",
  "coord": {
    "lon": 151.109528,
    "lat": -33.583149
  }
}, {
  "id": 2153778,
  "name": "Parkes",
  "country": "AU",
  "coord": {
    "lon": 148.183334,
    "lat": -33.133331
  }
}, {
  "id": 2165051,
  "name": "Goobang",
  "country": "AU",
  "coord": {
    "lon": 148.25,
    "lat": -33.099998
  }
}, {
  "id": 969582,
  "name": "Noupoort",
  "country": "ZA",
  "coord": {
    "lon": 24.949909,
    "lat": -31.187361
  }
}, {
  "id": 2152274,
  "name": "State of Queensland",
  "country": "AU",
  "coord": {
    "lon": 145,
    "lat": -20
  }
}, {
  "id": 7839393,
  "name": "Southern Downs",
  "country": "AU",
  "coord": {
    "lon": 151.921646,
    "lat": -28.502649
  }
}, {
  "id": 2177796,
  "name": "Applethorpe",
  "country": "AU",
  "coord": {
    "lon": 151.966675,
    "lat": -28.616671
  }
}, {
  "id": 940908,
  "name": "Welkom",
  "country": "ZA",
  "coord": {
    "lon": 31.27319,
    "lat": -28.48925
  }
}, {
  "id": 2166456,
  "name": "Fleurbaix",
  "country": "AU",
  "coord": {
    "lon": 151.916672,
    "lat": -28.533331
  }
}, {
  "id": 7839581,
  "name": "Gold Coast",
  "country": "AU",
  "coord": {
    "lon": 153.36055,
    "lat": -27.97851
  }
}, {
  "id": 2175860,
  "name": "Bilinga",
  "country": "AU",
  "coord": {
    "lon": 153.516663,
    "lat": -28.16667
  }
}, {
  "id": 1003790,
  "name": "Fraaiuitzicht",
  "country": "ZA",
  "coord": {
    "lon": 28.195601,
    "lat": -28.093201
  }
}, {
  "id": 7839392,
  "name": "South Burnett",
  "country": "AU",
  "coord": {
    "lon": 151.601654,
    "lat": -26.40077
  }
}, {
  "id": 2163334,
  "name": "Hodgleigh",
  "country": "AU",
  "coord": {
    "lon": 151.933334,
    "lat": -26.633329
  }
}, {
  "id": 3451220,
  "name": "Rio da Areia",
  "country": "BR",
  "coord": {
    "lon": -50.599998,
    "lat": -26.5
  }
}, {
  "id": 1085598,
  "name": "Province of North-West",
  "country": "ZA",
  "coord": {
    "lon": 26,
    "lat": -26.5
  }
}, {
  "id": 976897,
  "name": "Mesa",
  "country": "ZA",
  "coord": {
    "lon": 26.98333,
    "lat": -26.48333
  }
}, {
  "id": 7839603,
  "name": "Meekatharra",
  "country": "AU",
  "coord": {
    "lon": 118.999741,
    "lat": -25.303301
  }
}, {
  "id": 2078058,
  "name": "Abbotts",
  "country": "AU",
  "coord": {
    "lon": 118.383331,
    "lat": -26.316669
  }
}, {
  "id": 1085594,
  "name": "Gauteng",
  "country": "ZA",
  "coord": {
    "lon": 28.25,
    "lat": -26.08333
  }
}, {
  "id": 1001642,
  "name": "Glenharvie",
  "country": "ZA",
  "coord": {
    "lon": 27.615919,
    "lat": -26.389891
  }
}, {
  "id": 7302797,
  "name": "Eden Glen",
  "country": "ZA",
  "coord": {
    "lon": 28.168591,
    "lat": -26.132299
  }
}, {
  "id": 3860289,
  "name": "Departamento de Copo",
  "country": "AR",
  "coord": {
    "lon": -62.75,
    "lat": -26
  }
}, {
  "id": 3843819,
  "name": "Monte Quemado",
  "country": "AR",
  "coord": {
    "lon": -62.830189,
    "lat": -25.805651
  }
}, {
  "id": 3455077,
  "name": "Estado do Parana",
  "country": "BR",
  "coord": {
    "lon": -51,
    "lat": -24
  }
}, {
  "id": 3453535,
  "name": "Piraquara",
  "country": "BR",
  "coord": {
    "lon": -49.063332,
    "lat": -25.441669
  }
}, {
  "id": 1017115,
  "name": "Boschrand",
  "country": "ZA",
  "coord": {
    "lon": 30.956949,
    "lat": -25.41736
  }
}, {
  "id": 1105748,
  "name": "Soutpan",
  "country": "ZA",
  "coord": {
    "lon": 28.10306,
    "lat": -25.407221
  }
}, {
  "id": 3471324,
  "name": "Atuba",
  "country": "BR",
  "coord": {
    "lon": -49.23333,
    "lat": -25.433331
  }
}, {
  "id": 3456005,
  "name": "Olaria",
  "country": "BR",
  "coord": {
    "lon": -49.166672,
    "lat": -25.23333
  }
}, {
  "id": 6355222,
  "name": "Yulara",
  "country": "AU",
  "coord": {
    "lon": 130.988907,
    "lat": -25.240601
  }
}, {
  "id": 933726,
  "name": "Hukuntsi",
  "country": "BW",
  "coord": {
    "lon": 21.75,
    "lat": -24
  }
}, {
  "id": 1003197,
  "name": "Ga-Modjadji",
  "country": "ZA",
  "coord": {
    "lon": 30.439939,
    "lat": -23.51623
  }
}, {
  "id": 966466,
  "name": "Palmietfontein",
  "country": "ZA",
  "coord": {
    "lon": 29.25572,
    "lat": -23.53479
  }
}, {
  "id": 978678,
  "name": "Marowe",
  "country": "ZA",
  "coord": {
    "lon": 29.26236,
    "lat": -23.50816
  }
}, {
  "id": 7839681,
  "name": "Alice Springs",
  "country": "AU",
  "coord": {
    "lon": 133.833206,
    "lat": -23.731001
  }
}, {
  "id": 2077895,
  "name": "Alice Springs",
  "country": "AU",
  "coord": {
    "lon": 133.883331,
    "lat": -23.700001
  }
}, {
  "id": 3448433,
  "name": "Estado de São Paulo",
  "country": "BR",
  "coord": {
    "lon": -49,
    "lat": -22
  }
}, {
  "id": 6322112,
  "name": "Arujá",
  "country": "BR",
  "coord": {
    "lon": -46.31583,
    "lat": -23.3841
  }
}, {
  "id": 979031,
  "name": "Mara",
  "country": "ZA",
  "coord": {
    "lon": 29.399731,
    "lat": -23.09086
  }
}, {
  "id": 4159872,
  "name": "Islandia",
  "country": "US",
  "coord": {
    "lon": -80.252548,
    "lat": 25.37817
  }
}, {
  "id": 4736286,
  "name": "Texas",
  "country": "US",
  "coord": {
    "lon": -99.25061,
    "lat": 31.250441
  }
}, {
  "id": 4676547,
  "name": "Brooks County",
  "country": "US",
  "coord": {
    "lon": -98.23362,
    "lat": 27.033661
  }
}, {
  "id": 4714936,
  "name": "Noria Willie",
  "country": "US",
  "coord": {
    "lon": -98.127228,
    "lat": 27.0856
  }
}, {
  "id": 4158643,
  "name": "Highlands County",
  "country": "US",
  "coord": {
    "lon": -81.349792,
    "lat": 27.366989
  }
}, {
  "id": 4178270,
  "name": "Wild Island",
  "country": "US",
  "coord": {
    "lon": -81.203682,
    "lat": 27.37282
  }
}, {
  "id": 4158712,
  "name": "Hillsborough County",
  "country": "US",
  "coord": {
    "lon": -82.349808,
    "lat": 27.916969
  }
}, {
  "id": 7217562,
  "name": "Lindsey",
  "country": "US",
  "coord": {
    "lon": -82.211403,
    "lat": 28.005199
  }
}, {
  "id": 4722147,
  "name": "Refugio County",
  "country": "US",
  "coord": {
    "lon": -97.166939,
    "lat": 28.33362
  }
}, {
  "id": 4684064,
  "name": "Cranell",
  "country": "US",
  "coord": {
    "lon": -97.392769,
    "lat": 28.16807
  }
}, {
  "id": 4678165,
  "name": "Calhoun County",
  "country": "US",
  "coord": {
    "lon": -96.61692,
    "lat": 28.466949
  }
}, {
  "id": 4331987,
  "name": "Louisiana",
  "country": "US",
  "coord": {
    "lon": -92.000397,
    "lat": 31.000469
  }
}, {
  "id": 4337452,
  "name": "Plaquemines Parish",
  "country": "US",
  "coord": {
    "lon": -89.700058,
    "lat": 29.45022
  }
}, {
  "id": 4318404,
  "name": "Burrwood (historical)",
  "country": "US",
  "coord": {
    "lon": -89.377548,
    "lat": 28.96829
  }
}, {
  "id": 4341715,
  "name": "Slagle",
  "country": "US",
  "coord": {
    "lon": -93.12738,
    "lat": 31.20241
  }
}, {
  "id": 4056592,
  "name": "Conecuh County",
  "country": "US",
  "coord": {
    "lon": -86.983307,
    "lat": 31.466829
  }
}, {
  "id": 4053940,
  "name": "Castleberry",
  "country": "US",
  "coord": {
    "lon": -87.022469,
    "lat": 31.299061
  }
}, {
  "id": 4057517,
  "name": "Crenshaw County",
  "country": "US",
  "coord": {
    "lon": -86.316628,
    "lat": 31.73349
  }
}, {
  "id": 4059229,
  "name": "Dozier",
  "country": "US",
  "coord": {
    "lon": -86.36496,
    "lat": 31.492109
  }
}, {
  "id": 4695945,
  "name": "Hamilton County",
  "country": "US",
  "coord": {
    "lon": -98.083641,
    "lat": 31.71682
  }
}, {
  "id": 4717770,
  "name": "Parsley Crossing",
  "country": "US",
  "coord": {
    "lon": -98.112259,
    "lat": 31.567659
  }
}, {
  "id": 5308878,
  "name": "Pima County",
  "country": "US",
  "coord": {
    "lon": -112.003464,
    "lat": 32.000351
  }
}, {
  "id": 7262440,
  "name": "Valencia West",
  "country": "US",
  "coord": {
    "lon": -111.114143,
    "lat": 32.132381
  }
}, {
  "id": 5319409,
  "name": "Vanar",
  "country": "US",
  "coord": {
    "lon": -109.095062,
    "lat": 32.241192
  }
}, {
  "id": 4316180,
  "name": "Bedford",
  "country": "US",
  "coord": {
    "lon": -91.015106,
    "lat": 32.240978
  }
}, {
  "id": 5454967,
  "name": "Alvarado",
  "country": "US",
  "coord": {
    "lon": -106.237213,
    "lat": 32.13649
  }
}, {
  "id": 5967149,
  "name": "Grimsby",
  "country": "CA",
  "coord": {
    "lon": -79.566307,
    "lat": 43.200111
  }
}, {
  "id": 5895710,
  "name": "Beamsville",
  "country": "CA",
  "coord": {
    "lon": -79.48291,
    "lat": 43.166809
  }
}, {
  "id": 5974031,
  "name": "Hensall",
  "country": "CA",
  "coord": {
    "lon": -81.499763,
    "lat": 43.433392
  }
}, {
  "id": 6091530,
  "name": "Nova Scotia",
  "country": "CA",
  "coord": {
    "lon": -62.99865,
    "lat": 45.000149
  }
}, {
  "id": 6170553,
  "name": "Turriff",
  "country": "CA",
  "coord": {
    "lon": -77.749489,
    "lat": 44.983429
  }
}, {
  "id": 6076966,
  "name": "Montérégie",
  "country": "CA",
  "coord": {
    "lon": -73.099152,
    "lat": 45.383381
  }
}, {
  "id": 5978683,
  "name": "Huntingdon",
  "country": "CA",
  "coord": {
    "lon": -74.165932,
    "lat": 45.083389
  }
}, {
  "id": 6137509,
  "name": "Saint-Bernard-de-Lacolle",
  "country": "CA",
  "coord": {
    "lon": -73.415863,
    "lat": 45.083382
  }
}, {
  "id": 5991285,
  "name": "Kerrowgare",
  "country": "CA",
  "coord": {
    "lon": -62.431911,
    "lat": 45.40015
  }
}, {
  "id": 5906575,
  "name": "Bourget",
  "country": "CA",
  "coord": {
    "lon": -75.1493,
    "lat": 45.433399
  }
}, {
  "id": 5881954,
  "name": "Aboushagan Road",
  "country": "CA",
  "coord": {
    "lon": -64.348747,
    "lat": 45.983452
  }
}, {
  "id": 5886889,
  "name": "Argyle Shore",
  "country": "CA",
  "coord": {
    "lon": -63.348701,
    "lat": 46.166821
  }
}, {
  "id": 6325484,
  "name": "Cap-Saint-Ignace",
  "country": "CA",
  "coord": {
    "lon": -70.459999,
    "lat": 47.035301
  }
}, {
  "id": 6691318,
  "name": "Bas-Saint-Laurent",
  "country": "CA",
  "coord": {
    "lon": -68.022659,
    "lat": 48.050301
  }
}, {
  "id": 6944114,
  "name": "Sainte-Marguerite",
  "country": "CA",
  "coord": {
    "lon": -67.083893,
    "lat": 48.29998
  }
}, {
  "id": 6141570,
  "name": "Savanne",
  "country": "CA",
  "coord": {
    "lon": -90.25016,
    "lat": 48.950119
  }
}, {
  "id": 5942636,
  "name": "Driftwood",
  "country": "CA",
  "coord": {
    "lon": -81.383072,
    "lat": 49.133492
  }
}, {
  "id": 5975223,
  "name": "Hilliers",
  "country": "CA",
  "coord": {
    "lon": -124.486069,
    "lat": 49.299629
  }
}, {
  "id": 6077557,
  "name": "Moonbeam",
  "country": "CA",
  "coord": {
    "lon": -82.14978,
    "lat": 49.35022
  }
}, {
  "id": 5958512,
  "name": "Frontier",
  "country": "CA",
  "coord": {
    "lon": -108.5681,
    "lat": 49.200031
  }
}, {
  "id": 6148378,
  "name": "Sioux Narrows",
  "country": "CA",
  "coord": {
    "lon": -94.072151,
    "lat": 49.397789
  }
}, {
  "id": 5958975,
  "name": "Gahern",
  "country": "CA",
  "coord": {
    "lon": -111.084938,
    "lat": 49.31673
  }
}, {
  "id": 6111984,
  "name": "Porto Rico",
  "country": "CA",
  "coord": {
    "lon": -117.235512,
    "lat": 49.333179
  }
}, {
  "id": 6111529,
  "name": "Portage la Prairie",
  "country": "CA",
  "coord": {
    "lon": -98.292633,
    "lat": 49.97282
  }
}, {
  "id": 6128736,
  "name": "Royal Park",
  "country": "CA",
  "coord": {
    "lon": -112.201843,
    "lat": 53.533451
  }
}, {
  "id": 2065594,
  "name": "Mount Isa",
  "country": "AU",
  "coord": {
    "lon": 139.5,
    "lat": -20.73333
  }
}, {
  "id": 3371202,
  "name": "Kunene",
  "country": "NA",
  "coord": {
    "lon": 13.75,
    "lat": -19.41667
  }
}, {
  "id": 3353715,
  "name": "Outjo",
  "country": "NA",
  "coord": {
    "lon": 16.15,
    "lat": -20.116671
  }
}, {
  "id": 3452805,
  "name": "Pôrto do Sapé",
  "country": "BR",
  "coord": {
    "lon": -49.01667,
    "lat": -20.133329
  }
}, {
  "id": 3472492,
  "name": "Altamira",
  "country": "BR",
  "coord": {
    "lon": -43.566669,
    "lat": -19.549999
  }
}, {
  "id": 6316808,
  "name": "Cardeal Mota",
  "country": "BR",
  "coord": {
    "lon": -43.621391,
    "lat": -19.33333
  }
}, {
  "id": 3934707,
  "name": "Mollendo",
  "country": "PE",
  "coord": {
    "lon": -72.014717,
    "lat": -17.02306
  }
}, {
  "id": 2207391,
  "name": "Holloways Beach",
  "country": "AU",
  "coord": {
    "lon": 145.739227,
    "lat": -16.842091
  }
}, {
  "id": 902106,
  "name": "Namalindi",
  "country": "ZM",
  "coord": {
    "lon": 27.1,
    "lat": -16.41667
  }
}, {
  "id": 886841,
  "name": "Mashonaland West Province",
  "country": "ZW",
  "coord": {
    "lon": 29.5,
    "lat": -17
  }
}, {
  "id": 887648,
  "name": "Makuti",
  "country": "ZW",
  "coord": {
    "lon": 29.251921,
    "lat": -16.316481
  }
}, {
  "id": 3455976,
  "name": "Ôlho d’Água",
  "country": "BR",
  "coord": {
    "lon": -48.599998,
    "lat": -16.033331
  }
}, {
  "id": 3463504,
  "name": "Distrito Federal",
  "country": "BR",
  "coord": {
    "lon": -47.75,
    "lat": -15.75
  }
}, {
  "id": 3462672,
  "name": "Gama",
  "country": "BR",
  "coord": {
    "lon": -48.083328,
    "lat": -15.95
  }
}, {
  "id": 3461936,
  "name": "Guará",
  "country": "BR",
  "coord": {
    "lon": -47.900002,
    "lat": -15.83333
  }
}, {
  "id": 3930975,
  "name": "Quepacc",
  "country": "PE",
  "coord": {
    "lon": -73.241943,
    "lat": -15.45861
  }
}, {
  "id": 1085582,
  "name": "Aldeia Chivungo",
  "country": "MZ",
  "coord": {
    "lon": 32.458061,
    "lat": -15.28611
  }
}, {
  "id": 921064,
  "name": "Central Province",
  "country": "ZM",
  "coord": {
    "lon": 29,
    "lat": -14
  }
}, {
  "id": 904264,
  "name": "Mungule Court",
  "country": "ZM",
  "coord": {
    "lon": 28.1623,
    "lat": -15.22904
  }
}, {
  "id": 1047925,
  "name": "Comaxinda",
  "country": "MZ",
  "coord": {
    "lon": 33.421108,
    "lat": -14.47889
  }
}, {
  "id": 3947018,
  "name": "Departamento de Ayacucho",
  "country": "PE",
  "coord": {
    "lon": -74,
    "lat": -14
  }
}, {
  "id": 3936542,
  "name": "Layo",
  "country": "PE",
  "coord": {
    "lon": -74.566673,
    "lat": -14.48333
  }
}, {
  "id": 3466255,
  "name": "Chavantina",
  "country": "BR",
  "coord": {
    "lon": -52.349998,
    "lat": -14.66667
  }
}, {
  "id": 908734,
  "name": "Lyembo",
  "country": "ZM",
  "coord": {
    "lon": 28.23333,
    "lat": -14.23333
  }
}, {
  "id": 929742,
  "name": "Guma",
  "country": "MW",
  "coord": {
    "lon": 34.200001,
    "lat": -14.1
  }
}, {
  "id": 929975,
  "name": "Dowa District",
  "country": "MW",
  "coord": {
    "lon": 33.82378,
    "lat": -13.60098
  }
}, {
  "id": 926523,
  "name": "Mjudzi",
  "country": "MW",
  "coord": {
    "lon": 33.464088,
    "lat": -13.57718
  }
}, {
  "id": 924716,
  "name": "Nkhongue",
  "country": "MW",
  "coord": {
    "lon": 33.46146,
    "lat": -13.51094
  }
}, {
  "id": 1030006,
  "name": "Província de Niassa",
  "country": "MZ",
  "coord": {
    "lon": 37,
    "lat": -13
  }
}, {
  "id": 1086131,
  "name": "Aldeia Nacapa",
  "country": "MZ",
  "coord": {
    "lon": 37.386669,
    "lat": -13.42833
  }
}, {
  "id": 900594,
  "name": "North-Western Province",
  "country": "ZM",
  "coord": {
    "lon": 25,
    "lat": -13
  }
}, {
  "id": 919814,
  "name": "Chikonkwelo",
  "country": "ZM",
  "coord": {
    "lon": 24.089741,
    "lat": -13.31454
  }
}, {
  "id": 901218,
  "name": "Ngambo",
  "country": "ZM",
  "coord": {
    "lon": 25.66667,
    "lat": -13.36667
  }
}, {
  "id": 904838,
  "name": "Mulaya",
  "country": "ZM",
  "coord": {
    "lon": 30.116671,
    "lat": -13.13333
  }
}, {
  "id": 924703,
  "name": "Nkhotakota District",
  "country": "MW",
  "coord": {
    "lon": 34.082981,
    "lat": -12.80417
  }
}, {
  "id": 930813,
  "name": "Chinemba",
  "country": "MW",
  "coord": {
    "lon": 34.17828,
    "lat": -12.54451
  }
}, {
  "id": 900969,
  "name": "Ngwata",
  "country": "ZM",
  "coord": {
    "lon": 33.099998,
    "lat": -12.16667
  }
}, {
  "id": 7839403,
  "name": "East Arnhem",
  "country": "AU",
  "coord": {
    "lon": 135.822815,
    "lat": -12.66175
  }
}, {
  "id": 2064735,
  "name": "Nhulunbuy",
  "country": "AU",
  "coord": {
    "lon": 136.766663,
    "lat": -12.23333
  }
}, {
  "id": 3929792,
  "name": "San Borja",
  "country": "PE",
  "coord": {
    "lon": -77.01107,
    "lat": -12.09841
  }
}, {
  "id": 3937485,
  "name": "Departamento de Junín",
  "country": "PE",
  "coord": {
    "lon": -75,
    "lat": -11.5
  }
}, {
  "id": 3944223,
  "name": "Chaucancha",
  "country": "PE",
  "coord": {
    "lon": -75.116669,
    "lat": -12.08333
  }
}, {
  "id": 916211,
  "name": "Kabuko",
  "country": "ZM",
  "coord": {
    "lon": 31.287729,
    "lat": -11.57095
  }
}, {
  "id": 3665314,
  "name": "Anori",
  "country": "BR",
  "coord": {
    "lon": -67.333328,
    "lat": -8.33333
  }
}, {
  "id": 205297,
  "name": "Tambo",
  "country": "CD",
  "coord": {
    "lon": 27.25,
    "lat": -8.3
  }
}, {
  "id": 1641644,
  "name": "Kampung Malaju",
  "country": "ID",
  "coord": {
    "lon": 118.400002,
    "lat": -8.31667
  }
}, {
  "id": 1642668,
  "name": "Provinsi Jawa Timur",
  "country": "ID",
  "coord": {
    "lon": 112.509903,
    "lat": -7.7394
  }
}, {
  "id": 1642669,
  "name": "Provinsi Jawa Tengah",
  "country": "ID",
  "coord": {
    "lon": 110,
    "lat": -7.5
  }
}, {
  "id": 6410546,
  "name": "Bangun",
  "country": "ID",
  "coord": {
    "lon": 111.311394,
    "lat": -7.36472
  }
}, {
  "id": 6786208,
  "name": "Ngasin",
  "country": "ID",
  "coord": {
    "lon": 112.458,
    "lat": -7.2245
  }
}, {
  "id": 1642672,
  "name": "Provinsi Jawa Barat",
  "country": "ID",
  "coord": {
    "lon": 107.5,
    "lat": -6.75
  }
}, {
  "id": 2311502,
  "name": "Sengo",
  "country": "CD",
  "coord": {
    "lon": 18.950001,
    "lat": -7.13333
  }
}, {
  "id": 6786069,
  "name": "Tambakboyo",
  "country": "ID",
  "coord": {
    "lon": 112.427101,
    "lat": -7.1337
  }
}, {
  "id": 1626998,
  "name": "Simpeureum",
  "country": "ID",
  "coord": {
    "lon": 107.333328,
    "lat": -6.53333
  }
}, {
  "id": 153214,
  "name": "Morogoro Region",
  "country": "TZ",
  "coord": {
    "lon": 37,
    "lat": -8
  }
}, {
  "id": 435764,
  "name": "Manyara Region",
  "country": "TZ",
  "coord": {
    "lon": 36.666672,
    "lat": -4.75
  }
}, {
  "id": 154747,
  "name": "Marwa",
  "country": "TZ",
  "coord": {
    "lon": 37.533329,
    "lat": -4.06667
  }
}, {
  "id": 3658394,
  "name": "Republic of Ecuador",
  "country": "EC",
  "coord": {
    "lon": -77.5,
    "lat": -2
  }
}, {
  "id": 3654665,
  "name": "Provincia de Loja",
  "country": "EC",
  "coord": {
    "lon": -79.5,
    "lat": -4.16667
  }
}, {
  "id": 3650095,
  "name": "Yanacocha",
  "country": "EC",
  "coord": {
    "lon": -79.216667,
    "lat": -3.98333
  }
}, {
  "id": 1627529,
  "name": "Serapat",
  "country": "ID",
  "coord": {
    "lon": 114.533333,
    "lat": -3.23333
  }
}, {
  "id": 2569147,
  "name": "Balémon",
  "country": "CG",
  "coord": {
    "lon": 16.11972,
    "lat": -2.36278
  }
}, {
  "id": 1645357,
  "name": "Dolupo",
  "country": "ID",
  "coord": {
    "lon": 121.283333,
    "lat": -2.3
  }
}, {
  "id": 211384,
  "name": "Longanio",
  "country": "CD",
  "coord": {
    "lon": 23.299999,
    "lat": -2.25
  }
}, {
  "id": 3657505,
  "name": "Provincia del Guayas",
  "country": "EC",
  "coord": {
    "lon": -79.833328,
    "lat": -2
  }
}, {
  "id": 3656537,
  "name": "Hacienda Norton",
  "country": "EC",
  "coord": {
    "lon": -79.400002,
    "lat": -2.16667
  }
}, {
  "id": 400744,
  "name": "Rift Valley Province",
  "country": "KE",
  "coord": {
    "lon": 36,
    "lat": 0.5
  }
}, {
  "id": 181562,
  "name": "Poka",
  "country": "KE",
  "coord": {
    "lon": 37.450001,
    "lat": -2.13333
  }
}, {
  "id": 3401193,
  "name": "Curuai",
  "country": "BR",
  "coord": {
    "lon": -55.47583,
    "lat": -2.27194
  }
}, {
  "id": 1627978,
  "name": "Selindung",
  "country": "ID",
  "coord": {
    "lon": 106.099998,
    "lat": -2.06667
  }
}, {
  "id": 183689,
  "name": "Nginda",
  "country": "KE",
  "coord": {
    "lon": 40.676601,
    "lat": -2.06981
  }
}, {
  "id": 3653224,
  "name": "Provincia de Pichincha",
  "country": "EC",
  "coord": {
    "lon": -78.5,
    "lat": -0.08333
  }
}, {
  "id": 3658476,
  "name": "Del Salitre",
  "country": "EC",
  "coord": {
    "lon": -78.366669,
    "lat": -0.61667
  }
}, {
  "id": 1626197,
  "name": "Provinsi Sumatera Barat",
  "country": "ID",
  "coord": {
    "lon": 100.5,
    "lat": -1
  }
}, {
  "id": 3654451,
  "name": "Provincia de Manabí",
  "country": "EC",
  "coord": {
    "lon": -80.083328,
    "lat": -0.66667
  }
}, {
  "id": 3658194,
  "name": "Eloy Alfaro",
  "country": "EC",
  "coord": {
    "lon": -80.083328,
    "lat": -0.4
  }
}, {
  "id": 182763,
  "name": "Nyanza Province",
  "country": "KE",
  "coord": {
    "lon": 34.5,
    "lat": -0.5
  }
}, {
  "id": 1623673,
  "name": "Toayan",
  "country": "ID",
  "coord": {
    "lon": 117.050003,
    "lat": -0.38333
  }
}, {
  "id": 1635333,
  "name": "Merus",
  "country": "ID",
  "coord": {
    "lon": 109.349998,
    "lat": 1.06667
  }
}, {
  "id": 1641510,
  "name": "Kangboi",
  "country": "ID",
  "coord": {
    "lon": 104.050003,
    "lat": 1.08333
  }
}, {
  "id": 3395501,
  "name": "Maracá",
  "country": "BR",
  "coord": {
    "lon": -50.5,
    "lat": 2.13333
  }
}, {
  "id": 1623024,
  "name": "Tumbit",
  "country": "ID",
  "coord": {
    "lon": 117.333328,
    "lat": 2.05
  }
}, {
  "id": 235483,
  "name": "Adok",
  "country": "UG",
  "coord": {
    "lon": 32.549999,
    "lat": 2.15
  }
}, {
  "id": 8030561,
  "name": "Napak District",
  "country": "UG",
  "coord": {
    "lon": 34.168339,
    "lat": 2.38153
  }
}, {
  "id": 230088,
  "name": "Lokiporangatome",
  "country": "UG",
  "coord": {
    "lon": 34.349998,
    "lat": 2.33333
  }
}, {
  "id": 3681344,
  "name": "Departamento del Guaviare",
  "country": "CO",
  "coord": {
    "lon": -72.820282,
    "lat": 1.68944
  }
}, {
  "id": 6851663,
  "name": "Inspección de Policía Puerto Ospina",
  "country": "CO",
  "coord": {
    "lon": -72.391029,
    "lat": 2.47017
  }
}, {
  "id": 216139,
  "name": "Province Orientale",
  "country": "CD",
  "coord": {
    "lon": 27,
    "lat": 2.5
  }
}, {
  "id": 2221789,
  "name": "South Region",
  "country": "CM",
  "coord": {
    "lon": 11.75,
    "lat": 2.5
  }
}, {
  "id": 2235409,
  "name": "Atog-Boga",
  "country": "CM",
  "coord": {
    "lon": 10.51667,
    "lat": 3.33333
  }
}, {
  "id": 3384653,
  "name": "Bakrakondre",
  "country": "SR",
  "coord": {
    "lon": -55.700001,
    "lat": 3.8
  }
}, {
  "id": 206362,
  "name": "Pekia",
  "country": "CD",
  "coord": {
    "lon": 23.53883,
    "lat": 3.46564
  }
}, {
  "id": 2232486,
  "name": "Doumomama",
  "country": "CM",
  "coord": {
    "lon": 13.11667,
    "lat": 3.58333
  }
}, {
  "id": 219563,
  "name": "Bangenze",
  "country": "CD",
  "coord": {
    "lon": 25.66136,
    "lat": 3.88856
  }
}, {
  "id": 3674810,
  "name": "Departamento del Meta",
  "country": "CO",
  "coord": {
    "lon": -73,
    "lat": 3.5
  }
}, {
  "id": 8032140,
  "name": "Koffio",
  "country": "CI",
  "coord": {
    "lon": -3.17097,
    "lat": 5.17317
  }
}, {
  "id": 238637,
  "name": "Hele",
  "country": "CF",
  "coord": {
    "lon": 26.316669,
    "lat": 5.25
  }
}, {
  "id": 2337542,
  "name": "Imo State",
  "country": "NG",
  "coord": {
    "lon": 7.16667,
    "lat": 5.5
  }
}, {
  "id": 2343508,
  "name": "Elelem",
  "country": "NG",
  "coord": {
    "lon": 7.14768,
    "lat": 5.26566
  }
}, {
  "id": 3384481,
  "name": "Distrikt Brokopondo",
  "country": "SR",
  "coord": {
    "lon": -55.166672,
    "lat": 4.75
  }
}, {
  "id": 3383583,
  "name": "Maréchalskondre",
  "country": "SR",
  "coord": {
    "lon": -55.083328,
    "lat": 5.26667
  }
}, {
  "id": 3668562,
  "name": "Santa Rita",
  "country": "CO",
  "coord": {
    "lon": -68.361122,
    "lat": 4.86775
  }
}, {
  "id": 2231494,
  "name": "Fouy",
  "country": "CM",
  "coord": {
    "lon": 12.21667,
    "lat": 5.31667
  }
}, {
  "id": 2231326,
  "name": "Garga Sarali",
  "country": "CM",
  "coord": {
    "lon": 14.05,
    "lat": 5.33333
  }
}, {
  "id": 1685370,
  "name": "Province of Sulu",
  "country": "PH",
  "coord": {
    "lon": 121,
    "lat": 6
  }
}, {
  "id": 1723538,
  "name": "Bu-Datu",
  "country": "PH",
  "coord": {
    "lon": 120.997704,
    "lat": 6.0234
  }
}, {
  "id": 2302135,
  "name": "Chum",
  "country": "GH",
  "coord": {
    "lon": -0.16955,
    "lat": 6.04237
  }
}, {
  "id": 2297816,
  "name": "Muete",
  "country": "GH",
  "coord": {
    "lon": 0.07775,
    "lat": 6.02824
  }
}, {
  "id": 1726909,
  "name": "Banwalan",
  "country": "PH",
  "coord": {
    "lon": 125.142502,
    "lat": 6.04667
  }
}, {
  "id": 2294305,
  "name": "Twinsisim",
  "country": "GH",
  "coord": {
    "lon": -2.16135,
    "lat": 6.13009
  }
}, {
  "id": 408647,
  "name": "Lakes State",
  "country": "SS",
  "coord": {
    "lon": 30,
    "lat": 6.75
  }
}, {
  "id": 381969,
  "name": "Dolinom",
  "country": "SS",
  "coord": {
    "lon": 31.335621,
    "lat": 6.09302
  }
}, {
  "id": 7521308,
  "name": "Zamboanga Peninsula",
  "country": "PH",
  "coord": {
    "lon": 122.67366,
    "lat": 7.49432
  }
}, {
  "id": 1679428,
  "name": "Province of  Zamboanga del Sur",
  "country": "PH",
  "coord": {
    "lon": 123.319397,
    "lat": 7.9043
  }
}, {
  "id": 7521299,
  "name": "Caraga",
  "country": "PH",
  "coord": {
    "lon": 125.741669,
    "lat": 9
  }
}, {
  "id": 1685214,
  "name": "Province of Surigao del Sur",
  "country": "PH",
  "coord": {
    "lon": 126,
    "lat": 8.66667
  }
}, {
  "id": 1681027,
  "name": "Tudela",
  "country": "PH",
  "coord": {
    "lon": 126.216667,
    "lat": 8.13333
  }
}, {
  "id": 408657,
  "name": "Western Bahr el Ghazal State",
  "country": "SS",
  "coord": {
    "lon": 26,
    "lat": 8.15
  }
}, {
  "id": 373413,
  "name": "Jellab",
  "country": "SS",
  "coord": {
    "lon": 25.32703,
    "lat": 8.48527
  }
}, {
  "id": 1707668,
  "name": "Province of Lanao del Norte",
  "country": "PH",
  "coord": {
    "lon": 124,
    "lat": 8
  }
}, {
  "id": 1722546,
  "name": "Buntong",
  "country": "PH",
  "coord": {
    "lon": 124.383331,
    "lat": 8.3
  }
}, {
  "id": 1608525,
  "name": "Changwat Nakhon Si Thammarat",
  "country": "TH",
  "coord": {
    "lon": 100,
    "lat": 8.25
  }
}, {
  "id": 1117328,
  "name": "Ban Thung That",
  "country": "TH",
  "coord": {
    "lon": 99.583328,
    "lat": 8.26667
  }
}, {
  "id": 1679429,
  "name": "Province of Zamboanga del Norte",
  "country": "PH",
  "coord": {
    "lon": 122.666672,
    "lat": 8
  }
}, {
  "id": 1685789,
  "name": "Sonob",
  "country": "PH",
  "coord": {
    "lon": 123.15583,
    "lat": 8.32806
  }
}, {
  "id": 381229,
  "name": "Upper Nile State",
  "country": "SS",
  "coord": {
    "lon": 32.700001,
    "lat": 10
  }
}, {
  "id": 371450,
  "name": "Liamyok",
  "country": "SS",
  "coord": {
    "lon": 33,
    "lat": 8.36667
  }
}, {
  "id": 7667785,
  "name": "Koka",
  "country": "ET",
  "coord": {
    "lon": 39.0308,
    "lat": 8.43442
  }
}, {
  "id": 408665,
  "name": "Northern Bahr el Ghazal State",
  "country": "SS",
  "coord": {
    "lon": 27,
    "lat": 8.85
  }
}, {
  "id": 7430962,
  "name": "Bahr en Nil",
  "country": "SS",
  "coord": {
    "lon": 27.1033,
    "lat": 8.46219
  }
}, {
  "id": 1699492,
  "name": "Province of Misamis Oriental",
  "country": "PH",
  "coord": {
    "lon": 125,
    "lat": 8.75
  }
}, {
  "id": 1728159,
  "name": "Baligidian",
  "country": "PH",
  "coord": {
    "lon": 125.199997,
    "lat": 8.63333
  }
}, {
  "id": 2367252,
  "name": "Bouvolem",
  "country": "TG",
  "coord": {
    "lon": 1.08333,
    "lat": 8.6
  }
}, {
  "id": 8129222,
  "name": "Municipio Uracoa",
  "country": "VE",
  "coord": {
    "lon": -62.351639,
    "lat": 8.9996
  }
}, {
  "id": 3625693,
  "name": "Uracoa",
  "country": "VE",
  "coord": {
    "lon": -62.351639,
    "lat": 8.9996
  }
}, {
  "id": 2299978,
  "name": "Kabalima",
  "country": "GH",
  "coord": {
    "lon": -2.26086,
    "lat": 8.9561
  }
}, {
  "id": 1708954,
  "name": "Kayogyog",
  "country": "PH",
  "coord": {
    "lon": 126.12944,
    "lat": 9.04417
  }
}, {
  "id": 2343379,
  "name": "Emagiti",
  "country": "NG",
  "coord": {
    "lon": 6.03333,
    "lat": 9.06667
  }
}, {
  "id": 3703433,
  "name": "Provincia de Panamá",
  "country": "PA",
  "coord": {
    "lon": -79.25,
    "lat": 9.18333
  }
}, {
  "id": 3712451,
  "name": "Chilibrillo Número Dos",
  "country": "PA",
  "coord": {
    "lon": -79.583328,
    "lat": 9.16667
  }
}, {
  "id": 3712429,
  "name": "Chiquilleo",
  "country": "PA",
  "coord": {
    "lon": -79.550003,
    "lat": 9.21667
  }
}, {
  "id": 3643345,
  "name": "El Drago",
  "country": "VE",
  "coord": {
    "lon": -66.513786,
    "lat": 9.23652
  }
}, {
  "id": 3630104,
  "name": "Pirital",
  "country": "VE",
  "coord": {
    "lon": -66.568077,
    "lat": 9.25858
  }
}, {
  "id": 2305894,
  "name": "Adibo",
  "country": "GH",
  "coord": {
    "lon": 0.01983,
    "lat": 9.3024
  }
}, {
  "id": 330814,
  "name": "Mēta",
  "country": "ET",
  "coord": {
    "lon": 41.5075,
    "lat": 9.34556
  }
}, {
  "id": 3625974,
  "name": "Estado Trujillo",
  "country": "VE",
  "coord": {
    "lon": -70.508881,
    "lat": 9.43856
  }
}, {
  "id": 3633827,
  "name": "Los Pajones",
  "country": "VE",
  "coord": {
    "lon": -70.548828,
    "lat": 9.49697
  }
}, {
  "id": 3628051,
  "name": "San Juan de Paya",
  "country": "VE",
  "coord": {
    "lon": -67.233681,
    "lat": 9.52012
  }
}, {
  "id": 3624060,
  "name": "Republic of Costa Rica",
  "country": "CR",
  "coord": {
    "lon": -84,
    "lat": 10
  }
}, {
  "id": 3621837,
  "name": "Provincia de San José",
  "country": "CR",
  "coord": {
    "lon": -84,
    "lat": 9.66667
  }
}, {
  "id": 3621194,
  "name": "Tulín",
  "country": "CR",
  "coord": {
    "lon": -84.483673,
    "lat": 9.59608
  }
}, {
  "id": 3621054,
  "name": "Vuelta del Virilla",
  "country": "CR",
  "coord": {
    "lon": -84.109627,
    "lat": 9.95732
  }
}, {
  "id": 3742299,
  "name": "Las Dos Bocas",
  "country": "VE",
  "coord": {
    "lon": -66.481697,
    "lat": 10.21773
  }
}, {
  "id": 7521306,
  "name": "Central Visayas",
  "country": "PH",
  "coord": {
    "lon": 123.599998,
    "lat": 9.525
  }
}, {
  "id": 1717511,
  "name": "Province of Cebu",
  "country": "PH",
  "coord": {
    "lon": 123.666672,
    "lat": 9.33333
  }
}, {
  "id": 1713779,
  "name": "Esperanza",
  "country": "PH",
  "coord": {
    "lon": 123.589996,
    "lat": 10.1837
  }
}, {
  "id": 2297503,
  "name": "Nawari",
  "country": "GH",
  "coord": {
    "lon": 0.26667,
    "lat": 10.21667
  }
}, {
  "id": 2231755,
  "name": "Far North Region",
  "country": "CM",
  "coord": {
    "lon": 14.5,
    "lat": 11
  }
}, {
  "id": 6730148,
  "name": "Barawa Ladé",
  "country": "CM",
  "coord": {
    "lon": 14.14697,
    "lat": 10.24521
  }
}, {
  "id": 3643573,
  "name": "El Conflicto",
  "country": "VE",
  "coord": {
    "lon": -66.050003,
    "lat": 10.28333
  }
}, {
  "id": 1153555,
  "name": "Changwat Chumphon",
  "country": "TH",
  "coord": {
    "lon": 98.833328,
    "lat": 10.33333
  }
}, {
  "id": 1156944,
  "name": "Ban Khron",
  "country": "TH",
  "coord": {
    "lon": 99.099998,
    "lat": 10.28333
  }
}, {
  "id": 3634671,
  "name": "Loma Larga",
  "country": "VE",
  "coord": {
    "lon": -66.5,
    "lat": 10.3
  }
}, {
  "id": 3804240,
  "name": "El Silencio",
  "country": "VE",
  "coord": {
    "lon": -66.965019,
    "lat": 10.358
  }
}, {
  "id": 6268943,
  "name": "Gobolka Awdal",
  "country": "SO",
  "coord": {
    "lon": 43.5,
    "lat": 10.5
  }
}, {
  "id": 1609283,
  "name": "Laem Ngop",
  "country": "TH",
  "coord": {
    "lon": 102.39489,
    "lat": 12.1717
  }
}, {
  "id": 3618029,
  "name": "Departamento de León",
  "country": "NI",
  "coord": {
    "lon": -86.583328,
    "lat": 12.58333
  }
}, {
  "id": 3619548,
  "name": "El Papalote",
  "country": "NI",
  "coord": {
    "lon": -86.547997,
    "lat": 12.24806
  }
}, {
  "id": 1611268,
  "name": "Changawat Chanthaburi",
  "country": "TH",
  "coord": {
    "lon": 102.166672,
    "lat": 12.83333
  }
}, {
  "id": 1614614,
  "name": "Ban Pak Nam",
  "country": "TH",
  "coord": {
    "lon": 102.066673,
    "lat": 12.48333
  }
}, {
  "id": 2375167,
  "name": "Bambato",
  "country": "GW",
  "coord": {
    "lon": -14.58333,
    "lat": 12.51667
  }
}, {
  "id": 408658,
  "name": "Western Darfur State",
  "country": "SD",
  "coord": {
    "lon": 23,
    "lat": 13
  }
}, {
  "id": 7754689,
  "name": "Godosgo",
  "country": "SD",
  "coord": {
    "lon": 23.29376,
    "lat": 12.53233
  }
}, {
  "id": 1255053,
  "name": "State of Tamil Nādu",
  "country": "IN",
  "coord": {
    "lon": 78,
    "lat": 11
  }
}, {
  "id": 1259434,
  "name": "Polur",
  "country": "IN",
  "coord": {
    "lon": 79.133331,
    "lat": 12.5
  }
}, {
  "id": 1267701,
  "name": "State of Karnātaka",
  "country": "IN",
  "coord": {
    "lon": 76,
    "lat": 13.5
  }
}, {
  "id": 1268189,
  "name": "Kanakapura",
  "country": "IN",
  "coord": {
    "lon": 77.416672,
    "lat": 12.55
  }
}, {
  "id": 1607016,
  "name": "Changwat Rayong",
  "country": "TH",
  "coord": {
    "lon": 101.433327,
    "lat": 12.83333
  }
}, {
  "id": 7735862,
  "name": "Ban Charoen Suk",
  "country": "TH",
  "coord": {
    "lon": 101.281387,
    "lat": 12.65972
  }
}, {
  "id": 2455517,
  "name": "Région de Kayes",
  "country": "ML",
  "coord": {
    "lon": -11,
    "lat": 14
  }
}, {
  "id": 6912297,
  "name": "Sikoroni",
  "country": "ML",
  "coord": {
    "lon": -9.277,
    "lat": 13.0211
  }
}, {
  "id": 2597367,
  "name": "Yobe State",
  "country": "NG",
  "coord": {
    "lon": 11.5,
    "lat": 12
  }
}, {
  "id": 2344838,
  "name": "Dillala",
  "country": "NG",
  "coord": {
    "lon": 11.5703,
    "lat": 13.108
  }
}, {
  "id": 3585155,
  "name": "Departamento de La Libertad",
  "country": "SV",
  "coord": {
    "lon": -89.383331,
    "lat": 13.75
  }
}, {
  "id": 3584935,
  "name": "La Shila",
  "country": "SV",
  "coord": {
    "lon": -89.34639,
    "lat": 13.57083
  }
}, {
  "id": 2437797,
  "name": "Zinder",
  "country": "NE",
  "coord": {
    "lon": 10.5,
    "lat": 15
  }
}, {
  "id": 6750152,
  "name": "Kaygamari",
  "country": "NE",
  "coord": {
    "lon": 10.13456,
    "lat": 13.59936
  }
}, {
  "id": 1609348,
  "name": "Krung Thep Mahanakhon",
  "country": "TH",
  "coord": {
    "lon": 100.71991,
    "lat": 13.87719
  }
}, {
  "id": 1607542,
  "name": "Phra Khanong",
  "country": "TH",
  "coord": {
    "lon": 100.60157,
    "lat": 13.70185
  }
}, {
  "id": 1606589,
  "name": "Changwat Samut Prakan",
  "country": "TH",
  "coord": {
    "lon": 100.449997,
    "lat": 13.5
  }
}, {
  "id": 6908616,
  "name": "Ban Bang Krabueang",
  "country": "TH",
  "coord": {
    "lon": 100.558167,
    "lat": 13.70461
  }
}, {
  "id": 1618360,
  "name": "Ban Khlong Bang Waek",
  "country": "TH",
  "coord": {
    "lon": 100.421501,
    "lat": 13.73256
  }
}, {
  "id": 1608132,
  "name": "Changwat Nonthaburi",
  "country": "TH",
  "coord": {
    "lon": 100.5,
    "lat": 13.75
  }
}, {
  "id": 1609350,
  "name": "Bangkok",
  "country": "TH",
  "coord": {
    "lon": 100.51667,
    "lat": 13.75
  }
}, {
  "id": 6695671,
  "name": "Sukhumvit",
  "country": "TH",
  "coord": {
    "lon": 100.556061,
    "lat": 13.73502
  }
}, {
  "id": 6201196,
  "name": "Muḩāfaz̧at Ibb",
  "country": "YE",
  "coord": {
    "lon": 44.166672,
    "lat": 14
  }
}, {
  "id": 74475,
  "name": "Ibb",
  "country": "YE",
  "coord": {
    "lon": 44.155079,
    "lat": 14.03356
  }
}, {
  "id": 7356639,
  "name": "Bayt Sa‘d Nāşir",
  "country": "YE",
  "coord": {
    "lon": 44.19886,
    "lat": 13.9922
  }
}, {
  "id": 1153080,
  "name": "Changwat Kanchanaburi",
  "country": "TH",
  "coord": {
    "lon": 99.099998,
    "lat": 14.63333
  }
}, {
  "id": 7621325,
  "name": "Ban Tha Po",
  "country": "TH",
  "coord": {
    "lon": 99.300468,
    "lat": 13.98872
  }
}, {
  "id": 3609672,
  "name": "Departmento de Francisco Morazán",
  "country": "HN",
  "coord": {
    "lon": -87.166672,
    "lat": 14.25
  }
}, {
  "id": 3600328,
  "name": "Villa Nueva",
  "country": "HN",
  "coord": {
    "lon": -87.133331,
    "lat": 14.03333
  }
}, {
  "id": 1906687,
  "name": "Changwat Prachin Buri",
  "country": "TH",
  "coord": {
    "lon": 101.666672,
    "lat": 14.08333
  }
}, {
  "id": 1600098,
  "name": "Ban Nong Nam Khao",
  "country": "TH",
  "coord": {
    "lon": 101.240829,
    "lat": 14.02972
  }
}, {
  "id": 1285941,
  "name": "Yahaungwa",
  "country": "MM",
  "coord": {
    "lon": 98.150002,
    "lat": 14.05
  }
}, {
  "id": 2595293,
  "name": "Tillabéri",
  "country": "NE",
  "coord": {
    "lon": 2.08333,
    "lat": 14.33333
  }
}, {
  "id": 2443250,
  "name": "I-n-Alakam",
  "country": "NE",
  "coord": {
    "lon": 1.24301,
    "lat": 14.14841
  }
}, {
  "id": 1692194,
  "name": "Province of Quezon",
  "country": "PH",
  "coord": {
    "lon": 121.5,
    "lat": 14.66667
  }
}, {
  "id": 1692151,
  "name": "Quilib",
  "country": "PH",
  "coord": {
    "lon": 121.566673,
    "lat": 14.13333
  }
}, {
  "id": 3587090,
  "name": "Departamento de Chalatenango",
  "country": "SV",
  "coord": {
    "lon": -89.01667,
    "lat": 14.13333
  }
}, {
  "id": 3582981,
  "name": "Teosinte",
  "country": "SV",
  "coord": {
    "lon": -89.133331,
    "lat": 14.25
  }
}, {
  "id": 3584734,
  "name": "Llano de La Virgen",
  "country": "SV",
  "coord": {
    "lon": -89.23333,
    "lat": 14.35
  }
}, {
  "id": 3595528,
  "name": "Republic of Guatemala",
  "country": "GT",
  "coord": {
    "lon": -90.25,
    "lat": 15.5
  }
}, {
  "id": 3589172,
  "name": "Departamento de Santa Rosa",
  "country": "GT",
  "coord": {
    "lon": -90.300003,
    "lat": 14.16667
  }
}, {
  "id": 3592070,
  "name": "Ojo de Agua",
  "country": "GT",
  "coord": {
    "lon": -90.316673,
    "lat": 14.35
  }
}, {
  "id": 1608528,
  "name": "Changwat Nakhon Ratchasima",
  "country": "TH",
  "coord": {
    "lon": 102.166672,
    "lat": 15
  }
}, {
  "id": 1618905,
  "name": "Ban Huai Sakae Rat",
  "country": "TH",
  "coord": {
    "lon": 102.033333,
    "lat": 14.6
  }
}, {
  "id": 1608057,
  "name": "Pak Chong",
  "country": "TH",
  "coord": {
    "lon": 101.416138,
    "lat": 14.70802
  }
}, {
  "id": 7521305,
  "name": "Central Luzon",
  "country": "PH",
  "coord": {
    "lon": 120.797623,
    "lat": 15.30714
  }
}, {
  "id": 1679435,
  "name": "Province of Zambales",
  "country": "PH",
  "coord": {
    "lon": 120.166672,
    "lat": 15.33333
  }
}, {
  "id": 1706869,
  "name": "Leley",
  "country": "PH",
  "coord": {
    "lon": 120.236,
    "lat": 15.1201
  }
}, {
  "id": 331743,
  "name": "Mai Albo",
  "country": "ER",
  "coord": {
    "lon": 38.5,
    "lat": 15.11667
  }
}, {
  "id": 2453347,
  "name": "Région de Mopti",
  "country": "ML",
  "coord": {
    "lon": -4,
    "lat": 14.66667
  }
}, {
  "id": 2449661,
  "name": "Tilèya",
  "country": "ML",
  "coord": {
    "lon": -1.51733,
    "lat": 15.18771
  }
}, {
  "id": 1679859,
  "name": "Villar",
  "country": "PH",
  "coord": {
    "lon": 120.2369,
    "lat": 15.1831
  }
}, {
  "id": 2249221,
  "name": "Région de Louga",
  "country": "SN",
  "coord": {
    "lon": -15.47192,
    "lat": 15.44748
  }
}, {
  "id": 2244122,
  "name": "Vèndou Séno",
  "country": "SN",
  "coord": {
    "lon": -15.0865,
    "lat": 15.2707
  }
}, {
  "id": 71132,
  "name": "Sanaa",
  "country": "YE",
  "coord": {
    "lon": 44.4249,
    "lat": 15.26069
  }
}, {
  "id": 6940801,
  "name": "Bani Matar",
  "country": "YE",
  "coord": {
    "lon": 44.049801,
    "lat": 15.215
  }
}, {
  "id": 79133,
  "name": "Al Khasamah",
  "country": "YE",
  "coord": {
    "lon": 44.102188,
    "lat": 15.32345
  }
}, {
  "id": 330867,
  "name": "Mescul",
  "country": "ER",
  "coord": {
    "lon": 37.5,
    "lat": 15.3
  }
}, {
  "id": 344674,
  "name": "Agametta",
  "country": "ER",
  "coord": {
    "lon": 39.216671,
    "lat": 15.33333
  }
}, {
  "id": 1608526,
  "name": "Changwat Nakhon Sawan",
  "country": "TH",
  "coord": {
    "lon": 100.083328,
    "lat": 15.7
  }
}, {
  "id": 1616236,
  "name": "Ban Nam Song",
  "country": "TH",
  "coord": {
    "lon": 100.083328,
    "lat": 15.46667
  }
}, {
  "id": 1599922,
  "name": "Ban Nong Rang Ka",
  "country": "TH",
  "coord": {
    "lon": 102.01667,
    "lat": 15.46667
  }
}, {
  "id": 2457161,
  "name": "Région de Gao",
  "country": "ML",
  "coord": {
    "lon": 1.63696,
    "lat": 16.63619
  }
}, {
  "id": 2448705,
  "name": "Wagaman",
  "country": "ML",
  "coord": {
    "lon": 2.0368,
    "lat": 15.45
  }
}, {
  "id": 3613358,
  "name": "Departamento de Colón",
  "country": "HN",
  "coord": {
    "lon": -85.666672,
    "lat": 15.75
  }
}, {
  "id": 3614736,
  "name": "Boca de Hule",
  "country": "HN",
  "coord": {
    "lon": -85.550003,
    "lat": 15.5
  }
}, {
  "id": 1608899,
  "name": "Changwat Maha Sarakham",
  "country": "TH",
  "coord": {
    "lon": 103.666672,
    "lat": 16.33333
  }
}, {
  "id": 1610510,
  "name": "Kae Dam",
  "country": "TH",
  "coord": {
    "lon": 103.384438,
    "lat": 16.02397
  }
}, {
  "id": 6201195,
  "name": "Muḩāfaz̧at Ḩajjah",
  "country": "YE",
  "coord": {
    "lon": 43.25,
    "lat": 16
  }
}, {
  "id": 6940589,
  "name": "Abs",
  "country": "YE",
  "coord": {
    "lon": 43.0485,
    "lat": 16.0215
  }
}, {
  "id": 34915,
  "name": "Dayr al Ḩisī",
  "country": "YE",
  "coord": {
    "lon": 43.099998,
    "lat": 16.049999
  }
}, {
  "id": 74222,
  "name": "Muḩāfaz̧at al Jawf",
  "country": "YE",
  "coord": {
    "lon": 45.5243,
    "lat": 16.597401
  }
}, {
  "id": 6940701,
  "name": "Al Maslub",
  "country": "YE",
  "coord": {
    "lon": 44.5667,
    "lat": 16.0961
  }
}, {
  "id": 71622,
  "name": "Rakkat al ‘Askarī",
  "country": "YE",
  "coord": {
    "lon": 44.48333,
    "lat": 16.15
  }
}, {
  "id": 3531011,
  "name": "Estado de Chiapas",
  "country": "MX",
  "coord": {
    "lon": -92.5,
    "lat": 16.5
  }
}, {
  "id": 3816597,
  "name": "Las Maravillas",
  "country": "MX",
  "coord": {
    "lon": -92.98333,
    "lat": 16.25
  }
}, {
  "id": 2246451,
  "name": "Région de Saint-Louis",
  "country": "SN",
  "coord": {
    "lon": -15,
    "lat": 16.33333
  }
}, {
  "id": 2250139,
  "name": "Keur Mor Ibra",
  "country": "SN",
  "coord": {
    "lon": -15.42222,
    "lat": 16.3375
  }
}, {
  "id": 1604767,
  "name": "Changwat Yasothon",
  "country": "TH",
  "coord": {
    "lon": 104.133331,
    "lat": 15.75
  }
}, {
  "id": 1611884,
  "name": "Ban Wang Pong",
  "country": "TH",
  "coord": {
    "lon": 100.404556,
    "lat": 17.51972
  }
}, {
  "id": 1906686,
  "name": "Changwat Udon Thani",
  "country": "TH",
  "coord": {
    "lon": 102.833328,
    "lat": 17.33333
  }
}, {
  "id": 7680198,
  "name": "Ban Laem Thong Phatthana",
  "country": "TH",
  "coord": {
    "lon": 102.417671,
    "lat": 17.506969
  }
}, {
  "id": 8136321,
  "name": "Ban Na Lap Laeng",
  "country": "TH",
  "coord": {
    "lon": 100.259499,
    "lat": 17.516171
  }
}, {
  "id": 1604054,
  "name": "Ban Dan Mae Kham Man Nuea",
  "country": "TH",
  "coord": {
    "lon": 99.956306,
    "lat": 17.538639
  }
}, {
  "id": 3499976,
  "name": "La Venta",
  "country": "DO",
  "coord": {
    "lon": -69.966667,
    "lat": 18.48333
  }
}, {
  "id": 3491913,
  "name": "Villas Agrícolas Número Dos",
  "country": "DO",
  "coord": {
    "lon": -69.949997,
    "lat": 18.48333
  }
}, {
  "id": 3496751,
  "name": "Marmolejos",
  "country": "DO",
  "coord": {
    "lon": -69.949997,
    "lat": 18.5
  }
}, {
  "id": 3512407,
  "name": "Arroyo Hondo",
  "country": "DO",
  "coord": {
    "lon": -69.949997,
    "lat": 18.5
  }
}, {
  "id": 3503706,
  "name": "Provincia de La Altagracia",
  "country": "DO",
  "coord": {
    "lon": -68.633331,
    "lat": 18.58333
  }
}, {
  "id": 3495694,
  "name": "Otra Banda",
  "country": "DO",
  "coord": {
    "lon": -68.662811,
    "lat": 18.65016
  }
}, {
  "id": 1119013,
  "name": "Ban Mae Wan",
  "country": "TH",
  "coord": {
    "lon": 99.233673,
    "lat": 18.962561
  }
}, {
  "id": 2449893,
  "name": "Tessalit",
  "country": "ML",
  "coord": {
    "lon": 1.01139,
    "lat": 20.19861
  }
}, {
  "id": 1294701,
  "name": "Tanaunghla",
  "country": "MM",
  "coord": {
    "lon": 95.51667,
    "lat": 20.48333
  }
}, {
  "id": 3520914,
  "name": "Estado de Querétaro de Arteaga",
  "country": "MX",
  "coord": {
    "lon": -99.916672,
    "lat": 21
  }
}, {
  "id": 1292118,
  "name": "Thayetchin",
  "country": "MM",
  "coord": {
    "lon": 94.550003,
    "lat": 21.066669
  }
}, {
  "id": 1286764,
  "name": "Wān Yampēng",
  "country": "MM",
  "coord": {
    "lon": 99.366669,
    "lat": 21.16667
  }
}, {
  "id": 2425714,
  "name": "Serdégé",
  "country": "TD",
  "coord": {
    "lon": 17.01667,
    "lat": 21.33333
  }
}, {
  "id": 1318433,
  "name": "Kongmöng",
  "country": "MM",
  "coord": {
    "lon": 97.449997,
    "lat": 22.549999
  }
}, {
  "id": 1809935,
  "name": "Guangdong Sheng",
  "country": "CN",
  "coord": {
    "lon": 113,
    "lat": 23
  }
}, {
  "id": 1292572,
  "name": "Thanbankyun",
  "country": "MM",
  "coord": {
    "lon": 97.133331,
    "lat": 24.15
  }
}, {
  "id": 108210,
  "name": "Ash Shubramīyah",
  "country": "SA",
  "coord": {
    "lon": 44.130001,
    "lat": 24.253611
  }
}, {
  "id": 1268980,
  "name": "Jharol",
  "country": "IN",
  "coord": {
    "lon": 73.466667,
    "lat": 24.4
  }
}, {
  "id": 108947,
  "name": "Qaşr al Quraynah",
  "country": "SA",
  "coord": {
    "lon": 46.421291,
    "lat": 24.46747
  }
}, {
  "id": 1668284,
  "name": "Taiwan",
  "country": "TW",
  "coord": {
    "lon": 121,
    "lat": 24
  }
}, {
  "id": 7280291,
  "name": "Taiwan",
  "country": "TW",
  "coord": {
    "lon": 120.705406,
    "lat": 24.15114
  }
}, {
  "id": 1668841,
  "name": "Siji",
  "country": "TW",
  "coord": {
    "lon": 121.426109,
    "lat": 24.48694
  }
}, {
  "id": 1185958,
  "name": "Tulāpāra",
  "country": "BD",
  "coord": {
    "lon": 89.23333,
    "lat": 24.51667
  }
}, {
  "id": 1298480,
  "name": "Sagaing Division",
  "country": "MM",
  "coord": {
    "lon": 95.5,
    "lat": 23.5
  }
}, {
  "id": 2508807,
  "name": "Wilaya d’ Adrar",
  "country": "DZ",
  "coord": {
    "lon": -1,
    "lat": 25.75
  }
}, {
  "id": 2507678,
  "name": "Akabli",
  "country": "DZ",
  "coord": {
    "lon": 1.37528,
    "lat": 26.708281
  }
}, {
  "id": 392343,
  "name": "Al Fāḑilī",
  "country": "SA",
  "coord": {
    "lon": 49.174511,
    "lat": 26.98016
  }
}, {
  "id": 2462900,
  "name": "Ad Dchira",
  "country": "EH",
  "coord": {
    "lon": -13.05194,
    "lat": 27.02611
  }
}, {
  "id": 1312356,
  "name": "Mahkawshan",
  "country": "MM",
  "coord": {
    "lon": 97.23333,
    "lat": 27.26667
  }
}, {
  "id": 1257896,
  "name": "Sadabad",
  "country": "IN",
  "coord": {
    "lon": 78.050003,
    "lat": 27.450001
  }
}, {
  "id": 2510769,
  "name": "Kingdom of Spain",
  "country": "ES",
  "coord": {
    "lon": -4,
    "lat": 40
  }
}, {
  "id": 2593110,
  "name": "Comunidad Autónoma de Canarias",
  "country": "ES",
  "coord": {
    "lon": -15.5,
    "lat": 28
  }
}, {
  "id": 6354970,
  "name": "Puerto Rico",
  "country": "ES",
  "coord": {
    "lon": -15.71045,
    "lat": 27.789431
  }
}, {
  "id": 127082,
  "name": "Ostān-e Khūzestān",
  "country": "IR",
  "coord": {
    "lon": 49,
    "lat": 31.5
  }
}, {
  "id": 98862,
  "name": "Muḩāfaz̧at an Najaf",
  "country": "IQ",
  "coord": {
    "lon": 43.833328,
    "lat": 31.25
  }
}, {
  "id": 94589,
  "name": "Raḩbah",
  "country": "IQ",
  "coord": {
    "lon": 44.314999,
    "lat": 31.73357
  }
}, {
  "id": 1806260,
  "name": "Jiangsu Sheng",
  "country": "CN",
  "coord": {
    "lon": 120,
    "lat": 33
  }
}, {
  "id": 1790100,
  "name": "Xiaolingwei",
  "country": "CN",
  "coord": {
    "lon": 118.849998,
    "lat": 32.033329
  }
}, {
  "id": 1859181,
  "name": "Kobaruyama",
  "country": "JP",
  "coord": {
    "lon": 131.283325,
    "lat": 32.01667
  }
}, {
  "id": 1474856,
  "name": "Dê Kanāt-e Laţīf",
  "country": "AF",
  "coord": {
    "lon": 65.039543,
    "lat": 32.107262
  }
}, {
  "id": 1133835,
  "name": "Marghakay",
  "country": "AF",
  "coord": {
    "lon": 68.178207,
    "lat": 32.144299
  }
}, {
  "id": 1140382,
  "name": "Khadzhi-Alam-Kalay",
  "country": "AF",
  "coord": {
    "lon": 65.536209,
    "lat": 32.31834
  }
}, {
  "id": 1461264,
  "name": "Qaryah-ye Band Now",
  "country": "AF",
  "coord": {
    "lon": 63.382301,
    "lat": 32.360828
  }
}, {
  "id": 1122162,
  "name": "Tōngar",
  "country": "AF",
  "coord": {
    "lon": 66.452667,
    "lat": 32.383301
  }
}, {
  "id": 1148416,
  "name": "Aril",
  "country": "AF",
  "coord": {
    "lon": 67.389381,
    "lat": 32.453541
  }
}, {
  "id": 94823,
  "name": "Muḩāfaz̧at Karbalā’",
  "country": "IQ",
  "coord": {
    "lon": 43.833328,
    "lat": 32.5
  }
}, {
  "id": 6780871,
  "name": "Ḩasan Yūsuf",
  "country": "IQ",
  "coord": {
    "lon": 44.273621,
    "lat": 32.479019
  }
}, {
  "id": 7106997,
  "name": "Khênḏakaī Karam Zāway",
  "country": "AF",
  "coord": {
    "lon": 69.142174,
    "lat": 32.532841
  }
}, {
  "id": 1433879,
  "name": "Kākā Khēl",
  "country": "AF",
  "coord": {
    "lon": 69.266472,
    "lat": 32.53952
  }
}, {
  "id": 2496045,
  "name": "Wilaya de Ghardaïa",
  "country": "DZ",
  "coord": {
    "lon": 3.16667,
    "lat": 31.08333
  }
}, {
  "id": 2496049,
  "name": "Ghardaïa",
  "country": "DZ",
  "coord": {
    "lon": 3.67347,
    "lat": 32.49094
  }
}, {
  "id": 1179245,
  "name": "Federally Administered Tribal Areas",
  "country": "PK",
  "coord": {
    "lon": 69.999252,
    "lat": 33.014549
  }
}, {
  "id": 1852748,
  "name": "Sembonyama",
  "country": "JP",
  "coord": {
    "lon": 129.850006,
    "lat": 32.700001
  }
}, {
  "id": 2264397,
  "name": "Portuguese Republic",
  "country": "PT",
  "coord": {
    "lon": -8,
    "lat": 39.5
  }
}, {
  "id": 2593105,
  "name": "Região Autónoma da Madeira",
  "country": "PT",
  "coord": {
    "lon": -16.75,
    "lat": 32.666672
  }
}, {
  "id": 1121941,
  "name": "Ūrāyin-e ‘Ulyā",
  "country": "AF",
  "coord": {
    "lon": 62.182041,
    "lat": 33.24662
  }
}, {
  "id": 4445717,
  "name": "Shavers (historical)",
  "country": "US",
  "coord": {
    "lon": -88.530037,
    "lat": 33.25568
  }
}, {
  "id": 5524819,
  "name": "Lakeview",
  "country": "US",
  "coord": {
    "lon": -102.050453,
    "lat": 33.326481
  }
}, {
  "id": 2538470,
  "name": "Région de Rabat-Salé-Zemmour-Zaër",
  "country": "MA",
  "coord": {
    "lon": -6.33333,
    "lat": 33.75
  }
}, {
  "id": 4180067,
  "name": "Apollo (historical)",
  "country": "US",
  "coord": {
    "lon": -83.527672,
    "lat": 33.36541
  }
}, {
  "id": 1435246,
  "name": "Khānī-ye ‘Ulyā",
  "country": "AF",
  "coord": {
    "lon": 68.530434,
    "lat": 33.386532
  }
}, {
  "id": 1856566,
  "name": "Morizane",
  "country": "JP",
  "coord": {
    "lon": 131.033325,
    "lat": 33.400002
  }
}, {
  "id": 4694710,
  "name": "Grayson County",
  "country": "US",
  "coord": {
    "lon": -96.683601,
    "lat": 33.616772
  }
}, {
  "id": 1852025,
  "name": "Shiobaru",
  "country": "JP",
  "coord": {
    "lon": 130.433334,
    "lat": 33.566669
  }
}, {
  "id": 138327,
  "name": "Jowkān",
  "country": "IR",
  "coord": {
    "lon": 51.258701,
    "lat": 33.610401
  }
}, {
  "id": 1854029,
  "name": "Ono",
  "country": "JP",
  "coord": {
    "lon": 134.366669,
    "lat": 33.98333
  }
}, {
  "id": 1168197,
  "name": "Peshawar",
  "country": "PK",
  "coord": {
    "lon": 71.578491,
    "lat": 34.007999
  }
}, {
  "id": 2565327,
  "name": "Al Haïmriyine",
  "country": "MA",
  "coord": {
    "lon": -6.01,
    "lat": 34.169998
  }
}, {
  "id": 5368381,
  "name": "Los Angeles County",
  "country": "US",
  "coord": {
    "lon": -118.200912,
    "lat": 34.366661
  }
}, {
  "id": 1462157,
  "name": "Shiwnah Takhak",
  "country": "AF",
  "coord": {
    "lon": 67.011597,
    "lat": 34.21674
  }
}, {
  "id": 4187459,
  "name": "Chattooga County",
  "country": "US",
  "coord": {
    "lon": -85.33329,
    "lat": 34.466751
  }
}, {
  "id": 4224239,
  "name": "Sprite",
  "country": "US",
  "coord": {
    "lon": -85.39579,
    "lat": 34.288429
  }
}, {
  "id": 1856207,
  "name": "Nagao",
  "country": "JP",
  "coord": {
    "lon": 134.166672,
    "lat": 34.26667
  }
}, {
  "id": 1796480,
  "name": "Shaanxi",
  "country": "CN",
  "coord": {
    "lon": 109,
    "lat": 36
  }
}, {
  "id": 2001378,
  "name": "Weiyanggong",
  "country": "CN",
  "coord": {
    "lon": 108.910583,
    "lat": 34.28936
  }
}, {
  "id": 4589213,
  "name": "Newberry County",
  "country": "US",
  "coord": {
    "lon": -81.616501,
    "lat": 34.30014
  }
}, {
  "id": 4587774,
  "name": "Mount Bethel (historical)",
  "country": "US",
  "coord": {
    "lon": -81.562332,
    "lat": 34.3382
  }
}, {
  "id": 4583989,
  "name": "Kershaw County",
  "country": "US",
  "coord": {
    "lon": -80.56646,
    "lat": 34.45015
  }
}, {
  "id": 1129953,
  "name": "Kānsī Suflá",
  "country": "AF",
  "coord": {
    "lon": 65.254913,
    "lat": 34.528061
  }
}, {
  "id": 1470705,
  "name": "Dahan-e Akhtah Khānah",
  "country": "AF",
  "coord": {
    "lon": 65.169777,
    "lat": 34.509521
  }
}, {
  "id": 1141133,
  "name": "Ghurumbāw",
  "country": "AF",
  "coord": {
    "lon": 63.02243,
    "lat": 34.539558
  }
}, {
  "id": 1865721,
  "name": "Ageki",
  "country": "JP",
  "coord": {
    "lon": 136.516663,
    "lat": 35.150002
  }
}, {
  "id": 1862978,
  "name": "Hayashi",
  "country": "JP",
  "coord": {
    "lon": 139.633331,
    "lat": 35.216671
  }
}, {
  "id": 1860310,
  "name": "Kamonomiya",
  "country": "JP",
  "coord": {
    "lon": 139.183334,
    "lat": 35.283329
  }
}, {
  "id": 260096,
  "name": "Nomós Chaniás",
  "country": "GR",
  "coord": {
    "lon": 24,
    "lat": 35.333328
  }
}, {
  "id": 5306372,
  "name": "Nelson",
  "country": "US",
  "coord": {
    "lon": -113.320213,
    "lat": 35.51416
  }
}, {
  "id": 1907255,
  "name": "Koyasu",
  "country": "JP",
  "coord": {
    "lon": 139.255554,
    "lat": 35.41806
  }
}, {
  "id": 1907235,
  "name": "Miyanomae",
  "country": "JP",
  "coord": {
    "lon": 139.392776,
    "lat": 35.422779
  }
}, {
  "id": 4550954,
  "name": "Schoolton",
  "country": "US",
  "coord": {
    "lon": -96.458618,
    "lat": 35.391739
  }
}, {
  "id": 6419788,
  "name": "Kubota",
  "country": "JP",
  "coord": {
    "lon": 140.008331,
    "lat": 35.453331
  }
}, {
  "id": 4460324,
  "name": "Chatham County",
  "country": "US",
  "coord": {
    "lon": -79.266411,
    "lat": 35.700142
  }
}, {
  "id": 1852278,
  "name": "Shimo-kodanaka",
  "country": "JP",
  "coord": {
    "lon": 139.633331,
    "lat": 35.566669
  }
}, {
  "id": 1864381,
  "name": "Denenchōfu",
  "country": "JP",
  "coord": {
    "lon": 139.666672,
    "lat": 35.583328
  }
}, {
  "id": 1855301,
  "name": "Nishi-hanawa",
  "country": "JP",
  "coord": {
    "lon": 138.533325,
    "lat": 35.583328
  }
}, {
  "id": 1907157,
  "name": "Fujino",
  "country": "JP",
  "coord": {
    "lon": 139.143066,
    "lat": 35.606392
  }
}, {
  "id": 1865090,
  "name": "Asagaya",
  "country": "JP",
  "coord": {
    "lon": 139.649994,
    "lat": 35.700001
  }
}, {
  "id": 1864231,
  "name": "Egotamachi",
  "country": "JP",
  "coord": {
    "lon": 139.666672,
    "lat": 35.73333
  }
}, {
  "id": 1864878,
  "name": "Awatabe",
  "country": "JP",
  "coord": {
    "lon": 136.239395,
    "lat": 35.915611
  }
}, {
  "id": 1854022,
  "name": "Ono",
  "country": "JP",
  "coord": {
    "lon": 136.487274,
    "lat": 35.98106
  }
}, {
  "id": 4619773,
  "name": "Dyer County",
  "country": "US",
  "coord": {
    "lon": -89.40007,
    "lat": 36.050072
  }
}, {
  "id": 4652680,
  "name": "Rehoboth",
  "country": "US",
  "coord": {
    "lon": -89.25563,
    "lat": 36.032291
  }
}, {
  "id": 2110809,
  "name": "Tateno",
  "country": "JP",
  "coord": {
    "lon": 140.116669,
    "lat": 36.033329
  }
}, {
  "id": 1848119,
  "name": "Yugawa",
  "country": "JP",
  "coord": {
    "lon": 138.233337,
    "lat": 36.033329
  }
}, {
  "id": 2111043,
  "name": "Shiogasaki",
  "country": "JP",
  "coord": {
    "lon": 140.550003,
    "lat": 36.333328
  }
}, {
  "id": 6355530,
  "name": "Almería",
  "country": "ES",
  "coord": {
    "lon": -2.42778,
    "lat": 36.772511
  }
}, {
  "id": 2515136,
  "name": "La Vega de Acá",
  "country": "ES",
  "coord": {
    "lon": -2.43526,
    "lat": 36.836449
  }
}, {
  "id": 1845106,
  "name": "Ch’ungch’ŏng-bukto",
  "country": "KR",
  "coord": {
    "lon": 128,
    "lat": 36.75
  }
}, {
  "id": 6357744,
  "name": "Monachil",
  "country": "ES",
  "coord": {
    "lon": -3.54034,
    "lat": 37.13715
  }
}, {
  "id": 4896861,
  "name": "Illinois",
  "country": "US",
  "coord": {
    "lon": -89.250366,
    "lat": 40.00032
  }
}, {
  "id": 4748806,
  "name": "Breaks",
  "country": "US",
  "coord": {
    "lon": -82.280983,
    "lat": 37.29594
  }
}, {
  "id": 6802827,
  "name": "괴내",
  "country": "KR",
  "coord": {
    "lon": 127.320099,
    "lat": 37.507198
  }
}, {
  "id": 2520437,
  "name": "Campillo de Adentro",
  "country": "ES",
  "coord": {
    "lon": -1.1491,
    "lat": 37.563431
  }
}, {
  "id": 1890085,
  "name": "Tangp’yŏng",
  "country": "KR",
  "coord": {
    "lon": 128.038773,
    "lat": 37.570621
  }
}, {
  "id": 6541770,
  "name": "Pedara",
  "country": "IT",
  "coord": {
    "lon": 15.05669,
    "lat": 37.616852
  }
}, {
  "id": 5341170,
  "name": "Curry Village",
  "country": "US",
  "coord": {
    "lon": -119.572662,
    "lat": 37.73687
  }
}, {
  "id": 5413481,
  "name": "Bent County",
  "country": "US",
  "coord": {
    "lon": -103.067146,
    "lat": 37.966671
  }
}, {
  "id": 5436536,
  "name": "Riverdale",
  "country": "US",
  "coord": {
    "lon": -103.316597,
    "lat": 38.05862
  }
}, {
  "id": 1833702,
  "name": "Umulmok",
  "country": "KR",
  "coord": {
    "lon": 127.316673,
    "lat": 38.049999
  }
}, {
  "id": 5435436,
  "name": "Prowers County",
  "country": "US",
  "coord": {
    "lon": -102.400467,
    "lat": 37.966679
  }
}, {
  "id": 6537734,
  "name": "Altofonte",
  "country": "IT",
  "coord": {
    "lon": 13.29624,
    "lat": 38.042049
  }
}, {
  "id": 8133884,
  "name": "Dimos Mandra-Eidyllia",
  "country": "GR",
  "coord": {
    "lon": 23.361919,
    "lat": 38.141659
  }
}, {
  "id": 6367618,
  "name": "Myŏngwŏli-ri",
  "country": "KR",
  "coord": {
    "lon": 127.544724,
    "lat": 38.121941
  }
}, {
  "id": 4048572,
  "name": "Rowan County",
  "country": "US",
  "coord": {
    "lon": -83.433243,
    "lat": 38.183411
  }
}, {
  "id": 2114152,
  "name": "Aone",
  "country": "JP",
  "coord": {
    "lon": 140.533615,
    "lat": 38.141941
  }
}, {
  "id": 6542127,
  "name": "Palermo",
  "country": "IT",
  "coord": {
    "lon": 13.36143,
    "lat": 38.115719
  }
}, {
  "id": 2524002,
  "name": "Noce",
  "country": "IT",
  "coord": {
    "lon": 13.33333,
    "lat": 38.116669
  }
}, {
  "id": 5354590,
  "name": "Guadalcanal Village",
  "country": "US",
  "coord": {
    "lon": -122.293861,
    "lat": 38.11853
  }
}, {
  "id": 2525587,
  "name": "Basilicò",
  "country": "IT",
  "coord": {
    "lon": 15.83333,
    "lat": 38.166672
  }
}, {
  "id": 5539525,
  "name": "Garfield County",
  "country": "US",
  "coord": {
    "lon": -111.501282,
    "lat": 37.750542
  }
}, {
  "id": 2525635,
  "name": "Badiazza",
  "country": "IT",
  "coord": {
    "lon": 15.53333,
    "lat": 38.216671
  }
}, {
  "id": 2525104,
  "name": "Castanea delle Furie",
  "country": "IT",
  "coord": {
    "lon": 15.51667,
    "lat": 38.25
  }
}, {
  "id": 5446275,
  "name": "Ravanna",
  "country": "US",
  "coord": {
    "lon": -100.382362,
    "lat": 38.15974
  }
}, {
  "id": 2518759,
  "name": "El Águila",
  "country": "ES",
  "coord": {
    "lon": -5.01667,
    "lat": 38.299999
  }
}, {
  "id": 6697800,
  "name": "Central Greece",
  "country": "GR",
  "coord": {
    "lon": 23.13995,
    "lat": 38.352428
  }
}, {
  "id": 5435465,
  "name": "Pueblo County",
  "country": "US",
  "coord": {
    "lon": -104.483856,
    "lat": 38.183338
  }
}, {
  "id": 5435047,
  "name": "Poncha Springs",
  "country": "US",
  "coord": {
    "lon": -106.07724,
    "lat": 38.512779
  }
}, {
  "id": 8010625,
  "name": "Setúbal",
  "country": "PT",
  "coord": {
    "lon": -8.90817,
    "lat": 38.517422
  }
}, {
  "id": 8013161,
  "name": "São Lourenço",
  "country": "PT",
  "coord": {
    "lon": -9.0042,
    "lat": 38.4897
  }
}, {
  "id": 2261633,
  "name": "Vila Nogueira de Azeitão",
  "country": "PT",
  "coord": {
    "lon": -9.01667,
    "lat": 38.51667
  }
}, {
  "id": 5376101,
  "name": "Napa County",
  "country": "US",
  "coord": {
    "lon": -122.334419,
    "lat": 38.483238
  }
}, {
  "id": 5386729,
  "name": "Redbud Park (historical)",
  "country": "US",
  "coord": {
    "lon": -122.137199,
    "lat": 38.519348
  }
}, {
  "id": 5396498,
  "name": "Sloughhouse",
  "country": "US",
  "coord": {
    "lon": -121.19384,
    "lat": 38.495739
  }
}, {
  "id": 304825,
  "name": "Manisa",
  "country": "TR",
  "coord": {
    "lon": 28.16667,
    "lat": 38.833328
  }
}, {
  "id": 5420926,
  "name": "El Paso County",
  "country": "US",
  "coord": {
    "lon": -104.517189,
    "lat": 38.833328
  }
}, {
  "id": 5442076,
  "name": "Truckton",
  "country": "US",
  "coord": {
    "lon": -104.182182,
    "lat": 38.738049
  }
}, {
  "id": 6697810,
  "name": "West Greece",
  "country": "GR",
  "coord": {
    "lon": 21.2915,
    "lat": 38.487991
  }
}, {
  "id": 265508,
  "name": "Nomós Aitolías kai Akarnanías",
  "country": "GR",
  "coord": {
    "lon": 21.5,
    "lat": 38.5
  }
}, {
  "id": 8133845,
  "name": "Dimos Agrinio",
  "country": "GR",
  "coord": {
    "lon": 21.45495,
    "lat": 38.65316
  }
}, {
  "id": 2512177,
  "name": "Puertollano",
  "country": "ES",
  "coord": {
    "lon": -4.10734,
    "lat": 38.687119
  }
}, {
  "id": 5445498,
  "name": "Grainfield",
  "country": "US",
  "coord": {
    "lon": -100.465141,
    "lat": 39.113621
  }
}, {
  "id": 6697806,
  "name": "North Aegean",
  "country": "GR",
  "coord": {
    "lon": 25.345461,
    "lat": 39.563351
  }
}, {
  "id": 258465,
  "name": "Nomós Lésvou",
  "country": "GR",
  "coord": {
    "lon": 26.33333,
    "lat": 39.166672
  }
}, {
  "id": 8133755,
  "name": "Dimos Lesbos",
  "country": "GR",
  "coord": {
    "lon": 26.24251,
    "lat": 39.1698
  }
}, {
  "id": 256757,
  "name": "Moria",
  "country": "GR",
  "coord": {
    "lon": 26.51667,
    "lat": 39.133331
  }
}, {
  "id": 5427526,
  "name": "Kit Carson County",
  "country": "US",
  "coord": {
    "lon": -102.567139,
    "lat": 39.299992
  }
}, {
  "id": 8012995,
  "name": "Parreira",
  "country": "PT",
  "coord": {
    "lon": -8.39014,
    "lat": 39.15081
  }
}, {
  "id": 6538065,
  "name": "Monserrato",
  "country": "IT",
  "coord": {
    "lon": 9.14704,
    "lat": 39.259941
  }
}, {
  "id": 306536,
  "name": "Köprübaşı",
  "country": "TR",
  "coord": {
    "lon": 31.216669,
    "lat": 39.283329
  }
}, {
  "id": 6355316,
  "name": "Casas-Ibáñez",
  "country": "ES",
  "coord": {
    "lon": -1.44083,
    "lat": 39.333199
  }
}, {
  "id": 5514336,
  "name": "Vanderbilt (historical)",
  "country": "US",
  "coord": {
    "lon": -115.978394,
    "lat": 39.424648
  }
}, {
  "id": 2112569,
  "name": "Ishiwaki",
  "country": "JP",
  "coord": {
    "lon": 140.050003,
    "lat": 39.383331
  }
}, {
  "id": 5446632,
  "name": "Thomas County",
  "country": "US",
  "coord": {
    "lon": -101.05043,
    "lat": 39.349998
  }
}, {
  "id": 6970803,
  "name": "Aşağı Aladağ",
  "country": "TR",
  "coord": {
    "lon": 43.035519,
    "lat": 39.420959
  }
}, {
  "id": 2520543,
  "name": "Calderón",
  "country": "ES",
  "coord": {
    "lon": -1.18333,
    "lat": 39.533329
  }
}, {
  "id": 5424440,
  "name": "Harris Park",
  "country": "US",
  "coord": {
    "lon": -105.491112,
    "lat": 39.511662
  }
}, {
  "id": 258575,
  "name": "Nomós Larísis",
  "country": "GR",
  "coord": {
    "lon": 22.5,
    "lat": 39.5
  }
}, {
  "id": 5095971,
  "name": "Brindletown",
  "country": "US",
  "coord": {
    "lon": -74.50515,
    "lat": 40.04734
  }
}, {
  "id": 5576103,
  "name": "Crisman",
  "country": "US",
  "coord": {
    "lon": -105.361382,
    "lat": 40.040821
  }
}, {
  "id": 3173418,
  "name": "Mileo",
  "country": "IT",
  "coord": {
    "lon": 16.01667,
    "lat": 40.049999
  }
}, {
  "id": 751916,
  "name": "Arıklıbağları",
  "country": "TR",
  "coord": {
    "lon": 32.349998,
    "lat": 40.049999
  }
}, {
  "id": 5583173,
  "name": "Ward",
  "country": "US",
  "coord": {
    "lon": -105.508331,
    "lat": 40.072208
  }
}, {
  "id": 3172153,
  "name": "Provincia di Nuoro",
  "country": "IT",
  "coord": {
    "lon": 9.33333,
    "lat": 40.166672
  }
}, {
  "id": 5074889,
  "name": "Pawnee City",
  "country": "US",
  "coord": {
    "lon": -96.154449,
    "lat": 40.10833
  }
}, {
  "id": 5162774,
  "name": "Miami County",
  "country": "US",
  "coord": {
    "lon": -84.233276,
    "lat": 40.050049
  }
}, {
  "id": 5162767,
  "name": "Meyers (historical)",
  "country": "US",
  "coord": {
    "lon": -84.317169,
    "lat": 40.131439
  }
}, {
  "id": 2520610,
  "name": "Provincia de Cáceres",
  "country": "ES",
  "coord": {
    "lon": -6.37482,
    "lat": 39.522049
  }
}, {
  "id": 6356806,
  "name": "Madrigal de la Vera",
  "country": "ES",
  "coord": {
    "lon": -5.36707,
    "lat": 40.19006
  }
}, {
  "id": 3117727,
  "name": "Madrigal de la Vera",
  "country": "ES",
  "coord": {
    "lon": -5.36818,
    "lat": 40.147598
  }
}, {
  "id": 2523962,
  "name": "Provincia di Oristano",
  "country": "IT",
  "coord": {
    "lon": 8.6,
    "lat": 39.900002
  }
}, {
  "id": 6539357,
  "name": "Cuglieri",
  "country": "IT",
  "coord": {
    "lon": 8.56642,
    "lat": 40.18795
  }
}, {
  "id": 8010485,
  "name": "Figueira da Foz",
  "country": "PT",
  "coord": {
    "lon": -8.80609,
    "lat": 40.158249
  }
}, {
  "id": 5565500,
  "name": "Humboldt County",
  "country": "US",
  "coord": {
    "lon": -123.917831,
    "lat": 40.666519
  }
}, {
  "id": 5565253,
  "name": "Honeydew",
  "country": "US",
  "coord": {
    "lon": -124.122818,
    "lat": 40.244308
  }
}, {
  "id": 8133764,
  "name": "Dimos Kozani",
  "country": "GR",
  "coord": {
    "lon": 21.83445,
    "lat": 40.312981
  }
}, {
  "id": 735563,
  "name": "Kozani",
  "country": "GR",
  "coord": {
    "lon": 21.78639,
    "lat": 40.301109
  }
}, {
  "id": 5171871,
  "name": "Shelby County",
  "country": "US",
  "coord": {
    "lon": -84.183281,
    "lat": 40.316719
  }
}, {
  "id": 7729130,
  "name": "Lakeside Village",
  "country": "US",
  "coord": {
    "lon": -84.184998,
    "lat": 40.293892
  }
}, {
  "id": 5560570,
  "name": "Bull Creek",
  "country": "US",
  "coord": {
    "lon": -124.026428,
    "lat": 40.33569
  }
}, {
  "id": 5444907,
  "name": "Yuma County",
  "country": "US",
  "coord": {
    "lon": -102.433807,
    "lat": 39.983318
  }
}, {
  "id": 6359301,
  "name": "Loeches",
  "country": "ES",
  "coord": {
    "lon": -3.42061,
    "lat": 40.382851
  }
}, {
  "id": 5771084,
  "name": "Barro",
  "country": "US",
  "coord": {
    "lon": -113.488876,
    "lat": 40.726879
  }
}, {
  "id": 1528919,
  "name": "Ak-Shor",
  "country": "KG",
  "coord": {
    "lon": 72.209633,
    "lat": 40.44574
  }
}, {
  "id": 2130204,
  "name": "Hachinohe",
  "country": "JP",
  "coord": {
    "lon": 141.491943,
    "lat": 40.505001
  }
}, {
  "id": 5081111,
  "name": "Verona",
  "country": "US",
  "coord": {
    "lon": -97.966164,
    "lat": 40.553619
  }
}, {
  "id": 735764,
  "name": "Chortiatis",
  "country": "GR",
  "coord": {
    "lon": 23.09963,
    "lat": 40.610481
  }
}, {
  "id": 3170027,
  "name": "Potenza",
  "country": "IT",
  "coord": {
    "lon": 15.80857,
    "lat": 40.644321
  }
}, {
  "id": 3336900,
  "name": "Castilla y León",
  "country": "ES",
  "coord": {
    "lon": -4.25,
    "lat": 41.666672
  }
}, {
  "id": 6360513,
  "name": "Salamanca",
  "country": "ES",
  "coord": {
    "lon": -5.68022,
    "lat": 40.955971
  }
}, {
  "id": 5171643,
  "name": "Seneca County",
  "country": "US",
  "coord": {
    "lon": -83.116577,
    "lat": 41.116718
  }
}, {
  "id": 5172848,
  "name": "Springville",
  "country": "US",
  "coord": {
    "lon": -83.386589,
    "lat": 41.009781
  }
}, {
  "id": 3179865,
  "name": "Provincia di Caserta",
  "country": "IT",
  "coord": {
    "lon": 14.16667,
    "lat": 41.23333
  }
}, {
  "id": 3182649,
  "name": "Provincia di Avellino",
  "country": "IT",
  "coord": {
    "lon": 15.15,
    "lat": 40.98333
  }
}, {
  "id": 2737650,
  "name": "Mira",
  "country": "PT",
  "coord": {
    "lon": -8.65,
    "lat": 41.049999
  }
}, {
  "id": 5696463,
  "name": "Jacinto",
  "country": "US",
  "coord": {
    "lon": -103.404099,
    "lat": 41.225811
  }
}, {
  "id": 734375,
  "name": "Nomós Rodópis",
  "country": "GR",
  "coord": {
    "lon": 25.5,
    "lat": 41.083328
  }
}, {
  "id": 8133827,
  "name": "Dimos Komotini",
  "country": "GR",
  "coord": {
    "lon": 25.386499,
    "lat": 41.105381
  }
}, {
  "id": 735640,
  "name": "Komotini",
  "country": "GR",
  "coord": {
    "lon": 25.396391,
    "lat": 41.12278
  }
}, {
  "id": 6457401,
  "name": "Provincia di Olbia-Tempio",
  "country": "IT",
  "coord": {
    "lon": 9.49459,
    "lat": 40.922981
  }
}, {
  "id": 6539586,
  "name": "Tempio Pausania",
  "country": "IT",
  "coord": {
    "lon": 9.10352,
    "lat": 40.897369
  }
}, {
  "id": 3181038,
  "name": "Campavaglio",
  "country": "IT",
  "coord": {
    "lon": 9.23333,
    "lat": 41.133331
  }
}, {
  "id": 733839,
  "name": "Nomós Xánthis",
  "country": "GR",
  "coord": {
    "lon": 24.83333,
    "lat": 41.166672
  }
}, {
  "id": 8133837,
  "name": "Dimos Xanthi",
  "country": "GR",
  "coord": {
    "lon": 24.766239,
    "lat": 41.208431
  }
}, {
  "id": 4861712,
  "name": "Indiana",
  "country": "US",
  "coord": {
    "lon": -93.0252,
    "lat": 41.204441
  }
}, {
  "id": 3336901,
  "name": "Catalunya",
  "country": "ES",
  "coord": {
    "lon": 1.86768,
    "lat": 41.820461
  }
}, {
  "id": 3115175,
  "name": "Olèrdola",
  "country": "ES",
  "coord": {
    "lon": 1.71667,
    "lat": 41.316669
  }
}, {
  "id": 5205930,
  "name": "Pike County",
  "country": "US",
  "coord": {
    "lon": -75.124893,
    "lat": 41.50037
  }
}, {
  "id": 4861743,
  "name": "Indiantown (historical)",
  "country": "US",
  "coord": {
    "lon": -95.108047,
    "lat": 41.312489
  }
}, {
  "id": 5825405,
  "name": "Fort LaClede (historical)",
  "country": "US",
  "coord": {
    "lon": -108.389267,
    "lat": 41.415241
  }
}, {
  "id": 3110921,
  "name": "Sant Adria de Besos",
  "country": "ES",
  "coord": {
    "lon": 2.21855,
    "lat": 41.430729
  }
}, {
  "id": 3176885,
  "name": "Foggia",
  "country": "IT",
  "coord": {
    "lon": 15.54925,
    "lat": 41.46093
  }
}, {
  "id": 1484841,
  "name": "Navoiy Province",
  "country": "UZ",
  "coord": {
    "lon": 64,
    "lat": 42
  }
}, {
  "id": 1514595,
  "name": "Omontoy",
  "country": "UZ",
  "coord": {
    "lon": 64.266212,
    "lat": 41.322041
  }
}, {
  "id": 4880695,
  "name": "Warren County",
  "country": "US",
  "coord": {
    "lon": -93.550217,
    "lat": 41.333328
  }
}, {
  "id": 4870622,
  "name": "Palmyra",
  "country": "US",
  "coord": {
    "lon": -93.438271,
    "lat": 41.4361
  }
}, {
  "id": 4926802,
  "name": "Steubenville",
  "country": "US",
  "coord": {
    "lon": -85.022743,
    "lat": 41.532269
  }
}, {
  "id": 785389,
  "name": "Strovija",
  "country": "MK",
  "coord": {
    "lon": 21.410561,
    "lat": 41.563061
  }
}, {
  "id": 6358797,
  "name": "Balaguer",
  "country": "ES",
  "coord": {
    "lon": 0.81691,
    "lat": 41.78809
  }
}, {
  "id": 6355230,
  "name": "Província de Girona",
  "country": "ES",
  "coord": {
    "lon": 2.81113,
    "lat": 41.989159
  }
}, {
  "id": 3114964,
  "name": "Provincia de Ourense",
  "country": "ES",
  "coord": {
    "lon": -7.5,
    "lat": 42.166672
  }
}, {
  "id": 3175264,
  "name": "La Giustiniana",
  "country": "IT",
  "coord": {
    "lon": 12.4,
    "lat": 41.98333
  }
}, {
  "id": 5562484,
  "name": "Del Norte County",
  "country": "US",
  "coord": {
    "lon": -123.901176,
    "lat": 41.699841
  }
}, {
  "id": 3120513,
  "name": "Provincia de Huesca",
  "country": "ES",
  "coord": {
    "lon": -0.16667,
    "lat": 42.166672
  }
}, {
  "id": 732800,
  "name": "Republic of Bulgaria",
  "country": "BG",
  "coord": {
    "lon": 25,
    "lat": 43
  }
}, {
  "id": 6360254,
  "name": "Vigo",
  "country": "ES",
  "coord": {
    "lon": -8.81206,
    "lat": 42.215488
  }
}, {
  "id": 3130625,
  "name": "Alcabre",
  "country": "ES",
  "coord": {
    "lon": -8.76667,
    "lat": 42.216671
  }
}, {
  "id": 3169411,
  "name": "Provincia di Rieti",
  "country": "IT",
  "coord": {
    "lon": 12.86667,
    "lat": 42.299999
  }
}, {
  "id": 6536922,
  "name": "Frasso Sabino",
  "country": "IT",
  "coord": {
    "lon": 12.80558,
    "lat": 42.229832
  }
}, {
  "id": 3176572,
  "name": "Frasso Sabino",
  "country": "IT",
  "coord": {
    "lon": 12.80558,
    "lat": 42.229832
  }
}, {
  "id": 5128148,
  "name": "Mundale",
  "country": "US",
  "coord": {
    "lon": -75.049606,
    "lat": 42.25481
  }
}, {
  "id": 5823980,
  "name": "Dwyer Junction",
  "country": "US",
  "coord": {
    "lon": -104.994972,
    "lat": 42.234692
  }
}, {
  "id": 3180145,
  "name": "Casamaina",
  "country": "IT",
  "coord": {
    "lon": 13.38333,
    "lat": 42.25
  }
}, {
  "id": 5610054,
  "name": "Three Creek",
  "country": "US",
  "coord": {
    "lon": -115.1595,
    "lat": 42.071301
  }
}, {
  "id": 4932165,
  "name": "Camp Wyoma",
  "country": "US",
  "coord": {
    "lon": -73.125381,
    "lat": 42.428421
  }
}, {
  "id": 5138846,
  "name": "South Gilboa Station",
  "country": "US",
  "coord": {
    "lon": -74.562653,
    "lat": 42.410912
  }
}, {
  "id": 3119944,
  "name": "Labor del Rey",
  "country": "ES",
  "coord": {
    "lon": -6.40021,
    "lat": 42.48547
  }
}, {
  "id": 5138935,
  "name": "South New Berlin",
  "country": "US",
  "coord": {
    "lon": -75.385178,
    "lat": 42.529518
  }
}, {
  "id": 1538652,
  "name": "Chüy",
  "country": "KG",
  "coord": {
    "lon": 74.5,
    "lat": 42.416672
  }
}, {
  "id": 8064044,
  "name": "Ala-Archa Al’plegri",
  "country": "KG",
  "coord": {
    "lon": 74.482483,
    "lat": 42.562351
  }
}, {
  "id": 4936231,
  "name": "Farnams",
  "country": "US",
  "coord": {
    "lon": -73.185661,
    "lat": 42.541752
  }
}, {
  "id": 4997811,
  "name": "Kalamo",
  "country": "US",
  "coord": {
    "lon": -85.012772,
    "lat": 42.542809
  }
}, {
  "id": 6426205,
  "name": "Garanou",
  "country": "FR",
  "coord": {
    "lon": 1.75,
    "lat": 42.76667
  }
}, {
  "id": 6538616,
  "name": "Foligno",
  "country": "IT",
  "coord": {
    "lon": 12.70107,
    "lat": 42.944038
  }
}, {
  "id": 3129116,
  "name": "Ayazaza",
  "country": "ES",
  "coord": {
    "lon": -2.93794,
    "lat": 43.130219
  }
}, {
  "id": 2985244,
  "name": "Région Provence-Alpes-Côte d'Azur",
  "country": "FR",
  "coord": {
    "lon": 6,
    "lat": 44
  }
}, {
  "id": 2970749,
  "name": "Département du Var",
  "country": "FR",
  "coord": {
    "lon": 6.33333,
    "lat": 43.5
  }
}, {
  "id": 2990918,
  "name": "Arrondissement de Narbonne",
  "country": "FR",
  "coord": {
    "lon": 2.83333,
    "lat": 43.083328
  }
}, {
  "id": 6325394,
  "name": "Sorabilla",
  "country": "ES",
  "coord": {
    "lon": -2.03511,
    "lat": 43.210419
  }
}, {
  "id": 6362424,
  "name": "Sestao",
  "country": "ES",
  "coord": {
    "lon": -2.99444,
    "lat": 43.306519
  }
}, {
  "id": 6431494,
  "name": "Carbonne",
  "country": "FR",
  "coord": {
    "lon": 1.23333,
    "lat": 43.299999
  }
}, {
  "id": 3028652,
  "name": "Carbonne",
  "country": "FR",
  "coord": {
    "lon": 1.2252,
    "lat": 43.298569
  }
}, {
  "id": 2995468,
  "name": "Arrondissement de Marseille",
  "country": "FR",
  "coord": {
    "lon": 5.5,
    "lat": 43.333328
  }
}, {
  "id": 6357275,
  "name": "Arteixo",
  "country": "ES",
  "coord": {
    "lon": -8.51835,
    "lat": 43.328159
  }
}, {
  "id": 3104580,
  "name": "Viñas",
  "country": "ES",
  "coord": {
    "lon": -8.41667,
    "lat": 43.349998
  }
}, {
  "id": 2977584,
  "name": "Saint-Pierre",
  "country": "FR",
  "coord": {
    "lon": 5.05324,
    "lat": 43.37009
  }
}, {
  "id": 6440420,
  "name": "Ilharre",
  "country": "FR",
  "coord": {
    "lon": -1.03333,
    "lat": 43.383331
  }
}, {
  "id": 793760,
  "name": "Golovša",
  "country": "RS",
  "coord": {
    "lon": 20.35611,
    "lat": 43.476391
  }
}, {
  "id": 6360653,
  "name": "Arnuero",
  "country": "ES",
  "coord": {
    "lon": -3.55729,
    "lat": 43.49308
  }
}, {
  "id": 3112595,
  "name": "Quejo",
  "country": "ES",
  "coord": {
    "lon": -3.54806,
    "lat": 43.49667
  }
}, {
  "id": 5586500,
  "name": "Bonneville County",
  "country": "US",
  "coord": {
    "lon": -111.50106,
    "lat": 43.41658
  }
}, {
  "id": 5609454,
  "name": "Swan Valley",
  "country": "US",
  "coord": {
    "lon": -111.341621,
    "lat": 43.456032
  }
}, {
  "id": 3269932,
  "name": "Tinje",
  "country": "BA",
  "coord": {
    "lon": 18.18417,
    "lat": 43.521671
  }
}, {
  "id": 6542090,
  "name": "Cascina",
  "country": "IT",
  "coord": {
    "lon": 10.49941,
    "lat": 43.679138
  }
}, {
  "id": 6620318,
  "name": "Capraia Fiorentina",
  "country": "IT",
  "coord": {
    "lon": 11.01268,
    "lat": 43.737492
  }
}, {
  "id": 3174529,
  "name": "Provincia di Lucca",
  "country": "IT",
  "coord": {
    "lon": 10.45,
    "lat": 44.033329
  }
}, {
  "id": 3171172,
  "name": "Provincia di Pesaro e Urbino",
  "country": "IT",
  "coord": {
    "lon": 12.63333,
    "lat": 43.666672
  }
}, {
  "id": 6541554,
  "name": "Montemurlo",
  "country": "IT",
  "coord": {
    "lon": 11.03112,
    "lat": 43.92165
  }
}, {
  "id": 5094264,
  "name": "Warren",
  "country": "US",
  "coord": {
    "lon": -71.892029,
    "lat": 43.923119
  }
}, {
  "id": 6455460,
  "name": "Les Mées",
  "country": "FR",
  "coord": {
    "lon": 5.98333,
    "lat": 44.033329
  }
}, {
  "id": 6451408,
  "name": "Castelsarrasin",
  "country": "FR",
  "coord": {
    "lon": 1.1,
    "lat": 44.033329
  }
}, {
  "id": 3337530,
  "name": "Zadarska Županija",
  "country": "HR",
  "coord": {
    "lon": 15.33333,
    "lat": 44.083328
  }
}, {
  "id": 6431472,
  "name": "Vallabrix",
  "country": "FR",
  "coord": {
    "lon": 4.48333,
    "lat": 44.066669
  }
}, {
  "id": 2997026,
  "name": "Lussolle",
  "country": "FR",
  "coord": {
    "lon": -0.15561,
    "lat": 44.095612
  }
}, {
  "id": 6541657,
  "name": "Borghetto Santo Spirito",
  "country": "IT",
  "coord": {
    "lon": 8.23905,
    "lat": 44.115429
  }
}, {
  "id": 3176745,
  "name": "Provincia di Forlì",
  "country": "IT",
  "coord": {
    "lon": 12.03333,
    "lat": 44.083328
  }
}, {
  "id": 6541838,
  "name": "Cesena",
  "country": "IT",
  "coord": {
    "lon": 12.26404,
    "lat": 44.15617
  }
}, {
  "id": 6433931,
  "name": "Pontenx-les-Forges",
  "country": "FR",
  "coord": {
    "lon": -1.11667,
    "lat": 44.25
  }
}, {
  "id": 2986198,
  "name": "Pontenx-les-Forges",
  "country": "FR",
  "coord": {
    "lon": -1.12095,
    "lat": 44.241341
  }
}, {
  "id": 5590266,
  "name": "Crystal (historical)",
  "country": "US",
  "coord": {
    "lon": -114.32589,
    "lat": 44.267422
  }
}, {
  "id": 2976739,
  "name": "Saint-Trosse",
  "country": "FR",
  "coord": {
    "lon": -1.0588,
    "lat": 44.294289
  }
}, {
  "id": 5117867,
  "name": "Franklin County",
  "country": "US",
  "coord": {
    "lon": -74.349609,
    "lat": 44.650051
  }
}, {
  "id": 5587585,
  "name": "Cabarton",
  "country": "US",
  "coord": {
    "lon": -116.040131,
    "lat": 44.435452
  }
}, {
  "id": 3173884,
  "name": "Marola",
  "country": "IT",
  "coord": {
    "lon": 10.48333,
    "lat": 44.48333
  }
}, {
  "id": 6543042,
  "name": "Rivalta Bormida",
  "country": "IT",
  "coord": {
    "lon": 8.55175,
    "lat": 44.709751
  }
}, {
  "id": 6535056,
  "name": "Rivalta Bormida",
  "country": "IT",
  "coord": {
    "lon": 8.55175,
    "lat": 44.709751
  }
}, {
  "id": 6542120,
  "name": "Ferrara",
  "country": "IT",
  "coord": {
    "lon": 11.62071,
    "lat": 44.826778
  }
}, {
  "id": 3171057,
  "name": "Provincia di Piacenza",
  "country": "IT",
  "coord": {
    "lon": 9.58333,
    "lat": 44.883331
  }
}, {
  "id": 6538411,
  "name": "Carpaneto Piacentino",
  "country": "IT",
  "coord": {
    "lon": 9.78927,
    "lat": 44.91526
  }
}, {
  "id": 3172488,
  "name": "Mucinasso",
  "country": "IT",
  "coord": {
    "lon": 9.71667,
    "lat": 45.01667
  }
}, {
  "id": 5598464,
  "name": "Lemhi County",
  "country": "US",
  "coord": {
    "lon": -114.00119,
    "lat": 45.666592
  }
}, {
  "id": 5584508,
  "name": "Baker",
  "country": "US",
  "coord": {
    "lon": -113.734512,
    "lat": 45.09465
  }
}, {
  "id": 5259487,
  "name": "Langlade County",
  "country": "US",
  "coord": {
    "lon": -89.05011,
    "lat": 45.250519
  }
}, {
  "id": 3171364,
  "name": "Provincia di Pavia",
  "country": "IT",
  "coord": {
    "lon": 9.13333,
    "lat": 45.116669
  }
}, {
  "id": 3177969,
  "name": "Corte Rusta",
  "country": "IT",
  "coord": {
    "lon": 11,
    "lat": 45.133331
  }
}, {
  "id": 2987966,
  "name": "Arrondissement de Périgueux",
  "country": "FR",
  "coord": {
    "lon": 0.58333,
    "lat": 45.166672
  }
}, {
  "id": 5016060,
  "name": "Albion Center",
  "country": "US",
  "coord": {
    "lon": -94.073593,
    "lat": 45.17691
  }
}, {
  "id": 3164600,
  "name": "Provincia di Venezia",
  "country": "IT",
  "coord": {
    "lon": 12.32632,
    "lat": 45.440449
  }
}, {
  "id": 5731315,
  "name": "Hilgard",
  "country": "US",
  "coord": {
    "lon": -118.227997,
    "lat": 45.35207
  }
}, {
  "id": 5032867,
  "name": "Kandiyohi County",
  "country": "US",
  "coord": {
    "lon": -95.000839,
    "lat": 45.133301
  }
}, {
  "id": 6538317,
  "name": "Mirano",
  "country": "IT",
  "coord": {
    "lon": 12.11091,
    "lat": 45.491699
  }
}, {
  "id": 3177845,
  "name": "Creazzo",
  "country": "IT",
  "coord": {
    "lon": 11.4785,
    "lat": 45.53199
  }
}, {
  "id": 6542284,
  "name": "Venezia",
  "country": "IT",
  "coord": {
    "lon": 12.33092,
    "lat": 45.4389
  }
}, {
  "id": 3177820,
  "name": "Cret",
  "country": "IT",
  "coord": {
    "lon": 7.43333,
    "lat": 45.599998
  }
}, {
  "id": 5606338,
  "name": "Sampson",
  "country": "US",
  "coord": {
    "lon": -116.008469,
    "lat": 45.51767
  }
}, {
  "id": 3006201,
  "name": "Arrondissement de La Tour-du-Pin",
  "country": "FR",
  "coord": {
    "lon": 5.41667,
    "lat": 45.583328
  }
}, {
  "id": 6433202,
  "name": "Four",
  "country": "FR",
  "coord": {
    "lon": 5.18333,
    "lat": 45.583328
  }
}, {
  "id": 3165186,
  "name": "Trieste",
  "country": "IT",
  "coord": {
    "lon": 13.76667,
    "lat": 45.666672
  }
}, {
  "id": 6440004,
  "name": "Corent",
  "country": "FR",
  "coord": {
    "lon": 3.2,
    "lat": 45.666672
  }
}, {
  "id": 6540342,
  "name": "Albino",
  "country": "IT",
  "coord": {
    "lon": 9.79636,
    "lat": 45.763779
  }
}, {
  "id": 3186832,
  "name": "Zalog",
  "country": "SI",
  "coord": {
    "lon": 14.19944,
    "lat": 45.766941
  }
}, {
  "id": 667268,
  "name": "Sibiu",
  "country": "RO",
  "coord": {
    "lon": 24.15,
    "lat": 45.799999
  }
}, {
  "id": 3197146,
  "name": "Občina Krško",
  "country": "SI",
  "coord": {
    "lon": 15.46063,
    "lat": 45.95137
  }
}, {
  "id": 6539881,
  "name": "Sacile",
  "country": "IT",
  "coord": {
    "lon": 12.50285,
    "lat": 45.95406
  }
}, {
  "id": 3203287,
  "name": "Britof",
  "country": "SI",
  "coord": {
    "lon": 13.66667,
    "lat": 46
  }
}, {
  "id": 3198636,
  "name": "Ježa",
  "country": "SI",
  "coord": {
    "lon": 14.54972,
    "lat": 46.101669
  }
}, {
  "id": 3239091,
  "name": "Občina Cerkno",
  "country": "SI",
  "coord": {
    "lon": 13.97306,
    "lat": 46.125
  }
}, {
  "id": 3198478,
  "name": "Kal",
  "country": "SI",
  "coord": {
    "lon": 15.11667,
    "lat": 46.166672
  }
}, {
  "id": 719819,
  "name": "Hungary",
  "country": "HU",
  "coord": {
    "lon": 20,
    "lat": 47
  }
}, {
  "id": 3013736,
  "name": "Département de la Haute-Savoie",
  "country": "FR",
  "coord": {
    "lon": 6.33333,
    "lat": 46
  }
}, {
  "id": 3164854,
  "name": "Valle di Dentro",
  "country": "IT",
  "coord": {
    "lon": 10.28333,
    "lat": 46.48333
  }
}, {
  "id": 7287039,
  "name": "Saint-Sulpice (VD)",
  "country": "CH",
  "coord": {
    "lon": 6.55994,
    "lat": 46.513
  }
}, {
  "id": 675366,
  "name": "Izvoarele de Sus",
  "country": "RO",
  "coord": {
    "lon": 26.91667,
    "lat": 46.533329
  }
}, {
  "id": 3017372,
  "name": "Région Franche-Comté",
  "country": "FR",
  "coord": {
    "lon": 6,
    "lat": 47
  }
}, {
  "id": 3012051,
  "name": "Département du Jura",
  "country": "FR",
  "coord": {
    "lon": 5.83333,
    "lat": 46.833328
  }
}, {
  "id": 3052717,
  "name": "Felsőtelep",
  "country": "HU",
  "coord": {
    "lon": 19.47806,
    "lat": 46.561211
  }
}, {
  "id": 5692786,
  "name": "Walser Crossing",
  "country": "US",
  "coord": {
    "lon": -103.596298,
    "lat": 46.619179
  }
}, {
  "id": 6428320,
  "name": "Trouy",
  "country": "FR",
  "coord": {
    "lon": 2.35,
    "lat": 47.01667
  }
}, {
  "id": 2971553,
  "name": "Trouy",
  "country": "FR",
  "coord": {
    "lon": 2.36018,
    "lat": 47.011532
  }
}, {
  "id": 674673,
  "name": "Livada de Bihor",
  "country": "RO",
  "coord": {
    "lon": 21.883329,
    "lat": 47
  }
}, {
  "id": 2658821,
  "name": "Kanton St. Gallen",
  "country": "CH",
  "coord": {
    "lon": 9.25,
    "lat": 47.25
  }
}, {
  "id": 2658792,
  "name": "Wahlkreis Sargans",
  "country": "CH",
  "coord": {
    "lon": 9.43333,
    "lat": 47.049999
  }
}, {
  "id": 7287482,
  "name": "Vilters-Wangs",
  "country": "CH",
  "coord": {
    "lon": 9.4253,
    "lat": 47.009701
  }
}, {
  "id": 2658117,
  "name": "Vilters",
  "country": "CH",
  "coord": {
    "lon": 9.45322,
    "lat": 47.026138
  }
}, {
  "id": 3020989,
  "name": "Département du Doubs",
  "country": "FR",
  "coord": {
    "lon": 6.41667,
    "lat": 47.166672
  }
}, {
  "id": 2986301,
  "name": "Arrondissement de Pontarlier",
  "country": "FR",
  "coord": {
    "lon": 6.25,
    "lat": 46.833328
  }
}, {
  "id": 7286995,
  "name": "Ruswil",
  "country": "CH",
  "coord": {
    "lon": 8.13588,
    "lat": 47.07748
  }
}, {
  "id": 7670215,
  "name": "Holz",
  "country": "CH",
  "coord": {
    "lon": 8.17067,
    "lat": 47.054569
  }
}, {
  "id": 5796126,
  "name": "Grays Harbor County",
  "country": "US",
  "coord": {
    "lon": -123.83461,
    "lat": 47.083149
  }
}, {
  "id": 6458892,
  "name": "Amt Burgdorf",
  "country": "CH",
  "coord": {
    "lon": 7.60801,
    "lat": 47.05983
  }
}, {
  "id": 2660172,
  "name": "Kernenried",
  "country": "CH",
  "coord": {
    "lon": 7.54679,
    "lat": 47.069679
  }
}, {
  "id": 7285190,
  "name": "Bellmund",
  "country": "CH",
  "coord": {
    "lon": 7.24318,
    "lat": 47.102871
  }
}, {
  "id": 2661566,
  "name": "Bellmund",
  "country": "CH",
  "coord": {
    "lon": 7.24608,
    "lat": 47.108521
  }
}, {
  "id": 3335053,
  "name": "Greith",
  "country": "AT",
  "coord": {
    "lon": 15.55,
    "lat": 47.116669
  }
}, {
  "id": 2768273,
  "name": "Puchfeld",
  "country": "AT",
  "coord": {
    "lon": 14.43333,
    "lat": 47.116669
  }
}, {
  "id": 3009708,
  "name": "La Croix Verte",
  "country": "FR",
  "coord": {
    "lon": -0.06694,
    "lat": 47.269642
  }
}, {
  "id": 2768895,
  "name": "Picheldorf",
  "country": "AT",
  "coord": {
    "lon": 15.18333,
    "lat": 47.400002
  }
}, {
  "id": 6442051,
  "name": "Ormenans",
  "country": "FR",
  "coord": {
    "lon": 6.2,
    "lat": 47.450001
  }
}, {
  "id": 7285161,
  "name": "Basel",
  "country": "CH",
  "coord": {
    "lon": 7.59361,
    "lat": 47.557732
  }
}, {
  "id": 5811704,
  "name": "Spokane County",
  "country": "US",
  "coord": {
    "lon": -117.367706,
    "lat": 47.616562
  }
}, {
  "id": 6458867,
  "name": "Bezirk Bülach",
  "country": "CH",
  "coord": {
    "lon": 8.56764,
    "lat": 47.497059
  }
}, {
  "id": 7285707,
  "name": "Eglisau",
  "country": "CH",
  "coord": {
    "lon": 8.52607,
    "lat": 47.573349
  }
}, {
  "id": 6291126,
  "name": "Hinter Stadtberg",
  "country": "CH",
  "coord": {
    "lon": 8.54108,
    "lat": 47.573429
  }
}, {
  "id": 683333,
  "name": "Bulai-Bosanci",
  "country": "RO",
  "coord": {
    "lon": 26.25,
    "lat": 47.633331
  }
}, {
  "id": 2808206,
  "name": "Windhag",
  "country": "DE",
  "coord": {
    "lon": 9.45,
    "lat": 47.666672
  }
}, {
  "id": 3030293,
  "name": "Région Bretagne",
  "country": "FR",
  "coord": {
    "lon": -3,
    "lat": 48
  }
}, {
  "id": 665849,
  "name": "Judeţul Suceava",
  "country": "RO",
  "coord": {
    "lon": 25.75,
    "lat": 47.583328
  }
}, {
  "id": 3214106,
  "name": "Regierungsbezirk Tübingen",
  "country": "DE",
  "coord": {
    "lon": 9.5,
    "lat": 48.166672
  }
}, {
  "id": 2762809,
  "name": "Unterleithen",
  "country": "AT",
  "coord": {
    "lon": 14.03333,
    "lat": 48.183331
  }
}, {
  "id": 3027257,
  "name": "Région Champagne-Ardenne",
  "country": "FR",
  "coord": {
    "lon": 4.5,
    "lat": 49
  }
}, {
  "id": 7871967,
  "name": "Burgkirchen",
  "country": "AT",
  "coord": {
    "lon": 13.10051,
    "lat": 48.203911
  }
}, {
  "id": 2775260,
  "name": "Innere Stadt",
  "country": "AT",
  "coord": {
    "lon": 16.371349,
    "lat": 48.209061
  }
}, {
  "id": 3343955,
  "name": "Bratislavský Kraj",
  "country": "SK",
  "coord": {
    "lon": 17.16667,
    "lat": 48.333328
  }
}, {
  "id": 2779225,
  "name": "Friesenegg",
  "country": "AT",
  "coord": {
    "lon": 14.24558,
    "lat": 48.301868
  }
}, {
  "id": 5812148,
  "name": "Stevens County",
  "country": "US",
  "coord": {
    "lon": -117.834419,
    "lat": 48.433231
  }
}, {
  "id": 3012874,
  "name": "Région Île-de-France",
  "country": "FR",
  "coord": {
    "lon": 2.5,
    "lat": 48.5
  }
}, {
  "id": 6443664,
  "name": "Fontenailles",
  "country": "FR",
  "coord": {
    "lon": 2.95,
    "lat": 48.549999
  }
}, {
  "id": 2761377,
  "name": "Wielands",
  "country": "AT",
  "coord": {
    "lon": 14.93333,
    "lat": 48.75
  }
}, {
  "id": 3214104,
  "name": "Regierungsbezirk Karlsruhe",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 49
  }
}, {
  "id": 3220814,
  "name": "Landkreis Regen",
  "country": "DE",
  "coord": {
    "lon": 13.12361,
    "lat": 49.029999
  }
}, {
  "id": 2947612,
  "name": "Blossersberg",
  "country": "DE",
  "coord": {
    "lon": 12.9,
    "lat": 49.083328
  }
}, {
  "id": 3339538,
  "name": "Kraj Vysočina",
  "country": "CZ",
  "coord": {
    "lon": 15.5,
    "lat": 49.416672
  }
}, {
  "id": 3056843,
  "name": "Veľký Bysterec",
  "country": "SK",
  "coord": {
    "lon": 19.28545,
    "lat": 49.210861
  }
}, {
  "id": 6554905,
  "name": "Haßloch",
  "country": "DE",
  "coord": {
    "lon": 8.25705,
    "lat": 49.359699
  }
}, {
  "id": 3061694,
  "name": "Okres Žďár nad Sázavou",
  "country": "CZ",
  "coord": {
    "lon": 16.033331,
    "lat": 49.5
  }
}, {
  "id": 2809673,
  "name": "Wiebelskirchen",
  "country": "DE",
  "coord": {
    "lon": 7.18333,
    "lat": 49.366669
  }
}, {
  "id": 3068075,
  "name": "Podhradní Lhota",
  "country": "CZ",
  "coord": {
    "lon": 17.79505,
    "lat": 49.42075
  }
}, {
  "id": 3036244,
  "name": "Audignicourt",
  "country": "FR",
  "coord": {
    "lon": 3.13397,
    "lat": 49.47876
  }
}, {
  "id": 2960313,
  "name": "Grand Duchy of Luxembourg",
  "country": "LU",
  "coord": {
    "lon": 6.16667,
    "lat": 49.75
  }
}, {
  "id": 3247901,
  "name": "Landkreis Kusel",
  "country": "DE",
  "coord": {
    "lon": 7.49917,
    "lat": 49.57111
  }
}, {
  "id": 3220801,
  "name": "Landkreis Fürth",
  "country": "DE",
  "coord": {
    "lon": 10.82167,
    "lat": 49.451111
  }
}, {
  "id": 3068724,
  "name": "Otavožaty",
  "country": "CZ",
  "coord": {
    "lon": 15.23333,
    "lat": 49.57328
  }
}, {
  "id": 2896977,
  "name": "Hüttenfeld",
  "country": "DE",
  "coord": {
    "lon": 8.58861,
    "lat": 49.59639
  }
}, {
  "id": 3061883,
  "name": "Zámek Zďár nad Sázavou II",
  "country": "CZ",
  "coord": {
    "lon": 15.93333,
    "lat": 49.583328
  }
}, {
  "id": 3339576,
  "name": "Středočeský kraj",
  "country": "CZ",
  "coord": {
    "lon": 14.1964,
    "lat": 50.127178
  }
}, {
  "id": 2840270,
  "name": "Scharrau",
  "country": "DE",
  "coord": {
    "lon": 8.38333,
    "lat": 49.583328
  }
}, {
  "id": 2938912,
  "name": "Regierungsbezirk Darmstadt",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 49.833328
  }
}, {
  "id": 3220969,
  "name": "Landkreis Groß-Gerau",
  "country": "DE",
  "coord": {
    "lon": 8.4625,
    "lat": 49.914719
  }
}, {
  "id": 6553175,
  "name": "Nauheim",
  "country": "DE",
  "coord": {
    "lon": 8.46333,
    "lat": 49.950802
  }
}, {
  "id": 3064835,
  "name": "Studánka",
  "country": "CZ",
  "coord": {
    "lon": 15.80599,
    "lat": 50.036259
  }
}, {
  "id": 2974304,
  "name": "Département de la Somme",
  "country": "FR",
  "coord": {
    "lon": 2.5,
    "lat": 49.916672
  }
}, {
  "id": 3033018,
  "name": "Bethencourt-sur-Mer",
  "country": "FR",
  "coord": {
    "lon": 1.50348,
    "lat": 50.07756
  }
}, {
  "id": 3071155,
  "name": "Malešice",
  "country": "CZ",
  "coord": {
    "lon": 14.52123,
    "lat": 50.087742
  }
}, {
  "id": 3068049,
  "name": "Podlesí",
  "country": "CZ",
  "coord": {
    "lon": 15.98279,
    "lat": 50.084419
  }
}, {
  "id": 3247464,
  "name": "Landkreis Cochem-Zell",
  "country": "DE",
  "coord": {
    "lon": 7.17917,
    "lat": 50.146111
  }
}, {
  "id": 3339542,
  "name": "Olomoucký kraj",
  "country": "CZ",
  "coord": {
    "lon": 17.16667,
    "lat": 49.75
  }
}, {
  "id": 3067044,
  "name": "Ramzová",
  "country": "CZ",
  "coord": {
    "lon": 17.063379,
    "lat": 50.194538
  }
}, {
  "id": 758116,
  "name": "Stopnica",
  "country": "PL",
  "coord": {
    "lon": 20.937799,
    "lat": 50.440182
  }
}, {
  "id": 2833525,
  "name": "Segendorf",
  "country": "DE",
  "coord": {
    "lon": 7.46667,
    "lat": 50.450001
  }
}, {
  "id": 3074512,
  "name": "Janov",
  "country": "CZ",
  "coord": {
    "lon": 13.56368,
    "lat": 50.585079
  }
}, {
  "id": 5943101,
  "name": "Duchess",
  "country": "CA",
  "coord": {
    "lon": -111.918503,
    "lat": 50.71682
  }
}, {
  "id": 3305799,
  "name": "Direktionsbezirk Dresden",
  "country": "DE",
  "coord": {
    "lon": 14.08333,
    "lat": 51.166672
  }
}, {
  "id": 2804107,
  "name": "Zinnwald-Georgenfeld",
  "country": "DE",
  "coord": {
    "lon": 13.76553,
    "lat": 50.73708
  }
}, {
  "id": 2921284,
  "name": "Georgenfeld",
  "country": "DE",
  "coord": {
    "lon": 13.75664,
    "lat": 50.737728
  }
}, {
  "id": 2845133,
  "name": "Roschütz",
  "country": "DE",
  "coord": {
    "lon": 12.08333,
    "lat": 50.900002
  }
}, {
  "id": 2859590,
  "name": "Obernetphen",
  "country": "DE",
  "coord": {
    "lon": 8.1,
    "lat": 50.900002
  }
}, {
  "id": 2759343,
  "name": "Gemeente Beek",
  "country": "NL",
  "coord": {
    "lon": 5.78333,
    "lat": 50.933331
  }
}, {
  "id": 2922568,
  "name": "Gardschütz",
  "country": "DE",
  "coord": {
    "lon": 12.43333,
    "lat": 50.950001
  }
}, {
  "id": 2787814,
  "name": "Rommelaar",
  "country": "BE",
  "coord": {
    "lon": 4.89558,
    "lat": 50.98872
  }
}, {
  "id": 2651049,
  "name": "Dover District",
  "country": "GB",
  "coord": {
    "lon": 1.23333,
    "lat": 51.150002
  }
}, {
  "id": 7290558,
  "name": "Hart District",
  "country": "GB",
  "coord": {
    "lon": -0.8811,
    "lat": 51.275639
  }
}, {
  "id": 7287910,
  "name": "Fetcham",
  "country": "GB",
  "coord": {
    "lon": -0.35582,
    "lat": 51.288792
  }
}, {
  "id": 2648110,
  "name": "Greater London",
  "country": "GB",
  "coord": {
    "lon": -0.16667,
    "lat": 51.5
  }
}, {
  "id": 2875801,
  "name": "Lössnig",
  "country": "DE",
  "coord": {
    "lon": 12.4,
    "lat": 51.299999
  }
}, {
  "id": 764758,
  "name": "Mikułowice",
  "country": "PL",
  "coord": {
    "lon": 20.06139,
    "lat": 51.351639
  }
}, {
  "id": 7292856,
  "name": "Sandhurst",
  "country": "GB",
  "coord": {
    "lon": -0.78636,
    "lat": 51.350281
  }
}, {
  "id": 2642233,
  "name": "Morden",
  "country": "GB",
  "coord": {
    "lon": -0.19837,
    "lat": 51.39822
  }
}, {
  "id": 7532212,
  "name": "Radom",
  "country": "PL",
  "coord": {
    "lon": 21.156099,
    "lat": 51.417198
  }
}, {
  "id": 7530747,
  "name": "Powiat kozienicki",
  "country": "PL",
  "coord": {
    "lon": 21.4958,
    "lat": 51.639462
  }
}, {
  "id": 3333121,
  "name": "Barnet",
  "country": "GB",
  "coord": {
    "lon": -0.21423,
    "lat": 51.65736
  }
}, {
  "id": 2634895,
  "name": "Wales",
  "country": "GB",
  "coord": {
    "lon": -3.5,
    "lat": 52.5
  }
}, {
  "id": 2653256,
  "name": "Chepstow",
  "country": "GB",
  "coord": {
    "lon": -2.67683,
    "lat": 51.640869
  }
}, {
  "id": 2831874,
  "name": "Sinsen",
  "country": "DE",
  "coord": {
    "lon": 7.18333,
    "lat": 51.666672
  }
}, {
  "id": 2648152,
  "name": "Great Braxted",
  "country": "GB",
  "coord": {
    "lon": 0.69901,
    "lat": 51.795292
  }
}, {
  "id": 3294179,
  "name": "Fort Cross Roads",
  "country": "IE",
  "coord": {
    "lon": -8.49333,
    "lat": 51.835281
  }
}, {
  "id": 2937935,
  "name": "Regierungsbezirk Detmold",
  "country": "DE",
  "coord": {
    "lon": 8,
    "lat": 51.799999
  }
}, {
  "id": 2845406,
  "name": "Röllinghausen",
  "country": "DE",
  "coord": {
    "lon": 9.83796,
    "lat": 51.971851
  }
}, {
  "id": 759245,
  "name": "Sierzchów",
  "country": "PL",
  "coord": {
    "lon": 21.119061,
    "lat": 51.986809
  }
}, {
  "id": 2641918,
  "name": "Nacton",
  "country": "GB",
  "coord": {
    "lon": 1.23589,
    "lat": 52.01825
  }
}, {
  "id": 2810519,
  "name": "Westenfeld",
  "country": "DE",
  "coord": {
    "lon": 7.43333,
    "lat": 52.066669
  }
}, {
  "id": 2635527,
  "name": "Tre-groes",
  "country": "GB",
  "coord": {
    "lon": -4.31667,
    "lat": 52.066669
  }
}, {
  "id": 7290655,
  "name": "Malvern Hills District",
  "country": "GB",
  "coord": {
    "lon": -2.40461,
    "lat": 52.16713
  }
}, {
  "id": 7531413,
  "name": "Jakubów",
  "country": "PL",
  "coord": {
    "lon": 21.681141,
    "lat": 52.23954
  }
}, {
  "id": 2649217,
  "name": "Forest Heath District",
  "country": "GB",
  "coord": {
    "lon": 0.56667,
    "lat": 52.333328
  }
}, {
  "id": 2647687,
  "name": "Haddenham",
  "country": "GB",
  "coord": {
    "lon": 0.14827,
    "lat": 52.357891
  }
}, {
  "id": 6552362,
  "name": "Grafhorst",
  "country": "DE",
  "coord": {
    "lon": 10.95,
    "lat": 52.450001
  }
}, {
  "id": 7290602,
  "name": "East Northamptonshire District",
  "country": "GB",
  "coord": {
    "lon": -0.50664,
    "lat": 52.448132
  }
}, {
  "id": 3333180,
  "name": "City of Peterborough",
  "country": "GB",
  "coord": {
    "lon": -0.25,
    "lat": 52.583328
  }
}, {
  "id": 3337499,
  "name": "Województwo Zachodniopomorskie",
  "country": "PL",
  "coord": {
    "lon": 15.5,
    "lat": 53.5
  }
}, {
  "id": 766023,
  "name": "Łomżyca",
  "country": "PL",
  "coord": {
    "lon": 22.03982,
    "lat": 53.17382
  }
}, {
  "id": 3315176,
  "name": "Ballycoyle",
  "country": "IE",
  "coord": {
    "lon": -6.26861,
    "lat": 53.181938
  }
}, {
  "id": 6691053,
  "name": "Meadow Mount",
  "country": "IE",
  "coord": {
    "lon": -6.26272,
    "lat": 53.284721
  }
}, {
  "id": 2934571,
  "name": "Dünkirchen",
  "country": "DE",
  "coord": {
    "lon": 7.96667,
    "lat": 53.416672
  }
}, {
  "id": 2857594,
  "name": "Ohrbült",
  "country": "DE",
  "coord": {
    "lon": 7.96667,
    "lat": 53.416672
  }
}, {
  "id": 2905434,
  "name": "Kreis Herzogtum Lauenburg",
  "country": "DE",
  "coord": {
    "lon": 10.625,
    "lat": 53.607498
  }
}, {
  "id": 7530931,
  "name": "Powiat chojnicki",
  "country": "PL",
  "coord": {
    "lon": 17.718821,
    "lat": 53.800991
  }
}, {
  "id": 2637958,
  "name": "Shipley",
  "country": "GB",
  "coord": {
    "lon": -1.76667,
    "lat": 53.833328
  }
}, {
  "id": 764312,
  "name": "Mragowo",
  "country": "PL",
  "coord": {
    "lon": 21.305071,
    "lat": 53.864368
  }
}, {
  "id": 3249077,
  "name": "Kreis Steinburg",
  "country": "DE",
  "coord": {
    "lon": 9.50361,
    "lat": 53.93306
  }
}, {
  "id": 6050066,
  "name": "La Ronge",
  "country": "CA",
  "coord": {
    "lon": -105.284218,
    "lat": 55.100128
  }
}, {
  "id": 5978020,
  "name": "Huallen",
  "country": "CA",
  "coord": {
    "lon": -119.286034,
    "lat": 55.166641
  }
}, {
  "id": 2614478,
  "name": "Roskilde Kommune",
  "country": "DK",
  "coord": {
    "lon": 12.1,
    "lat": 55.650002
  }
}, {
  "id": 2618038,
  "name": "Ladegårdshuse",
  "country": "DK",
  "coord": {
    "lon": 12.11667,
    "lat": 55.650002
  }
}, {
  "id": 2691742,
  "name": "Mjölby Kommun",
  "country": "SE",
  "coord": {
    "lon": 15.13333,
    "lat": 58.316669
  }
}, {
  "id": 2683371,
  "name": "Ramshult",
  "country": "SE",
  "coord": {
    "lon": 15.3,
    "lat": 58.216671
  }
}, {
  "id": 5936286,
  "name": "Dease Lake",
  "country": "CA",
  "coord": {
    "lon": -129.987488,
    "lat": 58.435692
  }
}, {
  "id": 3337386,
  "name": "Västra Götalands Län",
  "country": "SE",
  "coord": {
    "lon": 13,
    "lat": 58
  }
}, {
  "id": 2667302,
  "name": "Trollhättans Kommun",
  "country": "SE",
  "coord": {
    "lon": 12.41667,
    "lat": 58.23333
  }
}, {
  "id": 2665174,
  "name": "Väne Åsaka",
  "country": "SE",
  "coord": {
    "lon": 12.41667,
    "lat": 58.25
  }
}, {
  "id": 3141558,
  "name": "Rogaland Fylke",
  "country": "NO",
  "coord": {
    "lon": 6.25,
    "lat": 59
  }
}, {
  "id": 6691859,
  "name": "Teekkarikylae",
  "country": "FI",
  "coord": {
    "lon": 24.83502,
    "lat": 60.18959
  }
}, {
  "id": 3157357,
  "name": "Fjell",
  "country": "NO",
  "coord": {
    "lon": 5.12194,
    "lat": 60.362671
  }
}, {
  "id": 650861,
  "name": "Kouvola",
  "country": "FI",
  "coord": {
    "lon": 26.700001,
    "lat": 60.866669
  }
}, {
  "id": 830699,
  "name": "Etelä-Karjala",
  "country": "FI",
  "coord": {
    "lon": 28,
    "lat": 60.833328
  }
}, {
  "id": 5951659,
  "name": "Faro",
  "country": "CA",
  "coord": {
    "lon": -133.337204,
    "lat": 62.232868
  }
}, {
  "id": 6692025,
  "name": "Halssilanrinne",
  "country": "FI",
  "coord": {
    "lon": 25.80611,
    "lat": 62.245831
  }
}, {
  "id": 6943716,
  "name": "Snowdrift",
  "country": "CA",
  "coord": {
    "lon": -110.736,
    "lat": 62.405602
  }
}, {
  "id": 654121,
  "name": "Karhunkylä",
  "country": "FI",
  "coord": {
    "lon": 24.200001,
    "lat": 62.299999
  }
}, {
  "id": 631566,
  "name": "Viitasaari",
  "country": "FI",
  "coord": {
    "lon": 25.83333,
    "lat": 63.083328
  }
}, {
  "id": 657093,
  "name": "Huopanankoski",
  "country": "FI",
  "coord": {
    "lon": 25.533331,
    "lat": 63.066669
  }
}, {
  "id": 2998554,
  "name": "L'Hospitalet-près-l'Andorre",
  "country": "FR",
  "coord": {
    "lon": 1.79931,
    "lat": 42.589142
  }
}, {
  "id": 6540246,
  "name": "Villanova sull'Arda",
  "country": "IT",
  "coord": {
    "lon": 9.99847,
    "lat": 45.02647
  }
}, {
  "id": 3008452,
  "name": "L'Allier",
  "country": "FR",
  "coord": {
    "lon": 1.21667,
    "lat": 48.01667
  }
}, {
  "id": 6325526,
  "name": "L'Isle-Verte",
  "country": "CA",
  "coord": {
    "lon": -69.340637,
    "lat": 48.01347
  }
}, {
  "id": 3231369,
  "name": "L'Eure",
  "country": "FR",
  "coord": {
    "lon": 0.13472,
    "lat": 49.484718
  }
}, {
  "id": 817409,
  "name": "Kravtsovo",
  "country": "RU",
  "coord": {
    "lon": 37.807701,
    "lat": 55.05442
  }
}, {
  "id": 488839,
  "name": "Starodzhereliyevskaya",
  "country": "RU",
  "coord": {
    "lon": 38.296799,
    "lat": 45.47599
  }
}, {
  "id": 498698,
  "name": "Saransk",
  "country": "RU",
  "coord": {
    "lon": 45.1749,
    "lat": 54.1838
  }
}, {
  "id": 7260215,
  "name": "Tyndall Air Force Base",
  "country": "US",
  "coord": {
    "lon": -85.607307,
    "lat": 30.08535
  }
}, {
  "id": 4345638,
  "name": "Weil",
  "country": "US",
  "coord": {
    "lon": -92.560699,
    "lat": 31.31185
  }
}, {
  "id": 5935277,
  "name": "Dartmouth",
  "country": "CA",
  "coord": {
    "lon": -63.57719,
    "lat": 44.671341
  }
}, {
  "id": 5039807,
  "name": "Noyes",
  "country": "US",
  "coord": {
    "lon": -97.204514,
    "lat": 48.99749
  }
}, {
  "id": 5790289,
  "name": "Clearbrook",
  "country": "US",
  "coord": {
    "lon": -122.32238,
    "lat": 48.978729
  }
}, {
  "id": 1679432,
  "name": "Zamboanga",
  "country": "PH",
  "coord": {
    "lon": 122.073891,
    "lat": 6.91028
  }
}, {
  "id": 1729933,
  "name": "Aurora",
  "country": "PH",
  "coord": {
    "lon": 123.582603,
    "lat": 7.9506
  }
}, {
  "id": 1731818,
  "name": "Province of Agusan del Sur",
  "country": "PH",
  "coord": {
    "lon": 125.833328,
    "lat": 8.5
  }
}, {
  "id": 1151933,
  "name": "Nakhon Si Thammarat",
  "country": "TH",
  "coord": {
    "lon": 99.966667,
    "lat": 8.43333
  }
}, {
  "id": 2419533,
  "name": "Kindia",
  "country": "GN",
  "coord": {
    "lon": -12.86576,
    "lat": 10.05692
  }
}, {
  "id": 1717512,
  "name": "Cebu City",
  "country": "PH",
  "coord": {
    "lon": 123.890709,
    "lat": 10.31672
  }
}, {
  "id": 2229798,
  "name": "Kousseri",
  "country": "CM",
  "coord": {
    "lon": 15.03063,
    "lat": 12.07689
  }
}, {
  "id": 1153958,
  "name": "Ban Yang Duan",
  "country": "TH",
  "coord": {
    "lon": 99.166672,
    "lat": 10.5
  }
}, {
  "id": 3668605,
  "name": "Santa Marta",
  "country": "CO",
  "coord": {
    "lon": -74.199043,
    "lat": 11.24079
  }
}, {
  "id": 1712813,
  "name": "Gloria",
  "country": "PH",
  "coord": {
    "lon": 121.466667,
    "lat": 12.98333
  }
}, {
  "id": 2493330,
  "name": "I-n-Amenas",
  "country": "DZ",
  "coord": {
    "lon": 9.54112,
    "lat": 28.043711
  }
}, {
  "id": 5322021,
  "name": "Young",
  "country": "US",
  "coord": {
    "lon": -110.963737,
    "lat": 34.101429
  }
}, {
  "id": 4658872,
  "name": "South Dyersburg",
  "country": "US",
  "coord": {
    "lon": -89.391182,
    "lat": 36.01952
  }
}, {
  "id": 4603330,
  "name": "Atwood",
  "country": "US",
  "coord": {
    "lon": -88.678108,
    "lat": 35.973122
  }
}, {
  "id": 2111258,
  "name": "Ryugasaki",
  "country": "JP",
  "coord": {
    "lon": 140.183334,
    "lat": 35.900002
  }
}, {
  "id": 2521886,
  "name": "Almeria",
  "country": "ES",
  "coord": {
    "lon": -2.45974,
    "lat": 36.838139
  }
}, {
  "id": 325363,
  "name": "Adana",
  "country": "TR",
  "coord": {
    "lon": 35.328892,
    "lat": 37.001671
  }
}, {
  "id": 5365687,
  "name": "Le Grand",
  "country": "US",
  "coord": {
    "lon": -120.24823,
    "lat": 37.22855
  }
}, {
  "id": 1849053,
  "name": "Utsunomiya-shi",
  "country": "JP",
  "coord": {
    "lon": 139.883606,
    "lat": 36.56583
  }
}, {
  "id": 6357731,
  "name": "Lanjarón",
  "country": "ES",
  "coord": {
    "lon": -3.45289,
    "lat": 36.967979
  }
}, {
  "id": 2513709,
  "name": "Monachil",
  "country": "ES",
  "coord": {
    "lon": -3.53724,
    "lat": 37.133202
  }
}, {
  "id": 6361041,
  "name": "San Juan de Aznalfarache",
  "country": "ES",
  "coord": {
    "lon": -6.03134,
    "lat": 37.36499
  }
}, {
  "id": 5425180,
  "name": "Hoehne",
  "country": "US",
  "coord": {
    "lon": -104.381088,
    "lat": 37.281132
  }
}, {
  "id": 7668950,
  "name": "Realejo-San Matías",
  "country": "ES",
  "coord": {
    "lon": -3.59389,
    "lat": 37.173328
  }
}, {
  "id": 6536452,
  "name": "Tortona",
  "country": "IT",
  "coord": {
    "lon": 8.86455,
    "lat": 44.893349
  }
}, {
  "id": 298333,
  "name": "Sanliurfa",
  "country": "TR",
  "coord": {
    "lon": 38.793919,
    "lat": 37.16708
  }
}, {
  "id": 5386335,
  "name": "Ravenswood",
  "country": "US",
  "coord": {
    "lon": -122.135239,
    "lat": 37.47633
  }
}, {
  "id": 8133798,
  "name": "Dimos Galatsi",
  "country": "GR",
  "coord": {
    "lon": 23.757111,
    "lat": 38.01915
  }
}, {
  "id": 2516255,
  "name": "Jumilla",
  "country": "ES",
  "coord": {
    "lon": -1.325,
    "lat": 38.479172
  }
}, {
  "id": 2523281,
  "name": "Sant’Avendrace",
  "country": "IT",
  "coord": {
    "lon": 9.09694,
    "lat": 39.23056
  }
}, {
  "id": 4521978,
  "name": "Prospect",
  "country": "US",
  "coord": {
    "lon": -83.563812,
    "lat": 39.135071
  }
}, {
  "id": 5784492,
  "name": "Wendover",
  "country": "US",
  "coord": {
    "lon": -114.037514,
    "lat": 40.737148
  }
}, {
  "id": 3111108,
  "name": "Salamanca",
  "country": "ES",
  "coord": {
    "lon": -5.65,
    "lat": 40.966671
  }
}, {
  "id": 4920512,
  "name": "Fremont",
  "country": "US",
  "coord": {
    "lon": -84.932739,
    "lat": 41.730881
  }
}, {
  "id": 3116226,
  "name": "Monzalbarba",
  "country": "ES",
  "coord": {
    "lon": -0.966,
    "lat": 41.703571
  }
}, {
  "id": 6426295,
  "name": "Saint-Girons",
  "country": "FR",
  "coord": {
    "lon": 1.15,
    "lat": 42.98333
  }
}, {
  "id": 3116962,
  "name": "Melarde",
  "country": "ES",
  "coord": {
    "lon": -5.32373,
    "lat": 43.34428
  }
}, {
  "id": 3182225,
  "name": "Bellaria",
  "country": "IT",
  "coord": {
    "lon": 12.46519,
    "lat": 44.146
  }
}, {
  "id": 5120956,
  "name": "Hogansburg",
  "country": "US",
  "coord": {
    "lon": -74.663239,
    "lat": 44.973942
  }
}, {
  "id": 5039576,
  "name": "North Redwood",
  "country": "US",
  "coord": {
    "lon": -95.094437,
    "lat": 44.56329
  }
}, {
  "id": 5036727,
  "name": "Marshall",
  "country": "US",
  "coord": {
    "lon": -95.788353,
    "lat": 44.446899
  }
}, {
  "id": 6454071,
  "name": "Grenoble",
  "country": "FR",
  "coord": {
    "lon": 5.7266,
    "lat": 45.187199
  }
}, {
  "id": 5040864,
  "name": "Parkwood Estates",
  "country": "US",
  "coord": {
    "lon": -95.084717,
    "lat": 45.130001
  }
}, {
  "id": 5266230,
  "name": "Park Falls",
  "country": "US",
  "coord": {
    "lon": -90.441551,
    "lat": 45.934399
  }
}, {
  "id": 6538252,
  "name": "Bassano del Grappa",
  "country": "IT",
  "coord": {
    "lon": 11.7357,
    "lat": 45.767601
  }
}, {
  "id": 1529144,
  "name": "Temeke",
  "country": "CN",
  "coord": {
    "lon": 89.699997,
    "lat": 47.23333
  }
}, {
  "id": 5046026,
  "name": "Sauk Centre",
  "country": "US",
  "coord": {
    "lon": -94.952522,
    "lat": 45.737461
  }
}, {
  "id": 6440623,
  "name": "Serres-Castet",
  "country": "FR",
  "coord": {
    "lon": -0.35,
    "lat": 43.383331
  }
}, {
  "id": 6543730,
  "name": "Turate",
  "country": "IT",
  "coord": {
    "lon": 9.00424,
    "lat": 45.657269
  }
}, {
  "id": 6536269,
  "name": "Casier",
  "country": "IT",
  "coord": {
    "lon": 12.29331,
    "lat": 45.642101
  }
}, {
  "id": 6554728,
  "name": "Farschweiler",
  "country": "DE",
  "coord": {
    "lon": 6.81667,
    "lat": 49.716702
  }
}, {
  "id": 6442609,
  "name": "Mamers",
  "country": "FR",
  "coord": {
    "lon": 0.38333,
    "lat": 48.349998
  }
}, {
  "id": 6555946,
  "name": "Bitz",
  "country": "DE",
  "coord": {
    "lon": 9.0917,
    "lat": 48.243881
  }
}, {
  "id": 6446923,
  "name": "Bar-sur-Aube",
  "country": "FR",
  "coord": {
    "lon": 4.71667,
    "lat": 48.23333
  }
}, {
  "id": 3057630,
  "name": "Skalica",
  "country": "SK",
  "coord": {
    "lon": 17.226351,
    "lat": 48.844898
  }
}, {
  "id": 2956656,
  "name": "Amberg",
  "country": "DE",
  "coord": {
    "lon": 11.86222,
    "lat": 49.441391
  }
}, {
  "id": 2903806,
  "name": "Hirschau",
  "country": "DE",
  "coord": {
    "lon": 11.95083,
    "lat": 49.544998
  }
}, {
  "id": 6446433,
  "name": "Anguilcourt-le-Sart",
  "country": "FR",
  "coord": {
    "lon": 3.43333,
    "lat": 49.683331
  }
}, {
  "id": 6553890,
  "name": "Dörth",
  "country": "DE",
  "coord": {
    "lon": 7.58333,
    "lat": 50.150002
  }
}, {
  "id": 2784199,
  "name": "Waimes",
  "country": "BE",
  "coord": {
    "lon": 6.11207,
    "lat": 50.414879
  }
}, {
  "id": 2858114,
  "name": "Odenkirchen",
  "country": "DE",
  "coord": {
    "lon": 6.45043,
    "lat": 51.13192
  }
}, {
  "id": 7533313,
  "name": "Lewin Brzeski",
  "country": "PL",
  "coord": {
    "lon": 17.630301,
    "lat": 50.754501
  }
}, {
  "id": 2647282,
  "name": "Hawkwell",
  "country": "GB",
  "coord": {
    "lon": 0.67347,
    "lat": 51.591949
  }
}, {
  "id": 3298509,
  "name": "Rahtnnane",
  "country": "IE",
  "coord": {
    "lon": -10.38556,
    "lat": 52.14167
  }
}, {
  "id": 6552946,
  "name": "Wietmarschen",
  "country": "DE",
  "coord": {
    "lon": 7.13333,
    "lat": 52.533298
  }
}, {
  "id": 2724180,
  "name": "Axelvold",
  "country": "SE",
  "coord": {
    "lon": 13.09178,
    "lat": 55.96854
  }
}, {
  "id": 6138201,
  "name": "Saint-Felicien",
  "country": "CA",
  "coord": {
    "lon": -72.449059,
    "lat": 48.65007
  }
}, {
  "id": 6535687,
  "name": "Viverone",
  "country": "IT",
  "coord": {
    "lon": 8.04942,
    "lat": 45.427261
  }
}, {
  "id": 5881219,
  "name": "Eastern District",
  "country": "AS",
  "coord": {
    "lon": -170.649994,
    "lat": -14.26667
  }
}, {
  "id": 7839622,
  "name": "Nedlands",
  "country": "AU",
  "coord": {
    "lon": 115.799423,
    "lat": -31.97994
  }
}, {
  "id": 2140691,
  "name": "Kone",
  "country": "NC",
  "coord": {
    "lon": 164.865814,
    "lat": -21.059509
  }
}, {
  "id": 2156897,
  "name": "Moriac",
  "country": "AU",
  "coord": {
    "lon": 144.166672,
    "lat": -38.23333
  }
}, {
  "id": 8010597,
  "name": "Alpiarça",
  "country": "PT",
  "coord": {
    "lon": -8.56336,
    "lat": 39.238819
  }
}, {
  "id": 8012981,
  "name": "Alpiarça",
  "country": "PT",
  "coord": {
    "lon": -8.56336,
    "lat": 39.238819
  }
}, {
  "id": 2268600,
  "name": "Enejas",
  "country": "PT",
  "coord": {
    "lon": -8.57527,
    "lat": 39.249531
  }
}, {
  "id": 7302646,
  "name": "Dartmouth Crossing",
  "country": "CA",
  "coord": {
    "lon": -63.564999,
    "lat": 44.701672
  }
}, {
  "id": 8133669,
  "name": "Dimos Aigialeia",
  "country": "GR",
  "coord": {
    "lon": 22.139139,
    "lat": 38.153
  }
}, {
  "id": 265500,
  "name": "Aigio",
  "country": "GR",
  "coord": {
    "lon": 22.08194,
    "lat": 38.248611
  }
}, {
  "id": 6454885,
  "name": "Yerres",
  "country": "FR",
  "coord": {
    "lon": 2.5,
    "lat": 48.716671
  }
}, {
  "id": 2991213,
  "name": "Arrondissement de Mulhouse",
  "country": "FR",
  "coord": {
    "lon": 7.41667,
    "lat": 47.666672
  }
}, {
  "id": 6441466,
  "name": "Hésingue",
  "country": "FR",
  "coord": {
    "lon": 7.51667,
    "lat": 47.583328
  }
}, {
  "id": 3167895,
  "name": "San Paolo",
  "country": "IT",
  "coord": {
    "lon": 7.63333,
    "lat": 45.049999
  }
}, {
  "id": 3001464,
  "name": "Les Chenais",
  "country": "FR",
  "coord": {
    "lon": -1.34529,
    "lat": 48.061192
  }
}, {
  "id": 2066052,
  "name": "Moana",
  "country": "AU",
  "coord": {
    "lon": 138.483337,
    "lat": -35.200001
  }
}, {
  "id": 2773064,
  "name": "Landersdorf",
  "country": "AT",
  "coord": {
    "lon": 15.63333,
    "lat": 48.416672
  }
}, {
  "id": 3219616,
  "name": "San Vigilio",
  "country": "IT",
  "coord": {
    "lon": 12.35806,
    "lat": 46.130829
  }
}, {
  "id": 2192676,
  "name": "Campbells Bay",
  "country": "NZ",
  "coord": {
    "lon": 174.766663,
    "lat": -36.75
  }
}, {
  "id": 4563793,
  "name": "Cimarrona",
  "country": "PR",
  "coord": {
    "lon": -66.19017,
    "lat": 17.99608
  }
}, {
  "id": 2976008,
  "name": "Arrondissement de Sarlat-la-Canéda",
  "country": "FR",
  "coord": {
    "lon": 1.08333,
    "lat": 44.916672
  }
}, {
  "id": 3220832,
  "name": "Landkreis Freising",
  "country": "DE",
  "coord": {
    "lon": 11.735,
    "lat": 48.44083
  }
}, {
  "id": 4404807,
  "name": "Pulaski County",
  "country": "US",
  "coord": {
    "lon": -92.200172,
    "lat": 37.83337
  }
}, {
  "id": 7839396,
  "name": "Toowoomba",
  "country": "AU",
  "coord": {
    "lon": 151.477051,
    "lat": -27.47958
  }
}, {
  "id": 2160987,
  "name": "Kudo",
  "country": "AU",
  "coord": {
    "lon": 151.833328,
    "lat": -27.33333
  }
}, {
  "id": 2784107,
  "name": "Wangenies",
  "country": "BE",
  "coord": {
    "lon": 4.52019,
    "lat": 50.480228
  }
}, {
  "id": 5758058,
  "name": "Umatilla County",
  "country": "US",
  "coord": {
    "lon": -118.50135,
    "lat": 45.50013
  }
}, {
  "id": 2644993,
  "name": "Lambourn",
  "country": "GB",
  "coord": {
    "lon": -1.53105,
    "lat": 51.508049
  }
}, {
  "id": 7286464,
  "name": "Maur",
  "country": "CH",
  "coord": {
    "lon": 8.65996,
    "lat": 47.33609
  }
}, {
  "id": 6294456,
  "name": "Rüti",
  "country": "CH",
  "coord": {
    "lon": 8.65277,
    "lat": 47.34367
  }
}, {
  "id": 3219982,
  "name": "Basaldella",
  "country": "IT",
  "coord": {
    "lon": 13.21444,
    "lat": 46.025558
  }
}, {
  "id": 6275364,
  "name": "El Ksâr",
  "country": "LB",
  "coord": {
    "lon": 35.689999,
    "lat": 33.962219
  }
}, {
  "id": 2644577,
  "name": "Leven",
  "country": "GB",
  "coord": {
    "lon": -3,
    "lat": 56.200001
  }
}, {
  "id": 730918,
  "name": "Obshtina Ikhtiman",
  "country": "BG",
  "coord": {
    "lon": 23.816669,
    "lat": 42.433331
  }
}, {
  "id": 1526586,
  "name": "Aktobe",
  "country": "KZ",
  "coord": {
    "lon": 70.400002,
    "lat": 43.466671
  }
}, {
  "id": 6448939,
  "name": "Dhuizon",
  "country": "FR",
  "coord": {
    "lon": 1.65,
    "lat": 47.583328
  }
}, {
  "id": 3021458,
  "name": "Dhuizon",
  "country": "FR",
  "coord": {
    "lon": 1.65809,
    "lat": 47.587238
  }
}, {
  "id": 2997523,
  "name": "Département du Lot-et-Garonne",
  "country": "FR",
  "coord": {
    "lon": 0.5,
    "lat": 44.333328
  }
}, {
  "id": 3038633,
  "name": "Arrondissement d'Agen",
  "country": "FR",
  "coord": {
    "lon": 0.58333,
    "lat": 44.166672
  }
}, {
  "id": 6435033,
  "name": "Pont-du-Casse",
  "country": "FR",
  "coord": {
    "lon": 0.68333,
    "lat": 44.23333
  }
}, {
  "id": 2986220,
  "name": "Pont-du-Casse",
  "country": "FR",
  "coord": {
    "lon": 0.67924,
    "lat": 44.228668
  }
}, {
  "id": 5887023,
  "name": "Armour Heights",
  "country": "CA",
  "coord": {
    "lon": -79.431068,
    "lat": 43.745991
  }
}, {
  "id": 6360731,
  "name": "Torrelavega",
  "country": "ES",
  "coord": {
    "lon": -4.0511,
    "lat": 43.344582
  }
}, {
  "id": 3107775,
  "name": "Torrelavega",
  "country": "ES",
  "coord": {
    "lon": -4.04785,
    "lat": 43.349442
  }
}, {
  "id": 5053645,
  "name": "Zimmerman Terrace",
  "country": "US",
  "coord": {
    "lon": -93.583611,
    "lat": 45.448608
  }
}, {
  "id": 7290543,
  "name": "Epping Forest District",
  "country": "GB",
  "coord": {
    "lon": 0.16555,
    "lat": 51.712818
  }
}, {
  "id": 634964,
  "name": "Tampere",
  "country": "FI",
  "coord": {
    "lon": 23.75,
    "lat": 61.5
  }
}, {
  "id": 7839490,
  "name": "Corrigin",
  "country": "AU",
  "coord": {
    "lon": 117.810226,
    "lat": -32.375992
  }
}, {
  "id": 2070577,
  "name": "Gorge Rock",
  "country": "AU",
  "coord": {
    "lon": 117.933327,
    "lat": -32.450001
  }
}, {
  "id": 6694945,
  "name": "Peggy's Cove",
  "country": "CA",
  "coord": {
    "lon": -63.914181,
    "lat": 44.49366
  }
}, {
  "id": 2864508,
  "name": "Neumühle",
  "country": "DE",
  "coord": {
    "lon": 11.78333,
    "lat": 50.283329
  }
}, {
  "id": 3576979,
  "name": "Kew",
  "country": "TC",
  "coord": {
    "lon": -72.033333,
    "lat": 21.9
  }
}, {
  "id": 6615604,
  "name": "Blue Mountains",
  "country": "AU",
  "coord": {
    "lon": 150.330643,
    "lat": -33.71331
  }
}, {
  "id": 2755203,
  "name": "Gemeente Grootegast",
  "country": "NL",
  "coord": {
    "lon": 6.26667,
    "lat": 53.200001
  }
}, {
  "id": 3149469,
  "name": "Korsmo",
  "country": "NO",
  "coord": {
    "lon": 11.66667,
    "lat": 60.25
  }
}, {
  "id": 7290612,
  "name": "Selby District",
  "country": "GB",
  "coord": {
    "lon": -1.12659,
    "lat": 53.778111
  }
}, {
  "id": 6452003,
  "name": "Rosny-sous-Bois",
  "country": "FR",
  "coord": {
    "lon": 2.48333,
    "lat": 48.866669
  }
}, {
  "id": 6176895,
  "name": "Water Valley",
  "country": "CA",
  "coord": {
    "lon": -114.60202,
    "lat": 51.500099
  }
}, {
  "id": 2648300,
  "name": "Goring-by-Sea",
  "country": "GB",
  "coord": {
    "lon": -0.42194,
    "lat": 50.812389
  }
}, {
  "id": 3014755,
  "name": "Grégny",
  "country": "FR",
  "coord": {
    "lon": 6.53655,
    "lat": 45.498638
  }
}, {
  "id": 2615023,
  "name": "Ramløse",
  "country": "DK",
  "coord": {
    "lon": 12.11608,
    "lat": 56.013981
  }
}, {
  "id": 725615,
  "name": "Vŭrzulitsa",
  "country": "BG",
  "coord": {
    "lon": 25.466669,
    "lat": 43.433331
  }
}, {
  "id": 2634548,
  "name": "Wembury",
  "country": "GB",
  "coord": {
    "lon": -4.07529,
    "lat": 50.32272
  }
}, {
  "id": 2184443,
  "name": "Pollok",
  "country": "NZ",
  "coord": {
    "lon": 174.616669,
    "lat": -37.133331
  }
}, {
  "id": 2162276,
  "name": "Jimboomba",
  "country": "AU",
  "coord": {
    "lon": 153.033325,
    "lat": -27.83333
  }
}, {
  "id": 6453802,
  "name": "Plérin",
  "country": "FR",
  "coord": {
    "lon": -2.78333,
    "lat": 48.533329
  }
}, {
  "id": 7287303,
  "name": "Thierrens",
  "country": "CH",
  "coord": {
    "lon": 6.75896,
    "lat": 46.70385
  }
}, {
  "id": 6359189,
  "name": "Lugo",
  "country": "ES",
  "coord": {
    "lon": -7.49944,
    "lat": 43.002628
  }
}, {
  "id": 7297945,
  "name": "Lea",
  "country": "GB",
  "coord": {
    "lon": -2.49776,
    "lat": 51.8932
  }
}, {
  "id": 2644766,
  "name": "Lea",
  "country": "GB",
  "coord": {
    "lon": -2.5,
    "lat": 51.900002
  }
}, {
  "id": 2696058,
  "name": "Lilla Edets Kommun",
  "country": "SE",
  "coord": {
    "lon": 12.16667,
    "lat": 58.133331
  }
}, {
  "id": 2701590,
  "name": "Kärra",
  "country": "SE",
  "coord": {
    "lon": 12.15,
    "lat": 58.083328
  }
}, {
  "id": 2811444,
  "name": "Wellspang",
  "country": "DE",
  "coord": {
    "lon": 9.61667,
    "lat": 54.583328
  }
}, {
  "id": 2847079,
  "name": "Riedlingen",
  "country": "DE",
  "coord": {
    "lon": 10.75,
    "lat": 48.716671
  }
}, {
  "id": 3333209,
  "name": "District of Telford and Wrekin",
  "country": "GB",
  "coord": {
    "lon": -2.5,
    "lat": 52.75
  }
}, {
  "id": 7291968,
  "name": "Wellington",
  "country": "GB",
  "coord": {
    "lon": -2.51371,
    "lat": 52.70639
  }
}, {
  "id": 2634573,
  "name": "Wellington",
  "country": "GB",
  "coord": {
    "lon": -2.51667,
    "lat": 52.700001
  }
}, {
  "id": 3171043,
  "name": "Piaia",
  "country": "IT",
  "coord": {
    "lon": 11.98333,
    "lat": 46.383331
  }
}, {
  "id": 2953415,
  "name": "Landkreis Bad Kreuznach",
  "country": "DE",
  "coord": {
    "lon": 7.69833,
    "lat": 49.823891
  }
}, {
  "id": 7290609,
  "name": "Richmondshire District",
  "country": "GB",
  "coord": {
    "lon": -1.91612,
    "lat": 54.357288
  }
}, {
  "id": 5398597,
  "name": "Stanislaus County",
  "country": "US",
  "coord": {
    "lon": -121.001602,
    "lat": 37.549931
  }
}, {
  "id": 6356921,
  "name": "Arcos de la Frontera",
  "country": "ES",
  "coord": {
    "lon": -5.71978,
    "lat": 36.734509
  }
}, {
  "id": 3174958,
  "name": "Le Caselle",
  "country": "IT",
  "coord": {
    "lon": 11.91667,
    "lat": 45.533329
  }
}, {
  "id": 3333192,
  "name": "Borough of Sefton",
  "country": "GB",
  "coord": {
    "lon": -3,
    "lat": 53.5
  }
}, {
  "id": 7301053,
  "name": "Maghull",
  "country": "GB",
  "coord": {
    "lon": -2.93941,
    "lat": 53.511101
  }
}, {
  "id": 2643198,
  "name": "Maghull",
  "country": "GB",
  "coord": {
    "lon": -2.94117,
    "lat": 53.51619
  }
}, {
  "id": 5094497,
  "name": "West Brookline",
  "country": "US",
  "coord": {
    "lon": -71.679237,
    "lat": 42.736198
  }
}, {
  "id": 2652975,
  "name": "Clackmannanshire",
  "country": "GB",
  "coord": {
    "lon": -3.75,
    "lat": 56.166672
  }
}, {
  "id": 2653939,
  "name": "Cambus",
  "country": "GB",
  "coord": {
    "lon": -3.84426,
    "lat": 56.124401
  }
}, {
  "id": 6356034,
  "name": "Ibiza",
  "country": "ES",
  "coord": {
    "lon": 1.43577,
    "lat": 38.908939
  }
}, {
  "id": 6695972,
  "name": "Es Cana",
  "country": "ES",
  "coord": {
    "lon": 1.41219,
    "lat": 38.907379
  }
}, {
  "id": 2267094,
  "name": "Distrito de Leiria",
  "country": "PT",
  "coord": {
    "lon": -8.83333,
    "lat": 39.666672
  }
}, {
  "id": 2263594,
  "name": "Samarra",
  "country": "PT",
  "coord": {
    "lon": -8.2,
    "lat": 39.466671
  }
}, {
  "id": 2509929,
  "name": "Valldemossa",
  "country": "ES",
  "coord": {
    "lon": 2.6223,
    "lat": 39.710419
  }
}, {
  "id": 2984512,
  "name": "Arrondissement de Rambouillet",
  "country": "FR",
  "coord": {
    "lon": 1.91667,
    "lat": 48.583328
  }
}, {
  "id": 6444068,
  "name": "Saint-Germain-de-la-Grange",
  "country": "FR",
  "coord": {
    "lon": 1.9,
    "lat": 48.833328
  }
}, {
  "id": 2170702,
  "name": "Cooee",
  "country": "AU",
  "coord": {
    "lon": 145.883331,
    "lat": -41.066669
  }
}, {
  "id": 3038111,
  "name": "Département de l'Allier",
  "country": "FR",
  "coord": {
    "lon": 3,
    "lat": 46.5
  }
}, {
  "id": 5908691,
  "name": "Bridgeport",
  "country": "CA",
  "coord": {
    "lon": -80.482986,
    "lat": 43.483398
  }
}, {
  "id": 2647048,
  "name": "Herstmonceux",
  "country": "GB",
  "coord": {
    "lon": 0.3229,
    "lat": 50.88958
  }
}, {
  "id": 3199558,
  "name": "Griže",
  "country": "SI",
  "coord": {
    "lon": 15.15056,
    "lat": 46.229439
  }
}, {
  "id": 2641545,
  "name": "Newton Longville",
  "country": "GB",
  "coord": {
    "lon": -0.76595,
    "lat": 51.976002
  }
}, {
  "id": 2644973,
  "name": "Lancaster",
  "country": "GB",
  "coord": {
    "lon": -2.76667,
    "lat": 54.116669
  }
}, {
  "id": 2526435,
  "name": "Zaio",
  "country": "MA",
  "coord": {
    "lon": -2.7329,
    "lat": 34.942822
  }
}, {
  "id": 2753437,
  "name": "Gemeente Hulst",
  "country": "NL",
  "coord": {
    "lon": 4.0778,
    "lat": 51.312321
  }
}, {
  "id": 5421327,
  "name": "Estabrook",
  "country": "US",
  "coord": {
    "lon": -105.429443,
    "lat": 39.383041
  }
}, {
  "id": 7290555,
  "name": "Eastleigh District",
  "country": "GB",
  "coord": {
    "lon": -1.32746,
    "lat": 50.92263
  }
}, {
  "id": 2641254,
  "name": "North Stoneham",
  "country": "GB",
  "coord": {
    "lon": -1.37044,
    "lat": 50.953209
  }
}, {
  "id": 8133670,
  "name": "Dimos Kalavryta",
  "country": "GR",
  "coord": {
    "lon": 22.049959,
    "lat": 37.960732
  }
}, {
  "id": 7286001,
  "name": "Gudo",
  "country": "CH",
  "coord": {
    "lon": 8.94564,
    "lat": 46.181438
  }
}, {
  "id": 2785110,
  "name": "Uilenhoek",
  "country": "BE",
  "coord": {
    "lon": 3.96667,
    "lat": 50.966671
  }
}, {
  "id": 2648857,
  "name": "Garrabost",
  "country": "GB",
  "coord": {
    "lon": -6.21667,
    "lat": 58.216671
  }
}, {
  "id": 986873,
  "name": "Kroondal",
  "country": "ZA",
  "coord": {
    "lon": 27.315969,
    "lat": -25.719351
  }
}, {
  "id": 6359279,
  "name": "Daganzo de Arriba",
  "country": "ES",
  "coord": {
    "lon": -3.43988,
    "lat": 40.562531
  }
}, {
  "id": 6232255,
  "name": "MOUNT ALBERT",
  "country": "NZ",
  "coord": {
    "lon": 174.720184,
    "lat": -36.878201
  }
}, {
  "id": 2824860,
  "name": "Sülz",
  "country": "DE",
  "coord": {
    "lon": 6.92156,
    "lat": 50.91819
  }
}, {
  "id": 8133746,
  "name": "Dimos Molos-Agios Konstantinos",
  "country": "GR",
  "coord": {
    "lon": 22.730459,
    "lat": 38.754951
  }
}, {
  "id": 6433935,
  "name": "Pouillon",
  "country": "FR",
  "coord": {
    "lon": -1,
    "lat": 43.599998
  }
}, {
  "id": 2801423,
  "name": "Bos",
  "country": "BE",
  "coord": {
    "lon": 4.71667,
    "lat": 51.066669
  }
}, {
  "id": 2705294,
  "name": "Holmen",
  "country": "SE",
  "coord": {
    "lon": 12.63333,
    "lat": 57.799999
  }
}, {
  "id": 7294063,
  "name": "Llanelli",
  "country": "GB",
  "coord": {
    "lon": -4.16522,
    "lat": 51.670731
  }
}, {
  "id": 2635437,
  "name": "Trostre",
  "country": "GB",
  "coord": {
    "lon": -4.13667,
    "lat": 51.67598
  }
}, {
  "id": 2035607,
  "name": "Inner Mongolia Autonomous Region",
  "country": "CN",
  "coord": {
    "lon": 112,
    "lat": 44
  }
}, {
  "id": 2037922,
  "name": "Dalan Turu",
  "country": "CN",
  "coord": {
    "lon": 105.199997,
    "lat": 40.799999
  }
}, {
  "id": 3364236,
  "name": "Meersig",
  "country": "NA",
  "coord": {
    "lon": 14.48333,
    "lat": -22.98333
  }
}, {
  "id": 3790028,
  "name": "El Pedregal",
  "country": "VE",
  "coord": {
    "lon": -71.66655,
    "lat": 10.65553
  }
}, {
  "id": 3166850,
  "name": "Seano",
  "country": "IT",
  "coord": {
    "lon": 11.01667,
    "lat": 43.833328
  }
}, {
  "id": 3167417,
  "name": "Sant’Antonino",
  "country": "IT",
  "coord": {
    "lon": 10.75,
    "lat": 44.549999
  }
}, {
  "id": 5231992,
  "name": "Spink County",
  "country": "US",
  "coord": {
    "lon": -98.317039,
    "lat": 44.936081
  }
}, {
  "id": 2652297,
  "name": "Coseley",
  "country": "GB",
  "coord": {
    "lon": -2.0855,
    "lat": 52.544781
  }
}, {
  "id": 6357621,
  "name": "Ribes de Freser",
  "country": "ES",
  "coord": {
    "lon": 2.16789,
    "lat": 42.299061
  }
}, {
  "id": 3111829,
  "name": "Ribes Altes",
  "country": "ES",
  "coord": {
    "lon": 2.18333,
    "lat": 42.316669
  }
}, {
  "id": 6556242,
  "name": "Krün",
  "country": "DE",
  "coord": {
    "lon": 11.2833,
    "lat": 47.5
  }
}, {
  "id": 2883236,
  "name": "Krun",
  "country": "DE",
  "coord": {
    "lon": 11.28333,
    "lat": 47.5
  }
}, {
  "id": 2788313,
  "name": "Ravels",
  "country": "BE",
  "coord": {
    "lon": 4.99037,
    "lat": 51.37199
  }
}, {
  "id": 6452533,
  "name": "Aiffres",
  "country": "FR",
  "coord": {
    "lon": -0.41667,
    "lat": 46.283329
  }
}, {
  "id": 3038555,
  "name": "Aiffres",
  "country": "FR",
  "coord": {
    "lon": -0.42101,
    "lat": 46.294491
  }
}, {
  "id": 2865125,
  "name": "Neuhäusel",
  "country": "DE",
  "coord": {
    "lon": 7.91667,
    "lat": 47.98333
  }
}, {
  "id": 5332628,
  "name": "Calaveras County",
  "country": "US",
  "coord": {
    "lon": -120.584373,
    "lat": 38.166592
  }
}, {
  "id": 5343792,
  "name": "Douds Landing",
  "country": "US",
  "coord": {
    "lon": -120.32547,
    "lat": 38.2127
  }
}, {
  "id": 847515,
  "name": "Kurkimäki",
  "country": "FI",
  "coord": {
    "lon": 25.06745,
    "lat": 60.23325
  }
}, {
  "id": 2524777,
  "name": "Felline",
  "country": "IT",
  "coord": {
    "lon": 18.116671,
    "lat": 39.933331
  }
}, {
  "id": 3333154,
  "name": "Hillingdon",
  "country": "GB",
  "coord": {
    "lon": -0.45,
    "lat": 51.5
  }
}, {
  "id": 2620571,
  "name": "Hegningen",
  "country": "DK",
  "coord": {
    "lon": 12.28181,
    "lat": 55.028049
  }
}, {
  "id": 4013052,
  "name": "Concepción",
  "country": "MX",
  "coord": {
    "lon": -117.116669,
    "lat": 32.533329
  }
}, {
  "id": 2880083,
  "name": "Launsbach",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 50.616669
  }
}, {
  "id": 7839544,
  "name": "Glen Eira",
  "country": "AU",
  "coord": {
    "lon": 145.040985,
    "lat": -37.89949
  }
}, {
  "id": 7932651,
  "name": "Bentleigh East",
  "country": "AU",
  "coord": {
    "lon": 145.059875,
    "lat": -37.920101
  }
}, {
  "id": 6542249,
  "name": "Cencenighe Agordino",
  "country": "IT",
  "coord": {
    "lon": 11.97339,
    "lat": 46.343121
  }
}, {
  "id": 3179178,
  "name": "Cencenighe",
  "country": "IT",
  "coord": {
    "lon": 11.97339,
    "lat": 46.343121
  }
}, {
  "id": 3164197,
  "name": "Villanova",
  "country": "IT",
  "coord": {
    "lon": 14.21667,
    "lat": 40.833328
  }
}, {
  "id": 3163948,
  "name": "Vomero",
  "country": "IT",
  "coord": {
    "lon": 14.23333,
    "lat": 40.833328
  }
}, {
  "id": 6544227,
  "name": "Gemeente De Wolden",
  "country": "NL",
  "coord": {
    "lon": 6.37277,
    "lat": 52.701019
  }
}, {
  "id": 2756100,
  "name": "Engeland",
  "country": "NL",
  "coord": {
    "lon": 6.36944,
    "lat": 52.767502
  }
}, {
  "id": 7839389,
  "name": "Rockhampton",
  "country": "AU",
  "coord": {
    "lon": 150.227158,
    "lat": -22.884439
  }
}, {
  "id": 3021371,
  "name": "Arrondissement de Dijon",
  "country": "FR",
  "coord": {
    "lon": 5,
    "lat": 47.416672
  }
}, {
  "id": 6428723,
  "name": "Marcilly-sur-Tille",
  "country": "FR",
  "coord": {
    "lon": 5.13333,
    "lat": 47.51667
  }
}, {
  "id": 2995940,
  "name": "Marcilly-sur-Tille",
  "country": "FR",
  "coord": {
    "lon": 5.12979,
    "lat": 47.516998
  }
}, {
  "id": 7287217,
  "name": "Stans",
  "country": "CH",
  "coord": {
    "lon": 8.36333,
    "lat": 46.958858
  }
}, {
  "id": 648901,
  "name": "Lappeenranta",
  "country": "FI",
  "coord": {
    "lon": 28.16667,
    "lat": 61.049999
  }
}, {
  "id": 7290537,
  "name": "Cheshire West and Chester",
  "country": "GB",
  "coord": {
    "lon": -2.73595,
    "lat": 53.163521
  }
}, {
  "id": 7294598,
  "name": "Great Boughton",
  "country": "GB",
  "coord": {
    "lon": -2.85604,
    "lat": 53.189949
  }
}, {
  "id": 6693608,
  "name": "Hoole",
  "country": "GB",
  "coord": {
    "lon": -2.87689,
    "lat": 53.199799
  }
}, {
  "id": 2920424,
  "name": "Gilfershausen",
  "country": "DE",
  "coord": {
    "lon": 9.83333,
    "lat": 50.98333
  }
}, {
  "id": 2648372,
  "name": "Godalming",
  "country": "GB",
  "coord": {
    "lon": -0.61725,
    "lat": 51.18462
  }
}, {
  "id": 1273909,
  "name": "Churachandpur",
  "country": "IN",
  "coord": {
    "lon": 93.666672,
    "lat": 24.33333
  }
}, {
  "id": 6355669,
  "name": "Colilla (La)",
  "country": "ES",
  "coord": {
    "lon": -4.75503,
    "lat": 40.644089
  }
}, {
  "id": 2744642,
  "name": "Westkapelle",
  "country": "NL",
  "coord": {
    "lon": 3.44028,
    "lat": 51.529171
  }
}, {
  "id": 631273,
  "name": "Voistia",
  "country": "FI",
  "coord": {
    "lon": 25.33333,
    "lat": 60.950001
  }
}, {
  "id": 7296006,
  "name": "Filton",
  "country": "GB",
  "coord": {
    "lon": -2.5739,
    "lat": 51.511299
  }
}, {
  "id": 2653328,
  "name": "Charlton",
  "country": "GB",
  "coord": {
    "lon": -2.6,
    "lat": 51.51667
  }
}, {
  "id": 2879021,
  "name": "Leithe",
  "country": "DE",
  "coord": {
    "lon": 7.11667,
    "lat": 51.466671
  }
}, {
  "id": 830705,
  "name": "Tavastland",
  "country": "FI",
  "coord": {
    "lon": 24.25,
    "lat": 60.833328
  }
}, {
  "id": 630737,
  "name": "Ypäjä",
  "country": "FI",
  "coord": {
    "lon": 23.25,
    "lat": 60.833328
  }
}, {
  "id": 646756,
  "name": "Manninen",
  "country": "FI",
  "coord": {
    "lon": 23.216669,
    "lat": 60.799999
  }
}, {
  "id": 747458,
  "name": "Erenler",
  "country": "TR",
  "coord": {
    "lon": 29.566669,
    "lat": 41.116669
  }
}, {
  "id": 6173864,
  "name": "Vernon",
  "country": "CA",
  "coord": {
    "lon": -119.269051,
    "lat": 50.258091
  }
}, {
  "id": 6431696,
  "name": "Montaigut-sur-Save",
  "country": "FR",
  "coord": {
    "lon": 1.25,
    "lat": 43.700001
  }
}, {
  "id": 2150460,
  "name": "Sandringham",
  "country": "AU",
  "coord": {
    "lon": 145,
    "lat": -37.950001
  }
}, {
  "id": 1993378,
  "name": "Cideng",
  "country": "ID",
  "coord": {
    "lon": 106.806198,
    "lat": -6.1674
  }
}, {
  "id": 2159630,
  "name": "Longreach",
  "country": "AU",
  "coord": {
    "lon": 144.25,
    "lat": -23.450001
  }
}, {
  "id": 6543944,
  "name": "Ikast-Brande Kommune",
  "country": "DK",
  "coord": {
    "lon": 9.21667,
    "lat": 55.98333
  }
}, {
  "id": 3131675,
  "name": "Vik",
  "country": "NO",
  "coord": {
    "lon": 6.58512,
    "lat": 61.088631
  }
}, {
  "id": 7288344,
  "name": "Vik",
  "country": "NO",
  "coord": {
    "lon": 6.57806,
    "lat": 61.057121
  }
}, {
  "id": 1520789,
  "name": "Mynaral",
  "country": "KZ",
  "coord": {
    "lon": 73.684441,
    "lat": 45.416111
  }
}, {
  "id": 6073377,
  "name": "Midnapore",
  "country": "CA",
  "coord": {
    "lon": -114.059029,
    "lat": 50.915321
  }
}, {
  "id": 294568,
  "name": "Kefar Aharon",
  "country": "IL",
  "coord": {
    "lon": 34.792782,
    "lat": 31.91111
  }
}, {
  "id": 6692397,
  "name": "Bjorli",
  "country": "NO",
  "coord": {
    "lon": 8.20404,
    "lat": 62.259609
  }
}, {
  "id": 261702,
  "name": "Ixós",
  "country": "GR",
  "coord": {
    "lon": 28.183331,
    "lat": 36.416672
  }
}, {
  "id": 4163123,
  "name": "Macon",
  "country": "US",
  "coord": {
    "lon": -84.279068,
    "lat": 30.49464
  }
}, {
  "id": 2658007,
  "name": "Zuerich (Kreis 3) / Alt-Wiedikon",
  "country": "CH",
  "coord": {
    "lon": 8.51497,
    "lat": 47.362011
  }
}, {
  "id": 2921959,
  "name": "Gehrsweilerhof",
  "country": "DE",
  "coord": {
    "lon": 7.78333,
    "lat": 49.466671
  }
}, {
  "id": 6535097,
  "name": "Casale Litta",
  "country": "IT",
  "coord": {
    "lon": 8.74133,
    "lat": 45.767872
  }
}, {
  "id": 7839758,
  "name": "Newcastle",
  "country": "AU",
  "coord": {
    "lon": 151.708435,
    "lat": -32.876282
  }
}, {
  "id": 4186876,
  "name": "Cedar Hill",
  "country": "US",
  "coord": {
    "lon": -83.76545,
    "lat": 34.022331
  }
}, {
  "id": 2871045,
  "name": "Mindelheim",
  "country": "DE",
  "coord": {
    "lon": 10.48333,
    "lat": 48.049999
  }
}, {
  "id": 830686,
  "name": "Norra Karelen",
  "country": "FI",
  "coord": {
    "lon": 30,
    "lat": 63
  }
}, {
  "id": 639200,
  "name": "Ristisaari",
  "country": "FI",
  "coord": {
    "lon": 29.816669,
    "lat": 62.683331
  }
}, {
  "id": 2668674,
  "name": "Tjörns Kommun",
  "country": "SE",
  "coord": {
    "lon": 11.66667,
    "lat": 58.033329
  }
}, {
  "id": 7839676,
  "name": "Kingborough",
  "country": "AU",
  "coord": {
    "lon": 147.262497,
    "lat": -43.213799
  }
}, {
  "id": 2749851,
  "name": "Gemeente Noordoostpolder",
  "country": "NL",
  "coord": {
    "lon": 5.75,
    "lat": 52.700001
  }
}, {
  "id": 7839624,
  "name": "Northam",
  "country": "AU",
  "coord": {
    "lon": 116.649643,
    "lat": -31.69898
  }
}, {
  "id": 3124936,
  "name": "Clavijo",
  "country": "ES",
  "coord": {
    "lon": -2.42666,
    "lat": 42.348969
  }
}, {
  "id": 8133821,
  "name": "Dimos Chios",
  "country": "GR",
  "coord": {
    "lon": 26.01646,
    "lat": 38.401981
  }
}, {
  "id": 7701425,
  "name": "Kambos",
  "country": "GR",
  "coord": {
    "lon": 26.123341,
    "lat": 38.32246
  }
}, {
  "id": 2510071,
  "name": "Uxola",
  "country": "ES",
  "coord": {
    "lon": -0.48333,
    "lat": 38.700001
  }
}, {
  "id": 3302143,
  "name": "Landkreis Nordwestmecklenburg",
  "country": "DE",
  "coord": {
    "lon": 11.24806,
    "lat": 53.807781
  }
}, {
  "id": 6548221,
  "name": "Schlagsdorf",
  "country": "DE",
  "coord": {
    "lon": 10.8333,
    "lat": 53.733299
  }
}, {
  "id": 2838955,
  "name": "Schlagsdorf",
  "country": "DE",
  "coord": {
    "lon": 10.83333,
    "lat": 53.73333
  }
}, {
  "id": 5392329,
  "name": "San Luis Obispo County",
  "country": "US",
  "coord": {
    "lon": -120.534332,
    "lat": 35.366638
  }
}, {
  "id": 7839527,
  "name": "Banyule",
  "country": "AU",
  "coord": {
    "lon": 145.085754,
    "lat": -37.73386
  }
}, {
  "id": 2159454,
  "name": "Lower Plenty",
  "country": "AU",
  "coord": {
    "lon": 145.116669,
    "lat": -37.73333
  }
}, {
  "id": 3129986,
  "name": "Añorga",
  "country": "ES",
  "coord": {
    "lon": -2.00161,
    "lat": 43.28397
  }
}, {
  "id": 6325069,
  "name": "Iza",
  "country": "ES",
  "coord": {
    "lon": -2.0011,
    "lat": 43.301979
  }
}, {
  "id": 3084052,
  "name": "Swierczewo",
  "country": "PL",
  "coord": {
    "lon": 16.883329,
    "lat": 52.366669
  }
}, {
  "id": 2749813,
  "name": "Noordwijk aan Zee",
  "country": "NL",
  "coord": {
    "lon": 4.43472,
    "lat": 52.243328
  }
}, {
  "id": 6362115,
  "name": "Valencia",
  "country": "ES",
  "coord": {
    "lon": -0.35457,
    "lat": 39.45612
  }
}, {
  "id": 2520457,
  "name": "Campanar",
  "country": "ES",
  "coord": {
    "lon": -0.4,
    "lat": 39.48333
  }
}, {
  "id": 8063665,
  "name": "Branksome",
  "country": "GB",
  "coord": {
    "lon": -1.92344,
    "lat": 50.732101
  }
}, {
  "id": 7287583,
  "name": "Wiliberg",
  "country": "CH",
  "coord": {
    "lon": 8.01662,
    "lat": 47.266949
  }
}, {
  "id": 6697616,
  "name": "Wiliberg",
  "country": "CH",
  "coord": {
    "lon": 8.02139,
    "lat": 47.268688
  }
}, {
  "id": 6452423,
  "name": "Allennes-les-Marais",
  "country": "FR",
  "coord": {
    "lon": 2.95,
    "lat": 50.533329
  }
}, {
  "id": 2749385,
  "name": "Oosterzee",
  "country": "NL",
  "coord": {
    "lon": 5.77572,
    "lat": 52.873791
  }
}, {
  "id": 6359207,
  "name": "Pontenova (A)",
  "country": "ES",
  "coord": {
    "lon": -7.18214,
    "lat": 43.328339
  }
}, {
  "id": 7285691,
  "name": "Echarlens",
  "country": "CH",
  "coord": {
    "lon": 7.07716,
    "lat": 46.645828
  }
}, {
  "id": 3153009,
  "name": "Hem",
  "country": "NO",
  "coord": {
    "lon": 10.01667,
    "lat": 59.433331
  }
}, {
  "id": 5530531,
  "name": "Shafter",
  "country": "US",
  "coord": {
    "lon": -104.303253,
    "lat": 29.820169
  }
}, {
  "id": 4261996,
  "name": "Navilleton",
  "country": "US",
  "coord": {
    "lon": -85.938583,
    "lat": 38.381729
  }
}, {
  "id": 4919627,
  "name": "Deming",
  "country": "US",
  "coord": {
    "lon": -86.098602,
    "lat": 40.115311
  }
}, {
  "id": 3990668,
  "name": "Rancho El Aguajito",
  "country": "MX",
  "coord": {
    "lon": -116.966667,
    "lat": 32.416672
  }
}, {
  "id": 736120,
  "name": "Nomós Imathías",
  "country": "GR",
  "coord": {
    "lon": 22.25,
    "lat": 40.5
  }
}, {
  "id": 1690091,
  "name": "San Felipe",
  "country": "PH",
  "coord": {
    "lon": 123.205833,
    "lat": 13.64222
  }
}, {
  "id": 4978496,
  "name": "Shermans Corner",
  "country": "US",
  "coord": {
    "lon": -69.006416,
    "lat": 44.45813
  }
}, {
  "id": 2984741,
  "name": "Quiberon",
  "country": "FR",
  "coord": {
    "lon": -3.11962,
    "lat": 47.484119
  }
}, {
  "id": 4010969,
  "name": "El Bedito",
  "country": "MX",
  "coord": {
    "lon": -109.76667,
    "lat": 22.98333
  }
}, {
  "id": 2939819,
  "name": "Coswig",
  "country": "DE",
  "coord": {
    "lon": 12.45,
    "lat": 51.883331
  }
}, {
  "id": 2748200,
  "name": "Gemeente Rheden",
  "country": "NL",
  "coord": {
    "lon": 6.05,
    "lat": 52.01667
  }
}, {
  "id": 2756865,
  "name": "Dieren",
  "country": "NL",
  "coord": {
    "lon": 6.1,
    "lat": 52.052502
  }
}, {
  "id": 6542661,
  "name": "Velo d'Astico",
  "country": "IT",
  "coord": {
    "lon": 11.36769,
    "lat": 45.788399
  }
}, {
  "id": 3173670,
  "name": "Meda",
  "country": "IT",
  "coord": {
    "lon": 11.4005,
    "lat": 45.777821
  }
}, {
  "id": 7300649,
  "name": "Llanllyfni",
  "country": "GB",
  "coord": {
    "lon": -4.24085,
    "lat": 53.039379
  }
}, {
  "id": 6536003,
  "name": "Saint-Nicolas",
  "country": "IT",
  "coord": {
    "lon": 7.1667,
    "lat": 45.71656
  }
}, {
  "id": 3167922,
  "name": "San Nicolas",
  "country": "IT",
  "coord": {
    "lon": 7.16667,
    "lat": 45.716671
  }
}, {
  "id": 2883655,
  "name": "Kronsburg",
  "country": "DE",
  "coord": {
    "lon": 10.13901,
    "lat": 54.287979
  }
}, {
  "id": 2831030,
  "name": "Sophienhöhe",
  "country": "DE",
  "coord": {
    "lon": 10.16667,
    "lat": 54.299999
  }
}, {
  "id": 7839836,
  "name": "Wyndham",
  "country": "AU",
  "coord": {
    "lon": 144.635727,
    "lat": -37.892799
  }
}, {
  "id": 7285011,
  "name": "Bezirk Prättigau-Davos",
  "country": "CH",
  "coord": {
    "lon": 9.84407,
    "lat": 46.866241
  }
}, {
  "id": 2764178,
  "name": "Strassgang",
  "country": "AT",
  "coord": {
    "lon": 15.4,
    "lat": 47.033329
  }
}, {
  "id": 2751271,
  "name": "Gemeente Made en Drimmelen",
  "country": "NL",
  "coord": {
    "lon": 4.78333,
    "lat": 51.666672
  }
}, {
  "id": 3582324,
  "name": "Consejo",
  "country": "BZ",
  "coord": {
    "lon": -88.283333,
    "lat": 18.450001
  }
}, {
  "id": 5160581,
  "name": "Lemoyne",
  "country": "US",
  "coord": {
    "lon": -83.474098,
    "lat": 41.495892
  }
}, {
  "id": 2644287,
  "name": "Little Milton",
  "country": "GB",
  "coord": {
    "lon": -1.10495,
    "lat": 51.702801
  }
}, {
  "id": 4177409,
  "name": "Walton County",
  "country": "US",
  "coord": {
    "lon": -86.166611,
    "lat": 30.62575
  }
}, {
  "id": 4165763,
  "name": "New Harmony",
  "country": "US",
  "coord": {
    "lon": -86.279953,
    "lat": 30.853519
  }
}, {
  "id": 7285661,
  "name": "Domdidier",
  "country": "CH",
  "coord": {
    "lon": 7.01607,
    "lat": 46.862629
  }
}, {
  "id": 2772062,
  "name": "Maisbirbaum",
  "country": "AT",
  "coord": {
    "lon": 16.299999,
    "lat": 48.5
  }
}, {
  "id": 7290613,
  "name": "Ashfield District",
  "country": "GB",
  "coord": {
    "lon": -1.25288,
    "lat": 53.089439
  }
}, {
  "id": 2638215,
  "name": "Selston",
  "country": "GB",
  "coord": {
    "lon": -1.30179,
    "lat": 53.07193
  }
}, {
  "id": 2637358,
  "name": "South Normanton",
  "country": "GB",
  "coord": {
    "lon": -1.34262,
    "lat": 53.106369
  }
}, {
  "id": 4343122,
  "name": "Tangipahoa Parish",
  "country": "US",
  "coord": {
    "lon": -90.400093,
    "lat": 30.666849
  }
}, {
  "id": 2178144,
  "name": "Alexandra",
  "country": "AU",
  "coord": {
    "lon": 145.699997,
    "lat": -37.183331
  }
}, {
  "id": 2518328,
  "name": "El Molino",
  "country": "ES",
  "coord": {
    "lon": -3.87743,
    "lat": 36.76849
  }
}, {
  "id": 7296240,
  "name": "Llangollen Rural",
  "country": "GB",
  "coord": {
    "lon": -3.10033,
    "lat": 52.971062
  }
}, {
  "id": 3174254,
  "name": "Maglie",
  "country": "IT",
  "coord": {
    "lon": 18.298929,
    "lat": 40.11842
  }
}, {
  "id": 2658377,
  "name": "Thun",
  "country": "CH",
  "coord": {
    "lon": 7.62166,
    "lat": 46.751179
  }
}, {
  "id": 3333124,
  "name": "Bexley",
  "country": "GB",
  "coord": {
    "lon": 0.13333,
    "lat": 51.416672
  }
}, {
  "id": 2655774,
  "name": "Bexleyheath",
  "country": "GB",
  "coord": {
    "lon": 0.13943,
    "lat": 51.46291
  }
}, {
  "id": 637220,
  "name": "Seinäjoki",
  "country": "FI",
  "coord": {
    "lon": 22.816669,
    "lat": 62.783329
  }
}, {
  "id": 644790,
  "name": "Niemistö",
  "country": "FI",
  "coord": {
    "lon": 22.799999,
    "lat": 62.799999
  }
}, {
  "id": 7292723,
  "name": "Tilehurst",
  "country": "GB",
  "coord": {
    "lon": -1.04711,
    "lat": 51.45789
  }
}, {
  "id": 2746607,
  "name": "Gemeente Strijen",
  "country": "NL",
  "coord": {
    "lon": 4.55,
    "lat": 51.73333
  }
}, {
  "id": 2746609,
  "name": "Strijen",
  "country": "NL",
  "coord": {
    "lon": 4.55083,
    "lat": 51.745209
  }
}, {
  "id": 3180193,
  "name": "Casale Vignarola",
  "country": "IT",
  "coord": {
    "lon": 12.59136,
    "lat": 41.488781
  }
}, {
  "id": 3183583,
  "name": "Abbadia di Stura",
  "country": "IT",
  "coord": {
    "lon": 7.71667,
    "lat": 45.099998
  }
}, {
  "id": 7521552,
  "name": "Ardeatino",
  "country": "IT",
  "coord": {
    "lon": 12.503,
    "lat": 41.857861
  }
}, {
  "id": 4992137,
  "name": "Emmet County",
  "country": "US",
  "coord": {
    "lon": -84.916718,
    "lat": 45.53334
  }
}, {
  "id": 4987969,
  "name": "Canby Corners",
  "country": "US",
  "coord": {
    "lon": -84.915329,
    "lat": 45.63612
  }
}, {
  "id": 6094915,
  "name": "Otter Creek",
  "country": "CA",
  "coord": {
    "lon": -81.133041,
    "lat": 44.083389
  }
}, {
  "id": 3144656,
  "name": "Nesodden",
  "country": "NO",
  "coord": {
    "lon": 10.6494,
    "lat": 59.842201
  }
}, {
  "id": 3153801,
  "name": "Hasle",
  "country": "NO",
  "coord": {
    "lon": 10.7,
    "lat": 59.783329
  }
}, {
  "id": 7291120,
  "name": "Falmouth",
  "country": "GB",
  "coord": {
    "lon": -5.07133,
    "lat": 50.14505
  }
}, {
  "id": 2649715,
  "name": "Falmouth",
  "country": "GB",
  "coord": {
    "lon": -5.07113,
    "lat": 50.154411
  }
}, {
  "id": 6556008,
  "name": "Burgrieden",
  "country": "DE",
  "coord": {
    "lon": 9.93333,
    "lat": 48.233299
  }
}, {
  "id": 6445401,
  "name": "Nexon",
  "country": "FR",
  "coord": {
    "lon": 1.18333,
    "lat": 45.683331
  }
}, {
  "id": 1854579,
  "name": "Ohama",
  "country": "JP",
  "coord": {
    "lon": 136.833328,
    "lat": 34.5
  }
}, {
  "id": 6360189,
  "name": "San Bartolomé de Tirajana",
  "country": "ES",
  "coord": {
    "lon": -15.58081,
    "lat": 27.82506
  }
}, {
  "id": 6354969,
  "name": "Playa del Ingles",
  "country": "ES",
  "coord": {
    "lon": -15.5787,
    "lat": 27.756701
  }
}, {
  "id": 2654981,
  "name": "Bradley in the Moors",
  "country": "GB",
  "coord": {
    "lon": -1.91204,
    "lat": 52.968681
  }
}, {
  "id": 1013550,
  "name": "Christiana",
  "country": "ZA",
  "coord": {
    "lon": 25.16111,
    "lat": -27.914021
  }
}, {
  "id": 6227744,
  "name": "Terrace End",
  "country": "NZ",
  "coord": {
    "lon": 175.630203,
    "lat": -40.348251
  }
}, {
  "id": 6544252,
  "name": "Gemeente Leidschendam-Voorburg",
  "country": "NL",
  "coord": {
    "lon": 4.40139,
    "lat": 52.078331
  }
}, {
  "id": 2656060,
  "name": "Beckford",
  "country": "GB",
  "coord": {
    "lon": -2.03478,
    "lat": 52.020531
  }
}, {
  "id": 3632885,
  "name": "Mariperez",
  "country": "VE",
  "coord": {
    "lon": -66.871132,
    "lat": 10.51637
  }
}, {
  "id": 6941738,
  "name": "La Florida",
  "country": "VE",
  "coord": {
    "lon": -66.87841,
    "lat": 10.50334
  }
}, {
  "id": 1281556,
  "name": "Chalengkou",
  "country": "CN",
  "coord": {
    "lon": 93.900002,
    "lat": 38.033329
  }
}, {
  "id": 1538472,
  "name": "Laotai",
  "country": "CN",
  "coord": {
    "lon": 88.823059,
    "lat": 44.083611
  }
}, {
  "id": 6157718,
  "name": "Stouffville",
  "country": "CA",
  "coord": {
    "lon": -79.249603,
    "lat": 43.96682
  }
}, {
  "id": 4563244,
  "name": "Carolina Municipio",
  "country": "PR",
  "coord": {
    "lon": -65.957939,
    "lat": 18.37578
  }
}, {
  "id": 2620134,
  "name": "Holeby",
  "country": "DK",
  "coord": {
    "lon": 11.46416,
    "lat": 54.711479
  }
}, {
  "id": 2964468,
  "name": "Durrow",
  "country": "IE",
  "coord": {
    "lon": -7.3925,
    "lat": 52.84417
  }
}, {
  "id": 3369086,
  "name": "Cloetesville",
  "country": "ZA",
  "coord": {
    "lon": 18.85507,
    "lat": -33.912392
  }
}, {
  "id": 3458825,
  "name": "Lapa",
  "country": "BR",
  "coord": {
    "lon": -46.700001,
    "lat": -23.533331
  }
}, {
  "id": 3862555,
  "name": "Caroya",
  "country": "AR",
  "coord": {
    "lon": -64.116669,
    "lat": -31.033331
  }
}, {
  "id": 6356154,
  "name": "Montcada i Reixac",
  "country": "ES",
  "coord": {
    "lon": 2.18386,
    "lat": 41.495392
  }
}, {
  "id": 5755890,
  "name": "Talent",
  "country": "US",
  "coord": {
    "lon": -122.788651,
    "lat": 42.245682
  }
}, {
  "id": 7555444,
  "name": "Stio Caracol",
  "country": "BR",
  "coord": {
    "lon": -46.24052,
    "lat": -23.45262
  }
}, {
  "id": 4880327,
  "name": "Volga",
  "country": "US",
  "coord": {
    "lon": -91.540977,
    "lat": 42.80471
  }
}, {
  "id": 4693922,
  "name": "Goliad County",
  "country": "US",
  "coord": {
    "lon": -97.433601,
    "lat": 28.65027
  }
}, {
  "id": 3345130,
  "name": "Carew Newton",
  "country": "GB",
  "coord": {
    "lon": -4.82917,
    "lat": 51.705559
  }
}, {
  "id": 634829,
  "name": "Tattula",
  "country": "FI",
  "coord": {
    "lon": 23.25,
    "lat": 60.466671
  }
}, {
  "id": 1022393,
  "name": "Arboretum",
  "country": "ZA",
  "coord": {
    "lon": 32.061741,
    "lat": -28.756849
  }
}, {
  "id": 2065001,
  "name": "Nannup",
  "country": "AU",
  "coord": {
    "lon": 115.75,
    "lat": -33.98333
  }
}, {
  "id": 2847258,
  "name": "Riedelsbach",
  "country": "DE",
  "coord": {
    "lon": 13.80286,
    "lat": 48.75132
  }
}, {
  "id": 5205669,
  "name": "Perry County",
  "country": "US",
  "coord": {
    "lon": -77.249992,
    "lat": 40.500359
  }
}, {
  "id": 5186715,
  "name": "Dellville",
  "country": "US",
  "coord": {
    "lon": -77.115807,
    "lat": 40.363972
  }
}, {
  "id": 3167974,
  "name": "San Michele",
  "country": "IT",
  "coord": {
    "lon": 12.96667,
    "lat": 41.433331
  }
}, {
  "id": 6361970,
  "name": "Cullera",
  "country": "ES",
  "coord": {
    "lon": -0.24939,
    "lat": 39.164581
  }
}, {
  "id": 6544287,
  "name": "Gemeente Noordenveld",
  "country": "NL",
  "coord": {
    "lon": 6.44622,
    "lat": 53.114941
  }
}, {
  "id": 2997857,
  "name": "Département du Loiret",
  "country": "FR",
  "coord": {
    "lon": 2.33333,
    "lat": 47.916672
  }
}, {
  "id": 3008622,
  "name": "La Jacqueminière",
  "country": "FR",
  "coord": {
    "lon": 3.08377,
    "lat": 47.99955
  }
}, {
  "id": 2888639,
  "name": "Kleinkönigsdorf",
  "country": "DE",
  "coord": {
    "lon": 6.76667,
    "lat": 50.950001
  }
}, {
  "id": 6543838,
  "name": "Cavagnolo",
  "country": "IT",
  "coord": {
    "lon": 8.04903,
    "lat": 45.151749
  }
}, {
  "id": 6429107,
  "name": "Quévert",
  "country": "FR",
  "coord": {
    "lon": -2.08333,
    "lat": 48.466671
  }
}, {
  "id": 7522460,
  "name": "Viimsi vald",
  "country": "EE",
  "coord": {
    "lon": 24.78879,
    "lat": 59.580261
  }
}, {
  "id": 2511064,
  "name": "Santiponce",
  "country": "ES",
  "coord": {
    "lon": -6.04106,
    "lat": 37.435532
  }
}, {
  "id": 1346629,
  "name": "Layka",
  "country": "CN",
  "coord": {
    "lon": 79.731667,
    "lat": 37.076939
  }
}, {
  "id": 6357429,
  "name": "Cuenca",
  "country": "ES",
  "coord": {
    "lon": -2.13615,
    "lat": 40.074921
  }
}, {
  "id": 3119813,
  "name": "La Cueva",
  "country": "ES",
  "coord": {
    "lon": -1.92892,
    "lat": 40.43317
  }
}, {
  "id": 6084704,
  "name": "Murray Park",
  "country": "CA",
  "coord": {
    "lon": -97.276451,
    "lat": 49.902199
  }
}, {
  "id": 2635750,
  "name": "Todber",
  "country": "GB",
  "coord": {
    "lon": -2.28928,
    "lat": 50.980839
  }
}, {
  "id": 5021676,
  "name": "Cloverleaf Mobile Home Community",
  "country": "US",
  "coord": {
    "lon": -94.138893,
    "lat": 45.57222
  }
}, {
  "id": 6438285,
  "name": "Hazebrouck",
  "country": "FR",
  "coord": {
    "lon": 2.53333,
    "lat": 50.716671
  }
}, {
  "id": 2639524,
  "name": "Redruth",
  "country": "GB",
  "coord": {
    "lon": -5.22434,
    "lat": 50.23315
  }
}, {
  "id": 2647488,
  "name": "Harecastle",
  "country": "GB",
  "coord": {
    "lon": -2.25,
    "lat": 53.066669
  }
}, {
  "id": 3333125,
  "name": "City and Borough of Birmingham",
  "country": "GB",
  "coord": {
    "lon": -1.89823,
    "lat": 52.48048
  }
}, {
  "id": 260451,
  "name": "Káto Vlasía",
  "country": "GR",
  "coord": {
    "lon": 21.91667,
    "lat": 38
  }
}, {
  "id": 2749835,
  "name": "Noord-Scharwoude",
  "country": "NL",
  "coord": {
    "lon": 4.81111,
    "lat": 52.69833
  }
}, {
  "id": 6101606,
  "name": "Petawawa",
  "country": "CA",
  "coord": {
    "lon": -77.280067,
    "lat": 45.89452
  }
}, {
  "id": 7261046,
  "name": "Cayuse",
  "country": "US",
  "coord": {
    "lon": -118.566116,
    "lat": 45.67643
  }
}, {
  "id": 650167,
  "name": "Kuortane",
  "country": "FI",
  "coord": {
    "lon": 23.58333,
    "lat": 62.75
  }
}, {
  "id": 3163969,
  "name": "Volta Barozzo",
  "country": "IT",
  "coord": {
    "lon": 11.9,
    "lat": 45.366669
  }
}, {
  "id": 3171456,
  "name": "Provincia di Parma",
  "country": "IT",
  "coord": {
    "lon": 10.08333,
    "lat": 44.700001
  }
}, {
  "id": 3111394,
  "name": "Romanillos",
  "country": "ES",
  "coord": {
    "lon": -3.92815,
    "lat": 40.444061
  }
}, {
  "id": 284305,
  "name": "Beit Ṣafāfā",
  "country": "IL",
  "coord": {
    "lon": 35.203041,
    "lat": 31.74267
  }
}, {
  "id": 8010565,
  "name": "Sintra",
  "country": "PT",
  "coord": {
    "lon": -9.3837,
    "lat": 38.814388
  }
}, {
  "id": 2942093,
  "name": "Budelsdorf",
  "country": "DE",
  "coord": {
    "lon": 9.68333,
    "lat": 54.316669
  }
}, {
  "id": 2174299,
  "name": "Bracalba",
  "country": "AU",
  "coord": {
    "lon": 152.850006,
    "lat": -27.01667
  }
}, {
  "id": 2752240,
  "name": "Krommenie",
  "country": "NL",
  "coord": {
    "lon": 4.7625,
    "lat": 52.499168
  }
}, {
  "id": 3580529,
  "name": "Savannah",
  "country": "KY",
  "coord": {
    "lon": -81.300003,
    "lat": 19.26667
  }
}, {
  "id": 2713509,
  "name": "Frufällan",
  "country": "SE",
  "coord": {
    "lon": 12.96667,
    "lat": 57.783329
  }
}, {
  "id": 2786459,
  "name": "Smoorken",
  "country": "BE",
  "coord": {
    "lon": 3.41667,
    "lat": 50.883331
  }
}, {
  "id": 3333139,
  "name": "City and Borough of Coventry",
  "country": "GB",
  "coord": {
    "lon": -1.5,
    "lat": 52.416672
  }
}, {
  "id": 2649259,
  "name": "Foleshill",
  "country": "GB",
  "coord": {
    "lon": -1.48303,
    "lat": 52.439301
  }
}, {
  "id": 2620452,
  "name": "Hemmeshøj",
  "country": "DK",
  "coord": {
    "lon": 11.29146,
    "lat": 55.34544
  }
}, {
  "id": 4085392,
  "name": "Ramer",
  "country": "US",
  "coord": {
    "lon": -86.221352,
    "lat": 32.05043
  }
}, {
  "id": 759083,
  "name": "Skopanie",
  "country": "PL",
  "coord": {
    "lon": 21.57295,
    "lat": 50.481899
  }
}, {
  "id": 3088161,
  "name": "Prabuty",
  "country": "PL",
  "coord": {
    "lon": 19.205469,
    "lat": 53.755001
  }
}, {
  "id": 2751998,
  "name": "Lammerenburg",
  "country": "NL",
  "coord": {
    "lon": 3.55833,
    "lat": 51.466671
  }
}, {
  "id": 4905232,
  "name": "Palm Beach",
  "country": "US",
  "coord": {
    "lon": -88.197311,
    "lat": 42.37669
  }
}, {
  "id": 7285000,
  "name": "Wahlkreis Rheintal",
  "country": "CH",
  "coord": {
    "lon": 9.57903,
    "lat": 47.377689
  }
}, {
  "id": 6441813,
  "name": "Villeurbanne",
  "country": "FR",
  "coord": {
    "lon": 4.88333,
    "lat": 45.76667
  }
}, {
  "id": 1817692,
  "name": "Baihe",
  "country": "CN",
  "coord": {
    "lon": 111.943893,
    "lat": 33.631672
  }
}, {
  "id": 3117286,
  "name": "Mas dels Gayatos",
  "country": "ES",
  "coord": {
    "lon": -0.23333,
    "lat": 40.01667
  }
}, {
  "id": 3141172,
  "name": "Rota",
  "country": "NO",
  "coord": {
    "lon": 10.76667,
    "lat": 63.433331
  }
}, {
  "id": 7290621,
  "name": "Oxford District",
  "country": "GB",
  "coord": {
    "lon": -1.23854,
    "lat": 51.753151
  }
}, {
  "id": 6541855,
  "name": "Mantova",
  "country": "IT",
  "coord": {
    "lon": 10.77379,
    "lat": 45.152081
  }
}, {
  "id": 2660351,
  "name": "Hilterfingen",
  "country": "CH",
  "coord": {
    "lon": 7.66185,
    "lat": 46.73521
  }
}, {
  "id": 645444,
  "name": "Mustola",
  "country": "FI",
  "coord": {
    "lon": 28.31743,
    "lat": 61.06551
  }
}, {
  "id": 4917545,
  "name": "Alida",
  "country": "US",
  "coord": {
    "lon": -86.903084,
    "lat": 41.510601
  }
}, {
  "id": 3030299,
  "name": "Arrondissement de Brest",
  "country": "FR",
  "coord": {
    "lon": -4.5,
    "lat": 48.5
  }
}, {
  "id": 552252,
  "name": "Karpov",
  "country": "RU",
  "coord": {
    "lon": 46.183331,
    "lat": 49.683331
  }
}, {
  "id": 527191,
  "name": "Michurinsk",
  "country": "RU",
  "coord": {
    "lon": 40.4907,
    "lat": 52.8978
  }
}, {
  "id": 1497337,
  "name": "Norilsk",
  "country": "RU",
  "coord": {
    "lon": 88.202698,
    "lat": 69.3535
  }
}, {
  "id": 2123628,
  "name": "Magadan",
  "country": "RU",
  "coord": {
    "lon": 150.800003,
    "lat": 59.566669
  }
}, {
  "id": 2119441,
  "name": "Yuzhno-Sakhalinsk",
  "country": "RU",
  "coord": {
    "lon": 142.733658,
    "lat": 46.958118
  }
}, {
  "id": 1493870,
  "name": "Pyshma",
  "country": "RU",
  "coord": {
    "lon": 63.251289,
    "lat": 56.952259
  }
}, {
  "id": 553287,
  "name": "Kamyshin",
  "country": "RU",
  "coord": {
    "lon": 45.416012,
    "lat": 50.098331
  }
}, {
  "id": 1511736,
  "name": "Altayskoye",
  "country": "RU",
  "coord": {
    "lon": 85.332497,
    "lat": 51.953331
  }
}, {
  "id": 512047,
  "name": "Pavlovskaya",
  "country": "RU",
  "coord": {
    "lon": 30.133329,
    "lat": 59.566669
  }
}, {
  "id": 489271,
  "name": "Star",
  "country": "RU",
  "coord": {
    "lon": 34.151829,
    "lat": 53.623619
  }
}, {
  "id": 548408,
  "name": "Kirov",
  "country": "RU",
  "coord": {
    "lon": 49.660069,
    "lat": 58.596649
  }
}, {
  "id": 6864865,
  "name": "Sverdlovskiy",
  "country": "RU",
  "coord": {
    "lon": 86.145401,
    "lat": 54.583801
  }
}, {
  "id": 472328,
  "name": "Volot",
  "country": "RU",
  "coord": {
    "lon": 30.702499,
    "lat": 57.92778
  }
}, {
  "id": 471323,
  "name": "Voyskovitsy",
  "country": "RU",
  "coord": {
    "lon": 29.963961,
    "lat": 59.528671
  }
}, {
  "id": 501296,
  "name": "Roshchino",
  "country": "RU",
  "coord": {
    "lon": 29.6085,
    "lat": 60.251911
  }
}, {
  "id": 534841,
  "name": "Lisiy Nos",
  "country": "RU",
  "coord": {
    "lon": 30.020081,
    "lat": 60.016861
  }
}, {
  "id": 1494326,
  "name": "Pospelova",
  "country": "RU",
  "coord": {
    "lon": 66.071068,
    "lat": 56.234989
  }
}, {
  "id": 946877,
  "name": "Uitenhage",
  "country": "ZA",
  "coord": {
    "lon": 25.3971,
    "lat": -33.757568
  }
}, {
  "id": 2507480,
  "name": "Algiers",
  "country": "DZ",
  "coord": {
    "lon": 3.04197,
    "lat": 36.752499
  }
}, {
  "id": 2491195,
  "name": "L’Agha",
  "country": "DZ",
  "coord": {
    "lon": 3.05,
    "lat": 36.76667
  }
}, {
  "id": 8063455,
  "name": "Malanshof",
  "country": "ZA",
  "coord": {
    "lon": 27.976,
    "lat": -26.0951
  }
}, {
  "id": 998210,
  "name": "Halfway House",
  "country": "ZA",
  "coord": {
    "lon": 28.126369,
    "lat": -26.00526
  }
}, {
  "id": 1005265,
  "name": "Erand",
  "country": "ZA",
  "coord": {
    "lon": 28.116671,
    "lat": -25.98333
  }
}, {
  "id": 946058,
  "name": "Umtata",
  "country": "ZA",
  "coord": {
    "lon": 28.78443,
    "lat": -31.58893
  }
}, {
  "id": 2295692,
  "name": "Sakumona",
  "country": "GH",
  "coord": {
    "lon": -0.04746,
    "lat": 5.61304
  }
}, {
  "id": 973537,
  "name": "Mount Edgecombe",
  "country": "ZA",
  "coord": {
    "lon": 31.025101,
    "lat": -29.706671
  }
}, {
  "id": 957655,
  "name": "Sandton",
  "country": "ZA",
  "coord": {
    "lon": 28.05891,
    "lat": -26.05447
  }
}, {
  "id": 4456938,
  "name": "Brake",
  "country": "US",
  "coord": {
    "lon": -77.737747,
    "lat": 35.92321
  }
}, {
  "id": 4122327,
  "name": "Mound City",
  "country": "US",
  "coord": {
    "lon": -90.129257,
    "lat": 35.190369
  }
}, {
  "id": 4935951,
  "name": "Essex County",
  "country": "US",
  "coord": {
    "lon": -70.832832,
    "lat": 42.666759
  }
}, {
  "id": 4405434,
  "name": "Republic",
  "country": "US",
  "coord": {
    "lon": -93.480186,
    "lat": 37.120049
  }
}, {
  "id": 5078878,
  "name": "Shelton",
  "country": "US",
  "coord": {
    "lon": -98.730911,
    "lat": 40.779179
  }
}, {
  "id": 5551665,
  "name": "Arizona City",
  "country": "US",
  "coord": {
    "lon": -111.670959,
    "lat": 32.75589
  }
}, {
  "id": 4368320,
  "name": "Saint Mary's County",
  "country": "US",
  "coord": {
    "lon": -76.616348,
    "lat": 38.300129
  }
}, {
  "id": 7208522,
  "name": "Pin Oak Village",
  "country": "US",
  "coord": {
    "lon": -95.803001,
    "lat": 29.7665
  }
}, {
  "id": 4578104,
  "name": "Fairtraid",
  "country": "US",
  "coord": {
    "lon": -78.979477,
    "lat": 33.873779
  }
}, {
  "id": 4341377,
  "name": "Sheltons",
  "country": "US",
  "coord": {
    "lon": -91.907349,
    "lat": 32.8293
  }
}, {
  "id": 4422833,
  "name": "Country Club Subdivision",
  "country": "US",
  "coord": {
    "lon": -88.806442,
    "lat": 33.423458
  }
}, {
  "id": 4712711,
  "name": "Mount Enterprise",
  "country": "US",
  "coord": {
    "lon": -94.681038,
    "lat": 31.91795
  }
}, {
  "id": 5424865,
  "name": "Hermosa",
  "country": "US",
  "coord": {
    "lon": -107.835342,
    "lat": 37.415279
  }
}, {
  "id": 5363907,
  "name": "La Fetra",
  "country": "US",
  "coord": {
    "lon": -117.881447,
    "lat": 34.138901
  }
}, {
  "id": 5064432,
  "name": "Boone County",
  "country": "US",
  "coord": {
    "lon": -98.083672,
    "lat": 41.700008
  }
}, {
  "id": 7201401,
  "name": "Carlyle West",
  "country": "US",
  "coord": {
    "lon": -73.830559,
    "lat": 42.935558
  }
}, {
  "id": 5139023,
  "name": "South Westerlo",
  "country": "US",
  "coord": {
    "lon": -74.027077,
    "lat": 42.447861
  }
}, {
  "id": 4461697,
  "name": "Contentnea Junction",
  "country": "US",
  "coord": {
    "lon": -77.93248,
    "lat": 35.678211
  }
}, {
  "id": 4475980,
  "name": "Lincoln Heights",
  "country": "US",
  "coord": {
    "lon": -77.904709,
    "lat": 35.69405
  }
}, {
  "id": 4527720,
  "name": "Waterloo",
  "country": "US",
  "coord": {
    "lon": -82.784897,
    "lat": 39.83979
  }
}, {
  "id": 5268838,
  "name": "Richfield",
  "country": "US",
  "coord": {
    "lon": -88.193977,
    "lat": 43.256119
  }
}, {
  "id": 4599503,
  "name": "Vaughans Crossroads",
  "country": "US",
  "coord": {
    "lon": -80.102287,
    "lat": 34.208771
  }
}, {
  "id": 4421547,
  "name": "Choctaw County",
  "country": "US",
  "coord": {
    "lon": -89.237572,
    "lat": 33.340401
  }
}, {
  "id": 5312572,
  "name": "Saint David",
  "country": "US",
  "coord": {
    "lon": -110.214241,
    "lat": 31.904249
  }
}, {
  "id": 4723416,
  "name": "Rockwell",
  "country": "US",
  "coord": {
    "lon": -95.549683,
    "lat": 33.591221
  }
}, {
  "id": 4919277,
  "name": "Cook",
  "country": "US",
  "coord": {
    "lon": -87.469757,
    "lat": 41.377258
  }
}, {
  "id": 4985016,
  "name": "Barry County",
  "country": "US",
  "coord": {
    "lon": -85.316673,
    "lat": 42.60004
  }
}, {
  "id": 3911925,
  "name": "La Paz",
  "country": "BO",
  "coord": {
    "lon": -68.150002,
    "lat": -16.5
  }
}, {
  "id": 5273134,
  "name": "Sidney",
  "country": "US",
  "coord": {
    "lon": -90.638748,
    "lat": 44.552738
  }
}, {
  "id": 4494053,
  "name": "Sunny View",
  "country": "US",
  "coord": {
    "lon": -82.187889,
    "lat": 35.374279
  }
}, {
  "id": 4988619,
  "name": "Cheboygan County",
  "country": "US",
  "coord": {
    "lon": -84.500587,
    "lat": 45.450008
  }
}, {
  "id": 4913764,
  "name": "Tomahawk Bluff",
  "country": "US",
  "coord": {
    "lon": -89.08342,
    "lat": 41.380589
  }
}, {
  "id": 4290651,
  "name": "Dykes",
  "country": "US",
  "coord": {
    "lon": -84.435768,
    "lat": 37.068138
  }
}, {
  "id": 7247870,
  "name": "Cozy Acres",
  "country": "US",
  "coord": {
    "lon": -81.63694,
    "lat": 40.658329
  }
}, {
  "id": 5723848,
  "name": "Drake Crossing",
  "country": "US",
  "coord": {
    "lon": -122.655922,
    "lat": 44.925961
  }
}, {
  "id": 5564102,
  "name": "Gas Point",
  "country": "US",
  "coord": {
    "lon": -122.534462,
    "lat": 40.415428
  }
}, {
  "id": 4926474,
  "name": "Sloan",
  "country": "US",
  "coord": {
    "lon": -87.476128,
    "lat": 40.301979
  }
}, {
  "id": 5340687,
  "name": "Creston",
  "country": "US",
  "coord": {
    "lon": -120.523773,
    "lat": 35.51886
  }
}, {
  "id": 4364519,
  "name": "Oliver Beach",
  "country": "US",
  "coord": {
    "lon": -76.342743,
    "lat": 39.37289
  }
}, {
  "id": 7839805,
  "name": "Melbourne",
  "country": "AU",
  "coord": {
    "lon": 144.944214,
    "lat": -37.813061
  }
}, {
  "id": 2158177,
  "name": "Melbourne",
  "country": "AU",
  "coord": {
    "lon": 144.963318,
    "lat": -37.813999
  }
}, {
  "id": 6619279,
  "name": "City of Sydney",
  "country": "AU",
  "coord": {
    "lon": 151.208435,
    "lat": -33.867779
  }
}, {
  "id": 2148876,
  "name": "South Yarra",
  "country": "AU",
  "coord": {
    "lon": 144.983337,
    "lat": -37.833328
  }
}, {
  "id": 2146268,
  "name": "Toowoomba",
  "country": "AU",
  "coord": {
    "lon": 151.966675,
    "lat": -27.549999
  }
}, {
  "id": 7839478,
  "name": "Cambridge",
  "country": "AU",
  "coord": {
    "lon": 115.798866,
    "lat": -31.935419
  }
}, {
  "id": 2150767,
  "name": "Ryde",
  "country": "AU",
  "coord": {
    "lon": 151.100006,
    "lat": -33.816669
  }
}, {
  "id": 2155384,
  "name": "Newtown",
  "country": "AU",
  "coord": {
    "lon": 143.649994,
    "lat": -37.700001
  }
}, {
  "id": 2149975,
  "name": "Seaford",
  "country": "AU",
  "coord": {
    "lon": 145.133331,
    "lat": -38.099998
  }
}, {
  "id": 2177089,
  "name": "Ballarat North",
  "country": "AU",
  "coord": {
    "lon": 143.772842,
    "lat": -37.518841
  }
}, {
  "id": 7839740,
  "name": "Ku-ring-gai",
  "country": "AU",
  "coord": {
    "lon": 151.148773,
    "lat": -33.727009
  }
}, {
  "id": 2074113,
  "name": "Collie",
  "country": "AU",
  "coord": {
    "lon": 116.150002,
    "lat": -33.366669
  }
}, {
  "id": 2142501,
  "name": "Yarra Junction",
  "country": "AU",
  "coord": {
    "lon": 145.616669,
    "lat": -37.783329
  }
}, {
  "id": 2158868,
  "name": "Manly",
  "country": "AU",
  "coord": {
    "lon": 153.183334,
    "lat": -27.466669
  }
}, {
  "id": 7839796,
  "name": "Kingston",
  "country": "AU",
  "coord": {
    "lon": 145.095306,
    "lat": -38.004501
  }
}, {
  "id": 2154787,
  "name": "Nowra",
  "country": "AU",
  "coord": {
    "lon": 150.600006,
    "lat": -34.883331
  }
}, {
  "id": 7839760,
  "name": "Oberon",
  "country": "AU",
  "coord": {
    "lon": 149.817947,
    "lat": -33.84531
  }
}, {
  "id": 2206089,
  "name": "Sandy Bay",
  "country": "AU",
  "coord": {
    "lon": 147.35318,
    "lat": -42.912998
  }
}, {
  "id": 7839461,
  "name": "Tatiara",
  "country": "AU",
  "coord": {
    "lon": 140.507477,
    "lat": -36.222321
  }
}, {
  "id": 2178174,
  "name": "Albury",
  "country": "AU",
  "coord": {
    "lon": 146.916672,
    "lat": -36.083328
  }
}, {
  "id": 2146899,
  "name": "The Patch",
  "country": "AU",
  "coord": {
    "lon": 145.383331,
    "lat": -37.900002
  }
}, {
  "id": 7839602,
  "name": "Manjimup",
  "country": "AU",
  "coord": {
    "lon": 116.265663,
    "lat": -34.597889
  }
}, {
  "id": 2162419,
  "name": "Jannali",
  "country": "AU",
  "coord": {
    "lon": 151.066666,
    "lat": -34.01667
  }
}, {
  "id": 2151134,
  "name": "Rosebank",
  "country": "AU",
  "coord": {
    "lon": 153.399994,
    "lat": -28.66667
  }
}, {
  "id": 2170318,
  "name": "Corinda",
  "country": "AU",
  "coord": {
    "lon": 152.983337,
    "lat": -27.533331
  }
}, {
  "id": 2144332,
  "name": "Wauchope",
  "country": "AU",
  "coord": {
    "lon": 152.733337,
    "lat": -31.450001
  }
}, {
  "id": 7839593,
  "name": "Mackay",
  "country": "AU",
  "coord": {
    "lon": 149.042648,
    "lat": -21.08189
  }
}, {
  "id": 7932620,
  "name": "Elwood",
  "country": "AU",
  "coord": {
    "lon": 144.983047,
    "lat": -37.881699
  }
}, {
  "id": 7839648,
  "name": "Barossa",
  "country": "AU",
  "coord": {
    "lon": 138.961685,
    "lat": -34.61351
  }
}, {
  "id": 2142330,
  "name": "Yenda",
  "country": "AU",
  "coord": {
    "lon": 146.183334,
    "lat": -34.25
  }
}, {
  "id": 2070185,
  "name": "Hallett",
  "country": "AU",
  "coord": {
    "lon": 138.883331,
    "lat": -33.400002
  }
}, {
  "id": 2176031,
  "name": "Berwick",
  "country": "AU",
  "coord": {
    "lon": 145.350006,
    "lat": -38.033329
  }
}, {
  "id": 2151522,
  "name": "Riverstone",
  "country": "AU",
  "coord": {
    "lon": 150.866669,
    "lat": -33.683331
  }
}, {
  "id": 7839477,
  "name": "Busselton",
  "country": "AU",
  "coord": {
    "lon": 115.370796,
    "lat": -33.684769
  }
}, {
  "id": 2143285,
  "name": "Wodonga",
  "country": "AU",
  "coord": {
    "lon": 146.883331,
    "lat": -36.116669
  }
}, {
  "id": 2077347,
  "name": "Balaklava",
  "country": "AU",
  "coord": {
    "lon": 138.416672,
    "lat": -34.150002
  }
}, {
  "id": 2154913,
  "name": "Northmead",
  "country": "AU",
  "coord": {
    "lon": 150.983337,
    "lat": -33.783329
  }
}, {
  "id": 2169866,
  "name": "Croydon North",
  "country": "AU",
  "coord": {
    "lon": 145.300003,
    "lat": -37.783329
  }
}, {
  "id": 2147381,
  "name": "Taree",
  "country": "AU",
  "coord": {
    "lon": 152.466675,
    "lat": -31.9
  }
}, {
  "id": 2161415,
  "name": "Kilmore",
  "country": "AU",
  "coord": {
    "lon": 144.949997,
    "lat": -37.299999
  }
}, {
  "id": 2158922,
  "name": "Mandalong",
  "country": "AU",
  "coord": {
    "lon": 151.433334,
    "lat": -33.133331
  }
}, {
  "id": 2142777,
  "name": "Wyee",
  "country": "AU",
  "coord": {
    "lon": 151.483337,
    "lat": -33.183331
  }
}, {
  "id": 2160413,
  "name": "Leeton",
  "country": "AU",
  "coord": {
    "lon": 146.399994,
    "lat": -34.566669
  }
}, {
  "id": 2143074,
  "name": "Woodleigh",
  "country": "AU",
  "coord": {
    "lon": 145.633331,
    "lat": -38.400002
  }
}, {
  "id": 2079019,
  "name": "Cervantes",
  "country": "AU",
  "coord": {
    "lon": 115.063889,
    "lat": -30.500561
  }
}, {
  "id": 2059539,
  "name": "Utakarra",
  "country": "AU",
  "coord": {
    "lon": 114.650002,
    "lat": -28.783331
  }
}, {
  "id": 6573030,
  "name": "Namhyang-dong",
  "country": "KR",
  "coord": {
    "lon": 127.021393,
    "lat": 37.283611
  }
}, {
  "id": 1842936,
  "name": "Kinho",
  "country": "KR",
  "coord": {
    "lon": 126.714172,
    "lat": 37.623611
  }
}, {
  "id": 6800892,
  "name": "Sup’yŏng-dong",
  "country": "KR",
  "coord": {
    "lon": 127.143501,
    "lat": 37.594601
  }
}, {
  "id": 6800397,
  "name": "P’ungnap-tong",
  "country": "KR",
  "coord": {
    "lon": 127.1185,
    "lat": 37.5368
  }
}, {
  "id": 1844533,
  "name": "Hamyang",
  "country": "KR",
  "coord": {
    "lon": 127.727661,
    "lat": 35.519379
  }
}, {
  "id": 1894616,
  "name": "Okinawa",
  "country": "JP",
  "coord": {
    "lon": 127.801392,
    "lat": 26.335831
  }
}, {
  "id": 1862818,
  "name": "Higashi-horidōri",
  "country": "JP",
  "coord": {
    "lon": 139.050003,
    "lat": 37.916672
  }
}, {
  "id": 2111220,
  "name": "Sakura",
  "country": "JP",
  "coord": {
    "lon": 140.233337,
    "lat": 35.716671
  }
}, {
  "id": 1856717,
  "name": "Miyazaki-shi",
  "country": "JP",
  "coord": {
    "lon": 131.423889,
    "lat": 31.91111
  }
}, {
  "id": 1860797,
  "name": "Kaigandōri",
  "country": "JP",
  "coord": {
    "lon": 133.916672,
    "lat": 34.666672
  }
}, {
  "id": 1852524,
  "name": "Shijōdōri",
  "country": "JP",
  "coord": {
    "lon": 135.763031,
    "lat": 35.00378
  }
}, {
  "id": 2112923,
  "name": "Fukushima-shi",
  "country": "JP",
  "coord": {
    "lon": 140.467773,
    "lat": 37.75
  }
}, {
  "id": 1856697,
  "name": "Miyoshi",
  "country": "JP",
  "coord": {
    "lon": 137.066666,
    "lat": 35.083328
  }
}, {
  "id": 1856524,
  "name": "Motoichiba",
  "country": "JP",
  "coord": {
    "lon": 138.649994,
    "lat": 35.150002
  }
}, {
  "id": 1849876,
  "name": "Toyama-shi",
  "country": "JP",
  "coord": {
    "lon": 137.211395,
    "lat": 36.695278
  }
}, {
  "id": 1854629,
  "name": "Ogori",
  "country": "JP",
  "coord": {
    "lon": 131.399994,
    "lat": 34.099998
  }
}, {
  "id": 1856900,
  "name": "Mitsugarasuchō",
  "country": "JP",
  "coord": {
    "lon": 135.833328,
    "lat": 34.666672
  }
}, {
  "id": 1862415,
  "name": "Hiroshima-shi",
  "country": "JP",
  "coord": {
    "lon": 132.459366,
    "lat": 34.396271
  }
}, {
  "id": 1860483,
  "name": "Kami-nagarekawachō",
  "country": "JP",
  "coord": {
    "lon": 132.449997,
    "lat": 34.400002
  }
}, {
  "id": 1863130,
  "name": "Harisakichō",
  "country": "JP",
  "coord": {
    "lon": 137.149994,
    "lat": 34.916672
  }
}, {
  "id": 1855891,
  "name": "Nakamura",
  "country": "JP",
  "coord": {
    "lon": 132.933334,
    "lat": 32.98333
  }
}, {
  "id": 1863641,
  "name": "Gifu-shi",
  "country": "JP",
  "coord": {
    "lon": 136.760391,
    "lat": 35.422909
  }
}, {
  "id": 1862197,
  "name": "Honjōchō",
  "country": "JP",
  "coord": {
    "lon": 136.75,
    "lat": 35.416672
  }
}, {
  "id": 1853574,
  "name": "Otsu-shi",
  "country": "JP",
  "coord": {
    "lon": 135.868332,
    "lat": 35.00444
  }
}, {
  "id": 2128295,
  "name": "Sapporo-shi",
  "country": "JP",
  "coord": {
    "lon": 141.346939,
    "lat": 43.064171
  }
}, {
  "id": 2130658,
  "name": "Aomori-shi",
  "country": "JP",
  "coord": {
    "lon": 140.740005,
    "lat": 40.82444
  }
}, {
  "id": 1857550,
  "name": "Matsue-shi",
  "country": "JP",
  "coord": {
    "lon": 133.050568,
    "lat": 35.472221
  }
}, {
  "id": 1856789,
  "name": "Miyake",
  "country": "JP",
  "coord": {
    "lon": 135.550003,
    "lat": 34.583328
  }
}, {
  "id": 1856177,
  "name": "Nagasaki-shi",
  "country": "JP",
  "coord": {
    "lon": 129.873611,
    "lat": 32.74472
  }
}, {
  "id": 1862554,
  "name": "Hiradogoyamachi",
  "country": "JP",
  "coord": {
    "lon": 129.866669,
    "lat": 32.75
  }
}, {
  "id": 1851100,
  "name": "Takamatsu-shi",
  "country": "JP",
  "coord": {
    "lon": 134.043335,
    "lat": 34.340279
  }
}, {
  "id": 2128815,
  "name": "Obihiro",
  "country": "JP",
  "coord": {
    "lon": 143.204437,
    "lat": 42.917221
  }
}, {
  "id": 1855863,
  "name": "Nakano",
  "country": "JP",
  "coord": {
    "lon": 138.366669,
    "lat": 36.75
  }
}, {
  "id": 1863219,
  "name": "Hanawadamachi",
  "country": "JP",
  "coord": {
    "lon": 139.883331,
    "lat": 36.549999
  }
}, {
  "id": 1855265,
  "name": "Nishikichō",
  "country": "JP",
  "coord": {
    "lon": 138.566666,
    "lat": 35.650002
  }
}, {
  "id": 1852607,
  "name": "Shibata",
  "country": "JP",
  "coord": {
    "lon": 139.333328,
    "lat": 37.950001
  }
}, {
  "id": 1853045,
  "name": "Sambashidōri",
  "country": "JP",
  "coord": {
    "lon": 133.550003,
    "lat": 33.549999
  }
}, {
  "id": 1857594,
  "name": "Masuda",
  "country": "JP",
  "coord": {
    "lon": 131.850006,
    "lat": 34.666672
  }
}, {
  "id": 1855944,
  "name": "Nakaichi",
  "country": "JP",
  "coord": {
    "lon": 131.483337,
    "lat": 34.166672
  }
}, {
  "id": 1865103,
  "name": "Arita",
  "country": "JP",
  "coord": {
    "lon": 129.899994,
    "lat": 33.183331
  }
}, {
  "id": 1863822,
  "name": "Furukawabashi",
  "country": "JP",
  "coord": {
    "lon": 135.600006,
    "lat": 34.73333
  }
}, {
  "id": 1850314,
  "name": "Tōbō",
  "country": "JP",
  "coord": {
    "lon": 129.933334,
    "lat": 33.48333
  }
}, {
  "id": 1857140,
  "name": "Minami-senjumachi",
  "country": "JP",
  "coord": {
    "lon": 139.816666,
    "lat": 35.73333
  }
}, {
  "id": 1853188,
  "name": "Sakaidechō",
  "country": "JP",
  "coord": {
    "lon": 133.850006,
    "lat": 34.316669
  }
}, {
  "id": 1863683,
  "name": "Ganiko",
  "country": "JP",
  "coord": {
    "lon": 127.75351,
    "lat": 26.25601
  }
}, {
  "id": 1849519,
  "name": "Tsuyama",
  "country": "JP",
  "coord": {
    "lon": 134,
    "lat": 35.049999
  }
}, {
  "id": 1850152,
  "name": "Tokuyama",
  "country": "JP",
  "coord": {
    "lon": 131.816666,
    "lat": 34.049999
  }
}, {
  "id": 1926020,
  "name": "Uwajima",
  "country": "JP",
  "coord": {
    "lon": 132.560013,
    "lat": 33.223751
  }
}, {
  "id": 1858296,
  "name": "Kure",
  "country": "JP",
  "coord": {
    "lon": 132.566666,
    "lat": 34.23333
  }
}, {
  "id": 1856243,
  "name": "Nagahama",
  "country": "JP",
  "coord": {
    "lon": 136.266663,
    "lat": 35.383331
  }
}, {
  "id": 1926108,
  "name": "Komatsu",
  "country": "JP",
  "coord": {
    "lon": 133.116669,
    "lat": 33.883331
  }
}, {
  "id": 2114009,
  "name": "Nishikawa",
  "country": "JP",
  "coord": {
    "lon": 140.176392,
    "lat": 38.926109
  }
}, {
  "id": 2128574,
  "name": "Otaru",
  "country": "JP",
  "coord": {
    "lon": 141.002213,
    "lat": 43.189442
  }
}, {
  "id": 1849831,
  "name": "Toyooka",
  "country": "JP",
  "coord": {
    "lon": 134.833328,
    "lat": 35.533329
  }
}, {
  "id": 1859492,
  "name": "Kikuchi",
  "country": "JP",
  "coord": {
    "lon": 130.816666,
    "lat": 32.98333
  }
}, {
  "id": 1896348,
  "name": "Hikari",
  "country": "JP",
  "coord": {
    "lon": 131.949997,
    "lat": 33.955002
  }
}, {
  "id": 1859908,
  "name": "Kashiwazaki",
  "country": "JP",
  "coord": {
    "lon": 138.550003,
    "lat": 37.366669
  }
}, {
  "id": 2129163,
  "name": "Mombetsu",
  "country": "JP",
  "coord": {
    "lon": 143.352493,
    "lat": 44.352501
  }
}, {
  "id": 1850523,
  "name": "Tateyama",
  "country": "JP",
  "coord": {
    "lon": 139.866669,
    "lat": 34.98333
  }
}, {
  "id": 1848706,
  "name": "Yamae",
  "country": "JP",
  "coord": {
    "lon": 130.566666,
    "lat": 33.466671
  }
}, {
  "id": 1849977,
  "name": "Toriimatsu",
  "country": "JP",
  "coord": {
    "lon": 136.966675,
    "lat": 35.23333
  }
}, {
  "id": 2111127,
  "name": "Shibayama",
  "country": "JP",
  "coord": {
    "lon": 140.433334,
    "lat": 35.683331
  }
}, {
  "id": 1852788,
  "name": "Sekigahara",
  "country": "JP",
  "coord": {
    "lon": 136.466675,
    "lat": 35.366669
  }
}, {
  "id": 1858333,
  "name": "Kuradani",
  "country": "JP",
  "coord": {
    "lon": 135.333328,
    "lat": 35.450001
  }
}, {
  "id": 1857922,
  "name": "Kyōguchi",
  "country": "JP",
  "coord": {
    "lon": 135.333328,
    "lat": 35.450001
  }
}, {
  "id": 1864180,
  "name": "Enzan",
  "country": "JP",
  "coord": {
    "lon": 138.733337,
    "lat": 35.700001
  }
}, {
  "id": 1849713,
  "name": "Tsukaguchi",
  "country": "JP",
  "coord": {
    "lon": 135.416672,
    "lat": 34.75
  }
}, {
  "id": 2110774,
  "name": "Togane",
  "country": "JP",
  "coord": {
    "lon": 140.366669,
    "lat": 35.549999
  }
}, {
  "id": 1863173,
  "name": "Hanyu",
  "country": "JP",
  "coord": {
    "lon": 139.533325,
    "lat": 36.166672
  }
}, {
  "id": 1850708,
  "name": "Tanabe",
  "country": "JP",
  "coord": {
    "lon": 135.366669,
    "lat": 33.73333
  }
}, {
  "id": 1863276,
  "name": "Hamanose",
  "country": "JP",
  "coord": {
    "lon": 135.149994,
    "lat": 33.883331
  }
}, {
  "id": 1854444,
  "name": "Ojiya",
  "country": "JP",
  "coord": {
    "lon": 138.800003,
    "lat": 37.299999
  }
}, {
  "id": 1861207,
  "name": "Iwakura",
  "country": "JP",
  "coord": {
    "lon": 136.866669,
    "lat": 35.283329
  }
}, {
  "id": 1857089,
  "name": "Minatomachi",
  "country": "JP",
  "coord": {
    "lon": 130.449997,
    "lat": 33.033329
  }
}, {
  "id": 1857343,
  "name": "Mifune",
  "country": "JP",
  "coord": {
    "lon": 130.800003,
    "lat": 32.716671
  }
}, {
  "id": 1853662,
  "name": "Otake",
  "country": "JP",
  "coord": {
    "lon": 132.216675,
    "lat": 34.200001
  }
}, {
  "id": 1859716,
  "name": "Kawai",
  "country": "JP",
  "coord": {
    "lon": 135.850006,
    "lat": 34.23333
  }
}, {
  "id": 2128333,
  "name": "Samani",
  "country": "JP",
  "coord": {
    "lon": 142.919174,
    "lat": 42.121941
  }
}, {
  "id": 2129447,
  "name": "Koshimizu",
  "country": "JP",
  "coord": {
    "lon": 144.459717,
    "lat": 43.853329
  }
}, {
  "id": 2112370,
  "name": "Kanegasaki",
  "country": "JP",
  "coord": {
    "lon": 141.116669,
    "lat": 39.200001
  }
}, {
  "id": 1855987,
  "name": "Nakagawa",
  "country": "JP",
  "coord": {
    "lon": 137.033325,
    "lat": 35.066669
  }
}, {
  "id": 2110506,
  "name": "Yokote",
  "country": "JP",
  "coord": {
    "lon": 140.566666,
    "lat": 39.299999
  }
}, {
  "id": 2128983,
  "name": "Nayoro",
  "country": "JP",
  "coord": {
    "lon": 142.457779,
    "lat": 44.350559
  }
}, {
  "id": 1856434,
  "name": "Murakami",
  "country": "JP",
  "coord": {
    "lon": 139.483337,
    "lat": 38.23333
  }
}, {
  "id": 1847996,
  "name": "Zaōmachi",
  "country": "JP",
  "coord": {
    "lon": 138.850006,
    "lat": 37.450001
  }
}, {
  "id": 1860635,
  "name": "Kameoka",
  "country": "JP",
  "coord": {
    "lon": 135.583328,
    "lat": 35
  }
}, {
  "id": 1850762,
  "name": "Tamagawa",
  "country": "JP",
  "coord": {
    "lon": 139.666672,
    "lat": 38.033329
  }
}, {
  "id": 1858492,
  "name": "Kudoyama",
  "country": "JP",
  "coord": {
    "lon": 135.566666,
    "lat": 34.283329
  }
}, {
  "id": 7302983,
  "name": "芦屋",
  "country": "JP",
  "coord": {
    "lon": 135.30719,
    "lat": 34.733921
  }
}, {
  "id": 1861202,
  "name": "Iwami",
  "country": "JP",
  "coord": {
    "lon": 134.533325,
    "lat": 34.783329
  }
}, {
  "id": 1853338,
  "name": "Sabae",
  "country": "JP",
  "coord": {
    "lon": 136.184982,
    "lat": 35.946468
  }
}, {
  "id": 1851079,
  "name": "Takamori",
  "country": "JP",
  "coord": {
    "lon": 131.116669,
    "lat": 32.816669
  }
}, {
  "id": 1861853,
  "name": "Iijima",
  "country": "JP",
  "coord": {
    "lon": 137.883331,
    "lat": 35.299999
  }
}, {
  "id": 1862998,
  "name": "Hayakawa",
  "country": "JP",
  "coord": {
    "lon": 138.350006,
    "lat": 35.450001
  }
}, {
  "id": 1855585,
  "name": "Narusawa",
  "country": "JP",
  "coord": {
    "lon": 138.733337,
    "lat": 35.75
  }
}, {
  "id": 1854691,
  "name": "Ogano",
  "country": "JP",
  "coord": {
    "lon": 139,
    "lat": 36.01667
  }
}, {
  "id": 2112455,
  "name": "Kakuda",
  "country": "JP",
  "coord": {
    "lon": 140.783325,
    "lat": 37.966671
  }
}, {
  "id": 1849237,
  "name": "Uozu",
  "country": "JP",
  "coord": {
    "lon": 137.399994,
    "lat": 36.799999
  }
}, {
  "id": 1861838,
  "name": "Iiyama",
  "country": "JP",
  "coord": {
    "lon": 138.366669,
    "lat": 36.849998
  }
}, {
  "id": 1863917,
  "name": "Fukuyama",
  "country": "JP",
  "coord": {
    "lon": 133.366669,
    "lat": 34.48333
  }
}, {
  "id": 1850892,
  "name": "Takayama",
  "country": "JP",
  "coord": {
    "lon": 137.25,
    "lat": 36.133331
  }
}, {
  "id": 1849845,
  "name": "Toyokawa",
  "country": "JP",
  "coord": {
    "lon": 137.399994,
    "lat": 34.816669
  }
}, {
  "id": 1853237,
  "name": "Saiki",
  "country": "JP",
  "coord": {
    "lon": 131.899994,
    "lat": 32.950001
  }
}, {
  "id": 2113698,
  "name": "Kahoku",
  "country": "JP",
  "coord": {
    "lon": 141.321671,
    "lat": 38.51667
  }
}, {
  "id": 1865485,
  "name": "Akashichō",
  "country": "JP",
  "coord": {
    "lon": 139.783325,
    "lat": 35.666672
  }
}, {
  "id": 1848040,
  "name": "Yūrakuchō",
  "country": "JP",
  "coord": {
    "lon": 139.766663,
    "lat": 35.666672
  }
}, {
  "id": 6415253,
  "name": "Kawasaki",
  "country": "JP",
  "coord": {
    "lon": 136.064438,
    "lat": 35.65694
  }
}, {
  "id": 2112062,
  "name": "Kurosawajiri",
  "country": "JP",
  "coord": {
    "lon": 141.116669,
    "lat": 39.283329
  }
}, {
  "id": 1855623,
  "name": "Nanukaichi",
  "country": "JP",
  "coord": {
    "lon": 133.466675,
    "lat": 34.599998
  }
}, {
  "id": 2130705,
  "name": "Akabira",
  "country": "JP",
  "coord": {
    "lon": 142.053055,
    "lat": 43.551392
  }
}, {
  "id": 1853412,
  "name": "Renjakuchō",
  "country": "JP",
  "coord": {
    "lon": 139.066666,
    "lat": 36.383331
  }
}, {
  "id": 1860039,
  "name": "Kariwa",
  "country": "JP",
  "coord": {
    "lon": 138.61879,
    "lat": 37.429749
  }
}, {
  "id": 1863475,
  "name": "Habu",
  "country": "JP",
  "coord": {
    "lon": 130.699997,
    "lat": 33.816669
  }
}, {
  "id": 1851713,
  "name": "Shobara",
  "country": "JP",
  "coord": {
    "lon": 133.016663,
    "lat": 34.849998
  }
}, {
  "id": 1856938,
  "name": "Mitake",
  "country": "JP",
  "coord": {
    "lon": 137.133331,
    "lat": 35.416672
  }
}, {
  "id": 1858067,
  "name": "Kusatsu",
  "country": "JP",
  "coord": {
    "lon": 135.966675,
    "lat": 35.01667
  }
}, {
  "id": 1864009,
  "name": "Fukuchiyama",
  "country": "JP",
  "coord": {
    "lon": 135.116669,
    "lat": 35.299999
  }
}, {
  "id": 1850589,
  "name": "Tarumizu",
  "country": "JP",
  "coord": {
    "lon": 130.699997,
    "lat": 31.48333
  }
}, {
  "id": 2128710,
  "name": "Oku-ikutahara",
  "country": "JP",
  "coord": {
    "lon": 143.516663,
    "lat": 43.849998
  }
}, {
  "id": 2130700,
  "name": "Akaigawa",
  "country": "JP",
  "coord": {
    "lon": 140.817215,
    "lat": 43.083328
  }
}, {
  "id": 1850217,
  "name": "Tokamachi",
  "country": "JP",
  "coord": {
    "lon": 138.766663,
    "lat": 37.133331
  }
}, {
  "id": 1855363,
  "name": "Nirasaki",
  "country": "JP",
  "coord": {
    "lon": 138.449997,
    "lat": 35.700001
  }
}, {
  "id": 2127586,
  "name": "Urakawa",
  "country": "JP",
  "coord": {
    "lon": 142.783615,
    "lat": 42.15556
  }
}, {
  "id": 2128498,
  "name": "Pippu",
  "country": "JP",
  "coord": {
    "lon": 142.473892,
    "lat": 43.869438
  }
}, {
  "id": 2128215,
  "name": "Shari",
  "country": "JP",
  "coord": {
    "lon": 144.659439,
    "lat": 43.90556
  }
}, {
  "id": 1852984,
  "name": "Sanjo",
  "country": "JP",
  "coord": {
    "lon": 138.949997,
    "lat": 37.616669
  }
}, {
  "id": 1854807,
  "name": "Obita",
  "country": "JP",
  "coord": {
    "lon": 129.883331,
    "lat": 32.816669
  }
}, {
  "id": 2127652,
  "name": "Toyokoro",
  "country": "JP",
  "coord": {
    "lon": 143.533325,
    "lat": 42.816669
  }
}, {
  "id": 2129387,
  "name": "Kuromatsunai",
  "country": "JP",
  "coord": {
    "lon": 140.306107,
    "lat": 42.66806
  }
}, {
  "id": 1849347,
  "name": "Uken",
  "country": "JP",
  "coord": {
    "lon": 129.233337,
    "lat": 28.299999
  }
}, {
  "id": 2130387,
  "name": "Engaru",
  "country": "JP",
  "coord": {
    "lon": 143.522217,
    "lat": 44.054169
  }
}, {
  "id": 1848764,
  "name": "Yakage",
  "country": "JP",
  "coord": {
    "lon": 133.583328,
    "lat": 34.616669
  }
}, {
  "id": 1863837,
  "name": "Furugen",
  "country": "JP",
  "coord": {
    "lon": 127.751106,
    "lat": 26.368589
  }
}, {
  "id": 1856488,
  "name": "Mugi",
  "country": "JP",
  "coord": {
    "lon": 134.416672,
    "lat": 33.666672
  }
}, {
  "id": 2130389,
  "name": "Embetsu",
  "country": "JP",
  "coord": {
    "lon": 141.788895,
    "lat": 44.707218
  }
}, {
  "id": 2128139,
  "name": "Shimokawa",
  "country": "JP",
  "coord": {
    "lon": 142.636383,
    "lat": 44.28944
  }
}, {
  "id": 1849073,
  "name": "Utazu",
  "country": "JP",
  "coord": {
    "lon": 133.816666,
    "lat": 34.299999
  }
}, {
  "id": 1863866,
  "name": "Funato",
  "country": "JP",
  "coord": {
    "lon": 135.316666,
    "lat": 34.25
  }
}, {
  "id": 1865312,
  "name": "Anamizu",
  "country": "JP",
  "coord": {
    "lon": 136.899994,
    "lat": 37.23333
  }
}, {
  "id": 1848528,
  "name": "Yanohama",
  "country": "JP",
  "coord": {
    "lon": 136.199997,
    "lat": 34.066669
  }
}, {
  "id": 1864894,
  "name": "Awara",
  "country": "JP",
  "coord": {
    "lon": 136.192368,
    "lat": 36.223091
  }
}, {
  "id": 1854026,
  "name": "Ono",
  "country": "JP",
  "coord": {
    "lon": 134.933334,
    "lat": 34.849998
  }
}, {
  "id": 2111559,
  "name": "Obanazawa",
  "country": "JP",
  "coord": {
    "lon": 140.401947,
    "lat": 38.603329
  }
}, {
  "id": 2111325,
  "name": "Otawara",
  "country": "JP",
  "coord": {
    "lon": 140.033325,
    "lat": 36.866669
  }
}, {
  "id": 1848705,
  "name": "Yamaga",
  "country": "JP",
  "coord": {
    "lon": 130.683334,
    "lat": 33.01667
  }
}, {
  "id": 1926006,
  "name": "Iyo",
  "country": "JP",
  "coord": {
    "lon": 132.701385,
    "lat": 33.751389
  }
}, {
  "id": 1926055,
  "name": "Ozu",
  "country": "JP",
  "coord": {
    "lon": 132.550003,
    "lat": 33.5
  }
}, {
  "id": 2130106,
  "name": "Higashikawa",
  "country": "JP",
  "coord": {
    "lon": 141.783325,
    "lat": 44.23333
  }
}, {
  "id": 1862752,
  "name": "Higashi-ōsaka",
  "country": "JP",
  "coord": {
    "lon": 135.583328,
    "lat": 34.666672
  }
}, {
  "id": 2127545,
  "name": "Utashinai",
  "country": "JP",
  "coord": {
    "lon": 142.050003,
    "lat": 43.51667
  }
}, {
  "id": 2128159,
  "name": "Shimizu",
  "country": "JP",
  "coord": {
    "lon": 142.88472,
    "lat": 43.006111
  }
}, {
  "id": 2127731,
  "name": "Tomamae",
  "country": "JP",
  "coord": {
    "lon": 141.654434,
    "lat": 44.305279
  }
}, {
  "id": 1848935,
  "name": "Wake",
  "country": "JP",
  "coord": {
    "lon": 134.133331,
    "lat": 34.799999
  }
}, {
  "id": 1894619,
  "name": "Urazoe",
  "country": "JP",
  "coord": {
    "lon": 127.70639,
    "lat": 26.25444
  }
}, {
  "id": 2129696,
  "name": "Kamoenai",
  "country": "JP",
  "coord": {
    "lon": 140.434433,
    "lat": 43.138329
  }
}, {
  "id": 1861305,
  "name": "Itano",
  "country": "JP",
  "coord": {
    "lon": 133.783325,
    "lat": 34.01667
  }
}, {
  "id": 1276533,
  "name": "Belgaum",
  "country": "IN",
  "coord": {
    "lon": 74.5,
    "lat": 15.86667
  }
}, {
  "id": 1269920,
  "name": "Hubli",
  "country": "IN",
  "coord": {
    "lon": 75.166672,
    "lat": 15.35
  }
}, {
  "id": 1278647,
  "name": "Union Territory of Andaman and Nicobar Islands",
  "country": "IN",
  "coord": {
    "lon": 92.675171,
    "lat": 11.70065
  }
}, {
  "id": 1259385,
  "name": "Port Blair",
  "country": "IN",
  "coord": {
    "lon": 92.75,
    "lat": 11.66667
  }
}, {
  "id": 1254710,
  "name": "Tezpur",
  "country": "IN",
  "coord": {
    "lon": 92.800003,
    "lat": 26.633329
  }
}, {
  "id": 7533612,
  "name": "Kowloon City",
  "country": "HK",
  "coord": {
    "lon": 114.191208,
    "lat": 22.328659
  }
}, {
  "id": 1619638,
  "name": "Ban Fai Kaeo",
  "country": "TH",
  "coord": {
    "lon": 100.800003,
    "lat": 18.76667
  }
}, {
  "id": 6455273,
  "name": "Amiens",
  "country": "FR",
  "coord": {
    "lon": 2.3,
    "lat": 49.900002
  }
}, {
  "id": 6441375,
  "name": "Strasbourg",
  "country": "FR",
  "coord": {
    "lon": 7.75,
    "lat": 48.583328
  }
}, {
  "id": 6451976,
  "name": "Nanterre",
  "country": "FR",
  "coord": {
    "lon": 2.20714,
    "lat": 48.891842
  }
}, {
  "id": 2989247,
  "name": "Département de l'Orne",
  "country": "FR",
  "coord": {
    "lon": 0.08333,
    "lat": 48.666672
  }
}, {
  "id": 6452018,
  "name": "Créteil",
  "country": "FR",
  "coord": {
    "lon": 2.46667,
    "lat": 48.783329
  }
}, {
  "id": 6455341,
  "name": "Saint-Denis",
  "country": "FR",
  "coord": {
    "lon": 2.36667,
    "lat": 48.933331
  }
}, {
  "id": 6440000,
  "name": "Clermont-Ferrand",
  "country": "FR",
  "coord": {
    "lon": 3.08333,
    "lat": 45.783329
  }
}, {
  "id": 3024635,
  "name": "Clermont-Ferrand",
  "country": "FR",
  "coord": {
    "lon": 3.08628,
    "lat": 45.779659
  }
}, {
  "id": 2973384,
  "name": "Arrondissement de Tarbes",
  "country": "FR",
  "coord": {
    "lon": 0.16667,
    "lat": 43.25
  }
}, {
  "id": 6454430,
  "name": "Clermont",
  "country": "FR",
  "coord": {
    "lon": 2.4,
    "lat": 49.383331
  }
}, {
  "id": 6440996,
  "name": "Perpignan",
  "country": "FR",
  "coord": {
    "lon": 2.89541,
    "lat": 42.697639
  }
}, {
  "id": 3029094,
  "name": "Département du Calvados",
  "country": "FR",
  "coord": {
    "lon": -0.5,
    "lat": 49.166672
  }
}, {
  "id": 6456407,
  "name": "Le Mans",
  "country": "FR",
  "coord": {
    "lon": 0.2,
    "lat": 48
  }
}, {
  "id": 3003603,
  "name": "Le Mans",
  "country": "FR",
  "coord": {
    "lon": 0.2,
    "lat": 48
  }
}, {
  "id": 6454251,
  "name": "Reims",
  "country": "FR",
  "coord": {
    "lon": 4.0292,
    "lat": 49.265099
  }
}, {
  "id": 6452436,
  "name": "Argentan",
  "country": "FR",
  "coord": {
    "lon": -0.01667,
    "lat": 48.75
  }
}, {
  "id": 2983360,
  "name": "Arrondissement de Roanne",
  "country": "FR",
  "coord": {
    "lon": 4,
    "lat": 46
  }
}, {
  "id": 6613992,
  "name": "Roanne",
  "country": "FR",
  "coord": {
    "lon": 4.06667,
    "lat": 46.033329
  }
}, {
  "id": 6453924,
  "name": "Landerneau",
  "country": "FR",
  "coord": {
    "lon": -4.25,
    "lat": 48.450001
  }
}, {
  "id": 3034005,
  "name": "Arrondissement de Beauvais",
  "country": "FR",
  "coord": {
    "lon": 2,
    "lat": 49.416672
  }
}, {
  "id": 2968819,
  "name": "Ville-dAvray",
  "country": "FR",
  "coord": {
    "lon": 2.19311,
    "lat": 48.823582
  }
}, {
  "id": 6443660,
  "name": "Fontainebleau",
  "country": "FR",
  "coord": {
    "lon": 2.7,
    "lat": 48.400002
  }
}, {
  "id": 3027453,
  "name": "Chamalieres",
  "country": "FR",
  "coord": {
    "lon": 3.0631,
    "lat": 45.775589
  }
}, {
  "id": 6453805,
  "name": "Saint-Brieuc",
  "country": "FR",
  "coord": {
    "lon": -2.78333,
    "lat": 48.51667
  }
}, {
  "id": 2990371,
  "name": "Département de la Nièvre",
  "country": "FR",
  "coord": {
    "lon": 3.5,
    "lat": 47.083328
  }
}, {
  "id": 3006414,
  "name": "La Seyne-sur-Mer",
  "country": "FR",
  "coord": {
    "lon": 5.88472,
    "lat": 43.098179
  }
}, {
  "id": 6454207,
  "name": "Coutances",
  "country": "FR",
  "coord": {
    "lon": -1.43333,
    "lat": 49.049999
  }
}, {
  "id": 3022826,
  "name": "Coutances",
  "country": "FR",
  "coord": {
    "lon": -1.43333,
    "lat": 49.049999
  }
}, {
  "id": 2993358,
  "name": "Mondeville",
  "country": "FR",
  "coord": {
    "lon": -0.32238,
    "lat": 49.174969
  }
}, {
  "id": 6453923,
  "name": "Yèvres",
  "country": "FR",
  "coord": {
    "lon": 1.1906,
    "lat": 48.2103
  }
}, {
  "id": 6454554,
  "name": "Saverne",
  "country": "FR",
  "coord": {
    "lon": 7.36127,
    "lat": 48.74176
  }
}, {
  "id": 6454301,
  "name": "Lunéville",
  "country": "FR",
  "coord": {
    "lon": 6.5024,
    "lat": 48.589199
  }
}, {
  "id": 2985020,
  "name": "Arrondissement du Puy",
  "country": "FR",
  "coord": {
    "lon": 3.83333,
    "lat": 45.083328
  }
}, {
  "id": 6449052,
  "name": "Coubon",
  "country": "FR",
  "coord": {
    "lon": 3.91754,
    "lat": 44.997372
  }
}, {
  "id": 3023379,
  "name": "Coubon",
  "country": "FR",
  "coord": {
    "lon": 3.91783,
    "lat": 44.997311
  }
}, {
  "id": 3026612,
  "name": "Arrondissement de Charleville-Mézières",
  "country": "FR",
  "coord": {
    "lon": 4.5,
    "lat": 49.833328
  }
}, {
  "id": 3031676,
  "name": "Arrondissement de Bonneville",
  "country": "FR",
  "coord": {
    "lon": 6.66667,
    "lat": 46
  }
}, {
  "id": 6435667,
  "name": "Sotteville",
  "country": "FR",
  "coord": {
    "lon": -1.75,
    "lat": 49.533329
  }
}, {
  "id": 2983423,
  "name": "Riva-Bella",
  "country": "FR",
  "coord": {
    "lon": -0.26054,
    "lat": 49.287708
  }
}, {
  "id": 2979071,
  "name": "Arrondissement de Saint-Julien-en-Genevois",
  "country": "FR",
  "coord": {
    "lon": 6.08333,
    "lat": 46.083328
  }
}, {
  "id": 6433846,
  "name": "Labenne",
  "country": "FR",
  "coord": {
    "lon": -1.41667,
    "lat": 43.599998
  }
}, {
  "id": 3029799,
  "name": "Bruges",
  "country": "FR",
  "coord": {
    "lon": -0.61219,
    "lat": 44.87981
  }
}, {
  "id": 6432490,
  "name": "Tresses",
  "country": "FR",
  "coord": {
    "lon": -0.46667,
    "lat": 44.849998
  }
}, {
  "id": 3010626,
  "name": "Lacanau",
  "country": "FR",
  "coord": {
    "lon": -1.0762,
    "lat": 44.977791
  }
}, {
  "id": 3020034,
  "name": "Arrondissement d'Épinal",
  "country": "FR",
  "coord": {
    "lon": 6.5,
    "lat": 48.166672
  }
}, {
  "id": 3016474,
  "name": "Gavray",
  "country": "FR",
  "coord": {
    "lon": -1.3506,
    "lat": 48.911079
  }
}, {
  "id": 3034873,
  "name": "Baron-sur-Odon",
  "country": "FR",
  "coord": {
    "lon": -0.47795,
    "lat": 49.13221
  }
}, {
  "id": 2990139,
  "name": "Arrondissement de Nontron",
  "country": "FR",
  "coord": {
    "lon": 0.83333,
    "lat": 45.5
  }
}, {
  "id": 3032668,
  "name": "Biguglia",
  "country": "FR",
  "coord": {
    "lon": 9.43324,
    "lat": 42.625889
  }
}, {
  "id": 2982692,
  "name": "Rots",
  "country": "FR",
  "coord": {
    "lon": -0.47319,
    "lat": 49.212349
  }
}, {
  "id": 3038333,
  "name": "Arrondissement d'Ajaccio",
  "country": "FR",
  "coord": {
    "lon": 8.91667,
    "lat": 42
  }
}, {
  "id": 3022569,
  "name": "Crepy-en-Valois",
  "country": "FR",
  "coord": {
    "lon": 2.88807,
    "lat": 49.233589
  }
}, {
  "id": 6432503,
  "name": "Virelade",
  "country": "FR",
  "coord": {
    "lon": -0.3808,
    "lat": 44.6661
  }
}, {
  "id": 1506418,
  "name": "Gonba",
  "country": "RU",
  "coord": {
    "lon": 83.574699,
    "lat": 53.417198
  }
}, {
  "id": 1506676,
  "name": "Gari",
  "country": "RU",
  "coord": {
    "lon": 62.34967,
    "lat": 59.43074
  }
}, {
  "id": 1506938,
  "name": "Erzin",
  "country": "RU",
  "coord": {
    "lon": 95.1623,
    "lat": 50.261002
  }
}, {
  "id": 1507172,
  "name": "Dubinino",
  "country": "RU",
  "coord": {
    "lon": 89.09111,
    "lat": 55.619171
  }
}, {
  "id": 1507638,
  "name": "Chunoyar",
  "country": "RU",
  "coord": {
    "lon": 97.321671,
    "lat": 57.446671
  }
}, {
  "id": 1507745,
  "name": "Choya",
  "country": "RU",
  "coord": {
    "lon": 86.5467,
    "lat": 52.010799
  }
}, {
  "id": 1507801,
  "name": "Chistogorskiy",
  "country": "RU",
  "coord": {
    "lon": 87.3843,
    "lat": 53.983501
  }
}, {
  "id": 1507926,
  "name": "Chesma",
  "country": "RU",
  "coord": {
    "lon": 60.653332,
    "lat": 53.811111
  }
}, {
  "id": 1508636,
  "name": "Burla",
  "country": "RU",
  "coord": {
    "lon": 78.330101,
    "lat": 53.336201
  }
}, {
  "id": 1510131,
  "name": "Beya",
  "country": "RU",
  "coord": {
    "lon": 90.913887,
    "lat": 53.053329
  }
}, {
  "id": 1510370,
  "name": "Belyy Yar",
  "country": "RU",
  "coord": {
    "lon": 85.042503,
    "lat": 58.444721
  }
}, {
  "id": 1510817,
  "name": "Barzas",
  "country": "RU",
  "coord": {
    "lon": 86.316673,
    "lat": 55.716671
  }
}, {
  "id": 1120863,
  "name": "Zarghun Shahr",
  "country": "AF",
  "coord": {
    "lon": 68.445732,
    "lat": 32.84734
  }
}, {
  "id": 1120879,
  "name": "Zarah Sharan",
  "country": "AF",
  "coord": {
    "lon": 68.791672,
    "lat": 33.146671
  }
}, {
  "id": 1121418,
  "name": "Yahya Khel",
  "country": "AF",
  "coord": {
    "lon": 68.646217,
    "lat": 32.93742
  }
}, {
  "id": 1122068,
  "name": "Tormay",
  "country": "AF",
  "coord": {
    "lon": 68.401672,
    "lat": 33.687222
  }
}, {
  "id": 1130131,
  "name": "Qalat",
  "country": "AF",
  "coord": {
    "lon": 66.908333,
    "lat": 32.105751
  }
}, {
  "id": 1138636,
  "name": "Kalakan",
  "country": "AF",
  "coord": {
    "lon": 69.150009,
    "lat": 34.78371
  }
}, {
  "id": 1143782,
  "name": "Dwah Manday",
  "country": "AF",
  "coord": {
    "lon": 69.584999,
    "lat": 33.28167
  }
}, {
  "id": 1144040,
  "name": "Darqad",
  "country": "AF",
  "coord": {
    "lon": 69.452942,
    "lat": 37.38414
  }
}, {
  "id": 1146979,
  "name": "Barg-e Matal",
  "country": "AF",
  "coord": {
    "lon": 71.343391,
    "lat": 35.672829
  }
}, {
  "id": 1147511,
  "name": "Bagrami",
  "country": "AF",
  "coord": {
    "lon": 69.274269,
    "lat": 34.493759
  }
}, {
  "id": 1148114,
  "name": "Alaqahdari Atghar",
  "country": "AF",
  "coord": {
    "lon": 67.357399,
    "lat": 31.73506
  }
}, {
  "id": 1148709,
  "name": "Anar Darah",
  "country": "AF",
  "coord": {
    "lon": 61.653969,
    "lat": 32.758701
  }
}, {
  "id": 1148939,
  "name": "Ali Khel",
  "country": "AF",
  "coord": {
    "lon": 69.719078,
    "lat": 33.942532
  }
}, {
  "id": 1429499,
  "name": "Shayrwani-ye Bala",
  "country": "AF",
  "coord": {
    "lon": 69.599342,
    "lat": 35.014679
  }
}, {
  "id": 1434016,
  "name": "Alaqahdari Sarobi",
  "country": "AF",
  "coord": {
    "lon": 69.086601,
    "lat": 32.793308
  }
}, {
  "id": 1435007,
  "name": "Zerok-Alakadari",
  "country": "AF",
  "coord": {
    "lon": 69.312782,
    "lat": 33.158058
  }
}, {
  "id": 1437517,
  "name": "Khayr Kot",
  "country": "AF",
  "coord": {
    "lon": 68.449722,
    "lat": 32.85355
  }
}, {
  "id": 1455430,
  "name": "Dahan-e Jarf",
  "country": "AF",
  "coord": {
    "lon": 68.464172,
    "lat": 34.927219
  }
}, {
  "id": 1456960,
  "name": "Maidan Shahr",
  "country": "AF",
  "coord": {
    "lon": 68.86618,
    "lat": 34.395611
  }
}, {
  "id": 1464922,
  "name": "Pul-e Hisar",
  "country": "AF",
  "coord": {
    "lon": 69.471336,
    "lat": 35.617939
  }
}, {
  "id": 1468514,
  "name": "Pas Pul",
  "country": "AF",
  "coord": {
    "lon": 70.61586,
    "lat": 37.474072
  }
}, {
  "id": 3576361,
  "name": "Bolands",
  "country": "AG",
  "coord": {
    "lon": -61.87466,
    "lat": 17.065651
  }
}, {
  "id": 363320,
  "name": "Konispol",
  "country": "AL",
  "coord": {
    "lon": 20.181391,
    "lat": 39.65889
  }
}, {
  "id": 782632,
  "name": "Kurbnesh",
  "country": "AL",
  "coord": {
    "lon": 20.083611,
    "lat": 41.77972
  }
}, {
  "id": 783214,
  "name": "Fushe-Arrez",
  "country": "AL",
  "coord": {
    "lon": 20.01667,
    "lat": 42.062222
  }
}, {
  "id": 3184197,
  "name": "Selenice",
  "country": "AL",
  "coord": {
    "lon": 19.63583,
    "lat": 40.53056
  }
}, {
  "id": 3184388,
  "name": "Puke",
  "country": "AL",
  "coord": {
    "lon": 19.899719,
    "lat": 42.044441
  }
}, {
  "id": 3184575,
  "name": "Orikum",
  "country": "AL",
  "coord": {
    "lon": 19.47139,
    "lat": 40.325279
  }
}, {
  "id": 3184702,
  "name": "Milot",
  "country": "AL",
  "coord": {
    "lon": 19.715561,
    "lat": 41.683891
  }
}, {
  "id": 3188434,
  "name": "Uzice",
  "country": "RS",
  "coord": {
    "lon": 19.84878,
    "lat": 43.858608
  }
}, {
  "id": 3026227,
  "name": "Chateauneuf-les-Martigues",
  "country": "FR",
  "coord": {
    "lon": 5.16667,
    "lat": 43.383331
  }
}, {
  "id": 6448871,
  "name": "Castandet",
  "country": "FR",
  "coord": {
    "lon": -0.35,
    "lat": 43.799999
  }
}, {
  "id": 3172394,
  "name": "Napoli",
  "country": "IT",
  "coord": {
    "lon": 14.25,
    "lat": 40.833328
  }
}, {
  "id": 6536522,
  "name": "Sesto San Giovanni",
  "country": "IT",
  "coord": {
    "lon": 9.24175,
    "lat": 45.539371
  }
}, {
  "id": 3167961,
  "name": "San Michele di Pagana",
  "country": "IT",
  "coord": {
    "lon": 9.23564,
    "lat": 44.352982
  }
}, {
  "id": 3182748,
  "name": "Province of Ascoli Piceno",
  "country": "IT",
  "coord": {
    "lon": 13.55306,
    "lat": 42.88443
  }
}, {
  "id": 6542154,
  "name": "Taranto",
  "country": "IT",
  "coord": {
    "lon": 17.240101,
    "lat": 40.417019
  }
}, {
  "id": 3172656,
  "name": "Montoggio",
  "country": "IT",
  "coord": {
    "lon": 9.04816,
    "lat": 44.517448
  }
}, {
  "id": 3167431,
  "name": "Sant’Anna",
  "country": "IT",
  "coord": {
    "lon": 10.48333,
    "lat": 43.833328
  }
}, {
  "id": 3168673,
  "name": "Salerno",
  "country": "IT",
  "coord": {
    "lon": 14.76599,
    "lat": 40.677971
  }
}, {
  "id": 6536153,
  "name": "Seriate",
  "country": "IT",
  "coord": {
    "lon": 9.72286,
    "lat": 45.68338
  }
}, {
  "id": 6540063,
  "name": "Vittoria",
  "country": "IT",
  "coord": {
    "lon": 14.53318,
    "lat": 36.953739
  }
}, {
  "id": 6539606,
  "name": "Asti",
  "country": "IT",
  "coord": {
    "lon": 8.20684,
    "lat": 44.897949
  }
}, {
  "id": 6541469,
  "name": "Trento",
  "country": "IT",
  "coord": {
    "lon": 11.12074,
    "lat": 46.070431
  }
}, {
  "id": 6540107,
  "name": "Viterbo",
  "country": "IT",
  "coord": {
    "lon": 12.10856,
    "lat": 42.417831
  }
}, {
  "id": 3173845,
  "name": "Martignacco",
  "country": "IT",
  "coord": {
    "lon": 13.13778,
    "lat": 46.09639
  }
}, {
  "id": 6540390,
  "name": "Castelfranco Veneto",
  "country": "IT",
  "coord": {
    "lon": 11.926,
    "lat": 45.676102
  }
}, {
  "id": 3170622,
  "name": "Pisticci",
  "country": "IT",
  "coord": {
    "lon": 16.556789,
    "lat": 40.390621
  }
}, {
  "id": 6538566,
  "name": "Sesto Fiorentino",
  "country": "IT",
  "coord": {
    "lon": 11.19522,
    "lat": 43.834549
  }
}, {
  "id": 3174658,
  "name": "Provincia di Livorno",
  "country": "IT",
  "coord": {
    "lon": 10.58333,
    "lat": 43.23333
  }
}, {
  "id": 6541852,
  "name": "Rovigo",
  "country": "IT",
  "coord": {
    "lon": 11.79301,
    "lat": 45.079979
  }
}, {
  "id": 3165197,
  "name": "Trezzo sullAdda",
  "country": "IT",
  "coord": {
    "lon": 9.51995,
    "lat": 45.602982
  }
}, {
  "id": 3172980,
  "name": "Montecchio Emilia",
  "country": "IT",
  "coord": {
    "lon": 10.44709,
    "lat": 44.701359
  }
}, {
  "id": 2525755,
  "name": "Alcamo",
  "country": "IT",
  "coord": {
    "lon": 12.95654,
    "lat": 37.998348
  }
}, {
  "id": 6536781,
  "name": "Senigallia",
  "country": "IT",
  "coord": {
    "lon": 13.21667,
    "lat": 43.709259
  }
}, {
  "id": 6538612,
  "name": "Assisi",
  "country": "IT",
  "coord": {
    "lon": 12.61646,
    "lat": 43.069141
  }
}, {
  "id": 2524393,
  "name": "Licata",
  "country": "IT",
  "coord": {
    "lon": 13.94607,
    "lat": 37.10714
  }
}, {
  "id": 6541465,
  "name": "Vicenza",
  "country": "IT",
  "coord": {
    "lon": 11.5409,
    "lat": 45.557289
  }
}, {
  "id": 6542122,
  "name": "Pisa",
  "country": "IT",
  "coord": {
    "lon": 10.4137,
    "lat": 43.710838
  }
}, {
  "id": 3174096,
  "name": "Manduria",
  "country": "IT",
  "coord": {
    "lon": 17.633511,
    "lat": 40.401821
  }
}, {
  "id": 2523045,
  "name": "Soverato Marina",
  "country": "IT",
  "coord": {
    "lon": 16.54991,
    "lat": 38.684978
  }
}, {
  "id": 6458615,
  "name": "Provincia di Crotone",
  "country": "IT",
  "coord": {
    "lon": 17.081341,
    "lat": 39.120071
  }
}, {
  "id": 6541463,
  "name": "Crotone",
  "country": "IT",
  "coord": {
    "lon": 17.117809,
    "lat": 39.085098
  }
}, {
  "id": 2524881,
  "name": "Crotone",
  "country": "IT",
  "coord": {
    "lon": 17.117809,
    "lat": 39.085098
  }
}, {
  "id": 6539766,
  "name": "Ferentino",
  "country": "IT",
  "coord": {
    "lon": 13.2564,
    "lat": 41.69532
  }
}, {
  "id": 3177102,
  "name": "Ferentino",
  "country": "IT",
  "coord": {
    "lon": 13.2564,
    "lat": 41.69532
  }
}, {
  "id": 6542118,
  "name": "Chieti",
  "country": "IT",
  "coord": {
    "lon": 14.16773,
    "lat": 42.3503
  }
}, {
  "id": 3178796,
  "name": "Chieti",
  "country": "IT",
  "coord": {
    "lon": 14.13801,
    "lat": 42.360939
  }
}, {
  "id": 6541116,
  "name": "Spoleto",
  "country": "IT",
  "coord": {
    "lon": 12.73737,
    "lat": 42.744839
  }
}, {
  "id": 3166236,
  "name": "Spoleto",
  "country": "IT",
  "coord": {
    "lon": 12.73737,
    "lat": 42.744839
  }
}, {
  "id": 3175444,
  "name": "Provincia di Isernia",
  "country": "IT",
  "coord": {
    "lon": 14.25,
    "lat": 41.666672
  }
}, {
  "id": 6536505,
  "name": "Cologno Monzese",
  "country": "IT",
  "coord": {
    "lon": 9.27635,
    "lat": 45.535671
  }
}, {
  "id": 6539672,
  "name": "Sarzana",
  "country": "IT",
  "coord": {
    "lon": 9.95859,
    "lat": 44.11145
  }
}, {
  "id": 3167104,
  "name": "Sarzana",
  "country": "IT",
  "coord": {
    "lon": 9.95859,
    "lat": 44.11145
  }
}, {
  "id": 3181995,
  "name": "Bitonto",
  "country": "IT",
  "coord": {
    "lon": 16.689381,
    "lat": 41.110828
  }
}, {
  "id": 6538456,
  "name": "Mirandola",
  "country": "IT",
  "coord": {
    "lon": 11.0662,
    "lat": 44.886768
  }
}, {
  "id": 3180749,
  "name": "Caorle",
  "country": "IT",
  "coord": {
    "lon": 12.8758,
    "lat": 45.596561
  }
}, {
  "id": 6539859,
  "name": "Gioia Tauro",
  "country": "IT",
  "coord": {
    "lon": 15.899,
    "lat": 38.423969
  }
}, {
  "id": 6538674,
  "name": "Genzano di Roma",
  "country": "IT",
  "coord": {
    "lon": 12.69178,
    "lat": 41.701321
  }
}, {
  "id": 6540287,
  "name": "Fiumicino",
  "country": "IT",
  "coord": {
    "lon": 12.24747,
    "lat": 41.76281
  }
}, {
  "id": 2524237,
  "name": "Mascali",
  "country": "IT",
  "coord": {
    "lon": 15.19589,
    "lat": 37.75576
  }
}, {
  "id": 6539444,
  "name": "Domodossola",
  "country": "IT",
  "coord": {
    "lon": 8.28962,
    "lat": 46.11348
  }
}, {
  "id": 6540110,
  "name": "Matera",
  "country": "IT",
  "coord": {
    "lon": 16.60158,
    "lat": 40.668522
  }
}, {
  "id": 6538946,
  "name": "Putignano",
  "country": "IT",
  "coord": {
    "lon": 17.12129,
    "lat": 40.85183
  }
}, {
  "id": 6538943,
  "name": "Gravina in Puglia",
  "country": "IT",
  "coord": {
    "lon": 16.422779,
    "lat": 40.819721
  }
}, {
  "id": 6540781,
  "name": "Acri",
  "country": "IT",
  "coord": {
    "lon": 16.383789,
    "lat": 39.492901
  }
}, {
  "id": 3182966,
  "name": "San Michele",
  "country": "IT",
  "coord": {
    "lon": 11.26178,
    "lat": 46.45472
  }
}, {
  "id": 6540671,
  "name": "Alba",
  "country": "IT",
  "coord": {
    "lon": 8.02564,
    "lat": 44.69154
  }
}, {
  "id": 3179542,
  "name": "Castelnuovo",
  "country": "IT",
  "coord": {
    "lon": 13.53333,
    "lat": 43.400002
  }
}, {
  "id": 2524085,
  "name": "Monreale",
  "country": "IT",
  "coord": {
    "lon": 13.28854,
    "lat": 38.080051
  }
}, {
  "id": 6541098,
  "name": "Montevarchi",
  "country": "IT",
  "coord": {
    "lon": 11.56893,
    "lat": 43.527649
  }
}, {
  "id": 6541032,
  "name": "Imola",
  "country": "IT",
  "coord": {
    "lon": 11.71582,
    "lat": 44.352268
  }
}, {
  "id": 6536054,
  "name": "Casale Monferrato",
  "country": "IT",
  "coord": {
    "lon": 8.45714,
    "lat": 45.133362
  }
}, {
  "id": 6539037,
  "name": "Corigliano Calabro",
  "country": "IT",
  "coord": {
    "lon": 16.5177,
    "lat": 39.595001
  }
}, {
  "id": 2524929,
  "name": "Corigliano Calabro",
  "country": "IT",
  "coord": {
    "lon": 16.5177,
    "lat": 39.595001
  }
}, {
  "id": 3175385,
  "name": "Ivrea",
  "country": "IT",
  "coord": {
    "lon": 7.87617,
    "lat": 45.466869
  }
}, {
  "id": 6539211,
  "name": "Lentini",
  "country": "IT",
  "coord": {
    "lon": 14.99959,
    "lat": 37.28545
  }
}, {
  "id": 6536709,
  "name": "Sala Baganza",
  "country": "IT",
  "coord": {
    "lon": 10.23178,
    "lat": 44.720261
  }
}, {
  "id": 6541462,
  "name": "Rieti",
  "country": "IT",
  "coord": {
    "lon": 12.85918,
    "lat": 42.40723
  }
}, {
  "id": 3169412,
  "name": "Rieti",
  "country": "IT",
  "coord": {
    "lon": 12.85918,
    "lat": 42.40723
  }
}, {
  "id": 3182628,
  "name": "Avilla",
  "country": "IT",
  "coord": {
    "lon": 13.7,
    "lat": 42.650002
  }
}, {
  "id": 6537243,
  "name": "Avio",
  "country": "IT",
  "coord": {
    "lon": 10.93718,
    "lat": 45.733791
  }
}, {
  "id": 3182625,
  "name": "Avio",
  "country": "IT",
  "coord": {
    "lon": 10.93718,
    "lat": 45.733791
  }
}, {
  "id": 2523890,
  "name": "Pantelleria",
  "country": "IT",
  "coord": {
    "lon": 11.95,
    "lat": 36.833328
  }
}, {
  "id": 6538451,
  "name": "Castelvetro di Modena",
  "country": "IT",
  "coord": {
    "lon": 10.9464,
    "lat": 44.50576
  }
}, {
  "id": 2523557,
  "name": "Salemi",
  "country": "IT",
  "coord": {
    "lon": 12.80564,
    "lat": 37.823139
  }
}, {
  "id": 6535904,
  "name": "Lana - Lana",
  "country": "IT",
  "coord": {
    "lon": 11.15587,
    "lat": 46.612419
  }
}, {
  "id": 3175177,
  "name": "Lana",
  "country": "IT",
  "coord": {
    "lon": 11.15587,
    "lat": 46.612419
  }
}, {
  "id": 6540386,
  "name": "Thiene",
  "country": "IT",
  "coord": {
    "lon": 11.47959,
    "lat": 45.708801
  }
}, {
  "id": 2522718,
  "name": "Vita",
  "country": "IT",
  "coord": {
    "lon": 12.82504,
    "lat": 37.870541
  }
}, {
  "id": 6538323,
  "name": "Scorzè",
  "country": "IT",
  "coord": {
    "lon": 12.10991,
    "lat": 45.569
  }
}, {
  "id": 3182918,
  "name": "Arceto",
  "country": "IT",
  "coord": {
    "lon": 10.71667,
    "lat": 44.616669
  }
}, {
  "id": 6541168,
  "name": "Torre Annunziata",
  "country": "IT",
  "coord": {
    "lon": 14.46464,
    "lat": 40.74971
  }
}, {
  "id": 3172086,
  "name": "Olbia Marittima",
  "country": "IT",
  "coord": {
    "lon": 9.50528,
    "lat": 40.922401
  }
}, {
  "id": 6536871,
  "name": "Deruta",
  "country": "IT",
  "coord": {
    "lon": 12.41506,
    "lat": 42.980438
  }
}, {
  "id": 3165612,
  "name": "Todi",
  "country": "IT",
  "coord": {
    "lon": 12.40456,
    "lat": 42.779942
  }
}, {
  "id": 3178131,
  "name": "Corato",
  "country": "IT",
  "coord": {
    "lon": 16.41387,
    "lat": 41.145531
  }
}, {
  "id": 6536698,
  "name": "Cormons",
  "country": "IT",
  "coord": {
    "lon": 13.46534,
    "lat": 45.956921
  }
}, {
  "id": 6540134,
  "name": "Savigliano",
  "country": "IT",
  "coord": {
    "lon": 7.65593,
    "lat": 44.644039
  }
}, {
  "id": 3180563,
  "name": "Carbonera",
  "country": "IT",
  "coord": {
    "lon": 12.28833,
    "lat": 45.680561
  }
}, {
  "id": 6541812,
  "name": "Marano di Valpolicella",
  "country": "IT",
  "coord": {
    "lon": 10.91518,
    "lat": 45.55579
  }
}, {
  "id": 6536506,
  "name": "Cormano",
  "country": "IT",
  "coord": {
    "lon": 9.17094,
    "lat": 45.53957
  }
}, {
  "id": 3165119,
  "name": "Tufo",
  "country": "IT",
  "coord": {
    "lon": 13.76667,
    "lat": 41.26667
  }
}, {
  "id": 3180916,
  "name": "Camposanto",
  "country": "IT",
  "coord": {
    "lon": 11.1429,
    "lat": 44.786968
  }
}, {
  "id": 3172379,
  "name": "Nardo",
  "country": "IT",
  "coord": {
    "lon": 18.02972,
    "lat": 40.175121
  }
}, {
  "id": 6541923,
  "name": "Atri",
  "country": "IT",
  "coord": {
    "lon": 13.9848,
    "lat": 42.577839
  }
}, {
  "id": 6536651,
  "name": "Susegana",
  "country": "IT",
  "coord": {
    "lon": 12.25351,
    "lat": 45.856209
  }
}, {
  "id": 3182633,
  "name": "Avigliano",
  "country": "IT",
  "coord": {
    "lon": 15.72004,
    "lat": 40.73291
  }
}, {
  "id": 6536661,
  "name": "Santa Maria di Sala",
  "country": "IT",
  "coord": {
    "lon": 12.03531,
    "lat": 45.507999
  }
}, {
  "id": 6536948,
  "name": "Formello",
  "country": "IT",
  "coord": {
    "lon": 12.40027,
    "lat": 42.08252
  }
}, {
  "id": 3176739,
  "name": "Formello",
  "country": "IT",
  "coord": {
    "lon": 12.39979,
    "lat": 42.080132
  }
}, {
  "id": 3172240,
  "name": "Noci",
  "country": "IT",
  "coord": {
    "lon": 17.131701,
    "lat": 40.79073
  }
}, {
  "id": 3166426,
  "name": "Soliera",
  "country": "IT",
  "coord": {
    "lon": 10.9263,
    "lat": 44.737968
  }
}, {
  "id": 3163836,
  "name": "Zula",
  "country": "IT",
  "coord": {
    "lon": 11.33333,
    "lat": 44.349998
  }
}, {
  "id": 6538018,
  "name": "Poggio a Caiano",
  "country": "IT",
  "coord": {
    "lon": 11.05072,
    "lat": 43.813648
  }
}, {
  "id": 3170487,
  "name": "Poggio a Caiano",
  "country": "IT",
  "coord": {
    "lon": 11.05072,
    "lat": 43.813648
  }
}, {
  "id": 3178263,
  "name": "Colorno",
  "country": "IT",
  "coord": {
    "lon": 10.37678,
    "lat": 44.92627
  }
}, {
  "id": 6536328,
  "name": "Ronchi dei Legionari",
  "country": "IT",
  "coord": {
    "lon": 13.50424,
    "lat": 45.82832
  }
}, {
  "id": 6537163,
  "name": "Breno",
  "country": "IT",
  "coord": {
    "lon": 10.30476,
    "lat": 45.95779
  }
}, {
  "id": 6537088,
  "name": "Somma Lombardo",
  "country": "IT",
  "coord": {
    "lon": 8.70873,
    "lat": 45.682968
  }
}, {
  "id": 3167062,
  "name": "Sasso Marconi",
  "country": "IT",
  "coord": {
    "lon": 11.24951,
    "lat": 44.39946
  }
}, {
  "id": 6537231,
  "name": "Castel Goffredo",
  "country": "IT",
  "coord": {
    "lon": 10.47538,
    "lat": 45.29858
  }
}, {
  "id": 3179675,
  "name": "Castel Goffredo",
  "country": "IT",
  "coord": {
    "lon": 10.47538,
    "lat": 45.29858
  }
}, {
  "id": 3181094,
  "name": "Camerino",
  "country": "IT",
  "coord": {
    "lon": 13.06917,
    "lat": 43.139851
  }
}, {
  "id": 6539656,
  "name": "Castellabate",
  "country": "IT",
  "coord": {
    "lon": 14.95645,
    "lat": 40.2817
  }
}, {
  "id": 3167551,
  "name": "Santa Maria di Castellabate",
  "country": "IT",
  "coord": {
    "lon": 14.95,
    "lat": 40.283329
  }
}, {
  "id": 6541644,
  "name": "Seravezza",
  "country": "IT",
  "coord": {
    "lon": 10.2287,
    "lat": 43.995041
  }
}, {
  "id": 3166168,
  "name": "Stellata",
  "country": "IT",
  "coord": {
    "lon": 11.41667,
    "lat": 44.883331
  }
}, {
  "id": 6539726,
  "name": "Loreto",
  "country": "IT",
  "coord": {
    "lon": 13.60978,
    "lat": 43.43536
  }
}, {
  "id": 3174567,
  "name": "Loreto",
  "country": "IT",
  "coord": {
    "lon": 13.60978,
    "lat": 43.43536
  }
}, {
  "id": 2523113,
  "name": "Siderno",
  "country": "IT",
  "coord": {
    "lon": 16.302,
    "lat": 38.277882
  }
}, {
  "id": 6537787,
  "name": "Butera",
  "country": "IT",
  "coord": {
    "lon": 14.18367,
    "lat": 37.19104
  }
}, {
  "id": 6539861,
  "name": "Monasterace",
  "country": "IT",
  "coord": {
    "lon": 16.55201,
    "lat": 38.453678
  }
}, {
  "id": 2523998,
  "name": "Noto",
  "country": "IT",
  "coord": {
    "lon": 15.06929,
    "lat": 36.890141
  }
}, {
  "id": 6537585,
  "name": "Carpignano Salentino",
  "country": "IT",
  "coord": {
    "lon": 18.338329,
    "lat": 40.196918
  }
}, {
  "id": 3166662,
  "name": "Serrano",
  "country": "IT",
  "coord": {
    "lon": 18.35,
    "lat": 40.183331
  }
}, {
  "id": 6539927,
  "name": "Montagnana",
  "country": "IT",
  "coord": {
    "lon": 11.4635,
    "lat": 45.22868
  }
}, {
  "id": 3176328,
  "name": "Ganna",
  "country": "IT",
  "coord": {
    "lon": 8.81667,
    "lat": 45.900002
  }
}, {
  "id": 6539612,
  "name": "Carro",
  "country": "IT",
  "coord": {
    "lon": 9.60888,
    "lat": 44.272148
  }
}, {
  "id": 3182057,
  "name": "Bibione",
  "country": "IT",
  "coord": {
    "lon": 13.05389,
    "lat": 45.63583
  }
}, {
  "id": 6538424,
  "name": "Langhirano",
  "country": "IT",
  "coord": {
    "lon": 10.26559,
    "lat": 44.612659
  }
}, {
  "id": 6543726,
  "name": "Ronago",
  "country": "IT",
  "coord": {
    "lon": 8.98364,
    "lat": 45.832279
  }
}, {
  "id": 6537804,
  "name": "Adrano",
  "country": "IT",
  "coord": {
    "lon": 14.83478,
    "lat": 37.661751
  }
}, {
  "id": 2525616,
  "name": "Bagnara Calabra",
  "country": "IT",
  "coord": {
    "lon": 15.8078,
    "lat": 38.288471
  }
}, {
  "id": 6536808,
  "name": "Fivizzano",
  "country": "IT",
  "coord": {
    "lon": 10.12599,
    "lat": 44.23835
  }
}, {
  "id": 3182479,
  "name": "Baio Dora",
  "country": "IT",
  "coord": {
    "lon": 7.83333,
    "lat": 45.5
  }
}, {
  "id": 3170589,
  "name": "Pizzolo",
  "country": "IT",
  "coord": {
    "lon": 9.61667,
    "lat": 44.349998
  }
}, {
  "id": 6536523,
  "name": "Trezzano sul Naviglio",
  "country": "IT",
  "coord": {
    "lon": 9.06644,
    "lat": 45.423069
  }
}, {
  "id": 6541877,
  "name": "San Benedetto del Tronto",
  "country": "IT",
  "coord": {
    "lon": 13.88569,
    "lat": 42.934849
  }
}, {
  "id": 3168550,
  "name": "San Benedetto del Tronto",
  "country": "IT",
  "coord": {
    "lon": 13.88157,
    "lat": 42.945621
  }
}, {
  "id": 3178709,
  "name": "Cigliano",
  "country": "IT",
  "coord": {
    "lon": 8.02102,
    "lat": 45.308361
  }
}, {
  "id": 6536662,
  "name": "Santo Stino di Livenza",
  "country": "IT",
  "coord": {
    "lon": 12.68232,
    "lat": 45.729912
  }
}, {
  "id": 6536846,
  "name": "San Giovanni Valdarno",
  "country": "IT",
  "coord": {
    "lon": 11.53183,
    "lat": 43.56345
  }
}, {
  "id": 6539110,
  "name": "Castellammare del Golfo",
  "country": "IT",
  "coord": {
    "lon": 12.88584,
    "lat": 38.018848
  }
}, {
  "id": 6539156,
  "name": "Novara di Sicilia",
  "country": "IT",
  "coord": {
    "lon": 15.13188,
    "lat": 38.015961
  }
}, {
  "id": 3168521,
  "name": "San Biagio di Callalta",
  "country": "IT",
  "coord": {
    "lon": 12.37722,
    "lat": 45.683609
  }
}, {
  "id": 6536329,
  "name": "Savogna d'Isonzo",
  "country": "IT",
  "coord": {
    "lon": 13.57474,
    "lat": 45.906422
  }
}, {
  "id": 3169980,
  "name": "Pra",
  "country": "IT",
  "coord": {
    "lon": 8.79001,
    "lat": 44.427528
  }
}, {
  "id": 3170752,
  "name": "Pieve di Cento",
  "country": "IT",
  "coord": {
    "lon": 11.30761,
    "lat": 44.712269
  }
}, {
  "id": 2712995,
  "name": "Gamla Staden",
  "country": "SE",
  "coord": {
    "lon": 13,
    "lat": 55.599998
  }
}, {
  "id": 2687700,
  "name": "Nykoping",
  "country": "SE",
  "coord": {
    "lon": 17.007879,
    "lat": 58.752998
  }
}, {
  "id": 602150,
  "name": "Umea",
  "country": "SE",
  "coord": {
    "lon": 20.25972,
    "lat": 63.828419
  }
}, {
  "id": 2662881,
  "name": "Vimmerby",
  "country": "SE",
  "coord": {
    "lon": 15.85515,
    "lat": 57.665878
  }
}, {
  "id": 2724227,
  "name": "Åvik",
  "country": "SE",
  "coord": {
    "lon": 17.1,
    "lat": 61.73333
  }
}, {
  "id": 8012855,
  "name": "Cedofeita",
  "country": "PT",
  "coord": {
    "lon": -8.62244,
    "lat": 41.158352
  }
}, {
  "id": 8012597,
  "name": "Pontinha",
  "country": "PT",
  "coord": {
    "lon": -9.20377,
    "lat": 38.777
  }
}, {
  "id": 2742031,
  "name": "Distrito de Braga",
  "country": "PT",
  "coord": {
    "lon": -8.41667,
    "lat": 41.583328
  }
}, {
  "id": 8010417,
  "name": "Aveiro",
  "country": "PT",
  "coord": {
    "lon": -8.61628,
    "lat": 40.623981
  }
}, {
  "id": 2261956,
  "name": "Valejas",
  "country": "PT",
  "coord": {
    "lon": -9.26549,
    "lat": 38.735001
  }
}, {
  "id": 8010459,
  "name": "Vizela",
  "country": "PT",
  "coord": {
    "lon": -8.2931,
    "lat": 41.37529
  }
}, {
  "id": 8012966,
  "name": "Tramagal",
  "country": "PT",
  "coord": {
    "lon": -8.25987,
    "lat": 39.443241
  }
}, {
  "id": 2262540,
  "name": "Tramagal",
  "country": "PT",
  "coord": {
    "lon": -8.25,
    "lat": 39.450001
  }
}, {
  "id": 8011143,
  "name": "Fafe",
  "country": "PT",
  "coord": {
    "lon": -8.17333,
    "lat": 41.44698
  }
}, {
  "id": 8012715,
  "name": "Rio Tinto",
  "country": "PT",
  "coord": {
    "lon": -8.55954,
    "lat": 41.176891
  }
}, {
  "id": 8010550,
  "name": "Marinha Grande",
  "country": "PT",
  "coord": {
    "lon": -8.95005,
    "lat": 39.77681
  }
}, {
  "id": 8011327,
  "name": "Ribeirão",
  "country": "PT",
  "coord": {
    "lon": -8.56012,
    "lat": 41.361649
  }
}, {
  "id": 8010587,
  "name": "Penafiel",
  "country": "PT",
  "coord": {
    "lon": -8.28972,
    "lat": 41.159599
  }
}, {
  "id": 2740519,
  "name": "Cortegaca",
  "country": "PT",
  "coord": {
    "lon": -8.6213,
    "lat": 40.94883
  }
}, {
  "id": 8014836,
  "name": "Borda do Campo",
  "country": "PT",
  "coord": {
    "lon": -8.75771,
    "lat": 40.050621
  }
}, {
  "id": 8010546,
  "name": "Caldas da Rainha",
  "country": "PT",
  "coord": {
    "lon": -9.10242,
    "lat": 39.409809
  }
}, {
  "id": 2739055,
  "name": "Gatões",
  "country": "PT",
  "coord": {
    "lon": -8.66221,
    "lat": 41.212662
  }
}, {
  "id": 2263919,
  "name": "Riba Fria",
  "country": "PT",
  "coord": {
    "lon": -8.9936,
    "lat": 39.416939
  }
}, {
  "id": 8012434,
  "name": "Ventosa",
  "country": "PT",
  "coord": {
    "lon": -9.09361,
    "lat": 39.123291
  }
}, {
  "id": 8010449,
  "name": "Cabeceiras de Basto",
  "country": "PT",
  "coord": {
    "lon": -7.97198,
    "lat": 41.52079
  }
}, {
  "id": 8011197,
  "name": "Mascotelos",
  "country": "PT",
  "coord": {
    "lon": -8.30995,
    "lat": 41.425571
  }
}, {
  "id": 8014395,
  "name": "Armação de Pêra",
  "country": "PT",
  "coord": {
    "lon": -8.36463,
    "lat": 37.115799
  }
}, {
  "id": 408687,
  "name": "Líndos",
  "country": "GR",
  "coord": {
    "lon": 28.085711,
    "lat": 36.091019
  }
}, {
  "id": 255683,
  "name": "Patra",
  "country": "GR",
  "coord": {
    "lon": 21.73444,
    "lat": 38.244438
  }
}, {
  "id": 8133812,
  "name": "Dimos Kalymnos",
  "country": "GR",
  "coord": {
    "lon": 26.991211,
    "lat": 36.987148
  }
}, {
  "id": 8133988,
  "name": "Dimos Pylos-Nestoras",
  "country": "GR",
  "coord": {
    "lon": 21.779409,
    "lat": 36.916351
  }
}, {
  "id": 253343,
  "name": "Spiliá",
  "country": "GR",
  "coord": {
    "lon": 20.48333,
    "lat": 38.166672
  }
}, {
  "id": 8133759,
  "name": "Dimos Rethymno",
  "country": "GR",
  "coord": {
    "lon": 24.487341,
    "lat": 35.315041
  }
}, {
  "id": 733901,
  "name": "Vergina",
  "country": "GR",
  "coord": {
    "lon": 22.31361,
    "lat": 40.48111
  }
}, {
  "id": 8133695,
  "name": "Dimos Chersonisos",
  "country": "GR",
  "coord": {
    "lon": 25.34346,
    "lat": 35.28577
  }
}, {
  "id": 8133857,
  "name": "Dimos Eordaia",
  "country": "GR",
  "coord": {
    "lon": 21.71814,
    "lat": 40.522541
  }
}, {
  "id": 7297375,
  "name": "The Gorge",
  "country": "GB",
  "coord": {
    "lon": -2.47239,
    "lat": 52.635288
  }
}, {
  "id": 2652708,
  "name": "Coalbrookdale",
  "country": "GB",
  "coord": {
    "lon": -2.49174,
    "lat": 52.63821
  }
}, {
  "id": 2647601,
  "name": "Borough of Halton",
  "country": "GB",
  "coord": {
    "lon": -2.75,
    "lat": 53.333328
  }
}, {
  "id": 2634311,
  "name": "Weston Point",
  "country": "GB",
  "coord": {
    "lon": -2.75649,
    "lat": 53.32642
  }
}, {
  "id": 2650236,
  "name": "Edgbaston",
  "country": "GB",
  "coord": {
    "lon": -1.92115,
    "lat": 52.462299
  }
}, {
  "id": 7291997,
  "name": "Newbury",
  "country": "GB",
  "coord": {
    "lon": -1.32067,
    "lat": 51.390831
  }
}, {
  "id": 7290590,
  "name": "Lincoln District",
  "country": "GB",
  "coord": {
    "lon": -0.55664,
    "lat": 53.220119
  }
}, {
  "id": 2635586,
  "name": "Town Moor",
  "country": "GB",
  "coord": {
    "lon": -1.61667,
    "lat": 54.98333
  }
}, {
  "id": 2656196,
  "name": "Basford",
  "country": "GB",
  "coord": {
    "lon": -1.18333,
    "lat": 52.966671
  }
}, {
  "id": 2646253,
  "name": "Ince-in-Makerfield",
  "country": "GB",
  "coord": {
    "lon": -2.61667,
    "lat": 53.533329
  }
}, {
  "id": 2647516,
  "name": "Hanwell",
  "country": "GB",
  "coord": {
    "lon": -0.33517,
    "lat": 51.518089
  }
}, {
  "id": 2644100,
  "name": "Llanelli",
  "country": "GB",
  "coord": {
    "lon": -4.16191,
    "lat": 51.68195
  }
}, {
  "id": 2657480,
  "name": "Allesley",
  "country": "GB",
  "coord": {
    "lon": -1.57157,
    "lat": 52.426048
  }
}, {
  "id": 3333187,
  "name": "Richmond upon Thames",
  "country": "GB",
  "coord": {
    "lon": -0.33333,
    "lat": 51.416672
  }
}, {
  "id": 2655984,
  "name": "Belfast",
  "country": "GB",
  "coord": {
    "lon": -5.93333,
    "lat": 54.583328
  }
}, {
  "id": 3333229,
  "name": "City of Edinburgh",
  "country": "GB",
  "coord": {
    "lon": -3.19333,
    "lat": 55.94973
  }
}, {
  "id": 3333136,
  "name": "Borough of Bury",
  "country": "GB",
  "coord": {
    "lon": -2.33333,
    "lat": 53.583328
  }
}, {
  "id": 2641557,
  "name": "Newton Abbot",
  "country": "GB",
  "coord": {
    "lon": -3.61186,
    "lat": 50.52858
  }
}, {
  "id": 3333161,
  "name": "Borough of Kirklees",
  "country": "GB",
  "coord": {
    "lon": -1.75,
    "lat": 53.583328
  }
}, {
  "id": 3333137,
  "name": "Borough of Calderdale",
  "country": "GB",
  "coord": {
    "lon": -2,
    "lat": 53.700001
  }
}, {
  "id": 2635028,
  "name": "Vale of Glamorgan",
  "country": "GB",
  "coord": {
    "lon": -3.41667,
    "lat": 51.416672
  }
}, {
  "id": 2633462,
  "name": "Wycombe",
  "country": "GB",
  "coord": {
    "lon": -0.9,
    "lat": 51.583328
  }
}, {
  "id": 2652586,
  "name": "Coleraine",
  "country": "GB",
  "coord": {
    "lon": -6.66667,
    "lat": 55.133331
  }
}, {
  "id": 2634869,
  "name": "Wallingford",
  "country": "GB",
  "coord": {
    "lon": -1.1248,
    "lat": 51.599819
  }
}, {
  "id": 2636066,
  "name": "Thame",
  "country": "GB",
  "coord": {
    "lon": -0.97624,
    "lat": 51.748402
  }
}, {
  "id": 2654092,
  "name": "Caernarfon",
  "country": "GB",
  "coord": {
    "lon": -4.27016,
    "lat": 53.141258
  }
}, {
  "id": 2645093,
  "name": "Knutsford",
  "country": "GB",
  "coord": {
    "lon": -2.37482,
    "lat": 53.302891
  }
}, {
  "id": 7295999,
  "name": "Carmarthen",
  "country": "GB",
  "coord": {
    "lon": -4.33155,
    "lat": 51.856049
  }
}, {
  "id": 2653755,
  "name": "Carmarthen",
  "country": "GB",
  "coord": {
    "lon": -4.30535,
    "lat": 51.855518
  }
}, {
  "id": 7292911,
  "name": "Huntingdon",
  "country": "GB",
  "coord": {
    "lon": -0.18646,
    "lat": 52.34251
  }
}, {
  "id": 2657060,
  "name": "Armagh",
  "country": "GB",
  "coord": {
    "lon": -6.66667,
    "lat": 54.349998
  }
}, {
  "id": 7291791,
  "name": "Northwood",
  "country": "GB",
  "coord": {
    "lon": -1.31093,
    "lat": 50.739151
  }
}, {
  "id": 2641217,
  "name": "Northwood",
  "country": "GB",
  "coord": {
    "lon": -1.31192,
    "lat": 50.74102
  }
}, {
  "id": 7292855,
  "name": "Crowthorne",
  "country": "GB",
  "coord": {
    "lon": -0.77353,
    "lat": 51.375
  }
}, {
  "id": 7292770,
  "name": "Finchampstead",
  "country": "GB",
  "coord": {
    "lon": -0.866,
    "lat": 51.371929
  }
}, {
  "id": 2649445,
  "name": "Finchampstead",
  "country": "GB",
  "coord": {
    "lon": -0.85728,
    "lat": 51.361488
  }
}, {
  "id": 7298372,
  "name": "Truro",
  "country": "GB",
  "coord": {
    "lon": -5.05831,
    "lat": 50.263691
  }
}, {
  "id": 2635412,
  "name": "Truro",
  "country": "GB",
  "coord": {
    "lon": -5.05436,
    "lat": 50.265259
  }
}, {
  "id": 2656913,
  "name": "Ash Vale",
  "country": "GB",
  "coord": {
    "lon": -0.72115,
    "lat": 51.26997
  }
}, {
  "id": 2655049,
  "name": "Bowness-on-Windermere",
  "country": "GB",
  "coord": {
    "lon": -2.91859,
    "lat": 54.363312
  }
}, {
  "id": 3333239,
  "name": "Bridgend county borough",
  "country": "GB",
  "coord": {
    "lon": -3.58333,
    "lat": 51.549999
  }
}, {
  "id": 7292974,
  "name": "Leighton-Linslade",
  "country": "GB",
  "coord": {
    "lon": -0.66606,
    "lat": 51.917469
  }
}, {
  "id": 7290663,
  "name": "Barrow-in-Furness District",
  "country": "GB",
  "coord": {
    "lon": -3.22326,
    "lat": 54.128849
  }
}, {
  "id": 3333152,
  "name": "Borough of Hartlepool",
  "country": "GB",
  "coord": {
    "lon": -1.25,
    "lat": 54.666672
  }
}, {
  "id": 3333236,
  "name": "South Lanarkshire",
  "country": "GB",
  "coord": {
    "lon": -3.83333,
    "lat": 55.583328
  }
}, {
  "id": 2647570,
  "name": "Hamilton",
  "country": "GB",
  "coord": {
    "lon": -4.03333,
    "lat": 55.76667
  }
}, {
  "id": 7290586,
  "name": "Hinckley and Bosworth District",
  "country": "GB",
  "coord": {
    "lon": -1.38402,
    "lat": 52.60778
  }
}, {
  "id": 2656039,
  "name": "Bedlington",
  "country": "GB",
  "coord": {
    "lon": -1.59319,
    "lat": 55.130611
  }
}, {
  "id": 2636518,
  "name": "Sunninghill",
  "country": "GB",
  "coord": {
    "lon": -0.65557,
    "lat": 51.401348
  }
}, {
  "id": 2651386,
  "name": "Denbigh",
  "country": "GB",
  "coord": {
    "lon": -3.41667,
    "lat": 53.183331
  }
}, {
  "id": 7294638,
  "name": "Penzance",
  "country": "GB",
  "coord": {
    "lon": -5.54554,
    "lat": 50.105862
  }
}, {
  "id": 2640377,
  "name": "Penzance",
  "country": "GB",
  "coord": {
    "lon": -5.53715,
    "lat": 50.11861
  }
}, {
  "id": 7290557,
  "name": "Gosport District",
  "country": "GB",
  "coord": {
    "lon": -1.16165,
    "lat": 50.806198
  }
}, {
  "id": 3333232,
  "name": "North Ayrshire",
  "country": "GB",
  "coord": {
    "lon": -4.89647,
    "lat": 55.696548
  }
}, {
  "id": 2654604,
  "name": "Brodick",
  "country": "GB",
  "coord": {
    "lon": -5.14717,
    "lat": 55.57539
  }
}, {
  "id": 7295818,
  "name": "Meltham",
  "country": "GB",
  "coord": {
    "lon": -1.86003,
    "lat": 53.589859
  }
}, {
  "id": 2640968,
  "name": "Omagh District",
  "country": "GB",
  "coord": {
    "lon": -7.25,
    "lat": 54.583328
  }
}, {
  "id": 2640967,
  "name": "Omagh",
  "country": "GB",
  "coord": {
    "lon": -7.3,
    "lat": 54.599998
  }
}, {
  "id": 7292970,
  "name": "Glyncorrwg",
  "country": "GB",
  "coord": {
    "lon": -3.64345,
    "lat": 51.673939
  }
}, {
  "id": 2657807,
  "name": "Abergwynfi",
  "country": "GB",
  "coord": {
    "lon": -3.6026,
    "lat": 51.653549
  }
}, {
  "id": 7292972,
  "name": "Pelenna",
  "country": "GB",
  "coord": {
    "lon": -3.72255,
    "lat": 51.656151
  }
}, {
  "id": 2640118,
  "name": "Pontrhydyfen",
  "country": "GB",
  "coord": {
    "lon": -3.74469,
    "lat": 51.63435
  }
}, {
  "id": 2642330,
  "name": "Monkseaton",
  "country": "GB",
  "coord": {
    "lon": -1.4659,
    "lat": 55.042339
  }
}, {
  "id": 7296375,
  "name": "Ystalyfera",
  "country": "GB",
  "coord": {
    "lon": -3.80508,
    "lat": 51.758041
  }
}, {
  "id": 2633337,
  "name": "Ystalyfera",
  "country": "GB",
  "coord": {
    "lon": -3.78082,
    "lat": 51.767159
  }
}, {
  "id": 2650941,
  "name": "Drumcree",
  "country": "GB",
  "coord": {
    "lon": -6.46667,
    "lat": 54.433331
  }
}, {
  "id": 7296308,
  "name": "Milford Haven",
  "country": "GB",
  "coord": {
    "lon": -5.03444,
    "lat": 51.720711
  }
}, {
  "id": 2642534,
  "name": "Milford Haven",
  "country": "GB",
  "coord": {
    "lon": -5.0341,
    "lat": 51.71278
  }
}, {
  "id": 3333212,
  "name": "City and Borough of Wakefield",
  "country": "GB",
  "coord": {
    "lon": -1.49895,
    "lat": 53.680851
  }
}, {
  "id": 2638035,
  "name": "Shepton Mallet",
  "country": "GB",
  "coord": {
    "lon": -2.54722,
    "lat": 51.18972
  }
}, {
  "id": 7300410,
  "name": "Thorne",
  "country": "GB",
  "coord": {
    "lon": -0.92887,
    "lat": 53.621189
  }
}, {
  "id": 2635997,
  "name": "Thorne",
  "country": "GB",
  "coord": {
    "lon": -0.96308,
    "lat": 53.611221
  }
}, {
  "id": 2636175,
  "name": "Tavernspite",
  "country": "GB",
  "coord": {
    "lon": -4.64111,
    "lat": 51.78194
  }
}, {
  "id": 7290622,
  "name": "West Oxfordshire District",
  "country": "GB",
  "coord": {
    "lon": -1.50136,
    "lat": 51.839882
  }
}, {
  "id": 2643697,
  "name": "Long Eaton",
  "country": "GB",
  "coord": {
    "lon": -1.27136,
    "lat": 52.898548
  }
}, {
  "id": 2649207,
  "name": "Forfar",
  "country": "GB",
  "coord": {
    "lon": -2.89026,
    "lat": 56.643131
  }
}, {
  "id": 7297451,
  "name": "Hungerford",
  "country": "GB",
  "coord": {
    "lon": -1.52201,
    "lat": 51.41671
  }
}, {
  "id": 2646411,
  "name": "Hungerford",
  "country": "GB",
  "coord": {
    "lon": -1.51556,
    "lat": 51.415131
  }
}, {
  "id": 7294533,
  "name": "Thornbury",
  "country": "GB",
  "coord": {
    "lon": -2.55531,
    "lat": 52.237991
  }
}, {
  "id": 7299856,
  "name": "Blaengwrach",
  "country": "GB",
  "coord": {
    "lon": -3.62173,
    "lat": 51.728111
  }
}, {
  "id": 3345326,
  "name": "Blaengwrach",
  "country": "GB",
  "coord": {
    "lon": -3.63915,
    "lat": 51.736851
  }
}, {
  "id": 7295589,
  "name": "Olney",
  "country": "GB",
  "coord": {
    "lon": -0.71375,
    "lat": 52.16486
  }
}, {
  "id": 2640972,
  "name": "Olney",
  "country": "GB",
  "coord": {
    "lon": -0.70201,
    "lat": 52.15345
  }
}, {
  "id": 7301705,
  "name": "Harden",
  "country": "GB",
  "coord": {
    "lon": -1.87311,
    "lat": 53.842739
  }
}, {
  "id": 2639944,
  "name": "Sir Powys",
  "country": "GB",
  "coord": {
    "lon": -3.41667,
    "lat": 52.333328
  }
}, {
  "id": 2654818,
  "name": "Brecon",
  "country": "GB",
  "coord": {
    "lon": -3.38601,
    "lat": 51.947651
  }
}, {
  "id": 2654817,
  "name": "Brecon",
  "country": "GB",
  "coord": {
    "lon": -3.38887,
    "lat": 51.946121
  }
}, {
  "id": 2641910,
  "name": "Nairn",
  "country": "GB",
  "coord": {
    "lon": -3.87973,
    "lat": 57.58094
  }
}, {
  "id": 6620335,
  "name": "Frankby",
  "country": "GB",
  "coord": {
    "lon": -3.13703,
    "lat": 53.372581
  }
}, {
  "id": 7290624,
  "name": "Sedgemoor District",
  "country": "GB",
  "coord": {
    "lon": -2.9619,
    "lat": 51.186409
  }
}, {
  "id": 2639563,
  "name": "Redcar",
  "country": "GB",
  "coord": {
    "lon": -1.05999,
    "lat": 54.61657
  }
}, {
  "id": 2643314,
  "name": "Lyme Regis",
  "country": "GB",
  "coord": {
    "lon": -2.93477,
    "lat": 50.72654
  }
}, {
  "id": 2647393,
  "name": "Hartpury",
  "country": "GB",
  "coord": {
    "lon": -2.29314,
    "lat": 51.924191
  }
}, {
  "id": 2646472,
  "name": "Hoylake",
  "country": "GB",
  "coord": {
    "lon": -3.18066,
    "lat": 53.390461
  }
}, {
  "id": 7292301,
  "name": "Crymych",
  "country": "GB",
  "coord": {
    "lon": -4.63719,
    "lat": 51.96452
  }
}, {
  "id": 2651796,
  "name": "Crymych",
  "country": "GB",
  "coord": {
    "lon": -4.64722,
    "lat": 51.97361
  }
}, {
  "id": 7294618,
  "name": "Llysfaen",
  "country": "GB",
  "coord": {
    "lon": -3.66256,
    "lat": 53.28157
  }
}, {
  "id": 2643867,
  "name": "Llysfaen",
  "country": "GB",
  "coord": {
    "lon": -3.66667,
    "lat": 53.283329
  }
}, {
  "id": 2650797,
  "name": "Dumfries and Galloway",
  "country": "GB",
  "coord": {
    "lon": -3.83333,
    "lat": 55.083328
  }
}, {
  "id": 2657293,
  "name": "Annan",
  "country": "GB",
  "coord": {
    "lon": -3.25647,
    "lat": 54.988392
  }
}, {
  "id": 2641331,
  "name": "Northiam",
  "country": "GB",
  "coord": {
    "lon": 0.60026,
    "lat": 50.994389
  }
}, {
  "id": 7294631,
  "name": "Marhamchurch",
  "country": "GB",
  "coord": {
    "lon": -4.51644,
    "lat": 50.79673
  }
}, {
  "id": 2643040,
  "name": "Marhamchurch",
  "country": "GB",
  "coord": {
    "lon": -4.52241,
    "lat": 50.80513
  }
}, {
  "id": 6945806,
  "name": "Shepway District",
  "country": "GB",
  "coord": {
    "lon": 1.15391,
    "lat": 51.081741
  }
}, {
  "id": 2649258,
  "name": "Folkestone",
  "country": "GB",
  "coord": {
    "lon": 1.18333,
    "lat": 51.083328
  }
}, {
  "id": 2652418,
  "name": "Cookstown District",
  "country": "GB",
  "coord": {
    "lon": -6.66667,
    "lat": 54.666672
  }
}, {
  "id": 2652417,
  "name": "Cookstown",
  "country": "GB",
  "coord": {
    "lon": -6.74595,
    "lat": 54.643051
  }
}, {
  "id": 2652725,
  "name": "Clunderwen",
  "country": "GB",
  "coord": {
    "lon": -4.73167,
    "lat": 51.840561
  }
}, {
  "id": 2634354,
  "name": "West Lothian",
  "country": "GB",
  "coord": {
    "lon": -3.5,
    "lat": 55.916672
  }
}, {
  "id": 2656169,
  "name": "Bathgate",
  "country": "GB",
  "coord": {
    "lon": -3.64398,
    "lat": 55.902039
  }
}, {
  "id": 2648559,
  "name": "Glastonbury",
  "country": "GB",
  "coord": {
    "lon": -2.71797,
    "lat": 51.147289
  }
}, {
  "id": 2646810,
  "name": "Hodbarrow",
  "country": "GB",
  "coord": {
    "lon": -3.25222,
    "lat": 54.195381
  }
}, {
  "id": 6949212,
  "name": "Ham",
  "country": "GB",
  "coord": {
    "lon": -0.30933,
    "lat": 51.436192
  }
}, {
  "id": 2650725,
  "name": "Dunglass",
  "country": "GB",
  "coord": {
    "lon": -2.36667,
    "lat": 55.933331
  }
}, {
  "id": 2646455,
  "name": "Hugglescote",
  "country": "GB",
  "coord": {
    "lon": -1.37179,
    "lat": 52.709759
  }
}, {
  "id": 6619866,
  "name": "East Croydon Railway Station",
  "country": "GB",
  "coord": {
    "lon": -0.0925,
    "lat": 51.375
  }
}, {
  "id": 2654464,
  "name": "Bruichladdich",
  "country": "GB",
  "coord": {
    "lon": -6.36134,
    "lat": 55.766151
  }
}, {
  "id": 7300017,
  "name": "Lawhitton Rural",
  "country": "GB",
  "coord": {
    "lon": -4.32263,
    "lat": 50.621391
  }
}, {
  "id": 7301014,
  "name": "Llanfyllin",
  "country": "GB",
  "coord": {
    "lon": -3.31067,
    "lat": 52.774261
  }
}, {
  "id": 2644053,
  "name": "Llanfyllin",
  "country": "GB",
  "coord": {
    "lon": -3.27187,
    "lat": 52.765701
  }
}, {
  "id": 7298240,
  "name": "Epworth",
  "country": "GB",
  "coord": {
    "lon": -0.83465,
    "lat": 53.538929
  }
}, {
  "id": 2642486,
  "name": "Milnathort",
  "country": "GB",
  "coord": {
    "lon": -3.4193,
    "lat": 56.226879
  }
}, {
  "id": 2649298,
  "name": "County of Flintshire",
  "country": "GB",
  "coord": {
    "lon": -3.16667,
    "lat": 53.25
  }
}, {
  "id": 7301170,
  "name": "Mostyn",
  "country": "GB",
  "coord": {
    "lon": -3.24684,
    "lat": 53.31588
  }
}, {
  "id": 2644159,
  "name": "Llandarcy",
  "country": "GB",
  "coord": {
    "lon": -3.85657,
    "lat": 51.642262
  }
}, {
  "id": 2640551,
  "name": "Payhembury",
  "country": "GB",
  "coord": {
    "lon": -3.29518,
    "lat": 50.80674
  }
}, {
  "id": 7297046,
  "name": "Llangamarch",
  "country": "GB",
  "coord": {
    "lon": -3.58225,
    "lat": 52.08548
  }
}, {
  "id": 7295209,
  "name": "Bala",
  "country": "GB",
  "coord": {
    "lon": -3.60141,
    "lat": 52.91077
  }
}, {
  "id": 2655692,
  "name": "Biggar",
  "country": "GB",
  "coord": {
    "lon": -3.51667,
    "lat": 55.616669
  }
}, {
  "id": 7293134,
  "name": "North Lodge",
  "country": "GB",
  "coord": {
    "lon": -1.55754,
    "lat": 54.873711
  }
}, {
  "id": 2646228,
  "name": "Inchture",
  "country": "GB",
  "coord": {
    "lon": -3.16956,
    "lat": 56.445511
  }
}, {
  "id": 7293619,
  "name": "Beddgelert",
  "country": "GB",
  "coord": {
    "lon": -4.06923,
    "lat": 53.028229
  }
}, {
  "id": 2657340,
  "name": "Ampney Crucis",
  "country": "GB",
  "coord": {
    "lon": -1.905,
    "lat": 51.713989
  }
}, {
  "id": 7298755,
  "name": "Maesycwmmer",
  "country": "GB",
  "coord": {
    "lon": -3.21639,
    "lat": 51.63755
  }
}, {
  "id": 2638043,
  "name": "Shepherds Bush",
  "country": "GB",
  "coord": {
    "lon": -0.23767,
    "lat": 51.51569
  }
}, {
  "id": 2644290,
  "name": "Little Massingham",
  "country": "GB",
  "coord": {
    "lon": 0.65888,
    "lat": 52.78561
  }
}, {
  "id": 7292365,
  "name": "Bodedern",
  "country": "GB",
  "coord": {
    "lon": -4.49044,
    "lat": 53.293251
  }
}, {
  "id": 2652649,
  "name": "Coedely",
  "country": "GB",
  "coord": {
    "lon": -3.4163,
    "lat": 51.56189
  }
}, {
  "id": 2616814,
  "name": "Mølholm",
  "country": "DK",
  "coord": {
    "lon": 9.54402,
    "lat": 55.698959
  }
}, {
  "id": 2620423,
  "name": "Herning Kommune",
  "country": "DK",
  "coord": {
    "lon": 9,
    "lat": 56.166672
  }
}, {
  "id": 6141256,
  "name": "Saskatoon",
  "country": "CA",
  "coord": {
    "lon": -106.634521,
    "lat": 52.116791
  }
}, {
  "id": 6183858,
  "name": "Wolfville",
  "country": "CA",
  "coord": {
    "lon": -64.365463,
    "lat": 45.08345
  }
}, {
  "id": 6146143,
  "name": "Sherbrooke",
  "country": "CA",
  "coord": {
    "lon": -71.899078,
    "lat": 45.400082
  }
}, {
  "id": 5897321,
  "name": "Bedford",
  "country": "CA",
  "coord": {
    "lon": -63.66732,
    "lat": 44.725521
  }
}, {
  "id": 6160752,
  "name": "Sydney",
  "country": "CA",
  "coord": {
    "lon": -60.181751,
    "lat": 46.150139
  }
}, {
  "id": 6545041,
  "name": "Lachine",
  "country": "CA",
  "coord": {
    "lon": -73.668991,
    "lat": 45.43177
  }
}, {
  "id": 6138517,
  "name": "Saint John",
  "country": "CA",
  "coord": {
    "lon": -66.067657,
    "lat": 45.272709
  }
}, {
  "id": 7798683,
  "name": "New Westminster",
  "country": "CA",
  "coord": {
    "lon": -122.91111,
    "lat": 49.20694
  }
}, {
  "id": 5886182,
  "name": "Antigonish",
  "country": "CA",
  "coord": {
    "lon": -61.998581,
    "lat": 45.616852
  }
}, {
  "id": 6094325,
  "name": "Orillia",
  "country": "CA",
  "coord": {
    "lon": -79.420677,
    "lat": 44.608681
  }
}, {
  "id": 6073349,
  "name": "Midhurst",
  "country": "CA",
  "coord": {
    "lon": -79.732941,
    "lat": 44.450111
  }
}, {
  "id": 5907166,
  "name": "Bradford",
  "country": "CA",
  "coord": {
    "lon": -79.566322,
    "lat": 44.11681
  }
}, {
  "id": 5884051,
  "name": "Alliston",
  "country": "CA",
  "coord": {
    "lon": -79.866348,
    "lat": 44.150108
  }
}, {
  "id": 5978353,
  "name": "Hull",
  "country": "CA",
  "coord": {
    "lon": -75.741051,
    "lat": 45.4445
  }
}, {
  "id": 5925975,
  "name": "Collingwood",
  "country": "CA",
  "coord": {
    "lon": -80.216377,
    "lat": 44.483398
  }
}, {
  "id": 5905308,
  "name": "Bolton",
  "country": "CA",
  "coord": {
    "lon": -79.737907,
    "lat": 43.87952
  }
}, {
  "id": 5955895,
  "name": "Fort McMurray",
  "country": "CA",
  "coord": {
    "lon": -111.381027,
    "lat": 56.726761
  }
}, {
  "id": 7871301,
  "name": "Kingsview Village",
  "country": "CA",
  "coord": {
    "lon": -79.554657,
    "lat": 43.700432
  }
}, {
  "id": 6065566,
  "name": "Maple",
  "country": "CA",
  "coord": {
    "lon": -79.516312,
    "lat": 43.850109
  }
}, {
  "id": 6141190,
  "name": "Sarnia",
  "country": "CA",
  "coord": {
    "lon": -82.404068,
    "lat": 42.978661
  }
}, {
  "id": 5941602,
  "name": "Don Mills",
  "country": "CA",
  "coord": {
    "lon": -79.332901,
    "lat": 43.73341
  }
}, {
  "id": 6185449,
  "name": "Yennadon",
  "country": "CA",
  "coord": {
    "lon": -122.585899,
    "lat": 49.232971
  }
}, {
  "id": 6089426,
  "name": "North Bay",
  "country": "CA",
  "coord": {
    "lon": -79.466331,
    "lat": 46.316799
  }
}, {
  "id": 5951036,
  "name": "Fairview",
  "country": "CA",
  "coord": {
    "lon": -118.386063,
    "lat": 56.06675
  }
}, {
  "id": 6944113,
  "name": "Mont-Joli",
  "country": "CA",
  "coord": {
    "lon": -68.192139,
    "lat": 48.583881
  }
}, {
  "id": 6111253,
  "name": "Portage",
  "country": "CA",
  "coord": {
    "lon": -64.06543,
    "lat": 46.66684
  }
}, {
  "id": 6095246,
  "name": "Otway",
  "country": "CA",
  "coord": {
    "lon": -114.9188,
    "lat": 52.366829
  }
}, {
  "id": 5977783,
  "name": "Houston",
  "country": "CA",
  "coord": {
    "lon": -126.670082,
    "lat": 54.399761
  }
}, {
  "id": 6111867,
  "name": "Port Hawkesbury",
  "country": "CA",
  "coord": {
    "lon": -61.34853,
    "lat": 45.616852
  }
}, {
  "id": 6126245,
  "name": "Rockcliffe Park",
  "country": "CA",
  "coord": {
    "lon": -75.68264,
    "lat": 45.4501
  }
}, {
  "id": 6180550,
  "name": "Whitehorse",
  "country": "CA",
  "coord": {
    "lon": -135.053757,
    "lat": 60.71611
  }
}, {
  "id": 6035615,
  "name": "Lacombe",
  "country": "CA",
  "coord": {
    "lon": -113.735298,
    "lat": 52.466808
  }
}, {
  "id": 5975503,
  "name": "Hinton",
  "country": "CA",
  "coord": {
    "lon": -117.58567,
    "lat": 53.400089
  }
}, {
  "id": 6180285,
  "name": "Whitecourt",
  "country": "CA",
  "coord": {
    "lon": -115.685478,
    "lat": 54.15015
  }
}, {
  "id": 5946222,
  "name": "East Wiltshire",
  "country": "CA",
  "coord": {
    "lon": -63.213989,
    "lat": 46.254318
  }
}, {
  "id": 6091191,
  "name": "Norwich",
  "country": "CA",
  "coord": {
    "lon": -80.599693,
    "lat": 42.983398
  }
}, {
  "id": 5942547,
  "name": "Drayton Valley",
  "country": "CA",
  "coord": {
    "lon": -114.985443,
    "lat": 53.21682
  }
}, {
  "id": 6166580,
  "name": "Tillsonburg",
  "country": "CA",
  "coord": {
    "lon": -80.726173,
    "lat": 42.859859
  }
}, {
  "id": 6064180,
  "name": "Magog",
  "country": "CA",
  "coord": {
    "lon": -72.149094,
    "lat": 45.266781
  }
}, {
  "id": 5964214,
  "name": "Granby",
  "country": "CA",
  "coord": {
    "lon": -72.73243,
    "lat": 45.383381
  }
}, {
  "id": 5909294,
  "name": "Brockville",
  "country": "CA",
  "coord": {
    "lon": -75.68264,
    "lat": 44.583408
  }
}, {
  "id": 6168768,
  "name": "Trenton",
  "country": "CA",
  "coord": {
    "lon": -77.577553,
    "lat": 44.099171
  }
}, {
  "id": 6158027,
  "name": "Strathroy",
  "country": "CA",
  "coord": {
    "lon": -81.622322,
    "lat": 42.955101
  }
}, {
  "id": 6122081,
  "name": "Richmond",
  "country": "CA",
  "coord": {
    "lon": -75.832657,
    "lat": 45.183399
  }
}, {
  "id": 5965812,
  "name": "Greater Napanee",
  "country": "CA",
  "coord": {
    "lon": -76.94944,
    "lat": 44.250118
  }
}, {
  "id": 6050619,
  "name": "Laval-des-Rapides",
  "country": "CA",
  "coord": {
    "lon": -73.699181,
    "lat": 45.550079
  }
}, {
  "id": 6139184,
  "name": "Saint-Vincent-de-Paul",
  "country": "CA",
  "coord": {
    "lon": -73.649178,
    "lat": 45.616779
  }
}, {
  "id": 6101546,
  "name": "Perth",
  "country": "CA",
  "coord": {
    "lon": -76.24939,
    "lat": 44.900108
  }
}, {
  "id": 5937612,
  "name": "Delson",
  "country": "CA",
  "coord": {
    "lon": -73.549171,
    "lat": 45.366779
  }
}, {
  "id": 6107761,
  "name": "Point Edward",
  "country": "CA",
  "coord": {
    "lon": -82.399834,
    "lat": 43.00008
  }
}, {
  "id": 5890542,
  "name": "Baie-DUrfe",
  "country": "CA",
  "coord": {
    "lon": -73.915863,
    "lat": 45.413971
  }
}, {
  "id": 6103581,
  "name": "Petrolia",
  "country": "CA",
  "coord": {
    "lon": -82.149811,
    "lat": 42.866779
  }
}, {
  "id": 6170584,
  "name": "Turtleford",
  "country": "CA",
  "coord": {
    "lon": -108.951439,
    "lat": 53.38348
  }
}, {
  "id": 6087579,
  "name": "New Glasgow",
  "country": "CA",
  "coord": {
    "lon": -62.648628,
    "lat": 45.583439
  }
}, {
  "id": 6095416,
  "name": "Outlook",
  "country": "CA",
  "coord": {
    "lon": -107.051277,
    "lat": 51.50008
  }
}, {
  "id": 5916786,
  "name": "Cardinal",
  "country": "CA",
  "coord": {
    "lon": -75.382629,
    "lat": 44.783409
  }
}, {
  "id": 6067959,
  "name": "Mattawa",
  "country": "CA",
  "coord": {
    "lon": -78.69957,
    "lat": 46.316811
  }
}, {
  "id": 5882142,
  "name": "Acton Vale",
  "country": "CA",
  "coord": {
    "lon": -72.565819,
    "lat": 45.65007
  }
}, {
  "id": 5962442,
  "name": "Goderich",
  "country": "CA",
  "coord": {
    "lon": -81.716476,
    "lat": 43.75008
  }
}, {
  "id": 6139216,
  "name": "Saint-Zotique",
  "country": "CA",
  "coord": {
    "lon": -74.249237,
    "lat": 45.250092
  }
}, {
  "id": 6078636,
  "name": "Morinville",
  "country": "CA",
  "coord": {
    "lon": -113.652031,
    "lat": 53.80014
  }
}, {
  "id": 6073749,
  "name": "Millbrook",
  "country": "CA",
  "coord": {
    "lon": -78.449539,
    "lat": 44.15012
  }
}, {
  "id": 6137696,
  "name": "Sainte-Adele",
  "country": "CA",
  "coord": {
    "lon": -74.132507,
    "lat": 45.950081
  }
}, {
  "id": 6115144,
  "name": "Queenston",
  "country": "CA",
  "coord": {
    "lon": -79.049568,
    "lat": 43.166821
  }
}, {
  "id": 6118091,
  "name": "Redcliff",
  "country": "CA",
  "coord": {
    "lon": -110.78495,
    "lat": 50.083359
  }
}, {
  "id": 6138815,
  "name": "Saint-Nazaire",
  "country": "CA",
  "coord": {
    "lon": -71.549088,
    "lat": 48.583389
  }
}, {
  "id": 5924109,
  "name": "Cloridorme",
  "country": "CA",
  "coord": {
    "lon": -64.91539,
    "lat": 49.166801
  }
}, {
  "id": 4006702,
  "name": "Ensenada",
  "country": "MX",
  "coord": {
    "lon": -116.616669,
    "lat": 31.866671
  }
}, {
  "id": 4008303,
  "name": "El Pueblito",
  "country": "MX",
  "coord": {
    "lon": -100.449997,
    "lat": 20.533331
  }
}, {
  "id": 3514780,
  "name": "Estado de Veracruz-Llave",
  "country": "MX",
  "coord": {
    "lon": -96.666672,
    "lat": 19.33333
  }
}, {
  "id": 3992619,
  "name": "Piedras Negras",
  "country": "MX",
  "coord": {
    "lon": -100.51667,
    "lat": 28.700001
  }
}, {
  "id": 3522509,
  "name": "Estado de Oaxaca",
  "country": "MX",
  "coord": {
    "lon": -96.5,
    "lat": 17
  }
}, {
  "id": 3531732,
  "name": "Campeche",
  "country": "MX",
  "coord": {
    "lon": -90.533333,
    "lat": 19.85
  }
}, {
  "id": 4003626,
  "name": "La Albarrada",
  "country": "MX",
  "coord": {
    "lon": -103.716667,
    "lat": 19.23333
  }
}, {
  "id": 3998655,
  "name": "Leon",
  "country": "MX",
  "coord": {
    "lon": -101.666672,
    "lat": 21.116671
  }
}, {
  "id": 3995523,
  "name": "Monclova",
  "country": "MX",
  "coord": {
    "lon": -101.416672,
    "lat": 26.9
  }
}, {
  "id": 3996472,
  "name": "Mascota",
  "country": "MX",
  "coord": {
    "lon": -104.783333,
    "lat": 20.51667
  }
}, {
  "id": 4019231,
  "name": "Estado de Aguascalientes",
  "country": "MX",
  "coord": {
    "lon": -102.5,
    "lat": 22
  }
}, {
  "id": 3816237,
  "name": "Ocosingo",
  "country": "MX",
  "coord": {
    "lon": -92.038887,
    "lat": 16.90556
  }
}, {
  "id": 4000915,
  "name": "La Partida",
  "country": "MX",
  "coord": {
    "lon": -103.283333,
    "lat": 25.58333
  }
}, {
  "id": 3530757,
  "name": "Cholula",
  "country": "MX",
  "coord": {
    "lon": -98.30352,
    "lat": 19.06406
  }
}, {
  "id": 3988214,
  "name": "Salamanca",
  "country": "MX",
  "coord": {
    "lon": -101.199997,
    "lat": 20.566669
  }
}, {
  "id": 3526621,
  "name": "Jalapa",
  "country": "MX",
  "coord": {
    "lon": -95.466667,
    "lat": 16.5
  }
}, {
  "id": 3981254,
  "name": "Torreon",
  "country": "MX",
  "coord": {
    "lon": -103.433327,
    "lat": 25.549999
  }
}, {
  "id": 6942826,
  "name": "La Paz",
  "country": "MX",
  "coord": {
    "lon": -110.300003,
    "lat": 24.133329
  }
}, {
  "id": 4012176,
  "name": "Culiacan",
  "country": "MX",
  "coord": {
    "lon": -107.389717,
    "lat": 24.79944
  }
}, {
  "id": 4008420,
  "name": "El Potosí",
  "country": "MX",
  "coord": {
    "lon": -100.316673,
    "lat": 24.85
  }
}, {
  "id": 3992212,
  "name": "Poncitlan",
  "country": "MX",
  "coord": {
    "lon": -102.916672,
    "lat": 20.366671
  }
}, {
  "id": 3514031,
  "name": "Zimapan",
  "country": "MX",
  "coord": {
    "lon": -99.349998,
    "lat": 20.75
  }
}, {
  "id": 3526957,
  "name": "Huehuetoca",
  "country": "MX",
  "coord": {
    "lon": -99.20417,
    "lat": 19.84889
  }
}, {
  "id": 3984717,
  "name": "Santa Ana",
  "country": "MX",
  "coord": {
    "lon": -111.116669,
    "lat": 30.549999
  }
}, {
  "id": 3514876,
  "name": "Valladolid",
  "country": "MX",
  "coord": {
    "lon": -88.199364,
    "lat": 20.68812
  }
}, {
  "id": 3515062,
  "name": "Tulancingo",
  "country": "MX",
  "coord": {
    "lon": -98.366669,
    "lat": 20.08333
  }
}, {
  "id": 3515904,
  "name": "Tepeaca",
  "country": "MX",
  "coord": {
    "lon": -97.900002,
    "lat": 18.966669
  }
}, {
  "id": 3827341,
  "name": "Tres Marias",
  "country": "MX",
  "coord": {
    "lon": -99.243057,
    "lat": 19.052219
  }
}, {
  "id": 4013724,
  "name": "Ciudad Camargo",
  "country": "MX",
  "coord": {
    "lon": -105.166672,
    "lat": 27.66667
  }
}, {
  "id": 3527021,
  "name": "Hualahuises",
  "country": "MX",
  "coord": {
    "lon": -99.673332,
    "lat": 24.88472
  }
}, {
  "id": 3977811,
  "name": "Minas de Barroteran",
  "country": "MX",
  "coord": {
    "lon": -101.283333,
    "lat": 27.633329
  }
}, {
  "id": 3527164,
  "name": "Halacho",
  "country": "MX",
  "coord": {
    "lon": -90.083328,
    "lat": 20.48333
  }
}, {
  "id": 4006532,
  "name": "Esqueda",
  "country": "MX",
  "coord": {
    "lon": -109.583328,
    "lat": 30.716669
  }
}, {
  "id": 2930817,
  "name": "Elp",
  "country": "DE",
  "coord": {
    "lon": 7,
    "lat": 51.200001
  }
}, {
  "id": 2911297,
  "name": "Freie und Hansestadt Hamburg",
  "country": "DE",
  "coord": {
    "lon": 10,
    "lat": 53.583328
  }
}, {
  "id": 2956829,
  "name": "Altstadt",
  "country": "DE",
  "coord": {
    "lon": 10,
    "lat": 53.549999
  }
}, {
  "id": 2812833,
  "name": "Weihenstephan",
  "country": "DE",
  "coord": {
    "lon": 11.73333,
    "lat": 48.400002
  }
}, {
  "id": 2939256,
  "name": "Dambach",
  "country": "DE",
  "coord": {
    "lon": 10.97363,
    "lat": 49.46349
  }
}, {
  "id": 2815239,
  "name": "Walburger",
  "country": "DE",
  "coord": {
    "lon": 8.11667,
    "lat": 51.583328
  }
}, {
  "id": 2852456,
  "name": "Landkreis Potsdam-Mittelmark",
  "country": "DE",
  "coord": {
    "lon": 12.675,
    "lat": 52.21944
  }
}, {
  "id": 6547684,
  "name": "Stahnsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.1918,
    "lat": 52.358501
  }
}, {
  "id": 2829657,
  "name": "Stahnsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.21667,
    "lat": 52.383331
  }
}, {
  "id": 3249071,
  "name": "Kreisfreie Stadt Lübeck",
  "country": "DE",
  "coord": {
    "lon": 10.74361,
    "lat": 53.89333
  }
}, {
  "id": 2875601,
  "name": "Luebeck",
  "country": "DE",
  "coord": {
    "lon": 10.68729,
    "lat": 53.868931
  }
}, {
  "id": 3221033,
  "name": "Landkreis Hannover",
  "country": "DE",
  "coord": {
    "lon": 9.74,
    "lat": 52.448891
  }
}, {
  "id": 6547528,
  "name": "Wadgassen",
  "country": "DE",
  "coord": {
    "lon": 6.78333,
    "lat": 49.266701
  }
}, {
  "id": 2837291,
  "name": "Schneverdingen",
  "country": "DE",
  "coord": {
    "lon": 9.8,
    "lat": 53.116669
  }
}, {
  "id": 2944388,
  "name": "Bremen",
  "country": "DE",
  "coord": {
    "lon": 8.80777,
    "lat": 53.075161
  }
}, {
  "id": 3220966,
  "name": "Landkreis Darmstadt-Dieburg",
  "country": "DE",
  "coord": {
    "lon": 8.75667,
    "lat": 49.856392
  }
}, {
  "id": 6553169,
  "name": "Roßdorf",
  "country": "DE",
  "coord": {
    "lon": 8.7441,
    "lat": 49.862301
  }
}, {
  "id": 2844756,
  "name": "Rossdorf",
  "country": "DE",
  "coord": {
    "lon": 8.76167,
    "lat": 49.859718
  }
}, {
  "id": 2930220,
  "name": "Engelshof",
  "country": "DE",
  "coord": {
    "lon": 7.75,
    "lat": 49.450001
  }
}, {
  "id": 2955486,
  "name": "Arnoldsweiler",
  "country": "DE",
  "coord": {
    "lon": 6.48992,
    "lat": 50.838089
  }
}, {
  "id": 3220811,
  "name": "Landkreis Landshut",
  "country": "DE",
  "coord": {
    "lon": 12.18056,
    "lat": 48.57056
  }
}, {
  "id": 6556508,
  "name": "Kumhausen",
  "country": "DE",
  "coord": {
    "lon": 12.1667,
    "lat": 48.5
  }
}, {
  "id": 2882563,
  "name": "Kumhausen",
  "country": "DE",
  "coord": {
    "lon": 12.16667,
    "lat": 48.5
  }
}, {
  "id": 2814775,
  "name": "Waldstetten",
  "country": "DE",
  "coord": {
    "lon": 9.82135,
    "lat": 48.766151
  }
}, {
  "id": 2941383,
  "name": "Bürgerfeld",
  "country": "DE",
  "coord": {
    "lon": 8.2,
    "lat": 53.166672
  }
}, {
  "id": 2895992,
  "name": "Ingolstadt",
  "country": "DE",
  "coord": {
    "lon": 11.43333,
    "lat": 48.76667
  }
}, {
  "id": 2879690,
  "name": "Leerort",
  "country": "DE",
  "coord": {
    "lon": 7.43333,
    "lat": 53.216671
  }
}, {
  "id": 2813383,
  "name": "Wegeleben",
  "country": "DE",
  "coord": {
    "lon": 11.16667,
    "lat": 51.883331
  }
}, {
  "id": 2853304,
  "name": "Plätz",
  "country": "DE",
  "coord": {
    "lon": 11.88669,
    "lat": 52.738468
  }
}, {
  "id": 2813308,
  "name": "Wehingen",
  "country": "DE",
  "coord": {
    "lon": 8.79151,
    "lat": 48.145329
  }
}, {
  "id": 3220890,
  "name": "Kreisfreie Stadt Aschaffenburg",
  "country": "DE",
  "coord": {
    "lon": 9.14778,
    "lat": 49.966942
  }
}, {
  "id": 3221017,
  "name": "Landkreis Peine",
  "country": "DE",
  "coord": {
    "lon": 10.26111,
    "lat": 52.317219
  }
}, {
  "id": 6557392,
  "name": "Peine, Stadt",
  "country": "DE",
  "coord": {
    "lon": 10.23065,
    "lat": 52.323299
  }
}, {
  "id": 2885552,
  "name": "Köppern",
  "country": "DE",
  "coord": {
    "lon": 8.64967,
    "lat": 50.274311
  }
}, {
  "id": 2933789,
  "name": "Echterdingen",
  "country": "DE",
  "coord": {
    "lon": 9.16775,
    "lat": 48.688438
  }
}, {
  "id": 2905496,
  "name": "Herzberg am Harz",
  "country": "DE",
  "coord": {
    "lon": 10.33333,
    "lat": 51.650002
  }
}, {
  "id": 2866322,
  "name": "Netze",
  "country": "DE",
  "coord": {
    "lon": 9.0941,
    "lat": 51.223598
  }
}, {
  "id": 2949078,
  "name": "Bierstraß",
  "country": "DE",
  "coord": {
    "lon": 6.1,
    "lat": 50.866669
  }
}, {
  "id": 2807465,
  "name": "Wismar",
  "country": "DE",
  "coord": {
    "lon": 11.46667,
    "lat": 53.900002
  }
}, {
  "id": 6555249,
  "name": "Maxdorf",
  "country": "DE",
  "coord": {
    "lon": 8.29167,
    "lat": 49.488098
  }
}, {
  "id": 2872686,
  "name": "Maxdorf",
  "country": "DE",
  "coord": {
    "lon": 8.29167,
    "lat": 49.48806
  }
}, {
  "id": 3220995,
  "name": "Kreisfreie Stadt Kassel",
  "country": "DE",
  "coord": {
    "lon": 9.46722,
    "lat": 51.32111
  }
}, {
  "id": 2906464,
  "name": "Hengersberg",
  "country": "DE",
  "coord": {
    "lon": 13.05,
    "lat": 48.783329
  }
}, {
  "id": 2857792,
  "name": "Offenhausen",
  "country": "DE",
  "coord": {
    "lon": 10.02258,
    "lat": 48.40163
  }
}, {
  "id": 2860051,
  "name": "Oberknöringen",
  "country": "DE",
  "coord": {
    "lon": 10.4,
    "lat": 48.433331
  }
}, {
  "id": 2839420,
  "name": "Schierenbrink",
  "country": "DE",
  "coord": {
    "lon": 8.85,
    "lat": 52.166672
  }
}, {
  "id": 2929670,
  "name": "Erfurt",
  "country": "DE",
  "coord": {
    "lon": 11.03333,
    "lat": 50.98333
  }
}, {
  "id": 2938323,
  "name": "Delmenhorst",
  "country": "DE",
  "coord": {
    "lon": 8.61667,
    "lat": 53.049999
  }
}, {
  "id": 6556329,
  "name": "Unterföhring",
  "country": "DE",
  "coord": {
    "lon": 11.6584,
    "lat": 48.1884
  }
}, {
  "id": 2819568,
  "name": "Unterfohring",
  "country": "DE",
  "coord": {
    "lon": 11.64293,
    "lat": 48.192532
  }
}, {
  "id": 2944012,
  "name": "Brock",
  "country": "DE",
  "coord": {
    "lon": 7.78333,
    "lat": 51.833328
  }
}, {
  "id": 2934955,
  "name": "Driesch",
  "country": "DE",
  "coord": {
    "lon": 7.2,
    "lat": 50.799999
  }
}, {
  "id": 2808148,
  "name": "Windischeschenbach",
  "country": "DE",
  "coord": {
    "lon": 12.15889,
    "lat": 49.799721
  }
}, {
  "id": 2806654,
  "name": "Wolfsburg",
  "country": "DE",
  "coord": {
    "lon": 10.8,
    "lat": 52.433331
  }
}, {
  "id": 2890155,
  "name": "Kitzscher",
  "country": "DE",
  "coord": {
    "lon": 12.56667,
    "lat": 51.166672
  }
}, {
  "id": 2948652,
  "name": "Birkenau",
  "country": "DE",
  "coord": {
    "lon": 8.70694,
    "lat": 49.5625
  }
}, {
  "id": 3220830,
  "name": "Landkreis Eichstätt",
  "country": "DE",
  "coord": {
    "lon": 11.37528,
    "lat": 48.909168
  }
}, {
  "id": 6556171,
  "name": "Lenting",
  "country": "DE",
  "coord": {
    "lon": 11.4667,
    "lat": 48.799999
  }
}, {
  "id": 2878751,
  "name": "Lenting",
  "country": "DE",
  "coord": {
    "lon": 11.46667,
    "lat": 48.799999
  }
}, {
  "id": 2824732,
  "name": "Sulzgries",
  "country": "DE",
  "coord": {
    "lon": 9.29804,
    "lat": 48.75602
  }
}, {
  "id": 6556320,
  "name": "Oberschleißheim",
  "country": "DE",
  "coord": {
    "lon": 11.5677,
    "lat": 48.248798
  }
}, {
  "id": 2859147,
  "name": "Oberschleissheim",
  "country": "DE",
  "coord": {
    "lon": 11.56667,
    "lat": 48.25
  }
}, {
  "id": 3205790,
  "name": "Brömmenkamp",
  "country": "DE",
  "coord": {
    "lon": 6.73333,
    "lat": 51.566669
  }
}, {
  "id": 6555704,
  "name": "Ispringen",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 48.916698
  }
}, {
  "id": 2895636,
  "name": "Ispringen",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 48.916672
  }
}, {
  "id": 2950881,
  "name": "Berchtesgaden",
  "country": "DE",
  "coord": {
    "lon": 13,
    "lat": 47.633331
  }
}, {
  "id": 2920203,
  "name": "Glane",
  "country": "DE",
  "coord": {
    "lon": 8.05,
    "lat": 52.150002
  }
}, {
  "id": 2917833,
  "name": "Greding",
  "country": "DE",
  "coord": {
    "lon": 11.36139,
    "lat": 49.048328
  }
}, {
  "id": 3274966,
  "name": "Lauda-Konigshofen",
  "country": "DE",
  "coord": {
    "lon": 9.70417,
    "lat": 49.565281
  }
}, {
  "id": 2847686,
  "name": "Rheden",
  "country": "DE",
  "coord": {
    "lon": 9.78333,
    "lat": 52.066669
  }
}, {
  "id": 2853657,
  "name": "Kreis Pinneberg",
  "country": "DE",
  "coord": {
    "lon": 9.75722,
    "lat": 53.73444
  }
}, {
  "id": 6551708,
  "name": "Tangstedt",
  "country": "DE",
  "coord": {
    "lon": 9.85,
    "lat": 53.666698
  }
}, {
  "id": 2824246,
  "name": "Tangstedt",
  "country": "DE",
  "coord": {
    "lon": 9.85,
    "lat": 53.666672
  }
}, {
  "id": 3220752,
  "name": "Landkreis Ludwigsburg",
  "country": "DE",
  "coord": {
    "lon": 9.13333,
    "lat": 48.916672
  }
}, {
  "id": 6555489,
  "name": "Schwieberdingen",
  "country": "DE",
  "coord": {
    "lon": 9.07451,
    "lat": 48.876129
  }
}, {
  "id": 2834226,
  "name": "Schwieberdingen",
  "country": "DE",
  "coord": {
    "lon": 9.07439,
    "lat": 48.876438
  }
}, {
  "id": 2917698,
  "name": "Grenzach-Wyhlen",
  "country": "DE",
  "coord": {
    "lon": 7.68333,
    "lat": 47.549999
  }
}, {
  "id": 2812084,
  "name": "Weisenheim am Sand",
  "country": "DE",
  "coord": {
    "lon": 8.24778,
    "lat": 49.518059
  }
}, {
  "id": 6556312,
  "name": "Grasbrunn",
  "country": "DE",
  "coord": {
    "lon": 11.75,
    "lat": 48.083302
  }
}, {
  "id": 2918037,
  "name": "Grasbrunn",
  "country": "DE",
  "coord": {
    "lon": 11.74361,
    "lat": 48.079048
  }
}, {
  "id": 3247458,
  "name": "Landkreis Neuwied",
  "country": "DE",
  "coord": {
    "lon": 7.47806,
    "lat": 50.53944
  }
}, {
  "id": 6553853,
  "name": "Rengsdorf",
  "country": "DE",
  "coord": {
    "lon": 7.5,
    "lat": 50.5
  }
}, {
  "id": 2848215,
  "name": "Rengsdorf",
  "country": "DE",
  "coord": {
    "lon": 7.5,
    "lat": 50.5
  }
}, {
  "id": 2862620,
  "name": "Nienburg",
  "country": "DE",
  "coord": {
    "lon": 9.21667,
    "lat": 52.633331
  }
}, {
  "id": 2930341,
  "name": "Engbrück",
  "country": "DE",
  "coord": {
    "lon": 6.51667,
    "lat": 51.183331
  }
}, {
  "id": 2941501,
  "name": "Burg bei Magdeburg",
  "country": "DE",
  "coord": {
    "lon": 11.85493,
    "lat": 52.271519
  }
}, {
  "id": 2895044,
  "name": "Jena",
  "country": "DE",
  "coord": {
    "lon": 11.58333,
    "lat": 50.933331
  }
}, {
  "id": 6556231,
  "name": "Olching",
  "country": "DE",
  "coord": {
    "lon": 11.32783,
    "lat": 48.207829
  }
}, {
  "id": 2907851,
  "name": "Heidenheim an der Brenz",
  "country": "DE",
  "coord": {
    "lon": 10.15162,
    "lat": 48.677979
  }
}, {
  "id": 6555416,
  "name": "Denkendorf",
  "country": "DE",
  "coord": {
    "lon": 9.31847,
    "lat": 48.695271
  }
}, {
  "id": 2938253,
  "name": "Denkendorf",
  "country": "DE",
  "coord": {
    "lon": 9.31675,
    "lat": 48.695549
  }
}, {
  "id": 2948164,
  "name": "Bitterfeld",
  "country": "DE",
  "coord": {
    "lon": 12.31667,
    "lat": 51.616669
  }
}, {
  "id": 2812502,
  "name": "Weil im Schonbuch",
  "country": "DE",
  "coord": {
    "lon": 9.06355,
    "lat": 48.6227
  }
}, {
  "id": 2958802,
  "name": "Alterhofen",
  "country": "DE",
  "coord": {
    "lon": 12.62012,
    "lat": 48.846588
  }
}, {
  "id": 2949803,
  "name": "Besigheim",
  "country": "DE",
  "coord": {
    "lon": 9.13333,
    "lat": 48.98333
  }
}, {
  "id": 2942187,
  "name": "Buchwald",
  "country": "DE",
  "coord": {
    "lon": 14.01667,
    "lat": 51.51667
  }
}, {
  "id": 2938540,
  "name": "Deggendorf",
  "country": "DE",
  "coord": {
    "lon": 12.96667,
    "lat": 48.833328
  }
}, {
  "id": 2918752,
  "name": "Gotha",
  "country": "DE",
  "coord": {
    "lon": 10.70193,
    "lat": 50.948231
  }
}, {
  "id": 2959927,
  "name": "Aalen",
  "country": "DE",
  "coord": {
    "lon": 10.0933,
    "lat": 48.837769
  }
}, {
  "id": 2873632,
  "name": "Marienberg",
  "country": "DE",
  "coord": {
    "lon": 13.16667,
    "lat": 50.650002
  }
}, {
  "id": 2838939,
  "name": "Schlaitdorf",
  "country": "DE",
  "coord": {
    "lon": 9.22268,
    "lat": 48.604309
  }
}, {
  "id": 2941119,
  "name": "Burgstall",
  "country": "DE",
  "coord": {
    "lon": 10.87672,
    "lat": 49.550049
  }
}, {
  "id": 2925101,
  "name": "Freiheit",
  "country": "DE",
  "coord": {
    "lon": 8.98333,
    "lat": 54.76667
  }
}, {
  "id": 2922363,
  "name": "Gasteig",
  "country": "DE",
  "coord": {
    "lon": 12.13333,
    "lat": 47.783329
  }
}, {
  "id": 7669417,
  "name": "St. Mang",
  "country": "DE",
  "coord": {
    "lon": 10.32629,
    "lat": 47.71265
  }
}, {
  "id": 2891972,
  "name": "Keferloh",
  "country": "DE",
  "coord": {
    "lon": 11.72748,
    "lat": 48.095051
  }
}, {
  "id": 6556206,
  "name": "Kranzberg",
  "country": "DE",
  "coord": {
    "lon": 11.6167,
    "lat": 48.400002
  }
}, {
  "id": 2884739,
  "name": "Kranzberg",
  "country": "DE",
  "coord": {
    "lon": 11.61246,
    "lat": 48.406132
  }
}, {
  "id": 2892356,
  "name": "Katrepel",
  "country": "DE",
  "coord": {
    "lon": 8.91667,
    "lat": 53.133331
  }
}, {
  "id": 2873759,
  "name": "Marburg an der Lahn",
  "country": "DE",
  "coord": {
    "lon": 8.76667,
    "lat": 50.816669
  }
}, {
  "id": 2824801,
  "name": "Sulzbach-Rosenberg",
  "country": "DE",
  "coord": {
    "lon": 11.75167,
    "lat": 49.498329
  }
}, {
  "id": 2891339,
  "name": "Ketschendorf",
  "country": "DE",
  "coord": {
    "lon": 10.96667,
    "lat": 50.25
  }
}, {
  "id": 2933618,
  "name": "Eckersbach",
  "country": "DE",
  "coord": {
    "lon": 12.5,
    "lat": 50.73333
  }
}, {
  "id": 2835421,
  "name": "Schwaig",
  "country": "DE",
  "coord": {
    "lon": 11.20111,
    "lat": 49.46944
  }
}, {
  "id": 2840293,
  "name": "Scharnhausen",
  "country": "DE",
  "coord": {
    "lon": 9.26293,
    "lat": 48.70739
  }
}, {
  "id": 2850539,
  "name": "Ramstein",
  "country": "DE",
  "coord": {
    "lon": 7.53333,
    "lat": 49.450001
  }
}, {
  "id": 2861315,
  "name": "Oberbehme",
  "country": "DE",
  "coord": {
    "lon": 8.66667,
    "lat": 52.183331
  }
}, {
  "id": 2927939,
  "name": "Falkenkrug",
  "country": "DE",
  "coord": {
    "lon": 8.89652,
    "lat": 51.933208
  }
}, {
  "id": 2944368,
  "name": "Bremerhaven",
  "country": "DE",
  "coord": {
    "lon": 8.58333,
    "lat": 53.549999
  }
}, {
  "id": 2821416,
  "name": "Trebur",
  "country": "DE",
  "coord": {
    "lon": 8.41611,
    "lat": 49.93111
  }
}, {
  "id": 2952406,
  "name": "Barsinghausen",
  "country": "DE",
  "coord": {
    "lon": 9.45,
    "lat": 52.299999
  }
}, {
  "id": 6555290,
  "name": "Nieder-Olm",
  "country": "DE",
  "coord": {
    "lon": 8.21333,
    "lat": 49.9142
  }
}, {
  "id": 2863014,
  "name": "Nieder-Olm",
  "country": "DE",
  "coord": {
    "lon": 8.20533,
    "lat": 49.911659
  }
}, {
  "id": 2837150,
  "name": "Schöller",
  "country": "DE",
  "coord": {
    "lon": 7.01667,
    "lat": 51.23333
  }
}, {
  "id": 2945358,
  "name": "Brandenburg an der Havel",
  "country": "DE",
  "coord": {
    "lon": 12.55,
    "lat": 52.416672
  }
}, {
  "id": 2844588,
  "name": "Rostock",
  "country": "DE",
  "coord": {
    "lon": 12.14049,
    "lat": 54.088699
  }
}, {
  "id": 2814374,
  "name": "Walthersdorf",
  "country": "DE",
  "coord": {
    "lon": 12.96667,
    "lat": 50.549999
  }
}, {
  "id": 2859846,
  "name": "Oberlüghausen",
  "country": "DE",
  "coord": {
    "lon": 7.20154,
    "lat": 50.901649
  }
}, {
  "id": 2954804,
  "name": "Au",
  "country": "DE",
  "coord": {
    "lon": 12.13333,
    "lat": 47.849998
  }
}, {
  "id": 2893237,
  "name": "Kandern",
  "country": "DE",
  "coord": {
    "lon": 7.66667,
    "lat": 47.716671
  }
}, {
  "id": 2872155,
  "name": "Meissen",
  "country": "DE",
  "coord": {
    "lon": 13.4737,
    "lat": 51.161579
  }
}, {
  "id": 2813040,
  "name": "Weiden",
  "country": "DE",
  "coord": {
    "lon": 12.15667,
    "lat": 49.677502
  }
}, {
  "id": 2836089,
  "name": "Schriesheim",
  "country": "DE",
  "coord": {
    "lon": 8.67278,
    "lat": 49.477779
  }
}, {
  "id": 6554391,
  "name": "Landscheid",
  "country": "DE",
  "coord": {
    "lon": 6.76667,
    "lat": 49.983299
  }
}, {
  "id": 2881500,
  "name": "Landscheid",
  "country": "DE",
  "coord": {
    "lon": 6.76667,
    "lat": 49.98333
  }
}, {
  "id": 2948290,
  "name": "Bischofsheim",
  "country": "DE",
  "coord": {
    "lon": 8.36722,
    "lat": 49.993889
  }
}, {
  "id": 2911144,
  "name": "Hammerbühl",
  "country": "DE",
  "coord": {
    "lon": 11.28333,
    "lat": 49.700001
  }
}, {
  "id": 2949612,
  "name": "Beuerlbach",
  "country": "DE",
  "coord": {
    "lon": 10.09137,
    "lat": 49.156391
  }
}, {
  "id": 2847889,
  "name": "Reußen",
  "country": "DE",
  "coord": {
    "lon": 12.1,
    "lat": 51.083328
  }
}, {
  "id": 2871813,
  "name": "Mering",
  "country": "DE",
  "coord": {
    "lon": 10.98461,
    "lat": 48.265598
  }
}, {
  "id": 6556951,
  "name": "Kleinostheim",
  "country": "DE",
  "coord": {
    "lon": 9.06195,
    "lat": 50.002701
  }
}, {
  "id": 2930695,
  "name": "Elster",
  "country": "DE",
  "coord": {
    "lon": 12.83333,
    "lat": 51.833328
  }
}, {
  "id": 2875014,
  "name": "Luschendorf",
  "country": "DE",
  "coord": {
    "lon": 10.73333,
    "lat": 54
  }
}, {
  "id": 2849913,
  "name": "Raunheim",
  "country": "DE",
  "coord": {
    "lon": 8.45,
    "lat": 50.01667
  }
}, {
  "id": 2902942,
  "name": "Hochstraß",
  "country": "DE",
  "coord": {
    "lon": 6.65,
    "lat": 51.450001
  }
}, {
  "id": 3214112,
  "name": "Landkreis Waldshut",
  "country": "DE",
  "coord": {
    "lon": 8.255,
    "lat": 47.705559
  }
}, {
  "id": 6555919,
  "name": "Rickenbach",
  "country": "DE",
  "coord": {
    "lon": 7.98333,
    "lat": 47.616699
  }
}, {
  "id": 2847442,
  "name": "Rickenbach",
  "country": "DE",
  "coord": {
    "lon": 7.97873,
    "lat": 47.61895
  }
}, {
  "id": 2929350,
  "name": "Ernst",
  "country": "DE",
  "coord": {
    "lon": 7.23333,
    "lat": 50.150002
  }
}, {
  "id": 2847669,
  "name": "Rheinau",
  "country": "DE",
  "coord": {
    "lon": 8.2,
    "lat": 48.866669
  }
}, {
  "id": 2928381,
  "name": "Eutin",
  "country": "DE",
  "coord": {
    "lon": 10.61667,
    "lat": 54.133331
  }
}, {
  "id": 2890957,
  "name": "Kießling",
  "country": "DE",
  "coord": {
    "lon": 11.66667,
    "lat": 50.416672
  }
}, {
  "id": 2852144,
  "name": "Preussisch Oldendorf",
  "country": "DE",
  "coord": {
    "lon": 8.5,
    "lat": 52.299999
  }
}, {
  "id": 3220970,
  "name": "Hochtaunuskreis",
  "country": "DE",
  "coord": {
    "lon": 8.51694,
    "lat": 50.285278
  }
}, {
  "id": 6553182,
  "name": "Wehrheim",
  "country": "DE",
  "coord": {
    "lon": 8.5683,
    "lat": 50.294498
  }
}, {
  "id": 2915372,
  "name": "Grosskrotzenburg",
  "country": "DE",
  "coord": {
    "lon": 8.98333,
    "lat": 50.083328
  }
}, {
  "id": 2871705,
  "name": "Merz",
  "country": "DE",
  "coord": {
    "lon": 14.35,
    "lat": 52.200001
  }
}, {
  "id": 6553143,
  "name": "Wenden",
  "country": "DE",
  "coord": {
    "lon": 7.845,
    "lat": 50.987999
  }
}, {
  "id": 2847604,
  "name": "Rhein-Sieg-Kreis",
  "country": "DE",
  "coord": {
    "lon": 7.26361,
    "lat": 50.75861
  }
}, {
  "id": 2812182,
  "name": "Weingartsgasse",
  "country": "DE",
  "coord": {
    "lon": 7.28565,
    "lat": 50.78838
  }
}, {
  "id": 2803463,
  "name": "Landkreis Aichach-Friedberg",
  "country": "DE",
  "coord": {
    "lon": 11.05472,
    "lat": 48.417221
  }
}, {
  "id": 2927054,
  "name": "Feucht",
  "country": "DE",
  "coord": {
    "lon": 11.21389,
    "lat": 49.376671
  }
}, {
  "id": 3247434,
  "name": "Kreis Neuss",
  "country": "DE",
  "coord": {
    "lon": 6.65389,
    "lat": 51.165279
  }
}, {
  "id": 6556232,
  "name": "Puchheim",
  "country": "DE",
  "coord": {
    "lon": 11.35097,
    "lat": 48.168999
  }
}, {
  "id": 2858326,
  "name": "Ochsenhausen",
  "country": "DE",
  "coord": {
    "lon": 9.95,
    "lat": 48.066669
  }
}, {
  "id": 2809191,
  "name": "Wiesentheid",
  "country": "DE",
  "coord": {
    "lon": 10.35,
    "lat": 49.799999
  }
}, {
  "id": 2934728,
  "name": "Duderstadt",
  "country": "DE",
  "coord": {
    "lon": 10.25951,
    "lat": 51.513119
  }
}, {
  "id": 2855499,
  "name": "Papenmoorland",
  "country": "DE",
  "coord": {
    "lon": 7.95,
    "lat": 53.533329
  }
}, {
  "id": 2934495,
  "name": "Durchhausen",
  "country": "DE",
  "coord": {
    "lon": 8.68333,
    "lat": 48.033329
  }
}, {
  "id": 2930522,
  "name": "Landkreis Emmendingen",
  "country": "DE",
  "coord": {
    "lon": 7.88556,
    "lat": 48.149719
  }
}, {
  "id": 6555768,
  "name": "Malterdingen",
  "country": "DE",
  "coord": {
    "lon": 7.8,
    "lat": 48.166698
  }
}, {
  "id": 2928823,
  "name": "Esseite",
  "country": "DE",
  "coord": {
    "lon": 7.03333,
    "lat": 52.200001
  }
}, {
  "id": 2912266,
  "name": "Hahnenblecher",
  "country": "DE",
  "coord": {
    "lon": 7.11667,
    "lat": 51.049999
  }
}, {
  "id": 2821878,
  "name": "Tonning",
  "country": "DE",
  "coord": {
    "lon": 8.95,
    "lat": 54.316669
  }
}, {
  "id": 2933945,
  "name": "Ebersberg",
  "country": "DE",
  "coord": {
    "lon": 11.97063,
    "lat": 48.077099
  }
}, {
  "id": 6555464,
  "name": "Kuchen",
  "country": "DE",
  "coord": {
    "lon": 9.80011,
    "lat": 48.63586
  }
}, {
  "id": 2883151,
  "name": "Kuchen",
  "country": "DE",
  "coord": {
    "lon": 9.79989,
    "lat": 48.63583
  }
}, {
  "id": 2856408,
  "name": "Osterode",
  "country": "DE",
  "coord": {
    "lon": 10.81667,
    "lat": 51.566669
  }
}, {
  "id": 2891640,
  "name": "Kempenich",
  "country": "DE",
  "coord": {
    "lon": 7.13333,
    "lat": 50.416672
  }
}, {
  "id": 2841707,
  "name": "Sandwisch",
  "country": "DE",
  "coord": {
    "lon": 7.98333,
    "lat": 52.400002
  }
}, {
  "id": 6555415,
  "name": "Deizisau",
  "country": "DE",
  "coord": {
    "lon": 9.38923,
    "lat": 48.713509
  }
}, {
  "id": 2938391,
  "name": "Deizisau",
  "country": "DE",
  "coord": {
    "lon": 9.3861,
    "lat": 48.7122
  }
}, {
  "id": 2875909,
  "name": "Lorch",
  "country": "DE",
  "coord": {
    "lon": 9.6914,
    "lat": 48.798328
  }
}, {
  "id": 6555524,
  "name": "Leingarten",
  "country": "DE",
  "coord": {
    "lon": 9.1089,
    "lat": 49.147449
  }
}, {
  "id": 3220835,
  "name": "Landkreis Miesbach",
  "country": "DE",
  "coord": {
    "lon": 11.81611,
    "lat": 47.771671
  }
}, {
  "id": 6556281,
  "name": "Valley",
  "country": "DE",
  "coord": {
    "lon": 11.7833,
    "lat": 47.900002
  }
}, {
  "id": 2817904,
  "name": "Valley",
  "country": "DE",
  "coord": {
    "lon": 11.77915,
    "lat": 47.893101
  }
}, {
  "id": 2861814,
  "name": "Northeim",
  "country": "DE",
  "coord": {
    "lon": 10,
    "lat": 51.700001
  }
}, {
  "id": 6556895,
  "name": "Schwarzenbruck",
  "country": "DE",
  "coord": {
    "lon": 11.25175,
    "lat": 49.360199
  }
}, {
  "id": 2834955,
  "name": "Schwarzenbruck",
  "country": "DE",
  "coord": {
    "lon": 11.24333,
    "lat": 49.35778
  }
}, {
  "id": 2890278,
  "name": "Kirrweiler",
  "country": "DE",
  "coord": {
    "lon": 8.16556,
    "lat": 49.301941
  }
}, {
  "id": 2827574,
  "name": "Stelle",
  "country": "DE",
  "coord": {
    "lon": 10.11138,
    "lat": 53.384159
  }
}, {
  "id": 2953336,
  "name": "Bad Sooden-Allendorf",
  "country": "DE",
  "coord": {
    "lon": 9.98333,
    "lat": 51.283329
  }
}, {
  "id": 2808277,
  "name": "Windberg",
  "country": "DE",
  "coord": {
    "lon": 6.33333,
    "lat": 51.299999
  }
}, {
  "id": 2829456,
  "name": "Landkreis Starnberg",
  "country": "DE",
  "coord": {
    "lon": 11.29583,
    "lat": 48.014999
  }
}, {
  "id": 6556387,
  "name": "Gauting",
  "country": "DE",
  "coord": {
    "lon": 11.3834,
    "lat": 48.066399
  }
}, {
  "id": 2953775,
  "name": "Babelsberg",
  "country": "DE",
  "coord": {
    "lon": 13.1,
    "lat": 52.400002
  }
}, {
  "id": 2903240,
  "name": "Hochfeld",
  "country": "DE",
  "coord": {
    "lon": 6.96667,
    "lat": 51.666672
  }
}, {
  "id": 6555723,
  "name": "Loßburg",
  "country": "DE",
  "coord": {
    "lon": 8.45,
    "lat": 48.400002
  }
}, {
  "id": 2875815,
  "name": "Lossburg",
  "country": "DE",
  "coord": {
    "lon": 8.45,
    "lat": 48.400002
  }
}, {
  "id": 2908828,
  "name": "Häuser",
  "country": "DE",
  "coord": {
    "lon": 10.26667,
    "lat": 47.549999
  }
}, {
  "id": 2916611,
  "name": "Grossenkneten",
  "country": "DE",
  "coord": {
    "lon": 8.26667,
    "lat": 52.950001
  }
}, {
  "id": 6556307,
  "name": "Aschheim",
  "country": "DE",
  "coord": {
    "lon": 11.72255,
    "lat": 48.171902
  }
}, {
  "id": 2829318,
  "name": "Staufen im Breisgau",
  "country": "DE",
  "coord": {
    "lon": 7.73333,
    "lat": 47.883331
  }
}, {
  "id": 6553312,
  "name": "Hümmel",
  "country": "DE",
  "coord": {
    "lon": 6.78333,
    "lat": 50.466702
  }
}, {
  "id": 2864869,
  "name": "Neuhofen",
  "country": "DE",
  "coord": {
    "lon": 8.42472,
    "lat": 49.42778
  }
}, {
  "id": 2867198,
  "name": "Nagel",
  "country": "DE",
  "coord": {
    "lon": 11.91667,
    "lat": 49.98333
  }
}, {
  "id": 2949694,
  "name": "Bettingerbrück",
  "country": "DE",
  "coord": {
    "lon": 6.85,
    "lat": 49.433331
  }
}, {
  "id": 2812626,
  "name": "Weilburg",
  "country": "DE",
  "coord": {
    "lon": 8.25,
    "lat": 50.48333
  }
}, {
  "id": 2946001,
  "name": "Börstel",
  "country": "DE",
  "coord": {
    "lon": 8.75,
    "lat": 52.216671
  }
}, {
  "id": 2951843,
  "name": "Bayerisch Gmain",
  "country": "DE",
  "coord": {
    "lon": 12.9,
    "lat": 47.716671
  }
}, {
  "id": 2848104,
  "name": "Reppinghausen",
  "country": "DE",
  "coord": {
    "lon": 7.53333,
    "lat": 51.083328
  }
}, {
  "id": 2933792,
  "name": "Echte",
  "country": "DE",
  "coord": {
    "lon": 10.06667,
    "lat": 51.783329
  }
}, {
  "id": 2859002,
  "name": "Obersölden",
  "country": "DE",
  "coord": {
    "lon": 13.48333,
    "lat": 48.583328
  }
}, {
  "id": 2908552,
  "name": "Hebel",
  "country": "DE",
  "coord": {
    "lon": 9.38333,
    "lat": 51.066669
  }
}, {
  "id": 2903624,
  "name": "Hirschhorn",
  "country": "DE",
  "coord": {
    "lon": 7.68333,
    "lat": 49.51667
  }
}, {
  "id": 2850615,
  "name": "Rampoldsdorf",
  "country": "DE",
  "coord": {
    "lon": 12.25,
    "lat": 48.466671
  }
}, {
  "id": 2856816,
  "name": "Ostbevern",
  "country": "DE",
  "coord": {
    "lon": 7.85,
    "lat": 52.049999
  }
}, {
  "id": 2841460,
  "name": "Sankt Wilhelmshütte",
  "country": "DE",
  "coord": {
    "lon": 8.36667,
    "lat": 51.450001
  }
}, {
  "id": 2930350,
  "name": "Enerke",
  "country": "DE",
  "coord": {
    "lon": 7.38333,
    "lat": 51.366669
  }
}, {
  "id": 3208415,
  "name": "Borg",
  "country": "DE",
  "coord": {
    "lon": 7.26667,
    "lat": 52.366669
  }
}, {
  "id": 2925545,
  "name": "Franken Vorstadt",
  "country": "DE",
  "coord": {
    "lon": 13.1,
    "lat": 54.299999
  }
}, {
  "id": 2841693,
  "name": "Sangerhausen",
  "country": "DE",
  "coord": {
    "lon": 11.3,
    "lat": 51.466671
  }
}, {
  "id": 2887240,
  "name": "Knautnaundorf",
  "country": "DE",
  "coord": {
    "lon": 12.27113,
    "lat": 51.25375
  }
}, {
  "id": 2876952,
  "name": "Linz am Rhein",
  "country": "DE",
  "coord": {
    "lon": 7.28333,
    "lat": 50.566669
  }
}, {
  "id": 2867310,
  "name": "Mutterstadt",
  "country": "DE",
  "coord": {
    "lon": 8.35611,
    "lat": 49.441391
  }
}, {
  "id": 2906159,
  "name": "Herchenrath",
  "country": "DE",
  "coord": {
    "lon": 7.36667,
    "lat": 50.883331
  }
}, {
  "id": 6555568,
  "name": "Gerstetten",
  "country": "DE",
  "coord": {
    "lon": 10.0195,
    "lat": 48.624599
  }
}, {
  "id": 2920896,
  "name": "Gerstetten",
  "country": "DE",
  "coord": {
    "lon": 10.03333,
    "lat": 48.633331
  }
}, {
  "id": 6555629,
  "name": "Hügelsheim",
  "country": "DE",
  "coord": {
    "lon": 8.11667,
    "lat": 48.799999
  }
}, {
  "id": 6554594,
  "name": "Reiff",
  "country": "DE",
  "coord": {
    "lon": 6.2,
    "lat": 50.099998
  }
}, {
  "id": 2827238,
  "name": "Stetten",
  "country": "DE",
  "coord": {
    "lon": 9.68106,
    "lat": 48.259602
  }
}, {
  "id": 2920645,
  "name": "Gieboldehausen",
  "country": "DE",
  "coord": {
    "lon": 10.21667,
    "lat": 51.616669
  }
}, {
  "id": 2838459,
  "name": "Schlitz",
  "country": "DE",
  "coord": {
    "lon": 9.56102,
    "lat": 50.67416
  }
}, {
  "id": 2890381,
  "name": "Kirchseeon",
  "country": "DE",
  "coord": {
    "lon": 11.88875,
    "lat": 48.07143
  }
}, {
  "id": 2898316,
  "name": "Hoya",
  "country": "DE",
  "coord": {
    "lon": 9.15,
    "lat": 52.799999
  }
}, {
  "id": 2894341,
  "name": "Kadelburg",
  "country": "DE",
  "coord": {
    "lon": 8.3,
    "lat": 47.616669
  }
}, {
  "id": 2953507,
  "name": "Bad Ems",
  "country": "DE",
  "coord": {
    "lon": 7.71667,
    "lat": 50.333328
  }
}, {
  "id": 2812058,
  "name": "Weiß",
  "country": "DE",
  "coord": {
    "lon": 7.03846,
    "lat": 50.86729
  }
}, {
  "id": 2838059,
  "name": "Schmalkalden",
  "country": "DE",
  "coord": {
    "lon": 10.45,
    "lat": 50.716671
  }
}, {
  "id": 2812482,
  "name": "Weimar",
  "country": "DE",
  "coord": {
    "lon": 11.31667,
    "lat": 50.98333
  }
}, {
  "id": 6556158,
  "name": "Poing",
  "country": "DE",
  "coord": {
    "lon": 11.8053,
    "lat": 48.171101
  }
}, {
  "id": 2852939,
  "name": "Poing",
  "country": "DE",
  "coord": {
    "lon": 11.81863,
    "lat": 48.17004
  }
}, {
  "id": 2924915,
  "name": "Freudenberg",
  "country": "DE",
  "coord": {
    "lon": 7.86667,
    "lat": 50.900002
  }
}, {
  "id": 2827389,
  "name": "Steppach",
  "country": "DE",
  "coord": {
    "lon": 10.83333,
    "lat": 48.383331
  }
}, {
  "id": 2829790,
  "name": "Stadtbergen",
  "country": "DE",
  "coord": {
    "lon": 10.85,
    "lat": 48.366669
  }
}, {
  "id": 2939333,
  "name": "Dalborn",
  "country": "DE",
  "coord": {
    "lon": 8.98424,
    "lat": 51.979172
  }
}, {
  "id": 3249088,
  "name": "Landkreis Prignitz",
  "country": "DE",
  "coord": {
    "lon": 11.98944,
    "lat": 53.11528
  }
}, {
  "id": 6553036,
  "name": "Wachtendonk",
  "country": "DE",
  "coord": {
    "lon": 6.2919,
    "lat": 51.3974
  }
}, {
  "id": 2922511,
  "name": "Garrel",
  "country": "DE",
  "coord": {
    "lon": 8.01667,
    "lat": 52.950001
  }
}, {
  "id": 2930449,
  "name": "Emsdetten",
  "country": "DE",
  "coord": {
    "lon": 7.53333,
    "lat": 52.183331
  }
}, {
  "id": 2844022,
  "name": "Rothenhof",
  "country": "DE",
  "coord": {
    "lon": 11.06667,
    "lat": 50.283329
  }
}, {
  "id": 6553855,
  "name": "Rheinbrohl",
  "country": "DE",
  "coord": {
    "lon": 7.3297,
    "lat": 50.497101
  }
}, {
  "id": 2859675,
  "name": "Obernburg am Main",
  "country": "DE",
  "coord": {
    "lon": 9.14139,
    "lat": 49.84
  }
}, {
  "id": 2918364,
  "name": "Landkreis Freyung-Grafenau",
  "country": "DE",
  "coord": {
    "lon": 13.52083,
    "lat": 48.84306
  }
}, {
  "id": 2918911,
  "name": "Gorwihl",
  "country": "DE",
  "coord": {
    "lon": 8.08333,
    "lat": 47.650002
  }
}, {
  "id": 6556389,
  "name": "Krailling",
  "country": "DE",
  "coord": {
    "lon": 11.4,
    "lat": 48.099998
  }
}, {
  "id": 2821802,
  "name": "Torgelow",
  "country": "DE",
  "coord": {
    "lon": 14.01667,
    "lat": 53.633331
  }
}, {
  "id": 2922362,
  "name": "Gasteig",
  "country": "DE",
  "coord": {
    "lon": 11.40359,
    "lat": 47.861259
  }
}, {
  "id": 2874698,
  "name": "Lüxheim",
  "country": "DE",
  "coord": {
    "lon": 6.63333,
    "lat": 50.76667
  }
}, {
  "id": 2880160,
  "name": "Lauer",
  "country": "DE",
  "coord": {
    "lon": 12.33333,
    "lat": 51.283329
  }
}, {
  "id": 3220859,
  "name": "Landkreis Schwandorf",
  "country": "DE",
  "coord": {
    "lon": 12.26722,
    "lat": 49.388062
  }
}, {
  "id": 6556709,
  "name": "Teunz",
  "country": "DE",
  "coord": {
    "lon": 12.3833,
    "lat": 49.483299
  }
}, {
  "id": 2823257,
  "name": "Teunz",
  "country": "DE",
  "coord": {
    "lon": 12.38333,
    "lat": 49.48333
  }
}, {
  "id": 6556160,
  "name": "Steinhöring",
  "country": "DE",
  "coord": {
    "lon": 12.0333,
    "lat": 48.083302
  }
}, {
  "id": 6547619,
  "name": "Leegebruch",
  "country": "DE",
  "coord": {
    "lon": 13.2,
    "lat": 52.716702
  }
}, {
  "id": 6555682,
  "name": "Edingen-Neckarhausen",
  "country": "DE",
  "coord": {
    "lon": 8.60639,
    "lat": 49.457199
  }
}, {
  "id": 2955836,
  "name": "Anzing",
  "country": "DE",
  "coord": {
    "lon": 12.26761,
    "lat": 47.912689
  }
}, {
  "id": 2906634,
  "name": "Heltersberg",
  "country": "DE",
  "coord": {
    "lon": 7.71667,
    "lat": 49.316669
  }
}, {
  "id": 2853930,
  "name": "Pfullendorf",
  "country": "DE",
  "coord": {
    "lon": 9.25,
    "lat": 47.916672
  }
}, {
  "id": 2911463,
  "name": "Hallstadt",
  "country": "DE",
  "coord": {
    "lon": 10.87539,
    "lat": 49.929008
  }
}, {
  "id": 2850056,
  "name": "Rauenberg",
  "country": "DE",
  "coord": {
    "lon": 8.70417,
    "lat": 49.269718
  }
}, {
  "id": 3220885,
  "name": "Landkreis Lindau",
  "country": "DE",
  "coord": {
    "lon": 9.88139,
    "lat": 47.618061
  }
}, {
  "id": 2953549,
  "name": "Bad Bergzabern",
  "country": "DE",
  "coord": {
    "lon": 8.00092,
    "lat": 49.102451
  }
}, {
  "id": 2885907,
  "name": "Königsbrunn",
  "country": "DE",
  "coord": {
    "lon": 10,
    "lat": 48.583328
  }
}, {
  "id": 2925192,
  "name": "Freiberg",
  "country": "DE",
  "coord": {
    "lon": 13.36667,
    "lat": 50.916672
  }
}, {
  "id": 2918288,
  "name": "Grafenrheinfeld",
  "country": "DE",
  "coord": {
    "lon": 10.2,
    "lat": 50
  }
}, {
  "id": 2863953,
  "name": "Neutraubling",
  "country": "DE",
  "coord": {
    "lon": 12.2,
    "lat": 48.98333
  }
}, {
  "id": 2948671,
  "name": "Birkelbach",
  "country": "DE",
  "coord": {
    "lon": 8.26667,
    "lat": 51.01667
  }
}, {
  "id": 6554909,
  "name": "Kindenheim",
  "country": "DE",
  "coord": {
    "lon": 8.16417,
    "lat": 49.611099
  }
}, {
  "id": 2890874,
  "name": "Kindenheim",
  "country": "DE",
  "coord": {
    "lon": 8.16417,
    "lat": 49.611111
  }
}, {
  "id": 2872173,
  "name": "Meisenheim",
  "country": "DE",
  "coord": {
    "lon": 7.66667,
    "lat": 49.716671
  }
}, {
  "id": 6555401,
  "name": "Nufringen",
  "country": "DE",
  "coord": {
    "lon": 8.88948,
    "lat": 48.622532
  }
}, {
  "id": 2904869,
  "name": "Hiebel",
  "country": "DE",
  "coord": {
    "lon": 12.83333,
    "lat": 48.166672
  }
}, {
  "id": 6555487,
  "name": "Oberstenfeld",
  "country": "DE",
  "coord": {
    "lon": 9.32083,
    "lat": 49.0261
  }
}, {
  "id": 2858906,
  "name": "Oberstenfeld",
  "country": "DE",
  "coord": {
    "lon": 9.32083,
    "lat": 49.026112
  }
}, {
  "id": 2948696,
  "name": "Birkach",
  "country": "DE",
  "coord": {
    "lon": 10.55,
    "lat": 49.150002
  }
}, {
  "id": 2858999,
  "name": "Obersontheim",
  "country": "DE",
  "coord": {
    "lon": 9.89917,
    "lat": 49.056671
  }
}, {
  "id": 2945726,
  "name": "Bovenden",
  "country": "DE",
  "coord": {
    "lon": 9.93333,
    "lat": 51.583328
  }
}, {
  "id": 6553141,
  "name": "Finnentrop",
  "country": "DE",
  "coord": {
    "lon": 7.96667,
    "lat": 51.166698
  }
}, {
  "id": 2956419,
  "name": "Ammerswurth",
  "country": "DE",
  "coord": {
    "lon": 9.06667,
    "lat": 54.083328
  }
}, {
  "id": 2810587,
  "name": "Wessling",
  "country": "DE",
  "coord": {
    "lon": 11.2482,
    "lat": 48.07452
  }
}, {
  "id": 2926870,
  "name": "Filderstadt",
  "country": "DE",
  "coord": {
    "lon": 9.23333,
    "lat": 48.666672
  }
}, {
  "id": 2803689,
  "name": "Zunham",
  "country": "DE",
  "coord": {
    "lon": 12.32855,
    "lat": 47.946758
  }
}, {
  "id": 6555619,
  "name": "Karlsdorf-Neuthard",
  "country": "DE",
  "coord": {
    "lon": 8.53083,
    "lat": 49.135101
  }
}, {
  "id": 2810395,
  "name": "Westeregeln",
  "country": "DE",
  "coord": {
    "lon": 11.4,
    "lat": 51.966671
  }
}, {
  "id": 6553093,
  "name": "Velen",
  "country": "DE",
  "coord": {
    "lon": 6.971,
    "lat": 51.894699
  }
}, {
  "id": 2922008,
  "name": "Gehrden",
  "country": "DE",
  "coord": {
    "lon": 9.60033,
    "lat": 52.313622
  }
}, {
  "id": 2853162,
  "name": "Plon",
  "country": "DE",
  "coord": {
    "lon": 10.41667,
    "lat": 54.166672
  }
}, {
  "id": 2841249,
  "name": "Saubach",
  "country": "DE",
  "coord": {
    "lon": 11.53333,
    "lat": 51.216671
  }
}, {
  "id": 2841661,
  "name": "Sankt Annen",
  "country": "DE",
  "coord": {
    "lon": 9.19865,
    "lat": 52.31588
  }
}, {
  "id": 2845906,
  "name": "Rödlitz",
  "country": "DE",
  "coord": {
    "lon": 12.65,
    "lat": 50.75
  }
}, {
  "id": 2896477,
  "name": "Ilsfeld",
  "country": "DE",
  "coord": {
    "lon": 9.24598,
    "lat": 49.055481
  }
}, {
  "id": 6548564,
  "name": "Hartmannsdorf",
  "country": "DE",
  "coord": {
    "lon": 12.8,
    "lat": 50.900002
  }
}, {
  "id": 2952237,
  "name": "Basthorst",
  "country": "DE",
  "coord": {
    "lon": 10.46667,
    "lat": 53.583328
  }
}, {
  "id": 6554390,
  "name": "Morbach",
  "country": "DE",
  "coord": {
    "lon": 7.0999,
    "lat": 49.820702
  }
}, {
  "id": 2855440,
  "name": "Landkreis Parchim",
  "country": "DE",
  "coord": {
    "lon": 11.82167,
    "lat": 53.433891
  }
}, {
  "id": 6548345,
  "name": "Dobbertin",
  "country": "DE",
  "coord": {
    "lon": 12.0667,
    "lat": 53.633301
  }
}, {
  "id": 6549325,
  "name": "Harsleben",
  "country": "DE",
  "coord": {
    "lon": 11.1,
    "lat": 51.866699
  }
}, {
  "id": 2913225,
  "name": "Haag",
  "country": "DE",
  "coord": {
    "lon": 14.25,
    "lat": 51.433331
  }
}, {
  "id": 2894962,
  "name": "Jessen",
  "country": "DE",
  "coord": {
    "lon": 12.95,
    "lat": 51.783329
  }
}, {
  "id": 2855824,
  "name": "Owen",
  "country": "DE",
  "coord": {
    "lon": 9.45,
    "lat": 48.583328
  }
}, {
  "id": 2908377,
  "name": "Hedern",
  "country": "DE",
  "coord": {
    "lon": 9.41254,
    "lat": 52.768398
  }
}, {
  "id": 2954088,
  "name": "Au in der Hallertau",
  "country": "DE",
  "coord": {
    "lon": 11.75,
    "lat": 48.549999
  }
}, {
  "id": 2953433,
  "name": "Bad Hopfenberg",
  "country": "DE",
  "coord": {
    "lon": 8.96667,
    "lat": 52.383331
  }
}, {
  "id": 2807440,
  "name": "Wissen",
  "country": "DE",
  "coord": {
    "lon": 7.75,
    "lat": 50.783329
  }
}, {
  "id": 2859739,
  "name": "Ober-Morlen",
  "country": "DE",
  "coord": {
    "lon": 8.69087,
    "lat": 50.373501
  }
}, {
  "id": 6552482,
  "name": "Harsum",
  "country": "DE",
  "coord": {
    "lon": 9.96667,
    "lat": 52.216702
  }
}, {
  "id": 2846842,
  "name": "Rietberg",
  "country": "DE",
  "coord": {
    "lon": 8.43333,
    "lat": 51.783329
  }
}, {
  "id": 3220791,
  "name": "Landkreis Ravensburg",
  "country": "DE",
  "coord": {
    "lon": 9.79528,
    "lat": 47.82917
  }
}, {
  "id": 2935602,
  "name": "Dörpe",
  "country": "DE",
  "coord": {
    "lon": 7.3,
    "lat": 51.049999
  }
}, {
  "id": 2847796,
  "name": "Reuters",
  "country": "DE",
  "coord": {
    "lon": 9.36667,
    "lat": 50.683331
  }
}, {
  "id": 2938714,
  "name": "Daun",
  "country": "DE",
  "coord": {
    "lon": 6.83333,
    "lat": 50.200001
  }
}, {
  "id": 6555425,
  "name": "Neckartailfingen",
  "country": "DE",
  "coord": {
    "lon": 9.26418,
    "lat": 48.612
  }
}, {
  "id": 2866779,
  "name": "Neckarbischofsheim",
  "country": "DE",
  "coord": {
    "lon": 8.96333,
    "lat": 49.29528
  }
}, {
  "id": 3220842,
  "name": "Landkreis Weilheim-Schongau",
  "country": "DE",
  "coord": {
    "lon": 11.05528,
    "lat": 47.812222
  }
}, {
  "id": 6556442,
  "name": "Schwabbruck",
  "country": "DE",
  "coord": {
    "lon": 10.8333,
    "lat": 47.833302
  }
}, {
  "id": 6556519,
  "name": "Bruckberg",
  "country": "DE",
  "coord": {
    "lon": 11.9954,
    "lat": 48.5158
  }
}, {
  "id": 2943501,
  "name": "Bruckberg",
  "country": "DE",
  "coord": {
    "lon": 12,
    "lat": 48.533329
  }
}, {
  "id": 2821094,
  "name": "Triptis",
  "country": "DE",
  "coord": {
    "lon": 11.85,
    "lat": 50.73333
  }
}, {
  "id": 2953421,
  "name": "Bad Klosterlausnitz",
  "country": "DE",
  "coord": {
    "lon": 11.86667,
    "lat": 50.916672
  }
}, {
  "id": 6552147,
  "name": "Trappenkamp",
  "country": "DE",
  "coord": {
    "lon": 10.2167,
    "lat": 54.049999
  }
}, {
  "id": 2872580,
  "name": "Meckesheim",
  "country": "DE",
  "coord": {
    "lon": 8.81944,
    "lat": 49.321671
  }
}, {
  "id": 3220898,
  "name": "Landkreis Würzburg",
  "country": "DE",
  "coord": {
    "lon": 9.90333,
    "lat": 49.77306
  }
}, {
  "id": 2920229,
  "name": "Gladenbach",
  "country": "DE",
  "coord": {
    "lon": 8.56667,
    "lat": 50.76667
  }
}, {
  "id": 2855243,
  "name": "Pattensen",
  "country": "DE",
  "coord": {
    "lon": 9.76436,
    "lat": 52.264481
  }
}, {
  "id": 2955604,
  "name": "Argestorf",
  "country": "DE",
  "coord": {
    "lon": 9.58351,
    "lat": 52.261009
  }
}, {
  "id": 2813788,
  "name": "Wassel",
  "country": "DE",
  "coord": {
    "lon": 9.93333,
    "lat": 52.316669
  }
}, {
  "id": 3207377,
  "name": "Mohnesee",
  "country": "DE",
  "coord": {
    "lon": 8.13333,
    "lat": 51.5
  }
}, {
  "id": 2935642,
  "name": "Dornstetten",
  "country": "DE",
  "coord": {
    "lon": 8.5,
    "lat": 48.450001
  }
}, {
  "id": 2852422,
  "name": "Pottmes",
  "country": "DE",
  "coord": {
    "lon": 11.1,
    "lat": 48.583328
  }
}, {
  "id": 2811482,
  "name": "Wellheim",
  "country": "DE",
  "coord": {
    "lon": 11.1,
    "lat": 48.799999
  }
}, {
  "id": 6553075,
  "name": "Morsbach",
  "country": "DE",
  "coord": {
    "lon": 7.71667,
    "lat": 50.866699
  }
}, {
  "id": 2869196,
  "name": "Morsbach",
  "country": "DE",
  "coord": {
    "lon": 7.75,
    "lat": 50.866669
  }
}, {
  "id": 2947133,
  "name": "Bodenheim",
  "country": "DE",
  "coord": {
    "lon": 8.32,
    "lat": 49.93528
  }
}, {
  "id": 2857363,
  "name": "Olfen",
  "country": "DE",
  "coord": {
    "lon": 7.4,
    "lat": 51.700001
  }
}, {
  "id": 2938198,
  "name": "Dentingen",
  "country": "DE",
  "coord": {
    "lon": 9.56373,
    "lat": 48.149139
  }
}, {
  "id": 2835360,
  "name": "Schwalenberg",
  "country": "DE",
  "coord": {
    "lon": 9.2,
    "lat": 51.866669
  }
}, {
  "id": 2851576,
  "name": "Pütz",
  "country": "DE",
  "coord": {
    "lon": 6.51667,
    "lat": 51
  }
}, {
  "id": 2847353,
  "name": "Ried",
  "country": "DE",
  "coord": {
    "lon": 9.6,
    "lat": 47.666672
  }
}, {
  "id": 2932788,
  "name": "Ehringshausen",
  "country": "DE",
  "coord": {
    "lon": 8.38333,
    "lat": 50.599998
  }
}, {
  "id": 2935068,
  "name": "Dreis-Tiefenbach",
  "country": "DE",
  "coord": {
    "lon": 8.06667,
    "lat": 50.916672
  }
}, {
  "id": 2920883,
  "name": "Gerstungen",
  "country": "DE",
  "coord": {
    "lon": 10.06667,
    "lat": 50.966671
  }
}, {
  "id": 6547392,
  "name": "Saalfeld-Rudolstadt",
  "country": "DE",
  "coord": {
    "lon": 11.29036,
    "lat": 50.620312
  }
}, {
  "id": 2919438,
  "name": "Goldbach",
  "country": "DE",
  "coord": {
    "lon": 9.18639,
    "lat": 49.988892
  }
}, {
  "id": 2944800,
  "name": "Breisach am Rhein",
  "country": "DE",
  "coord": {
    "lon": 7.58333,
    "lat": 48.033329
  }
}, {
  "id": 7602437,
  "name": "Baierbrunn",
  "country": "DE",
  "coord": {
    "lon": 11.48689,
    "lat": 48.020302
  }
}, {
  "id": 2955225,
  "name": "Asche",
  "country": "DE",
  "coord": {
    "lon": 9.8,
    "lat": 51.616669
  }
}, {
  "id": 2848873,
  "name": "Reikering",
  "country": "DE",
  "coord": {
    "lon": 12.18333,
    "lat": 47.849998
  }
}, {
  "id": 2931521,
  "name": "Eisenberg",
  "country": "DE",
  "coord": {
    "lon": 11.9,
    "lat": 50.966671
  }
}, {
  "id": 2904591,
  "name": "Hilzingen",
  "country": "DE",
  "coord": {
    "lon": 8.78333,
    "lat": 47.76667
  }
}, {
  "id": 2837075,
  "name": "Schönau",
  "country": "DE",
  "coord": {
    "lon": 11.44509,
    "lat": 47.749191
  }
}, {
  "id": 2871673,
  "name": "Landkreis Merzig-Wadern",
  "country": "DE",
  "coord": {
    "lon": 6.67556,
    "lat": 49.477219
  }
}, {
  "id": 2893952,
  "name": "Kakerbeck",
  "country": "DE",
  "coord": {
    "lon": 10.75,
    "lat": 52.700001
  }
}, {
  "id": 2863064,
  "name": "Niedernetphen",
  "country": "DE",
  "coord": {
    "lon": 8.1,
    "lat": 50.916672
  }
}, {
  "id": 2825410,
  "name": "Stukenbrock",
  "country": "DE",
  "coord": {
    "lon": 8.65594,
    "lat": 51.9114
  }
}, {
  "id": 2827318,
  "name": "Sternenfels",
  "country": "DE",
  "coord": {
    "lon": 8.85083,
    "lat": 49.051392
  }
}, {
  "id": 2953008,
  "name": "Baltmannsweiler",
  "country": "DE",
  "coord": {
    "lon": 9.4494,
    "lat": 48.742149
  }
}, {
  "id": 2933800,
  "name": "Eching",
  "country": "DE",
  "coord": {
    "lon": 11.85305,
    "lat": 48.282509
  }
}, {
  "id": 2930461,
  "name": "Empfingen",
  "country": "DE",
  "coord": {
    "lon": 8.71036,
    "lat": 48.392578
  }
}, {
  "id": 2929424,
  "name": "Andechs",
  "country": "DE",
  "coord": {
    "lon": 11.18333,
    "lat": 47.966671
  }
}, {
  "id": 2901406,
  "name": "Hohentengen am Hochrhein",
  "country": "DE",
  "coord": {
    "lon": 8.43333,
    "lat": 47.566669
  }
}, {
  "id": 2914101,
  "name": "Grunstadt",
  "country": "DE",
  "coord": {
    "lon": 8.16806,
    "lat": 49.569172
  }
}, {
  "id": 6555468,
  "name": "Salach",
  "country": "DE",
  "coord": {
    "lon": 9.73333,
    "lat": 48.6833
  }
}, {
  "id": 2941648,
  "name": "Bunkenburg",
  "country": "DE",
  "coord": {
    "lon": 7.85,
    "lat": 53.433331
  }
}, {
  "id": 2952564,
  "name": "Barleben",
  "country": "DE",
  "coord": {
    "lon": 11.6177,
    "lat": 52.201931
  }
}, {
  "id": 2814599,
  "name": "Wallersdorf",
  "country": "DE",
  "coord": {
    "lon": 12.75,
    "lat": 48.73333
  }
}, {
  "id": 6556820,
  "name": "Neuenmarkt",
  "country": "DE",
  "coord": {
    "lon": 11.6,
    "lat": 50.099998
  }
}, {
  "id": 2865603,
  "name": "Neuenmarkt",
  "country": "DE",
  "coord": {
    "lon": 11.6,
    "lat": 50.099998
  }
}, {
  "id": 6549879,
  "name": "Immelborn",
  "country": "DE",
  "coord": {
    "lon": 10.2833,
    "lat": 50.799999
  }
}, {
  "id": 2885163,
  "name": "Köttenich",
  "country": "DE",
  "coord": {
    "lon": 6.28333,
    "lat": 50.900002
  }
}, {
  "id": 2895731,
  "name": "Irxleben",
  "country": "DE",
  "coord": {
    "lon": 11.48333,
    "lat": 52.166672
  }
}, {
  "id": 6548659,
  "name": "Priestewitz",
  "country": "DE",
  "coord": {
    "lon": 13.5167,
    "lat": 51.25
  }
}, {
  "id": 2929296,
  "name": "Erpenburg",
  "country": "DE",
  "coord": {
    "lon": 8.6,
    "lat": 51.583328
  }
}, {
  "id": 2874263,
  "name": "Mainaschaff",
  "country": "DE",
  "coord": {
    "lon": 9.09,
    "lat": 49.98167
  }
}, {
  "id": 2913693,
  "name": "Gundelsheim",
  "country": "DE",
  "coord": {
    "lon": 9.16194,
    "lat": 49.284439
  }
}, {
  "id": 6555495,
  "name": "Allmersbach im Tal",
  "country": "DE",
  "coord": {
    "lon": 9.4685,
    "lat": 48.906658
  }
}, {
  "id": 2872816,
  "name": "Mauer",
  "country": "DE",
  "coord": {
    "lon": 9.06667,
    "lat": 48.849998
  }
}, {
  "id": 2905878,
  "name": "Heroldsberg",
  "country": "DE",
  "coord": {
    "lon": 11.15556,
    "lat": 49.53389
  }
}, {
  "id": 6555460,
  "name": "Gruibingen",
  "country": "DE",
  "coord": {
    "lon": 9.64376,
    "lat": 48.595032
  }
}, {
  "id": 2845027,
  "name": "Rosenfeld",
  "country": "DE",
  "coord": {
    "lon": 8.72357,
    "lat": 48.286388
  }
}, {
  "id": 2815101,
  "name": "Waldeck",
  "country": "DE",
  "coord": {
    "lon": 9.06286,
    "lat": 51.206181
  }
}, {
  "id": 2885912,
  "name": "Konigsbronn",
  "country": "DE",
  "coord": {
    "lon": 10.11193,
    "lat": 48.743172
  }
}, {
  "id": 6553269,
  "name": "Lohfelden",
  "country": "DE",
  "coord": {
    "lon": 9.54873,
    "lat": 51.271599
  }
}, {
  "id": 2948589,
  "name": "Landkreis Birkenfeld",
  "country": "DE",
  "coord": {
    "lon": 7.28139,
    "lat": 49.71944
  }
}, {
  "id": 2942017,
  "name": "Buggingen",
  "country": "DE",
  "coord": {
    "lon": 7.63799,
    "lat": 47.8475
  }
}, {
  "id": 2839032,
  "name": "Schlacht",
  "country": "DE",
  "coord": {
    "lon": 11.84403,
    "lat": 48.005199
  }
}, {
  "id": 2870079,
  "name": "Molfsee",
  "country": "DE",
  "coord": {
    "lon": 10.06667,
    "lat": 54.26667
  }
}, {
  "id": 6552070,
  "name": "Alveslohe",
  "country": "DE",
  "coord": {
    "lon": 9.91667,
    "lat": 53.783298
  }
}, {
  "id": 2842621,
  "name": "Saarwellingen",
  "country": "DE",
  "coord": {
    "lon": 6.81667,
    "lat": 49.349998
  }
}, {
  "id": 2848054,
  "name": "Retgendorf",
  "country": "DE",
  "coord": {
    "lon": 11.50359,
    "lat": 53.729221
  }
}, {
  "id": 2810413,
  "name": "Westerburg",
  "country": "DE",
  "coord": {
    "lon": 7.98333,
    "lat": 50.566669
  }
}, {
  "id": 6552890,
  "name": "Geeste",
  "country": "DE",
  "coord": {
    "lon": 7.26667,
    "lat": 52.599998
  }
}, {
  "id": 2879125,
  "name": "Leisau",
  "country": "DE",
  "coord": {
    "lon": 11.68333,
    "lat": 50.01667
  }
}, {
  "id": 2831482,
  "name": "Landkreis Heidekreis",
  "country": "DE",
  "coord": {
    "lon": 9.77083,
    "lat": 52.937778
  }
}, {
  "id": 2948222,
  "name": "Bispingen",
  "country": "DE",
  "coord": {
    "lon": 9.99772,
    "lat": 53.083118
  }
}, {
  "id": 7732321,
  "name": "Bürdenbach-Bruchermühle",
  "country": "DE",
  "coord": {
    "lon": 7.53181,
    "lat": 50.619411
  }
}, {
  "id": 2863150,
  "name": "Niederlörick",
  "country": "DE",
  "coord": {
    "lon": 6.71667,
    "lat": 51.25
  }
}, {
  "id": 2859998,
  "name": "Oberlahnstein",
  "country": "DE",
  "coord": {
    "lon": 7.61667,
    "lat": 50.299999
  }
}, {
  "id": 2924820,
  "name": "Fridingen an der Donau",
  "country": "DE",
  "coord": {
    "lon": 8.93223,
    "lat": 48.021961
  }
}, {
  "id": 6554569,
  "name": "Manderscheid",
  "country": "DE",
  "coord": {
    "lon": 6.35,
    "lat": 50.099998
  }
}, {
  "id": 2951950,
  "name": "Baumholder",
  "country": "DE",
  "coord": {
    "lon": 7.33333,
    "lat": 49.616669
  }
}, {
  "id": 2822484,
  "name": "Thyrnau",
  "country": "DE",
  "coord": {
    "lon": 13.53333,
    "lat": 48.616669
  }
}, {
  "id": 2890202,
  "name": "Kissing",
  "country": "DE",
  "coord": {
    "lon": 10.97088,
    "lat": 48.303749
  }
}, {
  "id": 2874131,
  "name": "Malchin",
  "country": "DE",
  "coord": {
    "lon": 12.78333,
    "lat": 53.73333
  }
}, {
  "id": 2916936,
  "name": "Grossbottwar",
  "country": "DE",
  "coord": {
    "lon": 9.2925,
    "lat": 49.002499
  }
}, {
  "id": 6552522,
  "name": "Eystrup",
  "country": "DE",
  "coord": {
    "lon": 9.21298,
    "lat": 52.779251
  }
}, {
  "id": 2928239,
  "name": "Eystrup",
  "country": "DE",
  "coord": {
    "lon": 9.21315,
    "lat": 52.77935
  }
}, {
  "id": 2808544,
  "name": "Willingen",
  "country": "DE",
  "coord": {
    "lon": 8.61667,
    "lat": 51.299999
  }
}, {
  "id": 6553739,
  "name": "Bad Bertrich",
  "country": "DE",
  "coord": {
    "lon": 7.03333,
    "lat": 50.0667
  }
}, {
  "id": 2840052,
  "name": "Scheibe",
  "country": "DE",
  "coord": {
    "lon": 13,
    "lat": 50.566669
  }
}, {
  "id": 2896263,
  "name": "Immenstaad am Bodensee",
  "country": "DE",
  "coord": {
    "lon": 9.36667,
    "lat": 47.666672
  }
}, {
  "id": 6555239,
  "name": "Fußgönheim",
  "country": "DE",
  "coord": {
    "lon": 8.29222,
    "lat": 49.461102
  }
}, {
  "id": 2891391,
  "name": "Kesselsdorf",
  "country": "DE",
  "coord": {
    "lon": 13.58333,
    "lat": 51.033329
  }
}, {
  "id": 6555512,
  "name": "Abstatt",
  "country": "DE",
  "coord": {
    "lon": 9.29278,
    "lat": 49.071098
  }
}, {
  "id": 6552487,
  "name": "Schellerten",
  "country": "DE",
  "coord": {
    "lon": 10.0979,
    "lat": 52.176498
  }
}, {
  "id": 2946952,
  "name": "Bohme",
  "country": "DE",
  "coord": {
    "lon": 9.46667,
    "lat": 52.783329
  }
}, {
  "id": 2915124,
  "name": "Grossrohrsdorf",
  "country": "DE",
  "coord": {
    "lon": 14.01667,
    "lat": 51.150002
  }
}, {
  "id": 6547452,
  "name": "Berngau",
  "country": "DE",
  "coord": {
    "lon": 11.4,
    "lat": 49.25
  }
}, {
  "id": 2853900,
  "name": "Philippsthal",
  "country": "DE",
  "coord": {
    "lon": 10,
    "lat": 50.849998
  }
}, {
  "id": 2880425,
  "name": "Lappersdorf",
  "country": "DE",
  "coord": {
    "lon": 12.09,
    "lat": 49.056938
  }
}, {
  "id": 2829509,
  "name": "Stapelfeld",
  "country": "DE",
  "coord": {
    "lon": 10.21667,
    "lat": 53.599998
  }
}, {
  "id": 2953403,
  "name": "Bad Meinberg",
  "country": "DE",
  "coord": {
    "lon": 8.98313,
    "lat": 51.895882
  }
}, {
  "id": 2910280,
  "name": "Harsefeld",
  "country": "DE",
  "coord": {
    "lon": 9.5,
    "lat": 53.450001
  }
}, {
  "id": 6554375,
  "name": "Starkenburg",
  "country": "DE",
  "coord": {
    "lon": 7.13333,
    "lat": 49.966702
  }
}, {
  "id": 2957465,
  "name": "Altenstadt",
  "country": "DE",
  "coord": {
    "lon": 12.32863,
    "lat": 49.632278
  }
}, {
  "id": 6556808,
  "name": "Weißdorf",
  "country": "DE",
  "coord": {
    "lon": 11.85,
    "lat": 50.1833
  }
}, {
  "id": 2908678,
  "name": "Hauswalde",
  "country": "DE",
  "coord": {
    "lon": 14.1,
    "lat": 51.150002
  }
}, {
  "id": 2813392,
  "name": "Wega",
  "country": "DE",
  "coord": {
    "lon": 9.16667,
    "lat": 51.133331
  }
}, {
  "id": 2856493,
  "name": "Osterhorn",
  "country": "DE",
  "coord": {
    "lon": 9.7,
    "lat": 53.866669
  }
}, {
  "id": 2951216,
  "name": "Bellersheim",
  "country": "DE",
  "coord": {
    "lon": 8.83799,
    "lat": 50.453018
  }
}, {
  "id": 2829765,
  "name": "Stadtilm",
  "country": "DE",
  "coord": {
    "lon": 11.08333,
    "lat": 50.76667
  }
}, {
  "id": 2880196,
  "name": "Laudert",
  "country": "DE",
  "coord": {
    "lon": 7.6,
    "lat": 50.083328
  }
}, {
  "id": 2913428,
  "name": "Gutach (Schwarzwaldbahn)",
  "country": "DE",
  "coord": {
    "lon": 8.21667,
    "lat": 48.25
  }
}, {
  "id": 6553899,
  "name": "Halsenbach",
  "country": "DE",
  "coord": {
    "lon": 7.55,
    "lat": 50.166698
  }
}, {
  "id": 2942976,
  "name": "Bruttig",
  "country": "DE",
  "coord": {
    "lon": 7.23333,
    "lat": 50.133331
  }
}, {
  "id": 2948895,
  "name": "Bilshausen",
  "country": "DE",
  "coord": {
    "lon": 10.16667,
    "lat": 51.616669
  }
}, {
  "id": 3206399,
  "name": "Frede",
  "country": "DE",
  "coord": {
    "lon": 8.1,
    "lat": 52.466671
  }
}, {
  "id": 2894944,
  "name": "Jestetten",
  "country": "DE",
  "coord": {
    "lon": 8.56667,
    "lat": 47.650002
  }
}, {
  "id": 2913708,
  "name": "Gundelprechting",
  "country": "DE",
  "coord": {
    "lon": 12.41667,
    "lat": 48.183331
  }
}, {
  "id": 2875341,
  "name": "Landkreis Ludwigslust",
  "country": "DE",
  "coord": {
    "lon": 11.45611,
    "lat": 53.29361
  }
}, {
  "id": 6559321,
  "name": "Albaching",
  "country": "DE",
  "coord": {
    "lon": 12.11191,
    "lat": 48.10701
  }
}, {
  "id": 2894977,
  "name": "Jesenwang",
  "country": "DE",
  "coord": {
    "lon": 11.13333,
    "lat": 48.166672
  }
}, {
  "id": 2823081,
  "name": "Thalheim",
  "country": "DE",
  "coord": {
    "lon": 12.85,
    "lat": 50.700001
  }
}, {
  "id": 2909204,
  "name": "Hatzenbuhl",
  "country": "DE",
  "coord": {
    "lon": 8.24528,
    "lat": 49.111111
  }
}, {
  "id": 2910419,
  "name": "Harm",
  "country": "DE",
  "coord": {
    "lon": 11.10606,
    "lat": 49.31432
  }
}, {
  "id": 2959696,
  "name": "Achenbach",
  "country": "DE",
  "coord": {
    "lon": 7.96667,
    "lat": 50.866669
  }
}, {
  "id": 6552426,
  "name": "Sickte",
  "country": "DE",
  "coord": {
    "lon": 10.65,
    "lat": 52.216702
  }
}, {
  "id": 6550040,
  "name": "Schwarza",
  "country": "DE",
  "coord": {
    "lon": 10.5333,
    "lat": 50.633301
  }
}, {
  "id": 2830135,
  "name": "Spradowerbach",
  "country": "DE",
  "coord": {
    "lon": 8.58333,
    "lat": 52.216671
  }
}, {
  "id": 6555422,
  "name": "Holzmaden",
  "country": "DE",
  "coord": {
    "lon": 9.51667,
    "lat": 48.633301
  }
}, {
  "id": 2830100,
  "name": "Spreenhagen",
  "country": "DE",
  "coord": {
    "lon": 13.88333,
    "lat": 52.366669
  }
}, {
  "id": 6555069,
  "name": "Schopp",
  "country": "DE",
  "coord": {
    "lon": 7.68333,
    "lat": 49.349998
  }
}, {
  "id": 2944311,
  "name": "Brendel",
  "country": "DE",
  "coord": {
    "lon": 8.57878,
    "lat": 52.230949
  }
}, {
  "id": 2887987,
  "name": "Klein-Winternheim",
  "country": "DE",
  "coord": {
    "lon": 8.21194,
    "lat": 49.938332
  }
}, {
  "id": 2877315,
  "name": "Lindenfels",
  "country": "DE",
  "coord": {
    "lon": 8.78306,
    "lat": 49.685001
  }
}, {
  "id": 2841320,
  "name": "Satrup",
  "country": "DE",
  "coord": {
    "lon": 9.6,
    "lat": 54.700001
  }
}, {
  "id": 2851430,
  "name": "Quenstedt",
  "country": "DE",
  "coord": {
    "lon": 11.46667,
    "lat": 51.700001
  }
}, {
  "id": 2818650,
  "name": "Unterstall",
  "country": "DE",
  "coord": {
    "lon": 11.21667,
    "lat": 48.76667
  }
}, {
  "id": 2814788,
  "name": "Waldsiedlung",
  "country": "DE",
  "coord": {
    "lon": 13.05,
    "lat": 53.099998
  }
}, {
  "id": 6550116,
  "name": "Andisleben",
  "country": "DE",
  "coord": {
    "lon": 10.9167,
    "lat": 51.083302
  }
}, {
  "id": 2948265,
  "name": "Bischofswiesen",
  "country": "DE",
  "coord": {
    "lon": 12.95,
    "lat": 47.650002
  }
}, {
  "id": 6555656,
  "name": "Altlußheim",
  "country": "DE",
  "coord": {
    "lon": 8.49917,
    "lat": 49.301701
  }
}, {
  "id": 6553095,
  "name": "Havixbeck",
  "country": "DE",
  "coord": {
    "lon": 7.41667,
    "lat": 51.983299
  }
}, {
  "id": 2856194,
  "name": "Seeheilbad Graal-Muritz",
  "country": "DE",
  "coord": {
    "lon": 12.25139,
    "lat": 54.25124
  }
}, {
  "id": 2846089,
  "name": "Rodelmaier",
  "country": "DE",
  "coord": {
    "lon": 10.28333,
    "lat": 50.316669
  }
}, {
  "id": 2875912,
  "name": "Lorbach",
  "country": "DE",
  "coord": {
    "lon": 6.63333,
    "lat": 50.566669
  }
}, {
  "id": 2918498,
  "name": "Grabau",
  "country": "DE",
  "coord": {
    "lon": 10.52001,
    "lat": 53.513569
  }
}, {
  "id": 6555800,
  "name": "Sasbachwalden",
  "country": "DE",
  "coord": {
    "lon": 8.13333,
    "lat": 48.616699
  }
}, {
  "id": 2860716,
  "name": "Oberfell",
  "country": "DE",
  "coord": {
    "lon": 7.44461,
    "lat": 50.26038
  }
}, {
  "id": 6556884,
  "name": "Engelthal",
  "country": "DE",
  "coord": {
    "lon": 11.39986,
    "lat": 49.471809
  }
}, {
  "id": 2871745,
  "name": "Merscherhöhe",
  "country": "DE",
  "coord": {
    "lon": 6.36667,
    "lat": 50.933331
  }
}, {
  "id": 6554982,
  "name": "Sankt Alban",
  "country": "DE",
  "coord": {
    "lon": 7.86667,
    "lat": 49.6833
  }
}, {
  "id": 2877969,
  "name": "Liebenburg",
  "country": "DE",
  "coord": {
    "lon": 10.43169,
    "lat": 52.021759
  }
}, {
  "id": 6555620,
  "name": "Linkenheim-Hochstetten",
  "country": "DE",
  "coord": {
    "lon": 8.40569,
    "lat": 49.1357
  }
}, {
  "id": 2872670,
  "name": "Maxhutte-Haidhof",
  "country": "DE",
  "coord": {
    "lon": 12.09806,
    "lat": 49.202499
  }
}, {
  "id": 2819163,
  "name": "Unterleiterbach",
  "country": "DE",
  "coord": {
    "lon": 10.94599,
    "lat": 50.037239
  }
}, {
  "id": 2860449,
  "name": "Oberhattert",
  "country": "DE",
  "coord": {
    "lon": 9.76667,
    "lat": 50.666672
  }
}, {
  "id": 2854094,
  "name": "Pferdekamp",
  "country": "DE",
  "coord": {
    "lon": 7.96667,
    "lat": 51.616669
  }
}, {
  "id": 2809985,
  "name": "Wetter",
  "country": "DE",
  "coord": {
    "lon": 8.71667,
    "lat": 50.900002
  }
}, {
  "id": 2878879,
  "name": "Lengede",
  "country": "DE",
  "coord": {
    "lon": 10.30775,
    "lat": 52.204868
  }
}, {
  "id": 6552748,
  "name": "Sandbostel",
  "country": "DE",
  "coord": {
    "lon": 9.13333,
    "lat": 53.416698
  }
}, {
  "id": 2895849,
  "name": "Irfersgrün",
  "country": "DE",
  "coord": {
    "lon": 12.43333,
    "lat": 50.616669
  }
}, {
  "id": 2873234,
  "name": "Marnheim",
  "country": "DE",
  "coord": {
    "lon": 8.04,
    "lat": 49.632778
  }
}, {
  "id": 2942303,
  "name": "Büchig",
  "country": "DE",
  "coord": {
    "lon": 8.46583,
    "lat": 49.047501
  }
}, {
  "id": 2895000,
  "name": "Jerrishoe",
  "country": "DE",
  "coord": {
    "lon": 9.36667,
    "lat": 54.650002
  }
}, {
  "id": 6557149,
  "name": "Oberottmarshausen",
  "country": "DE",
  "coord": {
    "lon": 10.85,
    "lat": 48.233299
  }
}, {
  "id": 6554344,
  "name": "Laufeld",
  "country": "DE",
  "coord": {
    "lon": 6.86667,
    "lat": 50.083302
  }
}, {
  "id": 2854513,
  "name": "Peutenhausen",
  "country": "DE",
  "coord": {
    "lon": 11.23333,
    "lat": 48.533329
  }
}, {
  "id": 2906050,
  "name": "Herleshausen",
  "country": "DE",
  "coord": {
    "lon": 10.16667,
    "lat": 51.01667
  }
}, {
  "id": 2806232,
  "name": "Wonsees",
  "country": "DE",
  "coord": {
    "lon": 11.3,
    "lat": 49.98333
  }
}, {
  "id": 2898238,
  "name": "Hub",
  "country": "DE",
  "coord": {
    "lon": 12.45,
    "lat": 48.400002
  }
}, {
  "id": 2891823,
  "name": "Kellberg",
  "country": "DE",
  "coord": {
    "lon": 13.43333,
    "lat": 48.549999
  }
}, {
  "id": 6552092,
  "name": "Groß Kummerfeld",
  "country": "DE",
  "coord": {
    "lon": 10.0833,
    "lat": 54.049999
  }
}, {
  "id": 2817112,
  "name": "Vitzke",
  "country": "DE",
  "coord": {
    "lon": 11.11667,
    "lat": 52.783329
  }
}, {
  "id": 2955426,
  "name": "Arnum",
  "country": "DE",
  "coord": {
    "lon": 9.73333,
    "lat": 52.299999
  }
}, {
  "id": 2924958,
  "name": "Fresenburg",
  "country": "DE",
  "coord": {
    "lon": 7.3,
    "lat": 52.883331
  }
}, {
  "id": 2874987,
  "name": "Lussow",
  "country": "DE",
  "coord": {
    "lon": 12.14264,
    "lat": 53.838551
  }
}, {
  "id": 2888686,
  "name": "Kleinjörl",
  "country": "DE",
  "coord": {
    "lon": 9.31667,
    "lat": 54.599998
  }
}, {
  "id": 2827206,
  "name": "Stettenhofen",
  "country": "DE",
  "coord": {
    "lon": 10.86667,
    "lat": 48.466671
  }
}, {
  "id": 2856026,
  "name": "Otterloh",
  "country": "DE",
  "coord": {
    "lon": 11.65907,
    "lat": 47.996071
  }
}, {
  "id": 2923359,
  "name": "Gaggstatt",
  "country": "DE",
  "coord": {
    "lon": 10.00636,
    "lat": 49.2188
  }
}, {
  "id": 7648907,
  "name": "Ostān-e Alborz",
  "country": "IR",
  "coord": {
    "lon": 50.809559,
    "lat": 36.011169
  }
}, {
  "id": 113646,
  "name": "Tabriz",
  "country": "IR",
  "coord": {
    "lon": 46.291901,
    "lat": 38.080002
  }
}, {
  "id": 1159301,
  "name": "Zahedan",
  "country": "IR",
  "coord": {
    "lon": 60.8629,
    "lat": 29.4963
  }
}, {
  "id": 1161724,
  "name": "Chah Bahar",
  "country": "IR",
  "coord": {
    "lon": 60.643002,
    "lat": 25.291901
  }
}, {
  "id": 124544,
  "name": "Ostān-e Māzandarān",
  "country": "IR",
  "coord": {
    "lon": 52.333328,
    "lat": 36.25
  }
}, {
  "id": 449504,
  "name": "Eslāmshahr",
  "country": "IR",
  "coord": {
    "lon": 51.2346,
    "lat": 35.560501
  }
}, {
  "id": 1113217,
  "name": "Zabol",
  "country": "IR",
  "coord": {
    "lon": 61.501202,
    "lat": 31.0287
  }
}, {
  "id": 128321,
  "name": "Kazerun",
  "country": "IR",
  "coord": {
    "lon": 51.654148,
    "lat": 29.61949
  }
}, {
  "id": 127989,
  "name": "Khāmeneh",
  "country": "IR",
  "coord": {
    "lon": 45.630901,
    "lat": 38.193401
  }
}, {
  "id": 7642294,
  "name": "Shahrak-e Dāneshgāh",
  "country": "IR",
  "coord": {
    "lon": 52.64043,
    "lat": 36.703781
  }
}, {
  "id": 6709842,
  "name": "Maḩall-e Eḩdās̄-e Shahrak-e Shardārī-ye Būkān",
  "country": "IR",
  "coord": {
    "lon": 46.209,
    "lat": 36.485298
  }
}, {
  "id": 119161,
  "name": "Qorveh",
  "country": "IR",
  "coord": {
    "lon": 47.804501,
    "lat": 35.166401
  }
}, {
  "id": 132938,
  "name": "Gonbad-e Qabus",
  "country": "IR",
  "coord": {
    "lon": 55.16721,
    "lat": 37.250038
  }
}, {
  "id": 129933,
  "name": "Juybar",
  "country": "IR",
  "coord": {
    "lon": 52.912441,
    "lat": 36.641151
  }
}, {
  "id": 140380,
  "name": "Bojnurd",
  "country": "IR",
  "coord": {
    "lon": 57.329029,
    "lat": 37.474731
  }
}, {
  "id": 141679,
  "name": "Bandar-e Anzali",
  "country": "IR",
  "coord": {
    "lon": 49.4622,
    "lat": 37.472698
  }
}, {
  "id": 6909756,
  "name": "Fasārūd",
  "country": "IR",
  "coord": {
    "lon": 52.700401,
    "lat": 30.9111
  }
}, {
  "id": 2747890,
  "name": "Gemeente Rotterdam",
  "country": "NL",
  "coord": {
    "lon": 4.46667,
    "lat": 51.916672
  }
}, {
  "id": 2747891,
  "name": "Rotterdam",
  "country": "NL",
  "coord": {
    "lon": 4.47917,
    "lat": 51.922501
  }
}, {
  "id": 2753040,
  "name": "Katerveer",
  "country": "NL",
  "coord": {
    "lon": 6.06944,
    "lat": 52.5
  }
}, {
  "id": 2748760,
  "name": "Palenstein",
  "country": "NL",
  "coord": {
    "lon": 4.50869,
    "lat": 52.05579
  }
}, {
  "id": 2759797,
  "name": "Gemeente Amstelveen",
  "country": "NL",
  "coord": {
    "lon": 4.85767,
    "lat": 52.298401
  }
}, {
  "id": 2751282,
  "name": "Gemeente Maastricht",
  "country": "NL",
  "coord": {
    "lon": 5.7,
    "lat": 50.849998
  }
}, {
  "id": 2756071,
  "name": "Enschede",
  "country": "NL",
  "coord": {
    "lon": 6.89583,
    "lat": 52.21833
  }
}, {
  "id": 6544259,
  "name": "Gemeente Almere",
  "country": "NL",
  "coord": {
    "lon": 5.2375,
    "lat": 52.36861
  }
}, {
  "id": 2755250,
  "name": "Gemeente Groningen",
  "country": "NL",
  "coord": {
    "lon": 6.55,
    "lat": 53.200001
  }
}, {
  "id": 2755251,
  "name": "Groningen",
  "country": "NL",
  "coord": {
    "lon": 6.56667,
    "lat": 53.21917
  }
}, {
  "id": 2750052,
  "name": "Gemeente Nijmegen",
  "country": "NL",
  "coord": {
    "lon": 5.85,
    "lat": 51.833328
  }
}, {
  "id": 2746012,
  "name": "Ubbergen",
  "country": "NL",
  "coord": {
    "lon": 5.90139,
    "lat": 51.837502
  }
}, {
  "id": 2754386,
  "name": "Hengstdal",
  "country": "NL",
  "coord": {
    "lon": 5.88333,
    "lat": 51.833328
  }
}, {
  "id": 2758991,
  "name": "Bieberg",
  "country": "NL",
  "coord": {
    "lon": 4.79186,
    "lat": 51.559139
  }
}, {
  "id": 2755498,
  "name": "Ginneken",
  "country": "NL",
  "coord": {
    "lon": 4.7931,
    "lat": 51.565929
  }
}, {
  "id": 2754392,
  "name": "Gemeente Hengelo",
  "country": "NL",
  "coord": {
    "lon": 6.78333,
    "lat": 52.25
  }
}, {
  "id": 2754394,
  "name": "Hengelo",
  "country": "NL",
  "coord": {
    "lon": 6.79306,
    "lat": 52.265831
  }
}, {
  "id": 2756668,
  "name": "Gemeente Dordrecht",
  "country": "NL",
  "coord": {
    "lon": 4.65,
    "lat": 51.799999
  }
}, {
  "id": 7535498,
  "name": "Gemeente  Oldambt",
  "country": "NL",
  "coord": {
    "lon": 7.04224,
    "lat": 53.168591
  }
}, {
  "id": 2754063,
  "name": "Gemeente Hilversum",
  "country": "NL",
  "coord": {
    "lon": 5.16667,
    "lat": 52.216671
  }
}, {
  "id": 2750896,
  "name": "Middelburg",
  "country": "NL",
  "coord": {
    "lon": 3.61389,
    "lat": 51.5
  }
}, {
  "id": 2754861,
  "name": "Hardenberg",
  "country": "NL",
  "coord": {
    "lon": 6.61944,
    "lat": 52.575829
  }
}, {
  "id": 2747350,
  "name": "Gemeente 's-Hertogenbosch",
  "country": "NL",
  "coord": {
    "lon": 5.30056,
    "lat": 51.682671
  }
}, {
  "id": 2747910,
  "name": "Rosmalen",
  "country": "NL",
  "coord": {
    "lon": 5.36528,
    "lat": 51.716671
  }
}, {
  "id": 2754651,
  "name": "Gemeente Heerlen",
  "country": "NL",
  "coord": {
    "lon": 5.96667,
    "lat": 50.883331
  }
}, {
  "id": 2759660,
  "name": "Gemeente Arnhem",
  "country": "NL",
  "coord": {
    "lon": 5.9,
    "lat": 51.966671
  }
}, {
  "id": 2755419,
  "name": "Gemeente Gouda",
  "country": "NL",
  "coord": {
    "lon": 4.7,
    "lat": 52
  }
}, {
  "id": 2750811,
  "name": "Mijnheerkens",
  "country": "NL",
  "coord": {
    "lon": 6,
    "lat": 51.200001
  }
}, {
  "id": 2754007,
  "name": "Hoek van Holland",
  "country": "NL",
  "coord": {
    "lon": 4.13333,
    "lat": 51.977501
  }
}, {
  "id": 2755616,
  "name": "Geleen",
  "country": "NL",
  "coord": {
    "lon": 5.82917,
    "lat": 50.974171
  }
}, {
  "id": 2756231,
  "name": "Gemeente Elburg",
  "country": "NL",
  "coord": {
    "lon": 5.81667,
    "lat": 52.433331
  }
}, {
  "id": 2751546,
  "name": "Gemeente Lisse",
  "country": "NL",
  "coord": {
    "lon": 4.55,
    "lat": 52.25
  }
}, {
  "id": 2746837,
  "name": "Gemeente Staphorst",
  "country": "NL",
  "coord": {
    "lon": 6.26667,
    "lat": 52.616669
  }
}, {
  "id": 2743607,
  "name": "Gemeente Zutphen",
  "country": "NL",
  "coord": {
    "lon": 6.2,
    "lat": 52.133331
  }
}, {
  "id": 2749251,
  "name": "Oranjewoud",
  "country": "NL",
  "coord": {
    "lon": 5.95038,
    "lat": 52.945789
  }
}, {
  "id": 6544290,
  "name": "Gemeente Bronckhorst",
  "country": "NL",
  "coord": {
    "lon": 6.30378,
    "lat": 52.04401
  }
}, {
  "id": 2754395,
  "name": "Hengelo",
  "country": "NL",
  "coord": {
    "lon": 6.30972,
    "lat": 52.050831
  }
}, {
  "id": 2755583,
  "name": "Gemeente Gennep",
  "country": "NL",
  "coord": {
    "lon": 5.96667,
    "lat": 51.683331
  }
}, {
  "id": 2749611,
  "name": "Gemeente Ommen",
  "country": "NL",
  "coord": {
    "lon": 6.5,
    "lat": 52.533329
  }
}, {
  "id": 2744002,
  "name": "Zeesse",
  "country": "NL",
  "coord": {
    "lon": 6.4375,
    "lat": 52.511669
  }
}, {
  "id": 6544269,
  "name": "Gemeente Neder-Betuwe",
  "country": "NL",
  "coord": {
    "lon": 5.57147,
    "lat": 51.914421
  }
}, {
  "id": 2752899,
  "name": "Kesteren",
  "country": "NL",
  "coord": {
    "lon": 5.56944,
    "lat": 51.935001
  }
}, {
  "id": 2759151,
  "name": "Gemeente Bergen",
  "country": "NL",
  "coord": {
    "lon": 4.7,
    "lat": 52.666672
  }
}, {
  "id": 2749534,
  "name": "Oostdorp",
  "country": "NL",
  "coord": {
    "lon": 4.7,
    "lat": 52.666672
  }
}, {
  "id": 2748026,
  "name": "Roden",
  "country": "NL",
  "coord": {
    "lon": 6.42083,
    "lat": 53.137501
  }
}, {
  "id": 2753439,
  "name": "Hulst",
  "country": "NL",
  "coord": {
    "lon": 4.05278,
    "lat": 51.279999
  }
}, {
  "id": 2746350,
  "name": "Gemeente Tholen",
  "country": "NL",
  "coord": {
    "lon": 4.1239,
    "lat": 51.57708
  }
}, {
  "id": 2746351,
  "name": "Tholen",
  "country": "NL",
  "coord": {
    "lon": 4.22083,
    "lat": 51.53167
  }
}, {
  "id": 2745895,
  "name": "Vaartkant",
  "country": "NL",
  "coord": {
    "lon": 4.66667,
    "lat": 51.566669
  }
}, {
  "id": 6544245,
  "name": "Gemeente Twenterand",
  "country": "NL",
  "coord": {
    "lon": 6.56122,
    "lat": 52.449741
  }
}, {
  "id": 2757224,
  "name": "Den Ham",
  "country": "NL",
  "coord": {
    "lon": 6.49583,
    "lat": 52.465832
  }
}, {
  "id": 293725,
  "name": "Reẖovot",
  "country": "IL",
  "coord": {
    "lon": 34.818611,
    "lat": 31.89694
  }
}, {
  "id": 294071,
  "name": "Netanya",
  "country": "IL",
  "coord": {
    "lon": 34.859921,
    "lat": 32.33292
  }
}, {
  "id": 293783,
  "name": "Ramat HaSharon",
  "country": "IL",
  "coord": {
    "lon": 34.841671,
    "lat": 32.147221
  }
}, {
  "id": 294502,
  "name": "Kefar Tavor",
  "country": "IL",
  "coord": {
    "lon": 35.421181,
    "lat": 32.686562
  }
}, {
  "id": 294027,
  "name": "Nirim",
  "country": "IL",
  "coord": {
    "lon": 34.395069,
    "lat": 31.33559
  }
}, {
  "id": 293198,
  "name": "Jerusalem District",
  "country": "IL",
  "coord": {
    "lon": 35,
    "lat": 31.75
  }
}, {
  "id": 294377,
  "name": "Maẖseya",
  "country": "IL",
  "coord": {
    "lon": 35.007038,
    "lat": 31.748541
  }
}, {
  "id": 293279,
  "name": "Urim",
  "country": "IL",
  "coord": {
    "lon": 34.523281,
    "lat": 31.304331
  }
}, {
  "id": 293361,
  "name": "Tel Litwinsky",
  "country": "IL",
  "coord": {
    "lon": 34.848061,
    "lat": 32.05389
  }
}, {
  "id": 293823,
  "name": "Qiryat Tiv‘on",
  "country": "IL",
  "coord": {
    "lon": 35.12722,
    "lat": 32.723888
  }
}, {
  "id": 293969,
  "name": "Or ‘Aqiva",
  "country": "IL",
  "coord": {
    "lon": 34.920872,
    "lat": 32.506401
  }
}, {
  "id": 293327,
  "name": "Tequma",
  "country": "IL",
  "coord": {
    "lon": 34.578159,
    "lat": 31.449841
  }
}, {
  "id": 6691623,
  "name": "Delicias",
  "country": "ES",
  "coord": {
    "lon": -4.72129,
    "lat": 41.654381
  }
}, {
  "id": 3119123,
  "name": "Sant Pere, Santa Caterina i La Ribera",
  "country": "ES",
  "coord": {
    "lon": 2.18152,
    "lat": 41.384499
  }
}, {
  "id": 2512989,
  "name": "Palma",
  "country": "ES",
  "coord": {
    "lon": 2.65024,
    "lat": 39.569389
  }
}, {
  "id": 6359284,
  "name": "Fuenlabrada",
  "country": "ES",
  "coord": {
    "lon": -3.7973,
    "lat": 40.28854
  }
}, {
  "id": 2516336,
  "name": "Javea",
  "country": "ES",
  "coord": {
    "lon": 0.16667,
    "lat": 38.783329
  }
}, {
  "id": 6357128,
  "name": "Ciudad Real",
  "country": "ES",
  "coord": {
    "lon": -3.98099,
    "lat": 38.955421
  }
}, {
  "id": 6362389,
  "name": "Güeñes",
  "country": "ES",
  "coord": {
    "lon": -3.05073,
    "lat": 43.22031
  }
}, {
  "id": 3124751,
  "name": "Colunga",
  "country": "ES",
  "coord": {
    "lon": -5.27009,
    "lat": 43.48531
  }
}, {
  "id": 2520600,
  "name": "Cadiz",
  "country": "ES",
  "coord": {
    "lon": -6.29944,
    "lat": 36.533611
  }
}, {
  "id": 3124724,
  "name": "Compostela",
  "country": "ES",
  "coord": {
    "lon": -8.14722,
    "lat": 41.88306
  }
}, {
  "id": 7669249,
  "name": "Sacromonte",
  "country": "ES",
  "coord": {
    "lon": -3.59278,
    "lat": 37.180828
  }
}, {
  "id": 3104339,
  "name": "Zamudio",
  "country": "ES",
  "coord": {
    "lon": -2.87,
    "lat": 43.285999
  }
}, {
  "id": 6355632,
  "name": "Ávila",
  "country": "ES",
  "coord": {
    "lon": -4.66064,
    "lat": 40.66864
  }
}, {
  "id": 6325235,
  "name": "San Lorenzo",
  "country": "ES",
  "coord": {
    "lon": -2.47754,
    "lat": 43.06871
  }
}, {
  "id": 6355479,
  "name": "Petrer",
  "country": "ES",
  "coord": {
    "lon": -0.73836,
    "lat": 38.491249
  }
}, {
  "id": 6359233,
  "name": "Alcorcón",
  "country": "ES",
  "coord": {
    "lon": -3.82847,
    "lat": 40.349232
  }
}, {
  "id": 6359938,
  "name": "Llanera",
  "country": "ES",
  "coord": {
    "lon": -5.85735,
    "lat": 43.442631
  }
}, {
  "id": 3118308,
  "name": "Llanera",
  "country": "ES",
  "coord": {
    "lon": -5.88333,
    "lat": 43.433331
  }
}, {
  "id": 6361828,
  "name": "Toledo",
  "country": "ES",
  "coord": {
    "lon": -4.00988,
    "lat": 39.867649
  }
}, {
  "id": 3129827,
  "name": "Aravaca",
  "country": "ES",
  "coord": {
    "lon": -3.78282,
    "lat": 40.457722
  }
}, {
  "id": 6356137,
  "name": "Lliçà d'Amunt",
  "country": "ES",
  "coord": {
    "lon": 2.22015,
    "lat": 41.60743
  }
}, {
  "id": 3109005,
  "name": "Siero",
  "country": "ES",
  "coord": {
    "lon": -5.66667,
    "lat": 43.383331
  }
}, {
  "id": 3113080,
  "name": "Posada",
  "country": "ES",
  "coord": {
    "lon": -5.67508,
    "lat": 43.387409
  }
}, {
  "id": 3118150,
  "name": "Logrono",
  "country": "ES",
  "coord": {
    "lon": -2.45,
    "lat": 42.466671
  }
}, {
  "id": 6358391,
  "name": "Plan",
  "country": "ES",
  "coord": {
    "lon": 0.31028,
    "lat": 42.545891
  }
}, {
  "id": 3113343,
  "name": "Plan",
  "country": "ES",
  "coord": {
    "lon": 0.33742,
    "lat": 42.581261
  }
}, {
  "id": 3109256,
  "name": "Segovia",
  "country": "ES",
  "coord": {
    "lon": -4.11667,
    "lat": 40.950001
  }
}, {
  "id": 6534091,
  "name": "Palafrugell",
  "country": "ES",
  "coord": {
    "lon": 3.18578,
    "lat": 41.908421
  }
}, {
  "id": 6359977,
  "name": "Villaviciosa",
  "country": "ES",
  "coord": {
    "lon": -5.41763,
    "lat": 43.475349
  }
}, {
  "id": 2522258,
  "name": "Albacete",
  "country": "ES",
  "coord": {
    "lon": -1.85,
    "lat": 38.98333
  }
}, {
  "id": 2510073,
  "name": "Utrera",
  "country": "ES",
  "coord": {
    "lon": -5.78093,
    "lat": 37.185162
  }
}, {
  "id": 3127385,
  "name": "Bustillo",
  "country": "ES",
  "coord": {
    "lon": -3.8727,
    "lat": 43.246052
  }
}, {
  "id": 6359168,
  "name": "Becerreá",
  "country": "ES",
  "coord": {
    "lon": -7.12108,
    "lat": 42.876968
  }
}, {
  "id": 3119441,
  "name": "La Matanza",
  "country": "ES",
  "coord": {
    "lon": -3.26457,
    "lat": 43.244831
  }
}, {
  "id": 6360688,
  "name": "Medio Cudeyo",
  "country": "ES",
  "coord": {
    "lon": -3.75243,
    "lat": 43.383888
  }
}, {
  "id": 3107686,
  "name": "Tortes",
  "country": "ES",
  "coord": {
    "lon": -7.18543,
    "lat": 42.82872
  }
}, {
  "id": 6355407,
  "name": "Benidorm",
  "country": "ES",
  "coord": {
    "lon": -0.12049,
    "lat": 38.543709
  }
}, {
  "id": 6361930,
  "name": "Beniparrell",
  "country": "ES",
  "coord": {
    "lon": -0.41186,
    "lat": 39.383171
  }
}, {
  "id": 2521055,
  "name": "Beniparrell",
  "country": "ES",
  "coord": {
    "lon": -0.41667,
    "lat": 39.383331
  }
}, {
  "id": 3124661,
  "name": "Constanti",
  "country": "ES",
  "coord": {
    "lon": 1.21262,
    "lat": 41.153919
  }
}, {
  "id": 3116294,
  "name": "Montferrer",
  "country": "ES",
  "coord": {
    "lon": 1.42862,
    "lat": 42.341541
  }
}, {
  "id": 6359814,
  "name": "Berrioplano",
  "country": "ES",
  "coord": {
    "lon": -1.70239,
    "lat": 42.857712
  }
}, {
  "id": 3120234,
  "name": "Izarra",
  "country": "ES",
  "coord": {
    "lon": -2.90257,
    "lat": 42.95409
  }
}, {
  "id": 2522143,
  "name": "Alcaraz",
  "country": "ES",
  "coord": {
    "lon": -2.49106,
    "lat": 38.666801
  }
}, {
  "id": 3120511,
  "name": "Huete",
  "country": "ES",
  "coord": {
    "lon": -2.69026,
    "lat": 40.14526
  }
}, {
  "id": 3114997,
  "name": "Orkoien",
  "country": "ES",
  "coord": {
    "lon": -1.70485,
    "lat": 42.823799
  }
}, {
  "id": 6359271,
  "name": "Colmenar Viejo",
  "country": "ES",
  "coord": {
    "lon": -3.73151,
    "lat": 40.64027
  }
}, {
  "id": 3123801,
  "name": "Dosrius",
  "country": "ES",
  "coord": {
    "lon": 2.41667,
    "lat": 41.583328
  }
}, {
  "id": 6358522,
  "name": "Quesada",
  "country": "ES",
  "coord": {
    "lon": -3.09766,
    "lat": 37.746929
  }
}, {
  "id": 2519668,
  "name": "Ceal",
  "country": "ES",
  "coord": {
    "lon": -3.05332,
    "lat": 37.724468
  }
}, {
  "id": 6357273,
  "name": "Aranga",
  "country": "ES",
  "coord": {
    "lon": -8.02789,
    "lat": 43.210739
  }
}, {
  "id": 2512862,
  "name": "Paterna",
  "country": "ES",
  "coord": {
    "lon": -0.43333,
    "lat": 39.5
  }
}, {
  "id": 3122992,
  "name": "Escó",
  "country": "ES",
  "coord": {
    "lon": -1.05718,
    "lat": 42.61858
  }
}, {
  "id": 2520709,
  "name": "Burriana",
  "country": "ES",
  "coord": {
    "lon": -0.08499,
    "lat": 39.889011
  }
}, {
  "id": 3129846,
  "name": "Arantzazu",
  "country": "ES",
  "coord": {
    "lon": -2.39889,
    "lat": 42.979301
  }
}, {
  "id": 3107651,
  "name": "Tourón",
  "country": "ES",
  "coord": {
    "lon": -8.52612,
    "lat": 42.402039
  }
}, {
  "id": 6362046,
  "name": "Oliva",
  "country": "ES",
  "coord": {
    "lon": -0.0911,
    "lat": 38.897301
  }
}, {
  "id": 2516527,
  "name": "Huertas",
  "country": "ES",
  "coord": {
    "lon": -0.11667,
    "lat": 38.916672
  }
}, {
  "id": 3130909,
  "name": "Agreda",
  "country": "ES",
  "coord": {
    "lon": -1.92244,
    "lat": 41.855881
  }
}, {
  "id": 6359430,
  "name": "Benalmádena",
  "country": "ES",
  "coord": {
    "lon": -4.54213,
    "lat": 36.589748
  }
}, {
  "id": 6360249,
  "name": "Silleda",
  "country": "ES",
  "coord": {
    "lon": -8.26138,
    "lat": 42.709358
  }
}, {
  "id": 3123535,
  "name": "El Comercio",
  "country": "ES",
  "coord": {
    "lon": -0.8191,
    "lat": 41.74369
  }
}, {
  "id": 3115318,
  "name": "Nueva Montaña",
  "country": "ES",
  "coord": {
    "lon": -3.85183,
    "lat": 43.444969
  }
}, {
  "id": 3108897,
  "name": "Siresa",
  "country": "ES",
  "coord": {
    "lon": -0.75119,
    "lat": 42.757221
  }
}, {
  "id": 3115305,
  "name": "Núñez",
  "country": "ES",
  "coord": {
    "lon": -5.88592,
    "lat": 43.514332
  }
}, {
  "id": 3113616,
  "name": "Pie de Concha",
  "country": "ES",
  "coord": {
    "lon": -4.06434,
    "lat": 43.123581
  }
}, {
  "id": 6360253,
  "name": "Valga",
  "country": "ES",
  "coord": {
    "lon": -8.65944,
    "lat": 42.695419
  }
}, {
  "id": 2520727,
  "name": "Bullas",
  "country": "ES",
  "coord": {
    "lon": -1.67227,
    "lat": 38.046669
  }
}, {
  "id": 3116276,
  "name": "Montmelo",
  "country": "ES",
  "coord": {
    "lon": 2.2419,
    "lat": 41.550018
  }
}, {
  "id": 6355515,
  "name": "Pilar de la Horadada",
  "country": "ES",
  "coord": {
    "lon": -0.80797,
    "lat": 37.89933
  }
}, {
  "id": 6355582,
  "name": "Oria",
  "country": "ES",
  "coord": {
    "lon": -2.31794,
    "lat": 37.496571
  }
}, {
  "id": 3115261,
  "name": "Ocio",
  "country": "ES",
  "coord": {
    "lon": -2.8226,
    "lat": 42.656731
  }
}, {
  "id": 2522499,
  "name": "Abaran",
  "country": "ES",
  "coord": {
    "lon": -1.39907,
    "lat": 38.205509
  }
}, {
  "id": 3122157,
  "name": "Fraga",
  "country": "ES",
  "coord": {
    "lon": 0.34894,
    "lat": 41.522942
  }
}, {
  "id": 2521424,
  "name": "Bacarot",
  "country": "ES",
  "coord": {
    "lon": -0.55836,
    "lat": 38.319908
  }
}, {
  "id": 3128010,
  "name": "Biosca",
  "country": "ES",
  "coord": {
    "lon": 1.35889,
    "lat": 41.841862
  }
}, {
  "id": 6357859,
  "name": "Cantalojas",
  "country": "ES",
  "coord": {
    "lon": -3.29106,
    "lat": 41.234631
  }
}, {
  "id": 6359508,
  "name": "Águilas",
  "country": "ES",
  "coord": {
    "lon": -1.55921,
    "lat": 37.447029
  }
}, {
  "id": 6361931,
  "name": "Benirredrà",
  "country": "ES",
  "coord": {
    "lon": -0.1936,
    "lat": 38.96241
  }
}, {
  "id": 6361015,
  "name": "Marchena",
  "country": "ES",
  "coord": {
    "lon": -5.39396,
    "lat": 37.305359
  }
}, {
  "id": 2510075,
  "name": "Utiel",
  "country": "ES",
  "coord": {
    "lon": -1.2,
    "lat": 39.566669
  }
}, {
  "id": 2519277,
  "name": "Consuegra",
  "country": "ES",
  "coord": {
    "lon": -3.608,
    "lat": 39.46246
  }
}, {
  "id": 2520577,
  "name": "Cala del Moral",
  "country": "ES",
  "coord": {
    "lon": -4.30647,
    "lat": 36.717972
  }
}, {
  "id": 6355395,
  "name": "Aspe",
  "country": "ES",
  "coord": {
    "lon": -0.79451,
    "lat": 38.33424
  }
}, {
  "id": 6357250,
  "name": "Priego de Córdoba",
  "country": "ES",
  "coord": {
    "lon": -4.16465,
    "lat": 37.478249
  }
}, {
  "id": 6359513,
  "name": "Alhama de Murcia",
  "country": "ES",
  "coord": {
    "lon": -1.38508,
    "lat": 37.857349
  }
}, {
  "id": 3116741,
  "name": "Miñao Goien/Miñano Mayor",
  "country": "ES",
  "coord": {
    "lon": -2.65,
    "lat": 42.916672
  }
}, {
  "id": 6359539,
  "name": "San Javier",
  "country": "ES",
  "coord": {
    "lon": -0.77005,
    "lat": 37.763409
  }
}, {
  "id": 2514678,
  "name": "Los Isidoros",
  "country": "ES",
  "coord": {
    "lon": -0.85427,
    "lat": 37.80648
  }
}, {
  "id": 3105940,
  "name": "Vilacolum",
  "country": "ES",
  "coord": {
    "lon": 3.03738,
    "lat": 42.194271
  }
}, {
  "id": 6356131,
  "name": "l'Hospitalet de Llobregat",
  "country": "ES",
  "coord": {
    "lon": 2.11172,
    "lat": 41.36578
  }
}, {
  "id": 6359395,
  "name": "Villanueva de la Cañada",
  "country": "ES",
  "coord": {
    "lon": -3.98344,
    "lat": 40.450062
  }
}, {
  "id": 3113910,
  "name": "Penaranda de Bracamonte",
  "country": "ES",
  "coord": {
    "lon": -5.20026,
    "lat": 40.901081
  }
}, {
  "id": 3115874,
  "name": "Murguia",
  "country": "ES",
  "coord": {
    "lon": -2.81945,
    "lat": 42.95686
  }
}, {
  "id": 2521335,
  "name": "Barbate de Franco",
  "country": "ES",
  "coord": {
    "lon": -5.92186,
    "lat": 36.192371
  }
}, {
  "id": 6356292,
  "name": "Subirats",
  "country": "ES",
  "coord": {
    "lon": 1.78475,
    "lat": 41.392971
  }
}, {
  "id": 6361950,
  "name": "Carlet",
  "country": "ES",
  "coord": {
    "lon": -0.52416,
    "lat": 39.232948
  }
}, {
  "id": 3105921,
  "name": "Vilagrassa",
  "country": "ES",
  "coord": {
    "lon": 1.15,
    "lat": 41.650002
  }
}, {
  "id": 6359400,
  "name": "Villaviciosa de Odón",
  "country": "ES",
  "coord": {
    "lon": -3.91422,
    "lat": 40.35936
  }
}, {
  "id": 2520496,
  "name": "Calp",
  "country": "ES",
  "coord": {
    "lon": 0.0445,
    "lat": 38.644699
  }
}, {
  "id": 2514824,
  "name": "Los Barrios",
  "country": "ES",
  "coord": {
    "lon": -5.49213,
    "lat": 36.184818
  }
}, {
  "id": 2509606,
  "name": "Villacarrillo",
  "country": "ES",
  "coord": {
    "lon": -3.0848,
    "lat": 38.115601
  }
}, {
  "id": 3121344,
  "name": "Golmes",
  "country": "ES",
  "coord": {
    "lon": 0.93125,
    "lat": 41.633541
  }
}, {
  "id": 6360204,
  "name": "Yaiza",
  "country": "ES",
  "coord": {
    "lon": -13.76312,
    "lat": 28.963289
  }
}, {
  "id": 3107512,
  "name": "ses Truqueries",
  "country": "ES",
  "coord": {
    "lon": 3.83333,
    "lat": 40.01667
  }
}, {
  "id": 6362212,
  "name": "Medina del Campo",
  "country": "ES",
  "coord": {
    "lon": -4.89734,
    "lat": 41.329578
  }
}, {
  "id": 6356816,
  "name": "Miajadas",
  "country": "ES",
  "coord": {
    "lon": -5.9396,
    "lat": 39.117939
  }
}, {
  "id": 6356942,
  "name": "Puerto de Santa María (El)",
  "country": "ES",
  "coord": {
    "lon": -6.22965,
    "lat": 36.612598
  }
}, {
  "id": 2517791,
  "name": "Facinas",
  "country": "ES",
  "coord": {
    "lon": -5.70018,
    "lat": 36.144112
  }
}, {
  "id": 2510137,
  "name": "Tuineje",
  "country": "ES",
  "coord": {
    "lon": -14.04722,
    "lat": 28.323721
  }
}, {
  "id": 2510105,
  "name": "Uga",
  "country": "ES",
  "coord": {
    "lon": -13.74449,
    "lat": 28.950319
  }
}, {
  "id": 3116269,
  "name": "Montoliu de Lleida",
  "country": "ES",
  "coord": {
    "lon": 0.6,
    "lat": 41.566669
  }
}, {
  "id": 3117503,
  "name": "Manzanares el Real",
  "country": "ES",
  "coord": {
    "lon": -3.86265,
    "lat": 40.726269
  }
}, {
  "id": 2516861,
  "name": "Guia",
  "country": "ES",
  "coord": {
    "lon": -15.63294,
    "lat": 28.13974
  }
}, {
  "id": 6534154,
  "name": "Torroella de Montgrí",
  "country": "ES",
  "coord": {
    "lon": 3.13153,
    "lat": 42.041199
  }
}, {
  "id": 6355480,
  "name": "Pinós (el)/Pinoso",
  "country": "ES",
  "coord": {
    "lon": -1.04024,
    "lat": 38.4123
  }
}, {
  "id": 6356064,
  "name": "Cabrera d'Anoia",
  "country": "ES",
  "coord": {
    "lon": 1.72016,
    "lat": 41.490681
  }
}, {
  "id": 3116057,
  "name": "Mos",
  "country": "ES",
  "coord": {
    "lon": -7.55047,
    "lat": 43.15667
  }
}, {
  "id": 6356183,
  "name": "Palau-solità i Plegamans",
  "country": "ES",
  "coord": {
    "lon": 2.17966,
    "lat": 41.57972
  }
}, {
  "id": 6355959,
  "name": "Oliva de Mérida",
  "country": "ES",
  "coord": {
    "lon": -6.05424,
    "lat": 38.741039
  }
}, {
  "id": 2516896,
  "name": "Guarena",
  "country": "ES",
  "coord": {
    "lon": -6.09987,
    "lat": 38.85952
  }
}, {
  "id": 6359051,
  "name": "Ezcaray",
  "country": "ES",
  "coord": {
    "lon": -3.02384,
    "lat": 42.263248
  }
}, {
  "id": 6359715,
  "name": "Mendigorría",
  "country": "ES",
  "coord": {
    "lon": -1.84072,
    "lat": 42.617481
  }
}, {
  "id": 2519198,
  "name": "Cortes de la Frontera",
  "country": "ES",
  "coord": {
    "lon": -5.34266,
    "lat": 36.6171
  }
}, {
  "id": 3107695,
  "name": "Torroso",
  "country": "ES",
  "coord": {
    "lon": -8.61667,
    "lat": 42.200001
  }
}, {
  "id": 2510293,
  "name": "Torrejon el Rubio",
  "country": "ES",
  "coord": {
    "lon": -6.0126,
    "lat": 39.770679
  }
}, {
  "id": 3121550,
  "name": "Garrapinillos",
  "country": "ES",
  "coord": {
    "lon": -1.02682,
    "lat": 41.683659
  }
}, {
  "id": 3115706,
  "name": "Navacepeda de Tormes",
  "country": "ES",
  "coord": {
    "lon": -5.24897,
    "lat": 40.360081
  }
}, {
  "id": 2509617,
  "name": "Vilaflor",
  "country": "ES",
  "coord": {
    "lon": -16.63592,
    "lat": 28.156231
  }
}, {
  "id": 3114397,
  "name": "Paracuellos de Jarama",
  "country": "ES",
  "coord": {
    "lon": -3.52775,
    "lat": 40.503529
  }
}, {
  "id": 2522005,
  "name": "Algodonales",
  "country": "ES",
  "coord": {
    "lon": -5.40536,
    "lat": 36.88044
  }
}, {
  "id": 6357803,
  "name": "Vegas del Genil",
  "country": "ES",
  "coord": {
    "lon": -3.68933,
    "lat": 37.169659
  }
}, {
  "id": 6359191,
  "name": "Mondoñedo",
  "country": "ES",
  "coord": {
    "lon": -7.34928,
    "lat": 43.431568
  }
}, {
  "id": 3123246,
  "name": "El Tiemblo",
  "country": "ES",
  "coord": {
    "lon": -4.50156,
    "lat": 40.415329
  }
}, {
  "id": 3105412,
  "name": "Villamayor",
  "country": "ES",
  "coord": {
    "lon": -5.02657,
    "lat": 40.935539
  }
}, {
  "id": 6358254,
  "name": "Zalamea la Real",
  "country": "ES",
  "coord": {
    "lon": -6.66012,
    "lat": 37.637421
  }
}, {
  "id": 6361944,
  "name": "Calles",
  "country": "ES",
  "coord": {
    "lon": -0.97657,
    "lat": 39.727219
  }
}, {
  "id": 6357802,
  "name": "El Pina",
  "country": "ES",
  "coord": {
    "lon": -3.5527,
    "lat": 36.912708
  }
}, {
  "id": 3127578,
  "name": "Búbal",
  "country": "ES",
  "coord": {
    "lon": -0.32144,
    "lat": 42.683441
  }
}, {
  "id": 6362081,
  "name": "Rocafort",
  "country": "ES",
  "coord": {
    "lon": -0.41203,
    "lat": 39.537289
  }
}, {
  "id": 6362640,
  "name": "Tábara",
  "country": "ES",
  "coord": {
    "lon": -5.9746,
    "lat": 41.853901
  }
}, {
  "id": 3130092,
  "name": "Ancin",
  "country": "ES",
  "coord": {
    "lon": -2.18885,
    "lat": 42.660469
  }
}, {
  "id": 6355840,
  "name": "Tolbaños",
  "country": "ES",
  "coord": {
    "lon": -4.5888,
    "lat": 40.75544
  }
}, {
  "id": 3107034,
  "name": "Valdazo",
  "country": "ES",
  "coord": {
    "lon": -3.36245,
    "lat": 42.524639
  }
}, {
  "id": 3898749,
  "name": "Barón",
  "country": "CL",
  "coord": {
    "lon": -71.60202,
    "lat": -33.040619
  }
}, {
  "id": 3881974,
  "name": "Región de Los Lagos",
  "country": "CL",
  "coord": {
    "lon": -73,
    "lat": -41.75
  }
}, {
  "id": 6458708,
  "name": "Las Animas",
  "country": "CL",
  "coord": {
    "lon": -73.218208,
    "lat": -39.80867
  }
}, {
  "id": 3874960,
  "name": "Puerto Montt",
  "country": "CL",
  "coord": {
    "lon": -72.94474,
    "lat": -41.469849
  }
}, {
  "id": 3884448,
  "name": "Las Condes",
  "country": "CL",
  "coord": {
    "lon": -70.51667,
    "lat": -33.366669
  }
}, {
  "id": 3880306,
  "name": "Región del Maule",
  "country": "CL",
  "coord": {
    "lon": -71.5,
    "lat": -35.5
  }
}, {
  "id": 3870294,
  "name": "Talca",
  "country": "CL",
  "coord": {
    "lon": -71.666672,
    "lat": -35.433331
  }
}, {
  "id": 3893894,
  "name": "Concepcion",
  "country": "CL",
  "coord": {
    "lon": -73.049767,
    "lat": -36.826988
  }
}, {
  "id": 3899537,
  "name": "Región de Antofagasta",
  "country": "CL",
  "coord": {
    "lon": -69,
    "lat": -23.5
  }
}, {
  "id": 3894689,
  "name": "Chuquicamata",
  "country": "CL",
  "coord": {
    "lon": -68.933327,
    "lat": -22.316669
  }
}, {
  "id": 3882722,
  "name": "Lo Contador",
  "country": "CL",
  "coord": {
    "lon": -70.633331,
    "lat": -33.416672
  }
}, {
  "id": 3875139,
  "name": "Providencia",
  "country": "CL",
  "coord": {
    "lon": -70.616669,
    "lat": -33.433331
  }
}, {
  "id": 3899463,
  "name": "Región de la Araucanía",
  "country": "CL",
  "coord": {
    "lon": -72,
    "lat": -38.5
  }
}, {
  "id": 3880980,
  "name": "Maipú",
  "country": "CL",
  "coord": {
    "lon": -70.76667,
    "lat": -33.51667
  }
}, {
  "id": 3887555,
  "name": "Huilco",
  "country": "CL",
  "coord": {
    "lon": -71.216667,
    "lat": -33.700001
  }
}, {
  "id": 3852125,
  "name": "La Cesira",
  "country": "AR",
  "coord": {
    "lon": -62.972382,
    "lat": -33.951149
  }
}, {
  "id": 3839096,
  "name": "Retamito",
  "country": "AR",
  "coord": {
    "lon": -68.601784,
    "lat": -32.1022
  }
}, {
  "id": 1731340,
  "name": "Allen",
  "country": "PH",
  "coord": {
    "lon": 124.284897,
    "lat": 12.5006
  }
}, {
  "id": 1715345,
  "name": "Province of Davao del Sur",
  "country": "PH",
  "coord": {
    "lon": 125.5,
    "lat": 6.33333
  }
}, {
  "id": 1636884,
  "name": "Magelang",
  "country": "ID",
  "coord": {
    "lon": 110.217781,
    "lat": -7.47056
  }
}, {
  "id": 7529270,
  "name": "Abianbase",
  "country": "ID",
  "coord": {
    "lon": 115.181503,
    "lat": -8.713
  }
}, {
  "id": 1629001,
  "name": "Samarinda",
  "country": "ID",
  "coord": {
    "lon": 117.150002,
    "lat": -0.5
  }
}, {
  "id": 7040617,
  "name": "Sojadibawah",
  "country": "ID",
  "coord": {
    "lon": 128.200684,
    "lat": -3.70895
  }
}, {
  "id": 7406903,
  "name": "Banjar Banyuning Barat",
  "country": "ID",
  "coord": {
    "lon": 115.102097,
    "lat": -8.1145
  }
}, {
  "id": 1626542,
  "name": "Sorong",
  "country": "ID",
  "coord": {
    "lon": 131.25,
    "lat": -0.88333
  }
}, {
  "id": 1185056,
  "name": "Abbottabad",
  "country": "PK",
  "coord": {
    "lon": 73.214493,
    "lat": 34.146851
  }
}, {
  "id": 2186240,
  "name": "New Plymouth District",
  "country": "NZ",
  "coord": {
    "lon": 175.066666,
    "lat": -39.066669
  }
}, {
  "id": 2186239,
  "name": "New Plymouth",
  "country": "NZ",
  "coord": {
    "lon": 174.083328,
    "lat": -39.066669
  }
}, {
  "id": 2207730,
  "name": "Northcote",
  "country": "NZ",
  "coord": {
    "lon": 174.745834,
    "lat": -36.815281
  }
}, {
  "id": 6244857,
  "name": "Seaview",
  "country": "NZ",
  "coord": {
    "lon": 174.890182,
    "lat": -41.23827
  }
}, {
  "id": 2182715,
  "name": "Silverstream",
  "country": "NZ",
  "coord": {
    "lon": 175,
    "lat": -41.150002
  }
}, {
  "id": 6612108,
  "name": "Nelson",
  "country": "NZ",
  "coord": {
    "lon": 173.284012,
    "lat": -41.270889
  }
}, {
  "id": 2190223,
  "name": "Hastings District",
  "country": "NZ",
  "coord": {
    "lon": 176.850006,
    "lat": -39.633331
  }
}, {
  "id": 2190767,
  "name": "Gisborne",
  "country": "NZ",
  "coord": {
    "lon": 178,
    "lat": -38.650002
  }
}, {
  "id": 7910042,
  "name": "Hauraki District",
  "country": "NZ",
  "coord": {
    "lon": 175.580215,
    "lat": -37.294151
  }
}, {
  "id": 1135689,
  "name": "Kunduz",
  "country": "AF",
  "coord": {
    "lon": 68.857002,
    "lat": 36.728958
  }
}, {
  "id": 1148658,
  "name": "Andkhoy",
  "country": "AF",
  "coord": {
    "lon": 65.123756,
    "lat": 36.95293
  }
}, {
  "id": 2962864,
  "name": "Listowel",
  "country": "IE",
  "coord": {
    "lon": -9.485,
    "lat": 52.446388
  }
}, {
  "id": 2961192,
  "name": "Tipperary",
  "country": "IE",
  "coord": {
    "lon": -8.15583,
    "lat": 52.473331
  }
}, {
  "id": 2962252,
  "name": "New Ross",
  "country": "IE",
  "coord": {
    "lon": -6.93667,
    "lat": 52.396671
  }
}, {
  "id": 2961636,
  "name": "Saggart",
  "country": "IE",
  "coord": {
    "lon": -6.44444,
    "lat": 53.280281
  }
}, {
  "id": 2800482,
  "name": "Charleroi",
  "country": "BE",
  "coord": {
    "lon": 4.44654,
    "lat": 50.412998
  }
}, {
  "id": 2786421,
  "name": "Soignies",
  "country": "BE",
  "coord": {
    "lon": 4.04431,
    "lat": 50.56358
  }
}, {
  "id": 2784803,
  "name": "Arrondissement Veurne",
  "country": "BE",
  "coord": {
    "lon": 2.6706,
    "lat": 51.05558
  }
}, {
  "id": 2784805,
  "name": "Veurne",
  "country": "BE",
  "coord": {
    "lon": 2.67484,
    "lat": 51.052021
  }
}, {
  "id": 2784804,
  "name": "Veurne",
  "country": "BE",
  "coord": {
    "lon": 2.66238,
    "lat": 51.072311
  }
}, {
  "id": 2792412,
  "name": "Arrondissement de Liège",
  "country": "BE",
  "coord": {
    "lon": 5.56509,
    "lat": 50.633781
  }
}, {
  "id": 2792414,
  "name": "Liège",
  "country": "BE",
  "coord": {
    "lon": 5.56667,
    "lat": 50.633331
  }
}, {
  "id": 2793643,
  "name": "La Ferté",
  "country": "BE",
  "coord": {
    "lon": 4.41667,
    "lat": 50.466671
  }
}, {
  "id": 2800930,
  "name": "Arrondissement Brugge",
  "country": "BE",
  "coord": {
    "lon": 3.21667,
    "lat": 51.200001
  }
}, {
  "id": 2800935,
  "name": "Brugge",
  "country": "BE",
  "coord": {
    "lon": 3.21667,
    "lat": 51.25
  }
}, {
  "id": 2803444,
  "name": "Aalter",
  "country": "BE",
  "coord": {
    "lon": 3.43333,
    "lat": 51.083328
  }
}, {
  "id": 2791316,
  "name": "Merelbeke",
  "country": "BE",
  "coord": {
    "lon": 3.74366,
    "lat": 50.972641
  }
}, {
  "id": 2790100,
  "name": "Arrondissement de Nivelles",
  "country": "BE",
  "coord": {
    "lon": 4.31667,
    "lat": 50.599998
  }
}, {
  "id": 2790102,
  "name": "Nivelles",
  "country": "BE",
  "coord": {
    "lon": 4.32733,
    "lat": 50.59877
  }
}, {
  "id": 2797671,
  "name": "Genk",
  "country": "BE",
  "coord": {
    "lon": 5.5,
    "lat": 50.966671
  }
}, {
  "id": 2789200,
  "name": "Pennepoel",
  "country": "BE",
  "coord": {
    "lon": 4.47549,
    "lat": 51.037788
  }
}, {
  "id": 2784975,
  "name": "Veeweide",
  "country": "BE",
  "coord": {
    "lon": 4.3,
    "lat": 50.833328
  }
}, {
  "id": 2794017,
  "name": "Kraainem",
  "country": "BE",
  "coord": {
    "lon": 4.47178,
    "lat": 50.861992
  }
}, {
  "id": 2794016,
  "name": "Kraainem",
  "country": "BE",
  "coord": {
    "lon": 4.46946,
    "lat": 50.861549
  }
}, {
  "id": 2784822,
  "name": "Verviers",
  "country": "BE",
  "coord": {
    "lon": 5.86667,
    "lat": 50.583328
  }
}, {
  "id": 2789738,
  "name": "Oostrozebeke",
  "country": "BE",
  "coord": {
    "lon": 3.34003,
    "lat": 50.929611
  }
}, {
  "id": 2803421,
  "name": "Aartselaar",
  "country": "BE",
  "coord": {
    "lon": 4.38269,
    "lat": 51.135422
  }
}, {
  "id": 2800782,
  "name": "Bullange",
  "country": "BE",
  "coord": {
    "lon": 6.25749,
    "lat": 50.40731
  }
}, {
  "id": 2795011,
  "name": "Ixelles",
  "country": "BE",
  "coord": {
    "lon": 4.36667,
    "lat": 50.833328
  }
}, {
  "id": 2793442,
  "name": "Lanceaumont",
  "country": "BE",
  "coord": {
    "lon": 5.96455,
    "lat": 50.654629
  }
}, {
  "id": 2785623,
  "name": "Tervuren",
  "country": "BE",
  "coord": {
    "lon": 4.51667,
    "lat": 50.816669
  }
}, {
  "id": 2803074,
  "name": "Arlon",
  "country": "BE",
  "coord": {
    "lon": 5.81667,
    "lat": 49.683331
  }
}, {
  "id": 2787498,
  "name": "Ruyff",
  "country": "BE",
  "coord": {
    "lon": 5.93333,
    "lat": 50.616669
  }
}, {
  "id": 2795931,
  "name": "Herstal",
  "country": "BE",
  "coord": {
    "lon": 5.62569,
    "lat": 50.664478
  }
}, {
  "id": 2803183,
  "name": "Angleur",
  "country": "BE",
  "coord": {
    "lon": 5.59942,
    "lat": 50.611301
  }
}, {
  "id": 2786548,
  "name": "Sint-Stevens-Woluwe",
  "country": "BE",
  "coord": {
    "lon": 4.45195,
    "lat": 50.868382
  }
}, {
  "id": 2783737,
  "name": "Wezembeek-Oppem",
  "country": "BE",
  "coord": {
    "lon": 4.49427,
    "lat": 50.8395
  }
}, {
  "id": 2792008,
  "name": "Lummen",
  "country": "BE",
  "coord": {
    "lon": 5.1943,
    "lat": 50.988041
  }
}, {
  "id": 2783856,
  "name": "Wemmel",
  "country": "BE",
  "coord": {
    "lon": 4.30613,
    "lat": 50.908119
  }
}, {
  "id": 2783213,
  "name": "Zittaard",
  "country": "BE",
  "coord": {
    "lon": 5.10742,
    "lat": 50.944801
  }
}, {
  "id": 2802584,
  "name": "Bastogne",
  "country": "BE",
  "coord": {
    "lon": 5.71667,
    "lat": 50
  }
}, {
  "id": 2792119,
  "name": "Lontzen",
  "country": "BE",
  "coord": {
    "lon": 6.00712,
    "lat": 50.681259
  }
}, {
  "id": 2802627,
  "name": "Basse Awirs",
  "country": "BE",
  "coord": {
    "lon": 5.41524,
    "lat": 50.58654
  }
}, {
  "id": 2802051,
  "name": "Bever",
  "country": "BE",
  "coord": {
    "lon": 4.31667,
    "lat": 50.916672
  }
}, {
  "id": 2792135,
  "name": "Longtain",
  "country": "BE",
  "coord": {
    "lon": 4.2,
    "lat": 50.48333
  }
}, {
  "id": 2790793,
  "name": "Montils",
  "country": "BE",
  "coord": {
    "lon": 3.85,
    "lat": 50.599998
  }
}, {
  "id": 2785879,
  "name": "Sur le Stockeu",
  "country": "BE",
  "coord": {
    "lon": 5.93338,
    "lat": 50.38982
  }
}, {
  "id": 2784373,
  "name": "Voroux-lez-Liers",
  "country": "BE",
  "coord": {
    "lon": 5.5544,
    "lat": 50.68745
  }
}, {
  "id": 2795818,
  "name": "Heulen",
  "country": "BE",
  "coord": {
    "lon": 4.25969,
    "lat": 50.342159
  }
}, {
  "id": 2796057,
  "name": "Hensies",
  "country": "BE",
  "coord": {
    "lon": 3.68566,
    "lat": 50.433182
  }
}, {
  "id": 2790015,
  "name": "Nothomb",
  "country": "BE",
  "coord": {
    "lon": 5.78773,
    "lat": 49.771561
  }
}, {
  "id": 2791643,
  "name": "Martelange",
  "country": "BE",
  "coord": {
    "lon": 5.73881,
    "lat": 49.83234
  }
}, {
  "id": 2798594,
  "name": "Étalle",
  "country": "BE",
  "coord": {
    "lon": 5.61667,
    "lat": 49.666672
  }
}, {
  "id": 2800026,
  "name": "Couvin",
  "country": "BE",
  "coord": {
    "lon": 4.49306,
    "lat": 50.052898
  }
}, {
  "id": 2788187,
  "name": "Rendeux",
  "country": "BE",
  "coord": {
    "lon": 5.5,
    "lat": 50.23333
  }
}, {
  "id": 2802248,
  "name": "Sint-Agatha-Berchem",
  "country": "BE",
  "coord": {
    "lon": 4.28333,
    "lat": 50.866669
  }
}, {
  "id": 2787601,
  "name": "Royère",
  "country": "BE",
  "coord": {
    "lon": 3.26667,
    "lat": 50.683331
  }
}, {
  "id": 6957848,
  "name": "Courtil Gras",
  "country": "BE",
  "coord": {
    "lon": 3.76667,
    "lat": 50.583328
  }
}, {
  "id": 3449340,
  "name": "Sao Borja",
  "country": "BR",
  "coord": {
    "lon": -56.00444,
    "lat": -28.660561
  }
}, {
  "id": 3398584,
  "name": "Guamaré",
  "country": "BR",
  "coord": {
    "lon": -36.320278,
    "lat": -5.1075
  }
}, {
  "id": 3461874,
  "name": "Guararapes",
  "country": "BR",
  "coord": {
    "lon": -50.64278,
    "lat": -21.26083
  }
}, {
  "id": 3462103,
  "name": "Grão Mogol",
  "country": "BR",
  "coord": {
    "lon": -42.889721,
    "lat": -16.559441
  }
}, {
  "id": 2661072,
  "name": "Crissier",
  "country": "CH",
  "coord": {
    "lon": 6.57125,
    "lat": 46.551651
  }
}, {
  "id": 7285732,
  "name": "Ennenda",
  "country": "CH",
  "coord": {
    "lon": 9.09862,
    "lat": 47.044529
  }
}, {
  "id": 7285229,
  "name": "Bevaix",
  "country": "CH",
  "coord": {
    "lon": 6.80414,
    "lat": 46.931149
  }
}, {
  "id": 2660395,
  "name": "Heerbrugg",
  "country": "CH",
  "coord": {
    "lon": 9.62544,
    "lat": 47.413681
  }
}, {
  "id": 7286497,
  "name": "Mettmenstetten",
  "country": "CH",
  "coord": {
    "lon": 8.46399,
    "lat": 47.247791
  }
}, {
  "id": 7285725,
  "name": "Emmen",
  "country": "CH",
  "coord": {
    "lon": 8.28621,
    "lat": 47.086571
  }
}, {
  "id": 2660634,
  "name": "Gerliswil",
  "country": "CH",
  "coord": {
    "lon": 8.26607,
    "lat": 47.07885
  }
}, {
  "id": 2660573,
  "name": "Goldau",
  "country": "CH",
  "coord": {
    "lon": 8.54616,
    "lat": 47.047611
  }
}, {
  "id": 7286876,
  "name": "Reinach (AG)",
  "country": "CH",
  "coord": {
    "lon": 8.17929,
    "lat": 47.261162
  }
}, {
  "id": 7287070,
  "name": "Schaffhausen",
  "country": "CH",
  "coord": {
    "lon": 8.62473,
    "lat": 47.72139
  }
}, {
  "id": 6458826,
  "name": "Bezirk Brugg",
  "country": "CH",
  "coord": {
    "lon": 8.17798,
    "lat": 47.47776
  }
}, {
  "id": 7286962,
  "name": "Rothrist",
  "country": "CH",
  "coord": {
    "lon": 7.88535,
    "lat": 47.298351
  }
}, {
  "id": 7669598,
  "name": "Gländ",
  "country": "CH",
  "coord": {
    "lon": 7.90484,
    "lat": 47.29636
  }
}, {
  "id": 2660279,
  "name": "Ibach",
  "country": "CH",
  "coord": {
    "lon": 8.64538,
    "lat": 47.011051
  }
}, {
  "id": 2659967,
  "name": "Leibstadt",
  "country": "CH",
  "coord": {
    "lon": 8.17611,
    "lat": 47.587898
  }
}, {
  "id": 2658495,
  "name": "Steckborn",
  "country": "CH",
  "coord": {
    "lon": 8.98333,
    "lat": 47.666672
  }
}, {
  "id": 7285002,
  "name": "District de la Broye-Vully",
  "country": "CH",
  "coord": {
    "lon": 6.90161,
    "lat": 46.780819
  }
}, {
  "id": 7285186,
  "name": "Bellerive (VD)",
  "country": "CH",
  "coord": {
    "lon": 7.0252,
    "lat": 46.923111
  }
}, {
  "id": 7669891,
  "name": "Salavaux",
  "country": "CH",
  "coord": {
    "lon": 7.02324,
    "lat": 46.919682
  }
}, {
  "id": 7286683,
  "name": "Oberegg",
  "country": "CH",
  "coord": {
    "lon": 9.55753,
    "lat": 47.416939
  }
}, {
  "id": 7285073,
  "name": "Amriswil",
  "country": "CH",
  "coord": {
    "lon": 9.28712,
    "lat": 47.542789
  }
}, {
  "id": 7285633,
  "name": "Delémont",
  "country": "CH",
  "coord": {
    "lon": 7.3329,
    "lat": 47.375092
  }
}, {
  "id": 7286852,
  "name": "Ramsen",
  "country": "CH",
  "coord": {
    "lon": 8.81468,
    "lat": 47.70483
  }
}, {
  "id": 7285984,
  "name": "Grindelwald",
  "country": "CH",
  "coord": {
    "lon": 8.05098,
    "lat": 46.619068
  }
}, {
  "id": 2660498,
  "name": "Grindelwald",
  "country": "CH",
  "coord": {
    "lon": 8.03601,
    "lat": 46.623959
  }
}, {
  "id": 6290617,
  "name": "Erli",
  "country": "CH",
  "coord": {
    "lon": 8.48569,
    "lat": 47.316792
  }
}, {
  "id": 7287529,
  "name": "Wallisellen",
  "country": "CH",
  "coord": {
    "lon": 8.59489,
    "lat": 47.417381
  }
}, {
  "id": 6291373,
  "name": "Wallisellen / Wallisellen-West",
  "country": "CH",
  "coord": {
    "lon": 8.58586,
    "lat": 47.41906
  }
}, {
  "id": 7285021,
  "name": "Adligenswil",
  "country": "CH",
  "coord": {
    "lon": 8.36841,
    "lat": 47.07233
  }
}, {
  "id": 2661862,
  "name": "Adligenswil",
  "country": "CH",
  "coord": {
    "lon": 8.36124,
    "lat": 47.065208
  }
}, {
  "id": 7287406,
  "name": "Val-de-Travers",
  "country": "CH",
  "coord": {
    "lon": 6.5974,
    "lat": 46.924351
  }
}, {
  "id": 2661751,
  "name": "Bezirk Andelfingen",
  "country": "CH",
  "coord": {
    "lon": 8.75,
    "lat": 47.583328
  }
}, {
  "id": 7285845,
  "name": "Flurlingen",
  "country": "CH",
  "coord": {
    "lon": 8.6367,
    "lat": 47.682362
  }
}, {
  "id": 6294571,
  "name": "Hütten",
  "country": "CH",
  "coord": {
    "lon": 8.70808,
    "lat": 47.335281
  }
}, {
  "id": 7287107,
  "name": "Schönenberg (ZH)",
  "country": "CH",
  "coord": {
    "lon": 8.64004,
    "lat": 47.193958
  }
}, {
  "id": 2660414,
  "name": "Hämikon",
  "country": "CH",
  "coord": {
    "lon": 8.2764,
    "lat": 47.238392
  }
}, {
  "id": 7287468,
  "name": "Villars-sur-Glâne",
  "country": "CH",
  "coord": {
    "lon": 7.12515,
    "lat": 46.794361
  }
}, {
  "id": 7286078,
  "name": "Herzogenbuchsee",
  "country": "CH",
  "coord": {
    "lon": 7.70619,
    "lat": 47.188381
  }
}, {
  "id": 6458891,
  "name": "Bezirk Arbon",
  "country": "CH",
  "coord": {
    "lon": 9.36971,
    "lat": 47.53347
  }
}, {
  "id": 2658279,
  "name": "Uerkheim",
  "country": "CH",
  "coord": {
    "lon": 8.02371,
    "lat": 47.302891
  }
}, {
  "id": 2660887,
  "name": "Entlebuch",
  "country": "CH",
  "coord": {
    "lon": 8.06667,
    "lat": 46.98333
  }
}, {
  "id": 2659993,
  "name": "Lausen",
  "country": "CH",
  "coord": {
    "lon": 7.7603,
    "lat": 47.47139
  }
}, {
  "id": 2659472,
  "name": "Nidfurn",
  "country": "CH",
  "coord": {
    "lon": 9.05468,
    "lat": 46.98674
  }
}, {
  "id": 2660857,
  "name": "Eschlikon",
  "country": "CH",
  "coord": {
    "lon": 8.96381,
    "lat": 47.463612
  }
}, {
  "id": 2660863,
  "name": "Erstfeld",
  "country": "CH",
  "coord": {
    "lon": 8.65052,
    "lat": 46.818851
  }
}, {
  "id": 2659552,
  "name": "Munchenbuchsee",
  "country": "CH",
  "coord": {
    "lon": 7.45036,
    "lat": 47.021751
  }
}, {
  "id": 7287077,
  "name": "Schattdorf",
  "country": "CH",
  "coord": {
    "lon": 8.67129,
    "lat": 46.849361
  }
}, {
  "id": 2660795,
  "name": "Ferret",
  "country": "CH",
  "coord": {
    "lon": 7.10508,
    "lat": 45.91547
  }
}, {
  "id": 2659594,
  "name": "Morcles",
  "country": "CH",
  "coord": {
    "lon": 7.03631,
    "lat": 46.20871
  }
}, {
  "id": 3360687,
  "name": "Table View",
  "country": "ZA",
  "coord": {
    "lon": 18.4881,
    "lat": -33.81913
  }
}, {
  "id": 3362349,
  "name": "Robertson",
  "country": "ZA",
  "coord": {
    "lon": 19.88537,
    "lat": -33.803421
  }
}, {
  "id": 951506,
  "name": "Sukani",
  "country": "ZA",
  "coord": {
    "lon": 30.716669,
    "lat": -23.316669
  }
}, {
  "id": 1105773,
  "name": "Garsfontein",
  "country": "ZA",
  "coord": {
    "lon": 28.299999,
    "lat": -25.793501
  }
}, {
  "id": 986820,
  "name": "Krugersdorp West",
  "country": "ZA",
  "coord": {
    "lon": 27.748409,
    "lat": -26.0979
  }
}, {
  "id": 994557,
  "name": "Irene",
  "country": "ZA",
  "coord": {
    "lon": 28.21777,
    "lat": -25.87044
  }
}, {
  "id": 941376,
  "name": "Waverley",
  "country": "ZA",
  "coord": {
    "lon": 28.259069,
    "lat": -25.702299
  }
}, {
  "id": 901344,
  "name": "Ndola",
  "country": "ZM",
  "coord": {
    "lon": 28.636589,
    "lat": -12.95867
  }
}, {
  "id": 188408,
  "name": "Magadi",
  "country": "KE",
  "coord": {
    "lon": 36.286999,
    "lat": -1.90122
  }
}, {
  "id": 7602869,
  "name": "Concelho da Ribeira Brava",
  "country": "CV",
  "coord": {
    "lon": -24.200001,
    "lat": 16.616671
  }
}, {
  "id": 3374121,
  "name": "Vila da Ribeira Brava",
  "country": "CV",
  "coord": {
    "lon": -24.299999,
    "lat": 16.616671
  }
}, {
  "id": 3374855,
  "name": "Concelho da Boa Vista",
  "country": "CV",
  "coord": {
    "lon": -22.83333,
    "lat": 16.08333
  }
}, {
  "id": 3374235,
  "name": "Sal Rei",
  "country": "CV",
  "coord": {
    "lon": -22.91667,
    "lat": 16.183331
  }
}, {
  "id": 3374161,
  "name": "Concelho do Tarrafal",
  "country": "CV",
  "coord": {
    "lon": -23.716669,
    "lat": 15.26667
  }
}, {
  "id": 3374166,
  "name": "Tarrafal",
  "country": "CV",
  "coord": {
    "lon": -23.76667,
    "lat": 15.28333
  }
}, {
  "id": 6413337,
  "name": "Eastern Province",
  "country": "RW",
  "coord": {
    "lon": 30.5,
    "lat": -1.75
  }
}, {
  "id": 202068,
  "name": "Kibungo",
  "country": "RW",
  "coord": {
    "lon": 30.5427,
    "lat": -2.1597
  }
}, {
  "id": 6413339,
  "name": "Province du Nord",
  "country": "RW",
  "coord": {
    "lon": 29.91667,
    "lat": -1.58333
  }
}, {
  "id": 7592960,
  "name": "Byumba Ville",
  "country": "RW",
  "coord": {
    "lon": 30.0634,
    "lat": -1.5734
  }
}, {
  "id": 6413340,
  "name": "Western Province",
  "country": "RW",
  "coord": {
    "lon": 29.33333,
    "lat": -2.16667
  }
}, {
  "id": 202905,
  "name": "Gisenyi",
  "country": "RW",
  "coord": {
    "lon": 29.25639,
    "lat": -1.70278
  }
}, {
  "id": 383968,
  "name": "Huye",
  "country": "RW",
  "coord": {
    "lon": 29.716,
    "lat": -2.5805
  }
}, {
  "id": 7572238,
  "name": "Gahondogo",
  "country": "RW",
  "coord": {
    "lon": 29.6185,
    "lat": -1.4856
  }
}, {
  "id": 932184,
  "name": "Quthing District",
  "country": "LS",
  "coord": {
    "lon": 28,
    "lat": -30.41667
  }
}, {
  "id": 932700,
  "name": "Leribe District",
  "country": "LS",
  "coord": {
    "lon": 28.252661,
    "lat": -29.03651
  }
}, {
  "id": 932521,
  "name": "Maputsoe",
  "country": "LS",
  "coord": {
    "lon": 27.9,
    "lat": -28.883329
  }
}, {
  "id": 932698,
  "name": "Leribe",
  "country": "LS",
  "coord": {
    "lon": 28.04501,
    "lat": -28.871849
  }
}, {
  "id": 934275,
  "name": "Moka District",
  "country": "MU",
  "coord": {
    "lon": 57.566669,
    "lat": -20.25
  }
}, {
  "id": 934277,
  "name": "Moka",
  "country": "MU",
  "coord": {
    "lon": 57.495831,
    "lat": -20.218889
  }
}, {
  "id": 934131,
  "name": "Quatre Bornes",
  "country": "MU",
  "coord": {
    "lon": 57.471939,
    "lat": -20.264441
  }
}, {
  "id": 934333,
  "name": "Long Mountain",
  "country": "MU",
  "coord": {
    "lon": 57.562222,
    "lat": -20.143061
  }
}, {
  "id": 53654,
  "name": "Mogadishu",
  "country": "SO",
  "coord": {
    "lon": 45.34375,
    "lat": 2.03711
  }
}, {
  "id": 50360,
  "name": "Gobolka Woqooyi Galbeed",
  "country": "SO",
  "coord": {
    "lon": 44.5,
    "lat": 10
  }
}, {
  "id": 61993,
  "name": "Dalooldho",
  "country": "SO",
  "coord": {
    "lon": 44.06229,
    "lat": 9.59271
  }
}, {
  "id": 64661,
  "name": "Gobolka Bari",
  "country": "SO",
  "coord": {
    "lon": 50,
    "lat": 10
  }
}, {
  "id": 64013,
  "name": "Boosaaso",
  "country": "SO",
  "coord": {
    "lon": 49.18158,
    "lat": 11.28421
  }
}, {
  "id": 53477,
  "name": "Gobolka Nugaal",
  "country": "SO",
  "coord": {
    "lon": 49,
    "lat": 8.16667
  }
}, {
  "id": 58933,
  "name": "Garoowe",
  "country": "SO",
  "coord": {
    "lon": 48.484459,
    "lat": 8.40536
  }
}, {
  "id": 886748,
  "name": "Matabeleland North Province",
  "country": "ZW",
  "coord": {
    "lon": 27.5,
    "lat": -19
  }
}, {
  "id": 884428,
  "name": "Newlands",
  "country": "ZW",
  "coord": {
    "lon": 31.081671,
    "lat": -17.80806
  }
}, {
  "id": 2278292,
  "name": "Bong County",
  "country": "LR",
  "coord": {
    "lon": -9.66667,
    "lat": 7
  }
}, {
  "id": 2277060,
  "name": "Gbarnga",
  "country": "LR",
  "coord": {
    "lon": -9.47222,
    "lat": 6.99556
  }
}, {
  "id": 2593120,
  "name": "River Gee County",
  "country": "LR",
  "coord": {
    "lon": -7.91667,
    "lat": 5.25
  }
}, {
  "id": 2273638,
  "name": "Fish Town",
  "country": "LR",
  "coord": {
    "lon": -7.87556,
    "lat": 5.19639
  }
}, {
  "id": 2276630,
  "name": "Grand Bassa County",
  "country": "LR",
  "coord": {
    "lon": -9.75,
    "lat": 6.25
  }
}, {
  "id": 2278158,
  "name": "Buchanan",
  "country": "LR",
  "coord": {
    "lon": -10.04667,
    "lat": 5.88083
  }
}, {
  "id": 241170,
  "name": "Republic of Seychelles",
  "country": "SC",
  "coord": {
    "lon": 55.666672,
    "lat": -4.58333
  }
}, {
  "id": 241302,
  "name": "English River",
  "country": "SC",
  "coord": {
    "lon": 55.450001,
    "lat": -4.59167
  }
}, {
  "id": 6690283,
  "name": "Réunion",
  "country": "RE",
  "coord": {
    "lon": 55.602058,
    "lat": -21.100439
  }
}, {
  "id": 6690284,
  "name": "Réunion",
  "country": "RE",
  "coord": {
    "lon": 55.603439,
    "lat": -21.10084
  }
}, {
  "id": 935213,
  "name": "Arrondissement de Saint-Pierre",
  "country": "RE",
  "coord": {
    "lon": 55.583328,
    "lat": -21.25
  }
}, {
  "id": 6690308,
  "name": "Cilaos",
  "country": "RE",
  "coord": {
    "lon": 55.466671,
    "lat": -21.116671
  }
}, {
  "id": 935975,
  "name": "Cilaos",
  "country": "RE",
  "coord": {
    "lon": 55.471901,
    "lat": -21.13357
  }
}, {
  "id": 935612,
  "name": "Le Ramier",
  "country": "RE",
  "coord": {
    "lon": 55.536221,
    "lat": -21.02186
  }
}, {
  "id": 935220,
  "name": "Arrondissement de Saint-Paul",
  "country": "RE",
  "coord": {
    "lon": 55.333328,
    "lat": -21.08333
  }
}, {
  "id": 6690292,
  "name": "La Possession",
  "country": "RE",
  "coord": {
    "lon": 55.333328,
    "lat": -20.91667
  }
}, {
  "id": 2469174,
  "name": "Mārith",
  "country": "TN",
  "coord": {
    "lon": 10.28536,
    "lat": 33.617939
  }
}, {
  "id": 2473744,
  "name": "Al Hammamat",
  "country": "TN",
  "coord": {
    "lon": 10.61667,
    "lat": 36.400002
  }
}, {
  "id": 2467813,
  "name": "Rafraf",
  "country": "TN",
  "coord": {
    "lon": 10.18365,
    "lat": 37.19043
  }
}, {
  "id": 2465837,
  "name": "Gouvernorat de Sidi Bou Zid",
  "country": "TN",
  "coord": {
    "lon": 9.5,
    "lat": 34.833328
  }
}, {
  "id": 2465840,
  "name": "Sidi Bouzid",
  "country": "TN",
  "coord": {
    "lon": 9.48494,
    "lat": 35.038231
  }
}, {
  "id": 2464701,
  "name": "Tataouine",
  "country": "TN",
  "coord": {
    "lon": 10.45177,
    "lat": 32.929668
  }
}, {
  "id": 2472379,
  "name": "Bir Ali Bin Khalifah",
  "country": "TN",
  "coord": {
    "lon": 10.0924,
    "lat": 34.73592
  }
}, {
  "id": 2472706,
  "name": "Bizerte",
  "country": "TN",
  "coord": {
    "lon": 9.87391,
    "lat": 37.274422
  }
}, {
  "id": 2469140,
  "name": "Masakin",
  "country": "TN",
  "coord": {
    "lon": 10.58082,
    "lat": 35.729172
  }
}, {
  "id": 2472675,
  "name": "Le Bardo",
  "country": "TN",
  "coord": {
    "lon": 10.14056,
    "lat": 36.80917
  }
}, {
  "id": 311044,
  "name": "İzmir",
  "country": "TR",
  "coord": {
    "lon": 27.092291,
    "lat": 38.462189
  }
}, {
  "id": 311046,
  "name": "Izmir",
  "country": "TR",
  "coord": {
    "lon": 27.13838,
    "lat": 38.412731
  }
}, {
  "id": 745977,
  "name": "Halkalı",
  "country": "TR",
  "coord": {
    "lon": 28.78944,
    "lat": 41.036671
  }
}, {
  "id": 304922,
  "name": "Malatya",
  "country": "TR",
  "coord": {
    "lon": 38.316669,
    "lat": 38.350182
  }
}, {
  "id": 747014,
  "name": "Gebze",
  "country": "TR",
  "coord": {
    "lon": 29.430679,
    "lat": 40.802761
  }
}, {
  "id": 737022,
  "name": "Zonguldak",
  "country": "TR",
  "coord": {
    "lon": 31.793051,
    "lat": 41.451389
  }
}, {
  "id": 737611,
  "name": "Yenisehir",
  "country": "TR",
  "coord": {
    "lon": 29.653061,
    "lat": 40.264439
  }
}, {
  "id": 741045,
  "name": "Orhangazi",
  "country": "TR",
  "coord": {
    "lon": 29.308889,
    "lat": 40.48917
  }
}, {
  "id": 388292,
  "name": "Barbaros",
  "country": "TR",
  "coord": {
    "lon": 36.164951,
    "lat": 36.580009
  }
}, {
  "id": 748893,
  "name": "Corlu",
  "country": "TR",
  "coord": {
    "lon": 27.799999,
    "lat": 41.159168
  }
}, {
  "id": 300619,
  "name": "Sivas",
  "country": "TR",
  "coord": {
    "lon": 37.016109,
    "lat": 39.748329
  }
}, {
  "id": 749274,
  "name": "Cerkezkoy",
  "country": "TR",
  "coord": {
    "lon": 28.00028,
    "lat": 41.285
  }
}, {
  "id": 7732576,
  "name": "Okmeydanı",
  "country": "TR",
  "coord": {
    "lon": 28.9639,
    "lat": 41.054489
  }
}, {
  "id": 862469,
  "name": "Yalova",
  "country": "TR",
  "coord": {
    "lon": 29.16667,
    "lat": 40.583328
  }
}, {
  "id": 744926,
  "name": "Kadikoy",
  "country": "TR",
  "coord": {
    "lon": 29.225361,
    "lat": 40.620152
  }
}, {
  "id": 746666,
  "name": "Geulzuk",
  "country": "TR",
  "coord": {
    "lon": 29.828609,
    "lat": 40.716671
  }
}, {
  "id": 746574,
  "name": "Gonen",
  "country": "TR",
  "coord": {
    "lon": 27.65399,
    "lat": 40.1049
  }
}, {
  "id": 315373,
  "name": "Erzincan",
  "country": "TR",
  "coord": {
    "lon": 39.492779,
    "lat": 39.75222
  }
}, {
  "id": 743439,
  "name": "Kesan",
  "country": "TR",
  "coord": {
    "lon": 26.63028,
    "lat": 40.855831
  }
}, {
  "id": 750605,
  "name": "Biga",
  "country": "TR",
  "coord": {
    "lon": 27.24222,
    "lat": 40.228062
  }
}, {
  "id": 862468,
  "name": "Karabük",
  "country": "TR",
  "coord": {
    "lon": 32.5,
    "lat": 41.25
  }
}, {
  "id": 315498,
  "name": "Eregli",
  "country": "TR",
  "coord": {
    "lon": 34.046719,
    "lat": 37.513329
  }
}, {
  "id": 743165,
  "name": "Kırklareli",
  "country": "TR",
  "coord": {
    "lon": 27.5,
    "lat": 41.666672
  }
}, {
  "id": 743932,
  "name": "Kartal",
  "country": "TR",
  "coord": {
    "lon": 29.18861,
    "lat": 40.904949
  }
}, {
  "id": 751371,
  "name": "Babaeski",
  "country": "TR",
  "coord": {
    "lon": 27.09306,
    "lat": 41.432499
  }
}, {
  "id": 299817,
  "name": "Tarsus",
  "country": "TR",
  "coord": {
    "lon": 34.878399,
    "lat": 36.918758
  }
}, {
  "id": 740483,
  "name": "Rize",
  "country": "TR",
  "coord": {
    "lon": 40.521938,
    "lat": 41.020828
  }
}, {
  "id": 738025,
  "name": "Yalova",
  "country": "TR",
  "coord": {
    "lon": 29.27693,
    "lat": 40.655022
  }
}, {
  "id": 320533,
  "name": "Bucak",
  "country": "TR",
  "coord": {
    "lon": 30.594999,
    "lat": 37.459171
  }
}, {
  "id": 746958,
  "name": "Gemlik",
  "country": "TR",
  "coord": {
    "lon": 29.159691,
    "lat": 40.430939
  }
}, {
  "id": 751335,
  "name": "Bafra",
  "country": "TR",
  "coord": {
    "lon": 35.90694,
    "lat": 41.56778
  }
}, {
  "id": 862470,
  "name": "Ardahan",
  "country": "TR",
  "coord": {
    "lon": 42.833328,
    "lat": 41.083328
  }
}, {
  "id": 305681,
  "name": "Kumluca",
  "country": "TR",
  "coord": {
    "lon": 30.28694,
    "lat": 36.370281
  }
}, {
  "id": 298806,
  "name": "Turgutlu",
  "country": "TR",
  "coord": {
    "lon": 27.699699,
    "lat": 38.495331
  }
}, {
  "id": 749262,
  "name": "Süleymanlar Mahallesi",
  "country": "TR",
  "coord": {
    "lon": 31.41044,
    "lat": 41.290192
  }
}, {
  "id": 7530821,
  "name": "Powiat kłodzki",
  "country": "PL",
  "coord": {
    "lon": 16.611851,
    "lat": 50.388821
  }
}, {
  "id": 7532745,
  "name": "Przasnysz",
  "country": "PL",
  "coord": {
    "lon": 20.885,
    "lat": 53.018398
  }
}, {
  "id": 3093826,
  "name": "Łasztownia",
  "country": "PL",
  "coord": {
    "lon": 14.56667,
    "lat": 53.416672
  }
}, {
  "id": 3080902,
  "name": "Zagórzynek",
  "country": "PL",
  "coord": {
    "lon": 18.082081,
    "lat": 51.74049
  }
}, {
  "id": 766573,
  "name": "Lednica Niemiecka",
  "country": "PL",
  "coord": {
    "lon": 20.066669,
    "lat": 49.98333
  }
}, {
  "id": 6690165,
  "name": "Powiat wadowicki",
  "country": "PL",
  "coord": {
    "lon": 19.48374,
    "lat": 49.89032
  }
}, {
  "id": 7531689,
  "name": "Piątnica",
  "country": "PL",
  "coord": {
    "lon": 22.150299,
    "lat": 53.215801
  }
}, {
  "id": 7532503,
  "name": "Tarnobrzeg",
  "country": "PL",
  "coord": {
    "lon": 21.681601,
    "lat": 50.573639
  }
}, {
  "id": 7532344,
  "name": "Żory",
  "country": "PL",
  "coord": {
    "lon": 18.689199,
    "lat": 50.038898
  }
}, {
  "id": 7532893,
  "name": "Pyskowice",
  "country": "PL",
  "coord": {
    "lon": 18.6007,
    "lat": 50.391499
  }
}, {
  "id": 7533463,
  "name": "Trzebiatów",
  "country": "PL",
  "coord": {
    "lon": 15.2825,
    "lat": 54.055698
  }
}, {
  "id": 3101425,
  "name": "Ciechocino",
  "country": "PL",
  "coord": {
    "lon": 18.35445,
    "lat": 54.612179
  }
}, {
  "id": 7530890,
  "name": "Powiat płocki",
  "country": "PL",
  "coord": {
    "lon": 19.7857,
    "lat": 52.554649
  }
}, {
  "id": 7530898,
  "name": "Powiat przeworski",
  "country": "PL",
  "coord": {
    "lon": 22.536819,
    "lat": 50.08913
  }
}, {
  "id": 7532267,
  "name": "Bielawa",
  "country": "PL",
  "coord": {
    "lon": 16.6028,
    "lat": 50.6754
  }
}, {
  "id": 7533405,
  "name": "Żarów",
  "country": "PL",
  "coord": {
    "lon": 16.4932,
    "lat": 50.942799
  }
}, {
  "id": 7532312,
  "name": "Trzebownisko",
  "country": "PL",
  "coord": {
    "lon": 22.0774,
    "lat": 50.124001
  }
}, {
  "id": 7533336,
  "name": "Tyszowce",
  "country": "PL",
  "coord": {
    "lon": 23.723499,
    "lat": 50.624599
  }
}, {
  "id": 7532210,
  "name": "Puławy",
  "country": "PL",
  "coord": {
    "lon": 21.9772,
    "lat": 51.426498
  }
}, {
  "id": 459279,
  "name": "Jelgava",
  "country": "LV",
  "coord": {
    "lon": 23.71278,
    "lat": 56.650002
  }
}, {
  "id": 461112,
  "name": "Bauskas Rajons",
  "country": "LV",
  "coord": {
    "lon": 24.33333,
    "lat": 56.5
  }
}, {
  "id": 709930,
  "name": "Dnipropetrovsk",
  "country": "UA",
  "coord": {
    "lon": 34.98333,
    "lat": 48.450001
  }
}, {
  "id": 695394,
  "name": "Rosvigovo",
  "country": "UA",
  "coord": {
    "lon": 22.701941,
    "lat": 48.451172
  }
}, {
  "id": 687640,
  "name": "Zarech’ye",
  "country": "UA",
  "coord": {
    "lon": 30.10129,
    "lat": 49.788898
  }
}, {
  "id": 624784,
  "name": "Navapolatsk",
  "country": "BY",
  "coord": {
    "lon": 28.642441,
    "lat": 55.536282
  }
}, {
  "id": 3076027,
  "name": "Háje",
  "country": "CZ",
  "coord": {
    "lon": 12.36947,
    "lat": 50.057861
  }
}, {
  "id": 3074111,
  "name": "Jiřina",
  "country": "CZ",
  "coord": {
    "lon": 14.77009,
    "lat": 50.168652
  }
}, {
  "id": 3068004,
  "name": "Podolí",
  "country": "CZ",
  "coord": {
    "lon": 14.48333,
    "lat": 50.349998
  }
}, {
  "id": 3072462,
  "name": "Okres Kutná Hora",
  "country": "CZ",
  "coord": {
    "lon": 15.25,
    "lat": 49.833328
  }
}, {
  "id": 3078234,
  "name": "Caslav",
  "country": "CZ",
  "coord": {
    "lon": 15.38972,
    "lat": 49.910992
  }
}, {
  "id": 3073760,
  "name": "Kateřinky",
  "country": "CZ",
  "coord": {
    "lon": 17.92131,
    "lat": 49.945358
  }
}, {
  "id": 3063853,
  "name": "Turnov",
  "country": "CZ",
  "coord": {
    "lon": 15.15186,
    "lat": 50.583561
  }
}, {
  "id": 3064377,
  "name": "Okres Tábor",
  "country": "CZ",
  "coord": {
    "lon": 14.66667,
    "lat": 49.416672
  }
}, {
  "id": 3064379,
  "name": "Tabor",
  "country": "CZ",
  "coord": {
    "lon": 14.6578,
    "lat": 49.41441
  }
}, {
  "id": 3069236,
  "name": "Nymburk",
  "country": "CZ",
  "coord": {
    "lon": 15.04167,
    "lat": 50.18605
  }
}, {
  "id": 3067882,
  "name": "Policka",
  "country": "CZ",
  "coord": {
    "lon": 16.26543,
    "lat": 49.714649
  }
}, {
  "id": 3074692,
  "name": "Hůrky",
  "country": "CZ",
  "coord": {
    "lon": 12.90962,
    "lat": 50.220631
  }
}, {
  "id": 3061412,
  "name": "Žižkov",
  "country": "CZ",
  "coord": {
    "lon": 14.45,
    "lat": 50.083328
  }
}, {
  "id": 3065397,
  "name": "Stará Lípa",
  "country": "CZ",
  "coord": {
    "lon": 14.56165,
    "lat": 50.683262
  }
}, {
  "id": 3070746,
  "name": "Michanice",
  "country": "CZ",
  "coord": {
    "lon": 13.45,
    "lat": 50.450001
  }
}, {
  "id": 3068498,
  "name": "Pazderna",
  "country": "CZ",
  "coord": {
    "lon": 16.99231,
    "lat": 49.282539
  }
}, {
  "id": 3074187,
  "name": "Jilemnice",
  "country": "CZ",
  "coord": {
    "lon": 15.50653,
    "lat": 50.608898
  }
}, {
  "id": 3063907,
  "name": "Trutnov",
  "country": "CZ",
  "coord": {
    "lon": 15.9127,
    "lat": 50.561008
  }
}, {
  "id": 3061711,
  "name": "Žďár",
  "country": "CZ",
  "coord": {
    "lon": 15.95693,
    "lat": 50.433041
  }
}, {
  "id": 3077889,
  "name": "Cesky Krumlov",
  "country": "CZ",
  "coord": {
    "lon": 14.31521,
    "lat": 48.810909
  }
}, {
  "id": 3074281,
  "name": "Jesenik",
  "country": "CZ",
  "coord": {
    "lon": 17.204639,
    "lat": 50.22937
  }
}, {
  "id": 3065278,
  "name": "Starý Břeclav",
  "country": "CZ",
  "coord": {
    "lon": 16.890039,
    "lat": 48.771801
  }
}, {
  "id": 3074615,
  "name": "Ivancice",
  "country": "CZ",
  "coord": {
    "lon": 16.37752,
    "lat": 49.10144
  }
}, {
  "id": 3073147,
  "name": "Kostelec na Hane",
  "country": "CZ",
  "coord": {
    "lon": 17.058241,
    "lat": 49.513981
  }
}, {
  "id": 3064995,
  "name": "Straznice",
  "country": "CZ",
  "coord": {
    "lon": 17.316799,
    "lat": 48.90102
  }
}, {
  "id": 3074440,
  "name": "Jarov",
  "country": "CZ",
  "coord": {
    "lon": 14.07234,
    "lat": 49.953781
  }
}, {
  "id": 3064914,
  "name": "Střimice",
  "country": "CZ",
  "coord": {
    "lon": 13.66667,
    "lat": 50.533329
  }
}, {
  "id": 3074149,
  "name": "Jindrichuv Hradec",
  "country": "CZ",
  "coord": {
    "lon": 15.00301,
    "lat": 49.144039
  }
}, {
  "id": 3064268,
  "name": "Terezin",
  "country": "CZ",
  "coord": {
    "lon": 14.15055,
    "lat": 50.511002
  }
}, {
  "id": 3068436,
  "name": "Pendrov",
  "country": "CZ",
  "coord": {
    "lon": 16.3801,
    "lat": 49.184959
  }
}, {
  "id": 3079617,
  "name": "Běchovice",
  "country": "CZ",
  "coord": {
    "lon": 14.61782,
    "lat": 50.081051
  }
}, {
  "id": 3079685,
  "name": "Bakov nad Jizerou",
  "country": "CZ",
  "coord": {
    "lon": 14.94149,
    "lat": 50.4823
  }
}, {
  "id": 3065163,
  "name": "Steti",
  "country": "CZ",
  "coord": {
    "lon": 14.37421,
    "lat": 50.45298
  }
}, {
  "id": 3072598,
  "name": "Krupka",
  "country": "CZ",
  "coord": {
    "lon": 13.85815,
    "lat": 50.68449
  }
}, {
  "id": 3070451,
  "name": "Mnichovo Hradiste",
  "country": "CZ",
  "coord": {
    "lon": 14.97134,
    "lat": 50.527199
  }
}, {
  "id": 3065328,
  "name": "Stare Mesto",
  "country": "CZ",
  "coord": {
    "lon": 14.42024,
    "lat": 50.087002
  }
}, {
  "id": 3072263,
  "name": "Lázně Luhačovice",
  "country": "CZ",
  "coord": {
    "lon": 17.76667,
    "lat": 49.099998
  }
}, {
  "id": 3416900,
  "name": "Grímsstaðaholt",
  "country": "IS",
  "coord": {
    "lon": -21.956779,
    "lat": 64.138962
  }
}, {
  "id": 3043124,
  "name": "Varjúdűlő",
  "country": "HU",
  "coord": {
    "lon": 18.41667,
    "lat": 47.200001
  }
}, {
  "id": 3053483,
  "name": "Dunaharaszti Rév",
  "country": "HU",
  "coord": {
    "lon": 19.049999,
    "lat": 47.349998
  }
}, {
  "id": 3056211,
  "name": "Alsógalla",
  "country": "HU",
  "coord": {
    "lon": 18.41646,
    "lat": 47.572449
  }
}, {
  "id": 8063076,
  "name": "Kuruc-domb",
  "country": "HU",
  "coord": {
    "lon": 16.602619,
    "lat": 47.678249
  }
}, {
  "id": 720687,
  "name": "Fuzesabony",
  "country": "HU",
  "coord": {
    "lon": 20.41667,
    "lat": 47.75
  }
}, {
  "id": 714552,
  "name": "Tóthtanya",
  "country": "HU",
  "coord": {
    "lon": 20.41667,
    "lat": 47.75
  }
}, {
  "id": 715839,
  "name": "Satoraljaujhely",
  "country": "HU",
  "coord": {
    "lon": 21.66667,
    "lat": 48.400002
  }
}, {
  "id": 3045406,
  "name": "Sellye",
  "country": "HU",
  "coord": {
    "lon": 17.847111,
    "lat": 45.872471
  }
}, {
  "id": 3053085,
  "name": "Farkasmály",
  "country": "HU",
  "coord": {
    "lon": 19.933331,
    "lat": 47.783329
  }
}, {
  "id": 3049380,
  "name": "Kosárhegy",
  "country": "HU",
  "coord": {
    "lon": 19.799999,
    "lat": 47.166672
  }
}, {
  "id": 3056568,
  "name": "Závodie",
  "country": "SK",
  "coord": {
    "lon": 18.722679,
    "lat": 49.21603
  }
}, {
  "id": 3056702,
  "name": "Vrbica",
  "country": "SK",
  "coord": {
    "lon": 19.616671,
    "lat": 49.083328
  }
}, {
  "id": 725168,
  "name": "Bardejov",
  "country": "SK",
  "coord": {
    "lon": 21.272711,
    "lat": 49.291752
  }
}, {
  "id": 3061015,
  "name": "Bojnice",
  "country": "SK",
  "coord": {
    "lon": 18.586399,
    "lat": 48.78511
  }
}, {
  "id": 7581797,
  "name": "Juzhno Banatski Okrug",
  "country": "RS",
  "coord": {
    "lon": 20.96583,
    "lat": 45.08083
  }
}, {
  "id": 5128581,
  "name": "New York",
  "country": "US",
  "coord": {
    "lon": -74.005966,
    "lat": 40.714272
  }
}, {
  "id": 2907545,
  "name": "Heilbad Heiligenstadt",
  "country": "DE",
  "coord": {
    "lon": 10.13333,
    "lat": 51.383331
  }
}, {
  "id": 2978891,
  "name": "Saint-Laurent-du-Var",
  "country": "FR",
  "coord": {
    "lon": 7.17606,
    "lat": 43.670971
  }
}, {
  "id": 6553052,
  "name": "Simmerath",
  "country": "DE",
  "coord": {
    "lon": 6.30047,
    "lat": 50.606831
  }
}, {
  "id": 6552709,
  "name": "Schwanewede",
  "country": "DE",
  "coord": {
    "lon": 8.54075,
    "lat": 53.232101
  }
}, {
  "id": 6556321,
  "name": "Ottobrunn",
  "country": "DE",
  "coord": {
    "lon": 11.66861,
    "lat": 48.062401
  }
}, {
  "id": 6553077,
  "name": "Kürten",
  "country": "DE",
  "coord": {
    "lon": 7.2546,
    "lat": 51.0382
  }
}, {
  "id": 2483757,
  "name": "Reghaia",
  "country": "DZ",
  "coord": {
    "lon": 3.34018,
    "lat": 36.73587
  }
}, {
  "id": 6356945,
  "name": "Rota",
  "country": "ES",
  "coord": {
    "lon": -6.35153,
    "lat": 36.650612
  }
}, {
  "id": 6454095,
  "name": "Vienne",
  "country": "FR",
  "coord": {
    "lon": 4.86667,
    "lat": 45.51667
  }
}, {
  "id": 7290566,
  "name": "Hertsmere District",
  "country": "GB",
  "coord": {
    "lon": -0.27344,
    "lat": 51.68037
  }
}, {
  "id": 7293816,
  "name": "Tarbock",
  "country": "GB",
  "coord": {
    "lon": -2.80607,
    "lat": 53.381989
  }
}, {
  "id": 7299727,
  "name": "Gorseinon",
  "country": "GB",
  "coord": {
    "lon": -4.05247,
    "lat": 51.676842
  }
}, {
  "id": 2656281,
  "name": "Barnstaple",
  "country": "GB",
  "coord": {
    "lon": -4.05808,
    "lat": 51.080219
  }
}, {
  "id": 8133666,
  "name": "Dimos Pavlos Melas",
  "country": "GR",
  "coord": {
    "lon": 22.953409,
    "lat": 40.68195
  }
}, {
  "id": 6541870,
  "name": "Avellino",
  "country": "IT",
  "coord": {
    "lon": 14.78874,
    "lat": 40.914421
  }
}, {
  "id": 1870413,
  "name": "Sil-li",
  "country": "KP",
  "coord": {
    "lon": 125.47361,
    "lat": 39.49472
  }
}, {
  "id": 2745859,
  "name": "Gemeente Valkenswaard",
  "country": "NL",
  "coord": {
    "lon": 5.45,
    "lat": 51.349998
  }
}, {
  "id": 2755632,
  "name": "Gemeente Geldermalsen",
  "country": "NL",
  "coord": {
    "lon": 5.28333,
    "lat": 51.866669
  }
}, {
  "id": 8014705,
  "name": "Forte da Casa",
  "country": "PT",
  "coord": {
    "lon": -9.05158,
    "lat": 38.87355
  }
}, {
  "id": 8013159,
  "name": "Sesimbra (Santiago)",
  "country": "PT",
  "coord": {
    "lon": -9.09546,
    "lat": 38.44133
  }
}, {
  "id": 4179320,
  "name": "Albany",
  "country": "US",
  "coord": {
    "lon": -84.155739,
    "lat": 31.57851
  }
}, {
  "id": 4351021,
  "name": "Charles County",
  "country": "US",
  "coord": {
    "lon": -76.983032,
    "lat": 38.483459
  }
}, {
  "id": 4532136,
  "name": "Canadian County",
  "country": "US",
  "coord": {
    "lon": -97.983658,
    "lat": 35.533379
  }
}, {
  "id": 4703486,
  "name": "Kleberg County",
  "country": "US",
  "coord": {
    "lon": -97.716942,
    "lat": 27.433649
  }
}, {
  "id": 4885392,
  "name": "Boone County",
  "country": "US",
  "coord": {
    "lon": -88.816772,
    "lat": 42.333351
  }
}, {
  "id": 5046749,
  "name": "Scott County",
  "country": "US",
  "coord": {
    "lon": -93.500793,
    "lat": 44.633301
  }
}, {
  "id": 5141784,
  "name": "Ulster County",
  "country": "US",
  "coord": {
    "lon": -74.250153,
    "lat": 41.88343
  }
}, {
  "id": 5128594,
  "name": "New York County",
  "country": "US",
  "coord": {
    "lon": -73.966248,
    "lat": 40.783428
  }
}, {
  "id": 5217179,
  "name": "Verona",
  "country": "US",
  "coord": {
    "lon": -79.843102,
    "lat": 40.506458
  }
}, {
  "id": 5251040,
  "name": "Dunn County",
  "country": "US",
  "coord": {
    "lon": -91.883507,
    "lat": 44.949959
  }
}, {
  "id": 5430806,
  "name": "Mesa County",
  "country": "US",
  "coord": {
    "lon": -108.467308,
    "lat": 39.033321
  }
}, {
  "id": 5417258,
  "name": "Clifton",
  "country": "US",
  "coord": {
    "lon": -108.448982,
    "lat": 39.09193
  }
}, {
  "id": 5709906,
  "name": "Washoe County",
  "country": "US",
  "coord": {
    "lon": -119.626312,
    "lat": 40.750179
  }
}, {
  "id": 5528613,
  "name": "Potter County",
  "country": "US",
  "coord": {
    "lon": -101.900459,
    "lat": 35.416721
  }
}, {
  "id": 5523520,
  "name": "Howard County",
  "country": "US",
  "coord": {
    "lon": -101.450401,
    "lat": 32.300121
  }
}, {
  "id": 3648540,
  "name": "Barinitas",
  "country": "VE",
  "coord": {
    "lon": -70.41111,
    "lat": 8.76222
  }
}, {
  "id": 1559977,
  "name": "Tỉnh Vĩnh Long",
  "country": "VN",
  "coord": {
    "lon": 106,
    "lat": 10.16667
  }
}, {
  "id": 1562798,
  "name": "Vinh",
  "country": "VN",
  "coord": {
    "lon": 105.666672,
    "lat": 18.66667
  }
}, {
  "id": 726545,
  "name": "Obshtina Svilengrad",
  "country": "BG",
  "coord": {
    "lon": 26.316669,
    "lat": 41.866669
  }
}, {
  "id": 6460050,
  "name": "Dragovo",
  "country": "BG",
  "coord": {
    "lon": 27.116671,
    "lat": 42.633331
  }
}, {
  "id": 672628,
  "name": "Judeţul Mureş",
  "country": "RO",
  "coord": {
    "lon": 24.58333,
    "lat": 46.666672
  }
}, {
  "id": 681343,
  "name": "Clara",
  "country": "RO",
  "coord": {
    "lon": 22.466669,
    "lat": 47.683331
  }
}, {
  "id": 675732,
  "name": "Ierbuş",
  "country": "RO",
  "coord": {
    "lon": 24.700001,
    "lat": 46.76667
  }
}, {
  "id": 680710,
  "name": "Corobeţi",
  "country": "RO",
  "coord": {
    "lon": 24.950001,
    "lat": 44.950001
  }
}, {
  "id": 676307,
  "name": "Harghita-Băi",
  "country": "RO",
  "coord": {
    "lon": 25.63604,
    "lat": 46.38525
  }
}, {
  "id": 665197,
  "name": "Ţiba",
  "country": "RO",
  "coord": {
    "lon": 25.799999,
    "lat": 46.349998
  }
}, {
  "id": 671565,
  "name": "Păcuri",
  "country": "RO",
  "coord": {
    "lon": 25.73333,
    "lat": 45.133331
  }
}, {
  "id": 668474,
  "name": "Runc",
  "country": "RO",
  "coord": {
    "lon": 24.66667,
    "lat": 47.650002
  }
}, {
  "id": 685088,
  "name": "Berbesti",
  "country": "RO",
  "coord": {
    "lon": 23.883329,
    "lat": 44.98333
  }
}, {
  "id": 664864,
  "name": "Todireni",
  "country": "RO",
  "coord": {
    "lon": 25.366671,
    "lat": 47.349998
  }
}, {
  "id": 682972,
  "name": "Calimanesti",
  "country": "RO",
  "coord": {
    "lon": 24.33333,
    "lat": 45.23333
  }
}, {
  "id": 3155517,
  "name": "Glemmen",
  "country": "NO",
  "coord": {
    "lon": 10.95,
    "lat": 59.216671
  }
}, {
  "id": 779683,
  "name": "Hammerfest",
  "country": "NO",
  "coord": {
    "lon": 23.682091,
    "lat": 70.663361
  }
}, {
  "id": 174706,
  "name": "Yenikend",
  "country": "AM",
  "coord": {
    "lon": 44.731709,
    "lat": 39.906109
  }
}, {
  "id": 2601501,
  "name": "Einöde",
  "country": "AT",
  "coord": {
    "lon": 16.23539,
    "lat": 48.022541
  }
}, {
  "id": 7872673,
  "name": "Dornbirn",
  "country": "AT",
  "coord": {
    "lon": 9.77234,
    "lat": 47.375118
  }
}, {
  "id": 7871492,
  "name": "Villach",
  "country": "AT",
  "coord": {
    "lon": 13.8529,
    "lat": 46.612541
  }
}, {
  "id": 2773536,
  "name": "Kremsthal",
  "country": "AT",
  "coord": {
    "lon": 15.6,
    "lat": 48.416672
  }
}, {
  "id": 2774321,
  "name": "Klagenfurt am Wörthersee",
  "country": "AT",
  "coord": {
    "lon": 14.3,
    "lat": 46.633331
  }
}, {
  "id": 7871497,
  "name": "Klagenfurt",
  "country": "AT",
  "coord": {
    "lon": 14.2973,
    "lat": 46.638729
  }
}, {
  "id": 6949518,
  "name": "Innsbruck (Innenstadt)",
  "country": "AT",
  "coord": {
    "lon": 11.3928,
    "lat": 47.2672
  }
}, {
  "id": 2781680,
  "name": "Bludenz",
  "country": "AT",
  "coord": {
    "lon": 9.81667,
    "lat": 47.149719
  }
}, {
  "id": 2776950,
  "name": "Politischer Bezirk Hallein",
  "country": "AT",
  "coord": {
    "lon": 13.3,
    "lat": 47.599998
  }
}, {
  "id": 2772444,
  "name": "Lindabrunn",
  "country": "AT",
  "coord": {
    "lon": 16.16947,
    "lat": 47.91151
  }
}, {
  "id": 2765028,
  "name": "Simmering",
  "country": "AT",
  "coord": {
    "lon": 16.433331,
    "lat": 48.183331
  }
}, {
  "id": 7871844,
  "name": "Mistelbach",
  "country": "AT",
  "coord": {
    "lon": 16.577909,
    "lat": 48.57795
  }
}, {
  "id": 2762343,
  "name": "Vocklabruck",
  "country": "AT",
  "coord": {
    "lon": 13.65,
    "lat": 48.01667
  }
}, {
  "id": 2773886,
  "name": "Politischer Bezirk Knittelfeld",
  "country": "AT",
  "coord": {
    "lon": 14.8,
    "lat": 47.25
  }
}, {
  "id": 7873694,
  "name": "Reutte",
  "country": "AT",
  "coord": {
    "lon": 10.75792,
    "lat": 47.465778
  }
}, {
  "id": 2769105,
  "name": "Perg",
  "country": "AT",
  "coord": {
    "lon": 14.63333,
    "lat": 48.25
  }
}, {
  "id": 7872153,
  "name": "Oberneukirchen",
  "country": "AT",
  "coord": {
    "lon": 14.21401,
    "lat": 48.475609
  }
}, {
  "id": 2762619,
  "name": "Untertauern",
  "country": "AT",
  "coord": {
    "lon": 13.5,
    "lat": 47.299999
  }
}, {
  "id": 3183875,
  "name": "Tirana",
  "country": "AL",
  "coord": {
    "lon": 19.81889,
    "lat": 41.327499
  }
}, {
  "id": 3201730,
  "name": "Domzale",
  "country": "SI",
  "coord": {
    "lon": 14.59371,
    "lat": 46.137741
  }
}, {
  "id": 3193340,
  "name": "Comune di Pirano",
  "country": "SI",
  "coord": {
    "lon": 13.62694,
    "lat": 45.48278
  }
}, {
  "id": 3192682,
  "name": "Portoroz",
  "country": "SI",
  "coord": {
    "lon": 13.59206,
    "lat": 45.51429
  }
}, {
  "id": 3190717,
  "name": "Skofja Loka",
  "country": "SI",
  "coord": {
    "lon": 14.30626,
    "lat": 46.165508
  }
}, {
  "id": 3194452,
  "name": "Nova Gorica",
  "country": "SI",
  "coord": {
    "lon": 13.64837,
    "lat": 45.956039
  }
}, {
  "id": 3194648,
  "name": "Murska Sobota",
  "country": "SI",
  "coord": {
    "lon": 16.166389,
    "lat": 46.662498
  }
}, {
  "id": 3203412,
  "name": "Brezice",
  "country": "SI",
  "coord": {
    "lon": 15.59111,
    "lat": 45.903332
  }
}, {
  "id": 3197942,
  "name": "Občina Kočevje",
  "country": "SI",
  "coord": {
    "lon": 14.90694,
    "lat": 45.63028
  }
}, {
  "id": 1228730,
  "name": "Ratnapura",
  "country": "LK",
  "coord": {
    "lon": 80.39917,
    "lat": 6.68278
  }
}, {
  "id": 1238992,
  "name": "Sri Jayewardenepura Kotte",
  "country": "LK",
  "coord": {
    "lon": 79.908333,
    "lat": 6.90278
  }
}, {
  "id": 1244926,
  "name": "Hambantota",
  "country": "LK",
  "coord": {
    "lon": 81.1185,
    "lat": 6.1241
  }
}, {
  "id": 8133521,
  "name": "Eastern Province",
  "country": "LK",
  "coord": {
    "lon": 81.202011,
    "lat": 8.60614
  }
}, {
  "id": 1226260,
  "name": "Trincomalee",
  "country": "LK",
  "coord": {
    "lon": 81.233498,
    "lat": 8.5711
  }
}, {
  "id": 1227667,
  "name": "Slave Island",
  "country": "LK",
  "coord": {
    "lon": 79.849998,
    "lat": 6.91667
  }
}, {
  "id": 1232860,
  "name": "North Western Province",
  "country": "LK",
  "coord": {
    "lon": 80.166672,
    "lat": 7.75
  }
}, {
  "id": 1237980,
  "name": "Kurunegala",
  "country": "LK",
  "coord": {
    "lon": 80.362297,
    "lat": 7.4863
  }
}, {
  "id": 1226992,
  "name": "Taralanda",
  "country": "LK",
  "coord": {
    "lon": 80.6241,
    "lat": 7.4726
  }
}, {
  "id": 7671049,
  "name": "Northern Province",
  "country": "LK",
  "coord": {
    "lon": 80.416672,
    "lat": 9.16667
  }
}, {
  "id": 1236150,
  "name": "Mannar",
  "country": "LK",
  "coord": {
    "lon": 79.900002,
    "lat": 8.98333
  }
}, {
  "id": 1223488,
  "name": "Weragampita",
  "country": "LK",
  "coord": {
    "lon": 80.550003,
    "lat": 5.95
  }
}, {
  "id": 1231644,
  "name": "Pallimulla",
  "country": "LK",
  "coord": {
    "lon": 80.550003,
    "lat": 5.95
  }
}, {
  "id": 1242170,
  "name": "Kallady",
  "country": "LK",
  "coord": {
    "lon": 81.716301,
    "lat": 7.7124
  }
}, {
  "id": 1229554,
  "name": "Puliyadikuda",
  "country": "LK",
  "coord": {
    "lon": 81.699997,
    "lat": 7.71667
  }
}, {
  "id": 1514879,
  "name": "Khujand",
  "country": "TJ",
  "coord": {
    "lon": 69.627922,
    "lat": 40.285271
  }
}, {
  "id": 1475271,
  "name": "Krasnoostrovskiy",
  "country": "TJ",
  "coord": {
    "lon": 68.680717,
    "lat": 37.348869
  }
}, {
  "id": 1333693,
  "name": "Hisor",
  "country": "TJ",
  "coord": {
    "lon": 68.594521,
    "lat": 38.4846
  }
}, {
  "id": 1514896,
  "name": "Isfara",
  "country": "TJ",
  "coord": {
    "lon": 70.625259,
    "lat": 40.12648
  }
}, {
  "id": 1220253,
  "name": "Istaravshan",
  "country": "TJ",
  "coord": {
    "lon": 69.003281,
    "lat": 39.9142
  }
}, {
  "id": 1220798,
  "name": "Panjakent",
  "country": "TJ",
  "coord": {
    "lon": 67.609306,
    "lat": 39.495239
  }
}, {
  "id": 1220905,
  "name": "Norak",
  "country": "TJ",
  "coord": {
    "lon": 69.322723,
    "lat": 38.389172
  }
}, {
  "id": 1221194,
  "name": "Kulob",
  "country": "TJ",
  "coord": {
    "lon": 69.783028,
    "lat": 37.914532
  }
}, {
  "id": 1220747,
  "name": "Qurghonteppa",
  "country": "TJ",
  "coord": {
    "lon": 68.78186,
    "lat": 37.833988
  }
}, {
  "id": 89824,
  "name": "Umm Qasr",
  "country": "IQ",
  "coord": {
    "lon": 47.916771,
    "lat": 30.040541
  }
}, {
  "id": 6769334,
  "name": "Al Falāḩīyah",
  "country": "IQ",
  "coord": {
    "lon": 45.841068,
    "lat": 32.508221
  }
}, {
  "id": 618382,
  "name": "Donduseni",
  "country": "MD",
  "coord": {
    "lon": 27.6101,
    "lat": 48.24268
  }
}, {
  "id": 661226,
  "name": "Amuri",
  "country": "FI",
  "coord": {
    "lon": 23.74317,
    "lat": 61.500179
  }
}, {
  "id": 653281,
  "name": "Kemi",
  "country": "FI",
  "coord": {
    "lon": 24.563709,
    "lat": 65.736412
  }
}, {
  "id": 630821,
  "name": "Yli-Raumo",
  "country": "FI",
  "coord": {
    "lon": 24.216669,
    "lat": 65.849998
  }
}, {
  "id": 660562,
  "name": "Porvoo",
  "country": "FI",
  "coord": {
    "lon": 25.66667,
    "lat": 60.400002
  }
}, {
  "id": 633739,
  "name": "Tuorila",
  "country": "FI",
  "coord": {
    "lon": 25.58333,
    "lat": 60.450001
  }
}, {
  "id": 633592,
  "name": "Tuusula",
  "country": "FI",
  "coord": {
    "lon": 25,
    "lat": 60.416672
  }
}, {
  "id": 645161,
  "name": "Nahkela",
  "country": "FI",
  "coord": {
    "lon": 24.950001,
    "lat": 60.400002
  }
}, {
  "id": 660951,
  "name": "Asikkala",
  "country": "FI",
  "coord": {
    "lon": 25.58333,
    "lat": 61.25
  }
}, {
  "id": 660949,
  "name": "Asikkala",
  "country": "FI",
  "coord": {
    "lon": 25.5,
    "lat": 61.216671
  }
}, {
  "id": 862995,
  "name": "Tallinna linn",
  "country": "EE",
  "coord": {
    "lon": 24.73823,
    "lat": 59.471691
  }
}, {
  "id": 2960629,
  "name": "Canton d'Echternach",
  "country": "LU",
  "coord": {
    "lon": 6.36667,
    "lat": 49.76667
  }
}, {
  "id": 2959975,
  "name": "Canton de Wiltz",
  "country": "LU",
  "coord": {
    "lon": 5.93333,
    "lat": 49.966671
  }
}, {
  "id": 2960590,
  "name": "Ettelbruck",
  "country": "LU",
  "coord": {
    "lon": 6.08333,
    "lat": 49.833328
  }
}, {
  "id": 863900,
  "name": "Opština Štip",
  "country": "MK",
  "coord": {
    "lon": 22.200001,
    "lat": 41.700001
  }
}, {
  "id": 790744,
  "name": "Gevgelija",
  "country": "MK",
  "coord": {
    "lon": 22.502501,
    "lat": 41.139172
  }
}, {
  "id": 786565,
  "name": "Radovish",
  "country": "MK",
  "coord": {
    "lon": 22.46472,
    "lat": 41.638329
  }
}, {
  "id": 862956,
  "name": "Opština Makedonska Kamenica",
  "country": "MK",
  "coord": {
    "lon": 22.58333,
    "lat": 42.049999
  }
}, {
  "id": 789629,
  "name": "Makedonska Kamenica",
  "country": "MK",
  "coord": {
    "lon": 22.59194,
    "lat": 42.02
  }
}, {
  "id": 863912,
  "name": "Opština Vinica",
  "country": "MK",
  "coord": {
    "lon": 22.584169,
    "lat": 41.859169
  }
}, {
  "id": 784424,
  "name": "Vinica",
  "country": "MK",
  "coord": {
    "lon": 22.509171,
    "lat": 41.882778
  }
}, {
  "id": 785058,
  "name": "Veles",
  "country": "MK",
  "coord": {
    "lon": 21.77556,
    "lat": 41.715561
  }
}, {
  "id": 786339,
  "name": "Opština Resen",
  "country": "MK",
  "coord": {
    "lon": 21.01667,
    "lat": 41.033329
  }
}, {
  "id": 786341,
  "name": "Resen",
  "country": "MK",
  "coord": {
    "lon": 21.01222,
    "lat": 41.08889
  }
}, {
  "id": 863855,
  "name": "Opština Gostivar",
  "country": "MK",
  "coord": {
    "lon": 20.83222,
    "lat": 41.79306
  }
}, {
  "id": 1538230,
  "name": "Zarafshon Shahri",
  "country": "UZ",
  "coord": {
    "lon": 64.207497,
    "lat": 41.57917
  }
}, {
  "id": 1514216,
  "name": "Chinaz",
  "country": "UZ",
  "coord": {
    "lon": 68.715561,
    "lat": 40.91
  }
}, {
  "id": 3724916,
  "name": "Garnier",
  "country": "HT",
  "coord": {
    "lon": -72.216667,
    "lat": 18.58333
  }
}, {
  "id": 3727135,
  "name": "Croix des Bouquets",
  "country": "HT",
  "coord": {
    "lon": -72.224998,
    "lat": 18.575001
  }
}, {
  "id": 3718962,
  "name": "Petit Goave",
  "country": "HT",
  "coord": {
    "lon": -72.866943,
    "lat": 18.431391
  }
}, {
  "id": 3719543,
  "name": "Département du Nord",
  "country": "HT",
  "coord": {
    "lon": -72.300003,
    "lat": 19.6
  }
}, {
  "id": 3728474,
  "name": "Cap-Haitien",
  "country": "HT",
  "coord": {
    "lon": -72.20417,
    "lat": 19.75778
  }
}, {
  "id": 3731053,
  "name": "Département de l'Artibonite",
  "country": "HT",
  "coord": {
    "lon": -72.5,
    "lat": 19.33333
  }
}, {
  "id": 3726540,
  "name": "Dessalines",
  "country": "HT",
  "coord": {
    "lon": -72.5,
    "lat": 19.283331
  }
}, {
  "id": 3725301,
  "name": "Fond Major",
  "country": "HT",
  "coord": {
    "lon": -72.333328,
    "lat": 18.83333
  }
}, {
  "id": 3489882,
  "name": "Kencot",
  "country": "JM",
  "coord": {
    "lon": -76.796982,
    "lat": 17.999161
  }
}, {
  "id": 3513132,
  "name": "Vianen",
  "country": "CW",
  "coord": {
    "lon": -68.916672,
    "lat": 12.1
  }
}, {
  "id": 3513252,
  "name": "Senkuria",
  "country": "BQ",
  "coord": {
    "lon": -68.26667,
    "lat": 12.15
  }
}, {
  "id": 3513332,
  "name": "Rockland",
  "country": "SX",
  "coord": {
    "lon": -63.049999,
    "lat": 18.033331
  }
}, {
  "id": 7642566,
  "name": "Al Mujtahid",
  "country": "SY",
  "coord": {
    "lon": 36.297699,
    "lat": 33.500599
  }
}, {
  "id": 3496274,
  "name": "Provincia de Monseñor Nouel",
  "country": "DO",
  "coord": {
    "lon": -70.416672,
    "lat": 18.91667
  }
}, {
  "id": 3507810,
  "name": "El Corozal",
  "country": "DO",
  "coord": {
    "lon": -70.349998,
    "lat": 19.366671
  }
}, {
  "id": 3495313,
  "name": "Pantanal",
  "country": "DO",
  "coord": {
    "lon": -68.365578,
    "lat": 18.52688
  }
}, {
  "id": 3579907,
  "name": "Saint Patrick",
  "country": "GD",
  "coord": {
    "lon": -61.633331,
    "lat": 12.2
  }
}, {
  "id": 3580164,
  "name": "L’Etage",
  "country": "GD",
  "coord": {
    "lon": -61.633331,
    "lat": 12.18333
  }
}, {
  "id": 3580372,
  "name": "Champs Fleurs",
  "country": "GD",
  "coord": {
    "lon": -61.683331,
    "lat": 12.05
  }
}, {
  "id": 3579821,
  "name": "White Gun",
  "country": "GD",
  "coord": {
    "lon": -61.73333,
    "lat": 12.05
  }
}, {
  "id": 3587902,
  "name": "Villa Nueva",
  "country": "GT",
  "coord": {
    "lon": -90.587502,
    "lat": 14.52694
  }
}, {
  "id": 3595530,
  "name": "Departamento de Guatemala",
  "country": "GT",
  "coord": {
    "lon": -90.5,
    "lat": 14.66667
  }
}, {
  "id": 3594143,
  "name": "La Reforma",
  "country": "GT",
  "coord": {
    "lon": -91.816673,
    "lat": 14.8
  }
}, {
  "id": 3585841,
  "name": "El Triunfo",
  "country": "SV",
  "coord": {
    "lon": -88.083328,
    "lat": 13.65
  }
}, {
  "id": 3443341,
  "name": "Carmelo",
  "country": "UY",
  "coord": {
    "lon": -58.285561,
    "lat": -33.98917
  }
}, {
  "id": 3442233,
  "name": "Jose Batlle y Ordonez",
  "country": "UY",
  "coord": {
    "lon": -55.116669,
    "lat": -33.466671
  }
}, {
  "id": 248380,
  "name": "Muḩāfaz̧at Ma‘ān",
  "country": "JO",
  "coord": {
    "lon": 36.583328,
    "lat": 30.33333
  }
}, {
  "id": 3576909,
  "name": "West Road",
  "country": "TC",
  "coord": {
    "lon": -71.133331,
    "lat": 21.466669
  }
}, {
  "id": 3337523,
  "name": "Požeško-Slavonska Županija",
  "country": "HR",
  "coord": {
    "lon": 17.66667,
    "lat": 45.416672
  }
}, {
  "id": 3202220,
  "name": "Ðakovo",
  "country": "HR",
  "coord": {
    "lon": 18.410561,
    "lat": 45.308331
  }
}, {
  "id": 3424934,
  "name": "Saint-Pierre",
  "country": "PM",
  "coord": {
    "lon": -56.169491,
    "lat": 46.765442
  }
}, {
  "id": 6690410,
  "name": "Basse-Terre",
  "country": "GP",
  "coord": {
    "lon": -61.716671,
    "lat": 16
  }
}, {
  "id": 3579732,
  "name": "Basse-Terre",
  "country": "GP",
  "coord": {
    "lon": -61.725479,
    "lat": 15.99854
  }
}, {
  "id": 3579759,
  "name": "Baimbridge",
  "country": "GP",
  "coord": {
    "lon": -61.518162,
    "lat": 16.24494
  }
}, {
  "id": 3578598,
  "name": "Arrondissement de Pointe-à-Pitre",
  "country": "GP",
  "coord": {
    "lon": -61.416672,
    "lat": 16.33333
  }
}, {
  "id": 6690400,
  "name": "Petit-Canal",
  "country": "GP",
  "coord": {
    "lon": -61.48333,
    "lat": 16.383329
  }
}, {
  "id": 3578681,
  "name": "Petit-Canal",
  "country": "GP",
  "coord": {
    "lon": -61.487881,
    "lat": 16.378361
  }
}, {
  "id": 3578818,
  "name": "Mazeau",
  "country": "GP",
  "coord": {
    "lon": -61.788391,
    "lat": 16.2948
  }
}, {
  "id": 6690411,
  "name": "Baillif",
  "country": "GP",
  "coord": {
    "lon": -61.73333,
    "lat": 16.01667
  }
}, {
  "id": 3579761,
  "name": "Baillif",
  "country": "GP",
  "coord": {
    "lon": -61.746319,
    "lat": 16.02018
  }
}, {
  "id": 3579035,
  "name": "La Grange",
  "country": "GP",
  "coord": {
    "lon": -61.566669,
    "lat": 16.133329
  }
}, {
  "id": 3579543,
  "name": "Champfleury",
  "country": "GP",
  "coord": {
    "lon": -61.680641,
    "lat": 15.98149
  }
}, {
  "id": 3578886,
  "name": "Mahaudière",
  "country": "GP",
  "coord": {
    "lon": -61.505211,
    "lat": 16.46744
  }
}, {
  "id": 3042289,
  "name": "Saint Anne",
  "country": "GG",
  "coord": {
    "lon": -2.20417,
    "lat": 49.715
  }
}, {
  "id": 6420687,
  "name": "Bouet",
  "country": "GG",
  "coord": {
    "lon": -2.54111,
    "lat": 49.46806
  }
}, {
  "id": 6424022,
  "name": "Côbo",
  "country": "GG",
  "coord": {
    "lon": -2.59194,
    "lat": 49.472778
  }
}, {
  "id": 6420203,
  "name": "La Villiaze",
  "country": "GG",
  "coord": {
    "lon": -2.60583,
    "lat": 49.427219
  }
}, {
  "id": 6424048,
  "name": "Vazon",
  "country": "GG",
  "coord": {
    "lon": -2.6125,
    "lat": 49.46278
  }
}, {
  "id": 6422029,
  "name": "Le Preel",
  "country": "GG",
  "coord": {
    "lon": -2.58167,
    "lat": 49.458061
  }
}, {
  "id": 1222662,
  "name": "Isfana",
  "country": "KG",
  "coord": {
    "lon": 69.530579,
    "lat": 39.838558
  }
}, {
  "id": 1528249,
  "name": "Jalal-Abad",
  "country": "KG",
  "coord": {
    "lon": 73,
    "lat": 40.933331
  }
}, {
  "id": 1527004,
  "name": "Balykchy",
  "country": "KG",
  "coord": {
    "lon": 76.186127,
    "lat": 42.455681
  }
}, {
  "id": 1528512,
  "name": "Cholpon-Ata",
  "country": "KG",
  "coord": {
    "lon": 77.082253,
    "lat": 42.649441
  }
}, {
  "id": 1528646,
  "name": "Bosteri",
  "country": "KG",
  "coord": {
    "lon": 77.185883,
    "lat": 42.660061
  }
}, {
  "id": 1528182,
  "name": "Kara-Balta",
  "country": "KG",
  "coord": {
    "lon": 73.848129,
    "lat": 42.814232
  }
}, {
  "id": 1527199,
  "name": "Tokmok",
  "country": "KG",
  "coord": {
    "lon": 75.301582,
    "lat": 42.841721
  }
}, {
  "id": 1528211,
  "name": "Kalininskoe",
  "country": "KG",
  "coord": {
    "lon": 73.855659,
    "lat": 42.829021
  }
}, {
  "id": 1527360,
  "name": "Sokuluk",
  "country": "KG",
  "coord": {
    "lon": 74.302567,
    "lat": 42.854012
  }
}, {
  "id": 1527551,
  "name": "Orlovka",
  "country": "KG",
  "coord": {
    "lon": 75.592247,
    "lat": 42.74707
  }
}, {
  "id": 1528193,
  "name": "Kant",
  "country": "KG",
  "coord": {
    "lon": 74.850769,
    "lat": 42.89106
  }
}, {
  "id": 1528606,
  "name": "Bystrovka",
  "country": "KG",
  "coord": {
    "lon": 75.689171,
    "lat": 42.78458
  }
}, {
  "id": 1528831,
  "name": "Aravan",
  "country": "KG",
  "coord": {
    "lon": 72.499603,
    "lat": 40.516079
  }
}, {
  "id": 1527513,
  "name": "Uzgen",
  "country": "KG",
  "coord": {
    "lon": 73.300682,
    "lat": 40.769939
  }
}, {
  "id": 1528336,
  "name": "Kadamjay",
  "country": "KG",
  "coord": {
    "lon": 71.73333,
    "lat": 40.116669
  }
}, {
  "id": 1527590,
  "name": "Naryn Oblasty",
  "country": "KG",
  "coord": {
    "lon": 75.966667,
    "lat": 41.433331
  }
}, {
  "id": 1528796,
  "name": "At-Bashi",
  "country": "KG",
  "coord": {
    "lon": 75.810577,
    "lat": 41.17017
  }
}, {
  "id": 1252477,
  "name": "Raga",
  "country": "BT",
  "coord": {
    "lon": 89.533333,
    "lat": 27.299999
  }
}, {
  "id": 1337285,
  "name": "Mongar Dzongkhag",
  "country": "BT",
  "coord": {
    "lon": 91.23333,
    "lat": 27.25
  }
}, {
  "id": 1252514,
  "name": "Mongar",
  "country": "BT",
  "coord": {
    "lon": 91.239632,
    "lat": 27.27471
  }
}, {
  "id": 3042058,
  "name": "Principality of Liechtenstein",
  "country": "LI",
  "coord": {
    "lon": 9.53333,
    "lat": 47.166672
  }
}, {
  "id": 3042031,
  "name": "Gemeinde Vaduz",
  "country": "LI",
  "coord": {
    "lon": 9.51667,
    "lat": 47.133331
  }
}, {
  "id": 3042030,
  "name": "Vaduz",
  "country": "LI",
  "coord": {
    "lon": 9.52154,
    "lat": 47.14151
  }
}, {
  "id": 3042052,
  "name": "Nendeln",
  "country": "LI",
  "coord": {
    "lon": 9.543,
    "lat": 47.19846
  }
}, {
  "id": 3042056,
  "name": "Gemeinde Mauren",
  "country": "LI",
  "coord": {
    "lon": 9.53333,
    "lat": 47.216671
  }
}, {
  "id": 3042040,
  "name": "Schaanwald",
  "country": "LI",
  }