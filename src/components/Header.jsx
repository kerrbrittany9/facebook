import React from "react";

function Header(props) {

  var homeStyle = {
    border: '1px solid grey',
    float: 'left',
    padding: '5px'
  }
  var notificationStyle = {
    border: '1px solid grey',
    float: 'left',
    padding: '5px'
  }
  var messageStyle = {
    border: '1px solid grey',
    float: 'left',
    padding: '5px'
  }
  return (
    <div>
      <h3 style={homeStyle}>Home</h3>
      <h3 style={notificationStyle}>Notifications</h3>
      <h3 style={messageStyle}>Messages</h3>
      <h1>FaceClone</h1>
      <h3>Search</h3>
      <h3>Tweet</h3>
    </div>
  );
}

export default Header;
