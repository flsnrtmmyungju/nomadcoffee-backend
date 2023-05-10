import client from "../client.js"
import bcrypt from "bcrypt"


export default {
    Mutation:{
    // _ 라고하면 무시한다고함 {}구조분해 할당(destructuring)
        createAccount: async (_, {username,email, name,password})=>
        {
        try {
            const existingUser = await client.user.findFirst({
                where:{
                    OR:[
                        {
                            username,
                        },
                        {
                            email,
                        }
                    ]
                }
            })
            //^username / email 의 중복 체크 (Check that the username / email aren't taken)  
            if(existingUser){
                throw new Error("중복된 USERNAME 혹은 EMAIL 입니다")
            }
    
            //^password 해싱 (Hash the password)
            const safePassword = await bcrypt.hash(password,10)
    
            //^유저 생성
            //    return client.user.create({data:{
            //         username,
            //         email,
            //         name,
            //         password:safePassword,
            //     }})
            //error가 있다면 ok:false, error:$error를, 그렇지 않다면 ok:true를 반환(Return)합니다.
            const user = await client.user.create({
                data:{
                    username,
                    email,
                    name,
                    password: safePassword,
                }
            })
            return { ok: true }
         } catch (error) {
            console.log('error', error)
            return { ok: false, error }
        }
      },

    }
}