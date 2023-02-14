export const set = (key, data) => {
  if (data.length > 0) localStorage.setItem(key, JSON.stringify(data));
};

export const get = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
