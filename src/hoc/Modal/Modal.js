import React, { Fragment } from "react";
import "./Modal.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const Modal = ({ showModal, toggleModal, fetchMoviesByGenre }) => {
  return (
    <CSSTransition
      timeout={1000}
      in={showModal}
      unmountOnExit
      classNames="modal-container"
    >
      <div
        className="modal-container"
        onClick={e => {
          toggleModal();
        }}
      >
        <div className="modal" onClick={e => e.stopPropagation()}>
          {" "}
          {/* Prevents the toggleModal from being triggered*/}
          <div className="modal__heading">
            <h1>Select Genre</h1>
          </div>
          <div className="modal__buttons">
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Action
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Adventure
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Comedy
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Crime
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Drama
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Fantasy
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Horror
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Mystery
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Romance
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Science Fiction
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Thriller
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent)}>
              Western
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
