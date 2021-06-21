import { addTodo } from "./src/addItems.js";
import { deleteTodo } from "./src/deleteItem.js";
import { updateItem } from "./src/updateItem.js";

const input = document.getElementById("input"),
  button = document.getElementById("addButton"),
  todoList = document.getElementById("todo-list"),
  fragment = document.createDocumentFragment(),
  templateTodo = document.getElementById("template-todo").content;

input.addEventListener("keyup", (e) => {
  if (!input.value.trim()) {
    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();
    addTodo(input, todoList);
  }
});

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

    templateTodo.querySelector(".bg-yellow-500").dataset.id = todo.id;
    templateTodo.querySelector(".bg-green-500").dataset.id = todo.id;
    templateTodo.querySelector(".fa-repeat").dataset.id = todo.id;
    templateTodo.querySelector(".fa-close").dataset.id = todo.id;

    if (todo.state === true) {
      templateTodo
        .querySelector(".flex.justify-between.shadow")
        .classList.remove("bg-none");

      templateTodo
        .querySelector(".flex.justify-between.shadow")
        .classList.add("bg-blue-100");
      // .classList.add(`${todo.state ? "bg-blue-100" : "bg-none"}`);
    }

    if (todo.state === false) {
      templateTodo
        .querySelector(".flex.justify-between.shadow")
        .classList.remove("bg-blue-100");

      templateTodo
        .querySelector(".flex.justify-between.shadow")
        .classList.add("bg-none");
    }

    const clone = templateTodo.cloneNode(true);

    fragment.prepend(clone);
  });

  todoList.prepend(fragment);
};

todoList.addEventListener("click", (e) => {
  const todos_db = JSON.parse(localStorage.getItem("todo"));
  deleteTodo(e, todos_db);

  updateItem(e, todos_db);

  e.stopPropagation();
});
