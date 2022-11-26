// Dependancies :
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Context } from "../contexts/ActualUserContext";
// Calls to server : 
import { usersLogout } from '../../api/users';
// Components : 
import { Chat } from '../rooms/Chat';
import { Auth } from '../users/Auth';

export const App = () => {
  const { actualUser, pickActualUser } = useContext(Context);
  
  return (
    <BrowserRouter>  
      <div id="app">  
       <nav className="text-center">
          <Link to="/">Chat</Link>
          {actualUser == "Aucun"? 
          <Link to="/login">{actualUser == "Aucun" ? "Auth" : actualUser} </Link> : 
          <Link to="/logout" onClick={() => {
              const navigate = useNavigate();
               usersLogout();
               pickActualUser("Aucun");
               navigate('/login');
           }}>Logout </Link>}
      </nav> 
      <Routes>  
            <Route path='/' element={< Chat />}></Route>  
            <Route path='/login' element={< Auth />}></Route>
            <Route path='/logout' element={< Auth />}></Route>
     </Routes>  
     </div>  
    </BrowserRouter>  
  );
};

