import React from 'react'
import './Sign-in-and-sign-up-page.css'
import Sign_in from '../../Components/Sign-in/Sign-in'
import Signup from '../../Components/Signup/Signup'
import { makeStyles } from '@material-ui/core/styles';
import  Grid  from '@material-ui/core/Grid';
import { connect } from "react-redux";


const useStyles = makeStyles(() => ({
    rootOpen: {
        paddingTop: '70px',
        paddingLeft:'300px',
      },
        rootClose: {
          paddingTop: '70px',
          paddingLeft:'100px',
        },
    }));

function Sign_in_and_sign_up_page({isOpen}) {

    const classes = useStyles();


    return (
            <div >
             <Grid container spacing={4}  className={isOpen ? classes.rootOpen : classes.rootClose}
                >
                <Grid item xs={11} sm={4}><Sign_in /></Grid>
                <Grid item xs={2}/>
                <Grid item  xs={11} sm={4}> <Signup /></Grid>
            </Grid> 
             </div>
    )

}
const mapStateToProps= state=>({
    isOpen: state.drawer.isOpen
  })
export default connect(mapStateToProps)(Sign_in_and_sign_up_page)
