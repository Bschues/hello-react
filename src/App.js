import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component{
  constructor(props){
    super(props)
    console.log(this)
    console.log(this.props)
  }
  render() {
    return (
      <p style={{color:this.props.color}}>{this.props.value}</p>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Brian's React Project</h1>
        </header>
        <Text color="green" value="Brian" />
      </div>
    );
  }
}

export default App;
