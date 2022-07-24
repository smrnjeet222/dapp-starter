import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { mintApi } from "./api/mint"
import ipfsReducer from "./slices/ipfsSlice"

export const store = configureStore({
  reducer: {
    ipfs: ipfsReducer,
    [mintApi.reducerPath]: mintApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mintApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch