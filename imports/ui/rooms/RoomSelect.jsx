// Dependancies :
import { isEmptyObject } from 'jquery';
import { getLoggedUser, isAdmin } from '../../api/users';
import React from 'react';


export const RoomSelect = ({ setRoomSelected, myRooms, allRooms }) => {

    const handleChange = ( event ) => {
        setRoomSelected(event.target.value);
    }

    if (isEmptyObject(myRooms)){
        return(
            <div id="roomSelected">
                <h3 className="text-center">Il semble que vous ne soyez encore dans aucune room.</h3>
            </div>
        )
    }else if (  !isAdmin()){
        return (
            <div id="roomSelected">
                <h3>Choisissez une room : </h3>
                 <select onChange={(e) => handleChange(e)}>
                    <option value="">-- please chose a room --</option>
                    {myRooms.map(room => <option value={room.roomName}>{room.roomName}</option>)}
                </select>
            </div>
        
        )
    }else {
        return(
            <div id="roomSelected">
                <div>
                    <h3>Choisissez une de vos myRooms : </h3>
                    <select onChange={(e) => handleChange(e)}>
                        <option value="">-- please chose a room --</option>
                        {myRooms.map(room => <option value={room.roomName}>{room.roomName}</option>)}
                    </select>
                </div>
                <div>
                    <h3>Toutes les rooms ouvertes : </h3>
                    <select onChange={(e) => handleChange(e)}>
                        <option value="">-- please chose a room --</option>
                        {allRooms.map(room => <option value={room.roomName}>{room.roomName}</option>)}
                    </select>
                </div>
            
        </div>
        )
    }

    
  }