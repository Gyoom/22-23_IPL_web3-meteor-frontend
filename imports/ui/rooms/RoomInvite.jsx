// Dependencies : 
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// Calls to server : 
import { joinARoom } from '/imports/api/members';
import { getAllUsers } from '/imports/api/users';
import { getAllRooms } from '../../api/rooms';
// Components :
import { RoomSelect } from './RoomSelect';
import { UserSelect } from '../users/UserSelect';



export const RoomInvite = () => {
    const [userSelected, setUserSelected] = useState("");
    const [roomSelected, setRoomSelected] = useState("");
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
        <div id="chatCategory">
            <h3>Invite un utilisteur dans une de tes rooms : </h3>
            <RoomSelect setRoomSelected={setRoomSelected} /> 
            <UserSelect setUserSelected={setUserSelected} users = {users}/>
            <form id="subChatCategory" onSubmit={inviteToRoom}>
                <label>Invite cet utilisateur dans la room choisie.</label><br />
                <button className="btn btn-primary" type='submit'>Inviter</button>
            </form>
        </div>
    )
  }