import React, { Component } from 'react';
import "./App.css";
import doggy from "./images/doggy.png";

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

        <div className="header">
          <center><h1>Jacques Jean-Gilles</h1></center>
        </div>

        <div className="nav" style={{ backgroundColor: this.state.backgroundColor }}>
          <ul style={{ listStyleType: "none" }}>
            <li onClick={() => this.handleColorChange("green")}>Green</li>
            <li onClick={() => this.handleColorChange("red")}>Red</li>
            <li onClick={() => this.handleColorChange("blue")}>Blue</li>
          </ul>
        </div>

        <div className="content">
          Body
          <br />
          <br />
          <img className="contentPic" src={doggy} alt="yea"></img>
          <br />
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
          <br />
          <div className="threeBoxesContainer">
            <div>Box 1</div>
            <div>Box 2</div>
            <div>Box 3</div>
          </div>
        </div>

        <div className="footer">
          <span>Copyright Jacques Jean-Gilles</span>
        </div>

      </div >
    )
  }
}

export default App

