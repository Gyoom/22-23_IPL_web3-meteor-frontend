// Dependencies : 
import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext"; 
// Components :
import { RoomChat } from './RoomChat';
import { RoomInvite } from './RoomInvite';
import { RoomCreate } from './RoomCreate'

export const Chat = () => {
    const { actualUser }  = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        if (actualUser == "Aucun") {
            console.log("no user login");
           navigate('/login');
        }
    });


    return (
        <div id="chat">
            <h1>Chat de l'utilisateur : {actualUser? actualUser : ""}</h1>
            <RoomCreate/>
            <RoomInvite /> 
            <RoomChat />
        </div>
    ) 
}