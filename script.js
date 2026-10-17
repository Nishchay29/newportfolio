/*=============== CUSTOM CURSOR ===============*/
const cursor = document.getElementById('cursor');
const interactiveElements = document.querySelectorAll('a, .button, .home__social-link, .skill__badge, .projects__card');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

/*=============== SCROLLREVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
})

sr.reveal(`.home__data, .about__data, .education__data`)
sr.reveal(`.home__img-wrapper`, {delay: 400, origin: 'bottom'})
sr.reveal(`.about__container .section__title, .education .section__title`, {origin: 'left'})
sr.reveal(`.projects__card`, {interval: 150})
sr.reveal(`.contact__box`, {interval: 150, origin: 'bottom'})
sr.reveal(`.footer__container`, {origin: 'bottom'})