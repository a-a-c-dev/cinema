import React, { Component, Suspense,lazy } from "react";
import { connect } from "react-redux";
import {Spinner} from "./components/common/Spinner";
import { toast } from "react-toastify";
import {addMovie, updateMovie, deleteMovie, cleanError
} from "./actions/listActions";
import { showModal } from "./actions/modalActions";
import "./App.css";import 
{ bindActionCreators,Action,Dispatch, AnyAction} from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import LocalStorageManager from "./utils/LocalStorageManager";
import { stringify } from "querystring";

const Header = lazy(() => import("./components/common/Header"));
const ListContainer = lazy(() => import("./components/moviesList/ListContainer"));
const Footer = lazy(() => import("./components/common/Footer"));
const ModalContainer = lazy(() => import("./components/modal/ModalContainer"));

interface AppProps{
  movies:Movie[],
  loading:boolean,
  errors?:string[],
  showModal: (modalProps:any, modalType :string | null) => void,
  addMovie: (movie:Movie) => void,
  updateMovie: (savedMovie:Movie) => void,
  deleteMovie: (movieId:string) => void,
  cleanError: () => void

}

interface AppState{
  movie:Movie ,
  movies : Movie[],
  errors?:string[],
  isUpdate:boolean
}

export interface Movie{
  title:string, 
  year:string, 
  director:string, 
  runtime:string, 
  genre:string,  
  actors?:string,
  country?:string, 
  boxoffice?:string,
  plot?:string,
  poster?:string,
  imdbid?:string,
  id?:string
}

class App extends Component<AppProps,AppState> {
  constructor(props : AppProps ) {
    super(props);
    const storageMovies = LocalStorageManager.get("movies");
    this.state = {
      movie: {
        title: "",
        year: "",
        director: "",
        runtime: '',
        genre: ""
      },
      movies :storageMovies || [],
      errors:[],
      isUpdate:false
    };
  }
  
  openInfoModal = (infoMovie:Movie) => {
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
        handleAdd: this.handleAdd
      },
      "addMovie"
    );
  };
  openEditModal = (updatedMovie:Movie) => {
    let infoMovie = updatedMovie;
    this.props.showModal(
      {
        open: true,
        title: "Edit Movie",
        movie: infoMovie,
        handleUpdate: this.handleUpdateMovie
      },
      "edit"
    );
  };
  openDeleteConfirmation = (selectedMovie:Movie) => {
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
  handleAdd = (event:React.FormEvent<HTMLFormElement>, movie:Movie) => {
    event.preventDefault();
    let newMovie = { ...movie };
    this.props.addMovie(newMovie);
  };
  handleUpdateMovie = (event:React.ChangeEvent<HTMLInputElement>,updatedMovie:Movie) => {
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

  handleDelete = (event:React.FormEvent<HTMLFormElement>) => {
    const choosenMovieId = (event.target as HTMLFormElement).dataset.movieid;
    event.preventDefault();
    
    this.props.deleteMovie( choosenMovieId as string );
    toast.success("Movie Deleted!");
  };

  componentDidUpdate(prevProps:AppProps,prevState:AppState) {
    if(this.props.errors !==prevProps.errors){
      if(!this.props.errors)this.handleError()
    }
    
    if(Object.keys(this.props.movies).length !== Object.keys(prevProps.movies).length ){
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


const mapStateToProps = (state:any) => {
  
  return {
    movies: state.movies.length === 0 ? [] : state.movies,
    loading: state.apiCallsInProgress > 0,
    errors: state.severError.length === 0 ? [] : state.severErrorm
  };
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    showModal: (modalProps:any, modalType: null|string) => (
      dispatch(showModal({ modalProps, modalType, type: 'SHOW_MODAL' }))
    )
    ,
    addMovie: (movie:Movie) => (
      dispatch(addMovie({ movie }))
    ),
    updateMovie: (savedMovie: Movie) => (
      dispatch(updateMovie(savedMovie))
    ),
    deleteMovie: (movieId:string  ) => (
      dispatch(deleteMovie( movieId))
    ),
    cleanError: () => (
      dispatch(cleanError())
    ),

  }
} ; 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
