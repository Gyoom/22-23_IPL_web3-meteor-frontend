// Dependancies :
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Context } from "../contexts/ActualUserContext";
// Calls to server : 
import { usersLogout, getLoggedUser } from '../../api/users';
// Components : 
import { Chat } from '../rooms/Chat';
import { Auth } from '../users/Auth';

export const App = () => {
  const { actualUser, pickActualUser } = useContext(Context);
  
  return (
    <BrowserRouter>  
      <div id="app">
       <nav>
         <Link to="/">Chat</Link>    
          <Link to="/login">{actualUser == "Aucun" ? "Auth" : actualUser} </Link>
          <Link to="/logout" onClick={async () => {
               await usersLogout();
               pickActualUser("Aucun");
           }}>Logout </Link>
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

