import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="query">Image search</label>
            <input
              type="text"
              id="query"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
