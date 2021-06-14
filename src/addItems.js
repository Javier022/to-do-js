import { getData, setData } from "./db.js";

const addTodo = (input, ul) => {
  const li = document.createElement("li");
  li.innerHTML = /*html*/ `<div class="flex justify-between shadow rounded-md p-1">
        <div class="w-3/4">
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
      </div>
`;

  ul.prepend(li);

  input.value = "";

  createTodo(li.querySelector("p"));
};

const createTodo = (todo) => {
  const value = todo.textContent;
  let todos = [];

  let newtodo = {
    name: value,
  };

  getData && getData.length !== 0 ? (todos = [...getData]) : todos;

  todos.push(newtodo);

  setData(todos);
};

export { addTodo };
