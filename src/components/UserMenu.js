import React from "react"

class UserMenu extends React.Component{
  style={
    lineHeight: "32px",
    color: "#fff",
    userSelect: "none",
    position: "absolute",
    right: 0,
    top: 0,
    fontSize: "20px",
    fontWeight: 300
  }

  loggedIn = null;
  constructor(props) {
    super(props);
    this.loggedIn = props.loggedIn * 1;
  }


  render(){

    var button = null;
    if(this.loggedIn === 0){
      button = <span><a href="/register">Register</a> / <a href="/login">Login</a></span>;
    }else{
      button = <a href="/profile">Profile</a>;
    }
    console.log(button);

    return <div style={this.style}>
      { button }
    </div>
  }
}

export default UserMenu;