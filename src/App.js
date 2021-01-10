import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';
import Sign_in_and_sign_up_page from './pages/Sign-in-and-sign-up-page/Sign-in-and-sign-up-page';
import HomePage from './pages/HomePages/HomePage';
import Header from './Components/Header/Header';
import Details from "./Components/Details/Details";
import { connect } from "react-redux";

function App({isLogged}) {
  return (
    <div >
      <Header/>
      {console.log(isLogged)}
      <Switch>
        <Route exact path='/' render={()=> isLogged?  (<HomePage/>) : (<Redirect to='/Login' />)}/>
        <Route exact path='/Login' render={()=> isLogged? (<Redirect to='/' />) : (<Sign_in_and_sign_up_page/>)}/>
        <Route path='/home' render={()=> isLogged?  (<HomePage/>) : (<Redirect to='/Login' />) }/>
        <Route path='/Details' render={()=> isLogged? (<Details/>) : (<Redirect to='/Login' />) }/>
      </Switch>
    </div>
  );
}

const mapStateToProps= state=>({
  isLogged : state.users.isLogged
})

export default connect(mapStateToProps)(App);
