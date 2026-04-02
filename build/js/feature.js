"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var btnCopy = document.querySelectorAll('.btn-copy');
  if (btnCopy.length) {
    btnCopy.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var _this$closest;
        var orderNumberEl = (_this$closest = this.closest('.order-number')) === null || _this$closest === void 0 ? void 0 : _this$closest.querySelector('.id-order');
        if (!orderNumberEl) {
          console.warn('Элемент .id-order не найден');
          return;
        }
        var orderNumber = orderNumberEl.textContent.trim();
        if (!orderNumber) {
          console.warn('Номер заказа пустой');
          return;
        }
        var span = this.querySelector('span');
        var onSuccess = function onSuccess() {
          span.textContent = 'Скопировано!';
          setTimeout(function () {
            return span.textContent = 'Скопировать';
          }, 2000);
        };
        var onError = function onError() {
          span.textContent = 'Ошибка!';
          setTimeout(function () {
            return span.textContent = 'Скопировать';
          }, 2000);
        };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(orderNumber).then(onSuccess)["catch"](onError);
        } else {
          // Fallback для старых браузеров
          try {
            var textarea = document.createElement('textarea');
            textarea.value = orderNumber;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            var success = document.execCommand('copy');
            document.body.removeChild(textarea);
            success ? onSuccess() : onError();
          } catch (err) {
            console.error('Ошибка копирования:', err);
            onError();
          }
        }
      });
    });
  }
});