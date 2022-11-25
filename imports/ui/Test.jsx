import React from 'react';
import { Meteor } from 'meteor/meteor';

export const Test = () => {





    const test = ( event ) => {
        event.preventDefault()
       console.log("find one : ", Meteor.users.findOne(Meteor.userId()).username);
       console.log("user : ", Meteor.user().username);
       console.log("get : ", getLoggedUser().username);
       
    }


    return (
        <div>
            <form onSubmit={test}>         
                <button type='submit'>Test</button>
            </form>
        </div>
    );
}