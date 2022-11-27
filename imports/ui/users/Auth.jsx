// Dependancies
import React, { useEffect, useContext } from 'react';
import { Context } from "../contexts/ActualUserContext";
import { useNavigate } from "react-router-dom";
// Components
import { Register } from './Register';
import { LogIn } from './LogIn';


export const Auth = () => {
    const { actualUser}  = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (actualUser !="Aucun") {
            console.log("user already login : ", actualUser);
            navigate('/');
        }
    });

    return (
        <div id ="auth">
            <h1 className='text-center'>Authentification</h1>
            <Register />
            <LogIn />
        </div>
    );
};