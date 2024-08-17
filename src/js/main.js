//*-------------------------------------------------Global Variables Start------------------------------------------>
//!SVG Icons
const svgIcons = document.querySelectorAll('#about svg , footer svg')
//!Navbar Buttons
const openBTN = document.getElementById('nav-open')
const closeBTN = document.getElementById('nav-close')
const navList = document.getElementById('nav-list')
//!Toggle Dark And Light Mode 
let mode = localStorage.getItem('Current Mode');
const windowsMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const btnToggler = document.getElementsByClassName('togglerBtn');
const toggleModeArr = Array.from(btnToggler);
//!Get Current Year
const currentYear = new Date().getFullYear();
const footerContent = document.querySelector('footer span')
//*-------------------------------------------------Global Variables End------------------------------------------>
document.addEventListener('DOMContentLoaded', () => {
    changeSVGColor()
    closeBTN.classList.add('hidden')
})
//!Change SVG icons when switching mode
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
//!Switching mode condition
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
//!Navbar Toggler Buttons
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

//*---------------------------------------Sliders Start-------------------->
//!Main Slider Start
var swiper = new Swiper(".slider", {
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },

});
//!Main Slider End

//!Projects Slider Start
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
        delay: 1500,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3,
        }
    }

});
//!Projects Slider End
//*---------------------------------------Sliders End---------------------->

// !AOS Library Init
AOS.init()

//!Get Current Year Dynamically And Add It In Footer
footerContent.innerHTML = `جميع الحقوق محفوظة لشركة وادي النيل للإنشاءات ${currentYear}©️`

// !Scroll Behavior 
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// !Scroll To Top
const arrowUp = document.getElementById("arrowUp");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 500) {
        arrowUp.classList.add("opacity-100")
        arrowUp.classList.remove("opacity-0")
    } else {
        arrowUp.classList.remove("opacity-100")
        arrowUp.classList.add("opacity-0")
    }
})
arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})