import React from "react";
import { Client } from "@petfinder/petfinder-js";
import Pet from "./Pet";

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
    client.animal
      .search({ location: "Seattle, WA" })
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
        console.log(resp);
      })
      .catch(function(error) {
        // Handle the error
        console.log(`you got ${error}`);
      });
  }
  render() {
    return (
      <div className="search">
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
              photos={pet.photos}
              id={pet.id}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;
