import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handle() {
    alert("u clicked me");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handle }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "luna",
        animal: "dog",
        breed: "hanvar"
      }),
      React.createElement(Pet, { name: "box", animal: "duck", breed: "foxy" }),
      React.createElement(Pet, { name: "gunu", animal: "cat", breed: "tighhe" })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
