// Dependancies :
import React, {useState, useContext} from 'react';
import { Context } from "../contexts/ActualUserContext";
import { useNavigate } from "react-router-dom";
// Calls to server :
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!
import { MessagesCollection } from '/imports/api/messages'; // ne pas supprimer !!!
import { RoomsCollection } from '../../api/rooms'; // ne pas supprimer !!!




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
        <div id="login">
            <form onSubmit={login}>         
                <label>Log In :</label><br />
                <input type='text' placeholder='type your email' value = {email} onChange={handleChangePseudo}></input><br />
                <input type='password' placeholder='type your password' value = {password} onChange={handleChangePassword}></input><br />
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
}