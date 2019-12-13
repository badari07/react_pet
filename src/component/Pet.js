import React from "react";

const Pet = props => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h3", null, props.breed)
  ]);
};

export default Pet;
