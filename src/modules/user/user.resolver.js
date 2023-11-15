import { GraphQLError } from "graphql"
import { User } from "./models/user.model.js"

export default {
    Query:{
    user: (parent, args, context) => {
       const user = User.findOne({where: {id: args.id}})
       return user;
    },
    
    users: async () => {
        try {
            const users = await User.findAll();
            return users
        } catch (error) {
            throw new GraphQLError(error.message, {
                extensions: {
                    code: 'INTERNAL_SERVER_ERROR',
                    http: {
                        code: 500
                    }
                }
            })
        }
    }
  }   
}