import React, { Component } from "react";
import { navigate } from "@reach/router";
import SearchBox from "./SearchBox.js";

class SearchParams extends Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
