// Dependancies :
import React, { useContext } from 'react';
import { Context } from "../contexts/ActualUserContext"; 


export const RoomSelect = ({ setRoomSelected }) => {
    const { actualUser }  = useContext(Context);
    const rooms = getRoomsOf(actualUser ? actualUser : "");

    const handleChange = ( event ) => {
        setRoomSelected(event.target.value);
    }

    return (
        <div id="roomSelected">
            <h3>Choisissez une room : </h3>
             <select onChange={(e) => handleChange(e)}>
                <option value="">-- please chose a room --</option>
                {rooms.map(room =>  <option key={room.roomName} value={room.roomName}>{room.roomName}</option>)}
            </select>
        </div>
    
    )
  }