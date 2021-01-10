import { Card, CardHeader,CardContent,makeStyles,useTheme,Paper } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import  Grid from '@material-ui/core/Grid'
import { connect } from "react-redux";


const useStyles = makeStyles(() => ({

    rootOpen:{
        paddingTop: '70px',
        paddingLeft:'300px',
      },
        rootClose: {
          paddingTop: '70px',
          paddingLeft:'100px',
        },
      CardDetails:{
            height:'300px',
            overflow:'hidden',
      },
}));

function Details({isOpen}) {
    const classes= useStyles();

    const [users, setusers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=> response.json())
        .then(setusers)
    }, [])
    return (

        <Grid container spacing={4}  className={isOpen ? classes.rootOpen : classes.rootClose}>
            {users.map( (data)=>(   
            <Grid item md={4}> 
            <Paper elevation={2} variant="outlined">
            <Card key={data.userId}className={classes.CardDetails}>
                    <CardHeader title={data.title}/>
                    <CardContent>
                        <p>{data.body}</p>
                    </CardContent>
                </Card>
                </Paper>
                </Grid>
                ))}
        </Grid>
    );
}
const mapStateToProps= state=>({
    isOpen: state.drawer.isOpen
  })
export default connect(mapStateToProps)(Details);
