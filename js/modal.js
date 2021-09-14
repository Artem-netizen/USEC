let popupBg = document.querySelector('.modal');
let popup = document.querySelector('.modal-window');
let openPop = document.querySelectorAll('.open-popup');
let closePopup = document.querySelector('.cansel-img');
openPop.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add("active");
    })
});
closePopup.addEventListener("click", () => {
    popupBg.classList.remove("active");
});
document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove("active");
    }
});