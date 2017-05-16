import React from 'react';   
import BodyWrapper from './BodyWrapper';
import AppLogo from './AppLogo';
import UserMenu from './UserMenu';

class Header extends React.Component{
  style = {
    padding: 10,
    background: "#31313a",
    fontSize: 0
  }

  constructor(props){
    super(props);
    this.state = { status: false }

    this.name = props.name;
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
        <AppLogo width="32" height="32"/>
        <UserMenu loggedIn="1" userName={ this.name }/>
      </BodyWrapper>
    </div>
  }
}

export default Header;