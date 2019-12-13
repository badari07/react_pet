import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="luna" animal="dog" breed="hanver" />
        <Pet name="bob" animal="cat" breed="maxi" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
