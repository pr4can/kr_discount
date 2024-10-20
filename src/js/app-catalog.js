import { catalog } from "./modules/catalog.js";
import { header } from "./modules/header.js";
import { map } from "./modules/map.js";

document.addEventListener("DOMContentLoaded", () => {
    const observer = lozad(".lozad", {
        rootMargin: "400px 0px", // syntax similar to that of CSS Margin
        threshold: 0.1, // ratio of element convergence
        enableAutoReload: true, // it will reload the new image when validating attributes changes
    });
    observer.observe();

    Fancybox.bind("[data-fancybox]", {});
    AOS.init({ disable: "mobile" });

    header();
    catalog();
    map();
});
