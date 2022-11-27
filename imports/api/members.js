// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
// Calls to server : :
import { getLoggedUser } from './users';
import { checkRoomExist } from './rooms';

/**
 * Initializes the members collection in the Meteor db (MongoDB)
 * when the application is launched if it does not already exist.
 */
export const MembersCollection = new Mongo.Collection('members');

/**
 * Allow insert operation on members collection from client.
 */
MembersCollection.allow({
    insert: function(username, roomName) {
      return true;
    }
});
/**
 * check that a current user is connected, 
 * that the room whose name was given to him exists, 
 * that the user whose name was given to him is not already a member of the db 
 * then insert a new member object in the collection Members. returns an error 
 * message in the console in case of a problem.
 */
joinARoom = function(username, roomName) {
    const actualUser = getLoggedUser();

    if (actualUser == null) {
        console.log ('Vous devez être connecté');
        return;
    } else if (!checkRoomExist(roomName)) {
        console.log('la room n existe pas');
        return;
    } else if (isMemberOf(username, roomName)) {
        console.log('L utilisateur est déjà membre de cette room');
        return;
    }

    check(username, String);
    check(roomName, String);

    return MembersCollection.insert({ username: username, roomName: roomName }, error => {
        if (error) {
            console.log('Error joinARoom.MembersCollection.insert :' + error);
            return;
        }
        console.log('joinARoom succes');
    });
}

/** 
 * returns a boolean that indicates if there is an object in the member db 
 * with the same attributes as provided in param.
 */
isMemberOf = function(username, roomName) {
    check(username, String);
    check(roomName, String);
    Meteor.subscribe('getAllMembers');
    return MembersCollection.find({username: username, roomName : roomName }).fetch().length > 0;
}

/**
 * returns an array containing all the objects of the member table whose 
 * username attribute corresponds to that provided in param.
 */
getRoomsOf = function(username) {
    check(username, String);
    return useTracker(() => {
        Meteor.subscribe('getRoomsOf', {username:username});
        return MembersCollection.find({username: username}).fetch();
    });
}

export { joinARoom, isMemberOf, getRoomsOf };