import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import JsonPlaceholderAPI, { Comments } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'

const initialCommentsState : Comments[] = []

export const fetchComments = createAsyncThunk<Comments[]> ('comments/fetchComments', async () => {
    const controller = new AbortController()
    const signal = controller.signal
    return await JsonPlaceholderAPI.getComments({signal})
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState:{
        comments: initialCommentsState,
        loading: false,
    },
    reducers:{
        addComment:(state, action: PayloadAction<Comments>) => {
            state.comments.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchComments.pending,(state) => {
            state.loading = true
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload
            state.loading = false
        })
    }
})

export const {addComment} = commentsSlice.actions
export const selectComments = (state:RootState) => state.comments.comments