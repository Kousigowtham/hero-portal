import React,{useState} from 'react'
import CustomButton from '../CustomButton/Custombutton';
import FormInput from '../form-input/form-input';
import { LOGINDETAILS } from '../const';
import './Signup.css'

function Signup() {
    const [userData,setuserData]=useState({
        username:'',
        heroname:'',
        password:'',
        confirmpassword:'',
        IsJoined: false,
    });
    
    const onSubmit=(event)=>{
        event.preventDefault();

        var ExistingUser= LOGINDETAILS.find(LoginDetail=> LoginDetail.username===userData.username);
        if(ExistingUser===undefined || ExistingUser==null)
        {
            ExistingUser= {"username" : '',"password" : ''}
        }
        if(ExistingUser.username !==userData.username && userData.confirmpassword ===userData.password)
         {
                LOGINDETAILS.push({ "username" : userData.username,
                                    "password" : userData.password   });
                setuserData({
                    username:'',
                    heroname:'',
                    password:'',
                    confirmpassword:'',
                    IsJoined: true,
                });

         }
         ExistingUser=null;
    }
const changeHandler=(event)=>{
             setuserData({
                    ...userData,
                    [event.target.name]: event.target.value,
            })
        }
       

    return (
        <React.Fragment>
            { userData.IsJoined ? (<div>
                <h2>Thanks for joining the Hero's Association! Let's save the world together</h2>
            </div> )
        :(            
        <div  class='signup' >
            <h3>Are you a new Hero?</h3>
            <h4>Welcome to HERO's ASSOCIATION</h4>
            <span>Join us to save the world!</span>
            <form  onSubmit={onSubmit}>
                    <FormInput
                           type="text"
                           name="username"
                           label="UserName"
                           value={userData.username}
                           onChange={changeHandler}
                           required
                           />
                    <FormInput 
                           name="heroname"
                           type="text"
                           label="Hero Name"
                           value={userData.heroname}
                           onChange={changeHandler}
                           required
                           />
                    <FormInput
                           name="password"
                           type="password"
                           label="Password"
                           value={userData.password}
                           onChange={changeHandler}
                            required
                            />
                    <FormInput 
                            label="Confirm Password"
                            name="confirmpassword"
                           type="password"
                           value={userData.confirmpassword}
                           onChange={changeHandler}
                            required
                            />
                    <CustomButton type="submit">Register</CustomButton>
            </form>
        </div>)}
        </React.Fragment>
    )
}

export default Signup
