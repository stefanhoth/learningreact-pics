import React, { Component } from "react";
import UnsplashApi from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await UnsplashApi.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="pics-app ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found images: {this.state.images.length}
      </div>
    );
  }
}

export default App;
