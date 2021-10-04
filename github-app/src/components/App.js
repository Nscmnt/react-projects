import React, { Component } from "react";
import SearchInput from "./Search";
import Profile from "./Profile";
import Error from "./Message";

import "./base.css";

class App extends Component {
  constructor() {
    super();
    this.base_URL = "https://api.github.com/users/";
    this.state = {
      userData: null,
      userRepos: [],
      notFound: false,
    };

    this.getGithubUserData = this.getGithubUserData.bind(this);
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-title">Search Github User </h1>
        <SearchInput onkeypress={this.getGithubUserData} />
        {this.state.userData && (
          <Profile
            userData={this.state.userData}
            userRepos={this.state.userRepos}
          />
        )}

        {this.state.notFound && <Error> Perfil não encontrado </Error>}
      </div>
    );
  }

  async getGithubUserData(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      const user = event.target.value;
      try {
        const userResponse = await fetch(this.base_URL + user);
        const userData = await userResponse.json();

        const reposResponse = await fetch(userData.repos_url);
        const userRepos = await reposResponse.json();

        this.setState({
          userData,
          userRepos,
          notFound: false,
        });
      } catch (error) {
        this.setState({
          userData: null,
          userRepos: [],
          notFound: true,
        });
      }
    }
  }
}

export default App;
