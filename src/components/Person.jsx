import React from  "react";
import PropTypes from "prop-types";

function Person(props) {
  var imgStyle = {
    width: '100%'
  }

  var statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '30% 30% 30%'
  }

  var statsStyle = {
    backgroundColor: '#dedede',
    border: '1px solid #ffffff',
    padding: '.5rem',
    fontSize: '13px'
  }

  return (
    <div>
      <img style={imgStyle} src={props.image}/>
      <h2>{props.name}</h2>
      <div style={statsContainerStyle}>
        <h4 style={statsStyle}>Tweets: 500</h4>
      <h4 style={statsStyle}>Followers: 1</h4>
    <h4 style={statsStyle}>Following: 1000</h4>
      </div>
    </div>
  );
}

Person.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string
};

export default Person;
