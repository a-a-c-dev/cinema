
import LocalStorageManager from "../utils/LocalStorageManager";
import {Movie} from '../App'

interface Modaltype {
  modalType: string | null,
  modalProps: any
}

export interface InitialStateType {
  movies: Movie[],
  modal: Modaltype,
  apiCallsInProgress:number,
  severError: string[],
}

const storageMovies = (LocalStorageManager.get('movies') || [])


const initialState:InitialStateType = {
  movies: storageMovies,
  modal: {
    modalType: null,
    modalProps: {}
  },
  apiCallsInProgress: 0,
  severError: [],
}
export default initialState;


