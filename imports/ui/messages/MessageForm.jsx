// Dependancies :
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
// Calls to server :
import { SendAMessage } from '/imports/api/messages';


export const MessageForm = ({ roomName }) => {
    const [text, setText] = useState('');
  

    const send = ( event ) => {
        event.preventDefault()
        SendAMessage(Meteor.user().username, roomName, text); 
        
    }

    const handleChangeText = ( event ) => {
        setText(event.target.value);
    }

    return (
        <div id="messageForm">
            <form onSubmit={send}>             
                <label>New Message : </label>
                <input type='text' placeholder='type ...' value = {text} onChange={handleChangeText}></input>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}