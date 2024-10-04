import React,{lazy, Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Group = lazy(() => import('./pages/group'));
const Chat = lazy(() => import('./pages/chat'));
const NotFound = lazy(() => import('./pages/Notfound'));
let user = true;
const App = () => {
  return (
  <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>
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
    </Suspense>
  </BrowserRouter>
  );
};

export default App