// Dependencies : 
import React, { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext"; 
// Components :
import { RoomChat } from './RoomChat';
import { RoomInvite } from './RoomInvite';
import { RoomCreate } from './RoomCreate'
import { getLoggedUser } from '../../api/users';
import { Test } from '../Test';

export const Chat = () => {
    const navigate = useNavigate();
    const { actualUser }  = useContext(Context);


    useEffect(() => {
        if (getLoggedUser() == null) {
           navigate('/login');
        } else {
            console.log("user login : ", actualUser);
        }
    });


    return (

        <div id="chat">
            <h1>Chat de l'utilisateur : {getLoggedUser()? getLoggedUser().username : ""}</h1>
            <RoomCreate/>
            <RoomInvite /> 
            <RoomChat />
            <Test />
        </div>
    ) 
}