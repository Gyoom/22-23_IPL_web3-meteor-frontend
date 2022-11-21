import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '/imports/ui/Login'

Meteor.startup(() => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "home",
          element: <App />
        },
      ],
    },
  ]);

  render(<RouterProvider router={router} />, document.getElementById('react-target'));
});
