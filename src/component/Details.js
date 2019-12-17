import React, { Component } from "react";
import { Client } from "@petfinder/petfinder-js";
import { navigate } from "@reach/router";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class Details extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    let id = this.props.id;
    client.animal
      .show(id)
      .then(resp => {
        // Do something with resp.data.animal
        let pet = resp.data.animal;
        let photo;
        if (pet.photos.length <= 0) {
          photo = "image is not found";
        } else {
          photo = pet.photos[0].medium;
        }
        this.setState({
          name: pet.name,
          animal: pet.type,
          location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
          description: pet.description,
          photo,
          breed: pet.breeds.primary,
          loading: false
        });
        console.log(resp);
      })
      .catch(() => {
        //
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const { name, animal, breed, location, description } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
