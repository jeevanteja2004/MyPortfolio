import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css'
import './index.css'
import Home from './Pages/Home'
import Login from './Pages/login';
import Signup from './Pages/Signup';



function App() {
  return (
   <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  )
}

export default App
