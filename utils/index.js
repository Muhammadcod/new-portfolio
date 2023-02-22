export const selectItem = (items, keys) => {
  const newItems = items.filter((item) => keys.includes(item.name));
  return newItems.length ? newItems : items.slice(0, 6);
};
