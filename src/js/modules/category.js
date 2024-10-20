export const category = () => {
    const bodyElement = document.querySelector("body");

    const btnFilter = document.querySelector(".category__btn");
    const modal = document.querySelector(".category-modal");
    const modalClose = modal.querySelector(".category-modal__close");

    btnFilter.addEventListener("click", function (event) {
        event.preventDefault();
        bodyElement.classList.add("not-scrolling");
        setTimeout(() => {
            modal.classList.add("category-modal--show");
        }, 300);
    });

    modalClose.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("category-modal--show");
        setTimeout(() => {
            bodyElement.classList.remove("not-scrolling");
        }, 300);
    });
};
