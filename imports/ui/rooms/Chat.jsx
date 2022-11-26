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
import { getAllRooms } from '../../api/rooms';
import { isAdmin } from '../../api/users';

export const Chat = () => {
    const [roomSelected, setRoomSelected] = useState("");
    const myRooms = getRoomsOf(Meteor.user()? Meteor.user().username : "");
    allRooms = null;
    if (isAdmin){
        allRooms = getAllRooms();
    }
    const navigate = useNavigate();
    const { actualUser }  = useContext(Context);


    useEffect(() => {
        if (actualUser == "Aucun") {
            console.log("no user login");
            navigate('/login');
        }
    });


    return (

        <div id="chat" className="text-center">
            <h1 className="text-center" >Bienvenue {actualUser} !</h1>
            <RoomSelect setRoomSelected={setRoomSelected} myRooms = {myRooms} allRooms = {allRooms} />  
            <RoomChat roomName={roomSelected}/>
        </div>
    ) 
}