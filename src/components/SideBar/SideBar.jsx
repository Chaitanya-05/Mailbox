import React from 'react'
import { Link } from 'react-router-dom'
import home from "../../assets/home.png"
import mail from "../../assets/mial.png"
import tele from "../../assets/tele.png"
import stack from "../../assets/stack.png"
import disk from "../../assets/disk.png"
import Main from "../../assets/main.png"
import "./SideBar.css"

export const SideBar = () => {
  return (
    <div className='sidebar'>
        <img className='sidebar-logo' src={Main} alt="" />
        <div>
        <Link to="/"><img src={home} alt="" /></Link>
        <Link to="/inbox"><img src={mail} alt="" /></Link>
        <Link to="/"><img src={tele} alt="" /></Link>
        <Link to="/"><img src={stack} alt="" /></Link>
        <Link to="/"><img src={disk} alt="" /></Link>
        </div>
    </div>
  )
}
