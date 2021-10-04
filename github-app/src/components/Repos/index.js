import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

class Repos extends Component {
  render() {
    const listRepo = this.props.repos.slice(0, 6).map((repo, index) => (
      <li key={index}>
        {" "}
        <a
          href={repo.html_url}
          className="tag"
          rel="noreferrer"
          target="_blank"
        >
          ${repo.name}
        </a>
      </li>
    ));

    return <div className="repos-tags">{<ul>{listRepo}</ul>}</div>;
  }
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
