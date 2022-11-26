// Dependancies :
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { AppLoader } from '../imports/ui/App/AppLoader';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Meteor.startup(() => {
  render(<AppLoader/>, document.getElementById('react-target'));
});
