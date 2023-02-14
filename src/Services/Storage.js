export const set = (key, value) => {
  if (value.length > 0) localStorage.setItem(key, JSON.stringify(value));
};

export const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
