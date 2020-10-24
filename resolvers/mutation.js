module.exports = {

    toggleFavouriteSession : (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.toggleFavouriteSession(id);
    },
    addAttendees : (parent, { id, numAttended }, { dataSources }, info) => {
        return dataSources.sessionAPI.addAttendees(id, numAttended);
    },
    addNewSession : (parent, args , { dataSources }, info) => {
        return dataSources.sessionAPI.addNewSession(args);
    }

};