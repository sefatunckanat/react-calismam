import React from 'react';   

class BodyWrapper extends React.Component{
  render(){
    return <div className="bodyWrapper">
      {this.props.children}
    </div>
  }
}
export default BodyWrapper;