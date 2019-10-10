import React, { Component, Fragment } from "react";
import "./MovieListContainer.scss";
import Card from "../../components/Card/Card";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Modal from "../../hoc/Modal/Modal";

class MovieListContainer extends Component {
  state = {
    movies: null,
    showModal: false,
    guest_session_id: null
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=1`
    )
      .then(res => {
        if (res.status !== 200) {
          console.log(
            `Oh no, it appears that the Leaf village is under attack by ${res.status} soldiers`
          );
        } else {
          return res.json();
        }
      })
      .then(res => {
        console.log(res);
        this.setState(
          {
            movies: res.results
          },
          () => {
            fetch(
              `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3`
            )
              .then(res => res.json())
              .then(res => {
                this.setState({ guestSessionId: res.guest_session_id });
              });
          }
        );
      })
      .catch(err => console.log(err));
  }

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
          <Card moviesList={this.state.movies}/>
        </div>
        <div className="buttons-container">
          <ButtonGroup toggleModal={this.toggleModal} />
        </div>
      </Fragment>
    );
  }
}

export default MovieListContainer;
