const navToggle = document.querySelector('.nav-toggle, .nav-toggle-01, .nav-toggle-02, .nav-toggle-03');
const navLinks = document.querySelectorAll('.nav__link, .nav__link-01, .nav__link-02, .nav__link-03')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

