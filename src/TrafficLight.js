import React from "react";
import { connect } from "react-redux";
import { RED, YELLOW, GREEN } from "./actions";
import "./TrafficLight.css";

const TrafficLight = ({ activeLight }) => {
  return (
    <div className="traffic-light">
      <div className={`light red ${activeLight === RED ? "active" : ""}`}></div>
      <div
        className={`light yellow ${activeLight === YELLOW ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${activeLight === GREEN ? "active" : ""}`}
      ></div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  console.log({ state, ownProps });
  const { id } = ownProps;
  return { activeLight: state.activeLight[id] };
}

export default connect(mapStateToProps)(TrafficLight);
