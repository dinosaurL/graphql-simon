const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getSessions(args) {

        const fields = Object.keys(args);

        return fields.reduce((acc, field) => {
            return acc.filter(({[field] : f}) => f === args[`${field}`])
        }, sessions);
    }

    getSessionById(selectedId) {
        // console.log(`SIMON ${selectedId} sess:`, typeof selectedId, typeof parseInt(selectedId));
        return sessions.filter(({id}) => (id === parseInt(selectedId)))[0];
    }

    toggleFavouriteSession(selectedId) {
        const selectedSession = sessions.filter(({id}) => (id === parseInt(selectedId)))[0];
        selectedSession.favourite = !selectedSession.favourite;
        return selectedSession;
    }

    addAttendees(selectedId, numAttended) {
        const selectedSession = sessions.filter(({id}) => (id === parseInt(selectedId)))[0];
        selectedSession.attendees = (parseInt(selectedSession.attendees) || 0) + numAttended;
        return selectedSession;
    }

    addNewSession({session}) {
        const maxId = Math.max(...sessions.map(({id}) => id)) + 1;
        const newSession = Object.assign(session, {id: maxId});
        //console.log('SIMON adding Session:',  newSession);
        sessions.push(newSession);
        return newSession;
    }
}

module.exports = SessionAPI;