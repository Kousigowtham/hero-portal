import React from 'react';
import './HomePage.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from "react-redux";
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({

  rootOpen: {
    paddingTop: '70px',
    paddingLeft:'300px',
  },
    rootClose: {
      paddingTop: '70px',
      paddingLeft:'100px',
    },
  }))
 
function HomePage({isOpen}) {
    const classes = useStyles();
    return (
      <div className={isOpen ? classes.rootOpen : classes.rootClose}>
      <Typography paragraph>This is HomePage</Typography>
      </div>
    )
}
const mapStateToProps= state=>({
  isOpen: state.drawer.isOpen
})
export default connect(mapStateToProps)(HomePage);
