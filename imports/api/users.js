// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { check } from 'meteor/check';
import { useTracker } from 'meteor/react-meteor-data';

/**
 * pauses the code for the specified duration in ms
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

/**
 * if no user is already login, if the credentials has a 
 * match in the db mongodb of the dependency Account of Meteor, 
 * indicates the user like login on the site in meteor param.
 */
usersLogin = async function(email, password) {
    if (getLoggedUser() != null) {
        console.log ('utilisateur actuellement connecté : ', getLoggedUser().username);
        return;
    }
    
    check(email, String);
    check(password, String);

    Meteor.loginWithPassword(email, password, error => {
        if (error) {
            console.log('Error users.login :' + error);
            return error;
        }
        console.log('users.login succes');
    });
    
     await sleep(100);
},

/**
 * if a user is currently logged in, remove that user's logged 
 * status from the meteor settings.
 */
usersLogout = async function() {
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
    await sleep(100);
},

/**
 * if no user is currently logged in, calls the create user function of 
 * meteor's Account dependency to create a new user object in the Users 
 * collection of meteor's Mongodb db.
 */
usersAddOne = function(username, email, password) {
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

/**
 * returns the currently logged in user in the meteor settings.
 */
getLoggedUser = function() {
    Meteor.user();
    return Meteor.user();
},
/**
 * returns all objects from the Users 
 * collection of the Account dependency of 
 * Meteor and present in MongoDB.
 */
getAllUsers = function() {
    return useTracker(() => {
        Meteor.subscribe('getAllUsers');
        return Meteor.users.find().fetch();
    });
}
    
export { usersLogin, usersLogout, usersAddOne, getLoggedUser, getAllUsers };