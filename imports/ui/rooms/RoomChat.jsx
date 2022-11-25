// Dependencies :
import React from 'react';
// Calls to server :
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
// Components :
import { MessageForm } from '../messages/MessageForm';
import { MessageLine } from '../messages/MessageLine';

export const RoomChat = ({ roomName }) => {
    const messages = getAllMessagesFromARoom(roomName);

    return (

        <div id="roomChat">
            <h3>Room name : {roomName != ""? roomName : " no room selected"}</h3>
            <div id="messageChat">
                {roomName == ""? <p>No room selected</p> : ""}
                {messages.map(message => <MessageLine username={message.username} date={message.createdAt} text={message.text}/>)}
            </div>
            <MessageForm  roomName={roomName}/>
        </div>
    ) 
}