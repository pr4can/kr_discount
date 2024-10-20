export const catalog = () => {
    const catalogItems = document.querySelectorAll(".catalog-item");

    if (window.innerWidth > 568) {
        catalogItems.forEach((item) => {
            const slider = item.querySelector(".catalog-item-slider");
            initialize(slider);
        });
    }
};

function initialize(slider) {
    let resizeTimer;

    initializeSlider(slider);
    window.addEventListener("resize", resizeHandler);

    function resizeHandler() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            initializeSlider(slider);
        }, 500);
    }
}

function initializeSlider(slider) {
    const htmlEl = document.querySelector("html");
    const htmlStyles = window.getComputedStyle(htmlEl);
    const fontSize = Number(htmlStyles.fontSize.slice(0, -2));

    const swiper = slider.querySelector(".swiper");
    const swiperPrev = slider.querySelector(
        ".catalog-item-slider-nav__item--prev"
    );
    const swiperNext = slider.querySelector(
        ".catalog-item-slider-nav__item--next"
    );

    new Swiper(swiper, {
        loop: false,
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: fontSize * 3,
        speed: 4000,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        speed: 1000,
        easing: "cubic-bezier(0.65, 0.05, 0.36, 1)",
    });
}
