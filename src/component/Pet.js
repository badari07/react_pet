import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, photos, loaction, id } = this.props;
    // console.log(photos[0].small);
    let photo;
    if (photos.length <= 0) {
      photo = "image is not found";
    } else {
      photo = photos[0].small;
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photo} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal}- {breed}- {loaction}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
