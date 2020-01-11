import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import TrafficLight from "./TrafficLight";
import { RED, YELLOW, GREEN, CHANGE_LIGHT } from "./actions";

const initialState = { activeLight: RED };

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LIGHT:
      switch (state.activeLight) {
        case RED:
          return { activeLight: YELLOW };
        case YELLOW:
          return { activeLight: GREEN };
        case GREEN:
          return { activeLight: RED };
        default:
          return state;
      }

    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return <TrafficLight />;
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
