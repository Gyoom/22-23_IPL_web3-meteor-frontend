
// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
import moment from 'moment';
// Calls to server :
import { getLoggedUser } from './users';


/**
 * Initializes the Messages collection in the Meteor db (MongoDB) 
 * when the application is launched if it does not already exist.
 */
export const MessagesCollection = new Mongo.Collection('messages');

/**
 * Allow insert operation on messages collection from client.
 */
MessagesCollection.allow({
    insert: function(username, roomName, text) {
      return true;
    }
});

/**
 * check that the user is connected and that the username param corresponds to 
 * the username of the current user.
 * inserting a new Message object into the Messages collection with the 
 * attributes provided as parameters and the current date configured via 
 * the Moment dependency, in case of problem throws an error message in the 
 * console on error.
 */
SendAMessage = function(username, roomName, text) {
    const actualUser = getLoggedUser().username;
    if (actualUser == null) {
        console.log ('Vous devez être connecté');
        return;
    } else if (actualUser != username) {
        console.log('vous ne pouvez par envoyer un message sous le nom dun autre utilisateur');
    }

    check(username, String);
    check(roomName, String);
    check(text, String);

    const m = moment(new Date());
    const date = m.format('DD-MM-YYYY[, ]HH:mm:ss');

    return MessagesCollection.insert({ username, roomName, text, createdAt: date }, error => {
        if (error) {
            console.log('Error SendAMessage.MessageCollection.insert :' + error);
            return;
        }
        console.log('SendAMessage succes');
    });
}
/**
 * Returns message objects from the Messages collection whose roomName 
 * attribute matches the roomName provided in param.
 */
getAllMessagesFromARoom = function(roomName) {
    check(roomName, String);
    return useTracker(() => {
        Meteor.subscribe('getAllMessagesFromARoom', {roomName:roomName});
        return MessagesCollection.find({roomName:roomName}).fetch();
    });
}

export { SendAMessage, getAllMessagesFromARoom };




