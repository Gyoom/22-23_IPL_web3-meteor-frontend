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
        if (actualUser !="Aucun") { // TODO user persistent, pendant un refresh, ne detecte pas l'user, apres oui
            console.log("user already login : ", getLoggedUser().username);
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