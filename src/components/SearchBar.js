import React, { Component } from "react";

export default class SearchBar extends Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="query">Image search</label>
            <input type="text" id="query" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
