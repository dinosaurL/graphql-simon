const { ApolloServer } = require('apollo-server');

const SessionAPI = require('./datasources/sessions');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const defaultParams = {introspection: true, playground: true};

const dataSources = () => ({
    sessionAPI : new SessionAPI()
});

const params = Object.assign(defaultParams , { typeDefs, resolvers, dataSources });
const server = new ApolloServer(params);

server
    .listen({ port: process.env.PORT || 4000 })
    .then(({ url }) => {
        console.log(`Simon: your graphSQL is now running at ${url}`)
    })