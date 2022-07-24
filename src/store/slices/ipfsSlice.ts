import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../index'


// Define the initial state using that type
const initialState = {
  name: "",
}

export const ipfsSlice = createSlice({
  name: 'ipfs',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    resetAll: () => initialState
  }
})

export const ipfsActions = ipfsSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default ipfsSlice.reducer