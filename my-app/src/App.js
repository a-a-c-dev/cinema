import React, { Component, Suspense,lazy } from "react";
import { connect } from "react-redux";
import {Spinner} from "./components/common/Spinner";
import { toast } from "react-toastify";
import {addMovie, updateMovie, deleteMovie, cleanError
} from "./actions/listActions";
import { showModal } from "./actions/modalActions";
import "./App.css";

import LocalStorageManager from "./utils/LocalStorageManager";

const Header = lazy(() => import("./components/common/Header"));
const ListContainer = lazy(() => import("./components/moviesList/ListContainer"));
const Footer = lazy(() => import("./components/common/Footer"));
const ModalContainer = lazy(() => import("./components/modal/ModalContainer"));

class App extends Component {
  constructor(props) {
    super(props);
    const storageMovies = LocalStorageManager.get("movies");
    this.state = {
      movie: {
        title: "",
        year: 0,
        director: "",
        runtime: 0,
        genre: ""
      },
      movies :storageMovies || [],
      errors:[],
      isUpdate:false
    };
  }
  
  openInfoModal = infoMovie => {
    this.props.showModal(
      {
        open: true,
        title: "Movie Information",
        movie: infoMovie
      },
      "info"
    );
  };
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
  openEditModal = updatedMovie => {
    let infoMovie = updatedMovie;
    this.props.showModal(
      {
        open: true,
        title: "Edit Movie",
        movie: infoMovie,
        handleChange: this.handleChange,
        handleUpdate: this.handleUpdateMovie
      },
      "edit"
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
    toast.error(`Error: ${this.props.errors?this.props.errors:'something went wrong '}` );
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
    this.setState(prevState=>(
      {
        ...prevState,
        isUpdate:!this.state.isUpdate}
    ))

  };

  handleDelete = event => {
    const choosenMovieId = event.target.dataset.movieid;
    event.preventDefault();
    this.props.deleteMovie({ choosenMovieId });
    toast.success("Movie Deleted!");
  };

  componentDidUpdate(prevProps,prevState) {
    if(this.props.erros !==prevProps.errors){
      if(!this.props.errors)this.handleError()
    }
    
    if(this.props.movies.length !== prevProps.movies.length ){
      LocalStorageManager.set("movies",JSON.stringify(this.props.movies));
      this.forceUpdate();
      this.setState(prevMovies=>(
        {
          ...prevMovies,
          movies:this.props.movies}
      ))
   }
  if((this.state.isUpdate !== prevState.isUpdate) ){
  if(this.state.isUpdate===true){
      LocalStorageManager.set("movies",JSON.stringify(this.props.movies));
      this.setState(prevState=>(
        {
          ...prevState,
          isUpdate:!this.state.isUpdate}
      ))
    }}

  
  }

  render() {
    const { movies, loading } = this.props;
    return (      
      <Suspense fallback={<Spinner/>}>
          <Header />
          {loading ? 
          (
          <Spinner />
          ) : 
          (
              <ListContainer 
                  openAddMovieModal={this.openAddMovieModal}
                  movies={movies}
                  handleInfo={this.openInfoModal}
                  handleEdit={this.openEditModal}
                  handleDelete={this.openDeleteConfirmation}
              />
            )}
          <Footer />
          <ModalContainer  />
      </Suspense>
    );
  }
}


const mapStateToProps = (state) => {
  
  return {
    movies: state.movies.length === 0 ? [] : state.movies,
    loading: state.apiCallsInProgress > 0,
    errors: state.severError.length === 0 ? [] : state.severErrorm
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
    ),

  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
