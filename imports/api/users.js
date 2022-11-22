import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check'



usersLogin = function(email, password) { // ok
    check(email, String);
    check(password, String);

    Meteor.loginWithPassword(email, password, error => {
        if (error) {
            console.log('Error users.login :' + error);
            return;
        }
        console.log('users.login succes');
    });
},

usersLogout = function() { // ok
    Meteor.logout(error => {
        if (error) {
            console.log('Error users.logout :' + error);
            return;
        }
        console.log('users.logout succes');
    });
},

usersAddOne = function(username, email, password) { // ok
    check(username, String);
    check(email, String);
    check(password, String);
    
    return Accounts.createUser({
        username: username, 
        email: email, 
        password: password
    }, error => {
        if (error) {
            console.log('Error users.addOne :' + error);
            return;
        }
        console.log('users.addOne succes');
    });
},

usersGetAll = function() {
    return Meteor.users.find().fetch();
},    

usersGetCurrent = function() { // ok
    return Meteor.user();
},

usersGetOneById = function(id) {
    check(id, String);

    return Meteor.user.findById(id);
},

usersDeleteOneById = function() {
    return;
},

userDeleteAll = function() {
    return;
}

const USER_FIELDS = {
    username: 1,
    emails: 1,
  };
  
Meteor.publish('singleUser', function (userId) {
    // Make sure userId is a string.
    
    check(userId, String);
  
    // Publish a single user - make sure only allowed fields are sent.
    return Meteor.users.find(userId, { fields: USER_FIELDS });
  });
