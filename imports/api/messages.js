import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';

export const MessagesCollection = new Mongo.Collection('messages');

MessagesCollection.allow({
    insert: function(userId, roomId, pseudo) {
      return true;
    }
});


SendAMessage = function(userId, roomId, text) { // ok
    const actualUser = usersGetCurrent();
    if (actualUser == null) {
        console.log ('Vous devez être connecté');
        return;
    } else if (actualUser != userId) {
        console.log('vous ne pouvez par envoyer un message sous le nom dun autre utilisateur');
    }

    check(userId, String);
    check(roomId, String);
    check(text, String);

    return MessagesCollection.insert({ userId, roomId, text, createdAt: Date() }, error => {
        if (error) {
            console.log('Error SendAMessage.MessageCollection.insert :' + error);
            return;
        }
        console.log('joinARoom succes');
    });
}

getAllMessageFromARoom = function(roomId) {
    check(roomId, String);
    return useTracker(() => {
        Meteor.subscribe('getAllMessageFromARoom', roomId);
        return MessagesCollection.find().fetch();
    });
}


