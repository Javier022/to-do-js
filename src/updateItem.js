import { paintTodos } from "../index.js";
import { setData } from "./db.js";

export const updateItem = (e, db) => {
  const target =
    e.target.classList.contains("bg-yellow-500") ||
    e.target.classList.contains("fa-repeat");

  if (target) {
    const index = e.target.dataset.id;

    const updateTodos = db.map((todo) => {
      if (todo.id === index) {
        todo.state = !todo.state;
        return todo;
      }
      return todo;
    });

    setData(updateTodos);

    paintTodos(updateTodos);

    // console.log(todoList.querySelectorAll(`[data-id]`).dataset.id);
  }
};
