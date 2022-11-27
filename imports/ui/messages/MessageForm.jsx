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
                <input type='text' className="form-control" placeholder='type ...' value = {text} onChange={handleChangeText}></input>
                <button type='submit' className="btn text-center">Send</button>
            </form>
        </div>
    );
}