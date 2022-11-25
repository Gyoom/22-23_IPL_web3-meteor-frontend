// Dependencies : 
import React, { useState, useEffect, useContext } from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext";
// Calls to server : 
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
// Components :
import { RoomChat } from './RoomChat';
import { RoomSelect } from './RoomSelect';

export const Chat = () => {
    const [roomSelected, setRoomSelected] = useState("");
   // const [messages, setMessages] = useState(getAllMessagesFromARoom("AlfredRoom"));
    const rooms = getRoomsOf(Meteor.user()? Meteor.user().username : "");
    const messages = getAllMessagesFromARoom(roomSelected);
    const navigate = useNavigate();
    const { actualUser}  = useContext(Context);


    useEffect(() => {
        if (actualUser == "Aucun") {
            console.log("no user login");
            navigate('/login');
        }
    });


    return (

        <div id="chat">
            <h1>Chat de l'utilisateur : {actualUser}</h1>
            <RoomSelect setRoomSelected={setRoomSelected} rooms = {rooms}/>  
            <RoomChat roomName={roomSelected}/>
        </div>
    ) 
}