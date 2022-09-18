import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

export const translationSlice = createSlice({
  name: 'translation',
  initialState: {
    // Default cards being show on page load
    translate: false,
  },
  reducers: {
    translationState: (state, action: PayloadAction<boolean>) => {
      state.translate = action.payload
    }
  },
})

export const { translationState } = translationSlice.actions
export default translationSlice.reducer
// Other code such as selectors can use the imported `RootState` type
export const selectTranslation = (state: RootState) => state.translationState.translate
