import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Music from './pages/Music';
import AudioPlayer from './components/AudioPlayer'
import './styles/style.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/music' element={<Music/>}/>
      </Routes>
    </Router>
  );
}

export default App;
