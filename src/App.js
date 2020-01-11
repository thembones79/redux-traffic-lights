import React from "react";
import { connect } from "react-redux";

import { changeLight } from "./actions";
import TrafficLights from "./TrafficLights";
import "./App.css";

const App = ({ changeLight }) => {
  return (
    <div className="app">
      <TrafficLights />
      <button onClick={changeLight} className="next">
        Next
      </button>
    </div>
  );
};

export default connect(null, { changeLight })(App);
