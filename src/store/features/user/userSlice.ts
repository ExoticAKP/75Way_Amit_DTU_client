import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface userState {
  name: string
}

const initialState: userState = {
  name: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state,action:PayloadAction<string>) => {
      state.name = action.payload
    },
    resetName: (state) => {
      state.name = ''
    },
    
  },
})

export const { setName, resetName } = userSlice.actions

export const selectCount = (state: RootState) => state.user.name

export default userSlice.reducer