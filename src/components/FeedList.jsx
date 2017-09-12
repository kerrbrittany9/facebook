import React from "react";
import Feed from './Feed';
import PropTypes from 'prop-types';
// import Post from '../models/Post.js';

function FeedList(props) {
  console.log(props.masterPostList);
  return (
    <div>
      <hr/>
      {props.masterPostList.map((post, index) =>
        <Post username={post.username}
          status={post.status}
          key={index}/>
      )}
    </div>
  );
}

FeedList.propTypes = {
  masterPostList: PropTypes.array
};

export default FeedList;
