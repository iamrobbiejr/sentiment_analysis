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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wamp64\\www\\mynhakadeployment\\web\\build\\mynhaka\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wamp64\\www\\mynhakadeployment\\web\\build\\mynhaka\\node_modules\\webpack\\buildin\\module.js'");

/***/ }),

/***/ "./public/js/bootstrap.min.js":
/*!************************************!*\
  !*** ./public/js/bootstrap.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.2.0", d.prototype.close = function (b) {
    function c() {
      f.detach().trigger("closed.bs.alert").remove();
    }

    var d = a(this),
        e = d.attr("data-target");
    e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.2.0", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function () {
      "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change");
    }

    a && this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault();
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function c(b, _c) {
    this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.2.0", c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
  }, c.prototype.keydown = function (a) {
    switch (a.which) {
      case 37:
        this.prev();
        break;

      case 39:
        this.next();
        break;

      default:
        return;
    }

    a.preventDefault();
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.to = function (b) {
    var c = this,
        d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      c.to(b);
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, c) {
    var d = this.$element.find(".item.active"),
        e = c || d[b](),
        f = this.interval,
        g = "next" == b ? "left" : "right",
        h = "next" == b ? "first" : "last",
        i = this;

    if (!e.length) {
      if (!this.options.wrap) return;
      e = this.$element.find(".item")[h]();
    }

    if (e.hasClass("active")) return this.sliding = !1;
    var j = e[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: g
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(e)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: g
      });
      return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function () {
        e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  }), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.collapse"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b);
      !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };

  c.VERSION = "3.2.0", c.DEFAULTS = {
    toggle: !0
  }, c.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, c.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var c = a.Event("show.bs.collapse");

      if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        var d = this.$parent && this.$parent.find("> .panel > .in");

        if (d && d.length) {
          var e = d.data("bs.collapse");
          if (e && e.transitioning) return;
          b.call(d, "hide"), e || d.data("bs.collapse", null);
        }

        var f = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;

        var g = function g() {
          this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
        };

        if (!a.support.transition) return g.call(this);
        var h = a.camelCase(["scroll", f].join("-"));
        this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h]);
      }
    }
  }, c.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;

        var d = function d() {
          this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this);
      }
    }
  }, c.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  };
  var d = a.fn.collapse;
  a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = d, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (c) {
    var d,
        e = a(this),
        f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
        g = a(f),
        h = g.data("bs.collapse"),
        i = h ? "toggle" : e.data(),
        j = e.attr("data-parent"),
        k = j && a(j);
    h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    b && 3 === b.which || (a(e).remove(), a(f).each(function () {
      var d = c(a(this)),
          e = {
        relatedTarget: this
      };
      d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e));
    }));
  }

  function c(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.2.0", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = c(e),
          g = f.hasClass("open");

      if (b(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h);
      }

      return !1;
    }
  }, g.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);

      if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = c(d),
            g = e.hasClass("open");
        if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.divider):visible a",
            i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);

        if (i.length) {
          var j = i.index(i.filter(":focus"));
          38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.2.0", c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var c = this,
        d = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass("fade");
      c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
      var e = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
        c.$element.trigger("focus").trigger(e);
      }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var c = this,
        d = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var e = a.support.transition && d;
      if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
      }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var f = function f() {
        c.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f();
    } else b && b();
  }, c.prototype.checkScrollbar = function () {
    document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar());
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", "");
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b;
      (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.2.0", c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show();
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var c = a.contains(document.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !c) return;
      var d = this,
          e = this.tip(),
          f = this.getUID(this.type);
      this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
      var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
          h = /\s?auto?\s?/i,
          i = h.test(g);
      i && (g = g.replace(h, "") || "top"), e.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
      var j = this.getPosition(),
          k = e[0].offsetWidth,
          l = e[0].offsetHeight;

      if (i) {
        var m = g,
            n = this.$element.parent(),
            o = this.getPosition(n);
        g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g);
      }

      var p = this.getCalculatedOffset(g, j, k, l);
      this.applyPlacement(p, g);

      var q = function q() {
        d.$element.trigger("shown.bs." + d.type), d.hoverState = null;
      };

      a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
        m = k.left ? "left" : "top",
        n = k.left ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(l, d[0][n], m);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function () {
    function b() {
      "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type);
    }

    var c = this,
        d = this.tip(),
        e = a.Event("hide.bs." + this.type);
    return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName;
    return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
      width: d ? a(window).width() : b.outerWidth(),
      height: d ? a(window).height() : b.outerHeight()
    }, d ? {
      top: 0,
      left: 0
    } : b.offset());
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type);
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b;
      (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  }, c.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    var e = a.proxy(this.process, this);
    this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.2.0", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = "offset",
        c = 0;
    a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
    var d = this;
    this.$body.find(this.selector).map(function () {
      var d = a(this),
          e = d.data("target") || d.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[b]().top + c, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      d.offsets.push(this[0]), d.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b) {
    this.element = a(b);
  };

  c.VERSION = "3.2.0", c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a")[0],
          f = a.Event("show.bs.tab", {
        relatedTarget: e
      });

      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.closest("li"), c), this.activate(g, g.parent(), function () {
          b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e
          });
        });
      }
    }
  }, c.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
    }

    var f = c.find("> .active"),
        g = d && a.support.transition && f.hasClass("fade");
    g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (c) {
    c.preventDefault(), b.call(a(this), "show");
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = a(document).height(),
          d = this.$target.scrollTop(),
          e = this.$element.offset(),
          f = this.options.offset,
          g = f.top,
          h = f.bottom;
      "object" != _typeof(f) && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;

      if (this.affixed !== i) {
        null != this.unpin && this.$element.css("top", "");
        var j = "affix" + (i ? "-" + i : ""),
            k = a.Event(j + ".bs.affix");
        this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
          top: b - this.$element.height() - h
        }));
      }
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/chart-master/Chart.js":
/*!*****************************************!*\
  !*** ./public/js/chart-master/Chart.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Chart.js
 * http://chartjs.org/
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
//Define the global Chart Variable as a class.
window.Chart = function (context) {
  var chart = this; //Easing functions adapted from Robert Penner's easing equations
  //http://www.robertpenner.com/easing/

  var animationOptions = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return -1 * t * (t - 2);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t;
      return -1 / 2 * (--t * (t - 2) - 1);
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return 1 * ((t = t / 1 - 1) * t * t + 1);
    },
    easeInOutCubic: function easeInOutCubic(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t + 2);
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return -1 * ((t = t / 1 - 1) * t * t * t - 1);
    },
    easeInOutQuart: function easeInOutQuart(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t;
      return -1 / 2 * ((t -= 2) * t * t * t - 2);
    },
    easeInQuint: function easeInQuint(t) {
      return 1 * (t /= 1) * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
    },
    easeInOutQuint: function easeInOutQuint(t) {
      if ((t /= 1 / 2) < 1) return 1 / 2 * t * t * t * t * t;
      return 1 / 2 * ((t -= 2) * t * t * t * t + 2);
    },
    easeInSine: function easeInSine(t) {
      return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
    },
    easeOutSine: function easeOutSine(t) {
      return 1 * Math.sin(t / 1 * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(t) {
      return -1 / 2 * (Math.cos(Math.PI * t / 1) - 1);
    },
    easeInExpo: function easeInExpo(t) {
      return t == 0 ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
    },
    easeOutExpo: function easeOutExpo(t) {
      return t == 1 ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1);
    },
    easeInOutExpo: function easeInOutExpo(t) {
      if (t == 0) return 0;
      if (t == 1) return 1;
      if ((t /= 1 / 2) < 1) return 1 / 2 * Math.pow(2, 10 * (t - 1));
      return 1 / 2 * (-Math.pow(2, -10 * --t) + 2);
    },
    easeInCirc: function easeInCirc(t) {
      if (t >= 1) return t;
      return -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
    },
    easeOutCirc: function easeOutCirc(t) {
      return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
    },
    easeInOutCirc: function easeInOutCirc(t) {
      if ((t /= 1 / 2) < 1) return -1 / 2 * (Math.sqrt(1 - t * t) - 1);
      return 1 / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },
    easeInElastic: function easeInElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * .3;

      if (a < Math.abs(1)) {
        a = 1;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
    },
    easeOutElastic: function easeOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1) == 1) return 1;
      if (!p) p = 1 * .3;

      if (a < Math.abs(1)) {
        a = 1;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      return a * Math.pow(2, -10 * t) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) + 1;
    },
    easeInOutElastic: function easeInOutElastic(t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t == 0) return 0;
      if ((t /= 1 / 2) == 2) return 1;
      if (!p) p = 1 * (.3 * 1.5);

      if (a < Math.abs(1)) {
        a = 1;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(1 / a);

      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p));
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * 1 - s) * (2 * Math.PI) / p) * .5 + 1;
    },
    easeInBack: function easeInBack(t) {
      var s = 1.70158;
      return 1 * (t /= 1) * t * ((s + 1) * t - s);
    },
    easeOutBack: function easeOutBack(t) {
      var s = 1.70158;
      return 1 * ((t = t / 1 - 1) * t * ((s + 1) * t + s) + 1);
    },
    easeInOutBack: function easeInOutBack(t) {
      var s = 1.70158;
      if ((t /= 1 / 2) < 1) return 1 / 2 * (t * t * (((s *= 1.525) + 1) * t - s));
      return 1 / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },
    easeInBounce: function easeInBounce(t) {
      return 1 - animationOptions.easeOutBounce(1 - t);
    },
    easeOutBounce: function easeOutBounce(t) {
      if ((t /= 1) < 1 / 2.75) {
        return 1 * (7.5625 * t * t);
      } else if (t < 2 / 2.75) {
        return 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75);
      } else if (t < 2.5 / 2.75) {
        return 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375);
      } else {
        return 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
      }
    },
    easeInOutBounce: function easeInOutBounce(t) {
      if (t < 1 / 2) return animationOptions.easeInBounce(t * 2) * .5;
      return animationOptions.easeOutBounce(t * 2 - 1) * .5 + 1 * .5;
    }
  }; //Variables global to the chart

  var width = context.canvas.width;
  var height = context.canvas.height; //High pixel density displays - multiply the size of the canvas height/width by the device pixel ratio, then scale.

  if (window.devicePixelRatio) {
    context.canvas.style.width = width + "px";
    context.canvas.style.height = height + "px";
    context.canvas.height = height * window.devicePixelRatio;
    context.canvas.width = width * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  this.PolarArea = function (data, options) {
    chart.PolarArea.defaults = {
      scaleOverlay: true,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: true,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: true,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.PolarArea.defaults, options) : chart.PolarArea.defaults;
    return new PolarArea(data, config, context);
  };

  this.Radar = function (data, options) {
    chart.Radar.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleShowLine: true,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: false,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowLabelBackdrop: true,
      scaleBackdropColor: "rgba(255,255,255,0.75)",
      scaleBackdropPaddingY: 2,
      scaleBackdropPaddingX: 2,
      angleShowLineOut: true,
      angleLineColor: "rgba(0,0,0,.1)",
      angleLineWidth: 1,
      pointLabelFontFamily: "'Arial'",
      pointLabelFontStyle: "normal",
      pointLabelFontSize: 12,
      pointLabelFontColor: "#666",
      pointDot: true,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Radar.defaults, options) : chart.Radar.defaults;
    return new Radar(data, config, context);
  };

  this.Pie = function (data, options) {
    chart.Pie.defaults = {
      segmentShowStroke: true,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Pie.defaults, options) : chart.Pie.defaults;
    return new Pie(data, config, context);
  };

  this.Doughnut = function (data, options) {
    chart.Doughnut.defaults = {
      segmentShowStroke: true,
      segmentStrokeColor: "#d6d9dc",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 70,
      animation: true,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Doughnut.defaults, options) : chart.Doughnut.defaults;
    return new Doughnut(data, config, context);
  };

  this.Line = function (data, options) {
    chart.Line.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      bezierCurve: true,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 2,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Line.defaults, options) : chart.Line.defaults;
    return new Line(data, config, context);
  };

  this.Bar = function (data, options) {
    chart.Bar.defaults = {
      scaleOverlay: false,
      scaleOverride: false,
      scaleSteps: null,
      scaleStepWidth: null,
      scaleStartValue: null,
      scaleLineColor: "rgba(0,0,0,.1)",
      scaleLineWidth: 1,
      scaleShowLabels: true,
      scaleLabel: "<%=value%>",
      scaleFontFamily: "'Arial'",
      scaleFontSize: 12,
      scaleFontStyle: "normal",
      scaleFontColor: "#666",
      scaleShowGridLines: true,
      scaleGridLineColor: "rgba(0,0,0,.05)",
      scaleGridLineWidth: 1,
      barShowStroke: true,
      barStrokeWidth: 2,
      barValueSpacing: 5,
      barDatasetSpacing: 1,
      animation: true,
      animationSteps: 60,
      animationEasing: "easeOutQuart",
      onAnimationComplete: null
    };
    var config = options ? mergeChartConfig(chart.Bar.defaults, options) : chart.Bar.defaults;
    return new Bar(data, config, context);
  };

  var clear = function clear(c) {
    c.clearRect(0, 0, width, height);
  };

  var PolarArea = function PolarArea(data, config, ctx) {
    var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString;
    calculateDrawingSizes();
    valueBounds = getValueBounds();
    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : null; //Check and set the scale

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = maxSize / calculatedScale.steps; //Wrap in an animation loop wrapper

    animationLoop(config, drawScale, drawAllSegments, ctx);

    function calculateDrawingSizes() {
      maxSize = Min([width, height]) / 2; //Remove whatever is larger - the font size or line width.

      maxSize -= Max([config.scaleFontSize * 0.5, config.scaleLineWidth * 0.5]);
      labelHeight = config.scaleFontSize * 2; //If we're drawing the backdrop - add the Y padding to the label height and remove from drawing region.

      if (config.scaleShowLabelBackdrop) {
        labelHeight += 2 * config.scaleBackdropPaddingY;
        maxSize -= config.scaleBackdropPaddingY * 1.5;
      }

      scaleHeight = maxSize; //If the label height is less than 5, set it to 5 so we don't have lines on top of each other.

      labelHeight = Default(labelHeight, 5);
    }

    function drawScale() {
      for (var i = 0; i < calculatedScale.steps; i++) {
        //If the line object is there
        if (config.scaleShowLine) {
          ctx.beginPath();
          ctx.arc(width / 2, height / 2, scaleHop * (i + 1), 0, Math.PI * 2, true);
          ctx.strokeStyle = config.scaleLineColor;
          ctx.lineWidth = config.scaleLineWidth;
          ctx.stroke();
        }

        if (config.scaleShowLabels) {
          ctx.textAlign = "center";
          ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
          var label = calculatedScale.labels[i]; //If the backdrop object is within the font object

          if (config.scaleShowLabelBackdrop) {
            var textWidth = ctx.measureText(label).width;
            ctx.fillStyle = config.scaleBackdropColor;
            ctx.beginPath();
            ctx.rect(Math.round(width / 2 - textWidth / 2 - config.scaleBackdropPaddingX), //X
            Math.round(height / 2 - scaleHop * (i + 1) - config.scaleFontSize * 0.5 - config.scaleBackdropPaddingY), //Y
            Math.round(textWidth + config.scaleBackdropPaddingX * 2), //Width
            Math.round(config.scaleFontSize + config.scaleBackdropPaddingY * 2) //Height
            );
            ctx.fill();
          }

          ctx.textBaseline = "middle";
          ctx.fillStyle = config.scaleFontColor;
          ctx.fillText(label, width / 2, height / 2 - scaleHop * (i + 1));
        }
      }
    }

    function drawAllSegments(animationDecimal) {
      var startAngle = -Math.PI / 2,
          angleStep = Math.PI * 2 / data.length,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * calculateOffset(data[i].value, calculatedScale, scaleHop), startAngle, startAngle + rotateAnimation * angleStep, false);
        ctx.lineTo(width / 2, height / 2);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.stroke();
        }

        startAngle += rotateAnimation * angleStep;
      }
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.length; i++) {
        if (data[i].value > upperValue) {
          upperValue = data[i].value;
        }

        if (data[i].value < lowerValue) {
          lowerValue = data[i].value;
        }
      }

      ;
      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Radar = function Radar(data, config, ctx) {
    var maxSize, scaleHop, calculatedScale, labelHeight, scaleHeight, valueBounds, labelTemplateString; //If no labels are defined set to an empty array, so referencing length for looping doesn't blow up.

    if (!data.labels) data.labels = [];
    calculateDrawingSizes();
    var valueBounds = getValueBounds();
    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : null; //Check and set the scale

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = maxSize / calculatedScale.steps;
    animationLoop(config, drawScale, drawAllDataPoints, ctx); //Radar specific functions.

    function drawAllDataPoints(animationDecimal) {
      var rotationDegree = 2 * Math.PI / data.datasets[0].data.length;
      ctx.save(); //translate to the centre of the canvas.

      ctx.translate(width / 2, height / 2); //We accept multiple data sets for radar charts, so show loop through each set

      for (var i = 0; i < data.datasets.length; i++) {
        ctx.beginPath();
        ctx.moveTo(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[0], calculatedScale, scaleHop)));

        for (var j = 1; j < data.datasets[i].data.length; j++) {
          ctx.rotate(rotationDegree);
          ctx.lineTo(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop)));
        }

        ctx.closePath();
        ctx.fillStyle = data.datasets[i].fillColor;
        ctx.strokeStyle = data.datasets[i].strokeColor;
        ctx.lineWidth = config.datasetStrokeWidth;
        ctx.fill();
        ctx.stroke();

        if (config.pointDot) {
          ctx.fillStyle = data.datasets[i].pointColor;
          ctx.strokeStyle = data.datasets[i].pointStrokeColor;
          ctx.lineWidth = config.pointDotStrokeWidth;

          for (var k = 0; k < data.datasets[i].data.length; k++) {
            ctx.rotate(rotationDegree);
            ctx.beginPath();
            ctx.arc(0, animationDecimal * (-1 * calculateOffset(data.datasets[i].data[k], calculatedScale, scaleHop)), config.pointDotRadius, 2 * Math.PI, false);
            ctx.fill();
            ctx.stroke();
          }
        }

        ctx.rotate(rotationDegree);
      }

      ctx.restore();
    }

    function drawScale() {
      var rotationDegree = 2 * Math.PI / data.datasets[0].data.length;
      ctx.save();
      ctx.translate(width / 2, height / 2);

      if (config.angleShowLineOut) {
        ctx.strokeStyle = config.angleLineColor;
        ctx.lineWidth = config.angleLineWidth;

        for (var h = 0; h < data.datasets[0].data.length; h++) {
          ctx.rotate(rotationDegree);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, -maxSize);
          ctx.stroke();
        }
      }

      for (var i = 0; i < calculatedScale.steps; i++) {
        ctx.beginPath();

        if (config.scaleShowLine) {
          ctx.strokeStyle = config.scaleLineColor;
          ctx.lineWidth = config.scaleLineWidth;
          ctx.moveTo(0, -scaleHop * (i + 1));

          for (var j = 0; j < data.datasets[0].data.length; j++) {
            ctx.rotate(rotationDegree);
            ctx.lineTo(0, -scaleHop * (i + 1));
          }

          ctx.closePath();
          ctx.stroke();
        }

        if (config.scaleShowLabels) {
          ctx.textAlign = 'center';
          ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
          ctx.textBaseline = "middle";

          if (config.scaleShowLabelBackdrop) {
            var textWidth = ctx.measureText(calculatedScale.labels[i]).width;
            ctx.fillStyle = config.scaleBackdropColor;
            ctx.beginPath();
            ctx.rect(Math.round(-textWidth / 2 - config.scaleBackdropPaddingX), //X
            Math.round(-scaleHop * (i + 1) - config.scaleFontSize * 0.5 - config.scaleBackdropPaddingY), //Y
            Math.round(textWidth + config.scaleBackdropPaddingX * 2), //Width
            Math.round(config.scaleFontSize + config.scaleBackdropPaddingY * 2) //Height
            );
            ctx.fill();
          }

          ctx.fillStyle = config.scaleFontColor;
          ctx.fillText(calculatedScale.labels[i], 0, -scaleHop * (i + 1));
        }
      }

      for (var k = 0; k < data.labels.length; k++) {
        ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize + "px " + config.pointLabelFontFamily;
        ctx.fillStyle = config.pointLabelFontColor;
        var opposite = Math.sin(rotationDegree * k) * (maxSize + config.pointLabelFontSize);
        var adjacent = Math.cos(rotationDegree * k) * (maxSize + config.pointLabelFontSize);

        if (rotationDegree * k == Math.PI || rotationDegree * k == 0) {
          ctx.textAlign = "center";
        } else if (rotationDegree * k > Math.PI) {
          ctx.textAlign = "right";
        } else {
          ctx.textAlign = "left";
        }

        ctx.textBaseline = "middle";
        ctx.fillText(data.labels[k], opposite, -adjacent);
      }

      ctx.restore();
    }

    ;

    function calculateDrawingSizes() {
      maxSize = Min([width, height]) / 2;
      labelHeight = config.scaleFontSize * 2;
      var labelLength = 0;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.font = config.pointLabelFontStyle + " " + config.pointLabelFontSize + "px " + config.pointLabelFontFamily;
        var textMeasurement = ctx.measureText(data.labels[i]).width;
        if (textMeasurement > labelLength) labelLength = textMeasurement;
      } //Figure out whats the largest - the height of the text or the width of what's there, and minus it from the maximum usable size.


      maxSize -= Max([labelLength, config.pointLabelFontSize / 2 * 1.5]);
      maxSize -= config.pointLabelFontSize;
      maxSize = CapValue(maxSize, null, 0);
      scaleHeight = maxSize; //If the label height is less than 5, set it to 5 so we don't have lines on top of each other.

      labelHeight = Default(labelHeight, 5);
    }

    ;

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }
        }
      }

      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Pie = function Pie(data, config, ctx) {
    var segmentTotal = 0; //In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.

    var pieRadius = Min([height / 2, width / 2]) - 5;

    for (var i = 0; i < data.length; i++) {
      segmentTotal += data[i].value;
    }

    animationLoop(config, null, drawPieSegments, ctx);

    function drawPieSegments(animationDecimal) {
      var cumulativeAngle = -Math.PI / 2,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        var segmentAngle = rotateAnimation * (data[i].value / segmentTotal * (Math.PI * 2));
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * pieRadius, cumulativeAngle, cumulativeAngle + segmentAngle);
        ctx.lineTo(width / 2, height / 2);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.stroke();
        }

        cumulativeAngle += segmentAngle;
      }
    }
  };

  var Doughnut = function Doughnut(data, config, ctx) {
    var segmentTotal = 0; //In case we have a canvas that is not a square. Minus 5 pixels as padding round the edge.

    var doughnutRadius = Min([height / 2, width / 2]) - 5;
    var cutoutRadius = doughnutRadius * (config.percentageInnerCutout / 100);

    for (var i = 0; i < data.length; i++) {
      segmentTotal += data[i].value;
    }

    animationLoop(config, null, drawPieSegments, ctx);

    function drawPieSegments(animationDecimal) {
      var cumulativeAngle = -Math.PI / 2,
          scaleAnimation = 1,
          rotateAnimation = 1;

      if (config.animation) {
        if (config.animateScale) {
          scaleAnimation = animationDecimal;
        }

        if (config.animateRotate) {
          rotateAnimation = animationDecimal;
        }
      }

      for (var i = 0; i < data.length; i++) {
        var segmentAngle = rotateAnimation * (data[i].value / segmentTotal * (Math.PI * 2));
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, scaleAnimation * doughnutRadius, cumulativeAngle, cumulativeAngle + segmentAngle, false);
        ctx.arc(width / 2, height / 2, scaleAnimation * cutoutRadius, cumulativeAngle + segmentAngle, cumulativeAngle, true);
        ctx.closePath();
        ctx.fillStyle = data[i].color;
        ctx.fill();

        if (config.segmentShowStroke) {
          ctx.lineWidth = config.segmentStrokeWidth;
          ctx.strokeStyle = config.segmentStrokeColor;
          ctx.stroke();
        }

        cumulativeAngle += segmentAngle;
      }
    }
  };

  var Line = function Line(data, config, ctx) {
    var maxSize,
        scaleHop,
        calculatedScale,
        labelHeight,
        scaleHeight,
        valueBounds,
        labelTemplateString,
        valueHop,
        widestXLabel,
        xAxisLength,
        yAxisPosX,
        xAxisPosY,
        rotateLabels = 0;
    calculateDrawingSizes();
    valueBounds = getValueBounds(); //Check and set the scale

    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : "";

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = Math.floor(scaleHeight / calculatedScale.steps);
    calculateXAxisSize();
    animationLoop(config, drawScale, drawLines, ctx);

    function drawLines(animPc) {
      for (var i = 0; i < data.datasets.length; i++) {
        ctx.strokeStyle = data.datasets[i].strokeColor;
        ctx.lineWidth = config.datasetStrokeWidth;
        ctx.beginPath();
        ctx.moveTo(yAxisPosX, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[0], calculatedScale, scaleHop));

        for (var j = 1; j < data.datasets[i].data.length; j++) {
          if (config.bezierCurve) {
            ctx.bezierCurveTo(xPos(j - 0.5), yPos(i, j - 1), xPos(j - 0.5), yPos(i, j), xPos(j), yPos(i, j));
          } else {
            ctx.lineTo(xPos(j), yPos(i, j));
          }
        }

        ctx.stroke();

        if (config.datasetFill) {
          ctx.lineTo(yAxisPosX + valueHop * (data.datasets[i].data.length - 1), xAxisPosY);
          ctx.lineTo(yAxisPosX, xAxisPosY);
          ctx.closePath();
          ctx.fillStyle = data.datasets[i].fillColor;
          ctx.fill();
        } else {
          ctx.closePath();
        }

        if (config.pointDot) {
          ctx.fillStyle = data.datasets[i].pointColor;
          ctx.strokeStyle = data.datasets[i].pointStrokeColor;
          ctx.lineWidth = config.pointDotStrokeWidth;

          for (var k = 0; k < data.datasets[i].data.length; k++) {
            ctx.beginPath();
            ctx.arc(yAxisPosX + valueHop * k, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[k], calculatedScale, scaleHop), config.pointDotRadius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.stroke();
          }
        }
      }

      function yPos(dataSet, iteration) {
        return xAxisPosY - animPc * calculateOffset(data.datasets[dataSet].data[iteration], calculatedScale, scaleHop);
      }

      function xPos(iteration) {
        return yAxisPosX + valueHop * iteration;
      }
    }

    function drawScale() {
      //X axis line
      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(width - widestXLabel / 2 + 5, xAxisPosY);
      ctx.lineTo(width - widestXLabel / 2 - xAxisLength - 5, xAxisPosY);
      ctx.stroke();

      if (rotateLabels > 0) {
        ctx.save();
        ctx.textAlign = "right";
      } else {
        ctx.textAlign = "center";
      }

      ctx.fillStyle = config.scaleFontColor;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.save();

        if (rotateLabels > 0) {
          ctx.translate(yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize);
          ctx.rotate(-(rotateLabels * (Math.PI / 180)));
          ctx.fillText(data.labels[i], 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(data.labels[i], yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize + 3);
        }

        ctx.beginPath();
        ctx.moveTo(yAxisPosX + i * valueHop, xAxisPosY + 3); //Check i isnt 0, so we dont go over the Y axis twice.

        if (config.scaleShowGridLines && i > 0) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + i * valueHop, 5);
        } else {
          ctx.lineTo(yAxisPosX + i * valueHop, xAxisPosY + 3);
        }

        ctx.stroke();
      } //Y axis


      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(yAxisPosX, xAxisPosY + 5);
      ctx.lineTo(yAxisPosX, 5);
      ctx.stroke();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      for (var j = 0; j < calculatedScale.steps; j++) {
        ctx.beginPath();
        ctx.moveTo(yAxisPosX - 3, xAxisPosY - (j + 1) * scaleHop);

        if (config.scaleShowGridLines) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + xAxisLength + 5, xAxisPosY - (j + 1) * scaleHop);
        } else {
          ctx.lineTo(yAxisPosX - 0.5, xAxisPosY - (j + 1) * scaleHop);
        }

        ctx.stroke();

        if (config.scaleShowLabels) {
          ctx.fillText(calculatedScale.labels[j], yAxisPosX - 8, xAxisPosY - (j + 1) * scaleHop);
        }
      }
    }

    function calculateXAxisSize() {
      var longestText = 1; //if we are showing the labels

      if (config.scaleShowLabels) {
        ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;

        for (var i = 0; i < calculatedScale.labels.length; i++) {
          var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
          longestText = measuredText > longestText ? measuredText : longestText;
        } //Add a little extra padding from the y axis


        longestText += 10;
      }

      xAxisLength = width - longestText - widestXLabel;
      valueHop = Math.floor(xAxisLength / (data.labels.length - 1));
      yAxisPosX = width - widestXLabel / 2 - xAxisLength;
      xAxisPosY = scaleHeight + config.scaleFontSize / 2;
    }

    function calculateDrawingSizes() {
      maxSize = height; //Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.

      ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
      widestXLabel = 1;

      for (var i = 0; i < data.labels.length; i++) {
        var textLength = ctx.measureText(data.labels[i]).width; //If the text length is longer - make that equal to longest text!

        widestXLabel = textLength > widestXLabel ? textLength : widestXLabel;
      }

      if (width / data.labels.length < widestXLabel) {
        rotateLabels = 45;

        if (width / data.labels.length < Math.cos(rotateLabels) * widestXLabel) {
          rotateLabels = 90;
          maxSize -= widestXLabel;
        } else {
          maxSize -= Math.sin(rotateLabels) * widestXLabel;
        }
      } else {
        maxSize -= config.scaleFontSize;
      } //Add a little padding between the x line and the text


      maxSize -= 5;
      labelHeight = config.scaleFontSize;
      maxSize -= labelHeight; //Set 5 pixels greater than the font size to allow for a little padding from the X axis.

      scaleHeight = maxSize; //Then get the area above we can safely draw on.
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          ;

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }

          ;
        }
      }

      ;
      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  var Bar = function Bar(data, config, ctx) {
    var maxSize,
        scaleHop,
        calculatedScale,
        labelHeight,
        scaleHeight,
        valueBounds,
        labelTemplateString,
        valueHop,
        widestXLabel,
        xAxisLength,
        yAxisPosX,
        xAxisPosY,
        barWidth,
        rotateLabels = 0;
    calculateDrawingSizes();
    valueBounds = getValueBounds(); //Check and set the scale

    labelTemplateString = config.scaleShowLabels ? config.scaleLabel : "";

    if (!config.scaleOverride) {
      calculatedScale = calculateScale(scaleHeight, valueBounds.maxSteps, valueBounds.minSteps, valueBounds.maxValue, valueBounds.minValue, labelTemplateString);
    } else {
      calculatedScale = {
        steps: config.scaleSteps,
        stepValue: config.scaleStepWidth,
        graphMin: config.scaleStartValue,
        labels: []
      };
      populateLabels(labelTemplateString, calculatedScale.labels, calculatedScale.steps, config.scaleStartValue, config.scaleStepWidth);
    }

    scaleHop = Math.floor(scaleHeight / calculatedScale.steps);
    calculateXAxisSize();
    animationLoop(config, drawScale, drawBars, ctx);

    function drawBars(animPc) {
      ctx.lineWidth = config.barStrokeWidth;

      for (var i = 0; i < data.datasets.length; i++) {
        ctx.fillStyle = data.datasets[i].fillColor;
        ctx.strokeStyle = data.datasets[i].strokeColor;

        for (var j = 0; j < data.datasets[i].data.length; j++) {
          var barOffset = yAxisPosX + config.barValueSpacing + valueHop * j + barWidth * i + config.barDatasetSpacing * i + config.barStrokeWidth * i;
          ctx.beginPath();
          ctx.moveTo(barOffset, xAxisPosY);
          ctx.lineTo(barOffset, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop) + config.barStrokeWidth / 2);
          ctx.lineTo(barOffset + barWidth, xAxisPosY - animPc * calculateOffset(data.datasets[i].data[j], calculatedScale, scaleHop) + config.barStrokeWidth / 2);
          ctx.lineTo(barOffset + barWidth, xAxisPosY);

          if (config.barShowStroke) {
            ctx.stroke();
          }

          ctx.closePath();
          ctx.fill();
        }
      }
    }

    function drawScale() {
      //X axis line
      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(width - widestXLabel / 2 + 5, xAxisPosY);
      ctx.lineTo(width - widestXLabel / 2 - xAxisLength - 5, xAxisPosY);
      ctx.stroke();

      if (rotateLabels > 0) {
        ctx.save();
        ctx.textAlign = "right";
      } else {
        ctx.textAlign = "center";
      }

      ctx.fillStyle = config.scaleFontColor;

      for (var i = 0; i < data.labels.length; i++) {
        ctx.save();

        if (rotateLabels > 0) {
          ctx.translate(yAxisPosX + i * valueHop, xAxisPosY + config.scaleFontSize);
          ctx.rotate(-(rotateLabels * (Math.PI / 180)));
          ctx.fillText(data.labels[i], 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(data.labels[i], yAxisPosX + i * valueHop + valueHop / 2, xAxisPosY + config.scaleFontSize + 3);
        }

        ctx.beginPath();
        ctx.moveTo(yAxisPosX + (i + 1) * valueHop, xAxisPosY + 3); //Check i isnt 0, so we dont go over the Y axis twice.

        ctx.lineWidth = config.scaleGridLineWidth;
        ctx.strokeStyle = config.scaleGridLineColor;
        ctx.lineTo(yAxisPosX + (i + 1) * valueHop, 5);
        ctx.stroke();
      } //Y axis


      ctx.lineWidth = config.scaleLineWidth;
      ctx.strokeStyle = config.scaleLineColor;
      ctx.beginPath();
      ctx.moveTo(yAxisPosX, xAxisPosY + 5);
      ctx.lineTo(yAxisPosX, 5);
      ctx.stroke();
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";

      for (var j = 0; j < calculatedScale.steps; j++) {
        ctx.beginPath();
        ctx.moveTo(yAxisPosX - 3, xAxisPosY - (j + 1) * scaleHop);

        if (config.scaleShowGridLines) {
          ctx.lineWidth = config.scaleGridLineWidth;
          ctx.strokeStyle = config.scaleGridLineColor;
          ctx.lineTo(yAxisPosX + xAxisLength + 5, xAxisPosY - (j + 1) * scaleHop);
        } else {
          ctx.lineTo(yAxisPosX - 0.5, xAxisPosY - (j + 1) * scaleHop);
        }

        ctx.stroke();

        if (config.scaleShowLabels) {
          ctx.fillText(calculatedScale.labels[j], yAxisPosX - 8, xAxisPosY - (j + 1) * scaleHop);
        }
      }
    }

    function calculateXAxisSize() {
      var longestText = 1; //if we are showing the labels

      if (config.scaleShowLabels) {
        ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;

        for (var i = 0; i < calculatedScale.labels.length; i++) {
          var measuredText = ctx.measureText(calculatedScale.labels[i]).width;
          longestText = measuredText > longestText ? measuredText : longestText;
        } //Add a little extra padding from the y axis


        longestText += 10;
      }

      xAxisLength = width - longestText - widestXLabel;
      valueHop = Math.floor(xAxisLength / data.labels.length);
      barWidth = (valueHop - config.scaleGridLineWidth * 2 - config.barValueSpacing * 2 - (config.barDatasetSpacing * data.datasets.length - 1) - (config.barStrokeWidth / 2 * data.datasets.length - 1)) / data.datasets.length;
      yAxisPosX = width - widestXLabel / 2 - xAxisLength;
      xAxisPosY = scaleHeight + config.scaleFontSize / 2;
    }

    function calculateDrawingSizes() {
      maxSize = height; //Need to check the X axis first - measure the length of each text metric, and figure out if we need to rotate by 45 degrees.

      ctx.font = config.scaleFontStyle + " " + config.scaleFontSize + "px " + config.scaleFontFamily;
      widestXLabel = 1;

      for (var i = 0; i < data.labels.length; i++) {
        var textLength = ctx.measureText(data.labels[i]).width; //If the text length is longer - make that equal to longest text!

        widestXLabel = textLength > widestXLabel ? textLength : widestXLabel;
      }

      if (width / data.labels.length < widestXLabel) {
        rotateLabels = 45;

        if (width / data.labels.length < Math.cos(rotateLabels) * widestXLabel) {
          rotateLabels = 90;
          maxSize -= widestXLabel;
        } else {
          maxSize -= Math.sin(rotateLabels) * widestXLabel;
        }
      } else {
        maxSize -= config.scaleFontSize;
      } //Add a little padding between the x line and the text


      maxSize -= 5;
      labelHeight = config.scaleFontSize;
      maxSize -= labelHeight; //Set 5 pixels greater than the font size to allow for a little padding from the X axis.

      scaleHeight = maxSize; //Then get the area above we can safely draw on.
    }

    function getValueBounds() {
      var upperValue = Number.MIN_VALUE;
      var lowerValue = Number.MAX_VALUE;

      for (var i = 0; i < data.datasets.length; i++) {
        for (var j = 0; j < data.datasets[i].data.length; j++) {
          if (data.datasets[i].data[j] > upperValue) {
            upperValue = data.datasets[i].data[j];
          }

          ;

          if (data.datasets[i].data[j] < lowerValue) {
            lowerValue = data.datasets[i].data[j];
          }

          ;
        }
      }

      ;
      var maxSteps = Math.floor(scaleHeight / (labelHeight * 0.66));
      var minSteps = Math.floor(scaleHeight / labelHeight * 0.5);
      return {
        maxValue: upperValue,
        minValue: lowerValue,
        maxSteps: maxSteps,
        minSteps: minSteps
      };
    }
  };

  function calculateOffset(val, calculatedScale, scaleHop) {
    var outerValue = calculatedScale.steps * calculatedScale.stepValue;
    var adjustedValue = val - calculatedScale.graphMin;
    var scalingFactor = CapValue(adjustedValue / outerValue, 1, 0);
    return scaleHop * calculatedScale.steps * scalingFactor;
  }

  function animationLoop(config, drawScale, drawData, ctx) {
    var animFrameAmount = config.animation ? 1 / CapValue(config.animationSteps, Number.MAX_VALUE, 1) : 1,
        easingFunction = animationOptions[config.animationEasing],
        percentAnimComplete = config.animation ? 0 : 1;
    if (typeof drawScale !== "function") drawScale = function drawScale() {};
    requestAnimFrame(animLoop);

    function animateFrame() {
      var easeAdjustedAnimationPercent = config.animation ? CapValue(easingFunction(percentAnimComplete), null, 0) : 1;
      clear(ctx);

      if (config.scaleOverlay) {
        drawData(easeAdjustedAnimationPercent);
        drawScale();
      } else {
        drawScale();
        drawData(easeAdjustedAnimationPercent);
      }
    }

    function animLoop() {
      //We need to check if the animation is incomplete (less than 1), or complete (1).
      percentAnimComplete += animFrameAmount;
      animateFrame(); //Stop the loop continuing forever

      if (percentAnimComplete <= 1) {
        requestAnimFrame(animLoop);
      } else {
        if (typeof config.onAnimationComplete == "function") config.onAnimationComplete();
      }
    }
  } //Declare global functions to be called within this namespace here.
  // shim layer with setTimeout fallback


  var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  function calculateScale(drawingHeight, maxSteps, minSteps, maxValue, minValue, labelTemplateString) {
    var graphMin, graphMax, graphRange, stepValue, numberOfSteps, valueRange, rangeOrderOfMagnitude, decimalNum;
    valueRange = maxValue - minValue;
    rangeOrderOfMagnitude = calculateOrderOfMagnitude(valueRange);
    graphMin = Math.floor(minValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
    graphMax = Math.ceil(maxValue / (1 * Math.pow(10, rangeOrderOfMagnitude))) * Math.pow(10, rangeOrderOfMagnitude);
    graphRange = graphMax - graphMin;
    stepValue = Math.pow(10, rangeOrderOfMagnitude);
    numberOfSteps = Math.round(graphRange / stepValue); //Compare number of steps to the max and min for that size graph, and add in half steps if need be.	        

    while (numberOfSteps < minSteps || numberOfSteps > maxSteps) {
      if (numberOfSteps < minSteps) {
        stepValue /= 2;
        numberOfSteps = Math.round(graphRange / stepValue);
      } else {
        stepValue *= 2;
        numberOfSteps = Math.round(graphRange / stepValue);
      }
    }

    ;
    var labels = [];
    populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue);
    return {
      steps: numberOfSteps,
      stepValue: stepValue,
      graphMin: graphMin,
      labels: labels
    };

    function calculateOrderOfMagnitude(val) {
      return Math.floor(Math.log(val) / Math.LN10);
    }
  } //Populate an array of all the labels by interpolating the string.


  function populateLabels(labelTemplateString, labels, numberOfSteps, graphMin, stepValue) {
    if (labelTemplateString) {
      //Fix floating point errors by setting to fixed the on the same decimal as the stepValue.
      for (var i = 1; i < numberOfSteps + 1; i++) {
        labels.push(tmpl(labelTemplateString, {
          value: (graphMin + stepValue * i).toFixed(getDecimalPlaces(stepValue))
        }));
      }
    }
  } //Max value from array


  function Max(array) {
    return Math.max.apply(Math, array);
  }

  ; //Min value from array

  function Min(array) {
    return Math.min.apply(Math, array);
  }

  ; //Default if undefined

  function Default(userDeclared, valueIfFalse) {
    if (!userDeclared) {
      return valueIfFalse;
    } else {
      return userDeclared;
    }
  }

  ; //Is a number function

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  } //Apply cap a value at a high or low number


  function CapValue(valueToCap, maxValue, minValue) {
    if (isNumber(maxValue)) {
      if (valueToCap > maxValue) {
        return maxValue;
      }
    }

    if (isNumber(minValue)) {
      if (valueToCap < minValue) {
        return minValue;
      }
    }

    return valueToCap;
  }

  function getDecimalPlaces(num) {
    var numberOfDecimalPlaces;

    if (num % 1 != 0) {
      return num.toString().split(".")[1].length;
    } else {
      return 0;
    }
  }

  function mergeChartConfig(defaults, userDefined) {
    var returnObj = {};

    for (var attrname in defaults) {
      returnObj[attrname] = defaults[attrname];
    }

    for (var attrname in userDefined) {
      returnObj[attrname] = userDefined[attrname];
    }

    return returnObj;
  } //Javascript micro templating by John Resig - source at http://ejohn.org/blog/javascript-micro-templating/


  var cache = {};

  function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) : // Generate a reusable function that will serve as a template
    // generator (and which will be cached).
    new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" + // Introduce the data as local variables using with(){}
    "with(obj){p.push('" + // Convert the template into pure JavaScript
    str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"); // Provide some basic currying to the user

    return data ? fn(data) : fn;
  }

  ;
};

/***/ }),

