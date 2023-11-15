import fs from 'fs';
import path from 'path'
import resolvers from './user.resolver.js'

const schema = fs.readFileSync(path.resolve('src', 'modules', 'user', 'user.schema.gql'), 'utf-8');

export default {
    resolvers,
    typeDefs: schema
}