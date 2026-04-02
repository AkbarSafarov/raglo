"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var html = document.documentElement;
  var overflowHidden = 'oveflowHidden';
  var menuBurger = document.querySelector('.menu_burger');
  var header = document.querySelector('.header');
  function updateStickerHeight() {
    var header = document.querySelector('.header');
    if (header) {
      var height = header.offsetHeight;
      document.documentElement.style.setProperty('--v-header-height', "".concat(height, "px"));
    }
  }
  updateStickerHeight();
  window.addEventListener('resize', function () {
    updateStickerHeight();
  });
  function accordion() {
    var accordionRows = document.querySelectorAll('.accordion_row');
    if (!accordionRows || accordionRows.length === 0) {
      return;
    }
    function closeAllAccordions() {
      accordionRows.forEach(function (row) {
        row.classList.remove('opened');
      });
    }
    function toggleAccordion(accordionRow) {
      var isOpened = accordionRow.classList.contains('opened');
      closeAllAccordions();
      if (!isOpened) {
        accordionRow.classList.add('opened');
      }
    }
    accordionRows.forEach(function (row) {
      var accordionBtn = row.querySelector('.accordion_btn');
      if (accordionBtn) {
        accordionBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          toggleAccordion(row);
        });
      }
      var accordionBody = row.querySelector('.accordion_body');
      if (accordionBody) {
        accordionBody.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }
    });
    document.addEventListener('click', function (e) {
      var isClickInsideAccordion = Array.from(accordionRows).some(function (row) {
        return row.contains(e.target);
      });
      if (!isClickInsideAccordion) {
        closeAllAccordions();
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' || e.keyCode === 27) {
        closeAllAccordions();
      }
    });
    var resetButtons = document.querySelectorAll('.accordion_body_btn .btn_button.border');
    if (resetButtons && resetButtons.length > 0) {
      resetButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          var accordionBody = this.closest('.accordion_body');
          if (accordionBody) {
            var checkboxes = accordionBody.querySelectorAll('input[type="checkbox"]');
            if (checkboxes && checkboxes.length > 0) {
              checkboxes.forEach(function (checkbox) {
                checkbox.checked = false;
              });
            }
            var radios = accordionBody.querySelectorAll('input[type="radio"]');
            if (radios && radios.length > 0) {
              radios.forEach(function (radio) {
                radio.checked = false;
              });
            }
            var priceInputs = accordionBody.querySelectorAll('.price_feild input');
            if (priceInputs && priceInputs.length > 0) {
              priceInputs.forEach(function (input) {
                input.value = '';
              });
            }

            // Обновляем счетчик
            var accordionRow = accordionBody.closest('.accordion_row');
            if (accordionRow) {
              updateCounter(accordionRow);
            }
          }
        });
      });
    }
    var showButtons = document.querySelectorAll('.accordion_body_btn .btn_button.black');
    if (showButtons && showButtons.length > 0) {
      showButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          var accordionRow = this.closest('.accordion_row');
          if (accordionRow) {
            updateCounter(accordionRow);
            accordionRow.classList.remove('opened');
          }
        });
      });
    }
    function updateCounter(accordionRow) {
      if (!accordionRow || !accordionRow.classList.contains('add')) {
        return;
      }
      var checkboxes = accordionRow.querySelectorAll('input[type="checkbox"]:checked');
      var counter = accordionRow.querySelector('.accordion_btn .count');
      if (counter) {
        var count = checkboxes ? checkboxes.length : 0;
        if (count > 0) {
          counter.textContent = " ".concat(count);
          counter.style.display = 'inline';
        } else {
          counter.textContent = '';
          counter.style.display = 'none';
        }
      }
    }
    var allCheckboxes = document.querySelectorAll('.accordion_row.add input[type="checkbox"]');
    if (allCheckboxes && allCheckboxes.length > 0) {
      allCheckboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          var accordionRow = this.closest('.accordion_row');
          if (accordionRow) {
            updateCounter(accordionRow);
          }
        });
      });
    }
    accordionRows.forEach(function (row) {
      if (row.classList.contains('add')) {
        updateCounter(row);
      }
    });
  }
  function showCheckbox() {
    var MAX_VISIBLE_ITEMS = 5;
    var filterFields = document.querySelectorAll('.filter_field');
    if (!filterFields || filterFields.length === 0) {
      return;
    }
    filterFields.forEach(function (filterField) {
      var innerField = filterField.querySelector('.inner_field');
      if (!innerField) {
        return;
      }
      var checkboxFields = innerField.querySelectorAll('.checkbox_field');
      if (!checkboxFields || checkboxFields.length <= MAX_VISIBLE_ITEMS) {
        return;
      }
      checkboxFields.forEach(function (checkbox, index) {
        if (index >= MAX_VISIBLE_ITEMS) {
          checkbox.style.display = 'none';
          checkbox.classList.add('hidden-checkbox');
        }
      });
      var showMoreBtn = document.createElement('button');
      showMoreBtn.className = 'show_more_btn';
      showMoreBtn.type = 'button';
      showMoreBtn.innerHTML = "\n                <i class=\"bi bi-chevron-down\"></i>\n                <span class=\"show-text\">\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435</span>\n                <span class=\"hide-text\" style=\"display: none;\">\u0421\u043A\u0440\u044B\u0442\u044C</span>\n                \n            ";
      innerField.appendChild(showMoreBtn);
      showMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var isExpanded = this.classList.contains('expanded');
        var hiddenCheckboxes = innerField.querySelectorAll('.checkbox_field.hidden-checkbox');
        var showText = this.querySelector('.show-text');
        var hideText = this.querySelector('.hide-text');
        var icon = this.querySelector('.bi');
        if (isExpanded) {
          hiddenCheckboxes.forEach(function (checkbox) {
            checkbox.style.display = 'none';
          });
          showText.style.display = 'inline';
          hideText.style.display = 'none';
          icon.style.transform = 'rotate(0deg)';
          this.classList.remove('expanded');
        } else {
          hiddenCheckboxes.forEach(function (checkbox) {
            checkbox.style.display = 'block';
          });
          showText.style.display = 'none';
          hideText.style.display = 'inline';
          icon.style.transform = 'rotate(180deg)';
          this.classList.add('expanded');
        }
      });
    });
  }
  accordion();
  showCheckbox();
  catalogMenu();
  function catalogMenu() {
    var btn = document.querySelector('.catalog_btn');
    var menu = document.getElementById('catalogMenu');
    if (!btn || !menu) return;

    // Create backdrop
    var backdrop = document.createElement('div');
    backdrop.className = 'catalog-menu-backdrop';
    document.body.appendChild(backdrop);
    function open() {
      menu.classList.add('is-open');
      backdrop.classList.add('is-open');
      btn.classList.add('is-active');
    }
    function close() {
      menu.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      btn.classList.remove('is-active');
    }
    function toggle() {
      menu.classList.contains('is-open') ? close() : open();
    }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // Category hover: activate panel
    var cats = menu.querySelectorAll('.catalog-menu__cat[data-cat]');
    var panels = menu.querySelectorAll('.catalog-menu__panel[data-panel]');
    function activateCat(catEl) {
      var cat = catEl.dataset.cat;
      cats.forEach(function (c) {
        return c.classList.remove('is-active');
      });
      panels.forEach(function (p) {
        return p.classList.remove('is-active');
      });
      catEl.classList.add('is-active');
      var panel = menu.querySelector(".catalog-menu__panel[data-panel=\"".concat(cat, "\"]"));
      if (panel) panel.classList.add('is-active');
    }
    cats.forEach(function (cat) {
      cat.addEventListener('mouseenter', function () {
        activateCat(this);
      });
    });

    // Activate "faucets" by default on open
    btn.addEventListener('click', function () {
      if (menu.classList.contains('is-open')) {
        var defaultCat = menu.querySelector('.catalog-menu__cat[data-cat="faucets"]');
        if (defaultCat) activateCat(defaultCat);
      }
    });
  }
  var cardGallery = document.querySelector('.gallery-thumbs');
  if (cardGallery) {
    var thumbsSwiper = new Swiper('.gallery-thumbs', {
      direction: 'vertical',
      slidesPerView: 'auto',
      spaceBetween: 16,
      watchSlidesProgress: true,
      breakpoints: {
        992: {
          direction: 'vertical'
        },
        0: {
          direction: 'horizontal'
        }
      }
    });
    var mainSwiper = new Swiper('.gallery-main', {
      spaceBetween: 10,
      thumbs: {
        swiper: thumbsSwiper
      }
    });
  }
  var colorOptions = document.querySelectorAll('.color-option');
  if (colorOptions.length) {
    colorOptions.forEach(function (option) {
      option.addEventListener('click', function () {
        colorOptions.forEach(function (o) {
          return o.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
});