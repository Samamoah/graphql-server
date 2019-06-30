var {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList} = require('graphql');
var Genre = require('./models/genre')


var GenreType = new GraphQLObjectType({
    name: 'Genre',
    fields :() => ({
        id : {type : GraphQLString},
        title: {type :GraphQLString},
        date: { type:GraphQLString}
    })
})


var RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields: {
        genres :{
            type : new GraphQLList(GenreType),
            resolve(parent , args){
                return Genre.find({})
            }
        },
        genre : {
            type : GenreType,
            args : {
                id : {type : GraphQLString}
            },
            resolve(parent, args){
                return Genre.findById(args.id)
            }
        }
    }
})


var Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields: {
        addGenre :{
            type : GenreType,
            args : {
                title : {type :GraphQLString}
            },
            resolve(parent , args){
                var genre = new Genre({
                    title : args.title
                })

                return genre.save()
            }
        }
    }
})



module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation: Mutation
})
