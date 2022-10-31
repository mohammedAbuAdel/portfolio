const icon = document.querySelector('.header .icon')
const nav = document.querySelector('.header .nav')
icon.onclick = function (e) {
nav.classList.toggle('open')
}