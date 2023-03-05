// Color changer
const body = document.querySelector("body");
const modeToggle = document.querySelector(".dark-light");

modeToggle.addEventListener("click", ()=> {
    body.classList.toggle("dark");
    modeToggle.classList.toggle("active");
});

// Hamburger Navbar
const ham = document.querySelector(".hamburger");  
const nav = document.querySelector(".navbar");

ham.addEventListener("click", ()=> {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
});

// Scroll
const hdr = document.querySelector(".header");
const goTop = document.querySelector(".scroll-up");

window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 20) {
        hdr.classList.add("sticky");
        nav.classList.add("sticky");
        goTop.classList.add("show-scroll");
    }
    else {
        hdr.classList.remove("sticky");
        nav.classList.remove("sticky");
        goTop.classList.remove("show-scroll");
    }
});

// Swiper
let swiperProducts = new Swiper(".products-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },

  });


// Navbar Active-link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// Scroll Reveal
const sr = ScrollReveal ( {
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay : 400,
    // reset: true
})

sr.reveal('.home-data, .products-container, .footer-container, .footer-info')
sr.reveal('.home-images', {delay: 600, origin: 'bottom'})
sr.reveal('.new-card, .brand-img', {interval: 100})
sr.reveal('.collection-explore:nth-child(1)', {origin: 'right'})
sr.reveal('.collection-explore:nth-child(2)', {origin: 'left'})

