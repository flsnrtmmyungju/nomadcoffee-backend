import { gql } from "apollo-server";

export default gql`
  type EditProfileResult{
    ok:Boolean!
    error:String
  }  
  type Mutation {
    editProfile(
      email       :    String
      password    :    String
      name        :    String
      location    :    String
      avatarURL   :    String
      githubUsername : String
    ):EditProfileResult!
  }
` 