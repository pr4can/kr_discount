export const popular = () => {
    let resizeTimer;

    initializeSlider();
    window.addEventListener("resize", resizeHandler);

    function resizeHandler() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            initializeSlider();
        }, 500);
    }
};

function initializeSlider() {
    const htmlEl = document.querySelector("html");
    const htmlStyles = window.getComputedStyle(htmlEl);
    const fontSize = Number(htmlStyles.fontSize.slice(0, -2));

    const slider = document.querySelector(".popular-slider");
    const swiper = slider.querySelector(".swiper");
    const swiperPrev = slider.querySelector(".popular-slider-nav__item--prev");
    const swiperNext = slider.querySelector(".popular-slider-nav__item--next");

    new Swiper(swiper, {
        loop: false,
        slidesPerGroup: 1,
        spaceBetween: fontSize * 3,
        speed: 4000,
        navigation: {
            nextEl: swiperNext,
            prevEl: swiperPrev,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            569: {
                slidesPerView: 3,
            },
        },
        speed: 1000,
        easing: "cubic-bezier(0.65, 0.05, 0.36, 1)",
    });
}
