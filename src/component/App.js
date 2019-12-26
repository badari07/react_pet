import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Client } from "@petfinder/petfinder-js";
import Loadable from "react-loadable";
import { Provider } from "./SearchContext.js";
import Results from "./Results";
import SearchParams from "./SearchParams.js";
import NavBar from "./NavBar.js";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store/configStore.js";

const client = new Client({
  apiKey: process.env.API_KEY,
  secret: process.env.API_SECRET
});

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading split out code...</h1>;
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Seattle, WA",
      animal: "",
      Animals: [],
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }
  componentDidMount() {
    client.animalData.types().then(resp => {
      // Do something with resp.data.types
      const Animals = resp.data.types.map(type => type.name);
      this.setState({ Animals });
      //   console.log(resp);
    });
  }

  handleLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value,
        breed: ""
      },
      this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };
  getBreeds() {
    if (this.state.animal) {
      let animal = this.state.animal;
      client.animalData.breeds(animal).then(resp => {
        // Do something with resp.data.breeds
        // console.log(resp);
        if (Array.isArray(resp.data.breeds)) {
          this.setState({
            breeds: resp.data.breeds
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <ReduxProvider store={store}>
          <Provider value={this.state}>
            <Router>
              <Results path="/" />
              <LoadableDetails path="/details/:id" />
              <SearchParams path="/search-params" />
            </Router>
          </Provider>
        </ReduxProvider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
