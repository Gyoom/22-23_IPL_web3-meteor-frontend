import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { AppLoader } from '../imports/ui/App/AppLoader';
import { Chat } from '../imports/ui/rooms/Chat';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RoutesPath } from '/utils/RoutesPath';

Meteor.startup(() => {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <AppLoader />,
    },
    {
      path: '/home',
      element: <Chat />,
    },
  ]);

  render(<RouterProvider router={router} />, document.getElementById('react-target'));
});
