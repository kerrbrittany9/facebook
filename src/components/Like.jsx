import React from "react";
import PropTypes from "prop-types";


class Like extends React.Component {

  constructor(props) {
    super(props);
    this.addLike = this.addLike.bind(this);
    this.state = {
      like: 0,
    }
  }

  addLike() {
    console.log("hello");
    var newLike = this.state.like + 1;
    console.log(newLike);
    this.setState({like: newLike});
  }

  render() {
    return (
      <div>
          <button onClick={this.addLike}>Like!</button>
          <p><em>Likes: </em>{this.state.like}</p>
      </div>
  )

  }
}

export default Like;
