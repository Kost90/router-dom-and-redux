import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import JsonPlaceholderAPI, { User } from '../../api/JsonPlaceholderAPI/JsonPlaceholderAPI'

interface UpdateUserPayload {
  id: number
  updates: Partial<User>
}

const initialUsers: User[] = []

export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async () => {
  const controller = new AbortController()
  const signal = controller.signal
  return await JsonPlaceholderAPI.getUsers({ signal })
})

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updates }: UpdateUserPayload) => {
  const controller = new AbortController()
  const signal = controller.signal
  return (await JsonPlaceholderAPI.updateUser({ id, signal, updates })) as User
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: initialUsers,
    loading: false,
  },
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((u) => u.id !== action.payload)
    },
    changeUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((u) => {
        if (u.id === action.payload.id) {
          return action.payload
        } else {
          return u
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
        state.loading = false
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((u) => {
          if (u.id === action.payload.id) {
            return action.payload
          } else {
            return u
          }
        })
      })
  },
})

export const { addUser, deleteUser, changeUser } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users.users
export const selectUser = (state: RootState, id: number) => state.users.users.find((user) => user.id === id)
