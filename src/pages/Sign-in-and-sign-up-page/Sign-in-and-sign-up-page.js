import React from 'react'
import './Sign-in-and-sign-up-page.css'
import Sign_in from '../../Components/Sign-in/Sign-in'
import Signup from '../../Components/Signup/Signup'

function Sign_in_and_sign_up_page() {
    return (
        <div className='signIn-signUp' >
           <Sign_in  />
           <Signup />
        </div>
    )
}

export default Sign_in_and_sign_up_page
