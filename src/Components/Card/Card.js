import React from 'react'
import { Card, CardHeader,CardContent,makeStyles,CardActions,IconButton, Modal, Button } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    CardDetails:{
        height:'200px',
        overflow:'hidden',
  },
}));

const Cards = ({deleteHandler,...hero}) => {
    const history=useHistory();
    const classes=useStyles();



    return (
        <div>
            <Card key={hero.heroname}className={classes.CardDetails}>
                    <CardHeader title={hero.heroname} />
                    <CardContent>
                        <p>{hero.superpower}</p>
                    </CardContent>
                    <CardActions>
                        <IconButton color="primary"  style={{fontSize: 40}} onClick={()=>{history.push(`heroes/addhero/${hero.heroname}`)}} ><EditIcon/></IconButton>
                        <IconButton color="secondary" style={{fontSize: 40}} onClick={()=>deleteHandler(hero.heroname)}><DeleteIcon/></IconButton>
                    </CardActions>
                </Card>
        </div>
    )
}

export default Cards
