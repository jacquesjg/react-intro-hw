import React from 'react'

export default function Nav(props) {
  return (

    <div className="nav" style={{ backgroundColor: props.backgroundColor }}>
      <ul>
        <li onClick={() => props.test("green")}>Green</li>
        <li onClick={() => props.test("red")}>Red</li>
        <li onClick={() => props.test("blue")}>Blue</li>
      </ul>
    </div>
  )
}


