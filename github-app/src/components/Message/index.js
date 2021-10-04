import React, { Component } from "react";

class Message extends Component {
  render() {
    return <div className="error">{this.props.children}</div>;
  }
}

export default Message;
