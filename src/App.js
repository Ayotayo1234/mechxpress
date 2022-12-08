import './App.css';
import Home from './pages/Home';
import {  Route, Routes } from 'react-router-dom'
import Search from './pages/Search';
import Confirm from './pages/Confirm';
import Signup from './pages/Signup';
import Signin from './pages/Signin';




function App() {
  

  

  return (
    <div className="App">
      <Routes>
           <Route path='/' element={<Signin/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/search' element={<Search/>}/>
           <Route path='/confirm' element={<Confirm />}/>
      </Routes>
      </div>
  );
}

export default App;
