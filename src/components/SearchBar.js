import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  onFormSubmit = e => {
      e.preventDefault();
      this.props.callMeWhenSubmitted(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.handleChange}
            /> 
          </div>
        </form>
      </div>
    );
  }
}
