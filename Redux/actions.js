export const ADD_TO_CART = "ADD_TO_CART";
export const ADD = "ADD";
export const MINUS = "MINUS";
export const DELETE_ITEM = "DELETE_ITEM";

export const addToCart = item => ({
  type: ADD_TO_CART,
  payload: item
});

export const add = id => ({
  type: ADD,
  payload: id
});

export const minus = id => ({
  type: MINUS,
  payload: id
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});
