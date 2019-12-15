import React from "react";
import { render } from "react-dom";
// import pf from "petfinder-client";
import { Client } from "@petfinder/petfinder-js";
import Pet from "./Pet";

const client = new Client({
  apiKey: "l17DIr0dMsFwEx8rrAgZAotWeeaXWK2JP4AHre6HU1bgGLa4rT",
  secret: "inCZaTd1EQrm10APLT32zgQqteUMnvSgtyBMWRtA"
});

// const petfinder = pf({
//   key: process.env.API_KEY,
//   secret: process.env.API_SECRET
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    // petfinder.breed.list({ animal: "dog" }).then(console.log, console.error);
    client.animal
      .search({ location: "Seattle, WA" })
      .then(resp => {
        // Do something with resp.data.organizations
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
      <div>
        <h1>Adopt Me!</h1>
        <div>
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
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
