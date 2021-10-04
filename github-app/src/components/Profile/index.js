import React, { Component } from "react";
import PropTypes from "prop-types";

import Repos from "../Repos";

import "./index.css";

class Profile extends Component {
  render() {
    return (
      <div className="profile-info">
        <img
          src={this.props.userData.avatar_url}
          alt="perfil avatar"
          className="profile-picture"
        />

        <div>
          {" "}
          <a
            className="profile-name"
            href={this.props.userData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            {this.props.userData.name}
          </a>
          <p className="profile-description">{this.props.userData.bio}</p>
          <div className="profile-follow">
            <div className="followers">
              {this.props.userData.followers} Followers
            </div>
            <div className="following">
              {this.props.userData.following} Followings
            </div>
            <div className="repos">
              {this.props.userData.public_repos} Repositórios
            </div>
          </div>
          {this.props.userRepos && <Repos repos={this.props.userRepos} />}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired,
  userRepos: PropTypes.array.isRequired,
};

export default Profile;