/***/ "./public/js/common-scripts.js":
/*!*************************************!*\
  !*** ./public/js/common-scripts.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, jQuery) {/*---LEFT BAR ACCORDION----*/
$(function () {
  $('#nav-accordion').dcAccordion({
    eventType: 'click',
    autoClose: true,
    saveState: true,
    disableLink: true,
    speed: 'slow',
    showCount: false,
    autoExpand: true,
    //        cookie: 'dcjq-accordion-1',
    classExpand: 'dcjq-current-parent'
  });
});

var Script = function () {
  //    sidebar dropdown menu auto scrolling
  jQuery('#sidebar .sub-menu > a').click(function () {
    var o = $(this).offset();
    diff = 250 - o.top;
    if (diff > 0) $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);else $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
  }); //    sidebar toggle

  $(function () {
    function responsiveView() {
      var wSize = $(window).width();

      if (wSize <= 768) {
        $('#container').addClass('sidebar-close');
        $('#sidebar > ul').hide();
      }

      if (wSize > 768) {
        $('#container').removeClass('sidebar-close');
        $('#sidebar > ul').show();
      }
    }

    $(window).on('load', responsiveView);
    $(window).on('resize', responsiveView);
  });
  $('.fa-bars').click(function () {
    if ($('#sidebar > ul').is(":visible") === true) {
      $('#main-content').css({
        'margin-left': '0px'
      });
      $('#sidebar').css({
        'margin-left': '-210px'
      });
      $('#sidebar > ul').hide();
      $("#container").addClass("sidebar-closed");
    } else {
      $('#main-content').css({
        'margin-left': '210px'
      });
      $('#sidebar > ul').show();
      $('#sidebar').css({
        'margin-left': '0'
      });
      $("#container").removeClass("sidebar-closed");
    }
  }); // custom scrollbar
  // $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});
  // $("html").niceScroll({styler:"fb",cursorcolor:"#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled:false,  cursorborder: '', zindex: '1000'});
  // widget tools

  jQuery('.panel .tools .fa-chevron-down').click(function () {
    var el = jQuery(this).parents(".panel").children(".panel-body");

    if (jQuery(this).hasClass("fa-chevron-down")) {
      jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
      el.slideUp(200);
    } else {
      jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
      el.slideDown(200);
    }
  });
  jQuery('.panel .tools .fa-times').click(function () {
    jQuery(this).parents(".panel").parent().remove();
  }); //    tool tips

  $('.tooltips').tooltip(); //    popovers

  $('.popovers').popover(); // custom bar chart

  if ($(".custom-bar-chart")) {
    $(".bar").each(function () {
      var i = $(this).find(".value").html();
      $(this).find(".value").html("");
      $(this).find(".value").animate({
        height: i
      }, 2000);
    });
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/fontawesome.js":
/*!**********************************!*\
  !*** ./public/js/fontawesome.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.FontAwesomeKitConfig = {
  "asyncLoading": {
    "enabled": false
  },
  "autoA11y": {
    "enabled": true
  },
  "baseUrl": "https://kit-free.fontawesome.com",
  "detectConflictsUntil": null,
  "license": "free",
  "method": "js",
  "minify": {
    "enabled": true
  },
  "v4FontFaceShim": {
    "enabled": true
  },
  "v4shim": {
    "enabled": true
  },
  "version": "latest"
};
!function () {
  function r(e) {
    var _t,
        n = [],
        i = document,
        o = i.documentElement.doScroll,
        r = "DOMContentLoaded",
        a = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(i.readyState);

    a || i.addEventListener(r, _t = function t() {
      for (i.removeEventListener(r, _t), a = 1; _t = n.shift();) {
        _t();
      }
    }), a ? setTimeout(e, 0) : n.push(e);
  }

  !function () {
    if (!(void 0 === window.Element || "classList" in document.documentElement)) {
      var e,
          t,
          n,
          i = Array.prototype,
          o = i.push,
          r = i.splice,
          a = i.join;
      d.prototype = {
        add: function add(e) {
          this.contains(e) || (o.call(this, e), this.el.className = this.toString());
        },
        contains: function contains(e) {
          return -1 != this.el.className.indexOf(e);
        },
        item: function item(e) {
          return this[e] || null;
        },
        remove: function remove(e) {
          if (this.contains(e)) {
            for (var t = 0; t < this.length && this[t] != e; t++) {
              ;
            }

            r.call(this, t, 1), this.el.className = this.toString();
          }
        },
        toString: function toString() {
          return a.call(this, " ");
        },
        toggle: function toggle(e) {
          return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e);
        }
      }, window.DOMTokenList = d, e = Element.prototype, t = "classList", n = function n() {
        return new d(this);
      }, Object.defineProperty ? Object.defineProperty(e, t, {
        get: n
      }) : e.__defineGetter__(t, n);
    }

    function d(e) {
      for (var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < t.length; n++) {
        o.call(this, t[n]);
      }
    }
  }();

  function a(e) {
    var t, n, i, o;
    prefixesArray = e || ["fa"], prefixesSelectorString = "." + Array.prototype.join.call(e, ",."), t = document.querySelectorAll(prefixesSelectorString), Array.prototype.forEach.call(t, function (e) {
      n = e.getAttribute("title"), e.setAttribute("aria-hidden", "true"), i = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only"), n && i && ((o = document.createElement("span")).innerHTML = n, o.classList.add("sr-only"), e.parentNode.insertBefore(o, e.nextSibling));
    });
  }

  var d = function d(e, t) {
    var n = document.createElement("link");
    n.href = e, n.media = "all", n.rel = "stylesheet", t && t.detectingConflicts && t.detectionIgnoreAttr && n.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)), document.getElementsByTagName("head")[0].appendChild(n);
  },
      c = function c(e, t) {
    !function (e, t) {
      var n,
          i = t && t.before || void 0,
          o = t && t.media || void 0,
          r = window.document,
          a = r.createElement("link");
      if (t && t.detectingConflicts && t.detectionIgnoreAttr && a.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)), i) n = i;else {
        var d = (r.body || r.getElementsByTagName("head")[0]).childNodes;
        n = d[d.length - 1];
      }
      var c = r.styleSheets;
      a.rel = "stylesheet", a.href = e, a.media = "only x", function e(t) {
        if (r.body) return t();
        setTimeout(function () {
          e(t);
        });
      }(function () {
        n.parentNode.insertBefore(a, i ? n : n.nextSibling);
      });

      var s = function s(e) {
        for (var t = a.href, n = c.length; n--;) {
          if (c[n].href === t) return e();
        }

        setTimeout(function () {
          s(e);
        });
      };

      function l() {
        a.addEventListener && a.removeEventListener("load", l), a.media = o || "all";
      }

      a.addEventListener && a.addEventListener("load", l), (a.onloadcssdefined = s)(l);
    }(e, t);
  },
      e = function e(_e, t, n) {
    var i = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
        o = t && void 0 !== t.async ? t.async : void 0,
        r = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
        a = document.createElement("script"),
        d = document.scripts[0];
    a.src = _e, void 0 !== r && a.setAttribute("data-auto-a11y", r ? "true" : "false"), i && (a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)), o && a.setAttributeNode(document.createAttribute("defer")), n && n.detectingConflicts && n.detectionIgnoreAttr && a.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)), d.parentNode.appendChild(a);
  };

  function s(e, t) {
    var n = t && t.addOn || "",
        i = t && t.baseFilename || e.license + n,
        o = t && t.minify ? ".min" : "",
        r = t && t.fileSuffix || e.method,
        a = t && t.subdir || e.method;
    return e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/" + a + "/" + i + o + "." + r;
  }

  var t, n, i, o, l;

  try {
    if (window.FontAwesomeKitConfig) {
      var u,
          f = window.FontAwesomeKitConfig,
          m = {
        detectingConflicts: f.detectConflictsUntil && new Date() <= new Date(f.detectConflictsUntil),
        detectionIgnoreAttr: "data-fa-detection-ignore",
        detectionTimeoutAttr: "data-fa-detection-timeout",
        detectionTimeout: null
      };
      "js" === f.method && (o = m, l = {
        async: (i = f).asyncLoading.enabled,
        autoA11y: i.autoA11y.enabled
      }, "pro" === i.license && (l.autoFetchSvg = !0, l.fetchSvgFrom = i.baseUrl + "/releases/" + ("latest" === i.version ? "latest" : "v".concat(i.version)) + "/svgs"), i.v4shim.enabled && e(s(i, {
        addOn: "-v4-shims",
        minify: i.minify.enabled
      })), e(s(i, {
        minify: i.minify.enabled
      }), l, o)), "css" === f.method && function (e, t) {
        var n,
            i = a.bind(a, ["fa", "fab", "fas", "far", "fal", "fad"]);
        e.autoA11y.enabled && (r(i), n = i, "undefined" != typeof MutationObserver && new MutationObserver(n).observe(document, {
          childList: !0,
          subtree: !0
        })), e.v4shim.enabled && (e.license, e.asyncLoading.enabled ? c(s(e, {
          addOn: "-v4-shims",
          minify: e.minify.enabled
        }), t) : d(s(e, {
          addOn: "-v4-shims",
          minify: e.minify.enabled
        }), t));
        e.v4FontFaceShim.enabled && (e.asyncLoading.enabled ? c(s(e, {
          addOn: "-v4-font-face",
          minify: e.minify.enabled
        }), t) : d(s(e, {
          addOn: "-v4-font-face",
          minify: e.minify.enabled
        }), t));
        var o = s(e, {
          minify: e.minify.enabled
        });
        e.asyncLoading.enabled ? c(o, t) : d(o, t);
      }(f, m), m.detectingConflicts && ((u = document.currentScript.getAttribute(m.detectionTimeoutAttr)) && (m.detectionTimeout = u), document.currentScript.setAttributeNode(document.createAttribute(m.detectionIgnoreAttr)), t = f, n = m, r(function () {
        var e = document.createElement("script");
        n && n.detectionIgnoreAttr && e.setAttributeNode(document.createAttribute(n.detectionIgnoreAttr)), n && n.detectionTimeoutAttr && n.detectionTimeout && e.setAttribute(n.detectionTimeoutAttr, n.detectionTimeout), e.src = s(t, {
          baseFilename: "conflict-detection",
          fileSuffix: "js",
          subdir: "js",
          minify: t.minify.enabled
        }), e.async = !0, document.body.appendChild(e);
      }));
    }
  } catch (e) {}
}();

/***/ }),

