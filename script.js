let shoppingList = [];

const input = document.querySelector(".new-input input");
const buttons = document.querySelectorAll(".new-input button");
const list = document.querySelector(".list");

const addBtn = buttons[0];
const shiftBtn = buttons[1];
const popBtn = buttons[2];

function renderList() {
  list.innerHTML = "";

  if (shoppingList.length === 0) {
    list.innerHTML = "";
    return;
  }

  shoppingList.forEach(function (item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = item;

    list.appendChild(card);
  });
}

addBtn.addEventListener("click", function () {
  const value = input.value.trim();

  if (value !== "") {
    shoppingList.push(value);
    input.value = "";
    renderList();
  }
});

shiftBtn.addEventListener("click", function () {
  shoppingList.shift();
  renderList();
});

popBtn.addEventListener("click", function () {
  shoppingList.pop();
  renderList();
});

console.log(shoppingList);
