import { Meteor } from 'meteor/meteor';


Meteor.methods({
    test: function(email, password) {
        //return Meteor.loginWithPassword(email, password);;
    }
    ,
    'users.getAll'() {
        return Meteor.users.find({});
    },    
    /*
    'users.getCurrent'() {
        return Meteor.user();
    },

    'users.addOne'() {
        return;
    },

    'users.getOneById'(id) {
        return Meteor.user.findById(id);
    },

    'users.deleteOneById'() {

    },

    'user.deleteAll'() {
        return;
    }*/
})
