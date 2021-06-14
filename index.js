import { addTodo } from "./src/addItems.js";

const input = document.getElementById("input"),
  button = document.getElementById("addButton"),
  ul = document.getElementById("list");

button.addEventListener("click", (e) => {
  if (!input.value.trim()) {
    return alert("Debes agregar un todo");
  }
  addTodo(input, ul);
});

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  console.log("ok");
});
