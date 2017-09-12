import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <div>
      <h3>{props.username}</h3>
      <p>{props.status}</p>
    </div>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Post;
