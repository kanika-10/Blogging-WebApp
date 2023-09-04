const getItem = (name) => localStorage.getItem(name);

const setItem = (name, value) => localStorage.setItem(name, value);

const clear = () => localStorage.clear();

export { getItem, setItem, clear };