import React from 'react';   
import BodyWrapper from './BodyWrapper';

class Header extends React.Component{
  style = {
    padding: 10,
    background: "#031a3a",
    color: "#fff",
    fontWeight: 300,
    fontSize: 20
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quaerat enim, quae. Ad vel numquam sint harum voluptas voluptates perferendis rerum velit soluta, repellat omnis? Unde aperiam quos error, itaque?
      </BodyWrapper>
    </div>
  }
}

export default Header;