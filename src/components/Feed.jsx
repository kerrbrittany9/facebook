import React from "react";

class Feed extends React.Component {

  constructor(props) {
    super(props);
  }

  publishPost(event) {
    console.log("Post has been published");
  }

  render() {
    return(
      <div>
        <h3>Post</h3>
        <textarea placeholder="What's happening?"/>
        <button onClick={this.publishPost}>Publish</button>
      </div>
    );
  }
}

export default Feed;
