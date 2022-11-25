
// Dependancies :
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { useTracker } from 'meteor/react-meteor-data';
import { check } from 'meteor/check';
import moment from 'moment';
// Calls to server :
import { UsersCollection } from './users'; // ne pas supprimer !!!

export const MessagesCollection = new Mongo.Collection('messages');

MessagesCollection.allow({
    insert: function(username, roomName, text) {
      return true;
    }
});


    SendAMessage = function(username, roomName, text) { // ok
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
    
    getAllMessagesFromARoom = function(roomName) {
        check(roomName, String);
        return useTracker(() => {
            Meteor.subscribe('getAllMessagesFromARoom', {roomName:roomName});
            return MessagesCollection.find().fetch();
        });
    }

    export { SendAMessage, getAllMessagesFromARoom };




