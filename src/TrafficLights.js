import React from "react";

import TrafficLight from "./TrafficLight";
import { A, B } from "./actions";
import "./TrafficLights.css";

const TrafficLights = () => {
  return (
    <div className="traffic-lights">
      <TrafficLight id={A} />
      <TrafficLight id={B} />
    </div>
  );
};

export default TrafficLights;
