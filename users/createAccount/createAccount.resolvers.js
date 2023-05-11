import client from "../../client.js"
import bcrypt from "bcrypt"


export default {
    Mutation:{
    // _ 라고하면 무시한다고함 {}구조분해 할당(destructuring)
        createAccount: async (_, {username,email, name,password,location, githubUsername})=>
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
            //*username / email 의 중복 체크
            if(existingUser){throw new Error("중복된 USERNAME 혹은 EMAIL 입니다")}
                //*password 해싱
            const safePassword = await bcrypt.hash(password,10)    
            //*유저 생성 
            const user = await client.user.create({
                data:{
                    username,
                    email,
                    name,
                    location,
                    githubUsername,
                    password: safePassword
                }
            },)
            return { ok: true}
         } catch (e) {
            return { ok: false, e }
        }
      },
    }
}