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

        <div id="chatCategory">
            <h3>Nom de la room : {roomSelected != ""? roomSelected : "Pas de room sélectionnée"}</h3>
            <RoomSelect setRoomSelected={setRoomSelected} />  
            <div id="messageChat">
                {roomSelected == ""? <p>Pas de room sélectionnée</p> : ""}
                {messages.map(message => <MessageLine key={message._id} username={message.username} date={message.createdAt} text={message.text} id={message._id}/>)}
            </div>
            <MessageForm  roomName={roomSelected}/>
        </div>
    ) 
}