import React from 'react';
import {  createBrowserRouter, RouterProvider} from 'react-router-dom'; 
import { Login } from './Login';
import { Home } from './Home';
import { RoutePaths } from './RoutesPath';

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
]);