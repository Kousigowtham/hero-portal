import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio'
import { connect } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { HEROLISTS } from '../../Components/const';

const useStyles = makeStyles((theme) => ({
  rootOpen: {
    paddingTop: '70px',
    paddingLeft: '300px',
  },
  rootClose: {
    paddingTop: '70px',
    paddingLeft: '100px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const AddHero = ({ isOpen }) => {

  const [addhero, setaddhero] = useState({
    heroname: '',
    motto: '',
    gender: '',
  });
  const classes = useStyles();
  const { Editingheroname } = useParams();
  const history = useHistory();
  const Exisitinghero = HEROLISTS.find(hero => hero.heroname === Editingheroname)

  useEffect(() => {
    if (Exisitinghero !== null && Exisitinghero !== undefined) {
      setaddhero({ ...Exisitinghero });
    }
  }, [])

  const changeHandler = (event) => {
    setaddhero({
      ...addhero,
      [event.target.name]: event.target.value,
    })
  }
  const gethero = (hero) => {
    return Exisitinghero.heroname === hero.heroname
  }
  const submitHandler = (event) => {
    event.preventDefault();
    if (Exisitinghero !== null && Exisitinghero !== undefined) {
      const index = HEROLISTS.findIndex(gethero);
      HEROLISTS.splice(index, 1);
    }
    HEROLISTS.push(addhero);
    console.log(HEROLISTS)
    history.push('/heroes');
  }

  const goBackHandler = () => {
    history.goBack();
  }
  return (
    <Grid container direction='column' className={isOpen ? classes.rootOpen : classes.rootClose}>
      <Grid item xs={12}>
        <h3>Add a new Hero to the Association</h3>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12}><TextField id="standard-basic" label="HeroName" value={addhero.heroname} name='heroname'
              required onChange={changeHandler} style={{ margin: 8, width: '50%' }} /></Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" onChange={changeHandler}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup value={addhero.gender} aria-label="gender" name="gender">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value='other' control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name='motto'
                value={addhero.motto}
                label="Motto"
                style={{ margin: 8, width: '50%' }}
                placeholder="What made you to be a Hero!"
                multiline
                rowsMax={4}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={changeHandler}
                variant="outlined"
              /></Grid>
            <Grid item xs={12}>
              <Grid container direction='row'>
                <Grid item xs={2}>
                  <Button variant="contained" color="primary" type='submit'>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={2}>
                  <Button variant="outlined" color="secondary" onClick={goBackHandler}>Cancel</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>

  )
}
const mapStateToProps = state => ({
  isOpen: state.drawer.isOpen
})
export default connect(mapStateToProps)(AddHero)
