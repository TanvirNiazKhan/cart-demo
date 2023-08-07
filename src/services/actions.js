export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};

export const removeToCart = (item) => {
  return {
    type: "REMOVE_TO_CART",
    payload: item,
  };
};
