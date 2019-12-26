import { combineReducers } from "redux";
import breedsReducer from "./breeds.js";
import breedReducer from "./breed.js";
import animalReducer from "./animal.js";
import loactionReducer from "./location.js";

export default combineReducers({
  breedsReducer,
  breedReducer,
  animalReducer,
  loactionReducer
});
