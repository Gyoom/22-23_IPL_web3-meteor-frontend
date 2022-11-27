// Dependancies :
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// calls to server :
import { getLoggedUser } from '../../api/users';
import { createARoom } from '../../api/rooms';




export const RoomCreate = () => {
    const [roomName, setRoomName] = useState('');
    const navigate = useNavigate();
    const user = getLoggedUser();
    
    
    const createRoom = ( event ) => {
        event.preventDefault();
        createARoom(user.username, roomName);
        navigate('/');

        
    }

    const handleChangeName = ( event ) => {
        setRoomName(event.target.value);
    }

    return (
        <div id="createARoom">
            <h3>Create a room : </h3>
            <form onSubmit={createRoom}>
                <label>Ajout d'une room : </label><br />
                <input type='text' placeholder='Nom de la room' value = {roomName} onChange={handleChangeName}></input><br />
                <button type='submit'>créer la room</button>
            </form>
        </div>
    );
}