import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID GTr8M8eE03-SPppC7asplm5GQnSnw0ZMBEgUlUxIhMU",
      },
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
