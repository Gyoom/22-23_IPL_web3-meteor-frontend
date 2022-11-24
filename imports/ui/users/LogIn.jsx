import React from 'react';
import { useState } from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { Meteor } from 'meteor/meteor';
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
import { redirect } from "react-router-dom";



export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const login = ( event ) => {
        event.preventDefault()
        usersLogin(email, password);
        return redirect("/home");
        console.log('test');
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
                <input type='text' placeholder='type your nickname' value = {email} onChange={handleChangePseudo}></input>
                <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}