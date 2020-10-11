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
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
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
    speakers: [Speaker]
}
`;

// const schema = gql`
//   type Query {
//     sessions(
//       id: ID
//       title: String
//       description: String
//       startsAt: String
//       endsAt: String
//       room: String
//       day: String
//       format: String
//       track: String
//       level: String
//     ): [Session]
//     sessionById(id: ID): Session
//     speakers: [Speaker]
//     speakerById(id: ID): Speaker
//   }
//   type Speaker {
//     id: ID!
//     bio: String
//     sessions: [Session]
//     name: String
//   }
//   type Session {
//     id: ID!
//     title: String!
//     description: String
//     startsAt: String
//     endsAt: String
//     room: String
//     day: String
//     format: String
//     track: String
//       @deprecated(
//         reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
//       )
//     level: String
//     speakers: [Speaker]
//   }
// `;

module.exports = schema;