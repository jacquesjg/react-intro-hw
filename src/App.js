import React, { Component } from 'react';
import "./App.css";
import Nav from "./components/Nav";
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';

export class App extends Component {
  state = {
    backgroundColor: "",
  };

  handleColorChange = (color) => {
    this.setState({
      backgroundColor: color,
    });
  }


  render() {
    return (
      <div className="container">

        <Header />

        <Nav test={this.handleColorChange} backgroundColor={this.state.backgroundColor} />

        <Content />

        <Footer />

      </div >
    )
  }
}



export default App;


