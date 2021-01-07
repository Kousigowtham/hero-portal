import './App.css';
import {Routes, Route  } from 'react-router-dom';
import Sign_in_and_sign_up_page from './pages/Sign-in-and-sign-up-page/Sign-in-and-sign-up-page';
import HomePage from './pages/HomePages/HomePage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Sign_in_and_sign_up_page/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
