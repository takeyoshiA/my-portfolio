'use strict';

// =====↓モーダルの設定始まり===== // 
const modalBtns = document.querySelectorAll(".modal-toggle");
//↓bodyを取得
const body = document.querySelector('body');

modalBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
    //↓non-scrollクラスを付与（スクロールロック）
    body.classList.add('non-scroll');
  };
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
  btn.onclick = function () {
    const modal = btn.closest('.modal');
    modal.style.display = "none";
    //↓non-scrollクラスを外す（スクロールロック解除）
    body.classList.remove('non-scroll');
  };
});

window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};
// =====↑モーダルの設定終わり===== // 