import React from "react";
import "./ButtonGroup.scss";

const ButtonGroup = ({ toggleModal }) => {
  return (
    <div className="button-group">
      <span></span>

      <button className="button-group--modal">
        <i className="material-icons">face</i>
      </button>
      <button className="button-group--load" onClick={() => toggleModal()}>
        <i className="material-icons">shuffle</i>
      </button>
    </div>
  );
};

export default ButtonGroup;