/***/ "./public/js/jquery.backstretch.min.js":
/*!*********************************************!*\
  !*** ./public/js/jquery.backstretch.min.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Backstretch - v2.0.3 - 2012-11-30
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2012 Scott Robbin; Licensed MIT */
(function (e, t, n) {
  "use strict";

  e.fn.backstretch = function (r, s) {
    return (r === n || r.length === 0) && e.error("No images were supplied for Backstretch"), e(t).scrollTop() === 0 && t.scrollTo(0, 0), this.each(function () {
      var t = e(this),
          n = t.data("backstretch");
      n && (s = e.extend(n.options, s), n.destroy(!0)), n = new i(this, r, s), t.data("backstretch", n);
    });
  }, e.backstretch = function (t, n) {
    return e("body").backstretch(t, n).data("backstretch");
  }, e.expr[":"].backstretch = function (t) {
    return e(t).data("backstretch") !== n;
  }, e.fn.backstretch.defaults = {
    centeredX: !0,
    centeredY: !0,
    duration: 5e3,
    fade: 0
  };

  var r = {
    wrap: {
      left: 0,
      top: 0,
      overflow: "hidden",
      margin: 0,
      padding: 0,
      height: "100%",
      width: "100%",
      zIndex: -999999
    },
    img: {
      position: "absolute",
      display: "none",
      margin: 0,
      padding: 0,
      border: "none",
      width: "auto",
      height: "auto",
      maxWidth: "none",
      zIndex: -999999
    }
  },
      i = function i(n, _i, o) {
    this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(_i) ? _i : [_i], e.each(this.images, function () {
      e("<img />")[0].src = this;
    }), this.isBody = n === document.body, this.$container = e(n), this.$wrap = e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container), this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;

    if (!this.isBody) {
      var u = this.$container.css("position"),
          a = this.$container.css("zIndex");
      this.$container.css({
        position: u === "static" ? "relative" : u,
        zIndex: a === "auto" ? 0 : a,
        background: "none"
      }), this.$wrap.css({
        zIndex: -999998
      });
    }

    this.$wrap.css({
      position: this.isBody && s ? "fixed" : "absolute"
    }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
      this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1), this.resize());
    }, this));
  };

  i.prototype = {
    resize: function resize() {
      try {
        var e = {
          left: 0,
          top: 0
        },
            n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
            r = n,
            i = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
            s = r / this.$img.data("ratio"),
            o;
        s >= i ? (o = (s - i) / 2, this.options.centeredY && (e.top = "-" + o + "px")) : (s = i, r = s * this.$img.data("ratio"), o = (r - n) / 2, this.options.centeredX && (e.left = "-" + o + "px")), this.$wrap.css({
          width: n,
          height: i
        }).find("img:not(.deleteable)").css({
          width: r,
          height: s
        }).css(e);
      } catch (u) {}

      return this;
    },
    show: function show(t) {
      if (Math.abs(t) > this.images.length - 1) return;
      this.index = t;
      var n = this,
          i = n.$wrap.find("img").addClass("deleteable"),
          s = e.Event("backstretch.show", {
        relatedTarget: n.$container[0]
      });
      return clearInterval(n.interval), n.$img = e("<img />").css(r.img).bind("load", function (t) {
        var r = this.width || e(t.target).width(),
            o = this.height || e(t.target).height();
        e(this).data("ratio", r / o), e(this).fadeIn(n.options.speed || n.options.fade, function () {
          i.remove(), n.paused || n.cycle(), n.$container.trigger(s, n);
        }), n.resize();
      }).appendTo(n.$wrap), n.$img.attr("src", n.images[t]), n;
    },
    next: function next() {
      return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
    },
    prev: function prev() {
      return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
    },
    pause: function pause() {
      return this.paused = !0, this;
    },
    resume: function resume() {
      return this.paused = !1, this.next(), this;
    },
    cycle: function cycle() {
      return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
        this.paused || this.next();
      }, this), this.options.duration)), this;
    },
    destroy: function destroy(n) {
      e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch");
    }
  };

  var s = function () {
    var e = navigator.userAgent,
        n = navigator.platform,
        r = e.match(/AppleWebKit\/([0-9]+)/),
        i = !!r && r[1],
        s = e.match(/Fennec\/([0-9]+)/),
        o = !!s && s[1],
        u = e.match(/Opera Mobi\/([0-9]+)/),
        a = !!u && u[1],
        f = e.match(/MSIE ([0-9]+)/),
        l = !!f && f[1];
    return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6);
  }();
})(jQuery, window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/jquery.dcjqaccordion.2.7.js":
/*!***********************************************!*\
  !*** ./public/js/jquery.dcjqaccordion.2.7.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function ($) {
  $.fn.dcAccordion = function (options) {
    //set default options 
    var defaults = {
      classParent: 'dcjq-parent',
      classActive: 'active',
      classArrow: 'dcjq-icon',
      classCount: 'dcjq-count',
      classExpand: 'dcjq-current-parent',
      eventType: 'click',
      hoverDelay: 300,
      menuClose: true,
      autoClose: true,
      autoExpand: false,
      speed: 'slow',
      saveState: true,
      disableLink: true,
      showCount: false //			cookie	: 'dcjq-accordion'

    }; //call in the default otions

    var options = $.extend(defaults, options);
    this.each(function (options) {
      var obj = this;
      setUpAccordion(); //			if(defaults.saveState == true){
      //				checkCookie(defaults.cookie, obj);
      //			}

      if (defaults.autoExpand == true) {
        $('li.' + defaults.classExpand + ' > a').addClass(defaults.classActive);
      }

      resetAccordion();

      if (defaults.eventType == 'hover') {
        var config = {
          sensitivity: 2,
          // number = sensitivity threshold (must be 1 or higher)
          interval: defaults.hoverDelay,
          // number = milliseconds for onMouseOver polling interval
          over: linkOver,
          // function = onMouseOver callback (REQUIRED)
          timeout: defaults.hoverDelay,
          // number = milliseconds delay before onMouseOut
          out: linkOut // function = onMouseOut callback (REQUIRED)

        };
        $('li a', obj).hoverIntent(config);
        var configMenu = {
          sensitivity: 2,
          // number = sensitivity threshold (must be 1 or higher)
          interval: 1000,
          // number = milliseconds for onMouseOver polling interval
          over: menuOver,
          // function = onMouseOver callback (REQUIRED)
          timeout: 1000,
          // number = milliseconds delay before onMouseOut
          out: menuOut // function = onMouseOut callback (REQUIRED)

        };
        $(obj).hoverIntent(configMenu); // Disable parent links

        if (defaults.disableLink == true) {
          $('li a', obj).click(function (e) {
            if ($(this).siblings('ul').length > 0) {
              e.preventDefault();
            }
          });
        }
      } else {
        $('li a', obj).click(function (e) {
          $activeLi = $(this).parent('li');
          $parentsLi = $activeLi.parents('li');
          $parentsUl = $activeLi.parents('ul'); // Prevent browsing to link if has child links

          if (defaults.disableLink == true) {
            if ($(this).siblings('ul').length > 0) {
              e.preventDefault();
            }
          } // Auto close sibling menus


          if (defaults.autoClose == true) {
            autoCloseAccordion($parentsLi, $parentsUl);
          }

          if ($('> ul', $activeLi).is(':visible')) {
            $('ul', $activeLi).slideUp(defaults.speed);
            $('a', $activeLi).removeClass(defaults.classActive);
          } else {
            $(this).siblings('ul').slideToggle(defaults.speed);
            $('> a', $activeLi).addClass(defaults.classActive);
          } //					// Write cookie if save state is on
          //					if(defaults.saveState == true){
          //						createCookie(defaults.cookie, obj);
          //					}

        });
      } // Set up accordion


      function setUpAccordion() {
        $arrow = '<span class="' + defaults.classArrow + '"></span>';
        var classParentLi = defaults.classParent + '-li';
        $('> ul', obj).show();
        $('li', obj).each(function () {
          if ($('> ul', this).length > 0) {
            $(this).addClass(classParentLi);
            $('> a', this).addClass(defaults.classParent).append($arrow);
          }
        });
        $('> ul', obj).hide();

        if (defaults.showCount == true) {
          $('li.' + classParentLi, obj).each(function () {
            if (defaults.disableLink == true) {
              var getCount = parseInt($('ul a:not(.' + defaults.classParent + ')', this).length);
            } else {
              var getCount = parseInt($('ul a', this).length);
            }

            $('> a', this).append(' <span class="' + defaults.classCount + '">' + getCount + '</span>');
          });
        }
      }

      function linkOver() {
        $activeLi = $(this).parent('li');
        $parentsLi = $activeLi.parents('li');
        $parentsUl = $activeLi.parents('ul'); // Auto close sibling menus

        if (defaults.autoClose == true) {
          autoCloseAccordion($parentsLi, $parentsUl);
        }

        if ($('> ul', $activeLi).is(':visible')) {
          $('ul', $activeLi).slideUp(defaults.speed);
          $('a', $activeLi).removeClass(defaults.classActive);
        } else {
          $(this).siblings('ul').slideToggle(defaults.speed);
          $('> a', $activeLi).addClass(defaults.classActive);
        } // Write cookie if save state is on


        if (defaults.saveState == true) {
          createCookie(defaults.cookie, obj);
        }
      }

      function linkOut() {}

      function menuOver() {}

      function menuOut() {
        if (defaults.menuClose == true) {
          $('ul', obj).slideUp(defaults.speed); // Reset active links

          $('a', obj).removeClass(defaults.classActive);
          createCookie(defaults.cookie, obj);
        }
      } // Auto-Close Open Menu Items


      function autoCloseAccordion($parentsLi, $parentsUl) {
        $('ul', obj).not($parentsUl).slideUp(defaults.speed); // Reset active links

        $('a', obj).removeClass(defaults.classActive);
        $('> a', $parentsLi).addClass(defaults.classActive);
      } // Reset accordion using active links


      function resetAccordion() {
        $('ul', obj).hide();
        $allActiveLi = $('a.' + defaults.classActive, obj);
        $allActiveLi.siblings('ul').show();
      }
    }); // Retrieve cookie value and set active items
    //		function checkCookie(cookieId, obj){
    //			var cookieVal = $.cookie(cookieId);
    //			if(cookieVal != null){
    //				// create array from cookie string
    //				var activeArray = cookieVal.split(',');
    //				$.each(activeArray, function(index,value){
    //					var $cookieLi = $('li:eq('+value+')',obj);
    //					$('> a',$cookieLi).addClass(defaults.classActive);
    //					var $parentsLi = $cookieLi.parents('li');
    //					$('> a',$parentsLi).addClass(defaults.classActive);
    //				});
    //			}
    //		}
    // Write cookie
    //		function createCookie(cookieId, obj){
    //			var activeIndex = [];
    //			// Create array of active items index value
    //			$('li a.'+defaults.classActive,obj).each(function(i){
    //				var $arrayItem = $(this).parent('li');
    //				var itemIndex = $('li',obj).index($arrayItem);
    //					activeIndex.push(itemIndex);
    //				});
    //			// Store in cookie
    //			$.cookie(cookieId, activeIndex, { path: '/' });
    //		}
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/jquery.js":
/*!*****************************!*\
  !*** ./public/js/jquery.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery, __webpack_provided_window_dot_$, module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function (e, t) {
  var n,
      r,
      i = _typeof(t),
      o = e.location,
      a = e.document,
      s = a.documentElement,
      l = __webpack_provided_window_dot_jQuery,
      u = __webpack_provided_window_dot_$,
      c = {},
      p = [],
      f = "1.10.2",
      d = p.concat,
      h = p.push,
      g = p.slice,
      m = p.indexOf,
      y = c.toString,
      v = c.hasOwnProperty,
      b = f.trim,
      x = function x(e, t) {
    return new x.fn.init(e, t, r);
  },
      w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = /\S+/g,
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      E = /^[\],:{}\s]*$/,
      S = /(?:^|:|,)(?:\s*\[)+/g,
      A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      D = /^-ms-/,
      L = /-([\da-z])/gi,
      H = function H(e, t) {
    return t.toUpperCase();
  },
      q = function q(e) {
    (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready());
  },
      _ = function _() {
    a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q));
  };

  x.fn = x.prototype = {
    jquery: f,
    constructor: x,
    init: function init(e, n, r) {
      var i, o;
      if (!e) return this;

      if ("string" == typeof e) {
        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);

        if (i[1]) {
          if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) for (i in n) {
            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          }
          return this;
        }

        if (o = a.getElementById(i[2]), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = 1, this[0] = o;
        }

        return this.context = a, this.selector = e, this;
      }

      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this));
    },
    selector: "",
    length: 0,
    toArray: function toArray() {
      return g.call(this);
    },
    get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = x.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t;
    },
    each: function each(e, t) {
      return x.each(this, e, t);
    },
    ready: function ready(e) {
      return x.ready.promise().done(e), this;
    },
    slice: function slice() {
      return this.pushStack(g.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function map(e) {
      return this.pushStack(x.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: h,
    sort: [].sort,
    splice: [].splice
  }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;

    for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == _typeof(s) || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
      if (null != (o = arguments[l])) for (i in o) {
        e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
      }
    }

    return s;
  }, x.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    noConflict: function noConflict(t) {
      return __webpack_provided_window_dot_$ === x && (__webpack_provided_window_dot_$ = u), t && __webpack_provided_window_dot_jQuery === x && (__webpack_provided_window_dot_jQuery = l), x;
    },
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(e) {
      e ? x.readyWait++ : x.ready(!0);
    },
    ready: function ready(e) {
      if (e === !0 ? ! --x.readyWait : !x.isReady) {
        if (!a.body) return setTimeout(x.ready);
        x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"));
      }
    },
    isFunction: function isFunction(e) {
      return "function" === x.type(e);
    },
    isArray: Array.isArray || function (e) {
      return "array" === x.type(e);
    },
    isWindow: function isWindow(e) {
      return null != e && e == e.window;
    },
    isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function type(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? c[y.call(e)] || "object" : _typeof(e);
    },
    isPlainObject: function isPlainObject(e) {
      var n;
      if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;

      try {
        if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }

      if (x.support.ownLast) for (n in e) {
        return v.call(e, n);
      }

      for (n in e) {
        ;
      }

      return n === t || v.call(e, n);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    error: function error(e) {
      throw Error(e);
    },
    parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || a;
      var r = k.exec(e),
          i = !n && [];
      return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes));
    },
    parseJSON: function parseJSON(n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t);
    },
    parseXML: function parseXML(n) {
      var r, i;
      if (!n || "string" != typeof n) return null;

      try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (o) {
        r = t;
      }

      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r;
    },
    noop: function noop() {},
    globalEval: function globalEval(t) {
      t && x.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function camelCase(e) {
      return e.replace(D, "ms-").replace(L, H);
    },
    nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function each(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e);

      if (n) {
        if (a) {
          for (; o > i; i++) {
            if (r = t.apply(e[i], n), r === !1) break;
          }
        } else for (i in e) {
          if (r = t.apply(e[i], n), r === !1) break;
        }
      } else if (a) {
        for (; o > i; i++) {
          if (r = t.call(e[i], i, e[i]), r === !1) break;
        }
      } else for (i in e) {
        if (r = t.call(e[i], i, e[i]), r === !1) break;
      }

      return e;
    },
    trim: b && !b.call("\uFEFF\xA0") ? function (e) {
      return null == e ? "" : b.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(C, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      var r;

      if (t) {
        if (m) return m.call(t, e, n);

        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
          if (n in t && t[n] === e) return n;
        }
      }

      return -1;
    },
    merge: function merge(e, n) {
      var r = n.length,
          i = e.length,
          o = 0;
      if ("number" == typeof r) for (; r > o; o++) {
        e[i++] = n[o];
      } else while (n[o] !== t) {
        e[i++] = n[o++];
      }
      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;

      for (n = !!n; a > o; o++) {
        r = !!t(e[o], o), n !== r && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i = 0,
          o = e.length,
          a = M(e),
          s = [];
      if (a) for (; o > i; i++) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      } else for (i in e) {
        r = t(e[i], i, n), null != r && (s[s.length] = r);
      }
      return d.apply([], s);
    },
    guid: 1,
    proxy: function proxy(e, n) {
      var r, i, o;
      return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function i() {
        return e.apply(n || this, r.concat(g.call(arguments)));
      }, i.guid = e.guid = e.guid || x.guid++, i) : t;
    },
    access: function access(e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;

      if ("object" === x.type(r)) {
        o = !0;

        for (l in r) {
          x.access(e, n, l, r[l], !0, a, s);
        }
      } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function n(e, t, _n2) {
        return c.call(x(e), _n2);
      })), n)) for (; u > l; l++) {
        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
      }

      return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    },
    now: function now() {
      return new Date().getTime();
    },
    swap: function swap(e, t, n, r) {
      var i,
          o,
          a = {};

      for (o in t) {
        a[o] = e.style[o], e.style[o] = t[o];
      }

      i = n.apply(e, r || []);

      for (o in t) {
        e.style[o] = a[o];
      }

      return i;
    }
  }), x.ready.promise = function (t) {
    if (!n) if (n = x.Deferred(), "complete" === a.readyState) setTimeout(x.ready);else if (a.addEventListener) a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1);else {
      a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
      var r = !1;

      try {
        r = null == e.frameElement && a.documentElement;
      } catch (i) {}

      r && r.doScroll && function o() {
        if (!x.isReady) {
          try {
            r.doScroll("left");
          } catch (e) {
            return setTimeout(o, 50);
          }

          _(), x.ready();
        }
      }();
    }
    return n.promise(t);
  }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });

  function M(e) {
    var t = e.length,
        n = x.type(e);
    return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  r = x(a), function (e, t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        p,
        f,
        d,
        h,
        g,
        m,
        y,
        v,
        b = "sizzle" + -new Date(),
        w = e.document,
        T = 0,
        C = 0,
        N = st(),
        k = st(),
        E = st(),
        S = !1,
        A = function A(e, t) {
      return e === t ? (S = !0, 0) : 0;
    },
        j = _typeof(t),
        D = 1 << 31,
        L = {}.hasOwnProperty,
        H = [],
        q = H.pop,
        _ = H.push,
        M = H.push,
        O = H.slice,
        F = H.indexOf || function (e) {
      var t = 0,
          n = this.length;

      for (; n > t; t++) {
        if (this[t] === e) return t;
      }

      return -1;
    },
        B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        P = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        W = R.replace("w", "w#"),
        $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
        I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
        z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
        X = RegExp("^" + P + "*," + P + "*"),
        U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
        V = RegExp(P + "*[+~]"),
        Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
        J = RegExp(I),
        G = RegExp("^" + W + "$"),
        Q = {
      ID: RegExp("^#(" + R + ")"),
      CLASS: RegExp("^\\.(" + R + ")"),
      TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
      ATTR: RegExp("^" + $),
      PSEUDO: RegExp("^" + I),
      CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
      bool: RegExp("^(?:" + B + ")$", "i"),
      needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
    },
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        et = /^(?:input|select|textarea|button)$/i,
        tt = /^h\d$/i,
        nt = /'|\\/g,
        rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
        it = function it(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };

    try {
      M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType;
    } catch (ot) {
      M = {
        apply: H.length ? function (e, t) {
          _.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function at(e, t, n, i) {
      var o, a, s, l, u, c, d, m, y, x;
      if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) return n;
      if (1 !== (l = t.nodeType) && 9 !== l) return [];

      if (h && !i) {
        if (o = Z.exec(e)) if (s = o[1]) {
          if (9 === l) {
            if (a = t.getElementById(s), !a || !a.parentNode) return n;
            if (a.id === s) return n.push(a), n;
          } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) return n.push(a), n;
        } else {
          if (o[2]) return M.apply(n, t.getElementsByTagName(e)), n;
          if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) return M.apply(n, t.getElementsByClassName(s)), n;
        }

        if (r.qsa && (!g || !g.test(e))) {
          if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;

            while (u--) {
              c[u] = m + yt(c[u]);
            }

            y = V.test(e) && t.parentNode || t, x = c.join(",");
          }

          if (x) try {
            return M.apply(n, y.querySelectorAll(x)), n;
          } catch (T) {} finally {
            d || t.removeAttribute("id");
          }
        }
      }

      return kt(e.replace(z, "$1"), t, n, i);
    }

    function st() {
      var e = [];

      function t(n, r) {
        return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r;
      }

      return t;
    }

    function lt(e) {
      return e[b] = !0, e;
    }

    function ut(e) {
      var t = f.createElement("div");

      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function ct(e, t) {
      var n = e.split("|"),
          r = e.length;

      while (r--) {
        o.attrHandle[n[r]] = t;
      }
    }

    function pt(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }

    function dt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function ht(e) {
      return lt(function (t) {
        return t = +t, lt(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    s = at.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? "HTML" !== t.nodeName : !1;
    }, r = at.support = {}, p = at.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : w,
          i = n.defaultView;
      return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
        p();
      }), r.attributes = ut(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), r.getElementsByTagName = ut(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), r.getElementsByClassName = ut(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), r.getById = ut(function (e) {
        return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length;
      }), r.getById ? (o.find.ID = function (e, t) {
        if (_typeof(t.getElementById) !== j && h) {
          var n = t.getElementById(e);
          return n && n.parentNode ? [n] : [];
        }
      }, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete o.find.ID, o.filter.ID = function (e) {
        var t = e.replace(rt, it);
        return function (e) {
          var n = _typeof(e.getAttributeNode) !== j && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
        return _typeof(n.getElementsByTagName) !== j ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
        return _typeof(n.getElementsByClassName) !== j && h ? n.getElementsByClassName(e) : t;
      }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked");
      }), ut(function (e) {
        var t = n.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
        r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I);
      }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, A = d.compareDocumentPosition ? function (e, t) {
        if (e === t) return S = !0, 0;
        var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
        return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
        if (e === t) return S = !0, 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
        if (o === a) return pt(e, t);
        r = e;

        while (r = r.parentNode) {
          s.unshift(r);
        }

        r = t;

        while (r = r.parentNode) {
          l.unshift(r);
        }

        while (s[i] === l[i]) {
          i++;
        }

        return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0;
      }, n) : f;
    }, at.matches = function (e, t) {
      return at(e, null, null, t);
    }, at.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) try {
        var n = y.call(e, t);
        if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (i) {}
      return at(t, f, null, [e]).length > 0;
    }, at.contains = function (e, t) {
      return (e.ownerDocument || e) !== f && p(e), v(e, t);
    }, at.attr = function (e, n) {
      (e.ownerDocument || e) !== f && p(e);
      var i = o.attrHandle[n.toLowerCase()],
          a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
      return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a;
    }, at.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, at.uniqueSort = function (e) {
      var t,
          n = [],
          i = 0,
          o = 0;

      if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
        while (t = e[o++]) {
          t === e[o] && (i = n.push(o));
        }

        while (i--) {
          e.splice(n[i], 1);
        }
      }

      return e;
    }, a = at.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += a(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) {
        n += a(t);
      }

      return n;
    }, o = at.selectors = {
      cacheLength: 50,
      createPseudo: lt,
      match: Q,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var n,
              r = !e[5] && e[2];
          return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(rt, it).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = N[e + " "];
          return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || _typeof(e.getAttribute) !== j && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = at.attr(r, e);
            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                p,
                f,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                y = s && t.nodeName.toLowerCase(),
                v = !l && !s;

            if (m) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? m.firstChild : m.lastChild], a && v) {
                c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];

                while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++f && p === t) {
                    c[e] = [T, d, f];
                    break;
                  }
                }
              } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) f = u[1];else while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) break;
              }

              return f -= i, f === r || 0 === f % r && f / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
          return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
            var i,
                o = r(e, t),
                a = o.length;

            while (a--) {
              i = F.call(e, o[a]), e[i] = !(n[i] = o[a]);
            }
          }) : function (e) {
            return r(e, 0, n);
          }) : r;
        }
      },
      pseudos: {
        not: lt(function (e) {
          var t = [],
              n = [],
              r = l(e.replace(z, "$1"));
          return r[b] ? lt(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }),
        has: lt(function (e) {
          return function (t) {
            return at(e, t).length > 0;
          };
        }),
        contains: lt(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1;
          };
        }),
        lang: lt(function (e) {
          return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
            var n;

            do {
              if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === d;
        },
        focus: function focus(e) {
          return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function enabled(e) {
          return e.disabled === !1;
        },
        disabled: function disabled(e) {
          return e.disabled === !0;
        },
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !o.pseudos.empty(e);
        },
        header: function header(e) {
          return tt.test(e.nodeName);
        },
        input: function input(e) {
          return et.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        },
        first: ht(function () {
          return [0];
        }),
        last: ht(function (e, t) {
          return [t - 1];
        }),
        eq: ht(function (e, t, n) {
          return [0 > n ? n + t : n];
        }),
        even: ht(function (e, t) {
          var n = 0;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ht(function (e, t) {
          var n = 1;

          for (; t > n; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: ht(function (e, t, n) {
          var r = 0 > n ? n + t : n;

          for (; t > ++r;) {
            e.push(r);
          }

          return e;
        })
      }
    }, o.pseudos.nth = o.pseudos.eq;

    for (n in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      o.pseudos[n] = ft(n);
    }

    for (n in {
      submit: !0,
      reset: !0
    }) {
      o.pseudos[n] = dt(n);
    }

    function gt() {}

    gt.prototype = o.filters = o.pseudos, o.setFilters = new gt();

    function mt(e, t) {
      var n,
          r,
          i,
          a,
          s,
          l,
          u,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, l = [], u = o.preFilter;

      while (s) {
        (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(z, " ")
        }), s = s.slice(n.length));

        for (a in o.filter) {
          !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
            value: n,
            type: a,
            matches: r
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? at.error(e) : k(e, l).slice(0);
    }

    function yt(e) {
      var t = 0,
          n = e.length,
          r = "";

      for (; n > t; t++) {
        r += e[t].value;
      }

      return r;
    }

    function vt(e, t, n) {
      var r = t.dir,
          o = n && "parentNode" === r,
          a = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var l,
            u,
            c,
            p = T + " " + a;

        if (s) {
          while (t = t[r]) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || o) if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
            if ((l = u[1]) === !0 || l === i) return l === !0;
          } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) return !0;
        }
      };
    }

    function bt(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function xt(e, t, n, r, i) {
      var o,
          a = [],
          s = 0,
          l = e.length,
          u = null != t;

      for (; l > s; s++) {
        (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
      }

      return a;
    }

    function wt(e, t, n, r, i, o) {
      return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
        var u,
            c,
            p,
            f = [],
            d = [],
            h = a.length,
            g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
            m = !e || !o && t ? g : xt(g, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : m;

        if (n && n(m, y, s, l), r) {
          u = xt(y, d), r(u, [], s, l), c = u.length;

          while (c--) {
            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              u = [], c = y.length;

              while (c--) {
                (p = y[c]) && u.push(m[c] = p);
              }

              i(null, y = [], u, l);
            }

            c = y.length;

            while (c--) {
              (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p));
            }
          }
        } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y);
      });
    }

    function Tt(e) {
      var t,
          n,
          r,
          i = e.length,
          a = o.relative[e[0].type],
          s = a || o.relative[" "],
          l = a ? 1 : 0,
          c = vt(function (e) {
        return e === t;
      }, s, !0),
          p = vt(function (e) {
        return F.call(t, e) > -1;
      }, s, !0),
          f = [function (e, n, r) {
        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r));
      }];

      for (; i > l; l++) {
        if (n = o.relative[e[l].type]) f = [vt(bt(f), n)];else {
          if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
            for (r = ++l; i > r; r++) {
              if (o.relative[e[r].type]) break;
            }

            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
              value: " " === e[l - 2].type ? "*" : ""
            })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e));
          }

          f.push(n);
        }
      }

      return bt(f);
    }

    function Ct(e, t) {
      var n = 0,
          r = t.length > 0,
          a = e.length > 0,
          s = function s(_s, l, c, p, d) {
        var h,
            g,
            m,
            y = [],
            v = 0,
            b = "0",
            x = _s && [],
            w = null != d,
            C = u,
            N = _s || a && o.find.TAG("*", d && l.parentNode || l),
            k = T += null == C ? 1 : Math.random() || .1;

        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
          if (a && h) {
            g = 0;

            while (m = e[g++]) {
              if (m(h, l, c)) {
                p.push(h);
                break;
              }
            }

            w && (T = k, i = ++n);
          }

          r && ((h = !m && h) && v--, _s && x.push(h));
        }

        if (v += b, r && b !== v) {
          g = 0;

          while (m = t[g++]) {
            m(x, y, l, c);
          }

          if (_s) {
            if (v > 0) while (b--) {
              x[b] || y[b] || (y[b] = q.call(p));
            }
            y = xt(y);
          }

          M.apply(p, y), w && !_s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p);
        }

        return w && (T = k, u = C), x;
      };

      return r ? lt(s) : s;
    }

    l = at.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = E[e + " "];

      if (!o) {
        t || (t = mt(e)), n = t.length;

        while (n--) {
          o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
        }

        o = E(e, Ct(i, r));
      }

      return o;
    };

    function Nt(e, t, n) {
      var r = 0,
          i = t.length;

      for (; i > r; r++) {
        at(e, t[r], n);
      }

      return n;
    }

    function kt(e, t, n, i) {
      var a,
          s,
          u,
          c,
          p,
          f = mt(e);

      if (!i && 1 === f.length) {
        if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
          if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) return n;
          e = e.slice(s.shift().value.length);
        }

        a = Q.needsContext.test(e) ? 0 : s.length;

        while (a--) {
          if (u = s[a], o.relative[c = u.type]) break;

          if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
            if (s.splice(a, 1), e = i.length && yt(s), !e) return M.apply(n, i), n;
            break;
          }
        }
      }

      return l(e, f)(i, t, !h, n, V.test(e)), n;
    }

    r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
      return 1 & e.compareDocumentPosition(f.createElement("div"));
    }), ut(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ct("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
    }), r.attributes && ut(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ct("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), ut(function (e) {
      return null == e.getAttribute("disabled");
    }) || ct(B, function (e, n, r) {
      var i;
      return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains;
  }(e);
  var O = {};

  function F(e) {
    var t = O[e] = {};
    return x.each(e.match(T) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  x.Callbacks = function (e) {
    e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);

    var n,
        r,
        i,
        o,
        a,
        s,
        l = [],
        u = !e.once && [],
        c = function c(t) {
      for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
        if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          r = !1;
          break;
        }
      }

      n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable());
    },
        p = {
      add: function add() {
        if (l) {
          var t = l.length;
          (function i(t) {
            x.each(t, function (t, n) {
              var r = x.type(n);
              "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n);
            });
          })(arguments), n ? o = l.length : r && (s = t, c(r));
        }

        return this;
      },
      remove: function remove() {
        return l && x.each(arguments, function (e, t) {
          var r;

          while ((r = x.inArray(t, l, r)) > -1) {
            l.splice(r, 1), n && (o >= r && o--, a >= r && a--);
          }
        }), this;
      },
      has: function has(e) {
        return e ? x.inArray(e, l) > -1 : !(!l || !l.length);
      },
      empty: function empty() {
        return l = [], o = 0, this;
      },
      disable: function disable() {
        return l = u = r = t, this;
      },
      disabled: function disabled() {
        return !l;
      },
      lock: function lock() {
        return u = t, r || p.disable(), this;
      },
      locked: function locked() {
        return !u;
      },
      fireWith: function fireWith(e, t) {
        return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this;
      },
      fire: function fire() {
        return p.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return p;
  }, x.extend({
    Deferred: function Deferred(e) {
      var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
          n = "pending",
          r = {
        state: function state() {
          return n;
        },
        always: function always() {
          return i.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var e = arguments;
          return x.Deferred(function (n) {
            x.each(t, function (t, o) {
              var a = o[0],
                  s = x.isFunction(e[t]) && e[t];
              i[o[1]](function () {
                var e = s && s.apply(this, arguments);
                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? x.extend(e, r) : r;
        }
      },
          i = {};
      return r.pipe = r.then, x.each(t, function (e, o) {
        var a = o[2],
            s = o[3];
        r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function when(e) {
      var t = 0,
          n = g.call(arguments),
          r = n.length,
          i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
          o = 1 === i ? e : x.Deferred(),
          a = function a(e, t, n) {
        return function (r) {
          t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n);
        };
      },
          s,
          l,
          u;

      if (r > 1) for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
        n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
      }
      return i || o.resolveWith(u, n), o.promise();
    }
  }), x.support = function (t) {
    var n,
        r,
        o,
        s,
        l,
        u,
        c,
        p,
        f,
        d = a.createElement("div");
    if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
    s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;

    try {
      delete d.test;
    } catch (h) {
      t.deleteExpando = !1;
    }

    o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());

    for (f in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
    }

    d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;

    for (f in x(t)) {
      break;
    }

    return t.ownLast = "0" !== f, x(function () {
      var n,
          r,
          o,
          s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          l = a.getElementsByTagName("body")[0];
      l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
        zoom: 1
      } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
        width: "4px"
      }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), _typeof(d.style.zoom) !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null);
    }), n = s = l = u = r = o = null, t;
  }({});
  var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      P = /([A-Z])/g;

  function R(e, n, r, i) {
    if (x.acceptData(e)) {
      var o,
          a,
          s = x.expando,
          l = e.nodeType,
          u = l ? x.cache : e,
          c = l ? e[s] : e[s] && s;
      if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
        toJSON: x.noop
      }), ("object" == _typeof(n) || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o;
    }
  }

  function W(e, t, n) {
    if (x.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? x.cache : e,
          s = o ? e[x.expando] : x.expando;

      if (a[s]) {
        if (t && (r = n ? a[s] : a[s].data)) {
          x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;

          while (i--) {
            delete r[t[i]];
          }

          if (n ? !I(r) : !x.isEmptyObject(r)) return;
        }

        (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null);
      }
    }
  }

  x.extend({
    cache: {},
    noData: {
      applet: !0,
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(e) {
      return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e);
    },
    data: function data(e, t, n) {
      return R(e, t, n);
    },
    removeData: function removeData(e, t) {
      return W(e, t);
    },
    _data: function _data(e, t, n) {
      return R(e, t, n, !0);
    },
    _removeData: function _removeData(e, t) {
      return W(e, t, !0);
    },
    acceptData: function acceptData(e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), x.fn.extend({
    data: function data(e, n) {
      var r,
          i,
          o = null,
          a = 0,
          s = this[0];

      if (e === t) {
        if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
          for (r = s.attributes; r.length > a; a++) {
            i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
          }

          x._data(s, "parsedAttrs", !0);
        }

        return o;
      }

      return "object" == _typeof(e) ? this.each(function () {
        x.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        x.data(this, e, n);
      }) : s ? $(s, e, x.data(s, e)) : null;
    },
    removeData: function removeData(e) {
      return this.each(function () {
        x.removeData(this, e);
      });
    }
  });

  function $(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();

      if (r = e.getAttribute(i), "string" == typeof r) {
        try {
          r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r;
        } catch (o) {}

        x.data(e, n, r);
      } else r = t;
    }

    return r;
  }

  function I(e) {
    var t;

    for (t in e) {
      if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    }

    return !0;
  }

  x.extend({
    queue: function queue(e, n, r) {
      var i;
      return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t;
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = x.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = x._queueHooks(e, t),
          a = function a() {
        x.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return x._data(e, n) || x._data(e, n, {
        empty: x.Callbacks("once memory").add(function () {
          x._removeData(e, t + "queue"), x._removeData(e, n);
        })
      });
    }
  }), x.fn.extend({
    queue: function queue(e, n) {
      var r = 2;
      return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = x.queue(this, e, n);
        x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        x.dequeue(this, e);
      });
    },
    delay: function delay(e, t) {
      return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);

        n.stop = function () {
          clearTimeout(r);
        };
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, n) {
      var r,
          i = 1,
          o = x.Deferred(),
          a = this,
          s = this.length,
          l = function l() {
        --i || o.resolveWith(a, [a]);
      };

      "string" != typeof e && (n = e, e = t), e = e || "fx";

      while (s--) {
        r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
      }

      return l(), o.promise(n);
    }
  });
  var z,
      X,
      U = /[\t\r\n\f]/g,
      V = /\r/g,
      Y = /^(?:input|select|textarea|button|object)$/i,
      J = /^(?:a|area)$/i,
      G = /^(?:checked|selected)$/i,
      Q = x.support.getSetAttribute,
      K = x.support.input;
  x.fn.extend({
    attr: function attr(e, t) {
      return x.access(this, x.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        x.removeAttr(this, e);
      });
    },
    prop: function prop(e, t) {
      return x.access(this, x.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return e = x.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (n) {}
      });
    },
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).addClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
          o = 0;

          while (i = t[o++]) {
            0 > r.indexOf(" " + i + " ") && (r += i + " ");
          }

          n.className = x.trim(r);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof e && e;
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).removeClass(e.call(this, t, this.className));
      });
      if (l) for (t = (e || "").match(T) || []; s > a; a++) {
        if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
          o = 0;

          while (i = t[o++]) {
            while (r.indexOf(" " + i + " ") >= 0) {
              r = r.replace(" " + i + " ", " ");
            }
          }

          n.className = e ? x.trim(r) : "";
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e);

      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
        x(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) {
          var t,
              r = 0,
              o = x(this),
              a = e.match(T) || [];

          while (t = a[r++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(e) {
      var t = " " + e + " ",
          n = 0,
          r = this.length;

      for (; r > n; n++) {
        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) return !0;
      }

      return !1;
    },
    val: function val(e) {
      var n,
          r,
          i,
          o = this[0];
      {
        if (arguments.length) return i = x.isFunction(e), this.each(function (n) {
          var o;
          1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
            return null == e ? "" : e + "";
          })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
        });
        if (o) return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n);
      }
    }
  }), x.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = x.find.attr(e, "value");
          return null != t ? t : e.text;
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r = e.options,
              i = e.selectedIndex,
              o = "select-one" === e.type || 0 > i,
              a = o ? null : [],
              s = o ? i + 1 : r.length,
              l = 0 > i ? s : o ? i : 0;

          for (; s > l; l++) {
            if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
              if (t = x(n).val(), o) return t;
              a.push(t);
            }
          }

          return a;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = x.makeArray(t),
              a = i.length;

          while (a--) {
            r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    },
    attr: function attr(e, n, r) {
      var o,
          a,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return _typeof(e.getAttribute) === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t));
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(T);
      if (o && 1 === e.nodeType) while (n = o[i++]) {
        r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r);
      }
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(e, n, r) {
      var i,
          o,
          a,
          s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = x.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), X = {
    set: function set(e, t, n) {
      return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n;
    }
  }, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = x.expr.attrHandle[n] || x.find.attr;
    x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
      var o = x.expr.attrHandle[n],
          a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
      return x.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), K && Q || (x.attrHooks.value = {
    set: function set(e, n, r) {
      return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r);
    }
  }), Q || (z = {
    set: function set(e, n, r) {
      var i = e.getAttributeNode(r);
      return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
    var i;
    return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
  }, x.valHooks.button = {
    get: function get(e, n) {
      var r = e.getAttributeNode(n);
      return r && r.specified ? r.value : t;
    },
    set: z.set
  }, x.attrHooks.contenteditable = {
    set: function set(e, t, n) {
      z.set(e, "" === t ? !1 : t, n);
    }
  }, x.each(["width", "height"], function (e, n) {
    x.attrHooks[n] = {
      set: function set(e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    };
  })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
    x.propHooks[t] = {
      get: function get(e) {
        return e.getAttribute(t, 4);
      }
    };
  }), x.support.style || (x.attrHooks.style = {
    get: function get(e) {
      return e.style.cssText || t;
    },
    set: function set(e, t) {
      return e.style.cssText = t + "";
    }
  }), x.support.optSelected || (x.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    x.propFix[this.toLowerCase()] = this;
  }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
    x.valHooks[this] = {
      set: function set(e, n) {
        return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t;
      }
    }, x.support.checkOn || (x.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });
  var Z = /^(?:input|select|textarea)$/i,
      et = /^key/,
      tt = /^(?:mouse|contextmenu)|click/,
      nt = /^(?:focusinfocus|focusoutblur)$/,
      rt = /^([^.]*)(?:\.(.+)|)$/;

  function it() {
    return !0;
  }

  function ot() {
    return !1;
  }

  function at() {
    try {
      return a.activeElement;
    } catch (e) {}
  }

  x.event = {
    global: {},
    add: function add(e, n, r, o, a) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m,
          y,
          v = x._data(e);

      if (v) {
        r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
          return _typeof(x) === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments);
        }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;

        while (u--) {
          s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
            type: g,
            origType: y,
            data: o,
            handler: r,
            guid: r.guid,
            selector: a,
            needsContext: a && x.expr.match.needsContext.test(a),
            namespace: m.join(".")
          }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
        }

        e = null;
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          p,
          f,
          d,
          h,
          g,
          m = x.hasData(e) && x._data(e);

      if (m && (c = m.events)) {
        t = (t || "").match(T) || [""], u = t.length;

        while (u--) {
          if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;

            while (o--) {
              a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
            }

            l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d]);
          } else for (d in c) {
            x.event.remove(e, d + t[u], n, r, !0);
          }
        }

        x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"));
      }
    },
    trigger: function trigger(n, r, i, o) {
      var s,
          l,
          u,
          c,
          p,
          f,
          d,
          h = [i || a],
          g = v.call(n, "type") ? n.type : n,
          m = v.call(n, "namespace") ? n.namespace.split(".") : [];

      if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == _typeof(n) && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
        if (!o && !p.noBubble && !x.isWindow(i)) {
          for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
            h.push(u), f = u;
          }

          f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e);
        }

        d = 0;

        while ((u = h[d++]) && !n.isPropagationStopped()) {
          n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
        }

        if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
          f = i[l], f && (i[l] = null), x.event.triggered = g;

          try {
            i[g]();
          } catch (y) {}

          x.event.triggered = t, f && (i[l] = f);
        }

        return n.result;
      }
    },
    dispatch: function dispatch(e) {
      e = x.event.fix(e);
      var n,
          r,
          i,
          o,
          a,
          s = [],
          l = g.call(arguments),
          u = (x._data(this, "events") || {})[e.type] || [],
          c = x.event.special[e.type] || {};

      if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        s = x.event.handlers.call(this, e, u), n = 0;

        while ((o = s[n++]) && !e.isPropagationStopped()) {
          e.currentTarget = o.elem, a = 0;

          while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function handlers(e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;
      if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) {
        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
          for (o = [], a = 0; l > a; a++) {
            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
          }

          o.length && s.push({
            elem: u,
            handlers: o
          });
        }
      }
      return n.length > l && s.push({
        elem: this,
        handlers: n.slice(l)
      }), s;
    },
    fix: function fix(e) {
      if (e[x.expando]) return e;
      var t,
          n,
          r,
          i = e.type,
          o = e,
          s = this.fixHooks[i];
      s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;

      while (t--) {
        n = r[t], e[n] = o[n];
      }

      return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(e, n) {
        var r,
            i,
            o,
            s = n.button,
            l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== at() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === at() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        },
        _default: function _default(e) {
          return x.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        }
      }
    },
    simulate: function simulate(e, t, n, r) {
      var i = x.extend(new x.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, x.removeEvent = a.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;
    e.detachEvent && (_typeof(e[r]) === i && (e[r] = null), e.detachEvent(r, n));
  }, x.Event = function (e, n) {
    return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n);
  }, x.Event.prototype = {
    isDefaultPrevented: ot,
    isPropagationStopped: ot,
    isImmediatePropagationStopped: ot,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = it, this.stopPropagation();
    }
  }, x.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (e, t) {
    x.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), x.support.submitBubbles || (x.event.special.submit = {
    setup: function setup() {
      return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
        r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), x._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function postDispatch(e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function teardown() {
      return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t);
    }
  }), x.support.changeBubbles || (x.event.special.change = {
    setup: function setup() {
      return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), x.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0);
      })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;
        Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0);
        }), x._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function handle(e) {
      var n = e.target;
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function teardown() {
      return x.event.remove(this, "._change"), !Z.test(this.nodeName);
    }
  }), x.support.focusinBubbles || x.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = 0,
        r = function r(e) {
      x.event.simulate(t, e.target, x.event.fix(e), !0);
    };

    x.event.special[t] = {
      setup: function setup() {
        0 === n++ && a.addEventListener(e, r, !0);
      },
      teardown: function teardown() {
        0 === --n && a.removeEventListener(e, r, !0);
      }
    };
  }), x.fn.extend({
    on: function on(e, n, r, i, o) {
      var a, s;

      if ("object" == _typeof(e)) {
        "string" != typeof n && (r = r || n, n = t);

        for (a in e) {
          this.on(a, n, r, e[a], o);
        }

        return this;
      }

      if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = ot;else if (!i) return this;
      return 1 === o && (s = i, i = function i(e) {
        return x().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
        x.event.add(this, e, i, r, n);
      });
    },
    one: function one(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function off(e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;

      if ("object" == _typeof(e)) {
        for (o in e) {
          this.off(o, n, e[o]);
        }

        return this;
      }

      return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
        x.event.remove(this, e, r, n);
      });
    },
    trigger: function trigger(e, t) {
      return this.each(function () {
        x.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, n) {
      var r = this[0];
      return r ? x.event.trigger(e, n, r, !0) : t;
    }
  });
  var st = /^.[^:#\[\.,]*$/,
      lt = /^(?:parents|prev(?:Until|All))/,
      ut = x.expr.match.needsContext,
      ct = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  x.fn.extend({
    find: function find(e) {
      var t,
          n = [],
          r = this,
          i = r.length;
      if ("string" != typeof e) return this.pushStack(x(e).filter(function () {
        for (t = 0; i > t; t++) {
          if (x.contains(r[t], this)) return !0;
        }
      }));

      for (t = 0; i > t; t++) {
        x.find(e, r[t], n);
      }

      return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    },
    has: function has(e) {
      var t,
          n = x(e, this),
          r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) {
          if (x.contains(this, n[t])) return !0;
        }
      });
    },
    not: function not(e) {
      return this.pushStack(ft(this, e || [], !0));
    },
    filter: function filter(e) {
      return this.pushStack(ft(this, e || [], !1));
    },
    is: function is(e) {
      return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length;
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;

      for (; i > r; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break;
          }
        }
      }

      return this.pushStack(o.length > 1 ? x.unique(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
          r = x.merge(this.get(), n);
      return this.pushStack(x.unique(r));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function pt(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);

    return e;
  }

  x.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return x.dir(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return x.dir(e, "parentNode", n);
    },
    next: function next(e) {
      return pt(e, "nextSibling");
    },
    prev: function prev(e) {
      return pt(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return x.dir(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return x.dir(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return x.dir(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return x.dir(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return x.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return x.sibling(e.firstChild);
    },
    contents: function contents(e) {
      return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes);
    }
  }, function (e, t) {
    x.fn[e] = function (n, r) {
      var i = x.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), x.extend({
    filter: function filter(e, t, n) {
      var r = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function dir(e, n, r) {
      var i = [],
          o = e[n];

      while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
        1 === o.nodeType && i.push(o), o = o[n];
      }

      return i;
    },
    sibling: function sibling(e, t) {
      var n = [];

      for (; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    }
  });

  function ft(e, t, n) {
    if (x.isFunction(t)) return x.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return x.grep(e, function (e) {
      return e === t !== n;
    });

    if ("string" == typeof t) {
      if (st.test(t)) return x.filter(t, e, n);
      t = x.filter(t, e);
    }

    return x.grep(e, function (e) {
      return x.inArray(e, t) >= 0 !== n;
    });
  }

  function dt(e) {
    var t = ht.split("|"),
        n = e.createDocumentFragment();
    if (n.createElement) while (t.length) {
      n.createElement(t.pop());
    }
    return n;
  }

  var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      gt = / jQuery\d+="(?:null|\d+)"/g,
      mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
      yt = /^\s+/,
      vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      bt = /<([\w:]+)/,
      xt = /<tbody/i,
      wt = /<|&#?\w+;/,
      Tt = /<(?:script|style|link)/i,
      Ct = /^(?:checkbox|radio)$/i,
      Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kt = /^$|\/(?:java|ecma)script/i,
      Et = /^true\/(.*)/,
      St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      At = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  },
      jt = dt(a),
      Dt = jt.appendChild(a.createElement("div"));
  At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
    text: function text(e) {
      return x.access(this, function (e) {
        return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.appendChild(e);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Lt(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function remove(e, t) {
      var n,
          r = e ? x.filter(e, this) : this,
          i = 0;

      for (; null != (n = r[i]); i++) {
        t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
      }

      return this;
    },
    empty: function empty() {
      var e,
          t = 0;

      for (; null != (e = this[t]); t++) {
        1 === e.nodeType && x.cleanData(Ft(e, !1));

        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        e.options && x.nodeName(e, "select") && (e.options.length = 0);
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
        return x.clone(this, e, t);
      });
    },
    html: function html(e) {
      return x.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;

        if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(vt, "<$1></$2>");

          try {
            for (; i > r; r++) {
              n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
            }

            n = 0;
          } catch (o) {}
        }

        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = x.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;
      return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];
        i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function detach(e) {
      return this.remove(e, !0);
    },
    domManip: function domManip(e, t, n) {
      e = d.apply([], e);
      var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          p = this,
          f = c - 1,
          h = e[0],
          g = x.isFunction(h);
      if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) return this.each(function (r) {
        var i = p.eq(r);
        g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n);
      });

      if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
          i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
        }

        if (o) for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
          i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
        }
        l = r = null;
      }

      return this;
    }
  });

  function Lt(e, t) {
    return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }

  function Ht(e) {
    return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e;
  }

  function qt(e) {
    var t = Et.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }

  function _t(e, t) {
    var n,
        r = 0;

    for (; null != (n = e[r]); r++) {
      x._data(n, "globalEval", !t || x._data(t[r], "globalEval"));
    }
  }

  function Mt(e, t) {
    if (1 === t.nodeType && x.hasData(e)) {
      var n,
          r,
          i,
          o = x._data(e),
          a = x._data(t, o),
          s = o.events;

      if (s) {
        delete a.handle, a.events = {};

        for (n in s) {
          for (r = 0, i = s[n].length; i > r; r++) {
            x.event.add(t, n, s[n][r]);
          }
        }
      }

      a.data && (a.data = x.extend({}, a.data));
    }
  }

  function Ot(e, t) {
    var n, r, i;

    if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
        i = x._data(t);

        for (r in i.events) {
          x.removeEvent(t, r, i.handle);
        }

        t.removeAttribute(x.expando);
      }

      "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }

  x.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    x.fn[e] = function (e) {
      var n,
          r = 0,
          i = [],
          o = x(e),
          a = o.length - 1;

      for (; a >= r; r++) {
        n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
      }

      return this.pushStack(i);
    };
  });

  function Ft(e, n) {
    var r,
        o,
        a = 0,
        s = _typeof(e.getElementsByTagName) !== i ? e.getElementsByTagName(n || "*") : _typeof(e.querySelectorAll) !== i ? e.querySelectorAll(n || "*") : t;
    if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
      !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
    }
    return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s;
  }

  function Bt(e) {
    Ct.test(e.type) && (e.defaultChecked = e.checked);
  }

  x.extend({
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = x.contains(e.ownerDocument, e);
      if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
        r[a] && Ot(i, r[a]);
      }
      if (t) if (n) for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
        Mt(i, r[a]);
      } else Mt(e, o);
      return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o;
    },
    buildFragment: function buildFragment(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = e.length,
          f = dt(t),
          d = [],
          h = 0;

      for (; p > h; h++) {
        if (o = e[h], o || 0 === o) if ("object" === x.type(o)) x.merge(d, o.nodeType ? [o] : o);else if (wt.test(o)) {
          s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];

          while (i--) {
            s = s.lastChild;
          }

          if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;

            while (i--) {
              x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
            }
          }

          x.merge(d, s.childNodes), s.textContent = "";

          while (s.firstChild) {
            s.removeChild(s.firstChild);
          }

          s = f.lastChild;
        } else d.push(t.createTextNode(o));
      }

      s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;

      while (o = d[h++]) {
        if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
          i = 0;

          while (o = s[i++]) {
            kt.test(o.type || "") && n.push(o);
          }
        }
      }

      return s = null, f;
    },
    cleanData: function cleanData(e, t) {
      var n,
          r,
          o,
          a,
          s = 0,
          l = x.expando,
          u = x.cache,
          c = x.support.deleteExpando,
          f = x.event.special;

      for (; null != (n = e[s]); s++) {
        if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
          if (a.events) for (r in a.events) {
            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
          }
          u[o] && (delete u[o], c ? delete n[l] : _typeof(n.removeAttribute) !== i ? n.removeAttribute(l) : n[l] = null, p.push(o));
        }
      }
    },
    _evalUrl: function _evalUrl(e) {
      return x.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        "throws": !0
      });
    }
  }), x.fn.extend({
    wrapAll: function wrapAll(e) {
      if (x.isFunction(e)) return this.each(function (t) {
        x(this).wrapAll(e.call(this, t));
      });

      if (this[0]) {
        var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          var e = this;

          while (e.firstChild && 1 === e.firstChild.nodeType) {
            e = e.firstChild;
          }

          return e;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(e) {
      return x.isFunction(e) ? this.each(function (t) {
        x(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = x(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = x.isFunction(e);
      return this.each(function (n) {
        x(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        x.nodeName(this, "body") || x(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var Pt,
      Rt,
      Wt,
      $t = /alpha\([^)]*\)/i,
      It = /opacity\s*=\s*([^)]*)/,
      zt = /^(top|right|bottom|left)$/,
      Xt = /^(none|table(?!-c[ea]).+)/,
      Ut = /^margin/,
      Vt = RegExp("^(" + w + ")(.*)$", "i"),
      Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
      Jt = RegExp("^([+-])=(" + w + ")", "i"),
      Gt = {
    BODY: "block"
  },
      Qt = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Kt = {
    letterSpacing: 0,
    fontWeight: 400
  },
      Zt = ["Top", "Right", "Bottom", "Left"],
      en = ["Webkit", "O", "Moz", "ms"];

  function tn(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
        r = t,
        i = en.length;

    while (i--) {
      if (t = en[i] + n, t in e) return t;
    }

    return r;
  }

  function nn(e, t) {
    return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e);
  }

  function rn(e, t) {
    var n,
        r,
        i,
        o = [],
        a = 0,
        s = e.length;

    for (; s > a; a++) {
      r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
    }

    for (a = 0; s > a; a++) {
      r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
    }

    return e;
  }

  x.fn.extend({
    css: function css(e, n) {
      return x.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;

        if (x.isArray(n)) {
          for (o = Rt(e), i = n.length; i > s; s++) {
            a[n[s]] = x.css(e, n[s], !1, o);
          }

          return a;
        }

        return r !== t ? x.style(e, n, r) : x.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function show() {
      return rn(this, !0);
    },
    hide: function hide() {
      return rn(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        nn(this) ? x(this).show() : x(this).hide();
      });
    }
  }), x.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Wt(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = x.camelCase(n),
            u = e.style;
        if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
        if (a = _typeof(r), "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (c) {}
      }
    },
    css: function css(e, n, r, i) {
      var o,
          a,
          s,
          l = x.camelCase(n);
      return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (Rt = function Rt(t) {
    return e.getComputedStyle(t, null);
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;
    return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : a.documentElement.currentStyle && (Rt = function Rt(e) {
    return e.currentStyle;
  }, Wt = function Wt(e, n, r) {
    var i,
        o,
        a,
        s = r || Rt(e),
        l = s ? s[n] : t,
        u = e.style;
    return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
  });

  function on(e, t, n) {
    var r = Vt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }

  function an(e, t, n, r, i) {
    var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        a = 0;

    for (; 4 > o; o += 2) {
      "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
    }

    return a;
  }

  function sn(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Rt(e),
        a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);

    if (0 >= i || null == i) {
      if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) return i;
      r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }

    return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }

  function ln(e) {
    var t = a,
        n = Gt[e];
    return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n;
  }

  function un(e, t) {
    var n = x(t.createElement(e)).appendTo(t.body),
        r = x.css(n[0], "display");
    return n.remove(), r;
  }

  x.each(["height", "width"], function (e, n) {
    x.cssHooks[n] = {
      get: function get(e, r, i) {
        return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
          return sn(e, n, i);
        }) : sn(e, n, i) : t;
      },
      set: function set(e, t, r) {
        var i = r && Rt(e);
        return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0);
      }
    };
  }), x.support.opacity || (x.cssHooks.opacity = {
    get: function get(e, t) {
      return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function set(e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";
      n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i);
    }
  }), x(function () {
    x.support.reliableMarginRight || (x.cssHooks.marginRight = {
      get: function get(e, n) {
        return n ? x.swap(e, {
          display: "inline-block"
        }, Wt, [e, "marginRight"]) : t;
      }
    }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
      x.cssHooks[n] = {
        get: function get(e, r) {
          return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t;
        }
      };
    });
  }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"));
  }, x.expr.filters.visible = function (e) {
    return !x.expr.filters.hidden(e);
  }), x.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    x.cssHooks[e + t] = {
      expand: function expand(n) {
        var r = 0,
            i = {},
            o = "string" == typeof n ? n.split(" ") : [n];

        for (; 4 > r; r++) {
          i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, Ut.test(e) || (x.cssHooks[e + t].set = on);
  });
  var cn = /%20/g,
      pn = /\[\]$/,
      fn = /\r?\n/g,
      dn = /^(?:submit|button|image|reset|file)$/i,
      hn = /^(?:input|select|textarea|keygen)/i;
  x.fn.extend({
    serialize: function serialize() {
      return x.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = x.prop(this, "elements");
        return e ? x.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e));
      }).map(function (e, t) {
        var n = x(this).val();
        return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(fn, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(fn, "\r\n")
        };
      }).get();
    }
  }), x.param = function (e, n) {
    var r,
        i = [],
        o = function o(e, t) {
      t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };

    if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) {
      gn(r, e[r], n, o);
    }
    return i.join("&").replace(cn, "+");
  };

  function gn(e, t, n, r) {
    var i;
    if (x.isArray(t)) x.each(t, function (t, i) {
      n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == _typeof(i) ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x.type(t)) r(e, t);else for (i in t) {
      gn(e + "[" + i + "]", t[i], n, r);
    }
  }

  x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    x.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), x.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });
  var mn,
      yn,
      vn = x.now(),
      bn = /\?/,
      xn = /#.*$/,
      wn = /([?&])_=[^&]*/,
      Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Nn = /^(?:GET|HEAD)$/,
      kn = /^\/\//,
      En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Sn = x.fn.load,
      An = {},
      jn = {},
      Dn = "*/".concat("*");

  try {
    yn = o.href;
  } catch (Ln) {
    yn = a.createElement("a"), yn.href = "", yn = yn.href;
  }

  mn = En.exec(yn.toLowerCase()) || [];

  function Hn(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(T) || [];
      if (x.isFunction(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function qn(e, n, r, i) {
    var o = {},
        a = e === jn;

    function s(l) {
      var u;
      return o[l] = !0, x.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);
        return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1);
      }), u;
    }

    return s(n.dataTypes[0]) || !o["*"] && s("*");
  }

  function _n(e, n) {
    var r,
        i,
        o = x.ajaxSettings.flatOptions || {};

    for (i in n) {
      n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
    }

    return r && x.extend(!0, e, r), e;
  }

  x.fn.load = function (e, n, r) {
    if ("string" != typeof e && Sn) return Sn.apply(this, arguments);
    var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");
    return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == _typeof(n) && (a = "POST"), s.length > 0 && x.ajax({
      url: e,
      type: a,
      dataType: "html",
      data: n
    }).done(function (e) {
      o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    x.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), x.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: yn,
      type: "GET",
      isLocal: Cn.test(mn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Dn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": x.parseJSON,
        "text xml": x.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e);
    },
    ajaxPrefilter: Hn(An),
    ajaxTransport: Hn(jn),
    ajax: function ajax(e, n) {
      "object" == _typeof(e) && (n = e, e = t), n = n || {};
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          p = x.ajaxSetup({}, n),
          f = p.context || p,
          d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
          h = x.Deferred(),
          g = x.Callbacks("once memory"),
          m = p.statusCode || {},
          y = {},
          v = {},
          b = 0,
          w = "canceled",
          C = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (2 === b) {
            if (!c) {
              c = {};

              while (t = Tn.exec(a)) {
                c[t[1].toLowerCase()] = t[2];
              }
            }

            t = c[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();
          return b || (e = v[n] = v[n] || e, y[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return b || (p.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (2 > b) for (t in e) {
            m[t] = [m[t], e[t]];
          } else C.always(e[C.status]);
          return this;
        },
        abort: function abort(e) {
          var t = e || w;
          return u && u.abort(t), k(0, t), this;
        }
      };
      if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) return C;
      l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);

      for (i in p.headers) {
        C.setRequestHeader(i, p.headers[i]);
      }

      if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) return C.abort();
      w = "abort";

      for (i in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        C[i](p[i]);
      }

      if (u = qn(jn, p, n, C)) {
        C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));

        try {
          b = 1, u.send(y, k);
        } catch (N) {
          if (!(2 > b)) throw N;
          k(-1, N);
        }
      } else k(-1, "No Transport");

      function k(e, n, r, i) {
        var c,
            y,
            v,
            w,
            T,
            N = n;
        2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")));
      }

      return C;
    },
    getJSON: function getJSON(e, t, n) {
      return x.get(e, t, n, "json");
    },
    getScript: function getScript(e, n) {
      return x.get(e, t, n, "script");
    }
  }), x.each(["get", "post"], function (e, n) {
    x[n] = function (e, r, i, o) {
      return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
        url: e,
        type: n,
        dataType: o,
        data: r,
        success: i
      });
    };
  });

  function Mn(e, n, r) {
    var i,
        o,
        a,
        s,
        l = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
    }

    if (o) for (s in l) {
      if (l[s] && l[s].test(o)) {
        u.unshift(s);
        break;
      }
    }
    if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;
          break;
        }

        i || (i = s);
      }

      a = a || i;
    }
    return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }

  function On(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      u[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
        if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) {
          if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
            a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (a !== !0) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (p) {
          return {
            state: "parsererror",
            error: a ? p : "No conversion from " + l + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  x.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(e) {
        return x.globalEval(e), e;
      }
    }
  }), x.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), x.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = a.head || x("head")[0] || a.documentElement;
      return {
        send: function send(t, i) {
          n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        },
        abort: function abort() {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var Fn = [],
      Bn = /(=)\?(?=&|$)|\?\?/;
  x.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Fn.pop() || x.expando + "_" + vn++;
      return this[e] = !0, e;
    }
  }), x.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
    return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || x.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });

  var Pn,
      Rn,
      Wn = 0,
      $n = e.ActiveXObject && function () {
    var e;

    for (e in Pn) {
      Pn[e](t, !0);
    }
  };

  function In() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }

  function zn() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }

  x.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && In() || zn();
  } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
    if (!n.crossDomain || x.support.cors) {
      var _r;

      return {
        send: function send(i, o) {
          var a,
              s,
              l = n.xhr();
          if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) {
            l[s] = n.xhrFields[s];
          }
          n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (s in i) {
              l.setRequestHeader(s, i[s]);
            }
          } catch (u) {}

          l.send(n.hasContent && n.data || null), _r = function r(e, i) {
            var s, u, c, p;

            try {
              if (_r && (i || 4 === l.readyState)) if (_r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) 4 !== l.readyState && l.abort();else {
                p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);

                try {
                  c = l.statusText;
                } catch (f) {
                  c = "";
                }

                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404;
              }
            } catch (d) {
              i || o(-1, d);
            }

            p && o(s, c, p, u);
          }, n.async ? 4 === l.readyState ? setTimeout(_r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = _r), l.onreadystatechange = _r) : _r();
        },
        abort: function abort() {
          _r && _r(t, !0);
        }
      };
    }
  });
  var Xn,
      Un,
      Vn = /^(?:toggle|show|hide)$/,
      Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
      Jn = /queueHooks$/,
      Gn = [nr],
      Qn = {
    "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yn.exec(t),
          o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
          a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
          s = 1,
          l = 20;

      if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;

        do {
          s = s || ".5", a /= s, x.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }

      return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }]
  };

  function Kn() {
    return setTimeout(function () {
      Xn = t;
    }), Xn = x.now();
  }

  function Zn(e, t, n) {
    var r,
        i = (Qn[t] || []).concat(Qn["*"]),
        o = 0,
        a = i.length;

    for (; a > o; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function er(e, t, n) {
    var r,
        i,
        o = 0,
        a = Gn.length,
        s = x.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (i) return !1;
      var t = Xn || Kn(),
          n = Math.max(0, u.startTime + u.duration - t),
          r = n / u.duration || 0,
          o = 1 - r,
          a = 0,
          l = u.tweens.length;

      for (; l > a; a++) {
        u.tweens[a].run(o);
      }

      return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({
      elem: e,
      props: x.extend({}, t),
      opts: x.extend(!0, {
        specialEasing: {}
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: Xn || Kn(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
        return u.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? u.tweens.length : 0;
        if (i) return this;

        for (i = !0; r > n; n++) {
          u.tweens[n].run(1);
        }

        return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      }
    }),
        c = u.props;

    for (tr(c, u.opts.specialEasing); a > o; o++) {
      if (r = Gn[o].call(u, e, c, u.opts)) return r;
    }

    return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
      elem: e,
      anim: u,
      queue: u.opts.queue
    })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }

  function tr(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  x.Animation = x.extend(er, {
    tweener: function tweener(e, t) {
      x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
      var n,
          r = 0,
          i = e.length;

      for (; i > r; r++) {
        n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t);
      }
    },
    prefilter: function prefilter(e, t) {
      t ? Gn.unshift(e) : Gn.push(e);
    }
  });

  function nr(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        p = e.style,
        f = e.nodeType && nn(e),
        d = x._data(e, "fxshow");

    n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, x.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
      p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
    }));

    for (r in t) {
      if (i = t[r], Vn.exec(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
        c[r] = d && d[r] || x.style(e, r);
      }
    }

    if (!x.isEmptyObject(c)) {
      d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
        x(e).hide();
      }), u.done(function () {
        var t;

        x._removeData(e, "fxshow");

        for (t in c) {
          x.style(e, t, c[t]);
        }
      });

      for (r in c) {
        a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
      }
    }
  }

  function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
  }

  x.Tween = rr, rr.prototype = {
    constructor: rr,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = rr.propHooks[this.prop];
      return e && e.get ? e.get(this) : rr.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = rr.propHooks[this.prop];
      return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this;
    }
  }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function set(e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      }
    }
  }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, x.each(["toggle", "show", "hide"], function (e, t) {
    var n = x.fn[t];

    x.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i);
    };
  }), x.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(nn).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = x.isEmptyObject(e),
          o = x.speed(t, n, r),
          a = function a() {
        var t = er(this, x.extend({}, e), o);
        (i || x._data(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, n, r) {
      var i = function i(e) {
        var t = e.stop;
        delete e.stop, t(r);
      };

      return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = x.timers,
            a = x._data(this);

        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) {
          a[n] && a[n].stop && Jn.test(n) && i(a[n]);
        }

        for (n = o.length; n--;) {
          o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
        }

        (t || !r) && x.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return e !== !1 && (e = e || "fx"), this.each(function () {
        var t,
            n = x._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = x.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; a > t; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  });

  function ir(e, t) {
    var n,
        r = {
      height: e
    },
        i = 0;

    for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
      n = Zt[i], r["margin" + n] = r["padding" + n] = e;
    }

    return t && (r.opacity = r.width = e), r;
  }

  x.each({
    slideDown: ir("show"),
    slideUp: ir("hide"),
    slideToggle: ir("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    x.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), x.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? x.extend({}, e) : {
      complete: n || !n && t || x.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !x.isFunction(t) && t
    };
    return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
    }, r;
  }, x.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
    var e,
        n = x.timers,
        r = 0;

    for (Xn = x.now(); n.length > r; r++) {
      e = n[r], e() || n[r] !== e || n.splice(r--, 1);
    }

    n.length || x.fx.stop(), Xn = t;
  }, x.fx.timer = function (e) {
    e() && x.timers.push(e) && x.fx.start();
  }, x.fx.interval = 13, x.fx.start = function () {
    Un || (Un = setInterval(x.fx.tick, x.fx.interval));
  }, x.fx.stop = function () {
    clearInterval(Un), Un = null;
  }, x.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
    return x.grep(x.timers, function (t) {
      return e === t.elem;
    }).length;
  }), x.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      x.offset.setOffset(this, e, t);
    });
    var n,
        r,
        o = {
      top: 0,
      left: 0
    },
        a = this[0],
        s = a && a.ownerDocument;
    if (s) return n = s.documentElement, x.contains(n, a) ? (_typeof(a.getBoundingClientRect) !== i && (o = a.getBoundingClientRect()), r = or(s), {
      top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
      left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
    }) : o;
  }, x.offset = {
    setOffset: function setOffset(e, t, n) {
      var r = x.css(e, "position");
      "static" === r && (e.style.position = "relative");
      var i = x(e),
          o = i.offset(),
          a = x.css(e, "top"),
          s = x.css(e, "left"),
          l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
          u = {},
          c = {},
          p,
          f;
      l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u);
    }
  }, x.fn.extend({
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n = {
          top: 0,
          left: 0
        },
            r = this[0];
        return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - x.css(r, "marginTop", !0),
          left: t.left - n.left - x.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent || s;

        while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || s;
      });
    }
  }), x.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, n) {
    var r = /Y/.test(n);

    x.fn[e] = function (i) {
      return x.access(this, function (e, i, o) {
        var a = or(e);
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  });

  function or(e) {
    return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }

  x.each({
    Height: "height",
    Width: "width"
  }, function (e, n) {
    x.each({
      padding: "inner" + e,
      content: n,
      "": "outer" + e
    }, function (r, i) {
      x.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (i === !0 || o === !0 ? "margin" : "border");
        return x.access(this, function (n, r, i) {
          var o;
          return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), x.fn.size = function () {
    return this.length;
  }, x.fn.andSelf = x.fn.addBack, "object" == ( false ? undefined : _typeof(module)) && module && "object" == _typeof(module.exports) ? module.exports = x : (__webpack_provided_window_dot_jQuery = __webpack_provided_window_dot_$ = x,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return x;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
})(window);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./public/js/jquery.nicescroll.js":
/*!****************************************!*\
  !*** ./public/js/jquery.nicescroll.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /* jquery.nicescroll 3.5.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var z=!1,E=!1,L=5E3,M=2E3,y=0,N=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}(),H=["ms","moz","webkit","o"],v=window.requestAnimationFrame||!1,w=window.cancelAnimationFrame||!1;if(!v)for(var O in H){var F=H[O];v||(v=window[F+"RequestAnimationFrame"]);w||(w=window[F+"CancelAnimationFrame"]||window[F+"CancelRequestAnimationFrame"])}var A=window.MutationObserver||window.WebKitMutationObserver||
//     !1,I={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,
//     horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1,oneaxismousemode:"auto"},G=!1,P=function(){if(G)return G;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||
//     "mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isoperamini="[object OperaMini]"===Object.prototype.toString.call(window.operamini);c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in document)||7==document.documentMode);c.isie8=c.isie&&"documentMode"in document&&8==document.documentMode;c.isie9=
//     c.isie&&"performance"in window&&9<=document.documentMode;c.isie10=c.isie&&"performance"in window&&10<=document.documentMode;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);c.isie9mobile&&(c.isie9=!1);c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;c.ischrome22=c.ischrome&&c.haspointerlock;c.ischrome26=c.ischrome&&"transition"in e.style;c.cantouch="ontouchstart"in
//     document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||!1;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=!1;c.hastransform=!1;c.hastranslate3d=!1;c.transitionstyle=!1;c.hastransition=!1;c.transitionend=!1;for(var k=["transform","msTransform","webkitTransform","MozTransform","OTransform"],l=0;l<k.length;l++)if("undefined"!=
//     typeof e.style[k[l]]){c.trstyle=k[l];break}c.hastransform=!1!=c.trstyle;c.hastransform&&(e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]));c.transitionstyle=!1;c.prefixstyle="";c.transitionend=!1;for(var k="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),q=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),t="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
//                                                                                                                                                                                                                                                                      l=0;l<k.length;l++)if(k[l]in e.style){c.transitionstyle=k[l];c.prefixstyle=q[l];c.transitionend=t[l];break}c.ischrome26&&(c.prefixstyle=q[1]);c.hastransition=c.transitionstyle;a:{k=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)k=[];for(l=0;l<k.length;l++)if(q=k[l],e.style.cursor=q,e.style.cursor==q){k=q;break a}k="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=k;c.hasmousecapture="setCapture"in e;c.hasMutationObserver=!1!==A;return G=
//     c},Q=function(h,c){function k(){var d=b.win;if("zIndex"in d)return d.zIndex();for(;0<d.length&&9!=d[0].nodeType;){var c=d.css("zIndex");if(!isNaN(c)&&0!=c)return parseInt(c);d=d.parent()}return!1}function l(d,c,f){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=u[c]||0,f=3==d?f?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),f?d:0):d}function q(d,c,f,g){b._bind(d,c,function(b){b=b?b:window.event;var g={original:b,target:b.target||b.srcElement,type:"wheel",
//     deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==c?(g.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(g.deltaX=-0.025*b.wheelDeltaX)):g.deltaY=b.detail;return f.call(d,g)},g)}function t(d,c,f){var g,e;0==d.deltaMode?(g=-Math.floor(d.deltaX*(b.opt.mousescrollstep/54)),e=-Math.floor(d.deltaY*
//     (b.opt.mousescrollstep/54))):1==d.deltaMode&&(g=-Math.floor(d.deltaX*b.opt.mousescrollstep),e=-Math.floor(d.deltaY*b.opt.mousescrollstep));c&&(b.opt.oneaxismousemode&&0==g&&e)&&(g=e,e=0);g&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=g,b.debounced("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)},120));if(e){if(b.opt.nativeparentscrolling&&f&&!b.ispage&&!b.zoomactive)if(0>e){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;
//     b.scrollmom&&b.scrollmom.stop();b.lastdeltay+=e;b.debounced("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)},120)}d.stopImmediatePropagation();return d.preventDefault()}var b=this;this.version="3.5.0";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,I);this.opt.snapbackspeed=80;if(h)for(var p in b.opt)"undefined"!=typeof h[p]&&(b.opt[p]=h[p]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?
//     b.opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=
//     this.onscrollcancel=this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+M++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=
//     this.cursor=this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=P();var g=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=g.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=!1;g.cantouch&&(g.ischrome&&!g.isios&&!g.isandroid)&&
// (this.istouchcapable=!0,g.cantouch=!1);g.cantouch&&(g.ismozilla&&!g.isios&&!g.isandroid)&&(this.istouchcapable=!0,g.cantouch=!1);b.opt.enablemouselockapi||(g.hasmousecapture=!1,g.haspointerlock=!1);this.delayed=function(d,c,f,g){var e=b.delaylist[d],k=(new Date).getTime();if(!g&&e&&e.tt)return!1;e&&e.tt&&clearTimeout(e.tt);if(e&&e.last+f>k&&!e.tt)b.delaylist[d]={last:k+f,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},f)};else if(!e||!e.tt)b.delaylist[d]={last:k,tt:0},setTimeout(function(){c.call()},
//     0)};this.debounced=function(d,c,f){var g=b.delaylist[d];(new Date).getTime();b.delaylist[d]=c;g||setTimeout(function(){var c=b.delaylist[d];b.delaylist[d]=!1;c.call()},f)};this.synched=function(d,c){b.synclist[d]=c;(function(){b.onsync||(v(function(){b.onsync=!1;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=!1}}),b.onsync=!0)})();return d};this.unsynched=function(d){b.synclist[d]&&(b.synclist[d]=!1)};this.css=function(d,c){for(var f in c)b.saved.css.push([d,f,d.css(f)]),d.css(f,
//     c[f])};this.scrollTop=function(d){return"undefined"==typeof d?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return"undefined"==typeof d?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,f,g,e,k,l){this.st=b;this.ed=c;this.spd=f;this.p1=g||0;this.p2=e||1;this.p3=k||0;this.p4=l||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},
//     getNow:function(){var b=1-((new Date).getTime()-this.ts)/this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};g.hastranslate3d&&g.isios&&this.doc.css("-webkit-backface-visibility","hidden");var s=function(){var d=b.doc.css(g.trstyle);return d&&"matrix"==d.substr(0,
//     6)?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):!1};this.getScrollTop=function(d){if(!d){if(d=s())return 16==d.length?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=s())return 16==d.length?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");
//     c.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(c)}:document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=!0}:function(b,c){};g.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(g.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*
//     d+"px";b.doc.css(g.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(g.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(g.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=
//     function(){return b.docscroll.scrollTop()},this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,c){if(!b)return!1;for(var f=b.target||b.srcElement||b||!1;f&&f.id!=c;)f=f.parentNode||!1;return!1!==f};var u={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
//     left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),f=c.top,g=c.left,f=f+l(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var g=g+(b.rail.align?b.win.outerWidth()-
//     l(b.win,"border-right-width")-b.rail.width:l(b.win,"border-left-width")),e=b.opt.railoffset;e&&(e.top&&(f+=e.top),b.rail.align&&e.left&&(g+=e.left));b.locked||b.rail.css({top:f,left:g,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:f+1,left:1==b.rail.align?g-20:g+b.rail.width+4});b.railh&&!b.locked&&(f=c.top,g=c.left,d=b.railh.align?f+l(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:f+l(b.win,"border-top-width",!0),g+=l(b.win,"border-left-width"),b.railh.css({top:d,left:g,
//     width:b.railh.width}))}};this.doRailClick=function(d,c,f){var g;b.locked||(b.cancelEvent(d),c?(c=f?b.doScrollLeft:b.doScrollTop,g=f?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(g)):(c=f?b.doScrollLeftBy:b.doScrollBy,g=f?b.scroll.x:b.scroll.y,d=f?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,f=f?b.view.w:b.view.h,g>=d?c(f):c(-f)))};b.hasanimationframe=v;b.hascancelanimationframe=w;b.hasanimationframe?b.hascancelanimationframe||
//     (w=function(){b.cancelAnimationFrame=!0}):(v=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},w=clearInterval);this.init=function(){b.saved.css=[];if(g.isie7mobile||g.isoperamini)return!0;g.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?k()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>y&&(y=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!g.cantouch&&
//     !g.isieold&&!g.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);g.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&g.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));g.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px",
//     "background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var f=e(document.createElement("div"));f.attr("id",b.id);f.addClass("nicescroll-rails");var l,h,x=["left","right"],q;for(q in x)h=x[q],(l=b.opt.railpadding[h])?f.css("padding-"+h,l+"px"):b.opt.railpadding[h]=
//     0;f.append(c);f.width=Math.max(parseFloat(b.opt.cursorwidth),c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;f.css({width:f.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});f.visibility=!0;f.scrollable=!0;f.align="left"==b.opt.railalign?0:1;b.rail=f;c=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!g.isieold)&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+N+"zoomico.png)",
//     height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&b.bind(b.win,"dblclick",b.doZoom),g.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(d){1.5<d.scale&&b.doZoomIn(d);0.8>d.scale&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,
//     border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var m=e(document.createElement("div"));m.attr("id",b.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());m.css({height:m.height+"px",zIndex:b.zindex,background:b.opt.background});m.append(c);
//     m.visibility=!0;m.scrollable=!0;m.align="top"==b.opt.railvalign?0:1;b.railh=m;b.railh.drag=!1}b.ispage?(f.css({position:"fixed",top:"0px",height:"100%"}),f.align?f.css({right:"0px"}):f.css({left:"0px"}),b.body.append(f),b.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),b.body.append(m))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),d="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",
//     top:1,right:0,"margin-right":f.width+4}),d.append(b.zoom)),f.css({position:"absolute",top:0}),f.align?f.css({right:0}):f.css({left:0}),d.append(f),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),d.append(m))):(b.isfixed="fixed"==b.win.css("position"),d=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/fixed|relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),
//     f.css({position:d}),b.zoom&&b.zoom.css({position:d}),b.updateScrollBar(),b.body.append(f),b.zoom&&b.body.append(b.zoom),b.railh&&(m.css({position:d}),b.body.append(m))),g.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),g.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),g.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):
//     !0===b.opt.autohidemode||"leave"===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),g.isie8&&(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&g.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&
//         (b.autohidedom=!1,b.hide(),b.locked=!1);if(g.isie9mobile)b.scrollmom=new J(b),b.onmangotouch=function(d){d=b.getScrollTop();var c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&c==b.scrollmom.lastscrollx)return!0;var f=d-b.mangotouch.sy,g=c-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(g,2)+Math.pow(f,2)))){var n=0>f?-1:1,e=0>g?-1:1,k=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<k-b.mangotouch.tm||b.mangotouch.dry!=n||b.mangotouch.drx!=e?(b.scrollmom.stop(),b.scrollmom.reset(c,
//     d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=n,b.mangotouch.drx=e,b.mangotouch.tm=k):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-g,b.mangotouch.sy-f),b.mangotouch.tm=k,f=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,2<f&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},f=b.getScrollTop(),
//     m=b.getScrollLeft(),b.mangotouch={sy:f,ly:f,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,"scroll",b.onmangotouch);else{if(g.cantouch||b.istouchcapable||b.opt.touchbehavior||g.hasmstouch){b.scrollmom=new J(b);b.ontouchstart=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(!b.locked){if(g.hasmstouch)for(var c=d.target?d.target:!1;c;){var f=e(c).getNiceScroll();if(0<f.length&&f[0].me==b.me)break;if(0<f.length)return!1;if("DIV"==c.nodeName&&c.id==b.id)break;c=c.parentNode?c.parentNode:
//     !1}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);!("clientX"in d)&&"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);b.forcescreen&&(f=d,d={original:d.original?d.original:d},d.clientX=f.screenX,d.clientY=f.screenY);b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl=
//     "f";else{var f=e(window).width(),n=e(window).height(),k=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),n=Math.max(0,l-n),f=Math.max(0,k-f);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<n?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<f?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&g.isie)&&(f=b.win.position(),b.rail.drag.x+=f.left,b.rail.drag.y+=f.top);
//     b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(d.clientX,d.clientY);if(!g.cantouch&&!this.istouchcapable&&!g.hasmstouch){if(!c||!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&g.hasmousecapture&&c.setCapture(),b.opt.touchbehavior?b.cancelEvent(d):b.stopPropagation(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},b.preventclick=pc)}}};b.ontouchend=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),
//     b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),g.hasmousecapture&&document.releaseCapture(),!g.cantouch)))return b.cancelEvent(d)};var t=b.opt.touchbehavior&&b.isiframe&&!g.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(g.cantouch&&"undefined"==typeof d.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=
//     b.onpreventclick);d=e.extend({original:d},d);"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);if(b.forcescreen){var f=d;d={original:d.original?d.original:d};d.clientX=f.screenX;d.clientY=f.screenY}f=ofy=0;if(t&&!c){var n=b.win.position(),f=-n.left;ofy=-n.top}var k=d.clientY+ofy,n=k-b.rail.drag.y,l=d.clientX+f,h=l-b.rail.drag.x,r=b.rail.drag.st-n;b.ishwscroll&&b.opt.bouncescroll?0>r?r=Math.round(r/2):r>b.page.maxh&&(r=b.page.maxh+Math.round((r-b.page.maxh)/
//     2)):(0>r&&(k=r=0),r>b.page.maxh&&(r=b.page.maxh,k=0));if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-h;b.ishwscroll&&b.opt.bouncescroll?0>m?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+Math.round((m-b.page.maxw)/2)):(0>m&&(l=m=0),m>b.page.maxw&&(m=b.page.maxw,l=0))}f=!1;if(b.rail.drag.dl)f=!0,"v"==b.rail.drag.dl?m=b.rail.drag.sl:"h"==b.rail.drag.dl&&(r=b.rail.drag.st);else{var n=Math.abs(n),h=Math.abs(h),x=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(n>x&&h<=0.3*n)return b.rail.drag=
//     !1,!0;h>x&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(h>x&&n<=0.3*h)return b.rail.drag=!1,!0;n>x&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(r),b.scrollmom.update(l,k),b.railh&&b.railh.scrollable?(b.setScrollLeft(m),b.showCursor(r,m)):b.showCursor(r),g.isie10&&document.selection.clear())});
//     g.ischrome&&b.istouchcapable&&(f=!1);if(f)return b.cancelEvent(d)}}}b.onmousedown=function(d,c){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,pt:1,hr:!!c};var f=b.getTarget(d);!b.ispage&&g.hasmousecapture&&f.setCapture();b.isiframe&&!g.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(d)}};b.onmouseup=function(d){if(b.rail.drag&&
//     (g.hasmousecapture&&document.releaseCapture(),b.isiframe&&!g.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(d)};b.onmousemove=function(d){if(b.rail.drag&&1==b.rail.drag.pt){if(g.ischrome&&0==d.which)return b.onmouseup(d);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var c=b.scrollvaluemaxw;b.scroll.x>c&&(b.scroll.x=c)}else b.scroll.y=b.rail.drag.sy+
//     (d.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),c=b.scrollvaluemax,b.scroll.y>c&&(b.scroll.y=c);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(d)}};if(g.cantouch||b.opt.touchbehavior)b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,
//     b.preventclick=!1,b.cancelEvent(d)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=g.isios?!1:function(d){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(d)):!0},b.opt.grabcursorenabled&&g.cursorgrabvalue&&(b.css(b.ispage?b.doc:b.win,{cursor:g.cursorgrabvalue}),b.css(b.rail,{cursor:g.cursorgrabvalue}));else{var p=function(d){if(b.selectiondrag){if(d){var c=b.win.outerHeight();d=d.pageY-b.selectiondrag.top;0<d&&d<c&&(d=0);d>=c&&(d-=c);b.selectiondrag.df=d}0!=b.selectiondrag.df&&(b.doScrollBy(2*
//     -Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){p()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=document.selection.type}:function(){return!1};b.onselectionstart=function(d){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(d){b.selectiondrag=!1};b.onselectiondrag=function(d){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",
//     function(){p(d)},250)}}g.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,
//     "touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.bind(b.cursorh,"mouseup",function(d){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),g.hasmousecapture&&document.releaseCapture(),b.cancelEvent(d)}));if(b.opt.cursordragontouch||!g.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),
//     b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.rail,"click",function(d){b.doRailClick(d,!1,!1)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,!0,!1)}),b.bind(b.cursor,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,
//     "mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,!1,!0)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,!0,!0)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,"dblclick",function(d){b.cancelEvent(d)})));!g.cantouch&&!b.opt.touchbehavior?(b.bind(g.hasmousecapture?b.win:document,
//     "mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),
//     b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(g.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&
// (b.isiframe||b.bind(g.isie&&b.ispage?document:b.win,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!g.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:L++}),b.jqbind(b.win,"focus",function(d){z=b.getTarget(d).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(d){z=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(d){E=
//     b.getTarget(d).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){E=!1;b.hasmousefocus=!1;b.rail.drag||b.hideCursor()}))}b.onkeypress=function(d){if(b.locked&&0==b.page.maxh)return!0;d=d?d:window.e;var c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!z||b.ispage&&!z&&!E){c=d.keyCode;if(b.locked&&27!=c)return b.cancelEvent(d);
//     var f=d.ctrlKey||!1,n=d.shiftKey||!1,g=!1;switch(c){case 38:case 63233:b.doScrollBy(72);g=!0;break;case 40:case 63235:b.doScrollBy(-72);g=!0;break;case 37:case 63232:b.railh&&(f?b.doScrollLeft(0):b.doScrollLeftBy(72),g=!0);break;case 39:case 63234:b.railh&&(f?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),g=!0);break;case 33:case 63276:b.doScrollBy(b.view.h);g=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);g=!0;break;case 36:case 63273:b.railh&&f?b.doScrollPos(0,0):b.doScrollTo(0);g=!0;break;
//         case 35:case 63275:b.railh&&f?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);g=!0;break;case 32:b.opt.spacebarenabled&&(n?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),g=!0);break;case 27:b.zoomactive&&(b.doZoom(),g=!0)}if(g)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,g.isopera&&!g.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(g.ischrome&&
//     !b.ispage&&!b.haswrapper){var s=b.win.attr("style"),f=parseFloat(b.win.css("width"))+1;b.win.css("width",f);b.synched("chromefix",function(){b.win.attr("style",s)})}b.onAttributeChange=function(d){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==A?(b.observer=new A(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new A(function(d){d.forEach(function(d){if(0<d.removedNodes.length)for(var c in d.removedNodes)if(d.removedNodes[c]==
//     b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,g.isie&&!g.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),g.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",function(d){d.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;
//     b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var K=function(d){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(f){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),
//     h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));!g.isios&&(b.opt.iframeautoresize&&!b.isiframe)&&(b.win.scrollTop(0),b.doc.height(""),d=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight),b.doc.height(d));b.lazyResize(30);g.isie7&&b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});g.isios&&b.haswrapper&&b.css(e(c.body),{"-webkit-transform":"translate3d(0,0,0)"});"contentWindow"in
//     this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,g.isopera?"keypress":"keydown",b.onkeypress);if(g.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.ontouchstart),b.bind(c,"mousemove",function(d){b.ontouchmove(d,!0)}),b.opt.grabcursorenabled&&g.cursorgrabvalue&&b.css(e(c.body),{cursor:g.cursorgrabvalue});b.bind(c,"mouseup",b.ontouchend);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,
//     "dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){K.call(b.doc[0],!1)},500);b.bind(this.doc,"load",K)}};this.showCursor=function(d,c){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof d&&!1!==d&&(b.scroll.y=Math.round(1*
//     d/b.scrollratio.y)),"undefined"!=typeof c&&(b.scroll.x=Math.round(1*c/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=function(d){!b.cursortimeout&&(b.rail&&b.autohidedom&&!(b.hasmousefocus&&"leave"==b.opt.autohidemode))&&
// (b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},d||b.opt.hidecursordelay))};this.noticeCursor=function(d,c,f){b.showCursor(c,f);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),h:Math.max(document.body.scrollHeight,
//     document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&b.hideRail().hideRailHr(),!1;!b.hidden&&
//     !b.visibility&&b.showRail().showRailHr()}var f=b.page.maxh,g=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==f&&b.page.maxw==g&&b.view.w==e){if(b.ispage)return b;f=b.win.offset();if(b.lastposition&&(g=b.lastposition,g.top==f.top&&g.left==f.left))return b;b.lastposition=f}0==
//     b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():!b.hidden&&!b.railh.visibility&&b.showRailHr();
//     b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=b.view.h-b.cursorheight-b.cursor.hborder;
//     b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),b.scroll.x=Math.round(b.getScrollLeft()*
//         (1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(d){d=isNaN(d)?30:d;b.delayed("resize",b.resize,d);return b};this._bind=function(d,c,f,g){b.events.push({e:d,n:c,f:f,b:g,q:!1});d.addEventListener?d.addEventListener(c,f,g||!1):d.attachEvent?d.attachEvent("on"+c,f):d["on"+c]=f};this.jqbind=function(d,c,f){b.events.push({e:d,n:c,f:f,q:!0});e(d).bind(c,f)};
//     this.bind=function(d,c,f,e){var k="jquery"in d?d[0]:d;"mousewheel"==c?"onwheel"in b.win?b._bind(k,"wheel",f,e||!1):(d="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",q(k,d,f,e||!1),"DOMMouseScroll"==d&&q(k,"MozMousePixelScroll",f,e||!1)):k.addEventListener?(g.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(k,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var d=b.touches.length?b.touches[0]:b;d.original=
//         b;f.call(this,d)}}else b.changedTouches&&(d=b.changedTouches[0],d.original=b,f.call(this,d))},e||!1),b._bind(k,c,f,e||!1),g.cantouch&&"mouseup"==c&&b._bind(k,"touchcancel",f,e||!1)):b._bind(k,c,function(d){if((d=d||window.event||!1)&&d.srcElement)d.target=d.srcElement;"pageY"in d||(d.pageX=d.clientX+document.documentElement.scrollLeft,d.pageY=d.clientY+document.documentElement.scrollTop);return!1===f.call(k,d)||!1===e?b.cancelEvent(d):!0})};this._unbind=function(b,c,f,g){b.removeEventListener?b.removeEventListener(c,
//         f,g):b.detachEvent?b.detachEvent("on"+c,f):b["on"+c]=!1};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=function(b){b=b.original?
//         b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=function(){b.visibility=
//         !1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();b.unbindAll();g.isie9&&
//     b.win[0].detachEvent("onpropertychange",b.onAttributeChange);!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=null;b.cursor&&b.cursor.remove();b.cursorh&&b.cursorh.remove();b.rail&&b.rail.remove();b.railh&&b.railh.remove();b.zoom&&b.zoom.remove();for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}b.saved=!1;b.me.data("__nicescroll","");var f=e.nicescroll;f.each(function(d){if(this&&this.id===
//         b.id){delete f[d];for(var c=++d;c<f.length;c++,d++)f[d]=f[c];f.length--;f.length&&delete f[f.length]}});for(var k in b)b[k]=null,delete b[k];b=null};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;
//         for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(c))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b);if(/fixed|absolute/.test(c.css("position")))return c;var f=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(f)&&
//         b.clientHeight!=b.scrollHeight||0<c.getNiceScroll().length)return c;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(d){if(b.locked)return b.debounced("checkunlock",b.resize,250),!0;if(b.rail.drag)return b.cancelEvent(d);"auto"==b.opt.oneaxismousemode&&0!=d.deltaX&&(b.opt.oneaxismousemode=!1);if(b.opt.oneaxismousemode&&0==d.deltaX&&!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):!0;var c=+new Date,f=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&
//     (b.nativescrollingarea=b.isScrollable(d),f=!0);b.checkarea=c;if(b.nativescrollingarea)return!0;if(d=t(d,!1,f))b.checkarea=0;return d};this.onmousewheelhr=function(d){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(d);var c=+new Date,f=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),f=!0);b.checkarea=c;return b.nativescrollingarea?!0:b.locked?b.cancelEvent(d):t(d,!0,f)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();
//         b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(d){var c=Math.round(10*b.opt.scrollspeed);d=Math.min(c,Math.round(d/20*b.opt.scrollspeed));return 20<d?d:0};b.opt.smoothscroll?b.ishwscroll&&g.hastransition&&b.opt.usetransition?(this.prepareTransition=function(d,c){var f=c?20<d?d:0:b.getTransitionSpeed(d),e=f?g.prefixstyle+"transform "+f+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=e)b.lasttransitionstyle=
//         e,b.doc.css(g.transitionstyle,e);return f},this.doScrollLeft=function(c,g){var f=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,g){var f=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(f,c,g)},this.doScrollPos=function(c,e,f){var k=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-k)*(e-k)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>e?e=0:e>b.page.maxh&&(e=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));
//         if(b.scrollrunning&&c==b.newscrollx&&e==b.newscrolly)return!1;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=f||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var f=b.getScrollTop(),k=b.getScrollLeft(),l,h;l=c-k;h=e-f;l=Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(h,2)));l=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:b.getTransitionSpeed(l);b.newscrollspeed&&1>=b.newscrollspeed&&(l*=b.newscrollspeed);b.prepareTransition(l,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);
//             0<l&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:k,y:f},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:l}),g.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,g.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),b.scrollendtrapped=setTimeout(b.onScrollEnd,l)),b.timerscroll={bz:new BezierClass(f,b.newscrolly,l,0,0,0.58,1),bh:new BezierClass(k,b.newscrollx,l,0,0,0.58,1)},b.cursorfreezed||
//                 (b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=!1;g.transitionend||clearTimeout(g.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,g.transitionend,
//         b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,g.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),e=b.getScrollLeft();b.setScrollTop(c);b.railh&&
//     b.setScrollLeft(e);b.noticeCursor(!1,c,e);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>e?e=0:e>b.page.maxw&&(e=b.page.maxw);if(c!=b.newscrolly||e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=!1}):(this.doScrollLeft=function(c,g){var f=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           g){var f=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(f,c,g)},this.doScrollPos=function(c,g,f){function e(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(p=1-p)return b.timer=v(e)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,f=d-sy;if(0>f&&d<b.newscrolly||0<f&&d>b.newscrolly)d=b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var g=sx=b.getScrollLeft();if(b.dst.ax){g=b.bzscroll?b.dst.px+b.bzscroll.getNow()*
//         b.dst.ax:b.newscrollx;f=g-sx;if(0>f&&g<b.newscrollx||0<f&&g>b.newscrollx)g=b.newscrollx;b.setScrollLeft(g);g==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>g?g=0:g>b.page.maxw&&(g=b.page.maxw),g!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(g,d):b.onscrollend&&b.onscrollend.call(b,{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=v(e)||1}g="undefined"==typeof g||!1===g?b.getScrollTop(!0):
//         g;if(b.timer&&b.newscrolly==g&&b.newscrollx==c)return!0;b.timer&&w(b.timer);b.timer=0;var k=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-k)*(g-k)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();b.newscrolly=g;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-l;b.dst.y=
//         g-k;b.dst.px=l;b.dst.py=k;var h=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/h;b.dst.ay=b.dst.y/h;var m=0,q=h;0==b.dst.x?(m=k,q=g,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(m=l,q=c,b.dst.ax=1,b.dst.px=0);h=b.getTransitionSpeed(h);f&&1>=f&&(h*=f);b.bzscroll=0<h?b.bzscroll?b.bzscroll.update(q,h):new BezierClass(m,q,h,0,1,0,1):!1;if(!b.timer){(k==b.page.maxh&&g>=b.page.maxh||l==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var p=1;b.cancelAnimationFrame=!1;b.timer=1;
//         b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:l,y:k},request:{x:c,y:g},end:{x:b.newscrollx,y:b.newscrolly},speed:h});e();(k==b.page.maxh&&g>=k||l==b.page.maxw&&c>=l)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&w(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,g){var f=b.getScrollTop();b.doScrollPos(c,f,g)},this.doScrollTop=function(c,g){var f=b.getScrollLeft();b.doScrollPos(f,
//         c,g)},this.doScrollPos=function(c,g,f){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var k=g>b.page.maxh?b.page.maxh:g;0>k&&(k=0);b.synched("scroll",function(){b.setScrollTop(k);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,g){var f=0,f=g?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.h/2);f<-e?f=-e:f>b.page.maxh+e&&(f=b.page.maxh+e)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>f&&
//         0>=py)return b.noticeCursor();if(f>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(f)};this.doScrollLeftBy=function(c,g){var f=0,f=g?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.w/2);f<-e?f=-e:f>b.page.maxw+e&&(f=b.page.maxw+e)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);if(0>f&&0>=px||f>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(f)};this.doScrollTo=
//         function(c,g){g&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(c){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=
//         !0;b.zoomrestore={style:{}};var k="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),f=b.win[0].style,l;for(l in k){var h=k[l];b.zoomrestore.style[h]="undefined"!=typeof f[h]?f[h]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-b.win.height()};g.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));
//         b.win.css({position:g.isios4?"absolute":"fixed",top:0,left:0,"z-index":y+100,margin:"0px"});k=b.win.css("backgroundColor");(""==k||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(k))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":y+101});b.zoom.css({"z-index":y+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),
//         g.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});
//         b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},J=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,l){c.stop();var h=c.time();c.steptime=0;c.lasttime=h;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=l;c.lastscrollx=-1;c.lastscrolly=
//     -1};this.update=function(e,l){var h=c.time();c.steptime=h-c.lasttime;c.lasttime=h;var h=l-c.lasty,t=e-c.lastx,b=c.nc.getScrollTop(),p=c.nc.getScrollLeft(),b=b+h,p=p+t;c.snapx=0>p||p>c.nc.page.maxw;c.snapy=0>b||b>c.nc.page.maxh;c.speedx=t;c.speedy=h;c.lastx=e;c.lasty=l};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,l){var h=!1;0>l?(l=0,h=!0):l>c.nc.page.maxh&&(l=c.nc.page.maxh,h=!0);0>e?(e=0,h=
//     !0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,h=!0);h&&c.nc.doScrollPos(e,l,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var l=c.time(),h=e?l+e:c.lasttime;e=c.nc.getScrollLeft();var t=c.nc.getScrollTop(),b=c.nc.page.maxh,p=c.nc.page.maxw;c.speedx=0<p?Math.min(60,c.speedx):0;c.speedy=0<b?Math.min(60,c.speedy):0;h=h&&60>=l-h;if(0>t||t>b||0>e||e>p)h=!1;e=c.speedx&&h?c.speedx:!1;if(c.speedy&&h&&c.speedy||e){var g=Math.max(16,c.steptime);50<g&&(e=g/50,c.speedx*=e,c.speedy*=e,g=50);c.demulxy=0;c.lastscrollx=
//     c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var s=c.lastscrollx,u=c.lastscrolly,d=function(){var e=600<c.time()-l?0.04:0.02;if(c.speedx&&(s=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=s,0>s||s>p))e=0.1;if(c.speedy&&(u=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=u,0>u||u>b))e=0.1;c.demulxy=Math.min(1,c.demulxy+e);c.nc.synched("domomentum2d",function(){c.speedx&&(c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=
//     s,c.nc.setScrollLeft(s));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=u,c.nc.setScrollTop(u));c.timer||(c.nc.hideCursor(),c.doSnapy(s,u))});1>c.demulxy?c.timer=setTimeout(d,g):(c.stop(),c.nc.hideCursor(),c.doSnapy(s,u))};d()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},B=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(h,c,k){return(c=e.data(h,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():B.call(h)},set:function(h,c){var k=e.data(h,"__nicescroll")||!1;k&&k.ishwscroll?
//     k.setScrollTop(parseInt(c)):B.call(h,c);return this}};e.fn.scrollTop=function(h){if("undefined"==typeof h){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():B.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(h)):B.call(e(this),h)})};var C=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(h,c,k){return(c=e.data(h,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollLeft():C.call(h)},set:function(h,
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             c){var k=e.data(h,"__nicescroll")||!1;k&&k.ishwscroll?k.setScrollLeft(parseInt(c)):C.call(h,c);return this}};e.fn.scrollLeft=function(h){if("undefined"==typeof h){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():C.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(h)):C.call(e(this),h)})};var D=function(h){var c=this;this.length=0;this.name="nicescrollarray";this.each=function(e){for(var h=
//     0,k=0;h<c.length;h++)e.call(c[h],k++);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(h)for(a=0;a<h.length;a++){var k=e.data(h[a],"__nicescroll")||!1;k&&(this[this.length]=k,this.length++)}return this};(function(e,c,k){for(var l=0;l<c.length;l++)k(e,c[l])})(D.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,e)})}});e.fn.getNiceScroll=
//     function(h){return"undefined"==typeof h?new D(this):this[h]&&e.data(this[h],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(h){return e.data(h,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(h,c){"undefined"==typeof c&&("object"==typeof h&&!("jquery"in h))&&(c=h,h=!1);var k=new D;"undefined"==typeof c&&(c={});h&&(c.doc=e(h),c.win=e(this));var l=!("doc"in c);!l&&!("win"in c)&&(c.win=e(this));this.each(function(){var h=e(this).data("__nicescroll")||!1;h||(c.doc=l?e(this):c.doc,h=new Q(c,
//     e(this)),e(this).data("__nicescroll",h));k.push(h)});return 1==k.length?k[0]:k};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new D,e.nicescroll.options=I)})(jQuery);
style = "overflow:auto ";

/***/ }),

/***/ "./public/js/jquery.scrollTo.min.js":
/*!******************************************!*\
  !*** ./public/js/jquery.scrollTo.min.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2007-2013 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.6
 */
;

(function ($) {
  var h = $.scrollTo = function (a, b, c) {
    $(window).scrollTo(a, b, c);
  };

  h.defaults = {
    axis: 'xy',
    duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
    limit: true
  };

  h.window = function (a) {
    return $(window)._scrollable();
  };

  $.fn._scrollable = function () {
    return this.map(function () {
      var a = this,
          isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
      if (!isWin) return a;
      var b = (a.contentWindow || a).document || a.ownerDocument || a;
      return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement;
    });
  };

  $.fn.scrollTo = function (e, f, g) {
    if (_typeof(f) == 'object') {
      g = f;
      f = 0;
    }

    if (typeof g == 'function') g = {
      onAfter: g
    };
    if (e == 'max') e = 9e9;
    g = $.extend({}, h.defaults, g);
    f = f || g.duration;
    g.queue = g.queue && g.axis.length > 1;
    if (g.queue) f /= 2;
    g.offset = both(g.offset);
    g.over = both(g.over);
    return this._scrollable().each(function () {
      if (e == null) return;
      var d = this,
          $elem = $(d),
          targ = e,
          toff,
          attr = {},
          win = $elem.is('html,body');

      switch (_typeof(targ)) {
        case 'number':
        case 'string':
          if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
            targ = both(targ);
            break;
          }

          targ = $(targ, this);
          if (!targ.length) return;

        case 'object':
          if (targ.is || targ.style) toff = (targ = $(targ)).offset();
      }

      $.each(g.axis.split(''), function (i, a) {
        var b = a == 'x' ? 'Left' : 'Top',
            pos = b.toLowerCase(),
            key = 'scroll' + b,
            old = d[key],
            max = h.max(d, a);

        if (toff) {
          attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);

          if (g.margin) {
            attr[key] -= parseInt(targ.css('margin' + b)) || 0;
            attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0;
          }

          attr[key] += g.offset[pos] || 0;
          if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos];
        } else {
          var c = targ[pos];
          attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c;
        }

        if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);

        if (!i && g.queue) {
          if (old != attr[key]) animate(g.onAfterFirst);
          delete attr[key];
        }
      });
      animate(g.onAfter);

      function animate(a) {
        $elem.animate(attr, f, g.easing, a && function () {
          a.call(this, targ, g);
        });
      }
    }).end();
  };

  h.max = function (a, b) {
    var c = b == 'x' ? 'Width' : 'Height',
        scroll = 'scroll' + c;
    if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
    var d = 'client' + c,
        html = a.ownerDocument.documentElement,
        body = a.ownerDocument.body;
    return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d]);
  };

  function both(a) {
    return _typeof(a) == 'object' ? a : {
      top: a,
      left: a
    };
  }
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./public/js/jquery.sparkline.js":
/*!***************************************!*\
  !*** ./public/js/jquery.sparkline.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
*
* jquery.sparkline.js
*
* v2.1.2
* (c) Splunk, Inc
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
*
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
*
* Copyright (c) 2012, Splunk Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright notice,
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice,
*       this list of conditions and the following disclaimer in the documentation
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may
*       be used to endorse or promote products derived from this software without
*       specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* Usage:
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers or null values
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
*
* Values can also be specified in an HTML comment, or as a values attribute:
*    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
*    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
*    $('.sparkline').sparkline();
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* By default, options should be passed in as teh second argument to the sparkline function:
*   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
*
* Options can also be set by passing them on the tag itself.  This feature is disabled by default though
* as there's a slight performance overhead:
*   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
*   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
* Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionPrefix)
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
*   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
*   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
*   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
*   enableTagOptions - Whether to check tags for sparkline options
*   tagOptionPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
*   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
*           hidden dom element, avoding a browser reflow
*   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
*       making the plugin perform much like it did in 1.x
*   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
*   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
*       defaults to false (highlights enabled)
*   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
*   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
*   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
*   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
*   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
*   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
*       callback is given arguments of (sparkline, options, fields)
*   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
*   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
*       to control the format of the tooltip
*   tooltipPrefix - A string to prepend to each field displayed in a tooltip
*   tooltipSuffix - A string to append to each field displayed in a tooltip
*   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
*   tooltipValueLookups - An object or range map to map field values to tooltip strings
*       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
*   numberFormatter - Optional callback for formatting numbers in tooltips
*   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
*   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
*   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       lineWidth - Width of line in pixels
*       normalRangeMin
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       drawNormalOnTop - Draw the normal range above the chart fill color if true
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
*       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
*       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       zeroColor - Color of bars with zero values
*       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
*       barWidth - Width of bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
*       borderColor - Color to use for the pie chart border - Defaults to #000
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*
*
*
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/

/*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */
(function (document, Math, undefined) {
  // performance/minified-size optimization
  (function (factory) {
    if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
  })(function ($) {
    'use strict';

    var UNSET_OPTION = {},
        getDefaults,
        createClass,
        SPFormat,
        clipval,
        quartile,
        normalizeValue,
        normalizeValues,
        remove,
        isNumber,
        all,
        sum,
        addCSS,
        ensureArray,
        formatNumber,
        RangeMap,
        MouseHandler,
        Tooltip,
        barHighlightMixin,
        line,
        bar,
        tristate,
        discrete,
        bullet,
        pie,
        box,
        defaultStyles,
        initStyles,
        VShape,
        VCanvas_base,
        VCanvas_canvas,
        VCanvas_vml,
        pending,
        shapeCount = 0;
    /**
     * Default configuration settings
     */

    getDefaults = function getDefaults() {
      return {
        // Settings common to most/all chart types
        common: {
          type: 'line',
          lineColor: '#00f',
          fillColor: '#cdf',
          defaultPixelsPerValue: 3,
          width: 'auto',
          height: 'auto',
          composite: false,
          tagValuesAttribute: 'values',
          tagOptionsPrefix: 'spark',
          enableTagOptions: false,
          enableHighlight: true,
          highlightLighten: 1.4,
          tooltipSkipNull: true,
          tooltipPrefix: '',
          tooltipSuffix: '',
          disableHiddenCheck: false,
          numberFormatter: false,
          numberDigitGroupCount: 3,
          numberDigitGroupSep: ',',
          numberDecimalMark: '.',
          disableTooltips: false,
          disableInteraction: false
        },
        // Defaults for line charts
        line: {
          spotColor: '#f80',
          highlightSpotColor: '#5f5',
          highlightLineColor: '#f22',
          spotRadius: 1.5,
          minSpotColor: '#f80',
          maxSpotColor: '#f80',
          lineWidth: 1,
          normalRangeMin: undefined,
          normalRangeMax: undefined,
          normalRangeColor: '#ccc',
          drawNormalOnTop: false,
          chartRangeMin: undefined,
          chartRangeMax: undefined,
          chartRangeMinX: undefined,
          chartRangeMaxX: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
        },
        // Defaults for bar charts
        bar: {
          barColor: '#3366cc',
          negBarColor: '#f44',
          stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
          zeroColor: undefined,
          nullColor: undefined,
          zeroAxis: true,
          barWidth: 4,
          barSpacing: 1,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          colorMap: undefined,
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
        },
        // Defaults for tristate charts
        tristate: {
          barWidth: 4,
          barSpacing: 1,
          posBarColor: '#6f6',
          negBarColor: '#f44',
          zeroBarColor: '#999',
          colorMap: {},
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
          tooltipValueLookups: {
            map: {
              '-1': 'Loss',
              '0': 'Draw',
              '1': 'Win'
            }
          }
        },
        // Defaults for discrete charts
        discrete: {
          lineHeight: 'auto',
          thresholdColor: undefined,
          thresholdValue: 0,
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          chartRangeClip: false,
          tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
        },
        // Defaults for bullet charts
        bullet: {
          targetColor: '#f33',
          targetWidth: 3,
          // width of the target bar in pixels
          performanceColor: '#33f',
          rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
          base: undefined,
          // set this to a number to change the base start number
          tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
          tooltipValueLookups: {
            fields: {
              r: 'Range',
              p: 'Performance',
              t: 'Target'
            }
          }
        },
        // Defaults for pie charts
        pie: {
          offset: 0,
          sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00', '#dd4477', '#0099c6', '#990099'],
          borderWidth: 0,
          borderColor: '#000',
          tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
        },
        // Defaults for box plots
        box: {
          raw: false,
          boxLineColor: '#000',
          boxFillColor: '#cdf',
          whiskerColor: '#000',
          outlierLineColor: '#333',
          outlierFillColor: '#fff',
          medianColor: '#f00',
          showOutliers: true,
          outlierIQR: 1.5,
          spotRadius: 1.5,
          target: undefined,
          targetColor: '#4a2',
          chartRangeMax: undefined,
          chartRangeMin: undefined,
          tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
          tooltipFormatFieldlistKey: 'field',
          tooltipValueLookups: {
            fields: {
              lq: 'Lower Quartile',
              med: 'Median',
              uq: 'Upper Quartile',
              lo: 'Left Outlier',
              ro: 'Right Outlier',
              lw: 'Left Whisker',
              rw: 'Right Whisker'
            }
          }
        }
      };
    }; // You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
    // tooltip modified by westilian:jaman


    defaultStyles = '.jqstooltip { ' + 'position: absolute;' + 'left: 0px;' + 'top: 0px;' + 'display: block;' + 'visibility: hidden;' + 'background: rgb(0, 0, 0) transparent;' + 'background-color: rgba(0,0,0,0.6);' + 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' + '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' + 'color: white;' + 'font: 10px arial, san serif;' + 'text-align: left;' + 'white-space: nowrap;' + 'border: 1px solid white;' + 'z-index: 10000;' + '}' + '.jqsfield { ' + 'color: white;' + 'padding: 5px 5px 8px 5px;' + 'font: 10px arial, san serif;' + 'text-align: left;' + '}';
    /**
     * Utilities
     */

    createClass = function createClass()
    /* [baseclass, [mixin, ...]], definition */
    {
      var Class, args;

      Class = function Class() {
        this.init.apply(this, arguments);
      };

      if (arguments.length > 1) {
        if (arguments[0]) {
          Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
          Class._super = arguments[0].prototype;
        } else {
          Class.prototype = arguments[arguments.length - 1];
        }

        if (arguments.length > 2) {
          args = Array.prototype.slice.call(arguments, 1, -1);
          args.unshift(Class.prototype);
          $.extend.apply($, args);
        }
      } else {
        Class.prototype = arguments[0];
      }

      Class.prototype.cls = Class;
      return Class;
    };
    /**
     * Wraps a format string for tooltips
     * {{x}}
     * {{x.2}
     * {{x:months}}
     */


    $.SPFormatClass = SPFormat = createClass({
      fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
      precre: /(\w+)\.(\d+)/,
      init: function init(format, fclass) {
        this.format = format;
        this.fclass = fclass;
      },
      render: function render(fieldset, lookups, options) {
        var self = this,
            fields = fieldset,
            match,
            token,
            lookupkey,
            fieldvalue,
            prec;
        return this.format.replace(this.fre, function () {
          var lookup;
          token = arguments[1];
          lookupkey = arguments[3];
          match = self.precre.exec(token);

          if (match) {
            prec = match[2];
            token = match[1];
          } else {
            prec = false;
          }

          fieldvalue = fields[token];

          if (fieldvalue === undefined) {
            return '';
          }

          if (lookupkey && lookups && lookups[lookupkey]) {
            lookup = lookups[lookupkey];

            if (lookup.get) {
              // RangeMap
              return lookups[lookupkey].get(fieldvalue) || fieldvalue;
            } else {
              return lookups[lookupkey][fieldvalue] || fieldvalue;
            }
          }

          if (isNumber(fieldvalue)) {
            if (options.get('numberFormatter')) {
              fieldvalue = options.get('numberFormatter')(fieldvalue);
            } else {
              fieldvalue = formatNumber(fieldvalue, prec, options.get('numberDigitGroupCount'), options.get('numberDigitGroupSep'), options.get('numberDecimalMark'));
            }
          }

          return fieldvalue;
        });
      }
    }); // convience method to avoid needing the new operator

    $.spformat = function (format, fclass) {
      return new SPFormat(format, fclass);
    };

    clipval = function clipval(val, min, max) {
      if (val < min) {
        return min;
      }

      if (val > max) {
        return max;
      }

      return val;
    };

    quartile = function quartile(values, q) {
      var vl;

      if (q === 2) {
        vl = Math.floor(values.length / 2);
        return values.length % 2 ? values[vl] : (values[vl - 1] + values[vl]) / 2;
      } else {
        if (values.length % 2) {
          // odd
          vl = (values.length * q + q) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        } else {
          //even
          vl = (values.length * q + 2) / 4;
          return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl - 1];
        }
      }
    };

    normalizeValue = function normalizeValue(val) {
      var nf;

      switch (val) {
        case 'undefined':
          val = undefined;
          break;

        case 'null':
          val = null;
          break;

        case 'true':
          val = true;
          break;

        case 'false':
          val = false;
          break;

        default:
          nf = parseFloat(val);

          if (val == nf) {
            val = nf;
          }

      }

      return val;
    };

    normalizeValues = function normalizeValues(vals) {
      var i,
          result = [];

      for (i = vals.length; i--;) {
        result[i] = normalizeValue(vals[i]);
      }

      return result;
    };

    remove = function remove(vals, filter) {
      var i,
          vl,
          result = [];

      for (i = 0, vl = vals.length; i < vl; i++) {
        if (vals[i] !== filter) {
          result.push(vals[i]);
        }
      }

      return result;
    };

    isNumber = function isNumber(num) {
      return !isNaN(parseFloat(num)) && isFinite(num);
    };

    formatNumber = function formatNumber(num, prec, groupsize, groupsep, decsep) {
      var p, i;
      num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
      p = (p = $.inArray('.', num)) < 0 ? num.length : p;

      if (p < num.length) {
        num[p] = decsep;
      }

      for (i = p - groupsize; i > 0; i -= groupsize) {
        num.splice(i, 0, groupsep);
      }

      return num.join('');
    }; // determine if all values of an array match a value
    // returns true if the array is empty


    all = function all(val, arr, ignoreNull) {
      var i;

      for (i = arr.length; i--;) {
        if (ignoreNull && arr[i] === null) continue;

        if (arr[i] !== val) {
          return false;
        }
      }

      return true;
    }; // sums the numeric values in an array, ignoring other values


    sum = function sum(vals) {
      var total = 0,
          i;

      for (i = vals.length; i--;) {
        total += typeof vals[i] === 'number' ? vals[i] : 0;
      }

      return total;
    };

    ensureArray = function ensureArray(val) {
      return $.isArray(val) ? val : [val];
    }; // http://paulirish.com/2008/bookmarklet-inject-new-css-rules/


    addCSS = function addCSS(css) {
      var tag; //if ('\v' == 'v') /* ie only */ {

      if (document.createStyleSheet) {
        document.createStyleSheet().cssText = css;
      } else {
        tag = document.createElement('style');
        tag.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(tag);
        tag[typeof document.body.style.WebkitAppearance == 'string' ?
        /* webkit only */
        'innerText' : 'innerHTML'] = css;
      }
    }; // Provide a cross-browser interface to a few simple drawing primitives


    $.fn.simpledraw = function (width, height, useExisting, interact) {
      var target, mhandler;

      if (useExisting && (target = this.data('_jqs_vcanvas'))) {
        return target;
      }

      if ($.fn.sparkline.canvas === false) {
        // We've already determined that neither Canvas nor VML are available
        return false;
      } else if ($.fn.sparkline.canvas === undefined) {
        // No function defined yet -- need to see if we support Canvas or VML
        var el = document.createElement('canvas');

        if (!!(el.getContext && el.getContext('2d'))) {
          // Canvas is available
          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_canvas(width, height, target, interact);
          };
        } else if (document.namespaces && !document.namespaces.v) {
          // VML is available
          document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');

          $.fn.sparkline.canvas = function (width, height, target, interact) {
            return new VCanvas_vml(width, height, target);
          };
        } else {
          // Neither Canvas nor VML are available
          $.fn.sparkline.canvas = false;
          return false;
        }
      }

      if (width === undefined) {
        width = $(this).innerWidth();
      }

      if (height === undefined) {
        height = $(this).innerHeight();
      }

      target = $.fn.sparkline.canvas(width, height, this, interact);
      mhandler = $(this).data('_jqs_mhandler');

      if (mhandler) {
        mhandler.registerCanvas(target);
      }

      return target;
    };

    $.fn.cleardraw = function () {
      var target = this.data('_jqs_vcanvas');

      if (target) {
        target.reset();
      }
    };

    $.RangeMapClass = RangeMap = createClass({
      init: function init(map) {
        var key,
            range,
            rangelist = [];

        for (key in map) {
          if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
            range = key.split(':');
            range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
            range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
            range[2] = map[key];
            rangelist.push(range);
          }
        }

        this.map = map;
        this.rangelist = rangelist || false;
      },
      get: function get(value) {
        var rangelist = this.rangelist,
            i,
            range,
            result;

        if ((result = this.map[value]) !== undefined) {
          return result;
        }

        if (rangelist) {
          for (i = rangelist.length; i--;) {
            range = rangelist[i];

            if (range[0] <= value && range[1] >= value) {
              return range[2];
            }
          }
        }

        return undefined;
      }
    }); // Convenience function

    $.range_map = function (map) {
      return new RangeMap(map);
    };

    MouseHandler = createClass({
      init: function init(el, options) {
        var $el = $(el);
        this.$el = $el;
        this.options = options;
        this.currentPageX = 0;
        this.currentPageY = 0;
        this.el = el;
        this.splist = [];
        this.tooltip = null;
        this.over = false;
        this.displayTooltips = !options.get('disableTooltips');
        this.highlightEnabled = !options.get('disableHighlight');
      },
      registerSparkline: function registerSparkline(sp) {
        this.splist.push(sp);

        if (this.over) {
          this.updateDisplay();
        }
      },
      registerCanvas: function registerCanvas(canvas) {
        var $canvas = $(canvas.canvas);
        this.canvas = canvas;
        this.$canvas = $canvas;
        $canvas.mouseenter($.proxy(this.mouseenter, this));
        $canvas.mouseleave($.proxy(this.mouseleave, this));
        $canvas.click($.proxy(this.mouseclick, this));
      },
      reset: function reset(removeTooltip) {
        this.splist = [];

        if (this.tooltip && removeTooltip) {
          this.tooltip.remove();
          this.tooltip = undefined;
        }
      },
      mouseclick: function mouseclick(e) {
        var clickEvent = $.Event('sparklineClick');
        clickEvent.originalEvent = e;
        clickEvent.sparklines = this.splist;
        this.$el.trigger(clickEvent);
      },
      mouseenter: function mouseenter(e) {
        $(document.body).unbind('mousemove.jqs');
        $(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
        this.over = true;
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (!this.tooltip && this.displayTooltips) {
          this.tooltip = new Tooltip(this.options);
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      mouseleave: function mouseleave() {
        $(document.body).unbind('mousemove.jqs');
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            sp,
            i;
        this.over = false;
        this.currentEl = null;

        if (this.tooltip) {
          this.tooltip.remove();
          this.tooltip = null;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];

          if (sp.clearRegionHighlight()) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          this.canvas.render();
        }
      },
      mousemove: function mousemove(e) {
        this.currentPageX = e.pageX;
        this.currentPageY = e.pageY;
        this.currentEl = e.target;

        if (this.tooltip) {
          this.tooltip.updatePosition(e.pageX, e.pageY);
        }

        this.updateDisplay();
      },
      updateDisplay: function updateDisplay() {
        var splist = this.splist,
            spcount = splist.length,
            needsRefresh = false,
            offset = this.$canvas.offset(),
            localX = this.currentPageX - offset.left,
            localY = this.currentPageY - offset.top,
            tooltiphtml,
            sp,
            i,
            result,
            changeEvent;

        if (!this.over) {
          return;
        }

        for (i = 0; i < spcount; i++) {
          sp = splist[i];
          result = sp.setRegionHighlight(this.currentEl, localX, localY);

          if (result) {
            needsRefresh = true;
          }
        }

        if (needsRefresh) {
          changeEvent = $.Event('sparklineRegionChange');
          changeEvent.sparklines = this.splist;
          this.$el.trigger(changeEvent);

          if (this.tooltip) {
            tooltiphtml = '';

            for (i = 0; i < spcount; i++) {
              sp = splist[i];
              tooltiphtml += sp.getCurrentRegionTooltip();
            }

            this.tooltip.setContent(tooltiphtml);
          }

          if (!this.disableHighlight) {
            this.canvas.render();
          }
        }

        if (result === null) {
          this.mouseleave();
        }
      }
    });
    Tooltip = createClass({
      sizeStyle: 'position: static !important;' + 'display: block !important;' + 'visibility: hidden !important;' + 'float: left !important;',
      init: function init(options) {
        var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
            sizetipStyle = this.sizeStyle,
            offset;
        this.container = options.get('tooltipContainer') || document.body;
        this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
        this.tooltipOffsetY = options.get('tooltipOffsetY', 12); // remove any previous lingering tooltip

        $('#jqssizetip').remove();
        $('#jqstooltip').remove();
        this.sizetip = $('<div/>', {
          id: 'jqssizetip',
          style: sizetipStyle,
          'class': tooltipClassname
        });
        this.tooltip = $('<div/>', {
          id: 'jqstooltip',
          'class': tooltipClassname
        }).appendTo(this.container); // account for the container's location

        offset = this.tooltip.offset();
        this.offsetLeft = offset.left;
        this.offsetTop = offset.top;
        this.hidden = true;
        $(window).unbind('resize.jqs scroll.jqs');
        $(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
        this.updateWindowDims();
      },
      updateWindowDims: function updateWindowDims() {
        this.scrollTop = $(window).scrollTop();
        this.scrollLeft = $(window).scrollLeft();
        this.scrollRight = this.scrollLeft + $(window).width();
        this.updatePosition();
      },
      getSize: function getSize(content) {
        this.sizetip.html(content).appendTo(this.container);
        this.width = this.sizetip.width() + 1;
        this.height = this.sizetip.height();
        this.sizetip.remove();
      },
      setContent: function setContent(content) {
        if (!content) {
          this.tooltip.css('visibility', 'hidden');
          this.hidden = true;
          return;
        }

        this.getSize(content);
        this.tooltip.html(content).css({
          'width': this.width,
          'height': this.height,
          'visibility': 'visible'
        });

        if (this.hidden) {
          this.hidden = false;
          this.updatePosition();
        }
      },
      updatePosition: function updatePosition(x, y) {
        if (x === undefined) {
          if (this.mousex === undefined) {
            return;
          }

          x = this.mousex - this.offsetLeft;
          y = this.mousey - this.offsetTop;
        } else {
          this.mousex = x = x - this.offsetLeft;
          this.mousey = y = y - this.offsetTop;
        }

        if (!this.height || !this.width || this.hidden) {
          return;
        }

        y -= this.height + this.tooltipOffsetY;
        x += this.tooltipOffsetX;

        if (y < this.scrollTop) {
          y = this.scrollTop;
        }

        if (x < this.scrollLeft) {
          x = this.scrollLeft;
        } else if (x + this.width > this.scrollRight) {
          x = this.scrollRight - this.width;
        }

        this.tooltip.css({
          'left': x,
          'top': y
        });
      },
      remove: function remove() {
        this.tooltip.remove();
        this.sizetip.remove();
        this.sizetip = this.tooltip = undefined;
        $(window).unbind('resize.jqs scroll.jqs');
      }
    });

    initStyles = function initStyles() {
      addCSS(defaultStyles);
    };

    $(initStyles);
    pending = [];

    $.fn.sparkline = function (userValues, userOptions) {
      return this.each(function () {
        var options = new $.fn.sparkline.options(this, userOptions),
            $this = $(this),
            render,
            i;

        render = function render() {
          var values, width, height, tmp, mhandler, sp, vals;

          if (userValues === 'html' || userValues === undefined) {
            vals = this.getAttribute(options.get('tagValuesAttribute'));

            if (vals === undefined || vals === null) {
              vals = $this.html();
            }

            values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
          } else {
            values = userValues;
          }

          width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');

          if (options.get('height') === 'auto') {
            if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
              // must be a better way to get the line height
              tmp = document.createElement('span');
              tmp.innerHTML = 'a';
              $this.html(tmp);
              height = $(tmp).innerHeight() || $(tmp).height();
              $(tmp).remove();
              tmp = null;
            }
          } else {
            height = options.get('height');
          }

          if (!options.get('disableInteraction')) {
            mhandler = $.data(this, '_jqs_mhandler');

            if (!mhandler) {
              mhandler = new MouseHandler(this, options);
              $.data(this, '_jqs_mhandler', mhandler);
            } else if (!options.get('composite')) {
              mhandler.reset();
            }
          } else {
            mhandler = false;
          }

          if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
            if (!$.data(this, '_jqs_errnotify')) {
              alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
              $.data(this, '_jqs_errnotify', true);
            }

            return;
          }

          sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);
          sp.render();

          if (mhandler) {
            mhandler.registerSparkline(sp);
          }
        };

        if ($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden') || !$(this).parents('body').length) {
          if (!options.get('composite') && $.data(this, '_jqs_pending')) {
            // remove any existing references to the element
            for (i = pending.length; i; i--) {
              if (pending[i - 1][0] == this) {
                pending.splice(i - 1, 1);
              }
            }
          }

          pending.push([this, render]);
          $.data(this, '_jqs_pending', true);
        } else {
          render.call(this);
        }
      });
    };

    $.fn.sparkline.defaults = getDefaults();

    $.sparkline_display_visible = function () {
      var el, i, pl;
      var done = [];

      for (i = 0, pl = pending.length; i < pl; i++) {
        el = pending[i][0];

        if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
          pending[i][1].call(el);
          $.data(pending[i][0], '_jqs_pending', false);
          done.push(i);
        } else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
          // element has been inserted and removed from the DOM
          // If it was not yet inserted into the dom then the .data request
          // will return true.
          // removing from the dom causes the data to be removed.
          $.data(pending[i][0], '_jqs_pending', false);
          done.push(i);
        }
      }

      for (i = done.length; i; i--) {
        pending.splice(done[i - 1], 1);
      }
    };
    /**
     * User option handler
     */


    $.fn.sparkline.options = createClass({
      init: function init(tag, userOptions) {
        var extendedOptions, defaults, base, tagOptionType;
        this.userOptions = userOptions = userOptions || {};
        this.tag = tag;
        this.tagValCache = {};
        defaults = $.fn.sparkline.defaults;
        base = defaults.common;
        this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
        tagOptionType = this.getTagSetting('type');

        if (tagOptionType === UNSET_OPTION) {
          extendedOptions = defaults[userOptions.type || base.type];
        } else {
          extendedOptions = defaults[tagOptionType];
        }

        this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
      },
      getTagSetting: function getTagSetting(key) {
        var prefix = this.tagOptionsPrefix,
            val,
            i,
            pairs,
            keyval;

        if (prefix === false || prefix === undefined) {
          return UNSET_OPTION;
        }

        if (this.tagValCache.hasOwnProperty(key)) {
          val = this.tagValCache.key;
        } else {
          val = this.tag.getAttribute(prefix + key);

          if (val === undefined || val === null) {
            val = UNSET_OPTION;
          } else if (val.substr(0, 1) === '[') {
            val = val.substr(1, val.length - 2).split(',');

            for (i = val.length; i--;) {
              val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
            }
          } else if (val.substr(0, 1) === '{') {
            pairs = val.substr(1, val.length - 2).split(',');
            val = {};

            for (i = pairs.length; i--;) {
              keyval = pairs[i].split(':', 2);
              val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
            }
          } else {
            val = normalizeValue(val);
          }

          this.tagValCache.key = val;
        }

        return val;
      },
      get: function get(key, defaultval) {
        var tagOption = this.getTagSetting(key),
            result;

        if (tagOption !== UNSET_OPTION) {
          return tagOption;
        }

        return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
      }
    });
    $.fn.sparkline._base = createClass({
      disabled: false,
      init: function init(el, values, options, width, height) {
        this.el = el;
        this.$el = $(el);
        this.values = values;
        this.options = options;
        this.width = width;
        this.height = height;
        this.currentRegion = undefined;
      },

      /**
       * Setup the canvas
       */
      initTarget: function initTarget() {
        var interactive = !this.options.get('disableInteraction');

        if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
          this.disabled = true;
        } else {
          this.canvasWidth = this.target.pixelWidth;
          this.canvasHeight = this.target.pixelHeight;
        }
      },

      /**
       * Actually render the chart to the canvas
       */
      render: function render() {
        if (this.disabled) {
          this.el.innerHTML = '';
          return false;
        }

        return true;
      },

      /**
       * Return a region id for a given x/y co-ordinate
       */
      getRegion: function getRegion(x, y) {},

      /**
       * Highlight an item based on the moused-over x,y co-ordinate
       */
      setRegionHighlight: function setRegionHighlight(el, x, y) {
        var currentRegion = this.currentRegion,
            highlightEnabled = !this.options.get('disableHighlight'),
            newRegion;

        if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
          return null;
        }

        newRegion = this.getRegion(el, x, y);

        if (currentRegion !== newRegion) {
          if (currentRegion !== undefined && highlightEnabled) {
            this.removeHighlight();
          }

          this.currentRegion = newRegion;

          if (newRegion !== undefined && highlightEnabled) {
            this.renderHighlight();
          }

          return true;
        }

        return false;
      },

      /**
       * Reset any currently highlighted item
       */
      clearRegionHighlight: function clearRegionHighlight() {
        if (this.currentRegion !== undefined) {
          this.removeHighlight();
          this.currentRegion = undefined;
          return true;
        }

        return false;
      },
      renderHighlight: function renderHighlight() {
        this.changeHighlight(true);
      },
      removeHighlight: function removeHighlight() {
        this.changeHighlight(false);
      },
      changeHighlight: function changeHighlight(highlight) {},

      /**
       * Fetch the HTML to display as a tooltip
       */
      getCurrentRegionTooltip: function getCurrentRegionTooltip() {
        var options = this.options,
            header = '',
            entries = [],
            fields,
            formats,
            formatlen,
            fclass,
            text,
            i,
            showFields,
            showFieldsKey,
            newFields,
            fv,
            formatter,
            format,
            fieldlen,
            j;

        if (this.currentRegion === undefined) {
          return '';
        }

        fields = this.getCurrentRegionFields();
        formatter = options.get('tooltipFormatter');

        if (formatter) {
          return formatter(this, options, fields);
        }

        if (options.get('tooltipChartTitle')) {
          header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
        }

        formats = this.options.get('tooltipFormat');

        if (!formats) {
          return '';
        }

        if (!$.isArray(formats)) {
          formats = [formats];
        }

        if (!$.isArray(fields)) {
          fields = [fields];
        }

        showFields = this.options.get('tooltipFormatFieldlist');
        showFieldsKey = this.options.get('tooltipFormatFieldlistKey');

        if (showFields && showFieldsKey) {
          // user-selected ordering of fields
          newFields = [];

          for (i = fields.length; i--;) {
            fv = fields[i][showFieldsKey];

            if ((j = $.inArray(fv, showFields)) != -1) {
              newFields[j] = fields[i];
            }
          }

          fields = newFields;
        }

        formatlen = formats.length;
        fieldlen = fields.length;

        for (i = 0; i < formatlen; i++) {
          format = formats[i];

          if (typeof format === 'string') {
            format = new SPFormat(format);
          }

          fclass = format.fclass || 'jqsfield';

          for (j = 0; j < fieldlen; j++) {
            if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
              $.extend(fields[j], {
                prefix: options.get('tooltipPrefix'),
                suffix: options.get('tooltipSuffix')
              });
              text = format.render(fields[j], options.get('tooltipValueLookups'), options);
              entries.push('<div class="' + fclass + '">' + text + '</div>');
            }
          }
        }

        if (entries.length) {
          return header + entries.join('\n');
        }

        return '';
      },
      getCurrentRegionFields: function getCurrentRegionFields() {},
      calcHighlightColor: function calcHighlightColor(color, options) {
        var highlightColor = options.get('highlightColor'),
            lighten = options.get('highlightLighten'),
            parse,
            mult,
            rgbnew,
            i;

        if (highlightColor) {
          return highlightColor;
        }

        if (lighten) {
          // extract RGB values
          parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);

          if (parse) {
            rgbnew = [];
            mult = color.length === 4 ? 16 : 1;

            for (i = 0; i < 3; i++) {
              rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
            }

            return 'rgb(' + rgbnew.join(',') + ')';
          }
        }

        return color;
      }
    });
    barHighlightMixin = {
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            target = this.target,
            shapeids = this.regionShapes[currentRegion],
            newShapes; // will be null if the region value was null

        if (shapeids) {
          newShapes = this.renderRegion(currentRegion, highlight);

          if ($.isArray(newShapes) || $.isArray(shapeids)) {
            target.replaceWithShapes(shapeids, newShapes);
            this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
              return newShape.id;
            });
          } else {
            target.replaceWithShape(shapeids, newShapes);
            this.regionShapes[currentRegion] = newShapes.id;
          }
        }
      },
      render: function render() {
        var values = this.values,
            target = this.target,
            regionShapes = this.regionShapes,
            shapes,
            ids,
            i,
            j;

        if (!this.cls._super.render.call(this)) {
          return;
        }

        for (i = values.length; i--;) {
          shapes = this.renderRegion(i);

          if (shapes) {
            if ($.isArray(shapes)) {
              ids = [];

              for (j = shapes.length; j--;) {
                shapes[j].append();
                ids.push(shapes[j].id);
              }

              regionShapes[i] = ids;
            } else {
              shapes.append();
              regionShapes[i] = shapes.id; // store just the shapeid
            }
          } else {
            // null value
            regionShapes[i] = null;
          }
        }

        target.render();
      }
    };
    /**
     * Line charts
     */

    $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
      type: 'line',
      init: function init(el, values, options, width, height) {
        line._super.init.call(this, el, values, options, width, height);

        this.vertices = [];
        this.regionMap = [];
        this.xvalues = [];
        this.yvalues = [];
        this.yminmax = [];
        this.hightlightSpotId = null;
        this.lastShapeId = null;
        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var i,
            regionMap = this.regionMap; // maps regions to value positions

        for (i = regionMap.length; i--;) {
          if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
            return regionMap[i][2];
          }
        }

        return undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.yvalues[currentRegion] === null,
          x: this.xvalues[currentRegion],
          y: this.yvalues[currentRegion],
          color: this.options.get('lineColor'),
          fillColor: this.options.get('fillColor'),
          offset: currentRegion
        };
      },
      renderHighlight: function renderHighlight() {
        var currentRegion = this.currentRegion,
            target = this.target,
            vertex = this.vertices[currentRegion],
            options = this.options,
            spotRadius = options.get('spotRadius'),
            highlightSpotColor = options.get('highlightSpotColor'),
            highlightLineColor = options.get('highlightLineColor'),
            highlightSpot,
            highlightLine;

        if (!vertex) {
          return;
        }

        if (spotRadius && highlightSpotColor) {
          highlightSpot = target.drawCircle(vertex[0], vertex[1], spotRadius, undefined, highlightSpotColor);
          this.highlightSpotId = highlightSpot.id;
          target.insertAfterShape(this.lastShapeId, highlightSpot);
        }

        if (highlightLineColor) {
          highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0], this.canvasTop + this.canvasHeight, highlightLineColor);
          this.highlightLineId = highlightLine.id;
          target.insertAfterShape(this.lastShapeId, highlightLine);
        }
      },
      removeHighlight: function removeHighlight() {
        var target = this.target;

        if (this.highlightSpotId) {
          target.removeShapeId(this.highlightSpotId);
          this.highlightSpotId = null;
        }

        if (this.highlightLineId) {
          target.removeShapeId(this.highlightLineId);
          this.highlightLineId = null;
        }
      },
      scanValues: function scanValues() {
        var values = this.values,
            valcount = values.length,
            xvalues = this.xvalues,
            yvalues = this.yvalues,
            yminmax = this.yminmax,
            i,
            val,
            isStr,
            isArray,
            sp;

        for (i = 0; i < valcount; i++) {
          val = values[i];
          isStr = typeof values[i] === 'string';
          isArray = _typeof(values[i]) === 'object' && values[i] instanceof Array;
          sp = isStr && values[i].split(':');

          if (isStr && sp.length === 2) {
            // x:y
            xvalues.push(Number(sp[0]));
            yvalues.push(Number(sp[1]));
            yminmax.push(Number(sp[1]));
          } else if (isArray) {
            xvalues.push(val[0]);
            yvalues.push(val[1]);
            yminmax.push(val[1]);
          } else {
            xvalues.push(i);

            if (values[i] === null || values[i] === 'null') {
              yvalues.push(null);
            } else {
              yvalues.push(Number(val));
              yminmax.push(Number(val));
            }
          }
        }

        if (this.options.get('xvalues')) {
          xvalues = this.options.get('xvalues');
        }

        this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
        this.miny = this.minyorg = Math.min.apply(Math, yminmax);
        this.maxx = Math.max.apply(Math, xvalues);
        this.minx = Math.min.apply(Math, xvalues);
        this.xvalues = xvalues;
        this.yvalues = yvalues;
        this.yminmax = yminmax;
      },
      processRangeOptions: function processRangeOptions() {
        var options = this.options,
            normalRangeMin = options.get('normalRangeMin'),
            normalRangeMax = options.get('normalRangeMax');

        if (normalRangeMin !== undefined) {
          if (normalRangeMin < this.miny) {
            this.miny = normalRangeMin;
          }

          if (normalRangeMax > this.maxy) {
            this.maxy = normalRangeMax;
          }
        }

        if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
          this.miny = options.get('chartRangeMin');
        }

        if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
          this.maxy = options.get('chartRangeMax');
        }

        if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
          this.minx = options.get('chartRangeMinX');
        }

        if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
          this.maxx = options.get('chartRangeMaxX');
        }
      },
      drawNormalRange: function drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
        var normalRangeMin = this.options.get('normalRangeMin'),
            normalRangeMax = this.options.get('normalRangeMax'),
            ytop = canvasTop + Math.round(canvasHeight - canvasHeight * ((normalRangeMax - this.miny) / rangey)),
            height = Math.round(canvasHeight * (normalRangeMax - normalRangeMin) / rangey);
        this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
      },
      render: function render() {
        var options = this.options,
            target = this.target,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            vertices = this.vertices,
            spotRadius = options.get('spotRadius'),
            regionMap = this.regionMap,
            rangex,
            rangey,
            yvallast,
            canvasTop,
            canvasLeft,
            vertex,
            path,
            paths,
            x,
            y,
            xnext,
            xpos,
            xposnext,
            last,
            next,
            yvalcount,
            lineShapes,
            fillShapes,
            plen,
            valueSpots,
            hlSpotsEnabled,
            color,
            xvalues,
            yvalues,
            i;

        if (!line._super.render.call(this)) {
          return;
        }

        this.scanValues();
        this.processRangeOptions();
        xvalues = this.xvalues;
        yvalues = this.yvalues;

        if (!this.yminmax.length || this.yvalues.length < 2) {
          // empty or all null valuess
          return;
        }

        canvasTop = canvasLeft = 0;
        rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
        rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
        yvallast = this.yvalues.length - 1;

        if (spotRadius && (canvasWidth < spotRadius * 4 || canvasHeight < spotRadius * 4)) {
          spotRadius = 0;
        }

        if (spotRadius) {
          // adjust the canvas size as required so that spots will fit
          hlSpotsEnabled = options.get('highlightSpotColor') && !options.get('disableInteraction');

          if (hlSpotsEnabled || options.get('minSpotColor') || options.get('spotColor') && yvalues[yvallast] === this.miny) {
            canvasHeight -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get('maxSpotColor') || options.get('spotColor') && yvalues[yvallast] === this.maxy) {
            canvasHeight -= Math.ceil(spotRadius);
            canvasTop += Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || (options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy)) {
            canvasLeft += Math.ceil(spotRadius);
            canvasWidth -= Math.ceil(spotRadius);
          }

          if (hlSpotsEnabled || options.get('spotColor') || options.get('minSpotColor') || options.get('maxSpotColor') && (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy)) {
            canvasWidth -= Math.ceil(spotRadius);
          }
        }

        canvasHeight--;

        if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        path = [];
        paths = [path];
        last = next = null;
        yvalcount = yvalues.length;

        for (i = 0; i < yvalcount; i++) {
          x = xvalues[i];
          xnext = xvalues[i + 1];
          y = yvalues[i];
          xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
          xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
          next = xpos + (xposnext - xpos) / 2;
          regionMap[i] = [last || 0, next, i];
          last = next;

          if (y === null) {
            if (i) {
              if (yvalues[i - 1] !== null) {
                path = [];
                paths.push(path);
              }

              vertices.push(null);
            }
          } else {
            if (y < this.miny) {
              y = this.miny;
            }

            if (y > this.maxy) {
              y = this.maxy;
            }

            if (!path.length) {
              // previous value was null
              path.push([xpos, canvasTop + canvasHeight]);
            }

            vertex = [xpos, canvasTop + Math.round(canvasHeight - canvasHeight * ((y - this.miny) / rangey))];
            path.push(vertex);
            vertices.push(vertex);
          }
        }

        lineShapes = [];
        fillShapes = [];
        plen = paths.length;

        for (i = 0; i < plen; i++) {
          path = paths[i];

          if (path.length) {
            if (options.get('fillColor')) {
              path.push([path[path.length - 1][0], canvasTop + canvasHeight]);
              fillShapes.push(path.slice(0));
              path.pop();
            } // if there's only a single point in this path, then we want to display it
            // as a vertical line which means we keep path[0]  as is


            if (path.length > 2) {
              // else we want the first value
              path[0] = [path[0][0], path[1][1]];
            }

            lineShapes.push(path);
          }
        } // draw the fill first, then optionally the normal range, then the line on top of that


        plen = fillShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(fillShapes[i], options.get('fillColor'), options.get('fillColor')).append();
        }

        if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
          this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
        }

        plen = lineShapes.length;

        for (i = 0; i < plen; i++) {
          target.drawShape(lineShapes[i], options.get('lineColor'), undefined, options.get('lineWidth')).append();
        }

        if (spotRadius && options.get('valueSpots')) {
          valueSpots = options.get('valueSpots');

          if (valueSpots.get === undefined) {
            valueSpots = new RangeMap(valueSpots);
          }

          for (i = 0; i < yvalcount; i++) {
            color = valueSpots.get(yvalues[i]);

            if (color) {
              target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[i] - this.miny) / rangey)), spotRadius, undefined, color).append();
            }
          }
        }

        if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
          target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((yvalues[yvallast] - this.miny) / rangey)), spotRadius, undefined, options.get('spotColor')).append();
        }

        if (this.maxy !== this.minyorg) {
          if (spotRadius && options.get('minSpotColor')) {
            x = xvalues[$.inArray(this.minyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.minyorg - this.miny) / rangey)), spotRadius, undefined, options.get('minSpotColor')).append();
          }

          if (spotRadius && options.get('maxSpotColor')) {
            x = xvalues[$.inArray(this.maxyorg, yvalues)];
            target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)), canvasTop + Math.round(canvasHeight - canvasHeight * ((this.maxyorg - this.miny) / rangey)), spotRadius, undefined, options.get('maxSpotColor')).append();
          }
        }

        this.lastShapeId = target.getLastShapeId();
        this.canvasTop = canvasTop;
        target.render();
      }
    });
    /**
     * Bar charts
     */

    $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: 'bar',
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get('barWidth'), 10),
            barSpacing = parseInt(options.get('barSpacing'), 10),
            chartRangeMin = options.get('chartRangeMin'),
            chartRangeMax = options.get('chartRangeMax'),
            chartRangeClip = options.get('chartRangeClip'),
            stackMin = Infinity,
            stackMax = -Infinity,
            isStackString,
            groupMin,
            groupMax,
            stackRanges,
            numValues,
            i,
            vlen,
            range,
            zeroAxis,
            xaxisOffset,
            min,
            max,
            clipMin,
            clipMax,
            stacked,
            vlist,
            j,
            slen,
            svals,
            val,
            yoffset,
            yMaxCalc,
            canvasHeightEf;

        bar._super.init.call(this, el, values, options, width, height); // scan values to determine whether to stack bars


        for (i = 0, vlen = values.length; i < vlen; i++) {
          val = values[i];
          isStackString = typeof val === 'string' && val.indexOf(':') > -1;

          if (isStackString || $.isArray(val)) {
            stacked = true;

            if (isStackString) {
              val = values[i] = normalizeValues(val.split(':'));
            }

            val = remove(val, null); // min/max will treat null as zero

            groupMin = Math.min.apply(Math, val);
            groupMax = Math.max.apply(Math, val);

            if (groupMin < stackMin) {
              stackMin = groupMin;
            }

            if (groupMax > stackMax) {
              stackMax = groupMax;
            }
          }
        }

        this.stacked = stacked;
        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;
        this.initTarget();

        if (chartRangeClip) {
          clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
          clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
        }

        numValues = [];
        stackRanges = stacked ? [] : numValues;
        var stackTotals = [];
        var stackRangesNeg = [];

        for (i = 0, vlen = values.length; i < vlen; i++) {
          if (stacked) {
            vlist = values[i];
            values[i] = svals = [];
            stackTotals[i] = 0;
            stackRanges[i] = stackRangesNeg[i] = 0;

            for (j = 0, slen = vlist.length; j < slen; j++) {
              val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];

              if (val !== null) {
                if (val > 0) {
                  stackTotals[i] += val;
                }

                if (stackMin < 0 && stackMax > 0) {
                  if (val < 0) {
                    stackRangesNeg[i] += Math.abs(val);
                  } else {
                    stackRanges[i] += val;
                  }
                } else {
                  stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                }

                numValues.push(val);
              }
            }
          } else {
            val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
            val = values[i] = normalizeValue(val);

            if (val !== null) {
              numValues.push(val);
            }
          }
        }

        this.max = max = Math.max.apply(Math, numValues);
        this.min = min = Math.min.apply(Math, numValues);
        this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
        this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;

        if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
          min = options.get('chartRangeMin');
        }

        if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
          max = options.get('chartRangeMax');
        }

        this.zeroAxis = zeroAxis = options.get('zeroAxis', true);

        if (min <= 0 && max >= 0 && zeroAxis) {
          xaxisOffset = 0;
        } else if (zeroAxis == false) {
          xaxisOffset = min;
        } else if (min > 0) {
          xaxisOffset = min;
        } else {
          xaxisOffset = max;
        }

        this.xaxisOffset = xaxisOffset;
        range = stacked ? Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg) : max - min; // as we plot zero/min values a single pixel line, we add a pixel to all other
        // values - Reduce the effective canvas size to suit

        this.canvasHeightEf = zeroAxis && min < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1;

        if (min < xaxisOffset) {
          yMaxCalc = stacked && max >= 0 ? stackMax : max;
          yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;

          if (yoffset !== Math.ceil(yoffset)) {
            this.canvasHeightEf -= 2;
            yoffset = Math.ceil(yoffset);
          }
        } else {
          yoffset = this.canvasHeight;
        }

        this.yoffset = yoffset;

        if ($.isArray(options.get('colorMap'))) {
          this.colorMapByIndex = options.get('colorMap');
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get('colorMap');

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.range = range;
      },
      getRegion: function getRegion(el, x, y) {
        var result = Math.floor(x / this.totalBarWidth);
        return result < 0 || result >= this.values.length ? undefined : result;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion,
            values = ensureArray(this.values[currentRegion]),
            result = [],
            value,
            i;

        for (i = values.length; i--;) {
          value = values[i];
          result.push({
            isNull: value === null,
            value: value,
            color: this.calcColor(i, value, currentRegion),
            offset: currentRegion
          });
        }

        return result;
      },
      calcColor: function calcColor(stacknum, value, valuenum) {
        var colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            options = this.options,
            color,
            newColor;

        if (this.stacked) {
          color = options.get('stackedBarColor');
        } else {
          color = value < 0 ? options.get('negBarColor') : options.get('barColor');
        }

        if (value === 0 && options.get('zeroColor') !== undefined) {
          color = options.get('zeroColor');
        }

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        }

        return $.isArray(color) ? color[stacknum % color.length] : color;
      },

      /**
       * Render bar(s) for a region
       */
      renderRegion: function renderRegion(valuenum, highlight) {
        var vals = this.values[valuenum],
            options = this.options,
            xaxisOffset = this.xaxisOffset,
            result = [],
            range = this.range,
            stacked = this.stacked,
            target = this.target,
            x = valuenum * this.totalBarWidth,
            canvasHeightEf = this.canvasHeightEf,
            yoffset = this.yoffset,
            y,
            height,
            color,
            isNull,
            yoffsetNeg,
            i,
            valcount,
            val,
            minPlotted,
            allMin;
        vals = $.isArray(vals) ? vals : [vals];
        valcount = vals.length;
        val = vals[0];
        isNull = all(null, vals);
        allMin = all(xaxisOffset, vals, true);

        if (isNull) {
          if (options.get('nullColor')) {
            color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
            y = yoffset > 0 ? yoffset - 1 : yoffset;
            return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
          } else {
            return undefined;
          }
        }

        yoffsetNeg = yoffset;

        for (i = 0; i < valcount; i++) {
          val = vals[i];

          if (stacked && val === xaxisOffset) {
            if (!allMin || minPlotted) {
              continue;
            }

            minPlotted = true;
          }

          if (range > 0) {
            height = Math.floor(canvasHeightEf * (Math.abs(val - xaxisOffset) / range)) + 1;
          } else {
            height = 1;
          }

          if (val < xaxisOffset || val === xaxisOffset && yoffset === 0) {
            y = yoffsetNeg;
            yoffsetNeg += height;
          } else {
            y = yoffset - height;
            yoffset -= height;
          }

          color = this.calcColor(i, val, valuenum);

          if (highlight) {
            color = this.calcHighlightColor(color, options);
          }

          result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
        }

        if (result.length === 1) {
          return result[0];
        }

        return result;
      }
    });
    /**
     * Tristate charts
     */

    $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: 'tristate',
      init: function init(el, values, options, width, height) {
        var barWidth = parseInt(options.get('barWidth'), 10),
            barSpacing = parseInt(options.get('barSpacing'), 10);

        tristate._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.barWidth = barWidth;
        this.barSpacing = barSpacing;
        this.totalBarWidth = barWidth + barSpacing;
        this.values = $.map(values, Number);
        this.width = width = values.length * barWidth + (values.length - 1) * barSpacing;

        if ($.isArray(options.get('colorMap'))) {
          this.colorMapByIndex = options.get('colorMap');
          this.colorMapByValue = null;
        } else {
          this.colorMapByIndex = null;
          this.colorMapByValue = options.get('colorMap');

          if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
            this.colorMapByValue = new RangeMap(this.colorMapByValue);
          }
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.totalBarWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          color: this.calcColor(this.values[currentRegion], currentRegion),
          offset: currentRegion
        };
      },
      calcColor: function calcColor(value, valuenum) {
        var values = this.values,
            options = this.options,
            colorMapByIndex = this.colorMapByIndex,
            colorMapByValue = this.colorMapByValue,
            color,
            newColor;

        if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
          color = newColor;
        } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
          color = colorMapByIndex[valuenum];
        } else if (values[valuenum] < 0) {
          color = options.get('negBarColor');
        } else if (values[valuenum] > 0) {
          color = options.get('posBarColor');
        } else {
          color = options.get('zeroBarColor');
        }

        return color;
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            target = this.target,
            canvasHeight,
            height,
            halfHeight,
            x,
            y,
            color;
        canvasHeight = target.pixelHeight;
        halfHeight = Math.round(canvasHeight / 2);
        x = valuenum * this.totalBarWidth;

        if (values[valuenum] < 0) {
          y = halfHeight;
          height = halfHeight - 1;
        } else if (values[valuenum] > 0) {
          y = 0;
          height = halfHeight - 1;
        } else {
          y = halfHeight - 1;
          height = 2;
        }

        color = this.calcColor(values[valuenum], valuenum);

        if (color === null) {
          return;
        }

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
      }
    });
    /**
     * Discrete charts
     */

    $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
      type: 'discrete',
      init: function init(el, values, options, width, height) {
        discrete._super.init.call(this, el, values, options, width, height);

        this.regionShapes = {};
        this.values = values = $.map(values, Number);
        this.min = Math.min.apply(Math, values);
        this.max = Math.max.apply(Math, values);
        this.range = this.max - this.min;
        this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
        this.interval = Math.floor(width / values.length);
        this.itemWidth = width / values.length;

        if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
          this.min = options.get('chartRangeMin');
        }

        if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
          this.max = options.get('chartRangeMax');
        }

        this.initTarget();

        if (this.target) {
          this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
        }
      },
      getRegion: function getRegion(el, x, y) {
        return Math.floor(x / this.itemWidth);
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          offset: currentRegion
        };
      },
      renderRegion: function renderRegion(valuenum, highlight) {
        var values = this.values,
            options = this.options,
            min = this.min,
            max = this.max,
            range = this.range,
            interval = this.interval,
            target = this.target,
            canvasHeight = this.canvasHeight,
            lineHeight = this.lineHeight,
            pheight = canvasHeight - lineHeight,
            ytop,
            val,
            color,
            x;
        val = clipval(values[valuenum], min, max);
        x = valuenum * interval;
        ytop = Math.round(pheight - pheight * ((val - min) / range));
        color = options.get('thresholdColor') && val < options.get('thresholdValue') ? options.get('thresholdColor') : options.get('lineColor');

        if (highlight) {
          color = this.calcHighlightColor(color, options);
        }

        return target.drawLine(x, ytop, x, ytop + lineHeight, color);
      }
    });
    /**
     * Bullet charts
     */

    $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
      type: 'bullet',
      init: function init(el, values, options, width, height) {
        var min, max, vals;

        bullet._super.init.call(this, el, values, options, width, height); // values: target, performance, range1, range2, range3


        this.values = values = normalizeValues(values); // target or performance could be null

        vals = values.slice();
        vals[0] = vals[0] === null ? vals[2] : vals[0];
        vals[1] = values[1] === null ? vals[2] : vals[1];
        min = Math.min.apply(Math, values);
        max = Math.max.apply(Math, values);

        if (options.get('base') === undefined) {
          min = min < 0 ? min : 0;
        } else {
          min = options.get('base');
        }

        this.min = min;
        this.max = max;
        this.range = max - min;
        this.shapes = {};
        this.valueShapes = {};
        this.regiondata = {};
        this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
        this.target = this.$el.simpledraw(width, height, options.get('composite'));

        if (!values.length) {
          this.disabled = true;
        }

        this.initTarget();
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          fieldkey: currentRegion.substr(0, 1),
          value: this.values[currentRegion.substr(1)],
          region: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            shapeid = this.valueShapes[currentRegion],
            shape;
        delete this.shapes[shapeid];

        switch (currentRegion.substr(0, 1)) {
          case 'r':
            shape = this.renderRange(currentRegion.substr(1), highlight);
            break;

          case 'p':
            shape = this.renderPerformance(highlight);
            break;

          case 't':
            shape = this.renderTarget(highlight);
            break;
        }

        this.valueShapes[currentRegion] = shape.id;
        this.shapes[shape.id] = currentRegion;
        this.target.replaceWithShape(shapeid, shape);
      },
      renderRange: function renderRange(rn, highlight) {
        var rangeval = this.values[rn],
            rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
            color = this.options.get('rangeColors')[rn - 2];

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
      },
      renderPerformance: function renderPerformance(highlight) {
        var perfval = this.values[1],
            perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
            color = this.options.get('performanceColor');

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1, Math.round(this.canvasHeight * 0.4) - 1, color, color);
      },
      renderTarget: function renderTarget(highlight) {
        var targetval = this.values[0],
            x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - this.options.get('targetWidth') / 2),
            targettop = Math.round(this.canvasHeight * 0.10),
            targetheight = this.canvasHeight - targettop * 2,
            color = this.options.get('targetColor');

        if (highlight) {
          color = this.calcHighlightColor(color, this.options);
        }

        return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
      },
      render: function render() {
        var vlen = this.values.length,
            target = this.target,
            i,
            shape;

        if (!bullet._super.render.call(this)) {
          return;
        }

        for (i = 2; i < vlen; i++) {
          shape = this.renderRange(i).append();
          this.shapes[shape.id] = 'r' + i;
          this.valueShapes['r' + i] = shape.id;
        }

        if (this.values[1] !== null) {
          shape = this.renderPerformance().append();
          this.shapes[shape.id] = 'p1';
          this.valueShapes.p1 = shape.id;
        }

        if (this.values[0] !== null) {
          shape = this.renderTarget().append();
          this.shapes[shape.id] = 't0';
          this.valueShapes.t0 = shape.id;
        }

        target.render();
      }
    });
    /**
     * Pie charts
     */

    $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
      type: 'pie',
      init: function init(el, values, options, width, height) {
        var total = 0,
            i;

        pie._super.init.call(this, el, values, options, width, height);

        this.shapes = {}; // map shape ids to value offsets

        this.valueShapes = {}; // maps value offsets to shape ids

        this.values = values = $.map(values, Number);

        if (options.get('width') === 'auto') {
          this.width = this.height;
        }

        if (values.length > 0) {
          for (i = values.length; i--;) {
            total += values[i];
          }
        }

        this.total = total;
        this.initTarget();
        this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
      },
      getRegion: function getRegion(el, x, y) {
        var shapeid = this.target.getShapeAt(el, x, y);
        return shapeid !== undefined && this.shapes[shapeid] !== undefined ? this.shapes[shapeid] : undefined;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var currentRegion = this.currentRegion;
        return {
          isNull: this.values[currentRegion] === undefined,
          value: this.values[currentRegion],
          percent: this.values[currentRegion] / this.total * 100,
          color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
          offset: currentRegion
        };
      },
      changeHighlight: function changeHighlight(highlight) {
        var currentRegion = this.currentRegion,
            newslice = this.renderSlice(currentRegion, highlight),
            shapeid = this.valueShapes[currentRegion];
        delete this.shapes[shapeid];
        this.target.replaceWithShape(shapeid, newslice);
        this.valueShapes[currentRegion] = newslice.id;
        this.shapes[newslice.id] = currentRegion;
      },
      renderSlice: function renderSlice(valuenum, highlight) {
        var target = this.target,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get('borderWidth'),
            offset = options.get('offset'),
            circle = 2 * Math.PI,
            values = this.values,
            total = this.total,
            next = offset ? 2 * Math.PI * (offset / 360) : 0,
            start,
            end,
            i,
            vlen,
            color;
        vlen = values.length;

        for (i = 0; i < vlen; i++) {
          start = next;
          end = next;

          if (total > 0) {
            // avoid divide by zero
            end = next + circle * (values[i] / total);
          }

          if (valuenum === i) {
            color = options.get('sliceColors')[i % options.get('sliceColors').length];

            if (highlight) {
              color = this.calcHighlightColor(color, options);
            }

            return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
          }

          next = end;
        }
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            options = this.options,
            radius = this.radius,
            borderWidth = options.get('borderWidth'),
            shape,
            i;

        if (!pie._super.render.call(this)) {
          return;
        }

        if (borderWidth) {
          target.drawCircle(radius, radius, Math.floor(radius - borderWidth / 2), options.get('borderColor'), undefined, borderWidth).append();
        }

        for (i = values.length; i--;) {
          if (values[i]) {
            // don't render zero values
            shape = this.renderSlice(i).append();
            this.valueShapes[i] = shape.id; // store just the shapeid

            this.shapes[shape.id] = i;
          }
        }

        target.render();
      }
    });
    /**
     * Box plots
     */

    $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
      type: 'box',
      init: function init(el, values, options, width, height) {
        box._super.init.call(this, el, values, options, width, height);

        this.values = $.map(values, Number);
        this.width = options.get('width') === 'auto' ? '4.0em' : width;
        this.initTarget();

        if (!this.values.length) {
          this.disabled = 1;
        }
      },

      /**
       * Simulate a single region
       */
      getRegion: function getRegion() {
        return 1;
      },
      getCurrentRegionFields: function getCurrentRegionFields() {
        var result = [{
          field: 'lq',
          value: this.quartiles[0]
        }, {
          field: 'med',
          value: this.quartiles[1]
        }, {
          field: 'uq',
          value: this.quartiles[2]
        }];

        if (this.loutlier !== undefined) {
          result.push({
            field: 'lo',
            value: this.loutlier
          });
        }

        if (this.routlier !== undefined) {
          result.push({
            field: 'ro',
            value: this.routlier
          });
        }

        if (this.lwhisker !== undefined) {
          result.push({
            field: 'lw',
            value: this.lwhisker
          });
        }

        if (this.rwhisker !== undefined) {
          result.push({
            field: 'rw',
            value: this.rwhisker
          });
        }

        return result;
      },
      render: function render() {
        var target = this.target,
            values = this.values,
            vlen = values.length,
            options = this.options,
            canvasWidth = this.canvasWidth,
            canvasHeight = this.canvasHeight,
            minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
            maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
            canvasLeft = 0,
            lwhisker,
            loutlier,
            iqr,
            q1,
            q2,
            q3,
            rwhisker,
            routlier,
            i,
            size,
            unitSize;

        if (!box._super.render.call(this)) {
          return;
        }

        if (options.get('raw')) {
          if (options.get('showOutliers') && values.length > 5) {
            loutlier = values[0];
            lwhisker = values[1];
            q1 = values[2];
            q2 = values[3];
            q3 = values[4];
            rwhisker = values[5];
            routlier = values[6];
          } else {
            lwhisker = values[0];
            q1 = values[1];
            q2 = values[2];
            q3 = values[3];
            rwhisker = values[4];
          }
        } else {
          values.sort(function (a, b) {
            return a - b;
          });
          q1 = quartile(values, 1);
          q2 = quartile(values, 2);
          q3 = quartile(values, 3);
          iqr = q3 - q1;

          if (options.get('showOutliers')) {
            lwhisker = rwhisker = undefined;

            for (i = 0; i < vlen; i++) {
              if (lwhisker === undefined && values[i] > q1 - iqr * options.get('outlierIQR')) {
                lwhisker = values[i];
              }

              if (values[i] < q3 + iqr * options.get('outlierIQR')) {
                rwhisker = values[i];
              }
            }

            loutlier = values[0];
            routlier = values[vlen - 1];
          } else {
            lwhisker = values[0];
            rwhisker = values[vlen - 1];
          }
        }

        this.quartiles = [q1, q2, q3];
        this.lwhisker = lwhisker;
        this.rwhisker = rwhisker;
        this.loutlier = loutlier;
        this.routlier = routlier;
        unitSize = canvasWidth / (maxValue - minValue + 1);

        if (options.get('showOutliers')) {
          canvasLeft = Math.ceil(options.get('spotRadius'));
          canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
          unitSize = canvasWidth / (maxValue - minValue + 1);

          if (loutlier < lwhisker) {
            target.drawCircle((loutlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get('spotRadius'), options.get('outlierLineColor'), options.get('outlierFillColor')).append();
          }

          if (routlier > rwhisker) {
            target.drawCircle((routlier - minValue) * unitSize + canvasLeft, canvasHeight / 2, options.get('spotRadius'), options.get('outlierLineColor'), options.get('outlierFillColor')).append();
          }
        } // box


        target.drawRect(Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.1), Math.round((q3 - q1) * unitSize), Math.round(canvasHeight * 0.8), options.get('boxLineColor'), options.get('boxFillColor')).append(); // left whisker

        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q1 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get('lineColor')).append();
        target.drawLine(Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((lwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get('whiskerColor')).append(); // right whisker

        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), Math.round((q3 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2), options.get('lineColor')).append();
        target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 4), Math.round((rwhisker - minValue) * unitSize + canvasLeft), Math.round(canvasHeight - canvasHeight / 4), options.get('whiskerColor')).append(); // median line

        target.drawLine(Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.1), Math.round((q2 - minValue) * unitSize + canvasLeft), Math.round(canvasHeight * 0.9), options.get('medianColor')).append();

        if (options.get('target')) {
          size = Math.ceil(options.get('spotRadius'));
          target.drawLine(Math.round((options.get('target') - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 - size), Math.round((options.get('target') - minValue) * unitSize + canvasLeft), Math.round(canvasHeight / 2 + size), options.get('targetColor')).append();
          target.drawLine(Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size), Math.round(canvasHeight / 2), Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size), Math.round(canvasHeight / 2), options.get('targetColor')).append();
        }

        target.render();
      }
    }); // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
    // This is accessible as $(foo).simpledraw()

    VShape = createClass({
      init: function init(target, id, type, args) {
        this.target = target;
        this.id = id;
        this.type = type;
        this.args = args;
      },
      append: function append() {
        this.target.appendShape(this);
        return this;
      }
    });
    VCanvas_base = createClass({
      _pxregex: /(\d+)(px)?\s*$/i,
      init: function init(width, height, target) {
        if (!width) {
          return;
        }

        this.width = width;
        this.height = height;
        this.target = target;
        this.lastShapeId = null;

        if (target[0]) {
          target = target[0];
        }

        $.data(target, '_jqs_vcanvas', this);
      },
      drawLine: function drawLine(x1, y1, x2, y2, lineColor, lineWidth) {
        return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
      },
      drawShape: function drawShape(path, lineColor, fillColor, lineWidth) {
        return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
      },
      drawCircle: function drawCircle(x, y, radius, lineColor, fillColor, lineWidth) {
        return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
      },
      drawPieSlice: function drawPieSlice(x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
      },
      drawRect: function drawRect(x, y, width, height, lineColor, fillColor) {
        return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
      },
      getElement: function getElement() {
        return this.canvas;
      },

      /**
       * Return the most recently inserted shape id
       */
      getLastShapeId: function getLastShapeId() {
        return this.lastShapeId;
      },

      /**
       * Clear and reset the canvas
       */
      reset: function reset() {
        alert('reset not implemented');
      },
      _insert: function _insert(el, target) {
        $(target).html(el);
      },

      /**
       * Calculate the pixel dimensions of the canvas
       */
      _calculatePixelDims: function _calculatePixelDims(width, height, canvas) {
        // XXX This should probably be a configurable option
        var match;
        match = this._pxregex.exec(height);

        if (match) {
          this.pixelHeight = match[1];
        } else {
          this.pixelHeight = $(canvas).height();
        }

        match = this._pxregex.exec(width);

        if (match) {
          this.pixelWidth = match[1];
        } else {
          this.pixelWidth = $(canvas).width();
        }
      },

      /**
       * Generate a shape object and id for later rendering
       */
      _genShape: function _genShape(shapetype, shapeargs) {
        var id = shapeCount++;
        shapeargs.unshift(id);
        return new VShape(this, id, shapetype, shapeargs);
      },

      /**
       * Add a shape to the end of the render queue
       */
      appendShape: function appendShape(shape) {
        alert('appendShape not implemented');
      },

      /**
       * Replace one shape with another
       */
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        alert('replaceWithShape not implemented');
      },

      /**
       * Insert one shape after another in the render queue
       */
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        alert('insertAfterShape not implemented');
      },

      /**
       * Remove a shape from the queue
       */
      removeShapeId: function removeShapeId(shapeid) {
        alert('removeShapeId not implemented');
      },

      /**
       * Find a shape at the specified x/y co-ordinates
       */
      getShapeAt: function getShapeAt(el, x, y) {
        alert('getShapeAt not implemented');
      },

      /**
       * Render all queued shapes onto the canvas
       */
      render: function render() {
        alert('render not implemented');
      }
    });
    VCanvas_canvas = createClass(VCanvas_base, {
      init: function init(width, height, target, interact) {
        VCanvas_canvas._super.init.call(this, width, height, target);

        this.canvas = document.createElement('canvas');

        if (target[0]) {
          target = target[0];
        }

        $.data(target, '_jqs_vcanvas', this);
        $(this.canvas).css({
          display: 'inline-block',
          width: width,
          height: height,
          verticalAlign: 'top'
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        this.interact = interact;
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
        $(this.canvas).css({
          width: this.pixelWidth,
          height: this.pixelHeight
        });
      },
      _getContext: function _getContext(lineColor, fillColor, lineWidth) {
        var context = this.canvas.getContext('2d');

        if (lineColor !== undefined) {
          context.strokeStyle = lineColor;
        }

        context.lineWidth = lineWidth === undefined ? 1 : lineWidth;

        if (fillColor !== undefined) {
          context.fillStyle = fillColor;
        }

        return context;
      },
      reset: function reset() {
        var context = this._getContext();

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
        this.shapes = {};
        this.shapeseq = [];
        this.currentTargetShapeId = undefined;
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth),
            i,
            plen;

        context.beginPath();
        context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);

        for (i = 1, plen = path.length; i < plen; i++) {
          context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var context = this._getContext(lineColor, fillColor, lineWidth);

        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor !== undefined) {
          context.fill();
        }
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var context = this._getContext(lineColor, fillColor);

        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, startAngle, endAngle, false);
        context.lineTo(x, y);
        context.closePath();

        if (lineColor !== undefined) {
          context.stroke();
        }

        if (fillColor) {
          context.fill();
        }

        if (this.targetX !== undefined && this.targetY !== undefined && context.isPointInPath(this.targetX, this.targetY)) {
          this.currentTargetShapeId = shapeid;
        }
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
      },
      appendShape: function appendShape(shape) {
        this.shapes[shape.id] = shape;
        this.shapeseq.push(shape.id);
        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;
        this.shapes[shape.id] = shape;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] == shapeid) {
            shapeseq[i] = shape.id;
          }
        }

        delete this.shapes[shapeid];
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        var shapeseq = this.shapeseq,
            shapemap = {},
            sid,
            i,
            first;

        for (i = shapeids.length; i--;) {
          shapemap[shapeids[i]] = true;
        }

        for (i = shapeseq.length; i--;) {
          sid = shapeseq[i];

          if (shapemap[sid]) {
            shapeseq.splice(i, 1);
            delete this.shapes[sid];
            first = i;
          }
        }

        for (i = shapes.length; i--;) {
          shapeseq.splice(first, 0, shapes[i].id);
          this.shapes[shapes[i].id] = shapes[i];
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i + 1, 0, shape.id);
            this.shapes[shape.id] = shape;
            return;
          }
        }
      },
      removeShapeId: function removeShapeId(shapeid) {
        var shapeseq = this.shapeseq,
            i;

        for (i = shapeseq.length; i--;) {
          if (shapeseq[i] === shapeid) {
            shapeseq.splice(i, 1);
            break;
          }
        }

        delete this.shapes[shapeid];
      },
      getShapeAt: function getShapeAt(el, x, y) {
        this.targetX = x;
        this.targetY = y;
        this.render();
        return this.currentTargetShapeId;
      },
      render: function render() {
        var shapeseq = this.shapeseq,
            shapes = this.shapes,
            shapeCount = shapeseq.length,
            context = this._getContext(),
            shapeid,
            shape,
            i;

        context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);

        for (i = 0; i < shapeCount; i++) {
          shapeid = shapeseq[i];
          shape = shapes[shapeid];
          this['_draw' + shape.type].apply(this, shape.args);
        }

        if (!this.interact) {
          // not interactive so no need to keep the shapes array
          this.shapes = {};
          this.shapeseq = [];
        }
      }
    });
    VCanvas_vml = createClass(VCanvas_base, {
      init: function init(width, height, target) {
        var groupel;

        VCanvas_vml._super.init.call(this, width, height, target);

        if (target[0]) {
          target = target[0];
        }

        $.data(target, '_jqs_vcanvas', this);
        this.canvas = document.createElement('span');
        $(this.canvas).css({
          display: 'inline-block',
          position: 'relative',
          overflow: 'hidden',
          width: width,
          height: height,
          margin: '0px',
          padding: '0px',
          verticalAlign: 'top'
        });

        this._insert(this.canvas, target);

        this._calculatePixelDims(width, height, this.canvas);

        this.canvas.width = this.pixelWidth;
        this.canvas.height = this.pixelHeight;
        groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
        this.canvas.insertAdjacentHTML('beforeEnd', groupel);
        this.group = $(this.canvas).children()[0];
        this.rendered = false;
        this.prerender = '';
      },
      _drawShape: function _drawShape(shapeid, path, lineColor, fillColor, lineWidth) {
        var vpath = [],
            initial,
            stroke,
            fill,
            closed,
            vel,
            plen,
            i;

        for (i = 0, plen = path.length; i < plen; i++) {
          vpath[i] = '' + path[i][0] + ',' + path[i][1];
        }

        initial = vpath.splice(0, 1);
        lineWidth = lineWidth === undefined ? 1 : lineWidth;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' + ' </v:shape>';
        return vel;
      },
      _drawCircle: function _drawCircle(shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
        var stroke, fill, vel;
        x -= radius;
        y -= radius;
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:oval ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + radius * 2 + 'px; height:' + radius * 2 + 'px"></v:oval>';
        return vel;
      },
      _drawPieSlice: function _drawPieSlice(shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
        var vpath, startx, starty, endx, endy, stroke, fill, vel;

        if (startAngle === endAngle) {
          return ''; // VML seems to have problem when start angle equals end angle.
        }

        if (endAngle - startAngle === 2 * Math.PI) {
          startAngle = 0.0; // VML seems to have a problem when drawing a full circle that doesn't start 0

          endAngle = 2 * Math.PI;
        }

        startx = x + Math.round(Math.cos(startAngle) * radius);
        starty = y + Math.round(Math.sin(startAngle) * radius);
        endx = x + Math.round(Math.cos(endAngle) * radius);
        endy = y + Math.round(Math.sin(endAngle) * radius);

        if (startx === endx && starty === endy) {
          if (endAngle - startAngle < Math.PI) {
            // Prevent very small slices from being mistaken as a whole pie
            return '';
          } // essentially going to be the entire circle, so ignore startAngle


          startx = endx = x + radius;
          starty = endy = y;
        }

        if (startx === endx && starty === endy && endAngle - startAngle < Math.PI) {
          return '';
        }

        vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
        stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
        fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
        vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' + ' id="jqsshape' + shapeid + '" ' + stroke + fill + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' + ' </v:shape>';
        return vel;
      },
      _drawRect: function _drawRect(shapeid, x, y, width, height, lineColor, fillColor) {
        return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
      },
      reset: function reset() {
        this.group.innerHTML = '';
      },
      appendShape: function appendShape(shape) {
        var vel = this['_draw' + shape.type].apply(this, shape.args);

        if (this.rendered) {
          this.group.insertAdjacentHTML('beforeEnd', vel);
        } else {
          this.prerender += vel;
        }

        this.lastShapeId = shape.id;
        return shape.id;
      },
      replaceWithShape: function replaceWithShape(shapeid, shape) {
        var existing = $('#jqsshape' + shapeid),
            vel = this['_draw' + shape.type].apply(this, shape.args);
        existing[0].outerHTML = vel;
      },
      replaceWithShapes: function replaceWithShapes(shapeids, shapes) {
        // replace the first shapeid with all the new shapes then toast the remaining old shapes
        var existing = $('#jqsshape' + shapeids[0]),
            replace = '',
            slen = shapes.length,
            i;

        for (i = 0; i < slen; i++) {
          replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
        }

        existing[0].outerHTML = replace;

        for (i = 1; i < shapeids.length; i++) {
          $('#jqsshape' + shapeids[i]).remove();
        }
      },
      insertAfterShape: function insertAfterShape(shapeid, shape) {
        var existing = $('#jqsshape' + shapeid),
            vel = this['_draw' + shape.type].apply(this, shape.args);
        existing[0].insertAdjacentHTML('afterEnd', vel);
      },
      removeShapeId: function removeShapeId(shapeid) {
        var existing = $('#jqsshape' + shapeid);
        this.group.removeChild(existing[0]);
      },
      getShapeAt: function getShapeAt(el, x, y) {
        var shapeid = el.id.substr(8);
        return shapeid;
      },
      render: function render() {
        if (!this.rendered) {
          // batch the intial render into a single repaint
          this.group.innerHTML = this.prerender;
          this.rendered = true;
        }
      }
    });
  });
})(document, Math);

