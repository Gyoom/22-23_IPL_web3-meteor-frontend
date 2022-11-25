// Dependancies :
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { AppLoader } from '../imports/ui/App/AppLoader';

Meteor.startup(() => {
  render(<AppLoader/>, document.getElementById('react-target'));
});
