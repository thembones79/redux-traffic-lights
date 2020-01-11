import React from "react";

import TrafficLight from "./TrafficLight";
import "./TrafficLights.css";

const TrafficLights = () => {
  return (
    <div className="traffic-lights">
      <TrafficLight />
      <TrafficLight />
    </div>
  );
};

export default TrafficLights;
