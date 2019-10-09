import React from "react";
import "./ButtonGroup.scss";

const ButtonGroup = ({ toggleModal }) => {
  return (
    <div className="button-group">
      <span></span>

      <button className="button-group--modal">
        <i class="material-icons">face</i>
      </button>
      <button className="button-group--load" onClick={() => toggleModal()}>
        <i class="material-icons">shuffle</i>
      </button>
    </div>
  );
};

export default ButtonGroup;
