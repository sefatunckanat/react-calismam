import React from 'react';   

class Header extends React.Component{
  style = {
    base: {
      padding: "10px",
      background: "#031a3a",
      color: "#fff"
    }
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
    return <div style={ this.style.base }>
      {this.props.title} { this.props.isim}
      <button onClick={this.handleLogin}>
        {this.state.status ? 'Çıkış Yap' : 'Giriş Yap'}
      </button>
    </div>
  }
}

export default Header;