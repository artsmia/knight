import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import itemType from './item'

const group = new GraphQLObjectType({
  name: "group",
  fields: ()=> ({
    id: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    text: {
      type: GraphQLString
    },
    items: {
      type: new GraphQLList(itemType)
    },
  })
})

export default group
