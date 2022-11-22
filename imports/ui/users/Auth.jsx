import React from 'react';
import { Register } from './Register';
import { LogIn } from './LogIn';
import { LogOut } from './LogOut';

export const Auth = () => {
    return (
        <div>
            <Register />
            <LogIn />
            <LogOut />
        </div>
    );
};