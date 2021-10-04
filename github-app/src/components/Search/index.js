import React, { Component } from "react";
import "./index.css";

class SearchInput extends Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   value: "",
  //   // };
  // }

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          onKeyPress={this.props.onkeypress}
          className="search-input"
          placeholder="Search a Github User"
        />
      </div>
    );
  }
}

export default SearchInput;
