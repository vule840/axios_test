import React, { Component } from 'react';

import Person from './Components/Person';

import PersonInput from './Components/PersonInput';

import LogoPosts from './Components/LogoPosts';

import ChuckNQuote from './Components/ChuckNQuote';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <p>sdfsdf</p>
       <Person></Person>
       <PersonInput></PersonInput>
       <LogoPosts></LogoPosts>
       <ChuckNQuote></ChuckNQuote>
      </div>
    );
  }
}

export default App;
