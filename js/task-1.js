"use strict";

const countOfCategories = document.querySelectorAll(".item");

console.log(`В списке ${countOfCategories.length} категории`);

const items = document.querySelectorAll(".item");
Array.prototype.forEach.call(items, element => {
  const title = element.querySelector("h2").innerHTML;
  const countOfElements = element.querySelectorAll("li").length;
  console.log(`Категория: ${title};
Количество элементов: ${countOfElements}`);
});
