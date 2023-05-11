import dotenv from "dotenv"
dotenv.config();
//위두줄하고 import "dotenv/config"; 이건같음


import {ApolloServer } from "apollo-server";
import schema from "./schema.js";
import { getUser,protectedResolver } from "./users/users.utils.js";
//*기본 구현방식
//*1.type만들고(Movie) type definitions 선언(Query,Mutation)
//*2 resolvers구현 Query or Mutation 
//* resolver 
//*첫번째 인자 무시하고싶어서 _입력
//*두번쨰 인자는 Mutation이나 Query에게 주는 인자

const PORT = process.env.PORT

const server = new ApolloServer ({ 
    schema,
    context: async ({req,res})=> {
       return {
        loggedInUser : await getUser(req.headers.token),
        protectedResolver
       }
    }
});

server.listen(PORT).then(()=>console.log(`🚀 http://localhost:${PORT}/`))
  

