// Dependancies : 
import React from 'react';

export const MessageLine = ({ username, date, text }) => {
    return (
      <div className="messages">
        <p> {username} ({date}) : <br /> -- {text}</p>
      </div>
  
    )
  }