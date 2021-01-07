import React,{useState} from 'react'
import { LOGINDETAILS } from '../const';
import CustomButton from '../CustomButton/Custombutton';
import FormInput from '../form-input/form-input';

import './Sign-in.css'

function SignIn() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const [isExisitngUser,setisExisitngUser]=useState('');


const submitHandler= (event)=>{
    event.preventDefault();
    
    var ExistingUser= LOGINDETAILS.find(LoginDetail=> LoginDetail.username===username);
    if(ExistingUser===undefined || ExistingUser==null)
    {
        window.alert("This Hero is not in the society yet. Be the Hero now by joining the Hero's Association!")
    }
    else if(ExistingUser.password!==password)
    {
        window.alert("IncorrectPassword")
    }
    setusername('');
    setpassword('');

}
const changeHandler=(event)=>{

 switch(event.target.name){
     case 'username':
         setusername(()=>event.target.value);
         break;
     case 'password':
        setpassword(()=>event.target.value);
         break;
 }

}
    return (
        <div className='sign-in'>
            <h3>SIGN IN</h3>
            <h4>I already have an account</h4>
            <span>Sign In with username and password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                        label='UserName'
                        type='text' 
                        name='username'
                        onChange={changeHandler} 
                        value={username} required/>
                <FormInput
                        label='Password'
                        type='password' 
                        name='password' 
                        onChange={changeHandler}  
                        value={password}required/>
                        
                <CustomButton 
                        type="submit">LOGIN</CustomButton>
            </form>
            </div>)
}

export default SignIn
