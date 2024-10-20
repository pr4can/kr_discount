export const header = () => {
    const btnsScroll = document.querySelectorAll(".btn-scroll");
    const contactsSection = document.querySelector(".contacts");

    btnsScroll.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            contactsSection.scrollIntoView({
                block: "end",
                behavior: "smooth",
            });
        });
    });
}