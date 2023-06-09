import { gql } from "apollo-server";

export default gql`
  type User { 
    id          :    String!   
    username    :    String! 
    email       :    String!
    name        :    String
    location    :    String
    avatarURL   :    String
    githubUsername : String
    createdAt   :    String
    updatedAt   :    String
  }
` 