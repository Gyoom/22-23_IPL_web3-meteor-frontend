import React from 'react';
import { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '../../api/users';


export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = ( event ) => {
        event.preventDefault()
        return Meteor.call('test', email, password, error => {
            if (error) {
                console.log(error);
                console.log("yes");
                return;
            }
            console.log('succes');
        });
    }

    const handleChangePseudo = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={login}>
            <label>Sign In : </label><br />
            <input type='text' placeholder='type your nickname' value = {email} onChange={handleChangePseudo}></input>
            <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input>
            <button type='submit'>Sign In</button>
        </form>
    );
}