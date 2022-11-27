// Dependencies :
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
// Calls to server :
import { getAllMessagesFromARoom } from '/imports/api/messages';
import { getRoomsOf } from '../../api/members';
import { getLoggedUser } from '../../api/users';
// Components :
import { MessageForm } from '../messages/MessageForm';
import { MessageLine } from '../messages/MessageLine';
import { RoomSelect } from './RoomSelect';

export const RoomChat = () => {
    const [roomSelected, setRoomSelected] = useState("");
    const messages = getAllMessagesFromARoom(roomSelected);
    const rooms = getRoomsOf(getLoggedUser() ? getLoggedUser().username : "");

    return (

        <div id="roomChat">
            <h3>Room name : {roomSelected != ""? roomSelected : " no room selected"}</h3>
            <RoomSelect setRoomSelected={setRoomSelected} rooms = {rooms}/>  
            <div id="messageChat">
                {roomSelected == ""? <p>No room selected</p> : ""}
                {messages.map(message => <MessageLine username={message.username} date={message.createdAt} text={message.text}/>)}
            </div>
            <MessageForm  roomName={roomSelected}/>
        </div>
    ) 
}