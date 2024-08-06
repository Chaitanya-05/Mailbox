import React, { useState } from 'react'
import logo from '../../assets/google.png'
import "./LoginBox.css"
import { useNavigate } from 'react-router-dom';
export const LoginBox = () => {
    const [signup, setsignup] = useState(true);
    const navigate = useNavigate();
    function handleSignIn(){
      console.log("redirected........")
        navigate('/inbox');

        

    }

  return (
    <>
        <div className='login-box'>
            <h2>{signup ? ("Create a new account"):("Sign-In")}</h2>
            <div onClick={handleSignIn} className='login-box-google'><img src={logo} alt="" /><p>{signup ? ("Sign Up with Google"):("Sign In with Google")}</p></div>
            <div className='login-box-button'>{signup ? ("Create an account"):("Sign-In")}</div>
            <div className='login-box-foot'>
                <p>{signup ? ("Already have and account?"):("Dont have and account?")} </p>
                <p  onClick={()=>setsignup(prev=>!prev)}>{signup ? ("Sign-In"):("Sign-Up")}</p>
            </div>

        </div>
    
    </>
  )
}
