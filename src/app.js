import { fetchData } from './fetchdata';
import { GraphQLServer } from 'graphql-yoga'

// rickymorty entry point
const url = 'https://rickandmortyapi.com/api/character/';

/**
 * Main App
 * @param data all rickyandmorty database
 */

const runApp = data => {
  const typeDefs = 
  `
  type Query {
    character(id: Int ):Character
    characters(page: Int , pageSize: Int, name: String, status: String, planet: String):[Character]
    planets: [String!]!
  }

  type Character {
    id:Int!
    name:String!
    status:String!
    planet:String!
  }
  `
  const resolvers = {
  Query:{
    character: (parent,args,ctx,infor) => {
      if(args.id){
        let found = data.find(cha => cha.id === args.id);
      return{
        id: found.id, 
        name: found.name, 
        status: found.status, 
        planet:found.location.name
      }
      }
    },
    characters: (parent,args,ctx,infor) => {
      const page = args.page || 1;
      const pageSize = args.pageSize || 20;
      let found = data.filter(cha => cha.name.includes(args.name || cha.name))
                   data.filter(cha => cha.status.includes(args.status || cha.status))
                   data.filter(cha => cha.location.name.includes(args.planet || cha.location.name))
      found = found.slice((page-1)*pageSize, ((page-1)*pageSize)+(pageSize+1));
      return found.map(cha => {
        return{
          id: cha.id, 
          name: cha.name, 
          status: cha.status, 
          planet: cha.location.name
        }
      })
    },
    planets: (parent,args,ctx,info) => {
      const planets = [];
        data.forEach(pla =>{
          planets.push(pla.location.name)
        })
        return [... new Set(planets)];
    }
  },
}
  const server = new GraphQLServer({typeDefs,resolvers});
  server.start({port:"3000"});
};

// main program
fetchData(runApp, url);