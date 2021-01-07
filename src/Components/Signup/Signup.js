import React,{useState} from 'react'
import CustomButton from '../CustomButton/Custombutton';
import FormInput from '../form-input/form-input';
import { LOGINDETAILS } from '../const';
import './Signup.css'

function Signup() {
    const [username,setusername]=useState('');
    const [heroname,setheroname]=useState('');
    const [password,setpassword]=useState('');
    const [confirmpassword,setconfirmpassword]=useState('');
    const [IsJoined,setIsJoined]=useState(false);
    
    const onSubmit=(event)=>{
        event.preventDefault();

        var ExistingUser= LOGINDETAILS.find(LoginDetail=> LoginDetail.username===username);
        if(ExistingUser===undefined || ExistingUser==null)
        {
            ExistingUser= {"username" : '',"password" : ''}
        }
        if(ExistingUser.username !==username && confirmpassword ===password)
         {
                LOGINDETAILS.push({ "username" : username,
                                    "password" : password   });

                setheroname('');
                setpassword('');
                setusername('');
                setconfirmpassword('');
                setIsJoined(true);
         }
         ExistingUser=null;
    }
const changeHandler=(event)=>{

        switch(event.target.name){
            case 'username':
                setusername(()=>event.target.value);
                break;
            case 'password':
               setpassword(()=>event.target.value);
                break;
            case 'confirmpassword':
                setconfirmpassword(()=>event.target.value);
                break; 
            case 'heroname':
                    setheroname(()=>event.target.value);
                    break; 
        }
       }

    return (
        <React.Fragment>
            { IsJoined ? (<div style={{padding:'10px 10px', width:'50%',marginLeft :'40px' }}>
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
                           value={username}
                           onChange={changeHandler}
                           required
                           />
                    <FormInput 
                           name="heroname"
                           type="text"
                           label="Hero Name"
                           value={heroname}
                           onChange={changeHandler}
                           required
                           />
                    <FormInput
                           name="password"
                           type="password"
                           label="Password"
                           value={password}
                           onChange={changeHandler}
                            required
                            />
                    <FormInput 
                            label="Confirm Password"
                            name="confirmpassword"
                           type="password"
                           value={confirmpassword}
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
