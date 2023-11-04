import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { postsSlice } from './posts'
import { photosSlice } from './photos'
import { commentsSlice } from './comments'
import { usersSlice } from './users'
// import { apiSlice } from './photos/JsonPlaceholder/JsonPlaceholderapiSlice'

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    posts: postsSlice.reducer,
    photos: photosSlice.reducer,
    comments: commentsSlice.reducer
  })

export const store = configureStore({
    reducer: rootReducer
  })


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch