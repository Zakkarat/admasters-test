import React, {Component} from "react";
import { combineReducers } from "redux";
import { ADD_TO_CART } from "./actions";

const intialState = {
    counter: 0,
    items: []
}

const itemsReducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                counter: state.counter++,
                items: [state.items, action.payload.item]
            }
        default: 
            return state;
    }
}

export default combineReducers({
    itemsReducer
  });
  