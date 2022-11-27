// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
// Calls to server : :
import { getLoggedUser } from './users';
import { checkRoomExist } from './rooms';

export const MembersCollection = new Mongo.Collection('members');

MembersCollection.allow({
    insert: function(username, roomName) {
      return true;
    }
});

joinARoom = function(username, roomName) { // ok
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


isMemberOf = function(username, roomName) { // ok 
    check(username, String);
    check(roomName, String);
    Meteor.subscribe('getAllMembers');
    return MembersCollection.find({username: username, roomName : roomName }).fetch().length > 0;
}

getRoomsOf = function(username) { // ok 
    check(username, String);
    return useTracker(() => {
        Meteor.subscribe('getRoomsOf', {username:username});
        return MembersCollection.find().fetch();
    });
}

export { joinARoom, isMemberOf, getRoomsOf };