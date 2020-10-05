const { gql } = require('apollo-server');

const schema = gql`
type Query {
    sessions(
    id: ID,
    title: String,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
): [Session],
    sessionById(id: ID): Session
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startsAt: String,
    endsAt: String,
    room: String,
    day: String,
    format: String,
    track: String,
    level: String
}`;

module.exports = schema;