"use strict";

const inputEnter = document.querySelector("#validation-input");
inputEnter.addEventListener("blur", inputValue);

function inputValue() {
  if (inputEnter.value.length === 6) {
    inputEnter.classList.add("valid");
    inputField.classList.remove("invalid");
  } else inputEnter.classList.add("invalid");
}

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте,
//  указывается в его атрибуте data-length.
// Если введено подходящее количество,
// то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
