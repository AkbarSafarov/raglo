"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var itemTooltip;
  document.querySelectorAll('.cart-header-btns > a').forEach(function (item) {
    itemTooltip = item.dataset.tooltip;
    if (itemTooltip) {
      tippy(item, {
        theme: 'light',
        content: itemTooltip,
        placement: 'bottom',
        arrow: true
      });
    }
  });
  var fizCheckbox = document.querySelector('input[name="fiz"]');
  var yurCheckbox = document.querySelector('input[name="yur"]');
  if (fizCheckbox && yurCheckbox) {
    var toggleFields = function toggleFields(e) {
      if (e.target === fizCheckbox) {
        yurCheckbox.checked = false;
        innField.classList.add('d-none');
      } else if (e.target === yurCheckbox) {
        fizCheckbox.checked = false;
        innField.classList.remove('d-none');
      }
    };
    var innField = document.querySelector('.inn-field');
    fizCheckbox.addEventListener("change", toggleFields);
    yurCheckbox.addEventListener("change", toggleFields);
    fizCheckbox.checked = true;
    innField.classList.add('d-none');
  }
  var orderLabel = document.querySelectorAll('.jsOrderLabelHead');
  if (orderLabel.length) {
    orderLabel.forEach(function (head) {
      head.addEventListener('click', function () {
        var parent = this.closest('.order__item-label.block');
        var allBlocks = document.querySelectorAll('.order__item-label.block');
        allBlocks.forEach(function (block) {
          if (block === parent) {
            block.classList.toggle('active');
          } else {
            block.classList.remove('active');
          }
        });
      });
    });
  }
  var orderPayments = document.querySelectorAll('.order__item-labels-payment .order__item-label');
  if (orderPayments.length) {
    orderPayments.forEach(function (head) {
      head.addEventListener('click', function () {
        var allBlocks = document.querySelectorAll('.order__item-labels-payment .order__item-label');
        allBlocks.forEach(function (el) {
          return el.classList.remove('active');
        });
        head.classList.add('active');
      });
    });
  }
  if (document.querySelector('.tooltip-item')) {
    var itemTooltipDelivery;
    document.querySelectorAll('.tooltip-item').forEach(function (item) {
      itemTooltipDelivery = item.dataset.tooltip;
      if (itemTooltipDelivery) {
        tippy(item, {
          theme: 'light',
          allowHTML: true,
          content: itemTooltipDelivery,
          placement: 'top',
          arrow: true
        });
      }
    });
  }
});
$(function () {
  if ($('.cart_page').length > 0) {
    $('.select-all-cart-items').on('click', function () {
      $(this).toggleClass('selected');
      var isActive = $(this).hasClass('selected');
      if (isActive) {
        $('.cart-item').addClass('selected');
      } else {
        $('.cart-item').removeClass('selected');
      }
    });
    $('.cart-item .custom-checkbox').on('click', function () {
      $(this).closest('.cart-item').toggleClass('selected');
      var allItems = $('.cart-item').length;
      var selectedItems = $('.cart-item.selected').length;
      if (allItems === selectedItems) {
        $('.select-all-cart-items').addClass('selected');
      } else {
        $('.select-all-cart-items').removeClass('selected');
      }
    });
    $('.cart-item__amount-input input').on('change keyup', function () {
      var val = $(this).val();
      val = val.replace(/\D/g, '');
      if (val == 1) {
        $(this).closest('.cart-item__amount').find('.cart-item__minus-btn').addClass('hide');
        $(this).closest('.cart-item__amount').find('.cart-item__delete-btn').removeClass('hide');
      } else {
        $(this).closest('.cart-item__amount').find('.cart-item__minus-btn').removeClass('hide');
        $(this).closest('.cart-item__amount').find('.cart-item__delete-btn').addClass('hide');
      }
    });
    $('.cart-item__plus-btn').on('click', function () {
      var input = $(this).closest('.cart-item__amount').find('.cart-item__amount-input input');
      var val = input.val();
      val = val.replace(/\D/g, '');
      val = parseInt(val) + 1;
      input.val(val);
      if (val > 1) {
        $(this).closest('.cart-item__amount').find('.cart-item__minus-btn').removeClass('hide');
        $(this).closest('.cart-item__amount').find('.cart-item__delete-btn').addClass('hide');
      }
    });
    $('.cart-item__minus-btn').on('click', function () {
      var input = $(this).closest('.cart-item__amount').find('.cart-item__amount-input input');
      var val = input.val();
      val = val.replace(/\D/g, '');
      val = parseInt(val) - 1;
      if (val < 1) val = 1;
      input.val(val);
      if (val == 1) {
        $(this).closest('.cart-item__amount').find('.cart-item__minus-btn').addClass('hide');
        $(this).closest('.cart-item__amount').find('.cart-item__delete-btn').removeClass('hide');
      }
    });
    $('.cart-item__delete-btn').on('click', function () {
      $(this).closest('.cart-item').remove();
      var allItems = $('.cart-item').length;
      var selectedItems = $('.cart-item.selected').length;
      if (allItems === selectedItems) {
        $('.select-all-cart-items').addClass('selected');
      } else {
        $('.select-all-cart-items').removeClass('selected');
      }
    });
    $('.promocode-input').on('change keyup', function () {
      var val = $(this).val();
      if (val.length > 2) {
        $(this).closest('.promocode-input-block').find('.promocode-input-btn').addClass('active');
      } else {
        $(this).closest('.promocode-input-block').find('.promocode-input-btn').removeClass('active');
      }
    });
    if ($('.promocode-input').val().length) {
      $('.promocode-input-btn').addClass('promo-accepted');
    } else {
      $('.promocode-input-btn').removeClass('promo-accepted');
    }
    $('.promocode-input-btn').on('click', function () {
      $('.cart-total-block__items').addClass('loading');
    });
    $('.add-installation-btn').on('click', function () {
      $(this).toggleClass('active');
      $('.assembly-notice').slideToggle(200);
    });
  }
});