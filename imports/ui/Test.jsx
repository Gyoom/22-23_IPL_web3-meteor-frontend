import React from 'react';
import { Meteor } from 'meteor/meteor';

export const Test = () => {





    const test = ( event ) => {
        event.preventDefault()
       
    }


    return (
        <div>
            <form onSubmit={test}>         
                <button type='submit'>Test</button>
            </form>
        </div>
    );
}