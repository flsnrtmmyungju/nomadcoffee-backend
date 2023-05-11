import jwt from "jsonwebtoken"
import client from "../client.js"


export const getUser= async (token)=>{  
    try {
        if(!token){
            return null;
        }

        const {id} = await jwt.verify(token,process.env.SECRET_KEY)
        const user = await client.user.findUnique({where:{id}})
        if(user){
            return user;
        }else{
            return null;
        }
    } catch (error) {
        return null;
    }
}

// export const protectResolver = (ourResolver) =>(root,args,context,info)=>{
//     if(!context.loggedInUser){
//         return{
//             ok:false,
//             error : "로그인이 필요합니다.",
//         }
//     }
//     return ourResolver(root,args,context,info)
// }
//Resolver함수(ourResolver)를 리턴하는 함수(currying) 4.12설명
export function protectedResolver(ourResolver){
    return function(root,args,context,info){
        if(!context.loggedInUser){
            return{
                ok:false,
                error : "로그인이 필요합니다.",
            }
        }
        return ourResolver(root,args,context,info)
    }
}