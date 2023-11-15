import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import schema from './modules/index.js';
import { sequelize } from './utils/db.connected.js';

async function starter(){
    sequelize.sync({alter: true})
    const server = new ApolloServer({
        schema
    });
      
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
      
    console.log(`🚀  Server ready at: ${url}`);
}
starter()