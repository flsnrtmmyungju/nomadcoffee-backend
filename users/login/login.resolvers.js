import client from "../../client.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export default {
    Mutation:{
        login: async (_,{username,password})=>{
            //*username찾기
            const user = await client.user.findFirst({where:{username}})
            if(!user){
                return{
                    ok:false,
                    error:"유저가 존재하지 않습니다."
                }
            }
            //*비밀번호확인
            const userPassword = await bcrypt.compare(password,user.password)    
            if(!userPassword){
                return{
                    ok:false,
                    error:"패스워드가 다릅니다."
                }
            }
            //*토큰 확인
            const token = await jwt.sign({id:user.id},process.env.SECRET_KEY)
            return{
                ok:true,
                token,            
            }
          }
    }
}