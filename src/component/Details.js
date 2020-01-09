import React, { Component } from "react";
import { Client } from "@petfinder/petfinder-js";
import { navigate } from "@reach/router";
import Loadable from "react-loadable";
import Carousel from "./Carousel.js";
import Modal from "./Modal.js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadableContent = Loadable({
  loader: () => import("./AdoptModalContent.js"),
  loading() {
    return <h1>loading content...</h1>;
  }
});

class Details extends Component {
  state = {
    loading: true,
    showModal: false
  };

  componentDidMount() {
    let id = this.props.id;
    client.animal
      .show(id)
      .then(resp => {
        // Do something with resp.data.animal
        let pet = resp.data.animal;
        let photos;
        if (pet.photos.length <= 0) {
          photos = "image is not found";
        } else {
          photos = pet.photos;
        }
        this.setState({
          name: pet.name,
          animal: pet.type,
          location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
          description: pet.description,
          media: photos,
          breed: pet.breeds.primary,
          loading: false,
          url: pet.url
        });
        // console.log(resp);
      })
      .catch(() => {
        //
        navigate("/");
      });
  }
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  adopt = () => navigate(this.state.url);
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const {
      name,
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name} </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <LoadableContent
                toggleModal={this.toggleModal}
                adopt={this.adopt}
                name={name}
              />
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
