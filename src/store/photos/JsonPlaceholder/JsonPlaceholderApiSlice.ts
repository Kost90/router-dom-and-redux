// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { JSON_PLACEHOLDER_BASE_URL } from '../../../constants'

// export const apiSlice = createApi({
//     reducerPath: 'jsonApi',
//     baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
//     endpoints: builder =>({
//         getPhotos: builder.query({
//             query:() => '/photos'
//         }),
//         getUsers: builder.query({
//             query:() => '/users'
//         }),
//         getComments: builder.query({
//             query:() => '/comments'
//         }),
//     })
// })

// export const { useGetPhotosQuery, useGetUsersQuery, useGetCommentsQuery } = apiSlice