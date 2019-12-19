import React, { Component } from "react";
import { Consumer } from "./SearchContext.js";

class SerachBox extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };
  render() {
    return (
      <Consumer>
        {context => (
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Loaction
                <input
                  id="location"
                  value={context.location}
                  placeholder="location"
                  onChange={context.handleLocationChange}
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {context.Animals.map(
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
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length}
                >
                  <option />
                  {context.breeds.map(
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
        )}
      </Consumer>
    );
  }
}

export default SerachBox;
