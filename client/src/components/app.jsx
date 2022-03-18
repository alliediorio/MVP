import React, { useState } from 'react';
import USAmap from './USAmap.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      currentPark: {}
    }
  }

  render() {
    return (
      <div className='app-container'>
        <h1 className='title'>Where Is That National Park?</h1>
        <USAmap />
      </div>
    )
  }
}



export default App;