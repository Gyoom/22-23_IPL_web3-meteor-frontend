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
          <button id = {id} type='submit'><FcFullTrash /></button><p>{username} ({date}) : <br /> -- {text}</p>
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