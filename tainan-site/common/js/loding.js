'use strict';

window.onload = function () {
    const load = document.getElementById('loading');
    setTimeout(() => {
        load.classList.add('loaded')
    }, "2500");
}