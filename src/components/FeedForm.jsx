import React from "react";

class FeedForm extends React.Component {

  constructor(props) {
    super(props);
    this.publishPost = this.publishPost.bind(this);
  }

  publishPost(event) {
    event.preventDefault()
    const { _status } = this.refs;
    alert(`this is your status ${_status.value}`);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.publishPost}>
          <h3>Post</h3>
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

export default FeedForm;
