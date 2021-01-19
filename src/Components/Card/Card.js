import React,{useState} from 'react'
import { Card, CardHeader,CardContent,makeStyles,CardActions,IconButton,CardFooter } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';
import DeleteModal from "../Modal/DeleteModal"
import {Button} from '@material-ui/core';


const useStyles = makeStyles(() => ({
    CardDetails:{
        height:'200px',
        overflow:'hidden',
  },
}));

const Cards = ({deleteHandler,...hero}) => {
    const history=useHistory();
    const classes=useStyles();
    const [ismodalopen,setismodalopen]=useState(false);

const modalCloseHandler=()=>{
    setismodalopen(false)
}
    return (
        <div>
            <Card key={hero.heroname} className={classes.CardDetails} style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                    <CardHeader title={hero.heroname} style={{alignItems:'flex-start', flex:1}} />
                    <CardContent style={{alignItems:'center', flex:2}}>
                        <p>{hero.motto}</p>
                    </CardContent>
                    <CardActions style={{alignItems:'flex-end', flex:1}}>
                        <IconButton color="primary"  style={{fontSize: 40}} onClick={()=>{history.push(`heroes/addhero/${hero.heroname}`)}} ><EditIcon/></IconButton>
                        <IconButton color="secondary" style={{fontSize: 40}} onClick={()=>setismodalopen(true)}><DeleteIcon/></IconButton>
                    </CardActions>
                </Card>
    
                {ismodalopen ? (<DeleteModal modalCloseHandler={modalCloseHandler} ><h3>Are you sure, you want to delete the hero?</h3>
                    <Button onClick={()=>deleteHandler(hero.heroname)}color='secondary'>Confirm</Button> </DeleteModal>) : null  }
        </div>
    )
}

export default Cards