/***/ }),

/***/ "./public/js/ldld.min.js":
/*!*******************************!*\
  !*** ./public/js/ldld.min.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

;

(function () {
  var ldLoader;

  ldLoader = function ldLoader(opt) {
    var this$ = this;
    opt == null && (opt = {});
    this.opt = import$({
      activeClass: 'running',
      baseZ: 4e3,
      autoZ: false,
      className: '',
      atomic: true
    }, opt);
    ['root', 'container'].map(function (n) {
      if (opt[n]) {
        return this$[n] = (Array.isArray(opt[n]) ? opt[n] : [opt[n]]).map(function (it) {
          var ret;
          ret = typeof it === 'string' ? document.querySelector(it) : it;

          if (!ret) {
            console.warn('[ldLoader] warning: no node found for ' + it);
          }

          return ret;
        });
      }
    });

    if (!this.container) {
      this.container = this.root ? this.root.map(function (it) {
        return it.parentNode;
      }) : [document.body];
    }

    if (!this.root) {
      this.root = this.container.map(function (it) {
        var node;
        node = document.createElement('div');
        it.appendChild(node);
        return node;
      });
    }

    this.root.map(function (it) {
      it.classList.add.apply(it.classList, (this$.opt.className || '').split(' ').filter(function (it) {
        return it;
      }));
      it.classList.remove(opt.activeClass);

      if (opt.inactiveClass) {
        return it.classList.add(opt.inactiveClass);
      }
    });
    this.running = false;
    this.count = 0;
    return this;
  };

  ldLoader.prototype = import$(Object.create(Object.prototype), {
    isOn: function isOn() {
      return this.running;
    },
    on: function on(delay) {
      delay == null && (delay = 0);
      return this.toggle(true, delay);
    },
    off: function off(delay, force) {
      delay == null && (delay = 0);
      force == null && (force = false);
      return this.toggle(false, delay, force);
    },
    flash: function flash(dur, delay) {
      var this$ = this;
      dur == null && (dur = 1e3);
      delay == null && (delay = 0);
      return this.toggle(true, delay).then(function () {
        return this$.toggle(false, dur + delay);
      });
    },
    render: function render() {
      var runid,
          _2,
          ret,
          this$ = this;

      if (!(this.running && this.opt.ctrl && this.opt.ctrl.step)) {
        return this.render.runid = -1;
      }

      this.render.runid = runid = Math.random();
      this.render.start = 0;

      if (this.opt.ctrl.init) {
        this.root.map(function (it) {
          return this$.opt.ctrl.init.call(it);
        });
      }

      _2 = function _(t) {
        if (!this$.render.start) {
          this$.render.start = t;
        }

        this$.root.map(function (it) {
          return this$.opt.ctrl.step.call(it, t - this$.render.start);
        });

        if (this$.render.runid === runid) {
          return requestAnimationFrame(function (it) {
            return _2(it);
          });
        } else if (this$.opt.ctrl.done) {
          return this$.root.map(function (it) {
            return this$.opt.ctrl.done.call(it, t - this$.render.start);
          });
        }
      };

      return ret = requestAnimationFrame(function (it) {
        return _2(it);
      });
    },
    toggle: function toggle(v, delay, force) {
      var d,
          this$ = this;
      delay == null && (delay = 0);
      force == null && (force = false);
      d = !(v != null) ? this.root[0].classList.contains(this.opt.activeClass) ? -1 : 1 : v ? 1 : -1;

      if (delay) {
        return new Promise(function (res, rej) {
          if (d > 0) {
            return this$.toggle(v).then(function () {
              return setTimeout(function () {
                return res();
              }, delay);
            });
          } else {
            return setTimeout(function () {
              return this$.toggle(v).then(function () {
                return res();
              });
            }, delay);
          }
        });
      }

      return new Promise(function (res, rej) {
        var running, z, ref$, idx;
        this$.count += d;

        if (!force && !this$.opt.atomic && (this$.count >= 2 || this$.count === 1 && d < 0)) {
          return res();
        }

        this$.root.map(function (it) {
          it.classList.toggle(this$.opt.activeClass, d > 0);

          if (this$.opt.inactiveClass) {
            return it.classList.toggle(this$.opt.inactiveClass, d < 0);
          }
        });
        this$.running = running = this$.root[0].classList.contains(this$.opt.activeClass);

        if (this$.opt.ctrl) {
          this$.render();
        }

        if (!this$.opt.autoZ) {
          return res();
        }

        if (running) {
          this$.z = z = ((ref$ = ldLoader.zstack)[ref$.length - 1] || 0) + this$.opt.baseZ;
          this$.root.map(function (it) {
            return it.style.zIndex = z;
          });
          ldLoader.zstack.push(z);
        } else {
          if ((idx = ldLoader.zstack.indexOf(this$.z)) < 0) {
            return res();
          }

          this$.root.map(function (it) {
            return it.style.zIndex = '';
          });
          ldLoader.zstack.splice(idx, 1);
        }

        return res();
      });
    }
  });
  import$(ldLoader, {
    zstack: []
  });
  return window.ldLoader = ldLoader;
})();

function import$(obj, src) {
  var own = {}.hasOwnProperty;

  for (var key in src) {
    if (own.call(src, key)) obj[key] = src[key];
  }

  return obj;
}

/***/ }),

