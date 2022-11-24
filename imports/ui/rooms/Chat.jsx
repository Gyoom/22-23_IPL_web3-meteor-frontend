import { useState } from 'react';
import React from 'react';
import { MessageForm } from '../messages/MessageForm';
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { LogOut } from '../users/LogOut';
import { redirect } from "react-router-dom";

export const Chat = () => {
    const [messages, setMessages] = useState();
   
    if (usersGetCurrent() == null) {
        redirect("Login");
        console.log('redirect');

    }
    return (

        <div>
            <h1>Chat</h1>
            <LogOut />
            <div>

            </div>
            <MessageForm />
        </div>
    ) 
}