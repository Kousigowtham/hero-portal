import React,{useState,useEffect} from 'react'
import { HEROLISTS } from "../../Components/const";
import Cards from "../../Components/Card/Card";
import  { connect } from 'react-redux';
import  Grid from '@material-ui/core/Grid'
import { Card, CardHeader,CardContent,makeStyles,useTheme,Paper,IconButton } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles(() => ({


    rootOpen:{
        paddingTop: '70px',
        paddingLeft:'300px',
      },
    rootClose: {
          paddingTop: '70px',
          paddingLeft:'100px'
        },
    CardDetails:{
            height:'200px',
            overflow:'hidden',
    },
}));


const HeroPage = ({isOpen}) => {

    const [herolists,setherolists]=useState(HEROLISTS);
        const classes= useStyles();
        const history=useHistory();

const  deleteHandler= (herotobedeleted)=>{

    const index = HEROLISTS.findIndex((x)=>{return x.heroname===herotobedeleted});
    HEROLISTS.splice(index,1);
    var  newlist = HEROLISTS.filter(x=> x.heroname !=herotobedeleted);
    setherolists(newlist);
}

    return (
        <Grid container spacing={4}  className={isOpen ? classes.rootOpen : classes.rootClose}>
        {herolists.map( (hero)=>(   
            <Grid item xs={6} md={3}  > 
            <Paper elevation={2} variant="outlined" >
                <Cards deleteHandler={deleteHandler} {...hero} /> 
            </Paper>
            </Grid>
            ))}
        <Grid item xs={6} md={3}  > 
            <Paper elevation={2} variant="outlined">
            <Card key='add' style={{display:'flex'}} className={classes.CardDetails}>
                <CardContent>
                        <IconButton color="inherit" size="medium" onClick={()=>history.push(`heroes/addhero`)}>
                            <AddCircleIcon style={{ fontSize: 50 }}/>
                        </IconButton>
                        </CardContent>
                </Card>
                </Paper>
                </Grid>
    </Grid>
    )
}
const mapStateToProps= state=>({
    isOpen: state.drawer.isOpen,
  })
export default connect(mapStateToProps)(HeroPage)
