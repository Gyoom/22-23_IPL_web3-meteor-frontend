import { createCollection } from 'meteor/quave:collections';
import SimpleSchema from 'simpl-schema';

export const MembersCollections = createCollection({
    name: 'members',
    schema: new SimpleSchema({
        id_user: {
            type: String
        },
        id_room: {
            type: String
        },
        pseudo_room: {
            type: String
        }
    })
});