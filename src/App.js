import './App.css';
import {useEffect} from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Sign_in_and_sign_up_page from './pages/Sign-in-and-sign-up-page/Sign-in-and-sign-up-page';
import HomePage from './pages/HomePages/HomePage';
import Header from './Components/Header/Header';
import Details from "./Components/Details/Details";
import { connect } from "react-redux";
import HeroPage from './pages/HeroPage/HeroPage'
import AddHero from './pages/HeroPage/AddHero';
import setLoginStatus from "./redux/User/userAction";
import DeleteModal from './Components/Modal/DeleteModal'

function App({isLogged,setLoginStatus}) {



  useEffect(() => {
    const localData= localStorage.getItem('loginStatus');

    if(localData !== null)
    {
      if(isLogged)
        localStorage.setItem('loginStatus',JSON.stringify({isLogged:true})) 
      if(JSON.parse(localData).isLogged)
        setLoginStatus({isLogged:true})
    }
    else
       localStorage.setItem('loginStatus',JSON.stringify({isLogged:isLogged}))  

    }, [isLogged])

  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' render={()=> isLogged?  (<HomePage/>) : (<Redirect to='/Login' />)}/>
        <Route exact path='/Login' render={()=> isLogged? (<Redirect to='/' />) : (<Sign_in_and_sign_up_page/>)}/>
        <Route path='/home' render={()=> isLogged?  (<HomePage/>) : (<Redirect to='/Login' />) }/>
        <Route path='/Details' render={()=> isLogged? (<Details/>) : (<Redirect to='/Login' />) }/>
        <Route exact path='/heroes' render={()=> isLogged? (<HeroPage/>) : (<Redirect to='/Login' />) }/>
        <Route exact path='/heroes/addhero' render={()=> isLogged? (<AddHero/>) : (<Redirect to='/Login' />) }/>
        <Route path='/heroes/addhero/:Editingheroname' render={()=> isLogged? (<AddHero/>) : (<Redirect to='/Login' />) }/>
      </Switch>
    </div>
  );
}

const mapStateToProps= state=>({
  isLogged : state.users.isLogged
})
const mapDispatchToProps=dispatch=>({
  setLoginStatus : user=>(dispatch(setLoginStatus(user)))    
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
