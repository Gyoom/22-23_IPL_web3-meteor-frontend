// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { useTracker } from 'meteor/react-meteor-data';
// Calls to server :
import { getLoggedUser } from './users';
import { getRoomsOf } from './members';

export const RoomsCollection = new Mongo.Collection('rooms');

RoomsCollection.allow({
    insert: function(username, roomName) {
      return true;
    }
});

createARoom = function(username, roomName) {
  const actualUser = getLoggedUser();
  if (actualUser == null) {
      console.log ('Vous devez être connecté');
      return;
  }

  check(username, String);
  check(roomName, String);

  const roomId = RoomsCollection.insert({ usernameFondator: username, roomName: roomName }, error => {
      if (error) {
          console.log('Error createARoom.RoomsCollection.insert :' + error);
          return;
      }
      console.log('createARoom succes');
  });

  const room = RoomsCollection.findOne(roomId);

  joinARoom(username, room.roomName);
}

checkRoomExist = function(roomName) {
  check(roomName, String);
  Meteor.subscribe('getAllRooms');
  RoomsCollection.find({}).fetch();
  return RoomsCollection.find({roomName : roomName }).fetch().length > 0;
}

getAllRooms = function() { // ok 
  Meteor.subscribe('getAllRooms');
  return RoomsCollection.find({}).fetch();
}

export { createARoom, checkRoomExist, getAllRooms };