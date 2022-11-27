// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
// Calls to server :
import { getLoggedUser } from './users';

/**
 * Initializes the rooms collection in the Meteor dbMongoDB 
 * when the application is launched if it does not already exist.
 */
export const RoomsCollection = new Mongo.Collection('rooms');

/**
 * allow insert operation on rooms collection from client.
 */
RoomsCollection.allow({
    insert: function(usernameFondator, roomName) {
      return true;
    }
});

/**
 * check that a current user is connected, then insert a new room in the room collection, 
 * return an error massage to the console in the event of a problem, otherwise call the joinARoom 
 * function with the name of the new room and the username of the founder.
 */
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

/**
 * returns a boolean indicating whether a room identified by its name exists in the collection
 */
checkRoomExist = function(roomName) {
  check(roomName, String);
  Meteor.subscribe('getAllRooms');
  RoomsCollection.find({}).fetch();
  return RoomsCollection.find({roomName : roomName }).fetch().length > 0;
}

/**
 * returns an array that contains all the objects of the rooms collection.
 */
getAllRooms = function() {
  Meteor.subscribe('getAllRooms');
  return RoomsCollection.find({}).fetch();
}

export { createARoom, checkRoomExist, getAllRooms };