import React from "react";

function Header(props) {

var headerStyle = {
    display: 'grid',
    gridTemplateColumns: '7% 7% 7% 60% 7.5% 7.5%',
    marginBottom: '2rem',
  }

  var buttonStyle = {
    backgroundColor: '#3B5998',
    border: '1px solid #ffffff',
    padding: '10',
    fontSize: '0.9rem',
    color: '#ffffff',
    textAlign: 'center'
  }

  var logoStyle = {
    justifySelf: 'center'
  }

  var searchStyle = {
      fontSize: '16'
  }

  return (
    <div style={headerStyle}>
      <p style={buttonStyle}>Home</p>
      <p style={buttonStyle}>Notifications</p>
      <p style={buttonStyle}>Messages</p>
      <h1 style={logoStyle}>FaceClone</h1>
    <h3 style={searchStyle}>Search</h3>
  <h3 style={searchStyle}>Tweet</h3>
    </div>
  );
}

export default Header;
