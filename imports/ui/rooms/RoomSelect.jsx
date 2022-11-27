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
        <div id="subChatCategory">
            <h3>Choisissez une room : </h3>
             <select className="custom-select" onChange={(e) => handleChange(e)}>
                <option value="">-- please choose a room --</option>
                {rooms.map(room =>  <option key={room.roomName} value={room.roomName}>{room.roomName}</option>)}
            </select>
        </div>
    
    )
  }