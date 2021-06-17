export const setData = (data) => {
  localStorage.setItem("todo", JSON.stringify(data));
};
