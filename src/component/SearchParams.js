import React, { Component } from "react";
import { Client } from "@petfinder/petfinder-js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class SearchParams extends Component {
  state = {
    location: "Seattle, WA",
    animal: "",
    breed: "",
    Animals: [],
    breeds: []
  };

  componentDidMount() {
    client.animalData.types().then(resp => {
      // Do something with resp.data.types
      const Animals = resp.data.types.map(type => type.name);
      this.setState({ Animals });
      //   console.log(resp);
    });
  }
  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      let animal = this.state.animal;
      client.animalData.breeds(animal).then(resp => {
        // Do something with resp.data.breeds
        // console.log(resp);
        if (Array.isArray(resp.data.breeds)) {
          this.setState({
            breeds: resp.data.breeds
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }

  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Loaction
          <input
            id="location"
            value={this.state.location}
            placeholder="location"
            onChange={this.handleLocationChange}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {this.state.Animals.map(
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
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={!this.state.breeds.length}
          >
            <option />
            {this.state.breeds.map(
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
      </div>
    );
  }
}

export default SearchParams;
