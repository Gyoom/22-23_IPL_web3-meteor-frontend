import React, { useState, useEffect }  from 'react';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { Meteor } from 'meteor/meteor';
import { Context } from "../contexts/ActualUserContext";
import { useContext } from 'react';


export const UserState = () => {
    const { actualUser } = useContext(Context);



    return (
        <div>
            <h3>Utilisateur actuel : {actualUser}</h3>
        </div>
    );
}