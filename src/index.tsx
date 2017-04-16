import * as React from "react";
import * as ReactDOM from "react-dom";
//import {Checkbox} from "./components/checkbox";
import Hello from "./components/Hello";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
//test comment

const reducer = (state:any, action:any) => {
    switch (action.type){
        case "PLUS":
            return { ...state, views: state.views + 1 };
        case "MINUS":
            return { ...state, views: state.views - 1 };
        default:
            return state;
    }
};
const initialState = {
    views: 20
};
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
              <Hello/>
    </Provider>,
    document.getElementById("example")
);