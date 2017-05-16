import React from 'react';   
import BodyWrapper from './BodyWrapper';
import AppLogo from './AppLogo';
import UserMenu from './UserMenu';

class Header extends React.Component{
  style = {
    padding: 10,
    background: "#031a3a",
    fontSize: 0
  }

  constructor(props){
    super(props);
    this.state = { status: false }

    this.handleLogin = this.handleLogin.bind(this);
  }
  
  handleLogin(){
    this.setState(prevState=>({
      status: !prevState.status
    }));
  }

  render(){
    return <div style={ this.style }>
      <BodyWrapper>
        <AppLogo/>
        <UserMenu loggedIn="0"/>
      </BodyWrapper>
    </div>
  }
}

export default Header;