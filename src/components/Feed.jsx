import React from "react";
import FeedForm from "./FeedForm";

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
    };
  }

  publishPost(event) {
    console.log("Post has been published");
  }

  render() {
    return(
      <div>
        <FeedForm/>
      </div>
    );
  }
}

export default Feed;
