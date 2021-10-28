import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./common/Header";
import { Footer } from "./common/Footer";
import Spinner from "./common/Spinner";
import ModalContainer from "./components/modal/ModalContainer";
import CarouselSlider from "./components/moviesList/CarouselSlider";
import {ListHeader} from "./components/moviesList/ListHeader";
import { toast } from "react-toastify";
import {
  addMovie,
  updateMovie,
  deleteMovie,
  cleanError
} from "./actions/listActions";
import { showModal } from "./actions/modalActions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        title: "",
        year: 0,
        director: "",
        runtime: 0,
        genre: ""
      },
      errors:[]
    };
  }
  openAddMovieModal = () => {
    this.props.showModal(
      {
        open: true,
        title: "Add Movie",
        handleAdd: this.handleAdd,
        handleChange: this.handleChange,
      },
      "addMovie"
    );
  };
  openInfoModal = updatedMovie => {
    let infoMovie = updatedMovie;
    this.props.showModal(
      {
        open: true,
        title: "Movie Info",
        movie: infoMovie,
        handleChange: this.handleChange,
        handleUpdate: this.handleUpdateMovie
      },
      "info"
    );
  };
  openDeleteConfirmation = selectedMovie => {
    const choosenMovie = selectedMovie;
    this.props.showModal(
      {
        open: true,
        title: "Delete Movie",
        choosenMovie,
        onDelete: this.handleDelete
      },
      "delete"
    );
  };
  handleError = () => {
    toast.error("Error:" + this.props.errors );
    this.props.cleanError();
  };
  handleAdd = (event, movie) => {
    event.preventDefault();
    let newMovie = { ...movie };
    this.props.addMovie(newMovie);
  };
  handleUpdateMovie = (event,updatedMovie) => {
    let currentMovieID = event.target.dataset.movieid;
    let currentPoster = event.target.dataset.poster;
    event.preventDefault();
    const savedMovie = {
      title: updatedMovie.title,
      year: updatedMovie.year,
      genre: updatedMovie.genre,
      director: updatedMovie.director,
      runtime: updatedMovie.runtime,
      poster:currentPoster,
      imdbid: currentMovieID
    };
    this.props.updateMovie(savedMovie);
    toast.success("Movie Updated!");
  };
  handleDelete = event => {
    const choosenMovieId = event.target.dataset.movieid;
    console.log("choosenMovieId",choosenMovieId ,event.target.dataset.movieid)
    event.preventDefault();
    this.props.deleteMovie({ choosenMovieId });
    toast.success("Movie Deleted!");
  };
  componentDidUpdate(prevProps) {
    if(this.props.erros !==prevProps.errors && this.props.errors.length>0){
        console.log(this.props.errors.length)
       this.handleError()
    }
  }
  render() {
    const { movies, loading } = this.props;
    return (
      <>
        <Header />
        {loading ? (
          <Spinner />
        ) : (
            <>
              <ListHeader openAddMovieModal={this.openAddMovieModal} />
              <CarouselSlider
                movies={movies}
                handleInfo={this.openInfoModal}
                handleDelete={this.openDeleteConfirmation}
              />
              <Footer />
              <ModalContainer  />
            </>
          )}
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    movies: state.movies.length === 0 ? [] : state.movies,
    loading: state.apiCallsInProgress > 0,
    errors: state.severError.length === 0 ? [] : state.severError
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (modalProps, modalType) => (
      dispatch(showModal({ modalProps, modalType }))
    )
    ,
    addMovie: movie => (
      dispatch(addMovie({ movie }))
    ),
    updateMovie: savedMovie => (
      dispatch(updateMovie({ savedMovie }))
    ),
    deleteMovie: movieId => (
      dispatch(deleteMovie({ movieId }))
    ),
    cleanError: () => (
      dispatch(cleanError())
    )
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
