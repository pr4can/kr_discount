export const map = () => {
    const htmlEl = document.querySelector("html");
    const htmlStyles = window.getComputedStyle(htmlEl);
    const fontSize = Number(htmlStyles.fontSize.slice(0, -2));

    ymaps.ready(init);


    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center:
                window.innerWidth < 569
                    ? [45.039581, 38.939802]
                    : [45.037728, 38.93773],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: [],
        });
        var myPlacemark = new ymaps.Placemark(
            [45.037698, 38.939914],
            {},
            {
                iconLayout: "default#image",
                iconImageHref: "img/svg/yandex-map-icon.svg",
                iconImageSize: [fontSize * 3.98, fontSize * 6],
                iconImageOffset: [-20, -60],
            }
        );
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable("scrollZoom");
        myMap.behaviors.disable("drag");
        myMap.behaviors.disable("multiTouch");
    }
};
