import React from 'react';
import { SignIn } from './users/SignIn';
import { SignUp } from './users/signUp';

export const Login = () => {
    return (
        <div>
            <SignUp/>
            <SignIn/>
        </div>
    );
};