import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql'

const user = new GraphQLObjectType({
  name: "user",
  fields: ()=> ({
    id: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    token: {
      type: GraphQLString
    },
  })
})

export default user
