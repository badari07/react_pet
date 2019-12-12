const Pet = props => {
  return React.createElement("div", null, [
    React.createElement("h1", null, props.name),
    React.createElement("h2", null, props.animal),
    React.createElement("h3", null, props.breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
