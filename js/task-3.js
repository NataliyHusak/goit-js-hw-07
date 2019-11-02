"use strict";

const images = [
  {
    src:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    src:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    src:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  }
];

const newGalery = document.querySelector("#gallery");
const createElement = createImages(images);

newGalery.insertAdjacentHTML("afterbegin", createElement);

function createImages(images) {
  return images.map(image => createGalery(image)).join(" ");

  function createGalery({ src, alt }) {
    const row = `
    <li>
     <img src = "${src}" 
    alt ="${alt}">
    
    </li>
      `;
    return row;
  }
}

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.

// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
