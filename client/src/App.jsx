import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Login" element={<Login/>} /> 
    <Route path='/group' element={<div>group</div>} />
    <Route path='/chat/:chatid' element={<div>chat</div>} />
  </Routes>
  </BrowserRouter>
  );
};

export default App