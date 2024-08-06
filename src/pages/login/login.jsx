import React from 'react'
import logo from '../../assets/logo-login.png'
import './login.css'
import { LoginBox } from '../../components/LoginBox/LoginBox'

const Login = () => {
  return (
    <div className='login-cont'>
        <div className='login-nav'> 
            <img src={logo} alt="" />
        </div>
        <div className='login-main'>
          <LoginBox/>
        </div>
        <div className="login-foot">
          all rights reserved
        </div>
    </div>
  )
}

export default Login