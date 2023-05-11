import client from "../../client.js"
import bcrypt from "bcrypt"
import { protectedResolver } from "../users.utils.js"



//이게 함수를 리턴하는 함수(currying) 개녕 4.12설명 
//resolverFn은 resolver이고 protectedResolver는 실행되서 resolver를(ourResolver) 리턴함.                                                    
const resolverFn= async (
        _,                                          //password==>newPassword변경
        {email,name,location,avatarURL,githubUsername,password:newPassword},
        {loggedInUser}            
        )=>{          
            let safePassword = null
            if(newPassword) safePassword = await bcrypt.hash(newPassword,10)  
                 
            const updateUser = await client.user.update({  
                where:{
                    id :loggedInUser.id
                },
                data:{
                    name,
                    email,
                    location,
                    githubUsername,
                    avatarURL,
                    ...(safePassword && { password:safePassword }), //safePassword가null아닐경우만
             }})        
                if(updateUser.id){return {ok:true}
                }else{return{ok:false,error:"업데이트에 실패하였습니다." }
          }         
        }

export default {
    Mutation: {                     //아래가 resolverFn(root,args,context,info) 같음
        editProfile : protectedResolver(resolverFn)
    }
}

