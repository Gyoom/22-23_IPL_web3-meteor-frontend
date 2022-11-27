// Dependencies :
import React, { useState } from 'react';
// Calls to server :
import { getAllMessagesFromARoom } from '/imports/api/messages';
// Components :
import { MessageForm } from '../messages/MessageForm';
import { MessageLine } from '../messages/MessageLine';
import { RoomSelect } from './RoomSelect';

export const RoomChat = () => {
    const [roomSelected, setRoomSelected] = useState("");
    const messages = getAllMessagesFromARoom(roomSelected);

    return (

        <div id="roomChat">
            <h3>Room name : {roomSelected != ""? roomSelected : " no room selected"}</h3>
            <RoomSelect setRoomSelected={setRoomSelected} />  
            <div id="messageChat">
                {roomSelected == ""? <p>No room selected</p> : ""}
                {messages.map(message => <MessageLine key={message._id} username={message.username} date={message.createdAt} text={message.text}/>)}
            </div>
            <MessageForm  roomName={roomSelected}/>
        </div>
    ) 
}