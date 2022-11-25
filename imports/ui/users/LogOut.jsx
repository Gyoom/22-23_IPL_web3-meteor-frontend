import React from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/ActualUserContext";
import { useContext } from 'react';


export const LogOut = () => {
    const { actualUser, pickActualUser } = useContext(Context);
    const navigate = useNavigate();

    const logout = ( event ) => {
        event.preventDefault()
        usersLogout();
        pickActualUser("Aucun");
        navigate('/login');
        
    }

    return (
        <div>
            <form onSubmit={logout}>
                <button type='submit'>Log Out</button>
            </form>
        </div>
    );
}