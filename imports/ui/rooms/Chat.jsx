import { useState, useEffect } from 'react';
import React from 'react';
import { MessageForm } from '../messages/MessageForm';
import { MessageLine } from '../messages/MessageLine';
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
import { LogOut } from '../users/LogOut';
import { redirect } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import { UserState } from '../users/UserState';
import { useNavigate } from "react-router-dom";

export const Chat = () => {
    const [roomSelected, setRoomSelected] = useState("");
   // const [messages, setMessages] = useState(getAllMessagesFromARoom("AlfredRoom"));
    const test = getRoomsOf(Meteor.user()? Meteor.user().username : "");
    const messages = getAllMessagesFromARoom(roomSelected);
    const navigate = useNavigate();
    const [text, setText] = useState('');


    useEffect(() => {
        if (test == "") 
        {
            console.log("no access");
        //navigate('/login');
        }
      });


    const handleChange = ( event ) => {
        setRoomSelected(event.target.value);
      }

    const send = ( event ) => {
        event.preventDefault()
        SendAMessage(Meteor.user().username, roomSelected, text); // TODO
        
    }

    const handleChangeText = ( event ) => {
        setText(event.target.value);
    }

   

    return (

        <div>
            <h1>Chat</h1>
            <UserState />
            <LogOut />
            
            <select onChange={(e) => handleChange(e)}>
                <option value="">-- please chose a room --</option>
                {test.map(room => <option value={room.roomName}>{room.roomName}</option>)}
            </select>

            <div>
                <ul>
                    {messages.map(message => <p>{message.username} {message.createdAt} : {message.text}</p>)}
                </ul>
            </div>
            <div>
                <form onSubmit={send}>             
                    <label>New Message : </label><br />
                    <input type='text' placeholder='type ...' value = {text} onChange={handleChangeText}></input>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    ) 
}