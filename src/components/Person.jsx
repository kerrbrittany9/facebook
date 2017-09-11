import React from  "react";
import PropTypes from "prop-types";

function Person(props) {
  var imgStyle = {
    width: '30%'
  }
  return (
    <div>
      <img style={imgStyle} src={props.image}/>
      <h2>{props.name}</h2>
      <h4>Tweets</h4>
      <h4>Followers</h4>
      <h4>Following</h4>
    </div>
  );
}

Person.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Person;
