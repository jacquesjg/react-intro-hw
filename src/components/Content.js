import React from 'react'
import doggy from "../images/doggy.png";
import Box from './Box';

export default function Content() {
  return (
    <div className="content">
      Body
      <br />
      <br />
      <img className="contentPic" src={doggy} alt="yea"></img>
      <br />
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.</p>
      <br />
      <div className="threeBoxesContainer">
        <Box name="box 1" img src={doggy} />
        <Box name="box 2" img src="" />
        <Box name="box 3" img src="" />
      </div>
    </div>


  )
}
