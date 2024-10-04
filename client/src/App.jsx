import React,{lazy} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Group = lazy(() => import('./pages/group'));
const Chat = lazy(() => import('./pages/chat'));
const NotFound = lazy(() => import('./pages/Notfound'));
let user = true;
const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<ProtectRoute user={user}/>}>
      <Route path="/" element={<Home/>} />
      <Route path='/group' element={<Group/>} />
      <Route path='/chat/:chatid' element={<Chat/>} />
    </Route>

    <Route path="/Login" element={<ProtectRoute user={!user} redirect="/">
      <Login/>
    </ProtectRoute>} /> 
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>
  );
};

export default App