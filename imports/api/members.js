// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
// Calls to server : :
import { UsersCollection } from './users'; // ne pas supprimer !!!

export const MembersCollection = new Mongo.Collection('members');

MembersCollection.allow({
    insert: function(userId, roomId, pseudo) {
      return true;
    }
});

joinARoom = function(userId, roomId, pseudo) { // ok
    const actualUser = usersGetCurrent();
    if (actualUser == null) {
        console.log ('Vous devez être connecté');
        return;
    } else if (actualUser != userId) {
        console.log('vous ne pouvez pas faire rejoindre une room à un autre user !');
    }

    check(userId, String);
    check(roomId, String);
    check(pseudo, String);

    return MembersCollection.insert({ userId, roomId, pseudo }, error => {
        if (error) {
            console.log('Error joinARoom.MembersCollection.insert :' + error);
            return;
        }
        console.log('joinARoom succes');
    });
}

isMemberOf = function(userId, roomId) { // ok 
    check(userId, String);
    check(roomId, String);
    return useTracker(() => {
        Meteor.subscribe('isMemberOf', {userId:userId , roomId:roomId})
        return MembersCollection.find().fetch().length > 0;
    });
}

getRoomsOf = function(username) { // ok 
    check(username, String);
    return useTracker(() => {
        Meteor.subscribe('getRoomsOf', {username:username})
        return MembersCollection.find().fetch();
    });
}

export { joinARoom, isMemberOf, getRoomsOf };