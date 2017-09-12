import React from "react";
import Post from "../models/Post.js";
import PropTypes from "prop-types";

class FeedForm extends React.Component {

  constructor(props) {
    super(props);
    this.publishPost = this.publishPost.bind(this);
  }

  publishPost(event) {
    event.preventDefault()
    const { _username, _status } = this.refs;
    var newPost = new Post(_username.value, _status.value);
    console.log(newPost);
    this.props.onNewPost(newPost);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.publishPost}>
          <h3>Post</h3>
          <input
            ref="_username"
            type="text"
            id="username"
            placeholder="username"/>
          <textarea
            ref="_status"
            type="text"
            id="status"
            placeholder="What's happening?"/>
          <button type="submit">Publish</button>
        </form>
      </div>
    );
  }
}

FeedForm.propTypes = {
  onNewPost: PropTypes.func
}

export default FeedForm;
