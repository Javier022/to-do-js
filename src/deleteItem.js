import { paintTodos } from "../index.js";
import { setData } from "./db.js";

export const deleteTodo = (e, db) => {
  const index = e.target.dataset.id;

  if (e.target.classList.contains("bg-green-500")) {
    // getDataSet
    // document.querySelectorAll(`[data-name]`);
    const updateTodos = db.filter((todo) => todo.id !== index);

    setData(updateTodos);

    paintTodos(updateTodos);
  }
};
