import { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';


export const SignUp = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addUser = ( event ) => {
        event.preventDefault()
        Accounts.createUser({pseudo, email, password}, error => {
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

    const handleChangeEmail = ( event ) => {
        setEmail(event.target.value);
    }

    const handleChangePassword = ( event ) => {
        setPassword(event.target.value);
    }

    return (
        <form onSubmit={addUser}>
            <input type='text' value = {pseudo} onChange={handleChangePseudo}></input>
            <input type='text' value = {email} onChange={handleChangeEmail}></input>
            <input type='password' value = {password} onChange={handleChangePassword}></input>
            <button type='submit'>create new user</button>
        </form>
    );
}