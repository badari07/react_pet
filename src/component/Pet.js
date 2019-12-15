import React from "react";

// const Pet = props => {
//   // return React.createElement("div", null, [
//   //   React.createElement("h1", null, props.name),
//   //   React.createElement("h2", null, props.animal),
//   //   React.createElement("h3", null, props.breed)
//   // ]);
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h3>{props.breed}</h3>
//     </div>
//   );
// };

class Pet extends React.Component {
  render() {
    const { name, animal, breed, photos, loaction } = this.props;
    // console.log(photos[0].small);
    let photo;
    if (photos.length <= 0) {
      photo = "image is not found";
    } else {
      photo = photos[0].small;
    }
    return (
      <div className="pet">
        <div className="image-container">
          <img src={photo} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal}- {breed}- {loaction}
          </h2>
        </div>
      </div>
    );
  }
}

export default Pet;
