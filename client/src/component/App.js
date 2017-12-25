import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const { internet } = this.props
    return (
      <div>
        Findyday
        <div>
          {internet ? "have internet" : "have not internet"}
        </div>
      </div>
    );
  }
}

export default App;
