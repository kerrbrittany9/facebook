import React from "react";

class FeedForm extends React.Component {

  publishPost(event) {
    event.preventDefault()
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
