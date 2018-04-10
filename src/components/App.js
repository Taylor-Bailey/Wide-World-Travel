import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Image from './Image';
import bg from '../images/sci.png'
import Footer from './Footer';
import Destination from './Destination';
import Guides from './Guide';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel, Inc"/>
        <Image bg={bg} />
        <Guides  Guide={Guides}/>
        <Footer Destination={Destination}/>
      </div>
    );
  }
}

export default App;
