import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends Component {
  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID GTr8M8eE03-SPppC7asplm5GQnSnw0ZMBEgUlUxIhMU",
      },
    });

    console.log(response.data.results);
  }

  render() {
    return (
      <div className="pics-app ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
