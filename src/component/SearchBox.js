import React, { Component } from "react";
import { connect } from "react-redux";
import getBreeds from "../actionCreaters/getBreeds.js";
import changeLocation from "../actionCreaters/changeLocation";
import changeAnimal from "../actionCreaters/changeAnimal";
import changeBreed from "../actionCreaters/changeBreed";

class SerachBox extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="location">
            Loaction
            <input
              id="location"
              value={this.props.location}
              placeholder="location"
              onChange={this.props.handleLocationChange}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {this.props.Animals.map(
                animal => (
                  <option key={animal} value={animal}>
                    {animal}
                  </option>
                )
                //   console.log(animal)
              )}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!this.props.breeds.length}
            >
              <option />
              {this.props.breeds.map(
                breed => (
                  <option key={breed.name} value={breed.name}>
                    {breed.name}
                  </option>
                )
                //   console.log(breed.name)
              )}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ breed, breeds, animal, location, Animals }) => ({
  breed,
  breeds,
  location,
  animal,
  Animals
});

const mapDispatchToProps = dispatch => ({
  handleAnimalChange(event) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event) {
    dispatch(changeBreed(event.target.value));
  },
  handleLocationChange(event) {
    dispatch(changeLocation(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SerachBox);
