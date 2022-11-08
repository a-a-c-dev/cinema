
import LocalStorageManager from "../utils/LocalStorageManager";

const storageMovies = (LocalStorageManager.get('movies') || [])

export default {
  movies: storageMovies,
  modal: {
    modalType: "",
    modalProps: {}
  },
  apiCallsInProgress: 0,
  severError: [],
};
