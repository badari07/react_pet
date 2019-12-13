import React from "react";

const Pet = props => {
  // return React.createElement("div", null, [
  //   React.createElement("h1", null, props.name),
  //   React.createElement("h2", null, props.animal),
  //   React.createElement("h3", null, props.breed)
  // ]);
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
