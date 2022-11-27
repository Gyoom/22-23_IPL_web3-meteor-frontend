// Dependencies : 
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// Calls to server : 
import { getRoomsOf, joinARoom } from '/imports/api/members';
import { getAllUsers } from '/imports/api/users';
import { getLoggedUser } from '../../api/users';
import { getAllRooms } from '../../api/rooms';
// Components :
import { RoomSelect } from './RoomSelect';
import { UserSelect } from '../users/UserSelect';



export const RoomInvite = () => {
    const [userSelected, setUserSelected] = useState("");
    const [roomSelected, setRoomSelected] = useState("");
    const rooms = getRoomsOf(getLoggedUser() ? getLoggedUser().username : "");
    const users = getAllUsers();
    const navigate = useNavigate();
    const allRooms = getAllRooms();
    
    const inviteToRoom = ( event ) => {
        event.preventDefault();
        if (userSelected == "") {
            console.log('utilisateur non selectionné !');
            return;
        } else if (roomSelected == "") {
            console.log('utilisateur non selectionné !');
            return;
        }
        joinARoom(userSelected, roomSelected);
        navigate('/');       
    };

 
    return (
        <div id="roomInvite">
            <h3>Invite un utilisteur dans une de tes rooms : </h3>
            <RoomSelect setRoomSelected={setRoomSelected} rooms = {rooms}/> 
            <UserSelect setUserSelected={setUserSelected} users = {users}/>
            <form onSubmit={inviteToRoom}>
                <label>Invite cet utilisateur dans la room choisie.</label><br />
                <button type='submit'>invite</button>
            </form>
        </div>
    )
  }