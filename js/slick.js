const bars = document.querySelectorAll('.progress_line');
const bars_parent = document.querySelectorAll('.progress');

let timerId = setInterval(() => {
    // bars.style.width = "0";
    setProgress(0);
}, 350);

function setProgress(index) {
    if (document.querySelector('.see')) {
        document.querySelector('.see').classList.remove('see');
    }
    console.log(bars[index].offsetWidth, bars_parent[index].offsetWidth)
    if (bars[index].offsetWidth >= bars_parent[index].offsetWidth) {
        bars[index].style.width = 0;
        clearInterval(timerId);
        if (index + 1 < bars.length) {
            timerId = setInterval(() => {
                setProgress(index + 1);
            }, 300);
        } else {

            clearInterval(timerId);
            for (let i = 0; i < bars.length; i++) {
                bars[i].style.width = 0;
            }
            timerId = setInterval(() => {
                setProgress(0);
            }, 350);
        }
        return;
    }
    console.log(bars[index])
    bars[index].style.width = bars[index].offsetWidth + 10 + 'px';
    bars_parent[index].parentElement.classList.add('see');
}