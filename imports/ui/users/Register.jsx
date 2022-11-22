import React from 'react';
import { useState } from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!



export const Register = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addUser = ( event ) => {
        event.preventDefault()
        return usersAddOne(pseudo, email, password);
    }

    const handleChangePseudo = ( event ) => {
        setPseudo(event.target.value);
    }

    const handleChangeEmail = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
        
    }

    return (
        <div>
            <form onSubmit={addUser}>
                <label>Register : </label><br />
                <input type='text' placeholder='type your nickname' value = {pseudo} onChange={handleChangePseudo}></input>
                <input type='text' placeholder='type your email' value = {email} onChange={handleChangeEmail}></input>
                <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}