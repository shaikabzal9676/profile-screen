import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navLeft">

        <img src="./logo.png" alt="" className="logo" />
        <span className="navTitle">STORIES</span>
        </div>
        <div className="navRight">
            <button className='navBtn'>Courses</button>
        </div>
        
    </div>
  )
}
