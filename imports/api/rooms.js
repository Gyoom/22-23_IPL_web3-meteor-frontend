import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
import { MembersCollection } from '/imports/api/members'; // ne pas supprimer !!!

export const RoomsCollection = new Mongo.Collection('rooms');

RoomsCollection.allow({
    insert: function(userId, roomId, pseudo) {
      return true;
    }
});

createARoom = function(userId, name, pseudo) {
  const actualUser = usersGetCurrent();
  if (actualUser == null) {
      console.log ('Vous devez être connecté');
      return;
  }

  check(userId, String);
  check(name, String);

  const roomId = RoomsCollection.insert({ userId, name }, error => {
      if (error) {
          console.log('Error createARoom.RoomsCollection.insert :' + error);
          return;
      }
      console.log('createARoom succes');
  });

  joinARoom(userId, roomId, pseudo);
}