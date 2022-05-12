function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

const burger = document.querySelector(".icon-menu")
const headerLinks = document.querySelectorAll(".header-down__nav")
const headerColumn = document.querySelectorAll(".header-down__column")
const header = document.querySelector(".header")
const body = document.querySelector("body")

burger.addEventListener("click", e => {
    burger.classList.toggle("active")
    header.classList.toggle("active")
    body.classList.toggle("active")
    headerColumn.forEach(elem => elem.classList.toggle("active"))
    headerLinks.forEach(elem => elem.classList.toggle("active"))
})