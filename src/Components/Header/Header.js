import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PAGES from '../const';
import { useHistory } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { connect } from "react-redux";
import setDrawerStatus from "../../redux/Drawer/drawerAction";
import setLoginStatus from '../../redux/User/userAction';
import {Button } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



 const Header=({isLogged,isOpen,setDrawerStatus,setLoginStatus})=> {
  const Pages=PAGES();
  const history=useHistory();
  const classes = useStyles();
  const theme = useTheme();

 
  const handleDrawerOpen = () => {
    setDrawerStatus({isOpen:true});
  };

  const handleDrawerClose = () => {
    setDrawerStatus({isOpen: false});
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: isOpen,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{flexGrow:'1'}}>
            Be a HERO!
          </Typography>
          { isLogged ?
         
         (<IconButton color="inherit" edge="end"><Button onClick={()=>{ localStorage.setItem('loginStatus',JSON.stringify({isLogged:false})); setLoginStatus({isLogged:false})}}> SIGNOUT</Button></IconButton>)
            : null
      }
          <IconButton color="inherit" edge="end" onClick={()=>{history.push('/login')}}> { isLogged ? (<LockOpenIcon/>) : (<LockIcon/>)} </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {Pages.map((page) => (
            <ListItem button key={page.pagename} onClick={page.url}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.pagename} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div> )
}

const mapDispatchToProps=dispatch=>({
  setDrawerStatus : user=>(dispatch(setDrawerStatus(user))),
  setLoginStatus : user=>(dispatch(setLoginStatus(user)))        
})

const mapStateToProps= state=>({
  isLogged : state.users.isLogged,
  isOpen: state.drawer.isOpen
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);