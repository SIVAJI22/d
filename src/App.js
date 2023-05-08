import logo from './logo.svg';
import './App.css';
import Home from '../src/Homepage'
import MyComp from './car';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './login';
import Chat from './chat';
function App() {
  return (
   <Fragment>
    
 
<Home/>

    <BrowserRouter>
       <Routes>
         <Route path="/home" element={<Home />}>      </Route>
         <Route path="/login" element={<Login />}>
           </Route>
           <Route path="/chat" element={<Chat />}>
           </Route>
          
       </Routes>
     </BrowserRouter></Fragment>
     
  
  );
}

export default App;
