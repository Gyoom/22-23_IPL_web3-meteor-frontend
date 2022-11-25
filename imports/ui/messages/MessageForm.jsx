import React from 'react';
import { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from '/imports/api/messages';


export const MessageForm = () => {
    const [text, setText] = useState('');
  

    const send = ( event ) => {
        event.preventDefault()
        SendAMessage(Meteor.user().username, "", text); // TODO
        
    }

    const handleChangeText = ( event ) => {
        setText(event.target.value);
    }

    return (
        <div>
            <form onSubmit={send}>             
                <label>New Message : </label><br />
                <input type='text' placeholder='type ...' value = {text} onChange={handleChangeText}></input>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}