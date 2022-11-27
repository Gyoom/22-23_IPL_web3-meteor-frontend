// Dependancies
import React, { useEffect, useContext } from 'react';
import { Context } from "../contexts/ActualUserContext";
import { useNavigate } from "react-router-dom";
// Components
import { Register } from './Register';
import { LogIn } from './LogIn';
import { Test } from '../Test';
import { getLoggedUser } from '../../api/users';


export const Auth = () => {
    const { actualUser}  = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (getLoggedUser() != null) {
            console.log("user already login : ", actualUser);
            navigate('/');
        }
    });

    return (
        <div id ="auth">
            <h1>Authentification</h1>
            <Register />
            <LogIn />
            <Test />
        </div>
    );
};