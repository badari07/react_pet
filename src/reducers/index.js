import { combineReducers } from "redux";
import breeds from "./breeds.js";
import breed from "./breed.js";
import animal from "./animal.js";
import location from "./location.js";
import Animals from "./animals.js";

export default combineReducers({
  breeds,
  breed,
  animal,
  location,
  Animals
});
