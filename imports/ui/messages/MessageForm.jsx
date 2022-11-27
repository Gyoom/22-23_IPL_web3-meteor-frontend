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
        <div id="subChatCategory">
            <form onSubmit={send}>             
                <label id="newMessage">New Message :  </label>
                <div id="subSubChatCategory">
                    <input type='text' placeholder='type ...' value = {text} onChange={handleChangeText}></input>
                </div>
                <button type='submit' className="btn btn-primary">Send</button>
            </form>
        </div>
    );
}