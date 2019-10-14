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
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Action
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Adventure
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Comedy
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Crime
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Drama
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Fantasy
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Horror
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Mystery
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Romance
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Sci-fi
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Thriller
            </button>
            <button onClick={e => fetchMoviesByGenre(e.target.textContent.toLocaleLowerCase())}>
              Western
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
