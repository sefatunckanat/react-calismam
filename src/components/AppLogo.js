import React from 'react';
const svgAppLogo = require('../assets/svg/AppLogo.svg');

class AppLogo extends React.Component{
  constructor(props){
    super(props);
    this.style.logo.width = props.width * 1;
    this.style.logo.height = props.height * 1;
  }

  style={
    display: "inline-block",
    fontSize: 0,
    logo:{
      display: "block",
      opacity: 1,
      margin: "0 auto",
      height: 32,
      width: 32,
      objectFit: "cover"
    }
  }

  render(){
    return <div style={ this.style }>
      <a href='/'>
        <img style={ this.style.logo } src={svgAppLogo} className="appLogo" alt="App Logo"/>
      </a>
    </div>
  }
}
export default AppLogo;