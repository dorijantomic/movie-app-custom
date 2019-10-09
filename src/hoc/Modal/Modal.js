import React, { Fragment } from "react";
import "./Modal.scss";
const Modal = props => {
  return (
    <Fragment>
      {props.showModal ? (
        <div
          className="modal-container"
          onClick={e => {
            props.toggleModal();
          }}
        >
          <div className="modal" onClick={e => e.stopPropagation()}>
            {" "}
            {/* Prevents the toggleModal from being triggered*/}
            <div className="modal__heading">
              <h1>Select Genre</h1>
            </div>
            <div className="modal__buttons">
              <button onClick={() => props.toggleModal()}>Action</button>
              <button onClick={() => props.toggleModal()}>Adventure</button>
              <button onClick={() => props.toggleModal()}>Comedy</button>
              <button onClick={() => props.toggleModal()}>Crime</button>
              <button onClick={() => props.toggleModal()}>Drama</button>
              <button onClick={() => props.toggleModal()}>Fantasy</button>
              <button onClick={() => props.toggleModal()}>Horror</button>
              <button onClick={() => props.toggleModal()}>Mystery</button>
              <button onClick={() => props.toggleModal()}>Romance</button>
              <button onClick={() => props.toggleModal()}>
                Science Fiction
              </button>
              <button onClick={() => props.toggleModal()}>Thriller</button>
              <button onClick={() => props.toggleModal()}>Western</button>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Modal;
