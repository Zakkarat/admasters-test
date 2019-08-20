import { combineReducers } from "redux";
import { ADD_TO_CART, ADD, MINUS, DELETE_ITEM } from "./actions";

const intialState = {
  counter: 0,
  items: []
};

const storage = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        counter: ++state.counter,
        items: state.items.some(item => item.id === action.payload.item.id)
          ? state.items.map(item => {
              if (item.id === action.payload.item.id) {
                ++item.counter;
                return item;
              } else {
                return item;
              }
            })
          : [...state.items, { ...action.payload.item, counter: 1 }]
      };
    case ADD:
      return {
        counter: ++state.counter,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            ++item.counter;
            return item;
          } else {
            return item;
          }
        })
      };
    case MINUS:
      return {
        counter: --state.counter,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            --item.counter;
            return item;
          } else {
            return item;
          }
        })
      };
    case DELETE_ITEM:
      const deleted = state.items.filter(item => item.id === action.payload);
      return {
        counter: state.counter - deleted[0].counter,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export default combineReducers({
  storage
});
