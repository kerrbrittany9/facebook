import React from "react";

function Header(props) {

var headerStyle = {
    display: 'grid',
    gridTemplateColumns: '7% 7% 7% 60% 7.5% 7.5%',
    marginBottom: '2rem'
  }

  var homeStyle = {
    border: '1px solid grey',
    padding: '10px 5px 0 5px',
    textAlign: 'center'
  }
  var notificationStyle = {
    border: '1px solid grey',
    padding: '10px 5px 0 5px',
    textAlign: 'center'
  }
  var messageStyle = {
    border: '1px solid grey',
    padding: '10px 5px 0 5px',
    textAlign: 'center'
  }

  var logoStyle = {
    justifySelf: 'center'
  }

  return (
    <div style={headerStyle}>
      <p style={homeStyle}>Home</p>
      <p style={notificationStyle}>Notifications</p>
      <p style={messageStyle}>Messages</p>
      <h1 style={logoStyle}>FaceClone</h1>
      <h3>Search</h3>
      <h3>Tweet</h3>
    </div>
  );
}

export default Header;
