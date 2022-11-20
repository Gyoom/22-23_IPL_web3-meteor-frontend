import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const MessagesCollection = new Mongo.Collection('messages');

Meteor.methods({
    'messages.insert'(text) {

        if (!Meteor.userId()) {
            throw new Meteor.Error('not connected');
        }

        UsersCollection.insert({
            text,
            userID: Meteor.userId(),
            createdAt: new Date()
        })
    }    
})

