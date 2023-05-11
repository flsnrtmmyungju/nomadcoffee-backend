import client from "../../client.js"

export default {
    Query: {
        seeProfile: (_,{username}) =>client.user.findUnique({
                where:{
                    username,
                }
        })        
    }
}

//Query.seeProfile(root,args,context,info)