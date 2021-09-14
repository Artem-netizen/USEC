const menuWrap = document.querySelector('.nav__item');
const menuContainer = document.querySelector('.nav__link');
for (const i = 0; i < menuContainer.length; i++) {
    menuContainer[i].addEventListener('click', function() {
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        this.className += 'active';
    });
}
document.querySelectorAll(".nav__link").forEach(el => el.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
}));
document.querySelectorAll(".nav__link").forEach(el => el.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
}));