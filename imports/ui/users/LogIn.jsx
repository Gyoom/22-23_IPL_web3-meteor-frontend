// Dependancies :
import React, {useState, useContext} from 'react';
import { Context } from "../contexts/ActualUserContext";
import { useNavigate } from "react-router-dom";
// Calls to server :
import { usersLogin } from '../../api/users';
import { getLoggedUser } from '../../api/users';




export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { pickActualUser } = useContext(Context);
    const navigate = useNavigate();



    async function login( event ) {
        event.preventDefault()
        await usersLogin(email, password);

        console.log("Email : " + email + " - PWD : " + password)

        await pickActualUser(getLoggedUser().username);
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
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <h2 className="text-center">Login</h2>
                    
                    <form onSubmit={login} >

                    <div className="form-outline mb-4">
                        <input type="text" value = {email} onChange={handleChangePseudo} className="form-control" placeholder='Email'/>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" value = {password} onChange={handleChangePassword} className="form-control" placeholder='Password'/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    </form>
                </div>
            </div>
    );
}