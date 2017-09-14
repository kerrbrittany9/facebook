import React from "react";
import PropTypes from "prop-types";
import Like from "./Like";

function Post(props) {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>{props.status}</p>
      <Like/>
    </div>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Post;
