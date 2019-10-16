import React, { Component, Fragment } from "react";
import "./MovieListContainer.scss";
import Card from "../../components/Card/Card";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Modal from "../../hoc/Modal/Modal";

class MovieListContainer extends Component {
  state = {
    movies: null,
    showModal: false,
    guest_session_id: null,
    page: 1,
    genre: null,
    allGenre: {
      action: 28,
      adventure: 12,
      comedy: 35,
      crime: 80,
      drama: 18,
      fantasy: 14,
      horror: 27,
      mystery: 9648,
      romance: 10749,
      "sci-fi": 878,
      thriller: 53,
      western: 37
    }
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
        this.setState({
          movies: res.results
        });
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

  loadMoreMovies = () => {
    const genre = this.state.genre;
    const page = this.state.page;
    const urlDefault = `https://api.themoviedb.org/3/movie/popular?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&page=${page +
      1}`;
    const urlGenre = `https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.floor(
      Math.random() * (500 - 1) + 1
    )}&with_genres=${genre}`;

    fetch(this.state.genre ? urlGenre : urlDefault)
      .then(res => {
        if (res.status !== 200) {
          console.log(
            `Oh no, it appears that the Fire village is under attack by ${res.status} soldiers`
          );
        } else {
          return res.json();
        }
      })
      .then(res => {
        const movies = [...this.state.movies].concat(res.results);
        this.setState(prevState => {
          return { page: prevState.page + 1, movies };
        });
      })
      .catch(err => console.log(["ERROR"], err));
  };

  fetchMoviesByGenre = genre => {
    const allGenre = this.state.allGenre;
    this.toggleModal();
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f3edabafe1f7ed3f14c3e13e2f3a8ee3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Math.random() *
        (500 - 1) +
        1}&with_genres=${this.state.allGenre[genre]}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.results,
          genre: allGenre[genre]
        });
      })
      .catch(err => console.log(["ERROR"], err));
  };
  render() {
    return (
      <Fragment>
        <Modal
          fetchMoviesByGenre={this.fetchMoviesByGenre}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
        <div className="movie-list">
          <Card moviesList={this.state.movies} />
        </div>
        <div className="buttons-container">
          <ButtonGroup
            toggleModal={this.toggleModal}
            loadMoreMovies={this.loadMoreMovies}
          />
        </div>
      </Fragment>
    );
  }
}

export default MovieListContainer;
