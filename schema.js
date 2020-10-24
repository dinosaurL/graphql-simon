const { gql } = require('apollo-server');

const schema = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startsAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
        favourite: Boolean
        attendees: Int
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}
type Mutation {
    toggleFavouriteSession(id: ID): Session
    addAttendees(id: ID, numAttended: Int): Session
    addNewSession(session: SessionInput): Session
}
type Speaker {
    id: ID!
    bio: String
    sessions: [Session]
    name: String
}
type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
    attendees: Int
    speakers: [Speaker]
}
input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
    attendees: Int
}
`;
module.exports = schema;