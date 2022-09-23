import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export const iconSlice = createSlice({
  name: 'icon',
  initialState: {
    // Default cards being show on page load
    bw: false,
  },
  reducers: {
    iconState: (state, action: PayloadAction<boolean>) => {
      state.bw = action.payload
    }
  },
})

export const { iconState } = iconSlice.actions
export default iconSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectIcon = (state: RootState) => state.iconState.bw