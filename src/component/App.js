import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Loadable from "react-loadable";
import Results from "./Results";
import SearchParams from "./SearchParams.js";
import NavBar from "./NavBar.js";
import { Provider } from "react-redux";
import store from "../store/configStore.js";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading split out code...</h1>;
  }
});

console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <LoadableDetails path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
