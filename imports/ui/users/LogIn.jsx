import React from 'react';
import { useState } from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { Meteor } from 'meteor/meteor';


export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const login = ( event ) => {
        event.preventDefault()
        usersLogin(email, password);
        console.log(usersGetAll());
    }

    const handleChangePseudo = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <div>
            <h3>Utilisateur actuel : {Meteor.user() ? Meteor.user().username : 'aucun'}</h3>
            <form onSubmit={login}>
                
                <label>Log In :</label><br />
                <input type='text' placeholder='type your nickname' value = {email} onChange={handleChangePseudo}></input>
                <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}