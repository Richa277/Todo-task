export const set = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};

export const get = () => {
  return JSON.parse(localStorage.getItem("data"));
};
