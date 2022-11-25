// Dependencies : 
import React, { useState, useEffect, useContext } from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext";
// Calls to server : 
import { getRoomsOf } from '/imports/api/members';
// Components :
import { RoomChat } from './RoomChat';
import { RoomSelect } from './RoomSelect';

export const Chat = () => {
    const [roomSelected, setRoomSelected] = useState("");
    const rooms = getRoomsOf(Meteor.user()? Meteor.user().username : "");
    const navigate = useNavigate();
    const { actualUser }  = useContext(Context);


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