"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Общие настройки
var SWIPER_CONFIGS = {
  baseFadeConfig: {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 1000,
    on: {
      autoplayTimeLeft: function autoplayTimeLeft(s, time, progress) {
        var activeButton = document.querySelector("".concat(s.params.pagination.el, " .swiper-pagination-bullet-active::before"));
        if (activeButton) {
          activeButton.style.animationDuration = "".concat(time / 1000, "s");
        }
      },
      slideChange: function slideChange() {
        var _this = this;
        setTimeout(function () {
          var activeButton = document.querySelector("".concat(_this.params.pagination.el, " .swiper-pagination-bullet-active"));
          if (activeButton) {
            var beforeEl = activeButton.querySelector('::before');
            if (beforeEl) {
              beforeEl.style.animation = 'none';
              setTimeout(function () {
                beforeEl.style.animation = 'progressBar 6s linear infinite';
              }, 10);
            }
          }
        }, 50);
      }
    }
  },
  baseProductsConfig: {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1280: {
        slidesPerView: 4
      }
    }
  },
  baseModalConfig: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    speed: 800,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    keyboard: {
      enabled: true
    },
    mousewheel: {
      invert: false
    },
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true
  },
  baseMobileSwiper: {
    slidesPerView: 'auto',
    spaceBetween: 12,
    loop: true
  }
};

// Конфигурации для конкретных слайдеров 
var SLIDER_CONFIGS = {
  '.mySwiper_banner': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseFadeConfig), {}, {
    pagination: {
      el: '.slider_top_block .swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.slider_top_block .arrow_btn.next',
      prevEl: '.slider_top_block .arrow_btn.prev'
    }
  }),
  '.new_products .mySwiper_products': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseProductsConfig), {}, {
    navigation: {
      nextEl: '.new_products .arrow_btn.next',
      prevEl: '.new_products .arrow_btn.prev'
    }
  }),
  '.hit_products .mySwiper_products': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseProductsConfig), {}, {
    navigation: {
      nextEl: '.hit_products .arrow_btn.next',
      prevEl: '.hit_products .arrow_btn.prev'
    }
  }),
  '.comparison-products-wrap .mySwiper_products-comparison': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseProductsConfig), {}, {
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: '.comparison-products-wrap .arrow_btn.next',
      prevEl: '.comparison-products-wrap .arrow_btn.prev'
    }
  }),
  '.buys .mySwiper_products': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseProductsConfig), {}, {
    navigation: {
      nextEl: '.buys .arrow_btn.next',
      prevEl: '.buys .arrow_btn.prev'
    }
  }),
  '.likes .mySwiper_products': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseProductsConfig), {}, {
    navigation: {
      nextEl: '.likes .arrow_btn.next',
      prevEl: '.likes .arrow_btn.prev'
    }
  }),
  '.mySwiper_room': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseFadeConfig), {}, {
    pagination: {
      el: '.swiper-pagination-room',
      clickable: true
    }
  }),
  '.mySwiper_project_detals': {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.project_detals_section .arrow_btn.next',
      prevEl: '.project_detals_section .arrow_btn.prev'
    }
  },
  '.mySwiper_bn': _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseFadeConfig), {}, {
    pagination: {
      el: '.swiper-pagination-bn',
      clickable: true
    },
    navigation: {
      nextEl: '.slider_bn_block .arrow_btn.next',
      prevEl: '.slider_bn_block .arrow_btn.prev'
    }
  }),
  '.mySwiper_tabs': {
    slidesPerView: 1,
    spaceBetween: 16,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.tabs_imag .arrow_btn.next',
      prevEl: '.tabs_imag .arrow_btn.prev'
    }
  },
  '.interiors_review': {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.interiors_section .arrow_btn.next',
      prevEl: '.interiors_section .arrow_btn.prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 'auto'
      },
      992: {
        slidesPerView: 4
      }
    }
  },
  '.say_review': {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.say_section .arrow_btn.next',
      prevEl: '.say_section .arrow_btn.prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 'auto'
      },
      992: {
        slidesPerView: 3
      }
    }
  },
  '.review-slider-swiper': {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.review-slider-modal .arrow_btn.next',
      prevEl: '.review-slider-modal .arrow_btn.prev'
    }
  },
  '.mySwiper_slider_modal': {
    slidesPerView: 1,
    spaceBetween: 12,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination-slider_modal',
      clickable: true
    }
  },
  '.reviewsSwiper': {
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    navigation: {
      nextEl: '.reviewsSwiper .arrow_btn.next',
      prevEl: '.reviewsSwiper .arrow_btn.prev'
    },
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        centeredSlides: false
      },
      992: {
        slidesPerView: 'auto'
      }
    }
  }
};

