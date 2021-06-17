import { addTodo } from "./src/addItems.js";
import { deleteTodo } from "./src/deleteItem.js";

const input = document.getElementById("input"),
  button = document.getElementById("addButton"),
  todoList = document.getElementById("todo-list"),
  fragment = document.createDocumentFragment(),
  templateTodo = document.getElementById("template-todo").content;

button.addEventListener("click", (e) => {
  if (!input.value.trim()) {
    return alert("Debes agregar un todo");
  }
  addTodo(input, todoList);
});

window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  const todos_db = JSON.parse(localStorage.getItem("todo"));

  if (todos_db && todos_db !== 0) {
    paintTodos(todos_db);
  }
});

export const paintTodos = (todos) => {
  todoList.innerHTML = "";

  todos.map((todo) => {
    templateTodo.querySelector("p").textContent = todo.name;

    templateTodo.querySelector(".bg-green-500").dataset.id = todo.id;

    const clone = templateTodo.cloneNode(true);

    fragment.prepend(clone);
  });

  todoList.prepend(fragment);
};

todoList.addEventListener("click", (e) => {
  const todos_db = JSON.parse(localStorage.getItem("todo"));
  deleteTodo(e, todos_db);

  e.stopPropagation();
});
