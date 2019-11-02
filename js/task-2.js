"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ul = document.querySelector("#ingredients");

const createIngredient = array => {
  const items = array.map(i => {
    const li = document.createElement("li");
    li.textContent = i;
    return li;
  });

  ul.append(...items);
};

createIngredient(ingredients);

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().
