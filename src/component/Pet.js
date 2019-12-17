import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, loaction, id } = this.props;
    // console.log(photos[0].small);
    let photos;
    if (media.length <= 0) {
      photos = "image is not found";
    } else {
      photos = media[0].small;
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos} alt={name} />
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
