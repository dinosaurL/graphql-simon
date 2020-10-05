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
        //console.log(`SIMON ${selectedId} sess:`, typeof selectedId, typeof parseInt(selectedId));
        return sessions.filter(({id}) => (id === parseInt(selectedId)))[0];
    }
}

module.exports = SessionAPI;