import React from "react";
import "./ButtonGroup.scss";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <span></span>

      <button className="button-group--modal">
        <i class="material-icons">face</i>
      </button>
      <button className="button-group--load">
        <i class="material-icons">shuffle</i>
      </button>
    </div>
  );
};

export default ButtonGroup;
