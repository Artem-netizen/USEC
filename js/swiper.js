const slide = document.querySelectorAll('.block');
const slideItem = document.querySelectorAll('.carousel-slide');
$(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
});

//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function(index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 9);
}

function interval() {
    if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 7);
        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            $('.single-item').slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }
            startProgressbar();
        }
    }
}

// активный класс
slide.forEach(function(item) {
        item.addEventListener("click", function() {
            let currentSlide = item;
            let slideId = currentSlide.getAttribute("data-index");
            let currentTab = document.querySelector(slideId);

            console.log(slideId);

            slide.forEach(function(item) {
                item.classList.remove("see");
            });
            slideItem.forEach(function(item) {
                item.classList.remove("see");
            });

            currentSlide.classList.add("see");
            currentTab.classList.add("see");
        })
    })
    // 

function resetProgressbar() {
    $('.inProgress').css({
        width: 0 + '%'
    });
    clearInterval(tick);
}
startProgressbar();
// End ticking machine

$('.progressBarContainer div').click(function() {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    startProgressbar();
});