import { setData } from "./db.js";

const addTodo = (input, todoList) => {
  const todo = document.createElement("div");
  todo.dataset.id = Date.now();
  todo.classList.add(
    "flex",
    "justify-between",
    "shadow",
    "rounded-md",
    "p-4",
    "my-5"
  );

  todo.innerHTML =
    /*html*/
    `<div id="li" class="w-3/4">
          <p class="px-3 inline-block align-middle  overflow-clip overflow-hidden ...">${input.value}</p>
        </div>
        <div
          class="
            w-1/4
            flex flex-wrap
            content-center
            items-center
            justify-around
          "
        >
          <button
            id="reset"
            class="
              h-8
              w-12
              rounded
              transition
              duration-500
              ease-in-out
              bg-yellow-500
              transform
              hover:-translate-y-1
              hover:scale-110
              ...
            "
          >
            -
          </button>
          <button
            id="delete"
            class="
              h-8
              w-12
              rounded
              transition
              duration-500
              ease-in-out
              bg-green-500
              transform
              hover:-translate-y-1
              hover:scale-110
              ...
            "
          >
            x
          </button>
        </div>
      
`;

  // console.log(todo.dataset.id, "add id");
  todo.querySelector(".bg-yellow-500").dataset.id = todo.dataset.id;
  todo.querySelector(".bg-green-500").dataset.id = todo.dataset.id;

  todoList.prepend(todo);

  input.value = "";

  createTodo(todo);
};

const createTodo = (todo) => {
  const todos_db = JSON.parse(localStorage.getItem("todo"));

  const value = todo.querySelector("p").textContent;

  let todos = [];

  let newtodo = {
    id: todo.dataset.id,
    name: value,
  };

  todos_db ? (todos = [...todos_db]) : todos;

  todos.push(newtodo);

  setData(todos);
};

export { addTodo };
