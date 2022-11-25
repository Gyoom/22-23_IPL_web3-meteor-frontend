import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from '/imports/api/messages';
import { RoomsCollection } from '/imports/api/rooms';
import { MembersCollection } from '/imports/api/members';
import { UsersCollection } from '../imports/api/users';
import moment from 'moment';

// Member Publish

Meteor.publish('isMemberOf', function ({username, roomName}) { //ok
    return MembersCollection.find({username: username, roomName: roomName});
});

Meteor.publish('getRoomsOf', function ({username}) { // ok
    return MembersCollection.find({username: username});
});

async function insertMember({ username, roomName, pseudo }) { //ok
    await MembersCollection.insertAsync({ username, roomName, pseudo });
}

// User Publish

Meteor.publish('getAllUsers', function () { // ok
    return Meteor.users.find({});
});

async function insertUser({ username, email, password }) { // ok
    await Meteor.users.insertAsync({ username, email, password });
}

// Rooms Publish

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
        //await usersAddOne("Alfred", "Alfred", "ABC");
        //await usersAddOne("Max", "Max", "ABC");

        await insertRoom({
            username: 'Alfred',
            roomName: 'AlfredRoom',
        });

        await insertRoom({
            username: 'Max',
            roomName: 'AlfredRoom',
        });

        await insertMember({

            username: 'Alfred',
            roomName: 'AlfredRoom',
            pseudo: 'AlfredPseudo',
        });

        await insertMember({

            username: 'Max',
            roomName: 'MaxRoom',
            pseudo: 'MaxPseudo',
        });

        await insertMember({

            username: 'Alfred',
            roomName: 'MaxRoom',
            pseudo: 'AlfredPseudo',
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
