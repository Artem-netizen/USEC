const progress = document.querySelector(".bandline");
const btn = document.querySelector(".next-section");

btn.onclick = () => {
    progress.classList.toggle("down");
}