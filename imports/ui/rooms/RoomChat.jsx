// Dependencies :
import React from 'react';
// Calls to server :
import { getAllMessagesFromARoom } from '/imports/api/messages';
// Components :
import { MessageForm } from '../messages/MessageForm';
import { MessageLine } from '../messages/MessageLine';

export const RoomChat = ({ roomName }) => {
    const messages = getAllMessagesFromARoom(roomName);

    if (roomName != ""){
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
    }else {
        return (
            <div></div>
        )
    }
}