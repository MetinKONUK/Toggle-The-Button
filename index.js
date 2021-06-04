import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// A simple react file to toggle a button
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn : false
    }
  this.handleClick  = () => {
    this.setState({
      isOn :!(this.state.isOn)
    });
  }
  }


  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.isOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);