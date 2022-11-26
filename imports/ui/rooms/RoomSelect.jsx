// Dependancies :
import { isEmptyObject } from 'jquery';
import React from 'react';


export const RoomSelect = ({ setRoomSelected, rooms }) => {

    const handleChange = ( event ) => {
        setRoomSelected(event.target.value);
    }

    if (isEmptyObject(rooms)){
        return(
            <div id="roomSelected">
                <h3 className="text-center">Il semble que vous ne soyez encore dans aucune room.</h3>
            </div>
        )
    }else {
        return (
            <div id="roomSelected">
                <h3>Choisissez une room : </h3>
                 <select onChange={(e) => handleChange(e)}>
                    <option value="">-- please chose a room --</option>
                    {rooms.map(room => <option value={room.roomName}>{room.roomName}</option>)}
                </select>
            </div>
        
        )
    }

    
  }