import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { useTracker } from 'meteor/react-meteor-data';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


usersLogin = async function(email, password) { // ok
    if (getLoggedUser() != null) {
        console.log ('utilisateur actuellement connecté : ', getLoggedUser().username);
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
    
     await sleep(100);
     console.log("test");
},

usersLogout = function() { // ok
    if (getLoggedUser() == null) {
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
    if (getLoggedUser() != null) {
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

getLoggedUser = function() { // ok
    Meteor.subscribe('getAllUsers');
    return Meteor.user();
},

getUserByName = function(username) { // ok
    return useTracker(() => {
    check(unsername, String);
    Meteor.subscribe('getAllUsers');
    return Meteor.users.find({username:username}).fetch();
    //.collection._docs._map;
    });
}

getAllUsers = function() { // ok 
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