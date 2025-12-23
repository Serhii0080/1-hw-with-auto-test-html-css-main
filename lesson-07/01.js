/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg",
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg",
    "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg",
];

const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");

const img = document.getElementById("web-tech-image");

let caunter = 0;

next.addEventListener("click", function () {
    for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
        if (caunter < WEB_TECH_IMAGES.length - 1) {
            caunter += 1;
            return img.setAttribute("src", WEB_TECH_IMAGES[caunter]);
        } else {
            caunter = 0;
            return img.setAttribute("src", WEB_TECH_IMAGES[caunter]);
        }
    }
});

prev.addEventListener("click", function () {
    for (let i = 0; i < WEB_TECH_IMAGES.length; i++) {
        if (caunter > 0) {
            caunter -= 1;
            return img.setAttribute("src", WEB_TECH_IMAGES[caunter]);
        } else {
            caunter = WEB_TECH_IMAGES.length;
        }
    }
});
