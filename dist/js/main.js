"use strict";
var images = document.getElementById('images');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var img = document.querySelectorAll('#images img');
var idx = 0;
function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    }
    else if (idx < 0) {
        idx = img.length - 1;
    }
    images.style.transform = "translateX(-" + idx * 100 + "%)";
}
function run() {
    idx++;
    changeImage();
}
var interval = setInterval(run, 2000);
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}
rightBtn.addEventListener('click', function () {
    idx++;
    changeImage();
    resetInterval();
});
leftBtn.addEventListener('click', function () {
    idx--;
    changeImage();
    resetInterval();
});
