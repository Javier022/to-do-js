export const getData = JSON.parse(localStorage.getItem("todo"));

export const setData = (data) => {
  localStorage.setItem("todo", JSON.stringify(data));
};
