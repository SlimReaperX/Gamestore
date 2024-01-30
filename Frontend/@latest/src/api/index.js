import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api= createApi({
    //tagTypes:['tag'] may not need//
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.SERVER || "http://localhost:8080/api"
        //added this
    }),
    endpoints: (builder => ({
        getVideoGames: builder.query({
            query: ()=> '/video-games'

        }),
        getVideoGame: builder.query({
            query: (id)=> '/video-games/'+id
            
        })

    }))
})

export const {
useGetVideoGamesQuery, 
useGetVideoGameQuery,
}=api
