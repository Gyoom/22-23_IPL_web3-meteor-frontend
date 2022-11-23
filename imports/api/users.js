import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { useTracker } from 'meteor/react-meteor-data';



usersLogin = function(email, password) { // ok
    if (usersGetCurrent() != null) {
        console.log ('utilisateur actuellement connecté');
        return;
    }
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
    if (usersGetCurrent() == null) {
        console.log ('aucun utilisateur actuellement connecté');
        return;
    }
    Meteor.logout(error => {
        if (error) {
            console.log('Error users.logout :' + error);
            return;
        }
        console.log('users.logout succes');
    });
},

usersAddOne = function(username, email, password) { // ok
    if (usersGetCurrent() != null) {
        console.log ('utilisateur actuellement connecté');
        return;
    }

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

usersGetCurrent = function() { // ok
    return Meteor.user();
},

usersGetOneById = function(id) { // ok
    return useTracker(() => {
    check(id, String);
    Meteor.subscribe('getAllUsers');
    return Meteor.users.find({_id:id}).fetch();
    //.collection._docs._map;
    });
}

usersGetAll = function() { // ok 
    return useTracker(() => {
        Meteor.subscribe('getAllUsers');
        return Meteor.users.find().fetch();
    });
}
    
/*
usersDeleteOneById = function() {
    return;
},

userDeleteAll = function() {
    return;
}
*/