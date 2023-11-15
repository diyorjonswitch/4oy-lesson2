import {makeExecutableSchema} from '@graphql-tools/schema';
import User from './user/index.js';

export default makeExecutableSchema({
    typeDefs: [User.typeDefs,],
    resolvers: [User.resolvers,]
})