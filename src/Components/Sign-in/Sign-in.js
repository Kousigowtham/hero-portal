import React,{useState} from 'react'
import { LOGINDETAILS } from '../const';
import CustomButton from '../CustomButton/Custombutton';
import FormInput from '../form-input/form-input';
import { connect } from "react-redux";
import setLoginStatus from "../../redux/User/userAction";

import './Sign-in.css'

function SignIn({isLogged,setLoginStatus}) {
    const [userData,setuserData]=useState({
        'username':'',
        'password':''
    });

const submitHandler= (event)=>{
    event.preventDefault();
    
    var ExistingUser= LOGINDETAILS.find(LoginDetail=> LoginDetail.username===userData.username);
    if(ExistingUser===undefined || ExistingUser==null)
    {
        window.alert("This Hero is not in the society yet. Be the Hero now by joining the Hero's Association!")
    }
    else if(ExistingUser.password!==userData.password)
    {
        window.alert("IncorrectPassword")
    }
    else{
        console.log(isLogged);
        setLoginStatus({isLogged:true});
        console.log(isLogged);  

    }
    setuserData({
        'username':'',
        'password':''
    })

}
const changeHandler=(event)=>{
    setuserData({
           ...userData,
           [event.target.name]: event.target.value,
   })
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
                        value={userData.username} required/>
                <FormInput
                        label='Password'
                        type='password' 
                        name='password' 
                        onChange={changeHandler}  
                        value={userData.password}required/>
                        
                <CustomButton 
                        type="submit">LOGIN</CustomButton>
            </form>
            </div>)
}


const mapDispatchToProps=dispatch=>({
    setLoginStatus : user=>(dispatch(setLoginStatus(user)))    
})

export default connect(null,mapDispatchToProps)(SignIn);
