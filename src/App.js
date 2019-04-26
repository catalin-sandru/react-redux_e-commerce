import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { Switch, Route } from 'react-router-dom'
import Cart from './components/cart'
import Home from './components/home'
import Details from './components/details'
// import Modal from './components/modal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
