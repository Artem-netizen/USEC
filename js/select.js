const selected = document.querySelector(".select");
const optionCont = document.querySelector(".options-container");

const optionList = document.querySelectorAll(".option");
selected.addEventListener('click', () => {
    optionCont.classList.toggle('activ');
});
optionList.forEach(o => {
    o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        optionCont.classList.remove('activ');
    })
})