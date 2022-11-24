import React from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { redirect } from "react-router-dom";


export const LogOut = () => {

    const logout = ( event ) => {
        event.preventDefault()
        usersLogout();
        return redirect("/login");
        
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