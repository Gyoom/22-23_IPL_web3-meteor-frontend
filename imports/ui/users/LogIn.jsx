import React from 'react';
import { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { redirect } from "react-router-dom";
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { RoomsCollection } from '../../api/rooms'; // ne pas supprimer !!!
import { Context } from "../contexts/ActualUserContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";




export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { actualUser, pickActualUser } = useContext(Context);
    const navigate = useNavigate();



    async function login( event ) {
        event.preventDefault()
        await usersLogin(email, password);

        pickActualUser(getLoggedUser().username);
        navigate('/');
       
    }

    const handleChangePseudo = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <form onSubmit={login}>         
                <label>Log In :</label><br />
                <input type='text' placeholder='type your email' value = {email} onChange={handleChangePseudo}></input>
                <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}