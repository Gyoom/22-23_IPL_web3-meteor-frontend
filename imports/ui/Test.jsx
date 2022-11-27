import React, { useContext } from 'react';
import { Meteor } from 'meteor/meteor';
import { getLoggedUser } from '../api/users';
import { Context } from "./contexts/ActualUserContext";

export const Test = () => {
    const { actualUser }  = useContext(Context);




    const test = ( event ) => {
        event.preventDefault()
       console.log("context : ", actualUser );
       console.log("meteor : ", getLoggedUser() != null? getLoggedUser().username : "aucun");
    }


    return (
        <div>
            <form onSubmit={test}>         
                <button type='submit'>Test</button>
            </form>
        </div>
    );
}