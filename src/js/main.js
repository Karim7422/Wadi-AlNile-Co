//!-------------------------------------------------Global Variables Start------------------------------------------>
//!Change SVG Color
let svgIcons = document.querySelectorAll('#about svg')

//!Navbar Buttons
const openBTN = document.getElementById('nav-open')
const closeBTN = document.getElementById('nav-close')
const navList = document.getElementById('nav-list')
//Toggle Dark And Light Mode 
let mode = localStorage.getItem('Current Mode');
const windowsMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnToggler = document.getElementsByClassName('togglerBtn');
const toggleModeArr = Array.from(btnToggler);
//!-------------------------------------------------Global Variables End------------------------------------------>
document.addEventListener('DOMContentLoaded', () => {
    changeSVGColor()
    closeBTN.classList.add('hidden')
})
function changeSVGColor() {
    if (mode == 'light') {
        svgIcons.forEach((el) => {
            el.setAttribute('fill', "#000")
        })
    } else if (mode == 'dark') {
        svgIcons.forEach((el) => {
            el.setAttribute('fill', "#fff")
        })
    }
}
//Toggle Dark And Light Mode 
if (mode === null) {
    mode = windowsMode ? 'dark' : 'light';
}
localStorage.setItem('Current Mode', mode);
document.documentElement.classList.add(mode);
toggleModeArr.map((el) => {
    el.addEventListener('click', () => {
        mode = mode === 'light' ? 'dark' : 'light';
        changeSVGColor()
        localStorage.setItem('Current Mode', mode);
        document.documentElement.classList.toggle('dark');
    });
});




openBTN.addEventListener('click', () => {
    navList.classList.add('h-screen')
    closeBTN.classList.remove('hidden')
    openBTN.classList.add('hidden')
})
closeBTN.addEventListener('click', () => {
    navList.classList.remove('h-screen')
    closeBTN.classList.add('hidden')
    openBTN.classList.remove('hidden')
})

//Slider
var swiper = new Swiper(".slider", {
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
    },

});