import React from 'react'
import './Navbar.css'
import tim from '../../assets/right.png'
export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <span>Onebox</span>
        <div>
            <img src={tim} alt="" />
            <p>Tims workSpace </p>
        </div>

    </div>
    </>
  )
}
