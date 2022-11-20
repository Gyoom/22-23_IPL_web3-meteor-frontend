import { useState } from 'react';
import { Meteor } from 'meteor/meteor';


export const SignIn = () => {
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');

    const addUser = ( event ) => {
        event.preventDefault()
        Meteor.loginWithPassword(pseudo, password, error => {
            if (error) {
                console.log(error);
                return;
            }
            console.log('succes');
        })
    }

    const handleChangePseudo = ( event ) => {
        setPseudo(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={addUser}>
            <input type='text' value = {pseudo} onChange={handleChangePseudo}></input>
            <input type='password' value = {password} onChange={handleChangePassword}></input>
            <button type='submit'>Sign In</button>
        </form>
    );
}