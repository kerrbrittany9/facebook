import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Summary from "./Summary";
import Feed from "./Feed";
import Requests from "./Requests";

function App(props){

  var baseStyle = {
    fontSize: '13'
  }

  var mainContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '20% 60% 10%',
    gridGap: '3% 3%'
  }

  return (
    <div style={baseStyle}>
      <Header/>
      <div style={mainContainerStyle}>
        <div>
          <Profile/>
          <Summary/>
        </div>
        <div><Feed/></div>
        <div><Requests/></div>
      </div>
    </div>
  );
}

export default App;