/***/ "./public/js/sparkline-chart.js":
/*!**************************************!*\
  !*** ./public/js/sparkline-chart.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Script = function () {
  $(".sparkline").each(function () {
    var $data = $(this).data();
    $data.valueSpots = {
      '0:': $data.spotColor
    };
    $(this).sparkline($data.data || "html", $data, {
      tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' + '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
    });
  }); //sparkline chart

  $("#barchart").sparkline([5, 3, 6, 7, 5, 6, 4, 2, 3, 4, 6, 8, 9, 10, 8, 6, 5, 7, 6, 5, 4, 7, 4], {
    type: 'bar',
    height: '65',
    barWidth: 8,
    barSpacing: 5,
    barColor: '#fff' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#linechart").sparkline([1, 5, 3, 7, 9, 3, 6, 4, 7, 9, 7, 6, 2], _defineProperty({
    type: 'line',
    width: '300',
    height: '75',
    fillColor: '',
    lineColor: '#fff',
    lineWidth: 2,
    spotColor: '#fff',
    minSpotColor: '#fff',
    maxSpotColor: '#fff',
    highlightSpotColor: '#fff',
    highlightLineColor: '#ffffff',
    spotRadius: 4
  }, "highlightLineColor", '#ffffff'));
  $("#pie-chart").sparkline([2, 1, 1, 1], {
    type: 'pie',
    width: '100',
    height: '100',
    borderColor: '#00bf00',
    sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66'] //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  }); //work progress bar

  $("#work-progress1").sparkline([5, 6, 7, 5, 9, 6, 4], {
    type: 'bar',
    height: '20',
    barWidth: 5,
    barSpacing: 2,
    barColor: '#5fbf00' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#work-progress2").sparkline([3, 2, 5, 8, 4, 7, 5], {
    type: 'bar',
    height: '22',
    barWidth: 5,
    barSpacing: 2,
    barColor: '#58c9f1' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#work-progress3").sparkline([1, 6, 9, 3, 4, 8, 5], {
    type: 'bar',
    height: '22',
    barWidth: 5,
    barSpacing: 2,
    barColor: '#8075c4' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#work-progress4").sparkline([9, 4, 9, 6, 7, 4, 3], {
    type: 'bar',
    height: '22',
    barWidth: 5,
    barSpacing: 2,
    barColor: '#ff6c60' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#work-progress5").sparkline([6, 8, 5, 7, 6, 8, 3], {
    type: 'bar',
    height: '22',
    barWidth: 5,
    barSpacing: 2,
    barColor: '#41cac0' //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'

  });
  $("#pie-chart2").sparkline([2, 1, 1, 1], {
    type: 'pie',
    width: '250',
    height: '125',
    sliceColors: ['#41CAC0', '#A8D76F', '#F8D347', '#EF6F66'] //        tooltipFormat: '<span style="display:block; padding:0px 10px 12px 0px;">' +
    //    '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'});

  });
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/js/jquery.js ./public/js/bootstrap.min.js ./public/js/jquery.dcjqaccordion.2.7.js ./public/js/jquery.scrollTo.min.js ./public/js/jquery.nicescroll.js ./public/js/jquery.sparkline.js ./public/js/common-scripts.js ./public/js/sparkline-chart.js ./public/js/jquery.backstretch.min.js ./public/js/ldld.min.js ./public/js/chart-master/Chart.js ./public/js/fontawesome.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.js */"./public/js/jquery.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\bootstrap.min.js */"./public/js/bootstrap.min.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.dcjqaccordion.2.7.js */"./public/js/jquery.dcjqaccordion.2.7.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.scrollTo.min.js */"./public/js/jquery.scrollTo.min.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.nicescroll.js */"./public/js/jquery.nicescroll.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.sparkline.js */"./public/js/jquery.sparkline.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\common-scripts.js */"./public/js/common-scripts.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\sparkline-chart.js */"./public/js/sparkline-chart.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\jquery.backstretch.min.js */"./public/js/jquery.backstretch.min.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\ldld.min.js */"./public/js/ldld.min.js");
__webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\chart-master\Chart.js */"./public/js/chart-master/Chart.js");
module.exports = __webpack_require__(/*! C:\wamp64\www\mynhakadeployment\web\build\mynhaka\public\js\fontawesome.js */"./public/js/fontawesome.js");


/***/ })

/******/ });