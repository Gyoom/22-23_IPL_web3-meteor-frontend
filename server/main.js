// Dependancies :
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Accounts } from 'meteor/accounts-base';
// dbs  :
import { MessagesCollection } from '/imports/api/messages';
import { RoomsCollection } from '/imports/api/rooms';
import { MembersCollection } from '/imports/api/members';

// Member Publish

Meteor.publish('getAllMembers', function () {
    return MembersCollection.find({});
});

Meteor.publish('isMemberOf', function ({username, roomName}) { // ok
    return MembersCollection.find({username: username, roomName: roomName});
});

Meteor.publish('getRoomsOf', function ({username}) { // ok
    return MembersCollection.find({username: username});
});

async function insertMember({ username, roomName, pseudo }) { // ok
    await MembersCollection.insertAsync({ username, roomName, pseudo });
}

// User Publish

Meteor.publish('getAllUsers', function () { // ok
    return Meteor.users.find({});
});

// Rooms Publish

Meteor.publish('getAllRooms', function () {
    return RoomsCollection.find({});
});

Meteor.publish('getRoomById', function ({roomId}) {
    return RoomsCollection.find({_id: roomId});
});

async function insertRoom({ username, roomName }) { // ok
    await RoomsCollection.insertAsync({ username, roomName });
}

// Messages Publish

Meteor.publish('getAllMessagesFromARoom', function ({roomName}) { // ok
    return MessagesCollection.find({roomName:roomName});
    
});

async function insertMessage({ username, roomName, text }) { // ok
    const m = moment(new Date());
    const date = m.format('DD-MM-YYYY[, ]HH:mm:ss');
    await MessagesCollection.insertAsync({ username, roomName, text, createdAt: date });
}


// Startup

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
            roomName: 'AlfredRoom',
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
