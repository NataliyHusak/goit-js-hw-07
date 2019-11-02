"use strict";

const inputSize = document.getElementById("font-size-control");
const outputSize = document.getElementById("text");

inputSize.addEventListener("input", () => {
  outputSize.style.fontSize = inputSize.value + "px";
});

// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input)
// и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.
