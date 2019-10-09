import React, { Component, Fragment } from "react";
import "./MovieListContainer.scss";
import Card from "../../components/Card/Card";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Modal from "../../hoc/Modal/Modal";

class MovieListContainer extends Component {
  state = {
    movies: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    showModal: false
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        showModal: !prevState.showModal
      };
    });
  };
  render() {
    return (
      <Fragment>
        <Modal
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
        <div className="movie-list">
          {this.state.movies.map((movie, i) => {
            return <Card />;
          })}
        </div>
        <div className="buttons-container">
          <ButtonGroup toggleModal={this.toggleModal} />
        </div>
      </Fragment>
    );
  }
}

export default MovieListContainer;
