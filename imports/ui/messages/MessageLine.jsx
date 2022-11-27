// Dependancies : 
import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { deleteAMessage } from '../../api/messages';
import { isAdmin } from '../../api/users';

export const MessageLine = ({ username, date, text, id }) => {
  const deleteMessage = (event) => {
    event.preventDefault();
    deleteAMessage(event.target.id);
  }  
  
  if (isAdmin()){
      return (
        <div className="messages">
          <form id = {id} onSubmit={deleteMessage}>
            <button className = "btn btn-light" id = {id} type='submit'><FcFullTrash /></button> - {username} ({date}) : <br /><p className="marge">--  {text}</p>
          </form>
        </div>
    
      )
    }else {
      return (
        <div className="messages">
          <p> {username} ({date}) : <br /> -- {text}</p>
        </div>
    
      )
    }
  }