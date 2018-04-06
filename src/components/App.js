import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Image from './Image';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel, Inc"/>
        <Image />
        <Footer />
      </div>
    );
  }
}

export default App;
