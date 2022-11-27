// Dependancies :
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext";
// calls to server :
import { createARoom } from '../../api/rooms';




export const RoomCreate = () => {
    const [roomName, setRoomName] = useState('');
    const navigate = useNavigate();
    const { actualUser }  = useContext(Context);
    
    
    const createRoom = ( event ) => {
        event.preventDefault();
        createARoom(actualUser, roomName);
        navigate('/');

        
    }

    const handleChangeName = ( event ) => {
        setRoomName(event.target.value);
    }

    return (
        <div id="chatCategory">
            <h3>Créer une room : </h3>
            <form onSubmit={createRoom} id="subChatCategory">
                <label>Ajout d'une room : </label><br />
                <input type='text' placeholder='Nom de la room' className="form-control" value = {roomName} onChange={handleChangeName}></input><br />
                <button type='submit' className="btn btn-primary">Créer la room</button>
            </form>
        </div>
    );
}