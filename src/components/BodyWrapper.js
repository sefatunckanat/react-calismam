import React from 'react';   

class BodyWrapper extends React.Component{
  style={
    margin: "0 auto",
    maxWidth: 1200,
    position: "relative"
  }
  render(){
    return <div style={this.style}>
      {this.props.children}
    </div>
  }
}
export default BodyWrapper;