// Инициализатор слайдеров
var SwiperManager = /*#__PURE__*/function () {
  function SwiperManager() {
    _classCallCheck(this, SwiperManager);
    this.swiperInstances = new Map();
    this.responsiveSwipers = new Map();
    this.initUniversalSwipers();
    this.initResponsiveSwipers();
    this.initSpecialSwipers();
  }

  // инициализация всех слайдеров
  return _createClass(SwiperManager, [{
    key: "initUniversalSwipers",
    value: function initUniversalSwipers() {
      this.initDataAttributeSwipers();
      this.initLegacySwipers();
    }
  }, {
    key: "initDataAttributeSwipers",
    value: function initDataAttributeSwipers() {
      var _this2 = this;
      document.querySelectorAll('[data-swiper]').forEach(function (element) {
        _this2.initSwiperFromAttributes(element);
      });
    }

    // слайдеры из атрибутов
  }, {
    key: "initSwiperFromAttributes",
    value: function initSwiperFromAttributes(element) {
      try {
        var config = this.buildConfigFromAttributes(element);
        this.applyNavigation(element, config);
        this.applyPagination(element, config);
        var swiper = new Swiper(element, config);
        var instanceId = "swiper-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
        this.swiperInstances.set(instanceId, swiper);
        element.dataset.swiperInstanceId = instanceId;
        console.log('Swiper initialized with config:', config);
      } catch (error) {
        console.error('Error initializing swiper from attributes:', error, element);
      }
    }

    // конфиги из data-атрибутов
  }, {
    key: "buildConfigFromAttributes",
    value: function buildConfigFromAttributes(element) {
      var config = {};

      // Базовые настройки
      config.loop = element.dataset.swiperLoop !== 'false';
      config.speed = parseInt(element.dataset.swiperSpeed) || 500;
      config.spaceBetween = parseInt(element.dataset.swiperSpace) || 0;

      // Автоплей
      if (element.dataset.swiperAutoplay === 'true') {
        config.autoplay = {
          delay: parseInt(element.dataset.swiperAutoplayDelay) || 5000,
          disableOnInteraction: false
        };
      }

      // Эффект
      if (element.dataset.swiperEffect) {
        config.effect = element.dataset.swiperEffect;
        if (element.dataset.swiperEffect === 'fade') {
          config.fadeEffect = {
            crossFade: true
          };
        }
      }

      // Количество слайдов
      if (element.dataset.swiperPerView) {
        config.slidesPerView = element.dataset.swiperPerView === 'auto' ? 'auto' : parseInt(element.dataset.swiperPerView);
      }

      // Направление
      if (element.dataset.swiperDirection) {
        config.direction = element.dataset.swiperDirection;
      }

      // Центрированные слайды
      if (element.dataset.swiperCentered === 'true') {
        config.centeredSlides = true;
      }

      // Брейкпоинты
      if (element.dataset.swiperBreakpoints) {
        try {
          config.breakpoints = JSON.parse(element.dataset.swiperBreakpoints);
        } catch (e) {
          console.warn('Invalid breakpoints JSON, using default');
          config.breakpoints = {
            0: {
              slidesPerView: 'auto'
            },
            768: {
              slidesPerView: config.slidesPerView || 2
            },
            992: {
              slidesPerView: config.slidesPerView || 3
            }
          };
        }
      }
      return config;
    }

    // навигации
  }, {
    key: "applyNavigation",
    value: function applyNavigation(element, config) {
      var container = element.closest('[data-swiper-container]') || element.parentElement;
      var nextEl = container.querySelector('.swiper-button-next, .arrow_btn.next, [data-swiper-next]');
      var prevEl = container.querySelector('.swiper-button-prev, .arrow_btn.prev, [data-swiper-prev]');
      if (nextEl && prevEl) {
        config.navigation = {
          nextEl: nextEl,
          prevEl: prevEl
        };
      }
      if (element.dataset.swiperNext && element.dataset.swiperPrev) {
        config.navigation = {
          nextEl: element.dataset.swiperNext,
          prevEl: element.dataset.swiperPrev
        };
      }
    }

    // пагинации
  }, {
    key: "applyPagination",
    value: function applyPagination(element, config) {
      if (element.dataset.swiperPagination) {
        var paginationEl = document.querySelector(element.dataset.swiperPagination);
        if (paginationEl) {
          config.pagination = {
            el: paginationEl,
            clickable: true,
            type: element.dataset.swiperPaginationType || 'bullets'
          };
        }
      }
    }

    // обратная совместимость
  }, {
    key: "initLegacySwipers",
    value: function initLegacySwipers() {
      var _this3 = this;
      Object.keys(SLIDER_CONFIGS).forEach(function (selector) {
        var element = document.querySelector(selector);
        if (element && !element.hasAttribute('data-swiper')) {
          var config = SLIDER_CONFIGS[selector];
          _this3.swiperInstances.set(selector, new Swiper(element, config));
          if (selector === '.mySwiper_modal') {
            _this3.initModalSwiperLogic(_this3.swiperInstances.get(selector), element);
          }
        }
      });
    }

    // адаптивные слайдеры
  }, {
    key: "initResponsiveSwipers",
    value: function initResponsiveSwipers() {
      var _this4 = this;
      var responsiveConfigs = [{
        selector: '.projects-swiper',
        breakpoint: 991,
        instanceKey: 'projects',
        config: SWIPER_CONFIGS.baseMobileSwiper
      }, {
        selector: '.service_price-swiper',
        minWidth: 560,
        maxWidth: 1300,
        instanceKey: 'service_price',
        config: _objectSpread(_objectSpread({}, SWIPER_CONFIGS.baseMobileSwiper), {}, {
          spaceBetween: 16
        })
      }, {
        selector: '.comfort-swiper',
        breakpoint: 991,
        instanceKey: 'comfort',
        config: SWIPER_CONFIGS.baseMobileSwiper
      }, {
        selector: '.faq-slider-swiper',
        breakpoint: 991,
        instanceKey: 'faq',
        config: SWIPER_CONFIGS.baseMobileSwiper
      }, {
        selector: '.viewed-swiper',
        breakpoint: 991,
        instanceKey: 'viewed',
        config: SWIPER_CONFIGS.baseMobileSwiper
      }, {
        selector: '.review-card-swiper',
        breakpoint: 767,
        instanceKey: 'review-card',
        config: SWIPER_CONFIGS.baseMobileSwiper
      }];
      responsiveConfigs.forEach(function (config) {
        _this4.initResponsiveSwiper(config);
      });
      document.querySelectorAll('.article_section').forEach(function (slider) {
        var sliderClass = slider.querySelector('.article-swiper');
        if (sliderClass && !sliderClass.hasAttribute('data-swiper')) {
          _this4.initResponsiveSwiper({
            selector: ".".concat(sliderClass.className),
            breakpoint: 991,
            instanceKey: "article-".concat(Date.now()),
            config: SWIPER_CONFIGS.baseMobileSwiper
          });
        }
      });
      this.initDynamicResponsiveSwiper('.js-subcat-row');
      this.initDynamicResponsiveSwiper('.js-subcat2-row');
    }
  }, {
    key: "initResponsiveSwiper",
    value: function initResponsiveSwiper(_ref) {
      var _this5 = this;
      var selector = _ref.selector,
        breakpoint = _ref.breakpoint,
        minWidth = _ref.minWidth,
        maxWidth = _ref.maxWidth,
        instanceKey = _ref.instanceKey,
        config = _ref.config;
      var element = document.querySelector(selector);
      if (!element || element.hasAttribute('data-swiper')) return;
      var checkAndInit = function checkAndInit() {
        var width = window.innerWidth;
        var shouldBeActive = breakpoint && width <= breakpoint || minWidth && maxWidth && width >= minWidth && width < maxWidth;
        if (shouldBeActive && !_this5.responsiveSwipers.has(instanceKey)) {
          _this5.responsiveSwipers.set(instanceKey, new Swiper(selector, config));
        } else if (!shouldBeActive && _this5.responsiveSwipers.has(instanceKey)) {
          _this5.responsiveSwipers.get(instanceKey).destroy(true, true);
          _this5.responsiveSwipers["delete"](instanceKey);
        }
      };
      checkAndInit();
      window.addEventListener('resize', debounce(checkAndInit, 250));
    }
  }, {
    key: "initDynamicResponsiveSwiper",
    value: function initDynamicResponsiveSwiper(selector) {
      var _this6 = this;
      var row = document.querySelector(selector);
      if (!row || row.hasAttribute('data-swiper')) return;
      var swiperInstance = null;
      var instanceKey = selector.replace('.', '');
      var checkSwiper = function checkSwiper() {
        if (window.innerWidth <= 1426 && !swiperInstance) {
          var children = Array.from(row.children);
          row.classList.add('swiper');
          row.classList.remove('row');
          row.innerHTML = "<div class=\"swiper-wrapper\">\n                    ".concat(children.map(function (child) {
            return "<div class=\"swiper-slide\">".concat(child.outerHTML, "</div>");
          }).join(''), "\n                </div>");
          swiperInstance = new Swiper(selector, {
            slidesPerView: 'auto',
            spaceBetween: 8
          });
          _this6.responsiveSwipers.set(instanceKey, swiperInstance);
        } else if (window.innerWidth > 1426 && swiperInstance) {
          swiperInstance.destroy(true, true);
          swiperInstance = null;
          _this6.responsiveSwipers["delete"](instanceKey);
          var slides = row.querySelectorAll('.swiper-slide .col');
          row.classList.remove('swiper');
          row.classList.add('row');
          row.innerHTML = '';
          slides.forEach(function (slide) {
            return row.appendChild(slide);
          });
        }
      };
      var checkSwiperBound = function checkSwiperBound() {
        return checkSwiper.call(_this6);
      };
      checkSwiperBound();
      window.addEventListener('resize', debounce(checkSwiperBound, 250));
    }
  }, {
    key: "initSpecialSwipers",
    value: function initSpecialSwipers() {
      var _this7 = this;
      var contentSwiperWrap = document.querySelector('.contentSwiperWrap');
      if (contentSwiperWrap && !contentSwiperWrap.hasAttribute('data-swiper')) {
        var swiperThumbs = new Swiper('.contentSwiperThumb', {
          spaceBetween: 12,
          slidesPerView: 'auto',
          watchSlidesProgress: true
        });
        this.swiperInstances.set('content', new Swiper('.contentSwiper', {
          spaceBetween: 12,
          slidesPerView: 1,
          freeMode: true,
          thumbs: {
            swiper: swiperThumbs
          }
        }));
      }
      var galleryContainer = document.querySelector('.gallery-container');
      if (galleryContainer && !galleryContainer.hasAttribute('data-swiper')) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          slidesPerView: 'auto',
          direction: 'vertical',
          spaceBetween: 12,
          loop: true
        });
        var galleryMain = new Swiper('.gallery-main', {
          loop: true,
          pagination: {
            el: '.swiper-pagination-gal',
            clickable: true
          },
          navigation: {
            nextEl: '.gallery-main .next',
            prevEl: '.gallery-main .prev'
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          thumbs: {
            swiper: galleryThumbs
          }
        });
        this.swiperInstances.set('gallery', galleryMain);
        this.swiperInstances.set('gallery-thumbs', galleryThumbs);
        document.querySelectorAll('.gallery-main .swiper-slide img').forEach(function (image, index) {
          image.addEventListener('click', function () {
            var modal = new bootstrap.Modal(document.getElementById('showTabModal'));
            modal.show();
            var modalSwiper = _this7.swiperInstances.get('.mySwiper_modal');
            if (modalSwiper) {
              modalSwiper.slideToLoop(index);
            }
          });
        });
      }
    }
  }, {
    key: "initModalSwiperLogic",
    value: function initModalSwiperLogic(swiper, sliderElement) {
      var _this8 = this;
      var thumbnails = document.querySelectorAll('.thumbnail');
      var zoomLinks = document.querySelectorAll('.zoom');
      var modalEl = document.getElementById('showTabModal');
      if (!thumbnails.length || !zoomLinks.length || !modalEl) return;
      thumbnails.forEach(function (thumb, index) {
        thumb.addEventListener('click', function () {
          swiper.slideTo(index);
          _this8.updateActiveThumbnail(index, thumbnails);
        });
      });
      zoomLinks.forEach(function (zoom, i) {
        zoom.addEventListener('click', function (e) {
          e.preventDefault();
          var href = zoom.getAttribute('href');
          var slides = sliderElement.querySelectorAll('.swiper-slide img, .swiper-slide video');
          var targetIndex = 0;
          slides.forEach(function (slide, idx) {
            if (slide.getAttribute('src') === href || slide.getAttribute('poster') === href) {
              targetIndex = idx;
            }
          });
          modalEl.addEventListener('shown.bs.modal', function () {
            swiper.slideTo(targetIndex);
            _this8.updateActiveThumbnail(targetIndex, thumbnails);
          }, {
            once: true
          });
        });
      });
      swiper.on('slideChange', function () {
        _this8.updateActiveThumbnail(swiper.realIndex, thumbnails);
      });
    }
  }, {
    key: "updateActiveThumbnail",
    value: function updateActiveThumbnail(activeIndex, thumbnails) {
      thumbnails.forEach(function (thumb, index) {
        thumb.classList.toggle('active', index === activeIndex);
      });
    }
  }, {
    key: "getSwiper",
    value: function getSwiper(element) {
      if (element.dataset.swiperInstanceId) {
        return this.swiperInstances.get(element.dataset.swiperInstanceId);
      }
      var _iterator = _createForOfIteratorHelper(this.swiperInstances),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            key = _step$value[0],
            swiper = _step$value[1];
          if (key.startsWith('.') && element.matches(key)) {
            return swiper;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return null;
    }
  }, {
    key: "destroyAll",
    value: function destroyAll() {
      this.swiperInstances.forEach(function (swiper) {
        return swiper.destroy();
      });
      this.responsiveSwipers.forEach(function (swiper) {
        return swiper.destroy();
      });
      this.swiperInstances.clear();
      this.responsiveSwipers.clear();
    }

    // Инициализация нового слайдера
  }, {
    key: "addSwiper",
    value: function addSwiper(element) {
      var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!element) return null;
      if (element.hasAttribute('data-swiper')) {
        return this.initSwiperFromAttributes(element);
      }
      var config = _objectSpread({
        loop: true
      }, customConfig);
      var swiper = new Swiper(element, config);
      var instanceId = "dynamic-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9));
      this.swiperInstances.set(instanceId, swiper);
      element.dataset.swiperInstanceId = instanceId;
      return swiper;
    }
  }]);
}();
document.addEventListener('DOMContentLoaded', function () {
  window.swiperManager = new SwiperManager();
});

// Глобальные хелперы
window.initSwiper = function (element) {
  var customConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!window.swiperManager) {
    window.swiperManager = new SwiperManager();
  }
  return window.swiperManager.addSwiper(element, customConfig);
};
window.destroyAllSwipers = function () {
  if (window.swiperManager) {
    window.swiperManager.destroyAll();
  }
};

// Переинициализация при аякс
if (typeof BX !== 'undefined') {
  BX.addCustomEvent('onAjaxSuccess', function () {
    if (window.swiperManager) {
      window.swiperManager.destroyAll();
      window.swiperManager = new SwiperManager();
    }
  });
}