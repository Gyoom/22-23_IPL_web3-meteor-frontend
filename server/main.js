// Dependancies :
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Accounts } from 'meteor/accounts-base';
// dbs  :
import { MessagesCollection } from '/imports/api/messages';
import { RoomsCollection } from '/imports/api/rooms';
import { MembersCollection } from '/imports/api/members';

// Member Publish

/**
 * Allows interactions on all objects in the Members collection.
 */
Meteor.publish('getAllMembers', function () {
    return MembersCollection.find({});
});

/**
 * Authorizes interactions on objects having the username and roomName passed as param as attributs of the Members collection.
 */
Meteor.publish('isMemberOf', function ({username, roomName}) {
    return MembersCollection.find({username: username, roomName: roomName});
});

/**
 * Authorizes interactions on objects having the username passed as param as attibut of the Members collection.
 */
Meteor.publish('getRoomsOf', function ({username}) {
    return MembersCollection.find({username: username});
});

// User Publish

/**
 * Allows interactions on all objects in the Users collection.
 */
Meteor.publish('getAllUsers', function () {
    return Meteor.users.find({});
});

// Rooms Publish

/**
 * Allows interactions on all objects in the Rooms collection.
 */
Meteor.publish('getAllRooms', function () {
    return RoomsCollection.find({});
});

/**
 * Authorizes interactions on objects having the roomId passed as param as attribut of the Rooms collection.
 */
Meteor.publish('getRoomById', function ({roomId}) {
    return RoomsCollection.find({_id: roomId});
});

// Messages Publish

/**
 * Authorizes interactions on objects having the roomName passed as param of the Messages collection.
 */
Meteor.publish('getAllMessagesFromARoom', function ({roomName}) {
    return MessagesCollection.find({roomName:roomName});
    
});

// inserts function :

/**
 * inserts a new room object into the Rooms collection.
 */
 async function insertRoom({ usernameFondator, roomName }) {
    await RoomsCollection.insertAsync({ usernameFondator, roomName });
}

/**
 * inserts a new message object into the Messages collection.
 */
 async function insertMessage({ username, roomName, text }) {
    const m = moment(new Date());
    const date = m.format('DD-MM-YYYY[, ]HH:mm:ss');
    await MessagesCollection.insertAsync({ username, roomName, text, createdAt: date });
}

/**
 * inserts a new member object into the Members collection.
 */
async function insertMember({ username, roomName, pseudo }) {
    await MembersCollection.insertAsync({ username, roomName, pseudo });
}


/**
 * Startup :
 * initializes the following objects in the db if it is empty.
 */
Meteor.startup(async () => {
    if (await RoomsCollection.find().countAsync() === 0) {

        await Accounts.createUser({
            username: "Alfred", 
            email: "Alfred", 
            password: "ABC"
        });

        await Accounts.createUser({
            username: "Max", 
            email: "Max", 
            password: "ABC"
        });

        await insertRoom({
            usernameFondator: 'Alfred',
            roomName: 'AlfredRoom',
        });

        await insertRoom({
            usernameFondator: 'Max',
            roomName: 'MaxRoom',
        });

        await insertMember({

            username: 'Alfred',
            roomName: 'AlfredRoom',
        });

        await insertMember({

            username: 'Max',
            roomName: 'MaxRoom',
        });

        await insertMember({

            username: 'Alfred',
            roomName: 'MaxRoom',
        });

        await insertMessage ({
            username: 'Alfred',
            roomName: 'AlfredRoom',
            text: 'i am alfred and it is my room',
        });

        await insertMessage ({
            username: 'Max',
            roomName: 'MaxRoom',
            text: 'i am max and it is my room',
        });

        await insertMessage ({
            username: 'Alfred',
            roomName: 'MaxRoom',
            text: 'i am alfred and it is not my room',
        });



    }
});
