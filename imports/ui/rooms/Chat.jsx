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
    const { actualUser }  = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        if (actualUser == "Aucun") { // TODO user persistent, pendant un refresh, ne detecte pas l'user, apres oui
            console.log("no user login");
           navigate('/login');
        } else {
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