import React from "react";
import "./buttons.css";
import ic_arrow_right_dark from "./assets/svgs/arrow_right_dark.svg";
import ic_arrow_right_white from "./assets/svgs/arrow_right_white.svg";

const PrettyBtn = (props) => {
  if (props.variant) {
    switch (props.variant) {
      case "PRIMARY_FILLED_LARGE":
        return (
          <button
            className="PRIMARY_FILLED_LARGE"
            onClick={props.onClick}
            style={props.style}
          >
            {props.name || "Done"}
          </button>
        );
        break;
      case "SECONDARY_LARGE":
        return (
          <button
            className="SECONDARY_LARGE"
            onClick={props.onClick}
            style={props.style}
          >
            {props.name || "Done"}
          </button>
        );
        break;
      case "GET_STARTED_PRIMARY":
        return (
          <button
            className="GET_STARTED_PRIMARY"
            onClick={props.onClick}
            style={props.style}
          >
            {props.name || "Get Started"}{" "}
            <img src={ic_arrow_right_white} className="ICONS" />
          </button>
        );
        break;
      case "GET_STARTED_SECONDARY":
        return (
          <button
            className="GET_STARTED_SECONDARY"
            onClick={props.onClick}
            style={props.style}
          >
            {props.name || "Get Started"}{" "}
            <img src={ic_arrow_right_dark} className="ICONS" />
          </button>
        );
    }
  } else {
    return (
      <button
        className="PRIMARY_FILLED_LARGE"
        onClick={props.onClick}
        style={props.style}
      >
        {props.name || "Done"}
      </button>
    );
  }
};

export default PrettyBtn;
