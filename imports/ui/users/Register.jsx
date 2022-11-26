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
        usersAddOne(pseudo, email, password);
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
        <div id="register" >
            <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={addUser}>

                    <div className="form-outline mb-4">
                        <input type="text" value = {pseudo} onChange={handleChangePseudo} className="form-control" placeholder='Username'/>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="text" value = {email} onChange={handleChangeEmail} className="form-control" placeholder='Email'/>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" value = {password} onChange={handleChangePassword} className="form-control" placeholder='Password'/>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Repeat password'/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                    </form>
                </div>
        </div>
    );
}