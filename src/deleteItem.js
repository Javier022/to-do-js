import { paintTodos } from "../index.js";
import { setData } from "./db.js";

export const deleteTodo = (e, db) => {
  const target =
    e.target.id === "delete" || e.target.classList.contains("fa-close");

  if (target) {
    const index = e.target.dataset.id;
    // getDataSet
    // document.querySelectorAll(`[data-name]`);
    const updateTodos = db.filter((todo) => todo.id !== index);

    setData(updateTodos);

    paintTodos(updateTodos);
  }
};
