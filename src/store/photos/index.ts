import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import JsonPlaceholderAPI, { Photo } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'

const initialPhotos : Photo[] = [];

export const fetchPhotos = createAsyncThunk<Photo[]> ('photos/fetchPhotos', async () => {
    const controler = new AbortController();
    const signal = controler.signal
 return await JsonPlaceholderAPI.getPhotos({signal})
})

export const photosSlice = createSlice({
    name: 'photos',
    initialState:{
        photos: initialPhotos,
        loading: false
    },
    reducers:{
        addPhotos:(state, action: PayloadAction<Photo>) => {
            state.photos.push(action.payload)
        },
        deletePhotos: (state, action: PayloadAction<number>) => {
            state.photos = state.photos.filter((p) => p.id !== action.payload)
          },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchPhotos.pending, (state) => {
            state.loading = true
          })
          .addCase(fetchPhotos.fulfilled, (state, action) => {
            state.photos = action.payload
            state.loading = false
          })
      }
})

export const { deletePhotos ,addPhotos } = photosSlice.actions;

export const selectPhotos = (state: RootState) => state.photos.photos
