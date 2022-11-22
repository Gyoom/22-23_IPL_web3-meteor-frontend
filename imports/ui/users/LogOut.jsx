import React from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!


export const LogOut = () => {

    const logout = ( event ) => {
        event.preventDefault()
        usersLogout();
        console.log(usersGetCurrent());
    }

    return (
        <div>
            <form onSubmit={logout}>
                <label>Log Out : </label><br />
                <button type='submit'>Log Out</button>
            </form>
        </div>
    );
}