const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        navToggle.classList.add('hide')
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('hide')
    })
}

// =======================================

const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


// ==============================

const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.promo__item')
sr.reveal('.item-promo', {origin:'right'})