import React from 'react';
const svgAppLogo = require('../assets/svg/AppLogo.svg');

class AppLogo extends React.Component{
  style={
    display: "inline-block",
    fontSize: 0,
    logo:{
      display: "block",
      opacity: 0.9,
      margin: "0 auto",
      height: 32
    }
  }

  render(){
    return <div style={ this.style }>
      <a href='/'>
        <img style={ this.style.logo } src={svgAppLogo} className="appLogo" />
      </a>
    </div>
  }
}
export default AppLogo;