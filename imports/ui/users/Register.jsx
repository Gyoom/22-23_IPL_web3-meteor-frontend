// Dependancies :
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
// calls to server :
import { usersAddOne } from '../../api/users';



export const Register = () => {
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const addUser = ( event ) => {
        event.preventDefault()
        if (usersAddOne(pseudo, email, password) == null) {
            return;
        }
        navigate('/');
        
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
        <div id="register">
            <form onSubmit={addUser}>
                <label>Register : </label><br />
                <input type='text' placeholder='type your nickname' className = "form-control" value = {pseudo} onChange={handleChangePseudo}></input><br />
                <input type='text' placeholder='type your email' className = "form-control" value = {email} onChange={handleChangeEmail}></input><br />
                <input type='password' placeholder='type your password' className = "form-control" value = {password} onChange={handleChangePassword}></input><br />
                <button type='submit' className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}