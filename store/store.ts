import { configureStore } from '@reduxjs/toolkit'
import translationReducer from '../slices/translationSlice'
import iconReducer from '../slices/bwSlice'

const store = configureStore({
  reducer: {
    translationState: translationReducer,
    iconState: iconReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store