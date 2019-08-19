import React, {Component} from "react";
import { combineReducers } from "redux";
import { ADD_TO_CART } from "./actions";

const intialState = {
    items: []
}

const itemsReducer = (state = intialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                items: [state.items, item]
            }
        default: 
            return state;
    }
}

export default combineReducers({
    itemsReducer
  });
  