// Dependancies : 
import React from 'react';

export const MessageLine = ({ username, date, text }) => {
    return (
      <div class="messages">
        <p> {username} ({date}) : {text}</p>
      </div>
  
    )
  }