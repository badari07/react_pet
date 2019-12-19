import React from "react";
import { Client } from "@petfinder/petfinder-js";
import Pet from "./Pet";
import { Consumer } from "./SearchContext.js";
import SearchBox from "./SearchBox.js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    this.search();
  }
  search = () => {
    client.animal
      .search({
        limit: 100,
        location: this.props.searchParams.loaction,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(resp => {
        // Do something with resp.data.animals
        let pets;
        if (resp.data.animals) {
          if (Array.isArray(resp.data.animals)) {
            pets = resp.data.animals;
          } else {
            pets = [resp.data.animals];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
        // console.log(resp);
      })

      .catch(function(error) {
        // Handle the error
        console.log(`you got ${error}`);
      });
  };
  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              animal={pet.type}
              name={pet.name}
              breed={pet.breeds.primary}
              loaction={`${pet.contact.address.city}, ${
                pet.contact.address.state
              }`}
              media={pet.photos}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default function ResultWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
}
