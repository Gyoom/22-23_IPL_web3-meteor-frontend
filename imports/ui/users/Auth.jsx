import React from 'react';
import { useState } from 'react';
import { Register } from './Register';
import { LogIn } from './LogIn';
import { LogOut } from './LogOut';
import { UserState } from './UserState';
import { UsersCollection } from '../../api/users'; // ne pas supprimer !!!
import { Meteor } from 'meteor/meteor';
import { Test } from '../Test';

export const Auth = () => {
    return (
        <div>
            <h1>Authentification</h1>
            <UserState />
            <Register />
            <LogIn />
            <LogOut />
            <Test />
        </div>
    );
};