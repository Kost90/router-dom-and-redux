import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import JsonPlaceholderAPI, { Posts } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'

const initialPosts: Posts[] = []

export const fetchPosts = createAsyncThunk<Posts[]>('posts/fetchPosts', async () => {
  const controler = new AbortController()
  const signal = controler.signal
  return await JsonPlaceholderAPI.getPosts({ signal })
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: initialPosts,
    loading: false,
  },
  reducers: {
    addPost: (state, action: PayloadAction<Posts>) => {
      state.posts.push(action.payload)
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((p) => p.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
  },
})

export const { deletePost, addPost } = postsSlice.actions

export const selectPosts = (state: RootState) => state.posts.posts
export const selectPost = (state: RootState, postId: number) => state.posts.posts.find((post) => post.id === postId)
