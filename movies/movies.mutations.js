import client from "../client.js"

export default {
    Mutation:{
    // _ 라고하면 무시한다고함 {}구조분해 할당(destructuring)
        createMovie:(_, {title,year, genre})=>client.movie.create({data:{
            title,
            year,
            genre
        }}),
    deleteMovie:(_, {id})=>client.movie.delete({where:{id}}),
    updateMovie:(_, {id,year})=>client.movie.update({where:{id},data:{year}})

    }
}