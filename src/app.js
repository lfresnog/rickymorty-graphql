// query{
//   me
//   hello(name: "Luis")
//   nombre
// }

import { fetchData } from './fetchdata';
import { GraphQLServer } from 'graphql-yoga'

// rickymorty entry point
const url = 'https://rickandmortyapi.com/api/character/';

const typeDefs = `

type Query {

  hello(name: String!): String!,
  me:String!
  nombre:[String!]!

}
`

const resolvers = {

  Query:{

    hello: (parent,args,ctx,info) => {return `Hello ${args.name}`},
    me: () => "Hola Paco",
    nombre:( )=>["Hola"," de que vas"]

  },

}

/**
 * Main App
 * @param data all rickyandmorty database
 */ 


const runApp = data => {
  // data.forEach(element => {
  //   console.log(`${element.id}: ${element.name}`);
  // });

  const server = new GraphQLServer({typeDefs,resolvers});
  server.start({port:"3000"});
};



// main program
fetchData(runApp, url);