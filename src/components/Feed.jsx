import React from "react";
import FeedForm from "./FeedForm";
import FeedList from "./FeedList";


class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
    };
    this.publishPost = this.publishPost.bind(this);
  }

  publishPost(newPost) {
    var newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render() {
    return(
      <div>
        <FeedForm onNewPost={this.publishPost}/>
        <FeedList
          masterPostList = {this.state.masterPostList}/>

      </div>
    );
  }
}

export default Feed;
