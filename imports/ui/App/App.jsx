import React from 'react';
import { useState } from 'react';
import { Chat } from '../rooms/Chat';
import { Auth } from '../users/Auth';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';  

export const App = () => {
  
  return (
    <BrowserRouter>  
      <div className="App">  
       <nav>
           <Link to="/">Home</Link>  
           <Link to="/login">login </Link>  
      </nav> 
      <Routes>  
            <Route path='/' element={< Chat />}></Route>  
            <Route path='/login' element={< Auth />}></Route>
     </Routes>  
     </div>  
    </BrowserRouter>  
  );
};

