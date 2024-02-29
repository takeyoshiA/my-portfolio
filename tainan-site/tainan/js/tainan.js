'use strict';
// モーダル
//↓bodyを取得
const body = document.querySelector('body');
const modalBtns = document.querySelectorAll(".modal-toggle");
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

// ハンバーガーメニュー
const menuOverlay = document.querySelector('.menu-overlay');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
});

// Close menu overlay
function closeMenu() {
  menuOverlay.classList.remove('active');
}
// =====↓トップページアイコンの設定始まり===== // 
//スクロールした時に処理を実行
window.addEventListener('scroll', function () {
  //トップへ戻るボタンを取得
  let topBtn = document.querySelector('.toppage-btn');

  //画面上部からヘッダー下の位置取得
  const headerArea = document.querySelector('header').getBoundingClientRect().bottom;

  //ヘッダーのスクロールが終わったらactiveクラスを付与
  if (headerArea <= 0) {
    topBtn.classList.add('active');
  } else {
    //ヘッダーのスクロール中はactiveクラスを外す
    topBtn.classList.remove('active');
  }
  //ドキュメントの高さを取得
  const scrollHeight = document.body.clientHeight;

  //↓スクロールの縦の座標を取得
  const scrollPosition = window.pageYOffset;

  //windowの高さを取得
  const windowHeignt = window.innerHeight;

  //footer取得
  const footer = document.querySelector('footer');

  //footerの高さ
  const footerHeight = footer.offsetHeight;
  if (scrollHeight - scrollPosition - windowHeignt <= footerHeight) {
    topBtn.classList.add('stop');
  } else {
    topBtn.classList.remove('stop');
  }
});
// =====↑トップページアイコンの設定終わり===== // 