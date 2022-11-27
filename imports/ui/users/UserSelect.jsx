// Dependancies :
import React from 'react';


export const UserSelect = ({ setUserSelected, users }) => {

    const handleChange = ( event ) => {
        setUserSelected(event.target.value);
    }

    return (
        <div id="userSelected">
            <h3>Choisissez un utilisateur : </h3>
             <select onChange={(e) => handleChange(e)}>
                <option value="">-- please choose a user --</option>
                {users.map(user => <option value={user.username}>{user.username}</option>)}
            </select>
        </div>
    
    )
  }