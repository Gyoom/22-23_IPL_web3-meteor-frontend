import { Meteor } from 'meteor/meteor';
import { MessagesCollection } from '/imports/api/messages';
import { RoomsCollection } from '/imports/api/rooms';
import { MembersCollection } from '/imports/api/members';

// Member Publish

Meteor.publish('isMemberOf', function ({userId, roomId}) { //ok
    return MembersCollection.find({userId: userId, roomId: roomId});
});

Meteor.publish('getRoomsOf', function ({userId}) { // ok
    return MembersCollection.find({userId: userId});
});

async function insertMember({ userId, roomId, pseudo }) { //ok
    await MembersCollection.insertAsync({ userId, roomId, pseudo });
}

// User Publish

Meteor.publish('getAllUsers', function () { // ok
    return Meteor.users.find({});
});

async function insertUser({ username, email, password }) { // ok
    await Meteor.users.insertAsync({ username, email, password });
}

// Rooms

// Messages

Meteor.publish('getAllMessageFromARoom', function ({roomId}) { // ok
    return MessagesCollection.find({roomId:roomId});
});

async function insertMessage({ userId, roomId, text }) { // ok
    await Meteor.users.insertAsync({ userId, roomId, text, createdAt: Date() });
}


// Startup

Meteor.startup(async () => {
    if (await MembersCollection.find().countAsync() === 0) { 
        await insertMember({
            userId: 'Alfred',
            roomId: '1',
            pseudo: 'pseudo1',
        });

        await insertMember({
            userId: 'Alfred',
            roomId: '2',
            pseudo: 'pseudo2',
        });

        await insertMember({
            userId: 'Alfred',
            roomId: '3',
            pseudo: 'pseudo3',
        });

        await insertMember({
            userId: 'Max',
            roomId: '1',
            pseudo: 'pseudo4',
        });

        await insertMember({
            userId: 'Max',
            roomId: '2',
            pseudo: 'pseudo5',
        });

        await insertMember({
            userId: 'Max',
            roomId: '3',
            pseudo: 'pseudo6',
        });
    }
});
